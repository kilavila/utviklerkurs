import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment as env } from '../constants';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  public login(loginForm: { email: string, password: string }): void {
    // TODO: Change post to get and status code to 200
    axios.post(`${env.url}/auth/login`, loginForm)
      .then(res => {
        if (res.status === 201) {
          localStorage.setItem('alf_jwt', res.data.access_token);
          this.router.navigate(['/portal']);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // TODO: Check token validity
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('alf_jwt');
    // Check token
    if (token) {
      return true;
    }
    return false;
  }

}
