import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Keep the correct base path
  base: "/Portfoilo/", 
  // 2. Add the build property
  build: {
    outDir: 'docs' // NEW: Output to the 'docs' folder
  }
})