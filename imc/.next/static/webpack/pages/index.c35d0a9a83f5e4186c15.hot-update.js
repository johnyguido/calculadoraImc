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
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "CALCULADORA"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Altura em cm",
    variant: "filled",
    fullWidth: true,
    type: "number",
    value: altura,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setAltura(target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Peso em KG",
    variant: "filled",
    fullWidth: true,
    type: "number",
    value: peso,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setPeso(target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 25
    }
  }, "Calcular")), imc && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImFsdHVyYSIsInNldEFsdHVyYSIsInBlc28iLCJzZXRQZXNvIiwiaW1jIiwic2V0SW1jIiwiY2FsY3VsYXRlSW1jIiwiYWx0dXJhbSIsInRvRml4ZWQiLCJ2ZXJpZnlJbWMiLCJzdHlsZXMiLCJjYWxjdWxhdG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUMsQ0FBRCxDQUZsQjtBQUFBLE1BRVhDLE1BRlc7QUFBQSxNQUVIQyxTQUZHOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLENBQUQsQ0FIZDtBQUFBLE1BR1hHLElBSFc7QUFBQSxNQUdMQyxPQUhLOztBQUFBLG1CQUlJSixzREFBUSxFQUpaO0FBQUEsTUFJWEssR0FKVztBQUFBLE1BSU5DLE1BSk07O0FBTWxCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHUCxNQUFNLEdBQUcsR0FBekI7QUFDQUssVUFBTSxDQUFDLENBQUNILElBQUksSUFBSUssT0FBTyxHQUFHQSxPQUFkLENBQUwsRUFBNkJDLE9BQTdCLENBQXFDLENBQXJDLENBQUQsQ0FBTjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixRQUFJTCxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLGdCQUFQO0FBQ2hCLFFBQUlBLEdBQUcsR0FBRyxJQUFWLEVBQWdCLE9BQU8sYUFBUDtBQUNoQixRQUFJQSxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLFdBQVA7QUFDaEIsUUFBSUEsR0FBRyxHQUFHLElBQVYsRUFBZ0IsT0FBTyxrQkFBUDtBQUNoQixRQUFJQSxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLGtCQUFQO0FBQ2hCLFdBQU8sa0JBQVA7QUFDSCxHQVBEOztBQVVBLFNBQ0k7QUFBSyxhQUFTLEVBQUVNLDhEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUMsY0FBakI7QUFBZ0MsV0FBTyxFQUFDLFFBQXhDO0FBQWlELGFBQVMsTUFBMUQ7QUFBMkQsUUFBSSxFQUFDLFFBQWhFO0FBQXlFLFNBQUssRUFBRVgsTUFBaEY7QUFBd0YsWUFBUSxFQUFFO0FBQUEsVUFBR1ksTUFBSCxRQUFHQSxNQUFIO0FBQUEsYUFBZ0JYLFNBQVMsQ0FBQ1csTUFBTSxDQUFDQyxLQUFSLENBQXpCO0FBQUEsS0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLFlBQWpCO0FBQThCLFdBQU8sRUFBQyxRQUF0QztBQUErQyxhQUFTLE1BQXhEO0FBQXlELFFBQUksRUFBQyxRQUE5RDtBQUF1RSxTQUFLLEVBQUVYLElBQTlFO0FBQW9GLFlBQVEsRUFBRTtBQUFBLFVBQUdVLE1BQUgsU0FBR0EsTUFBSDtBQUFBLGFBQWdCVCxPQUFPLENBQUNTLE1BQU0sQ0FBQ0MsS0FBUixDQUF2QjtBQUFBLEtBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsYUFBUyxNQUFyRDtBQUFzRCxXQUFPLEVBQUU7QUFBQSxhQUFNUCxZQUFZLEVBQWxCO0FBQUEsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQVBKLEVBV1FGLEdBQUcsSUFDSCxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTBCQSxHQUExQixlQUF3Q0ssU0FBUyxFQUFqRCxDQURKLENBWlIsQ0FGSixDQURKLENBREo7QUF5Qkg7O0dBOUNRWCxVOztLQUFBQSxVO0FBK0NNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMzVkMGE5YTgzZjVlNDE4NmMxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnXHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdG9yKCkge1xyXG5cclxuICAgIGNvbnN0IFthbHR1cmEsIHNldEFsdHVyYV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Blc28sIHNldFBlc29dID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlSW1jID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsdHVyYW0gPSBhbHR1cmEgLyAxMDBcclxuICAgICAgICBzZXRJbWMoKHBlc28gLyAoYWx0dXJhbSAqIGFsdHVyYW0pKS50b0ZpeGVkKDIpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZlcmlmeUltYyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW1jIDwgMTguNSkgcmV0dXJuIFwiQWJhaXhvIGRvIHBlc29cIlxyXG4gICAgICAgIGlmIChpbWMgPCAyNC45KSByZXR1cm4gXCJQZXNvIG5vcm1hbFwiXHJcbiAgICAgICAgaWYgKGltYyA8IDI5LjkpIHJldHVybiBcIlNvYnJlcGVzb1wiXHJcbiAgICAgICAgaWYgKGltYyA8IDM0LjkpIHJldHVybiBcIk9iZXNpZGFkZSBncmF1IDFcIlxyXG4gICAgICAgIGlmIChpbWMgPCAzOS45KSByZXR1cm4gXCJPYmVzaWRhZGUgZ3JhdSAyXCJcclxuICAgICAgICByZXR1cm4gXCJPYmVzaWRhZGUgZ3JhdSAzXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkNBTENVTEFET1JBPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBbHR1cmEgZW0gY21cIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YWx0dXJhfSBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEFsdHVyYSh0YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiUGVzbyBlbSBLR1wiIHZhcmlhbnQ9XCJmaWxsZWRcIiBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwZXNvfSBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFBlc28odGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgZnVsbFdpZHRoIG9uQ2xpY2s9eygpID0+IGNhbGN1bGF0ZUltYygpfT5DYWxjdWxhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TyBzZXUgSU1DIMOpOiB7aW1jfSBrZy9tMiAtIHt2ZXJpZnlJbWMoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==