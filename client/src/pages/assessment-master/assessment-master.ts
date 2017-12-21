import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-assessment-master',
  templateUrl: 'assessment-master.html',
})
export class AssessmentMasterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * @function {startAssessment}
   * @return {void} {redirect to the survey page}
   */
  startAssessment() {
    this.navCtrl.push('SurveyPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentMasterPage');
  }

}
