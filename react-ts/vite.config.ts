import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/My_app/',  // ví dụ: '/my-app/'
  plugins: [react()],
})



