import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WillkommensbereichPage } from './willkommensbereich';

@NgModule({
  declarations: [
    WillkommensbereichPage,
  ],
  imports: [
    IonicPageModule.forChild(WillkommensbereichPage),
  ],
  exports: [
    WillkommensbereichPage
  ]
})
export class WillkommensbereichModule {}
