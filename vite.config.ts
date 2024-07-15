import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    open: false, // Automatically open the browser on server start
    host: true
  },
});