(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-confirmation-order-confirmation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/order-confirmation/order-confirmation.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/order-confirmation/order-confirmation.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"primaryDark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" routerLink=\"/fulfill-order/{{purchaseOrder._id}}\" icon=\"chevron-back-outline\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleHeader\">\r\n      <ion-text><h5> {{purchaseOrder.customerName}}</h5></ion-text>\r\n      <ion-text><h6>ORDER: {{purchaseOrder.documentNumber}}</h6></ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  class=\"ion-no-padding whiteSmoke-background\">\r\n  <div class=\"ion-text-end\">\r\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\r\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row style=\"padding-left: 10px;padding-right:10px\">\r\n      <ion-col size=\"4\"  style=\"font-size: 13px;\">Invoice Number</ion-col>\r\n        <ion-col size=\"2\"></ion-col>\r\n        <ion-col size=\"4\"  style=\"font-size: 13px;\">Invoice Date</ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"padding-left: 10px;padding-right:10px\">\r\n      <ion-col size=\"4\"  style=\"font-size: 15px;\">\r\n        <mat-form-field >\r\n          <input matInput type=\"text\" name=\"InvoiceNumber\" value={{purchaseOrder.invoiceNumber}} required\r\n           autocomplete=\"off\" readonly=\"true\">\r\n          <mat-error *ngIf=true>This field is Required</mat-error>\r\n          </mat-form-field>\r\n        </ion-col>\r\n        <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"4\"  style=\"font-size: 15px;\">\r\n        <mat-form-field >\r\n          <input matInput class=\"input2\" name=\"InvoiceDate\" placeholder={{purchaseOrder.invoiceDate}} required\r\n           autocomplete=\"off\"  readonly=\"true\">\r\n          <mat-datepicker-toggle matSuffix  style=\"zoom: 1.5\"></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi startView=\"multi-year\" ></mat-datepicker>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\">\r\n  <ion-row >\r\n    <ion-col class=\"my-thin-col2\" size=\"1\"></ion-col>\r\n    <ion-col class=\"ion-col\" size=\"5\" style=\"color: white;font-size: 14px;\" >Item </ion-col>\r\n    <ion-col class=\"ion-col\" size=\"2\" style=\"color: white;font-size: 14px;\">Order Quantity</ion-col>\r\n    <ion-col class=\"ion-col\" size=\"2\" style=\"color: white;font-size: 14px;\">Issued Quantity</ion-col>\r\n    <ion-col class=\"ion-col\" size=\"2\" style=\"color: white;font-size: 14px;\">Net (Rs.)</ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngFor=\"let item of purchaseOrder.items; let i=index;\">\r\n    <ion-row> \r\n      <ion-col class=\"my-thin-col\" size=\"1\" style=\"font-size: 14px;\">{{(i+1) }}</ion-col>\r\n      <ion-col class=\"ion-col-large\" size=\"5\" style=\"font-size: 14px;\">{{ item.itemName}}</ion-col>\r\n      <ion-col class=\"ion-col-large\" size=\"2\" style=\"font-size: 14px;\">{{item.purchaseQuantity}}<sub>Nos</sub></ion-col>\r\n      <ion-col class=\"ion-col-large\" size=\"2\" style=\"font-size: 14px;\">\r\n        <span  [ngClass]=\"{'negative': (item.fullfillvalue < item.purchaseQuantity)}\">{{item.fullfillvalue}} +</span>{{item.freeQuantity}}<sub>Nos</sub></ion-col>\r\n      <ion-col class=\"ion-col-large\" size=\"2\" style=\"font-size: 14px;\">{{item.netAmount|currency:'INR'}}</ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n<ion-row>\r\n  <ion-col class=\"ion-col2\" size=\"8\" style=\"font-size: 15px;\">Total Tax Amount</ion-col>\r\n  <ion-col class=\"ion-col2\" style=\"font-size: 15px;\">{{purchaseOrder.totalTaxAmount|currency:'INR'}}</ion-col>\r\n</ion-row>\r\n<ion-row>\r\n  <ion-col class=\"ion-col-net1\" size=\"8\" style=\"font-size: 15px;\">Total Net Amount</ion-col>\r\n  <ion-col class=\"ion-col-net1\" style=\"font-size: 15px;\">{{purchaseOrder.totalNetAmount|currency:'INR'}}</ion-col>\r\n</ion-row>\r\n\r\n  <div class=\"footer\" >\r\n    <ion-row >\r\n      <ion-col class=\"ion-colfont\" >\r\n          Total Net Amount\r\n        <p>     \r\n          Rs.{{purchaseOrder.totalNetAmount|currency:'INR'}}\r\n          </p>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n      <ion-col >\r\n        <ion-button style=\"color:#D5EB74;\" (click)=\"checkout()\">FINALIZE</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrderConfirmationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageRoutingModule", function() { return OrderConfirmationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/pages/order-confirmation/order-confirmation.page.ts");




const routes = [
    {
        path: '',
        component: _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__["OrderConfirmationPage"]
    }
];
let OrderConfirmationPageRoutingModule = class OrderConfirmationPageRoutingModule {
};
OrderConfirmationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderConfirmationPageRoutingModule);



/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation.module.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function() { return OrderConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-confirmation-routing.module */ "./src/pages/order-confirmation/order-confirmation-routing.module.ts");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/pages/order-confirmation/order-confirmation.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








let OrderConfirmationPageModule = class OrderConfirmationPageModule {
};
OrderConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationPageRoutingModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        ],
        declarations: [_order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["OrderConfirmationPage"]]
    })
], OrderConfirmationPageModule);



/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation.page.scss":
/*!*******************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-thin-col {\n  border: 1px solid #e4e4e7;\n  background: #e6fa8f;\n  text-align: center;\n}\n\n.my-thin-col2 {\n  background: #A9C145;\n  text-align: center;\n}\n\nion-item {\n  padding: 0;\n}\n\n.ion-itemfooter {\n  padding: 0;\n  --ion-background-color:#A9C145;\n  color: white;\n}\n\n.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 2px dashed rgba(114, 186, 94, 0.35);\n  height: 400px;\n  background: rgba(114, 186, 94, 0.05);\n}\n\n.stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.ion-col-fixed {\n  size: \"8\";\n}\n\n.bgcolor {\n  background: #F5F5F6;\n}\n\n.footer {\n  background-color: #71890D;\n  width: 100%;\n  height: 8%;\n  left: 0;\n  right: 0;\n  position: fixed;\n  bottom: 0;\n  z-index: 1;\n  color: white;\n  white-space: nowrap;\n  padding: 1;\n}\n\n.card-md .item-md.item-block:not(:last-child) .item-inner {\n  border-bottom: 1px solid #222121;\n}\n\n.card-md .item-md.item-block:not(.item-input):not(.item-select):not(.item-radio):not(.item-checkbox) .item-inner {\n  border: 0;\n}\n\n.my-grid {\n  font-size: 0.7em;\n}\n\n.my-grid-table {\n  font-size: 0.7em;\n  padding-left: 1;\n  padding-right: 1;\n  padding-top: 1;\n}\n\n.input {\n  width: 100%;\n  color: black;\n}\n\n.input2 {\n  width: 50%;\n  color: black;\n}\n\n.radio-group {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n}\n\n.radio-button {\n  padding: 0.5%;\n  padding-top: 5%;\n  margin-right: 3%;\n}\n\nion-card {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\nion-card-content {\n  padding-top: 6px;\n}\n\nion-card-content .icons {\n  width: 32px;\n  height: 32px;\n  margin-left: 10px;\n}\n\nion-card-content ion-row {\n  margin-top: 5px;\n}\n\n.item-inner {\n  border-style: unset !important;\n}\n\n.card {\n  background-color: white;\n  max-width: 500px;\n  margin: auto;\n  position: relative;\n}\n\n.button-size {\n  width: 80%;\n}\n\n.bcolor {\n  color: gray;\n}\n\n.addIcon {\n  width: 40px;\n  height: 50px;\n  padding-left: 0;\n}\n\n.addIcon {\n  width: 40px;\n  height: 50px;\n  padding-left: 0;\n}\n\n.icons {\n  width: 30px;\n  height: 30px;\n  margin-left: 9px;\n}\n\n.ion-col {\n  border: 0.5px solid #e4e4e7;\n  size: 6;\n  background: #A9C145;\n  text-align: center;\n}\n\n.ion-col-large {\n  border: 0.5px solid #e4e4e7;\n  background: #e6fa8f;\n  text-align: center;\n}\n\n.ion-col-net1 {\n  border: 0.5px solid #e4e4e7;\n  background: #FFE54C;\n  text-align: center;\n}\n\n.ion-col-net {\n  border: 0.5px solid #e4e4e7;\n  background: #FFE54C;\n  text-align: right;\n}\n\n.red {\n  color: red;\n}\n\n.ion-col2 {\n  border: 0.5px solid #e4e4e7;\n  background: #F5F5F6;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.text-align-middle {\n  position: relative;\n  transform: translateY(10px);\n}\n\n.ion-colfont {\n  font-size: 0.8rem;\n}\n\n.positive {\n  color: black;\n}\n\n.negative {\n  color: red;\n}\n\n.text {\n  font-size: 20pt;\n  color: whitesmoke;\n  padding-left: 1.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9vcmRlci1jb25maXJtYXRpb24vRDpcXERldmVsb3BtZW50XFxHcmlkXFxtZWRpY3MtZ3JpZC1hcHAvc3JjXFxwYWdlc1xcb3JkZXItY29uZmlybWF0aW9uXFxvcmRlci1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic3JjL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0cseUJBQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxVQUFBO0FDQUo7O0FERUk7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUVBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ047O0FEQ0k7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtBQ0VOOztBREFJO0VBQ0UsU0FBQTtBQ0dOOztBRERJO0VBQ0UsbUJBQUE7QUNJTjs7QURGSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNLTjs7QURDRTtFQUNBLGdDQUFBO0FDRUY7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNNSjs7QURKRTtFQUNFLGFBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURIQTtFQUNFLGdCQUFBO0FDTUY7O0FETEU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDT047O0FETEU7RUFDSSxlQUFBO0FDT047O0FESkE7RUFDRSw4QkFBQTtBQ09GOztBRExBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1FGOztBREpBO0VBQ0UsVUFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNVRjs7QURSRztFQUNPLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNXVjs7QURUTTtFQUNFLDJCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNZUjs7QURWTTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2FSOztBRFZNO0VBQ0UsMkJBQUE7RUFFQyxtQkFBQTtFQUNBLGtCQUFBO0FDWVQ7O0FEVk07RUFDRSwyQkFBQTtFQUVDLG1CQUFBO0VBQ0EsaUJBQUE7QUNZVDs7QURWTTtFQUFNLFVBQUE7QUNjWjs7QURiTTtFQUNDLDJCQUFBO0VBRUMsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZVI7O0FEWk07RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FDZVI7O0FEYlE7RUFDRSxpQkFBQTtBQ2dCVjs7QURaUTtFQUNFLFlBQUE7QUNlVjs7QURYTTtFQUNJLFVBQUE7QUNjVjs7QURYQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDY0YiLCJmaWxlIjoic3JjL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXRoaW4tY29sIHtcclxuXHJcbiAgIC8vXHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTc7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNmZhOGY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5teS10aGluLWNvbDIge1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZDojQTlDMTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmlvbi1pdGVtZm9vdGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojQTlDMTQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTE0LCAxODYsIDk0LCAwLjM1KTtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTQsIDE4NiwgOTQsIDAuMDUpO1xyXG4gICAgfVxyXG4gICAgLnN0aWNrIHtcclxuICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuaW9uLWNvbC1maXhlZHtcclxuICAgICAgc2l6ZTpcIjhcIjtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgYmFja2dyb3VuZDojRjVGNUY2O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTg5MEQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDglO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZzogMTtcclxuICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAuY2FyZC1tZCAuaXRlbS1tZC5pdGVtLWJsb2NrOm5vdCg6bGFzdC1jaGlsZCkgLml0ZW0taW5uZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyMTIxO1xyXG59XHJcblxyXG5cclxuLmNhcmQtbWQgLml0ZW0tbWQuaXRlbS1ibG9jazpub3QoLml0ZW0taW5wdXQpOm5vdCguaXRlbS1zZWxlY3QpOm5vdCguaXRlbS1yYWRpbyk6bm90KC5pdGVtLWNoZWNrYm94KSAuaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5teS1ncmlke1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuLm15LWdyaWQtdGFibGV7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDE7XHJcbiAgcGFkZGluZy1yaWdodDogMTtcclxuICBwYWRkaW5nLXRvcDogMTtcclxufVxyXG4uaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW5wdXQyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ucmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuICAucmFkaW8tYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbn1cclxuIFxyXG5pb24tY2FyZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiAgICBcclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICAuaWNvbnMge1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9IFxyXG4gIGlvbi1yb3cge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gIGJvcmRlci1zdHlsZTogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uLXNpemV7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uYmNvbG9ye1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbi5hZGRJY29uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuLmFkZEljb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gICAuaWNvbnMge1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgICB9IFxyXG4gICAgICAuaW9uLWNvbCB7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTRlNGU3O1xyXG4gICAgICAgIHNpemU6IDY7XHJcbiAgICAgICAgYmFja2dyb3VuZDojQTlDMTQ1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW9uLWNvbC1sYXJnZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTRlNGU3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2U2ZmE4ZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuaW9uLWNvbC1uZXQxe1xyXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI2U0ZTRlNztcclxuICAgICAgICAvLyBzaXplOiA2O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiNGRkU1NEM7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW9uLWNvbC1uZXR7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTRlNGU3O1xyXG4gICAgICAgIC8vIHNpemU6IDY7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6I0ZGRTU0QztcclxuICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgLnJlZCB7Y29sb3I6IHJlZDt9XHJcbiAgICAgIC5pb24tY29sMiB7XHJcbiAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlNGU0ZTc7XHJcbiAgICAgIC8vIHNpemU6IDY7XHJcbiAgICAgICAgYmFja2dyb3VuZDojRjVGNUY2O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAudGV4dC1hbGlnbi1taWRkbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pb24tY29sZm9udHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgICAucG9zaXRpdmUge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAvLyBmb250LXNpemU6IDEwLjhyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5uZWdhdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAvLyBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmctbGVmdDogMS41JTtcclxufVxyXG5cclxuXHJcbiIsIi5teS10aGluLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTc7XG4gIGJhY2tncm91bmQ6ICNlNmZhOGY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15LXRoaW4tY29sMiB7XG4gIGJhY2tncm91bmQ6ICNBOUMxNDU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW9uLWl0ZW1mb290ZXIge1xuICBwYWRkaW5nOiAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNBOUMxNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTE0LCAxODYsIDk0LCAwLjM1KTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTQsIDE4NiwgOTQsIDAuMDUpO1xufVxuXG4uc3RpY2sge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuLmlvbi1jb2wtZml4ZWQge1xuICBzaXplOiBcIjhcIjtcbn1cblxuLmJnY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY2O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxODkwRDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAxO1xufVxuXG4uY2FyZC1tZCAuaXRlbS1tZC5pdGVtLWJsb2NrOm5vdCg6bGFzdC1jaGlsZCkgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjEyMTtcbn1cblxuLmNhcmQtbWQgLml0ZW0tbWQuaXRlbS1ibG9jazpub3QoLml0ZW0taW5wdXQpOm5vdCguaXRlbS1zZWxlY3QpOm5vdCguaXRlbS1yYWRpbyk6bm90KC5pdGVtLWNoZWNrYm94KSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMDtcbn1cblxuLm15LWdyaWQge1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4ubXktZ3JpZC10YWJsZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHBhZGRpbmctbGVmdDogMTtcbiAgcGFkZGluZy1yaWdodDogMTtcbiAgcGFkZGluZy10b3A6IDE7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pbnB1dDIge1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgLmljb25zIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi1yb3cge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ1dHRvbi1zaXplIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmJjb2xvciB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYWRkSWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmFkZEljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5pY29ucyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5pb24tY29sIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTRlNGU3O1xuICBzaXplOiA2O1xuICBiYWNrZ3JvdW5kOiAjQTlDMTQ1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY29sLWxhcmdlIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTRlNGU3O1xuICBiYWNrZ3JvdW5kOiAjZTZmYThmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY29sLW5ldDEge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlNGU0ZTc7XG4gIGJhY2tncm91bmQ6ICNGRkU1NEM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jb2wtbmV0IHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTRlNGU3O1xuICBiYWNrZ3JvdW5kOiAjRkZFNTRDO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pb24tY29sMiB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2U0ZTRlNztcbiAgYmFja2dyb3VuZDogI0Y1RjVGNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1hbGlnbi1taWRkbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cblxuLmlvbi1jb2xmb250IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wb3NpdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5lZ2F0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XG59Il19 */");

/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation.page.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation.page.ts ***!
  \*****************************************************************/
/*! exports provided: OrderConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPage", function() { return OrderConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/storage/storage.service */ "./src/services/storage/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/http/http.service */ "./src/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/utility/utility.service */ "./src/services/utility/utility.service.ts");







let OrderConfirmationPage = class OrderConfirmationPage {
    constructor(storage, modalCtrl, alertCtrl, httpService, route, router, utilityService) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.utilityService = utilityService;
        this.purchaseOrder = [];
    }
    ngOnInit() {
        this.purchaseOrder = this.storage.get('storedPO');
        // for (let i of this.purchaseOrder.items) {
        //   if (i.purchaseQuantity > i.fullfillvalue){
        //     // tslint:disable-next-line:no-shadowed-variable
        //     i = i.map(item => ({
        //       ...item,
        //      isRed: true
        //     }));
        //   }
        // }
        console.log(this.purchaseOrder);
    }
    checkout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Perfom PayPal or Stripe checkout process
            // tslint:disable-next-line:prefer-const
            let alert = yield this.alertCtrl.create({
                header: 'Confirm Order',
                message: `Are you sure want to finalize on the
                Order ${this.purchaseOrder.documentNumber} of ${this.purchaseOrder.items.length}
                with Total Net Amount Rs. ${this.purchaseOrder.totaltotalNetAmount}`,
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            this.storage.remove('storedPO');
                            this.modalCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.sendPO();
                        }
                    }
                ]
            });
            alert.present().then(() => {
            });
        });
    }
    sendPO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.purchaseOrder == null) {
                this.utilityService.presentAlert('Error', 'Please save before proceeding');
            }
            else {
                const payload = JSON.stringify(this.purchaseOrder);
                const url = '/ops/goodsReceiptNotes';
                // this.router.navigate([`orderconfirmation`]);
                yield this.httpService.post(url, payload)
                    .then((success) => {
                    if (success) {
                        console.log('Success.........' + success);
                        this.storage.remove('storedPO');
                        this.router.navigate([`goods-receipt-notes/${this.purchaseOrder._id}`]);
                    }
                })
                    .catch((error) => {
                    console.log(error);
                    this.utilityService.presentAlert('Error', error.message);
                });
            }
        });
    }
    close() {
        this.storage.remove('storedPO');
        this.router.navigate([`/fulfill-order/${this.purchaseOrder._id}`]);
    }
};
OrderConfirmationPage.ctorParameters = () => [
    { type: src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }
];
OrderConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-confirmation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/order-confirmation/order-confirmation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-confirmation.page.scss */ "./src/pages/order-confirmation/order-confirmation.page.scss")).default]
    })
], OrderConfirmationPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-confirmation-order-confirmation-module-es2015.js.map