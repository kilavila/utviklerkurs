import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ServicesBannerComponent } from '../services-banner/services-banner.component';
import { SliderComponent } from '../slider/slider.component';
import { TypeItService } from '../services/type-it.service';
import { MapComponent } from '../map/map.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    ServicesBannerComponent,
    SliderComponent,
    RouterModule,
    ContactComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  loading: boolean = true;

  courses = [
    {
      date: 'Mars 2024',
      status: 'Fulltegnet',
      full: true,
    },
    {
      date: 'August 2024',
      status: 'Ledige plasser',
      full: false,
    },
  ];

  constructor(
    private viewportScroller: ViewportScroller,
    private typeit: TypeItService,
  ) { }

  ngAfterViewInit(): void {
    this.typeit.run('#pageTitle', 'ALF Utviklerkurs');
  }

  scrollTo(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
