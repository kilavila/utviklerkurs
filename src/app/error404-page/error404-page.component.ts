import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypeItService } from '../services/type-it.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-error404-page',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './error404-page.component.html',
  styleUrl: './error404-page.component.scss'
})
export class Error404PageComponent implements AfterViewInit {

  constructor(
    private typeit: TypeItService,
    public rs: RouterService,
  ) {}

  ngAfterViewInit(): void {
    this.typeit.run('#errorTitle', ' - Siden ble ikke funnet');
  }

  contactUs(path: string, selector: string): void {
    this.rs.navigate(path, selector);
  }

}
