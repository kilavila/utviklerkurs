import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      // INFO: If authenticated, allow access
      return true;
    } else {
      // INFO: If not authenticated, redirect to login
      this.router.navigate(['/innlogging']);
      return false;
    }
  }
}
