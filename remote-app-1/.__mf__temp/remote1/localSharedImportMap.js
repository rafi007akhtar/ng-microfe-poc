
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "rxjs": async () => {
          let pkg = await import("__mf__virtual/remote1__prebuild__rxjs__prebuild__.js")
          return pkg
        }
      ,
        "@angular/core": async () => {
          let pkg = await import("__mf__virtual/remote1__prebuild___mf_0_angular_mf_1_core__prebuild__.js")
          return pkg
        }
      ,
        "@angular/common": async () => {
          let pkg = await import("__mf__virtual/remote1__prebuild___mf_0_angular_mf_1_common__prebuild__.js")
          return pkg
        }
      ,
        "@angular/router": async () => {
          let pkg = await import("__mf__virtual/remote1__prebuild___mf_0_angular_mf_1_router__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "rxjs": {
            name: "rxjs",
            version: "7.8.2",
            scope: ["default"],
            loaded: false,
            from: "remote1",
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
        ,
          "@angular/core": {
            name: "@angular/core",
            version: "17.3.12",
            scope: ["default"],
            loaded: false,
            from: "remote1",
            async get () {
              usedShared["@angular/core"].loaded = true
              const {"@angular/core": pkgDynamicImport} = importMap 
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
              requiredVersion: "^17.0.0"
            }
          }
        ,
          "@angular/common": {
            name: "@angular/common",
            version: "17.3.12",
            scope: ["default"],
            loaded: false,
            from: "remote1",
            async get () {
              usedShared["@angular/common"].loaded = true
              const {"@angular/common": pkgDynamicImport} = importMap 
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
              requiredVersion: "^17.0.0"
            }
          }
        ,
          "@angular/router": {
            name: "@angular/router",
            version: "17.3.12",
            scope: ["default"],
            loaded: false,
            from: "remote1",
            async get () {
              usedShared["@angular/router"].loaded = true
              const {"@angular/router": pkgDynamicImport} = importMap 
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
              requiredVersion: "^17.0.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      