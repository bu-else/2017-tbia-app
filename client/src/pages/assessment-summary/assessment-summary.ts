import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-assessment-summary',
  templateUrl: 'assessment-summary.html',
})
export class AssessmentSummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * @function {homepage}
   * @return {void} {redirect to home page}
   */
  homepage() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentSummaryPage');
  }

}
