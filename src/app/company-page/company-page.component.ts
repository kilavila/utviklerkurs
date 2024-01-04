import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { TechTypeitComponent } from '../tech-typeit/tech-typeit.component';

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    TechTypeitComponent,
  ],
  templateUrl: './company-page.component.html',
  styleUrl: './company-page.component.scss'
})
export class CompanyPageComponent {

  thematicContent: ThematicContent[] = [
    {
      theme: 'FRONTEND-UTVIKLING',
      tech: 'Ferdigheter i HTML5, CSS3, JavaScript, Responsive design',
    },
    {
      theme: 'BACKEND-UTVIKLING',
      tech: 'JSON-server, samt bruk av node.js',
    },
    {
      theme: 'PROGRAMMERING',
      tech: 'Fordypning i React eller Python',
    },
    {
      theme: 'DATABASE',
      tech: 'Innføring i bruk av JSON, SQL og NoSQL (MongoDB)',
    },
    {
      theme: 'VERKTØY',
      tech: 'IDE: VS Code, Versjonskontroll: Git/GitHub',
    },
    {
      theme: 'SIKKERHET',
      tech: 'Grunnleggende kurs innen informasjonssikkerhet',
    },
    {
      theme: 'METODIKK',
      tech: 'Innføring i systemutvikling (agile metoder)',
    },
  ];

  basicSkills: string[] = [
    'Sette opp enkle nettsider ved bruk av HTML og CSS.',
    'Sette opp mer avanserte nettsider og webapplikasjon med Javascript.',
    'Forstå sammenhengen mellom HTML, CSS og Javascript, samt lære hvordan de best utfyller og komplimenterer hverandre.',
    'Hvordan bruke editorer på en effektiv måte, samt installere effektive og nødvendige plug-ins.',
    'Hvordan finne effektive online verktøy og ressurser som kan brukes opp imot utvikling av nettsider.',
    'Hvordan sette opp et prosjekt og drive med agile systemutvikling.',
    'Samarbeid over Github eller Gitlab, samt hvordan koble disse systemene opp imot editoren.',
  ];

  specificSkills: string[] = [
    'Lære å bruke SQL-språket til å hente ut, opprette og endre data i Databaser.',
    'Lære Pythons syntax og kunne bruke språket til å utvikle programvare.',
    'Lære å bruke Javascript biblioteket React til å utvikle webapplikasjoner.',
    'Lære prinsippene bak å produsere produkter med hensyn til design og brukeropplvelser.',
    'Lære å bruke Photoshop, Lightroom og lignende program for å kunne skape grafiske produkter som brukes til nettsider.',
    'Lære å implimentere Google Ads og Facebook ads på nettsider, samt prinsippene for å oppnå en effektig og god digital markedsføring.',
  ];

}

interface ThematicContent {
  theme: string;
  tech: string;
}
