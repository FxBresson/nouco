import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { PayementPage } from '../payement/payement';

@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {

  service;

  constructor(public navCtrl: NavController, public apiProvider: ApiRequestProvider, public navParams: NavParams, public alertCtrl: AlertController) {
    this.service = this.navParams.get('service')
  }

  requestService() {
    if (this.service.infos.length > 0) {
      this.navCtrl.push(OptionsPage, {
        service: this.service
      });
    } else if(this.service.payement) {
      this.navCtrl.push(PayementPage, {
        service: this.service
      });
    } else {
      if (this.service.payement) {
        this.navCtrl.push(PayementPage, {
          service: this.service,
          options: []
        });
      } else {
        this.apiProvider.post('/instances', {
          id: null,
          options: [],
          user: 1,
          service: this.service.id
        });
        let addAlert= this.alertCtrl.create({
          title: 'Service commandé',
          subTitle: 'Vous commande à été prise en compte !',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.popTo(this.navCtrl.getByIndex(0))
            }
          }]
        })
        addAlert.present();
      }
    }
    
  }

}
