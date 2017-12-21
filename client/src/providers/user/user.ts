import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { HttpHeaders } from '@angular/common/http';

/**
 * This is a User provider with stubs for login/signup/logout.
 */
@Injectable()
export class User {
  _user: any;
  _session: any;
  _authHeader: any;

  constructor(public api: Api) { }

  /**
   * @function {login}
   * @param  {Object} accountInfo: any {}
   * @return {} {send a POST request to the login endpoint with the data the user entered on the form}
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      observe: 'response'
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
   * @return {} {send a POST request to the signup endpoint with the data the user entered on the form}
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
   * @return {} {Log the user out and forgets the session}
   */
  logout() {
    let seq = this.api.delete('logout', {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    }).share();
    
    seq.subscribe((res: any) => {
      console.log('SUCCESS');
    } ,(err) => {
      console.log('ERROR', err);
    });
    
    this._user = null;
    this._session = null;
    this._authHeader = null;

    return seq;
  }

  /**
   * @function {updateProfile}
   * @param {Object} PatientInfo: any {}
   * @return {} {Update patient info}
   */
  submitProfile(patientInfo: any) {
    let profile = {
      "userID": this._user._id,
      "patient_info": patientInfo
    }
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let params = new URLSearchParams();
    params.append('userID', this._user._id);
    params.append('patient_info', JSON.stringify(profile));

    let seq = this.api.post('update_patient_info', params.toString(), { headers: headers }).share();
    return seq;
  }
}
