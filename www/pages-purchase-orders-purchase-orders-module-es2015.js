(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-purchase-orders-purchase-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/purchase-orders/purchase-orders.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/purchase-orders/purchase-orders.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"primaryDark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" routerLink=\"/home\" icon=\"chevron-back-outline\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleHeader\">\r\n      <ion-text class=\"titleText\">PURCHASE ORDERS</ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding whiteSmoke-background\">\r\n  <mat-tab-group mat-align-tabs=\"center\" [selectedIndex]=\"activeTab\" (selectedTabChange)=\"tabClick($event)\">\r\n    <mat-tab label=\"PENDING\">\r\n      <ion-grid class=\"ion-no-padding\">\r\n      <ion-row style=\"background-color: white;\">\r\n        <ion-col size=\"1.5\">\r\n          <!-- <mat-icon (click)=\"resetData()\">refresh</mat-icon> -->\r\n          <ion-icon name=\"refresh-outline\" class=\"icons\" (click)=\"resetData()\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"5.0\"><input class=\"input3\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" autocomplete=\"on\"></ion-col>\r\n        <ion-col size=\"2\">\r\n          <img src=\"../../assets/icon/customer.png\" class=\"icons\">\r\n          <!-- </ion-col>\r\n        <ion-col size=\"1.25\"> -->\r\n          <mat-select class=\"input2\" (selectionChange)=\"onChangedSort($event)\" [(value)]=\"selected\">\r\n            <mat-option *ngFor=\"let customer of customerList \" [value]=\"customer\">\r\n              {{customer}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </ion-col>\r\n        <ion-col size=\"1.0\">\r\n          <!-- <img src=\"../../assets/icon/time-outline.png\" class=\"icons2\" (click)=\"sortDate()\"> -->\r\n          <ion-icon name=\"calendar-outline\" class=\"icons\" color=\"primary\" (click)=\"sortDate()\" ></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"0.5\">\r\n          <span  style=\"color: rgb(196, 190, 190);\" [innerHtml]=\"(dateCount%2==0) ? '&#x25B2;' : '&#x25BC;'\">\r\n          </span>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1.0\">\r\n          <img src=\"../../assets/icon/rupee.png\" class=\"icons\" (click)=\"sortPrice()\">\r\n        </ion-col>\r\n        <ion-col size=\"0.5\">\r\n        <span  style=\"color: rgb(196, 190, 190);\" ></span><span  style=\"color: rgb(196, 190, 190);\" [innerHtml]=\"(countPrice%2==0)  ? '&#x25B2;' : '&#x25BC;'\"></span>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n      <div class=\"labelCenter\" *ngIf=\"noPendingOrders\">\r\n        <ion-label class=\"labelCenter\">No Pending Orders</ion-label>\r\n      </div>\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-no-padding\">\r\n          <ion-col class=\"ion-no-padding\" size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\"\r\n            *ngFor=\"let po of filterItems | customerFilter:searchTerm; let i=index; trackBy: trackByFn\">\r\n            <ion-card class=\"ion-no-padding\">\r\n              <ion-card-header class=\"ion-no-padding\"> \r\n                <ion-grid class=\"primaryLight\">\r\n                  <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"2\" >\r\n                      <ion-img class=\"icons2\" src=\"../../assets/icon/customer.png\"></ion-img>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" >\r\n                      <span class=\"text2\"  style=\"font-size: 16px;\">\r\n                       {{po.customerName}}\r\n                      </span>\r\n                      </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"ion-no-padding\">\r\n                <ion-row>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-img class=\"icons\" src=\"../../assets/icon/number.png\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"6.6\">\r\n                    <span class=\"text2\"  style=\"font-size: 14px;\">\r\n                      {{po.documentNumber}}\r\n                      </span>\r\n                  </ion-col>\r\n                  <ion-col style=\"color: #A9C145;\" size=\"3.9\">\r\n                    {{po.status}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-icon name=\"today-outline\" class=\"icons\" item-start color=\"primary\"></ion-icon>\r\n                  </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <span class=\"text2\"  style=\"font-size: 14px;\"> {{po.date}}</span>\r\n                      </ion-col>\r\n                    <ion-col size=\"1.5\">\r\n                      <ion-img class=\"icons\" src=\"../../assets/icon/rupee.png\"></ion-img>\r\n                    </ion-col>\r\n                  <ion-col style=\"color: #A9C145;\" size=\"2\">\r\n                    <span class=\"text2\"  style=\"font-size: 14px;\">  {{po.totalNetAmount}}</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-button class=\"button-size\" color=\"#F5F5F6\" (click)=\"viewPO(po._id)\"> View</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-img class=\"icons\" src=\"../../assets/icon/location.png\"></ion-img>\r\n                  </ion-col >\r\n                  <ion-col size=\"6.5\">\r\n                    <span class=\"text2\"  style=\"font-size: 14px;\"> \r\n                      {{po.customerAddress}}\r\n                      </span>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-button class=\"button-size\" color=\"secondary\" (click)=\"fulfill(po._id)\">Fulfill</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!-- <div class=\"footer\">\r\n        <div style=\"text-align: center;\">\r\n          Number of POs, {{filterItems.length}} Rs. {{totalNetAmountPending}}\r\n        </div>\r\n      </div> -->\r\n    </mat-tab>\r\n    <mat-tab label=\"PROCESSED\">\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row style=\"background-color: white;\">\r\n          <ion-col size=\"1.5\">\r\n            <!-- <mat-icon (click)=\"resetData()\">refresh</mat-icon> -->\r\n            <ion-icon name=\"refresh-outline\" class=\"icons\" (click)=\"resetDataProcessed()\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"5.0\"><input class=\"input3\" placeholder=\"Search\" [(ngModel)]=\"searchTermProcessed\"></ion-col>\r\n          <ion-col size=\"2\">\r\n            <img src=\"../../assets/icon/customer.png\" class=\"icons\">\r\n            <!-- </ion-col>\r\n          <ion-col size=\"1.25\"> -->\r\n            <mat-select class=\"input2\" (selectionChange)=\"onChangedSortProcessed($event)\" [(value)]=\"selectedProcessed\">\r\n              <mat-option *ngFor=\"let customer of customerList \" [value]=\"customer\">\r\n                {{customer}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </ion-col>\r\n          <ion-col size=\"1.0\">\r\n            <!-- <img src=\"../../assets/icon/time-outline.png\" class=\"icons2\" (click)=\"sortDate()\"> -->\r\n            <ion-icon name=\"calendar-outline\" class=\"icons\" color=\"primary\" (click)=\"sortDateProcessed()\" ></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"0.5\">\r\n            <span  style=\"color: rgb(196, 190, 190);\" [innerHtml]=\"(dateCount%2==0) ? '&#x25B2;' : '&#x25BC;'\">\r\n            </span>\r\n          </ion-col>\r\n  \r\n          <ion-col size=\"1.0\">\r\n            <img src=\"../../assets/icon/rupee.png\" class=\"icons\" (click)=\"sortPriceProcessed()\">\r\n          </ion-col>\r\n          <ion-col size=\"0.5\">\r\n          <span  style=\"color: rgb(196, 190, 190);\" ></span><span  style=\"color: rgb(196, 190, 190);\" [innerHtml]=\"(countPrice%2==0)  ? '&#x25B2;' : '&#x25BC;'\"></span>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <div class=\"labelCenter\" *ngIf=\"noProcessedOrders\">\r\n        <ion-label class=\"labelCenter\">No Processed Orders</ion-label>\r\n      </div>\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-no-padding\">\r\n          <ion-col class=\"ion-no-padding\" size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\"\r\n            *ngFor=\"let po of  filterItemsProcessed  | customerFilter:searchTermProcessed let i=index;\">\r\n            <ion-card class=\"ion-no-padding\">\r\n              <ion-card-header class=\"ion-no-padding\"> \r\n                <ion-grid class=\"primaryLight\">\r\n                  <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"2\" >\r\n                      <ion-img class=\"icons2\" src=\"../../assets/icon/customer.png\"></ion-img>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" >\r\n                      <span class=\"text2\"  style=\"font-size: 16px;\">\r\n                       {{po.customerName}}\r\n                      </span>\r\n                      </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"ion-no-padding\">\r\n                <ion-row>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-img class=\"icons\" src=\"../../assets/icon/number.png\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"6.6\">\r\n                    <span class=\"text2\"  style=\"font-size: 14px;\">\r\n                      {{po.documentNumber}}\r\n                      </span>\r\n                  </ion-col>\r\n                  <ion-col style=\"color: #A9C145;\" size=\"3.9\">\r\n                    {{po.status}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-icon name=\"today-outline\" class=\"icons\" item-start color=\"primary\"></ion-icon>\r\n                  </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <span class=\"text2\"  style=\"font-size: 14px;\"> {{po.date}}</span>\r\n                      </ion-col>\r\n                    <ion-col size=\"1.5\">\r\n                      <ion-img class=\"icons\" src=\"../../assets/icon/rupee.png\"></ion-img>\r\n                    </ion-col>\r\n                  <ion-col style=\"color: #A9C145;\" size=\"2\">\r\n                    <span class=\"text2\"  style=\"font-size: 14px;\">  {{po.totalNetAmount}}</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-button class=\"button-size\" color=\"#F5F5F6\" (click)=\"viewPO(po._id)\"> View</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-img class=\"icons\" src=\"../../assets/icon/location.png\"></ion-img>\r\n                  </ion-col >\r\n                  <ion-col size=\"6.5\">\r\n                    <span class=\"text2\"  style=\"font-size: 14px;\"> \r\n                      {{po.customerAddress}}\r\n                      </span>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-button class=\"button-size\" color=\"secondary\" (click)=\"fulfill(po._id)\">Fulfill</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</ion-content>\r\n\r\n<ion-footer color=\"primary\">\r\n  <ion-toolbar  color=\"primary\">\r\n    <div style=\"text-align: center;\">\r\n      <label *ngIf=\"activeTab\"> Number of POs, {{processedpurchaseOrders.length}} Rs. {{totalNetAmountProcessed}}</label>\r\n   <label *ngIf=\"!activeTab\"> \r\n    Number of POs, {{filterItems.length}} Rs. {{totalNetAmountPending}}</label>\r\n  </div></ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/pages/purchase-orders/customerFilter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/pages/purchase-orders/customerFilter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: customerFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerFilterPipe", function() { return customerFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// import {  } from 'module';
let customerFilterPipe = 
// tslint:disable-next-line:class-name
class customerFilterPipe {
    transform(value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        // tslint:disable-next-line:only-arrow-functions
        return value.filter(function (item) {
            return JSON.stringify(item.documentNumber).toLowerCase().includes(args);
        });
    }
};
customerFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customerFilter'
    })
    // tslint:disable-next-line:class-name
], customerFilterPipe);



/***/ }),

/***/ "./src/pages/purchase-orders/purchase-orders-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/purchase-orders/purchase-orders-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PurchaseOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersPageRoutingModule", function() { return PurchaseOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _purchase_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-orders.page */ "./src/pages/purchase-orders/purchase-orders.page.ts");




const routes = [
    {
        path: '',
        component: _purchase_orders_page__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrdersPage"]
    }
];
let PurchaseOrdersPageRoutingModule = class PurchaseOrdersPageRoutingModule {
};
PurchaseOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PurchaseOrdersPageRoutingModule);



/***/ }),

/***/ "./src/pages/purchase-orders/purchase-orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/pages/purchase-orders/purchase-orders.module.ts ***!
  \*************************************************************/
/*! exports provided: PurchaseOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersPageModule", function() { return PurchaseOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _purchase_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-orders-routing.module */ "./src/pages/purchase-orders/purchase-orders-routing.module.ts");
/* harmony import */ var _purchase_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-orders.page */ "./src/pages/purchase-orders/purchase-orders.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _customerFilter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customerFilter.pipe */ "./src/pages/purchase-orders/customerFilter.pipe.ts");









let PurchaseOrdersPageModule = class PurchaseOrdersPageModule {
};
PurchaseOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _purchase_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrdersPageRoutingModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        ],
        declarations: [_purchase_orders_page__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrdersPage"], _customerFilter_pipe__WEBPACK_IMPORTED_MODULE_8__["customerFilterPipe"]]
    })
], PurchaseOrdersPageModule);



/***/ }),

/***/ "./src/pages/purchase-orders/purchase-orders.page.scss":
/*!*************************************************************!*\
  !*** ./src/pages/purchase-orders/purchase-orders.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-size {\n  width: 80%;\n  color: black;\n}\n\n.bcolor {\n  color: gray;\n}\n\n.input2 {\n  width: 20%;\n  color: black;\n}\n\n.input3 {\n  width: 70%;\n  color: black;\n}\n\n.container {\n  display: flex;\n}\n\n.input {\n  margin-top: 0.5%;\n}\n\n.input .mat-form-field-wrapper {\n  padding-top: 0 !important;\n}\n\n.mat-select-arrow {\n  visibility: hidden;\n}\n\n.footer {\n  position: fixed;\n  z-index: 1;\n  padding: 0%;\n}\n\n.SearchBar {\n  position: absolute;\n  top: 355px;\n  left: 575px;\n}\n\n.SearchBar input {\n  height: 30px;\n  width: 50px;\n}\n\n.toolbar {\n  color: black;\n  position: fixed;\n  background-color: #ffffff;\n  position: relative;\n  transform: translateY(10px);\n}\n\n.past-appointment-label {\n  height: 25px;\n  width: 100%;\n  color: black;\n  position: fixed;\n  bottom: 1px;\n  background-color: #ffffff;\n}\n\n.addIcon {\n  width: 40px;\n  height: 50px;\n  padding-left: 0;\n}\n\n.ion-col {\n  border: 1px solid #e4e4e7;\n  background: #F5F5F6;\n  text-align: center;\n}\n\n.ion-col2 {\n  border: 1px solid #e4e4e7;\n  background: #F5F5F6;\n  text-align: right;\n}\n\n.icons2 {\n  display: inline-block;\n  vertical-align: middle;\n  width: 33px;\n  height: 33px;\n  margin-left: 9px;\n}\n\n.text-align-middle {\n  position: relative;\n  transform: translateY(10px);\n}\n\n.labelCenter {\n  text-align: center;\n  margin-top: 63%;\n  font-size: 14pt;\n}\n\n.warning-icon {\n  position: relative;\n  margin: auto;\n  left: 2px;\n  zoom: 2.3;\n  color: var(--ion-color-danger);\n}\n\nion-fab {\n  padding-bottom: 20px;\n}\n\n.rows {\n  margin-top: 18px;\n}\n\nion-item {\n  padding: 0;\n}\n\n.whiteSmoke-background {\n  --ion-background-color: var(--ion-color-light);\n}\n\n.my-thin-col {\n  flex: 0 0 4px;\n}\n\n.my-thin-col2 {\n  flex: 0 0 6px;\n}\n\n.grid {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n}\n\n::ng-deep .mat-tab-header {\n  z-index: 999;\n  width: 100%;\n  position: fixed !important;\n  background: var(--ion-color-light);\n}\n\n::ng-deep .mat-tab-header-pagination.mat-tab-header-pagination-disabled {\n  display: none !important;\n}\n\n::ng-deep .mat-tab-body-content {\n  width: 100%;\n  padding-right: 1%;\n  padding-top: 52px;\n  margin-left: 1px;\n}\n\n::ng-deep .mat-tab-label {\n  width: 100%;\n  background: var(--ion-color-light);\n  color: gray;\n}\n\n/* Styles for the active tab label */\n\n::ng-deep .mat-tab-label.mat-tab-label-active {\n  width: 100%;\n  background: #ffffff;\n  color: var(--ion-color-primary-dark);\n}\n\n::ng-deep .mat-ink-bar {\n  background-color: var(--ion-color-primary-dark) !important;\n}\n\n.text2 {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.icons {\n  display: inline-block;\n  vertical-align: middle;\n  width: 30px;\n  height: 30px;\n  margin-left: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wdXJjaGFzZS1vcmRlcnMvRDpcXERldmVsb3BtZW50XFxHcmlkXFxtZWRpY3MtZ3JpZC1hcHAvc3JjXFxwYWdlc1xccHVyY2hhc2Utb3JkZXJzXFxwdXJjaGFzZS1vcmRlcnMucGFnZS5zY3NzIiwic3JjL3BhZ2VzL3B1cmNoYXNlLW9yZGVycy9wdXJjaGFzZS1vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtBQ0lGOztBRERBO0VBQ0EsZ0JBQUE7QUNJQTs7QURIQTtFQUNFLHlCQUFBO0FDS0Y7O0FEREE7RUFBb0Isa0JBQUE7QUNLcEI7O0FESkE7RUFLRyxlQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUNFSDs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0FBOztBREdBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RBOztBREdBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUE7O0FERUE7RUFDRSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBRUMsbUJBQUE7RUFDQSxpQkFBQTtBQ0FIOztBREdJO0VBQ0UscUJBQUE7RUFFQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0QsZ0JBQUE7QUNETDs7QURLQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNGQTs7QURNQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNIQTs7QURNQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUNIQTs7QURNQTtFQUNBLG9CQUFBO0FDSEE7O0FET0E7RUFDQSxnQkFBQTtBQ0pBOztBRE1BO0VBQ0EsVUFBQTtBQ0hBOztBRE1BO0VBQ0EsOENBQUE7QUNIQTs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUNFRjs7QURBQTtFQUNFLDBEQUFBO0FDR0Y7O0FEREU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDSUo7O0FERkU7RUFDRSxxQkFBQTtFQUVELHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9wYWdlcy9wdXJjaGFzZS1vcmRlcnMvcHVyY2hhc2Utb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tc2l6ZXtcclxuICB3aWR0aDogODAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uYmNvbG9ye1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uaW5wdXQyIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW5wdXQzIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG5tYXJnaW4tdG9wOiAwLjUlO1xyXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG4ubWF0LXNlbGVjdC1hcnJvdyB7IHZpc2liaWxpdHk6IGhpZGRlbjsgfVxyXG4uZm9vdGVyIHtcclxuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogI0E5QzE0NTtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBsZWZ0OiAwO1xyXG4gIC8vIHJpZ2h0OiAwO1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLy8gYm90dG9tOiAwO1xyXG4gICB6LWluZGV4OiAxO1xyXG4gICBwYWRkaW5nOiAwJTtcclxuICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgLy8gYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLlNlYXJjaEJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzU1cHg7XHJcbiAgbGVmdDogNTc1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2hCYXIgaW5wdXQge1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4vLyAubm8tc2Nyb2xsIC5zY3JvbGwtY29udGVudHtvdmVyZmxvdy14OiBoaWRkZW47fVxyXG4udG9vbGJhcntcclxuY29sb3I6IGJsYWNrO1xyXG5wb3NpdGlvbjogZml4ZWQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG59XHJcblxyXG4ucGFzdC1hcHBvaW50bWVudC1sYWJlbCB7XHJcbi8vIHBhZGRpbmctbGVmdDogNnB4O1xyXG5oZWlnaHQ6IDI1cHg7IFxyXG53aWR0aDogMTAwJTtcclxuY29sb3I6IGJsYWNrO1xyXG5wb3NpdGlvbjogZml4ZWQ7ICAgICAgICAgICAgICAgIFxyXG5ib3R0b206MXB4OyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYWRkSWNvbiB7XHJcbndpZHRoOiA0MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbnBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uaW9uLWNvbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNztcclxuIC8vIHNpemU6IDY7XHJcbiAgYmFja2dyb3VuZDojRjVGNUY2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW9uLWNvbDIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTc7XHJcbiAvLyBzaXplOiA2O1xyXG4gICBiYWNrZ3JvdW5kOiNGNUY1RjY7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gfVxyXG5cclxuICAgIC5pY29uczIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgd2lkdGg6IDMzcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG5cclxuICB9IFxyXG5cclxuLnRleHQtYWxpZ24tbWlkZGxlIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbn1cclxuXHJcblxyXG4ubGFiZWxDZW50ZXIge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbi10b3A6NjMlO1xyXG5mb250LXNpemU6IDE0cHQ7XHJcbn1cclxuXHJcbi53YXJuaW5nLWljb24ge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbm1hcmdpbjogYXV0bztcclxubGVmdDogMnB4O1xyXG56b29tOjIuMztcclxuY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5pb24tZmFiIHtcclxucGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ucm93cyB7XHJcbm1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ud2hpdGVTbW9rZS1iYWNrZ3JvdW5kIHtcclxuLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4ubXktdGhpbi1jb2wge1xyXG4gIGZsZXg6IDAgMCA0cHg7XHJcbn1cclxuLm15LXRoaW4tY29sMiB7XHJcbiAgZmxleDogMCAwIDZweDtcclxufVxyXG4uZ3JpZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVye1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gIHBhZGRpbmctdG9wOiA1MnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLyogU3R5bGVzIGZvciB0aGUgYWN0aXZlIHRhYiBsYWJlbCAqL1xyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50ZXh0MiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAuaWNvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAvLyBmb250LXNpemU6IDM1cHg7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIHdpZHRoOiAzMHB4O1xyXG4gICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIH0gXHJcbiAgXHJcbiIsIi5idXR0b24tc2l6ZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJjb2xvciB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uaW5wdXQyIHtcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW5wdXQzIHtcbiAgd2lkdGg6IDcwJTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMC41JTtcbn1cbi5pbnB1dCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc2VsZWN0LWFycm93IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwJTtcbn1cblxuLlNlYXJjaEJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNTVweDtcbiAgbGVmdDogNTc1cHg7XG59XG5cbi5TZWFyY2hCYXIgaW5wdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4udG9vbGJhciB7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cblxuLnBhc3QtYXBwb2ludG1lbnQtbGFiZWwge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hZGRJY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTc7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jb2wyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNztcbiAgYmFja2dyb3VuZDogI0Y1RjVGNjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pY29uczIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi50ZXh0LWFsaWduLW1pZGRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xufVxuXG4ubGFiZWxDZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYzJTtcbiAgZm9udC1zaXplOiAxNHB0O1xufVxuXG4ud2FybmluZy1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDJweDtcbiAgem9vbTogMi4zO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1mYWIge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnJvd3Mge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi53aGl0ZVNtb2tlLWJhY2tncm91bmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4ubXktdGhpbi1jb2wge1xuICBmbGV4OiAwIDAgNHB4O1xufVxuXG4ubXktdGhpbi1jb2wyIHtcbiAgZmxleDogMCAwIDZweDtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMSU7XG4gIHBhZGRpbmctdG9wOiA1MnB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi8qIFN0eWxlcyBmb3IgdGhlIGFjdGl2ZSB0YWIgbGFiZWwgKi9cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5cbjo6bmctZGVlcCAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG4udGV4dDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/purchase-orders/purchase-orders.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/purchase-orders/purchase-orders.page.ts ***!
  \***********************************************************/
/*! exports provided: PurchaseOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersPage", function() { return PurchaseOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "./src/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/storage/storage.service */ "./src/services/storage/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let PurchaseOrdersPage = class PurchaseOrdersPage {
    constructor(httpService, router, storageService, modalCtrl) {
        this.httpService = httpService;
        this.router = router;
        this.storageService = storageService;
        this.modalCtrl = modalCtrl;
        this.pendingpurchaseOrders = [];
        this.processedpurchaseOrders = [];
        this.customerNames = [];
        this.customerList = [];
        this.customerNamesProcessed = [];
        this.customerListProcessed = [];
        this.selectedProcessed = [];
        this.selected = [];
        this.activeTab = 0;
        this.noPendingOrders = false;
        this.noProcessedOrders = false;
        this.event = 'Show';
        this.filterItems = [];
        this.filterItemsProcessed = [];
        this.filteredItems = [];
        this.uniqueItems = [];
        this.uniqueItemsProcessed = [];
        this.dateCount = 0;
        this.countPrice = 0;
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.pendingpurchaseOrders = this.pendingpurchaseOrders.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
        this.processedpurchaseOrders = this.processedpurchaseOrders.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getPO();
            yield this.getProcessedPO();
            this.supplierDetails = this.storageService.get('supplier');
            this.supplierCode = this.supplierDetails.code;
            console.log('SupplierCode: ' + this.supplierCode);
            this.customerList.push(...this.uniqueItems);
            this.customerListProcessed.push(...this.uniqueItemsProcessed);
            console.log('uniqqq ' + this.customerList);
            console.log('uniqqqProcessed ' + this.customerListProcessed);
        });
    }
    tabClick(tab) {
        this.activeTab = tab.index;
        console.log('active tab', tab.index);
    }
    onChangedSort(event) {
        console.log(this.selected);
        this.sortByCustomer();
    }
    getPO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.status = 'PROCESSED';
            this.status = 'PENDING';
            const url = '/supplier/purchaseOrders/' + this.status;
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.noPendingOrders = false;
                    this.pendingpurchaseOrders = purchaseOrders;
                    // tslint:disable-next-line:prefer-const
                    for (let customer of (purchaseOrders)) {
                        this.customerNames.push(customer.customerName);
                    }
                    this.uniqueItems = Array.from(new Set(this.customerNames));
                    this.filterItems = JSON.parse(JSON.stringify(this.pendingpurchaseOrders));
                    this.totalNetAmountPending = 0;
                    for (const i of this.filterItems) {
                        this.totalNetAmountPending += i.totalNetAmount;
                    }
                    console.log(this.totalNetAmountPending);
                    console.log('Saved Pending Purchase Orders ', this.pendingpurchaseOrders);
                }
                else {
                    this.noPendingOrders = true;
                }
            })
                .catch((error) => {
                console.log('Error', error);
            });
        });
    }
    resetData() {
        this.filterItems = JSON.parse(JSON.stringify(this.pendingpurchaseOrders));
        this.selected = null;
        this.dateCount = 0;
        this.countPrice = 0;
    }
    trackByFn(index, item) {
        return index;
    }
    applyFilter(filterValue) {
        this.filterItems = filterValue.trim().toLowerCase();
    }
    sortByCustomer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const suppplierArray = [];
            suppplierArray.push(this.selected);
            // console.log('supplier ' + suppplierArray);
            const url = '/ops/purchaseOrders/?customerName=' + suppplierArray + `&status=PENDING&supplierCode=${this.supplierCode}`;
            console.log('URL:' + url);
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.filterItems = purchaseOrders;
                    console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
                }
            });
            this.filterItems = this.filterItems.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
            this.totalNetAmountPending = 0;
            for (const i of this.filterItems) {
                this.totalNetAmountPending += i.totalNetAmount;
            }
            console.log(this.totalNetAmountPending);
        });
    }
    sortPrice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.countPrice++;
            let stat;
            if (this.countPrice % 2 === 0) {
                stat = '-totalNetAmount';
            }
            else {
                stat = 'totalNetAmount';
            }
            console.log(this.countPrice);
            const url = `/ops/purchaseOrders/?status=PENDING&supplierCode=${this.supplierCode}&sort=${stat}`;
            console.log('URL:' + url);
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.filterItems = purchaseOrders;
                    console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
                }
            });
            this.filterItems = this.filterItems.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
            this.totalNetAmountPending = 0;
            for (const i of this.filterItems) {
                this.totalNetAmountPending += i.totalNetAmount;
            }
            console.log(this.totalNetAmountPending);
        });
    }
    sortDate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dateCount++;
            let stat;
            if (this.dateCount % 2 === 0) {
                stat = '-date';
            }
            else {
                stat = 'date';
            }
            console.log(this.dateCount);
            const url = `/ops/purchaseOrders/?status=PENDING&supplierCode=${this.supplierCode}&sort=${stat}`;
            console.log('URL:' + url);
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.filterItems = purchaseOrders;
                    console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
                }
            });
            this.filterItems = this.filterItems.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
            this.totalNetAmountPending = 0;
            for (const i of this.filterItems) {
                this.totalNetAmountPending += i.totalNetAmount;
            }
            console.log(this.totalNetAmountPending);
        });
    }
    // processed POs
    getProcessedPO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.status = 'PROCESSED';
            const url = '/supplier/purchaseOrders/' + this.status;
            yield this.httpService.get(url)
                .then((processedpurchaseOrders) => {
                if (processedpurchaseOrders.length > 0) {
                    this.noProcessedOrders = false;
                    this.processedpurchaseOrders = processedpurchaseOrders;
                    console.log('SavedProcessedPurchase Orders ', this.processedpurchaseOrders);
                    // tslint:disable-next-line:prefer-const
                    for (let customer of (processedpurchaseOrders)) {
                        this.customerNamesProcessed.push(customer.customerName);
                    }
                    this.uniqueItemsProcessed = Array.from(new Set(this.customerNamesProcessed));
                    this.filterItemsProcessed = JSON.parse(JSON.stringify(this.processedpurchaseOrders));
                    this.totalNetAmountProcessed = 0;
                    for (const i of this.filterItemsProcessed) {
                        this.totalNetAmountProcessed += i.totalNetAmount;
                    }
                    console.log(this.totalNetAmountProcessed);
                }
                else {
                    this.noProcessedOrders = true;
                }
            })
                .catch((error) => {
                console.log('Error', error);
            });
        });
    }
    onChangedSortProcessed(event) {
        console.log(this.selected);
        this.sortByCustomerProcessed();
    }
    sortByCustomerProcessed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const suppplierArrayProcessed = [];
            suppplierArrayProcessed.push(this.selected);
            // console.log('supplier ' + suppplierArray);
            const url = '/ops/purchaseOrders/?customerName=' + suppplierArrayProcessed + `&status=PROCESSED&supplierCode=${this.supplierCode}`;
            console.log('URL:' + url);
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.filterItemsProcessed = purchaseOrders;
                    console.log('Saved Supplier Processed Purchase Orders ', this.filterItemsProcessed);
                }
            });
            this.filterItemsProcessed = this.filterItemsProcessed.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
            this.totalNetAmountProcessed = 0;
            for (const i of this.filterItemsProcessed) {
                this.totalNetAmountProcessed += i.totalNetAmount;
            }
            console.log(this.totalNetAmountProcessed);
        });
    }
    sortPriceProcessed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.countPrice++;
            let stat;
            if (this.countPrice % 2 === 0) {
                stat = '-totalNetAmount';
            }
            else {
                stat = 'totalNetAmount';
            }
            console.log(this.countPrice);
            const url = `/ops/purchaseOrders/?status=PROCESSED&supplierCode=${this.supplierCode}&sort=${stat}`;
            console.log('URL:' + url);
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.filterItemsProcessed = purchaseOrders;
                }
            });
            this.filterItemsProcessed = this.filterItemsProcessed.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
            this.totalNetAmountProcessed = 0;
            for (const i of this.filterItemsProcessed) {
                this.totalNetAmountProcessed += i.totalNetAmountProcessed;
            }
        });
    }
    sortDateProcessed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dateCount++;
            let stat;
            if (this.dateCount % 2 === 0) {
                stat = '-date';
            }
            else {
                stat = 'date';
            }
            console.log(this.dateCount);
            const url = `/ops/purchaseOrders/?status=PROCESSED&supplierCode=${this.supplierCode}&sort=${stat}`;
            console.log('URL:' + url);
            yield this.httpService.get(url)
                .then((purchaseOrders) => {
                if (purchaseOrders.length > 0) {
                    this.filterItemsProcessed = purchaseOrders;
                    console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
                }
            });
            this.filterItemsProcessed = this.filterItemsProcessed.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
            this.totalNetAmountProcessed = 0;
            for (const i of this.filterItemsProcessed) {
                this.totalNetAmountProcessed += i.totalNetAmountProcessed;
            }
            console.log(this.totalNetAmountPending);
        });
    }
    resetDataProcessed() {
        this.filterItemsProcessed = JSON.parse(JSON.stringify(this.processedpurchaseOrders));
        this.selectedProcessed = null;
    }
    viewPO(poId) {
        console.log(poId);
        this.router.navigate(['/purchase-orders', poId]);
    }
    getPOid(id) {
        console.log(this.pendingpurchaseOrders);
        return this.pendingpurchaseOrders.find((p) => p._id === id);
    }
    fulfill(poId) {
        this.router.navigate(['/fulfill-order', poId]);
    }
    goBack() {
        this.router.navigate(['/home']);
    }
};
PurchaseOrdersPage.ctorParameters = () => [
    { type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
PurchaseOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./purchase-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/purchase-orders/purchase-orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./purchase-orders.page.scss */ "./src/pages/purchase-orders/purchase-orders.page.scss")).default]
    })
], PurchaseOrdersPage);



/***/ })

}]);
//# sourceMappingURL=pages-purchase-orders-purchase-orders-module-es2015.js.map