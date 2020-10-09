webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.scss */ "./components/Calculator/Calculator.module.scss");
/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\johny\\Documents\\SEJADEV\\imc\\components\\Calculator\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Calculator() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      altura = _useState[0],
      setAltura = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      peso = _useState2[0],
      setPeso = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(number),
      imc = _useState3[0],
      setImc = _useState3[1];

  var calculateImc = function calculateImc() {
    var alturam = altura / 100;
    setImc((peso / (alturam * alturam)).toFixed(2));
  };

  var verifyImc = function verifyImc() {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau 1";
    if (imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  };

  return __jsx("div", {
    className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "CALCULADORA"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Altura em cm",
    variant: "filled",
    fullWidth: true,
    type: "number",
    value: altura,
    onChange: function onChange(target) {
      return setAltura(target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Peso em KG",
    variant: "filled",
    fullWidth: true,
    type: "number",
    value: peso,
    onChange: function onChange(target) {
      return setPeso(target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: function onClick() {
      return calculateImc();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, "Calcular")), imc && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "O seu IMC \xE9: ", imc, " kg/m2 - ", verifyImc())))));
}

_s(Calculator, "Xb3DyZB5an7bzJM9+F9shQbgEVM=");

_c = Calculator;
/* harmony default export */ __webpack_exports__["default"] = (Calculator);

var _c;

$RefreshReg$(_c, "Calculator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImFsdHVyYSIsInNldEFsdHVyYSIsInBlc28iLCJzZXRQZXNvIiwibnVtYmVyIiwiaW1jIiwic2V0SW1jIiwiY2FsY3VsYXRlSW1jIiwiYWx0dXJhbSIsInRvRml4ZWQiLCJ2ZXJpZnlJbWMiLCJzdHlsZXMiLCJjYWxjdWxhdG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsQ0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLENBQUQsQ0FGYjtBQUFBLE1BRVpHLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUFBLG1CQUdHSixzREFBUSxDQUFDSyxNQUFELENBSFg7QUFBQSxNQUdaQyxHQUhZO0FBQUEsTUFHUEMsTUFITzs7QUFLbkIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNQyxPQUFPLEdBQUdSLE1BQU0sR0FBQyxHQUF2QjtBQUNBTSxVQUFNLENBQUMsQ0FBQ0osSUFBSSxJQUFFTSxPQUFPLEdBQUNBLE9BQVYsQ0FBTCxFQUF5QkMsT0FBekIsQ0FBaUMsQ0FBakMsQ0FBRCxDQUFOO0FBQ0gsR0FIRDs7QUFLQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUdMLEdBQUcsR0FBRyxJQUFULEVBQWUsT0FBTyxnQkFBUDtBQUNmLFFBQUdBLEdBQUcsR0FBRyxJQUFULEVBQWUsT0FBTyxhQUFQO0FBQ2YsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZSxPQUFPLFdBQVA7QUFDZixRQUFHQSxHQUFHLEdBQUcsSUFBVCxFQUFlLE9BQU8sa0JBQVA7QUFDZixRQUFHQSxHQUFHLEdBQUcsSUFBVCxFQUFlLE9BQU8sa0JBQVA7QUFDZixXQUFPLGtCQUFQO0FBQ0gsR0FQRDs7QUFVQSxTQUNJO0FBQUssYUFBUyxFQUFFTSw4REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUksTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLGNBQWpCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxhQUFTLE1BQTFEO0FBQTJELFFBQUksRUFBQyxRQUFoRTtBQUF5RSxTQUFLLEVBQUVaLE1BQWhGO0FBQXdGLFlBQVEsRUFBRSxrQkFBQ2EsTUFBRDtBQUFBLGFBQVlaLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDQyxLQUFSLENBQXJCO0FBQUEsS0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLFlBQWpCO0FBQThCLFdBQU8sRUFBQyxRQUF0QztBQUErQyxhQUFTLE1BQXhEO0FBQXlELFFBQUksRUFBQyxRQUE5RDtBQUF1RSxTQUFLLEVBQUVaLElBQTlFO0FBQW9GLFlBQVEsRUFBRSxrQkFBQ1csTUFBRDtBQUFBLGFBQVlWLE9BQU8sQ0FBQ1UsTUFBTSxDQUFDQyxLQUFSLENBQW5CO0FBQUEsS0FBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosRUFPSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE0QyxhQUFTLE1BQXJEO0FBQXNELFdBQU8sRUFBRTtBQUFBLGFBQU1QLFlBQVksRUFBbEI7QUFBQSxLQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBUEosRUFXUUYsR0FBRyxJQUNILE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBMEJBLEdBQTFCLGVBQXdDSyxTQUFTLEVBQWpELENBREEsQ0FaUixDQUZKLENBREosQ0FESjtBQXlCSDs7R0E3Q1FaLFU7O0tBQUFBLFU7QUE4Q01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0YmJkMmZkZjg3OGRiZDU4NGQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuc2NzcydcclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0b3IgKCkge1xyXG4gICAgY29uc3QgW2FsdHVyYSwgc2V0QWx0dXJhXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcGVzbywgc2V0UGVzb10gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2ltYywgc2V0SW1jXSA9IHVzZVN0YXRlKG51bWJlcilcclxuXHJcbiAgICBjb25zdCBjYWxjdWxhdGVJbWMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWx0dXJhbSA9IGFsdHVyYS8xMDBcclxuICAgICAgICBzZXRJbWMoKHBlc28vKGFsdHVyYW0qYWx0dXJhbSkpLnRvRml4ZWQoMikpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmVyaWZ5SW1jID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGltYyA8IDE4LjUpIHJldHVybiBcIkFiYWl4byBkbyBwZXNvXCJcclxuICAgICAgICBpZihpbWMgPCAyNC45KSByZXR1cm4gXCJQZXNvIG5vcm1hbFwiXHJcbiAgICAgICAgaWYoaW1jIDwgMjkuOSkgcmV0dXJuIFwiU29icmVwZXNvXCJcclxuICAgICAgICBpZihpbWMgPCAzNC45KSByZXR1cm4gXCJPYmVzaWRhZGUgZ3JhdSAxXCJcclxuICAgICAgICBpZihpbWMgPCAzOS45KSByZXR1cm4gXCJPYmVzaWRhZGUgZ3JhdSAyXCJcclxuICAgICAgICByZXR1cm4gXCJPYmVzaWRhZGUgZ3JhdSAzXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkNBTENVTEFET1JBPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBbHR1cmEgZW0gY21cIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YWx0dXJhfSBvbkNoYW5nZT17KHRhcmdldCkgPT4gc2V0QWx0dXJhKHRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJQZXNvIGVtIEtHXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Blc299IG9uQ2hhbmdlPXsodGFyZ2V0KSA9PiBzZXRQZXNvKHRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGZ1bGxXaWR0aCBvbkNsaWNrPXsoKSA9PiBjYWxjdWxhdGVJbWMoKX0+Q2FsY3VsYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TyBzZXUgSU1DIMOpOiB7aW1jfSBrZy9tMiAtIHt2ZXJpZnlJbWMoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvciJdLCJzb3VyY2VSb290IjoiIn0=