import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Api } from '../api/api';

/*
  Generated class for the ResponsesProvider provider.
  This is used for storing assessment results.
*/
@Injectable()
export class ResponsesProvider {
  /**
   * Initialization
   */
  private responses: any[];

  constructor(public http: HttpClient, public user: User, public api: Api) {
  }

  clearResponses() {
    this.responses = [];
  }

  postResponses() {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let params = new URLSearchParams();
    params.append('userID', this.user._user._id);
    params.append('assessment_result', JSON.stringify(this.responses));

    this.api.post('responses', params.toString(), { headers: headers }).subscribe((res: any) => {
      console.log('SUCCESS', res);
    }, (err) => {
      console.log('ERROR', err);
    });
  }

  updateResponses(json) {
    this.responses.push(json);
  }
}
