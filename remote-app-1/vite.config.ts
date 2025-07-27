import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    angular(),
    federation({
      name: 'remoteApp1',
      filename: 'remoteEntry.js',
      exposes: {
        // './Cmp1Component': './src/app/cmp1/cmp1.component.ts',
        './RemoteModule': './src/app/app-routing.module.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 4201,
  },
});
