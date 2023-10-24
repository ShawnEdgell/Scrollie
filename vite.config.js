import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Scrollie/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
});