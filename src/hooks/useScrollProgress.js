/**
 * Tracks document scroll progress (0–1) and active section.
 * Uses requestAnimationFrame for smooth 60fps updates.
 */
import { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';

const SECTIONS = ['hero', 'about', 'projects', 'experience', 'skills', 'certifications', 'contact'];

export function useScrollProgress() {
  const setScrollProgress = useStore((s) => s.setScrollProgress);
  const setActiveSection  = useStore((s) => s.setActiveSection);
  const rafRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return; // throttle to rAF
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const scrollY = window.scrollY;
        const docH    = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docH > 0 ? Math.min(scrollY / docH, 1) : 0;
        setScrollProgress(progress);
        lastScroll.current = scrollY;

        // Determine active section
        let current = 'hero';
        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (!el) continue;
          const { top } = el.getBoundingClientRect();
          if (top <= window.innerHeight * 0.45) current = id;
        }
        setActiveSection(current);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial call
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [setScrollProgress, setActiveSection]);
}
