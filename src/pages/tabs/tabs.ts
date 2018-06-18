import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyServicesPage } from '../myservices/myservices'
import { MyWorkshopsPage } from '../myworkshops/myworkshops'
import { ProfilePage } from '../profile/profile'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyServicesPage;
  tab3Root = MyWorkshopsPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
