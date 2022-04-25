import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentPage: string = 'home';

  constructor() { }

  navigate(page: string): void {
    this.currentPage = page;
  }

}
