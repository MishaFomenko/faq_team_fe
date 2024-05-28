import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/faq_team_fe/',
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
    },
  },
});