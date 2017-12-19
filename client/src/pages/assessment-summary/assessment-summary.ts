import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResponsesProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-assessment-summary',
  templateUrl: 'assessment-summary.html',
})
export class AssessmentSummaryPage {
  /**
   * Initialization
   */
  private summary: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public responses: ResponsesProvider) {
    this.summary = this.responses.getSummary();
  }

  /**
   * @function {toHomepage}
   * @return {void} {redirect to home page}
   */
  toHomepage() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentSummaryPage');
  }

}
