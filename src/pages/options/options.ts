import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayementPage } from '../payement/payement';


/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  service;
  
  infos: Array<any>;
  invalidAlert: Alert;

  formHandler: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController) {
      
      this.service = this.navParams.get('service');  

      let form= {}

      for (let infoIndex in this.service.infos) {
        let normalizedName = this.service.infos[infoIndex].formName;
        form[normalizedName] = ['',  Validators.required];
      }

      this.formHandler = this.formBuilder.group(form)

      this.invalidAlert = this.alertCtrl.create({
        title: 'Invalid',
        subTitle: 'Please fill all info',
        buttons: ['Got it']
      });
  }

  ionViewDidLoad() {
  }

  askService(e) {
    if (!this.formHandler.valid) {
      this.invalidAlert.present();
    } else {
      this.navCtrl.push(PayementPage, {
        service: this.service,
        options: this.formHandler.value
      });
    }
  }

}
