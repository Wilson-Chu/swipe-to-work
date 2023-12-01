import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: "http://localhost:5173",
        changeOrigin: true,
        secure: false,
        // Note from Wilson: was previously target: "http://localhost:8080" - changed for testing purposes
        // We can even re-write the request
        // rewrite: path => path.replace('/api', ''),
      }
    }
  },

})
