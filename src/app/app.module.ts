import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ServicePage } from '../pages/service/service'
import { MyServicesPage } from '../pages/myservices/myservices'
import { MyWorkshopsPage } from '../pages/myworkshops/myworkshops'
import { CreateWorkshopPage } from '../pages/createworkshop/createworkshop'
import { ProfilePage } from '../pages/profile/profile'
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ServicePage,
    MyServicesPage,
    MyWorkshopsPage,
    CreateWorkshopPage,
    ProfilePage,
    AboutPage,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ServicePage,
    MyServicesPage,
    MyWorkshopsPage,
    CreateWorkshopPage,
    ProfilePage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
