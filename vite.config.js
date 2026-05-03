import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/todo-app/',
  build: {
    rollupOptions: {
      plugins: [{
        writeBundle() {
          const fs = require('fs');
          fs.copyFileSync('dist/index.html', 'dist/404.html');
        }
      }]
    }
  }
})
