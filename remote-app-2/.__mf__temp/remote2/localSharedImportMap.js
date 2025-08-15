
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "rxjs": async () => {
          let pkg = await import("__mf__virtual/remote2__prebuild__rxjs__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "rxjs": {
            name: "rxjs",
            version: "7.8.2",
            scope: ["default"],
            loaded: false,
            from: "remote2",
            async get () {
              usedShared["rxjs"].loaded = true
              const {"rxjs": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^7.0.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      