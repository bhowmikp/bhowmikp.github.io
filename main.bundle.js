webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".prantar-image{\n\tborder-radius: 50%;\n  float: right;\n  \n\t/* blocks people copying my image */\n\t/* stops drag and drop*/\n\tpointer-events: none;\n\n\t/*stops selecting*/\n\t-moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n\t    user-select: none;\n}\n\n.clearfix {\n    overflow: auto;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\n  <div>\n    <img class = 'prantar-image' alt=\"Prantar Image\" src='../../assets/prantar.png' align=\"middle\" draggable='false'>\n  </div>\n  <div>\n    I am a third year student at the University of Toronto, working towards a\n    Bachelors in Science.\n    <br><br>\n    I have been passionate about coding since high school. I have worked on various\n    projects ranging from Web Development to working with blockchain technologies.\n    I am currently the lead developer and co-founder of a project funded over $3000,\n    which aggreates relevant articles for trending topics and congregates, analyzes,\n    and summarizes articles, shows social media reaction and generates links for\n    further reading.\n    <br><br>\n    I have worked as a full stack developer for the past year building a web app for\n    University of Toronto to keep track of student information. I have worked as a\n    teaching assistant for the past two years teaching introductory computer science\n    course.\n    <br><br>\n    I also co-founded and acted as a lecturer for the\n    <a href=\"https://csec.club/\" target=\"_blank\" rel=\"noopener\">Computer Science Enrichment Club</a>, which is\n    a student run club at the University of Toronto. The club aimed\n    to extend knowledge in algorithmic complex problems, web development, and network\n    security. The club hosted coding competitions and held monthly seminars on topics\n    such as - machine learning, chess engine programming, cryptocurrency.\n    <br><br>\n    Sometimes I like to practice competitive programming in sites like\n    <a href = 'https://open.kattis.com/users/prantar-bhowmik' target=\"_blank\" rel=\"noopener\">OpenKattis</a>,\n    <a href = 'https://www.hackerrank.com/prantarbhowmik' target=\"_blank\" rel=\"noopener\">HackerRank</a>,\n    <a href = 'https://www.topcoder.com/members/bhowmikp/' target=\"_blank\" rel=\"noopener\">TopCoder</a>,\n    and <a href = 'https://leetcode.com/prantarbhowmik/' target=\"_blank\" rel=\"noopener\">LeetCode</a>.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 2fr 8fr;\n      grid-template-columns: 2fr 8fr;\n  /* position: sticky; */\n  top: 0;\n  margin-left: -8px;\n  margin-right: -8px;\n\n  background-color: #333;\n  border: 1px solid black;\n\n  padding: 10px 0px;\n}\n\nnav > .options {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  justify-items: center;\n  grid-row-gap: 0.25em;\n}\n\n.calendar{\n  /* background-color: rgba(255, 255, 255, 0.5); */\n}\n\n.brand {\n  text-align: center;\n}\n\n.brand > a{\n  color: white;\n  text-decoration: none;\n  font-size: 20px;\n}\n\n.options > a{\n  color: white;\n  text-decoration: none;\n  font-size: 20px;\n}\n\n.tooltip > a {\n  color: white;\n  text-decoration: none;\n  font-size: 20px;\n}\n\n@media only screen and (max-width: 430px) {\n  .brand > a{\n    font-size: 14px;\n  }\n\n  .options > a{\n    font-size: 14px;\n  }\n\n  .tooltip > a {\n    font-size: 14px;\n  }\n}\n\n.parallax {\n  /* The image used */\n  background-image: url('background.066bdfbc45952791acda.jpeg');\n\n  /* Full height */\n  height: 100%;\n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: -ms-grid;\n\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: center;\n\n  margin-left: -8px;\n  margin-right: -8px;\n  margin-top: -8px;\n}\n\n.routing{\n  height: 100%;\n  margin-top: 1em;\n}\n\n.title{\n  display: -ms-grid;\n  display: grid;\n  color: black;\n  font-family: 'Trocchi', serif;\n  font-size: 50px;\n  font-weight: normal;\n  line-height: 48px;\n  margin: 0;\n  text-align: center;\n}\n\n.arrow {\n  position: absolute;\n  bottom: 0;\n  right: 2%;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n  <div>\n    <p class=\"title\">Prantar Bhowmik</p>\n    <hr>\n    <p class=\"title\">Software Developer</p>\n  </div>\n  <div class=\"arrow\" [ngx-scroll-to]=\"'#nav-bar'\">\n    <i class=\"fas fa-arrow-down fa-5x\" style=\"background:rgba(255, 255, 255, 0.10);\"></i>\n  </div>\n</div>\n\n\n<nav id=\"nav-bar\">\n  <div class=\"brand\">\n    <a routerLink=\"\" routerLinkActive=\"active\" (click)=\"setTitle('Prantar Bhowmik - HomePage')\">Prantar Bhowmik</a>\n  </div>\n  <div class=\"options\">\n    <a routerLink=\"experience\" routerLinkActive=\"active\" (click)=\"setTitle('Prantar Bhowmik - Experience')\">Experience</a>\n    <a routerLink=\"ta\" routerLinkActive=\"active\" (click)=\"setTitle('Prantar Bhowmik - Teaching Assistant')\">TA</a>\n    <a routerLink=\"projects\" routerLinkActive=\"active\" (click)=\"setTitle('Prantar Bhowmik - Projects')\">Projects</a>\n    <a routerLink=\"contact\" routerLinkActive=\"active\" (click)=\"setTitle('Prantar Bhowmik - Contact')\">Contact</a>\n  </div>\n</nav>\n\n<div class=\"routing\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Prantar Bhowmik - HomePage';
    }
    AppComponent.prototype.ngOnInit = function () { };
    /*
    * Send a string as parameter
    *
    * The parameter will set the title of the browser toolbar
    */
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__ = __webpack_require__("./src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ta_ta_component__ = __webpack_require__("./src/app/ta/ta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ta_csca08f16_csca08f16_component__ = __webpack_require__("./src/app/ta/csca08f16/csca08f16.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ta_csca08f17_csca08f17_component__ = __webpack_require__("./src/app/ta/csca08f17/csca08f17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ta_csca48s17_csca48s17_component__ = __webpack_require__("./src/app/ta/csca48s17/csca48s17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ta_csca48w17_csca48w17_component__ = __webpack_require__("./src/app/ta/csca48w17/csca48w17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ta_csca48w18_csca48w18_component__ = __webpack_require__("./src/app/ta/csca48w18/csca48w18.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_vertical_timeline__ = __webpack_require__("./node_modules/angular-vertical-timeline/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__["a" /* ExperienceComponent */] },
    { path: 'ta', component: __WEBPACK_IMPORTED_MODULE_9__ta_ta_component__["a" /* TaComponent */] },
    { path: 'ta/csca08f16', component: __WEBPACK_IMPORTED_MODULE_11__ta_csca08f16_csca08f16_component__["a" /* Csca08f16Component */] },
    { path: 'ta/csca48w17', component: __WEBPACK_IMPORTED_MODULE_14__ta_csca48w17_csca48w17_component__["a" /* Csca48w17Component */] },
    { path: 'ta/csca48s17', component: __WEBPACK_IMPORTED_MODULE_13__ta_csca48s17_csca48s17_component__["a" /* Csca48s17Component */] },
    { path: 'ta/csca08f17', component: __WEBPACK_IMPORTED_MODULE_12__ta_csca08f17_csca08f17_component__["a" /* Csca08f17Component */] },
    { path: 'ta/csca48w18', component: __WEBPACK_IMPORTED_MODULE_15__ta_csca48w18_csca48w18_component__["a" /* Csca48w18Component */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', redirectTo: '/' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ta_ta_component__["a" /* TaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ta_csca08f16_csca08f16_component__["a" /* Csca08f16Component */],
                __WEBPACK_IMPORTED_MODULE_12__ta_csca08f17_csca08f17_component__["a" /* Csca08f17Component */],
                __WEBPACK_IMPORTED_MODULE_13__ta_csca48s17_csca48s17_component__["a" /* Csca48s17Component */],
                __WEBPACK_IMPORTED_MODULE_14__ta_csca48w17_csca48w17_component__["a" /* Csca48w17Component */],
                __WEBPACK_IMPORTED_MODULE_15__ta_csca48w18_csca48w18_component__["a" /* Csca48w18Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_vertical_timeline__["a" /* VerticalTimelineModule */],
                __WEBPACK_IMPORTED_MODULE_17__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* Title */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".contact > div {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[5];\n      grid-template-columns: repeat(5, 1fr);\n  grid-gap: 1em;\n}\n\n@media only screen and (max-width: 360px) {\n  .contact > div {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 2fr;\n        grid-template-columns: 1fr 2fr;\n    grid-row-gap: 0.25em;\n  }\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>You can contact me by:</p>\n</div>\n<div class=\"contact\">\n  <div>\n    <p>Email:</p>\n    <p>prantar.bhowmik@mail.utoronto.ca</p>\n    <a href=\"mailto:prantar.bhowmik@mail.utoronto.ca\"\n      alt=\"mail icon\"\n      title=\"prantar.bhowmik@mail.utoronto.ca\">\n      <i class=\"fas fa-envelope-square fa-3x\"></i>\n    </a>\n  </div>\n  <div>\n    <p>Github:</p>\n    <p>bhowmikp</p>\n    <a href=\"https://github.com/bhowmikp\"\n      alt=\"github icon\"\n      target=\"_blank\"\n      rel=\"noopener\"\n      title=\"bhowmikp\">\n      <i class=\"fab fa-github-square fa-3x\"></i>\n    </a>\n  </div>\n  <div>\n    <p>Linkedin:</p>\n    <p>prantar</p>\n    <a href=\"https://www.linkedin.com/in/prantar\"\n      alt=\"linkedin icon\"\n      title=\"prantar\"\n      target=\"_blank\"\n      rel=\"noopener\">\n      <i class=\"fab fa-linkedin fa-3x\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1em;\n}\n\n.btn-group > a{\n  background-color: #3F51B5;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.heading{\n  font-size: 26px;\n  margin-bottom: -10px;\n}\n"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <a href=\"../../assets/Prantar-Resume.pdf\" target=\"_blank\" rel=\"noopener\" role=\"button\">\n    View Resume\n  </a>\n  <a href=\"../../assets/Prantar-Resume.pdf\" download=\"Prantar-Resume.pdf\" role=\"button\">\n    Download Resume\n  </a>\n</div>\n\n<div>\n  <p class=\"heading\">University of Toronto (2015 - Present)</p>\n  <br>\n  Bachelor of Science\n  <br>\n  <p class=\"heading\">Recognition</p>\n  <br>\n  UofT The Hub Startup Challenge (Top 5)\n  <br>\n  Microsoft Coding Challenge (Top 3)\n  <br>\n  MHacks 8 (Top 10)\n  <br>\n  Finance Hacks (Top 3)\n</div>\n\n<p class=\"heading\">Experience</p>\n\n<vertical-timeline>\n\n  <vertical-timeline-card\n    [dateValue]=\"\"\n    [timeString]=\"' '\"\n    [color]=\"\">\n    <p>Position: Teaching Assistant</p>\n    <p>Period: September 2016 - Present</p>\n    <ul>\n      <li>\n        Taught CSCA08 (Intro to Computer Programming) and CSCA48 (Intro to\n        Computer Science) about programming concepts such as Object-Oriented\n        Programming and data structures to groups of over 30 students\n      </li>\n      <li>\n        Posted tutorial materials on personal website, invigilated exams, participated\n        actively on course discussion forums, and held office hours and seminars to\n        facilitate learning and address questions or concerns\n      </li>\n    </ul>\n  </vertical-timeline-card>\n\n  <vertical-timeline-card\n    [dateValue]=\"'2018,04,23'\"\n    [timeString]=\"' '\"\n    [color]=\"'#d9f442'\">\n    <p>Position: Full Stack Developer</p>\n    <p>Period: May 2017 - April 2018</p>\n    <ul>\n      <li>\n        Created a student information tracking system powered by a SQLite database\n      </li>\n      <li>\n        Learned and wrote frontend in Angular to improve user-friendliness\n      </li>\n      <li>\n        Utilized Django to connect backend database operations with frontend\n        requirements\n      </li>\n    </ul>\n  </vertical-timeline-card>\n\n</vertical-timeline>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("./src/app/experience/experience.component.html"),
            styles: [__webpack_require__("./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 767px) {\n  .calendar {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 761px) {\n  .languages{\n    display: none;\n  }\n}\n\n.languages{\n  float:right;\n}\n\n.heading{\n  font-size: 26px;\n  margin-bottom: -10px;\n}\n\nli{\n  margin-left: -24px;\n}\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar\">\n  Loading...\n</div>\n\n<div class=\"languages\">\n  <iframe width=\"600\" height=\"600\"\n    src=\"https://ionicabizau.github.io/github-profile-languages/api.html?bhowmikp\"\n    frameborder=\"0\"></iframe>\n</div>\n\n<div>\n  <p class=\"heading\">Let Me Know</p>\n  <br>\n  <a href=\"https://letmeknow.news/\" target=\"_blank\" rel=\"noopener\">Website</a>\n  <br>\n  <ul>\n    <li>\n      Led the development on an web application which relevant articles for\n      trending topics in news and congregates, analyzes, and summarizes articles,\n      shows social media reaction, and generates links for further reading\n    </li>\n    <li>\n      Finalist at MHacks8 and funded by the incubator at University of Toronto\n    </li>\n    <li>\n      Used Django in the backend, which is multi-processed to make fetching\n      relevant articles faster. Angular is used in the frontend to take load off the\n      server and make some of the processing client side\n    </li>\n  </ul>\n</div>\n\n<hr>\n\n<div>\n  <p class=\"heading\">Pi Temperature</p>\n  <br>\n  <a href=\"https://github.com/bhowmikp/Pi_Temperature\" target=\"_blank\" rel=\"noopener\">Code</a>\n  <br>\n  <ul>\n    <li>\n      Monitors the Raspberry Pi's(Model 3B) temperature using the onboard sensor\n      and puts the information in a file. Temperature and cpu speed are recorded\n      to determine, board usage is effecting temperrature. Intention of the\n      project was to find a co-relation between the temperature of board and\n      room temperature and then use the temperature of the board to predict\n      room temperature.\n    </li>\n  </ul>\n</div>\n\n<hr>\n\n<div>\n  <p class=\"heading\">Prantar.me chrome extension</p>\n  <br>\n  <a href=\"https://chrome.google.com/webstore/detail/httpsprantarme/ncikglnjhfgfjpafebocgaekhaidodlk\" target=\"_blank\" rel=\"noopener\">Extension</a>\n  <a href=\"https://github.com/bhowmikp/prantar.me-chrome-extension\" target=\"_blank\" rel=\"noopener\">Code</a>\n  <br>\n  <ul>\n    <li>\n      App checks and informs users of any recent updates to personal sites\n    </li>\n    <li>\n      Used HTML, JavaScript, JSON, and became familiar with the Chrome API\n    </li>\n  </ul>\n</div>\n\n<hr>\n\n<div>\n  <p class=\"heading\">Password Generator</p>\n  <br>\n  <a href=\"https://github.com/bhowmikp/Password_Generator\" target=\"_blank\" rel=\"noopener\">Code</a>\n  <br>\n  <ul>\n    <li>\n      App creates and stores cryptographically secure password for accounts\n    </li>\n    <li>\n      Wrote unit testing and created a GUI to make the app user friendly\n    </li>\n  </ul>\n</div>\n\n<hr>\n\n<div>\n  <p class=\"heading\">Lingo Game</p>\n  <br>\n  <a href=\"https://github.com/bhowmikp/Lingo_game\" target=\"_blank\" rel=\"noopener\">Code</a>\n  <br>\n  <ul>\n    <li>\n      Game consists of several mini games\n    </li>\n    <li>\n      Java swing was used to create the games\n    </li>\n  </ul>\n</div>\n\n<hr>\n\n<div>\n  <p class=\"heading\">CSEC Chatbot</p>\n  <br>\n  <a href=\"https://github.com/bhowmikp/CSEC_Chatbot\" target=\"_blank\" rel=\"noopener\">Code</a>\n  <br>\n  <ul>\n    <li>\n      Facebook chatbot that replies to people's questions when they message the facebook page\n    </li>\n  </ul>\n</div>\n\n<hr>\n\n<div>\n  <p class=\"heading\">Honey Badger</p>\n  <br>\n  <a href=\"https://github.com/bhowmikp/UTSC-Hackathon\" target=\"_blank\" rel=\"noopener\">Code</a>\n  <br>\n  <ul>\n    <li>\n      Made website which scans a product barcode and informs user of the environmental cost\n    </li>\n    <li>\n      Utilized HTML, CSS, Python, Bloomberg API\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    /*
    * Initializes github calendar on id - 'calendar' for user - 'bhowmikp'
    */
    ProjectsComponent.prototype.ngOnInit = function () {
        GitHubCalendar('.calendar', 'bhowmikp', {
            responsive: true,
            global_stats: true,
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/ta/csca08f16/csca08f16.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ta/csca08f16/csca08f16.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight: 900;font-size: -webkit-xxx-large;text-align: center; line-height: 1.0;\">Welcome to CSCA08</p>\n<p><b>Tutorial 30</b>: Wednesday, 10:00 AM - 11:00 AM, at IC326.</p>\n<p><b>TA name</b>: Prantar Bhowmik</p>\n<p>I will update this website on a weekly basis. All code written in class will be made available here.</p>\n<p>There may or may not be quiz held in the tutorial so please be on time.</p>\n<br>\n<p>You can attend any practical held by any CSCA08 TA. I'll be at: </p>\n<p><b>Practical 002</b>: Monday, 4:00 PM - 5:00 PM, at BV471.</p>\n<hr>\n<p><b><u>Email Policy</u></b></p>\n<p>My email address is <u>prantar.bhowmik@mail.utoronto.ca</u>. I will be checking my email every night. But before you email me, consider attending a practical or post the question on <a href = \"https://piazza.com/mail.utoronto.ca/fall2016/csca08\">Piazza</a> as you will get a much faster response there.</p>\n<p>If you email me, use your utoronto email, any other email address will go directly to spam.</p>\n<p>Also, in the subject write \"CSCA08\" to increase my chances of responding.</p>\n<hr>\n<p><b><u>Feedback</u></b></p>\n<p>I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback <a href = \"https://prantar.me/feedback\">here</a></p>\n\n<br>\n<br>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 12: November 30, 2016</u></b></p>\n<ul>\n\t<li>Discussed importance of unit testing</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 11: November 23, 2016</u></b></p>\n<ul>\n\t<li>Discussed UML diagrams</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 10: November 16, 2016</u></b></p>\n<ul>\n\t<li>Inheritance: <a href=\"/assets/csca08f16/inheritance_w10.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 9: November 9, 2016</u></b></p>\n<ul>\n  <li>Class: <a href=\"/assets/csca08f16/class_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <br>\n  <li>Template on how to write descriptions in docstring: <a href=\"/assets/csca08f16/description_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li><b>Remember to write rest of the docstring. You don't have to follow the template exactly, treat it more like a guideline</b></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 8: November 2, 2016</u></b></p>\n<ul>\n\t<li>Dictionary: <a href=\"/assets/csca08f16/dict_w8.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li>My code to explain what dictionaries are. This is bad code. Only wrote this for demo purposes: <a href=\"/assets/csca08f16/my_code_dict_w8.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 7: October 26, 2016</u></b></p>\n<ul>\n\t<li>Memory Model: <a href=\"/assets/csca08f16/memory_model_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li><a href = \"http://pythontutor.com/\">Python Tutor</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 6: October 19, 2016</u></b></p>\n<ul>\n\t<li>Good/Bad Code <a href=\"/assets/csca08f16/good_code_w6.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<br>\n\t<li>Return Midterm</li>\n\t<ul>\n\t\t<li>IF there are any issues, write it in the front page of the exam and return back to TA</li>\n\t\t<li>IF test leaves room with you, mark is set</li>\n\t</ul>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 5: October 5, 2016</u></b></p>\n<ul>\n\t<li>IMPORTANT CONCEPTS FOR MIDTERM</li>\n\t<ul>\n\t\t<li class = \"txt-style\">Memory Model -- <a href = \"http://pythontutor.com/\">Python Tutor</a></li>\n\t\t<li class = \"txt-style\">Functions</li>\n\t\t<li class = \"txt-style\">Design Recipe</li>\n\t\t<li class = \"txt-style\">Boolean Logic</li>\n\t</ul>\n\t<li class = \"txt-style\">Import: <a href=\"/assets/csca08f16/import_a_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a> <a href=\"/assets/csca08f16/import_b_w5.txt\" target=\"_blank\" rel=\"noopener\">2</a></li>\n\t<li class = \"txt-style\">Debugger: <a href=\"/assets/csca08f16/debug_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 4: September 28, 2016</u></b></p>\n<ul>\n\t<li class = \"txt-style\">Documenting: <a href=\"/assets/csca08f16/documenting_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li class = \"txt-style\">Doctest: <a href=\"/assets/csca08f16/doctest_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li class = \"txt-style\"><a href=\"http://pep8online.com/\" target=\"_blank\" rel=\"noopener\">PEP8</a></li>\n\t<br>\n\t<li class = \"txt-style\">Code written in class for documenting demo: <a href=\"/assets/csca08f16/documenting_w4_1.txt\" target=\"_blank\" rel=\"noopener\">Code</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 3: September 21, 2016</u></b></p>\n<ul>\n\t<li>Memory Model: <a href=\"/assets/csca08f16/memory_model_w3_1.txt\" target=\"_blank\" rel=\"noopener\">1</a>, <a href=\"/assets/csca08f16/memory_model_w3_2.txt\" target=\"_blank\" rel=\"noopener\">2</a>, <a href=\"/assets/csca08f16/memory_model_w3_3.txt\" target=\"_blank\" rel=\"noopener\">3</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 2: September 14, 2016</u></b></p>\n<ul>\n\t<li>Difference between Python vs Wing</li>\n\t<li>Python version</li>\n\t<li>Difference between shell and writing file</li>\n</ul>\n<p>Code I worte to determine if the version of python is acceptable: <a href=\"/assets/csca08f16/python_version_w2.txt\" target=\"_blank\" rel=\"noopener\">python-version</a></p>\n"

/***/ }),

/***/ "./src/app/ta/csca08f16/csca08f16.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Csca08f16Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Csca08f16Component = /** @class */ (function () {
    function Csca08f16Component() {
    }
    Csca08f16Component.prototype.ngOnInit = function () {
    };
    Csca08f16Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-csca08f16',
            template: __webpack_require__("./src/app/ta/csca08f16/csca08f16.component.html"),
            styles: [__webpack_require__("./src/app/ta/csca08f16/csca08f16.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Csca08f16Component);
    return Csca08f16Component;
}());



/***/ }),

/***/ "./src/app/ta/csca08f17/csca08f17.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ta/csca08f17/csca08f17.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight: 900;font-size: -webkit-xxx-large;text-align: center; line-height: 1.0;\">Welcome to CSCA08</p>\n<p><b>Tutorial 07</b>: Tuesday, 9:00 AM - 10:00 AM, at BV264.</p>\n<p><b>TA name</b>: Prantar Bhowmik</p>\n<p>I will update this website on a weekly basis. All code written in class will be made available here.</p>\n<p>There may or may not be quiz held in the tutorial so please be on time.</p>\n<br>\n<p>You can attend any practical held by any CSCA08 TA. I'll be at: </p>\n<p><b>Practical 004</b>: Tuesday, 12:00 Noon - 1:00 PM, at BV466.</p>\n<hr>\n<p><b><u>Email Policy</u></b></p>\n<p>My email address is <u>prantar.bhowmik@mail.utoronto.ca</u>. I will be checking my email every night. But before you email me, consider attending a practical or post the question on <a href = \"https://piazza.com/mail.utoronto.ca/fall2017/csca08\">Piazza</a> as you will get a much faster response there.</p>\n<p>If you email me, use your utoronto email, any other email address will go directly to spam.</p>\n<p>Also, in the subject write \"CSCA08\" to increase my chances of responding.</p>\n<hr>\n<p><b><u>Feedback</u></b></p>\n<p>I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback <a href = \"https://prantar.me/feedback\">here</a></p>\n<br>\n<br>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 12: November 28, 2017</u></b></p>\n<ul>\n  <li>Unit Testing</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 11: November 21, 2017</u></b></p>\n<ul>\n  <li>UML</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 10: November 14, 2017</u></b></p>\n<ul>\n  <li>UML</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 9: November 7, 2017</u></b></p>\n<ul>\n  <li>Object Oriented Programming: <a href=\"/assets/csca08f17/calendar_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a> </li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 8: October 31, 2017</u></b></p>\n<ul>\n  <li>Invert Dictionary: <a href=\"/assets/csca08f17/invert_dict_w8.txt\" target=\"_blank\" rel=\"noopener\">1</a> </li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 7: October 24, 2017</u></b></p>\n<ul>\n  <li>Memory Model: <a href=\"/assets/csca08f17/mutability_tracing_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a> </li>\n  <li><a href=\"http://pythontutor.com\" target=\"_blank\" rel=\"noopener\">Python Tutor</a>: change settings to Python 3.6, render all objects on the heap, use text labels for pointers</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 6: October 17, 2017</u></b></p>\n<ul>\n  <li>Import: <a href=\"/assets/csca08f17/import_a_w6.txt\" target=\"_blank\" rel=\"noopener\">1</a> <a href=\"/assets/csca08f17/import_b_w6.txt\" target=\"_blank\" rel=\"noopener\">2</a></li>\n  <li>Debugger</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 5: October 3, 2017</u></b></p>\n<ul>\n  <li>Good/Bad code: <a href=\"/assets/csca08f17/selection_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 4: September 26, 2017</u></b></p>\n<ul>\n  <li>Design Recipe and Doctest: <a href=\"/assets/csca08f17/design_recipe_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li><a href = \"http://pep8online.com/\" target = \"_blank\">PEP8</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 3: September 19, 2017</u></b></p>\n<ul>\n  <li>Memory Model: <a href=\"/assets/csca08f17/memory_model_w3_1.txt\" target=\"_blank\" rel=\"noopener\">1</a>, <a href=\"/assets/csca08f17/memory_model_w3_2.txt\" target=\"_blank\" rel=\"noopener\">2</a>, <a href=\"/assets/csca08f17/memory_model_w3_3.txt\" target=\"_blank\" rel=\"noopener\">3</a></li>\n  <li><a href = \"http://pythontutor.com/\" target = \"_blank\">Python Tutor</a> is a good resource to use to visualize the memory model. Choose \"render all objects\", \"use text labels for references\", and Python 3.3 to look a version of the memory model we are accustomed with.</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 2: September 12, 2017</u></b></p>\n<ul>\n  <li>Difference between Python vs Wing</li>\n  <li>Python version</li>\n  <li>Difference between shell and writing file</li>\n</ul>\n<p>Code I worte to determine if the version of python is acceptable: <a href=\"/assets/csca08f17/python_version_w2.txt\" target=\"_blank\" rel=\"noopener\">python-version</a></p>\n"

/***/ }),

/***/ "./src/app/ta/csca08f17/csca08f17.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Csca08f17Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Csca08f17Component = /** @class */ (function () {
    function Csca08f17Component() {
    }
    Csca08f17Component.prototype.ngOnInit = function () {
    };
    Csca08f17Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-csca08f17',
            template: __webpack_require__("./src/app/ta/csca08f17/csca08f17.component.html"),
            styles: [__webpack_require__("./src/app/ta/csca08f17/csca08f17.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Csca08f17Component);
    return Csca08f17Component;
}());



/***/ }),

/***/ "./src/app/ta/csca48s17/csca48s17.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ta/csca48s17/csca48s17.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight: 900;font-size: -webkit-xxx-large;text-align: center; line-height: 1.0;\">Welcome to CSCA48</p>\n<p><b>Tutorial 0006</b>: Monday, 2:00 PM - 3:00 PM, at MW 120.</p>\n<p><b>TA name</b>: Prantar Bhowmik</p>\n<p>I will update this website on a weekly basis. All code written in class will be made available here.</p>\n<p>There may or may not be quiz held in the tutorial so please be on time.</p>\n<br>\n<p>You can attend any practical held by any CSCA48 TA. I'll be at: </p>\n<p><b>Practical 002</b>: Monday, 6:00 PM - 7:00 PM, at BV 471.</p>\n<hr>\n<p><b><u>Email Policy</u></b></p>\n<p>My email address is <u>prantar.bhowmik@mail.utoronto.ca</u>. I will be checking my email every night. But before you email me, consider attending a practical or post the question on <a href = \"https://piazza.com/mail.utoronto.ca/summer2017/csca48\">Piazza</a> as you will get a much faster response there.</p>\n<p>If you email me, use your utoronto email, any other email address will go directly to spam.</p>\n<p>Also, in the subject write \"CSCA48\" to increase my chances of responding.</p>\n<hr>\n<p><b><u>Feedback</u></b></p>\n<p>I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback <a href = \"https://prantar.me/feedback\">here</a></p>\n<br>\n<br>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 12: July 31, 2017</u></b></p>\n<ul>\n    <li>Insertion Sort: <a href=\"/assets/csca48s17/insertion_sort_w12.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 11: July 24, 2017</u></b></p>\n<ul>\n    <li>Recursion. Binary Search: <a href=\"/assets/csca48s17/binary_search_w11.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 10: July 17, 2017</u></b></p>\n<ul>\n    <li>Recursion. Same string example: <a href=\"/assets/csca48s17/same_string_w10.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 9: July 10, 2017</u></b></p>\n<ul>\n  <li>Recursion. Fibonacci example: <a href=\"/assets/csca48s17/fib_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 8: June 26, 2017</u></b></p>\n<ul>\n  <li>Heap. Traced through the remove_max function: <a href=\"/assets/csca48s17/heap_w8.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>A visualization of min heap can be found: <a href=\"https://www.cs.usfca.edu/~galles/visualization/Heap.html\" target=\"_blank\" rel=\"noopener\">here</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 7: June 19, 2017</u></b></p>\n<ul>\n  <li>Deletion in Binary Search Tree: <a href=\"/assets/csca48s17/deletion_bst_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 6: June 12, 2017</u></b></p>\n<p>Traced through 'get_last' and 'retrieve' methods from the List class</p>\n<ul>\n  <li>Linked List: <a href=\"https://www.utsc.utoronto.ca/~bharrington/csca48/code/week5_linked_list.py\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 5: June 5, 2017</u></b></p>\n<ul>\n  <li>Doubly Linked List: <a href=\"/assets/csca48s17/dll_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 4: May 29, 2017</u></b></p>\n<ul>\n  <li>Deque ADT: <a href=\"/assets/csca48s17/deque_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Deque Dict ADT: <a href=\"/assets/csca48s17/deque_dict_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <br>\n  <li>Use of Deque: <a href=\"/assets/csca48s17/is_palindrome_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>How to make representation invariant: <a href=\"/assets/csca48s17/representation_invariant_maker_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 3: May 15, 2017</u></b></p>\n<ul>\n  <li>Queue ADT: <a href=\"/assets/csca48s17/queue_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Stack ADT: <a href=\"/assets/csca48s17/stack_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Decimal to Binary: <a href=\"/assets/csca48s17/binary_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 2: May 8, 2017</u></b></p>\n<ul>\n\t<li>Memory Model: <a href = \"/assets/csca48s17/memory_model_w2.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li><a href=\"http://pythontutor.com/\" target=\"_blank\" rel=\"noopener\">Python Tutor</a> is a good resource to use to visualize the memory model. Choose \"render all objects\", \"use text labels for references\", and Python 3.3 to look a version of the memory model we are accustomed with.</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/ta/csca48s17/csca48s17.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Csca48s17Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Csca48s17Component = /** @class */ (function () {
    function Csca48s17Component() {
    }
    Csca48s17Component.prototype.ngOnInit = function () {
    };
    Csca48s17Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-csca48s17',
            template: __webpack_require__("./src/app/ta/csca48s17/csca48s17.component.html"),
            styles: [__webpack_require__("./src/app/ta/csca48s17/csca48s17.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Csca48s17Component);
    return Csca48s17Component;
}());



/***/ }),

/***/ "./src/app/ta/csca48w17/csca48w17.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ta/csca48w17/csca48w17.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight: 900;font-size: -webkit-xxx-large;text-align: center; line-height: 1.0;\">Welcome to CSCA48</p>\n<p><b>Tutorial 0002</b>: Monday, 10:00 AM - 11:00 AM, at IC 208.</p>\n<p><b>TA name</b>: Prantar Bhowmik</p>\n<p>I will update this website on a weekly basis. All code written in class will be made available here.</p>\n<p>There may or may not be quiz held in the tutorial so please be on time.</p>\n<br>\n<p>You can attend any practical held by any CSCA48 TA. I'll be at: </p>\n<p><b>Practical 004</b>: Wednesday, 4:00 PM - 5:00 PM, at BV 471.</p>\n<hr>\n<p><b><u>Email Policy</u></b></p>\n<p>My email address is <u>prantar.bhowmik@mail.utoronto.ca</u>. I will be checking my email every night. But before you email me, consider attending a practical or post the question on <a href = \"https://piazza.com/mail.utoronto.ca/winter2017/csca48\">Piazza</a> as you will get a much faster response there.</p>\n<p>If you email me, use your utoronto email, any other email address will go directly to spam.</p>\n<p>Also, in the subject write \"CSCA48\" to increase my chances of responding.</p>\n<hr>\n<p><b><u>Feedback</u></b></p>\n<p>I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback <a href = \"https://prantar.me/feedback\">here</a></p>\n<br>\n<br>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 11: March 20, 2017</u></b></p>\n<ul>\n  <li>Insertion Sort: <a href = \"/assets/csca48w17/insertion_sort_w11.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Worst case runtime for Insertion Sort: O(n)^2</li>\n  <li>Best case runtime for Insertion Sort: O(n)</li>\n  <br>\n  <li>Optional- More detail on complexity: <a href = \"https://www.utsc.utoronto.ca/~csec/slides/W6_Complexity.pdf\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 10: March 13, 2017</u></b></p>\n<ul>\n  <li>Tree Algo: <a href = \"/assets/csca48w17/tree_algo_w10.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 9: March 5, 2017</u></b></p>\n<ul>\n  <li>Binary Search: <a href = \"/assets/csca48w17/binary_search_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Worst case runtime for Binary search: O(logn)</li>\n  <li>Best case runtime for Binary search: O(1)</li>\n  <br>\n  <li>Worst case runtime for Binary search: O(n)</li>\n  <li>Best case runtime for Binary search: O(1)</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 8: February 27, 2017</u></b></p>\n<ul>\n  <li>Same String: <a href = \"/assets/csca48w17/same_string_w8.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 7: February 13, 2017</u></b></p>\n<ul>\n  <li>Fibonacci Sequence: <a href = \"/assets/csca48w17/fib_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <br>\n  <li>Visualize Fib: <a href = \"/assets/csca48w17/visualize_fib_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li><a href = \"http://pythontutor.com/\" target = \"_blank\">Python Tutor</a> is a good resource to use to visualize the memory model. Choose \"render all objects\", \"use text labels for references\", and Python 3.3 to look a version of the memory model we are accustomed with.</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 6: February 6, 2017</u></b></p>\n<ul>\n  <li>Binary Search Trees: <a href = \"/assets/csca48w17/bst_w6.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>A visualization of BST can be found <a href = \"https://www.cs.usfca.edu/~galles/visualization/BST.html\" target = \"_blank\">here</a>. The only problem with this is that if two nodes are equal it picks the left child instead of the right. But otherwise I think it does a pretty good job.</li>\n  <br>\n  <li>Heaps: <a href = \"/assets/csca48w17/heap_w6.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>A visualization of min heap can be found <a href = \"https://www.cs.usfca.edu/~galles/visualization/Heap.html\" target = \"_blank\">here</a>.</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 5: January 30, 2017</u></b></p>\n<ul>\n  <li>Binary Search Trees: <a href = \"/assets/csca48w17/trees_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 4: January 23, 2017</u></b></p>\n<ul>\n  <li>Doubly Linked List: <a href = \"/assets/csca48w17/dll_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 3: January 16, 2017</u></b></p>\n<ul>\n  <li>Deque ADT: <a href = \"/assets/csca48w17/deque_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Deque Dict ADT: <a href = \"/assets/csca48w17/deque_dict_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <br>\n  <li>Use of Deque: <a href = \"/assets/csca48w17/is_palindrome_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>How to make representation invariant: <a href = \"/assets/csca48w17/representation_invariant_maker_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 2: January 9, 2017</u></b></p>\n<ul>\n  <li>Queue ADT: <a href = \"/assets/csca48w17/queue_w2.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Stack ADT: <a href = \"/assets/csca48w17/stack_w2.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n  <li>Decimal to Binary: <a href = \"/assets/csca48w17/binary_w2.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/ta/csca48w17/csca48w17.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Csca48w17Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Csca48w17Component = /** @class */ (function () {
    function Csca48w17Component() {
    }
    Csca48w17Component.prototype.ngOnInit = function () {
    };
    Csca48w17Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-csca48w17',
            template: __webpack_require__("./src/app/ta/csca48w17/csca48w17.component.html"),
            styles: [__webpack_require__("./src/app/ta/csca48w17/csca48w17.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Csca48w17Component);
    return Csca48w17Component;
}());



/***/ }),

/***/ "./src/app/ta/csca48w18/csca48w18.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ta/csca48w18/csca48w18.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight: 900;font-size: -webkit-xxx-large;text-align: center; line-height: 1.0;\">Welcome to CSCA48</p>\n<p><b>Tutorial 0011</b>: Thursday, 10:00 AM - 11:00 AM, at IC 120.</p>\n<p><b>TA name</b>: Prantar Bhowmik</p>\n<p>I will update this website on a weekly basis. All code written in class will be made available here.</p>\n<p>There may or may not be quiz held in the tutorial so please be on time.</p>\n<br>\n<p>You can attend any practical held by any CSCA48 TA. I'll be at: </p>\n<p><b>Practical 005</b>: Wednesday, 5:00 PM - 6:00 PM, at BV 471.</p>\n<hr>\n<p><b><u>Email Policy</u></b></p>\n<p>My email address is <u>prantar.bhowmik@mail.utoronto.ca</u>. I will be checking my email every night. But before you email me, consider attending a practical or post the question on <a href = \"https://piazza.com/mail.utoronto.ca/winter2018/csca48\">Piazza</a> as you will get a much faster response there.</p>\n<p>If you email me, use your utoronto email, any other email address will go directly to spam.</p>\n<p>Also, in the subject write \"CSCA48\" to increase my chances of responding.</p>\n<hr>\n<p><b><u>Feedback</u></b></p>\n<p>I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback <a href = \"https://prantar.me/feedback\">here</a></p>\n<br>\n<br>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 12: April 5, 2018</u></b></p>\n<span>Sorting Algorithms and Time Complexity</span>\n<ul>\n  <li>Bubble Sort</li>\n  <li>Selection Sort</li>\n  <li>Insertion Sort</li>\n  <li>Quick Sort</li>\n  <li>Merge Sort</li>\n  <li>Heap Sort</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 11: March 29, 2018</u></b></p>\n<span>Recursion and Time Complexity</span>\n<ul>\n  <li>Same string: <a href=\"/assets/csca48w18/same_string_w11.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 10: March 22, 2018</u></b></p>\n<span>Big O</span>\n<ul>\n  <li>Big O cheatsheet: <a href=\"http://bigocheatsheet.com/\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 9: March 15, 2018</u></b></p>\n<span>More recursion</span>\n<ul>\n\t<li>HTree: <a href = \"/assets/csca48w18/htree_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li>Graphics.py: <a href = \"/assets/csca48w18/graphics_w9.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 8: March 8, 2018</u></b></p>\n<span>Recursion</span>\n<ul>\n\t<li>Vowel Count: <a href = \"/assets/csca48w18/vowel_count_w8.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 7: March 1, 2018</u></b></p>\n<ul>\n\t<li>Heap: <a href = \"/assets/csca48w18/heap_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li>More heap: <a href = \"/assets/csca48w18/more_heap_w7.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 6: February 15, 2018</u></b></p>\n<span>Binary Trees</span>\n<ul>\n\t<li>Difference between TNode(points to child only) and BTNode(points to child and child points back to parent)</li>\n\t<li>Traversals: Pre-order(VLR), In-order(LVR), Post-order(LVR)</li>\n\t<li>How to delete node from BST</li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 5: February 8, 2018</u></b></p>\n<ul>\n\t<li>DLL Node and List: <a href = \"/assets/csca48w18/DLL_Node_List_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li>DLL insert and remove methods: <a href = \"/assets/csca48w18/index_dll_w5.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 4: February 1, 2018</u></b></p>\n<ul>\n\t<li>Dequeue ADT: <a href = \"/assets/csca48w18/dequeue_w4.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 3: January 25, 2018</u></b></p>\n<ul>\n\t<li>How to make representation invariant: <a href = \"/assets/csca48w18/representation_invariant_maker_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<br>\n\t<li>Stack ADT: <a href = \"/assets/csca48w18/stack_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n\t<li>Decimal to Binary: <a href = \"/assets/csca48w18/decimal_to_binary_w3.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n\n<hr style=\"height: 1px;background-color:#333;\">\n<p><b><u>Week 2: January 18, 2018</u></b></p>\n<ul>\n\t<li>Vector ADT: <a href = \"/assets/csca48w18/vector_w2.txt\" target=\"_blank\" rel=\"noopener\">1</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/ta/csca48w18/csca48w18.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Csca48w18Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Csca48w18Component = /** @class */ (function () {
    function Csca48w18Component() {
    }
    Csca48w18Component.prototype.ngOnInit = function () {
    };
    Csca48w18Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-csca48w18',
            template: __webpack_require__("./src/app/ta/csca48w18/csca48w18.component.html"),
            styles: [__webpack_require__("./src/app/ta/csca48w18/csca48w18.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Csca48w18Component);
    return Csca48w18Component;
}());



/***/ }),

/***/ "./src/app/ta/ta.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\n  list-style-type: none;\n}\n\nli {\n  margin-top: 10px;\n  margin-left: -40px;\n}\n"

/***/ }),

/***/ "./src/app/ta/ta.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li>\n    <a routerLink=\"csca48w18\" routerLinkActive=\"active\">\n      CSCA48 2018 Winter (Introduction to Computer Programming II)\n    </a>\n  </li>\n  <li>\n    <a routerLink=\"csca08f17\" routerLinkActive=\"active\">\n      CSCA08 2017 Fall (Introduction to Computer Science I)\n    </a>\n  </li>\n  <li>\n    <a routerLink=\"csca48s17\" routerLinkActive=\"active\">\n      CSCA48 2017 Summer (Introduction to Computer Programming II)\n    </a>\n  </li>\n  <li>\n    <a routerLink=\"csca48w17\" routerLinkActive=\"active\">\n      CSCA48 2017 Winter (Introduction to Computer Programming II)\n    </a>\n  </li>\n  <li>\n    <a routerLink=\"csca08f16\" routerLinkActive=\"active\">\n      CSCA08 2016 Fall (Introduction to Computer Science I)\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/ta/ta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaComponent = /** @class */ (function () {
    function TaComponent() {
    }
    TaComponent.prototype.ngOnInit = function () {
    };
    TaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ta',
            template: __webpack_require__("./src/app/ta/ta.component.html"),
            styles: [__webpack_require__("./src/app/ta/ta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaComponent);
    return TaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map