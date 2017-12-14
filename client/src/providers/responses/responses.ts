import { HttpClient } from '@angular/common/http';
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
  }

  updateResponses(json) {
    this.responses.push(json);
  }
}
