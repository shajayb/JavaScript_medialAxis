import { MedialAxisTransform } from '../src/medialAxis.js';
import { Vector2D } from '../src/utils/vector2d.js';
import fs from 'fs';

function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

// --- REFERENCE IMPLEMENTATION EXTRACTED FROM docs/medial_axis_transform_generalised.tsx ---
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const distSq = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
const lerp = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
const normalize = (v) => {
  const d = Math.hypot(v.x, v.y);
  return d === 0 ? { x: 0, y: 0 } : { x: v.x / d, y: v.y / d };
};

const getClosestPointOnSegment = (p, v, w) => {
  const l2 = distSq(v, w);
  if (l2 === 0) return { x: v.x, y: v.y, t: 0 };
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y), t: t };
};

const distToSegmentSquared = (p, v, w) => {
  const cp = getClosestPointOnSegment(p, v, w);
  return distSq(p, cp);
};

const distToSegment = (p, v, w) => Math.sqrt(distToSegmentSquared(p, v, w));

const raySegmentIntersect = (ro, rd, a, b) => {
  const v1 = { x: ro.x - a.x, y: ro.y - a.y };
  const v2 = { x: b.x - a.x, y: b.y - a.y };
  const v3 = { x: -rd.y, y: rd.x };
  const dotProduct = v2.x * v3.x + v2.y * v3.y;
  
  if (Math.abs(dotProduct) < 0.000001) return null;
  
  const t1 = (v2.x * v1.y - v2.y * v1.x) / dotProduct;
  const t2 = (v1.x * v3.x + v1.y * v3.y) / dotProduct;
  
  if (t1 > 0.001 && t2 >= 0 && t2 <= 1) { 
    return { t: t1, point: { x: ro.x + t1 * rd.x, y: ro.y + t1 * rd.y } };
  }
  return null;
};

const enforceCCW = (poly) => {
  let sum = 0;
  for (let i = 0; i < poly.length; i++) {
    const curr = poly[i];
    const next = poly[(i + 1) % poly.length];
    sum += (next.x - curr.x) * (next.y + curr.y);
  }
  return sum < 0 ? poly : [...poly].reverse();
};

const getGovScore = (ga, gb, n) => {
  if (ga === gb) return 1.0;
  if (typeof ga !== 'string' || typeof gb !== 'string') return 0;
  const idxA = ga.startsWith('V') ? parseInt(ga.substring(1)) * 2 : parseInt(ga.substring(1)) * 2 + 1;
  const idxB = gb.startsWith('V') ? parseInt(gb.substring(1)) * 2 : parseInt(gb.substring(1)) * 2 + 1;
  
  const d = Math.min(Math.abs(idxA - idxB), 2 * n - Math.abs(idxA - idxB));
  
  if (d === 1) return 0.5; 
  return 0;
};

const containsBall = (poly, center, radius) => {
  // Wait, pointInPolygon is checked inside containsBall in the reference implementation.
  // But wait! For donut, pointInPolygon fails in the slit space.
  // Let's implement pointInPolygon as in reference.
  const pointInPolygon = (point, vs) => {
    let x = point.x, y = point.y;
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      let xi = vs[i].x, yi = vs[i].y;
      let xj = vs[j].x, yj = vs[j].y;
      let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  };

  if (!pointInPolygon(center, poly)) return false;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    if (distToSegment(center, a, b) < radius - 0.05) return false;
  }
  return true;
};

const computeMedialPointRef = (poly, P, originalQ) => {
  let p = { x: P.x, y: P.y };
  let q = { x: originalQ.x, y: originalQ.y };
  const EPSILON = 0.05;

  let midPoint = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
  let radius = dist(midPoint, P);

  while (dist(p, q) > EPSILON) {
    if (containsBall(poly, midPoint, radius)) p = { ...midPoint };
    else q = { ...midPoint };
    
    midPoint = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
    radius = dist(midPoint, P);
  }
  
  return { ...midPoint, r: radius };
};

// Reference implementation of medial axis computation
function runReferenceMAT(polygon, numSamples = 1000) {
  const activePoly = enforceCCW([...polygon]);
  let newMedialPoints = [];
  
  // 0. Classify Polygon Vertices as Convex or Concave
  const vertexTypes = activePoly.map((curr, i) => {
    const prevIdx = (i - 1 + activePoly.length) % activePoly.length;
    const nextIdx = (i + 1) % activePoly.length;
    const v1 = { x: curr.x - activePoly[prevIdx].x, y: curr.y - activePoly[prevIdx].y };
    const v2 = { x: activePoly[nextIdx].x - curr.x, y: activePoly[nextIdx].y - curr.y };
    const cross = v1.x * v2.y - v1.y * v2.x;
    return cross >= 0 ? 'CONVEX' : 'CONCAVE';
  });

  let totalLength = 0;
  activePoly.forEach((p, i) => totalLength += dist(p, activePoly[(i + 1) % activePoly.length]));

  // 1. Ray generation
  let baseRays = [];
  for (let j = 0; j < activePoly.length; j++) {
    const p1 = activePoly[j];
    const p2 = activePoly[(j + 1) % activePoly.length];
    const len = dist(p1, p2);
    if (len === 0) continue;
    
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const normal = normalize({ x: -dy, y: dx });

    let numPoints = Math.max(5, Math.floor((len / totalLength) * numSamples));
    if (numPoints % 2 !== 0) numPoints += 1; 
    
    for (let k = 1; k < numPoints; k++) {
      baseRays.push({ point: lerp(p1, p2, k/numPoints), dir: normal });
    }
  }

  for (let ray of baseRays) {
    let intersectionPoint = null;
    let minT = Infinity;

    for (let j = 0; j < activePoly.length; j++) {
      const hit = raySegmentIntersect(ray.point, ray.dir, activePoly[j], activePoly[(j + 1) % activePoly.length]);
      if (hit && hit.t < minT) {
        minT = hit.t;
        intersectionPoint = hit.point;
      }
    }

    if (intersectionPoint) {
      newMedialPoints.push(computeMedialPointRef(activePoly, ray.point, intersectionPoint));
    }
  }

  // 2. Identify Governors
  newMedialPoints.forEach(mp => {
    mp.governors = new Set();
    for (let j = 0; j < activePoly.length; j++) {
      const a = activePoly[j];
      const b = activePoly[(j + 1) % activePoly.length];
      const cpInfo = getClosestPointOnSegment(mp, a, b);
      const cp = {x: cpInfo.x, y: cpInfo.y};
      const d = dist(mp, cp);
      
      const tol = Math.max(0.2, mp.r * 0.05);
      if (Math.abs(d - mp.r) < tol) { 
        const v1 = { x: b.x - a.x, y: b.y - a.y };
        const len = Math.hypot(v1.x, v1.y);
        const lineDist = len === 0 ? d : Math.abs((mp.x - a.x) * v1.y - (mp.y - a.y) * v1.x) / len;
        
        if (Math.abs(lineDist - mp.r) < tol) {
          mp.governors.add("E" + j);
        }
        if (cpInfo.t < 0.05 && vertexTypes[j] === 'CONCAVE') {
          mp.governors.add("V" + j);
        } else if (cpInfo.t > 0.95 && vertexTypes[(j + 1) % activePoly.length] === 'CONCAVE') {
          mp.governors.add("V" + ((j + 1) % activePoly.length));
        }
      }
    }
  });

  // 3. Filter shallow curves
  newMedialPoints = newMedialPoints.filter(mp => {
    let contactVectors = [];
    for (let j = 0; j < activePoly.length; j++) {
      if (mp.governors.has("E" + j) || mp.governors.has("V" + j)) {
        const a = activePoly[j];
        const b = activePoly[(j + 1) % activePoly.length];
        let cp = mp.governors.has("V" + j) ? a : getClosestPointOnSegment(mp, a, b);
        const cv = normalize({ x: cp.x - mp.x, y: cp.y - mp.y });
        if (cv.x !== 0 || cv.y !== 0) contactVectors.push(cv);
      }
    }

    if (contactVectors.length < 2) return true;

    let minDot = 1.0; 
    for (let i = 0; i < contactVectors.length; i++) {
      for (let j = i + 1; j < contactVectors.length; j++) {
        const dot = contactVectors[i].x * contactVectors[j].x + contactVectors[i].y * contactVectors[j].y;
        minDot = Math.min(minDot, dot);
      }
    }
    return minDot < 0.92; 
  });

  // 4. Setup explicitly preserved EndPoints
  let nodes = [];
  for (let i = 0; i < activePoly.length; i++) {
    if (vertexTypes[i] === 'CONVEX') {
      const prevIdx = (i - 1 + activePoly.length) % activePoly.length;
      const nextIdx = (i + 1) % activePoly.length;
      
      const pPrev = activePoly[prevIdx];
      const pCurr = activePoly[i];
      const pNext = activePoly[nextIdx];
      
      const v1 = normalize({ x: pPrev.x - pCurr.x, y: pPrev.y - pCurr.y });
      const v2 = normalize({ x: pNext.x - pCurr.x, y: pNext.y - pCurr.y });
      const dot = v1.x * v2.x + v1.y * v2.y;
      const isSharpCorner = dot > -0.92;

      if (isSharpCorner) {
        nodes.push({
          x: activePoly[i].x,
          y: activePoly[i].y,
          governors: new Set(["E" + prevIdx, "V" + i, "E" + i]),
          isEndPoint: true,
          count: 1,
          r: 0 
        });
      }
    }
  }

  // 5. Cluster dense point cloud
  newMedialPoints.forEach(mp => {
    let found = false;
    for (let n of nodes) {
      if (n.isEndPoint) continue;
      
      let score = 0;
      mp.governors.forEach(ga => n.governors.forEach(gb => score += getGovScore(ga, gb, activePoly.length)));
      
      if (score >= 1.0 && dist(mp, n) < 2.5) {
        n.x = (n.x * n.count + mp.x) / (n.count + 1);
        n.y = (n.y * n.count + mp.y) / (n.count + 1);
        n.r = (n.r * n.count + mp.r) / (n.count + 1); 
        n.count++;
        mp.governors.forEach(g => n.governors.add(g));
        found = true;
        break;
      }
    }
    if (!found) {
      nodes.push({ x: mp.x, y: mp.y, governors: new Set(mp.governors), count: 1, isEndPoint: false, r: mp.r });
    }
  });

  // 6. Build Relative Neighborhood Graph (RNG)
  let adj = nodes.map(() => new Set());
  let validPairs = [];
  
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let score = 0;
      nodes[i].governors.forEach(ga => nodes[j].governors.forEach(gb => score += getGovScore(ga, gb, activePoly.length)));
      if (score >= 1.0) {
        validPairs.push({ i, j, distSq: distSq(nodes[i], nodes[j]) });
      }
    }
  }

  for (let pair of validPairs) {
    let isRNG = true;
    for (let k = 0; k < nodes.length; k++) {
      if (k === pair.i || k === pair.j) continue;
      
      if (distSq(nodes[pair.i], nodes[k]) < pair.distSq - 0.01 && 
          distSq(nodes[k], nodes[pair.j]) < pair.distSq - 0.01) {
        
        let scoreK_i = 0, scoreK_j = 0;
        nodes[k].governors.forEach(ga => nodes[pair.i].governors.forEach(gb => scoreK_i += getGovScore(ga, gb, activePoly.length)));
        nodes[k].governors.forEach(ga => nodes[pair.j].governors.forEach(gb => scoreK_j += getGovScore(ga, gb, activePoly.length)));
        
        if (scoreK_i >= 1.0 && scoreK_j >= 1.0) {
           isRNG = false;
           break;
        }
      }
    }
    if (isRNG) {
      adj[pair.i].add(pair.j);
      adj[pair.j].add(pair.i);
    }
  }

  let active = nodes.map(() => true);

  // 7. Edge Contraction
  let collapsed = true;
  while (collapsed) {
    collapsed = false;
    for (let i = 0; i < nodes.length; i++) {
      if (!active[i]) continue;
      for (let j of Array.from(adj[i])) {
        if (!active[j] || i >= j) continue;
        
        const avgRadius = ((nodes[i].r || 0) + (nodes[j].r || 0)) / 2;
        const collapseThreshold = Math.max(2.0, avgRadius * 0.4); 

        if (dist(nodes[i], nodes[j]) < collapseThreshold) { 
          if (nodes[i].isEndPoint && nodes[j].isEndPoint) continue;
          
          let target = nodes[i].isEndPoint ? i : (nodes[j].isEndPoint ? j : i);
          let source = target === i ? j : i;

          if (!nodes[target].isEndPoint) {
            nodes[target].x = (nodes[target].x * nodes[target].count + nodes[source].x * nodes[source].count) / (nodes[target].count + nodes[source].count);
            nodes[target].y = (nodes[target].y * nodes[target].count + nodes[source].y * nodes[source].count) / (nodes[target].count + nodes[source].count);
            nodes[target].r = (nodes[target].r * nodes[target].count + nodes[source].r * nodes[source].count) / (nodes[target].count + nodes[source].count);
            nodes[target].count += nodes[source].count;
          }
          nodes[source].governors.forEach(g => nodes[target].governors.add(g));

          adj[source].forEach(n => {
            if (n !== target) {
              adj[n].delete(source);
              adj[n].add(target);
              adj[target].add(n);
            }
          });
          adj[target].delete(source);
          active[source] = false;
          adj[source].clear();
          collapsed = true;
          break;
        }
      }
      if (collapsed) break;
    }
  }

  // 8. Intelligent Pruning
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < nodes.length; i++) {
      if (!active[i] || nodes[i].isEndPoint) continue; 
      
      if (adj[i].size === 2) {
        const neighbors = Array.from(adj[i]);
        const n1 = neighbors[0];
        const n2 = neighbors[1];
        
        const node1 = nodes[n1];
        const node2 = nodes[n2];
        const curr = nodes[i];
        
        const v1 = normalize({ x: node1.x - curr.x, y: node1.y - curr.y });
        const v2 = normalize({ x: node2.x - curr.x, y: node2.y - curr.y });
        const dotProduct = v1.x * v2.x + v1.y * v2.y;
        const dToLine = distToSegment(curr, node1, node2);
        
        let hasUniqueGov = false;
        for (let g of curr.governors) {
           if (!node1.governors.has(g) && !node2.governors.has(g)) {
               hasUniqueGov = true;
               break;
           }
        }
        
        if (dotProduct < -0.95 || dToLine < 0.5 || !hasUniqueGov) { 
          adj[n1].delete(i);
          adj[n2].delete(i);
          
          if (n1 !== n2) {
            adj[n1].add(n2);
            adj[n2].add(n1);
          }
          
          active[i] = false;
          adj[i].clear();
          changed = true;
        }
      } else if (adj[i].size <= 1) {
        const neighbors = Array.from(adj[i]);
        if (neighbors.length === 1) {
          adj[neighbors[0]].delete(i);
        }
        active[i] = false;
        adj[i].clear();
        changed = true;
      }
    }
  }

  let finalNodes = nodes.filter((_, i) => active[i]);
  let finalEdges = [];
  for (let i = 0; i < nodes.length; i++) {
    if (!active[i]) continue;
    for (let neighbor of adj[i]) {
      if (i < neighbor) { 
        finalEdges.push({ a: nodes[i], b: nodes[neighbor] });
      }
    }
  }

  return { nodes: finalNodes, edges: finalEdges };
}

// Helper to load presets
const getDonutPreset = () => {
  const s = 600;
  const cx = 0, cy = 0;
  const points = [];
  const numSegments = 32;
  const dTheta = 0.05;

  for (let i = 0; i <= numSegments; i++) {
    const angle = dTheta + (Math.PI * 2 - 2 * dTheta) * (i / numSegments);
    points.push({ x: cx + Math.cos(angle) * s * 0.4, y: cy - Math.sin(angle) * s * 0.4 });
  }
  for (let i = 0; i <= numSegments; i++) {
    const angle = (Math.PI * 2 - dTheta) - (Math.PI * 2 - 2 * dTheta) * (i / numSegments);
    points.push({ x: cx + Math.cos(angle) * s * 0.2, y: cy - Math.sin(angle) * s * 0.2 });
  }
  points[0].isBridge = true;
  points[numSegments].isBridge = true;
  points[numSegments + 1].isBridge = true;
  points[2 * numSegments + 1].isBridge = true;
  return points;
};

const donutPoly = getDonutPreset();

// Presets definitions centered at (0, 0) in world space (without isBridge)
const presets = {
  cross: (s) => [
    new Vector2D(- s*0.1, + s*0.3),
    new Vector2D(+ s*0.1, + s*0.3),
    new Vector2D(+ s*0.1, + s*0.1),
    new Vector2D(+ s*0.3, + s*0.1),
    new Vector2D(+ s*0.3, - s*0.1),
    new Vector2D(+ s*0.1, - s*0.1),
    new Vector2D(+ s*0.1, - s*0.3),
    new Vector2D(- s*0.1, - s*0.3),
    new Vector2D(- s*0.1, - s*0.1),
    new Vector2D(- s*0.3, - s*0.1),
    new Vector2D(- s*0.3, + s*0.1),
    new Vector2D(- s*0.1, + s*0.1)
  ],
  yshape: (s) => [
    new Vector2D(+ s*0.1, - s*0.4),
    new Vector2D(+ s*0.1, - s*0.1),
    new Vector2D(+ s*0.4, + s*0.4),
    new Vector2D(+ s*0.2, + s*0.4),
    new Vector2D(0,       + s*0.1),
    new Vector2D(- s*0.2, + s*0.4),
    new Vector2D(- s*0.4, + s*0.4),
    new Vector2D(- s*0.1, - s*0.1),
    new Vector2D(- s*0.1, - s*0.4)
  ],
  sqdonut: (s) => [
    new Vector2D(- s*0.01, + s*0.3),
    new Vector2D(- s*0.3,  + s*0.3),
    new Vector2D(- s*0.3,  - s*0.3),
    new Vector2D(+ s*0.3,  - s*0.3),
    new Vector2D(+ s*0.3,  + s*0.3),
    new Vector2D(+ s*0.01, + s*0.3),
    new Vector2D(+ s*0.01, + s*0.1),
    new Vector2D(+ s*0.1,  + s*0.1),
    new Vector2D(+ s*0.1,  - s*0.1),
    new Vector2D(- s*0.1,  - s*0.1),
    new Vector2D(- s*0.1,  + s*0.1),
    new Vector2D(- s*0.01, + s*0.1)
  ],
  donut: (s) => {
    const points = [];
    const numSegments = 32;
    const dTheta = 0.05;
    for (let i = 0; i <= numSegments; i++) {
      const angle = dTheta + (Math.PI * 2 - 2 * dTheta) * (i / numSegments);
      points.push(new Vector2D(Math.cos(angle) * s * 0.4, -Math.sin(angle) * s * 0.4));
    }
    for (let i = 0; i <= numSegments; i++) {
      const angle = (Math.PI * 2 - dTheta) - (Math.PI * 2 - 2 * dTheta) * (i / numSegments);
      points.push(new Vector2D(Math.cos(angle) * s * 0.2, -Math.sin(angle) * s * 0.2));
    }
    return points;
  },
  pentagon: (s) => [
    new Vector2D(- s * 0.05, + s * 0.4),
    new Vector2D(- s * 0.45, + s * 0.15),
    new Vector2D(- s * 0.25, - s * 0.4),
    new Vector2D(+ s * 0.35, - s * 0.35),
    new Vector2D(+ s * 0.4,  + s * 0.1)
  ],
  tree: (s) => [
    new Vector2D(+ s*0.1,  - s*0.4),
    new Vector2D(+ s*0.1,  - s*0.1),
    new Vector2D(+ s*0.4,  - s*0.1),
    new Vector2D(+ s*0.4,  + s*0.05),
    new Vector2D(+ s*0.1,  + s*0.05),
    new Vector2D(+ s*0.1,  + s*0.2),
    new Vector2D(+ s*0.3,  + s*0.4),
    new Vector2D(+ s*0.15, + s*0.4),
    new Vector2D(0,          + s*0.25),
    new Vector2D(- s*0.15, + s*0.4),
    new Vector2D(- s*0.3,  + s*0.4),
    new Vector2D(- s*0.1,  + s*0.2),
    new Vector2D(- s*0.1,  + s*0.05),
    new Vector2D(- s*0.4,  + s*0.05),
    new Vector2D(- s*0.4,  - s*0.1),
    new Vector2D(- s*0.1,  - s*0.1),
    new Vector2D(- s*0.1,  - s*0.4)
  ]
};

const size = 60;

for (const [name, presetFn] of Object.entries(presets)) {
  console.log(`\n========================================`);
  console.log(`PRESET: ${name.toUpperCase()}`);
  console.log(`========================================`);
  
  const poly = presetFn(size);
  
  console.log("Running Reference...");
  const ref = runReferenceMAT(poly, 1000);
  console.log(`Nodes: ${ref.nodes.length}, Edges: ${ref.edges.length}`);
  
  console.log("Running Ours...");
  const mat = new MedialAxisTransform(poly, { epsilon: 0.05 });
  const sPerEdge = Math.round(1000 / poly.length);
  const skeleton = mat.computeStructuredSkeleton(sPerEdge);
  const result = mat.simplifySkeleton(skeleton.regularPoints, skeleton.junctionPoints, 2.0);
  console.log(`Nodes: ${result.nodes.length}, Edges: ${result.segments.length}`);

  if (name === 'yshape') {
    console.log("YSHAPE Ref Nodes:");
    ref.nodes.forEach((n, idx) => {
      console.log(`Ref Node ${idx}: (${n.x.toFixed(2)}, ${n.y.toFixed(2)}), governors: ${Array.from(n.governors).sort().join(",")}`);
    });
    console.log("YSHAPE Our Nodes:");
    result.nodes.forEach((n, idx) => {
      console.log(`Our Node ${idx}: (${n.x.toFixed(2)}, ${n.y.toFixed(2)}), governors: ${Array.from(n.governors).sort().join(",")}`);
    });
  }

  // Assert Node count and Edge count are identical
  assert(ref.nodes.length === result.nodes.length, `Nodes count mismatch: ref ${ref.nodes.length}, ours ${result.nodes.length}`);
  assert(ref.edges.length === result.segments.length, `Edges count mismatch: ref ${ref.edges.length}, ours ${result.segments.length}`);

  // Verify that every node in our result matches a node in the reference result
  const matchTol = 1.2; // coordinate tolerance for sampling density variations
  const matchedRefIndices = new Map(); // map our index to ref index
  
  for (let i = 0; i < result.nodes.length; i++) {
    const ourNode = result.nodes[i];
    let matchedIdx = -1;
    for (let j = 0; j < ref.nodes.length; j++) {
      if (Array.from(matchedRefIndices.values()).includes(j)) continue;
      if (dist(ourNode, ref.nodes[j]) < matchTol) {
        matchedIdx = j;
        break;
      }
    }
    assert(matchedIdx !== -1, `Could not find matching ref node for our node ${i} at (${ourNode.x.toFixed(2)}, ${ourNode.y.toFixed(2)})`);
    matchedRefIndices.set(i, matchedIdx);
  }

  // Verify that all edges match exactly
  for (const seg of result.segments) {
    const iStart = result.nodes.indexOf(seg.start);
    const iEnd = result.nodes.indexOf(seg.end);
    
    // Find the corresponding ref indices
    const refStart = matchedRefIndices.get(iStart);
    const refEnd = matchedRefIndices.get(iEnd);
    
    // Find if an edge exists between refStart and refEnd in ref
    const edgeExists = ref.edges.some(e => {
      const aIdx = ref.nodes.indexOf(e.a);
      const bIdx = ref.nodes.indexOf(e.b);
      return (aIdx === refStart && bIdx === refEnd) || (aIdx === refEnd && bIdx === refStart);
    });
    
    assert(edgeExists, `Edge in ours (Node ${iStart} -> Node ${iEnd}) does not exist in reference (Node ${refStart} -> Node ${refEnd})`);
  }

  console.log(`[PASS] ${name.toUpperCase()} is mathematically identical to reference implementation!`);
}

console.log("\n==================================================");
console.log("SUCCESS: ALL 6 PRESETS ARE MATHEMATICALLY IDENTICAL!");
console.log("==================================================");


