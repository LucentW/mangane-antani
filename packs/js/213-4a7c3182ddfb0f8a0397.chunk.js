"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[213],{

/***/ 1673:
/*!******************************************************!*\
  !*** ./app/soapbox/features/followed_tags/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ 8);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var soapbox_actions_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! soapbox/actions/tags */ 632);
/* harmony import */ var soapbox_components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/components/icon */ 18);
/* harmony import */ var soapbox_components_scrollable_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/components/scrollable_list */ 856);
/* harmony import */ var soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/components/ui */ 2);
/* harmony import */ var soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! soapbox/hooks */ 3);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/followed_tags/index.tsx";







var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
    heading: {
        "id": "column.tags",
        "defaultMessage": "Followed hashtags"
    }
});
var FollowButton = function (_ref) {
    var id = _ref.id;
    var isFollow = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(function (state) { return ({
        isFollow: state.tags.list.find(function (t) { return t.name === id; })
    }); }).isFollow;
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    var onClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        var action = isFollow ? soapbox_actions_tags__WEBPACK_IMPORTED_MODULE_1__.unfollowTag : soapbox_actions_tags__WEBPACK_IMPORTED_MODULE_1__.followTag;
        dispatch(action(id));
    }, [isFollow, id]);
    var text = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
        return isFollow ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "hashtag_timeline.unfollow",
            defaultMessage: "Unfollow",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 7
            }
        }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "hashtag_timeline.follow",
            defaultMessage: "Follow",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 7
            }
        });
    }, [isFollow]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
        className: "mx-3",
        style: {
            background: 'transparent'
        },
        onClick: onClick,
        src: isFollow ? __webpack_require__(/*! @tabler/icons/minus.svg */ 886) : __webpack_require__(/*! @tabler/icons/plus.svg */ 548),
        text: text,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 5
        }
    });
};
var FollowedHashtags = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(null), tags = _a[0], setTags = _a[1];
    var dispatch = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    var _b = (0,soapbox_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(function (state) { return ({
        tags: state.tags.list,
        loading: state.tags.loading
    }); }), serverTags = _b.tags, loading = _b.loading; // we want to keep our own list to allow user to refollow instantly if unfollow was a mistake
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (loading || tags)
            return;
        setTags(serverTags);
    }, [serverTags, tags, loading]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        dispatch((0,soapbox_actions_tags__WEBPACK_IMPORTED_MODULE_1__.fetchTags)());
    }, [dispatch]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__.Column, {
        label: intl.formatMessage(messages.heading),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 5
        }
    }, !tags ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
        }
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_scrollable_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "flex flex-col gap-2",
        scrollKey: "followed_hashtags",
        emptyMessage: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "column.tags.empty",
            defaultMessage: "You don't follow any hashtag yet.",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 27
            }
        }),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
        }
    }, tags === null || tags === void 0 ? void 0 : tags.map(function (tag) { /*#__PURE__*/ return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-1 bg-gray-100 dark:bg-slate-900 rounded flex flex-wrap justify-between items-center",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "flex items-center grow",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 19
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: __webpack_require__(/*! @tabler/icons/hash.svg */ 885),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__.Text, {
        tag: "span",
        weight: "semibold",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
        }
    }, tag.name)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "flex items-center gap-3 grow shrink justify-end",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 19
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FollowButton, {
        id: tag.name,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "dark:text-slate-800 text-gray-300",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
        }
    }, "|"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        theme: "link",
        to: "/tag/".concat(tag.name),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "flex items-center",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 23
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "column.tags.see",
        defaultMessage: "See",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
        }
    }), "\xA0", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: __webpack_require__(/*! @tabler/icons/arrow-right.svg */ 884),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
        }
    }))))); })));
};
/* harmony default export */ __webpack_exports__["default"] = (FollowedHashtags);


/***/ })

}]);
//# sourceMappingURL=213-4a7c3182ddfb0f8a0397.chunk.js.map