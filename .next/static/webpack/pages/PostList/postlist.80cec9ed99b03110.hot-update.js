"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/PostList/postlist",{

/***/ "./pages/PostList/postlist.js":
/*!************************************!*\
  !*** ./pages/PostList/postlist.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/server/db/client */ \"./server/db/client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/index */ \"./pages/index.js\");\n/* harmony import */ var _component_UserName_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/UserName.js */ \"./component/UserName.js\");\n\n\n\n\n\n\n\n\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"getServerSideProps\", {}, void 0, false, {\n    fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n    lineNumber: 10,\n    columnNumber: 1\n}, undefined);\n// const PostList = () => <MyPosts />;\nfunction PostList(param) {\n    let { posts  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper_home)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Your Diary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A diary app that you can write everyday event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper_main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().ttl_page),\n                            children: [\n                                \"List of \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_UserName_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 51\n                                }, this),\n                                \" Diary\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_index__WEBPACK_IMPORTED_MODULE_4__.MyPosts, {\n                            posts: posts\n                        }, void 0, false, {\n                            fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mio/Desktop/BCIT/Dynamic/_Final/Diary_Web/pages/PostList/postlist.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = PostList;\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb3N0TGlzdC9wb3N0bGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUVGO0FBQ087QUFDekI7QUFDRztBQUNnQztBQUNiO2NBRS9DLDhEQUFDTzs7Ozs7QUFFRCxzQ0FBc0M7QUFDdkIsU0FBU0csU0FBUyxLQUFPLEVBQUM7UUFBUixFQUFDQyxNQUFLLEVBQUMsR0FBUDtJQUUvQixxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVyxHQUFxQmIsT0FBbEJBLHdFQUFjLEVBQUMsS0FBdUIsT0FBcEJBLDZFQUFtQjs7MEJBRW5ELDhEQUFDTSxrREFBSUE7O2tDQUNILDhEQUFDVTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBS1YsV0FBV2IscUVBQVc7MEJBQzFCLDRFQUFDWTtvQkFBSUMsV0FBV2IsNkVBQW1COztzQ0FDakMsOERBQUN5Qjs0QkFBR1osV0FBV2IseUVBQWU7O2dDQUFFOzhDQUFRLDhEQUFDUyw4REFBUUE7Ozs7O2dDQUFHOzs7Ozs7O3NDQUVwRCw4REFBQ0QsaURBQU9BOzRCQUFDRyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUIsQ0FBQztLQXZCdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Bvc3RMaXN0L3Bvc3RsaXN0LmpzPzkyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9zZXJ2ZXIvZGIvY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGdldFNlcnZlclNpZGVQcm9wcywgTXlQb3N0cyB9IGZyb20gJ0AvcGFnZXMvaW5kZXgnO1xuaW1wb3J0IFVzZXJOYW1lIGZyb20gJ0AvY29tcG9uZW50L1VzZXJOYW1lLmpzJztcblxuPGdldFNlcnZlclNpZGVQcm9wcyAvPlxuXG4vLyBjb25zdCBQb3N0TGlzdCA9ICgpID0+IDxNeVBvc3RzIC8+O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdExpc3Qoe3Bvc3RzfSl7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy53cmFwcGVyfSAke3N0eWxlcy53cmFwcGVyX2hvbWV9YH1cbiAgICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WW91ciBEaWFyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIGRpYXJ5IGFwcCB0aGF0IHlvdSBjYW4gd3JpdGUgZXZlcnlkYXkgZXZlbnRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJfbWFpbn0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnR0bF9wYWdlfT5MaXN0IG9mIDxVc2VyTmFtZSAvPiBEaWFyeTwvaDE+XG5cbiAgICAgICAgICA8TXlQb3N0cyBwb3N0cz17cG9zdHN9IC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJwcmlzbWEiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIZWFkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiTXlQb3N0cyIsIlVzZXJOYW1lIiwiUG9zdExpc3QiLCJwb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJ3cmFwcGVyX2hvbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsIndyYXBwZXJfbWFpbiIsImgxIiwidHRsX3BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PostList/postlist.js\n"));

/***/ })

});