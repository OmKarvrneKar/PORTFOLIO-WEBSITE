/**
 * Animated typing cursor component.
 * Types through an array of strings, deletes, then moves to the next.
 */
import { useState, useEffect, useRef } from 'react';

const ROLES = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'Cybersecurity Intern',
  'Problem Solver',
];

export function TypedText() {
  const [text, setText]       = useState('');
  const [deleting, setDeleting] = useState(false);
  const idxRef  = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    let timer;

    function tick() {
      const current = ROLES[idxRef.current];

      if (!deleting) {
        charRef.current++;
        setText(current.slice(0, charRef.current));
        if (charRef.current === current.length) {
          timer = setTimeout(() => setDeleting(true), 1900);
          return;
        }
        timer = setTimeout(tick, 88);
      } else {
        charRef.current--;
        setText(current.slice(0, charRef.current));
        if (charRef.current === 0) {
          setDeleting(false);
          idxRef.current = (idxRef.current + 1) % ROLES.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 48);
      }
    }

    timer = setTimeout(tick, deleting ? 48 : 88);
    return () => clearTimeout(timer);
  }, [deleting]);

  return (
    <span className="hero-role" aria-label="Role: changing text">
      <span className="prefix" aria-hidden="true">&gt;&nbsp;</span>
      <span className="typed-text" aria-live="polite">{text}</span>
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}
