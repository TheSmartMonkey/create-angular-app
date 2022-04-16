# create-angular-app

Simple Angular template with lazy loading that fallows google architecture recommendation

There is readmes in each folder to explain you there role

## Installation

```bash
npx degit https://github.com/TheSmartMonkey/create-angular-app ui
```

## Recommended rules to follow

1. Follow the rule of [Smart & Dumb Components](https://dev.to/mquanit/concept-of-smart-dumb-components-in-angular-2fom)

    1. Smart components are components : collect the datadisplay the data

    1. Dumb components or isolated components : display the data

    1. Use @Input to get the data

    1. Finally a page component is composed of Smart & Dump components

1. A component must not exceed 100 lines of code

![APP IMAGE](https://github.com/TheSmartMonkey/create-angular-app/blob/main/.github/smart_and_dump_components.PNG)

## Articles



## Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
