import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    // Transform JSX inside .js files before the React plugin runs
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/) || id.includes('node_modules')) return null;
        return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
      },
    },
    react(),
    glsl(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    exclude: ['@react-three/fiber', '@react-three/drei'],
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
