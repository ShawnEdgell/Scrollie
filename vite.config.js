import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite-test-2/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
});