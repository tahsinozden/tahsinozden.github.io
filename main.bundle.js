webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-about/app-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-about/app-about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>I am a kind of ambitious person who can achieve almost everything in the scope of my interests with a great determination in the way of success.\nI studied Electronics Engineering at university but software development has been my passion since that time.\nI have abroad working experience and high level of English skills.\n<p>Currently, I have been working for UBS Poland as a <strong>Full Stack Developer</strong>.</p>\n\n<hr style=\"border: solid black;\">\n<h4>Core Skills</h4>\n<span class=\"badge\">Java</span>\n<span class=\"badge\">Python</span>\n<span class=\"badge\">C++</span>\n<span class=\"badge\">JavaScript</span>\n<span class=\"badge\">TypeScript</span>\n<span class=\"badge\">Spring MVC</span>\n<span class=\"badge\">Spring Boot</span>\n<span class=\"badge\">Hibernate</span>\n<span class=\"badge\">SQL</span>\n<span class=\"badge\">Angular 4</span>\n<span class=\"badge\">AngularJS</span>\n<span class=\"badge\">VueJS</span>\n<span class=\"badge\">JQuery</span>\n<span class=\"badge\">HTML</span>\n<span class=\"badge\">Linux Shell Scripting</span>\n<span class=\"badge\">AWK Scripting</span>\n"

/***/ }),

/***/ "../../../../../src/app/app-about/app-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAboutComponent = (function () {
    function AppAboutComponent() {
    }
    AppAboutComponent.prototype.ngOnInit = function () {
    };
    return AppAboutComponent;
}());
AppAboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/app-about/app-about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-about/app-about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppAboutComponent);

//# sourceMappingURL=app-about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-home/app-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white-space-pre {\n    white-space: pre-wrap;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-home/app-home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>GitHub Repos</h2>\n<div class=\"row\" *ngIf=\"userRepos | async; let repos; else loading\">\n  <table class=\"table\">\n    <tr>\n      <td>Name</td>\n      <td>Link</td>\n    </tr>\n    <tr *ngFor=\"let repo of repos\">\n      <td>\n        <div>\n          <a href=\"#\" style=\"color: black\">\n            <p data-toggle=\"tooltip\"\n               [title]=\"repo.description\"\n               data-toggle=\"modal\"\n               data-target=\".readme-info-modal\"\n                (click)=\"onClickRepoName(repo.name)\">{{ repo.name }}</p>\n          </a>\n          <span class=\"badge\">{{ repo.language }}</span>\n        </div>\n      </td>\n\n      <td>\n        <a [href]=\"repo.url\">{{ repo.url }}</a>\n      </td>\n    </tr>\n  </table>\n</div>\n<ng-template #loading>\n  <div class=\"loader\"></div>\n</ng-template>\n\n<div class=\"modal fade readme-info-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!--<div class=\"white-space-pre\" *ngIf=\"readMeLoaded; else readmeLoad\" [innerHTML]=\"readMeContent\">-->\n          <div class=\"white-space-pre\" *ngIf=\"readMeLoaded; else readmeLoad\" [innerHTML]=\"readMeContent\">\n              {{ readMeContent }}\n          </div>\n          <ng-template #readmeLoad>\n            <p>Loading...</p>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app-home/app-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_github_service__ = __webpack_require__("../../../../../src/app/service/github.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var USER_NAME = 'tahsinozden';
var AppHomeComponent = (function () {
    function AppHomeComponent(githubService) {
        this.githubService = githubService;
        this.userRepos = this.githubService.getReposByUserName(USER_NAME);
        this.readMeContent = '';
        this.readMeLoaded = false;
    }
    AppHomeComponent.prototype.onClickRepoName = function (repoName) {
        var _this = this;
        this.readMeLoaded = false;
        this.githubService.getRepoReadmeByUser(USER_NAME, repoName)
            .subscribe(function (data) {
            _this.readMeContent = data;
            _this.readMeLoaded = true;
            console.log(_this.githubService.getFormattedReadMe(data));
        }, function (error) {
            _this.readMeContent = 'No README file found!';
            _this.readMeLoaded = true;
        });
    };
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    return AppHomeComponent;
}());
AppHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/app-home/app-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-home/app-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_github_service__["a" /* GithubService */]) === "function" && _a || Object])
], AppHomeComponent);

var _a;
//# sourceMappingURL=app-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"container-fluid\">\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Tahsin Ozden</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n          <ul class=\"nav navbar-nav\">\n            <li><a href=\"/\">Home</a></li>\n            <li><a href=\"/about\">About</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <router-outlet></router-outlet>\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_home_app_home_component__ = __webpack_require__("../../../../../src/app/app-home/app-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_github_service__ = __webpack_require__("../../../../../src/app/service/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_about_app_about_component__ = __webpack_require__("../../../../../src/app/app-about/app-about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__app_home_app_home_component__["a" /* AppHomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__app_about_app_about_component__["a" /* AppAboutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__app_home_app_home_component__["a" /* AppHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_about_app_about_component__["a" /* AppAboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__service_github_service__["a" /* GithubService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/model/user-repo.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepo; });
var UserRepo = (function () {
    function UserRepo(id, name, fullName, owner, language, updatedAt, url, description, fork) {
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.owner = owner;
        this.language = language;
        this.updatedAt = updatedAt;
        this.url = url;
        this.description = description;
        this.fork = fork;
    }
    return UserRepo;
}());

//# sourceMappingURL=user-repo.model.js.map

/***/ }),

/***/ "../../../../../src/app/service/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_repo_model__ = __webpack_require__("../../../../../src/app/model/user-repo.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GITHUB_API_URL = 'https://api.github.com';
var REPO_EXCLUSIONS = ['tahsinozden.github.io'];
var GithubService = (function () {
    function GithubService(httpClient) {
        this.httpClient = httpClient;
    }
    GithubService.prototype.getReposByUserName = function (userName) {
        var _this = this;
        return this.httpClient.get(GITHUB_API_URL + '/users/' + userName + '/repos')
            .map(function (data) { return _this.filterAndSortData(data); });
    };
    GithubService.prototype.getRepoReadmeByUser = function (userName, repoName) {
        return this.httpClient.get(GITHUB_API_URL + '/repos/' + userName + '/' + repoName + '/contents/README.md')
            .map(function (data) {
            return atob(data['content']);
        });
    };
    GithubService.prototype.filterAndSortData = function (data) {
        return data
            .filter(function (item) {
            return !(item['fork'] || REPO_EXCLUSIONS.indexOf(item['name']) > -1);
        })
            .sort(function (a, b) {
            var d1 = new Date(a['updated_at']);
            var d2 = new Date(b['updated_at']);
            return d2.getTime() - d1.getTime();
        })
            .map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_3__model_user_repo_model__["a" /* UserRepo */](item['id'], item['name'], item['full_name'], item['owner'], item['language'], item['updated_at'], item['html_url'], item['description'], item['fork']);
        });
    };
    GithubService.prototype.getFormattedReadMe = function (readMe) {
        return readMe.replace('##', '<strong>')
            .replace('#', '<strong>')
            .replace('\n', '</strong>\n');
    };
    return GithubService;
}());
GithubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], GithubService);

var _a;
//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map