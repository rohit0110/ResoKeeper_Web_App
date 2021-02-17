import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';
import jwt_decode, { JwtPayload } from "jwt-decode";

interface TokenValue{
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  get isLoggedIn() {
    //Better to use observable because it automatically detects change in other parts of the code
    return localStorage['user'];
  }

  constructor(private router: Router, private server: ServerService) { 
    console.log('auth service');
    const token = localStorage.getItem('user');
    if(token) {
      this.server.setLoggedIn(true,token);
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
          localStorage.setItem('user',this.token);
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

  getUsername() {
    let username: string;
    let token = localStorage.getItem('user')!;
    let decoded = jwt_decode<TokenValue>(token);
    username = decoded.username;
    return username;
  }
}
