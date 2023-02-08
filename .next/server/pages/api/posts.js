"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/db/client */ \"(api)/./server/db/client.js\");\n\nasync function handle(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"POST\":\n            // get the title and content from the request body\n            const { title , content  } = req.body;\n            // use prisma to create a new post using that data\n            const post = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.post.create({\n                data: {\n                    title,\n                    content\n                }\n            });\n            // send the post object back to the client\n            res.status(201).json(post);\n            break;\n        default:\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsT0FBUUU7UUFDTixLQUFLO1lBQ0gsa0RBQWtEO1lBQ2xELE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0osSUFBSUssSUFBSTtZQUNuQyxrREFBa0Q7WUFDbEQsTUFBTUMsT0FBTyxNQUFNUixpRUFBa0IsQ0FBQztnQkFDcENVLE1BQU07b0JBQ0pMO29CQUNBQztnQkFDRjtZQUNGO1lBQ0EsMENBQTBDO1lBQzFDSCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtZQUNyQixLQUFLO1FBQ1A7WUFDRUwsSUFBSVEsTUFBTSxDQUFDLEtBQUtFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRVQsT0FBTyxZQUFZLENBQUM7SUFDdEQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9kaWFyeS8uL3BhZ2VzL2FwaS9wb3N0cy5qcz82OWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL3NlcnZlci9kYi9jbGllbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcVxuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICAvLyBnZXQgdGhlIHRpdGxlIGFuZCBjb250ZW50IGZyb20gdGhlIHJlcXVlc3QgYm9keVxuICAgICAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcmVxLmJvZHlcbiAgICAgIC8vIHVzZSBwcmlzbWEgdG8gY3JlYXRlIGEgbmV3IHBvc3QgdXNpbmcgdGhhdCBkYXRhXG4gICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIHNlbmQgdGhlIHBvc3Qgb2JqZWN0IGJhY2sgdG8gdGhlIGNsaWVudFxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ocG9zdClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsInBvc3QiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts.js\n");

/***/ }),

/***/ "(api)/./server/db/client.js":
/*!*****************************!*\
  !*** ./server/db/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvZGIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUV0QyxNQUFNQyxTQUNYQyxPQUFPRCxNQUFNLElBQ2IsSUFBSUQsd0RBQVlBLENBQUM7SUFDZkcsS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRTtBQUVKLElBQUlDLElBQXlCLEVBQWNGLE9BQU9ELE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2RpYXJ5Ly4vc2VydmVyL2RiL2NsaWVudC5qcz83M2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgfSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./server/db/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts.js"));
module.exports = __webpack_exports__;

})();