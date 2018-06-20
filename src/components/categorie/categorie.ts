import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';

/**
 * Generated class for the CategorieComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categorie',
  templateUrl: 'categorie.html'
})
export class CategorieComponent {

  @Input() categorie: Object;


  constructor(private navCtrl: NavController) {
  }

  goToCat(categorie) {
    this.navCtrl.push(SearchPage, {
      category: categorie
    });
  }

}
