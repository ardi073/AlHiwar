const { Document, NodeIO } = require('@gltf-transform/core');

async function check() {
  const io = new NodeIO();
  const document = await io.read('./public/avatar.glb');
  
  const root = document.getRoot();
  
  console.log("--- BONES ---");
  const nodes = root.listNodes();
  nodes.forEach(node => {
    const name = node.getName().toLowerCase();
    if (name.includes('head') || name.includes('jaw') || name.includes('neck') || name.includes('mouth')) {
      console.log("Bone/Node:", name);
    }
  });

  console.log("--- MESHES (MORPH TARGETS) ---");
  const meshes = root.listMeshes();
  meshes.forEach(mesh => {
    const weights = mesh.getWeights();
    if (weights && weights.length > 0) {
      console.log("Mesh with blendshapes:", mesh.getName());
      const primitives = mesh.listPrimitives();
      if (primitives.length > 0) {
        const targets = primitives[0].listTargets();
        console.log("  Targets count:", targets.length);
      }
    }
  });
}
check();
