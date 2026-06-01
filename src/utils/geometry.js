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
