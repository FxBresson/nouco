import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-myworkshops',
  templateUrl: 'myworkshops.html'
})
export class MyWorkshopsPage {

  pastWS: Array<{}>
  futurWS: Array<{}>
  showPast: Boolean

  constructor(public navCtrl: NavController) {

    this.showPast = true;

    this.pastWS = [
      {
        cardId: 'service-1',
        cat: 'Catégorie',
        title: 'Service 1 - PAST',
        description: 'Description du service 1',
        img: ''
      },
      {
        cardId: 'service-2',
        cat: 'Catégorie',        
        title: 'Service 2 - PAST',
        description: 'Description du service 2',
        img: ''
      }
    ]

    this.futurWS = [
      {
        cardId: 'service-1',
        cat: 'Catégorie',
        title: 'Service 1 - FUTUR',
        description: 'Description du service 1',
        img: ''
      },
      {
        cardId: 'service-2',
        cat: 'Catégorie',        
        title: 'Service 2 - FUTUR',
        description: 'Description du service 2',
        img: ''
      }
    ]
  }

  showPastWS(bool) {
    this.showPast = bool;
    console.log(this.showPast)
  }

}
