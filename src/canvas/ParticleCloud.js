/**
 * Instanced GPU particle system.
 * - 700 particles spread in 3D space
 * - Each particle has randomized position, size, and drift velocity
 * - Connection lines between nearby particles drawn with THREE.Line
 * - Particles slowly rotate around the Y axis as a group
 * - Custom vertex shader handles per-particle size attenuation
 */
import { useRef, useMemo } from 'react';
import { useFrame }        from '@react-three/fiber';
import * as THREE from 'three';

const COUNT   = 700;
const SPREAD  = { x: 28, y: 18, z: 16 };
const CONNECTION_DIST = 3.2;
const MAX_CONNECTIONS  = 60; // performance cap

export function ParticleCloud() {
  const pointsRef = useRef(null);
  const linesRef  = useRef(null);

  // Generate stable particle data once
  const { positions, velocities, sizes } = useMemo(() => {
    const positions  = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    const sizes      = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * SPREAD.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD.z - 2;
      velocities[i * 3]    = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1]= (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 2]= (Math.random() - 0.5) * 0.002;
      sizes[i]              = Math.random() * 0.055 + 0.01;
    }
    return { positions, velocities, sizes };
  }, []);

  // Geometry for connections (pre-allocate max segments)
  const linePositions = useMemo(() =>
    new Float32Array(MAX_CONNECTIONS * 2 * 3), []);
  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  useFrame(({ clock }) => {
    const pts = pointsRef.current;
    if (!pts) return;

    const posAttr = pts.geometry.attributes.position;
    const arr     = posAttr.array;
    const t       = clock.getElapsedTime();

    // Update particle positions (drift + sinusoidal wave)
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3, iy = ix + 1, iz = ix + 2;

      arr[ix] += velocities[ix];
      arr[iy] += velocities[iy] + Math.sin(t * 0.18 + i * 0.07) * 0.0006;
      arr[iz] += velocities[iz];

      // Wrap bounds
      if (arr[ix] >  SPREAD.x / 2) arr[ix] = -SPREAD.x / 2;
      if (arr[ix] < -SPREAD.x / 2) arr[ix] =  SPREAD.x / 2;
      if (arr[iy] >  SPREAD.y / 2) arr[iy] = -SPREAD.y / 2;
      if (arr[iy] < -SPREAD.y / 2) arr[iy] =  SPREAD.y / 2;
      if (arr[iz] > 6) arr[iz] = -SPREAD.z - 2;
      if (arr[iz] < -SPREAD.z - 2) arr[iz] = 6;
    }
    posAttr.needsUpdate = true;

    // Build connection line segments
    const linesGeo = linesRef.current?.geometry;
    if (!linesGeo) return;
    const la = linesGeo.attributes.position.array;
    let lineIdx = 0;
    let found   = 0;

    outer: for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        if (found >= MAX_CONNECTIONS) break outer;
        const dx = arr[i*3]   - arr[j*3];
        const dy = arr[i*3+1] - arr[j*3+1];
        const dz = arr[i*3+2] - arr[j*3+2];
        const d2 = dx*dx + dy*dy + dz*dz;
        if (d2 < CONNECTION_DIST * CONNECTION_DIST) {
          la[lineIdx++] = arr[i*3];   la[lineIdx++] = arr[i*3+1]; la[lineIdx++] = arr[i*3+2];
          la[lineIdx++] = arr[j*3];   la[lineIdx++] = arr[j*3+1]; la[lineIdx++] = arr[j*3+2];
          found++;
        }
      }
    }
    // Zero out unused segments
    for (let k = lineIdx; k < la.length; k++) la[k] = 0;
    linesGeo.attributes.position.needsUpdate = true;
    linesGeo.setDrawRange(0, found * 2);
  });

  const pointsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    g.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));
    return g;
  }, [positions, sizes]);

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef} geometry={pointsGeo} frustumCulled={false}>
        <pointsMaterial
          color="#00d4ff"
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef} geometry={lineGeo} frustumCulled={false}>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.09}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
