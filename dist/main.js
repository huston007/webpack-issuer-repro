(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ sync recursive \\.svg$":
/*!*********************!*\
  !*** . sync \.svg$ ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./circle.svg": "./circle.svg",
	"./dist/c4517d2df44e3060625b79c4a3e76521.svg": "./dist/c4517d2df44e3060625b79c4a3e76521.svg"
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
webpackContext.id = "./ sync recursive \\.svg$";

/***/ }),

/***/ "./a.js":
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function importAll (r) {
  r.keys().forEach(r);
}

importAll(__webpack_require__("./ sync recursive \\.svg$"));

/***/ }),

/***/ "./circle.svg":
/*!********************!*\
  !*** ./circle.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"8\"/></svg>");

/***/ }),

/***/ "./dist/c4517d2df44e3060625b79c4a3e76521.svg":
/*!***************************************************!*\
  !*** ./dist/c4517d2df44e3060625b79c4a3e76521.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"8\"/></svg>");

/***/ })

},[["./a.js","runtime~main"]]]);