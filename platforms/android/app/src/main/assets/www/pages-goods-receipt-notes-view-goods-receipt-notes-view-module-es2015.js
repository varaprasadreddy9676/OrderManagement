(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-goods-receipt-notes-view-goods-receipt-notes-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"primaryDark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" routerLink=\"/goods-receipt-notes\" icon=\"chevron-back-outline\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleHeader\">\r\n      <ion-text class=\"titleText\">GRN</ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>\r\n        {{grn.poNumber}}\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>\r\n            <ion-icon name=\"today-outline\" item-start color=\"primary\"></ion-icon>&nbsp;{{grn.invoiceDate}}\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"primary\">\r\n          <ion-label>\r\n           {{grn.customerName}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"secondary\">\r\n          <ion-label>\r\n            <ion-icon name=\"cart-outline\"> </ion-icon>&nbsp;{{grn.supplierName}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>InvoiceNumber: {{grn.invoiceNumber}}</ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-label>Bill to Customer Code: {{grn.customerCode}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row></ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Total NetAmount: {{grn.totalNetAmount}}</ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-label>Total GrossAmount: {{grn.totalGrossAmount}}</ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-label>Total TaxAmount: {{grn.totalTaxAmount}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-card class=\"card card-md\" *ngFor=\"let item of grn.items; let i=index;\">\r\n      <ion-card-content class=\"card-content card-content-md\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'>{{i+1}}.</ion-col>\r\n            <ion-col>Item Code</ion-col>\r\n            <ion-col>Item Name</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>\r\n              {{item.itemCode}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{item.itemName}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>Order Quantity</ion-col>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>{{item.purchaseQuantity}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>Batch No.</ion-col>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>{{item.batchNumber}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>ExpiryDate</ion-col>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>{{item.expiryDate}}</ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>Rate</ion-col>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>{{item.rate}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>Net</ion-col>\r\n            <ion-col class='my-thin-col'></ion-col>\r\n            <ion-col>{{item.netAmount}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col></ion-col>\r\n            <ion-col></ion-col>\r\n            <ion-col></ion-col>\r\n            <ion-col>\r\n              <a (click)=\"item.showMore = !item.showMore\">Show <span [innerHtml]=\"item.showMore ? 'less' : 'More'\">  </span></a>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div *ngIf=item.showMore>\r\n            <ion-row>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col> FreeQuantity</ion-col>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>{{item.freeQuantity}}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>GrossAmount</ion-col>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>{{item.grossAmount}}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>TaxAmount</ion-col>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>{{item.taxAmount}}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>TaxPercentage</ion-col>\r\n              <ion-col class='my-thin-col'></ion-col>\r\n              <ion-col>{{item.taxPercentage}}</ion-col>\r\n            </ion-row>\r\n          </div>\r\n\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: GoodsReceiptNotesViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesViewPageRoutingModule", function() { return GoodsReceiptNotesViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goods-receipt-notes-view.page */ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts");




const routes = [
    {
        path: '',
        component: _goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_3__["GoodsReceiptNotesViewPage"]
    }
];
let GoodsReceiptNotesViewPageRoutingModule = class GoodsReceiptNotesViewPageRoutingModule {
};
GoodsReceiptNotesViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoodsReceiptNotesViewPageRoutingModule);



/***/ }),

/***/ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GoodsReceiptNotesViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesViewPageModule", function() { return GoodsReceiptNotesViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _goods_receipt_notes_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goods-receipt-notes-view-routing.module */ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view-routing.module.ts");
/* harmony import */ var _goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goods-receipt-notes-view.page */ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts");







let GoodsReceiptNotesViewPageModule = class GoodsReceiptNotesViewPageModule {
};
GoodsReceiptNotesViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _goods_receipt_notes_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoodsReceiptNotesViewPageRoutingModule"]
        ],
        declarations: [_goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_6__["GoodsReceiptNotesViewPage"]]
    })
], GoodsReceiptNotesViewPageModule);



/***/ }),

/***/ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-thin-col {\n  flex: 0 0 4px;\n}\n\n.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 2px dashed rgba(114, 186, 94, 0.35);\n  height: 400px;\n  background: rgba(114, 186, 94, 0.05);\n}\n\n.stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9nb29kcy1yZWNlaXB0LW5vdGVzLXZpZXcvRDpcXERldmVsb3BtZW50XFxHcmlkXFxtZWRpY3MtZ3JpZC1hcHAvc3JjXFxwYWdlc1xcZ29vZHMtcmVjZWlwdC1ub3Rlcy12aWV3XFxnb29kcy1yZWNlaXB0LW5vdGVzLXZpZXcucGFnZS5zY3NzIiwic3JjL3BhZ2VzL2dvb2RzLXJlY2VpcHQtbm90ZXMtdmlldy9nb29kcy1yZWNlaXB0LW5vdGVzLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7QUNDRiIsImZpbGUiOiJzcmMvcGFnZXMvZ29vZHMtcmVjZWlwdC1ub3Rlcy12aWV3L2dvb2RzLXJlY2VpcHQtbm90ZXMtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktdGhpbi1jb2wge1xyXG4gIGZsZXg6IDAgMCA0cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTE0LCAxODYsIDk0LCAwLjM1KTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAxODYsIDk0LCAwLjA1KTtcclxufVxyXG5cclxuLnN0aWNrIHtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn0iLCIubXktdGhpbi1jb2wge1xuICBmbGV4OiAwIDAgNHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgxMTQsIDE4NiwgOTQsIDAuMzUpO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTg2LCA5NCwgMC4wNSk7XG59XG5cbi5zdGljayB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts ***!
  \*****************************************************************************/
/*! exports provided: GoodsReceiptNotesViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesViewPage", function() { return GoodsReceiptNotesViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _goods_receipt_notes_goods_receipt_notes_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../goods-receipt-notes/goods-receipt-notes.page */ "./src/pages/goods-receipt-notes/goods-receipt-notes.page.ts");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/http/http.service */ "./src/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let GoodsReceiptNotesViewPage = class GoodsReceiptNotesViewPage {
    constructor(route, goodsreceiptnotes, httpService) {
        this.route = route;
        this.goodsreceiptnotes = goodsreceiptnotes;
        this.httpService = httpService;
        this.grn = [];
        this.items = [];
        this.items = this.items.map(item => (Object.assign(Object.assign({}, item), { showMore: false })));
    }
    ngOnInit() {
        // tslint:disable-next-line:no-string-literal
        const id = this.route.snapshot.params['id'];
        // this.grn = this.goodsreceiptnotes.getGrnid(id);
        // console.log(id);
        // console.log(this.grn);
        this.getGrnId(id);
    }
    getGrnId(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = '/supplier/goodsReceiptNotes/' + id;
            yield this.httpService.get(url)
                .then((grn) => {
                if (grn) {
                    this.grn = grn[0];
                    this.items = grn[0].items;
                    console.log(this.grn);
                }
            })
                .catch((error) => {
                console.log('Error', error);
            });
        });
    }
};
GoodsReceiptNotesViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _goods_receipt_notes_goods_receipt_notes_page__WEBPACK_IMPORTED_MODULE_2__["GoodsReceiptNotesPage"] },
    { type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
GoodsReceiptNotesViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goods-receipt-notes-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./goods-receipt-notes-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./goods-receipt-notes-view.page.scss */ "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.scss")).default]
    })
], GoodsReceiptNotesViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-goods-receipt-notes-view-goods-receipt-notes-view-module-es2015.js.map