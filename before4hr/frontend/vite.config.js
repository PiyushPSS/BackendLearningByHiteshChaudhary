import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // This will help in server to believe that the request comes from the same server.
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [react()],
})