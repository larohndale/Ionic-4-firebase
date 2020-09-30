import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string;
  password: string;


  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(public afs: AngularFireAuth, public router: Router, public alertController: AlertController) { }

  async login() {

    const { username, password } = this;
    console.log(username, password);
    try {
      const res = await this.afs.signInWithEmailAndPassword(username, password);
      console.log(res);
      setTimeout(() => {
        this.router.navigateByUrl('/tabs/feed');
      }, 1000);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        this.error('Incorrect Password');
      } if (error.code === 'auth/user-not-found') {
        this.error('User dont found');
      }
      if (error.code === 'auth/email-already-in-use') {
        this.error('User already use');
      }
      if (error.code === 'auth/argument-error') {
        this.error('Argument error');
      }
      if (error.code === 'auth/invalid-email') {
        this.error('Invalid email');
      } else {
        this.error('Something went wrong try later');
      }
    }
  }
  async loginGmail() {
    try {
      const res = await this.afs.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(res);
      this.router.navigateByUrl('/tabs/feed');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        this.error('Incorrect Password');
      } if (error.code === 'auth/user-not-found') {
        this.error('User dont found');
      }
      if (error.code === 'auth/email-already-in-use') {
        this.error('User already use');
      }
      if (error.code === 'auth/argument-error') {
        this.error('Argument error');
      }
      if (error.code === 'auth/invalid-email') {
        this.error('Invalid error');
      }
      console.log(error);
    }
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }

  async error(mensaje: string) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  moveFocus(nextElement) {
    nextElement.setFocus();
  }
  // gotoslides() {
  //   this.rout.navigateByUrl('/');
  // }

}
