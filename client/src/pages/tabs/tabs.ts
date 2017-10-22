import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';
import { LoginPage} from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = ProfilePage;
  tab4Root = LoginPage;

  constructor() {

  }
}
