import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage {
  signupProfileForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public user: User) {
    this.signupProfileForm = formBuilder.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      currentInjuryDate: ['', Validators.required],
      currentInjuryMedicalProblems: ['', Validators.required],
      priorInjuryDate: [''],
      priorInjuryMedicalProblems: ['']
    });
  }

  submitProfile() {
    // this.user.submitProfile(this.signupProfileForm);
    console.log(this.signupProfileForm.value);
    this.navCtrl.setRoot('TabsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');
  }

}
