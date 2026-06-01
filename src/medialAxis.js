import { Vector2D } from './utils/vector2d.js';
import { 
  makeCCW, 
  getInwardNormal, 
  intersectRayPolygon, 
  distanceToPolygon 
} from './utils/geometry.js';

export class MedialAxisTransform {
  constructor(polygonVertices, options = {}) {
    this.polygon = makeCCW(polygonVertices.map(v => new Vector2D(v.x, v.y)));
    this.epsilon = options.epsilon || 1e-5;
    this.tangentEpsilon = options.tangentEpsilon || 1e-4;
  }

  // A circle centered at 'center' with 'radius' is contained in the polygon if
  // its distance to the boundary is at least 'radius' (with tolerance).
  containsBall(center, radius) {
    const { distance } = distanceToPolygon(center, this.polygon);
    return distance >= radius - this.epsilon;
  }

  // Bisection search along the inward normal to find the unique maximal inscribed circle tangent to P.
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

  // Evaluates the governors (tangent edges/vertices) of a medial point M
  // and assigns a normalized net vector representing the direction of the branch.
  computeEffectiveNormal(M, radius) {
    let sumNormals = new Vector2D(0, 0);
    let governorsCount = 0;
    let firstGovernorNormal = null;

    for (let i = 0; i < this.polygon.length; i++) {
      const v1 = this.polygon[i];
      const v2 = this.polygon[(i + 1) % this.polygon.length];
      
      const { point: closestPt, distance } = distanceToPolygon(M, [v1, v2]);
      
      // If the edge is tangent (within epsilon) to the inscribed circle
      if (Math.abs(distance - radius) < this.tangentEpsilon) {
        const norm = M.sub(closestPt).normalize();
        sumNormals = sumNormals.add(norm);
        governorsCount++;
        if (!firstGovernorNormal) firstGovernorNormal = norm;
      }
    }

    if (sumNormals.length() < 1e-6) {
      // If normals sum to zero, assign the normal of the first governor
      M.effectiveNormal = firstGovernorNormal || new Vector2D(0, 0);
    } else {
      M.effectiveNormal = sumNormals.normalize();
    }
  }

  // Isolates a junction point between two regular medial points M1 and M2 using bisection.
  computeJunctionPoint(M1, M2) {
    let p = M1;
    let q = M2;
    let midPoint = p.add(q).scale(0.5);

    while (p.dist(q) > this.epsilon) {
      // Find closest boundary point to midpoint
      const { point: basePoint } = distanceToPolygon(midPoint, this.polygon);
      
      // Find edge inward normal at base point
      const { edgeIndex } = distanceToPolygon(basePoint, this.polygon);
      const v1 = this.polygon[edgeIndex];
      const v2 = this.polygon[(edgeIndex + 1) % this.polygon.length];
      const inwardNorm = getInwardNormal(v1, v2);

      // Cast ray and intersect with boundary
      const intersectionPoint = intersectRayPolygon(basePoint, inwardNorm, this.polygon);
      if (!intersectionPoint) break;

      // Compute medial point and its effective normal
      const junctionPoint = this.computeMedialPoint(basePoint, intersectionPoint);
      this.computeEffectiveNormal(junctionPoint, junctionPoint.radius);

      // Decide which half to search based on dot product of effective normals
      const dotP = junctionPoint.effectiveNormal.dot(M1.effectiveNormal);
      const dotQ = junctionPoint.effectiveNormal.dot(M2.effectiveNormal);

      if (dotP > dotQ) {
        p = midPoint;
      } else {
        q = midPoint;
      }
      midPoint = p.add(q).scale(0.5);
    }

    return midPoint;
  }

  // Fast Randomized Medial Axis (Figure 3 in paper)
  computeRandomSamples(numSamples) {
    const medialPoints = [];
    
    // Compute total perimeter to sample uniformly by edge lengths
    const edgeLengths = [];
    let perimeter = 0;
    for (let i = 0; i < this.polygon.length; i++) {
      const v1 = this.polygon[i];
      const v2 = this.polygon[(i + 1) % this.polygon.length];
      const len = v1.dist(v2);
      edgeLengths.push(len);
      perimeter += len;
    }

    for (let s = 0; s < numSamples; s++) {
      // Sample a random point along the perimeter
      let randD = Math.random() * perimeter;
      let edgeIdx = 0;
      while (randD > edgeLengths[edgeIdx] && edgeIdx < this.polygon.length - 1) {
        randD -= edgeLengths[edgeIdx];
        edgeIdx++;
      }

      const v1 = this.polygon[edgeIdx];
      const v2 = this.polygon[(edgeIdx + 1) % this.polygon.length];
      const edgeVec = v2.sub(v1).normalize();
      const basePoint = v1.add(edgeVec.scale(randD));
      const inwardNorm = getInwardNormal(v1, v2);

      const intersectionPoint = intersectRayPolygon(basePoint, inwardNorm, this.polygon);
      if (intersectionPoint) {
        const mPoint = this.computeMedialPoint(basePoint, intersectionPoint);
        medialPoints.push(mPoint);
      }
    }

    return medialPoints;
  }

  // Structured Medial Axis with Junction Isolation (Figure 8 in paper)
  computeStructuredSkeleton(samplesPerEdge) {
    const regularPoints = [];
    const junctionPoints = [];

    // 1. Sample along each edge, trace branches, and detect transitions
    for (let i = 0; i < this.polygon.length; i++) {
      const v1 = this.polygon[i];
      const v2 = this.polygon[(i + 1) % this.polygon.length];
      const inwardNorm = getInwardNormal(v1, v2);
      const edgeVec = v2.sub(v1);

      const edgePoints = [];

      for (let j = 0; j < samplesPerEdge; j++) {
        const t = (j + 1) / (samplesPerEdge + 1);
        const basePoint = v1.add(edgeVec.scale(t));

        const intersectionPoint = intersectRayPolygon(basePoint, inwardNorm, this.polygon);
        if (intersectionPoint) {
          const medialPoint = this.computeMedialPoint(basePoint, intersectionPoint);
          this.computeEffectiveNormal(medialPoint, medialPoint.radius);
          
          edgePoints.push(medialPoint);
          regularPoints.push(medialPoint);

          // If we have at least 2 points along this edge's branch, check for governor transitions
          if (edgePoints.length > 1) {
            const p1 = edgePoints[edgePoints.length - 2];
            const p2 = edgePoints[edgePoints.length - 1];

            // Cross product of effective normals
            const crossVal = p1.effectiveNormal.cross(p2.effectiveNormal);
            if (Math.abs(crossVal) > 1e-4) {
              const jPoint = this.computeJunctionPoint(p1, p2);
              junctionPoints.push(jPoint);
            }
          }
        }
      }

      // 2. Append Convex Vertices as End Points (where radius = 0)
      const nextEdgeIdx = (i + 1) % this.polygon.length;
      const v3 = this.polygon[(i + 2) % this.polygon.length];
      const e1 = v2.sub(v1);
      const e2 = v3.sub(v2);
      
      // If cross product is positive in CCW, it is a convex vertex (end point of the medial axis)
      if (e1.cross(e2) > 0) {
        const endPoint = new Vector2D(v2.x, v2.y);
        endPoint.radius = 0;
        endPoint.isEndPoint = true;
        junctionPoints.push(endPoint);
      }
    }

    // 1b. Sample along each vertex angle bisector to trace deep interior branches (e.g. for star shapes)
    for (let i = 0; i < this.polygon.length; i++) {
      const vPrev = this.polygon[(i - 1 + this.polygon.length) % this.polygon.length];
      const vCurr = this.polygon[i];
      const vNext = this.polygon[(i + 1) % this.polygon.length];

      const n1 = getInwardNormal(vPrev, vCurr);
      const n2 = getInwardNormal(vCurr, vNext);
      const bisectNorm = n1.add(n2).normalize();

      if (bisectNorm.lengthSq() < 1e-6) continue; // Skip collinear flat vertices

      // Cast ray along the vertex bisector
      const intersectionPoint = intersectRayPolygon(vCurr, bisectNorm, this.polygon);
      if (intersectionPoint) {
        const bisectVec = intersectionPoint.sub(vCurr);
        const bisectPoints = [];

        // Sample points along the bisector segment
        for (let j = 0; j < samplesPerEdge; j++) {
          const t = (j + 1) / (samplesPerEdge + 1);
          const samplePt = vCurr.add(bisectVec.scale(t));

          // Find the closest boundary point to the bisector sample
          const { point: basePoint } = distanceToPolygon(samplePt, this.polygon);
          const { edgeIndex } = distanceToPolygon(basePoint, this.polygon);
          
          if (edgeIndex !== -1) {
            const ev1 = this.polygon[edgeIndex];
            const ev2 = this.polygon[(edgeIndex + 1) % this.polygon.length];
            const inwardNorm = getInwardNormal(ev1, ev2);

            const hitPoint = intersectRayPolygon(basePoint, inwardNorm, this.polygon);
            if (hitPoint) {
              const medialPoint = this.computeMedialPoint(basePoint, hitPoint);
              this.computeEffectiveNormal(medialPoint, medialPoint.radius);
              
              bisectPoints.push(medialPoint);
              regularPoints.push(medialPoint);

              // Check for governor transitions along the bisector branch
              if (bisectPoints.length > 1) {
                const p1 = bisectPoints[bisectPoints.length - 2];
                const p2 = bisectPoints[bisectPoints.length - 1];

                const crossVal = p1.effectiveNormal.cross(p2.effectiveNormal);
                if (Math.abs(crossVal) > 1e-4) {
                  const jPoint = this.computeJunctionPoint(p1, p2);
                  junctionPoints.push(jPoint);
                }
              }
            }
          }
        }
      }
    }

    return { regularPoints, junctionPoints };
  }

  // Simplifies the medial axis into straight lines directly connecting valence 3 nodes (junctions) 
  // and valence 1 nodes (convex boundary end points), bypassing valence 2 intermediate regular points.
  // Performs distance-based greedy clustering to merge raw junction points that are close to each other,
  // and connects the resulting nodes using Kruskal's Minimum Spanning Tree (MST) on the internal visibility graph.
  simplifySkeleton(regularPoints, junctionPoints, mergeThreshold = 20) {
    // 1. Separate end points (valence 1) from raw isolated junctions
    const endPoints = junctionPoints.filter(p => p.isEndPoint);
    const rawJunctions = junctionPoints.filter(p => !p.isEndPoint);

    // 2. Perform distance-based greedy clustering on junction points to merge close vertices
    const clusters = [];
    for (const j of rawJunctions) {
      let added = false;
      for (const cluster of clusters) {
        // Calculate centroid of current cluster
        let sumX = 0, sumY = 0;
        for (const p of cluster) {
          sumX += p.x;
          sumY += p.y;
        }
        const centroid = new Vector2D(sumX / cluster.length, sumY / cluster.length);
        
        if (j.dist(centroid) < mergeThreshold) {
          cluster.push(j);
          added = true;
          break;
        }
      }
      if (!added) {
        clusters.push([j]);
      }
    }

    // 3. Compute centroid nodes for each cluster
    const mergedJunctions = clusters.map(cluster => {
      let sumX = 0, sumY = 0, sumR = 0;
      let sumNx = 0, sumNy = 0;
      for (const p of cluster) {
        sumX += p.x;
        sumY += p.y;
        sumR += p.radius;
        if (p.effectiveNormal) {
          sumNx += p.effectiveNormal.x;
          sumNy += p.effectiveNormal.y;
        }
      }
      const centroid = new Vector2D(sumX / cluster.length, sumY / cluster.length);
      centroid.radius = sumR / cluster.length;
      centroid.effectiveNormal = new Vector2D(
        sumNx / cluster.length,
        sumNy / cluster.length
      ).normalize();
      centroid.isEndPoint = false;
      return centroid;
    });

    // Combined set of all nodes (exact convex end points + merged junction centroids)
    const allNodes = [...endPoints, ...mergedJunctions];

    if (allNodes.length === 0) return { segments: [], nodes: [] };

    // Point-in-polygon helper
    const isPointInPolygon = (pt, poly) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i].x, yi = poly[i].y;
        const xj = poly[j].x, yj = poly[j].y;
        const intersect = ((yi > pt.y) !== (yj > pt.y))
            && (pt.x < (xj - xi) * (pt.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    };

    // Segment visibility check inside polygon (with endpoint inset buffer)
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

      const mid = a.add(b).scale(0.5);
      return isPointInPolygon(mid, this.polygon);
    };

    // 4. Generate all candidate visible edges between nodes
    const candidateEdges = [];
    for (let i = 0; i < allNodes.length; i++) {
      for (let j = i + 1; j < allNodes.length; j++) {
        const u = allNodes[i];
        const v = allNodes[j];
        if (isSegmentVisible(u, v)) {
          candidateEdges.push({
            i,
            j,
            u,
            v,
            weight: u.distSq(v),
          });
        }
      }
    }

    // 5. Build Minimum Spanning Tree using Kruskal's algorithm
    candidateEdges.sort((a, b) => a.weight - b.weight);

    // Union-Find data structure
    const parent = Array.from({ length: allNodes.length }, (_, idx) => idx);
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

    const simplifiedSegments = [];
    for (const edge of candidateEdges) {
      if (union(edge.i, edge.j)) {
        simplifiedSegments.push({ start: edge.u, end: edge.v });
      }
    }

    // 6. Robustness Fallback: If the visibility graph is disconnected,
    // connect any remaining disjoint components using visible node-pairs.
    for (let i = 0; i < allNodes.length; i++) {
      for (let j = 0; j < allNodes.length; j++) {
        if (i === j) continue;
        if (find(i) !== find(j)) {
          const u = allNodes[i];
          const v = allNodes[j];
          if (isSegmentVisible(u, v)) {
            union(i, j);
            simplifiedSegments.push({ start: u, end: v });
          }
        }
      }
    }

    // 7. Post-Simplification: Iteratively delete intermediate valence 2 vertices to straighten paths
    let changed = true;
    while (changed) {
      changed = false;
      
      const neighbors = new Map();
      const addNeighbor = (n1, n2) => {
        if (!neighbors.has(n1)) neighbors.set(n1, new Set());
        neighbors.get(n1).add(n2);
      };
      
      for (const seg of simplifiedSegments) {
        addNeighbor(seg.start, seg.end);
        addNeighbor(seg.end, seg.start);
      }
      
      let targetNode = null;
      for (const [node, nbSet] of neighbors.entries()) {
        // Only delete non-end point nodes that have exactly 2 neighbors
        if (nbSet.size === 2 && !node.isEndPoint) {
          targetNode = node;
          break;
        }
      }
      
      if (targetNode) {
        const nbs = Array.from(neighbors.get(targetNode));
        const n1 = nbs[0];
        const n2 = nbs[1];
        
        // Remove segments containing targetNode
        for (let idx = simplifiedSegments.length - 1; idx >= 0; idx--) {
          const seg = simplifiedSegments[idx];
          if (seg.start === targetNode || seg.end === targetNode) {
            simplifiedSegments.splice(idx, 1);
          }
        }
        
        // Connect n1 and n2 directly
        const exists = simplifiedSegments.some(seg => 
          (seg.start === n1 && seg.end === n2) ||
          (seg.start === n2 && seg.end === n1)
        );
        if (!exists && n1 !== n2) {
          simplifiedSegments.push({ start: n1, end: n2 });
        }
        
        // Remove targetNode from allNodes list so the visualizer doesn't draw a junction circle there
        const nodeIdx = allNodes.indexOf(targetNode);
        if (nodeIdx !== -1) {
          allNodes.splice(nodeIdx, 1);
        }
        
        changed = true;
      }
    }

    return { segments: simplifiedSegments, nodes: allNodes };
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
