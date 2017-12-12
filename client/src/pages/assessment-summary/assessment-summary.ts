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
   * @function {toHomepage}
   * @return {void} {redirect to home page}
   */
  toHomepage() {
    this.navCtrl.popToRoot().then(this.navCtrl.parent.select(0));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentSummaryPage');
  }

}
