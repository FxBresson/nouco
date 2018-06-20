import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { PayementPage } from '../payement/payement';

@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {

  service;

  constructor(public navCtrl: NavController, public apiProvider: ApiRequestProvider, public navParams: NavParams) {
    this.service = this.navParams.get('service')
  }

  selectService() {
    if (this.service.options && this.service.options.length) {
      this.navCtrl.push(OptionsPage, {
        service: this.service
      });
    } else {
      this.navCtrl.push(PayementPage, {
        service: this.service
      });
    }
    
  }

}
