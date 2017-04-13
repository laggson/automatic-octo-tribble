import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnextPage } from '../pages/connext/connext';
import { WillkommensbereichPage } from '../pages/willkommensbereich/willkommensbereich';
import { MeinSteckbriefPage } from '../pages/mein-steckbrief/mein-steckbrief';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ConnextPage,
    WillkommensbereichPage
=======
    ListPage,
    WillkommensbereichPage,
    MeinSteckbriefPage
>>>>>>> refs/remotes/origin/Henry's-Branch
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ConnextPage,
    WillkommensbereichPage
=======
    ListPage,
    WillkommensbereichPage,
    MeinSteckbriefPage
>>>>>>> refs/remotes/origin/Henry's-Branch
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
