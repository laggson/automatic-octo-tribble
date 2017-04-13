import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeinSteckbriefPage } from './mein-steckbrief';

@NgModule({
  declarations: [
    MeinSteckbriefPage,
  ],
  imports: [
    IonicPageModule.forChild(MeinSteckbriefPage),
  ],
  exports: [
    MeinSteckbriefPage
  ]
})
export class MeinSteckbriefModule {}
