import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ServicesBannerComponent } from '../services-banner/services-banner.component';
import { SliderComponent } from '../slider/slider.component';
import { TypeItService } from '../services/type-it.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    ServicesBannerComponent,
    SliderComponent,
    RouterModule,
    MapComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  loading: boolean = true;

  constructor(
    private viewportScroller: ViewportScroller,
    private typeit: TypeItService,
  ) { }

  ngAfterViewInit(): void {
    this.typeit.run('#pageTitle', 'Utviklerkurs');
  }

  scrollTo(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
