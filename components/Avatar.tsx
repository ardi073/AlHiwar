"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface AvatarProps {
  volume: number;
}

function HumanAvatar({ volume }: AvatarProps) {
  const { scene } = useGLTF('/avatar.glb');
  
  const headRef = useRef<THREE.Object3D | null>(null);
  const morphMeshRef = useRef<THREE.Mesh | null>(null);
  const morphIndexRef = useRef<number>(-1);

  useEffect(() => {
    // Reset refs when scene changes
    headRef.current = null;
    morphMeshRef.current = null;
    morphIndexRef.current = -1;

    scene.traverse((child) => {
      // 1. Detect head bone for tracking (look for "head", "Head", "Neck", "neck")
      if ((child as THREE.Bone).isBone) {
        const name = child.name.toLowerCase();
        if (name.includes('head') || name.includes('neck')) {
          if (!headRef.current) headRef.current = child; // take the first one found
        }
      }
      
      // 2. Detect mesh with morph targets
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.morphTargetDictionary && mesh.morphTargetInfluences) {
          const dict = mesh.morphTargetDictionary;
          
          // Print all blendshapes to console for debugging
          console.log("Blendshapes found in", mesh.name, ":", Object.keys(dict).join(', '));
          
          // Look for common mouth/jaw opening blendshapes
          const targetNames = [
            'mouthOpen', 'jawOpen', 'mouth_open', 'jaw_open', 'MouthOpen', 'JawOpen', 'viseme_aa', 'viseme_O', 'mouthSmile'
          ];
          
          for (const name of targetNames) {
            if (dict[name] !== undefined) {
              morphMeshRef.current = mesh;
              morphIndexRef.current = dict[name];
              console.log("Using morph target for lip sync:", name);
              break;
            }
          }
          
          // If no specific name found but morphs exist, use the first one
          if (!morphMeshRef.current && Object.keys(dict).length > 0) {
            morphMeshRef.current = mesh;
            morphIndexRef.current = 0; 
          }
        }
      }
    });
    
    // Adjust avatar position to frame the upper body
    scene.position.y = -1.5; 
  }, [scene]);

  useFrame((state) => {
    // Calculate cursor targets once at the top
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;

    // Lip Sync
    if (morphMeshRef.current && morphMeshRef.current.morphTargetInfluences && morphIndexRef.current !== -1) {
      // Volume is 0-255.
      const normalizedVol = Math.min(1, Math.max(0, volume / 200)); // cap at 200 for easier triggering
      const targetValue = normalizedVol * 0.8; 
      
      morphMeshRef.current.morphTargetInfluences[morphIndexRef.current] = THREE.MathUtils.lerp(
        morphMeshRef.current.morphTargetInfluences[morphIndexRef.current], 
        targetValue, 
        0.3
      );
    } else {
      // Fallback: If the model has no mouth controls, we make the head nod to simulate talking!
      if (headRef.current) {
        const nod = Math.min(1, volume / 255) * 0.15; // 0.15 radians nodding
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY + nod, 0.3);
      } else {
        // Ultimate fallback: bounce whole body
        const bounce = Math.min(1, volume / 255) * 0.1;
        scene.position.y = THREE.MathUtils.lerp(scene.position.y, -1.5 + bounce, 0.2);
      }
    }
    
    // Head Tracking
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      // rotation.x is handled above to combine tracking with nodding
    } else {
      scene.rotation.y = THREE.MathUtils.lerp(scene.rotation.y, state.pointer.x * 0.3, 0.1);
    }
  });

  return <primitive object={scene} />;
}

export default function Avatar({ volume = 0 }: AvatarProps) {
  return (
    <div className="w-full h-full cursor-pointer pointer-events-auto bg-slate-50 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, 10, -5]} intensity={0.8} color="#93c5fd" />
        <Environment preset="city" />
        
        <React.Suspense fallback={
          <mesh>
            <sphereGeometry args={[0.5]} />
            <meshBasicMaterial color="#ccc" wireframe />
          </mesh>
        }>
          <HumanAvatar volume={volume} />
        </React.Suspense>
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
    </div>
  );
}

useGLTF.preload('/avatar.glb');
