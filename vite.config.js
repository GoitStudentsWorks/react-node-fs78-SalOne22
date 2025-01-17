/* eslint-env node */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/react-node-fs78-SalOne22/',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
});
