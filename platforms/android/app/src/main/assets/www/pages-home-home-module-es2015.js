(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/home/home.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/home/home.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"primaryDark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleHeader\">\r\n      <ion-text class=\"titleText\">medics grid</ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"grid\">\r\n    <ion-row class=\"row\">\r\n      <ion-col>\r\n\r\n          <ion-button (click)=\"getPO()\" fill=\"clear\" class=\"featureHome\" >\r\n            <ion-img class=\"icons\" src=\"../../assets/icon/purchaseOrder.png\"></ion-img>\r\n          </ion-button>\r\n          <ion-badge color=\"secondary\">{{pendingpurchaseOrders}}</ion-badge>\r\n          <p class=\"bodyText\" style=\"margin: 0px\">PurchaseOrders</p>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"getGRN()\" fill=\"clear\" class=\"featureHome\" >\r\n          <ion-img class=\"icons\" src=\"../../assets/icon/purchaseOrder.png\"></ion-img>\r\n        </ion-button>\r\n        <p class=\"bodyText\" style=\"margin: 0px\">GoodsReceiptNotes</p>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n\r\n  <!-- <button ion-button (click)=\"getPO()\">PurchaseOrders</button> -->\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/pages/home/home-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/home/home-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/pages/home/home.module.ts":
/*!***************************************!*\
  !*** ./src/pages/home/home.module.ts ***!
  \***************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/pages/home/home.page.scss":
/*!***************************************!*\
  !*** ./src/pages/home/home.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: var(--ion-color-light);\n}\n\n.row {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\n#notifications-badge {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-dark);\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  height: 25px;\n  width: 25px;\n  padding-top: 5px;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.featureHome {\n  height: 85px;\n  width: 110px;\n  border-radius: 15%;\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-primary-dark);\n}\n\n.disabledFeatureHome {\n  height: 85px;\n  width: 110px;\n  border-radius: 15%;\n  background-color: white;\n  color: #d1f39c;\n  transform: translateY(-50%);\n}\n\n.grid {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 6%;\n}\n\n.iconAppearence {\n  zoom: 2;\n}\n\n.lowerDiv {\n  height: 20%;\n  width: 100%;\n}\n\n.upperDiv {\n  width: 100%;\n}\n\nion-col {\n  padding: 6%;\n}\n\n.diabledText {\n  color: #d1f39c;\n}\n\n.titleHeader {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9ob21lL0Q6XFxEZXZlbG9wbWVudFxcR3JpZFxcbWVkaWNzLWdyaWQtYXBwL3NyY1xccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUdBLDJCQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDSko7O0FEUUE7RUFDSSxPQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFBO0VBRUksV0FBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtBQ05KOztBRFNBO0VBQ0ksY0FBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSiIsImZpbGUiOiJzcmMvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbm90aWZpY2F0aW9ucy1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mZWF0dXJlSG9tZSB7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uZGlzYWJsZWRGZWF0dXJlSG9tZSB7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjZDFmMzljO1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6NiU7XHJcbn1cclxuXHJcblxyXG4uaWNvbkFwcGVhcmVuY2Uge1xyXG4gICAgem9vbTogMi4wO1xyXG59XHJcblxyXG4ubG93ZXJEaXYge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVwcGVyRGl2IHtcclxuICAgIC8vIGhlaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogNiU7XHJcbn1cclxuXHJcbi5kaWFibGVkVGV4dCB7XHJcbiAgICBjb2xvcjogI2QxZjM5YztcclxufVxyXG5cclxuLnRpdGxlSGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4ucm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJlSG9tZSB7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cblxuLmRpc2FibGVkRmVhdHVyZUhvbWUge1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNkMWYzOWM7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNiU7XG59XG5cbi5pY29uQXBwZWFyZW5jZSB7XG4gIHpvb206IDI7XG59XG5cbi5sb3dlckRpdiB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVwcGVyRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiA2JTtcbn1cblxuLmRpYWJsZWRUZXh0IHtcbiAgY29sb3I6ICNkMWYzOWM7XG59XG5cbi50aXRsZUhlYWRlciB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/home/home.page.ts":
/*!*************************************!*\
  !*** ./src/pages/home/home.page.ts ***!
  \*************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/http/http.service */ "./src/services/http/http.service.ts");
/* harmony import */ var src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/utility/utility.service */ "./src/services/utility/utility.service.ts");
/* harmony import */ var src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/storage/storage.service */ "./src/services/storage/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let HomePage = class HomePage {
    constructor(router, httpService, utilityService, storageService, menuCtrl, loadingController) {
        this.router = router;
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.storageService = storageService;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.supplierDetails = [];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
        // this.getSupplierdetails();
        this.getPPO();
        // this.getGRNCount();
    }
    getPPO() {
        // this.status = 'PROCESSED';
        this.status = 'PENDING';
        const url = '/supplier/purchaseOrders/' + this.status;
        this.httpService.get(url)
            .then((purchaseOrders) => {
            if (purchaseOrders.length > 0) {
                this.pendingpurchaseOrders = purchaseOrders.length;
                console.log('Saved Pending Purchase Orders ', this.pendingpurchaseOrders);
            }
        })
            .catch((error) => {
            console.log('Error', error);
        });
    }
    getPO() {
        this.router.navigate(['purchase-orders']);
    }
    getGRN() {
        this.router.navigate(['goods-receipt-notes']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map