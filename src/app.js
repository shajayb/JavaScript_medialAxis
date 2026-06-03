import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MedialAxisTransform } from './medialAxis.js';
import { Vector2D } from './utils/vector2d.js';
import { distanceToPolygon, closestPointOnSegment } from './utils/geometry.js';

// Application State
const state = {
  polygon: [],
  activePreset: 'tree',
  samplesPerEdge: 25,
  precision: 1e-5,
  showSkeleton: true,
  simplifySkeleton: false,
  mergeThreshold: 20,
  showVoronoi: false,
  pruneBranches: false,
  showRibs: false,
  ribSpacing: 50,
  hoverCircle: true,
  showGovernors: true,
  isDrawing: false,
  customVertices: [],
  draggedVertexIdx: -1,
  hoveredMedialPoint: null,
  skeletonData: { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [], voronoiCells: [] },
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

  // 7. Infinite CAD Grid Floor on XY Plane
  const gridHelper = new THREE.GridHelper(5000, 125, 0xe2e8f0, 0xf1f5f9); // Beautiful light gray grid lines
  gridHelper.rotation.x = Math.PI / 2; // Rotate grid to align with XY plane
  gridHelper.position.z = -0.01; // Slightly below Z=0 to prevent z-fighting
  scene.add(gridHelper);

  // 8. Meshes Parent Group
  meshesGroup = new THREE.Group();
  scene.add(meshesGroup);

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

// Polygon Presets Generators (centered around 0,0 in world space)
const presets = {
  cross: (w, h) => {
    const s = Math.min(w, h);
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
    const s = Math.min(w, h);
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
    const s = Math.min(w, h);
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
    const s = Math.min(w, h);
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
    const s = Math.min(w, h);
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
    const s = Math.min(w, h);
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
  skeleton.simplifiedSegments = segments;
  skeleton.simplifiedNodes = nodes;

  // Compute exact trimmed Voronoi cells from interior nodes (Z-plane bounds)
  const interiorSeeds = nodes.filter(p => !p.isEndPoint);
  skeleton.voronoiCells = mat.computeVoronoiCells(interiorSeeds, 2000, 2000);
  
  state.skeletonData = skeleton;
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
      color: 0x4f46e5, // Royal Indigo
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const faceMesh = new THREE.Mesh(faceGeom, faceMat);
    faceMesh.position.z = 0.005; // Slightly off the grid floor
    meshesGroup.add(faceMesh);

    // Trimmed Voronoi Partition Cells
    if (state.showVoronoi && state.skeletonData.voronoiCells.length > 0) {
      state.skeletonData.voronoiCells.forEach((cell, idx) => {
        if (cell.polygon.length >= 3) {
          const cellShape = new THREE.Shape();
          cellShape.moveTo(cell.polygon[0].x, cell.polygon[0].y);
          for (let k = 1; k < cell.polygon.length; k++) {
            cellShape.lineTo(cell.polygon[k].x, cell.polygon[k].y);
          }
          cellShape.closePath();

          const hue = (idx * 137.5) % 360;
          const vGeom = new THREE.ShapeGeometry(cellShape);
          const vMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`hsl(${hue}, 70%, 55%)`),
            transparent: true,
            opacity: 0.12,
            side: THREE.DoubleSide,
            depthWrite: false
          });
          const vMesh = new THREE.Mesh(vGeom, vMat);
          vMesh.position.z = 0.01;
          meshesGroup.add(vMesh);

          // Subtle Glowing Cell Boundary Lines
          const vPts = cell.polygon.map(p => new THREE.Vector3(p.x, p.y, 0.012));
          vPts.push(vPts[0]); // Close outline
          const vBorderGeom = new THREE.BufferGeometry().setFromPoints(vPts);
          const vBorderMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(`hsl(${hue}, 85%, 65%)`),
            transparent: true,
            opacity: 0.4
          });
          const vBorderLine = new THREE.Line(vBorderGeom, vBorderMat);
          meshesGroup.add(vBorderLine);
        }
      });
    }

    // Polygon Thick Boundary Outline (Slightly raised Z to overlay clean)
    const boundaryPts = state.polygon.map(p => new THREE.Vector3(p.x, p.y, 0.02));
    boundaryPts.push(boundaryPts[0]); // Close boundary
    const boundaryGeom = new THREE.BufferGeometry().setFromPoints(boundaryPts);
    const boundaryMat = new THREE.LineBasicMaterial({
      color: 0x4f46e5, // Royal Indigo
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
        color: 0xdb2777, // Glowing Magenta
        linewidth: 1.5
      });
      const previewLine = new THREE.Line(previewGeom, previewMat);
      meshesGroup.add(previewLine);
    }

    // Custom points spheres
    const customSphGeom = new THREE.SphereGeometry(3.5, 12, 12);
    for (let i = 0; i < state.customVertices.length; i++) {
      const v = state.customVertices[i];
      const isFirst = i === 0 && state.customVertices.length >= 3;
      let isNearFirst = false;
      if (isFirst && state.mouseWorldPos) {
        const d = Math.sqrt((v.x - state.mouseWorldPos.x)**2 + (v.y - state.mouseWorldPos.y)**2);
        isNearFirst = d < 12; // 12 world units closure threshold
      }

      const customSphMat = new THREE.MeshBasicMaterial({
        color: isNearFirst ? 0x10b981 : (isFirst ? 0x4f46e5 : 0xdb2777)
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
      // Render Simplified MST straight branches as elegant thick glowing lines
      const segmentsToDraw = state.pruneBranches
        ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
        : state.skeletonData.simplifiedSegments;

      const simplifiedLineMat = new THREE.LineBasicMaterial({
        color: 0xdb2777, // Vibrant electric magenta
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
        color: 0x0ea5e9, // Sky Blue
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

      // Small cyan 3D beads along standard curves
      const regularBeadGeom = new THREE.SphereGeometry(1.6, 8, 8);
      const regularBeadMat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
      for (const p of pts) {
        const bead = new THREE.Mesh(regularBeadGeom, regularBeadMat);
        bead.position.set(p.x, p.y, 0.03);
        meshesGroup.add(bead);
      }
    }

    // Draw valence 3+ Junction/End node spheres
    let nodesToDraw = state.simplifySkeleton 
      ? state.skeletonData.simplifiedNodes 
      : state.skeletonData.junctionPoints;

    if (state.pruneBranches) {
      nodesToDraw = nodesToDraw.filter(p => !p.isEndPoint);
    }

    for (const jp of nodesToDraw) {
      const rad = jp.isEndPoint ? 4.2 : 5.5;
      const nodeGeom = new THREE.SphereGeometry(rad, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: jp.isEndPoint ? 0xdb2777 : 0xec4899,
        emissive: jp.isEndPoint ? 0x831843 : 0x9d174d,
        emissiveIntensity: 0.45,
        roughness: 0.15,
        metalness: 0.1
      });
      const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
      nodeMesh.position.set(jp.x, jp.y, 0.035);
      meshesGroup.add(nodeMesh);

      // Cyber concentric flat ring helper on floor plane around nodes
      const ringGeom = new THREE.RingGeometry(rad * 1.5, rad * 1.8, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: jp.isEndPoint ? 0xdb2777 : 0xec4899,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.set(jp.x, jp.y, 0.035);
      meshesGroup.add(ringMesh);
    }

    // Render Structural Ribs dropping columns to boundary
    if (state.showRibs) {
      const segmentsToDivide = state.pruneBranches
        ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
        : state.skeletonData.simplifiedSegments;

      const beadGeom = new THREE.SphereGeometry(2.4, 8, 8);
      const beadMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White spine division beads

      const ribMat = new THREE.LineBasicMaterial({
        color: 0xdb2777, // Vibrant pink dashed vector lines
        transparent: true,
        opacity: 0.65
      });

      const contactGeom = new THREE.SphereGeometry(2.2, 8, 8);
      const contactMat = new THREE.MeshBasicMaterial({ color: 0xdb2777 });

      const candidateRibs = [];

      // Draw segment division ribs
      for (const seg of segmentsToDivide) {
        const startPt = seg.start;
        const endPt = seg.end;
        const vec = endPt.sub(startPt);
        const len = vec.length();
        const N = Math.max(1, Math.round(len / state.ribSpacing));

        for (let k = 1; k < N; k++) {
          const t = k / N;
          const D_k = startPt.add(vec.scale(t));

          // Sphere bead on spine
          const bead = new THREE.Mesh(beadGeom, beadMat);
          bead.position.set(D_k.x, D_k.y, 0.038);
          meshesGroup.add(bead);

          // Find boundary contacts
          const candidates = [];
          for (let i = 0; i < state.polygon.length; i++) {
            const v1 = state.polygon[i];
            const v2 = state.polygon[(i + 1) % state.polygon.length];
            const cp = closestPointOnSegment(D_k, v1, v2);
            const dist = D_k.dist(cp);
            candidates.push({
              point: cp,
              dist: dist,
              vector: cp.sub(D_k).normalize()
            });
          }
          candidates.sort((a, b) => a.dist - b.dist);

          const closest1 = candidates[0];
          let closest2 = null;
          for (let i = 1; i < candidates.length; i++) {
            const cand = candidates[i];
            if (closest1.vector.dot(cand.vector) < 0.5) {
              closest2 = cand;
              break;
            }
          }

          candidateRibs.push({
            source: D_k,
            target: closest1.point,
            priority: 1
          });
          if (closest2) {
            candidateRibs.push({
              source: D_k,
              target: closest2.point,
              priority: 2
            });
          }
        }
      }

      // Draw active junction nodes 3-directional ribs
      const activeInternalNodes = new Set();
      for (const seg of segmentsToDivide) {
        if (!seg.start.isEndPoint) activeInternalNodes.add(seg.start);
        if (!seg.end.isEndPoint) activeInternalNodes.add(seg.end);
      }

      for (const node of activeInternalNodes) {
        const candidates = [];
        for (let i = 0; i < state.polygon.length; i++) {
          const v1 = state.polygon[i];
          const v2 = state.polygon[(i + 1) % state.polygon.length];
          const cp = closestPointOnSegment(node, v1, v2);
          const dist = node.dist(cp);
          candidates.push({
            point: cp,
            dist: dist,
            vector: cp.sub(node).normalize()
          });
        }
        candidates.sort((a, b) => a.dist - b.dist);

        const closest1 = candidates[0];
        let closest2 = null;
        let closest3 = null;

        for (let i = 1; i < candidates.length; i++) {
          const cand = candidates[i];
          if (closest1.vector.dot(cand.vector) < 0.5) {
            closest2 = cand;
            break;
          }
        }

        if (closest2) {
          for (let i = 1; i < candidates.length; i++) {
            const cand = candidates[i];
            if (cand === closest2) continue;
            if (closest1.vector.dot(cand.vector) < 0.5 && closest2.vector.dot(cand.vector) < 0.5) {
              closest3 = cand;
              break;
            }
          }
        }

        candidateRibs.push({
          source: node,
          target: closest1.point,
          priority: 1
        });
        if (closest2) {
          candidateRibs.push({
            source: node,
            target: closest2.point,
            priority: 2
          });
        }
        if (closest3) {
          candidateRibs.push({
            source: node,
            target: closest3.point,
            priority: 3
          });
        }
      }

      // Sort candidates: higher priority first, then shorter lengths
      const sortedCandidates = candidateRibs.map(r => ({
        ...r,
        length: r.source.dist(r.target)
      })).sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        return a.length - b.length;
      });

      // Helper to check intersection between two ribs
      const ribsCross = (r1, r2) => {
        // Skip if they share a source or target point (within small epsilon)
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
        // 1. Check if it crosses the polygon boundary
        if (crossesPolygonBoundary(candidate.source, candidate.target, state.polygon)) {
          continue;
        }

        // 2. Check if it crosses any already accepted rib
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
    const ringGeom = new THREE.RingGeometry(rad - 1, rad + 1, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9, // Sky Blue
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
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const disc = new THREE.Mesh(discGeom, discMat);
    disc.position.set(hp.x, hp.y, 0.04);
    meshesGroup.add(disc);

    // Glowing core center sphere
    const centerGeom = new THREE.SphereGeometry(3.6, 8, 8);
    const centerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centerMesh = new THREE.Mesh(centerGeom, centerMat);
    centerMesh.position.set(hp.x, hp.y, 0.048);
    meshesGroup.add(centerMesh);

    // Governors tangency line indicators
    if (state.showGovernors) {
      const govLineMat = new THREE.LineBasicMaterial({
        color: 0xdb2777, // Vibrant pink
        linewidth: 1.5
      });
      const govSphGeom = new THREE.SphereGeometry(2.5, 8, 8);
      const govSphMat = new THREE.MeshBasicMaterial({ color: 0xdb2777 });

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

  // 6. Interactive Polygon Vertices Drag Handles (Chrome Indigo Spheres)
  if (!state.isDrawing && state.polygon.length > 0) {
    const handleGeom = new THREE.SphereGeometry(5.2, 16, 16);
    const coreGeom = new THREE.SphereGeometry(1.8, 8, 8);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < state.polygon.length; i++) {
      const v = state.polygon[i];
      const handleMat = new THREE.MeshStandardMaterial({
        color: 0x4f46e5, // Royal Indigo
        roughness: 0.15,
        metalness: 0.2
      });

      const handle = new THREE.Mesh(handleGeom, handleMat);
      handle.position.set(v.x, v.y, 0.03);
      handle.userData = { isHandle: true, index: i }; // Raycast tag
      meshesGroup.add(handle);

      // Embedded white core core
      const core = new THREE.Mesh(coreGeom, coreMat);
      core.position.set(v.x, v.y, 0.038);
      meshesGroup.add(core);
    }
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
  
  // Slider - Rib Spacing
  const sRibs = document.getElementById('slider-ribs');
  const valRibs = document.getElementById('val-ribs');
  sRibs.addEventListener('input', (e) => {
    state.ribSpacing = parseInt(e.target.value);
    valRibs.innerText = `${state.ribSpacing}px`;
    draw();
  });
  
  // Slider - Merge distance
  const sMerge = document.getElementById('slider-merge');
  const valMerge = document.getElementById('val-merge');
  sMerge.addEventListener('input', (e) => {
    state.mergeThreshold = parseInt(e.target.value);
    valMerge.innerText = `${state.mergeThreshold}px`;
    recomputeMAT();
  });

  document.getElementById('chk-show-voronoi').addEventListener('change', (e) => {
    state.showVoronoi = e.target.checked;
    draw();
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

  if (state.draggedVertexIdx !== -1) {
    // Drag handle: Update vertex position in world coordinates
    state.polygon[state.draggedVertexIdx] = worldPos;
    recomputeMAT();
  } else if (state.isDrawing) {
    draw();
  } else if (state.hoverCircle && state.polygon.length >= 3 && !controls.state === -1) {
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
  if (state.draggedVertexIdx !== -1) {
    state.draggedVertexIdx = -1;
    controls.enabled = true; // Re-enable camera rotation
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
}

function handleMouseLeave() {
  state.mouseWorldPos = null;
  state.hoveredMedialPoint = null;
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
