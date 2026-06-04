import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MedialAxisTransform } from './medialAxis.js';
import { Vector2D } from './utils/vector2d.js';
import { distanceToPolygon, closestPointOnSegment, pointInPolygon, mergePolygonCells } from './utils/geometry.js';
import { RhinoManager } from './utils/RhinoManager.js';
import { PlanarGraph } from './utils/planarGraph.js';

// Application State
const state = {
  polygon: [],
  activePreset: 'tree',
  samplesPerEdge: 25,
  precision: 1e-5,
  showSkeleton: true,
  simplifySkeleton: false,
  mergeThreshold: 2.0, // Default in meters
  pruneBranches: false,
  showRibs: false,
  ribSpacing: 5.0, // Default in meters
  showBays: false,
  structuralBays: [],
  editBaysMode: false,
  selectedBayIndices: [],
  bayEdits: [], // Array of { type: 'delete'|'merge', points: Vector2D[] }
  graphVertexOverrides: new Map(),
  draggedGraphVertexIdx: -1,
  draggedGraphEdgeIdx: -1,
  dragStartMousePos: null,
  planarGraph: null,
  hoverCircle: true,
  showGovernors: true,
  isDrawing: false,
  customVertices: [],
  draggedVertexIdx: -1,
  hoveredMedialPoint: null,
  skeletonData: { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [] },
  computeTime: 0,
  camera: {
    zoom: 1.0 // kept for backward compatibility and HUD display
  },
  mouseWorldPos: null,
};

// Canvas Setup
const canvas = document.getElementById('polygon-canvas');
const wrapper = document.getElementById('canvas-wrapper');

// Three.js State Variables
let renderer, scene, cameraPerspective, cameraOrthographic, cameraActive;
let controls;
let meshesGroup; // Group to hold all dynamic geometric meshes
let rhinoGroup;
let rhinoManager;

const appContext = {
  state,
  rhinoGroup: null,
  setPolygonFrom3dm: (points) => {
    state.polygon = points.map(pt => new Vector2D(pt[0], pt[1]));
    state.activePreset = 'custom';
    
    const cards = document.querySelectorAll('.preset-card');
    cards.forEach(c => c.classList.remove('active'));
    
    const cardCustom = document.getElementById('card-custom');
    if (cardCustom) {
      cardCustom.style.display = 'flex';
      cardCustom.classList.add('active');
    }

    recomputeMAT();
    resetCameraView();
  },
  acceptedRibsCache: null
};
const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Z=0 plane for raycast dragging
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Initialize Three.js 3D Engine
function initThree() {
  const rect = wrapper.getBoundingClientRect();
  const width = Math.max(800, rect.width - 40);
  const height = Math.max(600, rect.height - 40);

  // 1. WebGL Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1.0); // Clean White Canvas Background
  renderer.shadowMap.enabled = true;

  // 2. Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); // Crisp white workspace

  // 3. Perspective Camera
  cameraPerspective = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  cameraPerspective.position.set(0, -600, 600); // Tilted CAD angle
  cameraPerspective.up.set(0, 0, 1); // Z is UP!

  // 4. Orthographic Camera (For precise 2D Top View)
  const aspect = width / height;
  cameraOrthographic = new THREE.OrthographicCamera(-500 * aspect, 500 * aspect, 500, -500, 1, 10000);
  cameraOrthographic.position.set(0, 0, 1000);
  cameraOrthographic.up.set(0, 1, 0); // Y is up in 2D Top View

  cameraActive = cameraPerspective;

  // 5. OrbitControls (3D Arcball Camera)
  controls = new OrbitControls(cameraActive, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.01; // Restrict camera below Z=0 grid floor
  controls.minDistance = 50;
  controls.maxDistance = 3000;

  // 6. Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.4);
  dirLight1.position.set(1000, 800, 1500);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.2);
  dirLight2.position.set(-1000, -800, 1000);
  scene.add(dirLight2);

  // 7. Infinite CAD Grid Floor on XY Plane (Meter grid cells of 10m x 10m)
  const gridHelper = new THREE.GridHelper(2000, 200, 0xe2e8f0, 0xf1f5f9); // Beautiful light gray grid lines
  gridHelper.rotation.x = Math.PI / 2; // Rotate grid to align with XY plane
  gridHelper.position.z = -0.01; // Slightly below Z=0 to prevent z-fighting
  scene.add(gridHelper);

  // 8. Meshes Parent Group
  meshesGroup = new THREE.Group();
  scene.add(meshesGroup);

  rhinoGroup = new THREE.Group();
  scene.add(rhinoGroup);
  appContext.rhinoGroup = rhinoGroup;

  rhinoManager = new RhinoManager(appContext);
  window.rhinoManager = rhinoManager;

  // 9. Resize Canvas
  window.addEventListener('resize', resizeCanvas);
  
  // 10. Start high-performance render loop
  animate();
}

// Map screen/canvas coordinates to 3D world space (Z=0 plane intersection)
function screenToWorld(screenPos) {
  const rect = canvas.getBoundingClientRect();
  mouse.x = (screenPos.x / rect.width) * 2 - 1;
  mouse.y = -(screenPos.y / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, cameraActive);
  const target = new THREE.Vector3();
  raycaster.ray.intersectPlane(planeZ, target);
  return new Vector2D(target.x, target.y);
}

// Map 3D world space coordinate back to 2D screen pixels
function worldToScreen(worldPos) {
  const vec = new THREE.Vector3(worldPos.x, worldPos.y, 0.0);
  vec.project(cameraActive);

  const rect = canvas.getBoundingClientRect();
  return new Vector2D(
    (vec.x * 0.5 + 0.5) * rect.width,
    (-(vec.y * 0.5) + 0.5) * rect.height
  );
}

// Helper to get bounding box center of active shape
function getModelCenter() {
  if (state.polygon.length === 0) return new Vector2D(0, 0);
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  for (const v of state.polygon) {
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
  }
  return new Vector2D((minX + maxX) / 2, (minY + maxY) / 2);
}

function updateCameraHUD() {
  const elInfo = document.getElementById('camera-info');
  if (elInfo) {
    // Zoom representation in 3D: Distance from control target to camera
    const dist = cameraActive.position.distanceTo(controls.target);
    const zoomText = cameraActive.isOrthographicCamera 
      ? `${(1000 / cameraActive.zoom).toFixed(0)}m` 
      : `${(1000 / dist).toFixed(2)}x`;
    elInfo.innerText = `View Scale: ${zoomText}`;
  }
}

// Switch between CAD Top View and 3D Perspective View
function setCameraView(type) {
  const btnPersp = document.getElementById('btn-view-perspective');
  const btnTop = document.getElementById('btn-view-top');

  if (type === 'perspective') {
    cameraActive = cameraPerspective;
    controls.object = cameraActive;
    controls.enableRotate = true; // Allow orbiting
    btnPersp.classList.add('active');
    btnTop.classList.remove('active');
  } else {
    cameraActive = cameraOrthographic;
    
    // Position Orthographic camera straight down looking at model center
    const center = getModelCenter();
    controls.target.set(center.x, center.y, 0);
    cameraOrthographic.position.set(center.x, center.y, 1000);
    cameraOrthographic.up.set(0, 1, 0); // Y is UP in 2D layout

    controls.object = cameraActive;
    controls.enableRotate = false; // Restrict rotation in 2D top view
    btnPersp.classList.remove('active');
    btnTop.classList.add('active');
  }
  controls.update();
  updateCameraHUD();
}

// Auto-fit shape to viewport with 30% boundary padding
function resetCameraView() {
  if (state.polygon.length === 0) {
    controls.target.set(0, 0, 0);
    cameraPerspective.position.set(0, -600, 600);
    cameraOrthographic.position.set(0, 0, 1000);
    cameraOrthographic.zoom = 1.0;
    cameraOrthographic.updateProjectionMatrix();
    controls.update();
    updateCameraHUD();
    return;
  }

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  for (const v of state.polygon) {
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
  }

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const wSpan = maxX - minX || 1;
  const hSpan = maxY - minY || 1;
  const maxSpan = Math.max(wSpan, hSpan);

  // 1. Perspective View Centering
  controls.target.set(cx, cy, 0);
  cameraPerspective.position.set(cx, cy - maxSpan * 1.3, maxSpan * 1.3);

  // 2. Orthographic View Centering
  const rect = wrapper.getBoundingClientRect();
  const width = Math.max(800, rect.width - 40);
  const height = Math.max(600, rect.height - 40);
  const aspect = width / height;
  const size = maxSpan * 1.45;
  
  cameraOrthographic.left = -size * aspect / 2;
  cameraOrthographic.right = size * aspect / 2;
  cameraOrthographic.top = size / 2;
  cameraOrthographic.bottom = -size / 2;
  cameraOrthographic.zoom = 1.0;
  cameraOrthographic.position.set(cx, cy, 1000);
  cameraOrthographic.updateProjectionMatrix();

  controls.update();
  updateCameraHUD();
}

// Resizes renderer viewport bounds smoothly
function resizeCanvas() {
  const rect = wrapper.getBoundingClientRect();
  const width = Math.max(800, rect.width - 40);
  const height = Math.max(600, rect.height - 40);

  // Update cameras aspect
  cameraPerspective.aspect = width / height;
  cameraPerspective.updateProjectionMatrix();

  const aspect = width / height;
  const size = (cameraOrthographic.top - cameraOrthographic.bottom);
  cameraOrthographic.left = -size * aspect / 2;
  cameraOrthographic.right = size * aspect / 2;
  cameraOrthographic.updateProjectionMatrix();

  renderer.setSize(width, height);
  updateCameraHUD();
}

// Loads a preset shape and triggers computation
function loadPreset(name) {
  state.activePreset = name;
  const rect = wrapper.getBoundingClientRect();
  const w = Math.max(800, rect.width - 40);
  const h = Math.max(600, rect.height - 40);

  if (name !== 'custom') {
    state.polygon = presets[name](w, h);
    state.isDrawing = false;
    document.getElementById('btn-clear-custom').style.display = 'none';
    document.getElementById('drawing-indicator').style.display = 'none';
    document.getElementById('card-custom').style.display = 'none';
  }
  recomputeMAT();
  resetCameraView();
}

// Polygon Presets Generators (centered around 0,0 in world space - working in meters)
const presets = {
  cross: (w, h) => {
    const s = 100; // 100 meters
    const cx = 0, cy = 0;
    return [
      new Vector2D(cx - s*0.1, cy + s*0.3),
      new Vector2D(cx + s*0.1, cy + s*0.3),
      new Vector2D(cx + s*0.1, cy + s*0.1),
      new Vector2D(cx + s*0.3, cy + s*0.1),
      new Vector2D(cx + s*0.3, cy - s*0.1),
      new Vector2D(cx + s*0.1, cy - s*0.1),
      new Vector2D(cx + s*0.1, cy - s*0.3),
      new Vector2D(cx - s*0.1, cy - s*0.3),
      new Vector2D(cx - s*0.1, cy - s*0.1),
      new Vector2D(cx - s*0.3, cy - s*0.1),
      new Vector2D(cx - s*0.3, cy + s*0.1),
      new Vector2D(cx - s*0.1, cy + s*0.1)
    ];
  },
  yshape: (w, h) => {
    const s = 100; // 100 meters
    const cx = 0, cy = 0;
    return [
      new Vector2D(cx + s*0.1, cy - s*0.4),
      new Vector2D(cx + s*0.1, cy - s*0.1),
      new Vector2D(cx + s*0.4, cy + s*0.4),
      new Vector2D(cx + s*0.2, cy + s*0.4),
      new Vector2D(cx,         cy + s*0.1),
      new Vector2D(cx - s*0.2, cy + s*0.4),
      new Vector2D(cx - s*0.4, cy + s*0.4),
      new Vector2D(cx - s*0.1, cy - s*0.1),
      new Vector2D(cx - s*0.1, cy - s*0.4)
    ];
  },
  sqdonut: (w, h) => {
    const s = 100; // 100 meters
    const cx = 0, cy = 0;
    return [
      new Vector2D(cx - s*0.01, cy + s*0.3),
      new Vector2D(cx - s*0.3,  cy + s*0.3),
      new Vector2D(cx - s*0.3,  cy - s*0.3),
      new Vector2D(cx + s*0.3,  cy - s*0.3),
      new Vector2D(cx + s*0.3,  cy + s*0.3),
      new Vector2D(cx + s*0.01, cy + s*0.3),
      new Vector2D(cx + s*0.01, cy + s*0.1),
      new Vector2D(cx + s*0.1,  cy + s*0.1),
      new Vector2D(cx + s*0.1,  cy - s*0.1),
      new Vector2D(cx - s*0.1,  cy - s*0.1),
      new Vector2D(cx - s*0.1,  cy + s*0.1),
      new Vector2D(cx - s*0.01, cy + s*0.1)
    ];
  },
  donut: (w, h) => {
    const s = 100; // 100 meters
    const cx = 0, cy = 0;
    const points = [];
    const numSegments = 32;
    const dTheta = 0.05;

    for (let i = 0; i <= numSegments; i++) {
      const angle = dTheta + (Math.PI * 2 - 2 * dTheta) * (i / numSegments);
      points.push(new Vector2D(cx + Math.cos(angle) * s * 0.4, cy - Math.sin(angle) * s * 0.4));
    }
    for (let i = 0; i <= numSegments; i++) {
      const angle = (Math.PI * 2 - dTheta) - (Math.PI * 2 - 2 * dTheta) * (i / numSegments);
      points.push(new Vector2D(cx + Math.cos(angle) * s * 0.2, cy - Math.sin(angle) * s * 0.2));
    }
    return points;
  },
  pentagon: (w, h) => {
    const s = 100; // 100 meters
    const cx = 0, cy = 0;
    return [
      new Vector2D(cx - s * 0.05, cy + s * 0.4),
      new Vector2D(cx - s * 0.45, cy + s * 0.15),
      new Vector2D(cx - s * 0.25, cy - s * 0.4),
      new Vector2D(cx + s * 0.35, cy - s * 0.35),
      new Vector2D(cx + s * 0.4,  cy + s * 0.1)
    ];
  },
  tree: (w, h) => {
    const s = 100; // 100 meters
    const cx = 0, cy = 0;
    return [
      new Vector2D(cx + s*0.1,  cy - s*0.4),
      new Vector2D(cx + s*0.1,  cy - s*0.1),
      new Vector2D(cx + s*0.4,  cy - s*0.1),
      new Vector2D(cx + s*0.4,  cy + s*0.05),
      new Vector2D(cx + s*0.1,  cy + s*0.05),
      new Vector2D(cx + s*0.1,  cy + s*0.2),
      new Vector2D(cx + s*0.3,  cy + s*0.4),
      new Vector2D(cx + s*0.15, cy + s*0.4),
      new Vector2D(cx,          cy + s*0.25),
      new Vector2D(cx - s*0.15, cy + s*0.4),
      new Vector2D(cx - s*0.3,  cy + s*0.4),
      new Vector2D(cx - s*0.1,  cy + s*0.2),
      new Vector2D(cx - s*0.1,  cy + s*0.05),
      new Vector2D(cx - s*0.4,  cy + s*0.05),
      new Vector2D(cx - s*0.4,  cy - s*0.1),
      new Vector2D(cx - s*0.1,  cy - s*0.1),
      new Vector2D(cx - s*0.1,  cy - s*0.4)
    ];
  }
};

// Computes centroid of a polygon
export function getCentroid(pts) {
  let sx = 0, sy = 0;
  pts.forEach(p => { sx += p.x; sy += p.y; });
  return new Vector2D(sx / pts.length, sy / pts.length);
}

// Find index of the cell matching a tracking point
export function findMatchingBayIndex(bays, pt) {
  // 1. Check point-in-polygon
  for (let i = 0; i < bays.length; i++) {
    if (pointInPolygon(pt, bays[i])) {
      return i;
    }
  }
  // 2. Fallback to closest centroid
  let minDist = Infinity;
  let bestIdx = -1;
  for (let i = 0; i < bays.length; i++) {
    const c = getCentroid(bays[i]);
    const d = c.dist(pt);
    if (d < minDist) {
      minDist = d;
      bestIdx = i;
    }
  }
  return bestIdx;
}

// Applies edits history to newly extracted raw bays
export function applyBayEdits(rawBays, edits) {
  let activeBays = rawBays.map(cell => cell.map(pt => new Vector2D(pt.x, pt.y)));
  
  for (const edit of edits) {
    if (edit.type === 'delete') {
      const idx = findMatchingBayIndex(activeBays, edit.point);
      if (idx !== -1) {
        activeBays.splice(idx, 1);
      }
    } else if (edit.type === 'merge') {
      const matchIndices = [];
      for (const pt of edit.points) {
        const idx = findMatchingBayIndex(activeBays, pt);
        if (idx !== -1 && !matchIndices.includes(idx)) {
          matchIndices.push(idx);
        }
      }
      
      if (matchIndices.length >= 2) {
        // Sort descending to splice safely
        matchIndices.sort((a, b) => b - a);
        const cellsToMerge = [];
        for (const idx of matchIndices) {
          cellsToMerge.push(activeBays[idx]);
          activeBays.splice(idx, 1);
        }
        
        const mergedCell = mergePolygonCells(cellsToMerge);
        if (mergedCell) {
          activeBays.push(mergedCell);
        } else {
          // If merge failed, put them back
          for (const cell of cellsToMerge) {
            activeBays.push(cell);
          }
        }
      }
    }
  }
  
  return activeBays;
}

function isEdgeInAnyActiveBay(ptU, ptV, activeBays, tolerance = 1e-3) {
  for (const bay of activeBays) {
    for (let i = 0; i < bay.length; i++) {
      const p1 = bay[i];
      const p2 = bay[(i + 1) % bay.length];
      const matchNormal = (p1.dist(ptU) < tolerance && p2.dist(ptV) < tolerance);
      const matchReverse = (p1.dist(ptV) < tolerance && p2.dist(ptU) < tolerance);
      if (matchNormal || matchReverse) {
        return true;
      }
    }
  }
  return false;
}

function filterPlanarGraphByActiveBays(graph, activeBays) {
  const filteredEdges = [];
  for (const edge of graph.edges) {
    const u = edge[0];
    const v = edge[1];
    const type = edge[2];
    
    // Outer boundary edges are always preserved
    if (type === 'boundary') {
      filteredEdges.push(edge);
      continue;
    }
    
    const ptU = graph.vertices[u];
    const ptV = graph.vertices[v];
    if (isEdgeInAnyActiveBay(ptU, ptV, activeBays, graph.vertexTolerance)) {
      filteredEdges.push(edge);
    }
  }
  
  const usedVertexIndices = new Set();
  for (const [u, v] of filteredEdges) {
    usedVertexIndices.add(u);
    usedVertexIndices.add(v);
  }
  
  const newVertices = [];
  const newOriginalVertices = [];
  const indexMap = new Map();
  
  for (let i = 0; i < graph.vertices.length; i++) {
    if (usedVertexIndices.has(i)) {
      indexMap.set(i, newVertices.length);
      newVertices.push(graph.vertices[i]);
      newOriginalVertices.push(graph.originalVertices[i]);
    }
  }
  
  const mappedEdges = filteredEdges.map(edge => {
    return [
      indexMap.get(edge[0]),
      indexMap.get(edge[1]),
      edge[2]
    ];
  });
  
  graph.vertices = newVertices;
  graph.originalVertices = newOriginalVertices;
  graph.edges = mappedEdges;
}

// Compute the Medial Axis Transform using core library class
function recomputeMAT() {
  if (state.polygon.length < 3) {
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    draw();
    return;
  }

  const start = performance.now();
  
  // Initialize MAT with user tolerances
  const mat = new MedialAxisTransform(state.polygon, {
    epsilon: state.activePreset !== 'custom' ? 0.5 : state.precision,
    tangentEpsilon: state.precision * 10.0,
  });

  // Perform structured tracing
  const skeleton = mat.computeStructuredSkeleton(state.samplesPerEdge);
  
  // Compute simplified straight branches & merged nodes
  const { segments, nodes } = mat.simplifySkeleton(
    skeleton.regularPoints, 
    skeleton.junctionPoints, 
    state.mergeThreshold
  );
  
  // Store original coordinates and match with graph overrides
  for (const node of nodes) {
    node.origX = node.x;
    node.origY = node.y;
    
    let foundOverride = null;
    for (const [keyStr, val] of state.graphVertexOverrides.entries()) {
      const parts = keyStr.split(',');
      const kx = parseFloat(parts[0]);
      const ky = parseFloat(parts[1]);
      const dist = Math.hypot(node.origX - kx, node.origY - ky);
      if (dist < 0.1) { // 10cm tolerance
        foundOverride = val;
        break;
      }
    }
    if (foundOverride) {
      node.x = foundOverride.x;
      node.y = foundOverride.y;
    }
  }

  skeleton.simplifiedSegments = segments;
  skeleton.simplifiedNodes = nodes;

  state.skeletonData = skeleton;

  // Build Planar Graph to extract structural bays/enclosed cells
  if (state.polygon.length >= 3) {
    const graph = new PlanarGraph(1e-3, state.graphVertexOverrides);
    state.planarGraph = graph;
    
    // A. Add boundary edges
    for (let i = 0; i < state.polygon.length; i++) {
      graph.addEdge(state.polygon[i], state.polygon[(i + 1) % state.polygon.length], 'boundary');
    }
    
    // B. Add skeleton segments
    if (state.showSkeleton) {
      if (state.simplifySkeleton) {
        const segmentsToUse = state.pruneBranches
          ? skeleton.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
          : skeleton.simplifiedSegments;
        for (const seg of segmentsToUse) {
          graph.addEdge(seg.start, seg.end, 'skeleton');
        }
      } else {
        const samples = state.samplesPerEdge;
        const pts = skeleton.regularPoints;
        for (let i = 0; i < state.polygon.length; i++) {
          for (let j = 0; j < samples - 1; j++) {
            const idx1 = i * samples + j;
            const idx2 = i * samples + (j + 1);
            if (pts[idx1] && pts[idx2]) {
              graph.addEdge(pts[idx1], pts[idx2], 'skeleton');
            }
          }
        }
      }
    }
    
    // C. Add accepted ribs (when showRibs is ON and we have simplified segments)
    if (state.showSkeleton && state.showRibs && state.simplifySkeleton) {
      const acceptedRibs = computeAcceptedRibs();
      for (let idx = 0; idx < acceptedRibs.length; idx++) {
        const rib = acceptedRibs[idx];
        graph.addEdge(rib.source, rib.target, `rib_${idx}`);
      }
    }
    
    // D. Extract faces and apply edits
    const rawBays = graph.extractFaces();
    state.structuralBays = applyBayEdits(rawBays, state.bayEdits);
    
    // Synchronize graph: filter out edges not on active bay boundaries
    filterPlanarGraphByActiveBays(graph, state.structuralBays);
    
    console.log(`[PlanarGraph] Extracted raw ${rawBays.length} bays, applied edits to get ${state.structuralBays.length} bays.`);
  } else {
    state.structuralBays = [];
  }

  state.computeTime = performance.now() - start;

  // Sync visibility of merge distance and ribs sliders
  const containerMerge = document.getElementById('container-merge-slider');
  if (containerMerge) {
    containerMerge.style.display = state.simplifySkeleton ? 'block' : 'none';
  }
  const containerRibs = document.getElementById('container-ribs-slider');
  if (containerRibs) {
    containerRibs.style.display = state.showRibs ? 'block' : 'none';
  }

  // Update Status HUD
  document.getElementById('stats-render-time').innerText = `Computation: ${state.computeTime.toFixed(1)}ms`;
  const count = state.skeletonData.regularPoints.length + state.skeletonData.junctionPoints.length;
  const segmentsCount = state.skeletonData.simplifiedSegments.length;
  const nodesCount = state.skeletonData.simplifiedNodes.length;
  const statusMsg = state.simplifySkeleton 
    ? `Simplified skeleton to ${nodesCount} merged nodes and ${segmentsCount} straight branches.`
    : `Computed ${count} medial points successfully.`;
  document.getElementById('status-text').innerText = statusMsg;

  state.hoveredMedialPoint = null;
  draw();
}

const crossesPolygonBoundary = (p1, p2, polygon) => {
  const shrink = 1e-3;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  
  const p1Prime = new Vector2D(p1.x + dx * shrink, p1.y + dy * shrink);
  const p2Prime = new Vector2D(p2.x - dx * shrink, p2.y - dy * shrink);

  const ccw = (a, b, c) => (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
  const segmentsIntersect = (a, b, c, d) => {
    return (ccw(a, c, d) !== ccw(b, c, d)) && (ccw(a, b, c) !== ccw(a, b, d));
  };

  for (let i = 0; i < polygon.length; i++) {
    const c = polygon[i];
    const d = polygon[(i + 1) % polygon.length];
    if (segmentsIntersect(p1Prime, p2Prime, c, d)) {
      return true;
    }
  }
  return false;
};

function computeAcceptedRibs() {
  if (!state.showRibs || state.polygon.length < 3 || !state.skeletonData || !state.skeletonData.simplifiedSegments) {
    return [];
  }

  const segmentsToDivide = state.pruneBranches
    ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
    : state.skeletonData.simplifiedSegments;

  const candidateRibs = [];

  // 1. Draw segment division ribs
  for (const seg of segmentsToDivide) {
    const startPt = seg.start;
    const endPt = seg.end;
    const vec = endPt.sub(startPt);
    const len = vec.length();
    const N = Math.max(1, Math.round(len / state.ribSpacing));

    // Original points and vector
    const startPtOrig = new Vector2D(startPt.origX, startPt.origY);
    const endPtOrig = new Vector2D(endPt.origX, endPt.origY);
    const vecOrig = endPtOrig.sub(startPtOrig);

    for (let k = 1; k < N; k++) {
      const t = k / N;
      const D_k = startPt.add(vec.scale(t));
      const D_k_orig = startPtOrig.add(vecOrig.scale(t));
      D_k.origX = D_k_orig.x;
      D_k.origY = D_k_orig.y;

      const candidates = [];
      for (let i = 0; i < state.polygon.length; i++) {
        const v1 = state.polygon[i];
        const v2 = state.polygon[(i + 1) % state.polygon.length];
        const cp = closestPointOnSegment(D_k, v1, v2);
        const dist = D_k.dist(cp);
        const cpOrig = closestPointOnSegment(D_k_orig, v1, v2);
        candidates.push({
          point: cp,
          pointOrig: cpOrig,
          dist: dist,
          vector: cp.sub(D_k).normalize()
        });
      }
      candidates.sort((a, b) => a.dist - b.dist);

      const closest1 = candidates[0];
      const target1 = new Vector2D(closest1.point.x, closest1.point.y);
      target1.origX = closest1.pointOrig.x;
      target1.origY = closest1.pointOrig.y;

      let closest2 = null;
      let target2 = null;
      for (let i = 1; i < candidates.length; i++) {
        const cand = candidates[i];
        if (closest1.vector.dot(cand.vector) < 0.5) {
          closest2 = cand;
          target2 = new Vector2D(closest2.point.x, closest2.point.y);
          target2.origX = closest2.pointOrig.x;
          target2.origY = closest2.pointOrig.y;
          break;
        }
      }

      candidateRibs.push({
        source: D_k,
        target: target1,
        priority: 1
      });
      if (closest2) {
        candidateRibs.push({
          source: D_k,
          target: target2,
          priority: 2
        });
      }
    }
  }

  // 2. Draw active junction nodes 3-directional ribs
  const activeInternalNodes = new Set();
  for (const seg of segmentsToDivide) {
    if (!seg.start.isEndPoint) activeInternalNodes.add(seg.start);
    if (!seg.end.isEndPoint) activeInternalNodes.add(seg.end);
  }

  for (const node of activeInternalNodes) {
    const nodeOrig = new Vector2D(node.origX, node.origY);
    const candidates = [];
    for (let i = 0; i < state.polygon.length; i++) {
      const v1 = state.polygon[i];
      const v2 = state.polygon[(i + 1) % state.polygon.length];
      const cp = closestPointOnSegment(node, v1, v2);
      const dist = node.dist(cp);
      const cpOrig = closestPointOnSegment(nodeOrig, v1, v2);
      candidates.push({
        point: cp,
        pointOrig: cpOrig,
        dist: dist,
        vector: cp.sub(node).normalize()
      });
    }
    candidates.sort((a, b) => a.dist - b.dist);

    const closest1 = candidates[0];
    const target1 = new Vector2D(closest1.point.x, closest1.point.y);
    target1.origX = closest1.pointOrig.x;
    target1.origY = closest1.pointOrig.y;

    let closest2 = null;
    let target2 = null;
    let closest3 = null;
    let target3 = null;

    for (let i = 1; i < candidates.length; i++) {
      const cand = candidates[i];
      if (closest1.vector.dot(cand.vector) < 0.5) {
        closest2 = cand;
        target2 = new Vector2D(closest2.point.x, closest2.point.y);
        target2.origX = closest2.pointOrig.x;
        target2.origY = closest2.pointOrig.y;
        break;
      }
    }

    if (closest2) {
      for (let i = 1; i < candidates.length; i++) {
        const cand = candidates[i];
        if (cand === closest2) continue;
        if (closest1.vector.dot(cand.vector) < 0.5 && closest2.vector.dot(cand.vector) < 0.5) {
          closest3 = cand;
          target3 = new Vector2D(closest3.point.x, closest3.point.y);
          target3.origX = closest3.pointOrig.x;
          target3.origY = closest3.pointOrig.y;
          break;
        }
      }
    }

    candidateRibs.push({
      source: node,
      target: target1,
      priority: 1
    });
    if (closest2) {
      candidateRibs.push({
        source: node,
        target: target2,
        priority: 2
      });
    }
    if (closest3) {
      candidateRibs.push({
        source: node,
        target: target3,
        priority: 3
      });
    }
  }

  const sortedCandidates = candidateRibs.map(r => ({
    ...r,
    length: r.source.dist(r.target)
  })).sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.length - b.length;
  });

  const ribsCross = (r1, r2) => {
    if (r1.source.dist(r2.source) < 1e-3 || r1.target.dist(r2.target) < 1e-3 ||
        r1.source.dist(r2.target) < 1e-3 || r1.target.dist(r2.source) < 1e-3) {
      return false;
    }
    const ccw = (a, b, c) => (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
    return (ccw(r1.source, r2.source, r2.target) !== ccw(r1.target, r2.source, r2.target)) && 
           (ccw(r1.source, r1.target, r2.source) !== ccw(r1.source, r1.target, r2.target));
  };

  const acceptedRibs = [];
  for (const candidate of sortedCandidates) {
    if (crossesPolygonBoundary(candidate.source, candidate.target, state.polygon)) {
      continue;
    }
    let crossesAccepted = false;
    for (const accepted of acceptedRibs) {
      if (ribsCross(candidate, accepted)) {
        crossesAccepted = true;
        break;
      }
    }
    if (!crossesAccepted) {
      acceptedRibs.push(candidate);
    }
  }

  return acceptedRibs;
}

// 3D Scene Geometry Builder (Clears and populates meshesGroup)
function draw() {
  if (!meshesGroup) return;

  // 1. Clear previous dynamic 3D meshes
  while (meshesGroup.children.length > 0) {
    const child = meshesGroup.children[0];
    meshesGroup.remove(child);
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose());
      } else {
        child.material.dispose();
      }
    }
  }

  // 2. Draw Polygon Face & Outlines
  if (state.polygon.length >= 3) {
    // Flat Translucent Indigo Polygon Face Fill
    const shape = new THREE.Shape();
    shape.moveTo(state.polygon[0].x, state.polygon[0].y);
    for (let i = 1; i < state.polygon.length; i++) {
      shape.lineTo(state.polygon[i].x, state.polygon[i].y);
    }
    shape.closePath();

    const faceGeom = new THREE.ShapeGeometry(shape);
    const faceMat = new THREE.MeshBasicMaterial({
      color: 0x374151, // Dark Slate Grey
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const faceMesh = new THREE.Mesh(faceGeom, faceMat);
    faceMesh.position.z = 0.005; // Slightly off the grid floor
    meshesGroup.add(faceMesh);



    // Polygon Thick Boundary Outline (Slightly raised Z to overlay clean)
    const boundaryPts = state.polygon.map(p => new THREE.Vector3(p.x, p.y, 0.02));
    boundaryPts.push(boundaryPts[0]); // Close boundary
    const boundaryGeom = new THREE.BufferGeometry().setFromPoints(boundaryPts);
    const boundaryMat = new THREE.LineBasicMaterial({
      color: 0x374151, // Dark Slate Grey
      linewidth: 2.0
    });
    const boundaryLine = new THREE.Line(boundaryGeom, boundaryMat);
    meshesGroup.add(boundaryLine);
  }

  // 3. Custom Polygon Drawing Preview
  if (state.isDrawing && state.customVertices.length > 0) {
    const previewPts = state.customVertices.map(v => new THREE.Vector3(v.x, v.y, 0.025));
    
    // Live dashed line tracking cursor position
    if (state.mouseWorldPos) {
      previewPts.push(new THREE.Vector3(state.mouseWorldPos.x, state.mouseWorldPos.y, 0.025));
      
      if (state.customVertices.length >= 3) {
        // Line linking back to first vertex to preview closing
        previewPts.push(new THREE.Vector3(state.customVertices[0].x, state.customVertices[0].y, 0.025));
      }
    }

    if (previewPts.length >= 2) {
      const previewGeom = new THREE.BufferGeometry().setFromPoints(previewPts);
      const previewMat = new THREE.LineBasicMaterial({
        color: 0x4b5563, // Dark Slate Grey
        linewidth: 1.5
      });
      const previewLine = new THREE.Line(previewGeom, previewMat);
      meshesGroup.add(previewLine);
    }

    // Custom points discs
    const customSphGeom = new THREE.CircleGeometry(0.7, 32);
    for (let i = 0; i < state.customVertices.length; i++) {
      const v = state.customVertices[i];
      const isFirst = i === 0 && state.customVertices.length >= 3;
      let isNearFirst = false;
      if (isFirst && state.mouseWorldPos) {
        const d = Math.sqrt((v.x - state.mouseWorldPos.x)**2 + (v.y - state.mouseWorldPos.y)**2);
        isNearFirst = d < 2.0; // 2.0 world meters closure threshold
      }

      const customSphMat = new THREE.MeshBasicMaterial({
        color: isNearFirst ? 0x10b981 : (isFirst ? 0x374151 : 0x4b5563)
      });
      const customSphMesh = new THREE.Mesh(customSphGeom, customSphMat);
      customSphMesh.position.set(v.x, v.y, 0.03);
      meshesGroup.add(customSphMesh);
    }
  }

  // 4. Draw Medial Axis Skeleton
  if (state.showSkeleton && state.polygon.length >= 3) {
    const pts = state.skeletonData.regularPoints;

    if (state.simplifySkeleton) {
      // Render Simplified MST straight branches as elegant thick lines
      const segmentsToDraw = state.pruneBranches
        ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
        : state.skeletonData.simplifiedSegments;

      const simplifiedLineMat = new THREE.LineBasicMaterial({
        color: 0x374151, // Dark Slate Grey
        linewidth: 3.5
      });

      for (const seg of segmentsToDraw) {
        const linePts = [
          new THREE.Vector3(seg.start.x, seg.start.y, 0.035),
          new THREE.Vector3(seg.end.x, seg.end.y, 0.035)
        ];
        const geom = new THREE.BufferGeometry().setFromPoints(linePts);
        const line = new THREE.Line(geom, simplifiedLineMat);
        meshesGroup.add(line);
      }
    } else {
      // Render Default curved skeleton lines
      const samples = state.samplesPerEdge;
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x6b7280, // Medium Slate Grey
        transparent: true,
        opacity: 0.65,
        linewidth: 1.5
      });

      for (let i = 0; i < state.polygon.length; i++) {
        const pointsVec3 = [];
        for (let j = 0; j < samples; j++) {
          const idx = i * samples + j;
          if (pts[idx]) {
            pointsVec3.push(new THREE.Vector3(pts[idx].x, pts[idx].y, 0.025));
          }
        }
        if (pointsVec3.length >= 2) {
          const curveGeom = new THREE.BufferGeometry().setFromPoints(pointsVec3);
          const line = new THREE.Line(curveGeom, curveMat);
          meshesGroup.add(line);
        }
      }

      // Small beads along standard curves (discs instead of 3D spheres)
      const regularBeadGeom = new THREE.CircleGeometry(0.12, 16);
      const regularBeadMat = new THREE.MeshBasicMaterial({ color: 0x6b7280 });
      for (const p of pts) {
        const bead = new THREE.Mesh(regularBeadGeom, regularBeadMat);
        bead.position.set(p.x, p.y, 0.03);
        meshesGroup.add(bead);
      }
    }

    // Draw valence 3+ Junction/End node discs
    let nodesToDraw = state.simplifySkeleton 
      ? state.skeletonData.simplifiedNodes 
      : state.skeletonData.junctionPoints;

    if (state.pruneBranches) {
      nodesToDraw = nodesToDraw.filter(p => !p.isEndPoint);
    }

    for (const jp of nodesToDraw) {
      const rad = jp.isEndPoint ? 0.3 : 0.45; // Meter radius (smaller black circles)
      const nodeGeom = new THREE.CircleGeometry(rad, 32);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: jp.isEndPoint ? 0x4b5563 : 0x374151
      });
      const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
      nodeMesh.position.set(jp.x, jp.y, 0.035);
      meshesGroup.add(nodeMesh);

      // Concentric flat dashed (dotted) circle helper around nodes
      const circlePts = [];
      const segments = 32;
      const circleRadius = rad * 1.65;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        circlePts.push(new THREE.Vector3(jp.x + Math.cos(theta) * circleRadius, jp.y + Math.sin(theta) * circleRadius, 0.035));
      }
      const ringGeom = new THREE.BufferGeometry().setFromPoints(circlePts);
      const ringMat = new THREE.LineDashedMaterial({
        color: jp.isEndPoint ? 0x4b5563 : 0x374151,
        transparent: true,
        opacity: 0.4,
        dashSize: 0.15,
        gapSize: 0.1
      });
      const ringLine = new THREE.Line(ringGeom, ringMat);
      ringLine.computeLineDistances();
      meshesGroup.add(ringLine);
    }

    // Render Structural Ribs dropping columns to boundary
    if (state.showRibs) {
      const acceptedRibs = computeAcceptedRibs();
      appContext.acceptedRibsCache = acceptedRibs; // Cache for 3DM export

      const beadGeom = new THREE.CircleGeometry(0.15, 16);
      const beadMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White spine division discs

      const ribMat = new THREE.LineBasicMaterial({
        color: 0x4b5563, // Slate grey rib vector lines
        transparent: true,
        opacity: 0.65
      });

      const contactGeom = new THREE.CircleGeometry(0.2, 16);
      const contactMat = new THREE.MeshBasicMaterial({ color: 0x4b5563 });

      // Draw spine beads
      for (const rib of acceptedRibs) {
        const bead = new THREE.Mesh(beadGeom, beadMat);
        bead.position.set(rib.source.x, rib.source.y, 0.038);
        meshesGroup.add(bead);
      }

      // Draw all accepted ribs
      for (const rib of acceptedRibs) {
        const rPts = [
          new THREE.Vector3(rib.source.x, rib.source.y, 0.038),
          new THREE.Vector3(rib.target.x, rib.target.y, 0.038)
        ];
        const rGeom = new THREE.BufferGeometry().setFromPoints(rPts);
        const rLine = new THREE.Line(rGeom, ribMat);
        meshesGroup.add(rLine);

        const contactMesh = new THREE.Mesh(contactGeom, contactMat);
        contactMesh.position.set(rib.target.x, rib.target.y, 0.038);
        meshesGroup.add(contactMesh);
      }
    }
  }

  if (state.hoverCircle && state.hoveredMedialPoint && state.polygon.length >= 3) {
    const hp = state.hoveredMedialPoint;
    const rad = hp.radius;

    // Outer flat ring outline
    const ringGeom = new THREE.RingGeometry(rad - 0.2, rad + 0.2, 64); // Thinner outline in meters
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x374151, // Dark Slate Grey
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.set(hp.x, hp.y, 0.045);
    meshesGroup.add(ring);

    // Soft colored transparent interior glow disc
    const discGeom = new THREE.CircleGeometry(rad, 64);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x374151,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const disc = new THREE.Mesh(discGeom, discMat);
    disc.position.set(hp.x, hp.y, 0.04);
    meshesGroup.add(disc);

    // Glowing core center disc (scaled down for meters)
    const centerGeom = new THREE.CircleGeometry(0.6, 16);
    const centerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centerMesh = new THREE.Mesh(centerGeom, centerMat);
    centerMesh.position.set(hp.x, hp.y, 0.048);
    meshesGroup.add(centerMesh);

    // Governors tangency line indicators
    if (state.showGovernors) {
      const govLineMat = new THREE.LineBasicMaterial({
        color: 0x4b5563, // Slate Grey
        linewidth: 1.5
      });
      const govSphGeom = new THREE.CircleGeometry(0.5, 16); // Scaled down for meters
      const govSphMat = new THREE.MeshBasicMaterial({ color: 0x4b5563 });

      for (let i = 0; i < state.polygon.length; i++) {
        const v1 = state.polygon[i];
        const v2 = state.polygon[(i + 1) % state.polygon.length];
        const cp = closestPointOnSegment(hp, v1, v2);

        if (Math.abs(hp.dist(cp) - rad) < 0.2) {
          const govPts = [
            new THREE.Vector3(hp.x, hp.y, 0.046),
            new THREE.Vector3(cp.x, cp.y, 0.046)
          ];
          const govGeom = new THREE.BufferGeometry().setFromPoints(govPts);
          const govLine = new THREE.Line(govGeom, govLineMat);
          meshesGroup.add(govLine);

          const govMesh = new THREE.Mesh(govSphGeom, govSphMat);
          govMesh.position.set(cp.x, cp.y, 0.046);
          meshesGroup.add(govMesh);
        }
      }
    }
  }

  // Render Enclosed Cells / Structural Bays
  if (state.showBays && state.structuralBays && state.structuralBays.length > 0) {
    state.structuralBays.forEach((cell, idx) => {
      if (cell.length >= 3) {
        // Create 2D Shape
        const cellShape = new THREE.Shape();
        cellShape.moveTo(cell[0].x, cell[0].y);
        for (let k = 1; k < cell.length; k++) {
          cellShape.lineTo(cell[k].x, cell[k].y);
        }
        cellShape.closePath();

        const isSelected = state.selectedBayIndices.includes(idx);
        
        // Muted pastel HSL colors, or highlight orange if selected
        const colorVal = isSelected 
          ? new THREE.Color('hsl(25, 95%, 55%)')
          : new THREE.Color(`hsl(${(idx * 137.5) % 360}, 45%, 60%)`);
        const opacityVal = isSelected ? 0.45 : 0.15;

        const bayGeom = new THREE.ShapeGeometry(cellShape);
        const bayMat = new THREE.MeshBasicMaterial({
          color: colorVal,
          transparent: true,
          opacity: opacityVal,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        const bayMesh = new THREE.Mesh(bayGeom, bayMat);
        bayMesh.position.z = 0.015; // Raised slightly above boundary grid
        meshesGroup.add(bayMesh);

        // Sub-divided boundary outlines for each cell (clean dark thin dashed lines, or solid orange if selected)
        const cellPts = cell.map(p => new THREE.Vector3(p.x, p.y, 0.018));
        cellPts.push(cellPts[0]); // Close loop
        const outlineGeom = new THREE.BufferGeometry().setFromPoints(cellPts);
        
        let outlineLine;
        if (isSelected) {
          const outlineMat = new THREE.LineBasicMaterial({
            color: 0xe65100, // Rich Dark Orange
            linewidth: 2.5
          });
          outlineLine = new THREE.Line(outlineGeom, outlineMat);
        } else {
          const outlineMat = new THREE.LineDashedMaterial({
            color: 0x4b5563, // Slate Grey
            transparent: true,
            opacity: 0.35,
            dashSize: 0.2,
            gapSize: 0.15
          });
          outlineLine = new THREE.Line(outlineGeom, outlineMat);
          outlineLine.computeLineDistances();
        }
        meshesGroup.add(outlineLine);
      }
    });
  }

  // 6. Interactive Polygon Vertices Drag Handles (Chrome Indigo Discs - Scaled down for meters)
  if (!state.isDrawing && !state.editBaysMode && state.polygon.length > 0) {
    const handleGeom = new THREE.CircleGeometry(1.0, 32);
    const coreGeom = new THREE.CircleGeometry(0.3, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < state.polygon.length; i++) {
      const v = state.polygon[i];
      const handleMat = new THREE.MeshBasicMaterial({
        color: 0x374151, // Dark Slate Grey
      });

      const handle = new THREE.Mesh(handleGeom, handleMat);
      handle.position.set(v.x, v.y, 0.03);
      handle.userData = { isHandle: true, index: i }; // Raycast tag
      meshesGroup.add(handle);

      // Embedded white core
      const core = new THREE.Mesh(coreGeom, coreMat);
      core.position.set(v.x, v.y, 0.038);
      meshesGroup.add(core);
    }
  }

  // 7. Interactive Graph Vertices and Edges Drag Handles in Edit Bays Mode
  if (!state.isDrawing && state.editBaysMode && state.showBays && state.planarGraph) {
    // A. Render selectable Graph Edges
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x4f46e5, // Elegant indigo color
      linewidth: 3.5,
      transparent: true,
      opacity: 0.8
    });
    
    state.planarGraph.edges.forEach((edge, idx) => {
      const u = edge[0];
      const v = edge[1];
      const ptU = state.planarGraph.vertices[u];
      const ptV = state.planarGraph.vertices[v];
      if (ptU && ptV) {
        const edgePts = [
          new THREE.Vector3(ptU.x, ptU.y, 0.032),
          new THREE.Vector3(ptV.x, ptV.y, 0.032)
        ];
        const geom = new THREE.BufferGeometry().setFromPoints(edgePts);
        const line = new THREE.Line(geom, edgeMat);
        line.userData = { isGraphEdge: true, index: idx, u, v };
        meshesGroup.add(line);
      }
    });

    // B. Render draggable Graph Vertices
    const vertexGeom = new THREE.CircleGeometry(0.5, 32); // 0.5m radius handle
    const innerGeom = new THREE.CircleGeometry(0.18, 16);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    state.planarGraph.vertices.forEach((v, i) => {
      const vertexMat = new THREE.MeshBasicMaterial({
        color: 0x4f46e5, // Elegant indigo matching edges
        transparent: true,
        opacity: 0.95
      });
      
      const vMesh = new THREE.Mesh(vertexGeom, vertexMat);
      vMesh.position.set(v.x, v.y, 0.035);
      vMesh.userData = { isGraphVertex: true, index: i };
      meshesGroup.add(vMesh);

      // Embedded white inner core
      const innerMesh = new THREE.Mesh(innerGeom, innerMat);
      innerMesh.position.set(v.x, v.y, 0.039);
      meshesGroup.add(innerMesh);
    });
  }
}

// Setup Event Listeners for UI
function setupEventListeners() {
  // Sidebar minimize button
  const btnMinimizeSidebar = document.getElementById('btn-minimize-sidebar');
  const controlSidebar = document.getElementById('control-sidebar');
  if (btnMinimizeSidebar && controlSidebar) {
    btnMinimizeSidebar.addEventListener('click', () => {
      controlSidebar.classList.toggle('collapsed');
      const span = btnMinimizeSidebar.querySelector('span');
      if (span) {
        span.innerText = controlSidebar.classList.contains('collapsed') ? '▲' : '▼';
      }
    });
  }

  // Camera View controls
  document.getElementById('btn-view-perspective').addEventListener('click', () => setCameraView('perspective'));
  document.getElementById('btn-view-top').addEventListener('click', () => setCameraView('top'));

  // Preset Card selections
  const cards = document.querySelectorAll('.preset-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const presetName = card.getAttribute('data-preset');
      if (presetName) loadPreset(presetName);
    });
  });

  // Slider - Samples per Edge
  const sSamples = document.getElementById('slider-samples');
  const valSamples = document.getElementById('val-samples');
  sSamples.addEventListener('input', (e) => {
    state.samplesPerEdge = parseInt(e.target.value);
    valSamples.innerText = state.samplesPerEdge;
    recomputeMAT();
  });

  // Slider - Precision
  const sPrecision = document.getElementById('slider-precision');
  const valPrecision = document.getElementById('val-precision');
  sPrecision.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.precision = Math.pow(10, -val);
    valPrecision.innerText = `1e-${val}`;
    recomputeMAT();
  });

  // Display Overlays Toggles
  document.getElementById('chk-show-skeleton').addEventListener('change', (e) => {
    state.showSkeleton = e.target.checked;
    draw();
  });
  document.getElementById('chk-simplify-skeleton').addEventListener('change', (e) => {
    state.simplifySkeleton = e.target.checked;
    recomputeMAT();
  });
  document.getElementById('chk-prune-branches').addEventListener('change', (e) => {
    state.pruneBranches = e.target.checked;
    if (state.pruneBranches) {
      state.simplifySkeleton = true;
      const chkSimplify = document.getElementById('chk-simplify-skeleton');
      if (chkSimplify) chkSimplify.checked = true;
    }
    recomputeMAT();
  });
  document.getElementById('chk-show-ribs').addEventListener('change', (e) => {
    state.showRibs = e.target.checked;
    if (state.showRibs) {
      state.simplifySkeleton = true;
      const chkSimplify = document.getElementById('chk-simplify-skeleton');
      if (chkSimplify) chkSimplify.checked = true;
    }
    recomputeMAT();
  });
  
  // Slider - Rib Spacing (in meters)
  const sRibs = document.getElementById('slider-ribs');
  const valRibs = document.getElementById('val-ribs');
  sRibs.addEventListener('input', (e) => {
    state.ribSpacing = parseFloat(e.target.value);
    valRibs.innerText = `${state.ribSpacing.toFixed(1)}m`;
    recomputeMAT();
  });
  
  // Slider - Merge distance (in meters)
  const sMerge = document.getElementById('slider-merge');
  const valMerge = document.getElementById('val-merge');
  sMerge.addEventListener('input', (e) => {
    state.mergeThreshold = parseFloat(e.target.value);
    valMerge.innerText = `${state.mergeThreshold.toFixed(1)}m`;
    recomputeMAT();
  });


  function updateBaySelectionUI() {
    const btnCombine = document.getElementById('btn-combine-bays');
    const btnDelete = document.getElementById('btn-delete-bays');
    if (btnCombine) {
      btnCombine.disabled = state.selectedBayIndices.length < 2;
    }
    if (btnDelete) {
      btnDelete.disabled = state.selectedBayIndices.length === 0;
    }
  }

  document.getElementById('chk-show-bays').addEventListener('change', (e) => {
    state.showBays = e.target.checked;
    
    const container = document.getElementById('container-edit-bays');
    if (container) {
      container.style.display = state.showBays ? 'block' : 'none';
    }
    
    if (!state.showBays) {
      state.editBaysMode = false;
      state.selectedBayIndices = [];
      const chkEdit = document.getElementById('chk-edit-bays-mode');
      if (chkEdit) chkEdit.checked = false;
      const actions = document.getElementById('edit-bays-actions');
      if (actions) actions.style.display = 'none';
    }
    draw();
  });

  document.getElementById('chk-edit-bays-mode').addEventListener('change', (e) => {
    state.editBaysMode = e.target.checked;
    state.selectedBayIndices = [];
    
    const actions = document.getElementById('edit-bays-actions');
    if (actions) {
      actions.style.display = state.editBaysMode ? 'grid' : 'none';
    }
    
    updateBaySelectionUI();
    draw();
  });

  document.getElementById('btn-combine-bays').addEventListener('click', () => {
    if (state.selectedBayIndices.length >= 2) {
      const points = state.selectedBayIndices.map(idx => getCentroid(state.structuralBays[idx]));
      state.bayEdits.push({ type: 'merge', points });
      state.selectedBayIndices = [];
      updateBaySelectionUI();
      recomputeMAT();
    }
  });

  document.getElementById('btn-delete-bays').addEventListener('click', () => {
    if (state.selectedBayIndices.length > 0) {
      state.selectedBayIndices.forEach(idx => {
        state.bayEdits.push({ type: 'delete', point: getCentroid(state.structuralBays[idx]) });
      });
      state.selectedBayIndices = [];
      updateBaySelectionUI();
      recomputeMAT();
    }
  });

  document.getElementById('btn-reset-bay-edits').addEventListener('click', () => {
    state.bayEdits = [];
    state.graphVertexOverrides.clear();
    state.selectedBayIndices = [];
    updateBaySelectionUI();
    recomputeMAT();
  });

  document.getElementById('chk-hover-circle').addEventListener('change', (e) => {
    state.hoverCircle = e.target.checked;
    if (!state.hoverCircle) state.hoveredMedialPoint = null;
    draw();
  });
  document.getElementById('chk-show-governors').addEventListener('change', (e) => {
    state.showGovernors = e.target.checked;
    draw();
  });

  // Draw Custom button
  const btnDrawCustom = document.getElementById('btn-draw-custom');
  const btnClearCustom = document.getElementById('btn-clear-custom');
  const drawIndicator = document.getElementById('drawing-indicator');

  btnDrawCustom.addEventListener('click', () => {
    state.isDrawing = true;
    state.customVertices = [];
    state.polygon = [];
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    
    btnDrawCustom.style.display = 'none';
    btnClearCustom.style.display = 'inline-flex';
    drawIndicator.style.display = 'flex';
    
    cards.forEach(c => c.classList.remove('active'));
    document.getElementById('card-custom').style.display = 'flex';
    document.getElementById('card-custom').classList.add('active');

    draw();
  });

  btnClearCustom.addEventListener('click', () => {
    state.customVertices = [];
    state.polygon = [];
    state.isDrawing = true;
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    draw();
  });

  // Register viewport listeners on Canvas
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  const btnResetView = document.getElementById('btn-reset-view');
  if (btnResetView) {
    btnResetView.addEventListener('click', resetCameraView);
  }

  // Set up Rhino Controls
  setupRhinoUIControls();
}

function setupRhinoUIControls() {
  const fileInput = document.getElementById('rhino-file-input');
  const uploadBtn = document.getElementById('btn-upload-rhino');
  const fileInfo = document.getElementById('rhino-file-info');
  const filenameLabel = document.getElementById('rhino-filename');
  const countLabel = document.getElementById('rhino-object-count');
  const layersLabel = document.getElementById('lbl-rhino-layers');
  const container = document.getElementById('rhino-layers-container');
  const actionsDiv = document.getElementById('rhino-actions');
  const btnLoad = document.getElementById('btn-load-rhino-layers');
  const btnClear = document.getElementById('btn-clear-rhino');
  const btnExport = document.getElementById('btn-export-rhino');
  const exportFilenameInput = document.getElementById('rhino-export-filename');

  if (!fileInput || !uploadBtn) return;

  let activeBuffer = null;

  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    filenameLabel.textContent = file.name;
    uploadBtn.textContent = "Loading File...";
    uploadBtn.disabled = true;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        activeBuffer = event.target.result;
        console.log("[UI] Parsing Rhino file metadata...");
        const { layers, objectCount } = await rhinoManager.parseMetadata(activeBuffer);
        
        countLabel.textContent = `${objectCount} objects found`;
        fileInfo.style.display = 'block';

        container.innerHTML = '';
        if (layers && layers.length > 0) {
          layers.forEach(layer => {
            const item = document.createElement('div');
            item.className = 'layer-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `layer-chk-${layer.index}`;
            checkbox.value = layer.index;
            checkbox.checked = layer.visible !== false;

            const dot = document.createElement('div');
            dot.className = 'layer-color-dot';
            dot.style.backgroundColor = `rgba(${layer.color.r}, ${layer.color.g}, ${layer.color.b}, ${layer.color.a / 255})`;

            const name = document.createElement('span');
            name.className = 'layer-name';
            name.textContent = layer.name;
            name.title = layer.name;

            name.addEventListener('click', () => {
              checkbox.checked = !checkbox.checked;
            });

            item.appendChild(checkbox);
            item.appendChild(dot);
            item.appendChild(name);
            container.appendChild(item);
          });

          layersLabel.style.display = 'block';
          container.style.display = 'block';
          actionsDiv.style.display = 'grid';
        }
        uploadBtn.textContent = "Change .3DM File";
      } catch (err) {
        console.error("[UI] Error loading Rhino metadata:", err);
        alert("Error loading .3dm metadata: " + err.message);
        uploadBtn.textContent = "Load .3DM File";
      } finally {
        uploadBtn.disabled = false;
      }
    };
    reader.readAsArrayBuffer(file);
  });

  btnLoad.addEventListener('click', async () => {
    if (!activeBuffer) return;

    const checkedBoxes = container.querySelectorAll('input[type="checkbox"]:checked');
    const selectedIndices = Array.from(checkedBoxes).map(cb => parseInt(cb.value));

    if (selectedIndices.length === 0) {
      alert("Please select at least one layer to load.");
      return;
    }

    btnLoad.disabled = true;
    const originalText = btnLoad.textContent;
    btnLoad.textContent = "Loading...";

    try {
      await rhinoManager.loadLayers(activeBuffer, selectedIndices);
      console.log("[UI] Rhino geometries successfully loaded.");
    } catch (err) {
      console.error("[UI] Error loading layers:", err);
      alert("Failed to load layers: " + err.message);
    } finally {
      btnLoad.disabled = false;
      btnLoad.textContent = originalText;
    }
  });

  btnClear.addEventListener('click', () => {
    rhinoManager.clearRhinoGeometries();
    console.log("[UI] Rhino geometries cleared.");
  });

  btnExport.addEventListener('click', async () => {
    const filename = exportFilenameInput.value.trim() || "medial_axis_export.3dm";
    btnExport.disabled = true;
    btnExport.textContent = "Exporting...";

    try {
      await rhinoManager.exportSceneTo3dm(filename);
      console.log("[UI] Export complete.");
    } catch (err) {
      console.error("[UI] Error exporting to 3DM:", err);
      alert("Failed to export to 3DM: " + err.message);
    } finally {
      btnExport.disabled = false;
      btnExport.textContent = "Export to 3DM";
    }
  });
}

// Mouse Event Handlers using 3D Raycasting
function getIntersectionPoint(e) {
  const rect = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, cameraActive);
  const target = new THREE.Vector3();
  raycaster.ray.intersectPlane(planeZ, target);
  return target;
}

function handleMouseDown(e) {
  // Let OrbitControls handle Middle-click (dolly) and Right-click (pan) automatically
  if (e.button === 1 || e.button === 2) return;

  if (e.button === 0) {
    if (state.editBaysMode) {
      const target = getIntersectionPoint(e);
      const worldPos = new Vector2D(target.x, target.y);
      
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, cameraActive);
      raycaster.params.Line.threshold = 0.4;
      const intersects = raycaster.intersectObjects(meshesGroup.children);
      
      let clickedGraphObject = false;
      for (const hit of intersects) {
        if (hit.object.userData && hit.object.userData.isGraphVertex) {
          state.draggedGraphVertexIdx = hit.object.userData.index;
          controls.enabled = false;
          document.getElementById('status-dot').classList.add('loading');
          document.getElementById('status-text').innerText = `Dragging graph vertex ${state.draggedGraphVertexIdx}...`;
          clickedGraphObject = true;
          break;
        } else if (hit.object.userData && hit.object.userData.isGraphEdge) {
          state.draggedGraphEdgeIdx = hit.object.userData.index;
          state.dragStartMousePos = worldPos;
          controls.enabled = false;
          document.getElementById('status-dot').classList.add('loading');
          document.getElementById('status-text').innerText = `Dragging graph edge ${state.draggedGraphEdgeIdx}...`;
          clickedGraphObject = true;
          break;
        }
      }
      
      if (!clickedGraphObject) {
        const clickedIdx = state.structuralBays.findIndex(bay => pointInPolygon(worldPos, bay));
        if (clickedIdx !== -1) {
          const selIdx = state.selectedBayIndices.indexOf(clickedIdx);
          if (selIdx !== -1) {
            state.selectedBayIndices.splice(selIdx, 1);
          } else {
            state.selectedBayIndices.push(clickedIdx);
          }
          
          const btnCombine = document.getElementById('btn-combine-bays');
          const btnDelete = document.getElementById('btn-delete-bays');
          if (btnCombine) btnCombine.disabled = state.selectedBayIndices.length < 2;
          if (btnDelete) btnDelete.disabled = state.selectedBayIndices.length === 0;

          draw();
        }
      }
      return; // Prevent vertex dragging/drawing while editing bays
    }

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    // Check if clicking near any vertex handle sphere
    raycaster.setFromCamera(mouse, cameraActive);
    const intersects = raycaster.intersectObjects(meshesGroup.children);
    let clickedHandle = false;

    for (const hit of intersects) {
      if (hit.object.userData && hit.object.userData.isHandle) {
        state.draggedVertexIdx = hit.object.userData.index;
        controls.enabled = false; // Disable camera orbiting while dragging!
        document.getElementById('status-dot').classList.add('loading');
        document.getElementById('status-text').innerText = `Dragging vertex ${state.draggedVertexIdx}...`;
        clickedHandle = true;
        break;
      }
    }

    if (state.isDrawing) {
      const target = getIntersectionPoint(e);
      const worldPos = new Vector2D(target.x, target.y);

      // If clicking near the first vertex and we have at least 3 points, close it
      if (state.customVertices.length >= 3) {
        const screenFirst = worldToScreen(state.customVertices[0]);
        const screenPos = new Vector2D(e.clientX - rect.left, e.clientY - rect.top);
        if (screenPos.dist(screenFirst) < 12) {
          state.polygon = [...state.customVertices];
          state.isDrawing = false;
          
          document.getElementById('btn-draw-custom').style.display = 'inline-flex';
          document.getElementById('btn-clear-custom').style.display = 'none';
          document.getElementById('drawing-indicator').style.display = 'none';
          
          recomputeMAT();
          resetCameraView();
          return;
        }
      }
      state.customVertices.push(worldPos);
      draw();
    }
  }
}

function handleMouseMove(e) {
  const target = getIntersectionPoint(e);
  const worldPos = new Vector2D(target.x, target.y);
  state.mouseWorldPos = worldPos;

  if (state.draggedGraphVertexIdx !== -1 && state.planarGraph) {
    const origPt = state.planarGraph.originalVertices[state.draggedGraphVertexIdx];
    state.graphVertexOverrides.set(`${origPt.x.toFixed(4)},${origPt.y.toFixed(4)}`, worldPos);
    recomputeMAT();
  } else if (state.draggedGraphEdgeIdx !== -1 && state.planarGraph && state.dragStartMousePos) {
    const delta = worldPos.sub(state.dragStartMousePos);
    const edge = state.planarGraph.edges[state.draggedGraphEdgeIdx];
    
    // Move endpoint u
    const origPtU = state.planarGraph.originalVertices[edge[0]];
    const currentPtU = state.planarGraph.vertices[edge[0]];
    const newPtU = currentPtU.add(delta);
    state.graphVertexOverrides.set(`${origPtU.x.toFixed(4)},${origPtU.y.toFixed(4)}`, newPtU);

    // Move endpoint v
    const origPtV = state.planarGraph.originalVertices[edge[1]];
    const currentPtV = state.planarGraph.vertices[edge[1]];
    const newPtV = currentPtV.add(delta);
    state.graphVertexOverrides.set(`${origPtV.x.toFixed(4)},${origPtV.y.toFixed(4)}`, newPtV);

    state.dragStartMousePos = worldPos;
    recomputeMAT();
  } else if (state.draggedVertexIdx !== -1) {
    // Drag handle: Update vertex position in world coordinates
    state.polygon[state.draggedVertexIdx] = worldPos;
    recomputeMAT();
  } else if (state.isDrawing) {
    draw();
  } else if (state.hoverCircle && !state.editBaysMode && state.polygon.length >= 3 && controls.state === -1) {
    // Hover logic: Find closest medial point (measured in screen space distance)
    const rect = canvas.getBoundingClientRect();
    const screenMouse = new Vector2D(e.clientX - rect.left, e.clientY - rect.top);

    let bestPoint = null;
    let minDist = 20; // 20px active hover range

    for (const p of state.skeletonData.regularPoints) {
      const screenP = worldToScreen(p);
      const dist = screenMouse.dist(screenP);
      if (dist < minDist) {
        minDist = dist;
        bestPoint = p;
      }
    }

    for (const jp of state.skeletonData.junctionPoints) {
      if (jp.isEndPoint) continue;
      const screenJP = worldToScreen(jp);
      const dist = screenMouse.dist(screenJP);
      if (dist < minDist) {
        minDist = dist;
        bestPoint = jp;
      }
    }

    if (bestPoint !== state.hoveredMedialPoint) {
      state.hoveredMedialPoint = bestPoint;
      draw();
    }
  }
}

function handleMouseUp() {
  if (state.draggedGraphVertexIdx !== -1) {
    state.draggedGraphVertexIdx = -1;
    controls.enabled = true;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  } else if (state.draggedGraphEdgeIdx !== -1) {
    state.draggedGraphEdgeIdx = -1;
    state.dragStartMousePos = null;
    controls.enabled = true;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  } else if (state.draggedVertexIdx !== -1) {
    state.draggedVertexIdx = -1;
    controls.enabled = true; // Re-enable camera rotation
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
}

function handleMouseLeave() {
  state.mouseWorldPos = null;
  state.hoveredMedialPoint = null;
  if (state.draggedGraphVertexIdx !== -1) {
    state.draggedGraphVertexIdx = -1;
    controls.enabled = true;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
  if (state.draggedGraphEdgeIdx !== -1) {
    state.draggedGraphEdgeIdx = -1;
    state.dragStartMousePos = null;
    controls.enabled = true;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
  if (state.draggedVertexIdx !== -1) {
    state.draggedVertexIdx = -1;
    controls.enabled = true;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
  draw();
}

// Main high-performance render frame loop
function animate() {
  requestAnimationFrame(animate);
  
  // Update controls with smooth damping
  controls.update();
  
  // Render frame
  renderer.render(scene, cameraActive);
}

// Initialise App
window.addEventListener('load', () => {
  initThree();
  setupEventListeners();
  loadPreset(state.activePreset);
});
