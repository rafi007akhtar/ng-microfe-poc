# Angular Micro-frontend POC

This repo is POC I am trying out for building an Angular app running a micro-frontend architecture.

Things to keep in mind:

- The Angular version is 17, which means Webpack is not the bundler here, and so the webpack plugin and configuration will probably not work here.
- Solution: I am trying to use **Vite** and its [plugin for Module Federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation) to implement the micro-frontends.
- Note: I like NgModules, so this will **not** be a standalone architecture.

# Troubleshooting

These are the changes I had to make to finish the steps successfully, which did not match the instructions provided in the guide.

## Creating feature modules and components for remote

- I named the module as `remote1` and `cmp1` for the first remote.
- The command for creating module that worked:

  ```sh
  ng g m remote1 --module=app
  ```

- The commanf for creating component that worked:

  ```sh
  ng g component remote1/cmp1 --skip-tests=true --flat=true --module=remote1
  ```

- For both of them, I was in "/remote-app-1/src/app" path.
- For the second remote, the steps were the same, with `1` replaced with `2`.
