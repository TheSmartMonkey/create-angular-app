# App folder

## Create a new page

1. Go to `src\app\public` folder (for exemple)

2. Execute this command `ng generate module profile --route profile --module app.module`

3. Go to `src\app\app-routing.module.ts` file

4. Cut this line of code and add it to `src\app\public\public.routes.ts` 

```typescript
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
```

## Routing system

## Articles

### Lazy loading

https://angular.io/guide/lazy-loading-ngmodules

https://www.9lessons.info/2019/05/angular-routing-with-lazy-loading.html
