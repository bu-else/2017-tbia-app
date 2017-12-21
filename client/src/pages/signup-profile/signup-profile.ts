import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage {
  signupProfileForm: FormGroup;
  SignupProfileErrorString: string = "Unable to submit profile. Please check your patient information and try again."

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public user: User, public toastCtrl: ToastController) {
    this.signupProfileForm = formBuilder.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      currentInjuryDate: ['', Validators.required],
      currentInjuryMedicalProblems: ['', Validators.required],
      priorInjuryDate: [''],
      priorInjuryMedicalProblems: ['']
    });
  }

  /**
   * @function {submitProfile}
   * @return {} {submit patient info to the backend}
   */
  submitProfile() {
    this.user.updatePatientInfo(this.signupProfileForm.value).subscribe((res: any) => {
      this.navCtrl.setRoot('TabsPage');
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.SignupProfileErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');
  }

}
