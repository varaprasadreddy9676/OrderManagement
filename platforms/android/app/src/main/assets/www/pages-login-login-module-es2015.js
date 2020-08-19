(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/login/login.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/login/login.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background\">\r\n  <div class=\"upperDiv\">\r\n    <div class=\"upperDiv\">\r\n    </div>\r\n    <div class=\"lowerDiv\">\r\n      <div class=\"textDiv\">\r\n        <ion-text class=\"medicsText\">\r\n          medics grid\r\n        </ion-text>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"lowerDiv\">\r\n    <ion-card class=\"card\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"header\">\r\n          Sign In\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-grid>\r\n        <ion-row class=\"ion-no-padding\">\r\n          <ion-col align=\"center\" class=\"ion-no-padding\">\r\n            <mat-form-field class=\"input\" hideRequiredMarker>\r\n              <input type=\"text\" matInput maxlength=\"30\" minlength=\"3\" name=\"UserName\" placeholder=\"Username\" required\r\n                [(ngModel)]=\"userName\" >\r\n              <mat-error *ngIf=\"true\">Enter valid user name</mat-error>\r\n        \r\n            </mat-form-field>\r\n            <mat-form-field class=\"input\" hideRequiredMarker>\r\n            <input type=\"password\" matInput maxlength=\"15\" minlength=\"3\" name=\"Password\" placeholder=\"Password\" required\r\n            [(ngModel)]=\"password\" >\r\n          <mat-error *ngIf=\"true\">Enter valid password</mat-error>\r\n        </mat-form-field>\r\n          </ion-col>\r\n    \r\n        </ion-row>\r\n        <ion-row class=\"ion-no-padding\">\r\n          <ion-col align=\"right\" class=\"ion-no-padding\">\r\n            <ion-button (click)=\"doSignIn()\" [disabled]=\"disableSignIn\" size=\"small\" fill=\"clear\" class=\"actionText primaryText\">\r\n              Sign In\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/pages/login/login-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/pages/login/login-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/pages/login/login.module.ts":
/*!*****************************************!*\
  !*** ./src/pages/login/login.module.ts ***!
  \*****************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/pages/login/login.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/pages/login/login.page.scss":
/*!*****************************************!*\
  !*** ./src/pages/login/login.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-full-width {\n  width: 100%;\n}\n\nion-content {\n  --ion-background-color: var(--ion-color-primary);\n}\n\nion-card {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.card {\n  background-color: white;\n  max-width: 288px;\n  position: relative;\n  margin: auto;\n  transform: translateY(-25%);\n}\n\n.input {\n  width: 85%;\n  color: black;\n}\n\n.lowerDiv {\n  height: 50%;\n}\n\n.upperDiv {\n  height: 50%;\n}\n\n.textDiv {\n  color: white;\n  position: relative;\n  transform: translateY(-100%);\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 50px;\n  text-align: center;\n}\n\na {\n  color: var(--ion-color-primary-dark);\n}\n\n.medicsText {\n  color: white;\n  font-size: 41pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9sb2dpbi9EOlxcRGV2ZWxvcG1lbnRcXEdyaWRcXG1lZGljcy1ncmlkLWFwcC9zcmNcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdEQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFFSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLG9DQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogMjg4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxvd2VyRGl2IHtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4udXBwZXJEaXYge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi50ZXh0RGl2IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbn1cclxuXHJcbi5tZWRpY3NUZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNDFwdDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcbi8vIGlvbi1jb250ZW50IHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XHJcbi8vICAgICAtLWJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbi8vICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIGFuZCAobWF4LWhlaWdodDogODk2cHgpIHtcclxuLy8gICAgIC5jYXJkQWxpZ25tZW50IHtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vICAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaWNvbkFsaWdubWVudCB7XHJcbi8vICAgICAgICAgem9vbTogMi4wO1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDQwJTtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaW5wdXRDb2x1bW5DZW50ZXJBbGlnbm1lbnQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmxvd2VyRGl2IHtcclxuLy8gICAgICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAudXBwZXJEaXYge1xyXG4vLyAgICAgICAgIGhlaWdodDogNTAlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC50ZXh0RGl2IHtcclxuLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE3MCUpO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTcwJSk7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkgYW5kIChtYXgtaGVpZ2h0OiA1NTBweCkge1xyXG4vLyAgICAgLmNhcmRBbGlnbm1lbnQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICB3aWR0aDogMjY1cHg7XHJcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5pY29uQWxpZ25tZW50IHtcclxuLy8gICAgICAgICB6b29tOiAyLjA7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogNDAlO1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5pbnB1dENvbHVtbkNlbnRlckFsaWdubWVudCB7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAubG93ZXJEaXYge1xyXG4vLyAgICAgICAgIGhlaWdodDogNTAlO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC51cHBlckRpdiB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnRleHREaXYge1xyXG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTcwJSk7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNzAlKTtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuLy8gICAgIC5jYXJkQWxpZ25tZW50IHtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiAyNjVweDtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmljb25BbGlnbm1lbnQge1xyXG4vLyAgICAgICAgIHpvb206IDIuMDtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmlucHV0Q29sdW1uQ2VudGVyQWxpZ25tZW50IHtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5sb3dlckRpdiB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnVwcGVyRGl2IHtcclxuLy8gICAgICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAudGV4dERpdiB7XHJcbi8vICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNzAlKTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE3MCUpO1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgfVxyXG4vLyB9IiwiLmRpc3BsYXktZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDI4OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogODUlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb3dlckRpdiB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4udXBwZXJEaXYge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLnRleHREaXYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuXG4ubWVkaWNzVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MXB0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/login/login.page.ts":
/*!***************************************!*\
  !*** ./src/pages/login/login.page.ts ***!
  \***************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/utility/utility.service */ "./src/services/utility/utility.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/http/http.service */ "./src/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/storage/storage.service */ "./src/services/storage/storage.service.ts");







let LoginPage = class LoginPage {
    constructor(router, httpService, utilityService, storageService, route, menuCtrl, platform) {
        this.router = router;
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.storageService = storageService;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.disableSignIn = false;
        this.token = this.storageService.get('token');
        this.features = this.storageService.get('features');
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    getUser() {
        return { userName: this.userName, password: this.password };
    }
    ngOnInit() {
    }
    openDetailsWithState(tk, f) {
        const navigationExtras = {
            state: {
                token: tk,
                features: f
            }
        };
        this.router.navigate(['home'], navigationExtras);
    }
    doSignIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.disableSignIn = true;
            const payload = this.getUser();
            const url = '/signIn';
            yield this.httpService.post(url, payload)
                .then((user) => {
                if (user) {
                    this.storageService.set('user', user, true);
                    console.log('token.........' + user.token);
                    console.log('features......' + JSON.stringify(user.features));
                    this.getSupplierdetails();
                    this.router.navigate(['home']);
                }
            })
                .catch((error) => {
                if (error.status === 401) {
                    this.utilityService.presentAlert(`Login Failed`, 'Enter valid credentials.');
                }
                this.disableSignIn = false;
                console.log('Login Error', error);
            });
        });
    }
    getSupplierdetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = '/supplier/getSupplier';
            yield this.httpService.get(url)
                .then((supplier) => {
                this.supplierDetails = supplier;
                console.log('Supplier details received are: ', this.supplierDetails);
                this.storageService.set('supplier', supplier, true);
            })
                .catch((error) => {
                console.log('Error', error);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map