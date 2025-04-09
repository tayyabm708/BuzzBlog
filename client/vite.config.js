import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://16.170.244.212:3000',
      // '/api': 'http://localhost:3000',
    },
  },
  plugins: [react()],
})
