import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'https://urban-carnival-49r495q95v5h747w-8080.app.github.dev',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})