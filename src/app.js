import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { MedialAxisTransform } from './medialAxis.js';
import { Vector2D } from './utils/vector2d.js';
import { distanceToPolygon, closestPointOnSegment, pointInPolygon, mergePolygonCells, intersectRaySegment } from './utils/geometry.js';
import { RhinoManager } from './utils/RhinoManager.js';
import { PlanarGraph } from './utils/planarGraph.js';

// Application State
const state = {
  importedPolygons: [],
  activePolygonId: 'default',
  activePreset: 'tree',
  samplesPerEdge: 25,
  precision: 1e-5,
  showSkeleton: true,
  simplifySkeleton: true,
  mergeThreshold: 2.0, // Default in meters
  pruneBranches: true,
  showRibs: true,
  ribSpacing: 10.0, // Default in meters
  showBays: true,
  editBaysMode: true,
  draggedGraphVertexIdx: -1,
  draggedGraphVertexOrig: null,
  draggedGraphEdgeIdx: -1,
  dragStartMousePos: null,
  hoverCircle: false,
  showGovernors: false,
  isDrawing: false,
  customVertices: [],
  draggedVertexIdx: -1,
  selectedVertexType: null, // 'polygon' or 'graph' or null
  selectedVertexIdx: -1,
  selectedVertexOrig: null,
  hoveredMedialPoint: null,
  computeTime: 0,
  camera: {
    zoom: 1.0 // kept for backward compatibility and HUD display
  },
  mouseWorldPos: null,
  numFloors: 3,
  floorHeight: 4.0,
  show3DColumns: true,
  show3DBeams: true,
  showFloorSlabs: true,
  showBalconies: true,
  showBriseSoleil: true,
  showVaultedRoofs: true,
  show3DCells: true,
  columnRadius: 0.25,
  beamWidth: 0.3,
  beamDepth: 0.5,
  slabThickness: 0.2,
  balconyOffset: 1.5,
  balconyThickness: 0.15,
  louverWidth: 0.05,
  louverDepth: 0.2,
  louverSpacing: 1.0,
  vaultHeight: 1.5,
};

Object.defineProperty(state, 'polygon', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.polygon : [];
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) {
      active.polygon = val;
    } else {
      state.importedPolygons = [{
        id: 'default',
        polygon: val,
        hasScaffold: true,
        planarGraph: null,
        structuralBays: [],
        selectedBayIndices: [],
        bayEdits: [],
        graphVertexOverrides: new Map(),
        skeletonData: { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [] }
      }];
      state.activePolygonId = 'default';
    }
  }
});

Object.defineProperty(state, 'planarGraph', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.planarGraph : null;
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) active.planarGraph = val;
  }
});

Object.defineProperty(state, 'structuralBays', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.structuralBays : [];
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) active.structuralBays = val;
  }
});

Object.defineProperty(state, 'skeletonData', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.skeletonData : { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [] };
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) active.skeletonData = val;
  }
});

Object.defineProperty(state, 'selectedBayIndices', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.selectedBayIndices : [];
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) active.selectedBayIndices = val;
  }
});

Object.defineProperty(state, 'bayEdits', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.bayEdits : [];
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) active.bayEdits = val;
  }
});

Object.defineProperty(state, 'graphVertexOverrides', {
  get() {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    return active ? active.graphVertexOverrides : new Map();
  },
  set(val) {
    const active = state.importedPolygons.find(p => p.id === state.activePolygonId);
    if (active) active.graphVertexOverrides = val;
  }
});

// Canvas Setup
const canvas = document.getElementById('polygon-canvas');
const wrapper = document.getElementById('canvas-wrapper');

// Three.js State Variables
let renderer, scene, cameraPerspective, cameraOrthographic, cameraActive;
let controls;
let meshesGroup; // Group to hold all dynamic geometric meshes
let rhinoGroup;
let stack3DGroup;
let rhinoManager;
let transformControls;
let manipulatorTarget;

const appContext = {
  state,
  rhinoGroup: null,
  setPolygonsFrom3dm: (polygons) => {
    state.importedPolygons = polygons.map((poly, idx) => {
      const pts = poly.map(pt => new Vector2D(pt[0], pt[1]));
      return {
        id: `rhino-poly-${idx}-${Date.now()}`,
        polygon: pts,
        hasScaffold: false, // Default is unticked/inactive as requested!
        planarGraph: null,
        structuralBays: [],
        selectedBayIndices: [],
        bayEdits: [],
        graphVertexOverrides: new Map(),
        skeletonData: { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [] }
      };
    });

    state.activePreset = 'custom';
    
    const cards = document.querySelectorAll('.preset-card');
    cards.forEach(c => c.classList.remove('active'));
    
    const cardCustom = document.getElementById('card-custom');
    if (cardCustom) {
      cardCustom.style.display = 'flex';
      cardCustom.classList.add('active');
    }

    if (state.importedPolygons.length > 0) {
      state.activePolygonId = state.importedPolygons[0].id;
    } else {
      state.activePolygonId = null;
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

  stack3DGroup = new THREE.Group();
  scene.add(stack3DGroup);

  rhinoManager = new RhinoManager(appContext);
  window.rhinoManager = rhinoManager;

  // 9. TransformControls Move Manipulator
  manipulatorTarget = new THREE.Object3D();
  scene.add(manipulatorTarget);

  transformControls = new TransformControls(cameraActive, renderer.domElement);
  transformControls.setMode('translate');
  transformControls.showZ = false; // Disable Z axis control
  scene.add(transformControls.getHelper());

  // Hook OrbitControls toggle during dragging
  transformControls.addEventListener('dragging-changed', (event) => {
    controls.enabled = !event.value;
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    if (event.value) {
      if (statusDot) statusDot.classList.add('loading');
      if (statusText) statusText.innerText = "Moving vertex via manipulator...";
    } else {
      if (statusDot) statusDot.classList.remove('loading');
      if (statusText) statusText.innerText = `Computed ${state.skeletonData.regularPoints.length + state.skeletonData.junctionPoints.length} medial points successfully.`;
    }
  });

  // Handle position changes on drag
  transformControls.addEventListener('change', () => {
    if (transformControls.dragging && transformControls.object) {
      const pos = transformControls.object.position;
      if (state.selectedVertexType === 'polygon' && state.selectedVertexIdx !== undefined && state.selectedVertexIdx !== -1) {
        state.polygon[state.selectedVertexIdx] = new Vector2D(pos.x, pos.y);
        recomputeMAT();
      } else if (state.selectedVertexType === 'graph' && state.selectedVertexOrig) {
        state.graphVertexOverrides.set(
          `${state.selectedVertexOrig.x.toFixed(4)},${state.selectedVertexOrig.y.toFixed(4)}`,
          new Vector2D(pos.x, pos.y)
        );
        recomputeMAT();
      }
    }
  });

  // 10. Resize Canvas
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
  if (transformControls) {
    transformControls.camera = cameraActive;
  }
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
  state.importedPolygons = [];
  state.activePolygonId = 'default';
  state.graphVertexOverrides.clear();
  state.bayEdits = [];
  state.selectedBayIndices = [];
  if (transformControls) {
    transformControls.detach();
  }
  state.selectedVertexType = null;
  state.selectedVertexIdx = -1;
  state.selectedVertexOrig = null;
  
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
    if (isEdgeInAnyActiveBay(ptU, ptV, activeBays, 0.02)) {
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
  const originalActiveId = state.activePolygonId;
  const start = performance.now();

  for (const item of state.importedPolygons) {
    if (!item.hasScaffold) {
      item.skeletonData = { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [] };
      item.planarGraph = null;
      item.structuralBays = [];
      continue;
    }

    // Temporarily set active id so getters resolve to this item
    state.activePolygonId = item.id;

    computeSingleScaffold();
  }

  // Restore original active id
  state.activePolygonId = originalActiveId;

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
  
  const activeItem = state.importedPolygons.find(p => p.id === state.activePolygonId);
  if (activeItem && activeItem.hasScaffold) {
    const count = activeItem.skeletonData.regularPoints.length + activeItem.skeletonData.junctionPoints.length;
    const segmentsCount = activeItem.skeletonData.simplifiedSegments.length;
    const nodesCount = activeItem.skeletonData.simplifiedNodes.length;
    const statusMsg = state.simplifySkeleton 
      ? `Simplified skeleton to ${nodesCount} merged nodes and ${segmentsCount} straight branches.`
      : `Computed ${count} medial points successfully.`;
    document.getElementById('status-text').innerText = statusMsg;
  } else {
    document.getElementById('status-text').innerText = "Select a curve in the viewport to apply the scaffold.";
  }

  state.hoveredMedialPoint = null;
  draw();
}

function computeSingleScaffold() {
  if (state.polygon.length < 3) {
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    return;
  }

  // 1. Deform boundary polygon using overrides
  for (const p of state.polygon) {
    if (p.origX === undefined) {
      p.origX = p.x;
      p.origY = p.y;
    }
    // Reset to original position
    p.x = p.origX;
    p.y = p.origY;

    let foundOverride = null;
    for (const [keyStr, val] of state.graphVertexOverrides.entries()) {
      const parts = keyStr.split(',');
      const kx = parseFloat(parts[0]);
      const ky = parseFloat(parts[1]);
      const dist = Math.hypot(p.origX - kx, p.origY - ky);
      if (dist < 0.1) {
        foundOverride = val;
        break;
      }
    }
    if (foundOverride) {
      p.x = foundOverride.x;
      p.y = foundOverride.y;
    }
  }
  
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
  
  // Store original coordinates and match with graph overrides for simplified nodes
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

  // Precompute segment division points with matching overrides
  for (const seg of segments) {
    const startPt = seg.start;
    const endPt = seg.end;
    const vec = endPt.sub(startPt);
    const len = vec.length();
    const N = Math.max(1, Math.round(len / state.ribSpacing));

    const startPtOrig = new Vector2D(startPt.origX, startPt.origY);
    const endPtOrig = new Vector2D(endPt.origX, endPt.origY);
    const vecOrig = endPtOrig.sub(startPtOrig);

    seg.divisionPoints = [];

    for (let k = 1; k < N; k++) {
      const t = k / N;
      const D_k = startPt.add(vec.scale(t));
      const D_k_orig = startPtOrig.add(vecOrig.scale(t));
      D_k.origX = D_k_orig.x;
      D_k.origY = D_k_orig.y;

      // Match with graphVertexOverrides
      let foundOverride = null;
      for (const [keyStr, val] of state.graphVertexOverrides.entries()) {
        const parts = keyStr.split(',');
        const kx = parseFloat(parts[0]);
        const ky = parseFloat(parts[1]);
        const dist = Math.hypot(D_k.origX - kx, D_k.origY - ky);
        if (dist < 0.1) {
          foundOverride = val;
          break;
        }
      }
      if (foundOverride) {
        D_k.x = foundOverride.x;
        D_k.y = foundOverride.y;
      }

      seg.divisionPoints.push(D_k);
    }
  }

  skeleton.simplifiedSegments = segments;
  skeleton.simplifiedNodes = nodes;

  state.skeletonData = skeleton;

  // Build Planar Graph to extract structural bays/enclosed cells
  if (state.polygon.length >= 3) {
    const graph = new PlanarGraph(1e-3, state.graphVertexOverrides);
    state.planarGraph = graph;

    // Get accepted ribs first
    const acceptedRibs = (state.showSkeleton && state.showRibs && state.simplifySkeleton)
      ? computeAcceptedRibs()
      : [];

    // Pre-split the boundary polygon to include rib targets and skeleton endpoints lying on the boundary
    const subdividedPolygon = [];
    const pointsOnBoundary = [];

    for (const rib of acceptedRibs) {
      pointsOnBoundary.push(rib.target);
    }

    const segmentsToUse = state.pruneBranches
      ? skeleton.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
      : skeleton.simplifiedSegments;

    for (const node of skeleton.simplifiedNodes) {
      if (node.isEndPoint) {
        pointsOnBoundary.push(node);
      }
    }

    for (let i = 0; i < state.polygon.length; i++) {
      const v1 = state.polygon[i];
      const v2 = state.polygon[(i + 1) % state.polygon.length];
      
      subdividedPolygon.push(v1);
      
      const targetsOnSegment = [];
      for (const pt of pointsOnBoundary) {
        const cp = closestPointOnSegment(pt, v1, v2);
        if (pt.dist(cp) < 1e-3) {
          const len = v2.sub(v1).length();
          const d1 = v1.dist(cp);
          const d2 = v2.dist(cp);
          if (d1 > 1e-3 && d2 > 1e-3 && (d1 + d2) < len + 1e-3) {
            if (!targetsOnSegment.some(t => t.point.dist(pt) < 1e-3)) {
              targetsOnSegment.push({ point: pt, dist: d1 });
            }
          }
        }
      }
      
      targetsOnSegment.sort((a, b) => a.dist - b.dist);
      for (const item of targetsOnSegment) {
        subdividedPolygon.push(item.point);
      }
    }

    // A. Add boundary edges (subdivided to avoid duplicated / coincident vertices and allow bending)
    for (let i = 0; i < subdividedPolygon.length; i++) {
      graph.addEdge(subdividedPolygon[i], subdividedPolygon[(i + 1) % subdividedPolygon.length], 'boundary');
    }
    
    // B. Add skeleton segments (subdivided to include division points so all skeleton/rib vertices are movable)
    if (state.showSkeleton) {
      if (state.simplifySkeleton) {
        for (const seg of segmentsToUse) {
          const pts = [seg.start, ...(seg.divisionPoints || []), seg.end];
          for (let i = 0; i < pts.length - 1; i++) {
            graph.addEdge(pts[i], pts[i + 1], 'skeleton');
          }
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
    
    // C. Add accepted ribs
    for (let idx = 0; idx < acceptedRibs.length; idx++) {
      const rib = acceptedRibs[idx];
      graph.addEdge(rib.source, rib.target, `rib_${idx}`);
    }
    
    // D. Extract faces and apply edits
    const rawBays = graph.extractFaces();
    state.structuralBays = applyBayEdits(rawBays, state.bayEdits);
    
    // Synchronize graph: filter out edges not on active bay boundaries
    filterPlanarGraphByActiveBays(graph, state.structuralBays);
  } else {
    state.structuralBays = [];
  }
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
    if (!seg.divisionPoints) continue;

    for (const D_k of seg.divisionPoints) {
      const D_k_orig = new Vector2D(D_k.origX, D_k.origY);

      const candidates = [];
      for (let i = 0; i < state.polygon.length; i++) {
        const v1 = state.polygon[i];
        const v2 = state.polygon[(i + 1) % state.polygon.length];
        
        let cp = closestPointOnSegment(D_k, v1, v2);
        if (cp.dist(v1) < 0.05) cp = v1;
        else if (cp.dist(v2) < 0.05) cp = v2;

        let cpOrig = closestPointOnSegment(D_k_orig, v1, v2);
        if (cpOrig.dist(v1) < 0.05) cpOrig = v1;
        else if (cpOrig.dist(v2) < 0.05) cpOrig = v2;

        const dist = D_k.dist(cp);
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
      
      let cp = closestPointOnSegment(node, v1, v2);
      if (cp.dist(v1) < 0.05) cp = v1;
      else if (cp.dist(v2) < 0.05) cp = v2;

      let cpOrig = closestPointOnSegment(nodeOrig, v1, v2);
      if (cpOrig.dist(v1) < 0.05) cpOrig = v1;
      else if (cpOrig.dist(v2) < 0.05) cpOrig = v2;

      const dist = node.dist(cp);
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
// 3D Scene Geometry Builder (Clears and populates meshesGroup)
function draw() {
  if (!meshesGroup) return;

  const originalActiveId = state.activePolygonId;

  // Sync selected vertex index for planar graph if selection is graph-based
  const activeItem = state.importedPolygons.find(p => p.id === state.activePolygonId);
  if (activeItem && state.selectedVertexType === 'graph' && state.selectedVertexOrig && activeItem.planarGraph) {
    const orig = state.selectedVertexOrig;
    let foundIdx = -1;
    let minDist = Infinity;
    for (let i = 0; i < activeItem.planarGraph.vertices.length; i++) {
      const origV = activeItem.planarGraph.originalVertices[i];
      if (origV) {
        const d = Math.hypot(orig.x - origV.x, orig.y - origV.y);
        if (d < 0.1 && d < minDist) {
          minDist = d;
          foundIdx = i;
        }
      }
    }
    if (foundIdx !== -1) {
      state.selectedVertexIdx = foundIdx;
    } else {
      if (transformControls) transformControls.detach();
      state.selectedVertexType = null;
      state.selectedVertexIdx = -1;
      state.selectedVertexOrig = null;
    }
  }

  // 1. Clear previous dynamic 2D meshes
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

  // 2. Custom Polygon Drawing Preview
  if (state.isDrawing && state.customVertices.length > 0) {
    const previewPts = state.customVertices.map(v => new THREE.Vector3(v.x, v.y, 0.025));
    if (state.mouseWorldPos) {
      previewPts.push(new THREE.Vector3(state.mouseWorldPos.x, state.mouseWorldPos.y, 0.025));
      if (state.customVertices.length >= 3) {
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
      previewLine.raycast = function() {};
      meshesGroup.add(previewLine);
    }
    const customSphGeom = new THREE.CircleGeometry(0.7, 32);
    for (let i = 0; i < state.customVertices.length; i++) {
      const v = state.customVertices[i];
      const isFirst = i === 0 && state.customVertices.length >= 3;
      let isNearFirst = false;
      if (isFirst && state.mouseWorldPos) {
        const d = Math.sqrt((v.x - state.mouseWorldPos.x)**2 + (v.y - state.mouseWorldPos.y)**2);
        isNearFirst = d < 2.0;
      }
      const customSphMat = new THREE.MeshBasicMaterial({
        color: isNearFirst ? 0x10b981 : (isFirst ? 0x374151 : 0x4b5563)
      });
      const customSphMesh = new THREE.Mesh(customSphGeom, customSphMat);
      customSphMesh.position.set(v.x, v.y, 0.03);
      customSphMesh.raycast = function() {};
      meshesGroup.add(customSphMesh);
    }
  }

  // Draw each imported polygon
  state.importedPolygons.forEach(item => {
    state.activePolygonId = item.id;
    const isSelfActive = item.id === originalActiveId;

    if (state.polygon.length >= 3) {
      const shape = new THREE.Shape();
      shape.moveTo(state.polygon[0].x, state.polygon[0].y);
      for (let i = 1; i < state.polygon.length; i++) {
        shape.lineTo(state.polygon[i].x, state.polygon[i].y);
      }
      shape.closePath();

      const faceGeom = new THREE.ShapeGeometry(shape);
      const faceMat = new THREE.MeshBasicMaterial({
        color: item.hasScaffold ? (isSelfActive ? 0x4f46e5 : 0x374151) : 0x9ca3af,
        transparent: true,
        opacity: item.hasScaffold ? (isSelfActive ? 0.08 : 0.04) : 0.015,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const faceMesh = new THREE.Mesh(faceGeom, faceMat);
      faceMesh.position.z = 0.005;
      faceMesh.userData = { isPolygonFace: true, polygonId: item.id };
      meshesGroup.add(faceMesh);

      const boundaryPts = state.polygon.map(p => new THREE.Vector3(p.x, p.y, 0.02));
      boundaryPts.push(boundaryPts[0]);
      const boundaryGeom = new THREE.BufferGeometry().setFromPoints(boundaryPts);
      const boundaryMat = new THREE.LineBasicMaterial({
        color: item.hasScaffold ? (isSelfActive ? 0x4f46e5 : 0x374151) : 0x9ca3af,
        linewidth: isSelfActive ? 2.5 : 1.5
      });
      const boundaryLine = new THREE.Line(boundaryGeom, boundaryMat);
      boundaryLine.userData = { isPolygonLine: true, polygonId: item.id };
      meshesGroup.add(boundaryLine);
    }

    if (item.hasScaffold && state.polygon.length >= 3) {
      // 4. Draw Medial Axis Skeleton
      if (state.showSkeleton) {
        const pts = state.skeletonData.regularPoints;
        if (state.simplifySkeleton) {
          const segmentsToDraw = state.pruneBranches
            ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
            : state.skeletonData.simplifiedSegments;
          const simplifiedLineMat = new THREE.LineBasicMaterial({
            color: 0x374151,
            linewidth: 3.5
          });
          for (const seg of segmentsToDraw) {
            const linePts = [
              new THREE.Vector3(seg.start.x, seg.start.y, 0.035),
              new THREE.Vector3(seg.end.x, seg.end.y, 0.035)
            ];
            const geom = new THREE.BufferGeometry().setFromPoints(linePts);
            const line = new THREE.Line(geom, simplifiedLineMat);
            line.raycast = function() {};
            meshesGroup.add(line);
          }
        } else {
          const samples = state.samplesPerEdge;
          const curveMat = new THREE.LineBasicMaterial({
            color: 0x6b7280,
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
              line.raycast = function() {};
              meshesGroup.add(line);
            }
          }
          const regularBeadGeom = new THREE.CircleGeometry(0.12, 16);
          const regularBeadMat = new THREE.MeshBasicMaterial({ color: 0x6b7280 });
          for (const p of pts) {
            const bead = new THREE.Mesh(regularBeadGeom, regularBeadMat);
            bead.position.set(p.x, p.y, 0.03);
            bead.raycast = function() {};
            meshesGroup.add(bead);
          }
        }

        // Valence 3+ Nodes
        let nodesToDraw = state.simplifySkeleton ? state.skeletonData.simplifiedNodes : state.skeletonData.junctionPoints;
        if (state.pruneBranches) {
          nodesToDraw = nodesToDraw.filter(p => !p.isEndPoint);
        }
        for (const jp of nodesToDraw) {
          const rad = jp.isEndPoint ? 0.3 : 0.45;
          const nodeGeom = new THREE.CircleGeometry(rad, 32);
          const nodeMat = new THREE.MeshBasicMaterial({ color: jp.isEndPoint ? 0x4b5563 : 0x374151 });
          const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
          nodeMesh.position.set(jp.x, jp.y, 0.035);
          nodeMesh.raycast = function() {};
          meshesGroup.add(nodeMesh);

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
          ringLine.raycast = function() {};
          meshesGroup.add(ringLine);
        }

        // Structural Ribs
        if (state.showRibs) {
          const acceptedRibs = computeAcceptedRibs();
          if (isSelfActive) appContext.acceptedRibsCache = acceptedRibs;
          const beadGeom = new THREE.CircleGeometry(0.15, 16);
          const beadMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
          const ribMat = new THREE.LineBasicMaterial({ color: 0x4b5563, transparent: true, opacity: 0.65 });
          const contactGeom = new THREE.CircleGeometry(0.2, 16);
          const contactMat = new THREE.MeshBasicMaterial({ color: 0x4b5563 });
          for (const rib of acceptedRibs) {
            const bead = new THREE.Mesh(beadGeom, beadMat);
            bead.position.set(rib.source.x, rib.source.y, 0.038);
            bead.raycast = function() {};
            meshesGroup.add(bead);

            const rPts = [
              new THREE.Vector3(rib.source.x, rib.source.y, 0.038),
              new THREE.Vector3(rib.target.x, rib.target.y, 0.038)
            ];
            const rGeom = new THREE.BufferGeometry().setFromPoints(rPts);
            const rLine = new THREE.Line(rGeom, ribMat);
            rLine.raycast = function() {};
            meshesGroup.add(rLine);

            const contactMesh = new THREE.Mesh(contactGeom, contactMat);
            contactMesh.position.set(rib.target.x, rib.target.y, 0.038);
            contactMesh.raycast = function() {};
            meshesGroup.add(contactMesh);
          }
        }
      }

      // 5. Draw Bays
      if (state.showBays && state.structuralBays && state.structuralBays.length > 0) {
        state.structuralBays.forEach((cell, idx) => {
          if (cell.length >= 3) {
            const cellShape = new THREE.Shape();
            cellShape.moveTo(cell[0].x, cell[0].y);
            for (let k = 1; k < cell.length; k++) {
              cellShape.lineTo(cell[k].x, cell[k].y);
            }
            cellShape.closePath();

            const isSelected = isSelfActive && state.selectedBayIndices.includes(idx);
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
            bayMesh.position.z = 0.015;
            meshesGroup.add(bayMesh);

            const cellPts = cell.map(p => new THREE.Vector3(p.x, p.y, 0.018));
            cellPts.push(cellPts[0]);
            const outlineGeom = new THREE.BufferGeometry().setFromPoints(cellPts);
            let outlineLine;
            if (isSelected) {
              const outlineMat = new THREE.LineBasicMaterial({ color: 0xe65100, linewidth: 2.5 });
              outlineLine = new THREE.Line(outlineGeom, outlineMat);
            } else {
              const outlineMat = new THREE.LineDashedMaterial({
                color: 0x4b5563,
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
    }

    // 6. Draw Handles ONLY for active selected polygon
    if (isSelfActive && !state.isDrawing && state.polygon.length > 0) {
      if (!state.editBaysMode) {
        const handleGeom = new THREE.CircleGeometry(1.0, 32);
        const coreGeom = new THREE.CircleGeometry(0.3, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        for (let i = 0; i < state.polygon.length; i++) {
          const v = state.polygon[i];
          const isSelected = (state.selectedVertexType === 'polygon' && state.selectedVertexIdx === i);
          const handleMat = new THREE.MeshBasicMaterial({ color: isSelected ? 0x10b981 : 0x374151 });
          const handle = new THREE.Mesh(handleGeom, handleMat);
          handle.position.set(v.x, v.y, 0.03);
          handle.userData = { isHandle: true, index: i, polygonId: item.id };
          meshesGroup.add(handle);

          const core = new THREE.Mesh(coreGeom, coreMat);
          core.position.set(v.x, v.y, 0.038);
          meshesGroup.add(core);
        }
      } else if (state.showBays && state.planarGraph) {
        const edgeMat = new THREE.LineBasicMaterial({ color: 0x4f46e5, linewidth: 3.5, transparent: true, opacity: 0.8 });
        state.planarGraph.edges.forEach((edge, idx) => {
          const u = edge[0];
          const v = edge[1];
          const ptU = state.planarGraph.vertices[u];
          const ptV = state.planarGraph.vertices[v];
          if (ptU && ptV) {
            const edgePts = [new THREE.Vector3(ptU.x, ptU.y, 0.032), new THREE.Vector3(ptV.x, ptV.y, 0.032)];
            const geom = new THREE.BufferGeometry().setFromPoints(edgePts);
            const line = new THREE.Line(geom, edgeMat);
            line.userData = { index: idx, u, v, polygonId: item.id };
            meshesGroup.add(line);
          }
        });

        const vertexGeom = new THREE.CircleGeometry(0.7, 32);
        const innerGeom = new THREE.CircleGeometry(0.25, 16);
        const innerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        state.planarGraph.vertices.forEach((v, i) => {
          const isSelected = (state.selectedVertexType === 'graph' && state.selectedVertexIdx === i);
          const vertexMat = new THREE.MeshBasicMaterial({ color: isSelected ? 0x10b981 : 0x4f46e5, transparent: true, opacity: 0.95 });
          const vMesh = new THREE.Mesh(vertexGeom, vertexMat);
          vMesh.position.set(v.x, v.y, 0.035);
          vMesh.userData = { isGraphVertex: true, index: i, polygonId: item.id };
          meshesGroup.add(vMesh);

          const innerMesh = new THREE.Mesh(innerGeom, innerMat);
          innerMesh.position.set(v.x, v.y, 0.039);
          meshesGroup.add(innerMesh);
        });
      }
    }
  });

  // Restore active selected id
  state.activePolygonId = originalActiveId;

  // Render Hover maximal inscribed circle helper for active selected polygon
  const activePoly = state.importedPolygons.find(p => p.id === state.activePolygonId);
  if (activePoly) {
    state.activePolygonId = activePoly.id;
    if (state.hoverCircle && state.hoveredMedialPoint && state.polygon.length >= 3) {
      const hp = state.hoveredMedialPoint;
      const rad = hp.radius;
      const ringGeom = new THREE.RingGeometry(rad - 0.2, rad + 0.2, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x374151,
        transparent: true,
        opacity: 0.82,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.set(hp.x, hp.y, 0.045);
      meshesGroup.add(ring);

      const discGeom = new THREE.CircleGeometry(rad, 64);
      const discMat = new THREE.MeshBasicMaterial({ color: 0x374151, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false });
      const disc = new THREE.Mesh(discGeom, discMat);
      disc.position.set(hp.x, hp.y, 0.04);
      meshesGroup.add(disc);

      const centerGeom = new THREE.CircleGeometry(0.6, 16);
      const centerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const centerMesh = new THREE.Mesh(centerGeom, centerMat);
      centerMesh.position.set(hp.x, hp.y, 0.048);
      meshesGroup.add(centerMesh);

      if (state.showGovernors) {
        const govLineMat = new THREE.LineBasicMaterial({ color: 0x4b5563, linewidth: 1.5 });
        const govSphGeom = new THREE.CircleGeometry(0.5, 16);
        const govSphMat = new THREE.MeshBasicMaterial({ color: 0x4b5563 });
        for (let i = 0; i < state.polygon.length; i++) {
          const v1 = state.polygon[i];
          const v2 = state.polygon[(i + 1) % state.polygon.length];
          const cp = closestPointOnSegment(hp, v1, v2);
          if (Math.abs(hp.dist(cp) - rad) < 0.2) {
            const govPts = [new THREE.Vector3(hp.x, hp.y, 0.046), new THREE.Vector3(cp.x, cp.y, 0.046)];
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
  }

  // Restore active selected id
  state.activePolygonId = originalActiveId;

  // Update manipulator target position to match selection
  if (transformControls && transformControls.object) {
    if (state.selectedVertexType === 'polygon' && state.selectedVertexIdx !== -1 && state.polygon[state.selectedVertexIdx]) {
      const v = state.polygon[state.selectedVertexIdx];
      manipulatorTarget.position.set(v.x, v.y, 0.03);
    } else if (state.selectedVertexType === 'graph' && state.selectedVertexIdx !== -1 && state.planarGraph && state.planarGraph.vertices[state.selectedVertexIdx]) {
      const v = state.planarGraph.vertices[state.selectedVertexIdx];
      manipulatorTarget.position.set(v.x, v.y, 0.035);
    } else {
      transformControls.detach();
      state.selectedVertexType = null;
      state.selectedVertexIdx = -1;
      state.selectedVertexOrig = null;
    }
  }

  build3DStack();
}

// Classifies a boundary segment based on outward ray casting
function classifyBoundarySegment(p1, p2, normal, item, allPolygons) {
  const mid = p1.add(p2).scale(0.5);
  const rayOrigin = new Vector2D(mid.x + normal.x * 0.1, mid.y + normal.y * 0.1);
  const rayDir = normal;

  let closestHitDist = Infinity;
  let closestHitType = 'open_space';

  allPolygons.forEach(otherItem => {
    const isSelf = otherItem.id === item.id;
    for (let i = 0; i < otherItem.polygon.length; i++) {
      const segStart = otherItem.polygon[i];
      const segEnd = otherItem.polygon[(i + 1) % otherItem.polygon.length];
      
      if (isSelf) {
        const d1 = segStart.dist(p1);
        const d2 = segEnd.dist(p2);
        const d3 = segStart.dist(p2);
        const d4 = segEnd.dist(p1);
        if ((d1 < 1e-4 && d2 < 1e-4) || (d3 < 1e-4 && d4 < 1e-4)) {
          continue;
        }
      }

      const hit = intersectRaySegment(rayOrigin, rayDir, segStart, segEnd);
      if (hit && hit.s < closestHitDist) {
        closestHitDist = hit.s;
        closestHitType = isSelf ? 'courtyard' : 'other_building';
      }
    }
  });

  if (closestHitDist < 0.5) {
    return 'touching';
  } else if (closestHitDist < 25.0) {
    return closestHitType;
  }
  return 'open_space';
}

// Determines if a vertex is a true corner vertex of the boundary polygon (significant angle shift)
function isTrueCornerVertex(idx, poly) {
  const N = poly.length;
  if (N < 3) return false;
  const prev = poly[(idx - 1 + N) % N];
  const curr = poly[idx];
  const next = poly[(idx + 1) % N];
  
  const dx1 = curr.x - prev.x;
  const dy1 = curr.y - prev.y;
  const len1 = Math.hypot(dx1, dy1);
  
  const dx2 = next.x - curr.x;
  const dy2 = next.y - curr.y;
  const len2 = Math.hypot(dx2, dy2);
  
  if (len1 < 1e-6 || len2 < 1e-6) return false;
  
  const dot = (dx1 * dx2 + dy1 * dy2) / (len1 * len2);
  return dot < 0.98; // Turn angle > ~11.5 degrees
}

// Determines if a cell is a corner cell (touches any true corner vertices of the boundary polygon)
function isCornerCell(cell, boundaryPolygon) {
  const N = boundaryPolygon.length;
  for (const pt of cell) {
    for (let i = 0; i < N; i++) {
      const bPt = boundaryPolygon[i];
      if (Math.hypot(pt.x - bPt.x, pt.y - bPt.y) < 0.1) {
        if (isTrueCornerVertex(i, boundaryPolygon)) {
          return true;
        }
      }
    }
  }
  return false;
}

function distanceToSegment(pt, p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq < 1e-9) {
    return Math.hypot(pt.x - p1.x, pt.y - p1.y);
  }
  let t = ((pt.x - p1.x) * dx + (pt.y - p1.y) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const projX = p1.x + t * dx;
  const projY = p1.y + t * dy;
  return Math.hypot(pt.x - projX, pt.y - projY);
}


function build3DStack() {
  if (!stack3DGroup) return;

  // Clear previous meshes safely
  while (stack3DGroup.children.length > 0) {
    const child = stack3DGroup.children[0];
    stack3DGroup.remove(child);
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose());
      } else {
        child.material.dispose();
      }
    }
  }

  const numFloors = state.numFloors;
  const floorHeight = state.floorHeight;

  // Materials
  const slabMat = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, roughness: 0.85, metalness: 0.1 });
  const columnMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.5, metalness: 0.6 });
  const beamMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.6, metalness: 0.4 });
  const balconySlabMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.8, metalness: 0.2 });
  const railingMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, transparent: true, opacity: 0.4, roughness: 0.1, metalness: 0.1, side: THREE.DoubleSide });
  const louverMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7, metalness: 0.0 });
  const vaultMat = new THREE.MeshStandardMaterial({ color: 0xf3f4f6, roughness: 0.8, metalness: 0.1, side: THREE.DoubleSide });
  const vaultWireframeMat = new THREE.MeshBasicMaterial({
    color: 0x374151,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1
  });

  const originalActiveId = state.activePolygonId;

  const columnsByFloor = Array.from({ length: numFloors }, () => []);
  const beamsByFloor = Array.from({ length: numFloors }, () => []);

  // Loop through all imported polygons with active scaffold
  state.importedPolygons.forEach(item => {
    if (!item.hasScaffold || item.polygon.length < 3) return;

    // Temporarily set active id so getters resolve to this item
    state.activePolygonId = item.id;

    let isCCW = true;
    let area = 0;
    for (let j = 0; j < state.polygon.length; j++) {
      const p1 = state.polygon[j];
      const p2 = state.polygon[(j + 1) % state.polygon.length];
      area += (p1.x * p2.y - p2.x * p1.y);
    }
    isCCW = area > 0;

    const boundaryNormals = [];
    for (let j = 0; j < state.polygon.length; j++) {
      const p1 = state.polygon[j];
      const p2 = state.polygon[(j + 1) % state.polygon.length];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const len = Math.hypot(dx, dy);
      let nx = 0, ny = 0;
      if (len > 1e-6) {
        if (isCCW) {
          nx = dy / len;
          ny = -dx / len;
        } else {
          nx = -dy / len;
          ny = dx / len;
        }
      }
      boundaryNormals.push(new Vector2D(nx, ny));
    }

    // Classify all boundary segments for context-aware facades
    const segmentContexts = [];
    for (let j = 0; j < state.polygon.length; j++) {
      const p1 = state.polygon[j];
      const p2 = state.polygon[(j + 1) % state.polygon.length];
      const normal = boundaryNormals[j];
      const context = classifyBoundarySegment(p1, p2, normal, item, state.importedPolygons);
      segmentContexts.push(context);
    }

    // Classify all structural bays (cells) for corner vault adaptivity
    const cellIsCorner = [];
    if (state.structuralBays) {
      state.structuralBays.forEach(cell => {
        cellIsCorner.push(isCornerCell(cell, state.polygon));
      });
    }

    const vertices = state.planarGraph ? state.planarGraph.vertices : state.polygon;
    const edges = [];
    if (state.planarGraph) {
      state.planarGraph.edges.forEach(edge => {
        const ptU = state.planarGraph.vertices[edge[0]];
        const ptV = state.planarGraph.vertices[edge[1]];
        edges.push([ptU, ptV]);
      });
    } else {
      for (let j = 0; j < state.polygon.length; j++) {
        edges.push([state.polygon[j], state.polygon[(j + 1) % state.polygon.length]]);
      }
    }

    // Initialize explicit 3D datastructures
    item.planarGraph3D = { vertices: [], edges: [] };
    item.structuralBays3D = [];

    // Build 3D planar graph
    const baseVertexCount = vertices.length;
    for (let f = 0; f < numFloors; f++) {
      const zFloor = f * floorHeight;
      vertices.forEach((v, idx) => {
        item.planarGraph3D.vertices.push({
          id: `vertex_P${item.id}_F${f}_V${idx}`,
          x: v.x,
          y: v.y,
          z: zFloor
        });
      });
    }

    for (let f = 0; f < numFloors; f++) {
      edges.forEach(([ptU, ptV], idx) => {
        const uIdx = f * baseVertexCount + vertices.indexOf(ptU);
        const vIdx = f * baseVertexCount + vertices.indexOf(ptV);
        item.planarGraph3D.edges.push({
          u: uIdx,
          v: vIdx,
          type: 'beam',
          floorIndex: f
        });
      });
    }

    for (let f = 0; f < numFloors - 1; f++) {
      vertices.forEach((v, idx) => {
        const uIdx = f * baseVertexCount + idx;
        const vIdx = (f + 1) * baseVertexCount + idx;
        item.planarGraph3D.edges.push({
          u: uIdx,
          v: vIdx,
          type: 'column',
          floorIndex: f
        });
      });
    }

    // Build 3D bays
    if (state.structuralBays) {
      state.structuralBays.forEach((cell, cellIdx) => {
        if (cell.length < 3) return;

        let classification = 'interior';
        const isCorner = cellIsCorner[cellIdx];
        if (isCorner) {
          classification = 'corner';
        } else {
          let hasCourtyard = false;
          let hasNeighbor = false;
          let hasOpenSpace = false;

          for (let k = 0; k < cell.length; k++) {
            const pt1 = cell[k];
            const pt2 = cell[(k + 1) % cell.length];
            const mid = { x: (pt1.x + pt2.x) / 2, y: (pt1.y + pt2.y) / 2 };

            for (let j = 0; j < state.polygon.length; j++) {
              const bp1 = state.polygon[j];
              const bp2 = state.polygon[(j + 1) % state.polygon.length];

              if (distanceToSegment(mid, bp1, bp2) < 0.1) {
                const context = segmentContexts[j];
                if (context === 'courtyard') hasCourtyard = true;
                else if (context === 'other_building') hasNeighbor = true;
                else if (context === 'open_space') hasOpenSpace = true;
              }
            }
          }

          if (hasCourtyard) classification = 'courtyard';
          else if (hasNeighbor) classification = 'neighbor';
          else if (hasOpenSpace) classification = 'open_space';
        }

        let colorHex = '#64748b'; // Cool Grey for interior
        if (classification === 'corner') colorHex = '#8b5cf6'; // Violet
        else if (classification === 'courtyard') colorHex = '#10b981'; // Emerald
        else if (classification === 'neighbor') colorHex = '#f59e0b'; // Amber
        else if (classification === 'open_space') colorHex = '#0ea5e9'; // Sky Blue

        for (let f = 0; f < numFloors; f++) {
          const zFloor = f * floorHeight;
          item.structuralBays3D.push({
            id: `${item.id}_bay_${cellIdx}_floor_${f}`,
            cellIdx: cellIdx,
            floorIndex: f,
            polygonId: item.id,
            vertices: cell.map(pt => ({ x: pt.x, y: pt.y, z: zFloor })),
            topVertices: cell.map(pt => ({ x: pt.x, y: pt.y, z: zFloor + floorHeight })),
            phenotype: classification,
            color: colorHex
          });
        }
      });
    }

    for (let i = 0; i < numFloors; i++) {
      const zFloor = i * floorHeight;
      const isGroundFloor = i === 0;
      const isRoofFloor = i === numFloors - 1;

      // 1. Floor Slabs
      if (state.showFloorSlabs) {
        let slabThick = state.slabThickness;
        if (isGroundFloor) {
          slabThick = state.slabThickness * 1.5;
        } else if (isRoofFloor) {
          slabThick = state.slabThickness * 0.8;
        }

        const slabShape = new THREE.Shape();
        slabShape.moveTo(state.polygon[0].x, state.polygon[0].y);
        for (let j = 1; j < state.polygon.length; j++) {
          slabShape.lineTo(state.polygon[j].x, state.polygon[j].y);
        }
        slabShape.closePath();

        const slabGeom = new THREE.ExtrudeGeometry(slabShape, { depth: slabThick, bevelEnabled: false });
        const slabMesh = new THREE.Mesh(slabGeom, slabMat);
        slabMesh.position.z = zFloor - slabThick;
        slabMesh.userData = { is3DStackMesh: true, polygonId: item.id };
        stack3DGroup.add(slabMesh);
      }

      // 2. Columns
      if (state.show3DColumns && !isRoofFloor) {
        let slabThick = state.slabThickness;
        if (isGroundFloor) slabThick = state.slabThickness * 1.5;
        else if (isRoofFloor) slabThick = state.slabThickness * 0.8;
        
        const colHeight = floorHeight - slabThick;

        let tapFactor = 1.0;
        if (numFloors > 1) {
          tapFactor = 1.4 - 0.7 * (i / (numFloors - 1));
        }
        const colRad = state.columnRadius * tapFactor;

        const colGeom = new THREE.CylinderGeometry(colRad, colRad, colHeight, 16);
        colGeom.rotateX(Math.PI / 2);

        // L-shaped corner pier geometry for boundary corner columns
        const lWidth = colRad * 2.2;
        const lThick = colRad * 0.8;
        const lShape = new THREE.Shape();
        lShape.moveTo(-lWidth/2, -lWidth/2);
        lShape.lineTo(lWidth/2, -lWidth/2);
        lShape.lineTo(lWidth/2, -lWidth/2 + lThick);
        lShape.lineTo(-lWidth/2 + lThick, -lWidth/2 + lThick);
        lShape.lineTo(-lWidth/2 + lThick, lWidth/2);
        lShape.lineTo(-lWidth/2, lWidth/2);
        lShape.closePath();
        const cornerGeom = new THREE.ExtrudeGeometry(lShape, { depth: colHeight, bevelEnabled: false });

        vertices.forEach(v => {
          let isDuplicate = false;
          for (const col of columnsByFloor[i]) {
            if (Math.hypot(v.x - col.x, v.y - col.y) < 0.2) {
              isDuplicate = true;
              break;
            }
          }
          if (isDuplicate) return;
          columnsByFloor[i].push({ x: v.x, y: v.y });

          let isCornerVertex = false;
          for (const bp of state.polygon) {
            if (Math.hypot(v.x - bp.x, v.y - bp.y) < 0.1) {
              isCornerVertex = true;
              break;
            }
          }

          let mesh;
          if (isCornerVertex) {
            mesh = new THREE.Mesh(cornerGeom, columnMat);
            mesh.position.set(v.x, v.y, zFloor);
          } else {
            mesh = new THREE.Mesh(colGeom, columnMat);
            mesh.position.set(v.x, v.y, zFloor + colHeight / 2);
          }
          mesh.userData = { is3DStackMesh: true, polygonId: item.id };
          stack3DGroup.add(mesh);
        });

        colGeom.dispose();
        cornerGeom.dispose();
      }

      // 3. Beams
      if (state.show3DBeams) {
        let tapFactor = 1.0;
        if (numFloors > 1) {
          tapFactor = 1.3 - 0.5 * (i / (numFloors - 1));
        }
        const bWidth = state.beamWidth * tapFactor;
        const bDepth = state.beamDepth * tapFactor;

        let slabThick = state.slabThickness;
        if (isGroundFloor) slabThick = state.slabThickness * 1.5;
        else if (isRoofFloor) slabThick = state.slabThickness * 0.8;

        edges.forEach(([ptU, ptV]) => {
          const dx = ptV.x - ptU.x;
          const dy = ptV.y - ptU.y;
          const len = Math.hypot(dx, dy);
          if (len < 1e-3) return;

          const midX = (ptU.x + ptV.x) / 2;
          const midY = (ptU.y + ptV.y) / 2;

          let isDuplicate = false;
          for (const beam of beamsByFloor[i]) {
            if (Math.hypot(midX - beam.x, midY - beam.y) < 0.2) {
              isDuplicate = true;
              break;
            }
          }
          if (isDuplicate) return;
          beamsByFloor[i].push({ x: midX, y: midY });

          const beamGeom = new THREE.BoxGeometry(len, bWidth, bDepth);
          const beamMesh = new THREE.Mesh(beamGeom, beamMat);
          const midZ = zFloor - slabThick - bDepth / 2;
          beamMesh.position.set(midX, midY, midZ);
          beamMesh.rotation.z = Math.atan2(dy, dx);
          beamMesh.userData = { is3DStackMesh: true, polygonId: item.id };
          stack3DGroup.add(beamMesh);
          
          beamGeom.dispose();
        });
      }

      // 4. Balconies (NULL on Ground & Roof, NULL if facing other buildings or touching partitions)
      if (state.showBalconies && !isGroundFloor && !isRoofFloor) {
        for (let j = 0; j < state.polygon.length; j++) {
          const p1 = state.polygon[j];
          const p2 = state.polygon[(j + 1) % state.polygon.length];
          const normal = boundaryNormals[j];
          const context = segmentContexts[j];
          const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          if (len < 1e-3) continue;

          if (context === 'other_building' || context === 'touching') {
            continue; // NULL balcony facing neighboring buildings or touching partitions for privacy
          }

          let bOffset = state.balconyOffset;
          if (context === 'courtyard') {
            bOffset = state.balconyOffset * 1.5; // Deeper social balcony facing courtyard
          }

          // Beveled rounded geometry for balconies
          const halfL = len / 2;
          const roundedShape = new THREE.Shape();
          const radius = Math.min(0.8, bOffset * 0.4);
          roundedShape.moveTo(-halfL, 0);
          roundedShape.lineTo(-halfL, bOffset - radius);
          roundedShape.quadraticCurveTo(-halfL, bOffset, -halfL + radius, bOffset);
          roundedShape.lineTo(halfL - radius, bOffset);
          roundedShape.quadraticCurveTo(halfL, bOffset, halfL, bOffset - radius);
          roundedShape.lineTo(halfL, 0);
          roundedShape.closePath();

          const balGeom = new THREE.ExtrudeGeometry(roundedShape, { depth: state.balconyThickness, bevelEnabled: false });
          const balMesh = new THREE.Mesh(balGeom, balconySlabMat);
          
          const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          const midZ = zFloor - state.balconyThickness;

          balMesh.position.set(midX, midY, midZ);
          balMesh.rotation.z = angle;
          balMesh.userData = { is3DStackMesh: true, polygonId: item.id };
          stack3DGroup.add(balMesh);

          // railing along the outer rounded edge
          const railingHeight = 1.1;
          const rThick = 0.02;
          const railShape = new THREE.Shape();
          railShape.moveTo(-halfL, bOffset - rThick);
          railShape.lineTo(halfL, bOffset - rThick);
          railShape.lineTo(halfL, bOffset);
          railShape.lineTo(-halfL, bOffset);
          railShape.closePath();

          const railGeom = new THREE.ExtrudeGeometry(railShape, { depth: railingHeight, bevelEnabled: false });
          const railMesh = new THREE.Mesh(railGeom, railingMat);
          railMesh.position.set(midX, midY, zFloor);
          railMesh.rotation.z = angle;
          railMesh.userData = { is3DStackMesh: true, polygonId: item.id };
          stack3DGroup.add(railMesh);

          balGeom.dispose();
          railGeom.dispose();
        }
      }

      // 5. Brise-Soleil (NULL on Ground, NULL on North/East facades, NULL on Roof floor)
      if (state.showBriseSoleil && !isGroundFloor && !isRoofFloor) {
        const sunDir = new Vector2D(-0.707, -0.707); // Southwest Sun Vector

        for (let j = 0; j < state.polygon.length; j++) {
          const p1 = state.polygon[j];
          const p2 = state.polygon[(j + 1) % state.polygon.length];
          const normal = boundaryNormals[j];
          const context = segmentContexts[j];
          const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          if (len < 1e-3) continue;

          const alignment = normal.dot(sunDir);

          let bDepth = state.louverDepth;
          let bSpacing = state.louverSpacing;
          let active = true;

          if (context === 'other_building') {
            bDepth = state.louverDepth * 0.8;
            bSpacing = state.louverSpacing * 0.6; // Dense privacy screening
          } else if (context === 'courtyard' || context === 'touching') {
            active = false; // NULL brise-soleil to keep courtyard views open / touching
          } else {
            if (alignment > 0) {
              bDepth = state.louverDepth * (0.3 + 1.2 * alignment); // Solar alignment gradient
              bSpacing = state.louverSpacing * (1.2 - 0.5 * alignment);
            } else {
              active = false; // NULL brise-soleil on shaded facades
            }
          }

          if (!active) continue;

          const numLouvers = Math.max(2, Math.floor(len / bSpacing));
          
          let slabThick = state.slabThickness;
          if (isGroundFloor) slabThick = state.slabThickness * 1.5;
          else if (isRoofFloor) slabThick = state.slabThickness * 0.8;
          const lHeight = floorHeight - slabThick;

          // Aerofoil Diamond shape louvers (CAGD)
          const lWidth = state.louverWidth;
          const foilShape = new THREE.Shape();
          foilShape.moveTo(0, -bDepth/2);
          foilShape.quadraticCurveTo(lWidth/2, 0, 0, bDepth/2);
          foilShape.quadraticCurveTo(-lWidth/2, 0, 0, -bDepth/2);
          foilShape.closePath();

          const louverGeom = new THREE.ExtrudeGeometry(foilShape, { depth: lHeight, bevelEnabled: false });

          for (let k = 0; k <= numLouvers; k++) {
            const t = k / numLouvers;
            const lx = p1.x + (p2.x - p1.x) * t + normal.x * 0.15;
            const ly = p1.y + (p2.y - p1.y) * t + normal.y * 0.15;
            
            const lMesh = new THREE.Mesh(louverGeom, louverMat);
            lMesh.position.set(lx, ly, zFloor);
            const segmentAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            lMesh.rotation.z = segmentAngle;
            lMesh.userData = { is3DStackMesh: true, polygonId: item.id };
            stack3DGroup.add(lMesh);
          }
          
          louverGeom.dispose();
        }
      }
    }

    // 6. Vaulted Roofs (Roof top floor only, Standard vs Butterfly)
    if (state.showVaultedRoofs && state.structuralBays && state.structuralBays.length > 0) {
      const zTop = (numFloors - 1) * floorHeight;
      const M = 8;

      state.structuralBays.forEach((cell, cellIdx) => {
        if (cell.length < 3) return;

        const centroid = getCentroid(cell);
        
        const cellHasCorner = cell.some(pt => {
          return state.polygon.some(bp => Math.hypot(pt.x - bp.x, pt.y - bp.y) < 0.1);
        });

        const vertexFlares = cell.map(pt => {
          const isCornerVert = state.polygon.some(bp => Math.hypot(pt.x - bp.x, pt.y - bp.y) < 0.1);
          return isCornerVert ? 1.0 : 0.0;
        });

        const cellVertices = [];
        const cellIndices = [];
        let globalIdx = 0;

        for (let j = 0; j < cell.length; j++) {
          const p1 = cell[j];
          const p2 = cell[(j + 1) % cell.length];
          const flareStart = vertexFlares[j];
          const flareEnd = vertexFlares[(j + 1) % cell.length];

          for (let u = 0; u <= M; u++) {
            for (let v = 0; v <= u; v++) {
              let bx = p1.x, by = p1.y;
              const tSeg = u > 0 ? v / u : 0.0;
              if (u > 0) {
                bx = p1.x + (p2.x - p1.x) * tSeg;
                by = p1.y + (p2.y - p1.y) * tSeg;
              }
              const tCent = u / M;
              const x = centroid.x + (bx - centroid.x) * tCent;
              const y = centroid.y + (by - centroid.y) * tCent;
              
              const vFlare = flareStart * (1 - tSeg) + flareEnd * tSeg;
              const cellFlare = cellHasCorner ? 1.0 : 0.0;
              const hCenter = state.vaultHeight * (1 - 0.8 * cellFlare);
              const hBoundary = state.vaultHeight * vFlare * cellFlare;
              const heightFactor = hCenter * (1 - tCent * tCent) + hBoundary * tCent * tCent;
              const z = zTop + heightFactor;

              cellVertices.push(x, y, z);
            }
          }

          const getIdx = (u, v) => {
            const rowStart = (u * (u + 1)) / 2;
            return globalIdx + rowStart + v;
          };

          for (let u = 0; u < M; u++) {
            for (let v = 0; v <= u; v++) {
              const i1 = getIdx(u, v);
              const i2 = getIdx(u + 1, v);
              const i3 = getIdx(u + 1, v + 1);
              cellIndices.push(i1, i2, i3);
              if (v < u) {
                const i4 = getIdx(u, v);
                const i5 = getIdx(u + 1, v + 1);
                const i6 = getIdx(u, v + 1);
                cellIndices.push(i4, i5, i6);
              }
            }
          }
          globalIdx += ((M + 1) * (M + 2)) / 2;
        }

        const vaultGeom = new THREE.BufferGeometry();
        vaultGeom.setAttribute('position', new THREE.Float32BufferAttribute(cellVertices, 3));
        vaultGeom.setIndex(cellIndices);
        vaultGeom.computeVertexNormals();

        const vaultMesh = new THREE.Mesh(vaultGeom, vaultMat);
        vaultMesh.userData = { is3DStackMesh: true, polygonId: item.id };
        stack3DGroup.add(vaultMesh);

        const vaultWireMesh = new THREE.Mesh(vaultGeom, vaultWireframeMat);
        vaultWireMesh.userData = { is3DStackMesh: true, polygonId: item.id };
        stack3DGroup.add(vaultWireMesh);
      });
    }

    // 7. 3D Cell Volumes (colored by classification)
    if (state.show3DCells && item.structuralBays3D && item.structuralBays3D.length > 0) {
      item.structuralBays3D.forEach(cell3d => {
        const cellShape = new THREE.Shape();
        cellShape.moveTo(cell3d.vertices[0].x, cell3d.vertices[0].y);
        for (let k = 1; k < cell3d.vertices.length; k++) {
          cellShape.lineTo(cell3d.vertices[k].x, cell3d.vertices[k].y);
        }
        cellShape.closePath();

        const cellVolumeGeom = new THREE.ExtrudeGeometry(cellShape, {
          depth: floorHeight,
          bevelEnabled: false
        });

        const colorVal = new THREE.Color(cell3d.color);
        const cellVolumeMat = new THREE.MeshStandardMaterial({
          color: colorVal,
          transparent: true,
          opacity: 0.12,
          roughness: 0.2,
          metalness: 0.1,
          side: THREE.DoubleSide,
          depthWrite: false
        });

        const cellVolumeMesh = new THREE.Mesh(cellVolumeGeom, cellVolumeMat);
        cellVolumeMesh.position.z = cell3d.vertices[0].z;
        cellVolumeMesh.userData = { is3DStackMesh: true, polygonId: item.id };
        stack3DGroup.add(cellVolumeMesh);

        // Add wireframe outline lines
        const edgeColor = new THREE.Color(cell3d.color).clone().multiplyScalar(0.7);
        const outlineMat = new THREE.LineBasicMaterial({
          color: edgeColor,
          transparent: true,
          opacity: 0.25
        });

        const outlinePts = cell3d.vertices.map(pt => new THREE.Vector3(pt.x, pt.y, pt.z));
        outlinePts.push(outlinePts[0]);
        const outlineGeom = new THREE.BufferGeometry().setFromPoints(outlinePts);
        const bottomLine = new THREE.Line(outlineGeom, outlineMat);
        bottomLine.userData = { is3DStackMesh: true, polygonId: item.id };
        stack3DGroup.add(bottomLine);

        const topOutlinePts = cell3d.topVertices.map(pt => new THREE.Vector3(pt.x, pt.y, pt.z));
        topOutlinePts.push(topOutlinePts[0]);
        const topOutlineGeom = new THREE.BufferGeometry().setFromPoints(topOutlinePts);
        const topLine = new THREE.Line(topOutlineGeom, outlineMat);
        topLine.userData = { is3DStackMesh: true, polygonId: item.id };
        stack3DGroup.add(topLine);

        for (let k = 0; k < cell3d.vertices.length; k++) {
          const ptB = cell3d.vertices[k];
          const vertPts = [
            new THREE.Vector3(ptB.x, ptB.y, ptB.z),
            new THREE.Vector3(ptB.x, ptB.y, ptB.z + floorHeight)
          ];
          const vertGeom = new THREE.BufferGeometry().setFromPoints(vertPts);
          const vertLine = new THREE.Line(vertGeom, outlineMat);
          vertLine.userData = { is3DStackMesh: true, polygonId: item.id };
          stack3DGroup.add(vertLine);
        }
      });
    }
  });

  // Restore active selected id
  state.activePolygonId = originalActiveId;
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

  // Collapsible MAT Parameters
  const headerMat = document.getElementById('header-mat-params');
  const sectionMat = document.getElementById('section-mat-params');
  if (headerMat && sectionMat) {
    headerMat.addEventListener('click', () => {
      sectionMat.classList.toggle('collapsed');
    });
  }

  // Collapsible Interactive Helpers
  const headerHelpers = document.getElementById('header-interactive-helpers');
  const sectionHelpers = document.getElementById('section-interactive-helpers');
  if (headerHelpers && sectionHelpers) {
    headerHelpers.addEventListener('click', () => {
      sectionHelpers.classList.toggle('collapsed');
    });
  }

  // Collapsible Rhino 3DM Integration
  const headerRhino = document.getElementById('header-rhino-integration');
  const sectionRhino = document.getElementById('section-rhino-integration');
  if (headerRhino && sectionRhino) {
    headerRhino.addEventListener('click', () => {
      sectionRhino.classList.toggle('collapsed');
    });
  }

  // Collapsible 3D Structural Stack
  const header3DStack = document.getElementById('header-3d-stack');
  const section3DStack = document.getElementById('section-3d-stack');
  if (header3DStack && section3DStack) {
    header3DStack.addEventListener('click', () => {
      section3DStack.classList.toggle('collapsed');
    });
  }

  // Collapsible Structural Workflow nested block
  const btnCollapseRibs = document.getElementById('btn-collapse-ribs-workflow');
  const dependentsBlock = document.getElementById('ribs-workflow-dependents');
  if (btnCollapseRibs && dependentsBlock) {
    btnCollapseRibs.addEventListener('click', () => {
      const isCollapsed = dependentsBlock.style.display === 'none';
      dependentsBlock.style.display = isCollapsed ? 'block' : 'none';
      btnCollapseRibs.classList.toggle('collapsed', !isCollapsed);
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
    if (transformControls) transformControls.detach();
    state.selectedVertexType = null;
    state.selectedVertexIdx = -1;
    state.selectedVertexOrig = null;
    draw();
  });

  document.getElementById('chk-edit-bays-mode').addEventListener('change', (e) => {
    state.editBaysMode = e.target.checked;
    state.selectedBayIndices = [];
    if (transformControls) transformControls.detach();
    state.selectedVertexType = null;
    state.selectedVertexIdx = -1;
    state.selectedVertexOrig = null;
    
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
      if (transformControls) transformControls.detach();
      state.selectedVertexType = null;
      state.selectedVertexIdx = -1;
      state.selectedVertexOrig = null;
      updateBaySelectionUI();
      recomputeMAT();
    }
  });

  const deleteSelectedBays = () => {
    if (state.selectedBayIndices.length > 0) {
      state.selectedBayIndices.forEach(idx => {
        state.bayEdits.push({ type: 'delete', point: getCentroid(state.structuralBays[idx]) });
      });
      state.selectedBayIndices = [];
      if (transformControls) transformControls.detach();
      state.selectedVertexType = null;
      state.selectedVertexIdx = -1;
      state.selectedVertexOrig = null;
      updateBaySelectionUI();
      recomputeMAT();
    }
  };

  document.getElementById('btn-delete-bays').addEventListener('click', deleteSelectedBays);

  window.addEventListener('keydown', (e) => {
    if (state.editBaysMode && (e.key === 'Delete' || e.key === 'Del')) {
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        return;
      }
      deleteSelectedBays();
    }
  });

  document.getElementById('btn-reset-bay-edits').addEventListener('click', () => {
    state.bayEdits = [];
    state.graphVertexOverrides.clear();
    state.selectedBayIndices = [];
    if (transformControls) transformControls.detach();
    state.selectedVertexType = null;
    state.selectedVertexIdx = -1;
    state.selectedVertexOrig = null;
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
    state.importedPolygons = [];
    state.activePolygonId = 'default';
    state.customVertices = [];
    state.polygon = [];
    state.graphVertexOverrides.clear();
    state.bayEdits = [];
    state.selectedBayIndices = [];
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    if (transformControls) transformControls.detach();
    state.selectedVertexType = null;
    state.selectedVertexIdx = -1;
    state.selectedVertexOrig = null;
    
    btnDrawCustom.style.display = 'none';
    btnClearCustom.style.display = 'inline-flex';
    drawIndicator.style.display = 'flex';
    
    cards.forEach(c => c.classList.remove('active'));
    document.getElementById('card-custom').style.display = 'flex';
    document.getElementById('card-custom').classList.add('active');

    draw();
  });

  btnClearCustom.addEventListener('click', () => {
    state.importedPolygons = [];
    state.activePolygonId = 'default';
    state.customVertices = [];
    state.polygon = [];
    state.isDrawing = true;
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    if (transformControls) transformControls.detach();
    state.selectedVertexType = null;
    state.selectedVertexIdx = -1;
    state.selectedVertexOrig = null;
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
            checkbox.checked = false;

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

  // Slider - Number of Floors
  const sFloors = document.getElementById('slider-floors');
  const valFloors = document.getElementById('val-floors');
  if (sFloors && valFloors) {
    sFloors.addEventListener('input', (e) => {
      state.numFloors = parseInt(e.target.value);
      valFloors.innerText = state.numFloors;
      draw();
    });
  }

  // Slider - Floor Height
  const sFloorHeight = document.getElementById('slider-floor-height');
  const valFloorHeight = document.getElementById('val-floor-height');
  if (sFloorHeight && valFloorHeight) {
    sFloorHeight.addEventListener('input', (e) => {
      state.floorHeight = parseFloat(e.target.value);
      valFloorHeight.innerText = `${state.floorHeight.toFixed(1)}m`;
      draw();
    });
  }

  // Checkboxes
  const chkColumns = document.getElementById('chk-3d-columns');
  if (chkColumns) {
    chkColumns.addEventListener('change', (e) => {
      state.show3DColumns = e.target.checked;
      draw();
    });
  }

  const chkBeams = document.getElementById('chk-3d-beams');
  if (chkBeams) {
    chkBeams.addEventListener('change', (e) => {
      state.show3DBeams = e.target.checked;
      draw();
    });
  }

  const chkSlabs = document.getElementById('chk-3d-slabs');
  if (chkSlabs) {
    chkSlabs.addEventListener('change', (e) => {
      state.showFloorSlabs = e.target.checked;
      draw();
    });
  }

  const chkBalconies = document.getElementById('chk-3d-balconies');
  if (chkBalconies) {
    chkBalconies.addEventListener('change', (e) => {
      state.showBalconies = e.target.checked;
      draw();
    });
  }

  const chkBriseSoleil = document.getElementById('chk-3d-brisesoleil');
  if (chkBriseSoleil) {
    chkBriseSoleil.addEventListener('change', (e) => {
      state.showBriseSoleil = e.target.checked;
      draw();
    });
  }

  const chkVaults = document.getElementById('chk-3d-vaults');
  if (chkVaults) {
    chkVaults.addEventListener('change', (e) => {
      state.showVaultedRoofs = e.target.checked;
      draw();
    });
  }

  const chkCells = document.getElementById('chk-3d-cells');
  if (chkCells) {
    chkCells.addEventListener('change', (e) => {
      state.show3DCells = e.target.checked;
      draw();
    });
  }
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
  if (e.button === 1 || e.button === 2) return;

  if (e.button === 0) {
    if (transformControls && (transformControls.dragging || transformControls.axis)) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const target = getIntersectionPoint(e);
    const worldPos = new Vector2D(target.x, target.y);

    raycaster.setFromCamera(mouse, cameraActive);
    raycaster.params.Line.threshold = 0.4;

    const allChildren = [...meshesGroup.children, ...stack3DGroup.children];
    const intersects = raycaster.intersectObjects(allChildren, true);

    if (state.editBaysMode) {
      let clickedGraphObject = false;
      for (const hit of intersects) {
        if (hit.object.userData && hit.object.userData.isGraphVertex && hit.object.userData.polygonId === state.activePolygonId) {
          const idx = hit.object.userData.index;
          const v = state.planarGraph.vertices[idx];
          
          state.selectedVertexType = 'graph';
          state.selectedVertexIdx = idx;
          state.selectedVertexOrig = state.planarGraph.originalVertices[idx];
          
          manipulatorTarget.position.set(v.x, v.y, 0.035);
          transformControls.attach(manipulatorTarget);
          
          clickedGraphObject = true;
          draw();
          break;
        }
      }

      if (!clickedGraphObject) {
        let hitPolygonId = null;
        let hitObject = null;
        for (const hit of intersects) {
          if (hit.object.userData && hit.object.userData.polygonId) {
            hitPolygonId = hit.object.userData.polygonId;
            hitObject = hit.object;
            break;
          }
        }

        if (hitPolygonId) {
          const polyItem = state.importedPolygons.find(p => p.id === hitPolygonId);
          if (polyItem) {
            if (!polyItem.hasScaffold) {
              polyItem.hasScaffold = true;
              state.activePolygonId = polyItem.id;
              recomputeMAT();
            } else {
              if (hitObject.userData.isPolygonLine || hitObject.userData.is3DStackMesh) {
                polyItem.hasScaffold = false;
                recomputeMAT();
              } else {
                const clickedIdx = polyItem.structuralBays.findIndex(bay => pointInPolygon(worldPos, bay));
                if (clickedIdx !== -1) {
                  if (state.activePolygonId !== polyItem.id) {
                    state.activePolygonId = polyItem.id;
                    draw();
                  }
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
                } else {
                  polyItem.hasScaffold = false;
                  recomputeMAT();
                }
              }
            }
          }
        } else {
          transformControls.detach();
          state.selectedVertexType = null;
          state.selectedVertexIdx = -1;
          state.selectedVertexOrig = null;
          draw();
        }
      }
      return;
    } else {
      if (state.isDrawing) {
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
      } else {
        let clickedHandle = false;
        for (const hit of intersects) {
          if (hit.object.userData && hit.object.userData.isHandle && hit.object.userData.polygonId === state.activePolygonId) {
            const idx = hit.object.userData.index;
            const v = state.polygon[idx];
            
            state.selectedVertexType = 'polygon';
            state.selectedVertexIdx = idx;
            state.selectedVertexOrig = null;
            
            manipulatorTarget.position.set(v.x, v.y, 0.03);
            transformControls.attach(manipulatorTarget);
            
            clickedHandle = true;
            draw();
            break;
          }
        }

        if (!clickedHandle) {
          let hitPolygonId = null;
          for (const hit of intersects) {
            if (hit.object.userData && hit.object.userData.polygonId) {
              hitPolygonId = hit.object.userData.polygonId;
              break;
            }
          }

          if (hitPolygonId) {
            const polyItem = state.importedPolygons.find(p => p.id === hitPolygonId);
            if (polyItem) {
              if (!polyItem.hasScaffold) {
                polyItem.hasScaffold = true;
                state.activePolygonId = polyItem.id;
                recomputeMAT();
              } else {
                polyItem.hasScaffold = false;
                recomputeMAT();
              }
            }
          } else {
            transformControls.detach();
            state.selectedVertexType = null;
            state.selectedVertexIdx = -1;
            state.selectedVertexOrig = null;
            draw();
          }
        }
      }
    }
  }
}

function handleMouseMove(e) {
  const target = getIntersectionPoint(e);
  const worldPos = new Vector2D(target.x, target.y);
  state.mouseWorldPos = worldPos;

  if (state.isDrawing) {
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
  // Dragging is handled by TransformControls dragging-changed listener.
}

function handleMouseLeave() {
  state.mouseWorldPos = null;
  state.hoveredMedialPoint = null;
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
