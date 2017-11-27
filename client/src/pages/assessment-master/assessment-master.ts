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

  private assessments: any[] = [
    { title: 'Face Emotion Recognition', component: 'FaceEmotionRecognitionPage' },
    { title: 'Changing Sets', component: 'ChangingSetsPage' }
  ];

  startAssessment(page) {
    this.navCtrl.push(page.component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentMasterPage');
  }

}
