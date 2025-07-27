# Angular Micro-frontend POC

This repo is POC I am trying out for building an Angular app running a micro-frontend architecture.

Things to keep in mind:

- The Angular version is 17, which means Webpack is not the bundler here, and so the webpack plugin and configuration will probably not work here.
- Solution: I am trying to use **Vite** and its [plugin for Module Federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation) to implement the micro-frontends.
- Note: I like NgModules, so this will **not** be a standalone architecture.

## Step #1: Create the necessary projects

Firstly, create the **host app**. This will be the main or the entry-point app for the remotes. Install Vite and its Federation plugin.

```sh
ng new host-app --standalone=false
cd host-app
npm install vite @originjs/vite-plugin-federation --save-dev
```

Next, create the **first remote app**. Install Vite and its Federation plugin.

```sh
ng new remote-app-1 --standalone=false
cd remote-app-1
npm install vite @originjs/vite-plugin-federation --save-dev
```

Finally, create the **second remote app**. Install Vite and its Federation plugin.

```sh
ng new remote-app-2 --standalone=false
cd remote-app-2
npm install vite @originjs/vite-plugin-federation --save-dev
```
