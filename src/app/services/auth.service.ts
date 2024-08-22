import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(email: string, password: string): Observable<boolean> {
    let body = {
      "email": email,
      "password": password
    };
    this.loggedIn = true;
    console.log('loggedIn', this.loggedIn);
    console.log('body', body);
    // You might store the login state in localStorage or as a token
    return of(true); // Return an Observable with a boolean value
  }

  logout() {
    this.loggedIn = false;
    console.log('loggedIn', this.loggedIn);
    // Clear any stored login state
    window.location.href = '/';
  }

  isAuthenticated(): boolean {
    console.log('loggedIn', this.loggedIn);
    return this.loggedIn;

  }
}
