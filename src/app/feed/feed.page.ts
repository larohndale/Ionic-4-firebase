import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CommentsPage } from '../comments/comments.component';
import * as firebase from 'firebase';
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  text: string = "";
  posts: any[] = [];
  pageSize: number = 10;
  cursor: any;
  infiniteEvent: any;
  image: string;
  userID: any;
  photoUrl: any;
  item: any;
  empty: Boolean;
  public loading: HTMLIonLoadingElement;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private camera: Camera, private http: HttpClient, private router: Router, private services: ServicesService, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private modalCtrl: ModalController, private firebaseCordova: AngularFireAuth) {
    this.getPosts();
    this.getUser();
  }

  getUser() {
    this.firebaseCordova.authState
      .subscribe(
        user => {
          if (user) {
            console.log(user);
            console.log('authorized user');
            this.userID = user.uid;
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
      console.log(data);
      if (data.length === 0) {
        this.empty = false;
        console.log('empty');
      } else {
        this.empty = true;
        this.item = data;
        this.userID = data[0].payload.doc.data().uid
        this.photoUrl = data[0].payload.doc.data().img;
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


  async loadPost() {
    const loading = this.loadingCtrl.create({
      message: "Loading Feed..."
    });
    return loading;
  }

  getPosts() {

    this.posts = [];

    this.loadPost();

    let query = firebase.firestore().collection("posts").orderBy("created", "desc").limit(this.pageSize);

    query.onSnapshot((snapshot) => {
      let changedDocs = snapshot.docChanges();



      changedDocs.forEach((change) => {
        if (change.type == "added") {
          // TODO
        }

        if (change.type == "modified") {
          for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == change.doc.id) {
              this.posts[i] = change.doc;
              console.log(this.posts)
            }
          }
        }

        if (change.type == "removed") {
          // TODO
        }
      })
    })

    query.get()
      .then((docs) => {
        docs.forEach((doc) => {
          this.posts.push(doc);
        })
        this.dismissLoading()
        this.cursor = this.posts[this.posts.length - 1];

        console.log(this.posts)

      }).catch((err) => {
        console.log(err)
      })
  }

  public async dismissLoading(): Promise<void> {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  loadMorePosts(event: any) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      firebase.firestore().collection("posts").orderBy("created", "desc").startAfter(this.cursor).limit(this.pageSize).get()
        .then((docs) => {

          docs.forEach((doc) => {
            this.posts.push(doc);
          })

          console.log(this.posts)

          if (docs.size < this.pageSize) {
            // all documents have been loaded
            event.target.disabled = true;
            this.infiniteEvent = event;
          } else {
            event.target.complete();
            this.cursor = this.posts[this.posts.length - 1];
          }

        }).catch((err) => {
          console.log(err)
        })
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.post.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  refresh(event: any) {

    this.posts = [];

    this.getPosts();

    if (this.infiniteEvent) {
      setTimeout(() => {
        this.infiniteEvent.target.disabled = true;
        event.target.complete();
      }, 2000);
    }
    event.target.complete();
  }

  post() {

    firebase.firestore().collection("posts").add({
      text: this.text,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      owner: firebase.auth().currentUser.uid,
      owner_name: firebase.auth().currentUser.displayName,
      owner_photo: firebase.auth().currentUser.photoURL,
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

      this.getPosts();
    }).catch((err) => {
      console.log(err)
    })

  }

  ago(time: any) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  logout() {

    firebase.auth().signOut().then(async () => {

      (await this.toastCtrl.create({
        message: "You have been logged out successfully.",
        duration: 2000
      })).present();

      this.navCtrl.navigateRoot('/feed');
    });

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

  async openAlert() {
    const alert = await this.alertCtrl.create({
      message: 'Sure want to delete this!!!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          cssClass: 'secondary',
          handler: () => {
            // this.delete(index);
            this.image = '';
          }
        }, {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');

          }
        }
      ]
    });

    await alert.present();
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

  like(post: any) {

    let body = {
      postId: post.id,
      userId: firebase.auth().currentUser.uid,
      action: post.data().likes && post.data().likes[firebase.auth().currentUser.uid] == true ? "unlike" : "like"
    }

    // // let toast = this.toastCtrl.create({
    // //   message: "Updating like... Please wait."
    // // });

    // toast.present();


    this.http.post("https://us-central1-ploonu-1c84c.cloudfunctions.net/updateLikesCount", JSON.stringify(body), {
      responseType: "text"
    }).subscribe((data) => {
      console.log(data)

      // toast.setMessage("Like updated!");
      // setTimeout(() => {
      //   toast.dismiss();
      // }, 1500)
    }, (error) => {
      // toast.setMessage("An error has occured. Please try again later.")
      // setTimeout(() => {
      //   toast.dismiss();
      // }, 1500)
      console.log(error)
    })

  }

  async comment(post: any) {
    let mainAction = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "View All Comments",
          handler: () => {
            this.viewAllComments(post);
          }
        },
        {
          text: "New Comment",
          handler: () => {
            this.newComment(post);
          }
        }
      ]
    })
    await mainAction.present();
  }

  async viewAllComments(post: any) {
    const comments = this.modalCtrl.create({
      component: CommentsPage,
      componentProps: {
        'post': post
      }
    });
    return (await comments).present();
  }

  async newComment(post: any) {
    const newComment = this.alertCtrl.create({
      header: "New Comment",
      message: "Type your comment",
      inputs: [
        {
          name: "comment",
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: () => { }
        },
        {
          text: "Post",
          handler: async (data) => {

            if (data.comment) {

              firebase.firestore().collection("comments").add({
                text: data.comment,
                post: post.id,
                owner: firebase.auth().currentUser.uid,
                owner_name: firebase.auth().currentUser.displayName,
                created: firebase.firestore.FieldValue.serverTimestamp()
              }).then(async (doc) => {
                console.log(doc);
                let commentToast = await this.toastCtrl.create({
                  message: "Comment posted successfully.",
                  duration: 3000
                });
                commentToast.present();
              }).catch(async (err) => {
                let commentErrorToast = await this.toastCtrl.create({
                  message: err.message,
                  duration: 3000
                });
                await commentErrorToast.present();
              });
            }

          }
        }
      ]
    })

    await (await newComment).present();
  }

  async deleteAction(post: any) {
    let deleteAction = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Delete",
          handler: () => {
            this.delete(post);
          }
        },
        {
          text: "Cancel",
          handler: () => { }
        },
      ]
    })
    await deleteAction.present();
  }

  async delete(post: any) {
    if (firebase.auth().currentUser.uid === post.data().owner) {
      let _post = firebase.firestore().collection('posts');
      try {
        await _post.doc(post.id).delete();
        const deleteToast = await this.toastCtrl.create({
          message: 'Deleted',
          duration: 2100
        })
        await deleteToast.present();
        this.getPosts();
      }
      catch (err) {
        const deleteError = await this.toastCtrl.create({
          message: err.message,
          duration: 2100
        })
        await deleteError.present();
      }
    }
  }
}
