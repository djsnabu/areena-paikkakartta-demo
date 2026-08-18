import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '100.64.0.2',
    port: 4173,
    strictPort: true,
  },
  preview: {
    host: '100.64.0.2',
    port: 4173,
    strictPort: true,
  },
})
