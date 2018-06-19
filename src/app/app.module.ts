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
import { SearchBarComponent } from '../components/search-bar/search-bar';
import { OptionsPage } from '../pages/options/options';
import { PayementPage } from '../pages/payement/payement';
import { ServiceComponent } from '../components/service/service';
import { WorkshopComponent } from '../components/workshop/workshop';
import { ApiRequestProvider } from '../providers/api-request/api-request';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { WorkshopPage } from '../pages/workshop/workshop';
import { SearchPage } from '../pages/search/search';
import { CategorieComponent } from '../components/categorie/categorie';

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
    OptionsPage,
    PayementPage,
    ServiceComponent,
    WorkshopComponent,
    ConfirmationPage,
    WorkshopPage,
    SearchPage,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages:false})
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
    SearchBarComponent,
    OptionsPage,
    PayementPage,
    ServiceComponent,
    WorkshopComponent,
    ConfirmationPage,
    WorkshopPage,
    SearchPage,
    CategorieComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    ApiRequestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRequestProvider
  ]
})
export class AppModule {}
