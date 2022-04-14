import { PublicModule } from './../public.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    PublicModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
