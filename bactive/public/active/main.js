(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _matches_matches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matches/matches.component */ "./src/app/matches/matches.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"] },
    { path: 'matches', component: _matches_matches_component__WEBPACK_IMPORTED_MODULE_3__["MatchesComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    //{ path: '', component: ProfileComponent },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], runGuardsAndResolvers: 'paramsChange' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: rgba(195, 231, 245);\r\n}\r\n\r\n.well {\r\n    background: rgba(225, 243, 250);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSxnQ0FBZ0M7Q0FDbkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTUsIDIzMSwgMjQ1KTtcclxufVxyXG5cclxuLndlbGwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDI0MywgMjUwKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bactive-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _matches_matches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matches/matches.component */ "./src/app/matches/matches.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _matches_matches_component__WEBPACK_IMPORTED_MODULE_7__["MatchesComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\r\n    font-family: \"Special Elite\";\r\n}\r\n\r\nbutton {\r\n\tfont-family: \"Special Elite\";\r\n\tmargin: 5px;\r\n}\r\n\r\n.well {\r\n    background: rgba(225, 243, 250);\r\n}\r\n\r\n.activityLevel {\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.availability-th {\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #777a7f;\r\n\t/*width: 70px;*/\r\n\tpadding: 25px;\r\n}\r\n\r\n.availability-time-th {\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #777a7f;\r\n\tpadding: 5px;\r\n\twidth: 12%;\r\n}\r\n\r\n#notFree {\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n.schedule {\r\n\tborder-style: solid;\r\n\tborder-width: 0px;\r\n\tborder-color: black;\r\n\theight: 500px;\r\n\twidth: 100%;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.star-rating {\r\n\tdisplay: inline;\r\n}\r\n\r\nh4, h6 {\r\n\tdisplay: inline;\r\n}\r\n\r\n.availabilityCell {\r\n\tpadding:0px;\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #777a7f;\r\n}\r\n\r\nlabel {\r\n\tdisplay: block;\r\n\theight: 100%;\r\n\tborder-width: 0px;\r\n\tborder-style: solid;\r\n\tborder-color: black;\r\n\tmargin: auto;\r\n}\r\n\r\nlabel:hover {\r\n\tbackground-color: gray;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n\topacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7Q0FDaEM7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsWUFBWTtDQUNaOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiOztBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0MsV0FBVztDQUNYIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3BlY2lhbCBFbGl0ZVwiO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGZvbnQtZmFtaWx5OiBcIlNwZWNpYWwgRWxpdGVcIjtcclxuXHRtYXJnaW46IDVweDtcclxufVxyXG5cclxuLndlbGwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDI0MywgMjUwKTtcclxufVxyXG5cclxuLmFjdGl2aXR5TGV2ZWwge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hdmFpbGFiaWxpdHktdGgge1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNzc3YTdmO1xyXG5cdC8qd2lkdGg6IDcwcHg7Ki9cclxuXHRwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4uYXZhaWxhYmlsaXR5LXRpbWUtdGgge1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNzc3YTdmO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHR3aWR0aDogMTIlO1xyXG59XHJcblxyXG4jbm90RnJlZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNjaGVkdWxlIHtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdGJvcmRlci1jb2xvcjogYmxhY2s7XHJcblx0aGVpZ2h0OiA1MDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5oNCwgaDYge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmF2YWlsYWJpbGl0eUNlbGwge1xyXG5cdHBhZGRpbmc6MHB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNzc3YTdmO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmxhYmVsOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <title>B-Active - Edit Profile</title>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n\r\n<div class=\"container-fluid well\">\r\n\r\n<div *ngIf=\"user\">\r\n    <h1>Edit Profile</h1>\r\n    <button class=\"btn btn-default\" (click)=\"updateProfile()\"> Save </button>\r\n    <button class=\"btn btn-default\" (click)=\"updateProfileAndReturn()\"> Return to Profile </button>\r\n</div>\r\n\r\n<div *ngIf=\"user\">\r\n<h3>Name:\r\n    <span>\r\n        <input type=\"text\" class=\"form-control nameBox\" [(ngModel)]=\"user.name\" name=\"name\">\r\n    </span>\r\n</h3>\r\n<h3>Email: {{ user.email }} </h3>\r\n</div>\r\n\r\n<div class=\"user-rating\" *ngIf=\"user\">\r\n    <h4>Rating: </h4>\r\n    <div class=\"star-rating\" *ngFor=\"let rating of calculateRating()\">\r\n        <span class=\"fa fa-star\"></span>\r\n    </div>\r\n    <h6> ({{user.rating.numRatings}})</h6>\r\n</div>\r\n\r\n</div>\r\n<div class=\"container-fluid well\">\r\n\r\n<h2>Activities</h2>\r\n<div *ngIf=\"user\">\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th class=\"activityLevel\">Activity</th>\r\n                <th class=\"activityLevel\">Skill Level</th>\r\n                <th class=\"activityLevel\">Interest Level</th>\r\n            </tr>\r\n        </thead>\r\n            <tr *ngFor=\"let activity of user.activities; let i = index\">\r\n                <td class=\"activityLevel\"><select [(ngModel)]=\"user.activities[i].name\">\r\n                \t<option *ngFor=\"let x1 of possibleActivities\" [selected]=\"user.activities[i].name == x1\">\r\n                \t{{x1}}</option>\r\n                </select></td>\r\n                <td class=\"activityLevel\"><select [(ngModel)]=\"activity.skill\">\r\n                \t<option *ngFor=\"let x of ratingScale\" [selected]=\"activity.skill == x\">\r\n                \t{{x}}</option>\r\n                </select></td>\r\n                <td class=\"activityLevel\"><select [(ngModel)]=\"activity.interest\">\r\n                \t<option *ngFor=\"let x of ratingScale\" [selected]=\"activity.interest == x\">\r\n                \t{{x}}</option>\r\n                </select></td>\r\n                <td class=\"activityLevel\"><button class=\"btn btn-default\" (click)=\"deleteActivity(activity.name)\"> Delete </button></td>\r\n            </tr>\r\n    </table>\r\n\r\n    <button class=\"btn btn-default\" (click)=\"addActivity()\"> Add Activity </button>\r\n</div>\r\n\r\n</div>\r\n<div class=\"container-fluid well\">\r\n\r\n<h2>Availability</h2>\r\n<div class=\"schedule\" *ngIf=\"user\">\r\n    <table style=\"border: 1px solid #777a7f; border-spacing: 0px; width:100%;\" cellspacing=\"0\" >\r\n        <thead>\r\n            <tr bgcolor=\"#5e99d1\">\r\n                <th class=\"availability-th\"></th>\r\n                <th class=\"availability-th\">Monday</th>\r\n                <th class=\"availability-th\">Tuesday</th>\r\n                <th class=\"availability-th\">Wednesday</th>\r\n                <th class=\"availability-th\">Thursday</th>\r\n                <th class=\"availability-th\">Friday</th>\r\n                <th class=\"availability-th\">Saturday</th>\r\n                <th class=\"availability-th\">Sunday</th>\r\n            </tr>\r\n        </thead>\r\n        <tr *ngFor=\"let time of user.availability[0]; let i = index;\">\r\n            <th class=\"availability-time-th\" bgcolor=\"#5e99d1\">\r\n                {{ this.tableHeadings[i] }}\r\n            </th>\r\n            <ng-container *ngFor=\"let day of user.availability; let j = index;\">\r\n                <td class=\"availabilityCell\">\r\n                    <div *ngIf=\"user.availability[j][i]\">\r\n                        <label><input type=\"checkbox\" checked (click)=\"handleCheckClick(j, i)\"></label>\r\n                    </div>\r\n                    <div *ngIf=\"!user.availability[j][i]\">\r\n                        <label><input type=\"checkbox\" (click)=\"handleCheckClick(j, i)\" ></label>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n        </tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
    * Parses a JSON Web Token.
    * Source: CS144 with Professor Cho, Project 4 JWT code
    * @param {Object} token A JSON Web Token.
    * @return {String} The parsed JSON Web Token, as a string.
*/
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
var EditComponent = /** @class */ (function () {
    /**
        * Creates an EditComponent.
        * @param {UserService} userService The userService.
        * @param {Router} router The router.
    */
    function EditComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.tableHeadings = [];
        this.ratingScale = [1, 2, 3, 4, 5];
        this.possibleActivities = [
            "Lifting",
            "Running",
            "Swimming",
            "Basketball",
            "Soccer",
            "Tennis",
            "Volleyball",
            "Climbing",
            "Squash",
            "Frisbee"
        ];
        this.userId = parseJWT(document.cookie).userId;
    }
    /**
        * Function which runs at EditComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * @return {Void}
    */
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fillTableHeadings();
        this.user = this.userService.getUser(this.userId);
        if (this.user == null) {
            this.userService.fetchUser()
                .subscribe(function (user) {
                _this.user = _this.userService.getUser(_this.userId);
            });
        }
    };
    /**
        * Updates the name, activities, and availabilities.
        * @return {Void}
    */
    EditComponent.prototype.updateProfile = function () {
        this.userService.changeName(this.user.userId, this.user.name);
        this.userService.updateActivities(this.user.userId, this.user.activities);
        this.userService.updateAvailability(this.user.userId, this.user.availability);
    };
    /**
        * Updates the name, activities, and availabilities, and then
        * navigates back to the user's profile.
        * @return {Void}
    */
    EditComponent.prototype.updateProfileAndReturn = function () {
        this.updateProfile();
        this.router.navigate(["/profile/" + this.userId]);
    };
    /**
        * Deletes activity from this user.
        * @param {String} name The name of the activity to be deleted.
        * @return {Void}
    */
    EditComponent.prototype.deleteActivity = function (name) {
        var index = -1;
        var newActivities = [];
        for (var i = 0; i < this.user.activities.length; i++) {
            if (this.user.activities[i].name != name) {
                newActivities.push(this.user.activities[i]);
            }
        }
        this.user.activities = newActivities;
        console.log('deleting: ' + name);
        console.log(this.user.activities);
    };
    /**
        * Adds a default activity to the user's activities.
        * @return {Void}
    */
    EditComponent.prototype.addActivity = function () {
        // push default settings
        this.user.activities.push({ "name": "Lifting", "skill": 1, "interest": 1 });
    };
    /**
        * Populates the availability table with half-hour times.
        * @return {Void}
    */
    EditComponent.prototype.fillTableHeadings = function () {
        var hour = 0;
        var minutes = "00";
        for (var i = 0; i < 48; i++) {
            this.tableHeadings.push(hour + ":" + minutes);
            hour = (i % 2 == 1) ? hour + 1 : hour;
            minutes = (minutes == "00") ? "30" : "00";
        }
    };
    /**
        * Calculates the rating of the user.
        * @return {Array} An array of numbers, of length 5, for which the appropriate number of entries are full.
    */
    EditComponent.prototype.calculateRating = function () {
        var ratings = this.user.rating;
        if (ratings.numRatings === 0) {
            return 0;
        }
        var avg = Math.ceil(ratings.scoreSum / ratings.numRatings);
        return Array(avg).fill(5);
    };
    /**
        * Handles checking if a click has happened in the availability table.
        * @return {Void}
    */
    EditComponent.prototype.handleCheckClick = function (row, col) {
        this.user.availability[row][col] = !this.user.availability[row][col];
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        })
        /**
            * A class representing the component which allows the user to edit her profile.
            * @class EditComponent
        */
        ,
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\r\n    font-family: 'Special Elite';\r\n}\r\n\r\n.col-sm-6 {\r\n    text-align: center;\r\n}\r\n\r\n.col-sm-12 {\r\n    text-align: center;\r\n}\r\n\r\ntable.center {\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n}\r\n\r\n.well {\r\n    background: rgba(225, 243, 250);\r\n}\r\n\r\n.table {\r\n    background: white;\r\n    border-width: 2px;\r\n    border-radius: 5px;\r\n    border-color: rgba(195, 230, 243);\r\n    font-family: 'Special Elite';\r\n}\r\n\r\ntd {\r\n    height: 50px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    border-width: 0px;\r\n}\r\n\r\n.darkBox {\r\n\tbackground-color: #000000;\r\n\topacity: 0.3;\r\n\twidth:300px;\r\n\theight: 200px;\r\n\tposition: absolute;\r\n}\r\n\r\n.eventInfo {\r\n\tcolor: white;\r\n\tposition: absolute;\r\n\tpadding-top: 100px;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.eventBox {\r\n\tpadding: 10px;\r\n\tdisplay: inline-block;\r\n    font-family: 'Special Elite';\r\n}\r\n\r\n.eventBoxes {\r\n\tborder-style: solid;\r\n\tborder-width: 0px;\r\n\tborder-color: black;\r\n\twidth: 100%;\r\n\theight: 220px;\r\n\toverflow: auto;\r\n\tpadding: ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFFRDtJQUNJLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDckI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsY0FBYztDQUNkLHNCQUFzQjtJQUNuQiw2QkFBNkI7Q0FDaEM7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7Q0FDZixVQUFVO0NBQ1YiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTcGVjaWFsIEVsaXRlJztcclxufVxyXG5cclxuLmNvbC1zbS02IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1zbS0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG5cclxuLndlbGwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDI0MywgMjUwKTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTk1LCAyMzAsIDI0Myk7XHJcbiAgICBmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi5kYXJrQm94IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdG9wYWNpdHk6IDAuMztcclxuXHR3aWR0aDozMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uZXZlbnRJbmZvIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBhZGRpbmctdG9wOiAxMDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5ldmVudEJveCB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnO1xyXG59XHJcblxyXG4uZXZlbnRCb3hlcyB7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRib3JkZXItY29sb3I6IGJsYWNrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMjIwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0cGFkZGluZzogO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <title>B-Active - Events</title>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<div class=\"container-fluid well\">\r\n    <h1>Confirmed Events</h1>\r\n    <div *ngIf=\"confirmedEvents\">\r\n        <div *ngFor=\"let event of confirmedEvents\">\r\n            <div *ngIf=\"!isPastEvent(event.endTime)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"eventBox\">\r\n                        <div class=\"darkBox\" width=\"300\" height=\"200\"></div>\r\n                        <div class=\"eventInfo\">\r\n                            <div style=\"font-size: 18pt;\">{{ event.activity }}</div>\r\n                        </div>\r\n                        <img src={{getActivityUrl(event.activity)}} width=\"300\" height=\"200\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <table class=\"table table-bordered\">\r\n                            <tr>\r\n                                <td>Participants</td>\r\n                                <td><span *ngFor=\"let id of event.invitedIds\">{{ getUserName(id) }}<br /></span></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Start Time</td>\r\n                                <td>{{ event.startTime | date: 'd MMM yyyy' }}, {{ event.startTime | date: 'hh:mm a' }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>End Time</td>\r\n                                <td>{{ event.endTime | date: 'd MMM yyyy' }}, {{ event.endTime | date: 'hh:mm a' }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Location</td>\r\n                                <td>{{ event.location }}</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"container-fluid well\">\r\n    <h1>Past Events</h1>\r\n    <div *ngIf=\"confirmedEvents\">\r\n        <div *ngFor=\"let event of confirmedEvents; let i = index\">\r\n            <div *ngIf=\"isPastEvent(event.endTime)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"eventBox\">\r\n                        <div class=\"darkBox\" width=\"300\" height=\"200\"></div>\r\n                        <div class=\"eventInfo\">\r\n                            <div style=\"font-size: 18pt;\">{{ event.activity }}</div>\r\n                        </div>\r\n                        <img src={{getActivityUrl(event.activity)}} width=\"300\" height=\"200\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <table class=\"table table-bordered\">\r\n                            <tr>\r\n                                <td>Participants</td>\r\n                                <td><span *ngFor=\"let id of event.invitedIds\">{{ getUserName(id) }}<br /></span></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Start Time</td>\r\n                                <td>{{ event.startTime | date: 'd MMM yyyy' }}, {{ event.startTime | date: 'hh:mm a' }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>End Time</td>\r\n                                <td>{{ event.endTime | date: 'd MMM yyyy' }}, {{ event.endTime | date: 'hh:mm a' }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Location</td>\r\n                                <td>{{ event.location }}</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"notRated(event.eventId)\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h3>How was your experience?</h3>\r\n                            <p>Rate your fellow B-Active users for this event.</p>\r\n                            <table class=\"center table table-bordered\">\r\n                                <tr *ngFor=\"let otherId of event.invitedIds; let j = index\">\r\n                                    <td *ngIf=\"otherId == otherParticipant(event.invitedIds)\">\r\n                                        {{ getUserName(otherParticipant(event.invitedIds)) }}\r\n                                    </td>\r\n                                    <td *ngIf=\"otherId == otherParticipant(event.invitedIds)\"><select [(ngModel)]=\"ratings[event.eventId.toString() + ' ' + otherId.toString()]\">\r\n                                        <option *ngFor=\"let x of ratingScale\" [selected]=\"ratings[event.eventId.toString() + ' ' + otherId.toString()] == x\">\r\n                                        {{x}}</option>\r\n                                    </select></td>\r\n                                    <td *ngIf=\"otherId == otherParticipant(event.invitedIds)\"><button class=\"btn btn-default\" (click)=\"rateUser(otherId, event.eventId, ratings[event.eventId.toString() + ' ' + otherId.toString()])\"> Rate User </button></td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
var EventsComponent = /** @class */ (function () {
    /**
        * Creates a UserService.
        * @param {UserService} userService The userService.
    */
    function EventsComponent(userService) {
        this.userService = userService;
        this.imageMap = {};
        this.ratingScale = [1, 2, 3, 4, 5];
        this.ratedEvents = [];
        this.ratings = {}; // First argument is eventId + " " + rateeId. Value stored in that entry is score.
        this.userId = parseJWT(document.cookie).userId;
        this.imageMap["Lifting"] = "https://static1.squarespace.com/static/53de6926e4b06edf127b3ecd/t/56c51cb6555986ef347ae6ba/1455758525694/";
        this.imageMap["Running"] = "http://lisabaylis.com/wp/wp-content/uploads/2017/07/running.jpg";
        this.imageMap["Swimming"] = "https://cdn.swimswam.com/wp-content/uploads/2018/02/stock-by-Mike-Lewis-LDM_1946.jpg";
        this.imageMap["Basketball"] = "https://ak5.picdn.net/shutterstock/videos/18113245/thumb/1.jpg";
        this.imageMap["Soccer"] = "http://www.bagnet.org/storage/05/17/23/16/729_486_5936517d8d288.jpg";
        this.imageMap["Tennis"] = "https://tennisracquetcentral.com/wp-content/uploads/2018/02/Tennis-Balls.jpg";
        this.imageMap["Volleyball"] = "https://www.longbeachny.gov/vertical/Sites/%7BC3C1054A-3D3A-41B3-8896-814D00B86D2A%7D/uploads/bigstock-Beach-Volleyball-Silhouette-81799844_(1).jpg";
        this.imageMap["Climbing"] = "http://yourboulder.com/wp-content/uploads/2013/02/adult-courses1-e1360807803429.jpg";
        this.imageMap["Squash"] = "https://data.englandsquash.com/files?fileName=0600776f-047c-4853-92f2-bb6a87601341.jpg";
        this.imageMap["Frisbee"] = "https://childlikefaith.com/wp-content/uploads/2015/10/ultimate-frisbee-catch.jpg";
    }
    /**
        * Function which runs at MatchesComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * Do the same for confirmed events.
        * @return {Void}
    */
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser(this.userId);
        if (this.user == null) {
            this.userService.fetchUser()
                .subscribe(function (user) {
                _this.user = _this.userService.getUser(_this.userId);
            });
        }
        this.confirmedEvents = this.userService.getConfirmedEvents();
        if (this.confirmedEvents == null) {
            this.userService.fetchConfirmedEvents(this.userId)
                .subscribe(function (confirmedEvents) {
                _this.confirmedEvents = _this.userService.getConfirmedEvents();
            });
        }
    };
    /**
        * Determines if a date is in the past.
        * @param {number} endDate The date of the end of the event.
        * @return {boolean} Whether the date is in the past.
    */
    EventsComponent.prototype.isPastEvent = function (endDate) {
        var current = Date.now();
        return endDate < current;
    };
    /**
        * Gets the URL for the image of the activity.
        * @param {String} name The name of the activity.
        * @return {String} The URL for the image of the activity.
    */
    EventsComponent.prototype.getActivityUrl = function (name) {
        return this.imageMap[name];
    };
    /**
        * Gets the name of the user with id userId.
        * @param {number} userId The ID of the user.
        * @return {String} The name of the user.
    */
    EventsComponent.prototype.getUserName = function (userId) {
        var user;
        user = this.userService.getUser(userId);
        if (user == null) {
            return null;
        }
        return user.name;
    };
    /**
        * Gets the other participant in an event.
        * @param {Array<number>} userId The IDs of the users in the event.
        * @return {number} The ID of the other participant in an event.
    */
    EventsComponent.prototype.otherParticipant = function (invitedIds) {
        if (invitedIds[0] == this.userId) {
            return invitedIds[1];
        }
        return invitedIds[0];
    };
    /**
        * Determines if this event and user have been rated or not.
        * @param {number} eventId The ID of the event.
        * @return {Boolean} True if this event has not been rated for this user.
    */
    EventsComponent.prototype.notRated = function (eventId) {
        if (this.ratedEvents.indexOf(eventId) > -1)
            return false;
        for (var i = 0; i < this.user.events.length; i++) {
            if (this.user.events[i].eventId == eventId) {
                console.log(this.user.events[i].rated.length);
                if (this.user.events[i].rated.length > 0) {
                    console.log(this.user.events[i].rated.length);
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        return true;
    };
    /**
        Allows the user to rate the other user for this event.
        * @param {number} otherId The ID of the user to be rated.
        * @param {number} eventId The ID of the event.
        * @param {number} rating The rating, from 1 to 5.
    */
    EventsComponent.prototype.rateUser = function (otherId, eventId, rating) {
        this.userService.rateUser(this.userId, otherId, eventId, rating);
        this.ratedEvents.push(eventId);
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        })
        /**
            * A class representing the component which shows a user's events.
            * @class EventsComponent
        */
        ,
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches.component.css":
/*!***********************************************!*\
  !*** ./src/app/matches/matches.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\r\n    font-family: 'Special Elite';\r\n}\r\n\r\nbutton {\r\n    font-family: \"Special Elite\";\r\n    margin: 5px;\r\n}\r\n\r\n.well {\r\n    background: rgba(225, 243, 250);\r\n}\r\n\r\n.table {\r\n    background: white;\r\n    border-width: 2px;\r\n    border-radius: 5px;\r\n    border-color: rgba(195, 230, 243);\r\n    font-family: 'Special Elite';\r\n}\r\n\r\nth {\r\n    background: rgba(210, 237, 247);\r\n}\r\n\r\nth, td {\r\n    height: 50px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    border-width: 0px;\r\n}\r\n\r\n/*\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    background: rgba(239, 239, 245);\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n*/\r\n\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtDQUNyQjs7QUFDRDs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRixvQkFBb0IsMEJBQTBCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tYXRjaGVzL21hdGNoZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3BlY2lhbCBFbGl0ZVwiO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi53ZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyNDMsIDI1MCk7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE5NSwgMjMwLCAyNDMpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTcGVjaWFsIEVsaXRlJztcclxufVxyXG5cclxudGgge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTAsIDIzNywgMjQ3KTtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG4vKlxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgMjM5LCAyNDUpO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4qL1xyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuIl19 */"

/***/ }),

/***/ "./src/app/matches/matches.component.html":
/*!************************************************!*\
  !*** ./src/app/matches/matches.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <title>B-Active - Matches</title>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<div class=\"container-fluid well\">\r\n\t<h2>Matched Events</h2>\r\n\t<div class=\"matched\" *ngIf=\"user\">\r\n\t    <table class=\"table table-bordered\">\r\n\t        <thead>\r\n\t            <tr>\r\n\t                <th>Activity</th>\r\n\t                <th>Date</th>\r\n\t                <th>Start Time</th>\r\n\t                <th>End Time</th>\r\n\t                <th>Invited</th>\r\n\t                <th>Location</th>\r\n\t                <th>Accept?</th>\r\n\t            </tr>\r\n\t        </thead>\r\n\t            <tr *ngFor=\"let event of matchedEvents; let i = index\">\r\n\t                <td>{{event.activity}}</td>\r\n\t                <td>{{event.startTime | date: 'd MMM yyyy'}}</td>\r\n\t                <td>{{event.startTime | date: 'hh:mm a'}}</td>\r\n\t                <td>{{event.endTime | date: 'hh:mm a'}}</td>\r\n\t                <td>\r\n\t                \t<a routerLink=\"/profile/{{otherParticipant(event.invitedIds)}}\" class=\"field\">\r\n\t                \t\t{{getUserName(otherParticipant(event.invitedIds))}}\r\n\t                \t</a>\r\n\t                </td>\r\n\t                <td>{{event.location}}</td>\r\n\t                <td>\r\n                        <button class=\"btn btn-default\" (click)=\"acceptEvent(event.eventId, userId); console.log('pushed')\"> Accept! </button>\r\n\t                    <button class=\"btn btn-default\" (click)=\"declineEvent(event.eventId)\"> Decline </button>\r\n                    </td>\r\n\t            </tr>\r\n\t    </table>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container-fluid well\">\r\n\t<h2>Pending Events</h2>\r\n\t<div class=\"matched\" *ngIf=\"user\">\r\n\t    <table class=\"table table-bordered\">\r\n\t        <thead>\r\n\t            <tr>\r\n\t                <th>Activity</th>\r\n\t                <th>Date</th>\r\n\t                <th>Start Time</th>\r\n\t                <th>End Time</th>\r\n\t                <th>Invited</th>\r\n\t                <th>Location</th>\r\n\t                <th>Cancel</th>\r\n\t            </tr>\r\n\t        </thead>\r\n\t            <tr *ngFor=\"let event of pendingEvents; let i = index\">\r\n\t                <td>{{event.activity}}</td>\r\n\t                <td>{{event.startTime | date: 'd MMM yyyy'}}</td>\r\n\t                <td>{{event.startTime | date: 'hh:mm a'}}</td>\r\n\t                <td>{{event.endTime | date: 'hh:mm a'}}</td>\r\n\t                <td>\r\n\t                \t<a routerLink=\"/profile/{{otherParticipant(event.invitedIds)}}\" class=\"field\">\r\n\t                \t\t{{getUserName(otherParticipant(event.invitedIds))}}\r\n\t                \t</a>\r\n\t                </td>\r\n\t                <td>{{event.location}}</td>\r\n\t                <td>\r\n                        <button class=\"btn btn-default\" *ngIf=\"hasNotAccepted(event.eventId)\" (click)=\"acceptEvent(event.eventId, userId)\"> Accept! </button>\r\n\t                    <button class=\"btn btn-default\" (click)=\"declineEvent(event.eventId)\"> Cancel </button>\r\n                    </td>\r\n\t            </tr>\r\n\t    </table>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/matches/matches.component.ts":
/*!**********************************************!*\
  !*** ./src/app/matches/matches.component.ts ***!
  \**********************************************/
/*! exports provided: MatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesComponent", function() { return MatchesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
var MatchesComponent = /** @class */ (function () {
    /**
        * Creates a MatchesComponent.
        * @param {UserService} userService The userService.
    */
    function MatchesComponent(userService) {
        this.userService = userService;
        this.userId = parseJWT(document.cookie).userId;
    }
    /**
        * Function which runs at MatchesComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * Do the same for matched events, pending events, confirmed events.
        * @return {Void}
    */
    MatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser(this.userId);
        if (this.user == null) {
            this.userService.fetchUser()
                .subscribe(function (user) {
                _this.user = _this.userService.getUser(_this.userId);
            });
        }
        this.matchedEvents = this.userService.getMatchedEvents();
        if (this.matchedEvents == null) {
            this.userService.fetchMatchedEvents(this.userId)
                .subscribe(function (matches) {
                _this.matchedEvents = _this.userService.getMatchedEvents();
                console.log(matches);
            });
        }
        this.pendingEvents = this.userService.getPendingEvents();
        if (this.pendingEvents == null) {
            this.userService.fetchPendingEvents(this.userId)
                .subscribe(function (pending) {
                _this.pendingEvents = _this.userService.getPendingEvents();
                console.log(pending);
            });
        }
        this.confirmedEvents = this.userService.getConfirmedEvents();
        if (this.confirmedEvents == null) {
            this.userService.fetchConfirmedEvents(this.userId)
                .subscribe(function (confirmed) {
                _this.confirmedEvents = _this.userService.getConfirmedEvents();
                console.log(confirmed);
            });
        }
    };
    /**
        * Given a pending event, return true if user has not accepted
        * @param {number} eventId The ID of the event.
        * @return {boolean} True if user has not accepted this event.
    */
    MatchesComponent.prototype.hasNotAccepted = function (eventId) {
        for (var i = 0; i < this.pendingEvents.length; i++) {
            if (eventId == this.pendingEvents[i].eventId) {
                if (this.pendingEvents[i].acceptedIds.indexOf(this.userId) > -1) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        return false;
    };
    /**
        * Gets the name of the user with id userId.
        * @param {number} userId The ID of the user.
        * @return {String} The name of the user.
    */
    MatchesComponent.prototype.getUserName = function (userId) {
        var user;
        user = this.userService.getUser(userId);
        if (user == null) {
            return null;
        }
        return user.name;
    };
    /**
        * Gets the other participant in an event.
        * @param {Array<number>} userId The IDs of the users in the event.
        * @return {number} The ID of the other participant in an event.
    */
    MatchesComponent.prototype.otherParticipant = function (invitedIds) {
        if (invitedIds[0] == this.userId) {
            return invitedIds[1];
        }
        return invitedIds[0];
    };
    /**
        * Adds the userId to the accepted array. If all invited have accepted,
        * changes the status to confirmed. Otherwise, sets the status of the event
        * to pending or invited.
        * @param {number} eventId The ID of the event.
        * @param {number} userId The ID of the user.
        * @return {Void}
    */
    MatchesComponent.prototype.acceptEvent = function (eventId, userId) {
        // search through matched
        var found = false;
        for (var i = 0; i < this.matchedEvents.length; i++) {
            if (this.matchedEvents[i].eventId == eventId) {
                found = true;
                console.log(this.matchedEvents[i]);
                var newEvent = this.matchedEvents[i];
                newEvent.acceptedIds.push(userId);
                newEvent.status = "pending";
                //this.pendingEvents.push(newEvent);
                this.userService.updateEvent(newEvent);
                console.log(newEvent);
                this.matchedEvents.splice(i, 1);
                break;
            }
        }
        if (!found) {
            // serach through pending. if accepted, this means moved to confirmed
            for (var i = 0; i < this.pendingEvents.length; i++) {
                if (this.pendingEvents[i].eventId == eventId) {
                    var newEvent = this.pendingEvents[i];
                    newEvent.acceptedIds.push(userId);
                    newEvent.status = "confirmed";
                    this.userService.updateEvent(newEvent);
                    this.pendingEvents.splice(i, 1);
                    break;
                }
            }
        }
        console.log(eventId);
    };
    /**
        * Removes the userId from the accepted array. Sets the status of the event
        * to pending or just matched.
        * @param {number} eventId The ID of the event.
        * @return {Void}
    */
    MatchesComponent.prototype.declineEvent = function (eventId) {
        var found = false;
        for (var i = 0; i < this.matchedEvents.length; i++) {
            if (this.matchedEvents[i].eventId == eventId) {
                found = true;
                this.userService.deleteEvent(eventId);
                this.matchedEvents.splice(i, 1);
                break;
            }
        }
        if (!found) {
            // serach through pending. if accepted, this means moved to confirmed
            for (var i = 0; i < this.pendingEvents.length; i++) {
                if (this.pendingEvents[i].eventId == eventId) {
                    this.userService.deleteEvent(eventId);
                    this.pendingEvents.splice(i, 1);
                    break;
                }
            }
        }
    };
    MatchesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matches',
            template: __webpack_require__(/*! ./matches.component.html */ "./src/app/matches/matches.component.html"),
            styles: [__webpack_require__(/*! ./matches.component.css */ "./src/app/matches/matches.component.css")]
        })
        /**
            * A class representing the component which allows the user to see her matches.
            * @class MatchesComponent
        */
        ,
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], MatchesComponent);
    return MatchesComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" *ngIf=\"user\" routerLink=\"/profile/{{user.userId}}\">B-Active: {{ user.name }}</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a (click)=\"handleProfile()\">Profile</a></li>\r\n      <li><a (click)=\"handleEvents()\">Events</a></li>\r\n      <li><a (click)=\"handleMatches()\">Matches</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a *ngIf=\"user\" routerLink=\"/profile/{{user.userId}}\">Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
var NavbarComponent = /** @class */ (function () {
    /**
        * Creates a NavbarComponent.
        * @param {UserService} userService The userService.
        * @param {Router} router The router.
    */
    function NavbarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userId = parseJWT(document.cookie).userId;
    }
    /**
        * Function which runs at EditComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * @return {Void}
    */
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser(this.userId);
        if (this.user == null) {
            this.userService.fetchUser()
                .subscribe(function (user) {
                _this.user = _this.userService.getUser(_this.userId);
            });
        }
    };
    /**
      * Function which routes to events page when user clicks on events in navbar.
      * @return {Void}
    */
    NavbarComponent.prototype.handleEvents = function () {
        this.router.navigate(['/events']);
    };
    /**
      * Function which routes to matches page when user clicks on matches in navbar.
      * @return {Void}
    */
    NavbarComponent.prototype.handleMatches = function () {
        this.router.navigate(['/matches']);
    };
    /**
      * Function which routes to profile page when user clicks on profile in navbar.
      * @return {Void}
    */
    NavbarComponent.prototype.handleProfile = function () {
        this.router.navigate(["/profile/" + this.userId]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
        /**
            * A class representing the navigation bar at the top.
            * @class NavbarComponent
        */
        ,
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    /* background-color: rgba(135, 206, 235); */\r\n    background: rgba(195, 231, 245);\r\n}\r\n\r\n.well {\r\n    background: rgba(225, 243, 250);\r\n}\r\n\r\nh1, h2 {\r\n    font-family: \"Special Elite\";\r\n}\r\n\r\nbutton {\r\n    font-family: \"Special Elite\";\r\n    margin: 5px;\r\n}\r\n\r\n#edit_buttion {\r\n    float: right;\r\n}\r\n\r\n.availabilityCell {\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #777a7f;\r\n\tbackground-color: #81c48e;\r\n}\r\n\r\n.availability-th {\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #777a7f;\r\n\t/*width: 70px;*/\r\n\tpadding: 25px;\r\n}\r\n\r\n.availability-time-th {\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #777a7f;\r\n\tpadding: 5px;\r\n\twidth: 12%;\r\n}\r\n\r\n#notFree {\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n.schedule {\r\n\tpadding-top: 10px;\r\n\tborder-style: solid;\r\n\tborder-width: 0px;\r\n\tborder-color: black;\r\n\theight: 500px;\r\n\twidth: 100%;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.star-rating {\r\n\tdisplay: inline;\r\n}\r\n\r\nh4, h6 {\r\n\tdisplay: inline;\r\n}\r\n\r\nimg {\r\n\twidth: 300px;\r\n\theight: 200px;\r\n\r\n}\r\n\r\n.darkBox {\r\n\tbackground-color: #000000;\r\n\topacity: 0.3;\r\n\twidth:300px;\r\n\theight: 200px;\r\n\tposition: absolute;\r\n}\r\n\r\n.activityInfo {\r\n\tcolor: white;\r\n\tposition: absolute;\r\n\tpadding-top: 100px;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.activityBox {\r\n\tpadding: 10px;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.activityBoxes {\r\n\tborder-style: solid;\r\n\tborder-width: 0px;\r\n\tborder-color: black;\r\n\twidth: 100%;\r\n\theight: 220px;\r\n\toverflow: auto;\r\n\tpadding: ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYixjQUFjOztDQUVkOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixZQUFZO0NBQ1osY0FBYztDQUNkLG1CQUFtQjtDQUNuQjs7QUFDRDtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7Q0FDZixVQUFVO0NBQ1YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDIwNiwgMjM1KTsgKi9cclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk1LCAyMzEsIDI0NSk7XHJcbn1cclxuXHJcbi53ZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyNDMsIDI1MCk7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogXCJTcGVjaWFsIEVsaXRlXCI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJTcGVjaWFsIEVsaXRlXCI7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuI2VkaXRfYnV0dGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5hdmFpbGFiaWxpdHlDZWxsIHtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdGJvcmRlci1jb2xvcjogIzc3N2E3ZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODFjNDhlO1xyXG59XHJcblxyXG4uYXZhaWxhYmlsaXR5LXRoIHtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdGJvcmRlci1jb2xvcjogIzc3N2E3ZjtcclxuXHQvKndpZHRoOiA3MHB4OyovXHJcblx0cGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmF2YWlsYWJpbGl0eS10aW1lLXRoIHtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdGJvcmRlci1jb2xvcjogIzc3N2E3ZjtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0d2lkdGg6IDEyJTtcclxufVxyXG5cclxuI25vdEZyZWUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zY2hlZHVsZSB7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRib3JkZXItY29sb3I6IGJsYWNrO1xyXG5cdGhlaWdodDogNTAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnN0YXItcmF0aW5nIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuaDQsIGg2IHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4uZGFya0JveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRvcGFjaXR5OiAwLjM7XHJcblx0d2lkdGg6MzAwcHg7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmFjdGl2aXR5SW5mbyB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nLXRvcDogMTAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYWN0aXZpdHlCb3gge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWN0aXZpdHlCb3hlcyB7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRib3JkZXItY29sb3I6IGJsYWNrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMjIwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0cGFkZGluZzogO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <title>B-Active - Profile</title>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n\r\n<div class=\"container-fluid well\">\r\n\r\n<div *ngIf=\"user\">\r\n    <h1>{{ user.name }}'s Profile</h1>\r\n    <p><button *ngIf=\"!publicView\" id=\"edit_button\" class=\"btn btn-default\" (click)=\"handleEdit()\">Edit Profile</button></p>\r\n</div>\r\n\r\n</div>\r\n<div class=\"container-fluid well\">\r\n\r\n<div *ngIf=\"user\">\r\n    <h4>Email: {{ user.email }} </h4>\r\n</div>\r\n\r\n<div class=\"user-rating\" *ngIf=\"user\">\r\n    <h4>Rating: </h4>\r\n    <div class=\"star-rating\" *ngFor=\"let rating of calculateRating()\">\r\n        <span class=\"fa fa-star\"></span>\r\n    </div>\r\n    <h6> ({{user.rating.numRatings}})</h6>\r\n</div>\r\n\r\n</div>\r\n<div class=\"container-fluid well\">\r\n\r\n<h2>Activities</h2>\r\n<div class = \"activityBoxes\" *ngIf=\"user\">\r\n    <div class=\"activityBox\" *ngFor=\"let activity of user.activities\">\r\n        <div class=\"darkBox\" width=\"300\" height=\"200\">\r\n        </div>\r\n\r\n        <div class=\"activityInfo\">\r\n            <div style=\"font-size: 18pt;\">{{ activity.name }}</div><br>\r\n            Interest: {{ activity.interest }}<br>\r\n            Skill: {{ activity.skill }}\r\n        </div>\r\n\r\n        <img src={{getActivityUrl(activity.name)}} width=\"300\" height=\"200\">\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n<div class=\"container-fluid well\">\r\n\r\n<h2>Availability</h2>\r\n<div class=\"schedule\" *ngIf=\"user\">\r\n\r\n    <table style=\"border: 1px solid #777a7f; border-spacing: 0px; width:100%;\" cellspacing=\"0\" >\r\n        <thead>\r\n            <tr bgcolor=\"#5e99d1\">\r\n                <th class=\"availability-th\"></th>\r\n                <th class=\"availability-th\">Monday</th>\r\n                <th class=\"availability-th\">Tuesday</th>\r\n                <th class=\"availability-th\">Wednesday</th>\r\n                <th class=\"availability-th\">Thursday</th>\r\n                <th class=\"availability-th\">Friday</th>\r\n                <th class=\"availability-th\">Saturday</th>\r\n                <th class=\"availability-th\">Sunday</th>\r\n            </tr>\r\n        </thead>\r\n        <tr *ngFor=\"let time of user.availability[0]; let i = index;\">\r\n            <th class=\"availability-time-th\" bgcolor=\"#5e99d1\">\r\n                {{ this.tableHeadings[i] }}\r\n            </th>\r\n            <ng-container *ngFor=\"let day of user.availability; let j = index;\">\r\n                <td class=\"availabilityCell\" id=\"free\" *ngIf=\"user.availability[j][i]\"></td>\r\n                <td class=\"availabilityCell\" id=\"notFree\" *ngIf=\"!user.availability[j][i]\"></td>\r\n            </ng-container>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
    * Parses a JSON Web Token.
    * Source: CS144 with Professor Cho, Project 4 JWT code
    * @param {Object} token A JSON Web Token.
    * @return {String} The parsed JSON Web Token, as a string.
*/
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
var ProfileComponent = /** @class */ (function () {
    /**
        * Creates a ProfileComponent.
        * Also fills the imageMap hash-map.
        * @param {UserService} userService The userService.
        * @param {Router} router The router.
        * @param {ActivedRoute} route The activated route.
    */
    function ProfileComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.tableHeadings = [];
        this.imageMap = {};
        this.publicView = false;
        this.userId = parseJWT(document.cookie).userId;
        // If the link that led to the profile page is from /profile, display the public view
        if (this.route.snapshot.url.length > 0) {
            var id = +this.route.snapshot.paramMap.get('id');
            if (id != null && id != this.userId) {
                this.userId = id;
                this.publicView = true;
            }
        }
        this.imageMap["Lifting"] = "https://static1.squarespace.com/static/53de6926e4b06edf127b3ecd/t/56c51cb6555986ef347ae6ba/1455758525694/";
        this.imageMap["Running"] = "http://lisabaylis.com/wp/wp-content/uploads/2017/07/running.jpg";
        this.imageMap["Swimming"] = "https://cdn.swimswam.com/wp-content/uploads/2018/02/stock-by-Mike-Lewis-LDM_1946.jpg";
        this.imageMap["Basketball"] = "https://ak5.picdn.net/shutterstock/videos/18113245/thumb/1.jpg";
        this.imageMap["Soccer"] = "http://www.bagnet.org/storage/05/17/23/16/729_486_5936517d8d288.jpg";
        this.imageMap["Tennis"] = "https://tennisracquetcentral.com/wp-content/uploads/2018/02/Tennis-Balls.jpg";
        this.imageMap["Volleyball"] = "https://www.longbeachny.gov/vertical/Sites/%7BC3C1054A-3D3A-41B3-8896-814D00B86D2A%7D/uploads/bigstock-Beach-Volleyball-Silhouette-81799844_(1).jpg";
        this.imageMap["Climbing"] = "http://yourboulder.com/wp-content/uploads/2013/02/adult-courses1-e1360807803429.jpg";
        this.imageMap["Squash"] = "https://data.englandsquash.com/files?fileName=0600776f-047c-4853-92f2-bb6a87601341.jpg";
        this.imageMap["Frisbee"] = "https://childlikefaith.com/wp-content/uploads/2015/10/ultimate-frisbee-catch.jpg";
    }
    /**
        * Function which runs at EditComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * @return {Void}
    */
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = parseJWT(document.cookie).userId;
        // + converts to a number
        var id = +this.route.snapshot.paramMap.get('id');
        if (id != null && id != this.userId) {
            this.userId = id;
            this.publicView = true;
        }
        this.fillTableHeadings();
        this.user = this.userService.getUser(this.userId);
        if (this.user == null) {
            this.userService.fetchUser()
                .subscribe(function (user) {
                _this.user = _this.userService.getUser(_this.userId);
            });
        }
    };
    /**
        * Populates the availability table with half-hour times.
        * @return {Void}
    */
    ProfileComponent.prototype.fillTableHeadings = function () {
        var hour = 0;
        var minutes = "00";
        for (var i = 0; i < 48; i++) {
            this.tableHeadings.push(hour + ":" + minutes);
            hour = (i % 2 == 1) ? hour + 1 : hour;
            minutes = (minutes == "00") ? "30" : "00";
        }
    };
    /**
        * Calculates the rating of the user.
        * @return {Array} An array of numbers, of length 5, for which the appropriate number of entries are full.
    */
    ProfileComponent.prototype.calculateRating = function () {
        var ratings = this.user.rating;
        if (ratings.numRatings === 0) {
            return 0;
        }
        var avg = Math.ceil(ratings.scoreSum / ratings.numRatings);
        return Array(avg).fill(5);
    };
    /**
        * Gets the URL for the image of the activity.
        * @param {String} name The name of the activity.
        * @return {String} The URL for the image of the activity.
    */
    ProfileComponent.prototype.getActivityUrl = function (name) {
        return this.imageMap[name];
    };
    /**
      * Function which routes to edit page when user clicks on edit in navbar.
      * @return {Void}
    */
    ProfileComponent.prototype.handleEdit = function () {
        this.router.navigate(['/edit']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
        /**
            * A class representing the component which allows the user to edit her profile.
            * @class ProfileComponent
        */
        ,
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: Activity, Event, User, Match, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
var options = { headers: headers, responseType: 'text' };
/**
    * A class representing an activity.
    * @class Activity
*/
var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());

/**
    * A class representing an event.
    * @class Event
*/
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());

/**
    * A class representing a user.
    * @class User
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

/**
    * A class representing a match.
    * @class Match
*/
var Match = /** @class */ (function () {
    function Match() {
    }
    return Match;
}());

var UserService = /** @class */ (function () {
    /**
        * Creates a UserService object.
        * @param {HttpClient} http The HTTP client.
    */
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api';
        this.matchUrl = 'http://localhost:3000/match';
    }
    /**
        * Initial call to User Service to populate array users.
        * Calls the following server-side API: GET /api/users.
        * @return {Observable<any>} An Observable object that promises population of user array once API request finishes.
    */
    UserService.prototype.fetchUser = function () {
        var _this = this;
        var url = this.apiUrl + "/users";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.users = res;
        }));
    };
    /**
        * Returns user with given userId if it exists in users array.
        * If no user with given userId found, returns null instead.
        * @param {number} userId The express routing HTTP client request object.
        * @return {User} The User object with the matching userId, or null if none found.
    */
    UserService.prototype.getUser = function (userId) {
        if (this.users === undefined || this.users === null || this.users.length === 0) {
            return null;
        }
        return this.users.find(function (cur) { return cur.userId === userId; });
    };
    /**
        * Initial call to populate events array with events that user with id userId is invited to.
        * Calls the following server-side API: GET /api/events/:userId.
        * @param {number} userId The userId whose events we are searching for.
        * @return {Observable<Event[]>} An Observable object that promises population of events array once API request finishes.
    */
    UserService.prototype.fetchEvents = function (userId) {
        var _this = this;
        var url = this.apiUrl + "/events/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.events = res;
        }));
    };
    /**
        * Returns events array, which contains events that user that's using this User Service was invited to.
        * Requires call to fetchEvents(userId: number) prior to execution for correct output.
        * @return {Event[]} The array of events that the user was invited to.
    */
    UserService.prototype.getEvents = function () {
        return this.events;
    };
    /**
        * Initial call to populate matchedEvents array with events that user with id userId has been matched to.
        * Calls the following server-side API: GET /api/matchedevents/:userId.
        * @param {number} userId The userId whose events we are searching for.
        * @return {Observable<Event[]>} An Observable object that promises population of matchedEvents array once API request finishes.
    */
    UserService.prototype.fetchMatchedEvents = function (userId) {
        var _this = this;
        var url = this.apiUrl + "/matchedevents/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.matchedEvents = res;
        }));
    };
    /**
        * Returns matchedEvents array, which contains events that user that's using this User Service has been matched to.
        * Requires call to fetchMatchedEvents(userId: number) prior to execution for correct output.
        * @return {Event[]} The array of events that the user has been matched to.
    */
    UserService.prototype.getMatchedEvents = function () {
        return this.matchedEvents;
    };
    /**
        * Initial call to populate confirmedEvents array with confirmed events that user with id userId has been matched to.
        * Calls the following server-side API: GET /api/confirmedevents/:userId.
        * @param {number} userId The userId whose events we are searching for.
        * @return {Observable<Event[]>} An Observable object that promises population of confirmedEvents array once API request finishes.
    */
    UserService.prototype.fetchConfirmedEvents = function (userId) {
        var _this = this;
        var url = this.apiUrl + "/confirmedevents/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.confirmedEvents = res;
        }));
    };
    /**
        * Returns confirmedEvents array, which contains confirmed events that user that's using this User Service has been matched to.
        * Requires call to fetchConfirmedEvents(userId: number) prior to execution for correct output.
        * @return {Event[]} The array of confirmed events that the user has been matched to.
    */
    UserService.prototype.getConfirmedEvents = function () {
        return this.confirmedEvents;
    };
    /**
        * Initial call to populate pendingEvents array with pending events that user with id userId has been matched to.
        * Calls the following server-side API: GET /api/pendingevents/:userId.
        * @param {number} userId The userId whose events we are searching for.
        * @return {Observable<Event[]>} An Observable object that promises population of pendingEvents array once API request finishes.
    */
    UserService.prototype.fetchPendingEvents = function (userId) {
        var _this = this;
        var url = this.apiUrl + "/pendingevents/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.pendingEvents = res;
        }));
    };
    /**
        * Returns confirmedEvents array, which contains pending events that user that's using this User Service has been matched to.
        * Requires call to fetchPendingEvents(userId: number) prior to execution for correct output.
        * @return {Event[]} The array of pending events that the user has been matched to.
    */
    UserService.prototype.getPendingEvents = function () {
        return this.pendingEvents;
    };
    /**
        * Finds best matches of current user, then creates corresponding events and populates server.
        * Calls the following server-side APIs: GET /match/:userId, POST /event/:userId.
        * @param {number} userId The userId whose matches we are computing.
        * @return {Observable<Event[]>} An Observable object that promises population of events collection with appropriate events.
    */
    UserService.prototype.fetchMatches = function (userId) {
        var _this = this;
        var url = this.matchUrl + "/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var match = res_1[_i];
                var event_1 = {
                    eventId: 0,
                    acceptedIds: [],
                    invitedIds: [match.match_id, userId],
                    activity: match.event,
                    startTime: match.unix_time,
                    endTime: new Date(match.unix_time.getSeconds() + 180),
                    status: "matched",
                    location: match.location
                };
                _this.http.post(_this.apiUrl + "/event/" + userId, event_1).subscribe();
            }
        }));
    };
    /**
        * Updates name of user with user id userId to newName.
        * Calls the following server-side API: PUT /name/:userId, body: {name: newName}
        * @param {number} userId The userId whose name we are changing.
        * @param {string} newName The updated name that we are setting for user with user id userId.
        * @return {void}
    */
    UserService.prototype.changeName = function (userId, newName) {
        var url = this.apiUrl + "/name/" + userId;
        var insert = { name: newName };
        this.http.put(url, insert).subscribe();
    };
    /**
        * Updates activities array of user with user id userId to input array activities.
        * Calls the following server-side API: PUT /activity/:userId, body: {activity: activities}
        * @param {number} userId The userId whose activities we are updating.
        * @param {Activity[]} activities The updated array of activities that we are setting for user with user id userId.
        * @return {void}
    */
    UserService.prototype.updateActivities = function (userId, activities) {
        var url = this.apiUrl + "/activity/" + userId;
        var insert = { activity: activities };
        this.http.post(url, insert).subscribe();
    };
    /**
        * Updates availabilities array of user with user id userId to input array availabilities.
        * Calls the following server-side API: PUT /availability/:userId, body: {availability: availabilities}
        * @param {number} userId The userId whose availabilities we are updating.
        * @param {boolean[][]} activities The updated array (7 by 48) of availabilities that we are setting for user with user id userId.
        * @return {void}
    */
    UserService.prototype.updateAvailability = function (userId, availabilities) {
        var _this = this;
        var url = this.apiUrl + "/availability/" + userId;
        var insert = { availability: availabilities };
        console.log(insert);
        this.http.put(url, insert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.fetchMatches(userId);
        })).subscribe();
    };
    /**
        * Deletes event from database with event id removeEventId. Deletes event from matchedEvents, pendingEvents, and confirmedEvents arrays.
        * Calls the following server-side API: DELETE /event/:removeEventId.
        * @param {number} removeEventId The event id of the event we are deleting.
        * @return {void}
    */
    UserService.prototype.deleteEvent = function (removeEventId) {
        var url = this.apiUrl + "/event/" + removeEventId;
        var found = false;
        for (var i = 0; i < this.matchedEvents.length; i++) {
            if (this.matchedEvents[i].eventId == removeEventId) {
                found = true;
                this.matchedEvents.splice(i, 1);
            }
        }
        if (!found) {
            for (var i = 0; i < this.pendingEvents.length; i++) {
                if (this.pendingEvents[i].eventId == removeEventId) {
                    found = true;
                    this.pendingEvents.splice(i, 1);
                }
            }
        }
        if (!found) {
            for (var i = 0; i < this.confirmedEvents.length; i++) {
                if (this.confirmedEvents[i].eventId == removeEventId) {
                    found = true;
                    this.confirmedEvents.splice(i, 1);
                }
            }
        }
        this.http.delete(url, options).subscribe();
        console.log('deleting event');
    };
    /**
        * Updates event in database whose event id matches updatedEvent.eventId. Updates matchedEvents, pendingEvents, and confirmedEvents arrays.
        * Calls the following server-side API: PUT /event/:updatedEvent.eventId, body: {event: updatedEvent}
        * @param {Event} updatedEvent The updated event that we are sending to the server.
        * @return {void}
    */
    UserService.prototype.updateEvent = function (updatedEvent) {
        var url = this.apiUrl + "/event/" + updatedEvent.eventId;
        var update = { event: updatedEvent };
        var found = false;
        for (var i = 0; i < this.matchedEvents.length; i++) {
            if (this.matchedEvents[i].eventId == updatedEvent.eventId) {
                found = true;
                this.pendingEvents.push(updatedEvent);
                this.matchedEvents.splice(i, 1);
            }
        }
        if (!found) {
            for (var i = 0; i < this.pendingEvents.length; i++) {
                if (this.pendingEvents[i].eventId == updatedEvent.eventId) {
                    found = true;
                    this.confirmedEvents.push(updatedEvent);
                    this.pendingEvents.splice(i, 1);
                }
            }
        }
        this.http.put(url, update).subscribe();
        console.log('updating event');
    };
    /**
        * Allows user to rate another user for an event.
        * Calls the following server-side API: PUT /rate/:userId, body: {ratee: otherId, eventId: eventId, score: rating}
        * @param {number} userId The user who is doing the rating.
        * @param {number} otherId The user who is being rated.
        * @param {number} eventId The event that the rating is being done for.
        * @param {number} rating The rating that the user is giving.
        * @return {void}
    */
    UserService.prototype.rateUser = function (userId, otherId, eventId, rating) {
        var url = this.apiUrl + "/rate/" + userId;
        var insert = {
            ratee: otherId,
            eventId: eventId,
            score: rating
        };
        this.http.put(url, insert).subscribe();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /**
            * A class which provides user functionalities, and calls to the API.
            * @class UserService
        */
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/bactive/bactive-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map