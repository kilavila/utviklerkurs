import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ServicesBannerComponent } from '../services-banner/services-banner.component';
import { SliderComponent } from '../slider/slider.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    ServicesBannerComponent,
    SliderComponent,
    RouterModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  loading: boolean = true;

  constructor(
    private viewportScroller: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
  }

  scrollTo(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
