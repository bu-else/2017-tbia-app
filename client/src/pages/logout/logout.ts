import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {
    this.user.logout();
    this.navCtrl.setRoot('WelcomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
