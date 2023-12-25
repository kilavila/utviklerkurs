import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    BreadcrumbsComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Output() toggleSearchEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toggleSearchModal() {
    this.toggleSearchEmitter.emit();
  }

}
