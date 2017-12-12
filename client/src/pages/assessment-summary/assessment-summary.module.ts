import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessmentSummaryPage } from './assessment-summary';

@NgModule({
  declarations: [
    AssessmentSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(AssessmentSummaryPage),
  ],
})
export class AssessmentSummaryPageModule {}
