"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[39],{

/***/ 2358:
/*!*****************************************************************************************!*\
  !*** ./app/soapbox/features/federation_restrictions/components/restricted_instance.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ 6);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var soapbox_components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/components/icon */ 18);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var soapbox_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/selectors */ 22);
/* harmony import */ var _instance_restrictions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance_restrictions */ 1416);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/federation_restrictions/components/restricted_instance.tsx";






var getRemoteInstance = (0,soapbox_selectors__WEBPACK_IMPORTED_MODULE_4__.makeGetRemoteInstance)();
var RestrictedInstance = function (_ref) {
    var host = _ref.host;
    var remoteInstance = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) { return getRemoteInstance(state, host); });
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = _a[0], setExpanded = _a[1];
    var toggleExpanded = function (e) {
        setExpanded(function (value) { return !value; });
        e.preventDefault();
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
        href: "#",
        className: "flex items-center gap-1 py-2.5 no-underline",
        onClick: toggleExpanded,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(soapbox_components_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: expanded ? __webpack_require__(/*! @tabler/icons/caret-down.svg */ 2359) : __webpack_require__(/*! @tabler/icons/caret-right.svg */ 2360),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            'line-through': remoteInstance.getIn(['federation', 'reject'])
        }),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
        }
    }, remoteInstance.get('host'))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            'h-0 overflow-hidden': !expanded,
            'h-auto': expanded
        }),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_instance_restrictions__WEBPACK_IMPORTED_MODULE_5__["default"], {
        remoteInstance: remoteInstance,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
        }
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (RestrictedInstance);


/***/ }),

/***/ 1651:
/*!****************************************************************!*\
  !*** ./app/soapbox/features/federation_restrictions/index.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var soapbox_components_scrollable_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/components/scrollable_list */ 856);
/* harmony import */ var soapbox_features_ui_components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/features/ui/components/accordion */ 1406);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var soapbox_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/selectors */ 22);
/* harmony import */ var soapbox_utils_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! soapbox/utils/state */ 296);
/* harmony import */ var _ui_components_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/components/column */ 857);
/* harmony import */ var _components_restricted_instance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/restricted_instance */ 2358);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/federation_restrictions/index.tsx";









var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
    heading: {
        "id": "column.federation_restrictions",
        "defaultMessage": "Federation Restrictions"
    },
    boxTitle: {
        "id": "federation_restrictions.explanation_box.title",
        "defaultMessage": "Instance-specific policies"
    },
    boxMessage: {
        "id": "federation_restrictions.explanation_box.message",
        "defaultMessage": "Normally servers on the Fediverse can communicate freely. {siteTitle} has imposed restrictions on the following servers."
    },
    emptyMessage: {
        "id": "federation_restrictions.empty_message",
        "defaultMessage": "{siteTitle} has not restricted any instances."
    },
    notDisclosed: {
        "id": "federation_restrictions.not_disclosed_message",
        "defaultMessage": "{siteTitle} does not disclose federation restrictions through the API."
    }
});
var getHosts = (0,soapbox_selectors__WEBPACK_IMPORTED_MODULE_4__.makeGetHosts)();
var FederationRestrictions = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var siteTitle = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) { return state.instance.get('title'); });
    var hosts = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) { return getHosts(state); });
    var disclosed = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) { return (0,soapbox_utils_state__WEBPACK_IMPORTED_MODULE_5__.federationRestrictionsDisclosed)(state); });
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), explanationBoxExpanded = _a[0], setExplanationBoxExpanded = _a[1];
    var toggleExplanationBox = function (setting) {
        setExplanationBoxExpanded(setting);
    };
    var emptyMessage = disclosed ? messages.emptyMessage : messages.notDisclosed;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_column__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "gavel",
        label: intl.formatMessage(messages.heading),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_features_ui_components_accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headline: intl.formatMessage(messages.boxTitle),
        expanded: explanationBoxExpanded,
        onToggle: toggleExplanationBox,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
        }
    }, intl.formatMessage(messages.boxMessage, {
        siteTitle: siteTitle
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "pt-4",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_scrollable_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
        emptyMessage: intl.formatMessage(emptyMessage, {
            siteTitle: siteTitle
        }),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 9
        }
    }, hosts.map(function (host) { /*#__PURE__*/ return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_restricted_instance__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: host,
        host: host,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 32
        }
    }); }))));
};
/* harmony default export */ __webpack_exports__["default"] = (FederationRestrictions);


/***/ }),

/***/ 2359:
/*!*********************************************************!*\
  !*** ./node_modules/@tabler/icons/icons/caret-down.svg ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "packs/icons/caret-down-ded17d2c.svg";

/***/ }),

/***/ 2360:
/*!**********************************************************!*\
  !*** ./node_modules/@tabler/icons/icons/caret-right.svg ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "packs/icons/caret-right-c50761f9.svg";

/***/ })

}]);
//# sourceMappingURL=federation_restrictions-89df31b5d47307200794.chunk.js.map