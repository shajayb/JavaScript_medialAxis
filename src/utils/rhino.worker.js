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

function createVaultMesh(rhino, cell, vaultHeight, zTop, M = 8, cellHasCorner = false, boundary = []) {
    const mesh = new rhino.Mesh();
    const n = cell.length;
    if (n < 3) return mesh;
    
    let sx = 0, sy = 0;
    cell.forEach(pt => { sx += pt[0]; sy += pt[1]; });
    const cx = sx / n;
    const cy = sy / n;
    
    const isCornerVertex = (pt) => {
        return boundary.some(bp => Math.hypot(pt[0] - bp[0], pt[1] - bp[1]) < 0.1);
    };

    const vertexFlares = cell.map(pt => isCornerVertex(pt) ? 1.0 : 0.0);
    let globalIdx = 0;
    
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
                const hBoundary = vaultHeight * vFlare * cellFlare;
                const heightFactor = hCenter * (1 - tCent * tCent) + hBoundary * tCent * tCent;
                const z = zTop + heightFactor;
                
                mesh.vertices().add(x, y, z);
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
                mesh.faces().addTriFace(i1, i2, i3);
                
                if (v < u) {
                    const i4 = getIdx(u, v);
                    const i5 = getIdx(u + 1, v + 1);
                    const i6 = getIdx(u, v + 1);
                    mesh.faces().addTriFace(i4, i5, i6);
                }
            }
        }
        
        globalIdx += ((M + 1) * (M + 2)) / 2;
    }
    
    return mesh;
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

function getAerofoilPoints(lWidth, bDepth, segments = 8) {
    const pts = [];
    
    const p0_x = 0, p0_y = -bDepth/2;
    const p1_x = lWidth/2, p1_y = 0;
    const p2_x = 0, p2_y = bDepth/2;
    for (let k = 0; k <= segments; k++) {
        const t = k / segments;
        const x = (1 - t) * (1 - t) * p0_x + 2 * (1 - t) * t * p1_x + t * t * p2_x;
        const y = (1 - t) * (1 - t) * p0_y + 2 * (1 - t) * t * p1_y + t * t * p2_y;
        pts.push([x, y]);
    }
    
    const q0_x = 0, q0_y = bDepth/2;
    const q1_x = -lWidth/2, q1_y = 0;
    const q2_x = 0, q2_y = -bDepth/2;
    for (let k = 1; k <= segments; k++) {
        const t = k / segments;
        const x = (1 - t) * (1 - t) * q0_x + 2 * (1 - t) * t * q1_x + t * t * q2_x;
        const y = (1 - t) * (1 - t) * q0_y + 2 * (1 - t) * t * q1_y + t * t * q2_y;
        pts.push([x, y]);
    }
    
    return pts;
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
                show3DColumns,
                show3DBeams,
                showFloorSlabs,
                showBalconies,
                showBriseSoleil,
                showVaultedRoofs,
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

            // Initialize 3D layers
            const layer3DSlabs = new rhino.Layer();
            layer3DSlabs.name = "3D_Slabs";
            layer3DSlabs.color = { r: 229, g: 231, b: 235, a: 255 }; // Concrete
            doc.layers().add(layer3DSlabs);
            const slabs3DIdx = doc.layers().count - 1;
            layer3DSlabs.delete();

            const layer3DColumns = new rhino.Layer();
            layer3DColumns.name = "3D_Columns";
            layer3DColumns.color = { r: 55, g: 65, b: 81, a: 255 }; // Metallic Charcoal
            doc.layers().add(layer3DColumns);
            const columns3DIdx = doc.layers().count - 1;
            layer3DColumns.delete();

            const layer3DBeams = new rhino.Layer();
            layer3DBeams.name = "3D_Beams";
            layer3DBeams.color = { r: 75, g: 85, b: 99, a: 255 }; // Structured Charcoal
            doc.layers().add(layer3DBeams);
            const beams3DIdx = doc.layers().count - 1;
            layer3DBeams.delete();

            const layer3DBalconies = new rhino.Layer();
            layer3DBalconies.name = "3D_Balconies";
            layer3DBalconies.color = { r: 13, g: 148, b: 136, a: 255 }; // Teal Glass
            doc.layers().add(layer3DBalconies);
            const balconies3DIdx = doc.layers().count - 1;
            layer3DBalconies.delete();

            const layer3DBriseSoleil = new rhino.Layer();
            layer3DBriseSoleil.name = "3D_Brise_Soleil";
            layer3DBriseSoleil.color = { r: 217, g: 119, b: 6, a: 255 }; // Timber
            doc.layers().add(layer3DBriseSoleil);
            const briseSoleil3DIdx = doc.layers().count - 1;
            layer3DBriseSoleil.delete();

            const layer3DVaults = new rhino.Layer();
            layer3DVaults.name = "3D_Vaults";
            layer3DVaults.color = { r: 243, g: 244, b: 246, a: 255 }; // Plaster
            doc.layers().add(layer3DVaults);
            const vaults3DIdx = doc.layers().count - 1;
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

                    for (let i = 0; i < numFloors; i++) {
                        const zFloor = i * floorHeight;
                        const isGroundFloor = (i === 0);
                        const isRoofFloor = (i === numFloors - 1);
                        
                        let slabThick = slabThickness;
                        if (isGroundFloor) slabThick = slabThickness * 1.5;
                        else if (isRoofFloor) slabThick = slabThickness * 0.8;

                        if (showFloorSlabs && boundary && boundary.length >= 3) {
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = slabs3DIdx;
                            attr.name = `Floor_Slab_P${polyIdx}_F${i}`;
                            const slabMesh = createExtrudedPolygonMesh(rhino, boundary, slabThick, zFloor, isCCW);
                            doc.objects().addMesh(slabMesh, attr);
                            slabMesh.delete();
                            attr.delete();
                        }

                        if (show3DColumns && !isRoofFloor) {
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = columns3DIdx;
                            const colH = floorHeight - slabThick;

                            let tapFactor = 1.0;
                            if (numFloors > 1) {
                                tapFactor = 1.4 - 0.7 * (i / (numFloors - 1));
                            }
                            const colRad = columnRadius * tapFactor;

                            vertices.forEach((v, idx) => {
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
                                for (let k = 0; k < boundary.length; k++) {
                                    const bp = boundary[k];
                                    if (Math.hypot(v[0] - bp[0], v[1] - bp[1]) < 0.1) {
                                        isCornerVertex = true;
                                        break;
                                    }
                                }

                                if (isCornerVertex) {
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
                                    const colMesh = createExtrudedPolygonMesh(rhino, lPts, colH, zFloor + colH, true);
                                    colMesh.translate(v[0], v[1], 0);
                                    doc.objects().addMesh(colMesh, attr);
                                    colMesh.delete();
                                } else {
                                    const colMesh = createCylinderMesh(rhino, v[0], v[1], zFloor, colRad, colH, 12);
                                    doc.objects().addMesh(colMesh, attr);
                                    colMesh.delete();
                                }
                            });
                            attr.delete();
                        }

                        if (show3DBeams) {
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = beams3DIdx;
                            let tapFactor = 1.0;
                            if (numFloors > 1) {
                                tapFactor = 1.3 - 0.5 * (i / (numFloors - 1));
                            }
                            const bWidth = beamWidth * tapFactor;
                            const bDepth = beamDepth * tapFactor;
                            edges.forEach(([ptU, ptV], idx) => {
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

                                attr.name = `Beam_P${polyIdx}_F${i}_${idx}`;
                                const beamMesh = createBoxMesh(rhino, ptU[0], ptU[1], ptV[0], ptV[1], bWidth, bDepth, zFloor - slabThick);
                                doc.objects().addMesh(beamMesh, attr);
                                beamMesh.delete();
                            });
                            attr.delete();
                        }

                        if (showBalconies && !isGroundFloor && !isRoofFloor && boundary && boundary.length >= 3) {
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = balconies3DIdx;
                            for (let j = 0; j < boundary.length; j++) {
                                const p1 = boundary[j];
                                const p2 = boundary[(j + 1) % boundary.length];
                                const normal = boundaryNormals[j];
                                const context = segmentContexts[j] || 'open_space';
                                if (context === 'other_building' || context === 'touching') continue;

                                const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
                                if (len < 1e-3) continue;

                                let bOffset = balconyOffset;
                                if (context === 'courtyard') {
                                    bOffset = balconyOffset * 1.5;
                                }

                                const halfL = len / 2;
                                const radius = Math.min(0.8, bOffset * 0.4);
                                const shapePts = getRoundedBalconyPoints(halfL, bOffset, radius, 8);

                                attr.name = `Balcony_Slab_P${polyIdx}_F${i}_${j}`;
                                const balMesh = createExtrudedPolygonMesh(rhino, shapePts, balconyThickness, zFloor, true);
                                const angle = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
                                const midX = (p1[0] + p2[0]) / 2;
                                const midY = (p1[1] + p2[1]) / 2;
                                balMesh.rotate(angle, [0, 0, 1], [0, 0, 0]);
                                balMesh.translate(midX, midY, 0);
                                doc.objects().addMesh(balMesh, attr);
                                balMesh.delete();

                                // Railing
                                attr.name = `Balcony_Railing_P${polyIdx}_F${i}_${j}`;
                                const railingHeight = 1.1;
                                const railingThick = 0.02;
                                const railPts = [
                                    [-halfL, bOffset - railingThick],
                                    [halfL, bOffset - railingThick],
                                    [halfL, bOffset],
                                    [-halfL, bOffset]
                                ];
                                const railMesh = createExtrudedPolygonMesh(rhino, railPts, railingHeight, zFloor + railingHeight, true);
                                railMesh.rotate(angle, [0, 0, 1], [0, 0, 0]);
                                railMesh.translate(midX, midY, 0);
                                doc.objects().addMesh(railMesh, attr);
                                railMesh.delete();
                            }
                            attr.delete();
                        }

                        // E. Brise-Soleil (NULL on Ground, NULL on North/East facades, NULL on Roof floor)
                        if (showBriseSoleil && !isGroundFloor && !isRoofFloor && boundary && boundary.length >= 3) {
                            const sunDir = { x: -0.707, y: -0.707 };
                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = briseSoleil3DIdx;
                            
                            for (let j = 0; j < boundary.length; j++) {
                                const p1 = boundary[j];
                                const p2 = boundary[(j + 1) % boundary.length];
                                const normal = boundaryNormals[j];
                                const context = segmentContexts[j] || 'open_space';
                                const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
                                if (len < 1e-3) continue;

                                const alignment = normal.x * sunDir.x + normal.y * sunDir.y;

                                let bDepth = louverDepth;
                                let bSpacing = louverSpacing;
                                let active = true;

                                if (context === 'other_building') {
                                    bDepth = louverDepth * 0.8;
                                    bSpacing = louverSpacing * 0.6;
                                } else if (context === 'courtyard' || context === 'touching') {
                                    active = false;
                                } else {
                                    if (alignment > 0) {
                                        bDepth = louverDepth * (0.3 + 1.2 * alignment);
                                        bSpacing = louverSpacing * (1.2 - 0.5 * alignment);
                                    } else {
                                        active = false;
                                    }
                                }

                                if (!active) continue;

                                const numLouvers = Math.max(2, Math.floor(len / bSpacing));
                                const lHeight = floorHeight - slabThick;

                                const foilPts = getAerofoilPoints(louverWidth, bDepth, 8);

                                for (let k = 0; k <= numLouvers; k++) {
                                    const t = k / numLouvers;
                                    const lx = p1[0] + (p2[0] - p1[0]) * t + normal.x * 0.15;
                                    const ly = p1[1] + (p2[1] - p1[1]) * t + normal.y * 0.15;
                                    
                                    attr.name = `Louver_P${polyIdx}_F${i}_S${j}_L${k}`;
                                    const louverMesh = createExtrudedPolygonMesh(rhino, foilPts, lHeight, zFloor + lHeight, true);
                                    const angle = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
                                    louverMesh.rotate(angle, [0, 0, 1], [0, 0, 0]);
                                    louverMesh.translate(lx, ly, 0);
                                    doc.objects().addMesh(louverMesh, attr);
                                    louverMesh.delete();
                                }
                            }
                            attr.delete();
                        }
                    }

                    // F. Vaulted Roofs (Roof top floor only, Standard vs Butterfly)
                    if (showVaultedRoofs && bays && bays.length > 0) {
                        const attr = new rhino.ObjectAttributes();
                        attr.layerIndex = vaults3DIdx;
                        const zTop = (numFloors - 1) * floorHeight;
                        bays.forEach((cell, cellIdx) => {
                            const isCorner = cellIsCorner[cellIdx] || false;
                            attr.name = `Vaulted_Roof_P${polyIdx}_${cellIdx}`;
                            const vaultMesh = createVaultMesh(rhino, cell, vaultHeight, zTop, 8, isCorner, boundary);
                            doc.objects().addMesh(vaultMesh, attr);
                            vaultMesh.delete();
                        });
                        attr.delete();
                    }

                    // G. 3D Cells (colored by classification)
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

                            let cellLayerIdx = cellsInteriorIdx;
                            if (classification === 'corner') cellLayerIdx = cellsCornerIdx;
                            else if (classification === 'courtyard') cellLayerIdx = cellsCourtyardIdx;
                            else if (classification === 'neighbor') cellLayerIdx = cellsNeighborIdx;
                            else if (classification === 'open_space') cellLayerIdx = cellsOpenSpaceIdx;

                            const attr = new rhino.ObjectAttributes();
                            attr.layerIndex = cellLayerIdx;

                            for (let f = 0; f < numFloors; f++) {
                                attr.name = `Cell_P${polyIdx}_F${f}_B${cellIdx}`;
                                const cellZ = f * floorHeight;
                                const cellMesh = createExtrudedPolygonMesh(rhino, cell.map(pt => [pt[0], pt[1]]), floorHeight, cellZ + floorHeight, true);
                                doc.objects().addMesh(cellMesh, attr);
                                cellMesh.delete();
                            }
                            attr.delete();
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
