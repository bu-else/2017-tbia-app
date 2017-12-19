import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage {
  signupProfileForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.signupProfileForm = formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      currentInjuryDate: ['', Validators.required],
      currentInjuryMedicalProblems: ['', Validators.required],
      priorInjuryDate: [''],
      priorInjuryMedicalProblems: ['']
    });
  }

  submitProfile() {
    console.log(this.signupProfileForm.value);
    this.navCtrl.setRoot('TabsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');
  }

}
