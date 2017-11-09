import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessmentFaceEmotionRecognitionPage } from './assessment-face-emotion-recognition';

@NgModule({
  declarations: [
    AssessmentFaceEmotionRecognitionPage,
  ],
  imports: [
    IonicPageModule.forChild(AssessmentFaceEmotionRecognitionPage),
  ],
})
export class AssessmentFaceEmotionRecognitionPageModule {}
