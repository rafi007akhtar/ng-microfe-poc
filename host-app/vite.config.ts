import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [
    angular({
      inlineStylesExtension: 'scss',
      tsconfig: './tsconfig.app.json',
    }),
  ],
  server: {
    port: 4200,
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
  },
});
