import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: string[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      const url = this.router.url
        .substring(1)
        .split('/');

      url[0] !== ''
        ? this.breadcrumbs = url
        : this.breadcrumbs = [];
    });
  }

}
