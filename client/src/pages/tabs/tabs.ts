import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage'
  // historyRoot = 'HistoryPage'
  profileRoot = 'ProfilePage'
  loginRoot = 'LoginPage'
  signupRoot = 'SignupPage'


  constructor(public navCtrl: NavController) {}

}
