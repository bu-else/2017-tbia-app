import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * @function {toAssessmentTab}
   * @return {void} {redirect to the assessment tab}
   */
  toAssessmentTab() {
    this.navCtrl.parent.select(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
