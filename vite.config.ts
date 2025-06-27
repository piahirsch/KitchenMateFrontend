import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.ts']
    },
    resolve: {
      alias: { '@': '/src' }
    }
})
