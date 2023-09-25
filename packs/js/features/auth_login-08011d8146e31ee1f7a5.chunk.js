"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[15],{

/***/ 1608:
/*!***************************************************************!*\
  !*** ./app/soapbox/features/auth_login/components/logout.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ 9);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 10);
/* harmony import */ var soapbox_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/actions/auth */ 24);
/* harmony import */ var soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/components/ui */ 2);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/auth_login/components/logout.tsx";





/** Component that logs the user out when rendered */
var Logout = function () {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), done = _a[0], setDone = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        dispatch((0,soapbox_actions_auth__WEBPACK_IMPORTED_MODULE_2__.logOut)()).then(function () { return setDone(true); }).catch(console.warn);
    }, []);
    if (done) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
            to: "/",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 12
            }
        });
    }
    else {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 12
            }
        });
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Logout);


/***/ })

}]);
//# sourceMappingURL=auth_login-08011d8146e31ee1f7a5.chunk.js.map