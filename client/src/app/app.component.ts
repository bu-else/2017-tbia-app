import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'WelcomePage';

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Profile', component: 'ProfileMasterPage' },
    { title: 'Log Out', component: 'LogoutPage' }
  ]

  constructor(platform: Platform, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
