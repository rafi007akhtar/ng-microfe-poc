# Angular Micro-frontend POC

This repo is POC I am trying out for building an Angular app running a micro-frontend architecture.

Things to keep in mind:

- The Angular version is 17, which means Webpack is not the bundler here, and so the webpack plugin and configuration will probably not work here.
- Solution: I am trying to use **Vite** and its [plugin for Module Federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation) to implement the micro-frontends.
- Note: I like NgModules, so this will **not** be a standalone architecture.
