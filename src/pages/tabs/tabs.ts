import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyServicesPage } from '../myservices/myservices'
import { MyWorkshopsPage } from '../myworkshops/myworkshops'
import { ProfilePage } from '../profile/profile'
import { NavController } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { ServicePage } from '../service/service';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyServicesPage;
  tab3Root = MyWorkshopsPage;
  tab4Root = ProfilePage;
  middleTabRoot = ServicePage;

  highlightedService;

  constructor(private navCtrl: NavController, private apiProvider: ApiRequestProvider) {
    this.apiProvider.get('/services/3').then(function(service) {
     this.highlightedService = {service: service};
    }.bind(this))
  }

  goToHighlightedService() {
    
  }
}
