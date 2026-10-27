import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Lets you open the dev site from an Android phone on the same Wi-Fi.
    host: true,
  },
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        // Keep framework code in its own long-cacheable chunk.
        // Each page is additionally code-split via React.lazy in src/App.jsx.
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
