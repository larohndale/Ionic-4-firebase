(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

/***/ "WrHT":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Feed</ion-title>\n    <ion-title mode=\"ios\" color=\"primary\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n  <!-- \n  <ion-row margin class=\"rowStyle\">\n    <button ion-button icon-only color=\"primary\" clear (click)=\"addPhoto()\">\n      <ion-icon name=\"images\"></ion-icon>\n    </button>\n\n    <ion-input type=\"text\" placeholder=\"Say something...\" [(ngModel)]=\"text\"></ion-input>\n\n    <button ion-button icon-only color=\"primary\" clear (click)=\"post()\">\n      <ion-icon name=\"send\"></ion-icon>\n    </button>\n  </ion-row>\n\n  <ion-row margin class=\"rowStyle\" *ngIf=\"image\">\n\n    <ion-card class=\"round-corners\">\n      <ion-badge class=\"badge\">\n        <ion-icon name=\"close\" class=\"close-icon\" (click)=\"openAlert()\"></ion-icon>\n      </ion-badge>\n      <img [src]=\"image\" class=\"round-corners\">\n    </ion-card>\n  </ion-row> -->\n\n  <ion-refresher (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-card *ngFor=\"let post of posts\">\n    {{ post.data() | json  }}\n\n    <!-- <ion-item-divider color=\"primary\"> -->\n    <ion-item color=\"primary\">\n      <ion-avatar item-start>\n        <img [src]=\"post.data().owner_photo\" *ngIf=\"post.data().owner_photo\">\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n          *ngIf=\"!post.data().owner_photo\">\n      </ion-avatar>\n      <p class=\"ion-padding-horizontal\">@{{ post.data().owner_name }}</p>\n\n      <ion-col class=\"ion-text-end\">\n        <button *ngIf=\"userID === post.data().owner\" ion-button (click)=\"deleteAction(post)\">\n          <ion-icon class=\"icon\" name=\"trash\"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-item>\n    <!-- </ion-item-divider> -->\n\n\n    <img [src]=\"post.data().image\" *ngIf=\"post.data().image\">\n\n    <ion-card-content>\n      <p>\n        {{ post.data().text }}\n      </p>\n    </ion-card-content>\n\n\n\n    <ion-row class=\"bottom-bar\">\n      <ion-col>\n        <button ion-button class=\"text\" clear small (click)=\"like(post)\">\n          <ion-icon class=\"icon\" name=\"thumbs-up\"></ion-icon>\n          {{ post?.data().likesCount || 0 }}\n        </button>\n      </ion-col>\n\n      <ion-col>\n        <button class=\"text\" (click)=\"comment(post)\">\n          <ion-icon class=\"icon\" name=\"text\"></ion-icon>\n          {{post.data().commentsCount || 0}}\n        </button>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button class=\"text\" clear small>\n          <ion-icon class=\"icon\" name=\"time\"></ion-icon>\n          {{ ago(post.data().created.toDate()) }}\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMorePosts($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "XfKD":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-feed .rowStyle {\n  border: solid var(--ion-color-primary) 1px;\n  border-radius: 30px;\n  margin-top: 15px;\n}\n\npage-feed .rowStyle ion-input {\n  margin-top: 5px;\n}\n\npage-feed .bottom-bar {\n  background-color: var(--ion-color-primary);\n}\n\npage-feed .bottom-bar .border-right {\n  border-right: 1px solid var(--ion-color-primary);\n}\n\npage-feed .round-corners {\n  border-radius: 24px;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 20px;\n  color: #090909a5;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBRHhCOztBQUpBO0VBUVksZUFBZTtBQUEzQjs7QUFSQTtFQWNRLDBDQUEwQztBQUZsRDs7QUFaQTtFQWlCWSxnREFBZ0Q7QUFENUQ7O0FBaEJBO0VBc0JRLG1CQUFtQjtBQUYzQjs7QUFPQTtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUoxQjs7QUFPQTtFQUNJLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFKMUIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1mZWVkIHtcblxuICAgIC5yb3dTdHlsZSB7XG4gICAgICAgIGJvcmRlcjogc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuYm90dG9tLWJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgICAgICAuYm9yZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yb3VuZC1jb3JuZXJzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB9XG5cbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMwOTA5MDlhNTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "jWta":
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./feed.page.html */ "WrHT");
/* harmony import */ var _feed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.page.scss */ "XfKD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments/comments.component */ "f1Oy");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/services.service */ "6+PL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, loadingCtrl, toastCtrl, camera, http, router, services, actionSheetCtrl, alertCtrl, modalCtrl, firebaseCordova) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.http = http;
        this.router = router;
        this.services = services;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.firebaseCordova = firebaseCordova;
        this.text = "";
        this.posts = [];
        this.pageSize = 10;
        this.getPosts();
        this.getUser();
    }
    FeedPage.prototype.getUser = function () {
        var _this = this;
        this.firebaseCordova.authState
            .subscribe(function (user) {
            if (user) {
                console.log(user);
                console.log('authorized user');
                _this.userID = user.uid;
                console.log(_this.userID);
                _this.getProfile(_this.userID);
            }
            else {
                _this.router.navigateByUrl('/login');
            }
        }, function () {
            _this.router.navigateByUrl('/login');
        });
    };
    FeedPage.prototype.getProfile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.services.getProfile(id).subscribe((function (data) {
                    console.log(data);
                    if (data.length === 0) {
                        _this.empty = false;
                        console.log('empty');
                    }
                    else {
                        _this.empty = true;
                        _this.item = data;
                        _this.userID = data[0].payload.doc.data().uid;
                        _this.photoUrl = data[0].payload.doc.data().img;
                    }
                }));
                return [2 /*return*/];
            });
        });
    };
    FeedPage.prototype.updateToken = function (token, uid) {
        firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection("users").doc(uid).set({
            token: token,
            tokenUpdate: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
        }, {
            merge: true
        }).then(function () {
            console.log("token saved to cloud firestore");
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.loadPost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                loading = this.loadingCtrl.create({
                    message: "Loading Feed..."
                });
                return [2 /*return*/, loading];
            });
        });
    };
    FeedPage.prototype.getPosts = function () {
        var _this = this;
        this.posts = [];
        this.loadPost();
        var query = firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection("posts").orderBy("created", "desc").limit(this.pageSize);
        query.onSnapshot(function (snapshot) {
            var changedDocs = snapshot.docChanges();
            changedDocs.forEach(function (change) {
                if (change.type == "added") {
                    // TODO
                }
                if (change.type == "modified") {
                    for (var i = 0; i < _this.posts.length; i++) {
                        if (_this.posts[i].id == change.doc.id) {
                            _this.posts[i] = change.doc;
                            console.log(_this.posts);
                        }
                    }
                }
                if (change.type == "removed") {
                    // TODO
                }
            });
        });
        query.get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            _this.dismissLoading();
            _this.cursor = _this.posts[_this.posts.length - 1];
            console.log(_this.posts);
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.loading) {
                    this.loading.dismiss();
                }
                return [2 /*return*/];
            });
        });
    };
    FeedPage.prototype.loadMorePosts = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection("posts").orderBy("created", "desc").startAfter(_this.cursor).limit(_this.pageSize).get()
                .then(function (docs) {
                docs.forEach(function (doc) {
                    _this.posts.push(doc);
                });
                console.log(_this.posts);
                if (docs.size < _this.pageSize) {
                    // all documents have been loaded
                    event.target.disabled = true;
                    _this.infiniteEvent = event;
                }
                else {
                    event.target.complete();
                    _this.cursor = _this.posts[_this.posts.length - 1];
                }
            }).catch(function (err) {
                console.log(err);
            });
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.post.length == 100) {
                event.target.disabled = true;
            }
        }, 500);
    };
    FeedPage.prototype.refresh = function (event) {
        var _this = this;
        this.posts = [];
        this.getPosts();
        if (this.infiniteEvent) {
            setTimeout(function () {
                _this.infiniteEvent.target.disabled = true;
                event.target.complete();
            }, 2000);
        }
        event.target.complete();
    };
    FeedPage.prototype.post = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection("posts").add({
            text: this.text,
            created: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp(),
            owner: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
            owner_name: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.displayName,
            owner_photo: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.photoURL,
        }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(doc);
                        if (!this.image) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.upload(doc.id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.text = "";
                        this.image = undefined;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "Your post has been created successfully.",
                                duration: 2000
                            })];
                    case 3:
                        (_a.sent()).present();
                        this.getPosts();
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.ago = function (time) {
        var difference = moment__WEBPACK_IMPORTED_MODULE_8__(time).diff(moment__WEBPACK_IMPORTED_MODULE_8__());
        return moment__WEBPACK_IMPORTED_MODULE_8__["duration"](difference).humanize();
    };
    FeedPage.prototype.logout = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().signOut().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "You have been logged out successfully.",
                            duration: 2000
                        })];
                    case 1:
                        (_a.sent()).present();
                        this.navCtrl.navigateRoot('/feed');
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FeedPage.prototype.addPhoto = function () {
        this.launchCamera();
    };
    FeedPage.prototype.launchCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (base64Image) {
            console.log(base64Image);
            _this.image = "data:image/png;base64," + base64Image;
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.openAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Sure want to delete this!!!',
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Delete',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        // this.delete(index);
                                        _this.image = '';
                                    }
                                }, {
                                    text: 'Cancel',
                                    handler: function () {
                                        console.log('Cancel');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.upload = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var loading, ref, uploadTask;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            message: "Uploading Image..."
                        });
                        return [4 /*yield*/, loading];
                    case 1:
                        (_a.sent()).present();
                        ref = firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref("postImages/" + name);
                        uploadTask = ref.putString(this.image.split(',')[1], "base64");
                        uploadTask.on("state_changed", function (taskSnapshot) {
                            console.log(taskSnapshot);
                            var percentage = taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100;
                            _this.loadingCtrl.create({
                                message: "Uploaded " + percentage + " % ..."
                            });
                        }, function (error) {
                            console.log(error);
                        }, function () {
                            console.log("The upload is complete!");
                            uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                                firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection("posts").doc(name).update({
                                    image: url
                                }).then(function () {
                                    _this.dismissLoading();
                                    resolve();
                                }).catch(function (err) {
                                    _this.dismissLoading();
                                    reject();
                                });
                            }).catch(function (err) {
                                _this.dismissLoading();
                                reject();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FeedPage.prototype.like = function (post) {
        var body = {
            postId: post.id,
            userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
            action: post.data().likes && post.data().likes[firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid] == true ? "unlike" : "like"
        };
        // // let toast = this.toastCtrl.create({
        // //   message: "Updating like... Please wait."
        // // });
        // toast.present();
        this.http.post("https://us-central1-ploonu-1c84c.cloudfunctions.net/updateLikesCount", JSON.stringify(body), {
            responseType: "text"
        }).subscribe(function (data) {
            console.log(data);
            // toast.setMessage("Like updated!");
            // setTimeout(() => {
            //   toast.dismiss();
            // }, 1500)
        }, function (error) {
            // toast.setMessage("An error has occured. Please try again later.")
            // setTimeout(() => {
            //   toast.dismiss();
            // }, 1500)
            console.log(error);
        });
    };
    FeedPage.prototype.comment = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var mainAction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: "View All Comments",
                                    handler: function () {
                                        _this.viewAllComments(post);
                                    }
                                },
                                {
                                    text: "New Comment",
                                    handler: function () {
                                        _this.newComment(post);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        mainAction = _a.sent();
                        return [4 /*yield*/, mainAction.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.viewAllComments = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        comments = this.modalCtrl.create({
                            component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"],
                            componentProps: {
                                'post': post
                            }
                        });
                        return [4 /*yield*/, comments];
                    case 1: return [2 /*return*/, (_a.sent()).present()];
                }
            });
        });
    };
    FeedPage.prototype.newComment = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var newComment;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newComment = this.alertCtrl.create({
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
                                    handler: function () { }
                                },
                                {
                                    text: "Post",
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            if (data.comment) {
                                                firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection("comments").add({
                                                    text: data.comment,
                                                    post: post.id,
                                                    owner: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                                                    owner_name: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.displayName,
                                                    created: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
                                                }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                                    var commentToast;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(doc);
                                                                return [4 /*yield*/, this.toastCtrl.create({
                                                                        message: "Comment posted successfully.",
                                                                        duration: 3000
                                                                    })];
                                                            case 1:
                                                                commentToast = _a.sent();
                                                                commentToast.present();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                                    var commentErrorToast;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                                    message: err.message,
                                                                    duration: 3000
                                                                })];
                                                            case 1:
                                                                commentErrorToast = _a.sent();
                                                                return [4 /*yield*/, commentErrorToast.present()];
                                                            case 2:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        });
                        return [4 /*yield*/, newComment];
                    case 1: return [4 /*yield*/, (_a.sent()).present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.deleteAction = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteAction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: "Delete",
                                    handler: function () {
                                        _this.delete(post);
                                    }
                                },
                                {
                                    text: "Cancel",
                                    handler: function () { }
                                },
                            ]
                        })];
                    case 1:
                        deleteAction = _a.sent();
                        return [4 /*yield*/, deleteAction.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.delete = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var _post, deleteToast, err_1, deleteError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid === post.data().owner)) return [3 /*break*/, 8];
                        _post = firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]().collection('posts');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 8]);
                        return [4 /*yield*/, _post.doc(post.id).delete()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Deleted',
                                duration: 2100
                            })];
                    case 3:
                        deleteToast = _a.sent();
                        return [4 /*yield*/, deleteToast.present()];
                    case 4:
                        _a.sent();
                        this.getPosts();
                        return [3 /*break*/, 8];
                    case 5:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: err_1.message,
                                duration: 2100
                            })];
                    case 6:
                        deleteError = _a.sent();
                        return [4 /*yield*/, deleteError.present()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _services_services_service__WEBPACK_IMPORTED_MODULE_11__["ServicesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"] }
    ]; };
    FeedPage.propDecorators = {
        infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: true },] }]
    };
    FeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-feed',
            template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_services_service__WEBPACK_IMPORTED_MODULE_11__["ServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"]])
    ], FeedPage);
    return FeedPage;
}());



/***/ }),

/***/ "xQww":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed.page */ "jWta");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_5__["FeedPage"]
    }
];
var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_5__["FeedPage"]],
            entryComponents: []
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=feed-feed-module.js.map