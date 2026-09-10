import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // The app used to ship as one ~530 KB chunk that had to download, parse
        // and execute in full before anything rendered. Splitting the stable
        // vendor code out lets it cache across deploys and keeps a copy change
        // from invalidating React itself.
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
