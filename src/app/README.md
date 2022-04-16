# App folder

The admin, protected and public folder are handled the same way with lazy loading

You have a full exemple in the public folder

## Create a new page

1. Go to `src\app\public` folder (for exemple)

2. Execute this command `ng generate module profile --route profile --module app.module`

3. Go to `src\app\app-routing.module.ts` file

4. Cut this line of code and add it to `src\app\public\public-routing.module.ts` then correct the import path

```typescript
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
```

5. In your new module replace CommonModule by your main module (exemple: PublicModule)

## Routing system

### Lazy loading

https://angular.io/guide/lazy-loading-ngmodules

https://www.9lessons.info/2019/05/angular-routing-with-lazy-loading.html
