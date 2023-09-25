"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[68],{

/***/ 1624:
/*!****************************************************!*\
  !*** ./app/soapbox/features/server_info/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var _ui_components_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/components/column */ 857);
/* harmony import */ var _ui_components_link_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/components/link_footer */ 306);
/* harmony import */ var _ui_components_promo_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/components/promo_panel */ 958);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/server_info/index.tsx";






var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
    heading: {
        "id": "column.info",
        "defaultMessage": "Server information"
    }
});
var ServerInfo = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var instance = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(function (state) { return state.instance; });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_column__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "info",
        label: intl.formatMessage(messages.heading),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "info_column_area",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "info__brand",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "brand",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
        }
    }, instance.title)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "brand__tagline",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
        }
    }, instance.description))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_promo_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_link_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
        }
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (ServerInfo);


/***/ })

}]);
//# sourceMappingURL=server_info-70938b7f67eb52c8d998.chunk.js.map