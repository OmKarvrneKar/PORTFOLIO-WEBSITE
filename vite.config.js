import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    react(),
    glsl(), // allows importing .glsl / .vert / .frag files
  ],
  optimizeDeps: {
    exclude: ['@react-three/fiber', '@react-three/drei'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':   ['react', 'react-dom'],
          'three-vendor':   ['three', '@react-three/fiber', '@react-three/drei'],
          'post-vendor':    ['postprocessing', '@react-three/postprocessing'],
          'motion-vendor':  ['framer-motion', 'gsap'],
        },
      },
    },
  },
});
