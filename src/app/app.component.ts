import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public firebaseCordova: AngularFireAuth,
    private navCtrl: NavController,
    private theme: ThemeService
  ) {
    this.initializeApp();
    this.sideMenu();
    if (localStorage.getItem('theme') === 'dark') {
      this.theme.enableDark();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    this.firebaseCordova.authState
      .subscribe(
        user => {
          if (user) {
            // this.router.navigateByUrl('');
          } else {
            this.navCtrl.navigateForward('/login');
          }
        },
        () => {
          // this.navCtrl.navigateForward('/login');
        }
      );
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Feed",
          url: "/feed",
          icon: "trending-up"
        },
        {
          title: "Upload",
          url: "/tab2",
          icon: "cloud-outline"
        },
        {
          title: "Profile",
          url: "/profile",
          icon: "person"
        },
      ]
  }

  async signOut() {
    const res = await this.firebaseCordova.signOut();
    console.log(res);
    this.navCtrl.navigateForward('/login');
  }

}
