import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sections: Array<{}>;
  workshops: Array<{}>;
  
  constructor(public navCtrl: NavController, public apiProvider: ApiRequestProvider) {

    this.apiProvider.get('/db').then(function(db) {
      let workshops = db.workshops.filter(x => { return x.date > new Date().getTime() });
      this.workshops = this.apiProvider.processWorkshops(workshops, db.users)
      this.services = db.services;
      this.categories = db.categories;
    }.bind(this))

  }
}
