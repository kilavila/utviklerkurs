import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
export class MenuDrawerComponent {

  @Input() menuOpen: boolean = false;

}
