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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_api_weather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/api/weather.js */ \"./pages/api/weather.js\");\n/* harmony import */ var _component_write_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/write_area */ \"./component/write_area.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { posts  } = param;\n    _s();\n    const apiKey = \"4551243115444ba0a100a9567cd1b61d\";\n    const url = \"https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=\".concat(apiKey);\n    console.log(url);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const handleSubmit = async (e) => {\n    //   e.preventDefault()\n    //   console.log({title, content})\n    // }\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/posts\", {\n            title,\n            content\n        });\n        console.log(res.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"'s Diary\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"DATE: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().background),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                id: \"paper\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().paper),\n                                onSubmit: handleSubmit,\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    maxWidth: \"400px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: title,\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                        placeholder: \"Entry Title\",\n                                        onChange: (e)=>setTitle(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_api_weather_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        value: content,\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().type_area),\n                                        placeholder: \"Write about your day\",\n                                        onChange: (e)=>setContent(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: post.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, post.id, true, {\n                                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OTvljkGZ3oDHjpEqZRGoAyVoe2c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFVTUE7QUFWdUM7QUFHSztBQUN6QjtBQUNHO0FBQ0U7QUFDZTtBQUNDOztBQUkvQixTQUFTVSxLQUFLLEtBQU8sRUFBRTtRQUFULEVBQUNDLE1BQUssRUFBQyxHQUFQOztJQUMzQixNQUFNQyxTQUFTO0lBQ2YsTUFBTUMsTUFBTSx1RkFBOEYsT0FBUEQ7SUFDbkdFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxJQUFJO0lBQ0osTUFBTWlCLGVBQWUsT0FBT0MsSUFBTTtRQUNoQ0EsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1sQixrREFBVSxDQUFDLGNBQWM7WUFBRVc7WUFBT0U7UUFBUTtRQUM1REosUUFBUUMsR0FBRyxDQUFDUSxJQUFJRSxJQUFJO0lBQ3RCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDbkIsa0RBQUlBOztrQ0FDSCw4REFBQ1U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ1U7d0JBQUtDLE1BQUs7d0JBQWNULFNBQVE7Ozs7OztrQ0FDakMsOERBQUNRO3dCQUFLQyxNQUFLO3dCQUFXVCxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDVTt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtDLFdBQVcvQixxRUFBVzswQkFDMUIsNEVBQUNnQztvQkFBSUQsV0FBVy9CLHdFQUFjOztzQ0FDNUIsOERBQUNrQztzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDQztzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDSDs0QkFBSUQsV0FBVy9CLDJFQUFpQjtzQ0FDL0IsNEVBQUNxQztnQ0FDQ0MsSUFBRztnQ0FDSFAsV0FBVy9CLHNFQUFZO2dDQUN2QndDLFVBQVVyQjtnQ0FDVnNCLE9BQU87b0NBQUNDLFNBQVM7b0NBQVFDLGVBQWU7b0NBQVVDLFVBQVU7Z0NBQU87O2tEQUVuRSw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE9BQU9oQzt3Q0FDUGdCLFdBQVcvQixzRUFBWTt3Q0FDdkJnRCxhQUFZO3dDQUNaQyxVQUFVLENBQUM3QixJQUFNSixTQUFTSSxFQUFFOEIsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0RBTzFDLDhEQUFDeEMsNkRBQU9BOzs7OztrREFDUiw4REFBQzRDO3dDQUNDSixPQUFPOUI7d0NBQ1BjLFdBQVcvQiwwRUFBZ0I7d0NBQzNCZ0QsYUFBWTt3Q0FDWkMsVUFBVSxDQUFDN0IsSUFBTUYsV0FBV0UsRUFBRThCLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tEQU01Qyw4REFBQ007d0NBQU9QLE1BQUs7a0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUl6QnBDLE1BQU00QyxHQUFHLENBQUMsQ0FBQy9CLHFCQUNWLDhEQUFDUzs7a0RBQ0MsOERBQUN1QjtrREFBSWhDLEtBQUtSLEtBQUs7Ozs7OztrREFDZiw4REFBQ29CO2tEQUFHWixLQUFLTixPQUFPOzs7Ozs7OytCQUZSTSxLQUFLZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0IsQ0FBQztHQTFFdUI3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uL3NlcnZlci9kYi9jbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgV2VhdGhlciBmcm9tICdAL3BhZ2VzL2FwaS93ZWF0aGVyLmpzJztcbmltcG9ydCBXcml0ZUFyZWEgZnJvbSAnQC9jb21wb25lbnQvd3JpdGVfYXJlYSdcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwb3N0c30pIHtcbiAgY29uc3QgYXBpS2V5ID0gXCI0NTUxMjQzMTE1NDQ0YmEwYTEwMGE5NTY3Y2QxYjYxZFwiXG4gIGNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/cT10ZXNsYSZmcm9tPTIwMjItMTItMTcmc29ydEJ5PXB1Ymxpc2hlZEF0JmFwaUtleT0ke2FwaUtleX1gXG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuXG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgY29uc29sZS5sb2coe3RpdGxlLCBjb250ZW50fSlcbiAgLy8gfVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcG9zdHMnLCB7IHRpdGxlLCBjb250ZW50IH0pXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICA8aDE+e30ncyBEaWFyeTwvaDE+XG4gICAgICAgICAgPHA+REFURToge308L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGlkPVwicGFwZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wYXBlcn1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgbWF4V2lkdGg6IFwiNDAwcHhcIn19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudHJ5IFRpdGxlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICA8V2VhdGhlcj48L1dlYXRoZXI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnR5cGVfYXJlYX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGFib3V0IHlvdXIgZGF5XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgey8qIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSgpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdHMpKSxcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkhlYWQiLCJJbWFnZSIsIldlYXRoZXIiLCJXcml0ZUFyZWEiLCJIb21lIiwicG9zdHMiLCJhcGlLZXkiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwicG9zdCIsImRhdGEiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIndyYXBwZXIiLCJoMSIsInAiLCJiYWNrZ3JvdW5kIiwiZm9ybSIsImlkIiwicGFwZXIiLCJvblN1Ym1pdCIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwidHlwZV9hcmVhIiwiYnV0dG9uIiwibWFwIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});