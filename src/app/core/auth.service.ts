import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;

  constructor(private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = localStorage.getItem('demo_login_status')
      ? true
      : false;
  }

  signin(credentials: { email: String; password: String }) {
    let isAuth = { email: 'test@example.com', password: '1234' };
    if (
      isAuth.email == credentials.email &&
      isAuth.password == credentials.password
    ) {
      this.authenticated = true;
      localStorage.setItem('demo_login_status', 'true');
      return of({}).pipe(delay(1000));
    }
    return isAuth.email != credentials.email
      ? throwError('invalidEmail')
      : throwError('invalidPassword');
  }
}
