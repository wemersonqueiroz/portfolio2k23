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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AnimatedLabelInput = (props)=>{\n    _s();\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: props.htmlFor,\n                className: \"w-full p-2 border-b-2 focus:outline-none bg-transparent appearance-none\\n        \".concat(isFocused ? \"border-primary-dark dark:border-primary-light\" : \"border-background-primary-light dark:border-background-primary-dark\"),\n                onFocus: handleFocus,\n                onBlur: handleBlur\n            }, void 0, false, {\n                fileName: \"/Users/bartvader/DEV-HOBBY/portfolio2k23/src/pages/modules/contact/AnimatedLabelInput.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: props.htmlFor,\n                className: \"absolute left-0  w-full \".concat(isFocused ? \"-top-4 text-xs text-primary-dark dark:text-primary-light\" : \"top-1/2 -translate-y-1/2 text-gray-500\", \" transition-all duration-300\"),\n                children: props.label\n            }, void 0, false, {\n                fileName: \"/Users/bartvader/DEV-HOBBY/portfolio2k23/src/pages/modules/contact/AnimatedLabelInput.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartvader/DEV-HOBBY/portfolio2k23/src/pages/modules/contact/AnimatedLabelInput.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimatedLabelInput, \"taoS6m9NZex5dx3pinefKTdpShE=\");\n_c = AnimatedLabelInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedLabelInput);\nvar _c;\n$RefreshReg$(_c, \"AnimatedLabelInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW9kdWxlcy9jb250YWN0L0FuaW1hdGVkTGFiZWxJbnB1dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQVF2QyxNQUFNRSxxQkFBcUIsQ0FBQ0MsUUFBbUM7O0lBQzdELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU1LLGNBQWMsSUFBTTtRQUN4QkQsYUFBYSxJQUFJO0lBQ25CO0lBRUEsTUFBTUUsYUFBYSxJQUFNO1FBQ3ZCRixhQUFhLEtBQUs7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxJQUFJUixNQUFNUyxPQUFPO2dCQUNqQkgsV0FBVyxvRkFLVixPQUhDTCxZQUNJLGtEQUNBLHFFQUFxRTtnQkFFM0VTLFNBQVNQO2dCQUNUUSxRQUFRUDs7Ozs7OzBCQUVWLDhEQUFDUTtnQkFDQ0gsU0FBU1QsTUFBTVMsT0FBTztnQkFDdEJILFdBQVcsMkJBSVYsT0FIQ0wsWUFDSSw2REFDQSx3Q0FBd0MsRUFDN0M7MEJBQ0FELE1BQU1ZLEtBQUs7Ozs7Ozs7Ozs7OztBQUlwQjtHQW5DTWI7S0FBQUE7QUFxQ04sK0RBQWVBLGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW9kdWxlcy9jb250YWN0L0FuaW1hdGVkTGFiZWxJbnB1dC50c3g/NjM5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbnRlcmZhY2UgQW5pbWF0ZWRMYWJlbElucHV0UHJvcHMge1xuICBsYWJlbDogc3RyaW5nXG4gIGh0bWxGb3I/OiBzdHJpbmdcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgQW5pbWF0ZWRMYWJlbElucHV0ID0gKHByb3BzOiBBbmltYXRlZExhYmVsSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgc2V0SXNGb2N1c2VkKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZChmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9e3Byb3BzLmh0bWxGb3J9XG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBwLTIgYm9yZGVyLWItMiBmb2N1czpvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgYXBwZWFyYW5jZS1ub25lXG4gICAgICAgICR7XG4gICAgICAgICAgaXNGb2N1c2VkXG4gICAgICAgICAgICA/IFwiYm9yZGVyLXByaW1hcnktZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5LWxpZ2h0XCJcbiAgICAgICAgICAgIDogXCJib3JkZXItYmFja2dyb3VuZC1wcmltYXJ5LWxpZ2h0IGRhcms6Ym9yZGVyLWJhY2tncm91bmQtcHJpbWFyeS1kYXJrXCJcbiAgICAgICAgfWB9XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAvPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e3Byb3BzLmh0bWxGb3J9XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMCAgdy1mdWxsICR7XG4gICAgICAgICAgaXNGb2N1c2VkXG4gICAgICAgICAgICA/IFwiLXRvcC00IHRleHQteHMgdGV4dC1wcmltYXJ5LWRhcmsgZGFyazp0ZXh0LXByaW1hcnktbGlnaHRcIlxuICAgICAgICAgICAgOiBcInRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBgfT5cbiAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZExhYmVsSW5wdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQW5pbWF0ZWRMYWJlbElucHV0IiwicHJvcHMiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsImlkIiwiaHRtbEZvciIsIm9uRm9jdXMiLCJvbkJsdXIiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/modules/contact/AnimatedLabelInput.tsx\n"));

/***/ })

});