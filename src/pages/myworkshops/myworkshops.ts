import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { CreateWorkshopPage } from '../createworkshop/createworkshop';

@Component({
  selector: 'page-myworkshops',
  templateUrl: 'myworkshops.html'
})
export class MyWorkshopsPage {

  pastWS: Array<{}>
  futurWS: Array<{}>
  showPast: Boolean = true;

  constructor(public navCtrl: NavController, public apiProvider: ApiRequestProvider) {

    
  }

  ionViewDidEnter() {
    this.getMyWorkshops()
  }
  
  getMyWorkshops() {
    this.apiProvider.getWorkshop('/workshops?host=1', function(workshops) {

      this.pastWS = workshops.filter(x => { return x.date <= new Date().getTime() })

      for (let workshop of this.pastWS) {
        workshop.instance = true;
      }

      this.futurWS = workshops.filter(x => { return x.date > new Date().getTime() })
      
    }.bind(this)) 
  }

  showPastWS(bool) {
    this.showPast = bool;
  }

  createWorkshop() {
    this.navCtrl.push(CreateWorkshopPage)
  }

}
