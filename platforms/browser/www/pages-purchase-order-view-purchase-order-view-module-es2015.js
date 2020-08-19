(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-purchase-order-view-purchase-order-view-module"],{

/***/ "./src/pages/purchase-order-view/purchase-order-view-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/purchase-order-view/purchase-order-view-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PurchaseOrderViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderViewPageRoutingModule", function() { return PurchaseOrderViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _purchase_order_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-view.page */ "./src/pages/purchase-order-view/purchase-order-view.page.ts");




const routes = [
    {
        path: '',
        component: _purchase_order_view_page__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderViewPage"]
    }
];
let PurchaseOrderViewPageRoutingModule = class PurchaseOrderViewPageRoutingModule {
};
PurchaseOrderViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PurchaseOrderViewPageRoutingModule);



/***/ }),

/***/ "./src/pages/purchase-order-view/purchase-order-view.module.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/purchase-order-view/purchase-order-view.module.ts ***!
  \*********************************************************************/
/*! exports provided: PurchaseOrderViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderViewPageModule", function() { return PurchaseOrderViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _purchase_order_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-order-view-routing.module */ "./src/pages/purchase-order-view/purchase-order-view-routing.module.ts");
/* harmony import */ var _purchase_order_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-order-view.page */ "./src/pages/purchase-order-view/purchase-order-view.page.ts");







let PurchaseOrderViewPageModule = class PurchaseOrderViewPageModule {
};
PurchaseOrderViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _purchase_order_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderViewPageRoutingModule"]
        ],
        declarations: [_purchase_order_view_page__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderViewPage"]]
    })
], PurchaseOrderViewPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-purchase-order-view-purchase-order-view-module-es2015.js.map