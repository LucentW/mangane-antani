"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[9],{

/***/ 1626:
/*!*******************************************************!*\
  !*** ./app/soapbox/features/admin/moderation_log.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var soapbox_actions_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/admin */ 48);
/* harmony import */ var soapbox_components_scrollable_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/components/scrollable_list */ 856);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var _ui_components_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/components/column */ 857);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/admin/moderation_log.tsx";






var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
    heading: {
        "id": "column.admin.moderation_log",
        "defaultMessage": "Moderation Log"
    },
    emptyMessage: {
        "id": "admin.moderation_log.empty_message",
        "defaultMessage": "You have not performed any moderation actions yet. When you do, a history will be shown here."
    }
});
var ModerationLog = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    var items = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) {
        return state.admin_log.index.map(function (i) { return state.admin_log.items.get(String(i)); });
    });
    var hasMore = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) { return state.admin_log.total - state.admin_log.index.count() > 0; });
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), lastPage = _b[0], setLastPage = _b[1];
    var showLoading = isLoading && items.count() === 0;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        dispatch((0,soapbox_actions_admin__WEBPACK_IMPORTED_MODULE_1__.fetchModerationLog)()).then(function () {
            setIsLoading(false);
            setLastPage(1);
        }).catch(function () { });
    }, []);
    var handleLoadMore = function () {
        var page = lastPage + 1;
        setIsLoading(true);
        dispatch((0,soapbox_actions_admin__WEBPACK_IMPORTED_MODULE_1__.fetchModerationLog)({
            page: page
        })).then(function () {
            setIsLoading(false);
            setLastPage(page);
        }).catch(function () { });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_column__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: "balance-scale",
        label: intl.formatMessage(messages.heading),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_scrollable_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isLoading: isLoading,
        showLoading: showLoading,
        scrollKey: "moderation-log",
        emptyMessage: intl.formatMessage(messages.emptyMessage),
        hasMore: hasMore,
        onLoadMore: handleLoadMore,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
        }
    }, items.map(function (item) { return item && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "logentry",
        key: item.id,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "logentry__message",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
        }
    }, item.message), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "logentry__timestamp",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDate, {
        value: new Date(item.time * 1000),
        hour12: false,
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
        }
    }))); })));
};
/* harmony default export */ __webpack_exports__["default"] = (ModerationLog);


/***/ })

}]);
//# sourceMappingURL=moderation_log-ba8f9531c32c204bc9ac.chunk.js.map