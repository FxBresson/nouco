import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sections: Array<{}>;


  constructor(public navCtrl: NavController) {

    this.sections = [
      {
        sectionId: 'services',
        sectionTitle: 'Trouver un service',
        nbCards: 2,
        cards: [
          {
            cardId: 'service-1',
            title: 'Service 1',
            description: 'Description du service 1',
            img: ''
          },
          {
            cardId: 'service-2',
            title: 'Service 2',
            description: 'Description du service 2',
            img: ''
          },
          {
            cardId: 'service-3',
            title: 'Service 3',
            description: 'Description du service 3',
            img: ''
          }
        ]
      },
      {
        sectionId: 'news',
        sectionTitle: 'Les nouveautés',
        nbCards: 1,
        cards: [
          {
            cardId: 'service-1',
            title: 'Service 1',
            description: 'Description du service 1',
            img: ''
          },
          {
            cardId: 'service-2',
            title: 'Service 2',
            description: 'Description du service 2',
            img: ''
          },
          {
            cardId: 'service-3',
            title: 'Service 3',
            description: 'Description du service 3',
            img: ''
          }
        ]
      },
      {
        sectionId: 'workshops',
        sectionTitle: 'Les Ateliers',
        nbCards: 2,
        cards: [
          {
            cardId: 'service-1',
            title: 'Service 1',
            description: 'Description du service 1',
            img: ''
          },
          {
            cardId: 'service-2',
            title: 'Service 2',
            description: 'Description du service 2',
            img: ''
          },
          {
            cardId: 'service-3',
            title: 'Service 3',
            description: 'Description du service 3',
            img: ''
          }
        ]
      },
    ]

  }

}
