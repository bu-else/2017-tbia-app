import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-survey-questions',
  templateUrl: 'survey-questions.html',
})
export class SurveyQuestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  survey = [{
    "question_id": 1,
    "question": "Did you hit your head?",
    "answers": [
      { "answer_id": 1, "answer": "Yes" },
      { "answer_id": 2, "answer": "No" },
    ]
  }, {
    "question_id": 2,
    "question": "Did you experience any of the following at the time of injury?",
    "answers": [
      { "answer_id": 1, "answer": "headache" },
      { "answer_id": 2, "answer": "vision change" },
    ]
  }];

  submit() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  @ViewChild('slides') slides;
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad SurveyQuestionsPage');
  }

}
