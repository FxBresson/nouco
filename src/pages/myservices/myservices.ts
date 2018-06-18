import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-myservices',
  templateUrl: 'myservices.html'
})
export class MyServicesPage {

  services: Array<{ title: string }>;

  constructor(public navCtrl: NavController) {

    this.services = [
      {
        title: "Test"
      },
      {
        title: "Test2"
      }
    ]


  }

}
