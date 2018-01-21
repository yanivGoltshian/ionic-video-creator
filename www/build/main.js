webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_CloudinaryService__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_play__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_VideoSpecService__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_GeneratorService__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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










var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, camera, cloudinaryService, videoSpecService, generatorService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.cloudinaryService = cloudinaryService;
        this.videoSpecService = videoSpecService;
        this.generatorService = generatorService;
        this.alertCtrl = alertCtrl;
        this.playPage = __WEBPACK_IMPORTED_MODULE_4__play_play__["a" /* PlayPage */];
        this.currentSlideIndex = 0;
        this.isGenerating = false;
        this.videoSpecService.newScene();
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.slides.ionSlideDidChange.subscribe(function () {
            _this.currentSlideIndex = _this.slides.getActiveIndex();
        });
    };
    HomePage.prototype.addScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.videoSpecService.addSceneAfter(this.currentSlideIndex);
                setTimeout(function () { return _this.slides.slideNext(); }, 100);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.removeImage = function (scene) {
        delete scene.base64Image;
        delete scene.imageUrl;
        delete scene.imageUrlStyle;
    };
    HomePage.prototype.addCamera = function (scene) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.addImage(scene, true)];
            });
        });
    };
    HomePage.prototype.addImage = function (scene, useCam) {
        return __awaiter(this, void 0, void 0, function () {
            var imageData, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scene.loading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.camera.getPicture({
                                sourceType: useCam ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                                destinationType: this.camera.DestinationType.DATA_URL
                            })];
                    case 2:
                        imageData = _b.sent();
                        scene.base64Image = "data:image/jpeg;base64," + imageData;
                        delete scene.imageUrlStyle;
                        _a = scene;
                        return [4 /*yield*/, this.cloudinaryService.uploadBase64Image(scene.base64Image)];
                    case 3:
                        _a.imageUrl = _b.sent();
                        scene.imageUrlStyle = "url(" + scene.imageUrl + ")";
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5:
                        scene.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.juggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var spec;
            return __generator(this, function (_a) {
                if (!this.isReadyToJuggle()) {
                    this.showValidationAlert();
                    return [2 /*return*/];
                }
                spec = this.videoSpecService.buildVideoSpec();
                // console.log(spec);
                this.generateVideo(spec);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.generateVideo = function (videoData) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isGenerating = true;
                        loader = this.createLoader();
                        loader.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.generatorService.generateVideo(videoData)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, this.generatorService.waitForVideoReady(response.temp.webm.src)];
                    case 3:
                        _a.sent();
                        this.isGenerating = false;
                        loader.dismiss();
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__play_play__["a" /* PlayPage */], {
                            videoObj: response.temp
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error(JSON.stringify(error_2));
                        loader.dismiss();
                        this.showVideoGenerationError();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.createLoader = function () {
        return this.loadingCtrl.create({
            content: "<video autoplay loop>" +
                "<source src='https://img.playbuzz.com/video/upload/vc_h264/v1516279729/wjorshthsqfucvpy0ulc.mp4'>" +
                "</video>",
            spinner: 'hide',
            cssClass: 'videoOverlayLoader',
            showBackdrop: false
        });
    };
    HomePage.prototype.isSceneRemovable = function (scene) {
        return this.videoSpecService.scenes.length > 1;
    };
    HomePage.prototype.removeScene = function (scene) {
        var idx = this.slides.getActiveIndex();
        this.slides.slideTo(idx === 0 ? 0 : idx - 1);
        this.videoSpecService.removeScene(scene);
    };
    HomePage.prototype.isReadyToJuggle = function () {
        return this.videoSpecService.areScenesValid();
    };
    HomePage.prototype.showValidationAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Missing content',
            subTitle: 'Please add images to all scenes',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.showVideoGenerationError = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Video generation failed.',
                            buttons: ['OK']
                        });
                        return [4 /*yield*/, alert.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\yaniv\Playbuzz\ionic\video-mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img class="navbar-image"\n\n        src="../assets/imgs/Juggler-Logo.png" />\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-slides [pager]="true">\n\n    <ion-slide *ngFor="let scene of videoSpecService.scenes">\n\n      <div class="scene-media-container"\n\n        [style.background-image]="scene.imageUrlStyle">\n\n        <button class="media-button-image"\n\n          (click)="addImage(scene, false)"\n\n          *ngIf="!scene.base64Image && !scene.loading"></button>\n\n        <button class="media-button-camera"\n\n          (click)="addCamera(scene)"\n\n          *ngIf="!scene.base64Image && !scene.loading"></button>\n\n        <button class="scene-button replace-media-button"\n\n          (click)="addImage(scene)"\n\n          *ngIf="scene.imageUrlStyle"></button>\n\n        <button class="scene-button remove-media-button"\n\n          (click)="removeImage(scene)"\n\n          *ngIf="scene.imageUrlStyle"></button>\n\n        <button class="scene-button remove-scene-button"\n\n          (click)="removeScene(scene)"\n\n          *ngIf="isSceneRemovable(scene)"></button>\n\n        <div class="spinner"\n\n          *ngIf="scene.loading">\n\n        </div>\n\n        <div class="scene-text-container">\n\n          <input class="scene-text"\n\n            placeholder="Add text"\n\n            [(ngModel)]="scene.text"\n\n            type="text">\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <div class="bottom-controls">\n\n    <button ion-button\n\n      outline\n\n      icon-left\n\n      (click)="addScene()">\n\n      <ion-icon name="add"></ion-icon>Add scene</button>\n\n    <button ion-button\n\n      class="juggle-button"\n\n      (click)="juggle()"\n\n      [ngClass]="{enabled: isReadyToJuggle()}">Juggle</button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\yaniv\Playbuzz\ionic\video-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_CloudinaryService__["a" /* CloudinaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_CloudinaryService__["a" /* CloudinaryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_VideoSpecService__["a" /* VideoSpecService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_VideoSpecService__["a" /* VideoSpecService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_GeneratorService__["a" /* GeneratorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_GeneratorService__["a" /* GeneratorService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudinaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var CloudinaryService = (function () {
    function CloudinaryService(http) {
        this.http = http;
    }
    CloudinaryService.prototype.uploadBase64Image = function (base64Image) {
        return __awaiter(this, void 0, void 0, function () {
            var cloudName, unsignedUploadPreset, url, fd, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cloudName = 'playbuzz-cld';
                        unsignedUploadPreset = 'unsigned1';
                        url = "https://api.cloudinary.com/v1_1/" + cloudName + "/upload";
                        fd = new FormData();
                        fd.append('upload_preset', unsignedUploadPreset);
                        fd.append('tags', 'browser_upload');
                        fd.append('file', base64Image);
                        return [4 /*yield*/, this.http.post(url, fd).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.secure_url];
                }
            });
        });
    };
    CloudinaryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CloudinaryService);
    return CloudinaryService;
}());

//# sourceMappingURL=CloudinaryService.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var PlayPage = (function () {
    function PlayPage(http, params) {
        this.http = http;
        this.params = params;
        this.videoObj = params.get('videoObj');
        this.state = 'DEFAULT';
        console.log(this.videoObj);
    }
    PlayPage.prototype.onVideoReady = function () {
        console.log("video is ready");
    };
    PlayPage.prototype.saveVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PlayPage.prototype.crosspost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, request, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.state = 'UPLOADING';
                        url = "https://stg-video-creator.playbuzz.com/mobile/crossPostVideo";
                        request = {
                            videoUrl: this.videoObj.webm.src,
                            facebookPageUrl: "https://www.facebook.com/yosefKaro7TLV",
                            sectionId: "79084e72-1125-4d37-a6a9-62837ca660f9",
                            itemId: "12277a5f-d3e7-4c3e-8614-a13a23c3f0c4"
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(url, request).toPromise()];
                    case 2:
                        response = _a.sent();
                        this.videosYouCanCrosspostURL = response.videosYouCanCrosspostURL;
                        this.state = 'UPLOAD_COMPLETE';
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-play',template:/*ion-inline-start:"C:\yaniv\Playbuzz\ionic\video-mobile\src\pages\play\play.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img class="navbar-image" src="../assets/imgs/Juggler-Logo.png" />\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button\n              icon-only\n              (click)="saveVideo()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="play-container">\n  <div class="media-container">\n    <video controls="controls" (load)="onVideoReady()" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="video-player">\n      <source src="{{videoSrc}}" type="{{sourceType}}" />\n    </video>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="play-bottom-controls" [ngSwitch]="state">\n    <button *ngSwitchDefault\n            ion-button\n            outline\n            icon-left\n            (click)="crosspost()"\n            class="fb-button">\n      <ion-icon name="logo-facebook"></ion-icon>\n      Upload to facebook page\n    </button>\n    <button *ngSwitchCase="\'UPLOADING\'"\n            ion-button\n            outline\n            icon-left\n            class="fb-button">\n      <ion-icon name="logo-facebook"></ion-icon>\n      <!--<ion-spinner class="uploading-spinner"></ion-spinner>-->\n      Uploading...\n    </button>\n    <button *ngSwitchCase="\'UPLOAD_COMPLETE\'"\n            ion-button\n            outline\n            icon-left\n            class="upload-done">\n      <ion-icon name="checkmark"></ion-icon>\n      Uploaded to facebook :)\n    </button>\n    <!--<div *ngSwitchCase="\'UPLOADING\'"-->\n         <!--class="uploading">-->\n      <!--&lt;!&ndash;<ion-spinner class="uploading-spinner"></ion-spinner>&ndash;&gt;-->\n      <!--Uploading...-->\n    <!--</div>-->\n    <!--<a *ngSwitchCase="\'UPLOAD_COMPLETE\'"-->\n       <!--class="upload-done"-->\n       <!--href="{{videosYouCanCrosspostURL}}">-->\n      <!--<ion-icon name="checkmark" class="check"></ion-icon>-->\n      <!--Uploaded to facebook-->\n    <!--</a>-->\n  </div>\n</ion-footer>\n'/*ion-inline-end:"C:\yaniv\Playbuzz\ionic\video-mobile\src\pages\play\play.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSpecService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoSpecService = (function () {
    function VideoSpecService() {
        this.idCounter = 1;
        this.scenes = [];
    }
    VideoSpecService.prototype.newScene = function () {
        this.scenes.push({
            id: this.newId()
        });
    };
    VideoSpecService.prototype.newId = function () {
        return this.idCounter++;
    };
    VideoSpecService.prototype.addSceneAfter = function (currentSceneIndex) {
        this.scenes.splice(currentSceneIndex + 1, 0, [{
                id: this.newId()
            }]);
    };
    VideoSpecService.prototype.removeScene = function (scene) {
        var index = this.scenes.findIndex(function (x) { return x.id === scene.id; });
        if (index !== -1) {
            this.scenes.splice(index + 1, 1);
        }
    };
    VideoSpecService.prototype.buildVideoSpec = function () {
        if (this.areScenesValid()) {
            var spec = this.buildBasicSpec();
            spec.lineup = [
                this.buildIntroScene()
            ].concat(this.buildContentScenes(), [
                this.buildOutroScene(),
            ]);
            return spec;
        }
    };
    VideoSpecService.prototype.areScenesValid = function () {
        return this.scenes.length > 0 &&
            this.scenes.every(function (x) { return !!x.imageUrl; });
    };
    VideoSpecService.prototype.buildBasicSpec = function () {
        var spec = {
            "projectid": "playbuzz_videoCreator",
            "animationBase": "s3://sundaysky-authoring-repository/animations/playbuzz/juggler/latest/",
            "output": {},
            "background": {
                "audio": {
                    "href": "https://cdn.playbuzz.com/video-creator-folders/video-creator-music/High_Energy/978111_87486219.mp3",
                    "role": "music"
                }
            },
            "lineup": []
        };
        return spec;
    };
    VideoSpecService.prototype.buildIntroScene = function () {
        var scene = this.scenes[0];
        var intro = {
            "name": "INTRO",
            "animation": {
                "href": "INTRO/INTRO.vsml"
            },
            "transition": {
                "duration": 1.6,
                "style": "overlay"
            },
            "data": {
                "transition": 2,
                "media": {
                    "first": {
                        "image": {
                            "source": scene.imageUrl
                        }
                    }
                },
                "text": {
                    "first": scene.text
                }
            }
        };
        return intro;
    };
    VideoSpecService.prototype.buildContentScenes = function () {
        var _this = this;
        var _a = this.scenes, intro = _a[0], contentScenes = _a.slice(1);
        contentScenes.pop();
        var builtContentScenes = contentScenes.map(function (scene, index) {
            return _this.buildItemScene(scene, index % 2 + 1);
        });
        return builtContentScenes;
    };
    VideoSpecService.prototype.buildItemScene = function (scene, index) {
        var item = {
            "name": "ITEM_" + index,
            "animation": {
                "href": "ITEM_" + index + "/ITEM_" + index + ".vsml"
            },
            "transition": {
                "duration": 1.6,
                "style": "overlay"
            },
            "data": {
                "transition": 2,
                "media": {
                    "first": {
                        "image": {
                            "source": scene.imageUrl
                        }
                    }
                },
                "text": {
                    "first": scene.text
                }
            }
        };
        return item;
    };
    VideoSpecService.prototype.buildOutroScene = function () {
        var imageUrl = '';
        var text = '';
        if (this.scenes.length > 1) {
            var lastScene = this.scenes[this.scenes.length - 1];
            imageUrl = lastScene.imageUrl || '';
            text = lastScene.text || '';
        }
        var outroScene = {
            "name": "OUTRO",
            "animation": {
                "href": "OUTRO/OUTRO.vsml"
            },
            "transition": {
                "duration": 1.6,
                "style": "overlay"
            },
            "data": {
                "transition": 2,
                "media": {
                    "first": {
                        "image": {
                            "source": imageUrl
                        }
                    }
                },
                "text": {
                    "first": text
                }
            }
        };
        return outroScene;
    };
    VideoSpecService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], VideoSpecService);
    return VideoSpecService;
}());

//# sourceMappingURL=VideoSpecService.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppConstants__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneratorService = (function () {
    function GeneratorService(http) {
        this.http = http;
        this.generateUrl = __WEBPACK_IMPORTED_MODULE_2__AppConstants__["a" /* AppConstants */].API_ENDPOINT;
    }
    GeneratorService.prototype.generateVideo = function (videoData) {
        var url = this.generateUrl + '/mobile/generate';
        var requestConfig = {
            videoData: videoData,
        };
        return this.http.post(url, requestConfig).toPromise();
    };
    GeneratorService.prototype.waitForVideoReady = function (src) {
        return this.http.head(src, { responseType: 'arraybuffer' }).toPromise();
    };
    GeneratorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GeneratorService);
    return GeneratorService;
}());

//# sourceMappingURL=GeneratorService.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_play_play__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_CloudinaryService__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_VideoSpecService__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_GeneratorService__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_play_play__["a" /* PlayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_play_play__["a" /* PlayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_CloudinaryService__["a" /* CloudinaryService */],
                __WEBPACK_IMPORTED_MODULE_10__services_VideoSpecService__["a" /* VideoSpecService */],
                __WEBPACK_IMPORTED_MODULE_11__services_GeneratorService__["a" /* GeneratorService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\yaniv\Playbuzz\ionic\video-mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\yaniv\Playbuzz\ionic\video-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
var AppConstants = (function () {
    function AppConstants() {
    }
    AppConstants.API_ENDPOINT = 'https://stg-video-creator.playbuzz.com';
    AppConstants.LOCAL_API_ENDPOINT = 'https://localhost:8081';
    AppConstants.videoData = {
        "projectid": "playbuzz_videoCreator",
        "animationBase": "s3://sundaysky-authoring-repository/animations/playbuzz/the-fifth-element-vert/latest/",
        "output": {},
        "background": {
            "audio": {
                "href": "https://cdn.playbuzz.com/video-creator-folders/video-creator-music/Acoustic/818560_ROCKOLDIES%20Acoustic%20Fun%20FULL%20TRACK%20with%20brass%20section.mp3",
                "role": "music"
            }
        },
        "lineup": [
            {
                "name": "S_SQUARE_01_1",
                "animation": {
                    "href": "SQUARE_01/SQUARE_01.vsml"
                },
                "transition": {
                    "duration": 1.6,
                    "style": "overlay"
                },
                "data": {
                    "font": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
                    },
                    "blocks": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
                    },
                    "align": "LEFT",
                    "textColor": {
                        "IsOneTint": true,
                        "Tint2": "#fff",
                        "Tint1": "#fff",
                        "Ratio": 0.5
                    },
                    "transition": 4,
                    "duration": {
                        "first": {
                            "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
                        },
                        "video": {
                            "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
                        }
                    },
                    "color": {
                        "primary": {
                            "IsOneTint": true,
                            "Tint2": "#f3dfa2",
                            "Tint1": "#f3dfa2",
                            "Ratio": 0.5
                        },
                        "secondary": {
                            "IsOneTint": true,
                            "Tint2": "#231f20",
                            "Tint1": "#231f20",
                            "Ratio": 0.5
                        },
                        "additional": {
                            "IsOneTint": true,
                            "Tint2": "#7ebdc2",
                            "Tint1": "#7ebdc2",
                            "Ratio": 0.5
                        }
                    },
                    "settings": {
                        "shape": "arrow",
                        "style": "blur,transparency,blocks",
                        "pattern": 14
                    },
                    "media": {
                        "first": {
                            "image": {
                                "source": "https://img.playbuzz.com/image/upload/v1516184011/korvtc3mcejlmsgzafzq.jpg"
                            }
                        }
                    },
                    "text": {
                        "first": "Super!"
                    }
                }
            },
            {
                "name": "S_LANDSCAPE_01_2",
                "animation": {
                    "href": "LANDSCAPE_01/LANDSCAPE_01.vsml"
                },
                "transition": {
                    "duration": 1.6,
                    "style": "overlay"
                },
                "data": {
                    "font": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
                    },
                    "blocks": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
                    },
                    "align": "LEFT",
                    "textColor": {
                        "IsOneTint": true,
                        "Tint2": "#fff",
                        "Tint1": "#fff",
                        "Ratio": 0.5
                    },
                    "transition": 2,
                    "duration": {
                        "first": {
                            "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
                        },
                        "video": {
                            "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
                        }
                    },
                    "media": {
                        "first": {
                            "image": {
                                "source": "https://img.playbuzz.com/image/upload/v1516184027/iehq73ims0a3ezkd0csl.jpg"
                            }
                        }
                    },
                    "color": {
                        "primary": {
                            "IsOneTint": true,
                            "Tint2": "#f3dfa2",
                            "Tint1": "#f3dfa2",
                            "Ratio": 0.5
                        },
                        "secondary": {
                            "IsOneTint": true,
                            "Tint2": "#231f20",
                            "Tint1": "#231f20",
                            "Ratio": 0.5
                        },
                        "additional": {
                            "IsOneTint": true,
                            "Tint2": "#7ebdc2",
                            "Tint1": "#7ebdc2",
                            "Ratio": 0.5
                        }
                    },
                    "settings": {
                        "shape": "arrow",
                        "style": "blur,transparency,blocks",
                        "pattern": 14
                    },
                    "text": {
                        "first": "Amazing!"
                    }
                }
            },
            {
                "name": "S_SQUARE_03_3",
                "animation": {
                    "href": "SQUARE_03/SQUARE_03.vsml"
                },
                "transition": {
                    "duration": 1.6,
                    "style": "overlay"
                },
                "data": {
                    "font": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
                    },
                    "blocks": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
                    },
                    "align": "LEFT",
                    "textColor": {
                        "IsOneTint": true,
                        "Tint2": "#fff",
                        "Tint1": "#fff",
                        "Ratio": 0.5
                    },
                    "transition": 2,
                    "duration": {
                        "first": {
                            "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
                        },
                        "video": {
                            "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
                        }
                    },
                    "color": {
                        "primary": {
                            "IsOneTint": true,
                            "Tint2": "#f3dfa2",
                            "Tint1": "#f3dfa2",
                            "Ratio": 0.5
                        },
                        "secondary": {
                            "IsOneTint": true,
                            "Tint2": "#231f20",
                            "Tint1": "#231f20",
                            "Ratio": 0.5
                        },
                        "additional": {
                            "IsOneTint": true,
                            "Tint2": "#7ebdc2",
                            "Tint1": "#7ebdc2",
                            "Ratio": 0.5
                        }
                    },
                    "settings": {
                        "shape": "arrow",
                        "style": "blur,transparency,blocks",
                        "pattern": 14
                    },
                    "media": {
                        "first": {
                            "image": {
                                "source": "https://img.playbuzz.com/image/upload/v1516184045/ljlf8kjh8bjpudpn69xb.jpg"
                            }
                        }
                    },
                    "text": {
                        "first": "Graphic!"
                    }
                }
            },
            {
                "name": "CREDITS_4",
                "animation": {
                    "href": "Credits/Credits.vsml"
                },
                "transition": {
                    "duration": 2.2,
                    "style": "overlay"
                },
                "data": {
                    "font": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
                    },
                    "blocks": {
                        "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
                        "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
                        "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
                    },
                    "align": "LEFT",
                    "textColor": {
                        "IsOneTint": true,
                        "Tint2": "#fff",
                        "Tint1": "#fff",
                        "Ratio": 0.5
                    },
                    "duration": {
                        "first": {
                            "source": "https://img.playbuzz.com/video/upload/eo_3/v1508246184/silence.mp3"
                        },
                        "video": {
                            "source": "https://img.playbuzz.com/video/upload/eo_3/v1508246184/silence.mp3"
                        }
                    },
                    "Credits": "Getty Images"
                }
            }
        ]
    };
    return AppConstants;
}());

//# sourceMappingURL=AppConstants.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map