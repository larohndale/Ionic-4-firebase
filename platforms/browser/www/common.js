(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine = {
  getEngine: function getEngine() {
    var win = window;
    return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
  },
  available: function available() {
    return !!this.getEngine();
  },
  isCordova: function isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor: function isCapacitor() {
    var win = window;
    return !!win.Capacitor;
  },
  impact: function impact(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style: style
    });
  },
  notification: function notification(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style: style
    });
  },
  selection: function selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart: function selectionStart() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged: function selectionChanged() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd: function selectionEnd() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

var hapticSelection = function hapticSelection() {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


var hapticSelectionStart = function hapticSelectionStart() {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


var hapticSelectionChanged = function hapticSelectionChanged() {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


var hapticSelectionEnd = function hapticSelectionEnd() {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


var hapticImpact = function hapticImpact(options) {
  HapticEngine.impact(options);
};



/***/ }),

/***/ "6+PL":
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesService = /** @class */ (function () {
    function ServicesService(afs, rout) {
        this.afs = afs;
        this.rout = rout;
        this.anuncios = [];
        this.info = [];
    }
    ServicesService.prototype.goto = function (id) {
        this.rout.navigateByUrl(id);
    };
    // User stuff
    ServicesService.prototype.getProfile = function (id) {
        var _this = this;
        this.itemsCollection = this.afs.collection("users/" + id + "/profile/");
        return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (info) {
            _this.info = [];
            for (var _i = 0, info_1 = info; _i < info_1.length; _i++) {
                var infos = info_1[_i];
                _this.info.unshift(infos);
            }
            return _this.info;
        }));
    };
    ServicesService.prototype.createUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection("users/" + value.uid + "/profile").add({
                name: value.name,
                phone: value.phone,
                mail: value.mail,
                img: value.img,
                uid: value.uid,
                adress: value.adress,
                date: Date.now(),
                username: value.username,
            });
            _this.rout.navigateByUrl("profile");
        });
    };
    ServicesService.prototype.updateUser = function (value, id) {
        return this.afs.collection('users').doc(value.uid).collection('profile').doc(id).set(value);
    };
    // Entry stuff
    ServicesService.prototype.AddEntry = function (description) {
        var _this = this;
        // uniq generetad id 
        var id = Math.random().toString(36).substring(2);
        return new Promise(function (resolve, reject) {
            _this.afs.collection("entrys").doc(id).set({
                description: description,
                id: id,
                date: Date.now()
            });
            _this.rout.navigateByUrl("profile");
        });
    };
    ServicesService.prototype.getEntrys = function () {
        var _this = this;
        this.itemsCollection = this.afs.collection("entrys");
        return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (info) {
            _this.info = [];
            for (var _i = 0, info_2 = info; _i < info_2.length; _i++) {
                var infos = info_2[_i];
                _this.info.unshift(infos);
            }
            return _this.info;
        }));
    };
    ServicesService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: function fn(dur, index, total) {
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      var angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: function fn(dur, index, total) {
      var step = index / total;
      var animationDelay = "".concat(dur * step - dur, "ms");
      var angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: function fn() {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: function fn() {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: function fn(_, index) {
      var animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': "".concat(9 - 9 * index, "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
var SPINNERS = spinners;


/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");



var attachComponent = /*#__PURE__*/function () {
  var _ref = Object(_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
    var el;
    return _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!delegate) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

          case 2:
            if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
              _context.next = 4;
              break;
            }

            throw new Error('framework delegate is missing');

          case 4:
            el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

            if (cssClasses) {
              cssClasses.forEach(function (c) {
                return el.classList.add(c);
              });
            }

            if (componentProps) {
              Object.assign(el, componentProps);
            }

            container.appendChild(el);

            if (!el.componentOnReady) {
              _context.next = 11;
              break;
            }

            _context.next = 11;
            return el.componentOnReady();

          case 11:
            return _context.abrupt("return", el);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var detachComponent = function detachComponent(delegate, element) {
  if (element) {
    if (delegate) {
      var container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
  var currentTouchedButton;
  var initialTouchedButton;

  var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
    if (typeof document === 'undefined') {
      return;
    }

    var target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.add('ion-activated');
    });
    hapticFeedbackFn();
  };

  var clearActiveButton = function clearActiveButton() {
    var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!currentTouchedButton) {
      return;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.remove('ion-activated');
    });
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el: el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: function onStart(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
    },
    onMove: function onMove(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
    },
    onEnd: function onEnd() {
      clearActiveButton(true);
      Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");




var hostContext = function hostContext(selector, el) {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


var createColorClasses = function createColorClasses(color, cssClassMap) {
  return typeof color === 'string' && color.length > 0 ? Object.assign(Object(_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
    'ion-color': true
  }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
};

var getClassList = function getClassList(classes) {
  if (classes !== undefined) {
    var array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(function (c) {
      return c != null;
    }).map(function (c) {
      return c.trim();
    }).filter(function (c) {
      return c !== '';
    });
  }

  return [];
};

var getClassMap = function getClassMap(classes) {
  var map = {};
  getClassList(classes).forEach(function (c) {
    return map[c] = true;
  });
  return map;
};

var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

var openURL = /*#__PURE__*/function () {
  var _ref = Object(_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, ev, direction, animation) {
    var router;
    return _Users_dominquecox_Development_real_ploonu_Ionic_4_firebase_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
              _context.next = 5;
              break;
            }

            router = document.querySelector('ion-router');

            if (!router) {
              _context.next = 5;
              break;
            }

            if (ev != null) {
              ev.preventDefault();
            }

            return _context.abrupt("return", router.push(url, direction, animation));

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ })

}]);
//# sourceMappingURL=common.js.map