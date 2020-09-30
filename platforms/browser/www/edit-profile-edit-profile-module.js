(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "12cG":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nh4 {\n  color: #222428;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n#file-upload {\n  font-size: 14px;\n}\n\n.titulo {\n  color: #FCD000;\n  font-size: 24px;\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.boton ion-button {\n  height: 39px;\n  border-radius: 50px;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.sep {\n  margin-top: 10px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  color: #232B38;\n}\n\n.input-card {\n  border-radius: 5rem;\n  background: #F5F6F7;\n  box-shadow: 0 3px 80px rgba(39, 68, 74, 0.2);\n}\n\nform.input-box {\n  border: 2px solid #C5CCCD;\n  border-radius: 1rem;\n  background: #FFFFFF;\n  transition: .2s all;\n}\n\nform.input-box:focus-within {\n  border: 2px solid #02C4D9;\n}\n\nform.input-box:focus-within.error {\n  border: 2px solid #F54D3D;\n}\n\ninput {\n  border: none;\n  background: transparent;\n  padding: 1.125rem 1rem;\n  width: 95%;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1.5rem;\n  transition: .2s all;\n}\n\ninput:not(:last-child) {\n  border-bottom: 2px solid #ECEEEE;\n}\n\ninput::-moz-placeholder {\n  color: #9DA8AB;\n}\n\ninput:-ms-input-placeholder {\n  color: #9DA8AB;\n}\n\ninput::placeholder {\n  color: #9DA8AB;\n}\n\ninput:focus {\n  outline: none;\n  color: #08242A;\n  padding: 2rem 1rem;\n}\n\ninput:focus::-moz-placeholder {\n  color: #758589;\n}\n\ninput:focus:-ms-input-placeholder {\n  color: #758589;\n}\n\ninput:focus::placeholder {\n  color: #758589;\n}\n\ninput.error {\n  color: #F54D3D;\n}\n\ninput.success {\n  color: #02C4D9;\n}\n\n.buttone {\n  position: relative;\n  border: none;\n  padding: 1rem 3rem;\n  margin: 1rem;\n  border-radius: 99999px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family: \"Poppins\", sans-serif;\n  transition: .2s all;\n  transition-timing-function: ease;\n}\n\n.buttone:hover {\n  transform: translatey(3px);\n}\n\n.buttone:focus {\n  outline: none;\n}\n\n.buttone.teal {\n  background-color: #02C4D9;\n  box-shadow: 0 7px 50px rgba(2, 196, 217, 0.5);\n  color: #FFFFFF;\n}\n\n.buttone.teal:hover {\n  box-shadow: 0 2px 10px rgba(2, 196, 217, 0.5);\n}\n\n.buttone.google {\n  background-color: #FFFFFF;\n  box-shadow: 0 3px 20px rgba(39, 68, 74, 0.2);\n  color: #506569;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 1rem;\n}\n\n.buttone.google > img {\n  height: 20px;\n  width: 20px;\n}\n\n.buttone.google:hover {\n  box-shadow: 0 1px 5px rgba(39, 68, 74, 0.2);\n}\n\n.ionicon {\n  font-size: 90px;\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\ninput[type=\"file\"] {\n  display: none;\n}\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNFO0VBQ0UsY0FBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7QUFFckI7O0FBQ0U7RUFDRSxlQUFjO0FBRWxCOztBQUVFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDckI7O0FBRUU7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFHRTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUFyQjs7QUFHRTtFQUNFLGdCQUFnQjtBQUFwQjs7QUFFRTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2xCOztBQUdFO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFBaEQ7O0FBR0U7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFBdkI7O0FBR0U7RUFDRSx5QkFBeUI7QUFBN0I7O0FBR0U7RUFDRSx5QkFBeUI7QUFBN0I7O0FBR0U7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXZCOztBQUdFO0VBQ0UsZ0NBQWdDO0FBQXBDOztBQUdFO0VBQ0UsY0FBYztBQUFsQjs7QUFERTtFQUNFLGNBQWM7QUFBbEI7O0FBREU7RUFDRSxjQUFjO0FBQWxCOztBQUdFO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFBdEI7O0FBR0U7RUFDRSxjQUFjO0FBQWxCOztBQURFO0VBQ0UsY0FBYztBQUFsQjs7QUFERTtFQUNFLGNBQWM7QUFBbEI7O0FBR0U7RUFDRSxjQUFjO0FBQWxCOztBQUdFO0VBQ0UsY0FBYztBQUFsQjs7QUFHRTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUFwQzs7QUFHRTtFQUNFLDBCQUEwQjtBQUE5Qjs7QUFHRTtFQUNFLGFBQWE7QUFBakI7O0FBR0U7RUFDRSx5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLGNBQWM7QUFBbEI7O0FBR0U7RUFDRSw2Q0FBNkM7QUFBakQ7O0FBR0U7RUFDRSx5QkFBeUI7RUFDekIsNENBQTRDO0VBQzVDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUFyQjs7QUFHRTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQWY7O0FBR0U7RUFDRSwyQ0FBMkM7QUFBL0M7O0FBSUU7RUFDRSxlQUFlO0FBRG5COztBQUlFO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBRGhCOztBQUdFO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVix3QkFBd0I7QUFBNUI7O0FBU0U7RUFDRSxhQUFhO0FBTmpCOztBQVFFO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsK0JBQThCO0FBTGxDIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBoNCB7XG4gICAgY29sb3I6IzIyMjQyODtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gICNmaWxlLXVwbG9hZHtcbiAgICBmb250LXNpemU6MTRweDtcbiAgfVxuICBcbiAgXG4gIC50aXR1bG8ge1xuICAgIGNvbG9yOiAjRkNEMDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG4gIFxuICAuYm90b24gaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuc2VwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogIzIzMkIzODtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNGNUY2Rjc7XG4gICAgYm94LXNoYWRvdzogMCAzcHggODBweCByZ2JhKDM5LCA2OCwgNzQsIDAuMik7XG4gIH1cbiAgXG4gIGZvcm0uaW5wdXQtYm94IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzVDQ0NEO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgYWxsO1xuICB9XG4gIFxuICBmb3JtLmlucHV0LWJveDpmb2N1cy13aXRoaW4ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMkM0RDk7XG4gIH1cbiAgXG4gIGZvcm0uaW5wdXQtYm94OmZvY3VzLXdpdGhpbi5lcnJvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y1NEQzRDtcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAxLjEyNXJlbSAxcmVtO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcbiAgfVxuICBcbiAgaW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQ0VFRUU7XG4gIH1cbiAgXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5REE4QUI7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjMDgyNDJBO1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc1ODU4OTtcbiAgfVxuICBcbiAgaW5wdXQuZXJyb3Ige1xuICAgIGNvbG9yOiAjRjU0RDNEO1xuICB9XG4gIFxuICBpbnB1dC5zdWNjZXNzIHtcbiAgICBjb2xvcjogIzAyQzREOTtcbiAgfVxuICBcbiAgLmJ1dHRvbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5OXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIHRyYW5zaXRpb246IC4ycyBhbGw7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIH1cbiAgXG4gIC5idXR0b25lOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoM3B4KTtcbiAgfVxuICBcbiAgLmJ1dHRvbmU6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b25lLnRlYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMkM0RDk7XG4gICAgYm94LXNoYWRvdzogMCA3cHggNTBweCByZ2JhKDIsIDE5NiwgMjE3LCAwLjUpO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIFxuICAuYnV0dG9uZS50ZWFsOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMiwgMTk2LCAyMTcsIDAuNSk7XG4gIH1cbiAgXG4gIC5idXR0b25lLmdvb2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IHJnYmEoMzksIDY4LCA3NCwgMC4yKTtcbiAgICBjb2xvcjogIzUwNjU2OTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgfVxuICBcbiAgLmJ1dHRvbmUuZ29vZ2xlPmltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIFxuICAuYnV0dG9uZS5nb29nbGU6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDM5LCA2OCwgNzQsIDAuMik7XG4gIH1cbiAgXG4gIFxuICAuaW9uaWNvbiB7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICB9XG4gIFxuICAuZmlsZVVwbG9hZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5maWxlVXBsb2FkIGlucHV0LnVwbG9hZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICBcbiAgLy9lc3RpbG8gZGUgaW5wdXQgdGlwbyBmaWxlIGVsIHF1ZSBkZWJlcyBtb2RpZmljYXIgZXMgbGEgY2xhc2UgLmN1c3RvbS1maWxlLXVwbG9hZFxuICBcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "QYDN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar no-border>\n\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons slot=\"end\" padding>\n      <ion-button (click)=\"save(name, phone, about, username)\" slot=\"end\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"form\">\n\n    <div text-center>\n      <img *ngIf=\"img && !urlImage\" src=\"{{img}}\" class=\"circle\">\n      <img *ngIf=\"urlImage\" [src]=\"urlImage | async\" class=\"circle\">\n\n      <br>\n      <br>\n      <img *ngIf=\"!urlImage && !img\" src=\"assets/user.svg\" width=\"200px\"> <br>\n    </div>\n\n\n    <div margin-bottom margin-top text-center>\n      <label class=\"custom-file-upload\" style=\"margin:auto;max-width:400px\">\n        <input id=\"file-upload\" placeholder=\"Seleciona imagen\" type=\"file\" accept=\".png, .jpg\"\n          (change)=\"onUpload($event)\" />\n        <ion-icon margin-right name=\"cloud-download\"></ion-icon> Select profile photo\n      </label>\n    </div>                                                                                                                                                                                  \n    <br>\n    <h3 class=\"goodfont\">Profile info</h3>\n\n    <br>\n    <ion-item>\n      <ion-input [(ngModel)]=\"username\" (keyup.enter)=\"moveFocus(b)\" placeholder=\"username\"></ion-input>\n      <ion-icon name=\"at\" slot=\"start\"></ion-icon>\n    </ion-item>\n    <br>\n    <ion-item margin-bottom margin-bottom>\n      <ion-input (keyup.enter)=\"moveFocus(c)\" type=\"text\" #b placeholder=\"Name\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    <ion-item margin-bottom margin-bottom>\n      <ion-input #c (keyup.enter)=\"moveFocus(d)\" type=\"text\" placeholder=\"Phone\" [(ngModel)]=\"phone\"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom margin-bottom>\n      <ion-input [(ngModel)]=\"mail\" disabled></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom margin-bottom>\n      <ion-textarea #d (keyup.enter)=\"save(name, phone, about)\" type=\"text\" placeholder=\"About\" [(ngModel)]=\" about\">\n      </ion-textarea>\n    </ion-item>\n\n\n\n    <input #imageProd type=\"hidden\" [value]=\"urlImage | async\" style=\"color:black;\">\n    <br><br>\n    <!-- <ion-button mode=\"ios\" size=\"large\" class=\"main-container\" color=\"light\" expand=\"block\">\n    Save</ion-button> -->\n  </div>\n</ion-content>");

/***/ }),

/***/ "Wvzw":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile.page */ "x9OG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "x9OG":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "QYDN");
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss */ "12cG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/services.service */ "6+PL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
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









var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(roouter, services, afs, loadingController, auth) {
        this.roouter = roouter;
        this.services = services;
        this.afs = afs;
        this.loadingController = loadingController;
        this.auth = auth;
    }
    EditProfilePage.prototype.ngOnInit = function () {
        this.getUser();
    };
    EditProfilePage.prototype.getUser = function () {
        var _this = this;
        this.auth.authState
            .subscribe(function (user) {
            if (user) {
                _this.mail = user.email;
                _this.uid = user.uid;
                console.log(_this.mail);
                _this.getProfile(_this.uid);
            }
        });
    };
    EditProfilePage.prototype.getProfile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.services.getProfile(id).subscribe(function (data) {
                    console.log(data);
                    if (data.length !== 0) {
                        console.log(data[0].payload.doc);
                        _this.cp = true;
                        _this.id = data[0].payload.doc.id;
                        _this.name = data[0].payload.doc.data().name;
                        _this.phone = data[0].payload.doc.data().phone;
                        _this.about = data[0].payload.doc.data().about;
                        _this.img = data[0].payload.doc.data().img;
                        _this.username = data[0].payload.doc.data().username;
                        console.log('profile full');
                    }
                    else {
                        _this.cp = false;
                        console.log('profile empty');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EditProfilePage.prototype.onUpload = function (e) {
        var _this = this;
        console.log(e.target.files[0]);
        var id = Math.random().toString(36).substring(2);
        var file = e.target.files[0];
        var filePath = "image/pic_" + id;
        var ref = this.afs.ref(filePath);
        var task = this.afs.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        this.presentLoading();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
    };
    EditProfilePage.prototype.save = function (name, phone, about, username) {
        var _this = this;
        console.log(this.cp);
        var image = this.inputimageProd.nativeElement.value;
        var data = {
            name: name,
            phone: phone,
            mail: this.mail,
            img: image || this.img,
            about: about,
            uid: this.uid,
            username: username || 'null'
        };
        console.log(data);
        if (this.cp === false) {
            this.services.createUser(data).then(function (res) {
                console.log('Upload' + res);
                _this.roouter.navigateByUrl("/profile");
            });
        }
        else {
            this.services.updateUser(data, this.id).then(function (res) {
                console.log('Upload' + res);
                _this.roouter.navigateByUrl("/profile");
            });
        }
    };
    EditProfilePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading image',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.prototype.moveFocus = function (nextElement) {
        nextElement.setFocus();
    };
    EditProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
    ]; };
    EditProfilePage.propDecorators = {
        inputimageProd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['imageProd', { static: true },] }]
    };
    EditProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-profile',
            template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module.js.map