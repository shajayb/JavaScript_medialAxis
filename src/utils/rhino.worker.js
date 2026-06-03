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
            const { boundary, skeleton, ribs, circles } = e.data;
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
            
            // 2. Add Boundary Polygon (as closed Polyline Curve)
            if (boundary && boundary.length > 0) {
                const attr = new rhino.ObjectAttributes();
                attr.layerIndex = boundaryLayerIdx;
                attr.name = "Boundary_Polygon";
                
                const pl = new rhino.Polyline(boundary.length + 1);
                boundary.forEach(pt => pl.add(pt[0], pt[1], pt[2] || 0.0));
                pl.add(boundary[0][0], boundary[0][1], boundary[0][2] || 0.0); // Close polyline
                
                doc.objects().addPolyline(pl, attr);
                pl.delete();
                attr.delete();
            }
            
            // 3. Add Skeleton Branches
            if (skeleton && skeleton.length > 0) {
                const attr = new rhino.ObjectAttributes();
                attr.layerIndex = skeletonLayerIdx;
                
                skeleton.forEach((branch, idx) => {
                    attr.name = `Skeleton_Branch_${idx}`;
                    const pl = new rhino.Polyline(branch.length);
                    branch.forEach(pt => pl.add(pt[0], pt[1], pt[2] || 0.0));
                    
                    doc.objects().addPolyline(pl, attr);
                    pl.delete();
                });
                attr.delete();
            }
            
            // 4. Add Structural Ribs
            if (ribs && ribs.length > 0) {
                const attr = new rhino.ObjectAttributes();
                attr.layerIndex = ribsLayerIdx;
                
                ribs.forEach((rib, idx) => {
                    attr.name = `Structural_Rib_${idx}`;
                    doc.objects().addLine(
                        [rib.start[0], rib.start[1], rib.start[2] || 0.0],
                        [rib.end[0], rib.end[1], rib.end[2] || 0.0],
                        attr
                    );
                });
                attr.delete();
            }
            
            // 5. Add Inscribed Circles
            if (circles && circles.length > 0) {
                const attr = new rhino.ObjectAttributes();
                attr.layerIndex = circlesLayerIdx;
                
                circles.forEach((circle, idx) => {
                    attr.name = `Inscribed_Circle_${idx}`;
                    
                    // Generate polyline circle on XY plane
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
            
            // 6. Serialize and return bytes
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
