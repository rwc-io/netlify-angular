# NetlifyAngular

NetlifyAngular is:

* a [Netlify](https://www.netlify.com/) project template for:
* an [Angular](https://angular.io/) app,
* styled with [Material Design](https://material.io/) + [Bootstrap](https://getbootstrap.com/)
* with the [MD-Bootstrap](https://mdbootstrap.com/)-[Angular](https://mdbootstrap.com/docs/angular/) framework
* with [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) support

## Quick start 

Click this button to clone this repo into your own, and set up a Netlify deployment under your account. If you've already cloned the repo, or prefer to set up the deployment manually, go to the netlify app to [create a new github connection](https://app.netlify.com/start).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dchaley/netlify-angular)

Once your app is set up and running, go to your domain:

`http://<your-netlify-hostname>.netlify.com`

and you'll see your live Angular application!

## Development

This assumes that your Node version is compatible with Angular 21: v22.x or later.

After cloning the repo:

* install dependencies: `npm install`

When that's done:

* serve angular app: `ng serve` (starts on [localhost:4200](http://localhost:4200/))

See "Angular framework README" below for more information on developing an Angular application.

### Netlify configuration

[netlify.toml](https://github.com/dchaley/netlify-angular/blob/master/netlify.toml) sets the build output folder `dist/netlify-angular`. Modern Angular builds use the production configuration by default.

### FontAwesome icon configuration

angular-fontawesome icons are configured in [src/app/app.component.ts](https://github.com/dchaley/netlify-angular/blob/master/src/app/app.component.ts).

In a more complex app, you might do this in a helper somewhere.

### Modern Angular Features

This project uses modern Angular features:
* **Standalone Components**: The application is built using standalone components, removing the need for `NgModule`.
* **Zoneless Change Detection**: The application uses zoneless change detection for improved performance, as configured in `src/main.ts`.

## Angular framework README

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 21.2.13.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. By default, `ng build` uses the production configuration for an optimized build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Note: Protractor is deprecated, and it is recommended to use modern alternatives like Playwright or Cypress for new tests.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
