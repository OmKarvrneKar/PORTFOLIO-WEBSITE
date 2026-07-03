/**
 * Root Three.js scene rendered via React Three Fiber.
 * Fixed behind all page content (pointer-events: none).
 *
 * Architecture:
 *  <Canvas> (r3f)
 *   ├─ <SceneEnvironment>   – HDR env map, ambient light, hemisphere
 *   ├─ <CameraRig>          – mouse parallax + scroll-driven camera movement
 *   ├─ <ParticleCloud>      – procedural GPU particles
 *   ├─ <FloatingGeometries> – wireframe solids that orbit the hero
 *   ├─ <ScrollTunnel>       – depth lines that appear while scrolling
 *   └─ <EffectsPass>        – Bloom + ChromaticAberration (post-processing)
 */
import { Suspense, useCallback } from 'react';
import { Canvas }    from '@react-three/fiber';
import { Preload }   from '@react-three/drei';
import { useStore }  from '../store/useStore';

import { CameraRig }          from './CameraRig';
import { ParticleCloud }       from './ParticleCloud';
import { FloatingGeometries }  from './FloatingGeometries';
import { SceneEnvironment }    from './SceneEnvironment';
import { EffectsPass }         from './EffectsPass';

export function Scene() {
  const setWebglAvailable = useStore((s) => s.setWebglAvailable);

  // WebGL failure handler
  const onCreated = useCallback(({ gl }) => {
    if (!gl) setWebglAvailable(false);
  }, [setWebglAvailable]);

  return (
    <Canvas
      dpr={[1, 1.8]}                      // clamp pixel ratio for perf
      camera={{ position: [0, 0, 9], fov: 52, near: 0.1, far: 100 }}
      gl={{
        alpha:             true,
        antialias:         true,
        powerPreference:   'high-performance',
        stencil:           false,
        depth:             true,
      }}
      style={{ background: 'transparent' }}
      onCreated={onCreated}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <SceneEnvironment />
        <CameraRig />
        <ParticleCloud />
        <FloatingGeometries />
        <EffectsPass />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
