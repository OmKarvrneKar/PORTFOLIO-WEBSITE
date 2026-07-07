/**
 * Lighting & environment for the 3D scene.
 * - Hemisphere light for ambient sky/ground gradient
 * - Two coloured point lights (cyan + purple) with pulsing intensity
 * - Directional fill light
 */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

export function SceneEnvironment() {
  const pCyan   = useRef(null);
  const pPurple = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pCyan.current)   pCyan.current.intensity   = 2.8 + Math.sin(t * 0.9)  * 0.6;
    if (pPurple.current) pPurple.current.intensity = 1.4 + Math.sin(t * 0.65 + 1.2) * 0.4;
  });

  return (
    <>
      {/* Realistic reflections */}
      <Environment preset="city" />

      {/* Soft sky/ground */}
      <hemisphereLight
        skyColor={new THREE.Color('#001840')}
        groundColor={new THREE.Color('#000510')}
        intensity={0.9}
      />

      {/* Cyan key light */}
      <pointLight
        ref={pCyan}
        color={new THREE.Color('#00d4ff')}
        intensity={2.8}
        distance={32}
        position={[4, 5, 7]}
      />

      {/* Purple accent light */}
      <pointLight
        ref={pPurple}
        color={new THREE.Color('#7c5cfc')}
        intensity={1.4}
        distance={22}
        position={[-6, -3, 4]}
      />

      {/* Dim fill from below */}
      <directionalLight
        color={new THREE.Color('#003055')}
        intensity={0.6}
        position={[0, -5, 3]}
      />
    </>
  );
}
