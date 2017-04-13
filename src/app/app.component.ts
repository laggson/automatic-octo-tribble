import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WillkommensbereichPage } from '../pages/willkommensbereich/willkommensbereich';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
import { ConnextPage } from '../pages/connext/connext';
=======
import { MeinSteckbriefPage } from '../pages/mein-steckbrief/mein-steckbrief';
import { ListPage } from '../pages/list/list';
>>>>>>> refs/remotes/origin/Henry's-Branch


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WillkommensbereichPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

        { title: 'Willkommensbereich', component: WillkommensbereichPage },
<<<<<<< HEAD
        { title: 'Mein Steckbrief', component: HomePage },
        { title: 'Über Connext', component: ConnextPage }
=======
        { title: 'Mein Steckbrief',    component: MeinSteckbriefPage },
        { title: 'List', component: ListPage }
>>>>>>> refs/remotes/origin/Henry's-Branch
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
