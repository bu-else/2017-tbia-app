import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { Api } from '../../providers/providers';
import { ResponsesProvider } from '../../providers/providers';

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
  private template: any;
  private assessment: any[];
  private userSelection: any;
  private currentQuestionStartTime: any;
  private currentQuestionEndTime: any;
  private assessmentResults = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public viewCtrl: ViewController, public api: Api, public responses: ResponsesProvider) {
    this.api.get('assessments').subscribe((res: any) => {
      res.assessments.forEach(assessment => {
        if (assessment.title == "Face Emotion Recognition") {
          this.template = assessment.template;
          this.assessment = this.generateQuestions(this.template, 3);
        }
      });
    }, (err) => {
      console.log('ERROR', err);
    });
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
    let randq = Array.from(new Array(template.answers.length), (x, i) => i).map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);

    for (var i = 1; i <= count; i++) {
      questions.push({
        "question_id": i,
        "question": template.question,
        "question_img": template.answers[randq[i]].answer_img,
        "answers": template.answers,
        "correct_answer": template.answers[randq[i]]
      });
    }
    return questions;
  }

  /**
   * Submission Behaviors
   */
  /**
   * @function {submit}
   * @return {void} {log user response and continue to next question or assessment}
   */
  submit(value) {
    // log user response
    this.currentQuestionEndTime = new Date();
    let currentQuestion = this.assessment[this.index];
    this.assessmentResults.push({
      "question_id": currentQuestion.question_id,
      "question": currentQuestion.question,
      "response_standardized": currentQuestion.answers,
      "response_correct": currentQuestion.correct_answer,
      "response_user_input": currentQuestion.answers[value - 1],
      "correct": currentQuestion.correct_answer.answer_id == value,
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
        "title": "Face Emotion Recognition",
        "properties": this.assessmentResults
      };
      this.responses.updateResponses(response);
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
