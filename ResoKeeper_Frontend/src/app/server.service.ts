import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';
//STORE JWT TOKEN AND ADD TO HEADER 
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private loggedIn = false;
  private token: string;
  constructor(private http: HttpClient) { }

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token!;
  }

  request(method: string, route:string, data?: any) {
    if(method === 'GET') {
      return this.get(route, data);
    }
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append( "Authorization", `Bearer ${this.token}`);
    return this.http.post(baseUrl+route, JSON.stringify(data), {headers: headers})
  }

  get(route: string, data?:any) {
    let headers = new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization", `Bearer ${this.token}`);
    let params = new HttpParams();
    if(data!==undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }
    return this.http.get(baseUrl + route, {responseType: 'json',headers: headers, params: params});
  }
}
