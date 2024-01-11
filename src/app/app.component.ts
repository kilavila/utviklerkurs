import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { RouterService } from './services/router.service';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ScrollTopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  searchModalOpen: boolean = false;

  constructor(
    private router: Router,
    private viewPortScroller: ViewportScroller,
    public rs: RouterService,
  ) { }

  ngOnInit(): void {
    // INFO: Listen for router events and scroll to top
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      this.rs.viewportScrollChecker();
    });

    // INFO: Set scroll offset for sticky navbar
    this.viewPortScroller.setOffset([0, 64]);
  }

  toggleSiteSearch(): void {
    this.searchModalOpen = !this.searchModalOpen;
  }

}
