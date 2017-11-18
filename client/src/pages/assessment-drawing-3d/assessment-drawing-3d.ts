import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-assessment-drawing-3d',
  templateUrl: 'assessment-drawing-3d.html',
})
export class AssessmentDrawing3DPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentDrawing3DPage');
  }

}
