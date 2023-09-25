"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[32],{

/***/ 1612:
/*!***************************************************!*\
  !*** ./app/soapbox/features/edit_email/index.tsx ***!
  \***************************************************/
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
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/edit_email/index.tsx";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols);
} return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); });
} return target; }
function _defineProperty(obj, key, value) { if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
}
else {
    obj[key] = value;
} return obj; }






var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
    header: {
        "id": "edit_email.header",
        "defaultMessage": "Change Email"
    },
    updateEmailSuccess: {
        "id": "security.update_email.success",
        "defaultMessage": "Email successfully updated."
    },
    updateEmailFail: {
        "id": "security.update_email.fail",
        "defaultMessage": "Update email failed."
    },
    emailFieldLabel: {
        "id": "security.fields.email.label",
        "defaultMessage": "Email address"
    },
    emailFieldPlaceholder: {
        "id": "edit_email.placeholder",
        "defaultMessage": "me@example.com"
    },
    passwordFieldLabel: {
        "id": "security.fields.password.label",
        "defaultMessage": "Password"
    },
    submit: {
        "id": "security.submit",
        "defaultMessage": "Save changes"
    },
    cancel: {
        "id": "common.cancel",
        "defaultMessage": "Cancel"
    }
});
var initialState = {
    email: '',
    password: ''
};
var EditEmail = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialState), state = _a[0], setState = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), isLoading = _b[0], setLoading = _b[1];
    var email = state.email, password = state.password;
    var handleInputChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        event.persist();
        setState(function (prevState) {
            var _a;
            return _objectSpread(_objectSpread({}, prevState), {}, (_a = {},
                _a[event.target.name] = event.target.value,
                _a));
        });
    }, []);
    var handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        setLoading(true);
        dispatch((0,soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__.changeEmail)(email, password)).then(function () {
            setState(initialState);
            dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].success(intl.formatMessage(messages.updateEmailSuccess)));
        }).finally(function () {
            setLoading(false);
        }).catch(function () {
            setState(function (prevState) { return _objectSpread(_objectSpread({}, prevState), {}, {
                password: ''
            }); });
            dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].error(intl.formatMessage(messages.updateEmailFail)));
        });
    }, [email, password, dispatch, intl]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Column, {
        label: intl.formatMessage(messages.header),
        transparent: true,
        withHeader: false,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Card, {
        variant: "rounded",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
        backHref: "/settings",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
        title: intl.formatMessage(messages.header),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: handleSubmit,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
        labelText: intl.formatMessage(messages.emailFieldLabel),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "text",
        placeholder: intl.formatMessage(messages.emailFieldPlaceholder),
        name: "email",
        autoComplete: "off",
        onChange: handleInputChange,
        value: email,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
        labelText: intl.formatMessage(messages.passwordFieldLabel),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "password",
        name: "password",
        onChange: handleInputChange,
        value: password,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormActions, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        to: "/settings",
        theme: "ghost",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
        }
    }, intl.formatMessage(messages.cancel)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "submit",
        theme: "primary",
        disabled: isLoading,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
        }
    }, intl.formatMessage(messages.submit)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EditEmail);


/***/ })

}]);
//# sourceMappingURL=edit_email-e185bdb3b4170411b3ce.chunk.js.map