import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMasterPage } from './profile-master';

@NgModule({
  declarations: [
    ProfileMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileMasterPage),
  ],
})
export class ProfilePageModule {}
