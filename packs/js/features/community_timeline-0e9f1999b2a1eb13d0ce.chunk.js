"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[23],{

/***/ 1554:
/*!***********************************************************!*\
  !*** ./app/soapbox/features/community_timeline/index.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ 8);
/* harmony import */ var soapbox_actions_streaming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/streaming */ 62);
/* harmony import */ var soapbox_actions_timelines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/actions/timelines */ 32);
/* harmony import */ var soapbox_components_pull_to_refresh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/components/pull-to-refresh */ 391);
/* harmony import */ var soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/components/ui */ 2);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! soapbox/hooks */ 3);
/* harmony import */ var _ui_components_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/components/timeline */ 1403);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/community_timeline/index.tsx";








var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
    title: {
        "id": "column.community",
        "defaultMessage": "Local timeline"
    }
});
var CommunityTimeline = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    var settings = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
    var onlyMedia = settings.getIn(['community', 'other', 'onlyMedia']);
    var timelineId = 'community';
    var handleLoadMore = function (maxId) {
        dispatch((0,soapbox_actions_timelines__WEBPACK_IMPORTED_MODULE_2__.expandCommunityTimeline)({
            maxId: maxId,
            onlyMedia: onlyMedia
        }));
    };
    var handleRefresh = function () {
        return dispatch((0,soapbox_actions_timelines__WEBPACK_IMPORTED_MODULE_2__.expandCommunityTimeline)({
            onlyMedia: onlyMedia
        }));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        dispatch((0,soapbox_actions_timelines__WEBPACK_IMPORTED_MODULE_2__.expandCommunityTimeline)({
            onlyMedia: onlyMedia
        }));
        var disconnect = dispatch((0,soapbox_actions_streaming__WEBPACK_IMPORTED_MODULE_1__.connectCommunityStream)({
            onlyMedia: onlyMedia
        }));
        return function () {
            disconnect();
        };
    }, [onlyMedia]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__.Column, {
        label: intl.formatMessage(messages.title),
        transparent: true,
        withHeader: false,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_pull_to_refresh__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onRefresh: handleRefresh,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        scrollKey: "".concat(timelineId, "_timeline"),
        timelineId: "".concat(timelineId).concat(onlyMedia ? ':media' : ''),
        onLoadMore: handleLoadMore,
        emptyMessage: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "empty_column.community",
            defaultMessage: "The local timeline is empty. Write something publicly to get the ball rolling!",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 25
            }
        }),
        divideType: "space",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
        }
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (CommunityTimeline);


/***/ })

}]);
//# sourceMappingURL=community_timeline-0e9f1999b2a1eb13d0ce.chunk.js.map