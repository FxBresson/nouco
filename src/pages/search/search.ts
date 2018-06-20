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

  categoryId;
  workshops: Array<any> = [];
  services: Array<any> = [];
  mySearch: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiRequestProvider) {
  
  }

  ionViewDidLoad() {
    this.categoryId = this.navParams.get('category').id
    this.mySearch = this.navParams.get('mySearch')


    console.log(this.mySearch)

    if (this.categoryId == 1) {
      this.apiProvider.getWorkshop('/workshops', function(workshops) {
        if (this.mySearch) {
          this.workshops= workshops.filter((item) => {
            return (item.title.toLowerCase().indexOf(this.mySearch) > -1);
          });
        } else {
          this.workshops= workshops
        }
        
      }.bind(this))
    } else {
      this.apiProvider.get('/services?cat=' + this.categoryId).then(function(services) {
        if (this.mySearch) {
          this.services = services.filter((item) => {
            return (item.title.toLowerCase().indexOf(this.mySearch) > -1);
          });
        } else {
          this.services = services
        }
      }.bind(this))
    }
    

  }

}
