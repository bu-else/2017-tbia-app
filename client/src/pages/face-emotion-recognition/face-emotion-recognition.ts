import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { Api } from '../../providers/providers'

@IonicPage()
@Component({
  selector: 'page-face-emotion-recognition',
  templateUrl: 'face-emotion-recognition.html',
})
export class FaceEmotionRecognitionPage {
  /**
   * Initialization
   */
  
  private index = 0;
  private assessment: any[];
  private userSelection: any;
  private currentQuestionStartTime: any;
  private currentQuestionEndTime: any;
  private assessmentResults = [];

  private template = {
    "question": "What emotion is featured here?",
    "answers": [
      {
        "answer_id": 1,
        "answer_img": "assets/data/face-emotion-recognition/happy.jpg",
        "answer": "Happy"
      },
      {
        "answer_id": 2,
        "answer_img": "assets/data/face-emotion-recognition/sad.jpg",
        "answer": "Sad"
      },
      {
        "answer_id": 3,
        "answer_img": "assets/data/face-emotion-recognition/thoughtful.jpg",
        "answer": "Thoughtful"
      },
      {
        "answer_id": 4,
        "answer_img": "assets/data/face-emotion-recognition/angry.jpg",
        "answer": "Angry"
      },
      {
        "answer_id": 5,
        "answer_img": "assets/data/face-emotion-recognition/confused.jpg",
        "answer": "Confused"
      }
    ]
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public viewCtrl: ViewController, public api: Api) {
    this.assessment = this.generateQuestions(this.template, 6);
    this.currentQuestionStartTime = new Date();
  }

  /**
   * @function {generateQuestions}
   * @param  {Object} template {assessment template}
   * @param  {number} count   {number of questions to be generated}
   * @return {Object[]} {assessment questions}
   */
  generateQuestions(template, count) {
    let questions = [];

    for (var i = 1; i <= count; i++) {
      let randint = Math.floor(Math.random() * 5);
      questions.push({
        "question_id": i,
        "question": template.question,
        "question_img": template.answers[randint].answer_img,
        "answers": template.answers,
        "correct_answer": template.answers[randint]
      });
    }
    return questions;
  }

  /**
   * Selection Behaviors
   */
  /**
   * @function {disableNextButton}
   * @return {boolean} {if user has selected an answer or not}
   */
  disableNextButton() {
    return this.userSelection == null;
  }

  /**
   * @function {select}
   * @param  {number} value {the answer_id detected by ion-change event}
   * @return {void} {set currentUserSelection to answer_id}
   */
  select(value) {
    this.userSelection = value;
  }

  /**
   * Submission Behaviors
   */
  /**
   * @function {submit}
   * @return {void} {log user response and continue to next question or assessment}
   */
  submit() {
    // log user response
    this.currentQuestionEndTime = new Date();
    let currentQuestion = this.assessment[this.index];
    this.assessmentResults.push({
      "question_id": currentQuestion.question_id,
      "question": currentQuestion.question,
      "response_standardized": currentQuestion.answers,
      "response_correct": currentQuestion.correct_answer,
      "response_user_input": currentQuestion.answers[this.userSelection - 1],
      "response_correctness": currentQuestion.correct_answer.answer_id == this.userSelection,
      "start_time": this.currentQuestionStartTime.toString(),
      "end_time": this.currentQuestionEndTime.toString()
    });
    
    // next question
    if (this.index < this.assessment.length - 1) {
      this.index++;
      this.nextSlide();
      this.cleanup();
      this.currentQuestionStartTime = new Date();
    // next assessment
    } else {
      let response = {
        "title": "Assessments Results",
        "assessment": "Face Emotion Recognition",
        "properties": this.assessmentResults
      };
      console.log(response);
      // this.api.post('responses', response);
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNavs()[0].push('ChangingSetsPage');
    }
  }

  /**
   * @function {cleanup}
   * @return {void} {remove values stored for the current question}
   */
  cleanup() {
    this.userSelection = null;
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
    console.log('ionViewDidLoad FaceEmotionRecognitionPage');
  }

}
