import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CollectionJS',
      fileName: (format) => `collection-js.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
        },
      },
    },
  },
});