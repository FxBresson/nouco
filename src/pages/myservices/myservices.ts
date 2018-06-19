import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

@Component({
  selector: 'page-myservices',
  templateUrl: 'myservices.html'
})
export class MyServicesPage {

  services: Array<any>;

  constructor(public navCtrl: NavController, private apiProvider: ApiRequestProvider) {
  }

  ionViewDidEnter() {
    this.getMyServices();
  }

  getMyServices() {

    this.services = [];

    this.apiProvider.get('/services').then(function(services) {

      this.apiProvider.get('/instances?user=1').then(function(instances) {

        for (let instance of instances) {

          let service = services.find(x => { return x.id == instance.service});
          
          for (let index in service.infos) {
            service.infos[index].options = [instance.options[service.infos[index].formName]]
          }

          service.instance = true;
          service.payement = instance.payement;

          this.services.push(service)
        }

      }.bind(this))

    }.bind(this))
  }
}
