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

  constructor() { }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event) {
  //   this.scrollbarHeight = this.amountscrolled();
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.pageHeight = this.getDocHeight();
  // }

  ngOnInit() {
    // this.pageHeight = this.getDocHeight();
  }



}
