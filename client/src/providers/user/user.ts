import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) { }

  /**
   * @function {login}
   * @param  {Object} accountInfo: any {}
   * @return {void} {send a POST request to the login endpoint with the data the user entered on the form}
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).share();

    seq.subscribe((res: any) => {
      this._user = res.user;
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
    console.log(accountInfo);
    let seq = this.api.post('signup', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).share();

    seq.subscribe((res: any) => {
      this._user = res.user;
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
  }
}
