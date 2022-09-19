import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [NavbarComponent, PageNotFoundComponent],
})
export class CoreModule {}
