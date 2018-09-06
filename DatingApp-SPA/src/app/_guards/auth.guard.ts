import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private aleartify: AlertifyService) {
  }
  canActivate(): | boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.aleartify.error('Unauthorized access');
    this.router.navigate(['/home']);
    return false;
  }
}