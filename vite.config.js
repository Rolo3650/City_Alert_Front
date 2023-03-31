import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from './src/utils/config'
import createProgressPlugin from 'vite-plugin-progress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createProgressPlugin()],
  server: {
    port: config.PORT,
  },
})
