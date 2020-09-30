import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as moment from 'moment';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.scss']
})
export class CommentsPage {

  post: any = {};
  comments: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private moadlCtrl: ModalController) {

    this.post = this.navParams.get("post");
    console.log(this.post)

    firebase.firestore().collection("comments")
      .where("post", "==", this.post.id)
      .orderBy("created", "asc")
      .get()
      .then((data) => {
        this.comments = data.docs;
      }).catch((err) => {
        console.log(err)
      })

  }

  close() {
    this.moadlCtrl.dismiss();
  }

  async ago(time: any) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

}
