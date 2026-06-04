import { Vector2D } from './vector2d.js';

// Validates and ensures polygon is CCW oriented
export function makeCCW(vertices) {
  let sum = 0;
  for (let i = 0; i < vertices.length; i++) {
    const v1 = vertices[i];
    const v2 = vertices[(i + 1) % vertices.length];
    sum += (v2.x - v1.x) * (v2.y + v1.y);
  }
  return sum < 0 ? vertices : [...vertices].reverse();
}

// Get inward normal of segment v1 -> v2 (assuming CCW polygon)
export function getInwardNormal(v1, v2) {
  const dx = v2.x - v1.x;
  const dy = v2.y - v1.y;
  // Rotating the edge direction by 90 degrees CCW gives the inward normal
  return new Vector2D(-dy, dx).normalize();
}

// Ray-segment intersection
export function intersectRaySegment(rayOrigin, rayDir, segStart, segEnd) {
  const edgeVec = segEnd.sub(segStart);
  const denom = rayDir.cross(edgeVec);
  
  if (Math.abs(denom) < 1e-10) return null; // Parallel

  const diff = segStart.sub(rayOrigin);
  const s = diff.cross(edgeVec) / denom;
  const t = diff.cross(rayDir) / denom;

  // s > 1e-6 avoids self-intersection at the starting boundary point
  if (s > 1e-6 && t >= 0 && t <= 1) {
    return { point: rayOrigin.add(rayDir.scale(s)), s };
  }
  return null;
}

// Ray-polygon intersection (returns first intersection point)
export function intersectRayPolygon(rayOrigin, rayDir, polygon) {
  let minS = Infinity;
  let closestPoint = null;

  for (let i = 0; i < polygon.length; i++) {
    const v1 = polygon[i];
    const v2 = polygon[(i + 1) % polygon.length];
    const hit = intersectRaySegment(rayOrigin, rayDir, v1, v2);
    if (hit && hit.s < minS) {
      minS = hit.s;
      closestPoint = hit.point;
    }
  }
  return closestPoint;
}

// Closest point on segment to target point
export function closestPointOnSegment(point, segStart, segEnd) {
  const v = segEnd.sub(segStart);
  const w = point.sub(segStart);
  const lenSq = v.lengthSq();
  if (lenSq < 1e-10) return segStart;
  
  let t = w.dot(v) / lenSq;
  t = Math.max(0, Math.min(1, t));
  return segStart.add(v.scale(t));
}

// Distance from point to polygon boundary, and the closest boundary point + edge index
export function distanceToPolygon(point, polygon) {
  let minDist = Infinity;
  let closestPt = null;
  let closestEdgeIdx = -1;

  for (let i = 0; i < polygon.length; i++) {
    const v1 = polygon[i];
    const v2 = polygon[(i + 1) % polygon.length];
    const pt = closestPointOnSegment(point, v1, v2);
    const dist = point.dist(pt);
    if (dist < minDist) {
      minDist = dist;
      closestPt = pt;
      closestEdgeIdx = i;
    }
  }
  return { distance: minDist, point: closestPt, edgeIndex: closestEdgeIdx };
}

// Ray-casting point-in-polygon check
export function pointInPolygon(point, vs) {
  let x = point.x, y = point.y;
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    let xi = vs[i].x, yi = vs[i].y;
    let xj = vs[j].x, yj = vs[j].y;
    let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Merges multiple CCW polygons by removing shared edges and tracing the boundary.
export function mergePolygonCells(cells) {
  if (cells.length === 0) return null;
  let merged = cells[0];
  for (let i = 1; i < cells.length; i++) {
    merged = mergeTwoPolygons(merged, cells[i]);
    if (!merged) return null;
  }
  return cleanupCollinear(merged);
}

// Merges two adjacent CCW polygons.
function mergeTwoPolygons(polyA, polyB) {
  const edgesA = [];
  for (let i = 0; i < polyA.length; i++) {
    edgesA.push([polyA[i], polyA[(i + 1) % polyA.length]]);
  }
  const edgesB = [];
  for (let i = 0; i < polyB.length; i++) {
    edgesB.push([polyB[i], polyB[(i + 1) % polyB.length]]);
  }

  const getKey = (p) => `${p.x.toFixed(4)},${p.y.toFixed(4)}`;

  const keysB = new Set();
  for (const e of edgesB) {
    keysB.add(`${getKey(e[0])}->${getKey(e[1])}`);
  }

  const filteredA = edgesA.filter(e => !keysB.has(`${getKey(e[1])}->${getKey(e[0])}`));
  
  const keysA = new Set();
  for (const e of edgesA) {
    keysA.add(`${getKey(e[0])}->${getKey(e[1])}`);
  }
  const filteredB = edgesB.filter(e => !keysA.has(`${getKey(e[1])}->${getKey(e[0])}`));

  const remaining = [...filteredA, ...filteredB];
  if (remaining.length === 0) return null;

  const adj = new Map();
  for (const e of remaining) {
    adj.set(getKey(e[0]), { start: e[0], end: e[1] });
  }

  const startKey = Array.from(adj.keys())[0];
  let currKey = startKey;
  const mergedPoints = [];
  const visited = new Set();

  while (currKey && !visited.has(currKey)) {
    visited.add(currKey);
    const edge = adj.get(currKey);
    if (!edge) break;
    mergedPoints.push(edge.start);
    currKey = getKey(edge.end);
  }

  // If we didn't visit all remaining edges, they are not a single connected loop
  if (visited.size < remaining.length) {
    return null;
  }

  return mergedPoints;
}

// Removes collinear vertices from a 2D polygon.
export function cleanupCollinear(points) {
  if (points.length < 3) return points;
  const result = [];
  for (let i = 0; i < points.length; i++) {
    const prev = points[(i - 1 + points.length) % points.length];
    const curr = points[i];
    const next = points[(i + 1) % points.length];
    
    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;
    
    const len1 = Math.hypot(dx1, dy1);
    const len2 = Math.hypot(dx2, dy2);
    if (len1 < 1e-6 || len2 < 1e-6) continue;
    
    const cross = (dx1 * dy2 - dy1 * dx2) / (len1 * len2);
    
    if (Math.abs(cross) > 1e-3) {
      result.push(curr);
    }
  }
  return result;
}
