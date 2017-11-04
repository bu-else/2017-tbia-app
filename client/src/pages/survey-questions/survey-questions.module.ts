import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyQuestionsPage } from './survey-questions';

@NgModule({
  declarations: [
    SurveyQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyQuestionsPage),
  ],
})
export class SurveyQuestionsPageModule {}
