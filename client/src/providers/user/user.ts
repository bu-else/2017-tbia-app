import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class User {
  _user: any;
  _session: any;
  _authHeader: any;
  // _cookie: any;

  constructor(public api: Api) { }

  /**
   * @function {login}
   * @param  {Object} accountInfo: any {}
   * @return {void} {send a POST request to the login endpoint with the data the user entered on the form}
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      observe: "response"
    }).share();

    seq.subscribe((res: any) => {
      this._user = res.body.user;
      this._session = res.body.session;
      this._authHeader = res.body.authHeader;
    }, (err) => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * @function {signup}
   * @param  {Object} accountInfo: any {}
   * @return {void} {send a POST request to the signup endpoint with the data the user entered on the form}
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      observe: "response"
    }).share();

    seq.subscribe((res: any) => {
      this._user = res.body.user;
      this._session = res.body.session;
      this._authHeader = res.body.authHeader;
    }, (err) => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * @function {logout}
   * @return {void} {Log the user out and forgets the session}
   */
  logout() {
    this._user = null;
    this._session = null;
    this._authHeader = null;
  }
}
