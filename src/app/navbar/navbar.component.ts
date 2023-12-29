import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { MenuDrawerComponent } from '../menu-drawer/menu-drawer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    BreadcrumbsComponent,
    MenuDrawerComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Output() toggleSearchEmitter = new EventEmitter<any>();

  menuOpen: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // INFO: Listen for router events and close menu if open
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if (this.menuOpen) {
        this.menuOpen = false;
      }
    });

  }

  toggleSearchModal() {
    this.toggleSearchEmitter.emit();
  }

}
