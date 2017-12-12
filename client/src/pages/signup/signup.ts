import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  private signupForm: FormGroup;
  private signupErrorString = "Unable to create account. Please check your account information and try again.";

  constructor(public navCtrl: NavController, public user: User, public toastCtrl: ToastController, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: [''], // validators
      username: [''],
      email: [''],
      password: [''],
      passwordConfirmed: ['']
    });
  }

  doSignup() {
    console.log(this.signupForm.value);
    this.navCtrl.push('SignupProfilePage');
    // Attempt to login in through our User service
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push('TabsPage');
    // }, (err) => {

    //   this.navCtrl.push('TabsPage');

    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }
}
