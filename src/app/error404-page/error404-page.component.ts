import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error404-page',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './error404-page.component.html',
  styleUrl: './error404-page.component.scss'
})
export class Error404PageComponent {

  breadcrumbs = {
    background: 'bg-base-200',
    color: 'text-base-content',
    paths: [
      {
        icon: 'arrow-right',
        name: 'Error 404',
      },
    ],
  }

}
