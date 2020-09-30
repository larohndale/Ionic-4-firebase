(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "ncJE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/services.service */ "6+PL");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme.service */ "WPWp");
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







var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, services, firebaseCordova, theme) {
        this.router = router;
        this.services = services;
        this.firebaseCordova = firebaseCordova;
        this.theme = theme;
    }
    ProfilePage.prototype.enableDark = function () {
        this.theme.enableDark();
        console.log('bravo going dark');
        localStorage.setItem('theme', 'dark');
    };
    ProfilePage.prototype.enableLight = function () {
        this.theme.enableLight();
        console.log('bravo going light');
        localStorage.setItem('theme', 'light');
    };
    ProfilePage.prototype.update = function (e) {
        e.detail.checked ? this.enableDark() : this.enableLight();
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfilePage.prototype.getUser = function () {
        var _this = this;
        this.firebaseCordova.authState
            .subscribe(function (user) {
            if (user) {
                console.log('logeado');
                _this.uid = user.uid;
                console.log(_this.uid);
                _this.getProfile(_this.uid);
            }
            else {
                _this.router.navigateByUrl('/login');
            }
        }, function () {
            _this.router.navigateByUrl('/login');
        });
    };
    ProfilePage.prototype.getProfile = function (id) {
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
                    }
                }));
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.editProfile = function () {
        this.router.navigateByUrl("/edit-profile");
    };
    ProfilePage.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseCordova.signOut()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.router.navigateByUrl('/login');
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }
    ]; };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar no-border>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/home']\">\n        <ion-icon mode=\"ios\" color=\"primary\" slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"ios\" color=\"primary\"></ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"editProfile()\">\n        <ion-icon color=\"primary\" name=\"more\" slot=\"icon-only\"></ion-icon>\n\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"form\" *ngIf=\"empty\">\n\n\n    <div text-center>\n\n      <img text-center class=\"circle\" src=\"{{item[0].payload.doc.data().img}}\" alt=\"\">\n    </div>\n\n    <h2 class=\"goodfont\" style=\"font-weight:bold;\" text-center> @{{item[0].payload.doc.data().username}}</h2>\n    <h3 text-center> {{item[0].payload.doc.data().name}}</h3>\n\n    <div text-center>\n      <p> {{item[0].payload.doc.data().phone}}</p>\n      <p> {{item[0].payload.doc.data().mail}}</p>\n      <p> {{item[0].payload.doc.data().about}}</p>\n\n    </div>\n    <br><br>\n\n    <br>\n\n    <ion-list padding>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n        Dark mode\n        <ion-toggle (ionChange)=\"update($event)\" slot=\"end\" color=\"primary\"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon color=\"primary\" slot=\"start\" name=\"notifications\"></ion-icon>\n        Notifications\n      </ion-item>\n      <ion-item>\n        <ion-icon color=\"tertiary\" slot=\"start\" name=\"mail-unread\"></ion-icon>\n        News\n        <ion-toggle slot=\"end\" color=\"primary\"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-icon color=\"secondary\" slot=\"start\" name=\"settings\"></ion-icon>\n        Setting and privacy\n      </ion-item>\n\n      <ion-item>\n        <ion-icon color=\"success\" slot=\"start\" name=\"help\"></ion-icon>\n        Help center\n      </ion-item>\n      <ion-item (click)=\"editProfile()\">\n        <ion-icon color=\"primary\" slot=\"start\" name=\"hammer\"></ion-icon>\n        Edit Profile\n      </ion-item>\n      <ion-item (click)=\"signOut()\">\n        <ion-icon color=\"danger\" slot=\"start\" name=\"log-out\"></ion-icon>\n        Logout\n      </ion-item>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <p style=\"color: gray; font-size: 13px\" text-center bold>User id : {{ uid }} </p>\n\n    <br>\n    <br>\n  </div>\n\n  <div class=\"form\" text-center *ngIf=\"!empty\">\n\n\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" text-center>\n          <img width=\"200px\" style=\"margin-top:32px;\" src=\"assets/user.svg\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"12\" text-center>\n          <h3>Fill your profile</h3>\n        </ion-col>\n        <ion-col size=\"12\" text-center>\n          <ion-button (click)=\"editProfile()\">Fill it</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  color: var(--ion-color-primary);\n}\n\nh5 {\n  color: var(--ion-color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLCtCQUErQjtBQURuQzs7QUFJQTtFQUNJLCtCQUErQjtBQURuQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaDMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmg1IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIFxuXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map