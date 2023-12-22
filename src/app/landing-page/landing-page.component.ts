import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesBannerComponent } from '../services-banner/services-banner.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    ServicesBannerComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  loading: boolean = true;

  constructor() { }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.loading = false
    // }, 2000);
  }

}
