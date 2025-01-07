import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [
    angular(),
    federation({
      name: 'hostApp',
      remotes: {
        remoteApp1: 'http://localhost:4201/remoteEntry.js',
        remoteApp2: 'http://localhost:4202/remoteEntry.js',
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
