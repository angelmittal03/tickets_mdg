"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a11e7ffca2ea\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz9jYWRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYTExZTdmZmNhMmVhXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/app/Components/Navbar/NavBar.tsx":
/*!**********************************************!*\
  !*** ./src/app/Components/Navbar/NavBar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Links = [\n    {\n        id: 1,\n        title: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Movies\",\n        url: \"/Movies/MoviesIndex\"\n    },\n    {\n        id: 3,\n        title: \"Bus\",\n        url: \"/Bus/BusIndex\"\n    },\n    {\n        id: 4,\n        title: \"Movies\",\n        url: \"/Profile\"\n    }\n];\nconst Navbar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed left-1 top-3 w-full z-4 ease-in duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1240px] m-auto flex justify-between\",\n            \"items-center\": true,\n            \"p-4\": true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-4xl\",\n                        children: \"Tickets.mdg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"hidden sm:flex\",\n                    children: [\n                        Links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"p-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: link.url,\n                                    children: link.title\n                                }, link.id, false, {\n                                    fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                    href: \"/LoginPage\"\n                                }, void 0, false, void 0, void 0);\n                            },\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANGEL\\\\tickets_mdg\\\\src\\\\app\\\\Components\\\\Navbar\\\\NavBar.tsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9Db21wb25lbnRzL05hdmJhci9OYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNkI7QUFDSDtBQUUxQixNQUFNRSxRQUFRO0lBQ1Y7UUFDSUMsSUFBSTtRQUNKQyxPQUFNO1FBQ05DLEtBQUk7SUFDUjtJQUNBO1FBQ0lGLElBQUk7UUFDSkMsT0FBTTtRQUNOQyxLQUFJO0lBQ1I7SUFDQTtRQUNJRixJQUFJO1FBQ0pDLE9BQU07UUFDTkMsS0FBSTtJQUNSO0lBQ0E7UUFDSUYsSUFBSTtRQUNKQyxPQUFNO1FBQ05DLEtBQUk7SUFDUjtDQUNIO0FBQ0QsTUFBTUMsU0FBbUI7SUFDckIscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBRWhCLDRFQUFDRDtZQUFJQyxXQUFVO1lBQTZDQyxjQUFZO1lBQUNDLEtBQUc7OzhCQUM1RSw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFLOzhCQUNULDRFQUFDQzt3QkFBR0osV0FBVTtrQ0FBcUI7Ozs7Ozs7Ozs7OzhCQUlyQyw4REFBQ0s7b0JBQUlMLFdBQVU7O3dCQUNaTixNQUFNWSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNDO2dDQUFHUixXQUFVOzBDQUFNLDRFQUFDUixrREFBSUE7b0NBQWVXLE1BQU1JLEtBQUtWLEdBQUc7OENBQ2pEVSxLQUFLWCxLQUFLO21DQURnQlcsS0FBS1osRUFBRTs7Ozs7Ozs7OztzQ0FJMUMsOERBQUNjOzRCQUFPQyxTQUFTOzhDQUFLLDhEQUFDSDtvQ0FBS0osTUFBSzs7NEJBQW9CO3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRDtLQXJCSUw7QUF1QkosK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db21wb25lbnRzL05hdmJhci9OYXZCYXIudHN4P2U2NjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExpbmtzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOlwiSG9tZVwiLFxyXG4gICAgICAgIHVybDpcIi9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6XCJNb3ZpZXNcIixcclxuICAgICAgICB1cmw6XCIvTW92aWVzL01vdmllc0luZGV4XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOlwiQnVzXCIsXHJcbiAgICAgICAgdXJsOlwiL0J1cy9CdXNJbmRleFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB0aXRsZTpcIk1vdmllc1wiLFxyXG4gICAgICAgIHVybDpcIi9Qcm9maWxlXCIsXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9J2ZpeGVkIGxlZnQtMSB0b3AtMyB3LWZ1bGwgei00IGVhc2UtaW4gZHVyYXRpb24tMzAwJz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTI0MHB4XSBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4nIGl0ZW1zLWNlbnRlciBwLTQ+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtNHhsJz5cclxuICAgICAgICBUaWNrZXRzLm1kZ1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8dWwgIGNsYXNzTmFtZT0naGlkZGVuIHNtOmZsZXgnPlxyXG4gICAgICAgIHtMaW5rcy5tYXAoKGxpbmspPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwLTQnPjxMaW5rIGtleT17bGluay5pZH0gaHJlZj17bGluay51cmx9PlxyXG4gICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XHJcbiAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9Pns8bGluayBocmVmPVwiL0xvZ2luUGFnZVwiPjwvbGluaz59fSA+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiAgIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkxpbmtzIiwiaWQiLCJ0aXRsZSIsInVybCIsIk5hdmJhciIsImRpdiIsImNsYXNzTmFtZSIsIml0ZW1zLWNlbnRlciIsInAtNCIsImhyZWYiLCJoMSIsInVsIiwibWFwIiwibGluayIsImxpIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Components/Navbar/NavBar.tsx\n"));

/***/ })

});