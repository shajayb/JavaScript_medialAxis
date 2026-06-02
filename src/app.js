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
    x: 0,
    y: 0,
    zoom: 1.0,
    isPanning: false,
    panStart: null
  },
  mouseWorldPos: null,
};

// Canvas Setup
const canvas = document.getElementById('polygon-canvas');
const ctx = canvas.getContext('2d');
const wrapper = document.getElementById('canvas-wrapper');

// Screen/World Space transformations
function screenToWorld(screenPos) {
  return new Vector2D(
    (screenPos.x - state.camera.x) / state.camera.zoom,
    (screenPos.y - state.camera.y) / state.camera.zoom
  );
}

function worldToScreen(worldPos) {
  return new Vector2D(
    worldPos.x * state.camera.zoom + state.camera.x,
    worldPos.y * state.camera.zoom + state.camera.y
  );
}

function updateCameraHUD() {
  const elInfo = document.getElementById('camera-info');
  if (elInfo) {
    elInfo.innerText = `Zoom: ${state.camera.zoom.toFixed(2)}x`;
  }
}

function resetCameraView() {
  if (state.polygon.length === 0) {
    state.camera = { x: 0, y: 0, zoom: 1.0, isPanning: false, panStart: null };
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
  
  // Fit with 30% padding
  const padding = 0.7;
  const scaleX = (canvas.width * padding) / wSpan;
  const scaleY = (canvas.height * padding) / hSpan;
  const zoom = Math.min(2.5, Math.max(0.2, Math.min(scaleX, scaleY)));
  
  state.camera.zoom = zoom;
  state.camera.x = canvas.width / 2 - cx * zoom;
  state.camera.y = canvas.height / 2 - cy * zoom;
  
  updateCameraHUD();
  requestAnimationFrame(draw);
}

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
  resetCameraView();
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

  // Compute exact trimmed Voronoi cells from interior simplified nodes (junctions)
  const interiorSeeds = nodes.filter(p => !p.isEndPoint);
  skeleton.voronoiCells = mat.computeVoronoiCells(interiorSeeds, canvas.width, canvas.height);
  
  state.skeletonData = skeleton;
  
  state.computeTime = performance.now() - start;

  // Dynamically sync visibility of merge distance and ribs sliders
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

  // Reset hovered point and redraw
  state.hoveredMedialPoint = null;
  requestAnimationFrame(draw);
}

// Drawing Routine
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(state.camera.x, state.camera.y);
  ctx.scale(state.camera.zoom, state.camera.zoom);

  // 1. Grid Background
  drawGrid();

  // 2. Draw Polygon Face & Trimmed Voronoi Partition
  if (state.polygon.length >= 3) {
    ctx.beginPath();
    ctx.moveTo(state.polygon[0].x, state.polygon[0].y);
    for (let i = 1; i < state.polygon.length; i++) {
      ctx.lineTo(state.polygon[i].x, state.polygon[i].y);
    }
    ctx.closePath();

    // Elegant glowing flat fill (transparent, zooms perfectly with camera)
    ctx.fillStyle = 'rgba(99, 102, 241, 0.05)';
    ctx.fill();

    // Draw Trimmed Voronoi Cells if active
    if (state.showVoronoi && state.skeletonData.voronoiCells.length > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(state.polygon[0].x, state.polygon[0].y);
      for (let i = 1; i < state.polygon.length; i++) {
        ctx.lineTo(state.polygon[i].x, state.polygon[i].y);
      }
      ctx.closePath();
      ctx.clip(); // Clip everything to polygon boundary

      // Draw each cell
      state.skeletonData.voronoiCells.forEach((cell, idx) => {
        if (cell.polygon.length >= 3) {
          ctx.beginPath();
          ctx.moveTo(cell.polygon[0].x, cell.polygon[0].y);
          for (let k = 1; k < cell.polygon.length; k++) {
            ctx.lineTo(cell.polygon[k].x, cell.polygon[k].y);
          }
          ctx.closePath();

          // Smooth semi-transparent HSL color using golden ratio distribution
          const hue = (idx * 137.5) % 360;
          ctx.fillStyle = `hsla(${hue}, 65%, 45%, 0.16)`;
          ctx.fill();

          // Subtle glowing cell boundary borders
          ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.35)`;
          ctx.lineWidth = 1.8 / state.camera.zoom;
          ctx.setLineDash([4 / state.camera.zoom, 2 / state.camera.zoom]);
          ctx.stroke();
        }
      });
      ctx.restore();
    }

    // Polygon boundary border
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.45)';
    ctx.lineWidth = 2.5 / state.camera.zoom;
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
    ctx.lineWidth = 2 / state.camera.zoom;
    ctx.setLineDash([4 / state.camera.zoom, 4 / state.camera.zoom]);
    ctx.stroke();

    // Visual helper: dashed line to current mouse cursor in world space
    if (state.mouseWorldPos) {
      ctx.beginPath();
      ctx.moveTo(state.customVertices[state.customVertices.length - 1].x, state.customVertices[state.customVertices.length - 1].y);
      ctx.lineTo(state.mouseWorldPos.x, state.mouseWorldPos.y);
      
      // If we have at least 3 vertices, draw a secondary dashed line to the 1st vertex to show closure helper
      if (state.customVertices.length >= 3) {
        // Highlight connection to closure vertex if hovered near first vertex
        const screenMouse = worldToScreen(state.mouseWorldPos);
        const screenFirst = worldToScreen(state.customVertices[0]);
        const isNearFirst = screenMouse.dist(screenFirst) < 12;
        
        ctx.strokeStyle = isNearFirst ? '#10b981' : 'rgba(236, 72, 153, 0.4)'; // green if closing
        ctx.lineWidth = (isNearFirst ? 2.5 : 1.5) / state.camera.zoom;
        ctx.lineTo(state.customVertices[0].x, state.customVertices[0].y);
      } else {
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)';
        ctx.lineWidth = 1.5 / state.camera.zoom;
      }
      ctx.stroke();
    }

    // Draw custom points
    for (let i = 0; i < state.customVertices.length; i++) {
      const v = state.customVertices[i];
      ctx.beginPath();
      
      // If drawing, make first vertex slightly larger and styled differently when hoverable for closure
      const isFirst = i === 0 && state.customVertices.length >= 3;
      let isHoveringFirst = false;
      if (isFirst && state.mouseWorldPos) {
        const screenMouse = worldToScreen(state.mouseWorldPos);
        const screenFirst = worldToScreen(v);
        isHoveringFirst = screenMouse.dist(screenFirst) < 12;
      }
      
      const rad = (isHoveringFirst ? 7 : (isFirst ? 5.5 : 4)) / state.camera.zoom;
      ctx.arc(v.x, v.y, rad, 0, Math.PI * 2);
      ctx.fillStyle = isHoveringFirst ? '#10b981' : (isFirst ? '#6366f1' : '#ec4899');
      ctx.shadowColor = isHoveringFirst ? 'rgba(16, 185, 129, 0.8)' : (isFirst ? 'rgba(99, 102, 241, 0.8)' : 'rgba(236, 72, 153, 0.6)');
      ctx.shadowBlur = (isHoveringFirst ? 12 : 6) / state.camera.zoom;
      ctx.fill();
      
      if (isFirst) {
        ctx.beginPath();
        ctx.arc(v.x, v.y, (isHoveringFirst ? 11 : 9) / state.camera.zoom, 0, Math.PI * 2);
        ctx.strokeStyle = isHoveringFirst ? 'rgba(16, 185, 129, 0.4)' : 'rgba(99, 102, 241, 0.4)';
        ctx.lineWidth = 1.5 / state.camera.zoom;
        ctx.stroke();
      }
    }
    ctx.shadowBlur = 0; // Reset shadow
  }

  // 4. Draw Medial Axis Skeleton
  if (state.showSkeleton && state.polygon.length >= 3) {
    const pts = state.skeletonData.regularPoints;
    
    if (state.simplifySkeleton) {
      // Draw simplified skeleton: straight, high-contrast, glowing red/pink branches directly between junctions & ends
      ctx.shadowColor = 'rgba(244, 63, 94, 0.6)';
      ctx.shadowBlur = 10 / state.camera.zoom;
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 3.5 / state.camera.zoom;
      ctx.setLineDash([]);
      
      // If pruning is active, filter out any segments that connect to an endPoint (leaf node)
      const segmentsToDraw = state.pruneBranches
        ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
        : state.skeletonData.simplifiedSegments;

      for (const seg of segmentsToDraw) {
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
      ctx.lineWidth = 1.5 / state.camera.zoom;
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
        ctx.arc(p.x, p.y, 1.8 / state.camera.zoom, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee';
        ctx.fill();
      }
    }

    // Draw isolated Junction/End points as larger hot-pink indicators
    // If simplified, draw the merged centroid nodes instead of the raw overlapping junction points
    let nodesToDraw = state.simplifySkeleton 
      ? state.skeletonData.simplifiedNodes 
      : state.skeletonData.junctionPoints;

    // If pruning is active, hide the convex boundary end points (leaves)
    if (state.pruneBranches) {
      nodesToDraw = nodesToDraw.filter(p => !p.isEndPoint);
    }

    for (const jp of nodesToDraw) {
      ctx.beginPath();
      ctx.arc(jp.x, jp.y, (jp.isEndPoint ? 4 : 5) / state.camera.zoom, 0, Math.PI * 2);
      ctx.fillStyle = jp.isEndPoint ? '#f43f5e' : '#ec4899';
      ctx.shadowColor = jp.isEndPoint ? 'rgba(244, 63, 94, 0.8)' : 'rgba(236, 72, 153, 0.8)';
      ctx.shadowBlur = 10 / state.camera.zoom;
      ctx.fill();

      // Add concentric outer ring
      ctx.beginPath();
      ctx.arc(jp.x, jp.y, (jp.isEndPoint ? 7 : 9) / state.camera.zoom, 0, Math.PI * 2);
      ctx.strokeStyle = jp.isEndPoint ? 'rgba(244, 63, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)';
      ctx.lineWidth = 1 / state.camera.zoom;
      ctx.stroke();
    }
    ctx.shadowBlur = 0; // reset

    // C2. Draw Structural Ribs if active
    if (state.showSkeleton && state.showRibs) {
      const segmentsToDivide = state.pruneBranches
        ? state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
        : state.skeletonData.simplifiedSegments;

      ctx.shadowBlur = 0;

      for (const seg of segmentsToDivide) {
        const startPt = seg.start;
        const endPt = seg.end;
        const vec = endPt.sub(startPt);
        const len = vec.length();

        // Calculate the number of divisions dynamically based on segment length and target spacing
        const N = Math.max(1, Math.round(len / state.ribSpacing));

        for (let k = 1; k < N; k++) {
          const t = k / N;
          const D_k = startPt.add(vec.scale(t));

          // Draw division point on the spine
          ctx.beginPath();
          ctx.arc(D_k.x, D_k.y, 3 / state.camera.zoom, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          // Find all closest points on all segments to D_k
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

          // Sort candidates by distance to find the closest points
          candidates.sort((a, b) => a.dist - b.dist);

          const closest1 = candidates[0];
          let closest2 = null;

          // Find the closest opposing boundary point (dot product < 0.5, i.e., angle > 60 degrees)
          for (let i = 1; i < candidates.length; i++) {
            const cand = candidates[i];
            const dot = closest1.vector.dot(cand.vector);
            if (dot < 0.5) {
              closest2 = cand;
              break;
            }
          }

          const ribsToDraw = [closest1];
          if (closest2) {
            ribsToDraw.push(closest2);
          }

          for (const rib of ribsToDraw) {
            // Draw structural rib line to boundary
            ctx.beginPath();
            ctx.moveTo(D_k.x, D_k.y);
            ctx.lineTo(rib.point.x, rib.point.y);
            ctx.strokeStyle = 'rgba(244, 63, 94, 0.65)'; // Hot-pink red ribs
            ctx.lineWidth = 1.5 / state.camera.zoom;
            ctx.setLineDash([2 / state.camera.zoom, 2 / state.camera.zoom]);
            ctx.stroke();

            // Draw contact point on boundary
            ctx.beginPath();
            ctx.arc(rib.point.x, rib.point.y, 3 / state.camera.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#f43f5e';
            ctx.fill();
          }
        }
      }

      // Draw ribs for active internal nodes (junctions)
      const activeInternalNodes = new Set();
      for (const seg of segmentsToDivide) {
        if (!seg.start.isEndPoint) activeInternalNodes.add(seg.start);
        if (!seg.end.isEndPoint) activeInternalNodes.add(seg.end);
      }

      for (const node of activeInternalNodes) {
        // Find all closest points on all segments to the node
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

        // Sort candidates by distance
        candidates.sort((a, b) => a.dist - b.dist);

        const closest1 = candidates[0];
        let closest2 = null;
        let closest3 = null;

        // Find the second closest point in a different direction (dot product < 0.5)
        for (let i = 1; i < candidates.length; i++) {
          const cand = candidates[i];
          if (closest1.vector.dot(cand.vector) < 0.5) {
            closest2 = cand;
            break;
          }
        }

        // Find the third closest point in a different direction (dot product < 0.5 with both)
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

        const ribsToDraw = [closest1];
        if (closest2) ribsToDraw.push(closest2);
        if (closest3) ribsToDraw.push(closest3);

        for (const rib of ribsToDraw) {
          // Draw structural rib line to boundary
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(rib.point.x, rib.point.y);
          ctx.strokeStyle = 'rgba(244, 63, 94, 0.65)'; // Hot-pink red ribs
          ctx.lineWidth = 1.5 / state.camera.zoom;
          ctx.setLineDash([2 / state.camera.zoom, 2 / state.camera.zoom]);
          ctx.stroke();

          // Draw contact point on boundary
          ctx.beginPath();
          ctx.arc(rib.point.x, rib.point.y, 3 / state.camera.zoom, 0, Math.PI * 2);
          ctx.fillStyle = '#f43f5e';
          ctx.fill();
        }
      }
    }
  }

  // 5. Draw Interactive Inscribed Circumcircle & Governors
  if (state.hoverCircle && state.hoveredMedialPoint && state.polygon.length >= 3) {
    const hp = state.hoveredMedialPoint;
    const rad = hp.radius;

    // Draw Inscribed Circle
    ctx.beginPath();
    ctx.arc(hp.x, hp.y, rad, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.85)';
    ctx.lineWidth = 2.0 / state.camera.zoom;
    ctx.setLineDash([3 / state.camera.zoom, 3 / state.camera.zoom]);
    ctx.stroke();

    // Subtle center-glow inside circumcircle
    const circleGrad = ctx.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, rad);
    circleGrad.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
    circleGrad.addColorStop(1, 'rgba(6, 182, 212, 0.01)');
    ctx.fillStyle = circleGrad;
    ctx.fill();

    // Highlight Center Point
    ctx.beginPath();
    ctx.arc(hp.x, hp.y, 4 / state.camera.zoom, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 8 / state.camera.zoom;
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
          ctx.lineWidth = 1.5 / state.camera.zoom;
          ctx.setLineDash([2 / state.camera.zoom, 2 / state.camera.zoom]);
          ctx.stroke();

          // Highlight contact point
          ctx.beginPath();
          ctx.arc(cp.x, cp.y, 4.5 / state.camera.zoom, 0, Math.PI * 2);
          ctx.fillStyle = '#f43f5e';
          ctx.shadowBlur = 6 / state.camera.zoom;
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
      ctx.arc(v.x, v.y, 6 / state.camera.zoom, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(18, 20, 28, 0.8)';
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.0 / state.camera.zoom;
      ctx.fill();
      ctx.stroke();

      // Little center-core in dot
      ctx.beginPath();
      ctx.arc(v.x, v.y, 2 / state.camera.zoom, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
  }

  ctx.restore();
}

// Background Grid Drawer in World Space
function drawGrid() {
  const gridSize = 40;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
  ctx.lineWidth = 0.8 / state.camera.zoom;
  ctx.setLineDash([]);
  
  const extent = 5000;
  
  // Vertical lines
  for (let x = -extent; x <= extent; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, -extent);
    ctx.lineTo(x, extent);
    ctx.stroke();
  }
  
  // Horizontal lines
  for (let y = -extent; y <= extent; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(-extent, y);
    ctx.lineTo(extent, y);
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
  document.getElementById('chk-prune-branches').addEventListener('change', (e) => {
    state.pruneBranches = e.target.checked;
    if (state.pruneBranches) {
      // Auto-enable simplify skeleton as it relies on the MST nodes
      state.simplifySkeleton = true;
      const chkSimplify = document.getElementById('chk-simplify-skeleton');
      if (chkSimplify) chkSimplify.checked = true;
    }
    recomputeMAT();
  });
  document.getElementById('chk-show-ribs').addEventListener('change', (e) => {
    state.showRibs = e.target.checked;
    if (state.showRibs) {
      // Auto-enable simplify skeleton as ribs are constructed on MST segments
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
    requestAnimationFrame(draw);
  });
  
  // Slider - Merge distance for vertices
  const sMerge = document.getElementById('slider-merge');
  const valMerge = document.getElementById('val-merge');
  sMerge.addEventListener('input', (e) => {
    state.mergeThreshold = parseInt(e.target.value);
    valMerge.innerText = `${state.mergeThreshold}px`;
    recomputeMAT();
  });

  document.getElementById('chk-show-voronoi').addEventListener('change', (e) => {
    state.showVoronoi = e.target.checked;
    requestAnimationFrame(draw);
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
  canvas.addEventListener('mouseleave', handleMouseLeave);
  canvas.addEventListener('wheel', handleWheel, { passive: false });
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  const btnResetView = document.getElementById('btn-reset-view');
  if (btnResetView) {
    btnResetView.addEventListener('click', resetCameraView);
  }
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
  // Right-click or Middle-click always pans in all modes
  if (e.button === 1 || e.button === 2) {
    state.camera.isPanning = true;
    state.camera.panStart = new Vector2D(e.clientX, e.clientY);
    e.preventDefault();
    return;
  }

  if (e.button === 0) {
    const pos = getMousePos(e);
    const worldPos = screenToWorld(pos);

    if (state.isDrawing) {
      // If clicking near the first vertex and we have at least 3 points, close it
      if (state.customVertices.length >= 3) {
        const screenFirst = worldToScreen(state.customVertices[0]);
        const dist = pos.dist(screenFirst);
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
      state.customVertices.push(worldPos);
      requestAnimationFrame(draw);
    } else {
      // Check if clicking near any vertex of the polygon to drag it
      let clickedHandle = false;
      for (let i = 0; i < state.polygon.length; i++) {
        const v = state.polygon[i];
        const screenV = worldToScreen(v);
        if (pos.dist(screenV) < 12) {
          state.draggedVertexIdx = i;
          document.getElementById('status-dot').classList.add('loading');
          document.getElementById('status-text').innerText = `Dragging vertex ${i}...`;
          clickedHandle = true;
          break;
        }
      }
      
      // If not clicking a vertex, Left-click on empty space pans!
      if (!clickedHandle) {
        state.camera.isPanning = true;
        state.camera.panStart = new Vector2D(e.clientX, e.clientY);
      }
    }
  }
}

function handleMouseMove(e) {
  const pos = getMousePos(e);
  const worldPos = screenToWorld(pos);
  state.mouseWorldPos = worldPos;

  if (state.camera.isPanning) {
    const dx = e.clientX - state.camera.panStart.x;
    const dy = e.clientY - state.camera.panStart.y;
    state.camera.x += dx;
    state.camera.y += dy;
    state.camera.panStart = new Vector2D(e.clientX, e.clientY);
    updateCameraHUD();
    requestAnimationFrame(draw);
  }

  if (state.draggedVertexIdx !== -1) {
    // Update dragged vertex position (in world coordinates)
    state.polygon[state.draggedVertexIdx] = worldPos;
    recomputeMAT();
  } else if (state.isDrawing) {
    requestAnimationFrame(draw);
  } else if (state.hoverCircle && state.polygon.length >= 3 && !state.camera.isPanning) {
    // Hover logic: Find closest medial point to mouse (measured in screen space distance)
    let bestPoint = null;
    let minDist = 20; // 20px active hover range in screen space

    // Check regular skeleton points
    for (const p of state.skeletonData.regularPoints) {
      const screenP = worldToScreen(p);
      const dist = pos.dist(screenP);
      if (dist < minDist) {
        minDist = dist;
        bestPoint = p;
      }
    }

    // Check junction points
    for (const jp of state.skeletonData.junctionPoints) {
      if (jp.isEndPoint) continue; // skip end points at polygon boundary (radius=0)
      const screenJP = worldToScreen(jp);
      const dist = pos.dist(screenJP);
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

function handleMouseUp(e) {
  state.camera.isPanning = false;
  if (state.draggedVertexIdx !== -1) {
    state.draggedVertexIdx = -1;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
}

function handleMouseLeave() {
  state.camera.isPanning = false;
  state.mouseWorldPos = null;
  state.hoveredMedialPoint = null;
  if (state.draggedVertexIdx !== -1) {
    state.draggedVertexIdx = -1;
    document.getElementById('status-dot').classList.remove('loading');
    recomputeMAT();
  }
  requestAnimationFrame(draw);
}

function handleWheel(e) {
  e.preventDefault();
  const mousePos = getMousePos(e);
  const oldZoom = state.camera.zoom;
  const zoomFactor = 1.1;
  let newZoom = e.deltaY < 0 ? oldZoom * zoomFactor : oldZoom / zoomFactor;
  
  // Constrain zoom levels between 0.2x and 10.0x
  newZoom = Math.min(10.0, Math.max(0.2, newZoom));
  
  // Center zoom dynamically at current cursor position
  state.camera.x = mousePos.x - (mousePos.x - state.camera.x) * (newZoom / oldZoom);
  state.camera.y = mousePos.y - (mousePos.y - state.camera.y) * (newZoom / oldZoom);
  state.camera.zoom = newZoom;
  
  updateCameraHUD();
  requestAnimationFrame(draw);
}

// Initialise App
window.addEventListener('load', () => {
  resizeCanvas();
  setupEventListeners();
  window.addEventListener('resize', resizeCanvas);
});
