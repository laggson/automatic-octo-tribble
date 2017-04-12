import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { ConnextPage } from '../pages/connext/connext';
=======
import { ListPage } from '../pages/list/list';
import { WillkommensbereichPage } from '../pages/willkommensbereich/willkommensbereich';

>>>>>>> refs/remotes/origin/master

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ConnextPage
=======
    ListPage,
    WillkommensbereichPage
>>>>>>> refs/remotes/origin/master
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
    ConnextPage
=======
    ListPage,
    WillkommensbereichPage

>>>>>>> refs/remotes/origin/master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
