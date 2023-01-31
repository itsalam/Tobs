import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { crx } from '@crxjs/vite-plugin'
import eslint from 'vite-plugin-eslint'
import * as manifest from './manifest.json'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    minify: false,
    rollupOptions: {
      input: {
        settings: 'settings.html'
      },
    }
  },
  define: {
    'process.env': "import.meta.env",
    '__dirname': _dirname
  },
  plugins: [
    react(),
    crx({ manifest }),
    eslint()
  ],
})
