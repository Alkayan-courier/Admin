(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+QG8":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/dynamic-card/dynamic-card.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:-20px\" (mouseenter)=\"showButton = false\" (mouseleave)=\"showButton = false\"\r\n  class=\"card p-3 relative hover:shadow-16 trans-shadow\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n  <!-- <div *ngIf=\"color\" [style.background-color]=\"color | colorFade:0.9\" [style.color]=\"color\"\r\n    style=\"border-radius: 50%;padding: 24px;\" class=\"rounded-full d-flex justify-items-center justify-content-center\"> -->\r\n  <img [src]=\"imagesUrl+icon\" style=\"position: absolute;\r\n  top: -24%;\r\n  width: 100px;\">\r\n  <!-- <i class=\"material-icons\" style=\"font-size: 35px;\">{{icon}}</i> -->\r\n  <!--</div>  -->\r\n\r\n  <h3 class=\"cardValue\" style=\"margin-top: 42px;\"><b>{{ value }}</b></h3>\r\n  <h3 class=\"cardValue\"><b>{{ price }} {{'uad' | translate}}</b></h3>\r\n  <h5 class=\"cardLabel\">{{ label | translate }}</h5>\r\n\r\n\r\n  <button *ngIf=\"helpText\" [matTooltip]=\"helpText\" class=\"absolute top-0 left-0 mt-2 ml-2 text-hint\" mat-icon-button\r\n    matTooltipPosition=\"after\" type=\"button\">\r\n    <mat-icon height=\"18px\" width=\"18px\">help</mat-icon>\r\n  </button>\r\n\r\n  <button (click)=\"openSheet()\" *ngIf=\"showButton\" @scaleInOut class=\"absolute -top-3 -right-3 bg-card shadow-8\"\r\n    color=\"primary\" mat-icon-button type=\"button\">\r\n    <mat-icon height=\"24px\" width=\"24px\">share</mat-icon>\r\n  </button>\r\n</div>");

/***/ }),

/***/ "/l9S":
/*!*************************************************!*\
  !*** ./src/shared/models/dynamic-form-input.ts ***!
  \*************************************************/
/*! exports provided: DynamicFormInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormInput", function() { return DynamicFormInput; });
class DynamicFormInput {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\emran\Admin\src\main.ts */"zUnb");


/***/ }),

/***/ "1Qid":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/dashboard/dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isAuthorizedToView\" class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <h3 class=\"card-title \">{{'dasboard'|translate}}</h3>\r\n                        <p class=\"card-category\"> {{'dashboardAdvanceFilter' | translate}}</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-dynamic-form [isList]=\"true\" [isUpdate]=\"true\" *ngIf=\"!isLoading\"\r\n                            [formInput]=\"dynamicFormInput\" (actionSubmitted)=\"serveAction($event)\"></app-dynamic-form>\r\n                        <button mat-raised-button class=\"btn btn-primary btn-start\"\r\n                            (click)=\"downloadExcel()\">{{'downloadExcel'\r\n                            |\r\n                            translate}}</button>\r\n                            <button mat-raised-button class=\"btn btn-primary btn-start\" (click)=\"addEndUserTestData()\">Add End User Test Data</button>\r\n                            <button mat-raised-button class=\"btn btn-primary btn-start\" (click)=\"addMerchantTestData()\">Add Merchant Test Data</button>\r\n                            <button mat-raised-button class=\"btn btn-primary btn-start\" (click)=\"addDriverTestData()\">Add Driver Test Data</button>               \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-md-3\" *ngFor=\"let status of orderStatuses\">\r\n                <app-dynamic-card [price]=\"status.price\" [label]=\"languageService.getCurrentLanguage()=='ar'? (status.statusNameAr|translate) :\r\n                (status.statusNameEn |translate)\" [color]=\"status.backgroundColor\" [value]=\"status.ordersCount\"\r\n                    [icon]=\"status.iconPath\"></app-dynamic-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!isAuthorizedToView\" id=\"main\">\r\n    <img src=\"../../../assets/img/403.png\" style=\"position: absolute;\r\n    left: 30%;\r\n    top: 74px;\" />\r\n    <div class=\"fof mt-5\" style=\"padding-top: 361px;\">\r\n        <h1>{{'sorryYouAre' | translate}} </h1>\r\n        <br />\r\n        <h1> {{'toAccess' | translate}} </h1>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "1pVS":
/*!****************************************************!*\
  !*** ./src/shared/models/dynamic-details.model.ts ***!
  \****************************************************/
/*! exports provided: DynamicDetailPageModel, DynamicDetailsPeoperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDetailPageModel", function() { return DynamicDetailPageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDetailsPeoperty", function() { return DynamicDetailsPeoperty; });
class DynamicDetailPageModel {
}
class DynamicDetailsPeoperty {
}


/***/ }),

/***/ "3Vad":
/*!****************************************!*\
  !*** ./src/shared/shared.component.ts ***!
  \****************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _raw_loader_shared_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shared.component.html */ "m8dM");
/* harmony import */ var _shared_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.component.scss */ "rYXb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SharedComponent = class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
};
SharedComponent.ctorParameters = () => [];
SharedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-shared',
        template: _raw_loader_shared_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shared_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], SharedComponent);



/***/ }),

/***/ "4PdW":
/*!***********************************************************************!*\
  !*** ./src/shared/shared-components/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "1Qid");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "Kja4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/global-variables/api-config */ "62t3");
/* harmony import */ var _auth_authorize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/authorize.service */ "TeaW");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
/* harmony import */ var _add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-end-user-dialog/add-end-user-dialog.component.ts.component */ "wd4G");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/dynamic-form.service */ "aW8j");
/* harmony import */ var _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/models/dynamic-form-input */ "/l9S");
/* harmony import */ var _forms_module_dynamic_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../forms-module/dynamic-data */ "WBh1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let DashboardComponent = class DashboardComponent {
    constructor(dashboardService, spinner, authService, languageService, dialog, dynamicService) {
        this.dashboardService = dashboardService;
        this.spinner = spinner;
        this.authService = authService;
        this.languageService = languageService;
        this.dialog = dialog;
        this.dynamicService = dynamicService;
        this.orderStatuses = [];
        this.isAuthorizedToView = true;
        this.isLoading = true;
        this.dynamicFormInput = new _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_12__["DynamicFormInput"]();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](10),
            pageNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1),
        });
    }
    /*  public startAnimationForLineChart(chart) {
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;
  
      chart.on('draw', function (data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
          seq++;
          data.element.animate({
            opacity: {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
        }
      });
  
      seq = 0;
    }; */
    startAnimationForBarChart(chart) {
        let seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on("draw", function (data) {
            if (data.type === "bar") {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: "ease",
                    },
                });
            }
        });
        seq2 = 0;
    }
    ngOnInit() {
        this.spinner.show();
        const userRoleExist = this.authService
            .getLoggedInUsersRole()
            .find((x) => x == "DataEntry");
        if (userRoleExist) {
            this.isAuthorizedToView = false;
        }
        else {
            this.getFormData();
        }
        this.spinner.hide();
    }
    downloadExcel() {
        this.dashboardService
            .downloadExcel(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Controllers"].Order, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Actions"].DownloadExcel)
            .subscribe((res) => {
            console.log(res);
            var a = document.createElement("a");
            const blob = new Blob([res.body], { type: res.body.type });
            a.href = URL.createObjectURL(blob);
            a.download = "Order-Details.csv";
            a.click();
        });
    }
    addEndUserTestData() {
        const dialogRef = this.dialog.open(_add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_9__["AddEndUserDialogComponent"], {
            width: "700px",
            data: {
                title: "Add Test Data",
                content: "Add Test Data",
                dialogType: 1,
            },
            autoFocus: false,
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.spinner.show();
                let request = {
                    endUserPhoneNumber: res,
                    numberOfOrders: 5,
                    clientBrandId: 11,
                    clientId: 49,
                };
                console.log("Add Record", request);
                this.dashboardService
                    .postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Controllers"].TestData, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Actions"].PostItem, request)
                    .subscribe((res) => {
                    console.log(res);
                    this.spinner.hide();
                }, (error) => {
                    if (error.status === 400) {
                    }
                    else {
                    }
                    this.spinner.hide();
                });
            }
        });
    }
    addMerchantTestData() {
        const dialogRef = this.dialog.open(_add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_9__["AddEndUserDialogComponent"], {
            width: "700px",
            data: {
                title: "Add Test Data",
                content: "Add Test Data",
                dialogType: 2,
            },
            autoFocus: false,
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.spinner.show();
                let request = {
                    endUserPhoneNumber: "",
                    numberOfOrders: 5,
                    clientBrandId: 1,
                    clientId: res,
                };
                console.log("Add Record", request);
                this.dashboardService
                    .postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Controllers"].TestData, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Actions"].PostItem, request)
                    .subscribe((res) => {
                    console.log(res);
                    this.spinner.hide();
                }, (error) => {
                    if (error.status === 400) {
                    }
                    else {
                    }
                    this.spinner.hide();
                });
            }
        });
    }
    addDriverTestData() {
        const dialogRef = this.dialog.open(_add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_9__["AddEndUserDialogComponent"], {
            width: "700px",
            data: {
                title: "Add Test Data",
                content: "Add Test Data",
                dialogType: 3,
            },
            autoFocus: false,
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.spinner.show();
                let request = {
                    endUserPhoneNumber: "",
                    numberOfOrders: 5,
                    clientBrandId: 11,
                    driverId: res,
                    clientId: null,
                };
                this.dashboardService
                    .postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Controllers"].TestData, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_5__["Actions"].PostItem, request)
                    .subscribe((res) => {
                    console.log(res);
                    this.spinner.hide();
                }, (error) => {
                    if (error.status === 400) {
                    }
                    else {
                    }
                    this.spinner.hide();
                });
            }
            var a = document.createElement("a");
            const blob = new Blob([res.body], { type: res.body.type });
            a.href = URL.createObjectURL(blob);
            a.download = "Order-Details.csv";
            a.click();
        });
    }
    getFormData() {
        this.dynamicFormInput = _forms_module_dynamic_data__WEBPACK_IMPORTED_MODULE_13__["DashboardSearchForm"];
        this.isLoading = false;
        this.getConfig();
    }
    serveAction(event) {
        this.dashboardService.getDashboardData(event.data).subscribe((res) => {
            this.orderStatuses = res;
            this.isLoading = false;
        });
        this.spinner.hide();
    }
    getConfig() {
        const form = this.filterForm.value;
        form.from = this.convertToUTC(form.from);
        form.to = this.convertToUTC(form.to);
        this.dashboardService.getDashboardData(form).subscribe((res) => {
            this.orderStatuses = res;
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
        });
    }
    convertToUTC(date) {
        if (date) {
            date = new Date(date);
            return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        }
        else {
            return null;
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _auth_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizeService"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_11__["DynamicDataService"] }
];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_shared_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
        _auth_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizeService"],
        _shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
        _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_11__["DynamicDataService"]])
], DashboardComponent);



/***/ }),

/***/ "4lvB":
/*!***********************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-details/dynamic-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DynamicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDetailsComponent", function() { return DynamicDetailsComponent; });
/* harmony import */ var _raw_loader_dynamic_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dynamic-details.component.html */ "jf03");
/* harmony import */ var _dynamic_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-details.component.scss */ "hj20");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_models_dynamic_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/dynamic-details.model */ "1pVS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filesaver */ "EnSh");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "Jxek");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let DynamicDetailsComponent = class DynamicDetailsComponent {
    constructor(_location, spinner, baseService, fileSaverService, notification) {
        this._location = _location;
        this.spinner = spinner;
        this.baseService = baseService;
        this.fileSaverService = fileSaverService;
        this.notification = notification;
        this.detailsInput = new _shared_models_dynamic_details_model__WEBPACK_IMPORTED_MODULE_4__["DynamicDetailPageModel"]();
        this.actionSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.properties = [];
    }
    ngOnInit() {
        Object.keys(this.detailsInput.dataObject).forEach(e => {
            if (e !== 'id' && !e.includes('Id')) {
                if (this.detailsInput.dataObject[e] === false) {
                    console.log(this.detailsInput.dataObject[e]);
                }
                this.properties.push(e);
            }
        });
    }
    downloadFile(fileName) {
        this.spinner.show();
        return this.baseService.downloadFile(fileName).subscribe(res => {
            this.fileSaverService.save(res, fileName);
            this.spinner.hide();
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification('somethingWentWrong', 'danger');
            }
            this.spinner.hide();
        });
    }
};
DynamicDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_7__["FileSaverService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
];
DynamicDetailsComponent.propDecorators = {
    detailsInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    actionSubmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
DynamicDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dynamic-details',
        template: _raw_loader_dynamic_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dynamic_details_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
        _shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
        ngx_filesaver__WEBPACK_IMPORTED_MODULE_7__["FileSaverService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]])
], DynamicDetailsComponent);



/***/ }),

/***/ "5InU":
/*!******************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-list/dynamic-list.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" [dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),\r\n [dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),\r\n [dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type) {\r\n     padding-right: 24px !important;\r\n     padding-left: 0 !important;\r\n     text-align: start !important;\r\n }\r\n .color-td{\r\n    border-radius: 40px;\r\n    width: 25px;\r\n    height: 25px;\r\n    position: absolute;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvZHluYW1pYy1saXN0L2R5bmFtaWMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDOzs7S0FHSSw4QkFBOEI7S0FDOUIsMEJBQTBCO0tBQzFCLDRCQUE0QjtDQUNoQztDQUNBO0lBQ0csbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvZHluYW1pYy1saXN0L2R5bmFtaWMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFtkaXI9cnRsXSB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZTpub3QoOm9ubHktb2YtdHlwZSksXHJcbiBbZGlyPXJ0bF0gdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZTpub3QoOm9ubHktb2YtdHlwZSksXHJcbiBbZGlyPXJ0bF0gdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGU6bm90KDpvbmx5LW9mLXR5cGUpIHtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuIH1cclxuIC5jb2xvci10ZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIH0iXX0= */");

/***/ }),

/***/ "5OcQ":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/order-notes/order-notes.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\r\n    <div class=\"mat-elevation-z8 w-100\">\r\n\r\n        <button  mat-raised-button class=\"btn btn-primary btn-start\"\r\n       \r\n        (click)=\"addNote()\" style=\"margin: 10px;\">\r\n        {{'addNote' | translate}}\r\n    </button>\r\n\r\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"orderNoteText\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'orderNoteText' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.orderNoteText}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"createdDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'createdDate' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.createdDate}} </td>\r\n            </ng-container> \r\n              <ng-container matColumnDef=\"createdBy\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'createdBy' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.createdBy}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"orderFilePath\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'orderFilePath' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> \r\n                    <img *ngIf=\"row.orderFilePath\" [src]=\"imagesUrl+row.orderFilePath\"\r\n                    style=\"width: 45px;height: 45px;object-fit: cover;\">\r\n                  <button *ngIf=\"row.orderFilePath\" style=\"flex-grow: 1;\" mat-mini-fab (click)=\"downloadFile(row.orderFilePath)\"\r\n                    class=\"btn btn-primary m-2\" matTooltip=\"{{'downloadFile' |translate}}\" matTooltipPosition=\"above\">\r\n                    <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </td>\r\n            </ng-container>\r\n         \r\n\r\n            <!-- actions Column -->\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr class=\"data-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n                <td class=\"mat-cell\" colspan=\"4\">{{'NoDataMatchingTheFilter' | translate}}</td>\r\n            </tr>\r\n        </table>\r\n        <mat-paginator (page)=\"pageChanged($event)\" [length]=\"totalCount\" [pageIndex]=\"pageNumber-1\"\r\n            [pageSize]=\"pageSize\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "5dek":
/*!**************************************************************************!*\
  !*** ./src/shared/shared-components/user-roles/user-roles.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL3VzZXItcm9sZXMvdXNlci1yb2xlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "62t3":
/*!***************************************************!*\
  !*** ./src/shared/global-variables/api-config.ts ***!
  \***************************************************/
/*! exports provided: httpOptions, httpHeaders, options, httpFormDataOptions, Controllers, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpHeaders", function() { return httpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFormDataOptions", function() { return httpFormDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controllers", function() { return Controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8'
    })
};
const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
    'Content-Type': 'application/json; charset=utf-8'
});
const options = { httpHeaders, responseType: 'text' };
const httpFormDataOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*'
    }),
    responseType: 'text'
};
var Controllers;
(function (Controllers) {
    Controllers["Auth"] = "Auth/";
    Controllers["User"] = "User/";
    Controllers["Message"] = "Message/";
    Controllers["Employee"] = "Employee/";
    Controllers["Business"] = "Business/";
    Controllers["AccountType"] = "AccountType/";
    Controllers["BusinessStatus"] = "BusinessStatus/";
    Controllers["Country"] = "Country/";
    Controllers["City"] = "City/";
    Controllers["CorporateType"] = "CorporateType/";
    Controllers["Filters"] = "Filters/";
    Controllers["Groups"] = "Groups/";
    Controllers["JobTitle"] = "JobTitle/";
    Controllers["Nationality"] = "Nationality/";
    Controllers["NoOfEmployee"] = "NoOfEmployee/";
    Controllers["Sector"] = "Sector/";
    Controllers["SubSector"] = "SubSector/";
    Controllers["TitleField"] = "TitleField/";
    Controllers["TitleLevel"] = "TitleLevel/";
    Controllers["Person"] = "Person/";
    Controllers["ContactUS"] = "ContactUs/";
    Controllers["Contacts"] = "Contacts/";
    Controllers["AppSettings"] = "AppSettings/";
    Controllers["AreaGroup"] = "AreaGroup/";
    Controllers["Area"] = "Area/";
    Controllers["OrderStatus"] = "OrderStatus/";
    Controllers["Record"] = "Record/";
    Controllers["Order"] = "Order/";
    Controllers["PromoCode"] = "PromoCode/";
    Controllers["OrderNotes"] = "OrderNotes/";
    Controllers["FinancialRound"] = "FinancialRound/";
    Controllers["ClientBrand"] = "ClientBrand/";
    Controllers["File"] = "File/";
    Controllers["Notification"] = "Notification/";
    Controllers["TestData"] = "TestData/";
})(Controllers || (Controllers = {}));
var Actions;
(function (Actions) {
    Actions["GetList"] = "ListForAdmin";
    Actions["List"] = "List";
    Actions["ReactivateAll"] = "ReactivateAll";
    Actions["GetClientById"] = "GetClientById";
    Actions["DailyRecords"] = "DailyRecords";
    Actions["GetDriversDetails"] = "GetDriversDetails";
    Actions["GetClientsDetails"] = "GetClientsDetails";
    Actions["GetUserOrders"] = "GetUserOrders";
    Actions["Reactivate"] = "Reactivate";
    Actions["DownloadExcel"] = "DownloadExcel";
    Actions["GetRequestsList"] = "GetRequestsList";
    Actions["GetFilteredItems"] = "GetFilteredItems";
    Actions["GetById"] = "GetForAdmin";
    Actions["Get"] = "Get";
    Actions["GetAll"] = "GetAll";
    Actions["GetByParentId"] = "GetByParentId";
    Actions["GetAllItems"] = "GetAllForAdmin";
    Actions["PostItem"] = "Create";
    Actions["CreateUser"] = "CreateUser";
    Actions["PostRange"] = "PostRange";
    Actions["EditItem"] = "Update";
    Actions["EditItemStatus"] = "UpdateStatus";
    Actions["DeleteSetItem"] = "DeleteSetItem";
    Actions["EditRange"] = "EditRange";
    Actions["RemoveItemById"] = "Delete";
    Actions["RemoveItem"] = "Delete";
    Actions["DeletePersonJob"] = "DeletePersonJob";
    Actions["DeleteBusinessPartner"] = "DeleteBusinessPartner";
    Actions["DeleteBoardOfDirector"] = "DeleteBoardOfDirector";
    Actions["RemoveItemImage"] = "DeleteItemImage";
    Actions["RemoveRange"] = "RemoveRange";
    Actions["Login"] = "AdminLogin";
    Actions["UpdateStatus"] = "UpdateStatus";
    Actions["UpdateUserInfo"] = "UpdateUserInfo";
    Actions["SendNotificationToMultiUsers"] = "SendNotificationToMultiUsers";
    Actions["PodcastAllUsersNotification"] = "SendPushNotificationAllUsers";
    Actions["PodcastMultiUsersNotification"] = "PodcastMultiUsersNotification";
    Actions["AddItemImages"] = "AddItemImages";
    Actions["GetItemByIdWithRelated"] = "GetItemByIdWithRelated";
    Actions["GetRoles"] = "GetRoles";
    Actions["GetEmployeeRoles"] = "GetEmployeeRoles";
    Actions["UpdateEmployeeInfo"] = "UpdateEmployeeInfo";
    Actions["AddBoardOfDirector"] = "AddBoardOfDirector";
    Actions["EditBoardOfDirector"] = "EditBoardOfDirector";
    Actions["AddBusinessPartner"] = "AddBusinessPartner";
    Actions["EditBusinessPartner"] = "EditBusinessPartner";
    Actions["AddBusinessClassifications"] = "AddBusinessClassification";
    Actions["EditBusinessClassifications"] = "EditBusinessClassification";
    Actions["AddPersonJob"] = "AddPersonJob";
    Actions["EditPersonJob"] = "EditPersonJob";
    Actions["ChangePassword"] = "ChangePassword";
    Actions["AssignRecordToDriver"] = "AssignRecordToDriver";
    Actions["ListWithRevenue"] = "ListWithRevenue";
    Actions["UpdateDetails"] = "UpdateOrderDetails";
    Actions["UpdatePrice"] = "UpdateOrderPrice";
    Actions["UpdateOrderStatus"] = "UpdateOrderStatus";
    Actions["MoveOrders"] = "MoveOrders";
    Actions["GetForUpdate"] = "GetForUpdate";
    Actions["GetRecord"] = "GetDailyRecord";
    Actions["GetRevenue"] = "GetCompanyRevenue";
    Actions["UpdateAsync"] = "Update";
    Actions["ExportPdf"] = "ExportOrderDetailsPdf";
    Actions["CreateClient"] = "CreateClient";
    Actions["GetUserRoles"] = "GetUserRoles";
    Actions["DailyRecordsByRoundId"] = "DailyRecordsByRoundId";
    Actions["ForgetPassword"] = "ForgetPassword";
    Actions["ValidateOtp"] = "ValidateOtp";
    Actions["ResetPasswordEmail"] = "ResetPasswordEmail";
    Actions["ResetPasswordPhone"] = "ResetPasswordPhone";
    Actions["GetNonEmployeeRoles"] = "GetNonEmployeeRoles";
    Actions["SendPushNotificationByRole"] = "SendPushNotificationByRole";
    Actions["ResetPassword"] = "ResetPassword";
    Actions["GetActiveDriversList"] = "GetActiveDriversList";
    Actions["UpdateMerchant"] = "UpdateMerchant";
})(Actions || (Actions = {}));


/***/ }),

/***/ "6NpB":
/*!*****************************************************************************************!*\
  !*** ./src/shared/shared-components/icon-picker-dialog/icon-picker-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IconPickerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPickerDialogComponent", function() { return IconPickerDialogComponent; });
/* harmony import */ var _raw_loader_icon_picker_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./icon-picker-dialog.component.html */ "bJKb");
/* harmony import */ var _icon_picker_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-picker-dialog.component.scss */ "k9Tn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_global_variables_lookups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/global-variables/lookups */ "R5xU");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let IconPickerDialogComponent = class IconPickerDialogComponent {
    constructor(dialogRef, data, languageService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
        this.icons = _shared_global_variables_lookups__WEBPACK_IMPORTED_MODULE_4__["material_icons"];
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onPickerSelected(icon) {
        this.dialogRef.close(icon);
    }
    clearSearchText() {
        this.searchValue = '';
    }
    search(event) {
        console.log(event);
        this.icons = this.icons.filter(function (value) {
            return value.toLowerCase().indexOf(event.toLowerCase()) >= 0;
        });
    }
};
IconPickerDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
];
IconPickerDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-icon-picker-dialog',
        template: _raw_loader_icon_picker_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_icon_picker_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]])
], IconPickerDialogComponent);



/***/ }),

/***/ "6nD6":
/*!*********************************************************************************!*\
  !*** ./src/shared/shared-components/yes-no-dialog/yes-no-dialog.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL3llcy1uby1kaWFsb2cveWVzLW5vLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7pUP":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/dynamic-form/dynamic-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"dynamicFormGroup\" #myForm=\"ngForm\" autocomplete=\"alkayanform\" id=\"alkayanformId\">\r\n\r\n    <div class=\"row w-100\">\r\n        <div *ngFor=\"let field of formInput.formFields; let i=index ;let ix=index\"\r\n            [class]=\"'col-md-'+field.options.size\">\r\n\r\n            <!-- Field Type ==> {{Input}} -->\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.Input\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <span style=\"position: initial;\" matPrefix *ngIf=\"field.options.phoneNumberValidation\">+971\r\n                    &nbsp;</span>\r\n                <input [autocomplete]=\"field.fieldId+ix\" matInput type=\"text\" formControlName=\"{{field.fieldId}}\"\r\n                    [placeholder]=\"field.placeholder | translate\">\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.errors?.required\">\r\n                    {{'requiredField' | translate }}\r\n                </mat-error>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.invalid && field.options.phoneNumberValidation\">\r\n                    {{'invalidPhoneNumber' | translate }}\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{Email}} -->\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.Email\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input [autocomplete]=\"field.fieldId+ix\" matInput type=\"email\" formControlName=\"{{field.fieldId}}\"\r\n                    [placeholder]=\"field.placeholder | translate\">\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.errors?.required\">\r\n                    {{'requiredField' | translate }}\r\n                </mat-error>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.errors?.email\">\r\n                    {{'invalidEmail' | translate }}\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{File}} -->\r\n            <input [autocomplete]=\"field.fieldId+ix\" *ngIf=\"field.fieldType== filedTypeEnum.File\" id=\"{{field.fieldId}}\"\r\n                #myFileInput type=\"file\" [hidden]=\"true\" (change)=\"fileUploaderChanged($event,field.fieldId)\" />\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.File\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input [autocomplete]=\"field.fieldId+ix\" style=\"width: 90%;\" type=\"text\" disabled=\"true\" matInput\r\n                    [(ngModel)]=\"filesWrapper[field.fieldId]\" [ngModelOptions]=\"{standalone: true}\" />\r\n                <button style=\"position: absolute;\r\n                    top: 0px;\" (click)=\"openUploader(field.fieldId)\" mat-mini-fab class=\"btn btn-primary\"\r\n                    matTooltip=\"{{'uploadFile' | translate}}\" matTooltipPosition=\"above\">\r\n                    <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.invalid\">\r\n                    {{'requiredField' | translate }}\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- Field Type ==> {{ImageFile}} -->\r\n            <input [autocomplete]=\"field.fieldId+ix\" *ngIf=\"field.fieldType== filedTypeEnum.ImageFile\"\r\n                id=\"{{field.fieldId}}\" #myFileInput type=\"file\" [hidden]=\"true\"\r\n                accept=\"image/x-png,image/gif,image/jpeg\" (change)=\"fileUploaderChanged($event,field.fieldId)\" />\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.ImageFile\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input [autocomplete]=\"field.fieldId+ix\" style=\"width: 90%;\" type=\"text\" disabled=\"true\" matInput\r\n                    [(ngModel)]=\"filesWrapper[field.fieldId]\" [ngModelOptions]=\"{standalone: true}\" />\r\n                <button style=\"position: absolute;\r\n                    top: 0px;\" (click)=\"openUploader(field.fieldId)\" mat-mini-fab class=\"btn btn-primary\"\r\n                    matTooltip=\"{{'uploadFile' | translate}}\" matTooltipPosition=\"above\">\r\n                    <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.invalid\">\r\n                    {{'requiredField' | translate }}\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{Input Number}} -->\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.Number\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input [autocomplete]=\"field.fieldId+ix\" matInput type=\"number\" formControlName=\"{{field.fieldId}}\"\r\n                    [placeholder]=\"field.placeholder | translate\">\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.invalid\">\r\n                    {{'requiredField' | translate }}\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{Icon Picker}} -->\r\n\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.ColorPicker\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input type=\"color\" matInput autocomplete=\"off\" formControlName=\"{{field.fieldId}}\"\r\n                    [placeholder]=\"field.placeholder | translate\">\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId)?.touched && getFormControlByName(field.fieldId)?.invalid\">\r\n                    {{'requiredField' | translate }}\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{DropDownList}} -->\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.DropDownList\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <mat-select formControlName=\"{{field.fieldId}}\" [placeholder]=\"field.placeholder | translate\">\r\n                    <mat-option *ngFor=\"let option of field.data\" [value]=\"option.value\">\r\n                        {{languageService.getCurrentLanguage()=='ar'? (option.viewValueAr |translate) :\r\n                        (option.viewValueEn |translate)}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId).touched && getFormControlByName(field.fieldId).invalid\">\r\n                    {{\r\n                    'requiredField' | translate }}</mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{AutoCompleteList}} -->\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.AutoCompleteList\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input [autocomplete]=\"field.fieldId+ix\" matInput (focus)=\"pushToFocusedFields(field.fieldId)\"\r\n                    id=\"{{field.fieldId}}\" [formControl]=\"getDynamicFormControl(field.fieldId)\"\r\n                    [placeholder]=\"field.placeholder | translate\" [matAutocomplete]=\"i\">\r\n                <mat-autocomplete autocomplete=\"off\" [displayWith]=\"displayFn.bind(this,field.fieldId)\"\r\n                    #i=\"matAutocomplete\" (optionSelected)=\"autoCompleteListSelected($event,field.fieldId)\">\r\n                    <mat-option *ngFor=\"let option of filteredOptionsWrapper[field.fieldId] | async\"\r\n                        [value]=\"option.value\">\r\n                        {{languageService.getCurrentLanguage()=='ar'? (option.viewValueAr |translate) :\r\n                        (option.viewValueEn |translate)}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n                <mat-error\r\n                    *ngIf=\"getDynamicFormControl(field.fieldId).touched && getDynamicFormControl(field.fieldId).invalid\">\r\n                    {{\r\n                    'requiredField' | translate }}</mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{Date}} -->\r\n            <mat-form-field *ngIf=\"field.fieldType== filedTypeEnum.Date\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{ field.label | translate }}</mat-label>\r\n                <input matInput [matDatepicker]=\"i\" [attr.id]=\"field.fieldId + i\" formControlName=\"{{field.fieldId}}\"\r\n                    [placeholder]=\"field.placeholder | translate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"i\"></mat-datepicker-toggle>\r\n                <mat-datepicker #i></mat-datepicker>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId).touched && getFormControlByName(field.fieldId).invalid\">\r\n                    {{\r\n                    'requiredField' | translate }}</mat-error>\r\n            </mat-form-field>\r\n            <!-- Field Type ==> {{CheckBox}} -->\r\n            <div *ngIf=\"field.fieldType== filedTypeEnum.CheckBox\" class=\"example-full-width\" appearance=\"outline\">\r\n                <input matInput hidden=\"true\" formControlName=\"{{field.fieldId}}\"\r\n                    [placeholder]=\"field.placeholder | translate\">\r\n                <mat-checkbox [ngModelOptions]=\"{standalone: true}\"\r\n                    (change)=\"checkBoxValueChanged($event,field.fieldId)\" [(ngModel)]=\"field.value\">{{ field.label |\r\n                    translate\r\n                    }}</mat-checkbox>\r\n            </div>\r\n            <!-- Field Type ==> {{RadioButton}} -->\r\n            <div *ngIf=\"field.fieldType== filedTypeEnum.RadioButton\" class=\"example-full-width\" appearance=\"outline\">\r\n                <mat-label class=\"row\">{{ field.label | translate }}</mat-label>\r\n                <input matInput hidden=\"true\" formControlName=\"{{field.fieldId}}\">\r\n                <mat-radio-button style=\"margin-inline-end: 5px;\" *ngFor=\"let option of field?.data\"\r\n                    (change)=\"radioButtonValueChanged($event,field.fieldId)\" [value]=\"option.value\">\r\n                    {{languageService.getCurrentLanguage()=='ar'? (option.viewValueAr |translate) : (option.viewValueEn\r\n                    |translate)}}\r\n                </mat-radio-button>\r\n                <mat-error\r\n                    *ngIf=\"getFormControlByName(field.fieldId).touched && getFormControlByName(field.fieldId).invalid\">\r\n                    {{\r\n                    'requiredField' | translate }}</mat-error>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex flex-row-reverse padding-end\">\r\n        <div *ngFor=\"let action of formInput?.actions\">\r\n\r\n            <button *ngIf=\"action.actionType==actionTypeEnum.Submit\" mat-raised-button class=\"btn btn-primary btn-start\"\r\n                [disabled]=\"action.isDisableAllowed && dynamicFormGroup.invalid\"\r\n                (click)=\"submitAction(action.actionType,myForm)\" style=\"margin: 5px;\">\r\n                {{action.actionName | translate}}\r\n            </button>\r\n            <button *ngIf=\"action.actionType==actionTypeEnum.ReactivateAll\" mat-raised-button\r\n                class=\"btn btn-primary btn-start\" [disabled]=\"action.isDisableAllowed && dynamicFormGroup.invalid\"\r\n                (click)=\"submitAction(action.actionType,myForm)\" style=\"margin: 5px;\">\r\n                {{action.actionName | translate}}\r\n            </button>\r\n            <button *ngIf=\"action.actionType==actionTypeEnum.Reset\" mat-raised-button class=\"btn btn-primary btn-start\"\r\n                [disabled]=\"action.isDisableAllowed && dynamicFormGroup.invalid\"\r\n                (click)=\"submitAction(action.actionType,myForm)\" style=\"margin: 5px;\">\r\n                {{action.actionName | translate}}\r\n            </button>\r\n\r\n        </div>\r\n        <button *ngIf=\"!isUpdate || !isList\" mat-raised-button class=\"btn btn-primary btn-start\"\r\n            (click)=\"submitAction(actionTypeEnum.Back,myForm)\" style=\"margin-right: 5px;\">\r\n            {{'cacnel' | translate}}\r\n        </button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "8EBi":
/*!*****************************************!*\
  !*** ./src/shared/pipes/search.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const { isArray } = Array;
let FilterPipe = class FilterPipe {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item)
                .toLowerCase()
                .includes(args);
        });
    }
};
FilterPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "9Xk+":
/*!*********************************************************************************!*\
  !*** ./src/reports-management/reports-generator/reports-generator.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MY_FORMATS, ReportsGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsGeneratorComponent", function() { return ReportsGeneratorComponent; });
/* harmony import */ var _raw_loader_reports_generator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reports-generator.component.html */ "FGLn");
/* harmony import */ var _reports_generator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-generator.component.css */ "dC58");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_enums_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/enums/enums */ "B10k");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/global-variables/api-config */ "62t3");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/base.service */ "SOzR");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











const moment = moment__WEBPACK_IMPORTED_MODULE_9__;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
let ReportsGeneratorComponent = class ReportsGeneratorComponent {
    constructor(baseService) {
        this.baseService = baseService;
        this.clients = [];
        this.drivers = [];
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('fullWidth');
        this.clientsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.driversControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.isTracker = false;
        this.isDataEntry = false;
        this.isAdmin = true;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            clientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            driverId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            ordersDateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            ordersDateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            pageNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    get userRolesEnum() {
        return _shared_enums_enums__WEBPACK_IMPORTED_MODULE_6__["RoleTypes"];
    }
    ngOnInit() {
        this.validateReports();
        this.getALlClients();
        this.getAllDrivers();
        const token = localStorage.getItem("recordsearchfilter");
        if (token) {
            const searchForm = JSON.parse(token);
            this.filterForm.patchValue(searchForm);
            console.log(this.filterForm.value);
        }
    }
    validateReports() {
        const userRoles = JSON.parse(localStorage.getItem('SamaDelivery.roles'));
        const fullName = localStorage.getItem('SamaDelivery.FullName');
        console.log(userRoles);
        if (!userRoles) {
            return;
        }
        const hours = new Date().getHours();
        console.log(hours);
        if (userRoles.find(x => x == 'Tracker') && userRoles.length == 1) {
            this.isTracker = true;
        }
        if (userRoles.find(x => x == 'DataEntry') && userRoles.length == 1 && fullName == 'احمد جراد') {
            this.isDataEntry = true;
        }
        /*  if (userRoles.find(x => x == 'Admin' || x == 'Manager' || x == 'Accountant')) {
           this.isAdmin = true;
         } */
    }
    get clientId() {
        return this.filterForm.get('clientId');
    }
    get userType() {
        return this.filterForm.get('userType');
    }
    get driverId() {
        return this.filterForm.get('driverId');
    }
    get ordersDateFrom() {
        return this.filterForm.get('ordersDateFrom');
    }
    get ordersDateTo() {
        return this.filterForm.get('ordersDateTo');
    }
    get PageSize() {
        return this.filterForm.get('pageSize');
    }
    get PageNumber() {
        return this.filterForm.get('pageNumber');
    }
    getALlClients() {
        this.baseService.getItemsByKey(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].User, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Actions"].GetAllItems, 'role', this.userRolesEnum.Merchant).subscribe(res => {
            console.log('Client', this.clients);
            this.clients = res;
            this.filteredClientsOptions = this.clientsControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => (typeof value === 'string' ? value : value.viewValueEn)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => (name ? this._filterClients(name) : this.clients.slice())));
        });
    }
    getAllDrivers() {
        this.baseService.getItemsByKey(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].User, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Actions"].GetAllItems, 'role', this.userRolesEnum.Driver).subscribe(res => {
            this.drivers = res;
            this.filteredDriversOptions = this.driversControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => (typeof value === 'string' ? value : value.viewValue)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => (name ? this._filterDrivers(name) : this.drivers.slice())));
        });
    }
    displayFn(data) {
        return data && data.viewValue ? data.viewValue : '';
    }
    _filterDrivers(value) {
        console.log(value);
        const filterValue = value.toLowerCase();
        return this.drivers.filter(option => option.viewValue.toLowerCase().includes(filterValue));
    }
    _filterClients(value) {
        console.log(value);
        const filterValue = value.toLowerCase();
        return this.clients.filter(option => option.viewValueEn.toLowerCase().includes(filterValue));
    }
    clientSelected(event) {
        this.selectedClient = this.clients.find(x => x.value == event.option.value.value).value;
        this.clientId.setValue(this.selectedClient);
    }
    driverSelected(event) {
        this.selectedDriver = this.drivers.find(x => x.value == event.option.value.value).value;
        this.driverId.setValue(this.selectedDriver);
    }
    filterOrders() {
        const form = this.filterForm.value;
        localStorage.setItem("recordsearchfilter", JSON.stringify(form));
        localStorage.setItem('recordForm', JSON.stringify(this.filterForm.value));
        window.open('/#/records-result', '_blank');
    }
};
ReportsGeneratorComponent.ctorParameters = () => [
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] }
];
ReportsGeneratorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-reports-generator',
        template: _raw_loader_reports_generator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ],
        styles: [_reports_generator_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"]])
], ReportsGeneratorComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n\tflex: 1 1 auto;\r\n}\r\n/* ----------------------------------\r\nCss Profile Edit Dropdown\r\nAuthor: iModDesign\r\nVersion: 1.0\r\n------------------------------------ */\r\nbody {\r\n\tbackground: #222;\r\n}\r\nul,\r\nli {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\na {\r\n\ttext-decoration: none;\r\n}\r\n.profile-wrapper {\r\n\twidth: 200px;\r\n\tposition: relative;\r\n\tmargin: 50px auto;\r\n}\r\n.profile-wrapper::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 10px;\r\n\tborder-color: #333 transparent transparent;\r\n\tborder-width: 6px;\r\n\tborder-style: solid;\r\n}\r\n.example-container {\r\n\theight: 500px;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content {\r\n\tdisplay: flex;\r\n\theight: 100%;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.example-sidenav {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n}\r\n.full-width {\r\n\twidth: 100%;\r\n}\r\n.mat-list-item {\r\n\tcolor: #ffffff !important;\r\n}\r\n.menu-button {\r\n\ttransition: 300ms ease-in-out;\r\n\ttransform: rotate(0deg);\r\n}\r\n.menu-button.rotated {\r\n\ttransform: rotate(180deg);\r\n}\r\n.submenu {\r\n\toverflow-y: hidden;\r\n\ttransition: transform 300ms ease;\r\n\ttransform: scaleY(0);\r\n\ttransform-origin: top;\r\n\tpadding-left: 30px;\r\n}\r\n.submenu.expanded {\r\n\ttransform: scaleY(1);\r\n}\r\n.profile-wrapper::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 10px;\r\n\tborder-color: #eee transparent transparent;\r\n\tborder-width: 6px;\r\n\tborder-style: solid;\r\n}\r\n.profile-wrapper:hover::after {\r\n\tborder-color: #111 transparent transparent;\r\n}\r\n.profile {\r\n\tpadding: 10px;\r\n\tborder: 1px solid #000;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 1px 0 #555 inset, 0 1px 7px #111;\r\n\tbackground: -webkit-linear-gradient(#222, #111);\r\n}\r\n.profile:hover {\r\n\tcursor: pointer;\r\n\tbackground: -webkit-linear-gradient(#1f1f1f, #0a0a0a);\r\n}\r\n.profile .name {\r\n\tfont-size: 12px;\r\n\tcolor: #fff;\r\n\tline-height: 26px;\r\n\tmargin-left: 10px;\r\n}\r\n.profile .name:hover {\r\n\tcolor: #0088cc;\r\n}\r\n.profile img {\r\n\twidth: 25px;\r\n\tdisplay: inline;\r\n\tfloat: left;\r\n\tborder: 1px solid #111;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n/* hide menu */\r\n.menu {\r\n\tdisplay: none;\r\n\tclear: both;\r\n\tmargin: 20px 0 0 0;\r\n}\r\n.menu li {\r\n\tfont-size: 12px;\r\n\tmargin: 0;\r\n\tpadding: 10px 4px;\r\n}\r\n.menu li a {\r\n\tcolor: #555;\r\n}\r\n.menu li:hover > a {\r\n\tcolor: #eee;\r\n}\r\n.menu li:hover {\r\n\tborder-left: 1px solid #111;\r\n\tborder-right: 1px solid #222;\r\n\tborder-bottom: 1px solid #222;\r\n\tborder-top: 1px solid #111;\r\n\tborder-radius: 3px;\r\n}\r\n/* hover profile show menu */\r\n.profile:hover .menu { \r\n\tdisplay: block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTs7OztzQ0FJc0M7QUFDdEM7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFNBQVM7QUFDVjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLDBDQUEwQztDQUMxQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHlCQUFpQjtJQUFqQixzQkFBaUI7S0FBakIscUJBQWlCO1NBQWpCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLDZCQUE2QjtDQUM3Qix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdDQUFnQztDQUNoQyxvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsMENBQTBDO0NBQzFDLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLDBDQUEwQztBQUMzQztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsOENBQThDO0NBQzlDLCtDQUErQztBQUNoRDtBQUNBO0NBQ0MsZUFBZTtDQUNmLHFEQUFxRDtBQUN0RDtBQUNBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsNENBQTRDO0FBQzdDO0FBRUEsY0FBYztBQUNkO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGtCQUFrQjtBQUNuQjtBQUVBLDRCQUE0QjtBQUM1QjtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuXHRmbGV4OiAxIDEgYXV0bztcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkNzcyBQcm9maWxlIEVkaXQgRHJvcGRvd25cclxuQXV0aG9yOiBpTW9kRGVzaWduXHJcblZlcnNpb246IDEuMFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZDogIzIyMjtcclxufVxyXG51bCxcclxubGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucHJvZmlsZS13cmFwcGVyIHtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcbi5wcm9maWxlLXdyYXBwZXI6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDIwcHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMzMzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci13aWR0aDogNnB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDUwMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSB7XHJcblx0Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4ubWVudS1idXR0b24ge1xyXG5cdHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbi5tZW51LWJ1dHRvbi5yb3RhdGVkIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5zdWJtZW51IHtcclxuXHRvdmVyZmxvdy15OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcblx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG5cdHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4uc3VibWVudS5leHBhbmRlZCB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbn1cclxuLnByb2ZpbGUtd3JhcHBlcjo6YmVmb3JlIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDIwcHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci13aWR0aDogNnB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLnByb2ZpbGUtd3JhcHBlcjpob3Zlcjo6YWZ0ZXIge1xyXG5cdGJvcmRlci1jb2xvcjogIzExMSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCAjNTU1IGluc2V0LCAwIDFweCA3cHggIzExMTtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMjIyLCAjMTExKTtcclxufVxyXG4ucHJvZmlsZTpob3ZlciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMxZjFmMWYsICMwYTBhMGEpO1xyXG59XHJcbi5wcm9maWxlIC5uYW1lIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnByb2ZpbGUgLm5hbWU6aG92ZXIge1xyXG5cdGNvbG9yOiAjMDA4OGNjO1xyXG59XHJcbi5wcm9maWxlIGltZyB7XHJcblx0d2lkdGg6IDI1cHg7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0O1xyXG59XHJcblxyXG4vKiBoaWRlIG1lbnUgKi9cclxuLm1lbnUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0bWFyZ2luOiAyMHB4IDAgMCAwO1xyXG59XHJcbi5tZW51IGxpIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDEwcHggNHB4O1xyXG59XHJcbi5tZW51IGxpIGEge1xyXG5cdGNvbG9yOiAjNTU1O1xyXG59XHJcbi5tZW51IGxpOmhvdmVyID4gYSB7XHJcblx0Y29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5tZW51IGxpOmhvdmVyIHtcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICMxMTE7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzExMTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi8qIGhvdmVyIHByb2ZpbGUgc2hvdyBtZW51ICovXHJcbi5wcm9maWxlOmhvdmVyIC5tZW51IHsgXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiPreLink: 'https://alkyan-api.azurewebsites.net/api/',
    token: 'accessToken',
    host: '',
    imagesUrl: 'https://alkyan-api.azurewebsites.net/home/appimages/',
    sasToken: '',
    roleClaim: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    addressClaim: '',
    mobileClaim: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone',
    userName: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
    phoneNumberRegex: '',
    idClaim: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
};


/***/ }),

/***/ "B10k":
/*!***********************************!*\
  !*** ./src/shared/enums/enums.ts ***!
  \***********************************/
/*! exports provided: FieldTypeEnum, RoleTypes, ActionTypeEnum, ListActionTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldTypeEnum", function() { return FieldTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTypes", function() { return RoleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypeEnum", function() { return ActionTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListActionTypeEnum", function() { return ListActionTypeEnum; });
var FieldTypeEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum[FieldTypeEnum["Input"] = 1] = "Input";
    FieldTypeEnum[FieldTypeEnum["DropDownList"] = 2] = "DropDownList";
    FieldTypeEnum[FieldTypeEnum["AutoCompleteList"] = 3] = "AutoCompleteList";
    FieldTypeEnum[FieldTypeEnum["Date"] = 4] = "Date";
    FieldTypeEnum[FieldTypeEnum["CheckBox"] = 5] = "CheckBox";
    FieldTypeEnum[FieldTypeEnum["RadioButton"] = 6] = "RadioButton";
    FieldTypeEnum[FieldTypeEnum["HiddenField"] = 7] = "HiddenField";
    FieldTypeEnum[FieldTypeEnum["Number"] = 8] = "Number";
    FieldTypeEnum[FieldTypeEnum["File"] = 9] = "File";
    FieldTypeEnum[FieldTypeEnum["ColorPicker"] = 10] = "ColorPicker";
    FieldTypeEnum[FieldTypeEnum["ImageFile"] = 11] = "ImageFile";
    FieldTypeEnum[FieldTypeEnum["Email"] = 12] = "Email";
})(FieldTypeEnum || (FieldTypeEnum = {}));
var RoleTypes;
(function (RoleTypes) {
    RoleTypes[RoleTypes["Admin"] = 1] = "Admin";
    RoleTypes[RoleTypes["Driver"] = 2] = "Driver";
    RoleTypes[RoleTypes["Merchant"] = 3] = "Merchant";
    RoleTypes[RoleTypes["EndUser"] = 4] = "EndUser";
    RoleTypes[RoleTypes["Accountant"] = 5] = "Accountant";
    RoleTypes[RoleTypes["DataEntry"] = 6] = "DataEntry";
    RoleTypes[RoleTypes["Assistant"] = 7] = "Assistant";
    RoleTypes[RoleTypes["Employee"] = 8] = "Employee";
})(RoleTypes || (RoleTypes = {}));
var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum[ActionTypeEnum["Submit"] = 1] = "Submit";
    ActionTypeEnum[ActionTypeEnum["Reset"] = 2] = "Reset";
    ActionTypeEnum[ActionTypeEnum["Back"] = 3] = "Back";
    ActionTypeEnum[ActionTypeEnum["Edit"] = 4] = "Edit";
    ActionTypeEnum[ActionTypeEnum["ReactivateAll"] = 5] = "ReactivateAll";
})(ActionTypeEnum || (ActionTypeEnum = {}));
var ListActionTypeEnum;
(function (ListActionTypeEnum) {
    ListActionTypeEnum[ListActionTypeEnum["Edit"] = 1] = "Edit";
    ListActionTypeEnum[ListActionTypeEnum["Delete"] = 2] = "Delete";
    ListActionTypeEnum[ListActionTypeEnum["View"] = 3] = "View";
    ListActionTypeEnum[ListActionTypeEnum["Reactivate"] = 4] = "Reactivate";
})(ListActionTypeEnum || (ListActionTypeEnum = {}));


/***/ }),

/***/ "BGuT":
/*!*********************************************************!*\
  !*** ./src/shared/admin-layout/admin-layout.routing.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _reports_management_reports_generator_reports_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reports-management/reports-generator/reports-generator.component */ "9Xk+");
/* harmony import */ var _auth_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/role.guard */ "inyj");
/* harmony import */ var _shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-components/dashboard/dashboard.component */ "4PdW");



const AdminLayoutRoutes = [
    { path: 'dashboard', component: _shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_auth_role_guard__WEBPACK_IMPORTED_MODULE_1__["RoleGuard"]], data: { expectedRole: ['Admin', 'DataEntry', 'Accountant', 'Assistant'] } },
    { path: 'reports-generator', component: _reports_management_reports_generator_reports_generator_component__WEBPACK_IMPORTED_MODULE_0__["ReportsGeneratorComponent"], canActivate: [_auth_role_guard__WEBPACK_IMPORTED_MODULE_1__["RoleGuard"]], data: { expectedRole: ['Admin', 'Accountant'] } },
    {
        path: 'forms',
        loadChildren: '../../forms-module/forms.module#DynamicFormsModule'
    },
];


/***/ }),

/***/ "DWMj":
/*!*****************************************************************!*\
  !*** ./src/shared/shared-components/footer/footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "YY81");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "qj6P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "EvWQ":
/*!***********************************************************************************!*\
  !*** ./src/shared/shared-components/reports-results/reports-result.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, td, th {\r\n    border: 1px solid black;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  hr.pageBreak {\r\n    page-break-after: always;\r\n  }\r\n  \r\n  .center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n   \r\n  }\r\n  \r\n  @media print {\r\n    body, html, .forPrint{\r\n        width: 100%;\r\n        height:100%;\r\n    }\r\n    table { page-break-inside:auto }\r\n    tr    { page-break-inside:avoid; page-break-after:auto }\r\n    thead { display:table-header-group }\r\n    tfoot { display:table-footer-group }\r\n  }\r\n  \r\n  *{\r\n    transition: all 0.6s;\r\n}\r\n  \r\n  html {\r\n    height: 100%;\r\n}\r\n  \r\n  body{\r\n    font-family: 'Lato', sans-serif;\r\n    color: #888;\r\n    margin: 0;\r\n}\r\n  \r\n  #main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n  \r\n  .fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n  \r\n  .fof h1{\r\n\t  font-size: 38px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n  \r\n  @-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n  \r\n  @keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvcmVwb3J0cy1yZXN1bHRzL3JlcG9ydHMtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0U7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmO0lBQ0EsUUFBUSx1QkFBdUI7SUFDL0IsUUFBUSx1QkFBdUIsRUFBRSxzQkFBc0I7SUFDdkQsUUFBUSwyQkFBMkI7SUFDbkMsUUFBUSwyQkFBMkI7RUFDckM7O0VBRUE7SUFDRSxvQkFBb0I7QUFDeEI7O0VBRUE7SUFDSSxZQUFZO0FBQ2hCOztFQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0VBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0VBRUE7R0FDRyxtQkFBbUI7R0FDbkIsc0JBQXNCO0FBQ3pCOztFQUVBO0dBQ0csZUFBZTtHQUNmLHFCQUFxQjtHQUNyQixtQkFBbUI7R0FDbkIsOENBQXNDO1dBQXRDLHNDQUFzQztBQUN6Qzs7RUFFQTtHQUNHLEtBQUssbUNBQW1DLENBQUM7R0FDekMsR0FBRywwQ0FBMEMsQ0FBQztBQUNqRDs7RUFIQTtHQUNHLEtBQUssbUNBQW1DLENBQUM7R0FDekMsR0FBRywwQ0FBMEMsQ0FBQztBQUNqRCIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL3JlcG9ydHMtcmVzdWx0cy9yZXBvcnRzLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuICBoci5wYWdlQnJlYWsge1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIGJvZHksIGh0bWwsIC5mb3JQcmludHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICAgIHRhYmxlIHsgcGFnZS1icmVhay1pbnNpZGU6YXV0byB9XHJcbiAgICB0ciAgICB7IHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyBwYWdlLWJyZWFrLWFmdGVyOmF1dG8gfVxyXG4gICAgdGhlYWQgeyBkaXNwbGF5OnRhYmxlLWhlYWRlci1ncm91cCB9XHJcbiAgICB0Zm9vdCB7IGRpc3BsYXk6dGFibGUtZm9vdGVyLWdyb3VwIH1cclxuICB9XHJcblxyXG4gICp7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNtYWlue1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb2Z7XHJcblx0ICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdCAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvZiBoMXtcclxuXHQgIGZvbnQtc2l6ZTogMzhweDtcclxuXHQgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblx0ICBhbmltYXRpb246IHR5cGUgLjVzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBle1xyXG5cdCAgZnJvbXtib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODt9XHJcblx0ICB0b3tib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7fVxyXG59Il19 */");

/***/ }),

/***/ "FGLn":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/reports-management/reports-generator/reports-generator.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <h3 class=\"card-title \">{{'reports' | translate}}</h3>\r\n                        <p class=\"card-category\"> {{'reportsGenerator' | translate}}</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form [formGroup]=\"filterForm\">\r\n                            <div class=\"row w-100 p-3\">\r\n                                <mat-radio-group aria-label=\"Select an option\" formControlName=\"userType\">\r\n                                    <mat-radio-button [value]=\"1\" style=\"margin: 10px;\" *ngIf=\"isAdmin\">{{'driver' |\r\n                                        translate}}</mat-radio-button>\r\n                                    <mat-radio-button [value]=\"2\" style=\"margin: 10px;\" *ngIf=\"isAdmin\">{{'clients' |\r\n                                        translate}}</mat-radio-button>\r\n                                    <mat-radio-button [value]=\"3\" style=\"margin: 10px;\" *ngIf=\"isAdmin\">\r\n                                        {{'clientsDetails' | translate}}</mat-radio-button>\r\n                                    <mat-radio-button [value]=\"4\" *ngIf=\"isAdmin\">{{'todayDriversDetails' | translate}}\r\n                                    </mat-radio-button>\r\n                                </mat-radio-group>\r\n                            </div>\r\n                            <div class=\"row w-100\" *ngIf=\"userType.value == 2\">\r\n                                <mat-form-field class=\"example-full-width col-md-12\" appearance=\"outline\">\r\n                                    <mat-label>{{'client' | translate}}</mat-label>\r\n                                    <div class=\"my-form\">\r\n                                        <input type=\"text\" placeholder=\"{{'searchClients' | translate}}\" matInput\r\n                                            [formControl]=\"clientsControl\" [matAutocomplete]=\"autoClients\">\r\n                                    </div>\r\n                                    <mat-autocomplete [displayWith]=\"displayFn\"\r\n                                        (optionSelected)=\"clientSelected($event)\" #autoClients=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let option of clients\"\r\n                                            [value]=\"option\">\r\n                                            {{option.viewValueEn}}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                    <mat-error *ngIf=\"clientId.hasError('required')\">\r\n                                        {{ 'requiredField' | translate }}\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n\r\n\r\n                            </div>\r\n                            <div class=\"row w-100\" *ngIf=\"userType.value == 1\">\r\n                                <mat-form-field class=\"example-full-width col-md-12\" appearance=\"outline\">\r\n                                    <mat-label>{{'driver' | translate}}</mat-label>\r\n                                    <div class=\"my-form\">\r\n                                        <input type=\"text\" placeholder=\"{{'searchDrivers' | translate}}\" matInput\r\n                                            [formControl]=\"driversControl\" [matAutocomplete]=\"autoDrivers\">\r\n                                    </div>\r\n                                    <mat-autocomplete [displayWith]=\"displayFn\"\r\n                                        (optionSelected)=\"driverSelected($event)\" #autoDrivers=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let option of filteredDriversOptions | async\"\r\n                                            [value]=\"option\">\r\n                                            {{option.viewValue}}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                    <mat-error *ngIf=\"driverId.hasError('required')\">\r\n                                        {{ 'requiredField' | translate }}\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row w-100\">\r\n                                <mat-form-field appearance=\"outline\" class=\"example-full-width col-md-12\">\r\n                                    <mat-label>{{'fromDate' |translate}}</mat-label>\r\n                                    <input [matDatepicker]=\"fromDatePicker\" formControlName=\"ordersDateFrom\" matInput>\r\n                                    <mat-datepicker-toggle [for]=\"fromDatePicker\" matSuffix></mat-datepicker-toggle>\r\n                                    <mat-datepicker #fromDatePicker></mat-datepicker>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"row w-100\">\r\n                                <mat-form-field appearance=\"outline\" class=\"example-full-width col-md-12\">\r\n                                    <mat-label>{{'toDate' |translate}}</mat-label>\r\n                                    <input [matDatepicker]=\"toDatePicker\" formControlName=\"ordersDateTo\" matInput>\r\n                                    <mat-datepicker-toggle [for]=\"toDatePicker\" matSuffix></mat-datepicker-toggle>\r\n                                    <mat-datepicker #toDatePicker></mat-datepicker>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"d-flex flex-row-reverse padding-end\">\r\n                                <button mat-raised-button\r\n                                    class=\"btn btn-primary btn-start\"\r\n                                    [disabled]=\"!userType.value\"\r\n                                    (click)=\"filterOrders()\" style=\"margin: 1px;\">\r\n                                    {{'search' | translate}}\r\n                                </button>\r\n                                <button mat-raised-button\r\n                                    class=\"btn btn-primary btn-start\"\r\n                                    [disabled]=\"!userType.value\"\r\n                                    (click)=\"filterForm.reset(); filterOrders()\" style=\"margin: 1px;\">\r\n                                    {{'clear' | translate}}\r\n                                </button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "FTkc":
/*!******************************************************************************************************!*\
  !*** ./src/shared/shared-components/available-drivers-dialog/available-drivers-dialog.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable :hover {\r\n    cursor: pointer;\r\n    background-color:rgb(212, 208, 208);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvYXZhaWxhYmxlLWRyaXZlcnMtZGlhbG9nL2F2YWlsYWJsZS1kcml2ZXJzLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2F2YWlsYWJsZS1kcml2ZXJzLWRpYWxvZy9hdmFpbGFibGUtZHJpdmVycy1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlcmFibGUgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxMiwgMjA4LCAyMDgpO1xyXG59Il19 */");

/***/ }),

/***/ "G+Ui":
/*!***********************************************************************************!*\
  !*** ./src/shared/shared-components/add-note-dialog/add-note-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddNoteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteDialogComponent", function() { return AddNoteDialogComponent; });
/* harmony import */ var _raw_loader_add_note_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-note-dialog.component.html */ "XECf");
/* harmony import */ var _add_note_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-note-dialog.component.css */ "rS+t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notification.service */ "Jxek");
/* harmony import */ var _enums_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/enums */ "B10k");
/* harmony import */ var _global_variables_api_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global-variables/api-config */ "62t3");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/base.service */ "SOzR");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/language.service */ "I7yr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/models/dynamic-form-input */ "/l9S");
/* harmony import */ var _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/dynamic-form.service */ "aW8j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















let AddNoteDialogComponent = class AddNoteDialogComponent {
    constructor(dialogRef, data, languageService, baseService, notification, translate, spinner, dynamicService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
        this.baseService = baseService;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.dynamicService = dynamicService;
        this.router = router;
        this.dynamicFormInput = new _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_12__["DynamicFormInput"]();
        this.isLoading = true;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            orderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](),
            orderNoteText: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](),
            uploadFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]()
        });
        this.filesWrapper = [];
    }
    get userRolesEnum() {
        return _enums_enums__WEBPACK_IMPORTED_MODULE_5__["RoleTypes"];
    }
    ngOnInit() {
        console.log(this.data);
        this.orderId = this.data.orderId;
        this.spinner.show();
        this.getFieldsData();
    }
    getFieldsData() {
        this.dynamicService.getFormSettings('AddNoteForm').subscribe(res => {
            this.dynamicFormInput = res;
            this.isLoading = false;
            this.spinner.hide();
        });
    }
    serveAction(event) {
        if (event.data.orderNoteText == '' && event.data.file == '') {
            this.spinner.hide();
            this.notification.showNotification(this.translate.instant('oneFieldShouldBeFilled'), 'danger');
        }
        else {
            let formData = new FormData();
            console.log(event.data);
            Object.entries(event.data).forEach(element => {
                var file;
                if (element[0] == 'file') {
                    file = element[1];
                    formData.append(element[0], file);
                }
                else {
                    formData.append(element[0], element[1]);
                }
            });
            formData.append('orderId', this.orderId);
            console.log(formData);
            this.baseService.postFormItem(_global_variables_api_config__WEBPACK_IMPORTED_MODULE_6__["Controllers"].OrderNotes, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_6__["Actions"].PostItem, formData).subscribe(res => {
                this.spinner.hide();
                this.dialogRef.close();
                this.notification.showNotification(res, 'success');
            }, error => {
                if (error.status === 400) {
                    this.notification.showNotification(error.error, 'danger');
                }
                else {
                    this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
                }
                this.spinner.hide();
            });
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onDriverSelected(driverId) {
        this.dialogRef.close(driverId);
    }
};
AddNoteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
    { type: _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_13__["DynamicDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] }
];
AddNoteDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-note-dialog',
        template: _raw_loader_add_note_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_note_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"],
        _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
        _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_13__["DynamicDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]])
], AddNoteDialogComponent);



/***/ }),

/***/ "H/zg":
/*!*****************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-form/dynamic-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DynamicFormComponent, RegexConstants, RegexValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexConstants", function() { return RegexConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexValidator", function() { return RegexValidator; });
/* harmony import */ var _raw_loader_dynamic_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dynamic-form.component.html */ "7pUP");
/* harmony import */ var _dynamic_form_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component.css */ "T6+7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/enums/enums */ "B10k");
/* harmony import */ var _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/dynamic-form-input */ "/l9S");
/* harmony import */ var _shared_models_dynamic_form_output_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/dynamic-form-output.model */ "hv8g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _icon_picker_dialog_icon_picker_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon-picker-dialog/icon-picker-dialog.component */ "6NpB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let DynamicFormComponent = class DynamicFormComponent {
    constructor(_location, spinner, dialog, languageService, router, formBuilder) {
        this._location = _location;
        this.spinner = spinner;
        this.dialog = dialog;
        this.languageService = languageService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.formInput = new _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_5__["DynamicFormInput"]();
        this.isUpdate = false;
        this.isList = false;
        this.renderedMatAutoComleteFieldId = [];
        this.actionSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.autoCompleteControls = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.dynamicFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.wrapper = [];
        this.filesWrapper = [];
        this.filteredOptionsWrapper = [];
        this.iconName = 'access_time';
    }
    get filedTypeEnum() {
        return _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["FieldTypeEnum"];
    }
    get actionTypeEnum() {
        return _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["ActionTypeEnum"];
    }
    ngOnInit() {
        this.dynamicFormGroup = this.formBuilder.group({});
        this.formInput.formFields.forEach((field) => {
            const validators = this.fetchFieldValidations(field);
            const control = this.formBuilder.control(field.value, validators);
            this.dynamicFormGroup.addControl(field.fieldId, control);
        });
    }
    ngAfterViewInit() { }
    displayFn(fieldId, data) {
        if (fieldId) {
            let fieldData = this.formInput.formFields.find((x) => x.fieldId == fieldId);
            let selectedOption = fieldData.data.find((x) => x.value == data);
            return selectedOption &&
                (selectedOption.viewValueEn || selectedOption.viewValueAr)
                ? this.languageService.getCurrentLanguage() == 'ar'
                    ? selectedOption.viewValueAr
                    : selectedOption.viewValueEn
                : '';
        }
        return '';
    }
    fetchFieldValidations(field) {
        let validators = [];
        if (field.options.required && field.options.phoneNumberValidation) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            validators.push(RegexValidator(RegexConstants.uaeNumber));
        }
        else if (field.options.required && !field.options.phoneNumberValidation) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        }
        else if (!field.options.required && field.options.phoneNumberValidation) {
            validators.push(RegexValidator(RegexConstants.uaeNumber));
        }
        else {
        }
        if (field.fieldType == _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["FieldTypeEnum"].Email) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email);
        }
        return validators;
    }
    getDynamicFormControl(filedId) {
        return this.autoCompleteControls.get(filedId);
    }
    filterOptions(value, data) {
        const filterValue = value.toLowerCase();
        return data.filter((option) => option.viewValueEn.toLowerCase().includes(filterValue) ||
            option.viewValueAr.toLowerCase().includes(filterValue));
    }
    autoCompleteListSelected(event, fieldId) {
        this.selectedMatAutoComleteFieldId = fieldId;
        var autoCompleteField = this.formInput.formFields.find((x) => x.fieldId == fieldId);
        const control = autoCompleteField.data.find((x) => x.value === event.option.value);
        this.dynamicFormGroup.get(fieldId).setValue(control.value);
        this.dynamicFormGroup.updateValueAndValidity();
    }
    checkBoxValueChanged(event, fieldId) {
        this.getFormControlByName(fieldId).setValue(event.checked);
    }
    radioButtonValueChanged(event, fieldId) {
        this.getFormControlByName(fieldId).setValue(event.value);
    }
    getFormControlByName(controlName) {
        return this.dynamicFormGroup.get(controlName);
    }
    fileUploaderChanged(event, fieldId) {
        this.selectedFile = event.target.files[0];
        this.filesWrapper[fieldId] = this.selectedFile.name;
        this.dynamicFormGroup.controls[fieldId].setValue(this.selectedFile);
        this.selectedFile = undefined;
    }
    openUploader(fieldId) {
        let input = document.getElementById(fieldId);
        input.click();
    }
    pushToFocusedFields(fieldId) {
        this.selectedMatAutoComleteFieldId = fieldId;
    }
    resetForm(form, actionType) {
        form.resetForm();
        let output = new _shared_models_dynamic_form_output_model__WEBPACK_IMPORTED_MODULE_6__["DynamicFormOutput"]();
        output.data = this.dynamicFormGroup.value;
        output.action = actionType;
        this.selectedFile = null;
        this.filesWrapper = [];
        if (!this.isList && this.myFileInput) {
            this.myFileInput.nativeElement.value = '';
        }
        if (this.isList) {
            this.spinner.show();
            this.actionSubmitted.emit(output);
        }
    }
    submitAction(actionType, form) {
        this.filesWrapper = [];
        let output = new _shared_models_dynamic_form_output_model__WEBPACK_IMPORTED_MODULE_6__["DynamicFormOutput"]();
        switch (actionType) {
            case _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["ActionTypeEnum"].Submit: {
                this.spinner.show();
                output.data = this.dynamicFormGroup.value;
                output.action = actionType;
                this.actionSubmitted.emit(output);
                if (!this.isUpdate) {
                    //this.resetForm(form,actionType);
                }
                break;
            }
            case _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["ActionTypeEnum"].Reset: {
                this.resetForm(form, actionType);
                break;
            }
            case _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["ActionTypeEnum"].Back: {
                this._location.back();
                break;
            }
            case _shared_enums_enums__WEBPACK_IMPORTED_MODULE_4__["ActionTypeEnum"].ReactivateAll: {
                output = null;
                this.actionSubmitted.emit(output);
                break;
            }
            default:
                break;
        }
    }
    openIconPickerDialog(fieldId) {
        const dialogRef = this.dialog.open(_icon_picker_dialog_icon_picker_dialog_component__WEBPACK_IMPORTED_MODULE_9__["IconPickerDialogComponent"], {
            width: '600px',
            data: {
                title: 'chooseYourIcon',
                content: 'confirmDeleteMessage',
            },
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.getFormControlByName(fieldId).setValue(res);
                this.iconName = res;
            }
        });
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
DynamicFormComponent.propDecorators = {
    formInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    myFileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['myFileInput',] }],
    isUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    actionSubmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
DynamicFormComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dynamic-form',
        template: _raw_loader_dynamic_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dynamic_form_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
        _shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"],
        _shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], DynamicFormComponent);

class RegexConstants {
}
RegexConstants.uaeNumber = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].phoneNumberRegex;
function RegexValidator(reg) {
    return (control) => {
        if (control.value && !control.value.toString().match(reg)) {
            return { decimal: true };
        }
        return null;
    };
}


/***/ }),

/***/ "H4+0":
/*!*********************************************************************!*\
  !*** ./src/shared/shared-components/sidebar/sidebar.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-toggle::after {\n  display: inline-block !important;\n  position: absolute !important;\n  margin-left: 19em;\n  margin-top: -16px !important;\n  content: \"\" !important;\n  border-top: 0.3em solid !important;\n  border-right: 0.3em solid transparent !important;\n  border-bottom: 0 !important;\n  border-left: 0.3em solid transparent !important;\n}\n\n.dropdown-toggle-ar::after {\n  display: inline-block !important;\n  position: absolute !important;\n  margin-top: -16px !important;\n  content: \"\" !important;\n  border-top: 0.3em solid !important;\n  border-right: 0.3em solid transparent !important;\n  border-bottom: 0 !important;\n  border-left: 0.3em solid transparent !important;\n}\n\n.sub-menu {\n  margin-left: 40px !important;\n}\n\n.sub-menu p {\n  font-size: 13px !important;\n}\n\n.smallWidth {\n  width: 10%;\n  background-color: black;\n}\n\n.hidden {\n  visibility: hidden !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n@media only screen and (max-width: 990px) {\n  #closeBarIcon {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBR0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBQUo7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUFLO0VBQ0csMEJBQUE7QUFFUjs7QUFBQztFQUNHLFVBQUE7RUFDQSx1QkFBQTtBQUdKOztBQUZDO0VBQ0csNkJBQUE7QUFLSjs7QUFGQTtFQUNJLDhCQUFBO0FBS0o7O0FBQ0E7RUFDSTtJQUNJLGtCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTllbSA7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG4gICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMC4zZW0gc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGUtYXI6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAvL21hcmdpbi1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gICAgbWFyZ2luLXRvcDogLTE2cHggIWltcG9ydGFudDtcclxuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uc3ViLW1lbnV7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0uc21hbGxXaWR0aHtcclxuICAgIHdpZHRoOjEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59LmhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgICNjbG9zZUJhckljb257XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xyXG4gIFxyXG4gICAgICAgICAgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "Hdgi":
/*!****************************************************************!*\
  !*** ./src/shared/services/mat-paginator-translate.service.ts ***!
  \****************************************************************/
/*! exports provided: MatPaginationIntlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginationIntlService", function() { return MatPaginationIntlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MatPaginationIntlService = class MatPaginationIntlService extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"] {
    constructor(translateService) {
        super();
        this.translateService = translateService;
        this.getRangeLabel = (page, pageSize, length) => {
            const of = this.translateService ? this.translateService.instant("I18N.MAT_PAGINATOR.OF") : "of";
            if (length === 0 || pageSize === 0) {
                return "0 " + of + " " + length;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;
            const endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + " - " + endIndex + " " + of + " " + length;
        };
        // React whenever the language is changed
        this.translateService.onLangChange.subscribe((_event) => {
            this.translateLabels();
        });
        // Initialize the translations once at construction time
        this.translateLabels();
    }
    injectTranslateService(translate) {
        this.translateService = translate;
        this.translateService.onLangChange.subscribe(() => {
            this.translateLabels();
        });
        this.translateLabels();
    }
    translateLabels() {
        this.firstPageLabel = this.translateService.instant("FIRST_PAGE_LABEL");
        this.itemsPerPageLabel = this.translateService.instant("ITEMS_PER_PAGE_LABEL");
        this.lastPageLabel = this.translateService.instant("LAST_PAGE_LABEL");
        this.nextPageLabel = this.translateService.instant("NEXT_PAGE_LABEL");
        this.previousPageLabel = this.translateService.instant("PREVIOUS_PAGE_LABEL");
        this.changes.next(); // Fire a change event to make sure that the labels are refreshed
    }
};
MatPaginationIntlService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
MatPaginationIntlService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], MatPaginationIntlService);



/***/ }),

/***/ "HqPE":
/*!*******************************************!*\
  !*** ./src/shared/models/date-adapter.ts ***!
  \*******************************************/
/*! exports provided: CUSTOM_DATE_FORMATS, CustomDatePickerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_DATE_FORMATS", function() { return CUSTOM_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatePickerAdapter", function() { return CustomDatePickerAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const CUSTOM_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        //dateInput: { month: 'short', year: 'numeric', day: 'numeric'},
        dateInput: 'customInput',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
let CustomDatePickerAdapter = class CustomDatePickerAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"] {
    parse(value) {
        if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
            const str = value.split('.');
            if (str.length < 2 || isNaN(+str[0]) || isNaN(+str[1])
                || isNaN(+str[2])) {
                return null;
            }
            return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]));
        }
        const timestamp = typeof value === 'number' ? value :
            Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }
};
CustomDatePickerAdapter = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], CustomDatePickerAdapter);



/***/ }),

/***/ "I7yr":
/*!*************************************************!*\
  !*** ./src/shared/services/language.service.ts ***!
  \*************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LanguageService = class LanguageService {
    constructor(translate, adapter) {
        this.translate = translate;
        this.adapter = adapter;
    }
    getCurrentLanguage() {
        return this.translate.currentLang;
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.translate.setDefaultLang(lang);
        localStorage.setItem('language', lang);
        this.adapter.setLocale(lang);
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"] }
];
LanguageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]])
], LanguageService);



/***/ }),

/***/ "JUnD":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public-order-details/public-order-details.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <h3 class=\"card-title \">{{'orderDetails' | translate}}</h3>\r\n                    </div>\r\n\r\n                    <div class=\"card-body\" *ngIf=\"!isLoading\">\r\n                        <div *ngIf=\"!detailsInput?.dataObject?.isDeliveryCompany\"\r\n                            class=\"row d-flex justify-content-center mb-3\">\r\n                            <img src=\"/assets/img/logo.png\" style=\"width: 17%;\">\r\n                        </div>\r\n                        <div *ngIf=\"detailsInput?.dataObject?.isDeliveryCompany\"\r\n                            class=\"row d-flex justify-content-center mb-3\">\r\n                            <img [src]=\"imagesUrl+detailsInput?.dataObject?.clientBrand\" style=\"width: 17%;\">\r\n                        </div>\r\n                        <app-dynamic-details [detailsInput]=\"detailsInput\"></app-dynamic-details>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <h3 class=\"card-title \">{{'driverDetails' | translate}}</h3>\r\n                    </div>\r\n\r\n                    <div class=\"card-body\" *ngIf=\"!isLoading\">\r\n                        <app-dynamic-details [detailsInput]=\"driverDetailsInput\"></app-dynamic-details>\r\n                        <div *ngIf=\"driverDetailsInput?.dataObject?.latitude && driverDetailsInput?.dataObject?.longitude\"\r\n                            class=\"row d-flex justify-content-center mb-3\">\r\n                            <h3>{{'driverCurrentLocation' | translate}}</h3>\r\n                            <agm-map [latitude]=\"driverDetailsInput?.dataObject?.latitude\"\r\n                                [longitude]=\"driverDetailsInput?.dataObject?.longitude\" [zoom]=\"14\">\r\n                                <agm-marker [latitude]=\"driverDetailsInput?.dataObject?.latitude\"\r\n                                    [longitude]=\"driverDetailsInput?.dataObject?.longitude\" [markerDraggable]=\"false\">\r\n                                </agm-marker>\r\n                            </agm-map>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Jxek":
/*!*****************************************************!*\
  !*** ./src/shared/services/notification.service.ts ***!
  \*****************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const configurations = {
    type: 'success',
    title: 'This is just a title',
    content: 'This is just some content',
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'fromRight'
};
const types = ['alert', 'error', 'info', 'warn', 'success'];
let NotificationService = class NotificationService {
    constructor(languageService, translate) {
        this.languageService = languageService;
        this.translate = translate;
    }
    showNotification(message, type) {
        //const color = Math.floor((Math.random() * 4) + 1);
        var direction = this.languageService.getCurrentLanguage() == 'en' ? "ltr" : "rtl";
        $.notify({
            icon: "notifications",
            message: message
        }, {
            type: type,
            timer: 2000,
            placement: {
                from: 'bottom',
                align: this.languageService.getCurrentLanguage() == 'en' ? 'right' : 'left'
            },
            template: '<div data-notify="container" dir=' + direction + ' class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">' + this.translate.instant(message) + '</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
    showOriginalNotification(message, type) {
        //const color = Math.floor((Math.random() * 4) + 1);
        var direction = this.languageService.getCurrentLanguage() == 'en' ? "ltr" : "rtl";
        $.notify({
            icon: "notifications",
            message: message
        }, {
            type: type,
            timer: 2000,
            placement: {
                from: 'bottom',
                align: this.languageService.getCurrentLanguage() == 'en' ? 'right' : 'left'
            },
            template: '<div data-notify="container" dir=' + direction + ' class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">' + message + '</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: _language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
NotificationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
], NotificationService);



/***/ }),

/***/ "KWsi":
/*!******************************************************************!*\
  !*** ./src/shared/shared-components/navbar/navbar.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-li {\r\n    padding-top: 13px;\r\n}\r\n#toggler{\r\n  font-size: 25px;\r\n  padding: 10px !important;\r\n}\r\n.headersMobile{\r\n  top : 40px;\r\n  position: absolute;\r\n  padding: 0;\r\nz-index: 3000;\r\n  display: none;\r\n  list-style-type: none;\r\n  margin-left: 10% ;\r\n  margin-bottom: 20px;\r\n  margin-top: 10px;\r\n\r\n}\r\n.headersMobile li{\r\n  display: inline-flex !important;\r\n  list-style-type: none;\r\n}\r\n@media only screen and (max-width: 990px) {\r\n \r\n  .headersMobile{\r\ndisplay: block !important;\r\n  }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWixhQUFhO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7QUFBQztFQUNDLCtCQUErQjtFQUMvQixxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRTtBQUNGLHlCQUF5QjtFQUN2Qjs7O0FBR0YiLCJmaWxlIjoic3JjL3NoYXJlZC9zaGFyZWQtY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtbGkge1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbn1cclxuI3RvZ2dsZXJ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyc01vYmlsZXtcclxuICB0b3AgOiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAwO1xyXG56LWluZGV4OiAzMDAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCUgO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn0uaGVhZGVyc01vYmlsZSBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gXHJcbiAgLmhlYWRlcnNNb2JpbGV7XHJcbmRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "KZX/":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-components/yes-no-dialog/yes-no-dialog.component */ "P8U+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.component */ "3Vad");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "knLi");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared-components/footer/footer.component */ "DWMj");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-components/navbar/navbar.component */ "eBSS");
/* harmony import */ var _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-layout/admin-layout.module */ "VXTJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_authorize_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../auth/authorize.interceptor */ "gmcq");
/* harmony import */ var _auth_role_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../auth/role.guard */ "inyj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared-components/sidebar/sidebar.component */ "Xy8L");
/* harmony import */ var _auth_authorize_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../auth/authorize.service */ "TeaW");
/* harmony import */ var _shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared-components/dynamic-form/dynamic-form.component */ "H/zg");
/* harmony import */ var _shared_components_dynamic_list_dynamic_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared-components/dynamic-list/dynamic-list.component */ "LBmF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/language.service */ "I7yr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_dynamic_details_dynamic_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared-components/dynamic-details/dynamic-details.component */ "4lvB");
/* harmony import */ var _shared_components_dynamic_card_dynamic_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared-components/dynamic-card/dynamic-card.component */ "NJW5");
/* harmony import */ var _shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared-components/dashboard/dashboard.component */ "4PdW");
/* harmony import */ var _pipes_color_fade_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pipes/color-fade.pipe */ "Xi1s");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_components_area_group_prices_area_group_prices_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared-components/area-group-prices/area-group-prices.component */ "sblC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_components_icon_picker_dialog_icon_picker_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared-components/icon-picker-dialog/icon-picker-dialog.component */ "6NpB");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/search.pipe */ "8EBi");
/* harmony import */ var _shared_components_available_drivers_dialog_available_drivers_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared-components/available-drivers-dialog/available-drivers-dialog.component */ "dSU+");
/* harmony import */ var _reports_management_reports_generator_reports_generator_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../reports-management/reports-generator/reports-generator.component */ "9Xk+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _shared_components_order_notes_order_notes_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./shared-components/order-notes/order-notes.component */ "T/fv");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-filesaver */ "EnSh");
/* harmony import */ var _shared_components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shared-components/user-roles/user-roles.component */ "VHFj");
/* harmony import */ var _shared_components_reports_results_reports_result_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared-components/reports-results/reports-result.module */ "lYQe");
/* harmony import */ var _shared_components_reports_results_reports_result_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./shared-components/reports-results/reports-result.component */ "OKKu");
/* harmony import */ var _services_mat_paginator_translate_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/mat-paginator-translate.service */ "Hdgi");
/* harmony import */ var _shared_components_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared-components/add-note-dialog/add-note-dialog.component */ "G+Ui");
/* harmony import */ var _shared_components_add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared-components/add-end-user-dialog/add-end-user-dialog.component.ts.component */ "wd4G");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutModule"],
            _shared_components_reports_results_reports_result_module__WEBPACK_IMPORTED_MODULE_48__["ReportsResultModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslateModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__["MatRadioModule"],
            ngx_filesaver__WEBPACK_IMPORTED_MODULE_46__["FileSaverModule"]
        ],
        declarations: [
            _shared_component__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"],
            _shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_0__["YesNoDialogComponent"],
            _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
            _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
            _shared_components_reports_results_reports_result_component__WEBPACK_IMPORTED_MODULE_49__["ReportsResultComponent"],
            _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
            _shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_22__["DynamicFormComponent"],
            _shared_components_dynamic_list_dynamic_list_component__WEBPACK_IMPORTED_MODULE_23__["DynamicListComponent"],
            _shared_components_dynamic_details_dynamic_details_component__WEBPACK_IMPORTED_MODULE_32__["DynamicDetailsComponent"],
            _shared_components_dynamic_card_dynamic_card_component__WEBPACK_IMPORTED_MODULE_33__["DynamicCardComponent"],
            _shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["DashboardComponent"],
            _pipes_color_fade_pipe__WEBPACK_IMPORTED_MODULE_35__["ColorFadePipe"],
            _shared_components_area_group_prices_area_group_prices_component__WEBPACK_IMPORTED_MODULE_38__["AreaGroupPricesComponent"],
            _shared_components_order_notes_order_notes_component__WEBPACK_IMPORTED_MODULE_45__["OrderNotesComponent"],
            _shared_components_icon_picker_dialog_icon_picker_dialog_component__WEBPACK_IMPORTED_MODULE_40__["IconPickerDialogComponent"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_41__["FilterPipe"],
            _shared_components_available_drivers_dialog_available_drivers_dialog_component__WEBPACK_IMPORTED_MODULE_42__["AvailableDriversDialogComponent"],
            _shared_components_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_51__["AddNoteDialogComponent"],
            _reports_management_reports_generator_reports_generator_component__WEBPACK_IMPORTED_MODULE_43__["ReportsGeneratorComponent"],
            _shared_components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_47__["UserRolesComponent"],
            _shared_components_add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_52__["AddEndUserDialogComponent"]
        ],
        exports: [
            _shared_component__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"],
            _shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_0__["YesNoDialogComponent"],
            _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
            _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
            _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
            _shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_22__["DynamicFormComponent"],
            _shared_components_dynamic_list_dynamic_list_component__WEBPACK_IMPORTED_MODULE_23__["DynamicListComponent"],
            _shared_components_dynamic_details_dynamic_details_component__WEBPACK_IMPORTED_MODULE_32__["DynamicDetailsComponent"],
            _shared_components_dynamic_card_dynamic_card_component__WEBPACK_IMPORTED_MODULE_33__["DynamicCardComponent"],
            _shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["DashboardComponent"],
            _pipes_color_fade_pipe__WEBPACK_IMPORTED_MODULE_35__["ColorFadePipe"],
            _shared_components_icon_picker_dialog_icon_picker_dialog_component__WEBPACK_IMPORTED_MODULE_40__["IconPickerDialogComponent"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_41__["FilterPipe"],
            _shared_components_area_group_prices_area_group_prices_component__WEBPACK_IMPORTED_MODULE_38__["AreaGroupPricesComponent"],
            _shared_components_available_drivers_dialog_available_drivers_dialog_component__WEBPACK_IMPORTED_MODULE_42__["AvailableDriversDialogComponent"],
            _shared_components_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_51__["AddNoteDialogComponent"],
            _reports_management_reports_generator_reports_generator_component__WEBPACK_IMPORTED_MODULE_43__["ReportsGeneratorComponent"],
            _shared_components_order_notes_order_notes_component__WEBPACK_IMPORTED_MODULE_45__["OrderNotesComponent"],
            _shared_components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_47__["UserRolesComponent"],
            _shared_components_add_end_user_dialog_add_end_user_dialog_component_ts_component__WEBPACK_IMPORTED_MODULE_52__["AddEndUserDialogComponent"]
        ],
        providers: [
            _auth_authorize_service__WEBPACK_IMPORTED_MODULE_21__["AuthorizeService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_29__["LanguageService"],
            _auth_role_guard__WEBPACK_IMPORTED_MODULE_18__["RoleGuard"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorIntl"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_authorize_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthorizeInterceptor"], multi: true },
            {
                provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorIntl"],
                useClass: _services_mat_paginator_translate_service__WEBPACK_IMPORTED_MODULE_50__["MatPaginationIntlService"],
            }
        ]
    })
], SharedModule);



/***/ }),

/***/ "Kja4":
/*!************************************************************************!*\
  !*** ./src/shared/shared-components/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    transition: all 0.6s;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    font-family: 'Lato', sans-serif;\r\n    color: #888;\r\n    margin: 0;\r\n}\r\n\r\n#main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n\r\n.fof h1{\r\n\t  font-size: 38px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n\r\n@-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n@keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0dBQ0csbUJBQW1CO0dBQ25CLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLGVBQWU7R0FDZixxQkFBcUI7R0FDckIsbUJBQW1CO0dBQ25CLDhDQUFzQztXQUF0QyxzQ0FBc0M7QUFDekM7O0FBRUE7R0FDRyxLQUFLLG1DQUFtQyxDQUFDO0dBQ3pDLEdBQUcsMENBQTBDLENBQUM7QUFDakQ7O0FBSEE7R0FDRyxLQUFLLG1DQUFtQyxDQUFDO0dBQ3pDLEdBQUcsMENBQTBDLENBQUM7QUFDakQiLCJmaWxlIjoic3JjL3NoYXJlZC9zaGFyZWQtY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbWFpbntcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9me1xyXG5cdCAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHQgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5mb2YgaDF7XHJcblx0ICBmb250LXNpemU6IDM4cHg7XHJcblx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG5cdCAgYW5pbWF0aW9uOiB0eXBlIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwZXtcclxuXHQgIGZyb217Ym94LXNoYWRvdzogaW5zZXQgLTNweCAwcHggMHB4ICM4ODg7fVxyXG5cdCAgdG97Ym94LXNoYWRvdzogaW5zZXQgLTNweCAwcHggMHB4IHRyYW5zcGFyZW50O31cclxufSJdfQ== */");

/***/ }),

/***/ "KoQl":
/*!******************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-card/dynamic-card.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardLabel {\r\n    font-size: 20px;\r\n    color: #A1A2A2 !important;\r\n}\r\n\r\n.cardValue {\r\n    font-size: 20px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvZHluYW1pYy1jYXJkL2R5bmFtaWMtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL3NoYXJlZC9zaGFyZWQtY29tcG9uZW50cy9keW5hbWljLWNhcmQvZHluYW1pYy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZExhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjQTFBMkEyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkVmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyBcclxufSJdfQ== */");

/***/ }),

/***/ "LAfq":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/navbar/navbar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      \r\n        <div class=\"navbar-wrapper\" *ngIf=\"isLoggedIn\">\r\n            <a class=\"navbar-brand\"  href=\"/#/dashboard\">{{getTitle() | translate}}</a>\r\n            <button *ngIf=\"isLoggedIn\" id=\"togglerBtn\" mat-raised-button class=\" btn btn-primary\" \r\n            type=\"button\" (click)=\"sidebarToggle()\">\r\n           \r\n            <mat-icon id=\"togglerIcon\">list</mat-icon>\r\n        </button>\r\n        </div>\r\n       \r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <ul class=\"navbar-nav\">\r\n           \r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                        <i class=\"material-icons\">language</i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"changeLanguage('en')\">\r\n                            English\r\n                        </a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"changeLanguage('ar')\">\r\n                            العربية\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li class=\" label-li\">\r\n                    <p>\r\n                        <span>{{languageService.getCurrentLanguage()=='en'?'English':'العربية'}}</span>\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn\">\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                        <i class=\"material-icons\">person</i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"logout()\">{{'logout' | translate}} <i\r\n                                class=\"material-icons\">exit</i>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"label-li\">\r\n                    <p>\r\n                        <span>{{loggedInName }}</span>\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<ul class=\"headersMobile\">\r\n  \r\n    <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"true\">\r\n            <i class=\"material-icons\">language</i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"changeLanguage('en')\">\r\n                English\r\n            </a>\r\n            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"changeLanguage('ar')\">\r\n                العربية\r\n            </a>\r\n        </div>\r\n    </li>\r\n    <li class=\" label-li\">\r\n        <p>\r\n            <span>{{languageService.getCurrentLanguage()=='en'?'English':'العربية'}}</span>\r\n        </p>\r\n    </li>\r\n    <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"true\">\r\n            <i class=\"material-icons\">person</i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"logout()\">{{'logout' | translate}} <i\r\n                    class=\"material-icons\">exit</i>\r\n            </a>\r\n        </div>\r\n    </li>\r\n    <li class=\"label-li\">\r\n        <p>\r\n            <span>{{loggedInName }}</span>\r\n        </p>\r\n    </li>\r\n</ul>");

/***/ }),

/***/ "LBmF":
/*!*****************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-list/dynamic-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DynamicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicListComponent", function() { return DynamicListComponent; });
/* harmony import */ var _raw_loader_dynamic_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dynamic-list.component.html */ "oIYx");
/* harmony import */ var _dynamic_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-list.component.css */ "5InU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared_models_dynamic_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/dynamic-list.model */ "cMo6");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _shared_enums_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enums/enums */ "B10k");
/* harmony import */ var _shared_models_list_action_clicked_output__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/list-action-clicked-output */ "mRTq");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-filesaver */ "EnSh");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "Jxek");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















let DynamicListComponent = class DynamicListComponent {
    constructor(_MatPaginatorIntl, translate, baseService, spinner, fileSaverService, notification) {
        this._MatPaginatorIntl = _MatPaginatorIntl;
        this.translate = translate;
        this.baseService = baseService;
        this.spinner = spinner;
        this.fileSaverService = fileSaverService;
        this.notification = notification;
        this.listInput = new _shared_models_dynamic_list_model__WEBPACK_IMPORTED_MODULE_4__["DynamicListInput"]();
        this.pageChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.listActionClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.imagesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].host + 'home/appimages/';
    }
    get actionTypeEnum() {
        return _shared_enums_enums__WEBPACK_IMPORTED_MODULE_6__["ListActionTypeEnum"];
    }
    ngDoCheck() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.listInput.data);
        this.totalCount = this.listInput.totalCount;
    }
    ngOnInit() {
        this._MatPaginatorIntl.itemsPerPageLabel =
            this.translate.instant('itemsPerLbl');
        this._MatPaginatorIntl.nextPageLabel =
            this.translate.instant('nextPageLbl');
        this._MatPaginatorIntl.getRangeLabel = (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return `0 à ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            const endIndex = startIndex < length
                ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize;
            return (`${startIndex + 1} - ${endIndex} ` +
                this.translate.instant('of') +
                ` ${length}`);
        };
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.listInput.data);
        this.dataSource.sort = this.sort;
        this.totalCount = this.listInput.totalCount;
        this.displayedColumns = this.listInput.columns.map((c) => c.columnName);
    }
    pageChanged(event) {
        this.spinner.show();
        this.pageChangedEvent.emit(event);
    }
    listActionClicked(entityId, action) {
        var output = new _shared_models_list_action_clicked_output__WEBPACK_IMPORTED_MODULE_7__["ListActionClickedOutput"]();
        output.entityId = entityId;
        output.action = action;
        this.listActionClickedEvent.emit(output);
    }
    downloadFile(fileName) {
        this.spinner.show();
        return this.baseService.downloadFile(fileName).subscribe((res) => {
            this.fileSaverService.save(res, fileName);
            this.spinner.hide();
        }, (error) => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification('somethingWentWrong', 'danger');
            }
            this.spinner.hide();
        });
    }
};
DynamicListComponent.ctorParameters = () => [
    { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorIntl"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"] },
    { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_13__["FileSaverService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] }
];
DynamicListComponent.propDecorators = {
    listInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    pageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    listActionClickedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
};
DynamicListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dynamic-list',
        template: _raw_loader_dynamic_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dynamic_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorIntl"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _shared_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
        ngx_filesaver__WEBPACK_IMPORTED_MODULE_13__["FileSaverService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"]])
], DynamicListComponent);



/***/ }),

/***/ "NJW5":
/*!*****************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-card/dynamic-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DynamicCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicCardComponent", function() { return DynamicCardComponent; });
/* harmony import */ var _raw_loader_dynamic_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dynamic-card.component.html */ "+QG8");
/* harmony import */ var _dynamic_card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-card.component.css */ "KoQl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/caret-up */ "vcBl");
/* harmony import */ var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-fa-solid/caret-down */ "K4M2");
/* harmony import */ var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/help-outline */ "rgT+");
/* harmony import */ var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_remove_red_eye__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/remove-red-eye */ "kXLO");
/* harmony import */ var _iconify_icons_ic_remove_red_eye__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_remove_red_eye__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-timer */ "De0L");
/* harmony import */ var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/scale-in-out.animation */ "aT9D");
/* harmony import */ var _animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../animations/fade-in-up.animation */ "daKZ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let DynamicCardComponent = class DynamicCardComponent {
    constructor(router) {
        this.router = router;
        this.faCaretUp = _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.faCaretDown = _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icHelp = _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icShare = _iconify_icons_ic_remove_red_eye__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icTimer = _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.imagesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].imagesUrl;
    }
    ngOnInit() {
    }
    openSheet() {
        this.router.navigate([this.url]);
    }
};
DynamicCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
DynamicCardComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    helpText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
DynamicCardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dynamic-card',
        template: _raw_loader_dynamic_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        animations: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_9__["scaleInOutAnimation"], _animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"]],
        styles: [_dynamic_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], DynamicCardComponent);



/***/ }),

/***/ "NX7I":
/*!********************************************************************************!*\
  !*** ./src/shared/shared-components/reports-results/reports-result.routing.ts ***!
  \********************************************************************************/
/*! exports provided: ReportsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutes", function() { return ReportsRoutes; });
/* harmony import */ var _src_auth_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/auth/role.guard */ "inyj");
/* harmony import */ var _reports_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-result.component */ "OKKu");


const ReportsRoutes = [
    { path: 'reports-result', component: _reports_result_component__WEBPACK_IMPORTED_MODULE_1__["ReportsResultComponent"], canActivate: [_src_auth_role_guard__WEBPACK_IMPORTED_MODULE_0__["RoleGuard"]], data: { expectedRole: ['Admin', 'DataEntry'] } },
    { path: 'reports-result/:roundId', component: _reports_result_component__WEBPACK_IMPORTED_MODULE_1__["ReportsResultComponent"] }
];


/***/ }),

/***/ "NyVo":
/*!****************************************************************************************!*\
  !*** ./src/shared/shared-components/area-group-prices/area-group-prices.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2FyZWEtZ3JvdXAtcHJpY2VzL2FyZWEtZ3JvdXAtcHJpY2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "OKKu":
/*!**********************************************************************************!*\
  !*** ./src/shared/shared-components/reports-results/reports-result.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportsResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsResultComponent", function() { return ReportsResultComponent; });
/* harmony import */ var _raw_loader_reports_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reports-result.component.html */ "RIdd");
/* harmony import */ var _reports_result_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-result.component.css */ "EvWQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-timer */ "De0L");
/* harmony import */ var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/global-variables/api-config */ "62t3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/shared/services/notification.service */ "Jxek");
/* harmony import */ var _src_shared_enums_enums__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/shared/enums/enums */ "B10k");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let ReportsResultComponent = class ReportsResultComponent {
    constructor(baseService, router, notification, route, spinner) {
        this.baseService = baseService;
        this.router = router;
        this.notification = notification;
        this.route = route;
        this.spinner = spinner;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('fullWidth');
        this.clientsList = [];
        this.clientdetailsList = [];
        this.driverdetailsList = [];
        this.driversList = [];
        this.isEmptyData = false;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.isDriver = false;
        this.totalCompanyRevenue = 0;
        this.additionalCostsTotal = 0;
        this.totalDriverRevenue = 0;
        this.totalOrderPrices = 0;
        this.totalClientRevenue = 0;
        this.total = 0;
        this.isValidLink = true;
        this.displayedColumns = [
            'orderDate',
            'clientName',
            'driverName',
            'status',
            'orderTotalPrice',
            'coompanyRevenue',
            'driverRevenue',
        ];
        this.icTimer = _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.inputType = 'password';
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            clientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            driverId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            ordersDateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            ordersDateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            pageNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
        this.dateNow = new Date();
        // ==---------===-----------=Icons declarations area==------------------=-=-=
        this.filterValue = {};
        this.ordersList = [];
        // this.filterValue = router.getCurrentNavigation().extras.state;
        console.log(this.filterValue);
    }
    get userRolesEnum() {
        return _src_shared_enums_enums__WEBPACK_IMPORTED_MODULE_13__["RoleTypes"];
    }
    ngOnInit() {
        this.spinner.show();
        this.route.params.subscribe(params => {
            if (params.roundId) {
                this.userType.setValue(3);
                this.getAllOrdersByRoundId(params.roundId);
            }
            else {
                this.filterValue = JSON.parse(sessionStorage.getItem('recordForm'));
                this.filterForm.get('clientId').setValue(this.filterValue.clientId);
                this.filterForm.get('driverId').setValue(this.filterValue.driverId);
                this.filterForm.get('userType').setValue(this.filterValue.userType);
                this.filterForm.get('ordersDateTo').setValue(this.filterValue.ordersDateTo);
                this.filterForm.get('ordersDateFrom').setValue(this.filterValue.ordersDateFrom);
                this.getAllOrders(10, 1);
            }
        });
    }
    get clientId() {
        return this.filterForm.get('clientId');
    }
    get driverId() {
        return this.filterForm.get('driverId');
    }
    get userType() {
        return this.filterForm.get('userType');
    }
    get ordersDateTo() {
        return this.filterForm.get('ordersDateTo');
    }
    get ordersDateFrom() {
        return this.filterForm.get('ordersDateFrom');
    }
    getTotalPrices() {
        return 0;
    }
    getTotalDeliveryCost() {
        return 0;
    }
    getTotalAddedPrices() {
        return 0;
    }
    getTotal() {
        return 0;
    }
    getOrderDate() {
        const datestr = ' تاريخ الكشف: من ';
        return datestr + new Date(this.ordersDateFrom.value).toLocaleDateString() + ' الى ' + new Date(this.ordersDateTo.value).toLocaleDateString();
    }
    get PageSize() {
        return this.filterForm.get('pageSize');
    }
    get PageNumber() {
        return this.filterForm.get('pageNumber');
    }
    convertToUTC(date) {
        if (date) {
            date = new Date(date);
            return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        }
        else {
            return null;
        }
    }
    getAllOrders(pageSize, pageNumber) {
        this.isLoadingResults = true;
        this.PageSize.setValue(pageSize);
        this.PageNumber.setValue(pageNumber);
        this.pageSize = pageSize;
        this.pageNumber = pageNumber;
        let request = {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            ordersDateFrom: this.filterForm.get('ordersDateFrom').value,
            ordersDateTo: this.filterForm.get('ordersDateTo').value,
            userType: this.filterForm.get('userType').value,
            clientId: this.filterForm.get('clientId').value,
            driverId: this.filterForm.get('driverId').value
        };
        console.log('Request', request);
        if (this.userType.value == 2 || this.userType.value == 3) {
            this.baseService.postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Controllers"].Order, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Actions"].DailyRecords, request).subscribe(res => {
                this.isValidLink = res.isValid;
                if (this.userType.value == 2) {
                    console.log('Drivers List', res);
                    this.driversList = res.orderListWithRevenue.data;
                    if (this.driversList.length == 0) {
                        this.isEmptyData = true;
                    }
                }
                else if (this.userType.value == 3) {
                    console.log('Clients List', res);
                    this.clientsList = res.orderListWithRevenue.data;
                    if (this.clientsList.length == 0) {
                        this.isEmptyData = true;
                    }
                }
                this.totalCompanyRevenue = res.totalCompanyRevenue;
                this.totalDriverRevenue = res.totalDriverRevenue;
                this.totalClientRevenue = res.totalClientRevenue;
                this.totalOrderPrices = res.totalOrderPrices;
                this.additionalCostsTotal = res.additionalCostsTotal;
                this.total = res.total;
                this.isLoadingResults = false;
                this.isRateLimitReached = false;
            }, error => {
                this.isLoadingResults = false;
                this.notification.showNotification(error.error, 'Failed');
            });
        }
        else if (this.userType.value == 5) {
            let object = {
                pageSize: pageSize ? pageSize : this.pageSize,
                pageNumber: pageNumber ? pageNumber : this.pageNumber,
                userType: this.userRolesEnum.Driver,
                ordersDateFrom: this.filterForm.get('ordersDateFrom').value,
                ordersDateTo: this.filterForm.get('ordersDateTo').value,
            };
            this.baseService.postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Controllers"].Order, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Actions"].GetDriversDetails, request).subscribe(res => {
                console.log('Driver Details', res);
                this.driverdetailsList = res;
                if (this.driverdetailsList.length == 0) {
                    this.isEmptyData = true;
                }
            });
        }
        else if (this.userType.value == 4) {
            let object = {
                pageSize: pageSize ? pageSize : this.pageSize,
                pageNumber: pageNumber ? pageNumber : this.pageNumber,
                userType: this.userRolesEnum.Merchant,
                ordersDateFrom: this.filterForm.get('ordersDateFrom').value,
                ordersDateTo: this.filterForm.get('ordersDateTo').value,
            };
            console.log('Sending Client Request', request);
            this.baseService.postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Controllers"].Order, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Actions"].GetClientsDetails, object).subscribe(res => {
                console.log('Client Details', res);
                this.clientdetailsList = res;
                if (this.clientdetailsList.length == 0) {
                    this.isEmptyData = true;
                }
            });
        }
        this.spinner.hide();
    }
    getAllOrdersByRoundId(roundId) {
        this.isLoadingResults = true;
        this.baseService.getItemsByKey(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Controllers"].Order, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_10__["Actions"].DailyRecordsByRoundId, 'roundId', roundId).subscribe(res => {
            this.isValidLink = res.isValid;
            if (this.isValidLink) {
                console.log('Clients List', res);
                this.clientsList = res.orderListWithRevenue.data;
                this.filterForm.get('ordersDateTo').setValue(res.dateFrom);
                this.filterForm.get('ordersDateFrom').setValue(res.dateTo);
                if (this.clientsList.length == 0) {
                    this.isEmptyData = true;
                }
                this.totalCompanyRevenue = res.totalCompanyRevenue;
                this.totalDriverRevenue = res.totalDriverRevenue;
                this.totalClientRevenue = res.totalClientRevenue;
                this.totalOrderPrices = res.totalOrderPrices;
            }
            this.isLoadingResults = false;
            this.spinner.hide();
            this.isRateLimitReached = false;
        }, error => {
            this.isLoadingResults = false;
            this.notification.showNotification(error.error, 'Failed');
        });
    }
    onPageChanged(page) {
        this.pageSize = page.pageSize;
        this.pageNumber = page.pageIndex + 1;
        this.paginator.pageSize = page.pageSize;
        this.getAllOrders(page.pageSize, page.pageIndex + 1);
    }
    filterOrders() {
        this.getAllOrders(this.pageSize, this.pageNumber);
    }
    navigateToDetails(id) {
        this.router.navigate([`/forms/order-details/${id}`]);
    }
    navigateToUpdate(id) {
        this.router.navigate([`/forms/order-update/${id}`]);
    }
    navigateToCreate() {
        this.router.navigate([`/forms/order-create`]);
    }
};
ReportsResultComponent.ctorParameters = () => [
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] }
];
ReportsResultComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true },] }]
};
ReportsResultComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-reports-results',
        template: _raw_loader_reports_result_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reports_result_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]])
], ReportsResultComponent);



/***/ }),

/***/ "ONYr":
/*!************************************************************************!*\
  !*** ./src/app/public-order-details/public-order-details.component.ts ***!
  \************************************************************************/
/*! exports provided: PublicOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicOrderDetailsComponent", function() { return PublicOrderDetailsComponent; });
/* harmony import */ var _raw_loader_public_order_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./public-order-details.component.html */ "JUnD");
/* harmony import */ var _public_order_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-order-details.component.css */ "dkcd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/global-variables/api-config */ "62t3");
/* harmony import */ var _shared_models_dynamic_details_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/models/dynamic-details.model */ "1pVS");
/* harmony import */ var _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/models/dynamic-form-input */ "/l9S");
/* harmony import */ var _shared_models_dynamic_list_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/models/dynamic-list.model */ "cMo6");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/services/dynamic-form.service */ "aW8j");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/notification.service */ "Jxek");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















let PublicOrderDetailsComponent = class PublicOrderDetailsComponent {
    constructor(route, baseService, spinner, dynamicService, notification, dialog, translate, router) {
        this.route = route;
        this.baseService = baseService;
        this.spinner = spinner;
        this.dynamicService = dynamicService;
        this.notification = notification;
        this.dialog = dialog;
        this.translate = translate;
        this.router = router;
        this.detailsInput = new _shared_models_dynamic_details_model__WEBPACK_IMPORTED_MODULE_8__["DynamicDetailPageModel"]();
        this.driverDetailsInput = new _shared_models_dynamic_details_model__WEBPACK_IMPORTED_MODULE_8__["DynamicDetailPageModel"]();
        this.isLoading = true;
        this.notes = [];
        this.areaGroups = [];
        this.dynamicFormInput = new _shared_models_dynamic_form_input__WEBPACK_IMPORTED_MODULE_9__["DynamicFormInput"]();
        this.dynamicListInput = new _shared_models_dynamic_list_model__WEBPACK_IMPORTED_MODULE_10__["DynamicListInput"]();
        this.imagesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].host + "home/appimages/";
        this.pageSize = 10;
        this.pageNumber = 1;
        this.areasList = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.route.params.subscribe(params => {
            this.getAsync(params.id);
        });
    }
    getAsync(id) {
        this.baseService.getForPublic(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].Order, id).subscribe(res => {
            this.order = res;
            this.detailsInput.dataObject = this.order;
            this.getDriverDetailsByOrderId(id);
        });
    }
    getDriverDetailsByOrderId(id) {
        this.baseService.getDriverDetailsByOrderId(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].Order, id).subscribe(res => {
            this.orderDriver = res;
            this.driverDetailsInput.dataObject = this.orderDriver;
            this.isLoading = false;
            this.spinner.hide();
        });
    }
};
PublicOrderDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_12__["DynamicDataService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PublicOrderDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-public-order-details',
        template: _raw_loader_public_order_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_public_order_details_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
        _shared_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_12__["DynamicDataService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PublicOrderDetailsComponent);



/***/ }),

/***/ "P8U+":
/*!*******************************************************************************!*\
  !*** ./src/shared/shared-components/yes-no-dialog/yes-no-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: YesNoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNoDialogComponent", function() { return YesNoDialogComponent; });
/* harmony import */ var _raw_loader_yes_no_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./yes-no-dialog.component.html */ "ztOD");
/* harmony import */ var _yes_no_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yes-no-dialog.component.scss */ "6nD6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let YesNoDialogComponent = class YesNoDialogComponent {
    constructor(dialogRef, data, languageService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
YesNoDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
];
YesNoDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-yes-no-dialog',
        template: _raw_loader_yes_no_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_yes_no_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
], YesNoDialogComponent);



/***/ }),

/***/ "R5xU":
/*!************************************************!*\
  !*** ./src/shared/global-variables/lookups.ts ***!
  \************************************************/
/*! exports provided: errorMessages, BaseStatus, ErrorMessages, deliveryFessOnOptions, material_icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessages", function() { return errorMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStatus", function() { return BaseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return ErrorMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deliveryFessOnOptions", function() { return deliveryFessOnOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material_icons", function() { return material_icons; });
const errorMessages = [
    { id: 1, name: 'LoginPasswordWrong', messageEn: 'Username or password is wrong', messageAr: 'اسم المستخدم او الرقم السري خاطئة' },
    { id: 2, name: 'MobileNumberIsUsed', messageEn: 'Mobile number is used', messageAr: 'رقم الهاتف مستخدم' },
    { id: 3, name: 'ErrorCreatingAccount', messageEn: 'Error creating account', messageAr: 'خطا في تسجيل حساب جديد' },
    { id: 4, name: 'ErrorUpdatingAccount', messageEn: 'Error updating account', messageAr: 'خطا في تعديل الحساب' },
    { id: 5, name: 'UserNotFound', messageEn: 'User not found', messageAr: 'المستخدم غير موجود' },
    { id: 6, name: 'ItemCountNotEnough', messageEn: 'Item count is not enough', messageAr: 'الكمية غير كافية لتنفيذ طلبك' },
    { id: 7, name: 'UserCartNotFound', messageEn: 'You don\'t have a cart, please contact system admin to add one', messageAr: 'لا يوجد لديك سلة، يرجى التواصل مع الادارة لاضافة واحدة' },
    { id: 8, name: 'CartIsEmpty', messageEn: 'Cart is empty', messageAr: 'السلة فارغة' },
    { id: 9, name: 'ItemNotAvailable', messageEn: 'Item is not available', messageAr: 'المنتج غير متوفر حاليا' },
    { id: 10, name: 'ItemAlreadyExist', messageEn: 'Item is already exist in cart', messageAr: 'المنتج موجود بالفعل في السلة' }
];
const BaseStatus = [
    { value: true, viewValue: 'Active' }
];
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages[ErrorMessages["LoginPasswordWrong"] = 1] = "LoginPasswordWrong";
    ErrorMessages[ErrorMessages["MobileNumberIsUsed"] = 2] = "MobileNumberIsUsed";
    ErrorMessages[ErrorMessages["ErrorCreatingAccount"] = 3] = "ErrorCreatingAccount";
    ErrorMessages[ErrorMessages["ErrorUpdatingAccount"] = 4] = "ErrorUpdatingAccount";
    ErrorMessages[ErrorMessages["UserNotFound"] = 5] = "UserNotFound";
    ErrorMessages[ErrorMessages["ItemCountNotEnough"] = 6] = "ItemCountNotEnough";
    ErrorMessages[ErrorMessages["UserCartNotFound"] = 7] = "UserCartNotFound";
    ErrorMessages[ErrorMessages["CartIsEmpty"] = 8] = "CartIsEmpty";
    ErrorMessages[ErrorMessages["ItemNotAvailable"] = 9] = "ItemNotAvailable";
    ErrorMessages[ErrorMessages["ItemAlreadyExist"] = 10] = "ItemAlreadyExist";
})(ErrorMessages || (ErrorMessages = {}));
const deliveryFessOnOptions = [
    { value: 1, viewValueEn: 'client', viewValueAr: 'العميل' },
    { value: 2, viewValueEn: 'company', viewValueAr: 'الشركة' },
    { value: 3, viewValueEn: 'driver', viewValueAr: 'السائق' }
];
const material_icons = ['3d_rotation', 'ac_unit', 'access_alarm',
    'access_alarms', 'access_time', 'accessibility', 'accessible', 'account_balance',
    'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_a_photo',
    'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_location',
    'add_shopping_cart', 'add_to_photos', 'add_to_queue', 'adjust', 'airline_seat_flat',
    'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra',
    'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra',
    'airline_seat_recline_normal', 'airplanemode_active', 'airplanemode_inactive', 'airplay',
    'airport_shuttle', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'all_inclusive',
    'all_out', 'android', 'announcement', 'apps', 'archive', 'arrow_back', 'arrow_downward',
    'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward',
    'arrow_upward', 'art_track', 'aspect_ratio', 'assessment', 'assignment',
    'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned',
    'assignment_turned_in', 'assistant', 'assistant_photo', 'attach_file', 'attach_money',
    'attachment', 'audiotrack', 'autorenew', 'av_timer', 'backspace', 'backup', 'battery_alert',
    'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'beach_access',
    'beenhere', 'block', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled',
    'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'book', 'bookmark',
    'bookmark_border', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal',
    'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top',
    'border_vertical', 'branding_watermark', 'brightness_1', 'brightness_2', 'brightness_3',
    'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high',
    'brightness_low', 'brightness_medium', 'broken_image', 'brush', 'bubble_chart', 'bug_report',
    'build', 'burst_mode', 'business', 'business_center', 'cached', 'cake', 'call', 'call_end',
    'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received',
    'call_split', 'call_to_action', 'camera', 'camera_alt', 'camera_enhance', 'camera_front',
    'camera_rear', 'camera_roll', 'cancel', 'card_giftcard', 'card_membership', 'card_travel',
    'casino', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history',
    'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank',
    'check_circle', 'chevron_left', 'chevron_right', 'child_care', 'child_friendly',
    'chrome_reader_mode', 'class', 'clear', 'clear_all', 'close', 'closed_caption', 'cloud',
    'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload',
    'code', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'compare',
    'compare_arrows', 'computer', 'confirmation_number', 'contact_mail', 'contact_phone', 'contacts',
    'content_copy', 'content_cut', 'content_paste', 'control_point', 'control_point_duplicate',
    'copyright', 'create', 'create_new_folder', 'credit_card', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4',
    'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate',
    'crop_square', 'dashboard', 'data_usage', 'date_range', 'dehaze', 'delete', 'delete_forever',
    'delete_sweep', 'description', 'desktop_mac', 'desktop_windows', 'details', 'developer_board',
    'developer_mode', 'device_hub', 'devices', 'devices_other', 'dialer_sip', 'dialpad', 'directions',
    'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway',
    'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'disc_full', 'dns',
    'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'dock', 'domain',
    'done', 'done_all', 'donut_large', 'donut_small', 'drafts', 'drag_handle', 'drive_eta', 'dvr', 'edit',
    'edit_location', 'eject', 'email', 'enhanced_encryption', 'equalizer', 'error', 'error_outline',
    'euro_symbol', 'ev_station', 'event', 'event_available', 'event_busy', 'event_note', 'event_seat',
    'exit_to_app', 'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1',
    'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'face',
    'fast_forward', 'fast_rewind', 'favorite', 'favorite_border', 'featured_play_list', 'featured_video',
    'feedback', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record',
    'file_download', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5',
    'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus',
    'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_none', 'filter_tilt_shift',
    'filter_vintage', 'find_in_page', 'find_replace', 'fingerprint', 'first_page', 'fitness_center',
    'flag', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight', 'flight_land', 'flight_takeoff',
    'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special',
    'font_download', 'format_align_center', 'format_align_justify', 'format_align_left',
    'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset',
    'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic',
    'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint',
    'format_quote', 'format_shapes', 'format_size', 'format_strikethrough',
    'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined',
    'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'free_breakfast',
    'fullscreen', 'fullscreen_exit', 'functions', 'g_translate', 'gamepad', 'games',
    'gavel', 'gesture', 'get_app', 'gif', 'golf_course', 'gps_fixed', 'gps_not_fixed',
    'gps_off', 'grade', 'gradient', 'grain', 'graphic_eq', 'grid_off', 'grid_on', 'group',
    'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'headset',
    'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight',
    'highlight_off', 'history', 'home', 'hot_tub', 'hotel', 'hourglass_empty', 'hourglass_full',
    'http', 'https', 'image', 'image_aspect_ratio', 'import_contacts', 'import_export',
    'important_devices', 'inbox', 'indeterminate_check_box', 'info', 'info_outline', 'input',
    'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation',
    'insert_link', 'insert_photo', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard',
    'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up',
    'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab',
    'keyboard_voice', 'kitchen', 'label', 'label_outline', 'landscape', 'language', 'laptop',
    'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'launch', 'layers',
    'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_add', 'library_books',
    'library_music', 'lightbulb_outline', 'line_style', 'line_weight', 'linear_scale',
    'link', 'linked_camera', 'list', 'live_help', 'live_tv', 'local_activity',
    'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash',
    'local_convenience_store', 'local_dining', 'local_drink', 'local_florist',
    'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel',
    'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer',
    'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play',
    'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_off', 'location_on', 'location_searching', 'lock', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'low_priority', 'loyalty', 'mail', 'mail_outline', 'map', 'markunread', 'markunread_mailbox', 'memory', 'menu', 'merge_type', 'message', 'mic', 'mic_none', 'mic_off', 'mms', 'mode_comment', 'mode_edit', 'monetization_on', 'money_off', 'monochrome_photos', 'mood', 'mood_bad', 'more', 'more_horiz', 'more_vert', 'motorcycle', 'mouse', 'move_to_inbox', 'movie', 'movie_creation', 'movie_filter', 'multiline_chart', 'music_note', 'music_video', 'my_location', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'near_me', 'network_cell', 'network_check', 'network_locked', 'network_wifi', 'new_releases', 'next_week', 'nfc', 'no_encryption', 'no_sim', 'not_interested', 'note', 'note_add', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pages', 'pageview', 'palette', 'pan_tool', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'payment', 'people', 'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_outline', 'person_pin', 'person_pin_circle', 'personal_video', 'pets', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart', 'pie_chart_outlined', 'pin_drop', 'place', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work', 'playlist_add', 'playlist_add_check', 'playlist_play', 'plus_one', 'poll', 'polymer', 'pool', 'portable_wifi_off', 'portrait', 'power', 'power_input', 'power_settings_new', 'pregnant_woman', 'present_to_all', 'print', 'priority_high', 'public', 'publish', 'query_builder', 'question_answer', 'queue', 'queue_music', 'queue_play_next', 'radio', 'radio_button_checked', 'radio_button_unchecked', 'rate_review', 'receipt', 'recent_actors', 'record_voice_over', 'redeem', 'redo', 'refresh', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_from_queue', 'remove_red_eye', 'remove_shopping_cart', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'reply', 'reply_all', 'report', 'report_problem', 'restaurant', 'restaurant_menu', 'restore', 'restore_page', 'ring_volume', 'room', 'room_service', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'rounded_corner', 'router', 'rowing', 'rss_feed', 'rv_hookup', 'satellite', 'save', 'scanner', 'schedule', 'school', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'screen_share', 'sd_card', 'sd_storage', 'search', 'security', 'select_all', 'send', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'short_text', 'show_chart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous', 'slideshow', 'slow_motion_video', 'smartphone', 'smoke_free', 'smoking_rooms', 'sms', 'sms_failed', 'snooze', 'sort', 'sort_by_alpha', 'spa', 'space_bar', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'spellcheck', 'star', 'star_border', 'star_half', 'stars', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop', 'stop_screen_share', 'storage', 'store', 'store_mall_directory', 'straighten', 'streetview', 'strikethrough_s', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'subject', 'subscriptions', 'subtitles', 'subway', 'supervisor_account', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tag_faces', 'tap_and_play', 'terrain', 'text_fields', 'text_format', 'textsms', 'texture', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'time_to_leave', 'timelapse', 'timeline', 'timer', 'timer_10', 'timer_3', 'timer_off', 'title', 'toc', 'today', 'toll', 'tonality', 'touch_app', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transform', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'turned_in', 'turned_in_not', 'tv', 'unarchive', 'undo', 'unfold_less', 'unfold_more', 'update', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vibration', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'videogame_asset', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility', 'visibility_off', 'voice_chat', 'voicemail', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'warning', 'watch', 'watch_later', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'web_asset', 'weekend', 'whatshot', 'widgets', 'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'zoom_out_map'];


/***/ }),

/***/ "RIdd":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/reports-results/reports-result.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isValidLink\" style=\"padding: 10px; font-size: large;\">\r\n  <div class=\"forPrint\" style=\"background-color: white;\"\r\n    *ngIf=\"(userType.value == 2 ||userType.value == 3) && !isEmptyData\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <img src=\"/assets/img/logo.png\" style=\"height: auto;width: 300px;\" class=\"center\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h2>\r\n          <b>\r\n            {{'alkayan' | translate}}\r\n          </b>\r\n\r\n\r\n        </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h3>\r\n          <b *ngIf=\"userType.value == 3\">\r\n            {{'clientsReports' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 2\">\r\n            {{'driversReports' | translate}}\r\n          </b>\r\n\r\n        </h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        {{'fromDate' | translate}} {{ordersDateFrom.value | date: 'dd/MM/yyyy'}} {{'toDate' | translate}}\r\n        {{ordersDateTo.value | date: 'dd/MM/yyyy'}}\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\" *ngIf=\"userType.value==3\">\r\n      <div class=\"col\">\r\n        <table class=\"print-friendly\" style=\"align-content: center;\">\r\n          <thead>\r\n            <tr>\r\n              <th> {{'number' | translate}}</th>\r\n\r\n              <th> {{'merchant' | translate}} </th>\r\n              <th> {{'area' | translate}}</th>\r\n              <th> {{'policyNumber' | translate}} </th>\r\n              <th> {{'address' | translate}} </th>\r\n              <th> {{'deliveryNumber' | translate}}</th>\r\n\r\n              <th> {{'statusEn' | translate}}</th>\r\n              <th> {{'statusAr' | translate}}</th>\r\n              <th> {{'price' | translate}}</th>\r\n              <th> {{'additionalCosts' | translate}}</th>\r\n              <th>{{'deliveryCosts' | translate}}</th>\r\n              <th> {{'total' | translate}}</th>\r\n              <th> {{'details' | translate}}</th>\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let order of clientsList; let i=index\"\r\n              [ngStyle]=\"{'background-color':order.orderStatusId === 3 || order.orderStatusId === 6 || order.orderStatusId === 7 || order.orderStatusId === 10 || order.orderStatusId === 11 || order.orderStatusId === 12? '#e1e3e1' : 'white' }\">\r\n              <td>\r\n                {{i + 1}}\r\n              </td>\r\n              <td>\r\n                {{order?.clientName}}\r\n              </td>\r\n              <td>\r\n                {{order?.areaName}}\r\n              </td>\r\n              <td>\r\n                {{order?.policyNumber}}\r\n              </td>\r\n              <td>\r\n                {{order?.address}}\r\n              </td>\r\n\r\n              <td>\r\n                {{order?.deliveryNumber}}\r\n              </td>\r\n\r\n\r\n              <td>\r\n                {{order?.orderStatusNameEn }}\r\n              </td>\r\n              <td>\r\n                {{order?.orderStatusNameAr }}\r\n              </td>\r\n              <td>\r\n                {{order?.orderPrice}}\r\n              </td>\r\n              <td>\r\n                {{order?.addedPrice}}\r\n              </td>\r\n              <td>\r\n                {{order?.deliveryCost}}\r\n              </td>\r\n              <td>\r\n                {{order?.orderTotalPrice}}\r\n              </td>\r\n              <td>\r\n                {{order?.orderItemTypeDescription}}\r\n              </td>\r\n\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"userType.value==2\">\r\n      <div class=\"col\">\r\n        <table class=\"print-friendly\" style=\"align-content: center;\">\r\n          <thead>\r\n            <tr>\r\n              <th> {{'number' | translate}}</th>\r\n              <th> {{'page' | translate}} </th>\r\n              <th> {{'driver' | translate}} </th>\r\n              <th> {{'area' | translate}}</th>\r\n              <th> {{'policyNumber' | translate}} </th>\r\n              <th> {{'address' | translate}} </th>\r\n              <th> {{'driverPhoneNumber' | translate}}</th>\r\n\r\n              <th> {{'statusEn' | translate}}</th>\r\n              <th> {{'statusAr' | translate}}</th>\r\n              <th>{{'price' | translate}}</th>\r\n            <th>{{'deliveryCosts' | translate}}</th>\r\n              <th> {{'additionalCosts' | translate}}</th>\r\n\r\n              <th> {{'total' | translate}}</th>\r\n              <th> {{'details' | translate}}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let order of driversList; let i=index\"\r\n            [ngStyle]=\"{'background-color':order.orderStatusId === 3 || order.orderStatusId === 6 || order.orderStatusId === 7 || order.orderStatusId === 10 || order.orderStatusId === 11 || order.orderStatusId === 12? '#e1e3e1' : 'white' }\">\r\n            <td>\r\n                {{i + 1}}\r\n              </td>\r\n              <td>\r\n                {{order?.clientName}}\r\n              </td>\r\n              <td>\r\n                {{order?.driverName}}\r\n              </td>\r\n              \r\n              <td>\r\n                {{order?.areaName}}\r\n              </td>\r\n              <td>\r\n                {{order?.policyNumber}}\r\n              </td>\r\n              <td>\r\n                {{order?.address}}\r\n              </td>\r\n\r\n              <td>\r\n                {{order?.driverPhoneNumber}}\r\n              </td>\r\n\r\n\r\n              <td>\r\n                {{order?.orderStatusNameEn }}\r\n              </td>\r\n              <td>\r\n                {{order?.orderStatusNameAr }}\r\n              </td>\r\n              <td>\r\n                {{order?.orderPrice}}\r\n              </td>\r\n           <td>\r\n             {{order?.driverRevenue}}\r\n           </td>\r\n              <td>\r\n                {{order?.addedPrice}}\r\n              </td>\r\n              <td>\r\n                {{order?.orderTotalPrice}}\r\n              </td>\r\n              <td>\r\n                {{order?.orderItemTypeDescription}}\r\n              </td>\r\n\r\n\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"userType.value==2\">\r\n      <div class=\"col\">\r\n        <table>\r\n          <tr>\r\n            <th>\r\n              {{'ordersTotalPrice' | translate}}\r\n            </th>\r\n            <th>\r\n              {{totalOrderPrices}}\r\n            </th>\r\n          </tr>\r\n          <tr>\r\n            <th>\r\n              {{'totalDeliveryFees' | translate}}\r\n            </th>\r\n            <th>\r\n              {{totalDriverRevenue}}\r\n            </th>\r\n          </tr>       \r\n          <tr style=\"background-color: #e1e3e1;\">\r\n            <th>\r\n              {{'totalSum' | translate}}\r\n            </th>\r\n            <th>\r\n              {{total}}\r\n            </th>\r\n          </tr>\r\n        \r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"userType.value==3\">\r\n      <div class=\"col\">\r\n        <table>\r\n          <tr>\r\n            <th>\r\n              {{'ordersTotalPrice' | translate}}\r\n            </th>\r\n            <th>\r\n              {{totalOrderPrices}}\r\n            </th>\r\n          </tr>\r\n          <tr>\r\n            <th>\r\n              {{'totalDeliveryFees' | translate}}\r\n            </th>\r\n            <th>\r\n              {{totalDriverRevenue}}\r\n            </th>\r\n          </tr>  \r\n          <tr style=\"background-color: #e1e3e1;\">\r\n            <th>\r\n              {{'additionalCostsTotal' | translate}}\r\n            </th>\r\n            <th>\r\n              {{additionalCostsTotal}}\r\n            </th>\r\n          </tr>\r\n             \r\n          <tr style=\"background-color: #e1e3e1;\">\r\n            <th>\r\n              {{'totalSum' | translate}}\r\n            </th>\r\n            <th>\r\n              {{total}}\r\n            </th>\r\n          </tr>\r\n        \r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div *ngIf=\"userType.value == 2 || userType.value == 3\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          {{'delivered' | translate}}\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          {{'recipientName' | translate}}\r\n        </div>\r\n        <div class=\"col\">\r\n          {{'recipientSign' | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"userType.value == 4 && !isEmptyData\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <img src=\"/assets/img/logo.png\" style=\"height: auto;width: 300px;\" class=\"center\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h2>\r\n          <b>\r\n            {{'alkayan' | translate}}\r\n          </b>\r\n\r\n\r\n        </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h3>\r\n          <b *ngIf=\"userType.value == 3\">\r\n            {{'clientsReports' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 2\">\r\n            {{'driversReports' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 4\">\r\n            {{'merchantDetails' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 5\">\r\n            {{'todayDriversDetails' | translate}}\r\n          </b>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        {{'fromDate' | translate}} {{ordersDateFrom.value | date: 'dd/MM/yyyy'}} {{'toDate' | translate}}\r\n        {{ordersDateTo.value | date: 'dd/MM/yyyy'}}\r\n      </div>\r\n    </div>\r\n    <br>\r\n  \r\n    <table class=\"print-friendly\" style=\"align-content: center;\">\r\n      <tr>\r\n        <th> {{'number' | translate}}</th>\r\n        <th>\r\n          {{'clientName' | translate}}\r\n        </th>\r\n        <th>\r\n          {{'ordersCount' | translate}}\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor=\"let client of clientdetailsList; let i=index\">\r\n        <td>\r\n          {{i+1}}\r\n        </td>\r\n        <td>\r\n          {{client.clientName}}\r\n        </td>\r\n        <td>\r\n          {{client.totalOrders}}\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"userType.value == 5 && !isEmptyData\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <img src=\"/assets/img/logo.png\" style=\"height: auto;width: 300px;\" class=\"center\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h2>\r\n          <b>\r\n            {{'alkayan' | translate}}\r\n          </b>\r\n\r\n\r\n        </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h3>\r\n          <b *ngIf=\"userType.value == 3\">\r\n            {{'clientsReports' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 2\">\r\n            {{'driversReports' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 4\">\r\n            {{'merchantDetails' | translate}}\r\n          </b>\r\n          <b *ngIf=\"userType.value == 5\">\r\n            {{'todayDriversDetails' | translate}}\r\n          </b>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n\r\n    \r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        {{'fromDate' | translate}} {{ordersDateFrom.value | date: 'dd/MM/yyyy'}} {{'toDate' | translate}}\r\n        {{ordersDateTo.value | date: 'dd/MM/yyyy'}}\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <table class=\"print-friendly\" style=\"align-content: center;\">\r\n      <tr>\r\n        <th>\r\n          {{'number' | translate}}\r\n        </th>\r\n        <th>\r\n          {{'driverName' | translate}}\r\n        </th>\r\n        <th>\r\n          {{'roundName' | translate}}\r\n        </th>\r\n        <th>\r\n          {{'ordersCount' | translate}}\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor=\"let driver of driverdetailsList; let i=index\">\r\n        <td>\r\n          {{i + 1}}\r\n        </td>\r\n        <td>\r\n          {{!driver.driverName ? ( 'noDriver' | translate ): driver.driverName }}\r\n        </td>\r\n        <td>\r\n          {{driver.recordArea}}\r\n        </td>\r\n        <td>\r\n          {{driver.totalOrders}}\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <h3 style=\"color:rgb(235, 49, 49);margin-left: 40%;margin-top: 10%;\" *ngIf=\"isEmptyData\">No Data Found</h3>\r\n</div>\r\n<div *ngIf=\"!isValidLink\" id=\"main\" class=\"d-flex justify-content-center\">\r\n  <img src=\"../../../assets/img/403.png\" style=\"position: absolute;\" />\r\n  <div class=\"fof mt-5\" style=\"padding-top: 361px;\">\r\n      <h1>{{'sorryYouAre' | translate}} </h1>\r\n      <br />\r\n      <h1> {{'toAccess' | translate}} </h1>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SOzR":
/*!*********************************************!*\
  !*** ./src/shared/services/base.service.ts ***!
  \*********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-variables/api-config */ "62t3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const apiPreLink = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPreLink;
let BaseService = class BaseService {
    constructor(http) {
        this.http = http;
    }
    getAllItems(controllerName) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetAllItems);
    }
    getAll(controllerName) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetAll);
    }
    getAllForList(controllerName) {
        return this.http.get(apiPreLink + controllerName + 'GetAllForList');
    }
    getItemsByKey(controllerName, action, keyValue, value) {
        return this.http.get(`${apiPreLink + controllerName + action}?${keyValue}=${value}`);
    }
    getItems(controllerName, action) {
        return this.http.get(`${apiPreLink + controllerName + action}`);
    }
    getRoles() {
        return this.http.get(apiPreLink + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Controllers"].User + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetRoles, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    getEmployeeRoles() {
        return this.http.get(apiPreLink + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Controllers"].User + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetEmployeeRoles, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    getUserRoles(userId) {
        return this.http.get(apiPreLink + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Controllers"].User + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetUserRoles + '/' + userId, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    getById(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetById + '/' + id);
    }
    getClientById(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetClientById + '/' + id);
    }
    getForUpdate(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetForUpdate + '/' + id);
    }
    getForPublic(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + 'GetForPublic' + '/' + id);
    }
    getDriverDetailsByOrderId(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + 'GetDriverByOrderId' + '/' + id);
    }
    getByIdForUpdate(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].GetForUpdate + '/' + id);
    }
    reactivate(controllerName, actionName, orderId) {
        return this.http.post(apiPreLink + controllerName + actionName + '?orderId=' + orderId, null, { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpHeaders"], responseType: 'text' });
    }
    postItemTextReponse(controllerName, actionName, postObject) {
        return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpHeaders"], responseType: 'text' });
    }
    downloadPdf(controllerName, actionName, postObject) {
        return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), { observe: 'response', responseType: 'blob' });
    }
    downloadExcel(controllerName, actionName) {
        return this.http.post(apiPreLink + controllerName + actionName, null, { observe: 'response', responseType: 'blob' });
    }
    postItem(controllerName, actionName, postObject) {
        return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    postFormItem(controllerName, actionName, postObject) {
        return this.http.patch(apiPreLink + controllerName + actionName, postObject, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpFormDataOptions"]);
    }
    postFormItemTextReponse(controllerName, actionName, postObject) {
        return this.http.patch(apiPreLink + controllerName + actionName, postObject, { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpFormDataOptions"].headers, responseType: 'text' });
    }
    getClienAreaGroupPrices(postObject) {
        return this.http.post(apiPreLink + 'AreaGroup/' + 'GetClienAreaGroupPrices', JSON.stringify(postObject), _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    updateAreaGroupClientPrices(model) {
        return this.http.patch(`${apiPreLink}AreaGroup/UpdateAreaGroupPrice`, model, { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpHeaders"], responseType: 'text' });
    }
    PostRange(controllerName, actionName, postObject) {
        return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    getDashboardData(request) {
        return this.http.post(apiPreLink + 'Order/GetDashboardData', JSON.stringify(request), _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    editItem(controllerName, editObject) {
        return this.http.patch(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].EditItem, JSON.stringify(editObject), { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpHeaders"], responseType: 'text' });
    }
    editRange(controllerName, editObject) {
        return this.http.put(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].EditRange, JSON.stringify(editObject), _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    removeItemById(controllerName, id) {
        return this.http.delete(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].RemoveItemById + '/' + id, { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpHeaders"], responseType: 'text' });
    }
    removeUserRole(roleObj) {
        return this.http.post(apiPreLink + 'User/RemoveUserRole', roleObj, { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpHeaders"], responseType: 'text' });
    }
    removeItem(controllerName, id) {
        return this.http.get(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].RemoveItem + '/' + id);
    }
    removeRange(controllerName, postobject) {
        return this.http.post(apiPreLink + controllerName + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Actions"].RemoveRange, JSON.stringify(postobject), _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]);
    }
    importFromExcel(excelFile) {
        return this.http.post(apiPreLink + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Controllers"].Order + 'ImportExcelData', excelFile, { headers: _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["httpFormDataOptions"].headers, responseType: 'text' });
    }
    downloadFile(fileName) {
        return this.http.get(apiPreLink + _global_variables_api_config__WEBPACK_IMPORTED_MODULE_2__["Controllers"].File + 'Download?file=' + fileName, {
            reportProgress: true,
            responseType: 'blob'
        });
    }
    getAppSettings() {
        return this.http.get(apiPreLink + 'AppSettings/GetAppSettings');
    }
};
BaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
BaseService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], BaseService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppComponent = class AppComponent {
    constructor(translate, languageService) {
        this.translate = translate;
        this.languageService = languageService;
        this.currentLanguage = '';
        this.translate.addLangs(['ar', 'en']);
        var localLanguage = localStorage.getItem('language');
        if (localLanguage) {
            this.languageService.setLanguage(localLanguage);
        }
        else {
            this.languageService.setLanguage('en');
        }
    }
    ngOnInit() {
        //console.log(this.authService.getLoggedInUsersRole())
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
], AppComponent);



/***/ }),

/***/ "T/fv":
/*!***************************************************************************!*\
  !*** ./src/shared/shared-components/order-notes/order-notes.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderNotesComponent", function() { return OrderNotesComponent; });
/* harmony import */ var _raw_loader_order_notes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./order-notes.component.html */ "5OcQ");
/* harmony import */ var _order_notes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-notes.component.css */ "sMDJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/global-variables/api-config */ "62t3");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "Jxek");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-filesaver */ "EnSh");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-note-dialog/add-note-dialog.component */ "G+Ui");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let OrderNotesComponent = class OrderNotesComponent {
    constructor(baseService, _MatPaginatorIntl, spinner, translate, notification, fileSaverService, dialog) {
        this.baseService = baseService;
        this._MatPaginatorIntl = _MatPaginatorIntl;
        this.spinner = spinner;
        this.translate = translate;
        this.notification = notification;
        this.fileSaverService = fileSaverService;
        this.dialog = dialog;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.imagesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].imagesUrl;
        this.displayedColumns = [
            'orderNoteText',
            'createdDate',
            'createdBy',
            'orderFilePath'
        ];
    }
    ngOnInit() {
        this._MatPaginatorIntl.itemsPerPageLabel = this.translate.instant('itemsPerLbl');
        this._MatPaginatorIntl.nextPageLabel = this.translate.instant('nextPageLbl');
        this._MatPaginatorIntl.getRangeLabel = (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return `0 à ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return `${startIndex + 1} - ${endIndex} ` + this.translate.instant('of') + ` ${length}`;
        };
        console.log('Notes Comp');
        this.spinner.show();
        this.getNotes(this.pageSize, this.pageNumber);
    }
    getNotes(pageSize, pageNumber) {
        let request = {
            pageSize,
            pageNumber,
            orderId: this.orderNotesId
        };
        console.log(request);
        this.baseService.postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].OrderNotes, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Actions"].GetList, request).subscribe(res => {
            console.log(res);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.entities);
            this.totalCount = res.totalCount;
            this.spinner.hide();
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
            }
            this.spinner.hide();
        });
    }
    addNote() {
        const dialogRef = this.dialog.open(_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AddNoteDialogComponent"], {
            width: '700px',
            data: {
                title: 'addNote',
                orderId: this.orderNotesId,
                content: 'chooseYourDriver'
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(res => {
            this.getNotes(this.pageSize, this.pageNumber);
        });
    }
    pageChanged(page) {
        this.pageSize = page.pageSize;
        this.pageNumber = page.pageIndex + 1;
        this.getNotes(page.pageSize, page.pageIndex + 1);
    }
    updatePrice(price) {
        this.baseService.updateAreaGroupClientPrices(price).subscribe(res => {
            this.spinner.hide();
            this.notification.showOriginalNotification(res, 'success');
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
            }
            this.spinner.hide();
        });
    }
    downloadFile(fileName) {
        this.spinner.show();
        return this.baseService.downloadFile(fileName).subscribe(res => {
            this.fileSaverService.save(res, fileName);
            this.spinner.hide();
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification('somethingWentWrong', 'danger');
            }
            this.spinner.hide();
        });
    }
};
OrderNotesComponent.ctorParameters = () => [
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_10__["FileSaverService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }
];
OrderNotesComponent.propDecorators = {
    orderNotesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
OrderNotesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-order-notes',
        template: _raw_loader_order_notes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_notes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
        ngx_filesaver__WEBPACK_IMPORTED_MODULE_10__["FileSaverService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]])
], OrderNotesComponent);



/***/ }),

/***/ "T6+7":
/*!******************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-form/dynamic-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-start {\r\n    -webkit-margin-start: 20% !important;\r\n            margin-inline-start: 20% !important;\r\n}\r\n.padding-end{\r\n    -webkit-padding-end: 50px;\r\n            padding-inline-end: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW1DO1lBQW5DLG1DQUFtQztBQUN2QztBQUNBO0lBQ0kseUJBQXdCO1lBQXhCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc3RhcnQge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZGRpbmctZW5ke1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "TeaW":
/*!***************************************!*\
  !*** ./src/auth/authorize.service.ts ***!
  \***************************************/
/*! exports provided: AuthorizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeService", function() { return AuthorizeService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/global-variables/api-config */ "62t3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









let AuthorizeService = class AuthorizeService {
    constructor(jwtHelper, router, http) {
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.http = http;
        this.isRefreshTokenCompleted = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.JWT_TOKEN = 'accessToken';
        this.REFRESH_TOKEN = 'refreshToken';
    }
    refreshToken() {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPreLink + _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_6__["Controllers"].Auth}RefreshToken`, {
            accessToken: this.getJwtToken(),
            refreshToken: this.getRefreshToken(),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((tokens) => {
            this.storeJwtToken(tokens.accessToken, tokens.refreshToken);
        }));
    }
    getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }
    storeJwtToken(jwt, refreshToken) {
        localStorage.setItem(this.JWT_TOKEN, jwt);
        localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
    }
    isAuthenticated() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token);
            // Check whether the token is expired and return
            // true or false
            if (token) {
                return !this.jwtHelper.isTokenExpired(token);
            }
            const isRefreshSuccess = yield this.tryRefreshingTokens(token);
            if (!isRefreshSuccess) {
                this.router.navigate(['login']);
            }
            return isRefreshSuccess;
        });
    }
    isLoggedIn() {
        const token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token);
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
    setToken(token, refreshToken) {
        localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token, token);
        localStorage.setItem('refreshToken', refreshToken);
    }
    getJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }
    logout() {
        localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token);
        localStorage.removeItem('refreshToken');
        this.router.navigate(['/auth/login']);
    }
    getLoggedInUsersRole() {
        const token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token);
        var roles;
        if (token) {
            var tokenPayload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        }
        else {
            this.logout();
        }
        if (Array.isArray(tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].roleClaim])) {
            roles = tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].roleClaim];
        }
        else {
            roles = Array(tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].roleClaim]);
        }
        return roles;
    }
    get loggedInUser() {
        const token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token);
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return token;
        }
        return null;
    }
    getLoggedInUserName() {
        const token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token);
        const decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        return decoded[_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userName];
    }
    tryRefreshingTokens(token) {
        // Try refreshing tokens using refresh token
        const refreshToken = localStorage.getItem('refreshToken');
        console.log(refreshToken);
        if (!token || !refreshToken) {
            return false;
        }
        const credentials = JSON.stringify({
            accessToken: token,
            refreshToken: refreshToken,
        });
        let isRefreshSuccess;
        try {
            this.http
                .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPreLink + _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_6__["Controllers"].Auth}RefreshToken`, credentials, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                observe: 'response',
            })
                .subscribe((response) => {
                console.log(response);
                const newToken = response.body.accessToken;
                const newRefreshToken = response.body.refreshToken;
                localStorage.setItem('accessToken', newToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                isRefreshSuccess = true;
            });
        }
        catch (ex) {
            isRefreshSuccess = false;
        }
        return isRefreshSuccess;
    }
};
AuthorizeService.ctorParameters = () => [
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AuthorizeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], AuthorizeService);



/***/ }),

/***/ "VHFj":
/*!*************************************************************************!*\
  !*** ./src/shared/shared-components/user-roles/user-roles.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesComponent", function() { return UserRolesComponent; });
/* harmony import */ var _raw_loader_user_roles_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-roles.component.html */ "vb6a");
/* harmony import */ var _user_roles_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-roles.component.css */ "5dek");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "Jxek");
/* harmony import */ var _yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../yes-no-dialog/yes-no-dialog.component */ "P8U+");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/global-variables/api-config */ "62t3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let UserRolesComponent = class UserRolesComponent {
    constructor(baseService, spinner, translate, dialog, languageService, notification) {
        this.baseService = baseService;
        this.spinner = spinner;
        this.translate = translate;
        this.dialog = dialog;
        this.languageService = languageService;
        this.notification = notification;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.roles = [];
        this.displayedColumns = [
            'roleName',
            'roleId',
            'actions'
        ];
    }
    ngOnInit() {
        this.spinner.show();
        this.getRoles();
        this.getUserRoles();
    }
    getUserRoles() {
        this.baseService.getUserRoles(this.userId).subscribe(res => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
            this.spinner.hide();
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
            }
            this.spinner.hide();
        });
    }
    getRoles() {
        this.baseService.getRoles().subscribe(res => {
            this.roles = res;
        });
    }
    openDeleteDialog(roleId) {
        const dialogRef = this.dialog.open(_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_10__["YesNoDialogComponent"], {
            width: '400px',
            data: {
                title: 'confirm',
                content: 'confirmDeleteMessage'
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.spinner.show();
                let request = {
                    RoleId: roleId,
                    UserId: Number(this.userId)
                };
                this.baseService.removeUserRole(request).subscribe(res => {
                    this.getUserRoles();
                    this.spinner.hide();
                    this.notification.showNotification(res, 'success');
                }, error => {
                    if (error.status === 400) {
                        this.notification.showNotification(error.error, 'danger');
                    }
                    else {
                        this.notification.showNotification('somethingWentWrong', 'danger');
                    }
                    this.spinner.hide();
                });
            }
        });
    }
    addUserRole() {
        this.spinner.show();
        let request = {
            RoleId: Number(this.roleId),
            UserId: Number(this.userId)
        };
        this.baseService.postItemTextReponse(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_11__["Controllers"].User, 'AddUserRole', request).subscribe(res => {
            this.getUserRoles();
            this.spinner.hide();
            this.notification.showNotification(res, 'success');
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification('somethingWentWrong', 'danger');
            }
            this.spinner.hide();
        });
    }
};
UserRolesComponent.ctorParameters = () => [
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
UserRolesComponent.propDecorators = {
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
UserRolesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-roles',
        template: _raw_loader_user_roles_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_roles_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]])
], UserRolesComponent);



/***/ }),

/***/ "VXTJ":
/*!********************************************************!*\
  !*** ./src/shared/admin-layout/admin-layout.module.ts ***!
  \********************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-layout.routing */ "BGuT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                apiKey: ''
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutRoutes"]),
        ],
        declarations: [],
        providers: []
    })
], AdminLayoutModule);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [dir]=\"languageService.getCurrentLanguage()=='en'?'ltr':'rtl'\">\r\n    <ngx-spinner bdColor=\"#ffffffcc\" size=\"medium\" color=\"#0c7dc0\" type=\"ball-clip-rotate\" [fullScreen]=\"true\">\r\n        <img style=\"width: 293px;\r\n        top: -350px;\r\n        left: -160px;\r\n        position: absolute;\" src=\"../../../assets/img/logo.png\" alt=\"\">\r\n    </ngx-spinner>\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "WBh1":
/*!************************************************!*\
  !*** ./src/forms-module/dynamic-data/index.ts ***!
  \************************************************/
/*! exports provided: UserCreateForm, OrderSearchForm, UserSearchForm, OrderList, UsersList, UpdateUserForm, UpdateMerchantForm, OrderForm, OrderUpdateForm, PostponedOrdersSearchForm, EmployeeCreateForm, EmployeeUpdateForm, RecordSearchForm, RecordList, FinancialRoundSearchForm, FinancialRoundList, CitySearchForm, CityList, CityCreateForm, CityUpdateForm, AreaGroupSearchForm, AreaGroupList, AreaGroupForm, AreaGroupFormUpdate, AreaSearchForm, AreaList, AreaCreateForm, AreaUpdateForm, OrderStatusSearchForm, OrderStatusList, OrderStatusCreateForm, OrderStatusUpdateForm, PromoCodeSearchForm, PromoCodeList, PromoCodeCreateForm, PromoCodeUpdateForm, MsgCreateForm, DashboardSearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateForm", function() { return UserCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSearchForm", function() { return OrderSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchForm", function() { return UserSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderList", function() { return OrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersList", function() { return UsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserForm", function() { return UpdateUserForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMerchantForm", function() { return UpdateMerchantForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderForm", function() { return OrderForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderUpdateForm", function() { return OrderUpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostponedOrdersSearchForm", function() { return PostponedOrdersSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateForm", function() { return EmployeeCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeUpdateForm", function() { return EmployeeUpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordSearchForm", function() { return RecordSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordList", function() { return RecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialRoundSearchForm", function() { return FinancialRoundSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialRoundList", function() { return FinancialRoundList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitySearchForm", function() { return CitySearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityList", function() { return CityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityCreateForm", function() { return CityCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityUpdateForm", function() { return CityUpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaGroupSearchForm", function() { return AreaGroupSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaGroupList", function() { return AreaGroupList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaGroupForm", function() { return AreaGroupForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaGroupFormUpdate", function() { return AreaGroupFormUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSearchForm", function() { return AreaSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaList", function() { return AreaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaCreateForm", function() { return AreaCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaUpdateForm", function() { return AreaUpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusSearchForm", function() { return OrderStatusSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusList", function() { return OrderStatusList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusCreateForm", function() { return OrderStatusCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusUpdateForm", function() { return OrderStatusUpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodeSearchForm", function() { return PromoCodeSearchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodeList", function() { return PromoCodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodeCreateForm", function() { return PromoCodeCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodeUpdateForm", function() { return PromoCodeUpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgCreateForm", function() { return MsgCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSearchForm", function() { return DashboardSearchForm; });
/* harmony import */ var _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/enums/enums */ "B10k");

const searchAction = {
    actionName: 'search',
    actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Submit,
    isDisableAllowed: false,
};
const resetAction = {
    actionName: 'Reset',
    actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Reset,
    isDisableAllowed: false,
};
const addAction = {
    actionName: 'Add',
    actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Submit,
    isDisableAllowed: true,
};
const editAction = {
    actionName: 'Edit',
    actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Submit,
    isDisableAllowed: true,
};
const UserCreateForm = {
    actions: [addAction],
    formFields: [
        {
            fieldId: 'fullName',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'Name',
            fieldOrder: 1,
            placeholder: 'Name',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'email',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Email,
            label: 'Email',
            fieldOrder: 1,
            placeholder: 'Email',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'phoneNumber',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'Number',
            fieldOrder: 1,
            placeholder: 'Number',
            options: {
                disabled: false,
                required: true,
                size: 4,
                phoneNumberValidation: true,
            },
        },
        // {
        //   fieldId: 'areaRegionId',
        //   fieldType: FieldTypeEnum.DropDownList,
        //   label: 'Region',
        //   fieldOrder: 1,
        //   placeholder: 'Region',
        //   options: { disabled: false, required: true, size: 4 },
        // },
        {
            fieldId: 'address',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'Address',
            fieldOrder: 1,
            placeholder: 'Address',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'password',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'Password',
            fieldOrder: 1,
            placeholder: 'Password',
            options: { disabled: false, required: true, size: 4 },
        },
    ],
};
const OrderSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'areaId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'area',
            fieldOrder: 1,
            placeholder: 'area',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'clientId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'client',
            fieldOrder: 2,
            placeholder: 'client',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'driverId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'driver',
            fieldOrder: 3,
            placeholder: 'driver',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'orderStatusId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'orderStatus',
            fieldOrder: 4,
            placeholder: 'orderStatus',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'clientBrandId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'clientBrand',
            fieldOrder: 5,
            placeholder: 'clientBrand',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'fromDate',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Date,
            label: 'fromDate',
            fieldOrder: 6,
            placeholder: 'fromDate',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'toDate',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Date,
            label: 'toDate',
            fieldOrder: 7,
            placeholder: 'toDate',
            options: { disabled: false, required: false, size: 3 },
        },
    ],
};
const UserSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'searchValue',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'searchValue',
            fieldOrder: 1,
            placeholder: 'searchValue',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'userId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'userId',
            fieldOrder: 1,
            placeholder: 'userId',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'isActive',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'isActive',
            fieldOrder: 1,
            placeholder: 'isActive',
            options: { disabled: false, required: true, size: 3 },
        },
    ],
};
const OrderList = [
    {
        columnId: 'merchantName',
        columnValue: 'merchantName',
        columnName: 'merchantName',
        actions: [],
    },
    {
        columnId: 'clientBrand',
        columnValue: 'clientBrand',
        columnName: 'clientBrand',
        actions: [],
    },
    {
        columnId: 'createdBy',
        columnValue: 'createdBy',
        columnName: 'createdBy',
        actions: [],
    },
    {
        columnId: 'endUserName',
        columnValue: 'endUserName',
        columnName: 'endUserName',
        actions: [],
    },
    {
        columnId: 'endUserAddress',
        columnValue: 'endUserAddress',
        columnName: 'endUserAddress',
        actions: [],
    },
    {
        columnId: 'orderStatusNameEn',
        columnValue: 'orderStatusNameEn',
        columnName: 'orderStatusNameEn',
        actions: [],
    },
    {
        columnId: 'orderTotalPrice',
        columnValue: 'orderTotalPrice',
        columnName: 'orderTotalPrice',
        actions: [],
    },
    {
        columnId: 'orderDate',
        columnValue: 'orderDate',
        columnName: 'orderDate',
        actions: [],
    },
    {
        columnId: 'areaName',
        columnValue: 'areaName',
        columnName: 'areaName',
        actions: [],
    },
    {
        columnId: 'driverName',
        columnValue: 'driverName',
        columnName: 'driverName',
        actions: [],
    },
    {
        columnId: 'actions',
        columnValue: 'actions',
        columnName: 'actions',
        actions: [{ actionName: 'view', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].View }],
    },
];
const UsersList = [
    {
        columnId: 'phoneNumber',
        columnValue: 'phoneNumber',
        columnName: 'phoneNumber',
        actions: [],
    },
    {
        columnId: 'fullName',
        columnValue: 'fullName',
        columnName: 'fullName',
        actions: [],
    },
    {
        columnId: 'email',
        columnValue: 'email',
        columnName: 'email',
        actions: [],
    },
    {
        columnId: 'statusEn',
        columnValue: 'statusEn',
        columnName: 'statusEn',
        actions: [],
    },
    {
        columnId: 'actions',
        columnValue: 'actions',
        columnName: 'actions',
        actions: [
            { actionName: 'view', actionType: 3 },
            { actionName: 'delete', actionType: 2 },
            { actionName: 'edit', actionType: 1 },
        ],
    },
];
const UpdateUserForm = {
    actions: [editAction],
    formFields: [
        {
            fieldId: 'fullName',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'FullName',
            fieldOrder: 1,
            placeholder: 'FullName',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'email',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Email,
            label: 'Email',
            fieldOrder: 1,
            placeholder: 'Email',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'phoneNumber',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'PhoneNumber',
            fieldOrder: 1,
            placeholder: 'PhoneNumber',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'address',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'Address',
            fieldOrder: 1,
            placeholder: 'Address',
            options: { disabled: false, required: true, size: 3 },
        },
        // {
        //   fieldId: 'areaRegionId',
        //   fieldType: FieldTypeEnum.DropDownList,
        //   label: 'Region',
        //   fieldOrder: 1,
        //   placeholder: 'Region',
        //   options: { disabled: false, required: true, size: 3 },
        // },
        {
            fieldId: 'isActive',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'isActive',
            fieldOrder: 1,
            placeholder: 'isActive',
            options: { disabled: false, required: true, size: 3 },
        },
    ],
};
const UpdateMerchantForm = Object.assign({}, UpdateUserForm);
UpdateMerchantForm.formFields = UpdateMerchantForm.formFields.concat([
    {
        fieldId: 'cardHolderName',
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
        label: 'cardHolderName',
        fieldOrder: 1,
        placeholder: 'cardHolderName',
        options: { disabled: false, required: true, size: 3 },
    },
    {
        fieldId: 'bankName',
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
        label: 'bankName',
        fieldOrder: 1,
        placeholder: 'bankName',
        options: { disabled: false, required: true, size: 3 },
    },
    {
        fieldId: 'iban',
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
        label: 'iban',
        fieldOrder: 1,
        placeholder: 'iban',
        options: { disabled: false, required: true, size: 3 },
    },
    {
        fieldId: 'accountNumber',
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
        label: 'accountNumber',
        fieldOrder: 1,
        placeholder: 'accountNumber',
        options: { disabled: false, required: true, size: 3 },
    },
    {
        fieldId: 'bankVerifecationAttachment',
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].File,
        label: 'bankVerifecationAttachment',
        fieldOrder: 1,
        placeholder: 'bankVerifecationAttachment',
        options: { disabled: false, required: true, size: 3 },
    },
]);
const OrderForm = {
    actions: [addAction],
    formFields: [
        {
            fieldId: 'areaId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'area',
            fieldOrder: 1,
            placeholder: 'area',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'clientId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'client',
            fieldOrder: 1,
            placeholder: 'client',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'orderStatusId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'orderStatus',
            fieldOrder: 1,
            placeholder: 'orderStatus',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'orderTaskId',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'orderTask',
            fieldOrder: 1,
            placeholder: 'orderTask',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'deliveryFeesOn',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'deliveryFeesOn',
            fieldOrder: 1,
            placeholder: 'deliveryFeesOn',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'endUserAddress',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'endUserAddress',
            fieldOrder: 1,
            placeholder: 'endUserAddress',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'orderItemTypeDescription',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'orderItemTypeDescription',
            fieldOrder: 1,
            placeholder: 'orderItemTypeDescription',
            options: { disabled: false, required: false, size: 3 },
        },
        {
            fieldId: 'orderPrice',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
            label: 'orderPrice',
            fieldOrder: 1,
            placeholder: 'orderPrice',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'addedPrice',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
            label: 'addedPrice',
            fieldOrder: 1,
            placeholder: 'addedPrice',
            options: { disabled: false, required: true, size: 3 },
        },
        {
            fieldId: 'endUserPhoneNumber',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'endUserPhoneNumber',
            fieldOrder: 1,
            placeholder: 'endUserPhoneNumber',
            options: {
                disabled: false,
                required: false,
                phoneNumberValidation: true,
                size: 3,
            },
        },
        {
            fieldId: 'endUserName',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'endUserName',
            fieldOrder: 1,
            placeholder: 'endUserName',
            options: { disabled: false, required: false, size: 3 },
        },
    ],
};
const OrderUpdateForm = {
    actions: [editAction],
    formFields: OrderForm.formFields,
};
const PostponedOrdersSearchForm = {
    actions: OrderSearchForm.actions,
    formFields: [...OrderSearchForm.formFields],
};
const EmployeeCreateForm = {
    actions: [...UserCreateForm.actions],
    formFields: [
        ...UserCreateForm.formFields,
        {
            fieldId: 'role',
            fieldOrder: 10,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'role',
            placeholder: 'role',
            options: { required: true, disabled: false, size: 4 },
        },
    ],
};
const EmployeeUpdateForm = {
    actions: [editAction],
    formFields: [
        ...EmployeeCreateForm.formFields.filter((field) => field.fieldId !== 'role'),
        {
            fieldId: 'isActive',
            fieldOrder: 7,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            placeholder: 'isActive',
            label: 'isActive',
            options: { required: true, disabled: false, size: 4 },
        },
    ],
};
const RecordSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'areaGroupId',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'areaGroup',
            placeholder: 'areaGroup',
            options: { required: false, disabled: false, size: 4 },
        },
    ],
};
const RecordList = [
    {
        columnId: 'areaGroupNameEn',
        columnName: 'areaGroupNameEn',
        columnValue: 'areaGroupNameEn',
        actions: [],
    },
    {
        columnId: 'areaGroupNameAr',
        columnName: 'areaGroupNameAr',
        columnValue: 'areaGroupNameAr',
        actions: [],
    },
    {
        columnId: 'createdBy',
        columnName: 'createdBy',
        columnValue: 'createdBy',
        actions: [],
    },
    {
        columnId: 'driverName',
        columnName: 'driverName',
        columnValue: 'driverName',
        actions: [],
    },
    {
        columnId: 'recordDate',
        columnName: 'recordDate',
        columnValue: 'recordDate',
        actions: [],
    },
];
const FinancialRoundSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'clientId',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'client',
            placeholder: 'client',
            options: { required: false, disabled: false, size: 5 },
        },
        {
            fieldId: 'status',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'status',
            placeholder: 'status',
            options: { required: false, disabled: false, size: 5 },
        },
        {
            fieldId: 'fromDate',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Date,
            label: 'fromDate',
            placeholder: 'fromDate',
            options: { required: false, disabled: false, size: 5 },
        },
        {
            fieldId: 'toDate',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Date,
            label: 'toDate',
            placeholder: 'toDate',
            options: { required: false, disabled: false, size: 5 },
        },
    ],
};
const FinancialRoundList = [
    {
        columnId: 'clientName',
        columnName: 'clientName',
        columnValue: 'clientName',
        actions: [],
    },
    {
        columnId: 'status',
        columnName: 'status',
        columnValue: 'status',
        actions: [],
    },
    {
        columnId: 'roundDate',
        columnName: 'roundDate',
        columnValue: 'roundDate',
        actions: [],
    },
    {
        columnId: 'lastValidationDate',
        columnName: 'lastValidationDate',
        columnValue: 'lastValidationDate',
        actions: [],
    },
];
const CitySearchForm = {
    actions: [
        {
            actionName: 'search',
            actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Submit,
            isDisableAllowed: false,
        },
        {
            actionName: 'reset',
            actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Reset,
            isDisableAllowed: false,
        },
    ],
    formFields: [
        {
            fieldId: 'name',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'name',
            fieldOrder: 1,
            placeholder: 'name',
            options: { disabled: false, required: false, size: 4 },
        },
    ],
};
const CityList = [
    {
        columnId: 'nameEn',
        columnValue: 'nameEn',
        columnName: 'nameEn',
        actions: [],
    },
    {
        columnId: 'nameAr',
        columnValue: 'nameAr',
        columnName: 'nameAr',
        actions: [],
    },
    {
        columnId: 'actions',
        columnValue: 'actions',
        columnName: 'actions',
        actions: [
            { actionName: 'view', actionType: 3 },
            { actionName: 'delete', actionType: 2 },
            { actionName: 'edit', actionType: 1 },
        ],
    },
];
const CityCreateForm = {
    formFields: [
        {
            fieldId: 'nameEn',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameEn',
            fieldOrder: 1,
            placeholder: 'nameEn',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'nameAr',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameAr',
            fieldOrder: 2,
            placeholder: 'nameAr',
            options: { disabled: false, required: true, size: 4 },
        },
    ],
    actions: [
        {
            actionName: 'add',
            actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ActionTypeEnum"].Submit,
            isDisableAllowed: true,
        },
    ],
};
const CityUpdateForm = {
    formFields: [
        {
            fieldId: 'nameEn',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameEn',
            fieldOrder: 1,
            placeholder: 'nameEn',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'nameAr',
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameAr',
            fieldOrder: 2,
            placeholder: 'nameAr',
            options: { disabled: false, required: true, size: 4 },
        },
    ],
    actions: [editAction],
};
const AreaGroupSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'name',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'name',
            placeholder: 'name',
            options: { disabled: false, required: true, size: 4 },
        },
    ],
};
const AreaGroupList = [
    {
        columnId: 'nameEn',
        columnName: 'nameEn',
        columnValue: 'nameEn',
        actions: [],
    },
    {
        columnId: 'nameAr',
        columnName: 'nameAr',
        columnValue: 'nameAr',
        actions: [],
    },
    {
        columnId: 'defaultPrice',
        columnName: 'defaultPrice',
        columnValue: 'defaultPrice',
        actions: [],
    },
    {
        columnId: 'driverPrice',
        columnName: 'driverPrice',
        columnValue: 'driverPrice',
        actions: [],
    },
    {
        columnId: 'actions',
        columnName: 'actions',
        columnValue: 'actions',
        actions: [
            { actionName: 'view', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].View },
            { actionName: 'edit', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Edit },
            { actionName: 'delete', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Delete },
        ],
    },
];
const AreaGroupForm = {
    actions: [addAction],
    formFields: [
        {
            fieldId: 'nameEn',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameEn',
            placeholder: 'nameEn',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'nameAr',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameAr',
            placeholder: 'nameAr',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'driverPrice',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
            label: 'driverPrice',
            placeholder: 'driverPrice',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'defaultPrice',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
            label: 'defaultPrice',
            placeholder: 'defaultPrice',
            options: { required: true, disabled: false, size: 4 },
        },
    ],
};
const AreaGroupFormUpdate = {
    actions: [editAction],
    formFields: [
        {
            fieldId: 'nameEn',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameEn',
            placeholder: 'nameEn',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'nameAr',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameAr',
            placeholder: 'nameAr',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'driverPrice',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
            label: 'driverPrice',
            placeholder: 'driverPrice',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'defaultPrice',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
            label: 'defaultPrice',
            placeholder: 'defaultPrice',
            options: { required: true, disabled: false, size: 4 },
        },
    ],
};
const AreaSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'name',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'name',
            placeholder: 'name',
            options: { disabled: false, required: false, size: 4 },
        },
        {
            fieldId: 'cityId',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'city',
            placeholder: 'city',
            options: { required: false, disabled: false, size: 4 },
        },
        {
            fieldId: 'areaGroupId',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'areaGroup',
            placeholder: 'areaGroup',
            options: { required: false, disabled: false, size: 4 },
        },
    ],
};
const AreaList = [
    {
        columnId: 'nameEn',
        columnName: 'nameEn',
        columnValue: 'nameEn',
        actions: [],
    },
    {
        columnId: 'nameAr',
        columnName: 'nameAr',
        columnValue: 'nameAr',
        actions: [],
    },
    {
        columnId: 'areaGroupNameEn',
        columnName: 'areaGroupNameEn',
        columnValue: 'areaGroupNameEn',
        actions: [],
    },
    {
        columnId: 'areaGroupNameAr',
        columnName: 'areaGroupNameAr',
        columnValue: 'areaGroupNameAr',
        actions: [],
    },
    {
        columnId: 'cityNameEn',
        columnName: 'cityNameEn',
        columnValue: 'cityNameEn',
        actions: [],
    },
    {
        columnId: 'cityNameAr',
        columnName: 'cityNameAr',
        columnValue: 'cityNameAr',
        actions: [],
    },
    {
        columnId: 'actions',
        columnName: 'actions',
        columnValue: 'actions',
        actions: [
            { actionName: 'view', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].View },
            { actionName: 'edit', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Edit },
            { actionName: 'delete', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Delete },
        ],
    },
];
const AreaCreateForm = {
    actions: [addAction],
    formFields: [
        {
            fieldId: 'nameEn',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameEn',
            placeholder: 'nameEn',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'nameAr',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'nameAr',
            placeholder: 'nameAr',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'cityId',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'city',
            placeholder: 'city',
            options: { required: true, disabled: false, size: 4 },
        },
        {
            fieldId: 'areaGroupId',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'areaGroup',
            placeholder: 'areaGroup',
            options: { required: true, disabled: false, size: 4 },
        },
    ],
};
const AreaUpdateForm = {
    actions: [editAction],
    formFields: [...AreaCreateForm.formFields],
};
const OrderStatusSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'name',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'name',
            placeholder: 'name',
            options: { disabled: false, required: false, size: 4 },
        },
    ],
};
const OrderStatusList = [
    {
        columnId: 'nameEn',
        columnName: 'nameEn',
        columnValue: 'nameEn',
        actions: [],
    },
    {
        columnId: 'nameAr',
        columnName: 'nameAr',
        columnValue: 'nameAr',
        actions: [],
    },
    {
        columnId: 'actions',
        columnName: 'actions',
        columnValue: 'actions',
        actions: [
            { actionName: 'view', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].View },
            { actionName: 'edit', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Edit },
            { actionName: 'delete', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Delete },
        ],
    },
];
const OrderFormFields = [
    {
        fieldId: 'nameEn',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
        label: 'nameEn',
        placeholder: 'nameEn',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'nameAr',
        fieldOrder: 2,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
        label: 'nameAr',
        placeholder: 'nameAr',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'backgroundColor',
        fieldOrder: 3,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].ColorPicker,
        label: 'backgroundColor',
        placeholder: 'backgroundColor',
        options: { disabled: false, required: false, size: 4 },
    },
    {
        fieldId: 'icon',
        fieldOrder: 4,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].ImageFile,
        label: 'icon',
        placeholder: 'icon',
        options: { disabled: false, required: false, size: 4 },
    },
    {
        fieldId: 'sortNumber',
        fieldOrder: 5,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
        label: 'sortNumber',
        placeholder: 'sortNumber',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'isPaid',
        fieldOrder: 6,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].CheckBox,
        label: 'isPaid',
        value: false,
        placeholder: 'isPaid',
        options: { disabled: false, required: false, size: 4 },
    },
    {
        fieldId: 'isEditablePrice',
        fieldOrder: 7,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].CheckBox,
        label: 'isEditablePrice',
        value: false,
        placeholder: 'isEditablePrice',
        options: { disabled: false, required: false, size: 4 },
    },
    {
        fieldId: 'isOrderPriceIncluded',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].CheckBox,
        label: 'isOrderPriceIncluded',
        value: false,
        placeholder: 'isOrderPriceIncluded',
        options: { disabled: false, required: false, size: 4 },
    },
];
const OrderStatusCreateForm = {
    actions: [addAction],
    formFields: JSON.parse(JSON.stringify([...OrderFormFields])),
};
const OrderStatusUpdateForm = {
    actions: [editAction],
    formFields: [...OrderFormFields],
};
const PromoCodeSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'name',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'name',
            placeholder: 'name',
            options: { disabled: false, required: false, size: 4 },
        },
        {
            fieldId: 'expiryType',
            fieldOrder: 2,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'expiryType',
            placeholder: 'expiryType',
            options: { disabled: false, required: false, size: 4 },
        },
    ],
};
const PromoCodeList = [
    {
        columnId: 'code',
        columnName: 'code',
        columnValue: 'code',
        actions: [],
    },
    {
        columnId: 'percentage',
        columnName: 'percentage',
        columnValue: 'percentage',
        actions: [],
    },
    {
        columnId: 'expiryType',
        columnName: 'expiryType',
        columnValue: 'expiryType',
        actions: [],
    },
    {
        columnId: 'expiryDate',
        columnName: 'expiryDate',
        columnValue: 'expiryDate',
        actions: [],
    },
    {
        columnId: 'ordersLimit',
        columnName: 'ordersLimit',
        columnValue: 'ordersLimit',
        actions: [],
    },
    {
        columnId: 'createdBy',
        columnName: 'createdBy',
        columnValue: 'createdBy',
        actions: [],
    },
    {
        columnId: 'actions',
        columnName: 'actions',
        columnValue: 'actions',
        actions: [
            { actionName: 'view', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].View },
            { actionName: 'edit', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Edit },
            { actionName: 'delete', actionType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["ListActionTypeEnum"].Delete },
        ],
    },
];
const PromoCodeFormFields = [
    {
        fieldId: 'percentage',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
        label: 'percentage',
        placeholder: 'percentage',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'code',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
        label: 'code',
        placeholder: 'code',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'expiryType',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
        label: 'expiryType',
        placeholder: 'expiryType',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'expiryDate',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Date,
        label: 'expiryDate',
        placeholder: 'expiryDate',
        options: { disabled: false, required: true, size: 4 },
    },
    {
        fieldId: 'ordersLimit',
        fieldOrder: 1,
        fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Number,
        label: 'ordersLimit',
        placeholder: 'ordersLimit',
        options: { disabled: false, required: true, size: 4 },
    },
];
const PromoCodeCreateForm = {
    actions: [addAction],
    formFields: JSON.parse(JSON.stringify(PromoCodeFormFields)),
};
const PromoCodeUpdateForm = {
    actions: [editAction],
    formFields: JSON.parse(JSON.stringify(PromoCodeFormFields)),
};
const MsgCreateForm = {
    actions: [addAction],
    formFields: [
        {
            fieldId: 'messageText',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'messageText',
            placeholder: 'messageText',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'sentTo',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].DropDownList,
            label: 'sentTo',
            placeholder: 'sentTo',
            options: { disabled: false, required: true, size: 4 },
        },
        {
            fieldId: 'sentToText',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'sentToText',
            placeholder: 'sentToText',
            options: { disabled: false, required: true, size: 4 },
        },
    ],
};
const DashboardSearchForm = {
    actions: [searchAction, resetAction],
    formFields: [
        {
            fieldId: 'name',
            fieldOrder: 1,
            fieldType: _shared_enums_enums__WEBPACK_IMPORTED_MODULE_0__["FieldTypeEnum"].Input,
            label: 'name',
            placeholder: 'name',
            options: { disabled: false, required: false, size: 4 },
        },
    ],
};


/***/ }),

/***/ "XECf":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/add-note-dialog/add-note-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"filterForm\" #myForm=\"ngForm\" autocomplete=\"alkayanform\" id=\"alkayanformId\">\r\n\r\n\r\n<div [dir]=\"languageService.getCurrentLanguage()=='en'?'ltr':'rtl'\" style=\"text-align: start !important;\">\r\n  <h1 mat-dialog-title><b>{{data.title |translate}} </b> </h1>\r\n  <div mat-dialog-content>\r\n    <div class=\"card-body\" *ngIf=\"!isLoading\">\r\n      <app-dynamic-form [formInput]=\"dynamicFormInput\" (actionSubmitted)=\"serveAction($event)\"></app-dynamic-form>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n</form>");

/***/ }),

/***/ "Xi1s":
/*!*********************************************!*\
  !*** ./src/shared/pipes/color-fade.pipe.ts ***!
  \*********************************************/
/*! exports provided: ColorFadePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFadePipe", function() { return ColorFadePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ColorFadePipe = class ColorFadePipe {
    transform(value, ratio) {
        return color__WEBPACK_IMPORTED_MODULE_1__(value).fade(ratio);
    }
};
ColorFadePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'colorFade'
    })
], ColorFadePipe);



/***/ }),

/***/ "Xy8L":
/*!*******************************************************************!*\
  !*** ./src/shared/shared-components/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ROUTES, LOOCKUPS_ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOCKUPS_ROUTES", function() { return LOOCKUPS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "ZjcR");
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ "H4+0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
/* harmony import */ var _auth_authorize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/authorize.service */ "TeaW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ROUTES;
ROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        icon: "dashboard",
        class: "",
        hasChildren: false,
        authRoles: ['Admin', 'Accountant'],
    },
    {
        path: "",
        title: "clientsManagement",
        icon: "contact_page",
        class: "",
        hasChildren: true,
        subMenuId: "clientManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        children: [
            {
                path: "/forms/client-list",
                title: "ListClients",
                icon: "supervisor_account",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
            {
                path: "/forms/client-create",
                title: "AddClient",
                icon: "person_add_alt_1",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "driversManagement",
        icon: "commute",
        class: "",
        hasChildren: true,
        subMenuId: "driverManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        children: [
            {
                path: "/forms/driver-list",
                title: "ListDrivers",
                icon: "supervisor_account",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
            {
                path: "/forms/driver-create",
                title: "AddDriver",
                icon: "person_add_alt_1",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "endUsersManagement",
        icon: "contacts",
        class: "",
        hasChildren: true,
        subMenuId: "endUsersManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        children: [
            {
                path: "/forms/endusers-list",
                title: "endUsersList",
                icon: "supervisor_account",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
            {
                path: "/forms/enduser-create",
                title: "addEndUser",
                icon: "person_add_alt_1",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "ordersManagement",
        icon: "assignment",
        class: "",
        hasChildren: true,
        subMenuId: "ordersManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/order-list",
                title: "ordersList",
                icon: "menu",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/order-create",
                title: "orderAdd",
                icon: "create_new_folder",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/reports-search",
                title: "reports",
                icon: "description",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
            {
                path: "/forms/company-revenue",
                title: "companyRevenue",
                icon: "attach_money",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant'],
                hasChildren: false,
            },
            {
                path: "/forms/order-list-admin",
                title: "adminOrderList",
                icon: "perm_identity",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant'],
                hasChildren: false,
            },
            {
                path: "/forms/postponed-orders",
                title: "postponedOrders",
                icon: "alarm_off",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            }
        ],
    },
    {
        path: '',
        title: 'employeesManagement',
        icon: 'account_circle',
        class: '',
        hasChildren: true,
        subMenuId: 'employeeManagementSubMenu',
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        children: [
            {
                path: '/forms/employees-list',
                title: 'ListEmployees',
                icon: 'supervisor_account',
                class: 'sub-menu',
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false
            },
            {
                path: '/forms/employee-create',
                title: 'AddEmployee',
                icon: 'person_add_alt_1',
                class: 'sub-menu',
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false
            },
        ]
    },
    {
        path: '',
        title: 'recordsManagement',
        icon: 'insert_drive_file',
        class: '',
        hasChildren: true,
        subMenuId: 'recordManagementSubMenu',
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        children: [
            {
                path: '/forms/records-list', title: 'ListRecords',
                icon: 'menu',
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                class: 'sub-menu', hasChildren: false
            }
        ]
    },
    {
        path: '',
        title: 'financialRoundsManagement',
        icon: 'pages',
        class: '',
        hasChildren: true,
        subMenuId: 'financialRoundsManagementSubMenu',
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        children: [
            { path: '/forms/rounds-list', title: 'listRounds', authRoles: ['Admin', 'Accountant', 'Assistant'], icon: 'menu', class: 'sub-menu', hasChildren: false }
        ]
    },
];
const LOOCKUPS_ROUTES = [
    {
        path: "",
        title: "citiesManagement",
        icon: "location_city",
        class: "",
        hasChildren: true,
        subMenuId: "citiesManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/city-list",
                title: "ListCities",
                icon: "menu",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/city-create",
                title: "AddCity",
                icon: "add_to_photos",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "areagroupManagement",
        icon: "location_searching",
        class: "",
        hasChildren: true,
        subMenuId: "areagroupManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/areagroup-list",
                title: "ListAreaGroups",
                icon: "menu",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/areagroup-create",
                title: "AddAreaGroup",
                icon: "add_to_photos",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "areasManagement",
        icon: "room",
        class: "",
        hasChildren: true,
        subMenuId: "areasManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/area-list",
                title: "areasList",
                icon: "menu",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/area-create",
                title: "AddArea",
                icon: "add_location",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "orderstatusManagement",
        icon: "insert_comment",
        class: "",
        hasChildren: true,
        subMenuId: "orderstatusManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/order-status-list",
                title: "ListOrderStatus",
                icon: "menu",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/order-status-create",
                title: "AddOrderStatus",
                icon: "create_new_folder",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
        ],
    },
    {
        path: "",
        title: "promoCodeManagement",
        icon: "text_fields",
        class: "",
        hasChildren: true,
        subMenuId: "promoCodeManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/promo-code-list",
                title: "listCodes",
                icon: "menu",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
            {
                path: "/forms/promo-code-create",
                title: "addCode",
                icon: "create_new_folder",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            },
        ],
    }, {
        path: "",
        title: "employeesMessagesManagement",
        icon: "mail_outline",
        class: "",
        hasChildren: true,
        subMenuId: "employeesMessagesManagementSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/message-create",
                title: "AddMsg",
                icon: "add_to_photos",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant'],
                hasChildren: false,
            },
            {
                path: "/forms/messages",
                title: "employeeMessages",
                icon: "add_to_photos",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            }
        ],
    },
    {
        path: "",
        title: "pushNotifications",
        icon: "mail_outline",
        class: "",
        hasChildren: true,
        subMenuId: "pushNotificationsSubMenu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        children: [
            {
                path: "/forms/push-notifications",
                title: "sendPushNotification",
                icon: "add_to_photos",
                class: "sub-menu",
                authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
                hasChildren: false,
            }
        ],
    }
];
let SidebarComponent = class SidebarComponent {
    constructor(authService, languageService, translate) {
        this.authService = authService;
        this.languageService = languageService;
        this.translate = translate;
        this.sideBarShow = false;
        this.rightIcon = "position:absolute;left:280px;cursor:pointer";
        this.leftIcon = "position:absolute;right:280px;cursor:pointer";
        this.company = "Alkayan";
    }
    ngOnInit() {
        $("#mainBar").hide('slow');
        this.menuItems = ROUTES.filter((menuItem) => menuItem);
        this.loockupsItems = LOOCKUPS_ROUTES.filter((menuItem) => menuItem);
        this.authorizeRoles = this.authService.getLoggedInUsersRole();
    }
    openSideBar() {
    }
    closeSideBar() {
        $("#mainBar").hide('slow');
    }
    checkRoles(tabRoles) {
        if (tabRoles && tabRoles.length) {
            if (this.authorizeRoles.find((x) => tabRoles.find((t) => t == x))) {
                return true;
            }
            return false;
        }
        return false;
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _auth_authorize_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizeService"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_auth_authorize_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizeService"],
        _shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], SidebarComponent);



/***/ }),

/***/ "YY81":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/footer/footer.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n       <!--  <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a >\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://creative-tim.com/about-us\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav> -->\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, made with love by\r\n            <a href=\"\" target=\"_blank\">Cancri E-Solutions</a> \r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "KZX/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _auth_authorize_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/authorize.service */ "TeaW");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/ar */ "Brhu");
/* harmony import */ var _angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_locales_extra_ar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/extra/ar */ "o6XD");
/* harmony import */ var _angular_common_locales_extra_ar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_ar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _shared_models_date_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/models/date-adapter */ "HqPE");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _public_order_details_public_order_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./public-order-details/public-order-details.component */ "ONYr");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _shared_services_mat_paginator_translate_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/services/mat-paginator-translate.service */ "Hdgi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default.a, 'en');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_13___default.a, 'ar', _angular_common_locales_extra_ar__WEBPACK_IMPORTED_MODULE_14___default.a);
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].token);
                    },
                    allowedDomains: [_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiPreLink],
                    disallowedRoutes: [],
                },
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                apiKey: ''
            })
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _public_order_details_public_order_details_component__WEBPACK_IMPORTED_MODULE_22__["PublicOrderDetailsComponent"]
        ],
        providers: [_auth_authorize_service__WEBPACK_IMPORTED_MODULE_11__["AuthorizeService"],
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], useClass: _shared_models_date_adapter__WEBPACK_IMPORTED_MODULE_20__["CustomDatePickerAdapter"] },
            {
                provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorIntl"],
                useClass: _shared_services_mat_paginator_translate_service__WEBPACK_IMPORTED_MODULE_24__["MatPaginationIntlService"],
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "ZjcR":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/sidebar/sidebar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"logo\">\r\n    <a  class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img class=\"inside-logo\"  src=\"/assets/img/logo.png\" />\r\n\r\n        </div>\r\n  <label class=\" inside-logo\">  {{company | translate}} </label>\r\n<mat-icon id=\"closeBarIcon\" (click)=\"closeSideBar()\"  [style]=\"languageService.getCurrentLanguage()=='ar'? (leftIcon) : (rightIcon)\">clear</mat-icon>\r\n    </a>\r\n    \r\n</div>\r\n<div style=\"width: inherit !important;overflow-x: hidden;\" class=\"sidebar-wrapper\" >\r\n    <div *ngIf=\"isMobileMenu()\">\r\n        <!-- <form class=\"navbar-form\">\r\n            <span class=\"bmd-form-group\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </span>\r\n        </form> -->\r\n        <!--    <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>\r\n                        <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                    </p>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">notifications</i>\r\n                    <span class=\"notification\">5</span>\r\n                    <p>\r\n                        <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                    </p>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                    <i class=\"material-icons\">person</i>\r\n                    <p>\r\n                        <span class=\"d-lg-none d-md-block\">Account</span>\r\n                    </p>\r\n                </a>\r\n            </li>\r\n        </ul> -->\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <div *ngFor=\"let menuItem of menuItems\">\r\n            <li *ngIf=\"!menuItem.hasChildren && checkRoles(menuItem.authRoles)\" routerLinkActive=\"active\"\r\n                class=\"{{menuItem.class}} nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon }}</i>\r\n                    <p class=\"sideTxt\">{{menuItem.title | translate}}</p>\r\n              \r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"menuItem.hasChildren && checkRoles(menuItem.authRoles)\" class=\"nav-item\"\r\n                routerLinkActive=\"active\">\r\n                <a [href]=\"'#'+menuItem.subMenuId\" data-toggle=\"collapse\" aria-expanded=\"false\"\r\n                    [ngClass]=\"languageService.getCurrentLanguage()=='en'?'nav-link dropdown-toggle':'nav-link dropdown-toggle-ar'\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p class=\"sideTxt \">{{menuItem.title | translate}}</p>\r\n                </a>\r\n                <ul class=\"collapse list-unstyled\" [id]=\"menuItem.subMenuId\">\r\n                    <li *ngFor=\"let subItem of menuItem.children\" routerLinkActive=\"active\">\r\n                        <a *ngIf=\"checkRoles(subItem.authRoles)\" class=\"{{subItem.class}}  nav-link\" [routerLink]=\"[subItem.path]\">\r\n                            <i class=\"material-icons\">{{subItem.icon}}</i>\r\n                            <p class=\"sideTxt\">{{subItem.title | translate}}</p>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n        </div>\r\n\r\n\r\n    </ul>\r\n\r\n    <div class=\"logo\">\r\n        <a id=\"Loockups\"  class=\"simple-text sideTxt\">\r\n            {{'Loockups' | translate}}\r\n        </a>\r\n    </div>\r\n    <ul class=\"nav\" >\r\n        <div *ngFor=\"let menuItem of loockupsItems\">\r\n            <li *ngIf=\"!menuItem.hasChildren && checkRoles(menuItem.authRoles)\" routerLinkActive=\"active\"\r\n                class=\"{{menuItem.class}} nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p class=\"sideTxt \">{{menuItem.title  | translate}}</p>\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"menuItem.hasChildren && checkRoles(menuItem.authRoles)\" class=\"nav-item\"\r\n            routerLinkActive=\"active\">\r\n            <a [href]=\"'#'+menuItem.subMenuId\" data-toggle=\"collapse\" aria-expanded=\"false\"\r\n                [ngClass]=\"languageService.getCurrentLanguage()=='en'?'nav-link dropdown-toggle':'nav-link dropdown-toggle-ar'\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p class=\"sideTxt\">{{menuItem.title  | translate}}</p>\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" [id]=\"menuItem.subMenuId\">\r\n                <li *ngFor=\"let subItem of menuItem.children\" routerLinkActive=\"active\">\r\n                    <a class=\"{{subItem.class}}  nav-link\" [routerLink]=\"[subItem.path]\">\r\n                        <i class=\"material-icons\">{{subItem.icon}}</i>\r\n                        <p class=\"sideTxt \">{{subItem.title  | translate}}</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        </div>\r\n\r\n\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "aT9D":
/*!*********************************************************!*\
  !*** ./src/shared/animations/scale-in-out.animation.ts ***!
  \*********************************************************/
/*! exports provided: scaleInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleInOutAnimation", function() { return scaleInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const scaleInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0)',
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1)',
            opacity: 1
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1)',
            opacity: 1
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0)',
            opacity: 0
        }))
    ])
]);


/***/ }),

/***/ "aW8j":
/*!*****************************************************!*\
  !*** ./src/shared/services/dynamic-form.service.ts ***!
  \*****************************************************/
/*! exports provided: DynamicDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataService", function() { return DynamicDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const apiPreLink = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiPreLink;
let DynamicDataService = class DynamicDataService {
    constructor(http) {
        this.http = http;
    }
    getFormSettings(fileName) {
        return this.http.get(apiPreLink + "DynamicData/GetSettings?fileName=" + fileName);
    }
    getListSettings(fileName) {
        return this.http.get(apiPreLink + "DynamicData/GetSettings?fileName=" + fileName);
    }
};
DynamicDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
DynamicDataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], DynamicDataService);



/***/ }),

/***/ "bJKb":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/icon-picker-dialog/icon-picker-dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [dir]=\"languageService.getCurrentLanguage()=='en'?'ltr':'rtl'\" style=\"text-align: start !important;\">\r\n  <h1 mat-dialog-title><b>{{data.title |translate}} </b> </h1>\r\n  <div mat-dialog-content>\r\n    <div class=\"row p-3\">\r\n      <mat-form-field class=\"example-form-field w-100\" appearance=\"outline\">\r\n        <mat-label>{{'searchIcons' |translate}}</mat-label>\r\n        <input matInput #txtVal type=\"text\" autocomplete=\"off\" [(ngModel)]=\"searchValue\"\r\n          [placeholder]=\"'searchIcons' |translate\">\r\n        <button *ngIf=\"searchValue\" matSuffix mat-icon-button (click)=\"clearSearchText()\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row p-3\">\r\n      <div class=\"col-md-2\" *ngFor=\"let icon of icons | filter : searchValue\">\r\n        <mat-card style=\"margin-top: 10px;cursor: pointer;\" matRipple matTooltip=\"{{icon}}\" (click)=\"onPickerSelected(icon)\">\r\n          <mat-icon>{{icon}}</mat-icon>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/admin-layout/admin-layout.component */ "knLi");
/* harmony import */ var _shared_shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared-components/dashboard/dashboard.component */ "4PdW");
/* harmony import */ var _public_order_details_public_order_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-order-details/public-order-details.component */ "ONYr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './../shared/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    },
    {
        path: 'public-order-details/:id',
        component: _public_order_details_public_order_details_component__WEBPACK_IMPORTED_MODULE_6__["PublicOrderDetailsComponent"],
    },
    { path: 'auth', loadChildren: './../auth/auth.module#AuthModule' },
    { path: 'dashboard', component: _shared_shared_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                // preloadingStrategy: PreloadAllModules,
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'corrected',
                anchorScrolling: 'enabled',
                useHash: true
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "cMo6":
/*!*************************************************!*\
  !*** ./src/shared/models/dynamic-list.model.ts ***!
  \*************************************************/
/*! exports provided: DynamicListInput, DynamicListColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicListInput", function() { return DynamicListInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicListColumn", function() { return DynamicListColumn; });
class DynamicListInput {
}
class DynamicListColumn {
    constructor() {
        this.isFile = false;
    }
}


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../../forms-module/forms.module": [
		"IDjR",
		"forms-module-forms-module"
	],
	"./../auth/auth.module": [
		"qQna",
		"auth-auth-module"
	],
	"./../shared/admin-layout/admin-layout.module": [
		"VXTJ"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "dC58":
/*!**********************************************************************************!*\
  !*** ./src/reports-management/reports-generator/reports-generator.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-start {\r\n    -webkit-margin-start: 20% !important;\r\n            margin-inline-start: 20% !important;\r\n}\r\n.padding-end{\r\n    -webkit-padding-end: 50px;\r\n            padding-inline-end: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXBvcnRzLW1hbmFnZW1lbnQvcmVwb3J0cy1nZW5lcmF0b3IvcmVwb3J0cy1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLHlCQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL3JlcG9ydHMtbWFuYWdlbWVudC9yZXBvcnRzLWdlbmVyYXRvci9yZXBvcnRzLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zdGFydCB7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyMCUgIWltcG9ydGFudDtcclxufVxyXG4ucGFkZGluZy1lbmR7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "dQIY":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/available-drivers-dialog/available-drivers-dialog.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [dir]=\"languageService.getCurrentLanguage()=='en'?'ltr':'rtl'\" style=\"text-align: start !important;\">\r\n  <h1 mat-dialog-title><b>{{data.title |translate}} </b> </h1>\r\n  <div mat-dialog-content>\r\n    <div class=\"row p-3\">\r\n      <mat-form-field class=\"w-100\"  appearance=\"outline\">\r\n        <mat-label>{{ 'filterDrivers' | translate }}</mat-label>\r\n        <input autocomplete=\"filterDriversOff\" matInput  [formControl]=\"driversControl\"\r\n          [placeholder]=\"'filterDrivers' | translate\" [matAutocomplete]=\"filterDrivers\">\r\n        <mat-autocomplete autocomplete=\"filterDriversOf2f\" [displayWith]=\"displayFn\" #filterDrivers=\"matAutocomplete\"\r\n          (optionSelected)=\"autoCompleteListSelected($event)\">\r\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n            {{languageService.getCurrentLanguage()=='ar'? (option.viewValueAr |translate) :\r\n            (option.viewValueEn |translate)}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"row p-3\">\r\n      <div class=\"table-responsive\">\r\n        <div class=\"mat-elevation-z8 w-100\">\r\n          <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"fullName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'fullName' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.fullName}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"phoneNumber\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'phoneNumber' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.phoneNumber}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr class=\"data-row hoverable\" (click)=\"onDriverSelected(row.id)\" mat-row\r\n              *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n              <td class=\"mat-cell\" colspan=\"4\">{{'NoDataMatchingTheFilter' | translate}}</td>\r\n            </tr>\r\n          </table>\r\n          <mat-paginator (page)=\"pageChanged($event)\" [length]=\"totalCount\" [pageIndex]=\"pageNumber-1\"\r\n            [pageSize]=\"pageSize\">\r\n          </mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "dSU+":
/*!*****************************************************************************************************!*\
  !*** ./src/shared/shared-components/available-drivers-dialog/available-drivers-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AvailableDriversDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableDriversDialogComponent", function() { return AvailableDriversDialogComponent; });
/* harmony import */ var _raw_loader_available_drivers_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./available-drivers-dialog.component.html */ "dQIY");
/* harmony import */ var _available_drivers_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-drivers-dialog.component.css */ "FTkc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "Jxek");
/* harmony import */ var _shared_enums_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enums/enums */ "B10k");
/* harmony import */ var _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/global-variables/api-config */ "62t3");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let AvailableDriversDialogComponent = class AvailableDriversDialogComponent {
    constructor(dialogRef, data, languageService, baseService, notification, translate, spinner) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
        this.baseService = baseService;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.drivers = [];
        this.driversControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
        });
        this.driverList = [];
        this.displayedColumns = [
            'fullName',
            'phoneNumber'
        ];
    }
    get userRolesEnum() {
        return _shared_enums_enums__WEBPACK_IMPORTED_MODULE_6__["RoleTypes"];
    }
    ngOnInit() {
        this.spinner.show();
        this.getAllDrivers();
    }
    get driverId() {
        return this.filterForm.get('userId');
    }
    getAllDrivers() {
        this.baseService.postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].User, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Actions"].GetActiveDriversList, this.filterForm.value).subscribe(res => {
            this.drivers = res;
            console.log(this.drivers);
            this.filteredOptions = this.driversControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(value => (typeof value === 'string' ? value : (value.viewValueEn || value.viewValueAr))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(name => (name ? this.filterOptions(name, this.drivers) : this.drivers.slice())));
            this.getAvailableDrivers();
        }, error => {
            this.notification.showNotification(error.error, 'Failed');
            this.spinner.hide();
        });
    }
    getAvailableDrivers(pageSize, pageNumber) {
        let request = {
            pageSize: pageSize ? pageSize : this.pageSize,
            pageNumber: pageNumber ? pageNumber : this.pageNumber,
            role: this.userRolesEnum.Driver,
            isActive: true,
            userId: this.driverId.value
        };
        this.baseService.postItem(_shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Controllers"].User, _shared_global_variables_api_config__WEBPACK_IMPORTED_MODULE_7__["Actions"].GetList, request).subscribe(res => {
            this.driverList = res.entities;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.entities);
            this.totalCount = res.totalCount;
            this.spinner.hide();
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
            }
            this.spinner.hide();
        });
    }
    displayFn(selectedOption) {
        return selectedOption && (selectedOption.viewValueEn || selectedOption.viewValueAr) ? (selectedOption.viewValueEn || selectedOption.viewValueAr) : '';
    }
    filterOptions(value, data) {
        const filterValue = value.toLowerCase();
        return data.filter(option => option.viewValueEn.toLowerCase().includes(filterValue) || option.viewValueAr.toLowerCase().includes(filterValue));
    }
    autoCompleteListSelected(event) {
        this.spinner.show();
        const control = this.drivers.find(x => x.value === event.option.value.value);
        this.driverId.setValue(control.value);
        this.getAvailableDrivers(this.pageSize, this.pageNumber);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onDriverSelected(driverId) {
        this.dialogRef.close(driverId);
    }
    pageChanged(page) {
        this.pageSize = page.pageSize;
        this.pageNumber = page.pageIndex + 1;
        this.getAvailableDrivers(page.pageSize, page.pageIndex + 1);
    }
};
AvailableDriversDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] },
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"] }
];
AvailableDriversDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-available-drivers-dialog',
        template: _raw_loader_available_drivers_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_available_drivers_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _shared_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"],
        _shared_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]])
], AvailableDriversDialogComponent);



/***/ }),

/***/ "daKZ":
/*!*******************************************************!*\
  !*** ./src/shared/animations/fade-in-up.animation.ts ***!
  \*******************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "dkcd":
/*!*************************************************************************!*\
  !*** ./src/app/public-order-details/public-order-details.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 300px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljLW9yZGVyLWRldGFpbHMvcHVibGljLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMtb3JkZXItZGV0YWlscy9wdWJsaWMtb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "eBSS":
/*!*****************************************************************!*\
  !*** ./src/shared/shared-components/navbar/navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "LAfq");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "KWsi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "Xy8L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_authorize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/authorize.service */ "TeaW");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let NavbarComponent = class NavbarComponent {
    constructor(location, element, router, authService, languageService) {
        this.element = element;
        this.router = router;
        this.authService = authService;
        this.languageService = languageService;
        this.mobile_menu_visible = 0;
        this.isLoggedIn = false;
        this.location = location;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn();
        if (this.isLoggedIn) {
            this.loggedInName = this.authService.getLoggedInUserName();
            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].concat(..._sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["LOOCKUPS_ROUTES"]).filter(listTitle => listTitle);
            const navbar = this.element.nativeElement;
            this.toggleButton = document.getElementsByClassName('navbar-toggler')[0];
            this.router.events.subscribe((event) => {
                this.sidebarClose();
                var $layer = document.getElementsByClassName('close-layer')[0];
                if ($layer) {
                    $layer.remove();
                    this.mobile_menu_visible = 0;
                }
            });
        }
    }
    changeLanguage(lang) {
        this.languageService.setLanguage(lang);
        /* if(this.router.url.includes('-list'))
        {
            location.reload();
        }     */
    }
    logout() {
        this.authService.logout();
    }
    sidebarOpen() {
    }
    ;
    sidebarClose() {
    }
    ;
    sidebarToggle() {
        $("#mainBar").toggle('slow');
    }
    ;
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _auth_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizeService"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _auth_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizeService"],
        _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]])
], NavbarComponent);



/***/ }),

/***/ "gGMS":
/*!*************************************************************!*\
  !*** ./src/shared/admin-layout/admin-layout.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-panel {\n  margin-left: 0 !important;\n  width: 100% !important;\n}\n\n#mainBar {\n  z-index: 2000;\n}\n\n#togglerSmall {\n  display: none;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n@media only screen and (max-width: 990px) {\n  #mainBar {\n    width: 100% !important;\n    float: left !important;\n    margin: 100px 0 0 0 !important;\n    right: 0 !important;\n  }\n\n  .sidebar {\n    left: -260px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDUTtFQUNJLGFBQUE7QUFFWjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFFSTtJQUNJLHNCQUFBO0lBQ04sc0JBQUE7SUFDRSw4QkFBQTtJQUNFLG1CQUFBO0VBQUo7O0VBR0U7SUFDQSxZQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvc2hhcmVkL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1wYW5lbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgI21haW5CYXJ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4jdG9nZ2xlclNtYWxse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0IDogMjBweDtcclxuICAgIHRvcCA6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuIFxyXG4gICAgI21haW5CYXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMDBweCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDowICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5zaWRlYmFyIHtcclxuICAgIGxlZnQ6LTI2MHB4XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcclxuICAgXHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ "gmcq":
/*!*******************************************!*\
  !*** ./src/auth/authorize.interceptor.ts ***!
  \*******************************************/
/*! exports provided: AuthorizeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function() { return AuthorizeInterceptor; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorize.service */ "TeaW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AuthorizeInterceptor = class AuthorizeInterceptor {
    constructor(authorize, jwtTokenService, languageService) {
        this.authorize = authorize;
        this.jwtTokenService = jwtTokenService;
        this.languageService = languageService;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    addToken(req, token) {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } });
    }
    addAcceptLanguage(req) {
        return req.clone({ setHeaders: { 'Accept-Language': localStorage.getItem('language') ? localStorage.getItem('language') : 'en' } });
    }
    intercept(request, next) {
        if (this.authorize.getJwtToken()) {
            request = this.addToken(request, this.authorize.getJwtToken());
        }
        request = this.addAcceptLanguage(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 401) {
                return this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }
        }));
    }
    handle401Error(req, next) {
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);
            return this.authorize.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((token) => {
                this.isRefreshingToken = false;
                this.tokenSubject.next(token.jwt);
                return next.handle(this.addToken(req, token.jwt));
            }));
        }
        else {
            return this.tokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(token => token != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(jwt => {
                return next.handle(this.addToken(req, jwt));
            }));
        }
    }
    /*
      This method is only here so the example works.
      Do not include in your code, just use 'req' instead of 'this.getNewRequest(req)'.
    */
    logoutUser() {
        // Route to the login page (implementation up to you)
        this.authorize.logout();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("");
    }
};
AuthorizeInterceptor.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizeService"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"] },
    { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
];
AuthorizeInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizeService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"], _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]])
], AuthorizeInterceptor);



/***/ }),

/***/ "hj20":
/*!*************************************************************************************!*\
  !*** ./src/shared/shared-components/dynamic-details/dynamic-details.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border: 0;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  border-radius: 6px;\n  color: #333333;\n  background: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0), 0 3px 1px -2px rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(202, 202, 202, 0.51);\n}\n\n* {\n  overflow: hidden;\n}\n\np {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvZHluYW1pYy1kZXRhaWxzL2R5bmFtaWMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnSEFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2R5bmFtaWMtZGV0YWlscy9keW5hbWljLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDAlKSwgMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMCUpLCAwIDFweCA1cHggMCByZ2IoMjAyIDIwMiAyMDIgLyA1MSUpO1xyXG59XHJcbip7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "hv8g":
/*!********************************************************!*\
  !*** ./src/shared/models/dynamic-form-output.model.ts ***!
  \********************************************************/
/*! exports provided: DynamicFormOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormOutput", function() { return DynamicFormOutput; });
class DynamicFormOutput {
}


/***/ }),

/***/ "inyj":
/*!********************************!*\
  !*** ./src/auth/role.guard.ts ***!
  \********************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorize.service */ "TeaW");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let RoleGuard = class RoleGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route) {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].token);
        // decode the token to get its payload
        if (token) {
            var tokenPayload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
        }
        else {
            this.router.navigate(['/auth/login']);
            return false;
        }
        if (!this.auth.isAuthenticated() ||
            Array.isArray(tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roleClaim])
            ? !(tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roleClaim].find(x => x === expectedRole.find(r => r == x)))
            : tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roleClaim] !== expectedRole.find(r => r == tokenPayload[_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roleClaim])) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }
};
RoleGuard.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RoleGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], RoleGuard);



/***/ }),

/***/ "jf03":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/dynamic-details/dynamic-details.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <!--  <button mat-raised-button class=\"btn btn-primary\" (click)=\"submitAction(action.actionType)\"\r\n        style=\"margin: 1px;\">\r\n        {{'backToList' | translate}}\r\n    </button> -->\r\n</div>\r\n<div class=\"row\">\r\n    <div *ngFor=\"let property of properties\" class=\"col-md-6\">\r\n        <div class=\"p-3 card\" *ngIf=\"property!='bankVerifecationAttachment'\">\r\n            <span style=\"text-align: start;\">\r\n                <p class=\"card-text text-muted\">\r\n                    <b> {{property | translate}} :</b>\r\n                    {{ detailsInput.dataObject[property] || 'unspecified'|translate}}\r\n                </p>\r\n            </span>\r\n        </div>\r\n        <div class=\"p-3 card\" *ngIf=\"property=='bankVerifecationAttachment'\">\r\n            <span style=\"text-align: start;\">\r\n                <p class=\"card-text text-muted\">\r\n                    <b> {{property | translate}} :</b>\r\n                    {{ detailsInput.dataObject[property] || 'unspecified'|translate}}\r\n                </p>\r\n                <button  mat-mini-fab (click)=\"downloadFile(detailsInput.dataObject[property])\"\r\n                class=\"btn btn-primary m-2\" matTooltip=\"{{'downloadFile' |translate}}\" matTooltipPosition=\"above\">\r\n                <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "k9Tn":
/*!*******************************************************************************************!*\
  !*** ./src/shared/shared-components/icon-picker-dialog/icon-picker-dialog.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2ljb24tcGlja2VyLWRpYWxvZy9pY29uLXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "knLi":
/*!***********************************************************!*\
  !*** ./src/shared/admin-layout/admin-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "x6zx");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "gGMS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(location, router, languageService) {
        this.location = location;
        this.router = router;
        this.languageService = languageService;
        this.yScrollStack = [];
    }
    ngOnInit() {
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                jquery__WEBPACK_IMPORTED_MODULE_6__("#mainBar").hide('slow');
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        const window_width = jquery__WEBPACK_IMPORTED_MODULE_6__(window).width();
        let $sidebar = jquery__WEBPACK_IMPORTED_MODULE_6__('.sidebar');
        let $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_6__('body > .navbar-collapse');
        let $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .badge').click(function () {
            let $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_6__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).addClass('active');
            var new_color = 'azure';
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .img-holder').click(function () {
            let $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_6__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_6__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    }
    onResize(event) {
        console.log(event);
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    closeSideBar(target) {
        if (target.id != 'togglerBtn' && target.id != 'togglerIcon') {
            jquery__WEBPACK_IMPORTED_MODULE_6__("#mainBar").hide('slow');
        }
    }
    isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
    runOnRouteChange() {
        /*  if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
           const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
           const ps = new PerfectScrollbar(elemMainPanel);
           ps.update();
         } */
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] }
];
AdminLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]])
], AdminLayoutComponent);



/***/ }),

/***/ "lYQe":
/*!*******************************************************************************!*\
  !*** ./src/shared/shared-components/reports-results/reports-result.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReportsResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsResultModule", function() { return ReportsResultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _reports_result_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports-result.routing */ "NX7I");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let ReportsResultModule = class ReportsResultModule {
};
ReportsResultModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                apiKey: ''
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(_reports_result_routing__WEBPACK_IMPORTED_MODULE_9__["ReportsRoutes"]),
        ],
        declarations: [],
        providers: []
    })
], ReportsResultModule);



/***/ }),

/***/ "m8dM":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  shared works!\r\n</p>\r\n");

/***/ }),

/***/ "mRTq":
/*!*********************************************************!*\
  !*** ./src/shared/models/list-action-clicked-output.ts ***!
  \*********************************************************/
/*! exports provided: ListActionClickedOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListActionClickedOutput", function() { return ListActionClickedOutput; });
class ListActionClickedOutput {
}


/***/ }),

/***/ "oIYx":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/dynamic-list/dynamic-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8 w-100\">\r\n  <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <div *ngFor=\"let col of listInput.columns\">\r\n      <ng-container *ngIf=\"col.columnId!='actions' && !col.isFile\" [matColumnDef]=\"col.columnId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.columnName | translate}} </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row[col.columnName] | translate}}\r\n          <span class=\"color-td\" [style.backgroundColor]=\"row[col.columnName]\"\r\n            *ngIf=\"col.columnName.toLocaleLowerCase().includes('color')\">\r\n          </span>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"col.columnId!='actions'  && col.isFile\" [matColumnDef]=\"col.columnId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.columnName | translate}} </th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n          <img *ngIf=\"row[col.columnName]\" [src]=\"imagesUrl+row[col.columnName]\"\r\n            style=\"width: 45px;height: 45px;object-fit: cover;\">\r\n          <button style=\"flex-grow: 1;\" mat-mini-fab (click)=\"downloadFile(row[col.columnName])\"\r\n            class=\"btn btn-primary m-2\" matTooltip=\"{{'downloadFile' |translate}}\" matTooltipPosition=\"above\">\r\n            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"col.columnId=='actions'\" [matColumnDef]=\"col.columnId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'actions' | translate}} </th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n          <ng-container *ngFor=\"let action of col.actions\">\r\n            <button *ngIf=\"action.actionType==actionTypeEnum.Delete\" mat-mini-fab\r\n              (click)=\"listActionClicked(row.id,actionTypeEnum.Delete)\" class=\"btn btn-danger m-2\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n            <button style=\"flex-grow: 1;\" *ngIf=\"action.actionType==actionTypeEnum.Edit\" mat-mini-fab\r\n              (click)=\"listActionClicked(row.id,actionTypeEnum.Edit)\" class=\"btn btn-primary m-2\">\r\n              <mat-icon>create</mat-icon>\r\n            </button>\r\n            <button style=\"flex-grow: 1;\" *ngIf=\"action.actionType==actionTypeEnum.View\" mat-mini-fab\r\n              (click)=\"listActionClicked(row.id,actionTypeEnum.View)\" class=\"btn btn-primary m-2\">\r\n              <mat-icon>visibility</mat-icon>\r\n            </button>\r\n            <button style=\"flex-grow: 1;\" *ngIf=\"action.actionType==actionTypeEnum.Reactivate\" mat-mini-fab\r\n              (click)=\"listActionClicked(row.id,actionTypeEnum.Reactivate)\" class=\"btn btn-primary m-2\">\r\n              <mat-icon>restore</mat-icon>\r\n            </button>\r\n          </ng-container>\r\n        </td>\r\n      </ng-container>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- actions Column -->\r\n\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr class=\"data-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n    <!-- Row shown when there is no matching data. -->\r\n    <tr class=\"mat-row\" *matNoDataRow>\r\n      <td class=\"mat-cell\" colspan=\"4\">{{'NoMatch' | translate }}</td>\r\n    </tr>\r\n  </table>\r\n  <mat-paginator (page)=\"pageChanged($event)\" [length]=\"totalCount\" [pageIndex]=\"pageNumber-1\" [pageSize]=\"pageSize\">\r\n\r\n  </mat-paginator>\r\n</div>");

/***/ }),

/***/ "qj6P":
/*!******************************************************************!*\
  !*** ./src/shared/shared-components/footer/footer.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "rS+t":
/*!************************************************************************************!*\
  !*** ./src/shared/shared-components/add-note-dialog/add-note-dialog.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable :hover {\r\n    cursor: pointer;\r\n    background-color:rgb(212, 208, 208);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvYWRkLW5vdGUtZGlhbG9nL2FkZC1ub3RlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL2FkZC1ub3RlLWRpYWxvZy9hZGQtbm90ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlcmFibGUgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxMiwgMjA4LCAyMDgpO1xyXG59Il19 */");

/***/ }),

/***/ "rYXb":
/*!******************************************!*\
  !*** ./src/shared/shared.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "sMDJ":
/*!****************************************************************************!*\
  !*** ./src/shared/shared-components/order-notes/order-notes.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzL29yZGVyLW5vdGVzL29yZGVyLW5vdGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "sblC":
/*!***************************************************************************************!*\
  !*** ./src/shared/shared-components/area-group-prices/area-group-prices.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AreaGroupPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaGroupPricesComponent", function() { return AreaGroupPricesComponent; });
/* harmony import */ var _raw_loader_area_group_prices_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./area-group-prices.component.html */ "xs6U");
/* harmony import */ var _area_group_prices_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-group-prices.component.css */ "NyVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/base.service */ "SOzR");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "Jxek");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AreaGroupPricesComponent = class AreaGroupPricesComponent {
    constructor(baseService, spinner, translate, notification) {
        this.baseService = baseService;
        this.spinner = spinner;
        this.translate = translate;
        this.notification = notification;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.displayedColumns = [
            'areaGroupNameEn',
            'areaGroupNameAr',
            'price',
            'actions'
        ];
    }
    ngOnInit() {
        this.spinner.show();
        this.getAllPrices(this.pageSize, this.pageNumber);
    }
    getAllPrices(pageSize, pageNumber) {
        let request = {
            pageSize,
            pageNumber,
            userId: this.clientId
        };
        this.baseService.getClienAreaGroupPrices(request).subscribe(res => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.entities);
            this.totalCount = res.totalCount;
            this.spinner.hide();
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
            }
            this.spinner.hide();
        });
    }
    pageChanged(page) {
        this.pageSize = page.pageSize;
        this.pageNumber = page.pageIndex + 1;
        this.getAllPrices(page.pageSize, page.pageIndex + 1);
    }
    updatePrice(price) {
        this.baseService.updateAreaGroupClientPrices(price).subscribe(res => {
            this.spinner.hide();
            this.notification.showOriginalNotification(res, 'success');
        }, error => {
            if (error.status === 400) {
                this.notification.showNotification(error.error, 'danger');
            }
            else {
                this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
            }
            this.spinner.hide();
        });
    }
};
AreaGroupPricesComponent.ctorParameters = () => [
    { type: _shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
AreaGroupPricesComponent.propDecorators = {
    clientId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AreaGroupPricesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-area-group-prices',
        template: _raw_loader_area_group_prices_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_area_group_prices_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
], AreaGroupPricesComponent);



/***/ }),

/***/ "vb6a":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/user-roles/user-roles.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-5\">\r\n    <div class=\"col-md-8\">\r\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>{{ 'roles' | translate }}</mat-label>\r\n            <mat-select [(ngModel)]=\"roleId\" [placeholder]=\"'chooseRole' | translate\">\r\n                <mat-option *ngFor=\"let option of roles\" [value]=\"option.value\">\r\n                    {{languageService.getCurrentLanguage()=='ar'? (option.viewValueAr |translate) :\r\n                    (option.viewValueEn |translate)}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn btn-primary btn-start\"\r\n        [disabled]=\"!roleId\"\r\n        (click)=\"addUserRole()\" style=\"margin: 1px;\">\r\n        {{'Submit' | translate}}\r\n    </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"table-responsive\">\r\n    <div class=\"mat-elevation-z8 w-100\">\r\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"roleName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'roleName' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.roleName | translate}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"roleId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'roleId' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.roleId}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Action Column -->\r\n            <ng-container matColumnDef=\"actions\">\r\n                <th *matHeaderCellDef mat-header-cell mat-sort-header>{{'actions' | translate}}</th>\r\n                <td *matCellDef=\"let row\" class=\"w-10 text-secondary\" mat-cell>\r\n                    <button (click)=\"openDeleteDialog(row.roleId)\" mat-mini-fab class=\"btn btn-danger\" type=\"button\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- actions Column -->\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr class=\"data-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n                <td class=\"mat-cell\" colspan=\"4\">{{'NoDataMatchingTheFilter' | translate}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "wd4G":
/*!********************************************************************************************************!*\
  !*** ./src/shared/shared-components/add-end-user-dialog/add-end-user-dialog.component.ts.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddEndUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEndUserDialogComponent", function() { return AddEndUserDialogComponent; });
/* harmony import */ var _raw_loader_add_end_user_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-end-user-dialog.component.html */ "wi6T");
/* harmony import */ var _add_end_user_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-end-user-dialog.component.css */ "za0d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _global_variables_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-variables/api-config */ "62t3");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/base.service */ "SOzR");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/language.service */ "I7yr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AddEndUserDialogComponent = class AddEndUserDialogComponent {
    constructor(dialogRef, data, languageService, baseService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
        this.baseService = baseService;
        this.isLoading = true;
    }
    ngOnInit() {
        console.log(this.data);
        this.dialogType = this.data.dialogType;
        let request = {
            role: 3,
            pageSize: 9999,
            pageNumber: 1
        };
        let request2 = {
            role: 2,
            pageSize: 9999,
            pageNumber: 1
        };
        this.baseService.postItem(_global_variables_api_config__WEBPACK_IMPORTED_MODULE_4__["Controllers"].User, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_4__["Actions"].GetList, request).subscribe(res => {
            this.merchants = res.entities;
        });
        this.baseService.postItem(_global_variables_api_config__WEBPACK_IMPORTED_MODULE_4__["Controllers"].User, _global_variables_api_config__WEBPACK_IMPORTED_MODULE_4__["Actions"].GetList, request2).subscribe(res => {
            this.drivers = res.entities;
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onDriverSelected() {
        if (this.dialogType == 1) {
            this.dialogRef.close(this.endUserPhoneNumber);
        }
        if (this.dialogType == 2) {
            this.dialogRef.close(this.clientId);
        }
        if (this.dialogType == 3) {
            this.dialogRef.close(this.driverId);
        }
    }
};
AddEndUserDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] }
];
AddEndUserDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-end-user-dialog',
        template: _raw_loader_add_end_user_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_end_user_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
        _services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]])
], AddEndUserDialogComponent);



/***/ }),

/***/ "wi6T":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/add-end-user-dialog/add-end-user-dialog.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #myForm=\"ngForm\" autocomplete=\"alkayanform\" id=\"alkayanformId\">\r\n\r\n\r\n<div [dir]=\"languageService.getCurrentLanguage()=='en'?'ltr':'rtl'\" style=\"text-align: start !important;\">\r\n  <h1 mat-dialog-title><b>{{data.title}} </b> </h1>\r\n  <div mat-dialog-content>\r\n    <div class=\"card-body\">\r\n      <mat-form-field *ngIf=\"dialogType==1\" class=\"example-full-width\"\r\n                appearance=\"outline\">\r\n                <mat-label>End User Phone Number</mat-label>\r\n                <input  matInput type=\"text\" [(ngModel)]=\"endUserPhoneNumber\" [ngModelOptions]=\"{standalone: true}\"\r\n                  >\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"dialogType==2\" class=\"example-full-width\"\r\n            appearance=\"outline\">\r\n            <mat-label>Merchant Phone Number</mat-label>\r\n            <mat-select [(ngModel)]=\"clientId\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-option *ngFor=\"let option of merchants\" [value]=\"option.id\">\r\n                    {{option.phoneNumber}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>  \r\n        <mat-form-field *ngIf=\"dialogType==3\" class=\"example-full-width\"\r\n            appearance=\"outline\">\r\n            <mat-label>Driver Phone Number</mat-label>\r\n            <mat-select [(ngModel)]=\"driverId\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-option *ngFor=\"let option of drivers\" [value]=\"option.id\">\r\n                    {{option.phoneNumber}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n</form>\r\n<div mat-dialog-actions [ngClass]=\"languageService.getCurrentLanguage()=='en'?'float-right':'float-left'\">\r\n  <button mat-raised-button class=\"btn btn-primary\" cdkFocusInitial (click)=\"onDriverSelected()\">Submit</button>\r\n  <button mat-raised-button class=\"btn btn-warn\" (click)=\"onNoClick()\">Close</button>\r\n</div>");

/***/ }),

/***/ "x6zx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/admin-layout/admin-layout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div id=\"mainBar\" [ngClass]=\"languageService.getCurrentLanguage()=='en'?'sidebar':'sidebar-ar'\" data-color=\"danger\"\r\n        data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar id=\"appBar\"></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n\r\n    <div id=\"main-panel\" (click)=\"closeSideBar($event.target)\" [ngClass]=\"languageService.getCurrentLanguage()=='en'?'main-panel':'main-panel-ar'\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n  \r\n</div>\r\n<!-- Buy-Modal-angular -->\r\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body text-center\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                        aria-hidden=\"true\">&times;</span></button>\r\n                <h4 class=\"margin-top\">\r\n                    Free Version\r\n                </h4>\r\n                <div class=\"separator\"></div>\r\n               <!--  <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                    <div class=\"wrapper-card\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                        </div>\r\n                        Html5\r\n                        <div class=\"separator\"></div>\r\n                        <div class=\"product-type\">\r\n                            FREE\r\n                        </div>\r\n                    </div>\r\n                </a> -->\r\n               <!--  <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\"\r\n                    target=\"_blank\">\r\n                    <div class=\"wrapper-card\">\r\n                        <div class=\"image-container image-angular-cli\">\r\n                            <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                        </div>\r\n                        Angular\r\n                        <div class=\"separator\"></div>\r\n                        <div class=\"product-type\">\r\n                            FREE\r\n                        </div>\r\n                    </div>\r\n                </a> -->\r\n                <h4>\r\n                    PRO Version\r\n                </h4>\r\n                <div class=\"separator\"></div>\r\n               <!--  <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\"\r\n                    target=\"_blank\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"price\">\r\n                        from\r\n                        <span>\r\n                            49\r\n                            <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                </a> -->\r\n                <!-- <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\"\r\n                    target=\"_blank\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"price\">\r\n                        from\r\n                        <span>\r\n                            59\r\n                            <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                </a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "xs6U":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/area-group-prices/area-group-prices.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\r\n    <div class=\"mat-elevation-z8 w-100\">\r\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"areaGroupNameEn\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'areaGroupNameEn' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.areaGroupNameEn}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"areaGroupNameAr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'areaGroupNameAr' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.areaGroupNameAr}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"price\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'price' | translate}} </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <input [(ngModel)]=\"row.price\" min=\"0\" type=\"number\" matInput>\r\n                    </mat-form-field>\r\n                </td>\r\n            </ng-container>\r\n            <!-- Action Column -->\r\n            <ng-container matColumnDef=\"actions\">\r\n                <th *matHeaderCellDef mat-header-cell mat-sort-header>{{'actions' | translate}}</th>\r\n                <td *matCellDef=\"let row\" class=\"w-10 text-secondary\" mat-cell>\r\n                    <button (click)=\"updatePrice(row)\" mat-raised-button class=\"btn btn-primary\" type=\"button\">\r\n                        {{'saveChanges' |translate}}\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- actions Column -->\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr class=\"data-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n                <td class=\"mat-cell\" colspan=\"4\">{{'NoDataMatchingTheFilter' | translate}}</td>\r\n            </tr>\r\n        </table>\r\n        <mat-paginator (page)=\"pageChanged($event)\" [length]=\"totalCount\" [pageIndex]=\"pageNumber-1\"\r\n            [pageSize]=\"pageSize\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "za0d":
/*!********************************************************************************************!*\
  !*** ./src/shared/shared-components/add-end-user-dialog/add-end-user-dialog.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable :hover {\r\n    cursor: pointer;\r\n    background-color:rgb(212, 208, 208);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWVuZC11c2VyLWRpYWxvZy9hZGQtZW5kLXVzZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWVuZC11c2VyLWRpYWxvZy9hZGQtZW5kLXVzZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJhYmxlIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTIsIDIwOCwgMjA4KTtcclxufSJdfQ== */");

/***/ }),

/***/ "ztOD":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/shared-components/yes-no-dialog/yes-no-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [dir]=\"languageService.getCurrentLanguage()=='en'?'ltr':'rtl'\" style=\"text-align: start !important;\">\r\n  <h1 mat-dialog-title><b>{{data.title |translate}} </b> </h1>\r\n  <div mat-dialog-content>\r\n    <p>{{data.content | translate}}</p>\r\n  </div>\r\n  <hr />\r\n  <div mat-dialog-actions [ngClass]=\"languageService.getCurrentLanguage()=='en'?'float-right':'float-left'\">\r\n    <button mat-raised-button class=\"btn btn-primary\" cdkFocusInitial [mat-dialog-close]=\"true\">{{'yes' | translate}}</button>\r\n    <button mat-raised-button class=\"btn btn-warn\" [mat-dialog-close]=\"false\">{{'no' | translate}}</button>\r\n  </div>\r\n</div>");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map