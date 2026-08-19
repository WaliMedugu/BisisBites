import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // ✅ root path for Vercel
  plugins: [react(), tailwindcss()],
  server: {
    https: false, // disabled for hassle-free local hosting
    hmr: {
      overlay: false, // disables browser error overlay
    },
  },

})