import { Vector2D } from './vector2d.js';
import { closestPointOnSegment } from './geometry.js';

/**
 * A planar straight line graph (PSLG) representation that merges vertices,
 * subdivides intersecting/touching segments, and extracts interior faces (cells)
 * as structural bays.
 */
export class PlanarGraph {
  constructor(vertexTolerance = 1e-3, vertexOverrides = new Map()) {
    this.vertices = []; // Array of Vector2D (current positions)
    this.originalVertices = []; // Array of Vector2D (original positions)
    this.edges = []; // Array of index pairs [u, v, type]
    this.vertexTolerance = vertexTolerance;
    this.vertexOverrides = vertexOverrides;
  }

  /**
   * Finds if there is an override for original coordinate pt.
   * @param {Vector2D} pt 
   * @returns {Vector2D|null}
   */
  getOverride(pt) {
    for (const [keyStr, val] of this.vertexOverrides.entries()) {
      const parts = keyStr.split(',');
      const kx = parseFloat(parts[0]);
      const ky = parseFloat(parts[1]);
      const dist = Math.hypot(pt.x - kx, pt.y - ky);
      if (dist < 0.1) { // 10cm matching tolerance
        return val;
      }
    }
    return null;
  }

  /**
   * Adds a vertex to the graph, merging it with an existing one if close.
   * @param {Vector2D} pt 
   * @returns {number} The index of the vertex
   */
  addVertex(pt) {
    const overridePt = this.getOverride(pt);
    const targetPt = overridePt || pt;

    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].dist(targetPt) < this.vertexTolerance) {
        return i;
      }
    }
    this.vertices.push(new Vector2D(targetPt.x, targetPt.y));
    this.originalVertices.push(new Vector2D(pt.x, pt.y));
    return this.vertices.length - 1;
  }

  /**
   * Adds an undirected edge between two points.
   * @param {Vector2D} pt1 
   * @param {Vector2D} pt2 
   */
  addEdge(pt1, pt2, type = 'unknown') {
    const u = this.addVertex(pt1);
    const v = this.addVertex(pt2);
    if (u === v) return;
    
    // Check if edge already exists
    const exists = this.edges.some(e => (e[0] === u && e[1] === v) || (e[0] === v && e[1] === u));
    if (!exists) {
      this.edges.push([u, v, type]);
    }
  }

  /**
   * Subdivides edges if an intermediate vertex lies on them.
   * This splits segments at connection points (e.g., rib connections on boundaries or spines).
   */
  subdivideEdges() {
    let changed = true;
    let iterations = 0;
    const maxIterations = 20;

    while (changed && iterations < maxIterations) {
      changed = false;
      iterations++;
      const newEdges = [];
      
      for (const edge of this.edges) {
        const u = edge[0];
        const v = edge[1];
        const type = edge[2];
        const ptU = this.vertices[u];
        const ptV = this.vertices[v];
        const edgeVec = ptV.sub(ptU);
        const len = edgeVec.length();
        
        if (len < this.vertexTolerance) continue;

        // Find if there is any vertex w that lies strictly inside segment uv
        let splitVertexIdx = -1;
        
        for (let w = 0; w < this.vertices.length; w++) {
          if (w === u || w === v) continue;
          const ptW = this.vertices[w];
          
          // Project w onto segment uv
          const cp = closestPointOnSegment(ptW, ptU, ptV);
          const distToEdge = ptW.dist(cp);
          
          if (distToEdge < this.vertexTolerance) {
            const dProj = ptU.dist(cp);
            const t = dProj / len;
            
            // Check if projection point cp is strictly between the endpoints u and v
            if (t > 1e-4 && t < 1.0 - 1e-4) {
              splitVertexIdx = w;
              break;
            }
          }
        }

        if (splitVertexIdx !== -1) {
          newEdges.push([u, splitVertexIdx, type]);
          newEdges.push([splitVertexIdx, v, type]);
          changed = true;
        } else {
          newEdges.push([u, v, type]);
        }
      }

      this.edges = [];
      // Deduplicate new edges
      for (const e of newEdges) {
        const u = e[0];
        const v = e[1];
        const type = e[2];
        const exists = this.edges.some(existing => (existing[0] === u && existing[1] === v) || (existing[0] === v && existing[1] === u));
        if (!exists && u !== v) {
          this.edges.push([u, v, type]);
        }
      }
    }
  }

  /**
   * Traces all closed interior faces (structural bays) of the planar graph.
   * Outgoing edges from each vertex are sorted CCW. Tracing turns left at each vertex
   * to trace CCW loops, filtering out the clockwise-oriented exterior face.
   * @returns {Vector2D[][]} List of cell boundary polygons (array of points)
   */
  extractFaces() {
    // 1. Subdivide edges at intermediate connection vertices
    this.subdivideEdges();

    const n = this.vertices.length;
    const adj = Array.from({ length: n }, () => []);
    
    for (const [u, v] of this.edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    // Sort neighbors CCW
    const sortedAdj = adj.map((neighbors, u) => {
      const ptU = this.vertices[u];
      return neighbors
        .map(v => {
          const ptV = this.vertices[v];
          const angle = Math.atan2(ptV.y - ptU.y, ptV.x - ptU.x);
          return { v, angle };
        })
        .sort((a, b) => a.angle - b.angle)
        .map(item => item.v);
    });

    const visited = new Set();
    const faces = [];

    // 3. Trace half-edges
    for (let u = 0; u < n; u++) {
      for (const v of sortedAdj[u]) {
        const key = `${u},${v}`;
        if (visited.has(key)) continue;

        const cycle = [];
        let curr = v;
        let prev = u;
        let isClosed = false;
        
        while (!visited.has(`${prev},${curr}`)) {
          cycle.push(curr);
          visited.add(`${prev},${curr}`);
          
          const neighbors = sortedAdj[curr];
          const idx = neighbors.indexOf(prev);
          if (idx === -1) {
            break; // Topological anomaly
          }
          
          // Turn CCW (leftmost outgoing branch) -> idx - 1 wrapped
          const next = neighbors[(idx - 1 + neighbors.length) % neighbors.length];
          prev = curr;
          curr = next;
          
          if (curr === v && prev === u) {
            isClosed = true;
            break;
          }
        }

        if (isClosed && cycle.length >= 3) {
          // Calculate signed area to identify orientation
          let area = 0;
          const points = cycle.map(idx => this.vertices[idx]);
          
          for (let i = 0; i < points.length; i++) {
            const p1 = points[i];
            const p2 = points[(i + 1) % points.length];
            area += (p1.x * p2.y - p2.x * p1.y);
          }
          area = 0.5 * area;

          // If the signed area is positive (CCW cycle), it is an interior cell!
          if (area > 1e-4) {
            // Filter: cells formed between structural ribs and exterior polygon are the only ones to consider.
            // A cell must contain at least 1 boundary edge and at least 2 distinct structural rib edges.
            let boundaryCount = 0;
            const uniqueRibIds = new Set();
            
            for (let i = 0; i < cycle.length; i++) {
              const u1 = cycle[i];
              const v1 = cycle[(i + 1) % cycle.length];
              
              const edge = this.edges.find(e => (e[0] === u1 && e[1] === v1) || (e[0] === v1 && e[1] === u1));
              if (edge) {
                const type = edge[2];
                if (type === 'boundary') {
                  boundaryCount++;
                } else if (type && type.startsWith('rib_')) {
                  uniqueRibIds.add(type);
                }
              }
            }
            
            if (boundaryCount > 0 && uniqueRibIds.size >= 2) {
              faces.push(points);
            }
          }
        }
      }
    }

    return faces;
  }
}
