import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  @Input() searchOpen: boolean = false;
  @Output() toggleSearchEmitter = new EventEmitter();

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // If keypress CTRL+K then toggle search
    if (event.ctrlKey && event.key === 'm') {
      this.toggleSearch();
    }
  }

  constructor() {}

  ngOnInit(): void {}

  toggleSearch() {
    this.toggleSearchEmitter.emit();
  }

}
