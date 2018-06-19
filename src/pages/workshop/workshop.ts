import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

/**
 * Generated class for the WorkshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workshop',
  templateUrl: 'workshop.html',
})
export class WorkshopPage {

  workshop;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiRequestProvider) {
    this.workshop = navParams.get('workshop');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkshopPage');
  }

  register() {
    let contributors = this.workshop.contributors.map(x => { return x.id })
    contributors.push(1);
    this.apiProvider.participateToWokshop(this.workshop.id, contributors)
  }

}
