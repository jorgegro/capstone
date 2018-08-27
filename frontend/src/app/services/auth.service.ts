import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authToken: any;
  user: any;
  post: any;

  constructor(private jwtHelper: JwtHelperService, private _http:HttpClient) { 
    this.loadToken();
  }

  newPost(post) : Observable<any>{
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/posts/new', post);
  }

  //Use

  registerUser(user) : Observable<any>{
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/users/register', user);
  }

  authenticateUser(user): Observable<any> {
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/users/authenticate', user);
  }

  getProfile() : Observable<any> {
    //let headers = new Headers();
    //this.loadToken();
    //headers.append('Authorization', this.authToken);
    //headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/users/profile');
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getToken(){
    return this.authToken;
  }

  loggedIn(){

    if (localStorage['id_token'] == undefined ){
     return false;
    } else {
  const helper = new JwtHelperService(); 
    return !helper.isTokenExpired(localStorage['id_token']);
    }
   }


  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
