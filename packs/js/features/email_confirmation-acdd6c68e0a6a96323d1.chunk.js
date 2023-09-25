"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[35],{

/***/ 1613:
/*!***********************************************************!*\
  !*** ./app/soapbox/features/email_confirmation/index.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ 10);
/* harmony import */ var soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/security */ 550);
/* harmony import */ var soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/actions/snackbar */ 23);
/* harmony import */ var soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/components/ui */ 2);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var soapbox_utils_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! soapbox/utils/errors */ 895);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/email_confirmation/index.tsx";








var Statuses = {
    IDLE: 'IDLE',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL'
};
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
    success: {
        "id": "email_confirmation.success",
        "defaultMessage": "Your email has been confirmed!"
    }
});
var token = new URLSearchParams(window.location.search).get('confirmation_token');
var EmailConfirmation = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(Statuses.IDLE), status = _a[0], setStatus = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (token) {
            dispatch((0,soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__.confirmChangedEmail)(token)).then(function () {
                setStatus(Statuses.SUCCESS);
                dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].success(intl.formatMessage(messages.success)));
            }).catch(function (error) {
                setStatus(Statuses.FAIL);
                if (error.response.data.error) {
                    var message = (0,soapbox_utils_errors__WEBPACK_IMPORTED_MODULE_5__.buildErrorMessage)(error.response.data.error);
                    dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].error(message // intl.formatMessage({
                    //   id: 'email_confirmation.fail',
                    //   defaultMessage,
                    // }),
                    ));
                }
            });
        }
    }, [token]);
    if (!token || status === Statuses.SUCCESS || status === Statuses.FAIL) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
            to: "/",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 12
            }
        });
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 5
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (EmailConfirmation);


/***/ })

}]);
//# sourceMappingURL=email_confirmation-acdd6c68e0a6a96323d1.chunk.js.map