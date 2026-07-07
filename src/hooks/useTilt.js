/**
 * Returns ref + event handlers that apply a CSS 3D tilt + glare effect.
 * Used on glass cards.
 */
import { useRef, useCallback } from 'react';

const MAX_TILT = 12; // degrees
const LIFT    = '12px';

export function useTilt() {
  const ref    = useRef(null);
  const glare  = useRef(null);
  const rafRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const card = ref.current;
      if (!card) return;
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = e.clientX - cx;
      const dy    = e.clientY - cy;
      const rotY  =  (dx / (rect.width  / 2)) * MAX_TILT;
      const rotX  = -(dy / (rect.height / 2)) * MAX_TILT;

      card.style.transition = 'transform 0.08s ease-out, box-shadow 0.08s ease-out';
      card.style.transformStyle = 'preserve-3d';
      card.style.transform  =
        `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${LIFT})`;

      // Glare overlay
      const g = glare.current;
      if (g) {
        const gx = ((e.clientX - rect.left) / rect.width)  * 100;
        const gy = ((e.clientY - rect.top)  / rect.height) * 100;
        g.style.opacity    = '1';
        g.style.background =
          `radial-gradient(circle at ${gx}% ${gy}%,
            rgba(0,212,255,0.16) 0%,
            rgba(0,150,200,0.05) 40%,
            transparent 68%)`;
      }
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const card = ref.current;
    if (!card) return;
    card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)';
    card.style.transformStyle = '';
    card.style.transform  = '';
    const g = glare.current;
    if (g) g.style.opacity = '0';
  }, []);

  return { ref, glare, onMouseMove, onMouseLeave };
}
