// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Rental-Cars/', // 👈 CHANGE THIS to match your GitHub repo name
})
