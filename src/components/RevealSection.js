/**
 * Wraps a child element with a Framer Motion 3D reveal animation.
 * Triggers when the element enters the viewport (IntersectionObserver).
 *
 * Props:
 *   delay   – stagger delay in seconds (default 0)
 *   y       – initial Y offset in px (default 30)
 *   rotX    – initial rotateX in degrees (default 8)
 *   once    – only animate once (default true)
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const REDUCE_MOTION =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function RevealSection({
  children,
  delay  = 0,
  y      = 32,
  rotX   = 7,
  once   = true,
  className = '',
  style  = {},
  as     = 'div',
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

  const variants = REDUCE_MOTION
    ? { hidden: {}, visible: {} }  // no motion if prefers-reduced-motion
    : {
        hidden:  { opacity: 0, y, rotateX: rotX, perspective: 900 },
        visible: {
          opacity: 1, y: 0, rotateX: 0,
          transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ transformStyle: 'preserve-3d', ...style }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
