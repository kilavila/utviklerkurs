import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-services-banner',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './services-banner.component.html',
  styleUrl: './services-banner.component.scss'
})
export class ServicesBannerComponent implements AfterViewInit {

  technologies: Tech[] = [
    // {
    //   name: 'Visual Studio Code',
    //   image: '',
    // },
    {
      name: 'React',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
    },
    {
      name: 'JavaScript',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
    },
    {
      name: 'HTML',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
    },
    {
      name: 'CSS',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
    },
    // {
    //   name: 'Git',
    //   image: '',
    // },
    // {
    //   name: 'GitHub',
    //   image: '',
    // },
    // {
    //   name: 'Python',
    //   image: '',
    // },
    {
      name: 'Express',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg',
    },
    {
      name: 'MongoDB',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
    },
    {
      name: 'MySQL',
      image: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
    },
  ];

  constructor() { }

  ngAfterViewInit(): void {
    new Splide('#tech-roller', {
      type: 'loop',
      autoplay: true,
      interval: 5000,
      speed: 5000,
      easing: 'linear',
      perPage: 7,
      perMove: 1,
      rewind: false,
      rewindByDrag: false,
      pagination: false,
      classes: {
        arrows: 'hidden',
        arrow: 'hidden',
        prev: 'hidden',
        next: 'hidden',
      },
      breakpoints: {
        1500: {
          perPage: 6,
        },
        1024: {
          perPage: 5,
        },
        767: {
          perPage: 4,
        },
        500: {
          perPage: 3,
        },
      },
    }).mount();
  }

}

interface Tech {
  name: string;
  image: string;
}
