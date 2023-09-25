"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[58],{

/***/ 1659:
/*!***************************************************!*\
  !*** ./app/soapbox/features/new_status/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 10);
/* harmony import */ var soapbox_actions_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/modals */ 14);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/hooks */ 3);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/new_status/index.tsx";




var NewStatus = function () {
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        dispatch((0,soapbox_actions_modals__WEBPACK_IMPORTED_MODULE_1__.openModal)('COMPOSE'));
    }, []);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
        to: "/",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 5
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (NewStatus);


/***/ })

}]);
//# sourceMappingURL=new_status-040a837f7f83308160f7.chunk.js.map