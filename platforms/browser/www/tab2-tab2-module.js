(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/services.service */ "6+PL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
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











var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, loadingCtrl, toastCtrl, camera, http, router, services, actionSheetCtrl, alertCtrl, modalCtrl, firebaseCordova) {
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
        this.userName = "";
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.getUser();
    };
    Tab2Page.prototype.getUser = function () {
        var _this = this;
        this.firebaseCordova.authState
            .subscribe(function (user) {
            if (user) {
                console.log('authorized user');
                _this.userID = user.uid;
                _this.userName = user.displayName;
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
    Tab2Page.prototype.getProfile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.services.getProfile(id).subscribe((function (data) {
                    console.log(data[0].payload.doc.data());
                    if (data.length === 0) {
                        _this.empty = false;
                        console.log('empty');
                    }
                    else {
                        _this.empty = true;
                        _this.item = data;
                        _this.userName = data[0].payload.doc.data().username;
                        _this.photoUrl = data[0].payload.doc.data().img;
                    }
                }));
                return [2 /*return*/];
            });
        });
    };
    Tab2Page.prototype.updateToken = function (token, uid) {
        firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"]().collection("users").doc(uid).set({
            token: token,
            tokenUpdate: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp()
        }, {
            merge: true
        }).then(function () {
            console.log("token saved to cloud firestore");
        }).catch(function (err) {
            console.log(err);
        });
    };
    Tab2Page.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.loading) {
                    this.loading.dismiss();
                }
                return [2 /*return*/];
            });
        });
    };
    Tab2Page.prototype.addPhoto = function () {
        this.launchCamera();
    };
    Tab2Page.prototype.launchCamera = function () {
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
    Tab2Page.prototype.post = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"]().collection("posts").add({
            text: this.text,
            created: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(),
            owner: firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
            owner_name: this.userName,
            owner_photo: this.photoUrl,
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
                        this.router.navigateByUrl('/tabs/feed');
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            console.log(err);
        });
    };
    Tab2Page.prototype.ago = function (time) {
        var difference = moment__WEBPACK_IMPORTED_MODULE_10__(time).diff(moment__WEBPACK_IMPORTED_MODULE_10__());
        return moment__WEBPACK_IMPORTED_MODULE_10__["duration"](difference).humanize();
    };
    Tab2Page.prototype.upload = function (name) {
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
                        ref = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref("postImages/" + name);
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
                                firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"]().collection("posts").doc(name).update({
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
    Tab2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
    ]; };
    Tab2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tab2',
            template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]
    }
];
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Upload</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/']\">\n        Back\n        <ion-icon mode=\"ios\" color=\"primary\" slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen padding>\n\n  <ion-row margin class=\"rowStyle\">\n    <button ion-button icon-only color=\"primary\" clear (click)=\"addPhoto()\">\n      <ion-icon name=\"images\"></ion-icon>\n    </button>\n\n    <ion-input type=\"text\" placeholder=\"Say something...\" [(ngModel)]=\"text\"></ion-input>\n\n    <button ion-button icon-only color=\"primary\" clear (click)=\"post()\">\n      <ion-icon name=\"send\"></ion-icon>\n    </button>\n  </ion-row>\n\n  <ion-row margin class=\"rowStyle\" *ngIf=\"image\">\n\n    <ion-card class=\"round-corners\">\n      <!-- <ion-badge class=\"badge\">\n        <ion-icon name=\"close\" class=\"close-icon\" (click)=\"openAlert()\"></ion-icon>\n      </ion-badge> -->\n      <img [src]=\"image\" class=\"round-corners\">\n    </ion-card>\n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map