(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/LE6":
/*!********************************!*\
  !*** ./src/app/state/index.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _posts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.reducer */ "BBrf");
/* harmony import */ var _post_detail_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail.reducer */ "mBAG");



const reducers = {
    posts: _posts_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    postDetails: _post_detail_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? []
    : [];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markogresak/Projects/other/reddit-clone-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _user_tab_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-tab.enum */ "HpJ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comment/comment.component */ "Uf94");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-item/post-item.component */ "HFTx");







function UserComponent_ng_template_0_ng_template_9_app_comment_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment", 7);
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", comment_r6)("allComments", ctx_r5.user.comments)("hideNested", true);
} }
function UserComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserComponent_ng_template_0_ng_template_9_app_comment_0_Template, 1, 3, "app-comment", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.user.comments);
} }
function UserComponent_ng_template_0_ng_template_10_app_post_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-item", 9);
} if (rf & 2) {
    const post_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", post_r8);
} }
function UserComponent_ng_template_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserComponent_ng_template_0_ng_template_10_app_post_item_0_Template, 1, 1, "app-post-item", 8);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.user.posts);
} }
function UserComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserComponent_ng_template_0_ng_template_9_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserComponent_ng_template_0_ng_template_10_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("User ", ctx_r0.user.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r0.user.id, "/posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r0.user.id, "/comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tab === ctx_r0.UserTab.Comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tab === ctx_r0.UserTab.Posts);
} }
function UserComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.UserTab = _user_tab_enum__WEBPACK_IMPORTED_MODULE_0__["UserTab"];
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        this.userService.getUser(this.id).subscribe((user) => {
            this.user = user;
        });
    }
    get id() {
        return Number(this.route.snapshot.paramMap.get('id'));
    }
    get tab() {
        const tab = this.route.snapshot.paramMap.get('tab');
        return this.isUserTab(tab) ? tab : null;
    }
    isUserTab(value) {
        return Object.values(_user_tab_enum__WEBPACK_IMPORTED_MODULE_0__["UserTab"]).includes(value);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 3, vars: 2, consts: [[3, "ngIf", "ngIfElse"], ["loading", ""], [1, "user"], [1, "user__tabs"], [1, "user__tab-item", 3, "routerLink"], [3, "ngIf"], [3, "comment", "allComments", "hideNested", 4, "ngFor", "ngForOf"], [3, "comment", "allComments", "hideNested"], [3, "post", 4, "ngFor", "ngForOf"], [3, "post"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserComponent_ng_template_0_Template, 11, 5, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"], _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_6__["PostItemComponent"]], styles: [".user__tabs[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.user__tab-item[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtBQURKIiwiZmlsZSI6InVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlciB7XG4gICZfX3RhYnMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAmX190YWItaXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "47GC":
/*!****************************************!*\
  !*** ./src/app/state/posts.actions.ts ***!
  \****************************************/
/*! exports provided: loadPosts, loadPostsSuccess, loadPostsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPosts", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsSuccess", function() { return loadPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsFailure", function() { return loadPostsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Load Posts');
const loadPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Load Posts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Load Posts Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "BBrf":
/*!****************************************!*\
  !*** ./src/app/state/posts.reducer.ts ***!
  \****************************************/
/*! exports provided: postFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFeatureKey", function() { return postFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.actions */ "47GC");


const postFeatureKey = 'posts';
const initialState = {
    error: null,
    isLoading: false,
    posts: [],
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_1__["loadPosts"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostsSuccess"], (state, { data }) => (Object.assign(Object.assign({}, state), { error: null, isLoading: false, posts: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostsFailure"], (state, { error }) => (Object.assign(Object.assign({}, state), { error: error.message, isLoading: false, posts: [] }))));


/***/ }),

/***/ "HFTx":
/*!**************************************************!*\
  !*** ./src/app/post-item/post-item.component.ts ***!
  \**************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _from_now_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../from-now.pipe */ "U9JU");
/* harmony import */ var _domain_only_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain-only.pipe */ "Rhf+");





function PostItemComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "domainOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.post.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r0.post.url));
} }
function PostItemComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/posts/", ctx_r1.post.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.post.title);
} }
const _c0 = function (a0, a1) { return { "post-item__rating-vote-button--vote-up": a0, "post-item__rating-vote-button--vote-down": a1 }; };
const _c1 = function (a0, a1) { return { "post-item__rating--vote-up": a0, "post-item__rating--vote-down": a1 }; };
class PostItemComponent {
    constructor() { }
    ngOnInit() { }
}
PostItemComponent.ɵfac = function PostItemComponent_Factory(t) { return new (t || PostItemComponent)(); };
PostItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostItemComponent, selectors: [["app-post-item"]], inputs: { post: "post" }, decls: 21, vars: 22, consts: [[1, "post-item"], [1, "post-item__rating-container"], ["type", "button", 1, "post-item__rating-vote-button", "post-item__rating-vote-button--up", 3, "ngClass"], [1, "visually-hidden"], [1, "post-item__rating", 3, "ngClass"], ["type", "button", 1, "post-item__rating-vote-button", "post-item__rating-vote-button--down", 3, "ngClass"], [1, "post-item__content"], [4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "post-item__details"], [3, "routerLink"], [1, "post-item__comment-count", 3, "routerLink"], [3, "href"], [1, "post-item__external-url-domain"]], template: function PostItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vote up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vote down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostItemComponent_span_11_Template, 6, 5, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostItemComponent_a_12_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "fromNow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.post.user_post_rating === 1, ctx.post.user_post_rating === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c1, ctx.post.user_post_rating === 1, ctx.post.user_post_rating === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.post.rating, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.post.user_post_rating === 1, ctx.post.user_post_rating === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.post.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Submitted ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, ctx.post.submitted_at), " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.post.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.post.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/posts/", ctx.post.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.post.comment_count, " comments");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_from_now_pipe__WEBPACK_IMPORTED_MODULE_3__["FromNowPipe"], _domain_only_pipe__WEBPACK_IMPORTED_MODULE_4__["DomainOnlyPipe"]], styles: [".post-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  min-height: 50px;\n}\n.post-item__rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 15px;\n}\n.post-item__rating-vote-button[_ngcontent-%COMP%] {\n  background: none;\n  border-width: 0;\n  padding: 0;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.post-item__rating-vote-button--up[_ngcontent-%COMP%] {\n  border-bottom: 10px solid #c6c6c6;\n}\n.post-item__rating-vote-button--vote-up[_ngcontent-%COMP%] {\n  border-bottom-color: #ff8b60;\n}\n.post-item__rating-vote-button--down[_ngcontent-%COMP%] {\n  border-top: 10px solid #c6c6c6;\n}\n.post-item__rating-vote-button--vote-down[_ngcontent-%COMP%] {\n  border-top-color: #9494ff;\n}\n.post-item__rating[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #c6c6c6;\n}\n.post-item__rating--vote-up[_ngcontent-%COMP%] {\n  color: #ff8b60;\n}\n.post-item__rating--vote-down[_ngcontent-%COMP%] {\n  color: #9494ff;\n}\n.post-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.post-item__details[_ngcontent-%COMP%], .post-item__comment-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.post-item__details[_ngcontent-%COMP%] {\n  padding-top: 6px;\n}\n.post-item__comment-count[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.post-item__external-url-domain[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  color: #888;\n  font-size: 10px;\n}\n.post-item__external-url-domain[_ngcontent-%COMP%]:before {\n  content: \"(\";\n}\n.post-item__external-url-domain[_ngcontent-%COMP%]:after {\n  content: \")\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBSmU7RUFLZixnQkFBQTtBQUhGO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQVhhO0FBUWpCO0FDQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FEQ0o7QUNDSTtFQUNFLGlDQUFBO0FEQ047QUNFSTtFQUNFLDRCQWpCWTtBRGlCbEI7QUNHSTtFQUNFLDhCQUFBO0FERE47QUNJSTtFQUNFLHlCQXhCYztBRHNCcEI7QUNNRTtFQUNFLGFBQUE7RUFDQSxjQWhDbUI7QUQ0QnZCO0FDTUk7RUFDRSxjQWxDWTtBRDhCbEI7QUNPSTtFQUNFLGNBckNjO0FEZ0NwQjtBQXZCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBeUJKO0FBdEJFO0VBRUUsZUFBQTtFQUNBLFdBQUE7QUF1Qko7QUFwQkU7RUFDRSxnQkFBQTtBQXNCSjtBQW5CRTtFQUNFLGlCQUFBO0FBcUJKO0FBbEJFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQW9CSjtBQWxCSTtFQUNFLFlBQUE7QUFvQk47QUFqQkk7RUFDRSxZQUFBO0FBbUJOIiwiZmlsZSI6InBvc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9taXhpbnNcIjtcblxuLnBvc3QtaXRlbSB7XG4gICRwb3N0LXNwYWNpbmc6IDE1cHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogJHBvc3Qtc3BhY2luZztcbiAgbWluLWhlaWdodDogNTBweDtcblxuICAmX19yYXRpbmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6ICRwb3N0LXNwYWNpbmc7XG4gIH1cblxuICBAaW5jbHVkZSB2b3RlLWJ1dHRvbnMoJHZvdGUtYXJyb3ctc2l6ZTogMTBweCk7XG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICZfX2RldGFpbHMsXG4gICZfX2NvbW1lbnQtY291bnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgfVxuXG4gICZfX2RldGFpbHMge1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gIH1cblxuICAmX19jb21tZW50LWNvdW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gICZfX2V4dGVybmFsLXVybC1kb21haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCIoXCI7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIilcIjtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBjb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5AbWl4aW4gdm90ZS1idXR0b25zKCR2b3RlLWFycm93LXNpemUpIHtcbiAgJHZvdGUtZGVmYXVsdC1jb2xvcjogI2M2YzZjNjtcbiAgJHZvdGUtdXAtY29sb3I6ICNmZjhiNjA7XG4gICR2b3RlLWRvd24tY29sb3I6ICM5NDk0ZmY7XG5cbiAgJl9fcmF0aW5nLXZvdGUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHZvdGUtYXJyb3ctc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICR2b3RlLWFycm93LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLS11cCB7XG4gICAgICBib3JkZXItYm90dG9tOiAkdm90ZS1hcnJvdy1zaXplIHNvbGlkICR2b3RlLWRlZmF1bHQtY29sb3I7XG4gICAgfVxuXG4gICAgJi0tdm90ZS11cCB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdm90ZS11cC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS1kb3duIHtcbiAgICAgIGJvcmRlci10b3A6ICR2b3RlLWFycm93LXNpemUgc29saWQgJHZvdGUtZGVmYXVsdC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS12b3RlLWRvd24ge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHZvdGUtZG93bi1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX19yYXRpbmcge1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgY29sb3I6ICR2b3RlLWRlZmF1bHQtY29sb3I7XG5cbiAgICAmLS12b3RlLXVwIHtcbiAgICAgIGNvbG9yOiAkdm90ZS11cC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS12b3RlLWRvd24ge1xuICAgICAgY29sb3I6ICR2b3RlLWRvd24tY29sb3I7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "HpJ1":
/*!**********************************!*\
  !*** ./src/app/user-tab.enum.ts ***!
  \**********************************/
/*! exports provided: UserTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTab", function() { return UserTab; });
var UserTab;
(function (UserTab) {
    UserTab["Comments"] = "comments";
    UserTab["Posts"] = "posts";
})(UserTab || (UserTab = {}));


/***/ }),

/***/ "Jd/l":
/*!******************************************!*\
  !*** ./src/app/state/posts.selectors.ts ***!
  \******************************************/
/*! exports provided: selectPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPosts", function() { return selectPosts; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectPostsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('posts');
const selectPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostsState, (state) => state);


/***/ }),

/***/ "N3Gy":
/*!************************************************!*\
  !*** ./src/app/state/post-detail.selectors.ts ***!
  \************************************************/
/*! exports provided: selectPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPost", function() { return selectPost; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectPostDetailsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('postDetails');
const selectPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostDetailsState, (state, { id }) => state[id]);


/***/ }),

/***/ "OnRP":
/*!**********************************************!*\
  !*** ./src/app/state/post-detail.actions.ts ***!
  \**********************************************/
/*! exports provided: loadPostDetails, loadPostDetailsSuccess, loadPostDetailsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostDetails", function() { return loadPostDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostDetailsSuccess", function() { return loadPostDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostDetailsFailure", function() { return loadPostDetailsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadPostDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PostDetail] Load PostDetails', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostDetailsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PostDetail] Load PostDetails Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostDetailsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PostDetail] Load PostDetails Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Rhf+":
/*!*************************************!*\
  !*** ./src/app/domain-only.pipe.ts ***!
  \*************************************/
/*! exports provided: DomainOnlyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainOnlyPipe", function() { return DomainOnlyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DomainOnlyPipe {
    transform(url) {
        try {
            return new URL(url).host;
        }
        catch (_a) {
            return '';
        }
    }
}
DomainOnlyPipe.ɵfac = function DomainOnlyPipe_Factory(t) { return new (t || DomainOnlyPipe)(); };
DomainOnlyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "domainOnly", type: DomainOnlyPipe, pure: true });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'reddit-clone-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDREUsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFREFBLGFBQUE7QUFFRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vbWl4aW5zXCI7XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgY29udGFpbmVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiQG1peGluIGNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbkBtaXhpbiB2b3RlLWJ1dHRvbnMoJHZvdGUtYXJyb3ctc2l6ZSkge1xuICAkdm90ZS1kZWZhdWx0LWNvbG9yOiAjYzZjNmM2O1xuICAkdm90ZS11cC1jb2xvcjogI2ZmOGI2MDtcbiAgJHZvdGUtZG93bi1jb2xvcjogIzk0OTRmZjtcblxuICAmX19yYXRpbmctdm90ZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAkdm90ZS1hcnJvdy1zaXplIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogJHZvdGUtYXJyb3ctc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtLXVwIHtcbiAgICAgIGJvcmRlci1ib3R0b206ICR2b3RlLWFycm93LXNpemUgc29saWQgJHZvdGUtZGVmYXVsdC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS12b3RlLXVwIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR2b3RlLXVwLWNvbG9yO1xuICAgIH1cblxuICAgICYtLWRvd24ge1xuICAgICAgYm9yZGVyLXRvcDogJHZvdGUtYXJyb3ctc2l6ZSBzb2xpZCAkdm90ZS1kZWZhdWx0LWNvbG9yO1xuICAgIH1cblxuICAgICYtLXZvdGUtZG93biB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkdm90ZS1kb3duLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX3JhdGluZyB7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBjb2xvcjogJHZvdGUtZGVmYXVsdC1jb2xvcjtcblxuICAgICYtLXZvdGUtdXAge1xuICAgICAgY29sb3I6ICR2b3RlLXVwLWNvbG9yO1xuICAgIH1cblxuICAgICYtLXZvdGUtZG93biB7XG4gICAgICBjb2xvcjogJHZvdGUtZG93bi1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "U9JU":
/*!**********************************!*\
  !*** ./src/app/from-now.pipe.ts ***!
  \**********************************/
/*! exports provided: FromNowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromNowPipe", function() { return FromNowPipe; });
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/formatDistance */ "gNI2");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FromNowPipe {
    transform(date) {
        const now = new Date();
        return date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date), now, { addSuffix: true });
    }
}
FromNowPipe.ɵfac = function FromNowPipe_Factory(t) { return new (t || FromNowPipe)(); };
FromNowPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "fromNow", type: FromNowPipe, pure: true });


/***/ }),

/***/ "Uf94":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _from_now_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../from-now.pipe */ "U9JU");




function CommentComponent_div_23_app_comment_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 14);
} if (rf & 2) {
    const childComment_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", childComment_r2)("allComments", ctx_r1.allComments)("isNested", true);
} }
function CommentComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_div_23_app_comment_1_Template, 1, 3, "app-comment", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.childComments);
} }
const _c0 = function (a0) { return { "post-comment--nested": a0 }; };
const _c1 = function (a0, a1) { return { "post-comment__rating-vote-button--vote-up": a0, "post-comment__rating-vote-button--vote-down": a1 }; };
const _c2 = function (a0) { return { "post-comment__content--collapsed": a0 }; };
class CommentComponent {
    constructor() {
        this.isNested = false;
        this.hideNested = false;
        this.collapsed = false;
    }
    ngOnInit() {
        this.childComments = this.allComments.filter((comment) => comment.parent_comment_id === this.comment.id);
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment", allComments: "allComments", isNested: "isNested", hideNested: "hideNested" }, decls: 24, vars: 23, consts: [[1, "post-comment", 3, "ngClass"], [1, "post-comment__rating-container"], ["type", "button", 1, "post-comment__rating-vote-button", "post-comment__rating-vote-button--up", 3, "ngClass"], [1, "visually-hidden"], [1, "post-comment__rating-spacer"], ["type", "button", 1, "post-comment__rating-vote-button", "post-comment__rating-vote-button--down", 3, "ngClass"], [1, "post-comment__details"], [1, "post-comment__collapse-button", 3, "click"], [3, "routerLink"], [1, "post-comment__points"], [1, "post-comment__content", 3, "ngClass"], ["class", "post-comment__nested-comments", 4, "ngIf"], [1, "post-comment__nested-comments"], [3, "comment", "allComments", "isNested", 4, "ngFor", "ngForOf"], [3, "comment", "allComments", "isNested"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vote up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vote down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_button_click_11_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "fromNow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CommentComponent_div_23_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isNested));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c1, ctx.comment.user_comment_rating === 1, ctx.comment.user_comment_rating === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, ctx.comment.user_comment_rating === 1, ctx.comment.user_comment_rating === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collapsed ? "+" : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.comment.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.comment.rating, " points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, ctx.comment.submitted_at), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx.collapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideNested);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], CommentComponent], pipes: [_from_now_pipe__WEBPACK_IMPORTED_MODULE_3__["FromNowPipe"]], styles: [".post-comment[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n}\n.post-comment--nested[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.post-comment__rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 15px;\n}\n.post-comment__rating-vote-button[_ngcontent-%COMP%] {\n  background: none;\n  border-width: 0;\n  padding: 0;\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n.post-comment__rating-vote-button--up[_ngcontent-%COMP%] {\n  border-bottom: 8px solid #c6c6c6;\n}\n.post-comment__rating-vote-button--vote-up[_ngcontent-%COMP%] {\n  border-bottom-color: #ff8b60;\n}\n.post-comment__rating-vote-button--down[_ngcontent-%COMP%] {\n  border-top: 8px solid #c6c6c6;\n}\n.post-comment__rating-vote-button--vote-down[_ngcontent-%COMP%] {\n  border-top-color: #9494ff;\n}\n.post-comment__rating[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #c6c6c6;\n}\n.post-comment__rating--vote-up[_ngcontent-%COMP%] {\n  color: #ff8b60;\n}\n.post-comment__rating--vote-down[_ngcontent-%COMP%] {\n  color: #9494ff;\n}\n.post-comment__rating-spacer[_ngcontent-%COMP%] {\n  height: 8px;\n}\n.post-comment__details[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 4px;\n}\n.post-comment__collapse-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  cursor: pointer;\n  color: #888;\n  border: none;\n  background: none;\n  padding: 0;\n}\n.post-comment__collapse-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.post-comment__collapse-button[_ngcontent-%COMP%]:before {\n  content: \"[ \";\n}\n.post-comment__collapse-button[_ngcontent-%COMP%]:after {\n  content: \" ]\";\n}\n.post-comment__points[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #111;\n}\n.post-comment__content--collapsed[_ngcontent-%COMP%] {\n  display: none;\n}\n.post-comment__nested-comments[_ngcontent-%COMP%] {\n  border-left: 1px solid #e0e0e0;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7QUNBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7QURFSjtBQ0FJO0VBQ0UsZ0NBQUE7QURFTjtBQ0NJO0VBQ0UsNEJBakJZO0FEa0JsQjtBQ0VJO0VBQ0UsNkJBQUE7QURBTjtBQ0dJO0VBQ0UseUJBeEJjO0FEdUJwQjtBQ0tFO0VBQ0UsYUFBQTtFQUNBLGNBaENtQjtBRDZCdkI7QUNLSTtFQUNFLGNBbENZO0FEK0JsQjtBQ01JO0VBQ0UsY0FyQ2M7QURpQ3BCO0FBeEJFO0VBQ0UsV0FBQTtBQTBCSjtBQXZCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF5Qko7QUF0QkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXVCSjtBQXJCSTtFQUNFLDBCQUFBO0FBdUJOO0FBcEJJO0VBQ0UsYUFBQTtBQXNCTjtBQW5CSTtFQUNFLGFBQUE7QUFxQk47QUFqQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFtQko7QUFmSTtFQUNFLGFBQUE7QUFpQk47QUFiRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUFlSiIsImZpbGUiOiJjb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL21peGluc1wiO1xuXG4ucG9zdC1jb21tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTVweDtcblxuICAmLS1uZXN0ZWQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAmX19yYXRpbmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICBAaW5jbHVkZSB2b3RlLWJ1dHRvbnMoJHZvdGUtYXJyb3ctc2l6ZTogOHB4KTtcblxuICAmX19yYXRpbmctc3BhY2VyIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgfVxuXG4gICZfX2RldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cblxuICAmX19jb2xsYXBzZS1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzg4ODtcbiAgICAvLyBSZXNldCBidXR0b24gc3R5bGVcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlsgXCI7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBdXCI7XG4gICAgfVxuICB9XG5cbiAgJl9fcG9pbnRzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzExMTtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgICYtLWNvbGxhcHNlZCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZfX25lc3RlZC1jb21tZW50cyB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgfVxufVxuIiwiQG1peGluIGNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbkBtaXhpbiB2b3RlLWJ1dHRvbnMoJHZvdGUtYXJyb3ctc2l6ZSkge1xuICAkdm90ZS1kZWZhdWx0LWNvbG9yOiAjYzZjNmM2O1xuICAkdm90ZS11cC1jb2xvcjogI2ZmOGI2MDtcbiAgJHZvdGUtZG93bi1jb2xvcjogIzk0OTRmZjtcblxuICAmX19yYXRpbmctdm90ZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAkdm90ZS1hcnJvdy1zaXplIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogJHZvdGUtYXJyb3ctc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtLXVwIHtcbiAgICAgIGJvcmRlci1ib3R0b206ICR2b3RlLWFycm93LXNpemUgc29saWQgJHZvdGUtZGVmYXVsdC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS12b3RlLXVwIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR2b3RlLXVwLWNvbG9yO1xuICAgIH1cblxuICAgICYtLWRvd24ge1xuICAgICAgYm9yZGVyLXRvcDogJHZvdGUtYXJyb3ctc2l6ZSBzb2xpZCAkdm90ZS1kZWZhdWx0LWNvbG9yO1xuICAgIH1cblxuICAgICYtLXZvdGUtZG93biB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkdm90ZS1kb3duLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX3JhdGluZyB7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBjb2xvcjogJHZvdGUtZGVmYXVsdC1jb2xvcjtcblxuICAgICYtLXZvdGUtdXAge1xuICAgICAgY29sb3I6ICR2b3RlLXVwLWNvbG9yO1xuICAgIH1cblxuICAgICYtLXZvdGUtZG93biB7XG4gICAgICBjb2xvcjogJHZvdGUtZG93bi1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Ykjz":
/*!****************************************************!*\
  !*** ./src/app/posts-list/posts-list.component.ts ***!
  \****************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/posts.actions */ "47GC");
/* harmony import */ var _state_posts_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/posts.selectors */ "Jd/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post.service */ "fhD/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-item/post-item.component */ "HFTx");










function PostsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostsListComponent_ng_template_2_app_post_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-post-item", 4);
} if (rf & 2) {
    const post_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", post_r5);
} }
function PostsListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostsListComponent_ng_template_2_app_post_item_0_Template, 1, 1, "app-post-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r1.posts$)) == null ? null : tmp_0_0.posts);
} }
function PostsListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" An error occurred while loading the data: ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r3.posts$)) == null ? null : tmp_0_0.error, " ");
} }
class PostsListComponent {
    constructor(postService, store) {
        this.postService = postService;
        this.store = store;
        this.posts$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_state_posts_selectors__WEBPACK_IMPORTED_MODULE_4__["selectPosts"]));
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_3__["loadPosts"])());
        this.postService
            .getPosts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostsFailure"])({ error }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }))
            .subscribe((posts) => {
            if (posts) {
                this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostsSuccess"])({ data: posts }));
            }
        });
    }
}
PostsListComponent.ɵfac = function PostsListComponent_Factory(t) { return new (t || PostsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
PostsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PostsListComponent, selectors: [["app-posts-list"]], decls: 6, vars: 7, consts: [[4, "ngIf"], [3, "ngIf", "ngIfElse"], ["error", ""], [3, "post", 4, "ngFor", "ngForOf"], [3, "post"]], template: function PostsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostsListComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostsListComponent_ng_template_2_Template, 2, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PostsListComponent_ng_template_4_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, ctx.posts$)) == null ? null : tmp_0_0.isLoading) === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ctx.posts$)) == null ? null : tmp_1_0.error) === null)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_8__["PostItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "Ykjz");
/* harmony import */ var _from_now_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./from-now.pipe */ "U9JU");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-post/new-post.component */ "nEq3");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "xwDW");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-item/post-item.component */ "HFTx");
/* harmony import */ var _domain_only_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./domain-only.pipe */ "Rhf+");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comment/comment.component */ "Uf94");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state */ "/LE6");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_state__WEBPACK_IMPORTED_MODULE_17__["reducers"], {
                metaReducers: _state__WEBPACK_IMPORTED_MODULE_17__["metaReducers"],
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__["PostsListComponent"],
        _from_now_pipe__WEBPACK_IMPORTED_MODULE_5__["FromNowPipe"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
        _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_11__["NewPostComponent"],
        _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_12__["PostDetailComponent"],
        _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_13__["PostItemComponent"],
        _domain_only_pipe__WEBPACK_IMPORTED_MODULE_14__["DomainOnlyPipe"],
        _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "fhD/":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PostService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        };
        this.postsUrl = 'https://reddit-eu.herokuapp.com/api/posts';
    }
    getPosts() {
        return this.http
            .get(this.postsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.data));
    }
    getPost(id) {
        return this.http.get(`${this.postsUrl}/${id}`);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function NavigationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logged in as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r0.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.username);
} }
function NavigationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor() {
        this.user = null;
    }
    ngOnInit() {
        // TODO: get real user data
        // this.user = {
        //   id: 123,
        //   username: 'Some user',
        // };
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 5, vars: 2, consts: [[1, "navigation"], [1, "navigation__container"], [3, "ngIf", "ngIfElse"], ["visitorBlock", ""], [1, "navigation__item", "navigation__item--right"], [3, "routerLink"], ["routerLink", "/logout", 1, "navigation__item"], ["routerLink", "/", 1, "navigation__item"], ["routerLink", "/register", 1, "navigation__item", "navigation__item--right"], ["routerLink", "/login", 1, "navigation__item"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_ng_template_2_Template, 7, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_ng_template_3_Template, 6, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".navigation[_ngcontent-%COMP%] {\n  height: 40px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.navigation__container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.navigation__item[_ngcontent-%COMP%]    + .navigation__item[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.navigation__item--right[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQURGO0FBR0U7RUNMQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VESUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVKO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBR0k7RUFDRSw0QkFBQTtBQUROIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vbWl4aW5zXCI7XG5cbi5uYXZpZ2F0aW9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblxuICAmX19jb250YWluZXIge1xuICAgIEBpbmNsdWRlIGNvbnRhaW5lcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJi0tcmlnaHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBjb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5AbWl4aW4gdm90ZS1idXR0b25zKCR2b3RlLWFycm93LXNpemUpIHtcbiAgJHZvdGUtZGVmYXVsdC1jb2xvcjogI2M2YzZjNjtcbiAgJHZvdGUtdXAtY29sb3I6ICNmZjhiNjA7XG4gICR2b3RlLWRvd24tY29sb3I6ICM5NDk0ZmY7XG5cbiAgJl9fcmF0aW5nLXZvdGUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHZvdGUtYXJyb3ctc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICR2b3RlLWFycm93LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLS11cCB7XG4gICAgICBib3JkZXItYm90dG9tOiAkdm90ZS1hcnJvdy1zaXplIHNvbGlkICR2b3RlLWRlZmF1bHQtY29sb3I7XG4gICAgfVxuXG4gICAgJi0tdm90ZS11cCB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdm90ZS11cC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS1kb3duIHtcbiAgICAgIGJvcmRlci10b3A6ICR2b3RlLWFycm93LXNpemUgc29saWQgJHZvdGUtZGVmYXVsdC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS12b3RlLWRvd24ge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHZvdGUtZG93bi1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX19yYXRpbmcge1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgY29sb3I6ICR2b3RlLWRlZmF1bHQtY29sb3I7XG5cbiAgICAmLS12b3RlLXVwIHtcbiAgICAgIGNvbG9yOiAkdm90ZS11cC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLS12b3RlLWRvd24ge1xuICAgICAgY29sb3I6ICR2b3RlLWRvd24tY29sb3I7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "mBAG":
/*!**********************************************!*\
  !*** ./src/app/state/post-detail.reducer.ts ***!
  \**********************************************/
/*! exports provided: postDetailFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postDetailFeatureKey", function() { return postDetailFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _post_detail_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-detail.actions */ "OnRP");


const postDetailFeatureKey = 'postDetail';
const initialState = {};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_detail_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostDetails"], (state, { id }) => (Object.assign(Object.assign({}, state), { [id]: Object.assign(Object.assign({}, state[id]), { error: null, isLoading: true }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_detail_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostDetailsSuccess"], (state, { id, data }) => (Object.assign(Object.assign({}, state), { [id]: Object.assign(Object.assign({}, state[id]), { error: null, isLoading: false, value: data, topLevelComments: data.comments.filter((comment) => comment.parent_comment_id === null) }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_detail_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostDetailsFailure"], (state, { id, error }) => (Object.assign(Object.assign({}, state), { [id]: Object.assign(Object.assign({}, state[id]), { error: error.message, isLoading: false, value: undefined, topLevelComments: [] }) }))));


/***/ }),

/***/ "n1B2":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "nEq3":
/*!************************************************!*\
  !*** ./src/app/new-post/new-post.component.ts ***!
  \************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NewPostComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
    get type() {
        const type = this.route.snapshot.paramMap.get('type');
        if (type === 'link' || type === 'text') {
            return type;
        }
        return null;
    }
}
NewPostComponent.ɵfac = function NewPostComponent_Factory(t) { return new (t || NewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NewPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPostComponent, selectors: [["app-new-post"]], decls: 2, vars: 1, template: function NewPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("new-post works! type = ", ctx.type, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-post/new-post.component */ "nEq3");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "xwDW");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "Ykjz");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"] },
    { path: 'posts/new/:type', component: _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__["NewPostComponent"] },
    { path: 'posts/:id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"] },
    { path: 'users/:id', redirectTo: '/users/:id/posts', pathMatch: 'full' },
    { path: 'users/:id/:tab', component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        };
        this.usersUrl = 'https://reddit-eu.herokuapp.com/api/users';
    }
    getUser(id) {
        return this.http
            .get(`${this.usersUrl}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.data));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xwDW":
/*!******************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.ts ***!
  \******************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_post_detail_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/post-detail.actions */ "OnRP");
/* harmony import */ var _state_post_detail_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/post-detail.selectors */ "N3Gy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post.service */ "fhD/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-item/post-item.component */ "HFTx");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment/comment.component */ "Uf94");












function PostDetailComponent_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r3.post$)) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.text, " ");
} }
function PostDetailComponent_ng_template_0_app_comment_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-comment", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("comment", comment_r5)("allComments", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx_r4.post$)) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.comments);
} }
function PostDetailComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-post-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PostDetailComponent_ng_template_0_div_3_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PostDetailComponent_ng_template_0_app_comment_11_Template, 2, 4, "app-comment", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r0.post$)) == null ? null : tmp_0_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, ctx_r0.post$)) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 8, ctx_r0.post$)) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.comment_count, " comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 10, ctx_r0.post$)) == null ? null : tmp_3_0.topLevelComments);
} }
function PostDetailComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class PostDetailComponent {
    constructor(route, postService, store) {
        this.route = route;
        this.postService = postService;
        this.store = store;
        this.post$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])((state) => Object(_state_post_detail_selectors__WEBPACK_IMPORTED_MODULE_4__["selectPost"])(state, { id: this.id })));
    }
    ngOnInit() {
        this.getPost(this.id);
    }
    getPost(id) {
        this.store.dispatch(Object(_state_post_detail_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostDetails"])({ id }));
        this.postService
            .getPost(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.store.dispatch(Object(_state_post_detail_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostDetailsFailure"])({ id, error }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }))
            .subscribe((post) => {
            if (post) {
                this.store.dispatch(Object(_state_post_detail_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostDetailsSuccess"])({ id, data: post.data }));
            }
        });
    }
    get id() {
        return Number(this.route.snapshot.paramMap.get('id'));
    }
}
PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) { return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PostDetailComponent, selectors: [["app-post-detail"]], decls: 4, vars: 4, consts: [[3, "ngIf", "ngIfElse"], ["loading", ""], [1, "post-detail"], [3, "post"], ["class", "post-detail__text", 4, "ngIf"], [1, "post-detail__content-container"], [3, "comment", "allComments", 4, "ngFor", "ngForOf"], [1, "post-detail__text"], [3, "comment", "allComments"]], template: function PostDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostDetailComponent_ng_template_0_Template, 13, 12, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostDetailComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.post$)) == null ? null : tmp_0_0.value)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__["PostItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".post-detail__text[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  margin-top: 15px;\n  padding: 15px;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n}\n.post-detail__content-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBREoiLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1kZXRhaWwge1xuICAmX190ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgfVxuXG4gICZfX2NvbnRlbnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map