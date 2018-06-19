import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  categorieId;
  workshops: Array<any> = [];
  services: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiRequestProvider) {
    
  
  }

  ionViewDidLoad() {
    this.categorieId = this.navParams.get('categorie').id

    if (this.categorieId == 1) {
      this.apiProvider.getWorkshop('/workshops', function(workshops) {
        this.workshops= workshops;
      }.bind(this))
    } else {
      this.apiProvider.get('/services?cat=' + this.categorieId).then(function(services) {
        this.services = services;
      }.bind(this))
    }
    

  }

}
