/**
 * Global state store (Zustand).
 * Tracks scroll progress, active section, and UI state.
 */
import { create } from 'zustand';

export const useStore = create((set) => ({
  // Normalized scroll progress 0-1
  scrollProgress: 0,
  setScrollProgress: (v) => set({ scrollProgress: v }),

  // Active nav section
  activeSection: 'hero',
  setActiveSection: (s) => set({ activeSection: s }),

  // Whether WebGL is available
  webglAvailable: true,
  setWebglAvailable: (v) => set({ webglAvailable: v }),

  // Mobile menu open
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),

  // Mouse position (normalized -1 to 1)
  mouse: { x: 0, y: 0 },
  setMouse: (x, y) => set({ mouse: { x, y } }),
}));
