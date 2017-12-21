import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangingSetsPage } from './changing-sets';

@NgModule({
  declarations: [
    ChangingSetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangingSetsPage),
  ],
})
export class AssessmentChangingSetsPageModule {}
