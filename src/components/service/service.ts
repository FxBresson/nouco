import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicePage } from '../../pages/service/service';

/**
 * Generated class for the ServiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'service',
  templateUrl: 'service.html'
})
export class ServiceComponent {

  @Input() service: Object;


  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goToService(service) {
    this.navCtrl.push(ServicePage, {
      service: service
    });
  }

}
