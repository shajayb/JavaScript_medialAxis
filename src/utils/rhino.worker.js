// Web Worker for background multithreaded parsing and creation of Rhino .3dm files using rhino3dm.js WASM
importScripts('/rhino3dm.js');

let rhino = null;

async function getRhino() {
    if (rhino) return rhino;
    // Initialize the WebAssembly module, locating the .wasm file at the public root
    rhino = await rhino3dm({
        locateFile: (file) => '/' + file
    });
    return rhino;
}

function createCylinderMesh(rhino, xc, yc, zStart, radius, height, segments = 12) {
    const mesh = new rhino.Mesh();
    const zEnd = zStart + height;
    
    mesh.vertices().add(xc, yc, zStart);
    mesh.vertices().add(xc, yc, zEnd);
    
    for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const dx = Math.cos(theta) * radius;
        const dy = Math.sin(theta) * radius;
        mesh.vertices().add(xc + dx, yc + dy, zStart);
    }
    for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const dx = Math.cos(theta) * radius;
        const dy = Math.sin(theta) * radius;
        mesh.vertices().add(xc + dx, yc + dy, zEnd);
    }
    
    const bCenter = 0;
    const tCenter = 1;
    const bRingStart = 2;
    const tRingStart = 2 + segments;
    
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        mesh.faces().addTriFace(bCenter, bRingStart + next, bRingStart + i);
        mesh.faces().addTriFace(tCenter, tRingStart + i, tRingStart + next);
        mesh.faces().addQuadFace(
            bRingStart + i,
            bRingStart + next,
            tRingStart + next,
            tRingStart + i
        );
    }
    
    return mesh;
}

function createBoxMesh(rhino, ax, ay, bx, by, width, depth, zTop, offsetX = 0, offsetY = 0) {
    const mesh = new rhino.Mesh();
    
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) return mesh;
    
    const nx = dy / len;
    const ny = -dx / len;
    
    const hW = width / 2;
    const zBottom = zTop - depth;
    
    const pts = [
        { x: ax - nx * hW + offsetX, y: ay - ny * hW + offsetY },
        { x: ax + nx * hW + offsetX, y: ay + ny * hW + offsetY },
        { x: bx + nx * hW + offsetX, y: by + ny * hW + offsetY },
        { x: bx - nx * hW + offsetX, y: by - ny * hW + offsetY }
    ];
    
    pts.forEach(p => mesh.vertices().add(p.x, p.y, zBottom));
    pts.forEach(p => mesh.vertices().add(p.x, p.y, zTop));
    
    mesh.faces().addQuadFace(3, 2, 1, 0);
    mesh.faces().addQuadFace(4, 5, 6, 7);
    
    mesh.faces().addQuadFace(0, 1, 5, 4);
    mesh.faces().addQuadFace(1, 2, 6, 5);
    mesh.faces().addQuadFace(2, 3, 7, 6);
    mesh.faces().addQuadFace(3, 0, 4, 7);
    
    return mesh;
}

function computeBipartiteVertexHeightsWorker(bays) {
    const getX = pt => pt[0] !== undefined ? pt[0] : pt.x;
    const getY = pt => pt[1] !== undefined ? pt[1] : pt.y;

    const uniqueVerts = [];
    const getUniqueIdx = (pt) => {
        const px = getX(pt);
        const py = getY(pt);
        for (let i = 0; i < uniqueVerts.length; i++) {
            const ux = getX(uniqueVerts[i]);
            const uy = getY(uniqueVerts[i]);
            if (Math.hypot(px - ux, py - uy) < 0.05) {
                return i;
            }
        }
        uniqueVerts.push(pt);
        return uniqueVerts.length - 1;
    };

    const cellVertIndices = bays.map(cell => cell.map(pt => getUniqueIdx(pt)));

    const adj = Array.from({ length: uniqueVerts.length }, () => []);
    cellVertIndices.forEach(cellIndices => {
        const m = cellIndices.length;
        for (let i = 0; i < m; i++) {
            const u = cellIndices[i];
            const v = cellIndices[(i + 1) % m];
            if (!adj[u].includes(v)) adj[u].push(v);
        }
    });

    for (let u = 0; u < uniqueVerts.length; u++) {
        adj[u].forEach(v => {
            if (!adj[v].includes(u)) adj[v].push(u);
        });
    }

    const indicesSorted = Array.from({ length: uniqueVerts.length }, (_, i) => i);
    indicesSorted.sort((i1, i2) => {
        const x1 = getX(uniqueVerts[i1]);
        const y1 = getY(uniqueVerts[i1]);
        const x2 = getX(uniqueVerts[i2]);
        const y2 = getY(uniqueVerts[i2]);
        if (Math.abs(x1 - x2) > 1e-4) return x1 - x2;
        return y1 - y2;
    });

    adj.forEach(neighbors => {
        neighbors.sort((n1, n2) => {
            const x1 = getX(uniqueVerts[n1]);
            const y1 = getY(uniqueVerts[n1]);
            const x2 = getX(uniqueVerts[n2]);
            const y2 = getY(uniqueVerts[n2]);
            if (Math.abs(x1 - x2) > 1e-4) return x1 - x2;
            return y1 - y2;
        });
    });

    const colors = new Array(uniqueVerts.length).fill(-1);
    for (const startIdx of indicesSorted) {
        if (colors[startIdx] === -1) {
            colors[startIdx] = 0;
            const queue = [startIdx];
            while (queue.length > 0) {
                const u = queue.shift();
                const curColor = colors[u];
                const nextColor = 1 - curColor;
                adj[u].forEach(v => {
                    if (colors[v] === -1) {
                        colors[v] = nextColor;
                        queue.push(v);
                    }
                });
            }
        }
    }

    return { uniqueVerts, colors };
}

function createHyparCellMesh(rhino, vertices2D, zTop, zBottomBase, H, spacing, bipartiteData, originalCell, boundary) {
    const mesh = new rhino.Mesh();
    const n = vertices2D.length;
    if (n < 3) return mesh;

    const zHigh = zTop - 0.05;

    const getPtX = pt => pt[0] !== undefined ? pt[0] : pt.x;
    const getPtY = pt => pt[1] !== undefined ? pt[1] : pt.y;

    const getVertexColor = (pt) => {
        if (!bipartiteData) return 0;
        const px = getPtX(pt);
        const py = getPtY(pt);
        const { uniqueVerts, colors } = bipartiteData;
        for (let i = 0; i < uniqueVerts.length; i++) {
            const ux = getPtX(uniqueVerts[i]);
            const uy = getPtY(uniqueVerts[i]);
            if (Math.hypot(px - ux, py - uy) < 0.05) {
                return colors[i];
            }
        }
        return 0;
    };

    if (n === 4) {
        const M = 8;
        const v0 = vertices2D[0];
        const v1 = vertices2D[1];
        const v2 = vertices2D[2];
        const v3 = vertices2D[3];

        const c0 = getVertexColor(originalCell && originalCell[0] ? originalCell[0] : v0);
        const c1 = getVertexColor(originalCell && originalCell[1] ? originalCell[1] : v1);
        const c2 = getVertexColor(originalCell && originalCell[2] ? originalCell[2] : v2);
        const c3 = getVertexColor(originalCell && originalCell[3] ? originalCell[3] : v3);

        const h0 = c0 === 0 ? zBottomBase : zHigh;
        const h1 = c1 === 0 ? zBottomBase : zHigh;
        const h2 = c2 === 0 ? zBottomBase : zHigh;
        const h3 = c3 === 0 ? zBottomBase : zHigh;

        const lenU = (Math.hypot(getPtX(v0) - getPtX(v1), getPtY(v0) - getPtY(v1)) + Math.hypot(getPtX(v3) - getPtX(v2), getPtY(v3) - getPtY(v2))) / 2;
        const N_slats = Math.max(2, Math.round(lenU / spacing) + 1);
        const slatWidth = 0.05;
        const slatDepth = 0.1;

        let vOffset = 0;

        for (let k = 0; k < N_slats; k++) {
            const u = k / (N_slats - 1 || 1);

            const Ax = (1 - u) * getPtX(v0) + u * getPtX(v1);
            const Ay = (1 - u) * getPtY(v0) + u * getPtY(v1);
            const Az = (1 - u) * h0 + u * h1;

            const Bx = u * getPtX(v2) + (1 - u) * getPtX(v3);
            const By = u * getPtY(v2) + (1 - u) * getPtY(v3);
            const Bz = (1 - u) * h3 + u * h2;

            const dx = Bx - Ax;
            const dy = By - Ay;
            const dz = Bz - Az;
            const len = Math.hypot(dx, dy, dz);
            if (len < 1e-4) continue;

            const nx = dx / len;
            const ny = dy / len;
            const nz = dz / len;

            let ux, uy, uz;
            if (Math.abs(nx) < 0.9 && Math.abs(ny) < 0.9) {
                ux = -ny;
                uy = nx;
                uz = 0;
            } else {
                ux = nz;
                uy = 0;
                uz = -nx;
            }
            const uLen = Math.hypot(ux, uy, uz);
            const uNx = ux / uLen;
            const uNy = uy / uLen;
            const uNz = uz / uLen;

            const vNxVal = ny * uNz - nz * uNy;
            const vNyVal = nz * uNx - nx * uNz;
            const vNzVal = nx * uNy - ny * uNx;

            const w = slatWidth / 2;
            const d = slatDepth / 2;

            mesh.vertices().add(Ax - uNx * w - vNxVal * d, Ay - uNy * w - vNyVal * d, Az - uNz * w - vNzVal * d);
            mesh.vertices().add(Ax + uNx * w - vNxVal * d, Ay + uNy * w - vNyVal * d, Az + uNz * w + vNzVal * d);
            mesh.vertices().add(Ax + uNx * w + vNxVal * d, Ay + uNy * w + vNyVal * d, Az + uNz * w + vNzVal * d);
            mesh.vertices().add(Ax - uNx * w + vNxVal * d, Ay - uNy * w - vNyVal * d, Az - uNz * w - vNzVal * d);

            mesh.vertices().add(Bx - uNx * w - vNxVal * d, By - uNy * w - vNyVal * d, Bz - uNz * w - vNzVal * d);
            mesh.vertices().add(Bx + uNx * w - vNxVal * d, By - uNy * w - vNyVal * d, Bz + uNz * w + vNzVal * d);
            mesh.vertices().add(Bx + uNx * w + vNxVal * d, By - uNy * w + vNyVal * d, Bz + uNz * w + vNzVal * d);
            mesh.vertices().add(Bx - uNx * w + vNxVal * d, By - uNy * w - vNyVal * d, Bz - uNz * w - vNzVal * d);

            // Add faces
            mesh.faces().addFace(vOffset + 0, vOffset + 2, vOffset + 1, vOffset + 0);
            mesh.faces().addFace(vOffset + 0, vOffset + 3, vOffset + 2, vOffset + 0);

            mesh.faces().addFace(vOffset + 4, vOffset + 5, vOffset + 6, vOffset + 4);
            mesh.faces().addFace(vOffset + 4, vOffset + 6, vOffset + 7, vOffset + 4);

            mesh.faces().addFace(vOffset + 0, vOffset + 1, vOffset + 5, vOffset + 0);
            mesh.faces().addFace(vOffset + 0, vOffset + 5, vOffset + 4, vOffset + 0);

            mesh.faces().addFace(vOffset + 1, vOffset + 2, vOffset + 6, vOffset + 1);
            mesh.faces().addFace(vOffset + 1, vOffset + 6, vOffset + 5, vOffset + 1);

            mesh.faces().addFace(vOffset + 2, vOffset + 3, vOffset + 7, vOffset + 2);
            mesh.faces().addFace(vOffset + 2, vOffset + 7, vOffset + 6, vOffset + 2);

            mesh.faces().addFace(vOffset + 3, vOffset + 0, vOffset + 4, vOffset + 3);
            mesh.faces().addFace(vOffset + 3, vOffset + 4, vOffset + 7, vOffset + 3);

            vOffset += 8;
        }
    } else {
        // Fallback: simple triangulation with bipartite Z heights
        const getPtX = pt => pt[0] !== undefined ? pt[0] : pt.x;
        const getPtY = pt => pt[1] !== undefined ? pt[1] : pt.y;

        vertices2D.forEach((v) => {
            const col = getVertexColor(v);
            const z = col === 0 ? zBottomBase : zHigh;
            mesh.vertices().add(getPtX(v), getPtY(v), z);
        });
        vertices2D.forEach((v) => {
            mesh.vertices().add(getPtX(v), getPtY(v), zHigh);
        });

        for (let j = 1; j < n - 1; j++) {
            mesh.faces().addTriFace(0, j + 1, j);
            mesh.faces().addTriFace(0 + n, j + n, j + 1 + n);
        }

        for (let j = 0; j < n; j++) {
            const jNext = (j + 1) % n;
            const iBot = j;
            const iBotNext = jNext;
            const iTop = j + n;
            const iTopNext = jNext + n;
            mesh.faces().addFace(iBot, iBotNext, iTopNext, iBot);
            mesh.faces().addFace(iBot, iTopNext, iTop, iBot);
        }
    }

    return mesh;
}

function getMiterOffset(n1, n2, d1, d2) {
    const D = n1.x * n2.y - n1.y * n2.x;
    if (Math.abs(D) < 1e-4) {
        return { x: n1.x * d1, y: n1.y * d1 };
    }
    let dx = (d1 * n2.y - d2 * n1.y) / D;
    let dy = (d2 * n1.x - d1 * n2.x) / D;
    const len = Math.hypot(dx, dy);
    const maxLen = 4 * Math.max(d1, d2);
    if (len > maxLen) {
        dx = (dx / len) * maxLen;
        dy = (dy / len) * maxLen;
    }
    return { x: dx, y: dy };
}

function createArchedBeamMesh(rhino, ax, ay, bx, by, width, depth, vaultHeight, zTop) {
    const mesh = new rhino.Mesh();
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) return mesh;
    
    const nx = dy / len;
    const ny = -dx / len;
    const hW = width / 2;
    const M = 8;
    
    for (let k = 0; k <= M; k++) {
        const t = k / M;
        const cx = ax + dx * t;
        const cy = ay + dy * t;
        const zBot = zTop - depth + vaultHeight * 4 * t * (1 - t);
        
        mesh.vertices().add(cx - nx * hW, cy - ny * hW, zTop);
        mesh.vertices().add(cx + nx * hW, cy + ny * hW, zTop);
        mesh.vertices().add(cx + nx * hW, cy + ny * hW, zBot);
        mesh.vertices().add(cx - nx * hW, cy - ny * hW, zBot);
    }
    
    for (let k = 0; k < M; k++) {
        const i = k * 4;
        const next = (k + 1) * 4;
        
        mesh.faces().addQuadFace(i + 0, i + 1, next + 1, next + 0);
        mesh.faces().addQuadFace(i + 3, next + 3, next + 2, i + 2);
        mesh.faces().addQuadFace(i + 3, i + 0, next + 0, next + 3);
        mesh.faces().addQuadFace(i + 1, i + 2, next + 2, next + 1);
    }
    
    mesh.faces().addQuadFace(3, 2, 1, 0);
    const last = M * 4;
    mesh.faces().addQuadFace(last + 0, last + 1, last + 2, last + 3);
    
    return mesh;
}

function triangulatePolygon(vertices) {
    const triangles = [];
    const pts = vertices.map((v, i) => ({ x: v[0], y: v[1], index: i }));
    
    const n = pts.length;
    if (n < 3) return triangles;
    
    let area = 0;
    for (let i = 0; i < n; i++) {
        const p1 = pts[i];
        const p2 = pts[(i + 1) % n];
        area += (p1.x * p2.y - p2.x * p1.y);
    }
    const isCCW = area > 0;
    
    const indicesList = [];
    if (isCCW) {
        for (let i = 0; i < n; i++) indicesList.push(i);
    } else {
        for (let i = n - 1; i >= 0; i--) indicesList.push(i);
    }
    
    function pointInTriangle(px, py, ax, ay, bx, by, cx, cy) {
        const v0x = cx - ax, v0y = cy - ay;
        const v1x = bx - ax, v1y = by - ay;
        const v2x = px - ax, v2y = py - ay;
        
        const dot00 = v0x * v0x + v0y * v0y;
        const dot01 = v0x * v1x + v0y * v1y;
        const dot02 = v0x * v2x + v0y * v2y;
        const dot11 = v1x * v1x + v1y * v1y;
        const dot12 = v1x * v2x + v1y * v2y;
        
        const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
        
        return (u >= 0) && (v >= 0) && (u + v <= 1);
    }
    
    let limit = 2 * n;
    while (indicesList.length > 2 && limit > 0) {
        limit--;
        let earFound = false;
        for (let i = 0; i < indicesList.length; i++) {
            const prev = indicesList[(i - 1 + indicesList.length) % indicesList.length];
            const curr = indicesList[i];
            const next = indicesList[(i + 1) % indicesList.length];
            
            const a = pts[prev];
            const b = pts[curr];
            const c = pts[next];
            
            const cross = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
            if (cross <= 0) continue;
            
            let hasPointInside = false;
            for (let j = 0; j < indicesList.length; j++) {
                const idx = indicesList[j];
                if (idx === prev || idx === curr || idx === next) continue;
                const p = pts[idx];
                if (pointInTriangle(p.x, p.y, a.x, a.y, b.x, b.y, c.x, c.y)) {
                    hasPointInside = true;
                    break;
                }
            }
            
            if (!hasPointInside) {
                triangles.push([prev, curr, next]);
                indicesList.splice(i, 1);
                earFound = true;
                break;
            }
        }
        if (!earFound) {
            for (let i = 0; i < indicesList.length; i++) {
                const prev = indicesList[(i - 1 + indicesList.length) % indicesList.length];
                const curr = indicesList[i];
                const next = indicesList[(i + 1) % indicesList.length];
                const a = pts[prev];
                const b = pts[curr];
                const c = pts[next];
                const cross = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
                if (cross > 0) {
                    triangles.push([prev, curr, next]);
                    indicesList.splice(i, 1);
                    break;
                }
            }
        }
    }
    
    return triangles;
}

function distanceToSegmentWorker(pt, p1, p2) {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const lenSq = dx * dx + dy * dy;
    if (lenSq < 1e-9) {
        return Math.hypot(pt[0] - p1[0], pt[1] - p1[1]);
    }
    let t = ((pt[0] - p1[0]) * dx + (pt[1] - p1[1]) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    const projX = p1[0] + t * dx;
    const projY = p1[1] + t * dy;
    return Math.hypot(pt[0] - projX, pt[1] - projY);
}

function createExtrudedPolygonMesh(rhino, vertices2D, depth, zTop, isCCW = true) {
    const mesh = new rhino.Mesh();
    const n = vertices2D.length;
    if (n < 3) return mesh;
    
    const zBottom = zTop - depth;
    
    vertices2D.forEach(v => mesh.vertices().add(v[0], v[1], zBottom));
    vertices2D.forEach(v => mesh.vertices().add(v[0], v[1], zTop));
    
    // Triangulate
    const triangles = triangulatePolygon(vertices2D);
    triangles.forEach(tri => {
        // Bottom cap: clockwise to face downwards
        mesh.faces().addTriFace(tri[2], tri[1], tri[0]);
        // Top cap: counter-clockwise to face upwards
        mesh.faces().addTriFace(tri[0] + n, tri[1] + n, tri[2] + n);
    });
    
    // Side quads
    for (let j = 0; j < n; j++) {
        const jNext = (j + 1) % n;
        mesh.faces().addQuadFace(j, jNext, jNext + n, j + n);
    }
    
    return mesh;
}

function isPrunedSkeletonInteriorPointWorker(pt, prunedSkeletonVertices) {
    if (!prunedSkeletonVertices || prunedSkeletonVertices.length === 0) return false;
    const px = pt[0] !== undefined ? pt[0] : pt.x;
    const py = pt[1] !== undefined ? pt[1] : pt.y;
    for (let i = 0; i < prunedSkeletonVertices.length; i++) {
        const pSkel = prunedSkeletonVertices[i];
        if (Math.hypot(px - pSkel[0], py - pSkel[1]) < 0.05) {
            return true;
        }
    }
    return false;
}

function distanceToPolygonWorker(pt, boundary) {
    let minDist = Infinity;
    const px = pt[0] !== undefined ? pt[0] : pt.x;
    const py = pt[1] !== undefined ? pt[1] : pt.y;
    for (let i = 0; i < boundary.length; i++) {
        const p1 = boundary[i];
        const p2 = boundary[(i + 1) % boundary.length];
        const x1 = p1[0] !== undefined ? p1[0] : p1.x;
        const y1 = p1[1] !== undefined ? p1[1] : p1.y;
        const x2 = p2[0] !== undefined ? p2[0] : p2.x;
        const y2 = p2[1] !== undefined ? p2[1] : p2.y;
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        const lenSq = dx * dx + dy * dy;
        let t = 0;
        if (lenSq > 1e-10) {
            t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
            t = Math.max(0, Math.min(1, t));
        }
        const cx = x1 + t * dx;
        const cy = y1 + t * dy;
        const dist = Math.hypot(px - cx, py - cy);
        if (dist < minDist) {
            minDist = dist;
        }
    }
    return minDist;
}

function isInteriorSkeletonPointWorker(pt, boundary) {
    return distanceToPolygonWorker(pt, boundary) > 0.05;
}

function createRoofSheetMesh(rhino, structuralBays, cantileverCells, zTop, RH, isConcrete, boundary) {
    const mesh = new rhino.Mesh();
    let vOffset = 0;

    const addTriangle = (p0, p1, p2, i0, i1, i2) => {
        const px0 = p0[0] !== undefined ? p0[0] : p0.x;
        const py0 = p0[1] !== undefined ? p0[1] : p0.y;
        const px1 = p1[0] !== undefined ? p1[0] : p1.x;
        const py1 = p1[1] !== undefined ? p1[1] : p1.y;
        const px2 = p2[0] !== undefined ? p2[0] : p2.x;
        const py2 = p2[1] !== undefined ? p2[1] : p2.y;

        const area = (px1 - px0) * (py2 - py0) - (px2 - px0) * (py1 - py0);
        if (area < 0) {
            mesh.faces().addTriFace(i0, i2, i1);
        } else {
            mesh.faces().addTriFace(i0, i1, i2);
        }
    };

    const getVertexHeight = (v) => {
        const isInterior = isInteriorSkeletonPointWorker(v, boundary);
        if (isInterior) {
            return isConcrete ? zTop : (zTop - RH);
        } else {
            return isConcrete ? (zTop + RH) : zTop;
        }
    };

    // 1. Add structural bays (never cantilevered)
    structuralBays.forEach(cell => {
        const n = cell.length;
        if (n < 3) return;
        
        // Centroid
        let sumX = 0, sumY = 0;
        cell.forEach(v => {
            sumX += v[0];
            sumY += v[1];
        });
        const cx = sumX / n;
        const cy = sumY / n;
        
        // Heights
        const cellHeights = [];
        cell.forEach(v => {
            const zVal = getVertexHeight(v);
            cellHeights.push(zVal);
            mesh.vertices().add(v[0], v[1], zVal);
        });
        
        // Centroid height is average of vertex heights
        const czVal = cellHeights.reduce((sum, h) => sum + h, 0) / n;
        mesh.vertices().add(cx, cy, czVal); // Centroid at index vOffset + n
        
        const cPt = [cx, cy];
        for (let i = 0; i < n; i++) {
            const next = (i + 1) % n;
            addTriangle(cell[i], cell[next], cPt, vOffset + i, vOffset + next, vOffset + n);
        }
        
        vOffset += n + 1;
    });

    // 2. Add cantilever cells
    cantileverCells.forEach(cell => {
        const n = cell.length; // Always 4
        if (n < 3) return;
        
        // Centroid
        let sumX = 0, sumY = 0;
        cell.forEach(v => {
            sumX += v[0];
            sumY += v[1];
        });
        const cx = sumX / n;
        const cy = sumY / n;
        
        const cellHeights = [];
        cell.forEach((v, idx) => {
            const isCantPoint = (idx === 2 || idx === 3);
            const zVal = isConcrete ? (zTop + RH) : (isCantPoint ? (zTop + RH) : zTop);
            cellHeights.push(zVal);
            mesh.vertices().add(v[0], v[1], zVal);
        });
        
        const cz = cellHeights.reduce((sum, h) => sum + h, 0) / n;
        mesh.vertices().add(cx, cy, cz); // Centroid at index vOffset + n
        
        const cPt = [cx, cy];
        for (let i = 0; i < n; i++) {
            const next = (i + 1) % n;
            addTriangle(cell[i], cell[next], cPt, vOffset + i, vOffset + next, vOffset + n);
        }
        
        vOffset += n + 1;
    });

    return mesh;
}


function computeBipartiteVertexHeights(bays) {
    const getX = pt => pt.x !== undefined ? pt.x : pt[0];
    const getY = pt => pt.y !== undefined ? pt.y : pt[1];
    
    const uniqueVerts = [];
    const getUniqueIdx = (pt) => {
        const px = getX(pt);
        const py = getY(pt);
        for (let i = 0; i < uniqueVerts.length; i++) {
            const ux = getX(uniqueVerts[i]);
            const uy = getY(uniqueVerts[i]);
            if (Math.hypot(px - ux, py - uy) < 0.05) {
                return i;
            }
        }
        uniqueVerts.push(pt);
        return uniqueVerts.length - 1;
    };

    const cellVertIndices = bays.map(cell => cell.map(pt => getUniqueIdx(pt)));

    const adj = Array.from({ length: uniqueVerts.length }, () => []);
    cellVertIndices.forEach(cellIndices => {
        const m = cellIndices.length;
        for (let i = 0; i < m; i++) {
            const u = cellIndices[i];
            const v = cellIndices[(i + 1) % m];
            if (!adj[u].includes(v)) adj[u].push(v);
        }
    });

    for (let u = 0; u < uniqueVerts.length; u++) {
        adj[u].forEach(v => {
            if (!adj[v].includes(u)) adj[v].push(u);
        });
    }

    const indicesSorted = Array.from({ length: uniqueVerts.length }, (_, i) => i);
    indicesSorted.sort((i1, i2) => {
        const x1 = getX(uniqueVerts[i1]);
        const y1 = getY(uniqueVerts[i1]);
        const x2 = getX(uniqueVerts[i2]);
        const y2 = getY(uniqueVerts[i2]);
        if (Math.abs(x1 - x2) > 1e-4) return x1 - x2;
        return y1 - y2;
    });

    adj.forEach(neighbors => {
        neighbors.sort((n1, n2) => {
            const x1 = getX(uniqueVerts[n1]);
            const y1 = getY(uniqueVerts[n1]);
            const x2 = getX(uniqueVerts[n2]);
            const y2 = getY(uniqueVerts[n2]);
            if (Math.abs(x1 - x2) > 1e-4) return x1 - x2;
            return y1 - y2;
        });
    });

    const colors = new Array(uniqueVerts.length).fill(-1);
    for (const startIdx of indicesSorted) {
        if (colors[startIdx] === -1) {
            colors[startIdx] = 0;
            const queue = [startIdx];
            while (queue.length > 0) {
                const u = queue.shift();
                const curColor = colors[u];
                const nextColor = 1 - curColor;
                adj[u].forEach(v => {
                    if (colors[v] === -1) {
                        colors[v] = nextColor;
                        queue.push(v);
                    }
                });
            }
        }
    }

    return { uniqueVerts, colors, getX, getY };
}

function getVertexColor(pt, bipartiteData) {
    if (!bipartiteData) return 0;
    const { uniqueVerts, colors, getX, getY } = bipartiteData;
    const px = getX(pt);
    const py = getY(pt);
    for (let i = 0; i < uniqueVerts.length; i++) {
        const ux = getX(uniqueVerts[i]);
        const uy = getY(uniqueVerts[i]);
        if (Math.hypot(px - ux, py - uy) < 0.05) {
            return colors[i];
        }
    }
    return 0;
}





function getRoundedBalconyPoints(halfL, bOffset, radius, segments = 8) {
    const pts = [];
    pts.push([-halfL, 0]);
    
    const p0_x = -halfL, p0_y = bOffset - radius;
    const p1_x = -halfL, p1_y = bOffset;
    const p2_x = -halfL + radius, p2_y = bOffset;
    for (let k = 0; k <= segments; k++) {
        const t = k / segments;
        const x = (1 - t) * (1 - t) * p0_x + 2 * (1 - t) * t * p1_x + t * t * p2_x;
        const y = (1 - t) * (1 - t) * p0_y + 2 * (1 - t) * t * p1_y + t * t * p2_y;
        pts.push([x, y]);
    }
    
    const q0_x = halfL - radius, q0_y = bOffset;
    const q1_x = halfL, q1_y = bOffset;
    const q2_x = halfL, q2_y = bOffset - radius;
    for (let k = 0; k <= segments; k++) {
        const t = k / segments;
        const x = (1 - t) * (1 - t) * q0_x + 2 * (1 - t) * t * q1_x + t * t * q2_x;
        const y = (1 - t) * (1 - t) * q0_y + 2 * (1 - t) * t * q1_y + t * t * q2_y;
        pts.push([x, y]);
    }
    
    pts.push([halfL, 0]);
    return pts;
}

function getAerofoilPoints(width, depth, segments = 8) {
    const pts = [];
    
    // First side: from (0, -depth/2) to (0, depth/2) with control point (width/2, 0)
    for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const x = t * (1 - t) * width;
        const y = (2 * t - 1) * depth / 2;
        pts.push([x, y]);
    }
    
    // Second side: from (0, depth/2) to (0, -depth/2) with control point (-width/2, 0)
    for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const x = -t * (1 - t) * width;
        const y = (1 - 2 * t) * depth / 2;
        pts.push([x, y]);
    }
    
    return pts;
}

function isTrueCornerVertex(idx, poly) {
    const N = poly.length;
    if (N < 3) return false;
    const prev = poly[(idx - 1 + N) % N];
    const curr = poly[idx];
    const next = poly[(idx + 1) % N];
    
    const dx1 = curr[0] - prev[0];
    const dy1 = curr[1] - prev[1];
    const len1 = Math.hypot(dx1, dy1);
    
    const dx2 = next[0] - curr[0];
    const dy2 = next[1] - curr[1];
    const len2 = Math.hypot(dx2, dy2);
    
    if (len1 < 1e-6 || len2 < 1e-6) return false;
    
    const dot = (dx1 * dx2 + dy1 * dy2) / (len1 * len2);
    return dot < 0.98; // Turn angle > ~11.5 degrees
}

function isCornerCell(cell, boundaryPolygon) {
    const N = boundaryPolygon.length;
    for (const pt of cell) {
        for (let i = 0; i < N; i++) {
            const bPt = boundaryPolygon[i];
            if (Math.hypot(pt[0] - bPt[0], pt[1] - bPt[1]) < 0.1) {
                if (isTrueCornerVertex(i, boundaryPolygon)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function getFloorZ(floorIdx, numFloors, floorHeight, groundFloorHeightFactor) {
    const gfHeight = floorHeight * groundFloorHeightFactor;
    if (floorIdx === 0) {
        return { bottom: 0, top: gfHeight, height: gfHeight };
    } else {
        const bottom = gfHeight + (floorIdx - 1) * floorHeight;
        return { bottom, top: bottom + floorHeight, height: floorHeight };
    }
}

function getBowedPolygon(floorIdx, numFloors, floorHeight, groundFloorHeightFactor, boundaryPolygon, boundaryNormals) {
    const bowedPoly = boundaryPolygon.map(v => [v[0], v[1]]);
    
    const cornerIndices = [];
    for (let i = 0; i < boundaryPolygon.length; i++) {
        if (isTrueCornerVertex(i, boundaryPolygon)) {
            cornerIndices.push(i);
        }
    }
    
    if (cornerIndices.length >= 2) {
        const m = cornerIndices.length;
        let B = 1.0;
        if (numFloors > 1) {
            B = 1.0 - 0.9 * (floorIdx / (numFloors - 1));
        }
        for (let k = 0; k < m; k++) {
            const startIdx = cornerIndices[k];
            const endIdx = cornerIndices[(k + 1) % m];
            
            const chain = [];
            let idx = startIdx;
            while (idx !== endIdx) {
                chain.push(idx);
                idx = (idx + 1) % boundaryPolygon.length;
            }
            chain.push(endIdx);
            
            const lengths = [0];
            let totalL = 0;
            for (let p = 0; p < chain.length - 1; p++) {
                const p1 = boundaryPolygon[chain[p]];
                const p2 = boundaryPolygon[chain[p+1]];
                totalL += Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
                lengths.push(totalL);
            }
            
            if (totalL > 1e-5) {
                for (let p = 1; p < chain.length - 1; p++) {
                    const idxVal = chain[p];
                    const s = lengths[p] / totalL;
                    const disp = 4 * B * s * (1 - s);
                    
                    const N_total = boundaryPolygon.length;
                    const norm1 = boundaryNormals[(idxVal - 1 + N_total) % N_total];
                    const norm2 = boundaryNormals[idxVal];
                    
                    const avgNormX = norm1.x + norm2.x;
                    const avgNormY = norm1.y + norm2.y;
                    const normLen = Math.hypot(avgNormX, avgNormY);
                    let normX = 0, normY = 0;
                    if (normLen > 1e-6) {
                        normX = avgNormX / normLen;
                        normY = avgNormY / normLen;
                    }
                    
                    bowedPoly[idxVal] = [
                        boundaryPolygon[idxVal][0] - disp * normX,
                        boundaryPolygon[idxVal][1] - disp * normY
                    ];
                }
            }
        }
    }
    return bowedPoly;
}

function getWarpedVertices(vertices, boundaryPolygon, bowedPolygon) {
    return vertices.map(v => {
        let bestIdx = -1;
        let minDist = 0.1;
        for (let j = 0; j < boundaryPolygon.length; j++) {
            const dist = Math.hypot(v[0] - boundaryPolygon[j][0], v[1] - boundaryPolygon[j][1]);
            if (dist < minDist) {
                minDist = dist;
                bestIdx = j;
            }
        }
        if (bestIdx !== -1) {
            const dx = bowedPolygon[bestIdx][0] - boundaryPolygon[bestIdx][0];
            const dy = bowedPolygon[bestIdx][1] - boundaryPolygon[bestIdx][1];
            return [v[0] + dx, v[1] + dy];
        }
        return [v[0], v[1]];
    });
}

function getWarpedCell(cell, boundaryPolygon, bowedPolygon) {
    return cell.map(pt => {
        let bestIdx = -1;
        let minDist = 0.1;
        for (let j = 0; j < boundaryPolygon.length; j++) {
            const dist = Math.hypot(pt[0] - boundaryPolygon[j][0], pt[1] - boundaryPolygon[j][1]);
            if (dist < minDist) {
                minDist = dist;
                bestIdx = j;
            }
        }
        if (bestIdx !== -1) {
            const dx = bowedPolygon[bestIdx][0] - boundaryPolygon[bestIdx][0];
            const dy = bowedPolygon[bestIdx][1] - boundaryPolygon[bestIdx][1];
            return [pt[0] + dx, pt[1] + dy];
        }
        return [pt[0], pt[1]];
    });
}

function getCantileverDistance(normal) {
    let theta = Math.atan2(normal[1], normal[0]);
    if (theta < 0) theta += 2 * Math.PI;
    
    if (theta >= Math.PI / 2 && theta < Math.PI) {
        const t = (theta - Math.PI / 2) / (Math.PI / 2);
        return 2.0 * (1 - t) + 5.0 * t;
    } else if (theta >= Math.PI && theta < 3 * Math.PI / 2) {
        const t = (theta - Math.PI) / (Math.PI / 2);
        return 5.0 * (1 - t) + 3.5 * t;
    } else if (theta >= 3 * Math.PI / 2 && theta < 2 * Math.PI) {
        return 3.5;
    } else {
        let t = 0;
        if (theta < Math.PI / 2) {
            t = theta / (Math.PI / 2);
        } else {
            t = (theta - 2 * Math.PI) / (Math.PI / 2);
        }
        return 3.5 * (1 - t) + 2.0 * t;
    }
}

function createVaultedSlabMesh(rhino, cell, zTop, depth, vaultHeight, cellHasCorner, boundaryPolygon) {
    const mesh = new rhino.Mesh();
    const n = cell.length;
    if (n < 3) return mesh;

    // 1. Top Cap
    for (let k = 0; k < n; k++) {
        mesh.vertices().add(cell[k][0], cell[k][1], zTop);
    }
    const topTriangles = triangulatePolygon(cell);
    topTriangles.forEach(tri => {
        mesh.faces().addTriFace(tri[0], tri[1], tri[2]);
    });

    // 2. Bottom Cap (Vaulted)
    let sx = 0, sy = 0;
    cell.forEach(pt => { sx += pt[0]; sy += pt[1]; });
    const cx = sx / n;
    const cy = sy / n;

    const isCornerVert = (pt) => {
        return boundaryPolygon.some(bp => Math.hypot(pt[0] - bp[0], pt[1] - bp[1]) < 0.1);
    };
    const vertexFlares = cell.map(pt => isCornerVert(pt) ? 1.0 : 0.0);

    const cellVertices = [];
    const cellIndices = [];
    let globalIdx = 0;
    const M = 8;

    for (let j = 0; j < n; j++) {
        const p1 = cell[j];
        const p2 = cell[(j + 1) % n];
        const flareStart = vertexFlares[j];
        const flareEnd = vertexFlares[(j + 1) % n];

        for (let u = 0; u <= M; u++) {
            for (let v = 0; v <= u; v++) {
                let bx = p1[0], by = p1[1];
                const tSeg = u > 0 ? v / u : 0.0;
                if (u > 0) {
                    bx = p1[0] + (p2[0] - p1[0]) * tSeg;
                    by = p1[1] + (p2[1] - p1[1]) * tSeg;
                }
                const tCent = u / M;
                const x = cx + (bx - cx) * tCent;
                const y = cy + (by - cy) * tCent;

                const vFlare = flareStart * (1 - tSeg) + flareEnd * tSeg;
                const cellFlare = cellHasCorner ? 1.0 : 0.0;
                const hCenter = vaultHeight * (1 - 0.8 * cellFlare);
                const archFactor = 4 * tSeg * (1 - tSeg);
                const hBoundary = vaultHeight * vFlare * cellFlare + vaultHeight * (1 - vFlare) * archFactor;
                const heightFactor = hCenter * (1 - tCent * tCent) + hBoundary * tCent * tCent;
                const z = zTop - depth + heightFactor;

                cellVertices.push([x, y, z]);
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
                cellIndices.push([i1, i2, i3]);
                if (v < u) {
                    const i4 = getIdx(u, v);
                    const i5 = getIdx(u + 1, v + 1);
                    const i6 = getIdx(u, v + 1);
                    cellIndices.push([i4, i5, i6]);
                }
            }
        }
        globalIdx += ((M + 1) * (M + 2)) / 2;
    }

    const bottomVertOffset = mesh.vertices().count;
    cellVertices.forEach(v => {
        mesh.vertices().add(v[0], v[1], v[2]);
    });
    cellIndices.forEach(tri => {
        mesh.faces().addTriFace(bottomVertOffset + tri[2], bottomVertOffset + tri[1], bottomVertOffset + tri[0]);
    });

    // 3. Side Walls
    let segmentGlobalIdx = 0;
    for (let j = 0; j < n; j++) {
        const p1 = cell[j];
        const p2 = cell[(j + 1) % n];

        const segmentTopStartIdx = mesh.vertices().count;
        for (let v = 0; v <= M; v++) {
            const tx = p1[0] + (p2[0] - p1[0]) * (v / M);
            const ty = p1[1] + (p2[1] - p1[1]) * (v / M);
            mesh.vertices().add(tx, ty, zTop);
        }

        const getIdx = (u, v) => {
            const rowStart = (u * (u + 1)) / 2;
            return segmentGlobalIdx + rowStart + v;
        };

        for (let v = 0; v < M; v++) {
            const topLeft = segmentTopStartIdx + v;
            const topRight = segmentTopStartIdx + v + 1;
            const bottomRight = bottomVertOffset + getIdx(M, v + 1);
            const bottomLeft = bottomVertOffset + getIdx(M, v);

            mesh.faces().addTriFace(topLeft, bottomLeft, bottomRight);
            mesh.faces().addTriFace(topLeft, bottomRight, topRight);
        }

        segmentGlobalIdx += ((M + 1) * (M + 2)) / 2;
    }

    return mesh;
}

self.onmessage = async function(e) {
    const { type, buffer, layerIndices } = e.data;
    
    try {
        const rhino = await getRhino();
        
        if (type === 'parse-metadata') {
            console.log("[Worker] Parsing model metadata...");
            const model = rhino.File3dm.fromByteArray(new Uint8Array(buffer));
            
            // Extract layers
            const layers = [];
            const layerTable = model.layers();
            for (let i = 0; i < layerTable.count; i++) {
                const layer = layerTable.get(i);
                layers.push({
                    index: layer.index,
                    name: layer.name || `Layer_${i}`,
                    color: layer.color ? { r: layer.color.r, g: layer.color.g, b: layer.color.b, a: layer.color.a } : { r: 255, g: 255, b: 255, a: 255 },
                    visible: layer.visible
                });
                layer.delete();
            }
            
            // Get total object count
            const objects = model.objects();
            const count = objects.count;
            model.delete();
            
            self.postMessage({
                type: 'metadata-result',
                success: true,
                layers: layers,
                objectCount: count
            });
        }
        
        else if (type === 'load-layers') {
            console.log("[Worker] Selectively loading layers:", layerIndices);
            const model = rhino.File3dm.fromByteArray(new Uint8Array(buffer));
            const objects = model.objects();
            const geometries = [];
            
            for (let i = 0; i < objects.count; i++) {
                const obj = objects.get(i);
                const attr = obj.attributes();
                
                // Fallback unassigned layers (layerIndex = -1) to layer 0 (Default)
                const rawLayerIndex = attr.layerIndex;
                const layerIndex = rawLayerIndex === -1 ? 0 : rawLayerIndex;
                
                // Check if the layer is selected for loading
                if (layerIndices.includes(layerIndex)) {
                    const geom = obj.geometry();
                    
                    if (geom instanceof rhino.Mesh) {
                        const threeJson = geom.toThreejsJSON();
                        geometries.push({
                            type: 'mesh',
                            layerIndex: layerIndex,
                            id: attr.id,
                            name: attr.name || `Mesh_${i}`,
                            data: threeJson
                        });
                    } 
                    else if (geom instanceof rhino.Curve || geom instanceof rhino.LineCurve || geom instanceof rhino.PolylineCurve) {
                        let points = [];
                        
                        if (geom instanceof rhino.PolylineCurve) {
                            for (let j = 0; j < geom.pointCount; j++) {
                                const pt = geom.point(j);
                                points.push([pt[0], pt[1], pt[2]]);
                            }
                        } 
                        else if (geom instanceof rhino.NurbsCurve) {
                            const ptsTable = geom.points();
                            for (let j = 0; j < ptsTable.count; j++) {
                                const pt = ptsTable.get(j);
                                points.push([pt[0], pt[1], pt[2]]);
                            }
                        } 
                        else if (typeof geom.toNurbsCurve === 'function') {
                            const nc = geom.toNurbsCurve();
                            if (nc) {
                                const ptsTable = nc.points();
                                for (let j = 0; j < ptsTable.count; j++) {
                                    const pt = ptsTable.get(j);
                                    points.push([pt[0], pt[1], pt[2]]);
                                }
                                nc.delete();
                            }
                        }
                        
                        if (points.length > 0) {
                            geometries.push({
                                type: 'curve',
                                layerIndex: layerIndex,
                                id: attr.id,
                                name: attr.name || `Curve_${i}`,
                                points: points
                            });
                        }
                    }
                    geom.delete();
                }
                attr.delete();
                obj.delete();
            }
            
            model.delete();
            
            self.postMessage({
                type: 'load-result',
                success: true,
                geometries: geometries
            });
        }
        
        else if (type === 'export-scene') {
            console.log("[Worker] Compiling Medial Axis visualizer scene to .3dm file...");
            const {
                polygons,
                numFloors,
                floorHeight,
                groundFloorHeightFactor,
                show3DColumns,
                show3DBeams,
                showFloorSlabs,
                showRoofSlab,
                showVaultedRoofs,
                showBalconies,
                showBriseSoleil,
                show3DCells,
                columnRadius,
                beamWidth,
                beamDepth,
                slabThickness,
                balconyOffset,
                balconyThickness,
                louverWidth,
                louverDepth,
                louverSpacing,
                vaultHeight,
                cantileverScale = 1.0,
                briseFinScale = 1.5,
                roofHyparH = 2.0,
                roofHyparSlatSpacing = 2.0,
                roofPitchRH = 1.0,
                // Fallbacks:
                boundary,
                skeleton,
                ribs,
                circles,
                bays,
                planarGraphVertices,
                planarGraphEdges
            } = e.data;
            const doc = new rhino.File3dm();
            
            // 1. Create designated layers
            const layerBoundary = new rhino.Layer();
            layerBoundary.name = "Boundary_Polygon";
            layerBoundary.color = { r: 55, g: 65, b: 81, a: 255 }; // Slate-700
            doc.layers().add(layerBoundary);
            const boundaryLayerIdx = doc.layers().count - 1;
            layerBoundary.delete();
            
            const layerSkeleton = new rhino.Layer();
            layerSkeleton.name = "Medial_Axis_Skeleton";
            layerSkeleton.color = { r: 107, g: 114, b: 128, a: 255 }; // Medium Slate Grey
            doc.layers().add(layerSkeleton);
            const skeletonLayerIdx = doc.layers().count - 1;
            layerSkeleton.delete();
            
            const layerRibs = new rhino.Layer();
            layerRibs.name = "Structural_Ribs";
            layerRibs.color = { r: 75, g: 85, b: 99, a: 255 }; // Slate-600
            doc.layers().add(layerRibs);
            const ribsLayerIdx = doc.layers().count - 1;
            layerRibs.delete();
            
            const layerCircles = new rhino.Layer();
            layerCircles.name = "Inscribed_Circles";
            layerCircles.color = { r: 156, g: 163, b: 175, a: 255 }; // Light Slate Grey
            doc.layers().add(layerCircles);
            const circlesLayerIdx = doc.layers().count - 1;
            layerCircles.delete();
            
            const layerBays = new rhino.Layer();
            layerBays.name = "Structural_Bays";
            layerBays.color = { r: 59, g: 130, b: 246, a: 255 }; // Slate Blue
            doc.layers().add(layerBays);
            const baysLayerIdx = doc.layers().count - 1;
            layerBays.delete();

            // Initialize Tectonic layers
            const layerConcrete = new rhino.Layer();
            layerConcrete.name = "Concrete_Masonry";
            layerConcrete.color = { r: 120, g: 113, b: 108, a: 255 }; // Grey: #78716c
            doc.layers().add(layerConcrete);
            const concreteIdx = doc.layers().count - 1;
            layerConcrete.delete();

            const layerTimber = new rhino.Layer();
            layerTimber.name = "Tectonic_Timber";
            layerTimber.color = { r: 133, g: 77, b: 14, a: 255 }; // Brown: #854d0e
            doc.layers().add(layerTimber);
            const timberIdx = doc.layers().count - 1;
            layerTimber.delete();

            const layer3DVaults = new rhino.Layer();
            layer3DVaults.name = "3D_Vaults";
            layer3DVaults.color = { r: 243, g: 244, b: 246, a: 255 }; // Light grey
            doc.layers().add(layer3DVaults);
            const vaultsLayerIdx = doc.layers().count - 1;
            layer3DVaults.delete();



            // 3D Cells Layers
            let cellsCornerIdx = -1;
            let cellsCourtyardIdx = -1;
            let cellsNeighborIdx = -1;
            let cellsOpenSpaceIdx = -1;
            let cellsInteriorIdx = -1;

            if (show3DCells) {
                const layerCellsCorner = new rhino.Layer();
                layerCellsCorner.name = "3D_Cells_Corner";
                layerCellsCorner.color = { r: 139, g: 92, b: 246, a: 255 }; // Violet
                doc.layers().add(layerCellsCorner);
                cellsCornerIdx = doc.layers().count - 1;
                layerCellsCorner.delete();

                const layerCellsCourtyard = new rhino.Layer();
                layerCellsCourtyard.name = "3D_Cells_Courtyard";
                layerCellsCourtyard.color = { r: 16, g: 185, b: 129, a: 255 }; // Emerald
                doc.layers().add(layerCellsCourtyard);
                cellsCourtyardIdx = doc.layers().count - 1;
                layerCellsCourtyard.delete();

                const layerCellsNeighbor = new rhino.Layer();
                layerCellsNeighbor.name = "3D_Cells_Neighbor";
                layerCellsNeighbor.color = { r: 245, g: 158, b: 11, a: 255 }; // Amber
                doc.layers().add(layerCellsNeighbor);
                cellsNeighborIdx = doc.layers().count - 1;
                layerCellsNeighbor.delete();

                const layerCellsOpenSpace = new rhino.Layer();
                layerCellsOpenSpace.name = "3D_Cells_OpenSpace";
                layerCellsOpenSpace.color = { r: 14, g: 165, b: 233, a: 255 }; // Sky Blue
                doc.layers().add(layerCellsOpenSpace);
                cellsOpenSpaceIdx = doc.layers().count - 1;
                layerCellsOpenSpace.delete();

                const layerCellsInterior = new rhino.Layer();
                layerCellsInterior.name = "3D_Cells_Interior";
                layerCellsInterior.color = { r: 100, g: 116, b: 139, a: 255 }; // Cool Grey
                doc.layers().add(layerCellsInterior);
                cellsInteriorIdx = doc.layers().count - 1;
                layerCellsInterior.delete();
            }

            let polys = polygons;
            if (!polys) {
                polys = [{
                    boundary,
                    hasScaffold: true,
                    skeleton,
                    ribs,
                    circles,
                    bays,
                    planarGraphVertices,
                    planarGraphEdges
                }];
            }

            polys.forEach((poly, polyIdx) => {
                const boundary = poly.boundary;
                const skeleton = poly.skeleton;
                const ribs = poly.ribs;
                const circles = poly.circles;
                const bays = poly.bays;
                const planarGraphVertices = poly.planarGraphVertices;
                const planarGraphEdges = poly.planarGraphEdges;
                const hasScaffold = poly.hasScaffold !== false;
                const segmentContexts = poly.segmentContexts || [];
                const cellIsCorner = poly.cellIsCorner || [];
                const unprunedBays = poly.unprunedBays || [];
                const prunedSkeletonVertices = poly.prunedSkeletonVertices || [];
                const bipartiteData = computeBipartiteVertexHeights(bays || []);

                // A. Add Boundary Polygon
                if (boundary && boundary.length > 0) {
                    const attr = new rhino.ObjectAttributes();
                    attr.layerIndex = boundaryLayerIdx;
                    attr.name = `Boundary_Polygon_${polyIdx}`;
                    
                    const pl = new rhino.Polyline(boundary.length + 1);
                    boundary.forEach(pt => pl.add(pt[0], pt[1], pt[2] || 0.0));
                    pl.add(boundary[0][0], boundary[0][1], boundary[0][2] || 0.0);
                    
                    doc.objects().addPolyline(pl, attr);
                    pl.delete();
                    attr.delete();
                }
                
                // B. Add Skeleton Branches
                if (hasScaffold && skeleton && skeleton.length > 0) {
                    const attr = new rhino.ObjectAttributes();
                    attr.layerIndex = skeletonLayerIdx;
                    
                    skeleton.forEach((branch, idx) => {
                        attr.name = `Skeleton_P${polyIdx}_Branch_${idx}`;
                        const pl = new rhino.Polyline(branch.length);
                        branch.forEach(pt => pl.add(pt[0], pt[1], pt[2] || 0.0));
                        
                        doc.objects().addPolyline(pl, attr);
                        pl.delete();
                    });
                    attr.delete();
                }
                
                // C. Add Structural Ribs
                if (hasScaffold && ribs && ribs.length > 0) {
                    const attr = new rhino.ObjectAttributes();
                    attr.layerIndex = ribsLayerIdx;
                    
                    ribs.forEach((rib, idx) => {
                        attr.name = `Structural_Rib_P${polyIdx}_${idx}`;
                        doc.objects().addLine(
                            [rib.start[0], rib.start[1], rib.start[2] || 0.0],
                            [rib.end[0], rib.end[1], rib.end[2] || 0.0],
                            attr
                        );
                    });
                    attr.delete();
                }
                
                // D. Add Inscribed Circles
                if (hasScaffold && circles && circles.length > 0) {
                    const attr = new rhino.ObjectAttributes();
                    attr.layerIndex = circlesLayerIdx;
                    
                    circles.forEach((circle, idx) => {
                        attr.name = `Inscribed_Circle_P${polyIdx}_${idx}`;
                        
                        const center = circle.center;
                        const radius = circle.radius;
                        const segments = 64;
                        const pl = new rhino.Polyline(segments + 1);
                        
                        for (let j = 0; j <= segments; j++) {
                            const theta = (j / segments) * Math.PI * 2;
                            pl.add(
                                center[0] + Math.cos(theta) * radius,
                                center[1] + Math.sin(theta) * radius,
                                center[2] || 0.0
                            );
                        }
                        doc.objects().addPolyline(pl, attr);
                        pl.delete();
                    });
                    attr.delete();
                }
                
                // E. Add Structural Bays
                if (hasScaffold && bays && bays.length > 0) {
                    const attr = new rhino.ObjectAttributes();
                    attr.layerIndex = baysLayerIdx;
                    
                    bays.forEach((bay, idx) => {
                        attr.name = `Structural_Bay_P${polyIdx}_${idx}`;
                        const pl = new rhino.Polyline(bay.length + 1);
                        bay.forEach(pt => pl.add(pt[0], pt[1], pt[2] || 0.0));
                        pl.add(bay[0][0], bay[0][1], bay[0][2] || 0.0);
                        
                        doc.objects().addPolyline(pl, attr);
                        pl.delete();
                    });
                    attr.delete();
                }

                // F. Add 3D Stack
                if (hasScaffold && numFloors > 0) {
                    let isCCW = true;
                    let area = 0;
                    for (let j = 0; j < boundary.length; j++) {
                        const p1 = boundary[j];
                        const p2 = boundary[(j + 1) % boundary.length];
                        area += (p1[0] * p2[1] - p2[0] * p1[1]);
                    }
                    isCCW = area > 0;

                    const boundaryNormals = [];
                    for (let j = 0; j < boundary.length; j++) {
                        const p1 = boundary[j];
                        const p2 = boundary[(j + 1) % boundary.length];
                        const dx = p2[0] - p1[0];
                        const dy = p2[1] - p1[1];
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
                        boundaryNormals.push({ x: nx, y: ny, length: len });
                    }

                    const vertices = (planarGraphVertices && planarGraphVertices.length > 0) ? planarGraphVertices : boundary;
                    const edges = [];
                    if (planarGraphVertices && planarGraphEdges && planarGraphEdges.length > 0) {
                        planarGraphEdges.forEach(edge => {
                            const ptU = planarGraphVertices[edge[0]];
                            const ptV = planarGraphVertices[edge[1]];
                            edges.push([ptU, ptV]);
                        });
                    } else {
                        for (let j = 0; j < boundary.length; j++) {
                            edges.push([boundary[j], boundary[(j + 1) % boundary.length]]);
                        }
                    }

                    const columnsByFloor = Array.from({ length: numFloors }, () => []);
                    const beamsByFloor = Array.from({ length: numFloors }, () => []);

                    // Precompute bowed polygons by floor
                    const bowedPolygonsByFloor = [];
                    for (let f = 0; f < numFloors; f++) {
                        bowedPolygonsByFloor.push(getBowedPolygon(f, numFloors, floorHeight, groundFloorHeightFactor, boundary, boundaryNormals));
                    }

                    // Classify vertices for courtyard loggia and West/South exterior columns
                    const courtyardVertexIndices = new Set();
                    const courtyardNormals = new Map();
                    const exteriorWestSouthVertexIndices = new Set();
                    const exteriorWestSouthNormals = new Map();

                    vertices.forEach((v, idx) => {
                        let isCourtyard = false;
                        const cyNorms = [];
                        let isExterior = false;
                        const extNorms = [];
                        
                        for (let j = 0; j < boundary.length; j++) {
                            const bp1 = boundary[j];
                            const bp2 = boundary[(j + 1) % boundary.length];
                            const normal = boundaryNormals[j];
                            const context = segmentContexts[j];
                            
                            const dist = distanceToSegmentWorker(v, bp1, bp2);
                            if (dist < 0.1) {
                                if (context === 'courtyard') {
                                    isCourtyard = true;
                                    cyNorms.push(normal);
                                } else if (context === 'open_space' || context === 'other_building' || context === 'touching') {
                                    isExterior = true;
                                    extNorms.push(normal);
                                }
                            }
                        }
                        
                        if (isCourtyard) {
                            courtyardVertexIndices.add(idx);
                            let sumX = 0, sumY = 0;
                            cyNorms.forEach(n => { sumX += n.x; sumY += n.y; });
                            const len = Math.hypot(sumX, sumY);
                            const avgNorm = len > 1e-6 ? [sumX / len, sumY / len] : [0, 0];
                            courtyardNormals.set(idx, avgNorm);
                        }
                        
                        if (isExterior && !isCourtyard) {
                            let sumX = 0, sumY = 0;
                            extNorms.forEach(n => { sumX += n.x; sumY += n.y; });
                            const len = Math.hypot(sumX, sumY);
                            const avgNorm = len > 1e-6 ? [sumX / len, sumY / len] : [0, 0];
                            if (avgNorm[0] < -0.5 || avgNorm[1] < -0.5) {
                                exteriorWestSouthVertexIndices.add(idx);
                                exteriorWestSouthNormals.set(idx, avgNorm);
                            }
                        }
                    });

                    for (let i = 0; i < numFloors; i++) {
                        const floorZ = getFloorZ(i, numFloors, floorHeight, groundFloorHeightFactor);
                        const isGroundFloor = (i === 0);
                        const isRoofFloor = (i === numFloors - 1);
                        const floorPolygon = bowedPolygonsByFloor[i];

                        const warpedVertices = getWarpedVertices(vertices, boundary, floorPolygon);
                        const warpedEdges = edges.map(([ptU, ptV]) => {
                            const u = warpedVertices[vertices.indexOf(ptU)];
                            const v = warpedVertices[vertices.indexOf(ptV)];
                            return [u, v];
                        });
                        
                        let slabThick = slabThickness;
                        if (isGroundFloor) slabThick = slabThickness * 1.5;

                        // 1. Floor Slabs
                        if (showFloorSlabs) {
                            if (i > 0) {
                                if (bays && bays.length > 0) {
                                    bays.forEach((cell, cellIdx) => {
                                        const isCorner = cellIsCorner[cellIdx] || false;
                                        if (isCorner && i < 1) return;

                                        const warpedCell = getWarpedCell(cell, boundary, floorPolygon);
                                        const attr = new rhino.ObjectAttributes();
                                        attr.layerIndex = (i === 1) ? concreteIdx : timberIdx;
                                        attr.name = `Floor_Slab_P${polyIdx}_F${i}_B${cellIdx}`;

                                        const cellHasCorner = cell.some(pt => {
                                            return boundary.some(bp => Math.hypot(pt[0] - bp[0], pt[1] - bp[1]) < 0.1);
                                        });
                                        const depth = (i === 1) ? 3 * (slabThick + beamDepth) : (slabThick + beamDepth);
                                        const vaultH = (i === 1) ? 3 * beamDepth : beamDepth;
                                        const slabMesh = createVaultedSlabMesh(rhino, warpedCell, floorZ.bottom, depth, vaultH, cellHasCorner, boundary);
                                        doc.objects().addMesh(slabMesh, attr);
                                        slabMesh.delete();
                                        attr.delete();
                                    });
                                } else if (boundary && boundary.length >= 3) {
                                    // Fallback
                                    const attr = new rhino.ObjectAttributes();
                                    attr.layerIndex = (i === 1) ? concreteIdx : timberIdx;
                                    attr.name = `Floor_Slab_P${polyIdx}_F${i}`;
                                    const slabMesh = createExtrudedPolygonMesh(rhino, boundary, slabThick, floorZ.bottom, isCCW);
                                    doc.objects().addMesh(slabMesh, attr);
                                    slabMesh.delete();
                                    attr.delete();
                                }
                            }

                            // Flat cantilevered roof slab at the top of the topmost floor (split into concrete top / timber bottom)
                            if (showRoofSlab && isRoofFloor) {
                                if (floorPolygon && floorPolygon.length >= 3) {
                                    const cantileveredPoly = [];
                                    for (let j = 0; j < floorPolygon.length; j++) {
                                        const V = floorPolygon[j];
                                        const prevIdx = (j - 1 + floorPolygon.length) % floorPolygon.length;
                                        const currIdx = j;
                                        const n1 = boundaryNormals[prevIdx];
                                        const n2 = boundaryNormals[currIdx];
                                        const c1 = getCantileverDistance([n1.x, n1.y]);
                                        const c2 = getCantileverDistance([n2.x, n2.y]);
                                        const avgC = (c1 + c2) / 2;
                                        
                                        const avgNormX = n1.x + n2.x;
                                        const avgNormY = n1.y + n2.y;
                                        const normLen = Math.hypot(avgNormX, avgNormY);
                                        const normX = normLen > 1e-6 ? avgNormX / normLen : 0;
                                        const normY = normLen > 1e-6 ? avgNormY / normLen : 0;
                                        
                                        cantileveredPoly.push([V[0] + normX * avgC * cantileverScale, V[1] + normY * avgC * cantileverScale]);
                                    }
                                    const roofThick = slabThickness * 0.8;
                                    const concreteThick = roofThick * 0.4;
                                    const timberThick = roofThick * 0.6;

                                    const unprunedBaysToUse = poly.unprunedBays || bays || [];

                                    // Build cantilevered cells
                                    const cantileveredCells = [];
                                    for (let j = 0; j < floorPolygon.length; j++) {
                                        const jNext = (j + 1) % floorPolygon.length;
                                        cantileveredCells.push([
                                            floorPolygon[j],
                                            floorPolygon[jNext],
                                            cantileveredPoly[jNext],
                                            cantileveredPoly[j]
                                        ]);
                                    }

                                     const warpedBays = unprunedBaysToUse.map(cell => getWarpedCell(cell, boundary, floorPolygon));
                                     const warpedCantCells = cantileveredCells;

                                    // 1. Timber Substructure M
                                    const attrTimber = new rhino.ObjectAttributes();
                                    attrTimber.layerIndex = timberIdx;
                                    attrTimber.name = `Floor_Slab_P${polyIdx}_F${i}_Timber`;
                                    const timberMesh = createRoofSheetMesh(rhino, warpedBays, warpedCantCells, floorZ.top, roofPitchRH, false, boundary);
                                    doc.objects().addMesh(timberMesh, attrTimber);
                                    timberMesh.delete();
                                    attrTimber.delete();

                                    // 2. Concrete Topping MC
                                    const attrConcrete = new rhino.ObjectAttributes();
                                    attrConcrete.layerIndex = concreteIdx;
                                    attrConcrete.name = `Floor_Slab_P${polyIdx}_F${i}_Concrete`;
                                    const concreteMesh = createRoofSheetMesh(rhino, warpedBays, warpedCantCells, floorZ.top, roofPitchRH, true, boundary);
                                    doc.objects().addMesh(concreteMesh, attrConcrete);
                                    concreteMesh.delete();
                                    attrConcrete.delete();
                                }
                            }

                            // Hypar ceilings under the roof (Roof floor only, inside unpruned structural bays)
                            if (showVaultedRoofs && isRoofFloor) {
                                if (floorPolygon && floorPolygon.length >= 3) {
                                    const unprunedBaysToUse = poly.unprunedBays || bays || [];
                                    const warpedBays = unprunedBaysToUse.map(cell => getWarpedCell(cell, boundary, floorPolygon));
                                    const bipartiteData = computeBipartiteVertexHeightsWorker(unprunedBaysToUse);

                                    unprunedBaysToUse.forEach((cell, cellIdx) => {
                                        const warpedCell = warpedBays[cellIdx];
                                        const originalCell = cell;

                                        const zTopVal = floorZ.top;
                                        const zBottomVal = floorZ.top - roofHyparH;

                                        const attr = new rhino.ObjectAttributes();
                                        attr.layerIndex = vaultsLayerIdx;
                                        attr.name = `Vaulted_Roof_P${polyIdx}_C${cellIdx}`;

                                        const cellMesh = createHyparCellMesh(rhino, warpedCell, zTopVal, zBottomVal, roofHyparH, roofHyparSlatSpacing, bipartiteData, originalCell, boundary);
                                        doc.objects().addMesh(cellMesh, attr);
                                        cellMesh.delete();
                                        attr.delete();
                                    });
                                }
                            }
                        }

                        // 2. Columns
                        if (show3DColumns) {
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = (i === 0) ? concreteIdx : timberIdx;
                            let slabThickForCol = slabThick;
                            if (isRoofFloor) slabThickForCol = slabThickness * 0.8;
                            const colHeight = floorZ.height;

                            let tapFactor = 1.0;
                            if (numFloors > 1) {
                                tapFactor = 1.4 - 0.7 * (i / (numFloors - 1));
                            }
                            const colRad = columnRadius * tapFactor;

                            warpedVertices.forEach((v, idx) => {
                                let isDuplicate = false;
                                for (const col of columnsByFloor[i]) {
                                    if (Math.hypot(v[0] - col[0], v[1] - col[1]) < 0.2) {
                                        isDuplicate = true;
                                        break;
                                    }
                                }
                                if (isDuplicate) return;
                                columnsByFloor[i].push([v[0], v[1]]);

                                attr.name = `Column_P${polyIdx}_F${i}_${idx}`;
                                
                                let isCornerVertex = false;
                                let cornerIdx = -1;
                                const origV = vertices[idx];
                                for (let k = 0; k < boundary.length; k++) {
                                    const bp = boundary[k];
                                    if (Math.hypot(origV[0] - bp[0], origV[1] - bp[1]) < 0.1) {
                                        isCornerVertex = true;
                                        cornerIdx = k;
                                        break;
                                    }
                                }

                                let colRotAngle = 0;
                                if (isCornerVertex && cornerIdx !== -1) {
                                    const N = boundary.length;
                                    const nPrev = boundaryNormals[(cornerIdx - 1 + N) % N];
                                    const nCurr = boundaryNormals[cornerIdx];
                                    const bisectX = (nPrev.x + nCurr.x) / 2;
                                    const bisectY = (nPrev.y + nCurr.y) / 2;
                                    const len = Math.hypot(bisectX, bisectY);
                                    const bisectAngle = len > 1e-6 ? Math.atan2(bisectY, bisectX) : 0;
                                    colRotAngle = bisectAngle - 5 * Math.PI / 4;
                                }

                                const isCourtyard = courtyardVertexIndices.has(idx);
                                const isFin = exteriorWestSouthVertexIndices.has(idx);

                                let colH = colHeight;

                                const renderCol = (posX, posY, forceCylinder = false) => {
                                    let colMesh;
                                    if (isFin && !forceCylinder) {
                                        const normal = exteriorWestSouthNormals.get(idx);
                                        const dx = normal[0];
                                        const dy = normal[1];
                                        const tx = -dy;
                                        const ty = dx;
                                        const halfWidth = 1.0;
                                        const halfThick = 0.15;
                                        const finPts = [
                                            [ -halfWidth * dx - halfThick * tx, -halfWidth * dy - halfThick * ty ],
                                            [ -halfWidth * dx + halfThick * tx, -halfWidth * dy + halfThick * ty ],
                                            [ halfWidth * dx + halfThick * tx, halfWidth * dy + halfThick * ty ],
                                            [ halfWidth * dx - halfThick * tx, halfWidth * dy - halfThick * ty ]
                                        ];
                                        colMesh = createExtrudedPolygonMesh(rhino, finPts, colH, floorZ.bottom + colH, true);
                                        colMesh.translate([posX, posY, 0]);
                                    } else if (isCornerVertex && !forceCylinder) {
                                        const lWidth = colRad * 2.2;
                                        const lThick = colRad * 0.8;
                                        const lPts = [
                                            [-lWidth/2, -lWidth/2],
                                            [lWidth/2, -lWidth/2],
                                            [lWidth/2, -lWidth/2 + lThick],
                                            [-lWidth/2 + lThick, -lWidth/2 + lThick],
                                            [-lWidth/2 + lThick, lWidth/2],
                                            [-lWidth/2, lWidth/2]
                                        ];
                                        const cosA = Math.cos(colRotAngle);
                                        const sinA = Math.sin(colRotAngle);
                                        const rotatedPts = lPts.map(([x, y]) => [
                                            x * cosA - y * sinA,
                                            x * sinA + y * cosA
                                        ]);
                                        colMesh = createExtrudedPolygonMesh(rhino, rotatedPts, colH, floorZ.bottom + colH, true);
                                        colMesh.translate([posX, posY, 0]);
                                    } else {
                                        colMesh = createCylinderMesh(rhino, posX, posY, floorZ.bottom, colRad, colH, 12);
                                    }
                                    doc.objects().addMesh(colMesh, attr);
                                    colMesh.delete();
                                };

                                if (isCourtyard) {
                                    renderCol(v[0], v[1], false);
                                    const normal = courtyardNormals.get(idx);
                                    const dupX = v[0] - 3.0 * normal[0];
                                    const dupY = v[1] - 3.0 * normal[1];
                                    renderCol(dupX, dupY, true);
                                } else if (isCornerVertex) {
                                    renderCol(v[0], v[1], false);
                                } else {
                                    renderCol(v[0], v[1], false);
                                }
                            });
                            attr.delete();
                        }

                        // 3. Beams
                        if (show3DBeams && i >= 1) {
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = (i === 1) ? concreteIdx : timberIdx;
                            let tapFactor = 1.0;
                            if (numFloors > 1) {
                                tapFactor = 1.3 - 0.5 * (i / (numFloors - 1));
                            }
                            const bWidth = (i === 1) ? 0.3 : (beamWidth * tapFactor);
                            const bDepth = (i === 1) ? (3 * beamDepth * tapFactor) : (beamDepth * tapFactor);

                            warpedEdges.forEach(([ptU, ptV], idx) => {
                                const midX = (ptU[0] + ptV[0]) / 2;
                                const midY = (ptU[1] + ptV[1]) / 2;

                                let isDuplicate = false;
                                for (const beam of beamsByFloor[i]) {
                                    if (Math.hypot(midX - beam[0], midY - beam[1]) < 0.2) {
                                        isDuplicate = true;
                                        break;
                                    }
                                }
                                if (isDuplicate) return;
                                beamsByFloor[i].push([midX, midY]);

                                const renderBeam = (pA, pB) => {
                                    attr.name = `Beam_P${polyIdx}_F${i}_${idx}`;
                                    
                                    let beamIsArched = (i === 1);
                                    if (!beamIsArched && bays && bays.length > 0) {
                                        for (let c = 0; c < bays.length; c++) {
                                            const cell = bays[c];
                                            const vaulted = !(cellIsCorner[c] && i < 1);
                                            if (vaulted) {
                                                const hasU = cell.some(pt => Math.hypot(pt[0] - pA[0], pt[1] - pA[1]) < 0.1);
                                                const hasV = cell.some(pt => Math.hypot(pt[0] - pB[0], pt[1] - pB[1]) < 0.1);
                                                if (hasU && hasV) {
                                                    beamIsArched = true;
                                                    break;
                                                }
                                            }
                                        }
                                    }

                                    let beamMesh;
                                    if (beamIsArched) {
                                        beamMesh = createArchedBeamMesh(rhino, pA[0], pA[1], pB[0], pB[1], bWidth, bDepth, bDepth, floorZ.bottom - slabThick);
                                    } else {
                                        beamMesh = createBoxMesh(rhino, pA[0], pA[1], pB[0], pB[1], bWidth, bDepth, floorZ.bottom - slabThick);
                                    }
                                    doc.objects().addMesh(beamMesh, attr);
                                    beamMesh.delete();
                                };

                                renderBeam(ptU, ptV);

                                const uIdx = vertices.indexOf(edges[idx][0]);
                                const vIdx = vertices.indexOf(edges[idx][1]);
                                if (courtyardVertexIndices.has(uIdx) && courtyardVertexIndices.has(vIdx)) {
                                    const normalU = courtyardNormals.get(uIdx);
                                    const normalV = courtyardNormals.get(vIdx);
                                    const ptUDup = [ptU[0] - 3.0 * normalU[0], ptU[1] - 3.0 * normalU[1]];
                                    const ptVDup = [ptV[0] - 3.0 * normalV[0], ptV[1] - 3.0 * normalV[1]];
                                    renderBeam(ptUDup, ptVDup);
                                }
                            });
                            attr.delete();
                        }

                        // 4. Balconies (NULL on Ground & Roof, NULL if facing other buildings or touching partitions)
                        if (showBalconies && !isGroundFloor && !isRoofFloor && floorPolygon && floorPolygon.length >= 3) {
                                const attr = new rhino.ObjectAttributes();
                                attr.layerIndex = timberIdx;
                            
                            const N = floorPolygon.length;
                            const offsets = [];
                            const hasBalcony = [];
                            for (let j = 0; j < N; j++) {
                                const context = segmentContexts[j] || 'open_space';
                                const hasBal = (context !== 'other_building' && context !== 'touching');
                                hasBalcony.push(hasBal);
                                offsets.push(hasBal ? (context === 'courtyard' ? balconyOffset * 1.5 : balconyOffset) : 0);
                            }

                            const deltaOuter = [];
                            const deltaInner = [];
                            const rThick = 0.02;

                            for (let j = 0; j < N; j++) {
                                const jPrev = (j - 1 + N) % N;
                                const dPrev = offsets[jPrev];
                                const dCurr = offsets[j];
                                const nPrev = boundaryNormals[jPrev];
                                const nCurr = boundaryNormals[j];

                                if (dPrev > 0 && dCurr > 0) {
                                    deltaOuter.push(getMiterOffset(nPrev, nCurr, dPrev, dCurr));
                                    deltaInner.push(getMiterOffset(nPrev, nCurr, dPrev - rThick, dCurr - rThick));
                                } else if (dPrev > 0) {
                                    deltaOuter.push({ x: nPrev.x * dPrev, y: nPrev.y * dPrev });
                                    deltaInner.push({ x: nPrev.x * (dPrev - rThick), y: nPrev.y * (dPrev - rThick) });
                                } else if (dCurr > 0) {
                                    deltaOuter.push({ x: nCurr.x * dCurr, y: nCurr.y * dCurr });
                                    deltaInner.push({ x: nCurr.x * (dCurr - rThick), y: nCurr.y * (dCurr - rThick) });
                                } else {
                                    deltaOuter.push({ x: 0, y: 0 });
                                    deltaInner.push({ x: 0, y: 0 });
                                }
                            }

                            for (let j = 0; j < N; j++) {
                                if (!hasBalcony[j]) continue;
                                const jNext = (j + 1) % N;
                                const p1 = floorPolygon[j];
                                const p2 = floorPolygon[jNext];

                                const oStart = [ p1[0] + deltaOuter[j].x, p1[1] + deltaOuter[j].y ];
                                const oEnd = [ p2[0] + deltaOuter[jNext].x, p2[1] + deltaOuter[jNext].y ];

                                const shapePts = [
                                    oStart,
                                    oEnd,
                                    [ p2[0], p2[1] ],
                                    [ p1[0], p1[1] ]
                                ];

                                attr.name = `Balcony_Slab_P${polyIdx}_F${i}_${j}`;
                                const balMesh = createExtrudedPolygonMesh(rhino, shapePts, balconyThickness, floorZ.bottom, true);
                                doc.objects().addMesh(balMesh, attr);
                                balMesh.delete();

                                // Railing
                                attr.name = `Balcony_Railing_P${polyIdx}_F${i}_${j}`;
                                const railingHeight = 1.1;
                                const iStart = [ p1[0] + deltaInner[j].x, p1[1] + deltaInner[j].y ];
                                const iEnd = [ p2[0] + deltaInner[jNext].x, p2[1] + deltaInner[jNext].y ];

                                const railPts = [
                                    oStart,
                                    oEnd,
                                    iEnd,
                                    iStart
                                ];
                                const railMesh = createExtrudedPolygonMesh(rhino, railPts, railingHeight, floorZ.bottom + railingHeight, true);
                                doc.objects().addMesh(railMesh, attr);
                                railMesh.delete();
                            }
                            attr.delete();
                        }

                        // 5. Brise-Soleil (extend to all floors from roof to ground, south & west sides, Timber group)
                        if (showBriseSoleil && floorPolygon && floorPolygon.length >= 3) {
                            const sunDir = { x: -0.707, y: -0.707 };
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = timberIdx;
                            
                            for (let j = 0; j < floorPolygon.length; j++) {
                                const p1 = floorPolygon[j];
                                const p2 = floorPolygon[(j + 1) % floorPolygon.length];
                                const normal = boundaryNormals[j];
                                const context = segmentContexts[j] || 'open_space';
                                const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
                                if (len < 1e-3) continue;

                                const alignment = normal.x * sunDir.x + normal.y * sunDir.y;

                                let bDepth = 0.5;
                                let bSpacing = 0.5;
                                let active = (normal.y < -0.5) || (normal.x < -0.5);

                                if (active) {
                                    if (context === 'courtyard' || context === 'touching') {
                                        active = false;
                                    }
                                }

                                if (!active) continue;

                                const numLouvers = Math.max(2, Math.floor(len / bSpacing));
                                const lHeight = floorZ.height - (isRoofFloor ? slabThickness * 0.8 : slabThickness);

                                const foilPts = getAerofoilPoints(louverWidth * briseFinScale, bDepth, 8);

                                for (let k = 0; k <= numLouvers; k++) {
                                    const t = k / numLouvers;
                                    const lx = p1[0] + (p2[0] - p1[0]) * t + normal.x * 0.15;
                                    const ly = p1[1] + (p2[1] - p1[1]) * t + normal.y * 0.15;
                                    
                                    attr.name = `Louver_P${polyIdx}_F${i}_S${j}_L${k}`;
                                    const louverMesh = createExtrudedPolygonMesh(rhino, foilPts, lHeight, floorZ.bottom + lHeight, true);
                                    const angle = -120 * Math.PI / 180; // incline at 60 degrees east of cardinal south direction
                                    louverMesh.rotate(angle, [0, 0, 1], [0, 0, 0]);
                                    louverMesh.translate([lx, ly, 0]);
                                    doc.objects().addMesh(louverMesh, attr);
                                    louverMesh.delete();
                                }
                            }
                            attr.delete();
                        }
                    }



                    // G. 3D Cells (colored by classification and floor phenotype axes)
                    if (show3DCells && bays && bays.length > 0) {
                        bays.forEach((cell, cellIdx) => {
                            if (cell.length < 3) return;

                            let classification = 'interior';
                            const isCorner = cellIsCorner[cellIdx] || false;
                            
                            if (isCorner) {
                                classification = 'corner';
                            } else {
                                let hasCourtyard = false;
                                let hasNeighbor = false;
                                let hasOpenSpace = false;

                                 for (let k = 0; k < cell.length; k++) {
                                    const pt1 = cell[k];
                                    const pt2 = cell[(k + 1) % cell.length];
                                    const mid = [(pt1[0] + pt2[0]) / 2, (pt1[1] + pt2[1]) / 2];

                                    for (let j = 0; j < boundary.length; j++) {
                                        const bp1 = boundary[j];
                                        const bp2 = boundary[(j + 1) % boundary.length];

                                        if (distanceToSegmentWorker(mid, bp1, bp2) < 0.1) {
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

                            const facingDirections = [];
                            for (let k = 0; k < cell.length; k++) {
                                const pt1 = cell[k];
                                const pt2 = cell[(k + 1) % cell.length];
                                const mid = [(pt1[0] + pt2[0]) / 2, (pt1[1] + pt2[1]) / 2];

                                for (let j = 0; j < boundary.length; j++) {
                                    const bp1 = boundary[j];
                                    const bp2 = boundary[(j + 1) % boundary.length];

                                    if (distanceToSegmentWorker(mid, bp1, bp2) < 0.1) {
                                        const normal = boundaryNormals[j];
                                        if (normal.y > 0.5) { if (!facingDirections.includes('North')) facingDirections.push('North'); }
                                        if (normal.y < -0.5) { if (!facingDirections.includes('South')) facingDirections.push('South'); }
                                        if (normal.x > 0.5) { if (!facingDirections.includes('East')) facingDirections.push('East'); }
                                        if (normal.x < -0.5) { if (!facingDirections.includes('West')) facingDirections.push('West'); }
                                    }
                                }
                            }

                            let cellLayerIdx = cellsInteriorIdx;
                            if (classification === 'corner') cellLayerIdx = cellsCornerIdx;
                            else if (classification === 'courtyard') cellLayerIdx = cellsCourtyardIdx;
                            else if (classification === 'neighbor') cellLayerIdx = cellsNeighborIdx;
                            else if (classification === 'open_space') cellLayerIdx = cellsOpenSpaceIdx;

                            for (let f = 0; f < numFloors; f++) {
                                const floorZ = getFloorZ(f, numFloors, floorHeight, groundFloorHeightFactor);
                                const floorPolygon = bowedPolygonsByFloor[f];
                                const warpedCell = getWarpedCell(cell, boundary, floorPolygon);
                                
                                // Color calculation along three axes
                                let L = 55; // intermediate default
                                if (f === 0) L = 35; // ground
                                else if (f === numFloors - 1) L = 75; // roof

                                let S = 30; // middle default
                                if (classification === 'corner') S = 90;
                                else if (classification === 'courtyard') S = 60;

                                let H = 60; // default (interior/none)
                                const hasN = facingDirections.includes('North');
                                const hasS = facingDirections.includes('South');
                                const hasE = facingDirections.includes('East');
                                const hasW = facingDirections.includes('West');

                                if (hasN && hasE) H = 45;
                                else if (hasS && hasE) H = 135;
                                else if (hasS && hasW) H = 225;
                                else if (hasN && hasW) H = 315;
                                else if (hasN) H = 0;
                                else if (hasE) H = 90;
                                else if (hasS) H = 180;
                                else if (hasW) H = 270;

                                const rgb = hslToRgb(H, S, L);
                                const attr = new rhino.ObjectAttributes();
                                attr.layerIndex = cellLayerIdx;
                                attr.name = `Cell_P${polyIdx}_F${f}_B${cellIdx}`;
                                attr.colorSource = 1; // 1 = Color from object
                                attr.color = { r: rgb[0], g: rgb[1], b: rgb[2], a: 255 };

                                const cellMesh = createExtrudedPolygonMesh(rhino, warpedCell, floorZ.height, floorZ.top, true);
                                doc.objects().addMesh(cellMesh, attr);
                                cellMesh.delete();
                                attr.delete();
                            }
                        });
                    }
                }
            });

            const bytes = doc.toByteArray();
            doc.delete();
            
            self.postMessage({
                type: 'export-result',
                success: true,
                bytes: bytes
            }, [bytes.buffer]);
        }
    } catch (err) {
        console.error("[Worker Error]", err);
        self.postMessage({
            type: 'error',
            success: false,
            error: err.message
        });
    }
};

function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
