import { AfterViewInit, Component } from '@angular/core';
import { TypeItService } from '../services/type-it.service';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.scss'
})
export class NavPageComponent implements AfterViewInit {

  constructor(
    private typeit: TypeItService,
  ) { }

  ngAfterViewInit(): void {
    new this.typeit.build('#subjects', {
      speed: 50,
      loop: true,
    })
      .pause(1250)
      .type('JavaScript')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Databaser')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Python')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('React')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('PHP')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('HTML')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('CSS')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('UI/UX-Design')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Git/GitHub')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('VS Code')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('NodeJS')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('NPM/Yarn')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('MongoDB')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Mongoose')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('MySQL')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('PostgreSQL')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('SQLite')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('ExpressJS')
      .pause(2000)
      .delete(null)
      .pause(500)
      .go();
  }
}
