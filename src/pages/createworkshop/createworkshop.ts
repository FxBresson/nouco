import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

@Component({
  selector: 'page-createworkshop',
  templateUrl: 'createworkshop.html'
})
export class CreateWorkshopPage {

  formHandler: FormGroup;
  invalidAlert: Alert;
  

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private alertCtrl: AlertController, private apiProvider: ApiRequestProvider) {

    this.formHandler = this.formBuilder.group({
      title: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.invalidAlert = this.alertCtrl.create({
      title: 'Invalid',
      subTitle: 'Please fill all info',
      buttons: ['Got it']
    });

  }

  createWorkshop(e) {
    console.log(this.formHandler.value)
    if (!this.formHandler.valid) {
      this.invalidAlert.present();
    } else {
      this.apiProvider.post('/workshops', {
        id: null,
        host: 1,
        title: this.formHandler.value.title,
        description: this.formHandler.value.description,
        date: new Date(this.formHandler.value.date).getTime(),
        place: this.formHandler.value.place
      })
      let addAlert= this.alertCtrl.create({
        title: 'Workshop added',
        subTitle: 'Your wokshop has successfully been created',
        buttons: [{
          text: 'Awesome !',
          handler: () => {
            this.navCtrl.popTo(this.navCtrl.getByIndex(0))
          }
        }]
      })
      addAlert.present()
    }
  }

}
