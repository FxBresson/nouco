import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayementPage } from '../payement/payement';
import { ApiRequestProvider } from '../../providers/api-request/api-request';


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
  selectedResto;
  menusOptions;

  formHandler: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController, public apiProvider: ApiRequestProvider) {
      
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

  onRestoChange() {
    let resto = this.service.infos[0].options.filter(x => { return x.name == this.selectedResto})
    this.menusOptions = resto[0].menus
  }

  askService(e) {
    if (!this.formHandler.valid) {
      this.invalidAlert.present();
    } else {
      if (this.service.payement) {
        this.navCtrl.push(PayementPage, {
          service: this.service,
          options: this.formHandler.value
        });
      } else {
        this.apiProvider.post('/instances', {
          id: null,
          options: this.formHandler.value,
          user: 1,
          service: this.service.id
        });
        let addAlert= this.alertCtrl.create({
          title: 'Service commandé',
          subTitle: 'Vous commande à été prise en compte !',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.popTo(this.navCtrl.getByIndex(0))
            }
          }]
        })
        addAlert.present();
      }
    }
  }

}
