"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/pages/modules/contact/AnimatedLabelInput.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/modules/contact/AnimatedLabelInput.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AnimatedLabelInput = (props)=>{\n    _s();\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: props.htmlFor,\n                className: \"w-full p-2 border-b rounded focus:outline-none focus:border-blue-500 border-primary-dark dark:border-primary-light\",\n                onFocus: handleFocus,\n                onBlur: handleBlur\n            }, void 0, false, {\n                fileName: \"/Users/bartvader/DEV-HOBBY/portfolio2k23/src/pages/modules/contact/AnimatedLabelInput.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: props.htmlFor,\n                className: \"absolute top-0 left-0 \".concat(isFocused ? \"text-blue-500\" : \"text-gray-500\", \" transition-colors duration-200\"),\n                children: props.label\n            }, void 0, false, {\n                fileName: \"/Users/bartvader/DEV-HOBBY/portfolio2k23/src/pages/modules/contact/AnimatedLabelInput.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartvader/DEV-HOBBY/portfolio2k23/src/pages/modules/contact/AnimatedLabelInput.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimatedLabelInput, \"taoS6m9NZex5dx3pinefKTdpShE=\");\n_c = AnimatedLabelInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedLabelInput);\nvar _c;\n$RefreshReg$(_c, \"AnimatedLabelInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW9kdWxlcy9jb250YWN0L0FuaW1hdGVkTGFiZWxJbnB1dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQVF2QyxNQUFNRSxxQkFBcUIsQ0FBQ0MsUUFBbUM7O0lBQzdELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU1LLGNBQWMsSUFBTTtRQUN4QkQsYUFBYSxJQUFJO0lBQ25CO0lBRUEsTUFBTUUsYUFBYSxJQUFNO1FBQ3ZCRixhQUFhLEtBQUs7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxJQUFJUixNQUFNUyxPQUFPO2dCQUNqQkgsV0FBVTtnQkFDVkksU0FBU1A7Z0JBQ1RRLFFBQVFQOzs7Ozs7MEJBRVYsOERBQUNRO2dCQUNDSCxTQUFTVCxNQUFNUyxPQUFPO2dCQUN0QkgsV0FBVyx5QkFFVixPQURDTCxZQUFZLGtCQUFrQixlQUFlLEVBQzlDOzBCQUNBRCxNQUFNWSxLQUFLOzs7Ozs7Ozs7Ozs7QUFJcEI7R0E1Qk1iO0tBQUFBO0FBOEJOLCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21vZHVsZXMvY29udGFjdC9BbmltYXRlZExhYmVsSW5wdXQudHN4PzYzOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW50ZXJmYWNlIEFuaW1hdGVkTGFiZWxJbnB1dFByb3BzIHtcbiAgbGFiZWw6IHN0cmluZ1xuICBodG1sRm9yPzogc3RyaW5nXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IEFuaW1hdGVkTGFiZWxJbnB1dCA9IChwcm9wczogQW5pbWF0ZWRMYWJlbElucHV0UHJvcHMpID0+IHtcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD17cHJvcHMuaHRtbEZvcn1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXItYiByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAgYm9yZGVyLXByaW1hcnktZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5LWxpZ2h0XCJcbiAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgIC8+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17cHJvcHMuaHRtbEZvcn1cbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgbGVmdC0wICR7XG4gICAgICAgICAgaXNGb2N1c2VkID8gXCJ0ZXh0LWJsdWUtNTAwXCIgOiBcInRleHQtZ3JheS01MDBcIlxuICAgICAgICB9IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMGB9PlxuICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkTGFiZWxJbnB1dFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbmltYXRlZExhYmVsSW5wdXQiLCJwcm9wcyIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwiaWQiLCJodG1sRm9yIiwib25Gb2N1cyIsIm9uQmx1ciIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/modules/contact/AnimatedLabelInput.tsx\n"));

/***/ })

});