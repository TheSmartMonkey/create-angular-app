# create-angular-app

Simple Angular template with lazy loading that fallows google architecture recommendation

There is READMES in each folder to explain you there role

## Installation

```bash
npx degit https://github.com/TheSmartMonkey/create-angular-app ui
```

## Recommended rules to follow

1. Follow the rule of [Smart & Dumb Components](https://dev.to/mquanit/concept-of-smart-dumb-components-in-angular-2fom)

    a. **Smart components** : collect the data

    b. **Dumb components** or isolated components : display the data

    c. Use @Input to get the data

    d. Finally a page component is composed of Smart & Dump components

1. Ideally a component must not exceed 100 lines of code

1. Adopte the SOLID Pattern and others : [Angular Patterns](https://angular-enterprise.com/en/ngpost/courses/design-patterns/)

1. [Angular concepts](https://angular.io/guide/architecture)

![APP IMAGE](https://github.com/TheSmartMonkey/create-angular-app/blob/main/.github/smart_and_dump_components.png)

## Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

More explications here : `src\app\README.md`

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

## Steps to update the repo

1. Create a new project

    ```sh
    ng new ui
    ```

1. Download ngx-translate

    ```sh
    npm install @ngx-translate/core --save
    ```

    ```sh
    npm install @ngx-translate/http-loader --save
    ```

1. Copy the code

1. Test the app

    ```sh
    npm run start
    ```

    ```sh
    npm run test
    ```

## Folder tree

```txt
src
|   favicon.ico
|   index.html
|   main.ts
|   polyfills.ts
|   test.ts
|   
+---app
|   |   app-routing.module.ts
|   |   app.component.html
|   |   app.component.scss
|   |   app.component.spec.ts
|   |   app.component.ts
|   |   app.module.ts
|   |   README.md
|   |   
|   +---admin
|   |       admin-routing.module.ts
|   |       admin.module.ts
|   |       README.md
|   |       
|   +---core
|   |   |   core.module.ts
|   |   |   README.md
|   |   |   
|   |   +---components
|   |   |   +---navbar
|   |   |   |       navbar.component.html
|   |   |   |       navbar.component.scss
|   |   |   |       navbar.component.spec.ts
|   |   |   |       navbar.component.ts
|   |   |   |       
|   |   |   \---page-not-found
|   |   |           page-not-found.component.html
|   |   |           page-not-found.component.scss
|   |   |           page-not-found.component.spec.ts
|   |   |           page-not-found.component.ts
|   |   |           
|   |   +---guards
|   |   |       .gitkeep
|   |   |       
|   |   +---interceptors
|   |   |       .gitkeep
|   |   |       
|   |   \---services
|   |           .gitkeep
|   |           
|   +---models
|   |       README.md
|   |       
|   +---protected
|   |       protected-routing.module.ts
|   |       protected.module.ts
|   |       README.md
|   |       
|   +---public
|   |   |   public-routing.module.ts
|   |   |   public.module.ts
|   |   |   README.md
|   |   |   
|   |   +---home
|   |   |   |   home-routing.module.ts
|   |   |   |   home.component.html
|   |   |   |   home.component.scss
|   |   |   |   home.component.spec.ts
|   |   |   |   home.component.ts
|   |   |   |   home.module.ts
|   |   |   |   
|   |   |   \---components
|   |   |           .gitkeep
|   |   |           
|   |   \---login
|   |       |   login-routing.module.ts
|   |       |   login.component.html
|   |       |   login.component.scss
|   |       |   login.component.spec.ts
|   |       |   login.component.ts
|   |       |   login.module.ts
|   |       |   
|   |       \---components
|   |               .gitkeep
|   |               
|   \---shared
|       |   README.md
|       |   shared.module.ts
|       |   
|       +---components
|       |       .gitkeep
|       |       
|       +---directives
|       |       .gitkeep
|       |       
|       \---pipes
|               .gitkeep
|               
+---assets
|   +---icons
|   |       .gitkeep
|   |       
|   +---images
|   |       .gitkeep
|   |       
|   \---languages
|           en.json
|           fr.json
|           
+---environments
|       environment.prod.ts
|       environment.ts
|       
\---sass
        global.scss
        styles.scss
        variables.scss
```
