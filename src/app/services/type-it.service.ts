import { Injectable } from '@angular/core';

declare let TypeIt: any;

@Injectable({
  providedIn: 'root'
})
export class TypeItService {

  constructor() {}

  run(selector: string, text: string): void {
    const instance = new TypeIt(selector, {
      speed: 100,
      afterComplete: () => {
        instance.destroy();
      },
    })
      .type(text)
      .go();
  }

}
