(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-albums-albums-module"],{

/***/ "MCN6":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/albums/albums.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"albums\">\n  <div class=\"albums__content\">\n    <app-album-card\n      *ngFor=\"let a of albums; let i = index\"\n      [albumData]=\"a\"\n      [idx]=\"i\"\n      (addToLocalStorage)=\"toLocalStorage($event)\"\n    ></app-album-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "Mg80":
/*!*****************************************!*\
  !*** ./src/app/core/api/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _routes_albums_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/albums-api.service */ "UbH8");



let ApiService = class ApiService {
    constructor(topic) {
        this.topic = topic;
    }
};
ApiService.ctorParameters = () => [
    { type: _routes_albums_api_service__WEBPACK_IMPORTED_MODULE_2__["AlbumsApiService"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ "O7t3":
/*!***********************************************!*\
  !*** ./src/app/pages/albums/albums.module.ts ***!
  \***********************************************/
/*! exports provided: AlbumsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsModule", function() { return AlbumsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums.component */ "X+81");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");






const routes = [{ path: '', component: _albums_component__WEBPACK_IMPORTED_MODULE_3__["AlbumsComponent"] }];
let AlbumsModule = class AlbumsModule {
};
AlbumsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_albums_component__WEBPACK_IMPORTED_MODULE_3__["AlbumsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
    })
], AlbumsModule);



/***/ }),

/***/ "UbH8":
/*!*******************************************************!*\
  !*** ./src/app/core/api/routes/albums-api.service.ts ***!
  \*******************************************************/
/*! exports provided: AlbumsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsApiService", function() { return AlbumsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/spinner.service */ "ph+x");
/* harmony import */ var _localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../localStorege/routes/album.storeg */ "BIqz");






let AlbumsApiService = class AlbumsApiService {
    constructor(http, spinnerS) {
        this.http = http;
        this.spinnerS = spinnerS;
        this.apiKey = '22e5dcb7293a23da484afeacce80c247';
    }
    getAlbums(genre) {
        this.spinnerS.show();
        return this.http
            .get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&format=json&api_key=${this.apiKey}&tag=${genre}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((a) => a.albums.album), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((item) => {
            const albums = _localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_5__["AlbumsStorage"].get();
            return item.map((album) => ({
                image: album.image,
                artist: album.artist,
                name: album.name,
                like: albums.some((a) => a.name === album.name),
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.spinnerS.hide()));
    }
};
AlbumsApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }
];
AlbumsApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AlbumsApiService);



/***/ }),

/***/ "X+81":
/*!**************************************************!*\
  !*** ./src/app/pages/albums/albums.component.ts ***!
  \**************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_albums_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./albums.component.html */ "MCN6");
/* harmony import */ var _albums_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.component.scss */ "XBSK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/api/api.service */ "Mg80");
/* harmony import */ var _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/localStorege/routes/album.storeg */ "BIqz");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _shared_services_albums_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/albums.service */ "00VZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");











let AlbumsComponent = class AlbumsComponent {
    constructor(route, router, API, _snackBar, albumsS) {
        this.route = route;
        this.router = router;
        this.API = API;
        this._snackBar = _snackBar;
        this.albumsS = albumsS;
        this.genre = '';
        this.albums = [];
        this.albumsDefault = [];
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroySubject$))
            .subscribe((params) => {
            this.genre = params.genre;
        });
        this.albumsS
            .getSearch$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroySubject$))
            .subscribe((value) => {
            this.albums = !!value
                ? this.albumsDefault.filter((a) => a.name.toLowerCase().includes(value.toLowerCase()) ||
                    a.artist.name.toLowerCase().includes(value.toLowerCase()))
                : this.albumsDefault;
        });
        this.API.topic.getAlbums(this.genre).subscribe((res) => {
            this.albums = this.albumsDefault = res;
        });
    }
    ngOnDestroy() {
        this.destroySubject$.next();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    toLocalStorage(data) {
        this.albums[data.idx].like = !this.albums[data.idx].like;
        if (!this.albums[data.idx].like) {
            _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].remove(data.albumData);
            this.albumsS.setCounterLike(this.getCountLikes);
            this.openSnackBar(data.albumData.name, 'Remove like');
            return;
        }
        const indexAlbum = _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].get().findIndex((a) => a.name === data.albumData.name);
        if (indexAlbum === -1) {
            const albums = [..._core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].get(), data.albumData];
            _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].set(albums);
        }
        else {
            const albums = _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].get();
            albums[indexAlbum].like = data.albumData.like;
            _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].set(albums);
        }
        this.albumsS.setCounterLike(this.getCountLikes);
        this.openSnackBar(data.albumData.name, 'Like');
    }
    get getCountLikes() {
        return _core_localStorege_routes_album_storeg__WEBPACK_IMPORTED_MODULE_6__["AlbumsStorage"].get().length;
    }
};
AlbumsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _shared_services_albums_service__WEBPACK_IMPORTED_MODULE_8__["AlbumsService"] }
];
AlbumsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-albums',
        template: _raw_loader_albums_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_albums_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlbumsComponent);



/***/ }),

/***/ "XBSK":
/*!****************************************************!*\
  !*** ./src/app/pages/albums/albums.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".albums__header {\n  height: 80px;\n  max-width: 100%;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n}\n.albums__link {\n  text-decoration: none;\n  color: antiquewhite;\n  font-size: 2rem;\n}\n.albums__text-field {\n  margin-left: 30px;\n  width: 300px;\n  height: 37px;\n  border-radius: 5px;\n  font-size: 1.7rem;\n  padding: 0 10px;\n}\n.albums__icon {\n  margin-right: 40px;\n  position: relative;\n}\n.albums__icon img {\n  height: 30px;\n}\n.albums__icon__content {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  background-color: cornflowerblue;\n  position: absolute;\n  right: -15px;\n  top: -10px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.albums__content {\n  margin: 30px 0;\n  padding: 0 15px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGJ1bXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNSTtFQUNFLFlBQUE7QUFKTjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxOO0FBU0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFQSiIsImZpbGUiOiJhbGJ1bXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxidW1zIHtcblxuICAmX19oZWFkZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICAmX19saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAmX190ZXh0LWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAmX19pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgbWFyZ2luOiAzMHB4IDAgO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-albums-albums-module.js.map