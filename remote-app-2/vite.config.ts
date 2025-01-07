import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    angular(),
    federation({
      name: 'remoteApp2',
      filename: 'remoteEntry.js',
      exposes: {
        './Cmp2Component': './src/app/cmp2/cmp2.component.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
