import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

export const PublicRoutesNames = {
  HOME: 'home',
};


const routes: Routes = [
  // { 
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     { path: PublicRoutesNames.HOME, loadChildren: 'app/public/home/home.module#HomeModule' }
  //   ]
  // },
  { path: PublicRoutesNames.HOME, loadChildren: (): any => import('./home/home.module').then(m => m.HomeModule) },
];

export const PublicRoutes = RouterModule.forChild(routes);
