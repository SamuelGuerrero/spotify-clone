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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/time */ \"./lib/time.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Player() {\n    var ref10, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volumen1 = ref7[0], setVolumen = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref11, ref9;\n                console.log(\"Now playing; \", (ref11 = data1.body) === null || ref11 === void 0 ? void 0 : ref11.item);\n                setCurrentTrackId((ref9 = data1.body) === null || ref9 === void 0 ? void 0 : ref9.item.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.body) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    var handlePlayPause = function() {\n        console.log(\"Cambiando estado de la canci\\xf3n\");\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            //console.log(millisToMinutesAndSeconds(data.body.progress_ms))\n            if (data.body.is_playing) {\n                spotifyApi.pause();\n                setIsPlaying(false);\n            } else {\n                spotifyApi.play();\n                setIsPlaying(true);\n            }\n        });\n    };\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), songTime = ref8[0], setSongTime = ref8[1];\n    setSongTime(function() {\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            console.log((0,_lib_time__WEBPACK_IMPORTED_MODULE_8__.millisToMinutesAndSeconds)(data.body.progress_ms));\n            setSongTime((0,_lib_time__WEBPACK_IMPORTED_MODULE_8__.millisToMinutesAndSeconds)(data.body.progress_ms));\n        });\n    }, 1000);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolumen(50);\n        }\n    }, [\n        _atoms_songAtom__WEBPACK_IMPORTED_MODULE_3__.currentTrackIdState,\n        spotifyApi,\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (volumen1 > 0 && volumen1 < 100) {\n            debouncedAdjustVolume(volumen1);\n        }\n    }, [\n        volumen1\n    ]);\n    var debouncedAdjustVolume = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_7__.debounce)(function(volumen) {\n        spotifyApi.setVolume(volumen).catch(function(err) {});\n    }, 100), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-xs text-white md:px-8 md:text-base\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item-center flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden h-10 w-10 md:inline\",\n                        src: (ref10 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref10 === void 0 ? void 0 : (ref1 = ref10[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.RewindIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.FastForwardIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-end space-x-3 pr-5 md:space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.VolumeUpIcon, {\n                                onClick: function() {\n                                    return volumen1 > 0 && setVolumen(volumen1 - 10);\n                                },\n                                className: \"button\"\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-14 md:w-28\",\n                                type: \"range\",\n                                value: volumen1,\n                                onChange: function(e) {\n                                    //console.log(Number(e.target.value))\n                                    setVolumen(Number(e.target.value));\n                                },\n                                min: 0,\n                                max: 100\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.VolumeUpIcon, {\n                                onClick: function() {\n                                    return volumen1 < 100 && setVolumen(volumen1 + 10);\n                                },\n                                className: \"button\"\n                            }, void 0, false, {\n                                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/components/Player.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(Player, \"vM9WJd4p3nJPBI12F3+1uUW7vx4=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYztRQUcvQkQsMERBQVc7OztBQVJyQkksS0FBQUEsTUFBTTtBQTBIZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyLmpzP2FhZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmV3aW5kSWNvbixcbiAgU3dpdGNoSG9yaXpvbnRhbEljb24sXG4gIFZvbHVtZVVwSWNvbixcbiAgUmVwbHlJY29uLFxuICBQbGF5SWNvbixcbiAgUGF1c2VJY29uLFxuICBGYXN0Rm9yd2FyZEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7XG4gIEhlYXJ0SWNvbixcbiAgVm9sdW1lVXBJY29uIGFzIFZvbHVtZURvd25JY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5cbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGN1cnJlbnRUcmFja0lkU3RhdGUsIGlzUGxheWluZ1N0YXRlIH0gZnJvbSBcIi4uL2F0b21zL3NvbmdBdG9tXCI7XG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tIFwiLi4vaG9va3MvdXNlU3BvdGlmeVwiO1xuXG5pbXBvcnQgdXNlU29uZ0luZm8gZnJvbSBcIi4uL2hvb2tzL3VzZVNvbmdJbmZvXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgbWlsbGlzVG9NaW51dGVzQW5kU2Vjb25kcyB9IGZyb20gXCIuLi9saWIvdGltZVwiO1xuXG5mdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGNvbnN0IHNwb3RpZnlBcGkgPSB1c2VTcG90aWZ5KCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtjdXJyZW50VHJhY2tJZCwgc2V0Q3VycmVudFRyYWNrSWRdID1cbiAgICB1c2VSZWNvaWxTdGF0ZShjdXJyZW50VHJhY2tJZFN0YXRlKTtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVJlY29pbFN0YXRlKGlzUGxheWluZ1N0YXRlKTtcbiAgY29uc3QgW3ZvbHVtZW4sIHNldFZvbHVtZW5dID0gdXNlU3RhdGUoNTApO1xuXG4gIGNvbnN0IHNvbmdJbmZvID0gdXNlU29uZ0luZm8oKTtcblxuICBjb25zdCBmZXRjaEN1cnJlbnRTb25nID0gKCkgPT4ge1xuICAgIGlmICghc29uZ0luZm8pIHtcbiAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBwbGF5aW5nOyBcIiwgZGF0YS5ib2R5Py5pdGVtKTtcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrSWQoZGF0YS5ib2R5Py5pdGVtLmlkKTtcbiAgICAgICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldElzUGxheWluZyhkYXRhLmJvZHk/LmlzX3BsYXlpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDYW1iaWFuZG8gZXN0YWRvIGRlIGxhIGNhbmNpw7NuXCIpO1xuICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgXG4gICAgICAvL2NvbnNvbGUubG9nKG1pbGxpc1RvTWludXRlc0FuZFNlY29uZHMoZGF0YS5ib2R5LnByb2dyZXNzX21zKSlcbiAgICAgIGlmIChkYXRhLmJvZHkuaXNfcGxheWluZykge1xuICAgICAgICBzcG90aWZ5QXBpLnBhdXNlKCk7XG4gICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcG90aWZ5QXBpLnBsYXkoKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFtzb25nVGltZSwgc2V0U29uZ1RpbWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgc2V0U29uZ1RpbWUoKCkgPT57XG4gICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtaWxsaXNUb01pbnV0ZXNBbmRTZWNvbmRzKGRhdGEuYm9keS5wcm9ncmVzc19tcykpXG4gICAgICAgIHNldFNvbmdUaW1lKG1pbGxpc1RvTWludXRlc0FuZFNlY29uZHMoZGF0YS5ib2R5LnByb2dyZXNzX21zKSlcbiAgICB9KVxuICB9LCAxMDAwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNwb3RpZnlBcGkuZ2V0QWNjZXNzVG9rZW4oKSAmJiAhY3VycmVudFRyYWNrSWQpIHtcbiAgICAgIGZldGNoQ3VycmVudFNvbmcoKTtcbiAgICAgIHNldFZvbHVtZW4oNTApO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRUcmFja0lkU3RhdGUsIHNwb3RpZnlBcGksIHNlc3Npb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2b2x1bWVuID4gMCAmJiB2b2x1bWVuIDwgMTAwKSB7XG4gICAgICBkZWJvdW5jZWRBZGp1c3RWb2x1bWUodm9sdW1lbik7XG4gICAgfVxuICB9LCBbdm9sdW1lbl0pO1xuXG4gIGNvbnN0IGRlYm91bmNlZEFkanVzdFZvbHVtZSA9IHVzZUNhbGxiYWNrKFxuICAgIGRlYm91bmNlKCh2b2x1bWVuKSA9PiB7XG4gICAgICBzcG90aWZ5QXBpLnNldFZvbHVtZSh2b2x1bWVuKS5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gICAgfSwgMTAwKSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGgtMjQgZ3JpZC1jb2xzLTMgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsYWNrIHRvLWdyYXktOTAwIHB4LTIgdGV4dC14cyB0ZXh0LXdoaXRlIG1kOnB4LTggbWQ6dGV4dC1iYXNlXCI+XG4gICAgICB7LyogTGVmdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jZW50ZXIgZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIHctMTAgbWQ6aW5saW5lXCJcbiAgICAgICAgICBzcmM9e3NvbmdJbmZvPy5hbGJ1bS5pbWFnZXM/LlswXT8udXJsfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPntzb25nSW5mbz8ubmFtZX08L2gzPlxuICAgICAgICAgIDxwPntzb25nSW5mbz8uYXJ0aXN0cz8uWzBdPy5uYW1lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgICA8U3dpdGNoSG9yaXpvbnRhbEljb24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cbiAgICAgICAgPFJld2luZEljb24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cblxuICAgICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICAgIDxQYXVzZUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9XCJidXR0b24gaC0xMCB3LTEwXCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGxheUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9XCJidXR0b24gaC0xMCB3LTEwXCIgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8RmFzdEZvcndhcmRJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG5cbiAgICAgICAgPFJlcGx5SWNvbiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuXG4gICAgICAgIHsvKiBSaWdodCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTMgcHItNSBtZDpzcGFjZS14LTRcIj5cbiAgICAgICAgICA8Vm9sdW1lRG93bkljb25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvbHVtZW4gPiAwICYmIHNldFZvbHVtZW4odm9sdW1lbiAtIDEwKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTQgbWQ6dy0yOFwiXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e3ZvbHVtZW59XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxuICAgICAgICAgICAgICBzZXRWb2x1bWVuKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZvbHVtZVVwSWNvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9sdW1lbiA8IDEwMCAmJiBzZXRWb2x1bWVuKHZvbHVtZW4gKyAxMCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6WyJSZXdpbmRJY29uIiwiU3dpdGNoSG9yaXpvbnRhbEljb24iLCJWb2x1bWVVcEljb24iLCJSZXBseUljb24iLCJQbGF5SWNvbiIsIlBhdXNlSWNvbiIsIkZhc3RGb3J3YXJkSWNvbiIsIkhlYXJ0SWNvbiIsIlZvbHVtZURvd25JY29uIiwidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsInVzZVNwb3RpZnkiLCJ1c2VTb25nSW5mbyIsInVzZVJlY29pbFN0YXRlIiwiZGVib3VuY2UiLCJtaWxsaXNUb01pbnV0ZXNBbmRTZWNvbmRzIiwiUGxheWVyIiwic29uZ0luZm8iLCJzcG90aWZ5QXBpIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJjdXJyZW50VHJhY2tJZCIsInNldEN1cnJlbnRUcmFja0lkIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidm9sdW1lbiIsInNldFZvbHVtZW4iLCJmZXRjaEN1cnJlbnRTb25nIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiaXRlbSIsImlkIiwiZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSIsImlzX3BsYXlpbmciLCJoYW5kbGVQbGF5UGF1c2UiLCJwYXVzZSIsInBsYXkiLCJzb25nVGltZSIsInNldFNvbmdUaW1lIiwicHJvZ3Jlc3NfbXMiLCJnZXRBY2Nlc3NUb2tlbiIsImRlYm91bmNlZEFkanVzdFZvbHVtZSIsInNldFZvbHVtZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJoMyIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCIsIm1pbiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Player.js\n");

/***/ })

});