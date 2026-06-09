import { defineConfig } from 'vite'

// base: './' hace que el build (dist/) sea portable: se puede abrir sin servidor
export default defineConfig({
  base: './',
  server: {
    open: true,
  },
})
