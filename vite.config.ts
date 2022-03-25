import { defineConfig } from 'vite'
import image from '@rollup/plugin-image'
import checker from 'vite-plugin-checker'
import { visualizer } from 'rollup-plugin-visualizer'

import react from '@vitejs/plugin-react'
import { join } from 'path'

const shouldAnalyze = process.env.ANALYZE

// const chunkify = (id: string) => {
//   if (id.includes('node_modules')) {
//     if (id.includes('firebase')) return 'vendor_firebase'
//     if (id.includes('react-redux')) return 'vendor_react-redux'
//     return 'vendor'
//   }
// }

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      plugins: shouldAnalyze
        ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })]
        : [],
    },
    sourcemap: !!shouldAnalyze,
    outDir: join(__dirname, './build/'),
  },
  server: {
    port: 3001,
  },
  plugins: [
    {
      ...image(),
      enforce: 'pre',
    },
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@/': join(__dirname, './src/'),
    },
  },
})
