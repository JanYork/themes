import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      name: 'themes',
      entry: './src/themes.ts',
    },
  },
})
