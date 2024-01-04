import { AfterViewInit, Component } from '@angular/core';
import { TypeItService } from '../services/type-it.service';

@Component({
  selector: 'app-tech-typeit',
  standalone: true,
  imports: [],
  templateUrl: './tech-typeit.component.html',
  styleUrl: './tech-typeit.component.scss'
})
export class TechTypeitComponent implements AfterViewInit {

  constructor(
    private typeit: TypeItService,
  ) {}

  ngAfterViewInit(): void {
    new this.typeit.build('#subjects', {
      speed: 50,
      loop: true,
    })
      .pause(1250)
      .type('HTML5')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('CSS3')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('JavaScript')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('React')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Python')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('node.js')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('JSON')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Git')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('VS Code')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('KI')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('HTML5')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('CSS3')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('JavaScript')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('React')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Python')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('node.js')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('JSON')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('Git')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('VS Code')
      .pause(2000)
      .delete(null)
      .pause(500)
      .type('KI')
      .pause(2000)
      .delete(null)
      .pause(500)
      .go();
  }

}






