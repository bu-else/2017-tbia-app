import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  /**
   * Initialization
   */
  signupForm: FormGroup;
  signupFormErrorMessage: any = {
    "invalidName": "Name is not allowed to be empty",
    "invalidUsername": "Username is not allowed to be empty",
    "invalidEmail": "Email must be a valid email",
    "invalidPassword": "Password must contain at least 8 characters, including at least 1 uppercase, 1 lowercase and 1 number",
    "invalidPasswordConfirmed": "Password is not allowed to be empty",
  };
  signupErrorString = "Unable to create account. Please check your account information and try again.";

  constructor(public navCtrl: NavController, public user: User, public toastCtrl: ToastController, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/), Validators.required])],
      confirmPassword: ['', Validators.required]
    });
  }

  /**
   * @function {doSignup}
   * @return {void} {attempt to signup up through user service}
   */
  doSignup() {
    let signupAccount = {
      name: this.signupForm.value.name,
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };
    this.user.signup(signupAccount).subscribe((res: any) => {
      this.navCtrl.push('SignupProfilePage');
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
