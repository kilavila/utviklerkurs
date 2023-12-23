import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {

  slides: Slide[] = [
    {
      icon: 'person',
      title: 'Ønske om å bli utvikler?',
      description: `Både næringslivet og offentlige tjenester har i dag et uvanlig stort behov for IT-kompetanse innen de fleste sektorer. Ifølge Nav's bedriftsundersøkelse (2020) var det 3.250 ubesatte IT-stillinger i Norge, og innen 2030 er det estimert et behov for opp mot 40.000 nye arbeidstakere med IT-kompetanse, for å støtte Norges teknologiske utvikling.`,
      image: 'https://picsum.photos/800/400?random=1',
      button: {
        text: 'Les mer',
        href: '/kurs-informasjon'
      },
    },
    {
      icon: 'domain',
      title: 'Ansette medarbeider?',
      description: 'Utviklerkurset fokuserer på å lære deltakerne det mest etterspurte, framtidsrettede og moderne innen programutvikling i dag. Kurset dekker både grunnleggende ferdigheter, men tilpasses også etter det næringslivet etterspør av aktuelle tema og teknologier.',
      image: 'https://picsum.photos/800/400?random=2',
      button: {
        text: 'Les mer',
        href: '/bedrift'
      },
    },
    {
      icon: 'diversity_3',
      title: 'Samarbeid med NAV',
      description: 'Det er vitkig for oss at deltakerne får den informasjonen de trenger for å ta en avgjørelse på om de ønsker å begynne på utviklerkurset eller på avdelingen. Vi inviterer dere derfor gjerne til et uforpliktene møte sammen med deltaker for å fortelle om tiltaket vårt og gi dere en omvisning i våre lokaler.',
      image: 'https://picsum.photos/800/400?random=3',
      button: {
        text: 'Les mer',
        href: '/nav'
      },
    }
  ]

  constructor() { }

  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'slide',
      autoplay: false,
      interval: 5000,
      perPage: 3,
      rewind: true,
      pagination: false,
      breakpoints: {
        1500: {
          perPage: 2,
        },
        1024: {
          perPage: 1,
        },
      },
      classes: {
        arrows: 'splide__arrows slider-arrows',
        arrow: 'splide__arrow slider-arrow',
        prev: 'splide__arrow--prev slider-arrow-prev',
        next: 'splide__arrow--next slider-arrow-next',
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
  }
}
