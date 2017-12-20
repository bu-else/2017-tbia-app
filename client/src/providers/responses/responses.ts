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
  private summary: any;

  constructor(public http: HttpClient, public user: User, public api: Api) {
  }

  /**
   * @function {clearResponses}
   * @return {void} {clear responses}
   */
  clearResponses() {
    this.responses = [];
  }

  /**
   * @function {postResponses}
   * @return {void} {send responses to the server}
   */
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

    this.summary = this.evaluation();
  }

  /**
   * @function {function name}
   * @param  {Object} json {user's answer to current assessment}
   * @return {void} {append json to responses}
   */
  updateResponses(json) {
    this.responses.push(json);
  }

  evaluation() {
    let assessment_responses = this.responses.reduce(function(assessment_responses, response) {
      if (response.title != "Survey") {
        assessment_responses.push(response.properties);
      }
      return assessment_responses;
    }, []);
    let questions = assessment_responses.reduce(function(a, b) {
      return a.concat(b);
    }, []);

    let total_questions_count = questions.length;
    let correct_questions_count = questions.reduce(function(count, question) {
      if (question.correct) count += 1;
      return count;
    }, 0);
    let percentage_correct = (correct_questions_count / total_questions_count * 100).toFixed(0);
    let summary = {
      "total": total_questions_count,
      "correct": correct_questions_count,
      "percentage": percentage_correct,
      "date": new Date()
    }

    return summary;
  }

  getSummary() {
    return this.summary;
  }
}
