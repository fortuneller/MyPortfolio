import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/MyPortfolio/", // This ensures correct asset paths for GitHub Pages
});
