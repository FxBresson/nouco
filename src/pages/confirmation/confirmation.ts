import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  method:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.method = navParams.get('method')

  }

  ionViewDidLoad() {
  }

  goBackToHome() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(0))
  }

}
