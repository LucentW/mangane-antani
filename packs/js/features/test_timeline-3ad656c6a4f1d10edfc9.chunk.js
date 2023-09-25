"use strict";
(self["webpackChunkposterdati_fe"] = self["webpackChunkposterdati_fe"] || []).push([[73],{

/***/ 1664:
/*!******************************************************!*\
  !*** ./app/soapbox/features/test_timeline/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ 4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ 5);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ 8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ 9);
/* harmony import */ var soapbox_actions_importer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soapbox/actions/importer */ 11);
/* harmony import */ var soapbox_actions_timelines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! soapbox/actions/timelines */ 32);
/* harmony import */ var soapbox_components_sub_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! soapbox/components/sub_navigation */ 451);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui */ 2);
/* harmony import */ var _ui_components_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/components/timeline */ 1403);
var _this = undefined;
var _jsxFileName = "/home/runner/work/mangane-antani/mangane-antani/app/soapbox/features/test_timeline/index.tsx";








var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
    title: {
        "id": "column.test",
        "defaultMessage": "Test timeline"
    }
});
/**
 * List of mock statuses to display in the timeline.
 * These get embedded into the build, but only in this chunk, so it's okay.
 */
var MOCK_STATUSES = [__webpack_require__(/*! soapbox/__fixtures__/pleroma-status-with-poll.json */ 2369), __webpack_require__(/*! soapbox/__fixtures__/pleroma-status-vertical-video-without-metadata.json */ 2370), __webpack_require__(/*! soapbox/__fixtures__/pleroma-status-with-poll-with-emojis.json */ 2371), __webpack_require__(/*! soapbox/__fixtures__/pleroma-quote-of-quote-post.json */ 2372), __webpack_require__(/*! soapbox/__fixtures__/truthsocial-status-with-external-video.json */ 2373)];
var timelineId = 'test';
var onlyMedia = false;
var TestTimeline = function () {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        dispatch((0,soapbox_actions_importer__WEBPACK_IMPORTED_MODULE_2__.importFetchedStatuses)(MOCK_STATUSES));
        dispatch((0,soapbox_actions_timelines__WEBPACK_IMPORTED_MODULE_3__.expandTimelineSuccess)(timelineId, MOCK_STATUSES, null, false, false, false));
    }, []);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Column, {
        label: intl.formatMessage(messages.title),
        transparent: true,
        withHeader: false,
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 5
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(soapbox_components_sub_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        message: intl.formatMessage(messages.title),
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_components_timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        scrollKey: "".concat(timelineId, "_timeline"),
        timelineId: "".concat(timelineId).concat(onlyMedia ? ':media' : ''),
        emptyMessage: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "empty_column.test",
            defaultMessage: "The test timeline is empty.",
            __self: _this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 23
            }
        }),
        divideType: "space",
        __self: _this,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
        }
    }));
};
/* harmony default export */ __webpack_exports__["default"] = (TestTimeline);


/***/ }),

/***/ 2372:
/*!*******************************************************************!*\
  !*** ./app/soapbox/__fixtures__/pleroma-quote-of-quote-post.json ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"account":{"acct":"alex","avatar":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","avatar_static":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","bot":false,"created_at":"2020-01-08T01:25:43.000Z","display_name":"Alex Gleason","emojis":[],"fields":[{"name":"Website","value":"<a href=\\"https://alexgleason.me\\" rel=\\"ugc\\">https://alexgleason.me</a>"},{"name":"Pleroma+Soapbox","value":"<a href=\\"https://soapbox.pub\\" rel=\\"ugc\\">https://soapbox.pub</a>"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"<a href=\\"https://paypal.me/gleasonator\\" rel=\\"ugc\\">https://paypal.me/gleasonator</a>"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"followers_count":2220,"following_count":1544,"fqn":"alex@gleasonator.com","header":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","header_static":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","id":"9v5bmRalQvjOy0ECcC","last_status_at":"2022-01-24T21:02:44","locked":false,"note":"I create Fediverse software that empowers people online.<br/><br/>I&#39;m vegan btw<br/><br/>Note: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"accepts_chat_messages":true,"also_known_as":[],"ap_id":"https://gleasonator.com/users/alex","background_image":null,"favicon":"https://gleasonator.com/favicon.png","hide_favorites":true,"hide_followers":false,"hide_followers_count":false,"hide_follows":false,"hide_follows_count":false,"is_admin":true,"is_confirmed":true,"is_moderator":false,"is_suggested":true,"relationship":{},"skip_thread_containment":false,"tags":[]},"source":{"fields":[{"name":"Website","value":"https://alexgleason.me"},{"name":"Pleroma+Soapbox","value":"https://soapbox.pub"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"https://paypal.me/gleasonator"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"note":"I create Fediverse software that empowers people online.\\r\\n\\r\\nI\'m vegan btw\\r\\n\\r\\nNote: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"actor_type":"Person","discoverable":false},"sensitive":false},"statuses_count":23004,"url":"https://gleasonator.com/users/alex","username":"alex"},"application":{"name":"Soapbox FE","website":"https://soapbox.pub/"},"bookmarked":false,"card":null,"content":"<p>Quote of quote post</p>","created_at":"2022-01-24T21:02:43.000Z","emojis":[],"favourited":false,"favourites_count":0,"id":"AFmFNKmfrR9CxtV01g","in_reply_to_account_id":null,"in_reply_to_id":null,"language":null,"media_attachments":[],"mentions":[{"acct":"alex","id":"9v5bmRalQvjOy0ECcC","url":"https://gleasonator.com/users/alex","username":"alex"}],"muted":false,"pinned":false,"pleroma":{"content":{"text/plain":"Quote of quote post"},"conversation_id":"AFmFNKkXzLRirIVIi8","direct_conversation_id":null,"emoji_reactions":[],"expires_at":null,"in_reply_to_account_acct":null,"local":true,"parent_visible":false,"pinned_at":null,"quote":{"account":{"acct":"alex","avatar":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","avatar_static":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","bot":false,"created_at":"2020-01-08T01:25:43.000Z","display_name":"Alex Gleason","emojis":[],"fields":[{"name":"Website","value":"<a href=\\"https://alexgleason.me\\" rel=\\"ugc\\">https://alexgleason.me</a>"},{"name":"Pleroma+Soapbox","value":"<a href=\\"https://soapbox.pub\\" rel=\\"ugc\\">https://soapbox.pub</a>"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"<a href=\\"https://paypal.me/gleasonator\\" rel=\\"ugc\\">https://paypal.me/gleasonator</a>"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"followers_count":2220,"following_count":1544,"fqn":"alex@gleasonator.com","header":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","header_static":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","id":"9v5bmRalQvjOy0ECcC","last_status_at":"2022-01-24T21:02:44","locked":false,"note":"I create Fediverse software that empowers people online.<br/><br/>I&#39;m vegan btw<br/><br/>Note: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"accepts_chat_messages":true,"also_known_as":[],"ap_id":"https://gleasonator.com/users/alex","background_image":null,"favicon":"https://gleasonator.com/favicon.png","hide_favorites":true,"hide_followers":false,"hide_followers_count":false,"hide_follows":false,"hide_follows_count":false,"is_admin":true,"is_confirmed":true,"is_moderator":false,"is_suggested":true,"relationship":{},"skip_thread_containment":false,"tags":[]},"source":{"fields":[{"name":"Website","value":"https://alexgleason.me"},{"name":"Pleroma+Soapbox","value":"https://soapbox.pub"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"https://paypal.me/gleasonator"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"note":"I create Fediverse software that empowers people online.\\r\\n\\r\\nI\'m vegan btw\\r\\n\\r\\nNote: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"actor_type":"Person","discoverable":false},"sensitive":false},"statuses_count":23004,"url":"https://gleasonator.com/users/alex","username":"alex"},"application":{"name":"Soapbox FE","website":"https://soapbox.pub/"},"bookmarked":false,"card":null,"content":"<p>Quote post</p>","created_at":"2022-01-24T21:02:34.000Z","emojis":[],"favourited":false,"favourites_count":0,"id":"AFmFMSpITT9xcOJKcK","in_reply_to_account_id":null,"in_reply_to_id":null,"language":null,"media_attachments":[],"mentions":[{"acct":"alex","id":"9v5bmRalQvjOy0ECcC","url":"https://gleasonator.com/users/alex","username":"alex"}],"muted":false,"pinned":false,"pleroma":{"content":{"text/plain":"Quote post"},"conversation_id":"AFmFMSnWa3k3WtTur2","direct_conversation_id":null,"emoji_reactions":[{"count":1,"me":false,"name":"👍"}],"expires_at":null,"in_reply_to_account_acct":null,"local":true,"parent_visible":false,"pinned_at":null,"quote":null,"quote_url":"https://gleasonator.com/objects/4f35159c-3794-4037-9269-a7c84f7137c7","spoiler_text":{"text/plain":""},"thread_muted":false},"poll":null,"reblog":null,"reblogged":false,"reblogs_count":0,"replies_count":0,"sensitive":false,"spoiler_text":"","tags":[],"text":null,"uri":"https://gleasonator.com/objects/54d93075-7d04-4016-a128-81f3843bca79","url":"https://gleasonator.com/notice/AFmFMSpITT9xcOJKcK","visibility":"public"},"quote_url":"https://gleasonator.com/objects/54d93075-7d04-4016-a128-81f3843bca79","spoiler_text":{"text/plain":""},"thread_muted":false},"poll":null,"reblog":null,"reblogged":false,"reblogs_count":0,"replies_count":1,"sensitive":false,"spoiler_text":"","tags":[],"text":null,"uri":"https://gleasonator.com/objects/1e2cfb5a-ece5-42df-9ec1-13e5de6d9f5b","url":"https://gleasonator.com/notice/AFmFNKmfrR9CxtV01g","visibility":"public"}');

/***/ }),

/***/ 2370:
/*!**************************************************************************************!*\
  !*** ./app/soapbox/__fixtures__/pleroma-status-vertical-video-without-metadata.json ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"account":{"acct":"alex","avatar":"https://freespeechextremist.com/images/avi.png","avatar_static":"https://freespeechextremist.com/images/avi.png","bot":false,"created_at":"2022-02-28T01:55:05.000Z","display_name":"Alex Gleason","emojis":[],"fields":[],"followers_count":1,"following_count":0,"header":"https://freespeechextremist.com/images/banner.png","header_static":"https://freespeechextremist.com/images/banner.png","id":"AGv8wCadU7DqWgMqNk","locked":false,"note":"I&#39;m testing out compatibility with an older Pleroma version","pleroma":{"accepts_chat_messages":true,"ap_id":"https://freespeechextremist.com/users/alex","background_image":null,"confirmation_pending":false,"favicon":null,"hide_favorites":true,"hide_followers":false,"hide_followers_count":false,"hide_follows":false,"hide_follows_count":false,"is_admin":false,"is_moderator":false,"relationship":{},"skip_thread_containment":false,"tags":[]},"source":{"fields":[],"note":"I\'m testing out compatibility with an older Pleroma version","pleroma":{"actor_type":"Person","discoverable":true},"sensitive":false},"statuses_count":1,"url":"https://freespeechextremist.com/users/alex","username":"alex"},"application":{"name":"Web","website":null},"bookmarked":false,"card":null,"content":"<br/><a href=\\"https://freespeechextremist.com/media/3e34b808-1c84-4ef3-ba56-67cc86b7911a/0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm?name=0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm\\">0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm</a>","created_at":"2022-04-14T19:42:48.000Z","emojis":[],"favourited":false,"favourites_count":0,"id":"AIRxLeIzncpCtsr2hs","in_reply_to_account_id":null,"in_reply_to_id":null,"language":null,"media_attachments":[{"description":"0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm","id":"1142674091","pleroma":{"mime_type":"video/webm"},"preview_url":"https://freespeechextremist.com/media/3e34b808-1c84-4ef3-ba56-67cc86b7911a/0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm?name=0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm","remote_url":"https://freespeechextremist.com/media/3e34b808-1c84-4ef3-ba56-67cc86b7911a/0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm?name=0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm","text_url":"https://freespeechextremist.com/media/3e34b808-1c84-4ef3-ba56-67cc86b7911a/0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm?name=0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm","type":"video","url":"https://freespeechextremist.com/media/3e34b808-1c84-4ef3-ba56-67cc86b7911a/0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm?name=0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm"}],"mentions":[],"muted":false,"pinned":false,"pleroma":{"content":{"text/plain":"0f66e92f339705ccc03079b8f647048e15730adf2cc9eaa1071c7c7cf6884b1b.webm"},"conversation_id":97191096,"direct_conversation_id":null,"emoji_reactions":[],"expires_at":null,"in_reply_to_account_acct":null,"local":true,"parent_visible":false,"spoiler_text":{"text/plain":""},"thread_muted":false},"poll":null,"reblog":null,"reblogged":false,"reblogs_count":0,"replies_count":0,"sensitive":false,"spoiler_text":"","tags":[],"text":null,"uri":"https://freespeechextremist.com/objects/419b2cad-656a-4dbc-b2b5-94bb75e0afc8","url":"https://freespeechextremist.com/notice/AIRxLeIzncpCtsr2hs","visibility":"public"}');

/***/ }),

/***/ 2371:
/*!****************************************************************************!*\
  !*** ./app/soapbox/__fixtures__/pleroma-status-with-poll-with-emojis.json ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"account":{"acct":"alex","avatar":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","avatar_static":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","bot":false,"created_at":"2020-01-08T01:25:43.000Z","display_name":"Alex Gleason","emojis":[],"fields":[{"name":"Website","value":"<a href=\\"https://alexgleason.me\\" rel=\\"ugc\\">https://alexgleason.me</a>"},{"name":"Soapbox","value":"<a href=\\"https://soapbox.pub\\" rel=\\"ugc\\">https://soapbox.pub</a>"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"<a href=\\"https://paypal.me/gleasonator\\" rel=\\"ugc\\">https://paypal.me/gleasonator</a>"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"followers_count":2467,"following_count":1581,"fqn":"alex@gleasonator.com","header":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","header_static":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","id":"9v5bmRalQvjOy0ECcC","last_status_at":"2022-03-11T01:33:19","locked":false,"note":"I create Fediverse software that empowers people online.<br/><br/>I&#39;m vegan btw<br/><br/>Note: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"accepts_chat_messages":true,"also_known_as":["https://mitra.social/users/alex"],"ap_id":"https://gleasonator.com/users/alex","background_image":null,"birthday":"1993-07-03","favicon":"https://gleasonator.com/favicon.png","hide_favorites":true,"hide_followers":false,"hide_followers_count":false,"hide_follows":false,"hide_follows_count":false,"is_admin":true,"is_confirmed":true,"is_moderator":false,"is_suggested":true,"relationship":{},"skip_thread_containment":false,"tags":[]},"source":{"fields":[{"name":"Website","value":"https://alexgleason.me"},{"name":"Soapbox","value":"https://soapbox.pub"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"https://paypal.me/gleasonator"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"note":"I create Fediverse software that empowers people online.\\r\\n\\r\\nI\'m vegan btw\\r\\n\\r\\nNote: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"actor_type":"Person","discoverable":false},"sensitive":false},"statuses_count":23651,"url":"https://gleasonator.com/users/alex","username":"alex"},"application":{"name":"Soapbox FE","website":"https://soapbox.pub/"},"bookmarked":false,"card":null,"content":"<p>Test poll</p>","created_at":"2022-03-11T01:33:18.000Z","emojis":[{"shortcode":"gleason_excited","static_url":"https://gleasonator.com/emoji/gleason_emojis/gleason_excited.png","url":"https://gleasonator.com/emoji/gleason_emojis/gleason_excited.png","visible_in_picker":false},{"shortcode":"soapbox","static_url":"https://gleasonator.com/emoji/Gleasonator/soapbox.png","url":"https://gleasonator.com/emoji/Gleasonator/soapbox.png","visible_in_picker":false}],"favourited":false,"favourites_count":1,"id":"AHHue68kB59xtUv7MO","in_reply_to_account_id":null,"in_reply_to_id":null,"language":null,"media_attachments":[],"mentions":[],"muted":false,"pinned":false,"pleroma":{"content":{"text/plain":"Test poll"},"conversation_id":"AHHue65YMwbjjbQZO4","direct_conversation_id":null,"emoji_reactions":[],"expires_at":null,"in_reply_to_account_acct":null,"local":true,"parent_visible":false,"pinned_at":null,"quote":null,"quote_url":null,"quote_visible":false,"spoiler_text":{"text/plain":""},"thread_muted":false},"poll":{"emojis":[{"shortcode":"gleason_excited","static_url":"https://gleasonator.com/emoji/gleason_emojis/gleason_excited.png","url":"https://gleasonator.com/emoji/gleason_emojis/gleason_excited.png","visible_in_picker":false},{"shortcode":"soapbox","static_url":"https://gleasonator.com/emoji/Gleasonator/soapbox.png","url":"https://gleasonator.com/emoji/Gleasonator/soapbox.png","visible_in_picker":false}],"expired":false,"expires_at":"2022-03-12T01:33:18.000Z","id":"AHHue67gF2JDqCQGhc","multiple":false,"options":[{"title":"Regular emoji 😍 ","votes_count":0},{"title":"Custom emoji :gleason_excited: ","votes_count":1},{"title":"No emoji","votes_count":0},{"title":"🤔 😮 😠 ","votes_count":1},{"title":":soapbox:","votes_count":1}],"voters_count":3,"votes_count":3},"reblog":null,"reblogged":false,"reblogs_count":1,"replies_count":1,"sensitive":false,"spoiler_text":"","tags":[],"text":null,"uri":"https://gleasonator.com/objects/46d2ab26-3497-442b-999f-612fe717b0a3","url":"https://gleasonator.com/notice/AHHue68kB59xtUv7MO","visibility":"public"}');

/***/ }),

/***/ 2369:
/*!****************************************************************!*\
  !*** ./app/soapbox/__fixtures__/pleroma-status-with-poll.json ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"account":{"acct":"alex","avatar":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","avatar_static":"https://media.gleasonator.com/6d64aecb17348b23aaff78db4687b9476cb0da1c07cc6a819c2e6ec7144c18b1.png","bot":false,"created_at":"2020-01-08T01:25:43.000Z","display_name":"Alex Gleason","emojis":[],"fields":[{"name":"Website","value":"<a href=\\"https://alexgleason.me\\" rel=\\"ugc\\">https://alexgleason.me</a>"},{"name":"Soapbox","value":"<a href=\\"https://soapbox.pub\\" rel=\\"ugc\\">https://soapbox.pub</a>"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"<a href=\\"https://paypal.me/gleasonator\\" rel=\\"ugc\\">https://paypal.me/gleasonator</a>"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"followers_count":2465,"following_count":1581,"fqn":"alex@gleasonator.com","header":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","header_static":"https://media.gleasonator.com/accounts/headers/000/000/001/original/9d0e4dbf1c9dbc8f.png","id":"9v5bmRalQvjOy0ECcC","last_status_at":"2022-03-10T18:19:50","locked":false,"note":"I create Fediverse software that empowers people online.<br/><br/>I&#39;m vegan btw<br/><br/>Note: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"accepts_chat_messages":true,"also_known_as":["https://mitra.social/users/alex"],"ap_id":"https://gleasonator.com/users/alex","background_image":null,"birthday":"1993-07-03","favicon":"https://gleasonator.com/favicon.png","hide_favorites":true,"hide_followers":false,"hide_followers_count":false,"hide_follows":false,"hide_follows_count":false,"is_admin":true,"is_confirmed":true,"is_moderator":false,"is_suggested":true,"relationship":{},"skip_thread_containment":false,"tags":[]},"source":{"fields":[{"name":"Website","value":"https://alexgleason.me"},{"name":"Soapbox","value":"https://soapbox.pub"},{"name":"Email","value":"alex@alexgleason.me"},{"name":"Gender identity","value":"Soyboy"},{"name":"Donate (PayPal)","value":"https://paypal.me/gleasonator"},{"name":"$BTC","value":"bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n"},{"name":"$ETH","value":"0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717"},{"name":"$DOGE","value":"D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D"},{"name":"$XMR","value":"45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK"}],"note":"I create Fediverse software that empowers people online.\\r\\n\\r\\nI\'m vegan btw\\r\\n\\r\\nNote: If you have a question for me, please tag me publicly. This gives the opportunity for others to chime in, and bystanders to learn.","pleroma":{"actor_type":"Person","discoverable":false},"sensitive":false},"statuses_count":23648,"url":"https://gleasonator.com/users/alex","username":"alex"},"application":null,"bookmarked":false,"card":null,"content":"<p>What is tolerance?</p>","created_at":"2020-03-23T19:33:06.000Z","emojis":[],"favourited":false,"favourites_count":49,"id":"103874034847713213","in_reply_to_account_id":null,"in_reply_to_id":null,"language":null,"media_attachments":[],"mentions":[],"muted":false,"pinned":true,"pleroma":{"content":{"text/plain":"What is tolerance?"},"conversation_id":"3023268","direct_conversation_id":null,"emoji_reactions":[{"count":3,"me":false,"name":"❤️"}],"expires_at":null,"in_reply_to_account_acct":null,"local":true,"parent_visible":false,"pinned_at":"2021-11-23T01:38:44.000Z","quote":null,"quote_url":null,"quote_visible":false,"spoiler_text":{"text/plain":""},"thread_muted":false},"poll":{"emojis":[],"expired":true,"expires_at":"2020-03-24T19:33:06.000Z","id":"4930","multiple":false,"options":[{"title":"Banning, censoring, and deplatforming anyone you disagree with","votes_count":2},{"title":"Promoting free speech, even for people and ideas you dislike","votes_count":36}],"voters_count":2,"votes_count":38},"reblog":null,"reblogged":false,"reblogs_count":27,"replies_count":15,"sensitive":false,"spoiler_text":"","tags":[],"text":null,"uri":"https://gleasonator.com/users/alex/statuses/103874034847713213","url":"https://gleasonator.com/notice/103874034847713213","visibility":"public"}');

/***/ }),

/***/ 2373:
/*!******************************************************************************!*\
  !*** ./app/soapbox/__fixtures__/truthsocial-status-with-external-video.json ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"id":"108046244464677537","created_at":"2022-03-30T15:40:53.287Z","in_reply_to_id":null,"in_reply_to_account_id":null,"sensitive":false,"spoiler_text":"","visibility":"public","language":null,"uri":"https://truthsocial.com/users/alex/statuses/108046244464677537","url":"https://truthsocial.com/@alex/108046244464677537","replies_count":0,"reblogs_count":0,"favourites_count":0,"favourited":false,"reblogged":false,"muted":false,"bookmarked":false,"pinned":false,"content":"","reblog":null,"application":{"name":"Soapbox FE","website":"https://soapbox.pub/"},"account":{"id":"107759994408336377","username":"alex","acct":"alex","display_name":"Alex Gleason","locked":false,"bot":false,"discoverable":null,"group":false,"created_at":"2022-02-08T00:00:00.000Z","note":"<p>Launching Truth Social</p>","url":"https://truthsocial.com/@alex","avatar":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/accounts/avatars/107/759/994/408/336/377/original/119cb0dd1fa615b7.png","avatar_static":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/accounts/avatars/107/759/994/408/336/377/original/119cb0dd1fa615b7.png","header":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/accounts/headers/107/759/994/408/336/377/original/31f62b0453ccf554.png","header_static":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/accounts/headers/107/759/994/408/336/377/original/31f62b0453ccf554.png","followers_count":4713,"following_count":43,"statuses_count":7,"last_status_at":"2022-03-30","verified":true,"location":"Texas","website":"https://soapbox.pub/","emojis":[],"fields":[]},"media_attachments":[{"id":"108046243948255335","type":"video","url":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/media_attachments/files/108/046/243/948/255/335/original/3b17ce701c0d6f08.mp4","preview_url":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/cache/preview_cards/images/000/543/912/original/e1fcf6ace01d9ded.jpg","external_video_id":"vwfnq9","remote_url":null,"preview_remote_url":null,"text_url":"https://truthsocial.com/media/SpbYvqKIT2VubC9FFn0","meta":{"original":{"width":988,"height":556,"frame_rate":"60/1","duration":1.949025,"bitrate":402396}},"description":null,"blurhash":null}],"mentions":[],"tags":[],"emojis":[],"card":{"url":"https://rumble.com/vz1trd-video-upload-for-108046244464677537.html?mref=ummtf&mc=3nvg0","title":"Video upload for 108046244464677537","description":"","type":"video","author_name":"hostid1","author_url":"https://rumble.com/user/hostid1","provider_name":"Rumble.com","provider_url":"https://rumble.com/","html":"<iframe src=\\"https://rumble.com/embed/vwfnq9/\\" width=\\"988\\" height=\\"556\\" frameborder=\\"0\\" title=\\"Video upload for 108046244464677537\\" allowfullscreen=\\"\\"></iframe>","width":988,"height":556,"image":"https://static-assets.truthsocial.com/tmtg:prime-truth-social-assets/cache/preview_cards/images/000/543/912/original/e1fcf6ace01d9ded.jpg","embed_url":"","blurhash":"UQH1;m~8sks,%M~9?DRk-mRnR+xs9cWVj[bH"},"poll":null}');

/***/ })

}]);
//# sourceMappingURL=test_timeline-3ad656c6a4f1d10edfc9.chunk.js.map