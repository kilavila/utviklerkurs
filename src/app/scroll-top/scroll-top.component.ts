import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent implements AfterViewInit {

  scrollPercent: number = 0;

  constructor(
    private scrollService: ScrollService,
  ) { }

  ngAfterViewInit(): void {
    this.scrollPercent = this.scrollService.amountscrolled();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollPercent = this.scrollService.amountscrolled();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.scrollPercent = this.scrollService.amountscrolled();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
