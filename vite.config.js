import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  plugins: [
    react(),
    glsl(), // allows importing .glsl / .vert / .frag files
  ],
  optimizeDeps: {
    exclude: ['@react-three/fiber', '@react-three/drei'],
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':  ['react', 'react-dom'],
          'three-vendor':  ['three', '@react-three/fiber', '@react-three/drei'],
          'post-vendor':   ['postprocessing', '@react-three/postprocessing'],
          'motion-vendor': ['framer-motion', 'gsap'],
        },
      },
    },
  },
});
