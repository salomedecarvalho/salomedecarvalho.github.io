import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build:sketch` bundles everything into one HTML file for sharing previews.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'sketch' ? [viteSingleFile()] : [])],
}))
