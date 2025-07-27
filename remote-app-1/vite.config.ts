import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    angular({
      inlineStylesExtension: 'scss',
      tsconfig: './tsconfig.app.json',
    }),
    federation({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './Remote1Module': './src/app/app.module.ts',
      },
      shared: {
        '@angular/core': { requiredVersion: '^17.0.0' },
        '@angular/common': { requiredVersion: '^17.0.0' },
        '@angular/router': { requiredVersion: '^17.0.0' },
        rxjs: { requiredVersion: '^7.0.0' },
      },
    }),
  ],
  server: {
    port: 4201,
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    minify: false,
  },
});
