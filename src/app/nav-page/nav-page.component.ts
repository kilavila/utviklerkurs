import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { TechTypeitComponent } from '../tech-typeit/tech-typeit.component';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    TechTypeitComponent,
  ],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.scss'
})
export class NavPageComponent {

  aftInfo: string[] = [
    'AFT-tiltaket kan ha en varighet på inntil 1 år',
    'Utviklerkurset varer i 4 måneder',
    'Arbeidstid på kurset er 3 dager uken á 5 timer - kl. 09:00-14:00',
    'Arbeidsdagen består typisk av 1-2 timer undervisning og gjennomgang av oppgaver. Deretter jobber deltakerne resten av dagen med praktiske programmeringsoppgaver under veiledning av kursleder.',
    'I etterkant av fullført Utviklerkurs er planen et praksisopphold i ekstern bedrift. Der lærer deltakerne mer om samarbeid, og utvikler sin faglige kompetanse under oppfølging av praksisansvarlig på praksisplassen. En praksiperiode har en minimum varighet på en måned, men innen IT-utvikling er 3-6 mnd mer vanlig',
    'Det tilbys også en del andre kurs når man er i AFT-tiltaket. Fra andre IT-relaterte kurs som Digital Markedsføring, til kurs som dekker sosialfaglige emner som ADHD, Tankevirus og JobbFokus. I tillegg blir karrierverktøyet InFlow24 benyttet, og det øves på skriving av søknader samt CV.',
  ];

  courseContent: string[] = [
    'Oppbygging av nettsider',
    'Tilkobling til eksterne datakilder (databaser) via API',
    'Prosjektarbeid',
    'UI/UX-design av webløsninger',
    'Dynamiske nettsider med skript',
    'Programmering',
    'Bruke ulike utvikler-verktøy',
    'Lære arbeidsmetoder for utvikling',
    'Gjennomgang av sikkerhetsprinsipper innen IT', 
    'Bruk av KI i arbeidet som IT-utvikler',
    'Opplæring i bruk av versjonskontrollsystemet Git & GitHub'
  ];

  additionalContent: string[] = [
    'Digital markedsføring',
    'Grafisk design',
    'Produkt design',
    'Generell IT',
  ];

  requiredContent: string[] = [
    'Sette opp CV og åpen søknad tilpasset IT-stillinger.',
    'Sette opp enkle nettsider ved bruk av HTML og CSS.',
    'Sette opp webapplikasjon med Javascript.',
    'Lage programvare med programmeringsspråket React eller Python',
    'Hvordan bruke utvikler-verktøy for å skape gode og fungerbare produkt',
    'Hvordan sette opp et prosjekt og drive med Agile systemutvikling.',
    'Samarbeid igjennom kjente utvikler-verktøy',
  ];

}






