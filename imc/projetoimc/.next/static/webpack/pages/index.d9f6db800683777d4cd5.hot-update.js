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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
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

_s(Calculator, "Snj5Kyg30/inE1BnLv9bjSLfQuU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImFsdHVyYSIsInNldEFsdHVyYSIsInBlc28iLCJzZXRQZXNvIiwiaW1jIiwic2V0SW1jIiwiY2FsY3VsYXRlSW1jIiwiYWx0dXJhbSIsInRvRml4ZWQiLCJ2ZXJpZnlJbWMiLCJzdHlsZXMiLCJjYWxjdWxhdG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsQ0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLENBQUQsQ0FGYjtBQUFBLE1BRVpHLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUFBLG1CQUdHSixzREFBUSxFQUhYO0FBQUEsTUFHWkssR0FIWTtBQUFBLE1BR1BDLE1BSE87O0FBS25CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHUCxNQUFNLEdBQUMsR0FBdkI7QUFDQUssVUFBTSxDQUFDLENBQUNILElBQUksSUFBRUssT0FBTyxHQUFDQSxPQUFWLENBQUwsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBQUQsQ0FBTjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixRQUFHTCxHQUFHLEdBQUcsSUFBVCxFQUFlLE9BQU8sZ0JBQVA7QUFDZixRQUFHQSxHQUFHLEdBQUcsSUFBVCxFQUFlLE9BQU8sYUFBUDtBQUNmLFFBQUdBLEdBQUcsR0FBRyxJQUFULEVBQWUsT0FBTyxXQUFQO0FBQ2YsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZSxPQUFPLGtCQUFQO0FBQ2YsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZSxPQUFPLGtCQUFQO0FBQ2YsV0FBTyxrQkFBUDtBQUNILEdBUEQ7O0FBVUEsU0FDSTtBQUFLLGFBQVMsRUFBRU0sOERBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLFdBQU8sRUFBRSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxjQUFqQjtBQUFnQyxXQUFPLEVBQUMsUUFBeEM7QUFBaUQsYUFBUyxNQUExRDtBQUEyRCxRQUFJLEVBQUMsUUFBaEU7QUFBeUUsU0FBSyxFQUFFWCxNQUFoRjtBQUF3RixZQUFRLEVBQUUsa0JBQUNZLE1BQUQ7QUFBQSxhQUFZWCxTQUFTLENBQUNXLE1BQU0sQ0FBQ0MsS0FBUixDQUFyQjtBQUFBLEtBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxZQUFqQjtBQUE4QixXQUFPLEVBQUMsUUFBdEM7QUFBK0MsYUFBUyxNQUF4RDtBQUF5RCxRQUFJLEVBQUMsUUFBOUQ7QUFBdUUsU0FBSyxFQUFFWCxJQUE5RTtBQUFvRixZQUFRLEVBQUUsa0JBQUNVLE1BQUQ7QUFBQSxhQUFZVCxPQUFPLENBQUNTLE1BQU0sQ0FBQ0MsS0FBUixDQUFuQjtBQUFBLEtBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsYUFBUyxNQUFyRDtBQUFzRCxXQUFPLEVBQUU7QUFBQSxhQUFNUCxZQUFZLEVBQWxCO0FBQUEsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQVBKLEVBV1FGLEdBQUcsSUFDSCxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTBCQSxHQUExQixlQUF3Q0ssU0FBUyxFQUFqRCxDQURBLENBWlIsQ0FGSixDQURKLENBREo7QUF5Qkg7O0dBN0NRWCxVOztLQUFBQSxVO0FBOENNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOWY2ZGI4MDA2ODM3NzdkNGNkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnXHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdG9yICgpIHtcclxuICAgIGNvbnN0IFthbHR1cmEsIHNldEFsdHVyYV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Blc28sIHNldFBlc29dID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSggKVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZUltYyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhbHR1cmFtID0gYWx0dXJhLzEwMFxyXG4gICAgICAgIHNldEltYygocGVzby8oYWx0dXJhbSphbHR1cmFtKSkudG9GaXhlZCgyKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2ZXJpZnlJbWMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoaW1jIDwgMTguNSkgcmV0dXJuIFwiQWJhaXhvIGRvIHBlc29cIlxyXG4gICAgICAgIGlmKGltYyA8IDI0LjkpIHJldHVybiBcIlBlc28gbm9ybWFsXCJcclxuICAgICAgICBpZihpbWMgPCAyOS45KSByZXR1cm4gXCJTb2JyZXBlc29cIlxyXG4gICAgICAgIGlmKGltYyA8IDM0LjkpIHJldHVybiBcIk9iZXNpZGFkZSBncmF1IDFcIlxyXG4gICAgICAgIGlmKGltYyA8IDM5LjkpIHJldHVybiBcIk9iZXNpZGFkZSBncmF1IDJcIlxyXG4gICAgICAgIHJldHVybiBcIk9iZXNpZGFkZSBncmF1IDNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYXRvcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+Q0FMQ1VMQURPUkE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkFsdHVyYSBlbSBjbVwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIHZhbHVlPXthbHR1cmF9IG9uQ2hhbmdlPXsodGFyZ2V0KSA9PiBzZXRBbHR1cmEodGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlBlc28gZW0gS0dcIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cGVzb30gb25DaGFuZ2U9eyh0YXJnZXQpID0+IHNldFBlc28odGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgZnVsbFdpZHRoIG9uQ2xpY2s9eygpID0+IGNhbGN1bGF0ZUltYygpfT5DYWxjdWxhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5PIHNldSBJTUMgw6k6IHtpbWN9IGtnL20yIC0ge3ZlcmlmeUltYygpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==