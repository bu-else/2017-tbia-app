import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { Api } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-changing-sets',
  templateUrl: 'changing-sets.html',
})
export class ChangingSetsPage {
  /**
   * Initialization
   */
  
  private index = 0;
  private template: any;
  private new_template: any;
  private assessment: any;
  private currentQuestionStartTime: any;
  private currentQuestionEndTime: any;
  private assessmentResults = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api, public appCtrl: App, public viewCtrl: ViewController) {
    this.api.get('assessments').subscribe(res => {
      this.template = res["assessments"][0]["template"];
      this.new_template = res["assessments"][0]["new_template"];
      this.assessment = this.generateQuestions(this.template, this.new_template, 5);
    });
    this.currentQuestionStartTime = new Date();
  }

  /**
   * @function {generateQuestions}
   * @param  {Object} pattern     {a JSON object of the pattern}
   * @param  {Object} new_pattern {a JSON object of the new pattern}
   * @param  {number} count       {number of questions generated}
   * @return {void} {assessment questions generated}
   */
  generateQuestions(pattern, new_pattern, count) {
    let questions = [];

    questions.push({"message": "Red is 1, Blue is 2.",
                    "text": "Please answer the following questions <b>correctly</b> as <b>quickly</b> as possible.",
                    "red": 1, "blue": 2});
    for (let i = 1; i <= count; i++) {
      let randq = Math.floor(Math.random() * 2) + 1;
      let randa = Math.floor(Math.random() * 2);
      questions.push({
        "question_id": i,
        "question": pattern.question + randq.toString(),
        "answers": [pattern.answers[randa], pattern.answers[(randa + 1) % 2]],
        "correct_answer": pattern.answers[randq - 1]
      });
    }

    questions.push({"message": "The pattern has changed.<br>Red is 2, Blue is 1.",
                    "text": "Please answer the following questions <b>correctly</b> as <b>quickly</b> as possible.",
                    "red": 2, "blue": 1});
    for (let j = 1; j <= count; j++) {
      let randq = Math.floor(Math.random() * 2) + 1;
      let randa = Math.floor(Math.random() * 2);
      questions.push({
        "question_id": j + count,
        "question": new_pattern.question + randq.toString(),
        "answers": [new_pattern.answers[randa], new_pattern.answers[(randa + 1) % 2]],
        "correct_answer": new_pattern.answers[randq - 1]
      });
    }
    return questions;
  }

  /**
   * Submission Behaviors
   */
  
  /**
   * @function {submit}
   * @param  {number} value {the answer_id of the button clicked}
   * @return {void} {log user response for current question, then go to the next page or assessment}
   */
  submit(value) {
    // log user response
    this.currentQuestionEndTime = new Date();
    let currentQuestion = this.assessment[this.index];
    if (!currentQuestion.message) {
      let userSelection = value; // answer_id
      this.assessmentResults.push({
        "question_id": currentQuestion.question_id,
        "question": currentQuestion.question,
        "response_standardized": currentQuestion.answers,
        "response_correct": currentQuestion.correct_answer,
        "response_user_input": currentQuestion.answers[userSelection - 1],
        "response_correctness": currentQuestion.correct_answer.answer_id == userSelection,
        "start_time": this.currentQuestionStartTime.toString(),
        "end_time": this.currentQuestionEndTime.toString()
      });
    }

    if (this.index < this.assessment.length - 1) {
      this.nextSlide();
      this.index++;
      this.currentQuestionStartTime = new Date();
    } else {
      let response = {
        "userId": "",
        "assessment_result": {
          "userID": "",
          "properties": this.assessmentResults
        }
      };
      console.log(response);
      // this.api.post('responses', response);
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNavs()[0].push('AssessmentSummaryPage');
    }
  }

  /**
   * @function {cleanup}
   * @return {void} {remove values stored in the variables}
   */
  cleanup() {
    this.currentQuestionStartTime = null;
    this.currentQuestionEndTime = null;
  }

  /**
   * Slides Behaviors
   */

  @ViewChild('slides') slides;
  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad ChangingSetsPage');
  }

}
