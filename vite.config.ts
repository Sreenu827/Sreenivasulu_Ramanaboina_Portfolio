// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sreenivasulu_Ramanaboina_portfolio2/',  // Correct path to your GitHub Pages repo
  plugins: [react()],
});

