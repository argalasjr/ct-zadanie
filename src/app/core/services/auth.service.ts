import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public login(status: boolean): void {
    localStorage.setItem('login', JSON.stringify(status));
  }

  public isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem('login'));
  }

  public logout(): void {
    localStorage.clear();
  }
}
