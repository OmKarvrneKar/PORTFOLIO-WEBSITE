/**
 * Reusable glassmorphism card with 3D tilt + glare on mouse hover.
 * Wraps children, forwards className and style.
 */
import { useTilt } from '../hooks/useTilt';

export function GlassCard({ children, className = '', style = {}, ...rest }) {
  const { ref, glare, onMouseMove, onMouseLeave } = useTilt();

  return (
    <div
      ref={ref}
      className={`glass-card ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}

      {/* Glare overlay */}
      <div
        ref={glare}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 10,
          opacity: 0,
          transition: 'opacity 0.35s ease',
        }}
      />
    </div>
  );
}
