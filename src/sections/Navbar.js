/**
 * Fixed navbar with scroll-aware background, smooth underline links,
 * and mobile hamburger menu.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';

const LINKS = [
  { href: '#about',          label: 'About'        },
  { href: '#projects',       label: 'Projects'      },
  { href: '#experience',     label: 'Experience'    },
  { href: '#skills',         label: 'Skills'        },
  { href: '#certifications', label: 'Certs'         },
  { href: '#contact',        label: 'Contact'       },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const activeSection = useStore((s) => s.activeSection);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <a href="#hero" className="nav-logo" onClick={close}>&lt;<span>OV</span> /&gt;</a>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {LINKS.map(({ href, label }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  style={{ color: activeSection === id ? 'var(--accent)' : undefined }}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu open"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {LINKS.map(({ href, label }) => (
              <a key={href} href={href} onClick={close}>{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
