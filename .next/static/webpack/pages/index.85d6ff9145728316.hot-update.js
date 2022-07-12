"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Player() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volumen = ref7[0], setVolumen = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                console.log(\"Now playing; \", (ref10 = data1.body) === null || ref10 === void 0 ? void 0 : ref10.item);\n                setCurrentTrackId((ref8 = data1.body) === null || ref8 === void 0 ? void 0 : ref8.item.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.body) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolumen(50);\n        }\n    }, [\n        _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState,\n        spotifyApi,\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-xs text-white md:px-8 md:text-base\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item-center flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden h-10 w-10 md:inline\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.RewindIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Player, \"xAbtr8McdukymbvzeEkKQxt62WQ=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFBQSxDQUEyQixHQUEzQkEsWUFBd0IsQ0FBQyxDQUFDLENBQUMsZ0NBQTNCQSxLQUFBQSxDQUEyQixRQUFFNEIsR0FBRzt3QkFDckNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs0QkFDTjtrQ0FDRiw4REFBQ1AsS0FBRzs7MENBQ0YsOERBQUNRLElBQUU7MENBQUU5QixRQUFRLGFBQVJBLFFBQVEsV0FBTSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRStCLElBQUk7Ozs7O29DQUFNOzBDQUN6Qiw4REFBQ0MsR0FBQzswQ0FBRWhDLFFBQVEsYUFBUkEsUUFBUSxXQUFTLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsSUFBaUIsR0FBakJBLFFBQVEsQ0FBRWlDLE9BQU8sY0FBakJqQyxJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLFFBQUFBLElBQWlCLENBQUcsQ0FBQyxDQUFDLDZCQUFMLEdBQWpCQSxLQUFBQSxDQUFpQixRQUFPK0IsSUFBSTs7Ozs7b0NBQUs7Ozs7Ozs0QkFDakM7Ozs7OztvQkFDRjswQkFFTiw4REFBQ1QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLE1BQU07O2tDQUNuQiw4REFBQ3pCLDBFQUFvQjt3QkFBQ3lCLFNBQVMsRUFBQyxRQUFROzs7Ozs0QkFBRTtrQ0FDMUMsOERBQUMxQixnRUFBVTt3QkFBQzBCLFNBQVMsRUFBQyxRQUFROzs7Ozs0QkFBRTs7Ozs7O29CQUM1Qjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBbERReEIsTUFBTTs7UUFDTUwseURBQVU7UUFDS04sdURBQVU7UUFFMUNRLGtEQUFjO1FBQ2tCQSxrREFBYztRQUcvQkQsMERBQVc7OztBQVJyQkksS0FBQUEsTUFBTTtBQW9EZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyLmpzP2FhZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjdXJyZW50VHJhY2tJZFN0YXRlLCBpc1BsYXlpbmdTdGF0ZSB9IGZyb20gXCIuLi9hdG9tcy9zb25nQXRvbVwiO1xuaW1wb3J0IHVzZVNwb3RpZnkgZnJvbSBcIi4uL2hvb2tzL3VzZVNwb3RpZnlcIjtcblxuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gXCIuLi9ob29rcy91c2VTb25nSW5mb1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBSZXdpbmRJY29uLCBTd2l0Y2hIb3Jpem9udGFsSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcblxuZnVuY3Rpb24gUGxheWVyKCkge1xuICBjb25zdCBzcG90aWZ5QXBpID0gdXNlU3BvdGlmeSgpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbY3VycmVudFRyYWNrSWQsIHNldEN1cnJlbnRUcmFja0lkXSA9XG4gICAgdXNlUmVjb2lsU3RhdGUoY3VycmVudFRyYWNrSWRTdGF0ZSk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VSZWNvaWxTdGF0ZShpc1BsYXlpbmdTdGF0ZSk7XG4gIGNvbnN0IFt2b2x1bWVuLCBzZXRWb2x1bWVuXSA9IHVzZVN0YXRlKDUwKTtcblxuICBjb25zdCBzb25nSW5mbyA9IHVzZVNvbmdJbmZvKCk7XG5cbiAgY29uc3QgZmV0Y2hDdXJyZW50U29uZyA9ICgpID0+IHtcbiAgICBpZiAoIXNvbmdJbmZvKSB7XG4gICAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXlpbmdUcmFjaygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3cgcGxheWluZzsgXCIsIGRhdGEuYm9keT8uaXRlbSk7XG4gICAgICAgIHNldEN1cnJlbnRUcmFja0lkKGRhdGEuYm9keT8uaXRlbS5pZCk7XG4gICAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRJc1BsYXlpbmcoZGF0YS5ib2R5Py5pc19wbGF5aW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3BvdGlmeUFwaS5nZXRBY2Nlc3NUb2tlbigpICYmICFjdXJyZW50VHJhY2tJZCkge1xuICAgICAgZmV0Y2hDdXJyZW50U29uZygpO1xuICAgICAgc2V0Vm9sdW1lbig1MCk7XG4gICAgfVxuICB9LCBbY3VycmVudFRyYWNrSWRTdGF0ZSwgc3BvdGlmeUFwaSwgc2Vzc2lvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGgtMjQgZ3JpZC1jb2xzLTMgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsYWNrIHRvLWdyYXktOTAwIHB4LTIgdGV4dC14cyB0ZXh0LXdoaXRlIG1kOnB4LTggbWQ6dGV4dC1iYXNlXCI+XG4gICAgICB7LyogTGVmdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jZW50ZXIgZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIHctMTAgbWQ6aW5saW5lXCJcbiAgICAgICAgICBzcmM9e3NvbmdJbmZvPy5hbGJ1bS5pbWFnZXM/LlswXT8udXJsfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPntzb25nSW5mbz8ubmFtZX08L2gzPlxuICAgICAgICAgIDxwPntzb25nSW5mbz8uYXJ0aXN0cz8uWzBdPy5uYW1lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxTd2l0Y2hIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9XCJidXR0b25cIi8+XG4gICAgICAgIDxSZXdpbmRJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjdXJyZW50VHJhY2tJZFN0YXRlIiwiaXNQbGF5aW5nU3RhdGUiLCJ1c2VTcG90aWZ5IiwidXNlU29uZ0luZm8iLCJ1c2VSZWNvaWxTdGF0ZSIsIlJld2luZEljb24iLCJTd2l0Y2hIb3Jpem9udGFsSWNvbiIsIlBsYXllciIsInNvbmdJbmZvIiwic3BvdGlmeUFwaSIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY3VycmVudFRyYWNrSWQiLCJzZXRDdXJyZW50VHJhY2tJZCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZvbHVtZW4iLCJzZXRWb2x1bWVuIiwiZmV0Y2hDdXJyZW50U29uZyIsImdldE15Q3VycmVudFBsYXlpbmdUcmFjayIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIml0ZW0iLCJpZCIsImdldE15Q3VycmVudFBsYXliYWNrU3RhdGUiLCJpc19wbGF5aW5nIiwiZ2V0QWNjZXNzVG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbGJ1bSIsImltYWdlcyIsInVybCIsImFsdCIsImgzIiwibmFtZSIsInAiLCJhcnRpc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Player.js\n");

/***/ })

});