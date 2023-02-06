import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from './src/utils/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: config.PORT,
  },
})
