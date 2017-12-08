import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  private assessment: any;
  private currentQuestionStartTime: any;
  private currentQuestionEndTime: any;
  private assessmentResults = [];

  private pattern = {
    "question": "Choose ",
    "answers": [
      {
        "answer_id": 1,
        "answer": "Red",
        "answer_num": 1,
        "answer_color": "danger"
      },
      {
        "answer_id": 2,
        "answer": "Blue",
        "answer_num": 2,
        "answer_color": "primary"
      }
    ]
  };
  private new_pattern = {
    "question": "Choose ",
    "answers": [
      {
        "answer_id": 1,
        "answer": "Red",
        "answer_num": 2,
        "answer_color": "danger"
      },
      {
        "answer_id": 2,
        "answer": "Blue",
        "answer_num": 1,
        "answer_color": "primary"
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assessment = this.generateQuestions(this.pattern, this.new_pattern, 5);
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

    questions.push({"message": true, "text": "Red = 1, Blue = 2", "red": 1, "blue": 2});
    for (var i = 1; i <= count; i++) {
      let randq = Math.floor(Math.random() * 2) + 1;
      let randa = Math.floor(Math.random() * 2);
      questions.push({
        "question_id": i,
        "question": pattern.question + randq.toString(),
        "answers": [pattern.answers[randa], pattern.answers[(randa + 1) % 2]],
        "correct_answer": pattern.answers[randq - 1]
      });
    }

    questions.push({"message": true, "text": "Red = 2, Blue = 1", "red": 2, "blue": 1});
    for (var i = 1; i <= count; i++) {
      let randq = Math.floor(Math.random() * 2) + 1;
      let randa = Math.floor(Math.random() * 2);
      questions.push({
        "question_id": i + count,
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
      let userSelection = value;
      this.assessmentResults.push({
        "question_id": currentQuestion.question_id,
        "question": currentQuestion.question,
        "response_standardized": currentQuestion.answers,
        "response_corroect": currentQuestion.correct_answer,
        "response_user_input": currentQuestion.answers[userSelection],
        "response_correctness": currentQuestion.correct_answer == userSelection,
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
        "title": "Assessment Results",
        "assessment": "Changing Sets",
        "properties": this.assessmentResults
      };
      console.log(response);
      this.navCtrl.popToRoot();
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
