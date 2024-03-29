import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplicantPageComponent } from './applicant-page/applicant-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { LoginComponent } from './login/login.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { PortalComponent } from './portal/portal.component';
import { AuthGuard } from './portal/auth.guard';
import { ProfileComponent } from './portal/profile/profile.component';
import { DashboardComponent } from './portal/dashboard/dashboard.component';
import { FilesComponent } from './portal/files/files.component';

export const routes: Routes = [
  // INFO: Landing page
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },

  // INFO: Sub-pages
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

  // INFO: Portal pages
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/portal/oversikt',
        pathMatch: 'full',
      },
      {
        path: 'oversikt',
        component: DashboardComponent,
      },
      {
        path: 'profil',
        component: ProfileComponent,
      },
      {
        path: 'kursfiler',
        component: FilesComponent,
      },
    ],
  },

  // INFO: Error pages & wildcard
  {
    path: '404-side-ikke-funnet',
    component: Error404PageComponent,
  },
  {
    path: '**',
    redirectTo: '/404-side-ikke-funnet',
    pathMatch: 'full',
  }
];
