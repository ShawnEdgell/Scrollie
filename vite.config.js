import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Scrollie/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext', 
    outDir: 'dist', 
    minify: 'terser',
    sourcemap: true
  },
});