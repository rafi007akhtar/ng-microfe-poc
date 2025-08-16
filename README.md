# ng-microfe-poc

This micro-frontend setup was built following [this](https://www.youtube.com/watch?v=ZlJ__9bYHxs) tutorial on YouTube.

In this setup are:

- host app
  - movie-ticket
- remote apps
  - movie-list
  - ticket-availability

## Steps

### Creating the Angular apps

First, create the apps.

```sh
ng new movie-ticket --no-standalone
ng new movie-list --no-standalone
ng new ticket-availability --no-standalone
```

Now, make the pre-micro-frontend changes in the apps as needed. My changes can be found in [this commit](https://github.com/rafi007akhtar/ng-microfe-poc/commit/acfc51cdc942269e8caed1ac4e125e9392295fc7).

### Installing the right version of Native Federation

Then, insteall the [Native Federation package](https://www.npmjs.com/package/@angular-architects/native-federation) for Angular in all the three apps.

Syntax:

```
npm i @angular-architects/native-federation@<version>
```

where `version` will depend on which Angular version you're using (more details in the [docs](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/README.md#versions)). I'm using Angular 17.1, so the command I used is:

```sh
npm i @angular-architects/native-federation@17
```

### Initializing the Native Federations for Host and Remotes

Next, run the Native Federation CLI commands to initialize the microfrontends in the apps. <br>
Syntax:

```
ng g @angular-architects/native-federation:init --project <project_name> --port <port_number> --type <app_type>
```

where:

- `project_name` is the repo name, like movie-ticket, movie-list etc.
- `port_number` is the port on which the app would run, like 4200
- `app_type` is `dynamic-host` for hosts and `remote` for remotes

So for the host, the command will be:

```sh
# for movie-ticket
ng g @angular-architects/native-federation:init --project movie-ticket --port 4200 --type dynamic-host
```

And for the remote, it will be:

```sh
ng g @angular-architects/native-federation:init --project movie-list --port 4201 --type remote # for movie-list
ng g @angular-architects/native-federation:init --project ticket-availability --port 4202 --type remote # for ticket-availability
```

After running these commands:

- The following files will be modified in each of the apps:
  - angular.json
  - src/main.ts
- The following files will be created in each of the apps:
  - src/bootstrap.ts
  - federation.config.js
  - federation.manifest.json
- The apps will will run. Running `ng serve` will serve the application in the port specified earlier, and you do not have to mention the port as `--port`.

### Changes for Micro-Frontends

I'm not going to write the steps here. You may look at the code.

**Host changes:**

- [app.component.ts](./movie-ticket/src/app/app.component.ts)
- The bulk of the logic is here, plus the html file and the service file

**Remote changes:**

- [movie-list](./movie-list/src/app/app.component.ts)
- [ticket-availability](./ticket-availability/src/app/app.component.ts)
- Here, the data sharing is done through `CustomEvent`
- Also, make sure any media like images have the respective PORT in their paths.

And that's it. It finally works!

---
