import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfoilo/", // Must match your repo name
  build: {
    outDir: 'docs' // 👈 NEW: Output to the 'docs' folder
  }
})