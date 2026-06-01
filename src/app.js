import { MedialAxisTransform } from './medialAxis.js';
import { Vector2D } from './utils/vector2d.js';
import { distanceToPolygon, closestPointOnSegment } from './utils/geometry.js';

// Application State
const state = {
  polygon: [],
  activePreset: 'square',
  samplesPerEdge: 25,
  precision: 1e-5,
  showSkeleton: true,
  simplifySkeleton: false,
  mergeThreshold: 20,
  hoverCircle: true,
  showGovernors: true,
  isDrawing: false,
  customVertices: [],
  draggedVertexIdx: -1,
  hoveredMedialPoint: null,
  skeletonData: { regularPoints: [], junctionPoints: [], simplifiedSegments: [], simplifiedNodes: [] },
  computeTime: 0,
};

// Canvas Setup
const canvas = document.getElementById('polygon-canvas');
const ctx = canvas.getContext('2d');
const wrapper = document.getElementById('canvas-wrapper');

// Resize canvas to match wrapper bounds or default to 800x600
function resizeCanvas() {
  const rect = wrapper.getBoundingClientRect();
  canvas.width = Math.max(800, rect.width - 40);
  canvas.height = Math.max(600, rect.height - 40);
  loadPreset(state.activePreset);
}

// Polygon Presets Generators
const presets = {
  square: (w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const size = Math.min(w, h) * 0.55;
    return [
      new Vector2D(cx - size / 2, cy - size / 2),
      new Vector2D(cx + size / 2, cy - size / 2),
      new Vector2D(cx + size / 2, cy + size / 2),
      new Vector2D(cx - size / 2, cy + size / 2),
    ];
  },
  triangle: (w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const size = Math.min(w, h) * 0.65;
    return [
      new Vector2D(cx, cy - size * 0.55),
      new Vector2D(cx + size * 0.5, cy + size * 0.35),
      new Vector2D(cx - size * 0.5, cy + size * 0.35),
    ];
  },
  lshape: (w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const size = Math.min(w, h) * 0.6;
    const half = size / 2;
    const inner = size * 0.15;
    return [
      new Vector2D(cx - half, cy - half),
      new Vector2D(cx + inner, cy - half),
      new Vector2D(cx + inner, cy + inner),
      new Vector2D(cx + half, cy + inner),
      new Vector2D(cx + half, cy + half),
      new Vector2D(cx - half, cy + half),
    ];
  },
  star: (w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const rOuter = Math.min(w, h) * 0.35;
    const rInner = rOuter * 0.4;
    const points = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      const r = i % 2 === 0 ? rOuter : rInner;
      points.push(new Vector2D(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r));
    }
    return points;
  },
  crown: (w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const size = Math.min(w, h) * 0.6;
    return [
      new Vector2D(cx - size * 0.5, cy - size * 0.2),
      new Vector2D(cx - size * 0.3, cy + size * 0.3),
      new Vector2D(cx, cy - size * 0.05),
      new Vector2D(cx + size * 0.3, cy + size * 0.3),
      new Vector2D(cx + size * 0.5, cy - size * 0.2),
      new Vector2D(cx + size * 0.45, cy - size * 0.4),
      new Vector2D(cx + size * 0.2, cy - size * 0.1),
      new Vector2D(cx, cy - size * 0.45),
      new Vector2D(cx - size * 0.2, cy - size * 0.1),
      new Vector2D(cx - size * 0.45, cy - size * 0.4),
    ];
  }
};

// Loads a preset shape and triggers computation
function loadPreset(name) {
  state.activePreset = name;
  if (name !== 'custom') {
    state.polygon = presets[name](canvas.width, canvas.height);
    state.isDrawing = false;
    document.getElementById('btn-clear-custom').style.display = 'none';
    document.getElementById('drawing-indicator').style.display = 'none';
    document.getElementById('card-custom').style.display = 'none';
  }
  recomputeMAT();
}

// Compute the Medial Axis Transform using core library class
function recomputeMAT() {
  if (state.polygon.length < 3) {
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    requestAnimationFrame(draw);
    return;
  }

  const start = performance.now();
  
  // Initialize MAT with user tolerances
  const mat = new MedialAxisTransform(state.polygon, {
    epsilon: state.precision,
    tangentEpsilon: state.precision * 10.0, // padded threshold for governor identification
  });

  // Perform structured tracing with bisection and effective normal calculation
  const skeleton = mat.computeStructuredSkeleton(state.samplesPerEdge);
  
  // Compute simplified straight branches & merged nodes using distance threshold if active
  const { segments, nodes } = mat.simplifySkeleton(
    skeleton.regularPoints, 
    skeleton.junctionPoints, 
    state.mergeThreshold
  );
  skeleton.simplifiedSegments = segments;
  skeleton.simplifiedNodes = nodes;
  state.skeletonData = skeleton;
  
  state.computeTime = performance.now() - start;

  // Dynamically sync visibility of merge distance slider
  const containerMerge = document.getElementById('container-merge-slider');
  if (containerMerge) {
    containerMerge.style.display = state.simplifySkeleton ? 'block' : 'none';
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

  // Reset hovered point and redraw
  state.hoveredMedialPoint = null;
  requestAnimationFrame(draw);
}

// Drawing Routine
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Grid Background
  drawGrid();

  // 2. Draw Polygon Face
  if (state.polygon.length >= 3) {
    ctx.beginPath();
    ctx.moveTo(state.polygon[0].x, state.polygon[0].y);
    for (let i = 1; i < state.polygon.length; i++) {
      ctx.lineTo(state.polygon[i].x, state.polygon[i].y);
    }
    ctx.closePath();

    // Elegant glowing fill
    const grad = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 50,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    grad.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
    grad.addColorStop(1, 'rgba(6, 182, 212, 0.02)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Polygon boundary border
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.45)';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([]);
    ctx.stroke();
  }

  // 3. Draw Custom Polygon Draw preview (if drawing)
  if (state.isDrawing && state.customVertices.length > 0) {
    ctx.beginPath();
    ctx.moveTo(state.customVertices[0].x, state.customVertices[0].y);
    for (let i = 1; i < state.customVertices.length; i++) {
      ctx.lineTo(state.customVertices[i].x, state.customVertices[i].y);
    }
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.stroke();

    // Draw custom points
    for (const v of state.customVertices) {
      ctx.beginPath();
      ctx.arc(v.x, v.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ec4899';
      ctx.shadowColor = 'rgba(236, 72, 153, 0.6)';
      ctx.shadowBlur = 6;
      ctx.fill();
    }
    ctx.shadowBlur = 0; // Reset shadow
  }

  // 4. Draw Medial Axis Skeleton
  if (state.showSkeleton && state.polygon.length >= 3) {
    const pts = state.skeletonData.regularPoints;
    
    if (state.simplifySkeleton) {
      // Draw simplified skeleton: straight, high-contrast, glowing red/pink branches directly between junctions & ends
      ctx.shadowColor = 'rgba(244, 63, 94, 0.6)';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 3.5;
      ctx.setLineDash([]);
      
      for (const seg of state.skeletonData.simplifiedSegments) {
        ctx.beginPath();
        ctx.moveTo(seg.start.x, seg.start.y);
        ctx.lineTo(seg.end.x, seg.end.y);
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    } else {
      // Draw default curved skeleton
      const samples = state.samplesPerEdge;
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      
      for (let i = 0; i < state.polygon.length; i++) {
        ctx.beginPath();
        let hasStart = false;
        for (let j = 0; j < samples; j++) {
          const idx = i * samples + j;
          if (pts[idx]) {
            if (!hasStart) {
              ctx.moveTo(pts[idx].x, pts[idx].y);
              hasStart = true;
            } else {
              ctx.lineTo(pts[idx].x, pts[idx].y);
            }
          }
        }
        ctx.stroke();
      }

      // Draw regular skeleton points as small glowing cyan beads
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee';
        ctx.fill();
      }
    }

    // Draw isolated Junction/End points as larger hot-pink indicators
    // If simplified, draw the merged centroid nodes instead of the raw overlapping junction points
    const nodesToDraw = state.simplifySkeleton 
      ? state.skeletonData.simplifiedNodes 
      : state.skeletonData.junctionPoints;

    for (const jp of nodesToDraw) {
      ctx.beginPath();
      ctx.arc(jp.x, jp.y, jp.isEndPoint ? 4 : 5, 0, Math.PI * 2);
      ctx.fillStyle = jp.isEndPoint ? '#f43f5e' : '#ec4899';
      ctx.shadowColor = jp.isEndPoint ? 'rgba(244, 63, 94, 0.8)' : 'rgba(236, 72, 153, 0.8)';
      ctx.shadowBlur = 10;
      ctx.fill();

      // Add concentric outer ring
      ctx.beginPath();
      ctx.arc(jp.x, jp.y, jp.isEndPoint ? 7 : 9, 0, Math.PI * 2);
      ctx.strokeStyle = jp.isEndPoint ? 'rgba(244, 63, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.shadowBlur = 0; // reset
  }

  // 5. Draw Interactive Inscribed Circumcircle & Governors
  if (state.hoverCircle && state.hoveredMedialPoint && state.polygon.length >= 3) {
    const hp = state.hoveredMedialPoint;
    const rad = hp.radius;

    // Draw Inscribed Circle
    ctx.beginPath();
    ctx.arc(hp.x, hp.y, rad, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.85)';
    ctx.lineWidth = 2.0;
    ctx.setLineDash([3, 3]);
    ctx.stroke();

    // Subtle center-glow inside circumcircle
    const circleGrad = ctx.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, rad);
    circleGrad.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
    circleGrad.addColorStop(1, 'rgba(6, 182, 212, 0.01)');
    ctx.fillStyle = circleGrad;
    ctx.fill();

    // Highlight Center Point
    ctx.beginPath();
    ctx.arc(hp.x, hp.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw Governors (Tangency vectors)
    if (state.showGovernors) {
      for (let i = 0; i < state.polygon.length; i++) {
        const v1 = state.polygon[i];
        const v2 = state.polygon[(i + 1) % state.polygon.length];
        const cp = closestPointOnSegment(hp, v1, v2);
        
        // If it is a governor (distance matches radius with tolerance)
        if (Math.abs(hp.dist(cp) - rad) < 0.2) {
          ctx.beginPath();
          ctx.moveTo(hp.x, hp.y);
          ctx.lineTo(cp.x, cp.y);
          ctx.strokeStyle = '#f43f5e'; // Pinkish-red governor vector
          ctx.lineWidth = 1.5;
          ctx.setLineDash([2, 2]);
          ctx.stroke();

          // Highlight contact point
          ctx.beginPath();
          ctx.arc(cp.x, cp.y, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = '#f43f5e';
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(244, 63, 94, 0.6)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }
  }

  // 6. Draw Polygon Vertices (interactive handles)
  if (!state.isDrawing && state.polygon.length > 0) {
    for (let i = 0; i < state.polygon.length; i++) {
      const v = state.polygon[i];
      ctx.beginPath();
      ctx.arc(v.x, v.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(18, 20, 28, 0.8)';
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.0;
      ctx.fill();
      ctx.stroke();

      // Little center-core in dot
      ctx.beginPath();
      ctx.arc(v.x, v.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
  }
}

// Background Grid Drawer
function drawGrid() {
  const gridSize = 40;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
  ctx.lineWidth = 0.8;
  
  // Vertical lines
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  
  // Horizontal lines
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

// Setup Event Listeners for UI
function setupEventListeners() {
  // Preset Clicks
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
    requestAnimationFrame(draw);
  });
  document.getElementById('chk-simplify-skeleton').addEventListener('change', (e) => {
    state.simplifySkeleton = e.target.checked;
    recomputeMAT();
  });
  
  // Slider - Merge distance for vertices
  const sMerge = document.getElementById('slider-merge');
  const valMerge = document.getElementById('val-merge');
  sMerge.addEventListener('input', (e) => {
    state.mergeThreshold = parseInt(e.target.value);
    valMerge.innerText = `${state.mergeThreshold}px`;
    recomputeMAT();
  });

  document.getElementById('chk-hover-circle').addEventListener('change', (e) => {
    state.hoverCircle = e.target.checked;
    if (!state.hoverCircle) state.hoveredMedialPoint = null;
    requestAnimationFrame(draw);
  });
  document.getElementById('chk-show-governors').addEventListener('change', (e) => {
    state.showGovernors = e.target.checked;
    requestAnimationFrame(draw);
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
    
    // UI states
    btnDrawCustom.style.display = 'none';
    btnClearCustom.style.display = 'inline-flex';
    drawIndicator.style.display = 'flex';
    
    cards.forEach(c => c.classList.remove('active'));
    document.getElementById('card-custom').style.display = 'flex';
    document.getElementById('card-custom').classList.add('active');

    requestAnimationFrame(draw);
  });

  btnClearCustom.addEventListener('click', () => {
    state.customVertices = [];
    state.polygon = [];
    state.isDrawing = true;
    state.skeletonData = { regularPoints: [], junctionPoints: [] };
    requestAnimationFrame(draw);
  });

  // Interactive mouse canvas dragging/drawing
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('mouseleave', handleMouseUp);
}

// Mouse Event Handlers
function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return new Vector2D(
    e.clientX - rect.left,
    e.clientY - rect.top
  );
}

function handleMouseDown(e) {
  const pos = getMousePos(e);

  if (state.isDrawing) {
    // If clicking near the first vertex and we have at least 3 points, close it
    if (state.customVertices.length >= 3) {
      const dist = pos.dist(state.customVertices[0]);
      if (dist < 12) {
        state.polygon = [...state.customVertices];
        state.isDrawing = false;
        
        document.getElementById('btn-draw-custom').style.display = 'inline-flex';
        document.getElementById('btn-clear-custom').style.display = 'none';
        document.getElementById('drawing-indicator').style.display = 'none';
        
        recomputeMAT();
        return;
      }
    }
    state.customVertices.push(pos);
    requestAnimationFrame(draw);
  } else {
    // Check if clicking near any vertex of the polygon to drag it
    for (let i = 0; i < state.polygon.length; i++) {
      const v = state.polygon[i];
      if (pos.dist(v) < 12) {
        state.draggedVertexIdx = i;
        document.getElementById('status-dot').classList.add('loading');
        document.getElementById('status-text').innerText = `Dragging vertex ${i}...`;
        break;
      }
    }
  }
}

function handleMouseMove(e) {
  const pos = getMousePos(e);

  if (state.isDrawing) {
    // If drawing, update preview lines (handled inside draw() dynamically)
    requestAnimationFrame(draw);
  } else if (state.draggedVertexIdx !== -1) {
    // Update dragged vertex position
    state.polygon[state.draggedVertexIdx] = pos;
    recomputeMAT();
  } else if (state.hoverCircle && state.polygon.length >= 3) {
    // Hover logic: Find closest medial point to mouse
    let bestPoint = null;
    let minDist = 20; // 20px active hover range

    // Check regular skeleton points
    for (const p of state.skeletonData.regularPoints) {
      const dist = pos.dist(p);
      if (dist < minDist) {
        minDist = dist;
        bestPoint = p;
      }
    }

    // Check junction points
    for (const jp of state.skeletonData.junctionPoints) {
      if (jp.isEndPoint) continue; // skip end points at polygon boundary (radius=0)
      const dist = pos.dist(jp);
      if (dist < minDist) {
        minDist = dist;
        bestPoint = jp;
      }
    }

    if (bestPoint !== state.hoveredMedialPoint) {
      state.hoveredMedialPoint = bestPoint;
      requestAnimationFrame(draw);
    }
  }
}

function handleMouseUp() {
  if (state.draggedVertexIdx !== -1) {
    state.draggedVertexIdx = -1;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
}

// Initialise App
window.addEventListener('load', () => {
  resizeCanvas();
  setupEventListeners();
  window.addEventListener('resize', resizeCanvas);
});
