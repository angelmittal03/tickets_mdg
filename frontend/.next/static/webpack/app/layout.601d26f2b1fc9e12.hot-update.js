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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"75f84fb03de3\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz8yMmZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNzVmODRmYjAzZGUzXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/app/Components/Navbar/NavBar.tsx":
/*!**********************************************!*\
  !*** ./src/app/Components/Navbar/NavBar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Links = [\n    {\n        id: 1,\n        title: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Movies\",\n        url: \"/Movies/MoviesIndex\"\n    },\n    {\n        id: 3,\n        title: \"Bus\",\n        url: \"/Bus/BusIndex\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [isSignedIn, setIsSignedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLinkClick = (url)=>{\n        router.push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed left-1 top-5 w-full z-4 ease-in duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1240px] m-auto flex justify-between items-center p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-4xl\",\n                    onClick: ()=>handleLinkClick(\"/\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"logo.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"hidden sm:flex\",\n                    children: [\n                        Links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"p-4\",\n                                onClick: ()=>handleLinkClick(link.url),\n                                children: link.title\n                            }, link.id, false, {\n                                fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            onClick: ()=>handleLinkClick(\"/Profile\"),\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 12\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            onClick: ()=>{\n                                setIsSignedIn(true);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/casper/DevProjects/tickets_mdg/frontend/src/app/Components/Navbar/NavBar.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"y2oZDetJFUmb+ALZ/+sIIqkIyqk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9Db21wb25lbnRzL05hdmJhci9OYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ2tCO0FBSVg7QUFJakMsTUFBTUcsUUFBUTtJQUNaO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsS0FBSztJQUNQO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtDQUVEO0FBRUQsTUFBTUMsU0FBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNUSxTQUFTVCwwREFBU0E7SUFDeEIsTUFBTVUsa0JBQWtCLENBQUNMO1FBQ3ZCSSxPQUFPRSxJQUFJLENBQUNOO0lBRWQ7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVO29CQUFxQkUsU0FBUyxJQUFNTCxnQkFBZ0I7OEJBQ2hFLDRFQUFDTTt3QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7OEJBRVgsOERBQUNDO29CQUFHTCxXQUFVOzt3QkFDWFgsTUFBTWlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7Z0NBQUdSLFdBQVU7Z0NBQW9CRSxTQUFTLElBQU1MLGdCQUFnQlUsS0FBS2YsR0FBRzswQ0FDdEVlLEtBQUtoQixLQUFLOytCQURZZ0IsS0FBS2pCLEVBQUU7Ozs7O3NDQUtqQyw4REFBQ2tCOzRCQUFHUixXQUFVOzRCQUFNRSxTQUFTLElBQU1MLGdCQUFnQjtzQ0FBYTs7Ozs7O3NDQUcvRCw4REFBQ1c7NEJBQUdSLFdBQVU7NEJBQU1FLFNBQVM7Z0NBQU1QLGNBQWM7NEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xFO0dBL0JNRjs7UUFFV04sc0RBQVNBOzs7S0FGcEJNO0FBaUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29tcG9uZW50cy9OYXZiYXIvTmF2QmFyLnRzeD9lNjY5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcbmltcG9ydCB7IEFueWJvZHkgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXV0aERpYWxvZ0JveCBmcm9tICcuLi9BdXRoRm9ybS9hdXRoJztcblxuXG5jb25zdCBMaW5rcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICB1cmw6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiTW92aWVzXCIsXG4gICAgdXJsOiBcIi9Nb3ZpZXMvTW92aWVzSW5kZXhcIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkJ1c1wiLFxuICAgIHVybDogXCIvQnVzL0J1c0luZGV4XCIsXG4gIH1cbiAgXG5dO1xuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWduZWRJbiwgc2V0SXNTaWduZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICByb3V0ZXIucHVzaCh1cmwpO1xuICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTEgdG9wLTUgdy1mdWxsIHotNCBlYXNlLWluIGR1cmF0aW9uLTMwMCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXctWzEyNDBweF0gbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC00eGwnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljaygnLycpfT5cbiAgICAgICAgICA8aW1nIHNyYz0nbG9nby4nPjwvaW1nPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdoaWRkZW4gc206ZmxleCc+XG4gICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncC00JyBrZXk9e2xpbmsuaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljayhsaW5rLnVybCl9PlxuICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgIHsvKiB7aXNTaWduZWRJbiA/ICggKi99XG4gICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNCcgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKCcvUHJvZmlsZScpfT5cbiAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNCcgb25DbGljaz17KCk9PiB7c2V0SXNTaWduZWRJbih0cnVlKX19PlxuICAgICAgICAgICB7LyogPEF1dGhEaWFsb2dCb3ggLz4gKi99XG4gICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiTGlua3MiLCJpZCIsInRpdGxlIiwidXJsIiwiTmF2YmFyIiwiaXNTaWduZWRJbiIsInNldElzU2lnbmVkSW4iLCJyb3V0ZXIiLCJoYW5kbGVMaW5rQ2xpY2siLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwidWwiLCJtYXAiLCJsaW5rIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Components/Navbar/NavBar.tsx\n"));

/***/ })

});