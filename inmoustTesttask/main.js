(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/e9g":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/genre-card/genre-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [style.backgroundColor]=\"genreData?.color\" (click)='genreLink(genreData?.title)'>\n  <div class=\"card__content\">\n    <h3 class=\"card__title\">{{ genreData?.title }}</h3>\n    <div class=\"card__label\">\n      <img src=\"{{ genreData?.image }}\" alt=\"{{ genreData?.title }}\" />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Episode\Desktop\inmoustTesttask\src\main.ts */"zUnb");


/***/ }),

/***/ "00VZ":
/*!***************************************************!*\
  !*** ./src/app/shared/services/albums.service.ts ***!
  \***************************************************/
/*! exports provided: AlbumsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsService", function() { return AlbumsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/localStorege/routes/album.storeg */ "BIqz");




let AlbumsService = class AlbumsService {
    constructor() {
        this.counterLikeState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_3__["AlbumsStorage"].get().length);
        this.searchAlbumsState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    setCounterLike(number) {
        this.counterLikeState$.next(number);
    }
    get getCounterLike$() {
        return this.counterLikeState$.asObservable();
    }
    setSearch(value) {
        this.searchAlbumsState$.next(value);
    }
    getSearch$() {
        return this.searchAlbumsState$.asObservable();
    }
};
AlbumsService.ctorParameters = () => [];
AlbumsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AlbumsService);



/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "aSPh");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "mbft");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _genre_card_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genre-card-data */ "tog9");





let HomeComponent = class HomeComponent {
    constructor() {
        this.genreData = [];
    }
    ngOnInit() {
        this.genreData = _genre_card_data__WEBPACK_IMPORTED_MODULE_4__["genreDate"];
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "2x7r":
/*!*****************************************************!*\
  !*** ./src/app/core/localStorege/storage.helper.ts ***!
  \*****************************************************/
/*! exports provided: StorageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageHelper", function() { return StorageHelper; });
class StorageHelper {
    static type(status) {
        return this.types[status];
    }
}
StorageHelper.types = [localStorage, sessionStorage];


/***/ }),

/***/ "4zFb":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/genre-card/genre-card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  max-width: calc(1170px / 3 - 20px);\n  width: 100%;\n  height: 250px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  background: tomato;\n  font-size: 3rem;\n  cursor: pointer;\n}\n.card__title {\n  font-weight: 400;\n}\n.card__label {\n  position: absolute;\n  bottom: 0;\n  right: -55px;\n}\n.card__label img {\n  max-width: 150px;\n  transform: rotate(18deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2VucmUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBRU4iLCJmaWxlIjoiZ2VucmUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDExNzBweCAvIDMgLSAyMHB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHRvbWF0bztcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgJl9fbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IC01NXB4O1xuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICAgIH1cbiAgfVxufVxuIl19 */");

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

/***/ "BIqz":
/*!**********************************************************!*\
  !*** ./src/app/core/localStorege/routes/album.storeg.ts ***!
  \**********************************************************/
/*! exports provided: AlbumsStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsStorage", function() { return AlbumsStorage; });
/* harmony import */ var _storage_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.helper */ "2x7r");
/* harmony import */ var _enums_srorage_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/srorage-type.enum */ "N0HB");
/* harmony import */ var _constant_storage_contant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/storage.contant */ "DuWN");



class AlbumsStorage extends _storage_helper__WEBPACK_IMPORTED_MODULE_0__["StorageHelper"] {
    constructor() {
        super();
    }
    static get(type = 0) {
        return this.type(type).getItem(_constant_storage_contant__WEBPACK_IMPORTED_MODULE_2__["ALBUMS"])
            ? JSON.parse(this.type(type).getItem(_constant_storage_contant__WEBPACK_IMPORTED_MODULE_2__["ALBUMS"]))
            : [];
    }
    static set(albums, type = _enums_srorage_type_enum__WEBPACK_IMPORTED_MODULE_1__["StorageTypeEnum"].local) {
        this.type(type).setItem(_constant_storage_contant__WEBPACK_IMPORTED_MODULE_2__["ALBUMS"], JSON.stringify(albums));
    }
    static remove(album) {
        const albums = this.get().filter((a) => a.name !== album.name);
        this.set(albums);
    }
}


/***/ }),

/***/ "DuWN":
/*!**************************************************!*\
  !*** ./src/app/core/constant/storage.contant.ts ***!
  \**************************************************/
/*! exports provided: ALBUMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALBUMS", function() { return ALBUMS; });
const ALBUMS = 'albums';


/***/ }),

/***/ "GlVr":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/genre-card/genre-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: GenreCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreCardComponent", function() { return GenreCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_genre_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./genre-card.component.html */ "/e9g");
/* harmony import */ var _genre_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genre-card.component.scss */ "4zFb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let GenreCardComponent = class GenreCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    genreLink(title) {
        this.router.navigate([title, 'albums']);
    }
};
GenreCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GenreCardComponent.propDecorators = {
    genreData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
GenreCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-genre-card',
        template: _raw_loader_genre_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_genre_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GenreCardComponent);



/***/ }),

/***/ "LapL":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/album-card/album-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: AlbumCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumCardComponent", function() { return AlbumCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_album_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./album-card.component.html */ "h+Rb");
/* harmony import */ var _album_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-card.component.scss */ "UFTP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AlbumCardComponent = class AlbumCardComponent {
    constructor() {
        this.addToLocalStorage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    setAlbumData() {
        this.addToLocalStorage.emit({
            // @ts-ignore
            albumData: this.albumData,
            // @ts-ignore
            idx: this.idx,
        });
    }
};
AlbumCardComponent.ctorParameters = () => [];
AlbumCardComponent.propDecorators = {
    albumData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    addToLocalStorage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
AlbumCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-album-card',
        template: _raw_loader_album_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_album_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlbumCardComponent);



/***/ }),

/***/ "N0HB":
/*!**************************************************************!*\
  !*** ./src/app/core/localStorege/enums/srorage-type.enum.ts ***!
  \**************************************************************/
/*! exports provided: StorageTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTypeEnum", function() { return StorageTypeEnum; });
var StorageTypeEnum;
(function (StorageTypeEnum) {
    StorageTypeEnum[StorageTypeEnum["local"] = 0] = "local";
    StorageTypeEnum[StorageTypeEnum["session"] = 1] = "session";
})(StorageTypeEnum || (StorageTypeEnum = {}));


/***/ }),

/***/ "NA4g":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



const modules = [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]];
let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: modules,
        exports: modules,
    })
], MaterialModule);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/genre-card/genre-card.component */ "GlVr");
/* harmony import */ var _components_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/album-card/album-card.component */ "LapL");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material.module */ "NA4g");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routs = [];
let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_3__["GenreCardComponent"], _components_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_4__["AlbumCardComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
        exports: [
            _components_genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_3__["GenreCardComponent"],
            _components_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_4__["AlbumCardComponent"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routs)],
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/spinner.service */ "ph+x");





let AppComponent = class AppComponent {
    constructor(spinnerS, cd) {
        this.spinnerS = spinnerS;
        this.cd = cd;
    }
    ngDoCheck() {
        this.cd.detectChanges();
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UFTP":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/album-card/album-card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  position: relative;\n  cursor: pointer;\n}\n.card__content {\n  position: relative;\n  padding-top: 100%;\n  z-index: 1;\n}\n.card__content img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: auto;\n}\n.card__hover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  transition: all 0.3s ease-in;\n}\n.card__hover:hover {\n  opacity: 1;\n  background-color: black;\n}\n.card__hover__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 15px;\n}\n.card__icon {\n  width: 30px;\n  height: 30px;\n}\n.card__album-label {\n  font-size: 2rem;\n  margin-bottom: 5px;\n  text-align: center;\n}\n.card__artist-name {\n  font-size: 1.4rem;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxidW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQUk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQUNOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSkoiLCJmaWxlIjoiYWxidW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICZfX2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICAmX19ob3ZlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJl9faG92ZXJfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gICZfX2FsYnVtLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX2FydGlzdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <app-header></app-header>\n</nav>\n\n<main>\n  <router-outlet></router-outlet>\n  <div\n    class=\"spinner\"\n    [style.display]=\"(spinnerS.loading$() | async) ? 'block' : 'none'\"\n  >\n    <span class=\"spinner__content\">...loading</span>\n  </div>\n</main>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aSPh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"home\">\n  <div class=\"container\">\n    <div class=\"home__genre\">\n      <app-genre-card\n        *ngFor=\"let g of genreData\"\n        [genreData]=\"g\"\n      ></app-genre-card>\n    </div>\n  </div>\n</main>\n");

/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "h0PO");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "ikDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_albums_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/albums.service */ "00VZ");





let HeaderComponent = class HeaderComponent {
    constructor(albumsS) {
        this.albumsS = albumsS;
    }
    ngOnInit() { }
    resetInput() {
        this.albumsS.setSearch('');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_albums_service__WEBPACK_IMPORTED_MODULE_4__["AlbumsService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "h+Rb":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/album-card/album-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card__content\">\n    <img src=\"{{ albumData.image[3]['#text'] }}\" alt=\"{{ albumData.name }}\" />\n  </div>\n  <div class=\"card__hover\">\n    <div class=\"card__hover__content\">\n      <div class=\"card__album-label\">{{ albumData.name }}</div>\n      <div class=\"card__artist-name\">{{ albumData.artist[\"name\"] }}</div>\n      <div\n        *ngIf=\"albumData.like; else iconEmpty\"\n        class=\"card__icon\"\n        (click)=\"setAlbumData()\"\n      >\n        <img src=\"./assets/icon/heartFull.svg\" alt=\"icon\" />\n      </div>\n\n      <ng-template #iconEmpty>\n        <div class=\"card__icon\" (click)=\"setAlbumData()\">\n          <img src=\"./assets/icon/heartEmpty.svg\" alt=\"icon\" />\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "h0PO":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"albums__header\">\n  <div class=\"albums__navigate\">\n    <a class=\"albums__link\" (click)=\"resetInput()\" routerLink='/'>Back</a>\n    <label>\n      <input\n        type=\"text\"\n        class=\"albums__text-field\"\n        (input)=\"albumsS.setSearch($event.target.value)\"\n        [value]=\"albumsS.getSearch$() | async\"\n      />\n    </label>\n  </div>\n\n  <div class=\"albums__icon\">\n    <span\n      class=\"albums__icon__content\"\n      *ngIf=\"(albumsS.getCounterLike$ | async) > 0\"\n      >{{ albumsS.getCounterLike$ | async }}</span\n    >\n    <img src=\"./assets/icon/heartFull.svg\" alt=\"heart\" />\n  </div>\n</div>\n");

/***/ }),

/***/ "ikDE":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".albums__header {\n  height: 80px;\n  max-width: 100%;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n}\n.albums__link {\n  text-decoration: none;\n  color: antiquewhite;\n  font-size: 2rem;\n}\n.albums__text-field {\n  margin-left: 30px;\n  width: 300px;\n  height: 37px;\n  border-radius: 5px;\n  font-size: 1.7rem;\n  padding: 0 10px;\n}\n.albums__icon {\n  margin-right: 40px;\n  position: relative;\n}\n.albums__icon img {\n  height: 30px;\n}\n.albums__icon__content {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  background-color: cornflowerblue;\n  position: absolute;\n  right: -15px;\n  top: -10px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.albums__content {\n  margin: 30px 0;\n  padding: 0 15px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxZQUFBO0FBSE47QUFNSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQVFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBTkoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYnVtcyB7XG4gICZfX2hlYWRlciB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gICZfX3RleHQtZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTE1cHg7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "mbft":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.home__genre {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX19nZW5yZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAyNXB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "ph+x":
/*!****************************************************!*\
  !*** ./src/app/shared/services/spinner.service.ts ***!
  \****************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let SpinnerService = class SpinnerService {
    constructor() {
        this.loadingState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    show() {
        this.loadingState$.next(true);
    }
    hide() {
        this.loadingState$.next(false);
    }
    loading$() {
        return this.loadingState$.asObservable();
    }
};
SpinnerService.ctorParameters = () => [];
SpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SpinnerService);



/***/ }),

/***/ "tog9":
/*!***********************************************!*\
  !*** ./src/app/pages/home/genre-card-data.ts ***!
  \***********************************************/
/*! exports provided: genreDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genreDate", function() { return genreDate; });
const genreDate = [
    {
        color: 'tomato',
        title: 'Rock',
        image: '../../../../assets/genre-label/rock.png',
    },
    {
        color: 'orange',
        title: 'Hip-hop',
        image: '../../../../assets/genre-label/hip-hop.png',
    },
    {
        color: 'skyblue',
        title: 'Pop',
        image: '../../../../assets/genre-label/pop.png',
    },
    {
        color: 'green',
        title: 'Indie',
        image: '../../../../assets/genre-label/indie.png',
    },
    {
        color: 'black',
        title: 'R&N',
        image: '../../../../assets/genre-label/r&b.png',
    },
    {
        color: 'purple',
        title: 'Electro',
        image: '../../../../assets/genre-label/electro.png',
    },
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");




const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: ':genre/:album',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-albums-albums-module */ "pages-albums-albums-module").then(__webpack_require__.bind(null, /*! ./pages/albums/albums.module */ "O7t3")).then((m) => m.AlbumsModule),
    },
    { path: '**', redirectTo: '' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  z-index: 111;\n}\n.spinner__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - 110px);\n  font-size: 5rem;\n}\nmain {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsdUJBQUE7RUFDQSxZQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBREo7QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTExO1xuXG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */");

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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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