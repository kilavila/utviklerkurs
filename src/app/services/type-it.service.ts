import { Injectable } from '@angular/core';

declare let TypeIt: any;

@Injectable({
  providedIn: 'root'
})
export class TypeItService {

  build: any = TypeIt;

  constructor() {}

  run(selector: string, text: string, speed?: number): void {
    let typeSpeed: number = 100;

    speed ? typeSpeed = speed : null

    const instance = new TypeIt(selector, {
      speed: typeSpeed,
      afterComplete: () => {
        instance.destroy();
      },
    })
      .pause(1250)
      .type(text)
      .pause(1250)
      .go();
  }

}
