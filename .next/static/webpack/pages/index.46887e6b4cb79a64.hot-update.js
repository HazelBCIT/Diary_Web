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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_api_weather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/api/weather.js */ \"./pages/api/weather.js\");\n/* harmony import */ var _component_write_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/write_area */ \"./component/write_area.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { posts  } = param;\n    _s();\n    const apiKey = \"4551243115444ba0a100a9567cd1b61d\";\n    const url = \"https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=\".concat(apiKey);\n    console.log(url);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log({\n            title,\n            content\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    maxWidth: \"400px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: title,\n                                        onChange: (e)=>setTitle(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        value: content,\n                                        onChange: (e)=>setContent(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: post.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, post.id, true, {\n                                    fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_write_area__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OTvljkGZ3oDHjpEqZRGoAyVoe2c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNNQTtBQVR1QztBQUdiO0FBQ0o7QUFDRTtBQUNlO0FBQ0M7O0FBSS9CLFNBQVNPLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBQ0MsTUFBSyxFQUFDLEdBQVA7O0lBQzNCLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxNQUFNLHVGQUE4RixPQUFQRDtJQUNuR0UsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWUsZUFBZSxPQUFPQyxJQUFNO1FBQ2hDQSxFQUFFQyxjQUFjO1FBQ2hCUixRQUFRQyxHQUFHLENBQUM7WUFBQ0M7WUFBT0U7UUFBTztJQUM3QjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1osa0RBQUlBOztrQ0FDSCw4REFBQ1U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ087d0JBQUtDLE1BQUs7d0JBQWNOLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNLO3dCQUFLQyxNQUFLO3dCQUFXTixTQUFROzs7Ozs7a0NBQzlCLDhEQUFDTzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtDLFdBQVd6QixxRUFBVzs7a0NBQzFCLDhEQUFDMEI7OzBDQUNDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FDQ0MsVUFBVWI7Z0NBQ1ZjLE9BQU87b0NBQUNDLFNBQVM7b0NBQVFDLGVBQWU7b0NBQVVDLFVBQVU7Z0NBQU87O2tEQUVuRSw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE9BQU94Qjt3Q0FDUHlCLFVBQVUsQ0FBQ3BCLElBQU1KLFNBQVNJLEVBQUVxQixNQUFNLENBQUNGLEtBQUs7Ozs7OztrREFFMUMsOERBQUNHO3dDQUNDSCxPQUFPdEI7d0NBQ1B1QixVQUFVLENBQUNwQixJQUFNRixXQUFXRSxFQUFFcUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0RBRTVDLDhEQUFDSTt3Q0FBT0wsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7OzRCQUd2QjVCLE1BQU1rQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNoQjs7c0RBQ0MsOERBQUNpQjtzREFBSUQsS0FBSzlCLEtBQUs7Ozs7OztzREFDZiw4REFBQ2dDO3NEQUFHRixLQUFLNUIsT0FBTzs7Ozs7OzttQ0FGUjRCLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7O2tDQU1yQiw4REFBQ3hDLDZEQUFTQTs7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO0dBbER1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi9zZXJ2ZXIvZGIvY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFdlYXRoZXIgZnJvbSAnQC9wYWdlcy9hcGkvd2VhdGhlci5qcyc7XG5pbXBvcnQgV3JpdGVBcmVhIGZyb20gJ0AvY29tcG9uZW50L3dyaXRlX2FyZWEnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cG9zdHN9KSB7XG4gIGNvbnN0IGFwaUtleSA9IFwiNDU1MTI0MzExNTQ0NGJhMGExMDBhOTU2N2NkMWI2MWRcIlxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9dGVzbGEmZnJvbT0yMDIyLTEyLTE3JnNvcnRCeT1wdWJsaXNoZWRBdCZhcGlLZXk9JHthcGlLZXl9YFxuICBjb25zb2xlLmxvZyh1cmwpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh7dGl0bGUsIGNvbnRlbnR9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgbWF4V2lkdGg6IFwiNDAwcHhcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxXcml0ZUFyZWE+PC9Xcml0ZUFyZWE+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSgpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdHMpKSxcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInN0eWxlcyIsInVzZVN0YXRlIiwiSGVhZCIsIkltYWdlIiwiV2VhdGhlciIsIldyaXRlQXJlYSIsIkhvbWUiLCJwb3N0cyIsImFwaUtleSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1heFdpZHRoIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwibWFwIiwicG9zdCIsImgyIiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});