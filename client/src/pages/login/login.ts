import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private loginForm: FormGroup;
  private loginErrorString = "Unable to sign in. Please check your account information and try again.";

  constructor(public navCtrl: NavController, public user: User, public toastCtrl: ToastController, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * @function {doLogin}
   * @return {void} {attempt to login in through the user service}
   */
  doLogin() {
    this.user.login(this.loginForm.value).subscribe(res => {
      this.navCtrl.setRoot('TabsPage');
    }, err => {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present()
    })
  }
}
