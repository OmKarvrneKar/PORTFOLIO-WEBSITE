/**
 * 14 wireframe 3D geometries floating in the hero space.
 * Each has:
 *   - individual rotation speed on 3 axes
 *   - sinusoidal float animation
 *   - mouse-reactive parallax drift
 *   - scroll-driven opacity fade (fade as user scrolls away from hero)
 */
import { useRef, useMemo } from 'react';
import { useFrame }        from '@react-three/fiber';
import { useStore }        from '../store/useStore';
import * as THREE from 'three';

// Geometry factory configs
const CONFIGS = [
  { type: 'Icosahedron', args: [0.72, 0],         pos: [-5.5,  1.9, -2.5], speed: [0.005, 0.007, 0.003], scale: 1.0,  opacity: 0.38 },
  { type: 'Torus',       args: [0.58, 0.18, 8,14], pos: [ 5.2,  2.1, -1.5], speed: [0.004, 0.006, 0.005], scale: 1.0,  opacity: 0.32 },
  { type: 'Octahedron',  args: [0.68, 0],          pos: [-4.2, -2.3,  0.0], speed: [0.006, 0.004, 0.007], scale: 0.85, opacity: 0.36 },
  { type: 'TorusKnot',   args: [0.40, 0.12, 80,8], pos: [ 4.1, -2.0, -2.0], speed: [0.003, 0.005, 0.004], scale: 1.1,  opacity: 0.28 },
  { type: 'Box',         args: [0.92, 0.92, 0.92], pos: [-2.6,  3.2, -3.5], speed: [0.007, 0.003, 0.006], scale: 0.88, opacity: 0.30 },
  { type: 'Icosahedron', args: [0.48, 1],           pos: [ 2.9,  3.4, -2.5], speed: [0.005, 0.008, 0.004], scale: 0.78, opacity: 0.40 },
  { type: 'Octahedron',  args: [0.52, 0],           pos: [ 6.8, -0.6, -2.5], speed: [0.004, 0.005, 0.007], scale: 0.72, opacity: 0.33 },
  { type: 'Torus',       args: [0.42, 0.12, 7,12],  pos: [-6.2, -1.0, -3.5], speed: [0.006, 0.004, 0.005], scale: 0.82, opacity: 0.26 },
  { type: 'Icosahedron', args: [0.32, 0],            pos: [ 0.4,  4.2, -1.5], speed: [0.008, 0.006, 0.004], scale: 0.68, opacity: 0.42 },
  { type: 'Box',         args: [0.62, 0.62, 0.62],   pos: [-1.6, -3.8, -2.5], speed: [0.005, 0.007, 0.006], scale: 0.88, opacity: 0.31 },
  { type: 'TorusKnot',   args: [0.28, 0.08, 64, 6],  pos: [-7.0,  2.5, -4.0], speed: [0.004, 0.003, 0.006], scale: 1.0,  opacity: 0.24 },
  { type: 'Torus',       args: [0.35, 0.10, 6, 10],  pos: [ 7.2,  1.0, -3.0], speed: [0.005, 0.006, 0.003], scale: 0.90, opacity: 0.27 },
  { type: 'Icosahedron', args: [0.62, 0],             pos: [ 3.5, -4.0, -1.5], speed: [0.003, 0.007, 0.005], scale: 0.78, opacity: 0.34 },
  { type: 'Octahedron',  args: [0.42, 0],             pos: [-3.8,  0.5, -4.0], speed: [0.006, 0.004, 0.003], scale: 0.70, opacity: 0.29 },
];

function makeGeo(type, args) {
  switch (type) {
    case 'Icosahedron': return new THREE.IcosahedronGeometry(...args);
    case 'Octahedron':  return new THREE.OctahedronGeometry(...args);
    case 'Torus':       return new THREE.TorusGeometry(...args);
    case 'TorusKnot':   return new THREE.TorusKnotGeometry(...args);
    case 'Box':         return new THREE.BoxGeometry(...args);
    default:            return new THREE.IcosahedronGeometry(0.5, 0);
  }
}

function WireGeom({ config, index }) {
  const ref = useRef(null);
  const mouse          = useStore((s) => s.mouse);
  const scrollProgress = useStore((s) => s.scrollProgress);

  const geo = useMemo(() => makeGeo(config.type, config.args), [config]);
  const mat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: config.opacity,
  }), [config.opacity]);

  const floatOffset = useMemo(() => Math.random() * Math.PI * 2, []);
  const initPos     = useMemo(() => [...config.pos], [config.pos]);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t   = clock.getElapsedTime();
    const spd = config.speed;

    // Rotation
    mesh.rotation.x += spd[0];
    mesh.rotation.y += spd[1];
    mesh.rotation.z += spd[2];

    // Sinusoidal float
    mesh.position.y = initPos[1] + Math.sin(t * 0.28 + floatOffset) * 0.18;

    // Mouse parallax (each geometry reacts differently)
    mesh.position.x = initPos[0] + mouse.x * (0.2 + index * 0.03);

    // Fade out as user scrolls (hero only zone)
    const heroFade = Math.max(0, 1 - scrollProgress * 5);
    mat.opacity    = config.opacity * (0.3 + heroFade * 0.7);
  });

  return (
    <mesh
      ref={ref}
      geometry={geo}
      material={mat}
      position={config.pos}
      scale={config.scale}
    />
  );
}

export function FloatingGeometries() {
  return (
    <group>
      {CONFIGS.map((cfg, i) => (
        <WireGeom key={i} config={cfg} index={i} />
      ))}
    </group>
  );
}
