import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { ConnextPage } from './connext';

@NgModule({
  declarations: [
    ConnextPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnextPage),
  ],
  exports: [
    ConnextPage
  ]
})
export class ConnextModule {}
