import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicePage } from '../../pages/service/service';
import { MyApp } from '../../app/app.component';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { SearchPage } from '../../pages/search/search';


/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  catToDisplay: Array<any>;

  constructor(public navCtrl: NavController, public app: MyApp, public apiProvider: ApiRequestProvider) {
  }

  initCats(cb = new Function()) {
    this.apiProvider.get('/categories').then(function(cats) {
      this.catToDisplay = cats;
      cb()
    }.bind(this))
  }

  filterCat(e) {
    this.initCats(function() {

      const val = e.target.value;

      if (val && val.trim() != '') {
        this.catToDisplay = this.catToDisplay.filter((item) => {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })

        console.log(this.catToDisplay)
      }
    }.bind(this));
  }

  goToCat(cat) {
    this.navCtrl.push(SearchPage, {
      categorie: cat,
    });
  }


  reset() {
    console.log('reset')
    this.catToDisplay = [];
  }
  

   
}
