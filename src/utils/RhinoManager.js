import * as THREE from 'three';
import { Vector2D } from './vector2d.js';
import { intersectRaySegment } from './geometry.js';

export class RhinoManager {
    constructor(appContext) {
        this.appContext = appContext; // Holds references to scene, controls, recomputeMAT, state, etc.
        
        // Spawn background Web Worker using Vite-compatible asset URL syntax
        this.worker = new Worker(new URL('./rhino.worker.js', import.meta.url));
        
        this.metadataResolve = null;
        this.loadResolve = null;
        this.exportResolve = null;
        this.rejectCallback = null;
        this.layers = [];
        
        this.worker.onmessage = (e) => {
            const { type, success, layers, objectCount, geometries, error } = e.data;
            
            if (!success) {
                console.error("[RhinoManager] Worker error:", error);
                if (this.rejectCallback) this.rejectCallback(new Error(error));
                return;
            }
            
            if (type === 'metadata-result') {
                this.layers = layers;
                if (this.metadataResolve) this.metadataResolve({ layers, objectCount });
            } 
            else if (type === 'load-result') {
                this.processGeometries(geometries);
                if (this.loadResolve) this.loadResolve(geometries);
            }
            else if (type === 'export-result') {
                if (this.exportResolve) this.exportResolve(e.data.bytes);
            }
        };
    }
    
    /**
     * Parses .3dm file metadata in the Web Worker.
     * @param {ArrayBuffer} buffer 
     * @returns {Promise<{layers: Array, objectCount: number}>}
     */
    parseMetadata(buffer) {
        return new Promise((resolve, reject) => {
            this.metadataResolve = resolve;
            this.rejectCallback = reject;
            this.worker.postMessage({ type: 'parse-metadata', buffer });
        });
    }
    
    /**
     * Selectively loads geometries from specified layers.
     * @param {ArrayBuffer} buffer 
     * @param {number[]} layerIndices 
     * @returns {Promise<any[]>}
     */
    loadLayers(buffer, layerIndices) {
        return new Promise((resolve, reject) => {
            this.loadResolve = resolve;
            this.rejectCallback = reject;
            this.worker.postMessage({ type: 'load-layers', buffer, layerIndices });
        });
    }
    
    /**
     * Reconstitutes imported curves/meshes and projects the first suitable closed curve to the MAT.
     * @param {any[]} geometries 
     */
    processGeometries(geometries) {
        console.log(`[RhinoManager] Processing ${geometries.length} geometries...`);
        
        // Clear previous Rhino imports
        this.clearRhinoGeometries();
        
        const closedCurves = [];
        const loader = new THREE.BufferGeometryLoader();
        
        geometries.forEach(geomData => {
            const layer = this.layers.find(l => l.index === geomData.layerIndex);
            const layerColor = layer ? layer.color : { r: 128, g: 128, b: 128 };
            const colorHex = (layerColor.r << 16) | (layerColor.g << 8) | layerColor.b;
            
            if (geomData.type === 'mesh') {
                try {
                    const parsedData = typeof geomData.data === 'string' ? JSON.parse(geomData.data) : geomData.data;
                    const geometry = loader.parse(parsedData);
                    
                    const material = new THREE.MeshBasicMaterial({
                        color: colorHex,
                        transparent: true,
                        opacity: 0.4,
                        side: THREE.DoubleSide
                    });
                    
                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.name = geomData.name;
                    mesh.userData = { type: 'rhino-geometry' };
                    this.appContext.rhinoGroup.add(mesh);
                } catch (err) {
                    console.error("[RhinoManager] Failed to load mesh:", err);
                }
            } 
            else if (geomData.type === 'curve') {
                try {
                    const vectors = geomData.points.map(pt => new THREE.Vector3(pt[0], pt[1], pt[2]));
                    const geometry = new THREE.BufferGeometry().setFromPoints(vectors);
                    
                    const material = new THREE.LineBasicMaterial({
                        color: colorHex,
                        linewidth: 2.0
                    });
                    
                    const line = new THREE.Line(geometry, material);
                    line.name = geomData.name;
                    line.userData = { type: 'rhino-geometry' };
                    this.appContext.rhinoGroup.add(line);
                    
                    if (geomData.points.length >= 3) {
                        const start = geomData.points[0];
                        const end = geomData.points[geomData.points.length - 1];
                        const dist = Math.sqrt((start[0]-end[0])**2 + (start[1]-end[1])**2 + (start[2]-end[2])**2);
                        
                        if (dist < 0.2) {
                            const pts2d = geomData.points.map(pt => [pt[0], pt[1]]);
                            pts2d.pop();
                            closedCurves.push(pts2d);
                        }
                    }
                } catch (err) {
                    console.error("[RhinoManager] Failed to load curve:", err);
                }
            }
        });
        
        if (closedCurves.length > 0) {
            console.log(`[RhinoManager] Found ${closedCurves.length} closed boundary curves. Setting imported polygons!`);
            this.appContext.setPolygonsFrom3dm(closedCurves);
        }
    }
    
    /**
     * Clears all Rhino-imported curves/meshes from the scene.
     */
    clearRhinoGeometries() {
        const group = this.appContext.rhinoGroup;
        if (!group) return;
        
        while (group.children.length > 0) {
            const child = group.children[0];
            group.remove(child);
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                else child.material.dispose();
            }
        }
    }
    
    /**
     * Gathers active Medial Axis data and triggers asynchronous export to a .3dm file.
     * @param {string} filename 
     */
    exportSceneTo3dm(filename = "medial_axis_export.3dm") {
        console.log(`[RhinoManager] Triggering background export to .3dm...`);
        
        // 1. Gather all polygons to export
        const originalActiveId = this.appContext.state.activePolygonId;
        const polygonsToExport = this.appContext.state.importedPolygons.map(item => {
            this.appContext.state.activePolygonId = item.id;
            
            const boundary = item.polygon.map(v => [v.x, v.y, 0.0]);
            
            if (!item.hasScaffold) {
                return {
                    boundary,
                    hasScaffold: false
                };
            }
            
            const skeleton = [];
            if (this.appContext.state.showSkeleton && item.polygon.length >= 3) {
                if (item.planarGraph) {
                    const graph = item.planarGraph;
                    graph.edges.forEach(edge => {
                        if (edge[2] === 'skeleton') {
                            const ptU = graph.vertices[edge[0]];
                            const ptV = graph.vertices[edge[1]];
                            skeleton.push([
                                [ptU.x, ptU.y, 0.0],
                                [ptV.x, ptV.y, 0.0]
                            ]);
                        }
                    });
                } else {
                    if (this.appContext.state.simplifySkeleton) {
                        const segmentsToExport = this.appContext.state.pruneBranches
                            ? item.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
                            : item.skeletonData.simplifiedSegments;
                            
                        segmentsToExport.forEach(seg => {
                            skeleton.push([
                                [seg.start.x, seg.start.y, 0.0],
                                [seg.end.x, seg.end.y, 0.0]
                            ]);
                        });
                    } else {
                        const pts = item.skeletonData.regularPoints;
                        const samples = this.appContext.state.samplesPerEdge;
                        for (let i = 0; i < item.polygon.length; i++) {
                            const branch = [];
                            for (let j = 0; j < samples; j++) {
                                const idx = i * samples + j;
                                if (pts[idx]) {
                                    branch.push([pts[idx].x, pts[idx].y, 0.0]);
                                }
                            }
                            if (branch.length >= 2) {
                                skeleton.push(branch);
                            }
                        }
                    }
                }
            }
            
            const ribs = [];
            if (this.appContext.state.showSkeleton && this.appContext.state.showRibs) {
                if (item.planarGraph) {
                    const graph = item.planarGraph;
                    graph.edges.forEach(edge => {
                        if (edge[2] && edge[2].startsWith('rib_')) {
                            const ptU = graph.vertices[edge[0]];
                            const ptV = graph.vertices[edge[1]];
                            ribs.push({
                                start: [ptU.x, ptU.y, 0.0],
                                end: [ptV.x, ptV.y, 0.0]
                            });
                        }
                    });
                } else if (item.id === originalActiveId && this.appContext.acceptedRibsCache) {
                    this.appContext.acceptedRibsCache.forEach(rib => {
                        ribs.push({
                            start: [rib.source.x, rib.source.y, 0.0],
                            end: [rib.target.x, rib.target.y, 0.0]
                        });
                    });
                }
            }
            
            const circles = [];
            if (item.id === originalActiveId && this.appContext.state.hoverCircle && this.appContext.state.hoveredMedialPoint) {
                const hp = this.appContext.state.hoveredMedialPoint;
                circles.push({
                    center: [hp.x, hp.y, 0.0],
                    radius: hp.radius
                });
            }
            if (item.polygon.length >= 3 && item.skeletonData.simplifiedNodes) {
                const internalNodes = item.skeletonData.simplifiedNodes.filter(n => !n.isEndPoint);
                internalNodes.forEach(node => {
                    circles.push({
                        center: [node.x, node.y, 0.0],
                        radius: node.radius || 5.0
                    });
                });
            }
            
            const bays = [];
            if (item.structuralBays) {
                item.structuralBays.forEach(cell => {
                    bays.push(cell.map(v => [v.x, v.y, 0.0]));
                });
            }

            // Compute boundary segment classifications
            let isCCW = true;
            let area = 0;
            for (let j = 0; j < item.polygon.length; j++) {
                const p1 = item.polygon[j];
                const p2 = item.polygon[(j + 1) % item.polygon.length];
                area += (p1.x * p2.y - p2.x * p1.y);
            }
            isCCW = area > 0;

            const boundaryNormals = [];
            for (let j = 0; j < item.polygon.length; j++) {
                const p1 = item.polygon[j];
                const p2 = item.polygon[(j + 1) % item.polygon.length];
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
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
                boundaryNormals.push(new Vector2D(nx, ny));
            }

            const segmentContexts = [];
            for (let j = 0; j < item.polygon.length; j++) {
                const p1 = item.polygon[j];
                const p2 = item.polygon[(j + 1) % item.polygon.length];
                const normal = boundaryNormals[j];
                segmentContexts.push(classifyBoundarySegment(p1, p2, normal, item, this.appContext.state.importedPolygons));
            }

            const cellIsCorner = [];
            if (item.structuralBays) {
                item.structuralBays.forEach(cell => {
                    cellIsCorner.push(isCornerCell(cell, item.polygon));
                });
            }
            
            return {
                boundary,
                hasScaffold: true,
                skeleton,
                ribs,
                circles,
                bays,
                planarGraphVertices: item.planarGraph ? item.planarGraph.vertices.map(v => [v.x, v.y, 0.0]) : null,
                planarGraphEdges: item.planarGraph ? item.planarGraph.edges.map(e => [e[0], e[1]]) : null,
                segmentContexts,
                cellIsCorner,
                boundaryNormals: boundaryNormals.map(n => [n.x, n.y, 0.0])
            };
        });
        
        this.appContext.state.activePolygonId = originalActiveId;
        
        // 2. Post to Web Worker and trigger download on resolve
        return new Promise((resolve, reject) => {
            this.exportResolve = (bytes) => {
                try {
                    if (typeof document !== 'undefined') {
                        const blob = new Blob([bytes], { type: "application/octet-stream" });
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = filename;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        URL.revokeObjectURL(link.href);
                    }
                    console.log(`[RhinoManager] Exported ${bytes.length} bytes to ${filename}`);
                    resolve(bytes);
                } catch (err) {
                    reject(err);
                } finally {
                    this.exportResolve = null;
                    this.rejectCallback = null;
                }
            };
            
            this.rejectCallback = (err) => {
                this.exportResolve = null;
                this.rejectCallback = null;
                reject(err);
            };
            
            this.worker.postMessage({
                type: 'export-scene',
                polygons: polygonsToExport,
                numFloors: this.appContext.state.numFloors,
                floorHeight: this.appContext.state.floorHeight,
                show3DColumns: this.appContext.state.show3DColumns,
                show3DBeams: this.appContext.state.show3DBeams,
                showFloorSlabs: this.appContext.state.showFloorSlabs,
                showBalconies: this.appContext.state.showBalconies,
                showBriseSoleil: this.appContext.state.showBriseSoleil,
                showVaultedRoofs: this.appContext.state.showVaultedRoofs,
                show3DCells: this.appContext.state.show3DCells,
                columnRadius: this.appContext.state.columnRadius,
                beamWidth: this.appContext.state.beamWidth,
                beamDepth: this.appContext.state.beamDepth,
                slabThickness: this.appContext.state.slabThickness,
                balconyOffset: this.appContext.state.balconyOffset,
                balconyThickness: this.appContext.state.balconyThickness,
                louverWidth: this.appContext.state.louverWidth,
                louverDepth: this.appContext.state.louverDepth,
                louverSpacing: this.appContext.state.louverSpacing,
                vaultHeight: this.appContext.state.vaultHeight
            });
        });
    }
}

// Classifies a boundary segment based on outward ray casting
function classifyBoundarySegment(p1, p2, normal, item, allPolygons) {
  const mid = p1.add(p2).scale(0.5);
  const rayOrigin = new Vector2D(mid.x + normal.x * 0.1, mid.y + normal.y * 0.1);
  const rayDir = normal;

  let closestHitDist = Infinity;
  let closestHitType = 'open_space';

  allPolygons.forEach(otherItem => {
    const isSelf = otherItem.id === item.id;
    for (let i = 0; i < otherItem.polygon.length; i++) {
      const segStart = otherItem.polygon[i];
      const segEnd = otherItem.polygon[(i + 1) % otherItem.polygon.length];
      
      if (isSelf) {
        const d1 = segStart.dist(p1);
        const d2 = segEnd.dist(p2);
        const d3 = segStart.dist(p2);
        const d4 = segEnd.dist(p1);
        if ((d1 < 1e-4 && d2 < 1e-4) || (d3 < 1e-4 && d4 < 1e-4)) {
          continue;
        }
      }

      const hit = intersectRaySegment(rayOrigin, rayDir, segStart, segEnd);
      if (hit && hit.s < closestHitDist) {
        closestHitDist = hit.s;
        closestHitType = isSelf ? 'courtyard' : 'other_building';
      }
    }
  });

  if (closestHitDist < 0.5) {
    return 'touching';
  } else if (closestHitDist < 25.0) {
    return closestHitType;
  }
  return 'open_space';
}

// Determines if a vertex is a true corner vertex of the boundary polygon (significant angle shift)
function isTrueCornerVertex(idx, poly) {
  const N = poly.length;
  if (N < 3) return false;
  const prev = poly[(idx - 1 + N) % N];
  const curr = poly[idx];
  const next = poly[(idx + 1) % N];
  
  const dx1 = curr.x - prev.x;
  const dy1 = curr.y - prev.y;
  const len1 = Math.hypot(dx1, dy1);
  
  const dx2 = next.x - curr.x;
  const dy2 = next.y - curr.y;
  const len2 = Math.hypot(dx2, dy2);
  
  if (len1 < 1e-6 || len2 < 1e-6) return false;
  
  const dot = (dx1 * dx2 + dy1 * dy2) / (len1 * len2);
  return dot < 0.98; // Turn angle > ~11.5 degrees
}

// Determines if a cell is a corner cell (touches any true corner vertices of the boundary polygon)
function isCornerCell(cell, boundaryPolygon) {
  const N = boundaryPolygon.length;
  for (const pt of cell) {
    for (let i = 0; i < N; i++) {
      const bPt = boundaryPolygon[i];
      if (Math.hypot(pt.x - bPt.x, pt.y - bPt.y) < 0.1) {
        if (isTrueCornerVertex(i, boundaryPolygon)) {
          return true;
        }
      }
    }
  }
  return false;
}

