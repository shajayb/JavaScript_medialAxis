import * as THREE from 'three';

export class ImagenAPI {
    constructor(viewport) {
        this.viewport = viewport;
    }

    async generateRender(prompt, statusCallback, onStencilsCaptured) {
        try {
            statusCallback('Preparing scene renders...');
            
            const origWidth = this.viewport.container.clientWidth;
            const origHeight = this.viewport.container.clientHeight;
            const origPixelRatio = this.viewport.renderer.getPixelRatio();
            
            const resSelect = document.getElementById('imagen-resolution');
            if (resSelect) {
                const val = resSelect.value;
                let targetWidth = 3840, targetHeight = 2160;
                if (val === '4k') { targetWidth = 3840; targetHeight = 2160; }
                else if (val === '2k') { targetWidth = 2560; targetHeight = 1440; }
                else if (val === '1k') { targetWidth = 1920; targetHeight = 1080; }
                
                this.viewport.camera.aspect = targetWidth / targetHeight;
                this.viewport.camera.updateProjectionMatrix();
                this.viewport.renderer.setPixelRatio(1);
                this.viewport.renderer.setSize(targetWidth, targetHeight, false);
                this.viewport.composer.setSize(targetWidth, targetHeight);
                if (this.viewport.saoPass) this.viewport.saoPass.setSize(targetWidth, targetHeight);
            }

            // Recolor orange buildings to white for clean capture (guarded since there is no osmGroup in MAT visualizer)
            let landmarkMesh = null;
            if (this.viewport.osmGroup) {
                this.viewport.osmGroup.children.forEach(child => {
                    if (child.name === "Landmark Buildings (Merged)") {
                        landmarkMesh = child;
                        if (landmarkMesh.material) landmarkMesh.material.color.setHex(0xffffff);
                    }
                });
            }

            // 1. Capture Beauty Render
            this.viewport.setDisplayMode('STANDARD');
            this.viewport.render();
            let quality = 0.95; // High quality for crisp renders
            let b64Beauty = this.viewport.renderer.domElement.toDataURL('image/jpeg', quality).split(',')[1];
            
            // 2. Capture Depth Map
            this.viewport.setDisplayMode('DEPTH');
            this.viewport.render();
            const b64Depth = this.viewport.renderer.domElement.toDataURL('image/jpeg', 0.9).split(',')[1];

            // Restore standard mode
            this.viewport.setDisplayMode('STANDARD');
            
            // Restore landmark color (if any was found)
            if (landmarkMesh && landmarkMesh.material) {
                landmarkMesh.material.color.setHex(0xffa500);
            }
            
            // Restore resolution
            this.viewport.camera.aspect = origWidth / origHeight;
            this.viewport.camera.updateProjectionMatrix();
            this.viewport.renderer.setPixelRatio(origPixelRatio);
            this.viewport.renderer.setSize(origWidth, origHeight);
            this.viewport.composer.setSize(origWidth, origHeight);
            if (this.viewport.saoPass) this.viewport.saoPass.setSize(origWidth, origHeight);
            this.viewport.onWindowResize();
            
            if (onStencilsCaptured) {
                onStencilsCaptured(`data:image/jpeg;base64,${b64Beauty}`, `data:image/jpeg;base64,${b64Depth}`);
            }

            statusCallback('Fetching API Key...');
            const keyRes = await fetch('/api/get-key');
            if (!keyRes.ok) throw new Error('Failed to retrieve API key');
            const { key } = await keyRes.json();
            if (!key) throw new Error('API Key is empty');
            
            statusCallback('Compiling scene parameters...');
            const distance = this.viewport.controls ? this.viewport.camera.position.distanceTo(this.viewport.controls.target).toFixed(1) : 0;
            const pitch = this.viewport.controls ? (Math.PI / 2 - this.viewport.controls.getPolarAngle()).toFixed(2) : 0;
            const yaw = this.viewport.controls ? this.viewport.controls.getAzimuthalAngle().toFixed(2) : 0;
            const fov = this.viewport.camera.fov || 'Orthographic';
            const camDetails = `Camera Distance: ${distance}m, Pitch: ${pitch} rad, Yaw: ${yaw} rad, FOV: ${fov}`;
            
            const semantic = prompt || "A modern architectural building design.";
            const amplifiedPrompt = `Transform this building design geometry into a breathtaking, ultra-realistic architectural rendering.
STRICTLY apply the lighting instructions specified by the user: "${semantic}".

MATERIAL & TECTONIC SYSTEM RULES:
The input geometry is color-coded. You must apply the material and tectonic systems according to their display colors:
- All grey elements in the input image represent concrete masonry. Render them as concrete masonry surfaces (e.g., exposed concrete blockwork, concrete slabs, or solid masonry panels).
- All brown elements in the input image represent timber tectonics. Render them as timber tectonic systems (e.g., natural timber frames, structural timber members, or cladding).

Ensure hyper-crisp details, realistic ambient and ray-traced lighting matching the requested lighting instructions, and elegant surrounding landscaping (gardens, pathways). The final image must look like a premium architectural visualization render, completely clean, sharp, and awe-inspiring, while strictly preserving the silhouette, scale, and color-coded materials of the original geometry.`;

            const promptConstraints = `Camera Context: ${camDetails}\n${amplifiedPrompt}`;
            
            statusCallback('Dispatching payload to Gemini API...');
            const model = "gemini-3.1-flash-image-preview";
            const uri = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
            
            const payload = {
                systemInstruction: {
                    parts: [
                        { text: "You are an advanced architectural rendering agent utilizing strict structural control. Your primary directive is 100% geometry, silhouette, and scale preservation of the input building design. Treat the input image as an absolute structural mask. Do not alter the base geometry, structural columns, beams, vaults, or floor slabs. You must apply materials based on the display colors in the input image: grey elements represent concrete masonry, and brown elements represent timber tectonics. Compute realistic architectural lighting and render professional architectural visualization environments around the building." }
                    ]
                },
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: `CRITICAL INSTRUCTION: You MUST function like a strict depth-map renderer. Maintain the EXACT silhouette, contours, 3D wireframe structure, and camera perspective of the input image.\n\nRENDER INSTRUCTIONS:\n${promptConstraints}` },
                            { text: "Input 1 (Base Geometry - DO NOT ALTER SHAPE):" },
                            { inlineData: { mimeType: "image/jpeg", data: b64Beauty } }
                        ]
                    }
                ],
                generationConfig: { 
                    responseModalities: ["IMAGE"],
                    temperature: 0.0 
                }
            };
            
            console.log(`Payload string length: ${JSON.stringify(payload).length}`);
            console.log(`b64Beauty length: ${b64Beauty.length}`);
            console.log(`b64Depth length: ${b64Depth.length}`);
            
            const payloadLogEl = document.getElementById('imagen-payload-display');
            if (payloadLogEl) {
                const displayPayload = JSON.parse(JSON.stringify(payload));
                if (displayPayload.contents && displayPayload.contents[0].parts[2]) {
                    displayPayload.contents[0].parts[2].inlineData.data = `<BASE64_IMAGE_DATA_TRUNCATED (${b64Beauty.length} bytes)>`;
                }
                payloadLogEl.value = JSON.stringify(displayPayload, null, 2);
            }

            const response = await fetch(uri, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`API Error ${response.status}: ${errText}`);
            }

            statusCallback('Receiving generated image...');
            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content.parts[0].inlineData) {
                const outputB64 = result.candidates[0].content.parts[0].inlineData.data;
                const outputMime = result.candidates[0].content.parts[0].inlineData.mimeType || 'image/jpeg';
                
                statusCallback('Ready.');
                return {
                    beauty: `data:image/jpeg;base64,${b64Beauty}`,
                    depth: `data:image/jpeg;base64,${b64Depth}`,
                    result: `data:${outputMime};base64,${outputB64}`
                };
            } else {
                throw new Error('API returned OK, but no image data found.');
            }
        } catch (err) {
            console.error('ImagenAPI Error:', err);
            statusCallback(`Error: ${err.message}`);
            
            // Ensure viewport restored even on error
            this.viewport.setDisplayMode('STANDARD');
            throw err;
        }
    }
}
