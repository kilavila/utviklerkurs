import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

import { ServicesBannerComponent } from '../services-banner/services-banner.component';
import { SliderComponent } from '../slider/slider.component';
import { RouterModule } from '@angular/router';

declare let TypeIt: any;

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
    private viewportScroller: ViewportScroller,
  ) { }

  ngAfterViewInit(): void {
    const instance = new TypeIt('#typeitPageTitle', {
      speed: 100,
      afterComplete: () => {
        instance.destroy();
      },
    })
      .type('Senter for')
      .pause(1000)
      .delete(null, { instant: false, })
      .type('ALF')
      .pause(200)
      .move(-2)
      .type('rbeids')
      .pause(100)
      .move(1)
      .type('ivs')
      .pause(100)
      .move(1)
      .type('orberedelse')
      .pause(1500)
      .delete(null, { speed: 50, })
      .type('Utviklerkurs', { instant: false, })
      .go();
  }

  scrollTo(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
