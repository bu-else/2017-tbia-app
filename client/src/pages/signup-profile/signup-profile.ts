import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage {
  private profile = {
    name: 'Test Human',
    age: 32,
    gender: 'female',
    currentInjuryDate: '2017-12-19',
    currentInjuryMedicalProblems: '',
    priorInjuryTime: '1983-12-19',
    priorInjuryMedicalProblems: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitProfile() {
    console.log(this.profile);
    this.navCtrl.push('TabsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');
  }

}
