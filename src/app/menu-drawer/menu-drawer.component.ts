import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-drawer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './menu-drawer.component.html',
  styleUrl: './menu-drawer.component.scss'
})
export class MenuDrawerComponent implements OnInit {

  @Input() menuOpen: boolean = false;

  menuItems: MenuItem[] = [
    {
      icon: 'home_app_logo',
      text: 'Hjem',
      href: '/',
    },
    {
      icon: 'person',
      text: 'Deltaker',
      href: '/deltaker',
    },
    {
      icon: 'domain',
      text: 'Bedrift',
      href: '/bedrift',
    },
    {
      icon: 'diversity_3',
      text: 'NAV',
      href: '/nav',
    },
  ];

  links: Link[] = [
    {
      text: 'For arbeidssøkere',
      href: 'https://alf.no/for-arbeidssokere/',
    },
    {
      text: 'For arbeidsgivere',
      href: 'https://alf.no/for-arbeidsgivere/',
    },
    {
      text: 'For samarbeidspartnere',
      href: 'https://alf.no/for-samarbeidspartnere/',
    },
    {
      text: 'Kontakt oss',
      href: 'https://alf.no/kontakt/',
    },
    {
      text: 'Om oss',
      href: 'https://alf.no/om-oss/',
    },
    {
      text: 'Ressurser',
      href: 'https://alf.no/ressurser/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}

interface MenuItem {
  icon: string;
  text: string;
  href: string;
}

interface Link {
  text: string;
  href: string;
}
