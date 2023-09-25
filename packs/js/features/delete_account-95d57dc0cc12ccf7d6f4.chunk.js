"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[27],{

/***/ 1615:
/*!*******************************************************!*\
  !*** ./app/soapbox/features/delete_account/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/security */ 550);
/* harmony import */ var soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/actions/snackbar */ 23);
/* harmony import */ var soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/components/ui */ 2);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/hooks */ 3);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/delete_account/index.tsx";






var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
    passwordFieldLabel: {
        "id": "security.fields.password.label",
        "defaultMessage": "Password"
    },
    deleteHeader: {
        "id": "security.headers.delete",
        "defaultMessage": "Delete Account"
    },
    deleteText: {
        "id": "security.text.delete",
        "defaultMessage": "To delete your account, enter your password then click Delete Account. This is a permanent action that cannot be undone. Your account will be destroyed from this server, and a deletion request will be sent to other servers. It's not guaranteed that all servers will purge your account."
    },
    localDeleteText: {
        "id": "security.text.delete.local",
        "defaultMessage": "To delete your account, enter your password then click Delete Account. This is a permanent action that cannot be undone."
    },
    deleteSubmit: {
        "id": "security.submit.delete",
        "defaultMessage": "Delete Account"
    },
    deleteAccountSuccess: {
        "id": "security.delete_account.success",
        "defaultMessage": "Account successfully deleted."
    },
    deleteAccountFail: {
        "id": "security.delete_account.fail",
        "defaultMessage": "Account deletion failed."
    }
});
var DeleteAccount = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
    var features = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__.useFeatures)();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), password = _a[0], setPassword = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), isLoading = _b[0], setLoading = _b[1];
    var handleInputChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        event.persist();
        setPassword(event.target.value);
    }, []);
    var handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        setLoading(true);
        dispatch((0,soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__.deleteAccount)(password)).then(function () {
            setPassword('');
            dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].success(intl.formatMessage(messages.deleteAccountSuccess)));
        }).finally(function () {
            setLoading(false);
        }).catch(function () {
            setPassword('');
            dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].error(intl.formatMessage(messages.deleteAccountFail)));
        });
    }, [password, dispatch, intl]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Card, {
        variant: "rounded",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
        backHref: "/settings",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
        title: intl.formatMessage(messages.deleteHeader),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 9
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text-gray-400 mb-4",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 9
        }
    }, intl.formatMessage(features.federating ? messages.deleteText : messages.localDeleteText)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: handleSubmit,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
        labelText: intl.formatMessage(messages.passwordFieldLabel),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "password",
        name: "password",
        onChange: handleInputChange,
        value: password,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormActions, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "submit",
        theme: "danger",
        disabled: isLoading,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
        }
    }, intl.formatMessage(messages.deleteSubmit))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteAccount);


/***/ })

}]);
//# sourceMappingURL=delete_account-95d57dc0cc12ccf7d6f4.chunk.js.map