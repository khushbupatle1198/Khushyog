// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // This is the correct function format for Vite v8
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            return 'vendor'; // all other node_modules
          }
        }
      }
    }
  },
  preview: {
    port: 4173,
    host: true,
    open: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom']
  }
});