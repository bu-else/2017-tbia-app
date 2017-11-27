import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceEmotionRecognitionPage } from './face-emotion-recognition';

@NgModule({
  declarations: [
    FaceEmotionRecognitionPage,
  ],
  imports: [
    IonicPageModule.forChild(FaceEmotionRecognitionPage),
  ],
})
export class FaceEmotionRecognitionPageModule {}
