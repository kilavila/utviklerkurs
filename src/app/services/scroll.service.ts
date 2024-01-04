import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  getDocumentHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  amountscrolled(): number {
    let windowHeight = window.innerHeight ||
      (
        document.documentElement ||
          document.body
      ).clientHeight;

    let scrollTop = window.pageYOffset ||
      (
        document.documentElement ||
          document.body.parentNode ||
          document.body
      ).scrollTop;

    let documentHeight = this.getDocumentHeight();
    let trackLength = documentHeight - windowHeight;

    return Math.floor(scrollTop / trackLength * 100);
  }

}
