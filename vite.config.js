import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🚨 Add this line, replacing 'Portfoilo' with your exact repository name
  base: "/Portfoilo/", 
})