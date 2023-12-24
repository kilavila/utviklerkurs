import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplicantPageComponent } from './applicant-page/applicant-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404PageComponent } from './error404-page/error404-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },

  {
    path: 'deltaker',
    component: ApplicantPageComponent,
  },
  {
    path: 'bedrift',
    component: CompanyPageComponent,
  },
  {
    path: 'nav',
    component: NavPageComponent,
  },
  {
    path: 'innlogging',
    component: LoginComponent,
  },
  {
    path: 'portal',
    component: DashboardComponent,
  },
  {
    path: '404',
    component: Error404PageComponent,
  },

  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  }
];
