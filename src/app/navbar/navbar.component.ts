import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  darkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.checkDarkMode();
  }

  checkDarkMode() {
    const theme = localStorage.getItem('utviklerkurs-theme');
    if (theme === 'dark') {
      this.darkMode = true;
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    localStorage.setItem('utviklerkurs-theme', this.darkMode ? 'dark' : 'light');
  }

}
