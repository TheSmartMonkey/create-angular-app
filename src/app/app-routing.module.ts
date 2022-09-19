import { AdminRoutingModule } from './admin/admin-routing.module';
import { ProtectedRoutingModule } from './protected/protected-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [AdminRoutingModule, ProtectedRoutingModule, PublicRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
