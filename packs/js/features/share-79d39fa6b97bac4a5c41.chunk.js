"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[70],{

/***/ 1658:
/*!**********************************************!*\
  !*** ./app/soapbox/features/share/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 10);
/* harmony import */ var soapbox_actions_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/compose */ 21);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/hooks */ 3);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/share/index.tsx";




var Share = function () {
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    var search = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)().search;
    var params = new URLSearchParams(search);
    var text = [params.get('title'), params.get('text'), params.get('url')].filter(function (v) { return v; }).join('\n\n');
    if (text) {
        dispatch((0,soapbox_actions_compose__WEBPACK_IMPORTED_MODULE_1__.openComposeWithText)(text));
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
        to: "/",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 5
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Share);


/***/ })

}]);
//# sourceMappingURL=share-79d39fa6b97bac4a5c41.chunk.js.map