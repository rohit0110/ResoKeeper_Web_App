import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService) { 
    console.log('auth service');
    const userData = localStorage.getItem('user');
    if(userData) {
      console.log('Logged In from memory');
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  login(user: any) {
    if(user.username !== '' && user.password !== '') {
      return this.server.request('POST', '/log_in_form', {
        username: user.username,
        password: user.password
      }).subscribe((response: any) => {
        if(response.auth && response.token !== undefined) {
          this.token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigateByUrl('/profile');
        }
      });
      
    }
    else {
      return ;
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    this.token = "";
    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
