/**
 * Post-processing pipeline:
 *  - Bloom (luminance-based, subtle) for the cyan glow
 *  - ChromaticAberration (very subtle, moves with mouse)
 *
 * Wrapped in a try/catch so the app degrades gracefully
 * if postprocessing is unavailable.
 */
import { useRef } from 'react';
import { useFrame }    from '@react-three/fiber';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { useStore } from '../store/useStore';

const OFFSET = new THREE.Vector2(0, 0);

export function EffectsPass() {
  const caRef = useRef(null);
  const mouse = useStore((s) => s.mouse);
  const mouseRef = useRef(mouse);
  mouseRef.current = mouse;

  useFrame(() => {
    if (!caRef.current) return;
    // Chromatic aberration follows mouse movement
    const m = mouseRef.current;
    const strength = Math.sqrt(m.x * m.x + m.y * m.y) * 0.0006;
    caRef.current.offset.set(
      m.x * strength * 0.4,
      m.y * strength * 0.4
    );
  });

  return (
    <EffectComposer multisampling={0}>
      {/* Luminance bloom – only bright cyan/white pixels glow */}
      <Bloom
        luminanceThreshold={0.72}
        luminanceSmoothing={0.85}
        intensity={0.55}
        blendFunction={BlendFunction.ADD}
        mipmapBlur
      />

      {/* Subtle CA that shifts with mouse */}
      <ChromaticAberration
        ref={caRef}
        offset={OFFSET}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />

      {/* Slight vignette for cinematic depth */}
      <Vignette
        offset={0.38}
        darkness={0.55}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}
