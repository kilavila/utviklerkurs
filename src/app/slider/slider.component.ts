import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {

  slides: Slide[] = [
    {
      icon: 'person',
      title: 'Interessert i utvikling?',
      description: `Både næringslivet og offentlige tjenester har i dag et uvanlig stort behov for IT-kompetanse innen de fleste sektorer. Ifølge Nav's bedriftsundersøkelse (2020) var det 3.250 ubesatte IT-stillinger i Norge, og innen 2030 er det estimert et behov for opp mot 40.000 nye arbeidstakere med IT-kompetanse, for å støtte Norges teknologiske utvikling.`,
      image: 'ux-store-jJT2r2n7lYA-unsplash',
      button: {
        text: 'Les mer',
        href: '/deltaker',
        class: 'btn-info text-info-content',
      },
    },
    {
      icon: 'domain',
      title: 'Ansette medarbeider?',
      description: 'Utviklerkurset fokuserer på å lære deltakerne det mest etterspurte, framtidsrettede og moderne innen programutvikling i dag. Kurset dekker både grunnleggende ferdigheter, men tilpasses også etter det næringslivet etterspør av aktuelle tema og teknologier.',
      image: 'rodeo-project-management-software--f0SlS5MYnI-unsplash',
      button: {
        text: 'Les mer',
        href: '/bedrift',
        class: 'btn-accent text-accent-content',
      },
    },
    {
      icon: 'diversity_3',
      title: 'Vi samarbeider!',
      description: 'Det er vitkig for oss at deltakerne får den informasjonen de trenger for å ta en avgjørelse på om de ønsker å begynne på utviklerkurset eller på avdelingen. Vi inviterer dere derfor gjerne til et uforpliktene møte sammen med deltaker for å fortelle om tiltaket vårt og gi dere en omvisning i våre lokaler.',
      image: 'louise-viallesoubranne-5EhN4wbfvBc-unsplash',
      button: {
        text: 'Les mer',
        href: '/nav',
        class: 'btn-error text-error-content',
      },
    }
  ]

  constructor() { }

  ngAfterViewInit(): void {
    new Splide('#slider', {
      type: 'slide',
      autoplay: false,
      perPage: 3,
      gap: '4px',
      rewind: false,
      rewindByDrag: false,
      drag: false,
      pagination: false,
      classes: {
        arrows: 'hidden',
        arrow: 'hidden',
        prev: 'hidden',
        next: 'hidden',
      },
      breakpoints: {
        1500: {
          perPage: 2,
          rewindByDrag: true,
          rewind: true,
          drag: true,
          classes: {
            arrows: 'splide__arrows slider-arrows',
            arrow: 'splide__arrow slider-arrow',
            prev: 'splide__arrow--prev slider-arrow-prev',
            next: 'splide__arrow--next slider-arrow-next',
          },
        },
        1024: {
          perPage: 1,
        },
      },
    }).mount();
  }

}

interface Slide {
  icon: string;
  title: string;
  description: string;
  image: string;
  button?: {
    text: string;
    href: string;
    class: string;
  }
}
