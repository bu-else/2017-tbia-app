import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';

import { Settings } from '../providers/providers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'WelcomePage';

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Profile', component: 'ProfilePage'},
    { title: 'Welcome', component: 'WelcomePage' }, // for debugging only
    { title: 'Login', component: 'LoginPage' },     // for debugging only
    { title: 'Signup', component: 'SignupPage' },   // for debugging only
  ]

  constructor(platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
