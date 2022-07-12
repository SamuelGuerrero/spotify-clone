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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Player() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volumen = ref7[0], setVolumen = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                console.log(\"Now playing; \", (ref10 = data1.body) === null || ref10 === void 0 ? void 0 : ref10.item);\n                setCurrentTrackId((ref8 = data1.body) === null || ref8 === void 0 ? void 0 : ref8.item.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.body) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    var handlePlayPause = function() {\n        console.log(\"Cambiando estado de la canci\\xf3n\");\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            if (data.body.is_playing) {\n                spotifyApi.pause();\n                setIsPlaying(false);\n            } else {\n                spotifyApi.play();\n                setIsPlaying(true);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolumen(50);\n        }\n    }, [\n        _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState,\n        spotifyApi,\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-xs text-white md:px-8 md:text-base\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item-center flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden h-10 w-10 md:inline\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.RewindIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.FastForwardIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-3 md:space-x-4 justify-end pr-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.VolumeUpIcon, {\n                                className: \"button\"\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-14 md:w-28\",\n                                type: \"range\",\n                                value: \"\",\n                                min: 0,\n                                max: 100\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.VolumeUpIcon, {\n                                className: \"button\"\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Player, \"xAbtr8McdukymbvzeEkKQxt62WQ=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLFFBQVE7Ozs7OzRCQUFHO2tDQUMzQyw4REFBQzdDLGdFQUFVO3dCQUFDNkMsU0FBUyxFQUFDLFFBQVE7Ozs7OzRCQUFHO29CQUVoQ25CLFNBQVMsaUJBQ1IsOERBQUNyQiwrREFBUzt3QkFBQ21ELE9BQU8sRUFBRWhCLGVBQWU7d0JBQUVLLFNBQVMsRUFBQyxrQkFBa0I7Ozs7OzRCQUFHLGlCQUVwRSw4REFBQ3pDLDhEQUFRO3dCQUFDb0QsT0FBTyxFQUFFaEIsZUFBZTt3QkFBRUssU0FBUyxFQUFDLGtCQUFrQjs7Ozs7NEJBQUc7a0NBR3JFLDhEQUFDdkMscUVBQWU7d0JBQUN1QyxTQUFTLEVBQUMsUUFBUTs7Ozs7NEJBQUc7a0NBRXRDLDhEQUFDMUMsK0RBQVM7d0JBQUMwQyxTQUFTLEVBQUMsUUFBUTs7Ozs7NEJBQUc7a0NBR2hDLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsMkRBQTJEOzswQ0FDdEUsOERBQUNyQyxrRUFBYztnQ0FBQ3FDLFNBQVMsRUFBQyxRQUFROzs7OztvQ0FBRTswQ0FDcEMsOERBQUNZLE9BQUs7Z0NBQUNaLFNBQVMsRUFBQyxjQUFjO2dDQUFDYSxJQUFJLEVBQUMsT0FBTztnQ0FBQ0MsS0FBSyxFQUFDLEVBQUU7Z0NBQUNDLEdBQUcsRUFBRSxDQUFDO2dDQUFFQyxHQUFHLEVBQUUsR0FBRzs7Ozs7b0NBQUc7MENBQ3pFLDhEQUFDM0Qsa0VBQVk7Z0NBQUMyQyxTQUFTLEVBQUMsUUFBUTs7Ozs7b0NBQUU7Ozs7Ozs0QkFDaEM7Ozs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBaEZRM0IsTUFBTTs7UUFDTUgseURBQVU7UUFDS04sdURBQVU7UUFFMUNRLGtEQUFjO1FBQ2tCQSxrREFBYztRQUcvQkQsMERBQVc7OztBQVJyQkUsS0FBQUEsTUFBTTtBQWtGZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyLmpzP2FhZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmV3aW5kSWNvbixcbiAgU3dpdGNoSG9yaXpvbnRhbEljb24sXG4gIFZvbHVtZVVwSWNvbixcbiAgUmVwbHlJY29uLFxuICBQbGF5SWNvbixcbiAgUGF1c2VJY29uLFxuICBGYXN0Rm9yd2FyZEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7XG4gIEhlYXJ0SWNvbixcbiAgVm9sdW1lVXBJY29uIGFzIFZvbHVtZURvd25JY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5cbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3VycmVudFRyYWNrSWRTdGF0ZSwgaXNQbGF5aW5nU3RhdGUgfSBmcm9tIFwiLi4vYXRvbXMvc29uZ0F0b21cIjtcbmltcG9ydCB1c2VTcG90aWZ5IGZyb20gXCIuLi9ob29rcy91c2VTcG90aWZ5XCI7XG5cbmltcG9ydCB1c2VTb25nSW5mbyBmcm9tIFwiLi4vaG9va3MvdXNlU29uZ0luZm9cIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuXG5mdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGNvbnN0IHNwb3RpZnlBcGkgPSB1c2VTcG90aWZ5KCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtjdXJyZW50VHJhY2tJZCwgc2V0Q3VycmVudFRyYWNrSWRdID1cbiAgICB1c2VSZWNvaWxTdGF0ZShjdXJyZW50VHJhY2tJZFN0YXRlKTtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVJlY29pbFN0YXRlKGlzUGxheWluZ1N0YXRlKTtcbiAgY29uc3QgW3ZvbHVtZW4sIHNldFZvbHVtZW5dID0gdXNlU3RhdGUoNTApO1xuXG4gIGNvbnN0IHNvbmdJbmZvID0gdXNlU29uZ0luZm8oKTtcblxuICBjb25zdCBmZXRjaEN1cnJlbnRTb25nID0gKCkgPT4ge1xuICAgIGlmICghc29uZ0luZm8pIHtcbiAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBwbGF5aW5nOyBcIiwgZGF0YS5ib2R5Py5pdGVtKTtcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrSWQoZGF0YS5ib2R5Py5pdGVtLmlkKTtcbiAgICAgICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldElzUGxheWluZyhkYXRhLmJvZHk/LmlzX3BsYXlpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDYW1iaWFuZG8gZXN0YWRvIGRlIGxhIGNhbmNpw7NuXCIpO1xuICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmJvZHkuaXNfcGxheWluZykge1xuICAgICAgICBzcG90aWZ5QXBpLnBhdXNlKCk7XG4gICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcG90aWZ5QXBpLnBsYXkoKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNwb3RpZnlBcGkuZ2V0QWNjZXNzVG9rZW4oKSAmJiAhY3VycmVudFRyYWNrSWQpIHtcbiAgICAgIGZldGNoQ3VycmVudFNvbmcoKTtcbiAgICAgIHNldFZvbHVtZW4oNTApO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRUcmFja0lkU3RhdGUsIHNwb3RpZnlBcGksIHNlc3Npb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBoLTI0IGdyaWQtY29scy0zIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1ncmF5LTkwMCBweC0yIHRleHQteHMgdGV4dC13aGl0ZSBtZDpweC04IG1kOnRleHQtYmFzZVwiPlxuICAgICAgey8qIExlZnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2VudGVyIGZsZXggc3BhY2UteC00XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCB3LTEwIG1kOmlubGluZVwiXG4gICAgICAgICAgc3JjPXtzb25nSW5mbz8uYWxidW0uaW1hZ2VzPy5bMF0/LnVybH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHlcIj5cbiAgICAgICAgPFN3aXRjaEhvcml6b250YWxJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG4gICAgICAgIDxSZXdpbmRJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG5cbiAgICAgICAge2lzUGxheWluZyA/IChcbiAgICAgICAgICA8UGF1c2VJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGgtMTAgdy0xMFwiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFBsYXlJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGgtMTAgdy0xMFwiIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZhc3RGb3J3YXJkSWNvbiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuXG4gICAgICAgIDxSZXBseUljb24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cblxuICAgICAgICB7LyogUmlnaHQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIG1kOnNwYWNlLXgtNCBqdXN0aWZ5LWVuZCBwci01XCI+XG4gICAgICAgICAgICA8Vm9sdW1lRG93bkljb24gY2xhc3NOYW1lPVwiYnV0dG9uXCIvPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTQgbWQ6dy0yOFwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiXCIgbWluPXswfSBtYXg9ezEwMH0vPlxuICAgICAgICAgICAgPFZvbHVtZVVwSWNvbiBjbGFzc05hbWU9XCJidXR0b25cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6WyJSZXdpbmRJY29uIiwiU3dpdGNoSG9yaXpvbnRhbEljb24iLCJWb2x1bWVVcEljb24iLCJSZXBseUljb24iLCJQbGF5SWNvbiIsIlBhdXNlSWNvbiIsIkZhc3RGb3J3YXJkSWNvbiIsIkhlYXJ0SWNvbiIsIlZvbHVtZURvd25JY29uIiwidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjdXJyZW50VHJhY2tJZFN0YXRlIiwiaXNQbGF5aW5nU3RhdGUiLCJ1c2VTcG90aWZ5IiwidXNlU29uZ0luZm8iLCJ1c2VSZWNvaWxTdGF0ZSIsIlBsYXllciIsInNvbmdJbmZvIiwic3BvdGlmeUFwaSIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY3VycmVudFRyYWNrSWQiLCJzZXRDdXJyZW50VHJhY2tJZCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZvbHVtZW4iLCJzZXRWb2x1bWVuIiwiZmV0Y2hDdXJyZW50U29uZyIsImdldE15Q3VycmVudFBsYXlpbmdUcmFjayIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIml0ZW0iLCJpZCIsImdldE15Q3VycmVudFBsYXliYWNrU3RhdGUiLCJpc19wbGF5aW5nIiwiaGFuZGxlUGxheVBhdXNlIiwicGF1c2UiLCJwbGF5IiwiZ2V0QWNjZXNzVG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbGJ1bSIsImltYWdlcyIsInVybCIsImFsdCIsImgzIiwibmFtZSIsInAiLCJhcnRpc3RzIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwibWluIiwibWF4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Player.js\n");

/***/ })

});