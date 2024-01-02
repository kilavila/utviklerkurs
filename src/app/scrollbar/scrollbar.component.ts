import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './scrollbar.component.html',
  styleUrl: './scrollbar.component.scss'
})
export class ScrollbarComponent implements OnInit {

  pageHeight: number = 0;
  scrollbarHeight: number = 0;

  constructor(
    private viewportScroller: ViewportScroller,
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollbarHeight = this.amountscrolled();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.pageHeight = this.getDocHeight();
  }

  ngOnInit() {
    this.pageHeight = this.getDocHeight();
  }

  getDocHeight(): number {
    let D = document;

    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
    );
  }

  amountscrolled(): number {
    let winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    let docheight = this.getDocHeight();
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let trackLength = docheight - winheight;

    return Math.floor(scrollTop / trackLength * 100);
  }

}
