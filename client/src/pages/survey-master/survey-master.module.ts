import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyMasterPage } from './survey-master';

@NgModule({
  declarations: [
    SurveyMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyMasterPage),
  ],
})
export class SurveyMasterPageModule {}
