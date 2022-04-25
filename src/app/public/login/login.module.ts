import { PublicModule } from './../public.module';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    PublicModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
