import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessmentMasterPage } from './assessment-master';

@NgModule({
  declarations: [
    AssessmentMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(AssessmentMasterPage),
  ],
})
export class AssessmentMasterPageModule {}
