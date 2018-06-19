import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkshopPage } from '../../pages/workshop/workshop';

/**
 * Generated class for the WorkshopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'workshop',
  templateUrl: 'workshop.html'
})
export class WorkshopComponent {

  @Input() workshop: Object;

  text: string;

  constructor(public navCtrl: NavController) {
  }

  goToWokshop(workshop) {
    this.navCtrl.push(WorkshopPage, {
      workshop: workshop
    });
  }

}
