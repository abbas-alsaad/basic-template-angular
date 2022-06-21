import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  /**
   * @description : to check if user is authenticated
   * @date : 21/6/2021
   * @by : Abbas Al-saad
   */
  canActivate() {
    if (this.auth.authenticated) {
      return true;
    } else {
      return this.router.navigateByUrl('/sessions/signin');
    }
  }
}
