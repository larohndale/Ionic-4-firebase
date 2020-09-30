import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  image: string;
  userID: any;
  photoUrl: any;
  item: any;
  empty: Boolean;
  text: string = "";
  userName: string = "";
  public loading: HTMLIonLoadingElement;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private camera: Camera, private http: HttpClient, private router: Router, private services: ServicesService, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private modalCtrl: ModalController, private firebaseCordova: AngularFireAuth) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.firebaseCordova.authState
      .subscribe(
        user => {
          if (user) {
            console.log('authorized user');
            this.userID = user.uid;
            this.userName = user.displayName
            console.log(this.userID);
            this.getProfile(this.userID);
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        () => {
          this.router.navigateByUrl('/login');
        }
      );
  }


  async getProfile(id: any) {
    this.services.getProfile(id).subscribe((data => {
      console.log(data[0].payload.doc.data());
      if (data.length === 0) {
        this.empty = false;
        console.log('empty');
      } else {
        this.empty = true;
        this.item = data;
        this.userName = data[0].payload.doc.data().username;
        this.photoUrl = data[0].payload.doc.data().img
      }
    }));
  }


  updateToken(token: string, uid: string) {

    firebase.firestore().collection("users").doc(uid).set({
      token: token,
      tokenUpdate: firebase.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    }).then(() => {
      console.log("token saved to cloud firestore");
    }).catch(err => {
      console.log(err);
    })

  }

  public async dismissLoading(): Promise<void> {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  addPhoto() {

    this.launchCamera();

  }

  launchCamera() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }

    this.camera.getPicture(options).then((base64Image) => {
      console.log(base64Image);

      this.image = "data:image/png;base64," + base64Image;


    }).catch((err) => {
      console.log(err)
    })
  }


  post() {

    firebase.firestore().collection("posts").add({
      text: this.text,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      owner: firebase.auth().currentUser.uid,
      owner_name: this.userName,
      owner_photo: this.photoUrl,
    }).then(async (doc) => {
      console.log(doc)

      if (this.image) {
        await this.upload(doc.id)
      }

      this.text = "";
      this.image = undefined;

      (await this.toastCtrl.create({
        message: "Your post has been created successfully.",
        duration: 2000
      })).present();
      this.router.navigateByUrl('/tabs/feed')
    }).catch((err) => {
      console.log(err)
    })

  }

  ago(time: any) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }
  upload(name: string) {

    return new Promise(async (resolve, reject) => {

      let loading = this.loadingCtrl.create({
        message: "Uploading Image..."
      });

      (await loading).present();

      let ref = firebase.storage().ref("postImages/" + name);

      let uploadTask = ref.putString(this.image.split(',')[1], "base64");

      uploadTask.on("state_changed", (taskSnapshot: any) => {
        console.log(taskSnapshot)
        let percentage = taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100;
        this.loadingCtrl.create({
          message: `Uploaded ${percentage} % ...`
        });
      }, (error) => {
        console.log(error)
      }, () => {
        console.log("The upload is complete!");


        uploadTask.snapshot.ref.getDownloadURL().then((url) => {

          firebase.firestore().collection("posts").doc(name).update({
            image: url
          }).then(() => {
            this.dismissLoading();
            resolve()
          }).catch((err) => {
            this.dismissLoading();
            reject()
          })

        }).catch((err) => {
          this.dismissLoading();
          reject()
        })

      })

    })

  }


}
