import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
 
  build: {
    rollupOptions: {
      // Opzioni di Rollup per gestire immagini
      output: {
        assetFileNames: 'assets/[name].[ext]' // Specifica la directory in cui le immagini verranno copiate
      }
    }
  }
})
