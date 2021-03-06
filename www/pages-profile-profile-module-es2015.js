(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/profile.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/profile.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"primaryDark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" defaultHref=\"home\" icon=\"chevron-back-outline\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleHeader\">\r\n      <ion-text class=\"titleText\">Edit Profile</ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field class=\"input\">\r\n          <input matInput name=\"name\" placeholder=\"Name\" required [(ngModel)]=\"name\"\r\n            (keyup)=\"validateName($event)\" autocomplete=\"off\">\r\n          <mat-error *ngIf=true>This field is Required</mat-error>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field class=\"input\">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput placeholder=\"Ex. pat@example.com\" [(ngModel)]=\"email\" readonly>\r\n          <mat-error *ngIf=\"true\">\r\n            Email is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field class=\"input\">\r\n          <mat-label>City</mat-label>\r\n          <input matInput [(ngModel)]=\"address\" readonly>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field class=\"input\">\r\n          <span matPrefix>+91 &nbsp;</span>\r\n          <input type=\"tel\" matInput maxlength=\"10\" name=\"phone\" placeholder=\"Phone Number\" required\r\n            [(ngModel)]=\"phone\" (keyup)=\"numberValidate($event)\" autocomplete=\"off\">\r\n          <mat-icon matSuffix>call</mat-icon>\r\n          <mat-error *ngIf=true>This field is Required</mat-error>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar align=\"center\" class=\"footer\" (click)=\"validateUser()\">\r\n    SAVE\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/pages/profile/profile-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/profile/profile-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/pages/profile/profile.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.module.ts ***!
  \*********************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/pages/profile/profile.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/pages/profile/profile.page.scss":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".radio-group {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n}\n\n.radio-button {\n  padding: 0.5%;\n  padding-top: 5%;\n  margin-right: 3%;\n}\n\n.input {\n  width: 100%;\n}\n\nion-grid {\n  padding: 4px 8px 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wcm9maWxlL0Q6XFxEZXZlbG9wbWVudFxcR3JpZFxcbWVkaWNzLWdyaWQtYXBwL3NyY1xccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDSSxXQUFBO0FDRU47O0FEQUU7RUFDRSxzQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAucmFkaW8tYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgfVxyXG4gIC5pbnB1dCB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHggMCA4cHg7XHJcbiAgfVxyXG4gICIsIi5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogNHB4IDhweCAwIDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/profile/profile.page.ts":
/*!*******************************************!*\
  !*** ./src/pages/profile/profile.page.ts ***!
  \*******************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/http/http.service */ "./src/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/utility/utility.service */ "./src/services/utility/utility.service.ts");
/* harmony import */ var src_services_date_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/date/date.service */ "./src/services/date/date.service.ts");
/* harmony import */ var src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/storage/storage.service */ "./src/services/storage/storage.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");









let ProfilePage = class ProfilePage {
    constructor(platform, httpService, navCtrl, dialog, router, utilityService, dateService, storageService) {
        this.platform = platform;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.dialog = dialog;
        this.router = router;
        this.utilityService = utilityService;
        this.dateService = dateService;
        this.storageService = storageService;
    }
    ionViewWillEnter() {
        this.supplierDetails = this.storageService.get('supplier');
        console.log(this.supplierDetails);
        this.name = this.supplierDetails.name;
        this.phone = this.supplierDetails.phone;
        this.email = this.supplierDetails.email;
        this.address = this.supplierDetails.city.city;
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            if (this.router.url === '/profile') {
                this.router.navigate(['home']);
            }
        });
    }
    validateUser() {
        const emailRegex = /^([a-zA_Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        const nameRegex = /^([A-Za-z ]{1,60})?$/;
        if (!this.name) {
            this.utilityService.presentAlert('name is mandatory', 'Enter your first name.');
            return;
        }
        if (!nameRegex.test(this.name)) {
            this.utilityService.presentAlert('Invalid first name', 'name can contain alphabets only.');
            return;
        }
        if (this.email && !emailRegex.test(this.email.toLowerCase())) {
            this.utilityService.presentAlert('Invalid email', 'Please enter a valid email.');
            return;
        }
        if (!this.phone) {
            this.utilityService.presentAlert('Invalid phone number', 'Please enter your phone number.');
            return;
        }
        if (!(this.phone.toString().length === 10)) {
            this.utilityService.presentAlert('Invalid phone number', 'Enter a valid phone number.');
            return;
        }
        // this.editProfile();
    }
    validateName(event) {
        if (!(event.key && event.key.match('[A-Za-z ]'))) {
            this.name = this.name.substr(0, this.name.length - 1);
        }
    }
    numberValidate(event) {
        if (!(event.key && event.key.match('[0-9]'))) {
            this.phone = this.phone.substr(0, this.phone.length - 1);
        }
    }
    updateUser(supplier) {
        this.storageService.set('supplier', supplier, true);
    }
    ngOnInit() {
        // this.supplierDetails = this.storageService.get('supplier');
        // console.log(this.supplierDetails);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: src_services_date_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] },
    { type: src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/services/date/date.service.ts":
/*!*******************************************!*\
  !*** ./src/services/date/date.service.ts ***!
  \*******************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DateService = class DateService {
    constructor() { }
    to12HourFormat(time) {
        try {
            const min = time.split(':');
            let hours = parseFloat(time);
            let suffix;
            suffix = (hours >= 12) ? ' PM' : ' AM';
            hours = ((hours + 11) % 12 + 1);
            time = hours + ':' + min[1] + suffix;
            return time;
        }
        catch (e) {
            return time;
        }
    }
    toDBdateFormat(date) {
        try {
            let day = (date.getDate()).toString();
            day = +day < 10 ? '0' + day : day;
            let month = (date.getMonth() + 1).toString();
            month = +month < 10 ? '0' + month : month;
            const year = date.getFullYear().toString();
            const time = date.toLocaleTimeString();
            return day + '/' + month + '/' + year;
        }
        catch (e) {
            return date + '';
        }
    }
    dateStringToDate(dt) {
        try {
            const dateArray = dt.split('/');
            const dateString = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
            console.log('DateString', dateString);
            const date = new Date(dateString);
            console.log('Date', date);
            return date;
        }
        catch (e) {
            return dt;
        }
    }
};
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateService);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map