/**
 * Drives the camera:
 *   - Smooth mouse parallax (slight tilt/pan)
 *   - Scroll-driven Z/Y drift so the scene feels like a 3D world
 *     the user is flying through.
 *
 * Camera travel map (scrollProgress 0→1):
 *   0.00 – Hero:          z= 9, y= 0
 *   0.18 – About:         z= 8, y= 0.5
 *   0.38 – Projects:      z= 7, y= 1.0
 *   0.55 – Experience:    z= 8, y= 0.5
 *   0.70 – Skills:        z= 7, y=-0.5
 *   0.85 – Certs:         z= 8, y= 0
 *   1.00 – Contact:       z= 9, y= 0.5
 */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore }  from '../store/useStore';
import * as THREE from 'three';

// lerp helper
const lerp = (a, b, t) => a + (b - a) * t;

// Camera keyframes [scrollProgress, z, y, rotX]
const KEYFRAMES = [
  [0.00,  9.0,  0.0,  0.00],
  [0.18,  8.2,  0.5, -0.02],
  [0.38,  7.4,  1.0,  0.00],
  [0.55,  8.0,  0.5,  0.01],
  [0.70,  7.2, -0.5,  0.00],
  [0.85,  8.0,  0.0, -0.01],
  [1.00,  9.0,  0.5,  0.00],
];

function sampleKeyframes(progress) {
  let i = 0;
  while (i < KEYFRAMES.length - 2 && KEYFRAMES[i + 1][0] <= progress) i++;
  const [p0, z0, y0, rx0] = KEYFRAMES[i];
  const [p1, z1, y1, rx1] = KEYFRAMES[i + 1];
  const t = (progress - p0) / (p1 - p0);
  return {
    z:  lerp(z0,  z1,  t),
    y:  lerp(y0,  y1,  t),
    rx: lerp(rx0, rx1, t),
  };
}

export function CameraRig() {
  const mouse         = useStore((s) => s.mouse);
  const scrollProgress = useStore((s) => s.scrollProgress);

  // Smoothed internals
  const cx  = useRef(0);
  const cy  = useRef(0);
  const cz  = useRef(9);
  const cry = useRef(0);
  const crx = useRef(0);
  const camY = useRef(0);

  useFrame(({ camera }, delta) => {
    const speed = 1 - Math.pow(0.02, delta); // frame-rate independent smooth

    // Mouse parallax
    cx.current  = lerp(cx.current,  mouse.x * 1.4,  speed * 0.6);
    cy.current  = lerp(cy.current, -mouse.y * 0.8,  speed * 0.6);
    cry.current = lerp(cry.current,  mouse.x * 0.03, speed * 0.3);
    crx.current = lerp(crx.current, -mouse.y * 0.02, speed * 0.3);

    // Scroll-driven drift
    const kf = sampleKeyframes(scrollProgress);
    cz.current  = lerp(cz.current,  kf.z,          speed * 0.25);
    camY.current = lerp(camY.current, kf.y * -0.4, speed * 0.25);

    camera.position.set(cx.current, cy.current + camY.current, cz.current);
    camera.rotation.y = cry.current;
    camera.rotation.x = crx.current + kf.rx;
  });

  return null;
}
