import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentPage: string = '/home';
  navigationSubscription: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navigationSubscription = this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentPage = route.url;
      }
    });
  }

  navigate(page: string): void {
    this.currentPage = page;
  }

  ngOnDestroy(): void {
    this.navigationSubscription?.unsubscribe();
  }
}
