import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: true,
  },
  assetsInlineLimit: 4096,
});