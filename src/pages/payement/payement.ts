import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

/**
 * Generated class for the PayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payement',
  templateUrl: 'payement.html',
})
export class PayementPage {

  method:String = 'physic';
  service;
  options: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiRequestProvider) {
    this.service= navParams.get('service'),
    this.options= navParams.get('options')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayementPage');
  }

  selectPayement(method) {
    this.method= method
  }

  confirm() {

    this.apiProvider.post('/instances', {
      id: null,
      options: this.options,
      payement: this.method,
      user: 1,
      service: this.service.id
    });

    this.navCtrl.push(ConfirmationPage, {
      method: this.method,
    });
  }

}
