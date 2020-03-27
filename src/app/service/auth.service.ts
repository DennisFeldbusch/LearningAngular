import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ResponseBody} from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: string;
  public password: string;
  public accesstoken: string;

  private tokenStr = 'token';
  private authStr = 'Authorization';

  private jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient) {

  }


  /**
   * Method to send a POST request
   * Params: Username && Password
   */
  authenticationService(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': this.authStr
      }),
      // to get the hole response
      // observe: 'response' as 'body'
  };

    return this.http.post('http://www.mocky.io/v2/5e7e058c300000e0134af8a3', JSON.stringify({ username, password }), httpOptions)
      .pipe(map((resp: ResponseBody) => {
        // local vs session: https://stackoverflow.com/a/5523174
        // get token and expiration Date
        this.accesstoken = resp.Authorization;
        // store token and expiration Date in local storage
        localStorage.setItem(this.tokenStr, resp.Authorization);
      }));
  }

  /**
   * remove token and expiration Date from local storage
   */
  logout() {
    localStorage.removeItem(this.tokenStr);
  }


  /**
   * Method to check if the user is logged in
   */
  isUserLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenStr);

    if (token === null || this.jwtHelper.isTokenExpired(token) ) {
      this.logout();
      // NO token in locale store => NOT LOGGED IN
      return false;
    } else {
      // token in locale store => LOGGED IN
      return true;
    }

  }

}
