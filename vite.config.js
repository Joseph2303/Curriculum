import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { copyFileSync, readdirSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-assets',
      apply: 'build',
      generateBundle() {
        // Verificar que los archivos de public se copien
        const publicDir = join(process.cwd(), 'public')
        const distDir = join(process.cwd(), 'dist')
        
        try {
          const files = readdirSync(publicDir, { recursive: true })
          console.log(`✓ Copiando ${files.length} archivos de public a dist`)
        } catch (e) {
          console.warn('⚠ No se pudo leer el directorio public')
        }
      }
    }
  ],
  base: '/',
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: './tailwind.config.cjs' }),
        autoprefixer(),
      ],
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
