/**
 * Tracks normalized mouse position (-1 to 1) in the store.
 */
import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export function useMouse() {
  const setMouse = useStore((s) => s.setMouse);

  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth)  * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse(x, y);
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [setMouse]);
}
