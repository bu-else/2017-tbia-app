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

  startSurvey(title) {
    this.navCtrl.push('SurveyQuestionsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyMasterPage');
  }

}
