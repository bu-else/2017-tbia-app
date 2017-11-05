import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-survey-master',
  templateUrl: 'survey-master.html',
})
export class SurveyMasterPage {

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

  startSurvey(title) {
    this.navCtrl.push('SurveyQuestionsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyMasterPage');
  }

}
