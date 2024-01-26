import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent implements OnInit {

  bottomNav: boolean = false;

  menuItems: MenuItem[] = [
    {
      icon: 'overview_key',
      name: 'Oversikt',
      path: '/portal/oversikt'
    },
    {
      icon: 'person',
      name: 'Profil',
      path: '/portal/profil'
    },
    {
      icon: 'folder_open',
      name: 'Kursfiler',
      path: '/portal/kursfiler'
    },
    {
      icon: 'more_horiz',
      name: 'Mer',
      path: '/portal/mer'
    },
  ];

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      const url = this.router.url
        .substring(1)
        .split('/')[0]

      url === 'portal'
        ? this.bottomNav = true
        : this.bottomNav = false;
    });
  }

  portalNav(path: string): void {
    this.router.navigate([{
      outlets: {
        sidebar: [path]
      }
    }]);
  }

}

interface MenuItem {
  icon: string;
  name: string;
  path: string;
}
