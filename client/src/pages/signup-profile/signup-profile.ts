import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage {
  private signupProfileForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public user: User) {
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
    // this.user.submitProfile(this.signupProfileForm);
    console.log(this.signupProfileForm.value);
    this.navCtrl.setRoot('TabsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');
  }

}
