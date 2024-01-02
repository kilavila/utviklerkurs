import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  element: string = '';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) { }

  navigate(path: string, selector: string) {
    this.element = selector;
    this.router.navigate([path]);
  }

  viewportScrollChecker(): void {
    if (this.element.length > 0) {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(this.element);
        this.element = '';
      }, 500);
    } else {
      window.scrollTo(0, 0);
    }
  }

}
