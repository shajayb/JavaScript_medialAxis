import { Vector2D } from './utils/vector2d.js';
import { 
  makeCCW, 
  getInwardNormal, 
  intersectRaySegment,
  closestPointOnSegment,
  distanceToPolygon
} from './utils/geometry.js';

const getGovScore = (ga, gb, n) => {
  if (ga === gb) return 1.0;
  if (typeof ga !== 'string' || typeof gb !== 'string') return 0;
  
  const idxA = ga.startsWith('V') ? parseInt(ga.substring(1)) * 2 : parseInt(ga.substring(1)) * 2 + 1;
  const idxB = gb.startsWith('V') ? parseInt(gb.substring(1)) * 2 : parseInt(gb.substring(1)) * 2 + 1;
  
  const d = Math.min(Math.abs(idxA - idxB), 2 * n - Math.abs(idxA - idxB));
  
  if (d === 1) return 0.5; 
  return 0;
};

export class MedialAxisTransform {
  constructor(polygonVertices, options = {}) {
    this.polygon = makeCCW(polygonVertices.map(v => new Vector2D(v.x, v.y)));
    this.epsilon = options.epsilon !== undefined ? options.epsilon : 1e-5;
    this.tangentEpsilon = options.tangentEpsilon || 1e-4;
  }

  containsBall(center, radius) {
    const { distance } = distanceToPolygon(center, this.polygon);
    return distance >= radius - this.epsilon;
  }

  computeMedialPoint(P, Q) {
    let P_prime = P;
    let Q_prime = Q;
    let midPoint = P.add(Q).scale(0.5);
    let radius = midPoint.dist(P);

    while (Q_prime.dist(P_prime) > this.epsilon) {
      if (this.containsBall(midPoint, radius)) {
        P_prime = midPoint;
      } else {
        Q_prime = midPoint;
      }
      midPoint = P_prime.add(Q_prime).scale(0.5);
      radius = midPoint.dist(P);
    }
    
    midPoint.radius = radius;
    return midPoint;
  }

  // Structured Medial Axis with Junction Isolation
  computeStructuredSkeleton(samplesPerEdge) {
    const regularPoints = [];
    const junctionPoints = [];
    const N = this.polygon.length;

    // 0. Classify Polygon Vertices as Convex or Concave
    const vertexTypes = this.polygon.map((curr, i) => {
      const prevIdx = (i - 1 + N) % N;
      const nextIdx = (i + 1) % N;
      const prevVec = curr.sub(this.polygon[prevIdx]);
      const nextVec = this.polygon[nextIdx].sub(curr);
      const cross = prevVec.cross(nextVec);
      return cross >= 0 ? 'CONVEX' : 'CONCAVE';
    });

    // 1. Ray generation
    let totalLength = 0;
    for (let i = 0; i < N; i++) {
      totalLength += this.polygon[i].dist(this.polygon[(i + 1) % N]);
    }

    const numSamples = samplesPerEdge * N;
    const rawMedialPoints = [];

    for (let i = 0; i < N; i++) {
      const p1 = this.polygon[i];
      const p2 = this.polygon[(i + 1) % N];
      const len = p1.dist(p2);
      if (len === 0) continue;
      const normal = getInwardNormal(p1, p2);

      let numPoints = Math.max(5, Math.floor((len / totalLength) * numSamples));
      if (numPoints % 2 !== 0) numPoints += 1; // Force even number of points to guarantee exact midpoint ray

      for (let k = 1; k < numPoints; k++) {
        const rayOrigin = p1.add(p2.sub(p1).scale(k / numPoints));
        
        let intersectionPoint = null;
        let minT = Infinity;
        for (let j = 0; j < N; j++) {
          const hit = intersectRaySegment(rayOrigin, normal, this.polygon[j], this.polygon[(j + 1) % N]);
          if (hit && hit.s < minT) {
            minT = hit.s;
            intersectionPoint = hit.point;
          }
        }

        if (intersectionPoint) {
          const mp = this.computeMedialPoint(rayOrigin, intersectionPoint);
          rawMedialPoints.push(mp);
        }
      }
    }

    // 2. Identify Governors for each medial point
    rawMedialPoints.forEach(mp => {
      mp.governors = new Set();
      for (let j = 0; j < N; j++) {
        const a = this.polygon[j];
        const b = this.polygon[(j + 1) % N];
        const cp = closestPointOnSegment(mp, a, b);
        const d = mp.dist(cp);
        
        const tol = Math.max(0.2, mp.radius * 0.05);
        if (Math.abs(d - mp.radius) < tol) {
          const v1 = b.sub(a);
          const len = v1.length();
          const lineDist = len === 0 ? d : Math.abs((mp.x - a.x) * v1.y - (mp.y - a.y) * v1.x) / len;
          
          if (Math.abs(lineDist - mp.radius) < tol) {
            mp.governors.add("E" + j);
          }
          if (cp.dist(a) < 0.05 * len && vertexTypes[j] === 'CONCAVE') {
            mp.governors.add("V" + j);
          } else if (cp.dist(b) < 0.05 * len && vertexTypes[(j + 1) % N] === 'CONCAVE') {
            mp.governors.add("V" + ((j + 1) % N));
          }
        }
      }
    });

    // 3. Filter shallow curves (Generalized Medial Point Filter)
    const filteredMedialPoints = rawMedialPoints.filter(mp => {
      let contactVectors = [];
      for (let j = 0; j < N; j++) {
        if (mp.governors.has("E" + j) || mp.governors.has("V" + j)) {
          const a = this.polygon[j];
          const b = this.polygon[(j + 1) % N];
          const cp = mp.governors.has("V" + j) ? a : closestPointOnSegment(mp, a, b);
          const cv = cp.sub(mp).normalize();
          if (cv.lengthSq() > 1e-6) {
            contactVectors.push(cv);
          }
        }
      }

      if (contactVectors.length < 2) return true;

      let minDot = 1.0;
      for (let i = 0; i < contactVectors.length; i++) {
        for (let j = i + 1; j < contactVectors.length; j++) {
          const dot = contactVectors[i].dot(contactVectors[j]);
          minDot = Math.min(minDot, dot);
        }
      }
      return minDot < 0.92;
    });

    regularPoints.push(...filteredMedialPoints);

    // 4. Setup explicitly preserved EndPoints (sharp convex corners)
    for (let i = 0; i < N; i++) {
      if (vertexTypes[i] === 'CONVEX') {
        const prevIdx = (i - 1 + N) % N;
        const nextIdx = (i + 1) % N;
        const pPrev = this.polygon[prevIdx];
        const pCurr = this.polygon[i];
        const pNext = this.polygon[nextIdx];

        const v1 = pPrev.sub(pCurr).normalize();
        const v2 = pNext.sub(pCurr).normalize();
        const dot = v1.dot(v2);

        const isSharpCorner = dot > -0.92;
        if (isSharpCorner) {
          const endPoint = new Vector2D(pCurr.x, pCurr.y);
          endPoint.radius = 0;
          endPoint.isEndPoint = true;
          endPoint.governors = new Set(["E" + prevIdx, "V" + i, "E" + i]);
          junctionPoints.push(endPoint);
        }
      }
    }

    // 5. Cluster dense point cloud to identify internal junction nodes
    const internalNodes = [];
    filteredMedialPoints.forEach(mp => {
      let found = false;
      for (const n of internalNodes) {
        let score = 0;
        mp.governors.forEach(ga => n.governors.forEach(gb => {
          score += getGovScore(ga, gb, N);
        }));
        
        if (score >= 1.0 && mp.dist(n) < 2.5) {
          n.x = (n.x * n.count + mp.x) / (n.count + 1);
          n.y = (n.y * n.count + mp.y) / (n.count + 1);
          n.radius = (n.radius * n.count + mp.radius) / (n.count + 1);
          n.count++;
          mp.governors.forEach(g => n.governors.add(g));
          found = true;
          break;
        }
      }
      if (!found) {
        const node = new Vector2D(mp.x, mp.y);
        node.governors = new Set(mp.governors);
        node.count = 1;
        node.isEndPoint = false;
        node.radius = mp.radius;
        internalNodes.push(node);
      }
    });

    junctionPoints.push(...internalNodes);

    return { regularPoints, junctionPoints };
  }

  // Simplifies the medial axis using Relative Neighborhood Graph and edge contraction.
  simplifySkeleton(regularPoints, junctionPoints, mergeThreshold = 20) {
    const endPoints = junctionPoints.filter(p => p.isEndPoint);
    const nodes = endPoints.map(p => {
      const node = new Vector2D(p.x, p.y);
      node.governors = new Set(p.governors);
      node.isEndPoint = true;
      node.count = 1;
      node.radius = 0;
      return node;
    });

    // 1. Cluster dense point cloud with average radius tracking
    regularPoints.forEach(mp => {
      let found = false;
      for (const n of nodes) {
        if (n.isEndPoint) continue;
        
        let score = 0;
        mp.governors.forEach(ga => n.governors.forEach(gb => {
          score += getGovScore(ga, gb, this.polygon.length);
        }));
        
        if (score >= 1.0 && mp.dist(n) < 2.5) {
          n.x = (n.x * n.count + mp.x) / (n.count + 1);
          n.y = (n.y * n.count + mp.y) / (n.count + 1);
          n.radius = (n.radius * n.count + mp.radius) / (n.count + 1);
          n.count++;
          mp.governors.forEach(g => n.governors.add(g));
          found = true;
          break;
        }
      }
      if (!found) {
        const node = new Vector2D(mp.x, mp.y);
        node.governors = new Set(mp.governors);
        node.count = 1;
        node.isEndPoint = false;
        node.radius = mp.radius;
        nodes.push(node);
      }
    });

    // 2. Build Relative Neighborhood Graph (RNG)
    const adj = nodes.map(() => new Set());
    const validPairs = [];
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let score = 0;
        nodes[i].governors.forEach(ga => nodes[j].governors.forEach(gb => {
          score += getGovScore(ga, gb, this.polygon.length);
        }));
        if (score >= 1.0) {
          validPairs.push({ i, j, distSq: nodes[i].distSq(nodes[j]) });
        }
      }
    }

    for (const pair of validPairs) {
      let isRNG = true;
      for (let k = 0; k < nodes.length; k++) {
        if (k === pair.i || k === pair.j) continue;
        
        if (nodes[pair.i].distSq(nodes[k]) < pair.distSq - 0.01 && 
            nodes[k].distSq(nodes[pair.j]) < pair.distSq - 0.01) {
          
          let scoreK_i = 0, scoreK_j = 0;
          nodes[k].governors.forEach(ga => nodes[pair.i].governors.forEach(gb => {
            scoreK_i += getGovScore(ga, gb, this.polygon.length);
          }));
          nodes[k].governors.forEach(ga => nodes[pair.j].governors.forEach(gb => {
            scoreK_j += getGovScore(ga, gb, this.polygon.length);
          }));
          
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

    const active = nodes.map(() => true);

    // 3. Edge Contraction: Scale-aware collapsing of tight micro-edges
    let collapsed = true;
    while (collapsed) {
      collapsed = false;
      for (let i = 0; i < nodes.length; i++) {
        if (!active[i]) continue;
        for (const j of Array.from(adj[i])) {
          if (!active[j] || i >= j) continue;
          
          const avgRadius = (nodes[i].radius + nodes[j].radius) / 2;
          const collapseThreshold = Math.max(mergeThreshold, avgRadius * 0.4);

          if (nodes[i].dist(nodes[j]) < collapseThreshold) {
            if (nodes[i].isEndPoint && nodes[j].isEndPoint) continue;
            
            const target = nodes[i].isEndPoint ? i : (nodes[j].isEndPoint ? j : i);
            const source = target === i ? j : i;

            if (!nodes[target].isEndPoint) {
              nodes[target].x = (nodes[target].x * nodes[target].count + nodes[source].x * nodes[source].count) / (nodes[target].count + nodes[source].count);
              nodes[target].y = (nodes[target].y * nodes[target].count + nodes[source].y * nodes[source].count) / (nodes[target].count + nodes[source].count);
              nodes[target].radius = (nodes[target].radius * nodes[target].count + nodes[source].radius * nodes[source].count) / (nodes[target].count + nodes[source].count);
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

    // 4. Robustness Fallback: Connect disjoint components using visible node-pairs
    const isSegmentVisible = (a, b) => {
      const shrink = 1e-3;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const aPrime = new Vector2D(a.x + dx * shrink, a.y + dy * shrink);
      const bPrime = new Vector2D(b.x - dx * shrink, b.y - dy * shrink);

      for (let i = 0; i < this.polygon.length; i++) {
        const c = this.polygon[i];
        const d = this.polygon[(i + 1) % this.polygon.length];
        
        const ccw = (p, q, r) => (r.y - p.y) * (q.x - p.x) > (q.y - p.y) * (r.x - p.x);
        const intersect = (ccw(aPrime, c, d) !== ccw(bPrime, c, d)) && (ccw(aPrime, bPrime, c) !== ccw(aPrime, bPrime, d));
        
        if (intersect) return false;
      }
      return true;
    };

    const parent = Array.from({ length: nodes.length }, (_, idx) => idx);
    const find = (x) => {
      if (parent[x] === x) return x;
      return parent[x] = find(parent[x]);
    };
    const union = (x, y) => {
      const rootX = find(x);
      const rootY = find(y);
      if (rootX !== rootY) {
        parent[rootX] = rootY;
        return true;
      }
      return false;
    };

    for (let i = 0; i < nodes.length; i++) {
      if (!active[i]) continue;
      for (const neighbor of adj[i]) {
        if (active[neighbor] && i < neighbor) {
          union(i, neighbor);
        }
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      if (!active[i]) continue;
      for (let j = i + 1; j < nodes.length; j++) {
        if (!active[j]) continue;
        if (find(i) !== find(j)) {
          if (isSegmentVisible(nodes[i], nodes[j])) {
            union(i, j);
            adj[i].add(j);
            adj[j].add(i);
          }
        }
      }
    }

    // 5. Intelligent Pruning & Collapsing (Douglas-Peucker & Topological Redundancy)
    const distToSegment = (p, v, w) => {
      const v_vec = w.sub(v);
      const w_vec = p.sub(v);
      const lenSq = v_vec.lengthSq();
      if (lenSq < 1e-10) return p.dist(v);
      let t = w_vec.dot(v_vec) / lenSq;
      t = Math.max(0, Math.min(1, t));
      const proj = v.add(v_vec.scale(t));
      return p.dist(proj);
    };

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

          const v1 = node1.sub(curr).normalize();
          const v2 = node2.sub(curr).normalize();
          const dotProduct = v1.dot(v2);
          const dToLine = distToSegment(curr, node1, node2);

          let hasUniqueGov = false;
          for (const g of curr.governors) {
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

    // 6. Collect final segments and active nodes
    const finalSegments = [];
    for (let i = 0; i < nodes.length; i++) {
      if (!active[i]) continue;
      for (const neighbor of adj[i]) {
        if (i < neighbor) {
          finalSegments.push({ start: nodes[i], end: nodes[neighbor] });
        }
      }
    }

    const finalNodes = nodes.filter((_, idx) => active[idx]);
    for (let i = 0; i < nodes.length; i++) {
      if (active[i]) {
        nodes[i].isJunction = adj[i].size >= 3;
      }
    }

    return { segments: finalSegments, nodes: finalNodes };
  }

  // Computes exact convex Voronoi cells for a list of seeds, bounded by a large box.
  // Each cell is constructed using Sutherland-Hodgman convex polygon clipping against
  // the perpendicular bisector half-planes of all other seeds.
  computeVoronoiCells(seeds, width = 3000, height = 3000) {
    const cells = [];
    if (seeds.length === 0) return [];

    // Sutherland-Hodgman polygon clipping against a half-plane
    const clipPolygon = (poly, pointOnLine, lineNormal) => {
      const clipped = [];
      if (poly.length === 0) return [];
      
      for (let i = 0; i < poly.length; i++) {
        const p1 = poly[i];
        const p2 = poly[(i + 1) % poly.length];
        
        const d1 = p1.sub(pointOnLine).dot(lineNormal);
        const d2 = p2.sub(pointOnLine).dot(lineNormal);
        
        if (d1 >= -1e-9) {
          clipped.push(p1);
        }
        
        if ((d1 >= 0 && d2 < 0) || (d1 < 0 && d2 >= 0)) {
          const denom = d1 - d2;
          if (Math.abs(denom) > 1e-9) {
            const t = d1 / denom;
            clipped.push(p1.add(p2.sub(p1).scale(t)));
          }
        }
      }
      return clipped;
    };

    for (let i = 0; i < seeds.length; i++) {
      const si = seeds[i];
      // Start with a large bounding box
      let cellPoly = [
        new Vector2D(-width, -height),
        new Vector2D(width, -height),
        new Vector2D(width, height),
        new Vector2D(-width, height)
      ];

      for (let j = 0; j < seeds.length; j++) {
        if (i === j) continue;
        const sj = seeds[j];
        
        // Midpoint of segment Si - Sj (which lies on the perpendicular bisector line)
        const mid = si.add(sj).scale(0.5);
        // Line normal pointing towards Si
        const norm = si.sub(sj).normalize();
        
        cellPoly = clipPolygon(cellPoly, mid, norm);
      }
      
      cells.push({ seed: si, polygon: cellPoly });
    }
    
    return cells;
  }
}
