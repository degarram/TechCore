import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/TechCore/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html')
      },
    },
  },
})