"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[33],{

/***/ 1614:
/*!******************************************************!*\
  !*** ./app/soapbox/features/edit_password/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/security */ 550);
/* harmony import */ var soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/actions/snackbar */ 23);
/* harmony import */ var soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/components/ui */ 2);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var _verification_components_password_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../verification/components/password-indicator */ 670);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/edit_password/index.tsx";
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







var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
    updatePasswordSuccess: {
        "id": "security.update_password.success",
        "defaultMessage": "Password successfully updated."
    },
    updatePasswordFail: {
        "id": "security.update_password.fail",
        "defaultMessage": "Update password failed."
    },
    oldPasswordFieldLabel: {
        "id": "security.fields.old_password.label",
        "defaultMessage": "Current password"
    },
    newPasswordFieldLabel: {
        "id": "security.fields.new_password.label",
        "defaultMessage": "New password"
    },
    confirmationFieldLabel: {
        "id": "security.fields.password_confirmation.label",
        "defaultMessage": "New password (again)"
    },
    header: {
        "id": "edit_password.header",
        "defaultMessage": "Change Password"
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
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: ''
};
var EditPassword = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
    var passwordRequirements = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_4__.useFeatures)().passwordRequirements;
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialState), state = _a[0], setState = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), isLoading = _b[0], setLoading = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__.useState(passwordRequirements ? false : true), hasValidPassword = _c[0], setHasValidPassword = _c[1];
    var currentPassword = state.currentPassword, newPassword = state.newPassword, newPasswordConfirmation = state.newPasswordConfirmation;
    var resetState = function () { return setState(initialState); };
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
        dispatch((0,soapbox_actions_security__WEBPACK_IMPORTED_MODULE_1__.changePassword)(currentPassword, newPassword, newPasswordConfirmation)).then(function () {
            resetState();
            dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].success(intl.formatMessage(messages.updatePasswordSuccess)));
        }).finally(function () {
            setLoading(false);
        }).catch(function () {
            resetState();
            dispatch(soapbox_actions_snackbar__WEBPACK_IMPORTED_MODULE_2__["default"].error(intl.formatMessage(messages.updatePasswordFail)));
        });
    }, [currentPassword, newPassword, newPasswordConfirmation, dispatch, intl]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Column, {
        label: intl.formatMessage(messages.header),
        transparent: true,
        withHeader: false,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Card, {
        variant: "rounded",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
        backHref: "/settings",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 9
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
        title: intl.formatMessage(messages.header),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 9
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: handleSubmit,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
        labelText: intl.formatMessage(messages.oldPasswordFieldLabel),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "password",
        name: "currentPassword",
        onChange: handleInputChange,
        value: currentPassword,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
        labelText: intl.formatMessage(messages.newPasswordFieldLabel),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "password",
        name: "newPassword",
        onChange: handleInputChange,
        value: newPassword,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
        }
    }), passwordRequirements && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_verification_components_password_indicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
        password: newPassword,
        onChange: setHasValidPassword,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
        labelText: intl.formatMessage(messages.confirmationFieldLabel),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "password",
        name: "newPasswordConfirmation",
        onChange: handleInputChange,
        value: newPasswordConfirmation,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.FormActions, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        to: "/settings",
        theme: "ghost",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
        }
    }, intl.formatMessage(messages.cancel)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "submit",
        theme: "primary",
        disabled: isLoading || !hasValidPassword,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
        }
    }, intl.formatMessage(messages.submit)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EditPassword);


/***/ })

}]);
//# sourceMappingURL=edit_password-c21127403c22dc38aa98.chunk.js.map