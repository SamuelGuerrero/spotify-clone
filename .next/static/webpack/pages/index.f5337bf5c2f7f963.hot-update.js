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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Player() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volumen = ref7[0], setVolumen = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                console.log(\"Now playing; \", (ref10 = data1.body) === null || ref10 === void 0 ? void 0 : ref10.item);\n                setCurrentTrackId((ref8 = data1.body) === null || ref8 === void 0 ? void 0 : ref8.item.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.body) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    var handlePlayPause = function() {\n        console.log(\"Cambiando estado de la canci\\xf3n\");\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            if (data.body.is_playing) {\n                spotifyApi.pause();\n                setIsPlaying(false);\n            } else {\n                spotifyApi.play();\n                setIsPlaying(true);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolumen(50);\n        }\n    }, [\n        _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState,\n        spotifyApi,\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-xs text-white md:px-8 md:text-base\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item-center flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden h-10 w-10 md:inline\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.RewindIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.FastForwardIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Player, \"xAbtr8McdukymbvzeEkKQxt62WQ=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxRQUFROzs7Ozs0QkFBRztrQ0FDM0MsOERBQUM3QyxnRUFBVTt3QkFBQzZDLFNBQVMsRUFBQyxRQUFROzs7Ozs0QkFBRztvQkFFaENuQixTQUFTLGlCQUNSLDhEQUFDckIsK0RBQVM7d0JBQUNtRCxPQUFPLEVBQUVoQixlQUFlO3dCQUFFSyxTQUFTLEVBQUMsa0JBQWtCOzs7Ozs0QkFBRyxpQkFFcEUsOERBQUN6Qyw4REFBUTt3QkFBQ29ELE9BQU8sRUFBRWhCLGVBQWU7d0JBQUVLLFNBQVMsRUFBQyxrQkFBa0I7Ozs7OzRCQUFHO2tDQUdyRSw4REFBQ3ZDLHFFQUFlO3dCQUFDdUMsU0FBUyxFQUFDLFFBQVE7Ozs7OzRCQUFHO2tDQUV0Qyw4REFBQzFDLCtEQUFTO3dCQUFDMEMsU0FBUyxFQUFDLFFBQVE7Ozs7OzRCQUFHOzs7Ozs7b0JBQzVCOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F6RVEzQixNQUFNOztRQUNNSCx5REFBVTtRQUNLTix1REFBVTtRQUUxQ1Esa0RBQWM7UUFDa0JBLGtEQUFjO1FBRy9CRCwwREFBVzs7O0FBUnJCRSxLQUFBQSxNQUFNO0FBMkVmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIuanM/YWFlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBSZXdpbmRJY29uLFxuICBTd2l0Y2hIb3Jpem9udGFsSWNvbixcbiAgVm9sdW1lVXBJY29uLFxuICBSZXBseUljb24sXG4gIFBsYXlJY29uLFxuICBQYXVzZUljb24sXG4gIEZhc3RGb3J3YXJkSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHtcbiAgSGVhcnRJY29uLFxuICBWb2x1bWVVcEljb24gYXMgVm9sdW1lRG93bkljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcblxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjdXJyZW50VHJhY2tJZFN0YXRlLCBpc1BsYXlpbmdTdGF0ZSB9IGZyb20gXCIuLi9hdG9tcy9zb25nQXRvbVwiO1xuaW1wb3J0IHVzZVNwb3RpZnkgZnJvbSBcIi4uL2hvb2tzL3VzZVNwb3RpZnlcIjtcblxuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gXCIuLi9ob29rcy91c2VTb25nSW5mb1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IHVzZVNwb3RpZnkoKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2N1cnJlbnRUcmFja0lkLCBzZXRDdXJyZW50VHJhY2tJZF0gPVxuICAgIHVzZVJlY29pbFN0YXRlKGN1cnJlbnRUcmFja0lkU3RhdGUpO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlUmVjb2lsU3RhdGUoaXNQbGF5aW5nU3RhdGUpO1xuICBjb25zdCBbdm9sdW1lbiwgc2V0Vm9sdW1lbl0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgY29uc3Qgc29uZ0luZm8gPSB1c2VTb25nSW5mbygpO1xuXG4gIGNvbnN0IGZldGNoQ3VycmVudFNvbmcgPSAoKSA9PiB7XG4gICAgaWYgKCFzb25nSW5mbykge1xuICAgICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5aW5nVHJhY2soKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm93IHBsYXlpbmc7IFwiLCBkYXRhLmJvZHk/Lml0ZW0pO1xuICAgICAgICBzZXRDdXJyZW50VHJhY2tJZChkYXRhLmJvZHk/Lml0ZW0uaWQpO1xuICAgICAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0SXNQbGF5aW5nKGRhdGEuYm9keT8uaXNfcGxheWluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNhbWJpYW5kbyBlc3RhZG8gZGUgbGEgY2FuY2nDs25cIilcbiAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYm9keS5pc19wbGF5aW5nKSB7XG4gICAgICAgICAgc3BvdGlmeUFwaS5wYXVzZSgpO1xuICAgICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BvdGlmeUFwaS5wbGF5KCk7XG4gICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzcG90aWZ5QXBpLmdldEFjY2Vzc1Rva2VuKCkgJiYgIWN1cnJlbnRUcmFja0lkKSB7XG4gICAgICBmZXRjaEN1cnJlbnRTb25nKCk7XG4gICAgICBzZXRWb2x1bWVuKDUwKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50VHJhY2tJZFN0YXRlLCBzcG90aWZ5QXBpLCBzZXNzaW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaC0yNCBncmlkLWNvbHMtMyBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2sgdG8tZ3JheS05MDAgcHgtMiB0ZXh0LXhzIHRleHQtd2hpdGUgbWQ6cHgtOCBtZDp0ZXh0LWJhc2VcIj5cbiAgICAgIHsvKiBMZWZ0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNlbnRlciBmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgdy0xMCBtZDppbmxpbmVcIlxuICAgICAgICAgIHNyYz17c29uZ0luZm8/LmFsYnVtLmltYWdlcz8uWzBdPy51cmx9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+e3NvbmdJbmZvPy5uYW1lfTwvaDM+XG4gICAgICAgICAgPHA+e3NvbmdJbmZvPy5hcnRpc3RzPy5bMF0/Lm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgIDxTd2l0Y2hIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuICAgICAgICA8UmV3aW5kSWNvbiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuXG4gICAgICAgIHtpc1BsYXlpbmcgPyAoXG4gICAgICAgICAgPFBhdXNlSWNvbiBvbkNsaWNrPXtoYW5kbGVQbGF5UGF1c2V9IGNsYXNzTmFtZT1cImJ1dHRvbiBoLTEwIHctMTBcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxQbGF5SWNvbiBvbkNsaWNrPXtoYW5kbGVQbGF5UGF1c2V9IGNsYXNzTmFtZT1cImJ1dHRvbiBoLTEwIHctMTBcIiAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGYXN0Rm9yd2FyZEljb24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cblxuICAgICAgICA8UmVwbHlJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbIlJld2luZEljb24iLCJTd2l0Y2hIb3Jpem9udGFsSWNvbiIsIlZvbHVtZVVwSWNvbiIsIlJlcGx5SWNvbiIsIlBsYXlJY29uIiwiUGF1c2VJY29uIiwiRmFzdEZvcndhcmRJY29uIiwiSGVhcnRJY29uIiwiVm9sdW1lRG93bkljb24iLCJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsInVzZVNwb3RpZnkiLCJ1c2VTb25nSW5mbyIsInVzZVJlY29pbFN0YXRlIiwiUGxheWVyIiwic29uZ0luZm8iLCJzcG90aWZ5QXBpIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJjdXJyZW50VHJhY2tJZCIsInNldEN1cnJlbnRUcmFja0lkIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidm9sdW1lbiIsInNldFZvbHVtZW4iLCJmZXRjaEN1cnJlbnRTb25nIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiaXRlbSIsImlkIiwiZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSIsImlzX3BsYXlpbmciLCJoYW5kbGVQbGF5UGF1c2UiLCJwYXVzZSIsInBsYXkiLCJnZXRBY2Nlc3NUb2tlbiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsYnVtIiwiaW1hZ2VzIiwidXJsIiwiYWx0IiwiaDMiLCJuYW1lIiwicCIsImFydGlzdHMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Player.js\n");

/***/ })

});