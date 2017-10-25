import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signup() {
    this.navCtrl.setRoot('TabsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
