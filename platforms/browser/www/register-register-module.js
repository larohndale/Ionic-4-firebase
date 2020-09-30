(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding text-center>\n    \n    <div  class=\"form\">\n        <img style=\"margin:auto;\" src=\"assets/icon/ionic_firebase-logo.png\" alt=\"\">\n        <h4>Register\n        </h4>\n        <h3 class=\"goodfont\">Ionic  Firestarter</h3>\n        <ion-list>\n            <ion-item>\n                <ion-input type=\"text\" placeholder=\"Email\" (keyup.enter)=\"moveFocus(b)\" [(ngModel)]=\"email\"></ion-input>\n\n            </ion-item>\n            <br>\n            <ion-item>\n                <ion-input [type]=\"passwordType\" #b type=\"password\" (keyup.enter)=\"moveFocus(c)\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n                <ion-icon (click)='hideShowPassword()' name=\"eye\" item-right></ion-icon>\n            </ion-item>\n            <br>\n            <ion-item>\n\n                <ion-input (keyup.enter)=\"register()\" [type]=\"passwordType\" #c placeholder=\"Repeat password\" type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n                <ion-icon (click)='hideShowPassword()' name=\"eye\" item-right></ion-icon>\n            </ion-item>\n\n        </ion-list>\n        <br>\n        <ion-button class=\"goodfont boton\"  mode=\"ios\" fill=\"solid\" expand=\"block\" color=\"primary\" (click)=\"register()\">Registrer</ion-button>\n        <br>\n        <p class=\"register-text\" (click)=\"goLogin()\"> You have a account ?<a> Login</a> </p>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
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





var RegisterPage = /** @class */ (function () {
    function RegisterPage(afr, navCtrl, alertController) {
        this.afr = afr;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, cpassword, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, email = _a.email, password = _a.password, cpassword = _a.cpassword;
                        if (!(password !== cpassword)) return [3 /*break*/, 1];
                        this.errorpassIguales();
                        this.navCtrl.navigateForward(['/register']);
                        return [3 /*break*/, 4];
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afr.signInWithEmailAndPassword(email, password).then(function (data) {
                                console.log(data);
                                setTimeout(function () {
                                    _this.navCtrl.navigateRoot('/tabs/feed');
                                }, 1000);
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        if (error_1.code === 'auth/wrong-password') {
                            this.error('Incorrect Password');
                        }
                        if (error_1.code === 'auth/user-not-found') {
                            this.error('User dont found');
                        }
                        if (error_1.code === 'auth/email-already-in-use') {
                            this.error('User already use');
                        }
                        if (error_1.code === 'auth/argument-error') {
                            this.error('Argument error');
                        }
                        if (error_1.code === 'auth/invalid-email') {
                            this.error('Invalid email');
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.goLogin = function () {
        this.navCtrl.navigateBack(['/login']);
    };
    RegisterPage.prototype.errorpassIguales = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'The password dont macth',
                            buttons: ['OK']
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
    RegisterPage.prototype.errorServ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Something went wrong try later',
                            buttons: ['OK']
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
    RegisterPage.prototype.presentLoading = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterPage.prototype.error = function (mensaje) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: mensaje,
                            buttons: ['OK']
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
    RegisterPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    RegisterPage.prototype.moveFocus = function (nextElement) {
        nextElement.setFocus();
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: #222428;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.titulo {\n  color: #FCD000;\n  font-size: 24px;\n  font-weight: bold;\n}\n\nh1 {\n  margin-top: 100px;\n  font-size: 50px;\n  font-weight: bold;\n  text-align: center;\n  color: #FCD000;\n  margin-bottom: 100px;\n}\n\n.boton ion-button {\n  height: 39px;\n  border-radius: 50px;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.sep {\n  margin-top: 10px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  color: #232B38;\n}\n\nh3 {\n  color: #C5CCCD;\n  font-weight: 500;\n}\n\n.input-card {\n  border-radius: 5rem;\n  background: #F5F6F7;\n  box-shadow: 0 3px 80px rgba(39, 68, 74, 0.2);\n}\n\nform.input-box {\n  border: 2px solid #C5CCCD;\n  border-radius: 1rem;\n  background: #FFFFFF;\n  transition: .2s all;\n}\n\nform.input-box:focus-within {\n  border: 2px solid #02C4D9;\n}\n\nform.input-box:focus-within.error {\n  border: 2px solid #F54D3D;\n}\n\ninput {\n  border: none;\n  background: transparent;\n  padding: 1.125rem 1rem;\n  width: 95%;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1.5rem;\n  transition: .2s all;\n}\n\ninput:not(:last-child) {\n  border-bottom: 2px solid #ECEEEE;\n}\n\ninput::-moz-placeholder {\n  color: #9DA8AB;\n}\n\ninput:-ms-input-placeholder {\n  color: #9DA8AB;\n}\n\ninput::placeholder {\n  color: #9DA8AB;\n}\n\ninput:focus {\n  outline: none;\n  color: #08242A;\n  padding: 2rem 1rem;\n}\n\ninput:focus::-moz-placeholder {\n  color: #758589;\n}\n\ninput:focus:-ms-input-placeholder {\n  color: #758589;\n}\n\ninput:focus::placeholder {\n  color: #758589;\n}\n\ninput.error {\n  color: #F54D3D;\n}\n\ninput.success {\n  color: #02C4D9;\n}\n\n.buttone {\n  position: relative;\n  border: none;\n  padding: 1rem 3rem;\n  margin: 1rem;\n  border-radius: 99999px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family: \"Poppins\", sans-serif;\n  transition: .2s all;\n  transition-timing-function: ease;\n}\n\n.buttone:hover {\n  transform: translatey(3px);\n}\n\n.buttone:focus {\n  outline: none;\n}\n\n.buttone.teal {\n  background-color: #02C4D9;\n  box-shadow: 0 7px 50px rgba(2, 196, 217, 0.5);\n  color: #FFFFFF;\n}\n\n.buttone.teal:hover {\n  box-shadow: 0 2px 10px rgba(2, 196, 217, 0.5);\n}\n\n.buttone.google {\n  background-color: #FFFFFF;\n  box-shadow: 0 3px 20px rgba(39, 68, 74, 0.2);\n  color: #506569;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 1rem;\n}\n\n.buttone.google > img {\n  height: 20px;\n  width: 20px;\n}\n\n.buttone.google:hover {\n  box-shadow: 0 1px 5px rgba(39, 68, 74, 0.2);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7QUFDckI7O0FBRUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQWFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7QUFWbEI7O0FBYUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBVnBCOztBQWFBO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFWaEQ7O0FBYUE7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFWdkI7O0FBYUE7RUFDSSx5QkFBeUI7QUFWN0I7O0FBYUE7RUFDSSx5QkFBeUI7QUFWN0I7O0FBYUE7RUFDSSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBVnZCOztBQWFBO0VBQ0ksZ0NBQWdDO0FBVnBDOztBQWFBO0VBQ0ksY0FBYztBQVZsQjs7QUFTQTtFQUNJLGNBQWM7QUFWbEI7O0FBU0E7RUFDSSxjQUFjO0FBVmxCOztBQWFBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFWdEI7O0FBYUE7RUFDSSxjQUFjO0FBVmxCOztBQVNBO0VBQ0ksY0FBYztBQVZsQjs7QUFTQTtFQUNJLGNBQWM7QUFWbEI7O0FBYUE7RUFDSSxjQUFjO0FBVmxCOztBQWFBO0VBQ0ksY0FBYztBQVZsQjs7QUFhQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdDQUFnQztBQVZwQzs7QUFhQTtFQUNJLDBCQUEwQjtBQVY5Qjs7QUFhQTtFQUNJLGFBQWE7QUFWakI7O0FBYUE7RUFDSSx5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLGNBQWM7QUFWbEI7O0FBYUE7RUFDSSw2Q0FBNkM7QUFWakQ7O0FBYUE7RUFDSSx5QkFBeUI7RUFDekIsNENBQTRDO0VBQzVDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQVZyQjs7QUFhQTtFQUNJLFlBQVk7RUFDWixXQUFXO0FBVmY7O0FBYUE7RUFDSSwyQ0FBMkM7QUFWL0MiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgY29sb3I6IzIyMjQyODtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXR1bG8ge1xuICAgIGNvbG9yOiAjRkNEMDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDEge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6I0ZDRDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmJvdG9uIGlvbi1idXR0b24ge1xuICAgIGhlaWdodDogMzlweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy8gOmhvc3Qge1xuLy8gICAgIGlvbi1jb250ZW50IHtcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQ7XG4vLyAgICAgfVxuLy8gfVxuLy8gaW9uLWNvbnRlbnQgOjpuZy1kZWVwIGlvbi1zY3JvbGwge1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpIWltcG9ydGFudDtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IWltcG9ydGFudDtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuLy8gfVxuaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiAjMjMyQjM4O1xufVxuXG5oMyB7XG4gICAgY29sb3I6ICNDNUNDQ0Q7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gICAgYmFja2dyb3VuZDogI0Y1RjZGNztcbiAgICBib3gtc2hhZG93OiAwIDNweCA4MHB4IHJnYmEoMzksIDY4LCA3NCwgMC4yKTtcbn1cblxuZm9ybS5pbnB1dC1ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNUNDQ0Q7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIHRyYW5zaXRpb246IC4ycyBhbGw7XG59XG5cbmZvcm0uaW5wdXQtYm94OmZvY3VzLXdpdGhpbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAyQzREOTtcbn1cblxuZm9ybS5pbnB1dC1ib3g6Zm9jdXMtd2l0aGluLmVycm9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjU0RDNEO1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDEuMTI1cmVtIDFyZW07XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiAuMnMgYWxsO1xufVxuXG5pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VDRUVFRTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzlEQThBQjtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICMwODI0MkE7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzU4NTg5O1xufVxuXG5pbnB1dC5lcnJvciB7XG4gICAgY29sb3I6ICNGNTREM0Q7XG59XG5cbmlucHV0LnN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjMDJDNEQ5O1xufVxuXG4uYnV0dG9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTk5cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbn1cblxuLmJ1dHRvbmU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgzcHgpO1xufVxuXG4uYnV0dG9uZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbmUudGVhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyQzREOTtcbiAgICBib3gtc2hhZG93OiAwIDdweCA1MHB4IHJnYmEoMiwgMTk2LCAyMTcsIDAuNSk7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5idXR0b25lLnRlYWw6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgyLCAxOTYsIDIxNywgMC41KTtcbn1cblxuLmJ1dHRvbmUuZ29vZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggcmdiYSgzOSwgNjgsIDc0LCAwLjIpO1xuICAgIGNvbG9yOiAjNTA2NTY5O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xufVxuXG4uYnV0dG9uZS5nb29nbGU+aW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5idXR0b25lLmdvb2dsZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMzksIDY4LCA3NCwgMC4yKTtcbn0iXX0= */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "b0Bx");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map