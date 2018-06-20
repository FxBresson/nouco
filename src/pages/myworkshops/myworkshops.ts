import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { CreateWorkshopPage } from '../createworkshop/createworkshop';

@Component({
  selector: 'page-myworkshops',
  templateUrl: 'myworkshops.html'
})
export class MyWorkshopsPage {

  pastWS: Array<{}> = [];
  futurWS: Array<{}> = [];
  futurHostedWS: Array<{}> = [];
  listShown: String = 'futurWS';

  constructor(public navCtrl: NavController, public apiProvider: ApiRequestProvider) {

    
  }

  ionViewDidEnter() {
    this.getMyWorkshops()
  }
  
  getMyWorkshops() {
    this.pastWS = [];
    this.futurWS = [];
    this.futurHostedWS = [];

    this.apiProvider.getWorkshop('/workshops', function(workshops) {

      let today = new Date().getTime();

      for (let ws of workshops) {
        
        if (ws.host.id == 1) {
          ws.instance = true;
          if (ws.date > today) {
            this.futurHostedWS.push(ws)
          } else {
            this.pastWS.push(ws)
          }
        } 
        if (ws.contributors) {
          ws.instance = true;
          if (ws.contributors.find(x => { return x.id == 1})) {
            if (ws.date > today) {
              this.futurWS.push(ws)
            } else {
              this.pastWS.push(ws)
            }
          }
        }
      }

      console.log(this.pastWS)
      console.log(this.futurWS)
      console.log(this.futurHostedWS)
      
    }.bind(this)) 
  }

  showList(list) {
    this.listShown = list;
  }

  createWorkshop() {
    this.navCtrl.push(CreateWorkshopPage)
  }

}
