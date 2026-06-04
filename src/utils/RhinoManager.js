import * as THREE from 'three';

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
        
        let loadedPolygonPoints = null;
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
                    
                    // Capture first closed curve as candidate for our active boundary polygon!
                    if (!loadedPolygonPoints && geomData.points.length >= 3) {
                        const start = geomData.points[0];
                        const end = geomData.points[geomData.points.length - 1];
                        const dist = Math.sqrt((start[0]-end[0])**2 + (start[1]-end[1])**2 + (start[2]-end[2])**2);
                        
                        if (dist < 0.1 || geomData.points.length >= 4) {
                            // Close loop and map to 2D
                            loadedPolygonPoints = geomData.points.map(pt => [pt[0], pt[1]]);
                            // Remove last point if duplicate
                            if (dist < 0.1) {
                                loadedPolygonPoints.pop();
                            }
                        }
                    }
                } catch (err) {
                    console.error("[RhinoManager] Failed to load curve:", err);
                }
            }
        });
        
        // If we found a valid polygon boundary curve, apply it to the Medial Axis Visualizer!
        if (loadedPolygonPoints && loadedPolygonPoints.length >= 3) {
            console.log(`[RhinoManager] Found boundary curve with ${loadedPolygonPoints.length} vertices. Setting active polygon!`);
            this.appContext.setPolygonFrom3dm(loadedPolygonPoints);
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
        
        // 1. Gather active polygon boundary
        const boundary = this.appContext.state.polygon.map(v => [v.x, v.y, 0.0]);
        
        // 2. Gather active medial axis curves
        const skeleton = [];
        if (this.appContext.state.showSkeleton && this.appContext.state.polygon.length >= 3) {
            if (this.appContext.state.planarGraph) {
                const graph = this.appContext.state.planarGraph;
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
                    // Simplified segments
                    const segmentsToExport = this.appContext.state.pruneBranches
                        ? this.appContext.state.skeletonData.simplifiedSegments.filter(seg => !(seg.start.isEndPoint || seg.end.isEndPoint))
                        : this.appContext.state.skeletonData.simplifiedSegments;
                        
                    segmentsToExport.forEach(seg => {
                        skeleton.push([
                            [seg.start.x, seg.start.y, 0.0],
                            [seg.end.x, seg.end.y, 0.0]
                        ]);
                    });
                } else {
                    // Curved skeleton curves
                    const pts = this.appContext.state.skeletonData.regularPoints;
                    const samples = this.appContext.state.samplesPerEdge;
                    for (let i = 0; i < this.appContext.state.polygon.length; i++) {
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
        
        // 3. Gather structural ribs (if visible)
        const ribs = [];
        if (this.appContext.state.showSkeleton && this.appContext.state.showRibs) {
            if (this.appContext.state.planarGraph) {
                const graph = this.appContext.state.planarGraph;
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
            } else if (this.appContext.acceptedRibsCache) {
                this.appContext.acceptedRibsCache.forEach(rib => {
                    ribs.push({
                        start: [rib.source.x, rib.source.y, 0.0],
                        end: [rib.target.x, rib.target.y, 0.0]
                    });
                });
            }
        }
        
        // 4. Gather max inscribed circles
        const circles = [];
        // Export the active hover circle if visible
        if (this.appContext.state.hoverCircle && this.appContext.state.hoveredMedialPoint) {
            const hp = this.appContext.state.hoveredMedialPoint;
            circles.push({
                center: [hp.x, hp.y, 0.0],
                radius: hp.radius
            });
        }
        // Also export inscribed circles at all simplified internal nodes!
        if (this.appContext.state.polygon.length >= 3 && this.appContext.state.skeletonData.simplifiedNodes) {
            const internalNodes = this.appContext.state.skeletonData.simplifiedNodes.filter(n => !n.isEndPoint);
            internalNodes.forEach(node => {
                circles.push({
                    center: [node.x, node.y, 0.0],
                    radius: node.radius || 5.0 // Fallback if radius not set
                });
            });
        }
        
        // 5. Gather structural bays/cells (if computed)
        const bays = [];
        if (this.appContext.state.structuralBays) {
            this.appContext.state.structuralBays.forEach(cell => {
                bays.push(cell.map(v => [v.x, v.y, 0.0]));
            });
        }
        
        // 6. Post to Web Worker and trigger download on resolve
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
                boundary,
                skeleton,
                ribs,
                circles,
                bays
            });
        });
    }
}
