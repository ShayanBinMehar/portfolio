import { copyFileSync, writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://shayanbinmehar.github.io/portfolio/
// If the repository is renamed, change this value to '/NEW-REPO-NAME/'.
// For a user site (ShayanBinMehar.github.io), use '/'.
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-spa',
      closeBundle() {
        writeFileSync('dist/.nojekyll', '')
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
  base: '/portfolio/',
})
