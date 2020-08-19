function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-goods-receipt-notes-view-goods-receipt-notes-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcPagesGoodsReceiptNotesViewGoodsReceiptNotesViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"primaryDark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" routerLink=\"/goods-receipt-notes\" icon=\"chevron-back-outline\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titleHeader\">\n      <ion-text class=\"titleText\">GRN</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card-header>\n          <ion-card-subtitle>\n        {{grn.poNumber}}\n          </ion-card-subtitle>\n        </ion-card-header>\n      </ion-col>\n      <ion-col>\n        <ion-card-header>\n          <ion-card-subtitle>\n            <ion-icon name=\"today-outline\" item-start color=\"primary\"></ion-icon>&nbsp;{{grn.invoiceDate}}\n          </ion-card-subtitle>\n        </ion-card-header>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item color=\"primary\">\n          <ion-label>\n           {{grn.customerName}}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item color=\"secondary\">\n          <ion-label>\n            <ion-icon name=\"cart-outline\"> </ion-icon>&nbsp;{{grn.supplierName}}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>InvoiceNumber: {{grn.invoiceNumber}}</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>Bill to Customer Code: {{grn.customerCode}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row></ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Total NetAmount: {{grn.totalNetAmount}}</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>Total GrossAmount: {{grn.totalGrossAmount}}</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>Total TaxAmount: {{grn.totalTaxAmount}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-card class=\"card card-md\" *ngFor=\"let item of grn.items; let i=index;\">\n      <ion-card-content class=\"card-content card-content-md\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class='my-thin-col'>{{i+1}}.</ion-col>\n            <ion-col>Item Code</ion-col>\n            <ion-col>Item Name</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>\n              {{item.itemCode}}\n            </ion-col>\n            <ion-col>\n              {{item.itemName}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>Order Quantity</ion-col>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>{{item.purchaseQuantity}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>Batch No.</ion-col>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>{{item.batchNumber}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>ExpiryDate</ion-col>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>{{item.expiryDate}}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>Rate</ion-col>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>{{item.rate}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>Net</ion-col>\n            <ion-col class='my-thin-col'></ion-col>\n            <ion-col>{{item.netAmount}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col></ion-col>\n            <ion-col></ion-col>\n            <ion-col></ion-col>\n            <ion-col>\n              <a (click)=\"item.showMore = !item.showMore\">Show <span [innerHtml]=\"item.showMore ? 'less' : 'More'\">  </span></a>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=item.showMore>\n            <ion-row>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col> FreeQuantity</ion-col>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>{{item.freeQuantity}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>GrossAmount</ion-col>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>{{item.grossAmount}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>TaxAmount</ion-col>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>{{item.taxAmount}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>TaxPercentage</ion-col>\n              <ion-col class='my-thin-col'></ion-col>\n              <ion-col>{{item.taxPercentage}}</ion-col>\n            </ion-row>\n          </div>\n\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: GoodsReceiptNotesViewPageRoutingModule */

  /***/
  function srcPagesGoodsReceiptNotesViewGoodsReceiptNotesViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesViewPageRoutingModule", function () {
      return GoodsReceiptNotesViewPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./goods-receipt-notes-view.page */
    "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts");

    var routes = [{
      path: '',
      component: _goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_3__["GoodsReceiptNotesViewPage"]
    }];

    var GoodsReceiptNotesViewPageRoutingModule = function GoodsReceiptNotesViewPageRoutingModule() {
      _classCallCheck(this, GoodsReceiptNotesViewPageRoutingModule);
    };

    GoodsReceiptNotesViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GoodsReceiptNotesViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: GoodsReceiptNotesViewPageModule */

  /***/
  function srcPagesGoodsReceiptNotesViewGoodsReceiptNotesViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesViewPageModule", function () {
      return GoodsReceiptNotesViewPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _goods_receipt_notes_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./goods-receipt-notes-view-routing.module */
    "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view-routing.module.ts");
    /* harmony import */


    var _goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./goods-receipt-notes-view.page */
    "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts");

    var GoodsReceiptNotesViewPageModule = function GoodsReceiptNotesViewPageModule() {
      _classCallCheck(this, GoodsReceiptNotesViewPageModule);
    };

    GoodsReceiptNotesViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _goods_receipt_notes_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoodsReceiptNotesViewPageRoutingModule"]],
      declarations: [_goods_receipt_notes_view_page__WEBPACK_IMPORTED_MODULE_6__["GoodsReceiptNotesViewPage"]]
    })], GoodsReceiptNotesViewPageModule);
    /***/
  },

  /***/
  "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcPagesGoodsReceiptNotesViewGoodsReceiptNotesViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-thin-col {\n  flex: 0 0 4px;\n}\n\n.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 2px dashed rgba(114, 186, 94, 0.35);\n  height: 400px;\n  background: rgba(114, 186, 94, 0.05);\n}\n\n.stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9nb29kcy1yZWNlaXB0LW5vdGVzLXZpZXcvRjpcXG1lZGljc19EZXZlbG9wbWVudFxcc3VwcGxpZXJfYXBwXFxtZWRpY3MtZ3JpZC1hcHAvc3JjXFxwYWdlc1xcZ29vZHMtcmVjZWlwdC1ub3Rlcy12aWV3XFxnb29kcy1yZWNlaXB0LW5vdGVzLXZpZXcucGFnZS5zY3NzIiwic3JjL3BhZ2VzL2dvb2RzLXJlY2VpcHQtbm90ZXMtdmlldy9nb29kcy1yZWNlaXB0LW5vdGVzLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7QUNDRiIsImZpbGUiOiJzcmMvcGFnZXMvZ29vZHMtcmVjZWlwdC1ub3Rlcy12aWV3L2dvb2RzLXJlY2VpcHQtbm90ZXMtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktdGhpbi1jb2wge1xyXG4gIGZsZXg6IDAgMCA0cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTE0LCAxODYsIDk0LCAwLjM1KTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAxODYsIDk0LCAwLjA1KTtcclxufVxyXG5cclxuLnN0aWNrIHtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn0iLCIubXktdGhpbi1jb2wge1xuICBmbGV4OiAwIDAgNHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgxMTQsIDE4NiwgOTQsIDAuMzUpO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTg2LCA5NCwgMC4wNSk7XG59XG5cbi5zdGljayB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: GoodsReceiptNotesViewPage */

  /***/
  function srcPagesGoodsReceiptNotesViewGoodsReceiptNotesViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesViewPage", function () {
      return GoodsReceiptNotesViewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _goods_receipt_notes_goods_receipt_notes_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../goods-receipt-notes/goods-receipt-notes.page */
    "./src/pages/goods-receipt-notes/goods-receipt-notes.page.ts");
    /* harmony import */


    var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/http/http.service */
    "./src/services/http/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GoodsReceiptNotesViewPage = /*#__PURE__*/function () {
      function GoodsReceiptNotesViewPage(route, goodsreceiptnotes, httpService) {
        _classCallCheck(this, GoodsReceiptNotesViewPage);

        this.route = route;
        this.goodsreceiptnotes = goodsreceiptnotes;
        this.httpService = httpService;
        this.grn = [];
        this.items = [];
        this.items = this.items.map(function (item) {
          return Object.assign(Object.assign({}, item), {
            showMore: false
          });
        });
      }

      _createClass(GoodsReceiptNotesViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line:no-string-literal
          var id = this.route.snapshot.params['id']; // this.grn = this.goodsreceiptnotes.getGrnid(id);
          // console.log(id);
          // console.log(this.grn);

          this.getGrnId(id);
        }
      }, {
        key: "getGrnId",
        value: function getGrnId(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var url;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = '/supplier/goodsReceiptNotes/' + id;
                    _context.next = 3;
                    return this.httpService.get(url).then(function (grn) {
                      if (grn) {
                        _this.grn = grn[0];
                        _this.items = grn[0].items;
                        console.log(_this.grn);
                      }
                    })["catch"](function (error) {
                      console.log('Error', error);
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return GoodsReceiptNotesViewPage;
    }();

    GoodsReceiptNotesViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _goods_receipt_notes_goods_receipt_notes_page__WEBPACK_IMPORTED_MODULE_2__["GoodsReceiptNotesPage"]
      }, {
        type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    GoodsReceiptNotesViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-goods-receipt-notes-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./goods-receipt-notes-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./goods-receipt-notes-view.page.scss */
      "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.page.scss"))["default"]]
    })], GoodsReceiptNotesViewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-goods-receipt-notes-view-goods-receipt-notes-view-module-es5.js.map