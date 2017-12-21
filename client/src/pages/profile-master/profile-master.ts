import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/providers'

@IonicPage()
@Component({
  selector: 'page-profile-master',
  templateUrl: 'profile-master.html',
})
export class ProfileMasterPage {
  private profile: any = {
    "age": "",
    "gender": "",
    "currentInjuryDate": "",
    "currentInjuryMedicalProblems": "",
    "priorInjuryDate": "",
    "priorInjuryMedicalProblems": ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {
    this.user.getPatientInfo().subscribe((res: any) => {
      this.profile = res["patient_info"];
      console.log(this.profile);
    }, (err) => {
      console.log('ERROR', err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMasterPage');
  }

}
