import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  /**
   * Initialization
   */

  private index = 0;                      // the index of the slides
  private survey: any;                    // questions fetched from the server
  private userSelection: any;             // the answer selected for a single-selection or range question
  private userSelectionCount = 0;         // the number of choices checked for a multi-selection question
  private currentQuestionStartTime: any;  // start time for the current question
  private currentQuestionEndTime: any;    // end time for the current question
  private assessmentResults = [];         // an array of user's response to each question

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public api: Api, public appCtrl: App, public viewCtrl: ViewController) {
    this.api.get('surveys').subscribe(res => {
      this.survey = res["assessments"][0]["questions"];
    }, err => {
      console.log(err);
    })
    this.currentQuestionStartTime = new Date();
  }
  
  /**
   * Selection Behaviors
   */

  /**
   * @function {currentQuestion}
   * @return {Object} {the current question in survey}
   */
  currentQuestion() {
    return this.survey[this.index];
  }

  /**
   * @function {disableNextButton}
   * @return {boolean} {if user has selected an answer or not}
   */
  disableNextButton() {
    if (this.currentQuestion().single_choice || this.currentQuestion().range) {
      return this.userSelection == null;
    } else if (this.currentQuestion().multiple_choices) {
      return this.userSelectionCount == 0;
    }
  }

  /**
   * @function {select}
   * @param  {number} value {the answer_id detected by ion-change event}
   * @return {void} {set userSelection to the answer_id}
   */
  select(value) {
    this.userSelection = value;
  }

  /**
   * @function {updateSelectionCount}
   * @param  {Object} value {the changed variable detected by ion-change event}
   * @return {void} {update user selections for multiple choices question}
   */
  updateUserSelection(value, index) {
    if (value.checked) {
      this.survey[this.index].answers[index].checked = true;
      this.userSelectionCount += 1;
    } else {
      this.survey[this.index].answers[index].checked = false;
      this.userSelectionCount -= 1;
    }
  }

  /**
   * @function {updateRange}
   * @param  {number} value {the answer detected by ion-change event}
   * @return {void} {update userSelection for range question}
   */
  updateRange(value) {
    this.userSelection = value.value;
  }

  /**
   * Submission Behaviors
   */

  /**
   * @function {function name}
   * @return {type} {description}
   */
  submit() {
    // log user response
    this.currentQuestionEndTime = new Date();
    let currentQuestion = this.currentQuestion();
    let response_user_input: any;
    if (currentQuestion.single_choice || currentQuestion.range) {
      response_user_input = this.userSelection;
    } else if (currentQuestion.multiple_choices) {
      response_user_input = currentQuestion.answers.reduce(function (response_user_input, choice) {
        if (choice.checked) response_user_input.push(choice.answer);
        return response_user_input;
      },[]);
    }
    this.assessmentResults.push({
      "question_id": currentQuestion.question_id,
      "response_user_input": response_user_input,
      "start_time": this.currentQuestionStartTime.toString(),
      "end_time": this.currentQuestionEndTime.toString()
    });

    // next question
    if (this.index < this.survey.length - 1) {
      this.index++;
      this.nextSlide();
      this.cleanup();
      this.currentQuestionStartTime = new Date();
    // next assessment
    } else {
      let response = {
        "userID": "",
        "assessment_result": {
          "title": "Survey",
          "properties": this.assessmentResults
        }
      };
      console.log("/responses", response);
      this.api.post('responses', response);
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNavs()[0].push('FaceEmotionRecognitionPage');
    }
  }

  /**
   * @function {cleanup}
   * @return {void} {set userSelection and time to null}
   */
  cleanup() {
    this.userSelection = null;
    this.userSelectionCount = 0;
    this.currentQuestionStartTime = null;
    this.currentQuestionEndTime = null;
  }
  
  @ViewChild('slides') slides;
  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad SurveyPage');
  }

}
