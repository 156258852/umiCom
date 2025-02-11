(self.webpackChunk=self.webpackChunk||[]).push([[720],{80918:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: function() { return /* binding */ ProLayout; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-provider/es/index.js + 7 modules
var es = __webpack_require__(89451);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/useMediaQuery/query.js


function useMediaQuery(mediaQuery) {
  var isSsr = typeof window === 'undefined';
  var _useState = (0,react.useState)(function () {
      return isSsr ? false : window.matchMedia(mediaQuery).matches;
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  (0,react.useLayoutEffect)(function () {
    if (isSsr) {
      return;
    }
    var mediaQueryList = window.matchMedia(mediaQuery);
    var listener = function listener(e) {
      return setMatches(e.matches);
    };
    mediaQueryList.addListener(listener);
    return function () {
      return mediaQueryList.removeListener(listener);
    };
  }, [mediaQuery]);
  return matches;
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/useMediaQuery/index.js



var MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: '(max-width: 575px)'
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: '(min-width: 576px) and (max-width: 767px)'
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: '(min-width: 768px) and (max-width: 991px)'
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: '(min-width: 992px) and (max-width: 1199px)'
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: '(min-width: 1200px) and (max-width: 1599px)'
  },
  xxl: {
    minWidth: 1600,
    matchMedia: '(min-width: 1600px)'
  }
};
/**
 * loop query screen className
 * Array.find will throw a error
 * \`Rendered more hooks than during the previous render.\`
 * So should use Array.forEach
 */
var getScreenClassName = function getScreenClassName() {
  var queryKey = undefined;
  // support ssr
  if (typeof window === 'undefined') {
    return queryKey;
  }
  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function (key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;
    if (window.matchMedia(matchMedia).matches) {
      return true;
    }
    return false;
  });
  queryKey = mediaQueryKey;
  return queryKey;
};
var useBreakpoint = function useBreakpoint() {
  var isMd = useMediaQuery(MediaQueryEnum.md.matchMedia);
  var isLg = useMediaQuery(MediaQueryEnum.lg.matchMedia);
  var isXxl = useMediaQuery(MediaQueryEnum.xxl.matchMedia);
  var isXl = useMediaQuery(MediaQueryEnum.xl.matchMedia);
  var isSm = useMediaQuery(MediaQueryEnum.sm.matchMedia);
  var isXs = useMediaQuery(MediaQueryEnum.xs.matchMedia);
  var _useState = (0,react.useState)(getScreenClassName()),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    colSpan = _useState2[0],
    setColSpan = _useState2[1];
  (0,react.useEffect)(function () {
    if (false) {}
    if (isXxl) {
      setColSpan('xxl');
      return;
    }
    if (isXl) {
      setColSpan('xl');
      return;
    }
    if (isLg) {
      setColSpan('lg');
      return;
    }
    if (isMd) {
      setColSpan('md');
      return;
    }
    if (isSm) {
      setColSpan('sm');
      return;
    }
    if (isXs) {
      setColSpan('xs');
      return;
    }
    setColSpan('md');
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/isBrowser/index.js
var isBrowser = __webpack_require__(12044);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/hooks/useDocumentTitle/index.js


function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  (0,react.useEffect)(function () {
    if ((0,isBrowser/* isBrowser */.j)() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title, titleText]);
}
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/compareVersions/index.js
var compareVersions = __webpack_require__(1977);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/compareVersions/openVisibleCompatible.js
var openVisibleCompatible = __webpack_require__(73177);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/compareVersions/coverToNewToken.js



function coverToNewToken(token) {
  if ((0,compareVersions/* compareVersions */.n)((0,openVisibleCompatible/* getVersion */.b)(), '5.6.0') < 0) return token;
  var deprecatedTokens = {
    colorGroupTitle: 'groupTitleColor',
    radiusItem: 'itemBorderRadius',
    radiusSubMenuItem: 'subMenuItemBorderRadius',
    colorItemText: 'itemColor',
    colorItemTextHover: 'itemHoverColor',
    colorItemTextHoverHorizontal: 'horizontalItemHoverColor',
    colorItemTextSelected: 'itemSelectedColor',
    colorItemTextSelectedHorizontal: 'horizontalItemSelectedColor',
    colorItemTextDisabled: 'itemDisabledColor',
    colorDangerItemText: 'dangerItemColor',
    colorDangerItemTextHover: 'dangerItemHoverColor',
    colorDangerItemTextSelected: 'dangerItemSelectedColor',
    colorDangerItemBgActive: 'dangerItemActiveBg',
    colorDangerItemBgSelected: 'dangerItemSelectedBg',
    colorItemBg: 'itemBg',
    colorItemBgHover: 'itemHoverBg',
    colorSubItemBg: 'subMenuItemBg',
    colorItemBgActive: 'itemActiveBg',
    colorItemBgSelected: 'itemSelectedBg',
    colorItemBgSelectedHorizontal: 'horizontalItemSelectedBg',
    colorActiveBarWidth: 'activeBarWidth',
    colorActiveBarHeight: 'activeBarHeight',
    colorActiveBarBorderSize: 'activeBarBorderWidth'
  };
  var newToken = (0,objectSpread2/* default */.Z)({}, token);
  Object.keys(deprecatedTokens).forEach(function (key) {
    if (newToken[key] !== undefined) {
      // @ts-ignore
      newToken[deprecatedTokens[key]] = newToken[key];
      delete newToken[key];
    }
  });
  return newToken;
}
// EXTERNAL MODULE: ./node_modules/@umijs/route-utils/es/path-to-regexp.js
var path_to_regexp = __webpack_require__(47930);
;// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/sha265.js
/* eslint-disable no-redeclare */

/* eslint-disable no-multi-assign */

/* eslint-disable no-param-reassign */

/* eslint-disable no-return-assign */

/* eslint-disable no-new-wrappers */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-var */

/* eslint-disable no-plusplus */

/* eslint-disable prefer-destructuring */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable block-scoped-var */

/* eslint-disable vars-on-top */

/* eslint-disable no-bitwise */

/* eslint-disable no-cond-assign */

/*
 * A JavaScript implementation of the SHA256 hash function.
 *
 * FILE:	sha256.js
 * VERSION:	0.8
 * AUTHOR:	Christoph Bichlmeier <informatik@zombiearena.de>
 *
 * NOTE: This version is not tested thoroughly!
 *
 * Copyright (c) 2003, Christoph Bichlmeier
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * ======================================================================
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* SHA256 logical functions */
function rotateRight(n, x) {
  return x >>> n | x << 32 - n;
}

function choice(x, y, z) {
  return x & y ^ ~x & z;
}

function majority(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

function sha256_Sigma0(x) {
  return rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x);
}

function sha256_Sigma1(x) {
  return rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x);
}

function sha256_sigma0(x) {
  return rotateRight(7, x) ^ rotateRight(18, x) ^ x >>> 3;
}

function sha256_sigma1(x) {
  return rotateRight(17, x) ^ rotateRight(19, x) ^ x >>> 10;
}

function sha256_expand(W, j) {
  return W[j & 0x0f] += sha256_sigma1(W[j + 14 & 0x0f]) + W[j + 9 & 0x0f] + sha256_sigma0(W[j + 1 & 0x0f]);
}
/* Hash constant words K: */


var K256 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
/* global arrays */

var ihash;
var count;
var buffer;
var sha256_hex_digits = '0123456789abcdef';
/* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters:
overflow) */

function safe_add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/* Initialise the SHA256 computation */


function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 0x6a09e667;
  ihash[1] = 0xbb67ae85;
  ihash[2] = 0x3c6ef372;
  ihash[3] = 0xa54ff53a;
  ihash[4] = 0x510e527f;
  ihash[5] = 0x9b05688c;
  ihash[6] = 0x1f83d9ab;
  ihash[7] = 0x5be0cd19;
}
/* Transform a 512-bit message block */


function sha256_transform() {
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var T1;
  var T2;
  var W = new Array(16);
  /* Initialize registers with the previous intermediate value */

  a = ihash[0];
  b = ihash[1];
  c = ihash[2];
  d = ihash[3];
  e = ihash[4];
  f = ihash[5];
  g = ihash[6];
  h = ihash[7];
  /* make 32-bit words */

  for (var i = 0; i < 16; i++) {
    W[i] = buffer[(i << 2) + 3] | buffer[(i << 2) + 2] << 8 | buffer[(i << 2) + 1] << 16 | buffer[i << 2] << 24;
  }

  for (var j = 0; j < 64; j++) {
    T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
    if (j < 16) T1 += W[j];else T1 += sha256_expand(W, j);
    T2 = sha256_Sigma0(a) + majority(a, b, c);
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
  }
  /* Compute the current intermediate hash value */


  ihash[0] += a;
  ihash[1] += b;
  ihash[2] += c;
  ihash[3] += d;
  ihash[4] += e;
  ihash[5] += f;
  ihash[6] += g;
  ihash[7] += h;
}
/* Read the next chunk of data and update the SHA256 computation */


function sha256_update(data, inputLen) {
  var i;
  var index;
  var curpos = 0;
  /* Compute number of bytes mod 64 */

  index = count[0] >> 3 & 0x3f;
  var remainder = inputLen & 0x3f;
  /* Update number of bits */

  if ((count[0] += inputLen << 3) < inputLen << 3) count[1]++;
  count[1] += inputLen >> 29;
  /* Transform as many times as possible */

  for (i = 0; i + 63 < inputLen; i += 64) {
    for (var j = index; j < 64; j++) {
      buffer[j] = data.charCodeAt(curpos++);
    }

    sha256_transform();
    index = 0;
  }
  /* Buffer remaining input */


  for (var _j = 0; _j < remainder; _j++) {
    buffer[_j] = data.charCodeAt(curpos++);
  }
}
/* Finish the computation by operations such as padding */


function sha256_final() {
  var index = count[0] >> 3 & 0x3f;
  buffer[index++] = 0x80;

  if (index <= 56) {
    for (var i = index; i < 56; i++) {
      buffer[i] = 0;
    }
  } else {
    for (var _i = index; _i < 64; _i++) {
      buffer[_i] = 0;
    }

    sha256_transform();

    for (var _i2 = 0; _i2 < 56; _i2++) {
      buffer[_i2] = 0;
    }
  }

  buffer[56] = count[1] >>> 24 & 0xff;
  buffer[57] = count[1] >>> 16 & 0xff;
  buffer[58] = count[1] >>> 8 & 0xff;
  buffer[59] = count[1] & 0xff;
  buffer[60] = count[0] >>> 24 & 0xff;
  buffer[61] = count[0] >>> 16 & 0xff;
  buffer[62] = count[0] >>> 8 & 0xff;
  buffer[63] = count[0] & 0xff;
  sha256_transform();
}
/* Split the internal hash values into an array of bytes */


function sha256_encode_bytes() {
  var j = 0;
  var output = new Array(32);

  for (var i = 0; i < 8; i++) {
    output[j++] = ihash[i] >>> 24 & 0xff;
    output[j++] = ihash[i] >>> 16 & 0xff;
    output[j++] = ihash[i] >>> 8 & 0xff;
    output[j++] = ihash[i] & 0xff;
  }

  return output;
}
/* Get the internal hash as a hex string */


function sha256_encode_hex() {
  var output = new String();

  for (var i = 0; i < 8; i++) {
    for (var j = 28; j >= 0; j -= 4) {
      output += sha256_hex_digits.charAt(ihash[i] >>> j & 0x0f);
    }
  }

  return output;
}
/* Main function: returns a hex string representing the SHA256 value of the
given data */


function digest(data) {
  sha256_init();
  sha256_update(data, data.length);
  sha256_final();
  return sha256_encode_hex();
}

/* harmony default export */ var sha265 = (digest);
;// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/transformRoute/transformRoute.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["pro_layout_parentKeys", "children", "icon", "flatMenu", "indexRoute", "routes"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-ignore


var childrenPropsName = 'routes';
function stripQueryStringAndHashFromPath(url) {
  return url.split('?')[0].split('#')[0];
}
var isUrl = function isUrl(path) {
  if (!path.startsWith('http')) {
    return false;
  }

  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
var getKeyByPath = function getKeyByPath(item) {
  var path = item.path;

  if (!path || path === '/') {
    // \u5982\u679C\u8FD8\u662F\u6CA1\u6709\uFF0C\u7528\u5BF9\u8C61\u7684hash \u751F\u6210\u4E00\u4E2A
    try {
      return "/".concat(sha265(JSON.stringify(item)));
    } catch (error) {// dom some thing
    }
  }

  return path ? stripQueryStringAndHashFromPath(path) : path;
};
/**
 * \u83B7\u53D6locale\uFF0C\u589E\u52A0\u4E86\u4E00\u4E2A\u529F\u80FD\uFF0C\u5982\u679C locale = false\uFF0C\u5C06\u4E0D\u4F7F\u7528\u56FD\u9645\u5316
 * @param item
 * @param parentName
 */

var getItemLocaleName = function getItemLocaleName(item, parentName) {
  var name = item.name,
      locale = item.locale; // \u5982\u679C\u914D\u7F6E\u4E86 locale \u5E76\u4E14 locale \u4E3A false\u6216 ""

  if ('locale' in item && locale === false || !name) {
    return false;
  }

  return item.locale || "".concat(parentName, ".").concat(name);
};
/**
 * \u5982\u679C\u4E0D\u662F / \u5F00\u5934\u7684\u548C\u7236\u8282\u70B9\u505A\u4E00\u4E0B\u5408\u5E76
 * \u5982\u679C\u662F / \u5F00\u5934\u7684\u4E0D\u4F5C\u4EFB\u4F55\u5904\u7406
 * \u5982\u679C\u662F url \u4E5F\u76F4\u63A5\u8FD4\u56DE
 * @param path
 * @param parentPath
 */


var mergePath = function mergePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (path.endsWith('/*')) {
    return path.replace('/*', '/');
  }

  if ((path || parentPath).startsWith('/')) {
    return path;
  }

  if (isUrl(path)) {
    return path;
  }

  return "/".concat(parentPath, "/").concat(path).replace(/\\/\\//g, '/').replace(/\\/\\//g, '/');
}; // bigfish \u7684\u517C\u5BB9\u51C6\u8BDD


var bigfishCompatibleConversions = function bigfishCompatibleConversions(route, props) {
  var _route$menu = route.menu,
      menu = _route$menu === void 0 ? {} : _route$menu,
      indexRoute = route.indexRoute,
      _route$path = route.path,
      path = _route$path === void 0 ? '' : _route$path;
  var routerChildren = route.children || [];
  var _menu$name = menu.name,
      name = _menu$name === void 0 ? route.name : _menu$name,
      _menu$icon = menu.icon,
      icon = _menu$icon === void 0 ? route.icon : _menu$icon,
      _menu$hideChildren = menu.hideChildren,
      hideChildren = _menu$hideChildren === void 0 ? route.hideChildren : _menu$hideChildren,
      _menu$flatMenu = menu.flatMenu,
      flatMenu = _menu$flatMenu === void 0 ? route.flatMenu : _menu$flatMenu; // \u517C\u5BB9\u5E73\u94FA\u5F0F\u5199\u6CD5
  // \u62FC\u63A5 childrenRoutes, \u5904\u7406\u5B58\u5728 indexRoute \u65F6\u7684\u903B\u8F91

  var childrenList = indexRoute && // \u5982\u679C\u53EA\u6709 redirect,\u4E0D\u7528\u5904\u7406\u7684
  Object.keys(indexRoute).join(',') !== 'redirect' ? [_objectSpread({
    path: path,
    menu: menu
  }, indexRoute)].concat(routerChildren || []) : routerChildren; // \u62FC\u63A5\u8FD4\u56DE\u7684 menu \u6570\u636E

  var result = _objectSpread({}, route);

  if (name) {
    result.name = name;
  }

  if (icon) {
    result.icon = icon;
  }

  if (childrenList && childrenList.length) {
    /** \u5728\u83DC\u5355\u4E2D\u9690\u85CF\u5B50\u9879 */
    if (hideChildren) {
      delete result.children;
      return result;
    } // \u9700\u8981\u91CD\u65B0\u8FDB\u884C\u4E00\u6B21


    var finalChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
      data: childrenList
    }), route);
    /** \u5728\u83DC\u5355\u4E2D\u53EA\u9690\u85CF\u6B64\u9879\uFF0C\u5B50\u9879\u5F80\u4E0A\u63D0\uFF0C\u4ECD\u65E7\u5C55\u793A */

    if (flatMenu) {
      return finalChildren;
    }

    delete result[childrenPropsName];
  }

  return result;
};

var notNullArray = function notNullArray(value) {
  return Array.isArray(value) && value.length > 0;
};
/**
 *
 * @param props
 * @param parent
 */


function formatter(props) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    path: '/'
  };
  var data = props.data,
      formatMessage = props.formatMessage,
      parentName = props.parentName,
      menuLocale = props.locale;

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.filter(function (item) {
    if (!item) return false;
    if (notNullArray(item.children)) return true;
    if (item.path) return true;
    if (item.originPath) return true;
    if (item.layout) return true; // \u91CD\u5B9A\u5411

    if (item.redirect) return false;
    if (item.unaccessible) return false;
    return false;
  }).filter(function (item) {
    var _item$menu, _item$menu2;

    if ((item === null || item === void 0 ? void 0 : (_item$menu = item.menu) === null || _item$menu === void 0 ? void 0 : _item$menu.name) || (item === null || item === void 0 ? void 0 : item.flatMenu) || (item === null || item === void 0 ? void 0 : (_item$menu2 = item.menu) === null || _item$menu2 === void 0 ? void 0 : _item$menu2.flatMenu)) {
      return true;
    } // \u663E\u793A\u6307\u5B9A\u5728 menu \u4E2D\u9690\u85CF\u8BE5\u9879
    // layout \u63D2\u4EF6\u7684\u529F\u80FD\uFF0C\u5176\u5B9E\u4E0D\u5E94\u8BE5\u5B58\u5728\u7684


    if (item.menu === false) {
      return false;
    }

    return true;
  }).map(function (finallyItem) {
    var item = _objectSpread(_objectSpread({}, finallyItem), {}, {
      path: finallyItem.path || finallyItem.originPath
    });

    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName];
      delete item[childrenPropsName];
    } // \u662F\u5426\u6CA1\u6709\u6743\u9650\u67E5\u770B
    // \u8FD9\u6837\u5C31\u4E0D\u4F1A\u663E\u793A\uFF0C\u662F\u4E00\u4E2A\u517C\u5BB9\u6027\u7684\u65B9\u5F0F


    if (item.unaccessible) {
      // eslint-disable-next-line no-param-reassign
      delete item.name;
    }

    if (item.path === '*') {
      item.path = '.';
    }

    if (item.path === '/*') {
      item.path = '.';
    }

    if (!item.path && item.originPath) {
      item.path = item.originPath;
    }

    return item;
  }).map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      path: '/'
    };
    var routerChildren = item.children || item[childrenPropsName] || [];
    var path = mergePath(item.path, parent ? parent.path : '/');
    var name = item.name;
    var locale = getItemLocaleName(item, parentName || 'menu'); // if enableMenuLocale use item.name,
    // close menu international

    var localeName = locale !== false && menuLocale !== false && formatMessage && locale ? formatMessage({
      id: locale,
      defaultMessage: name
    }) : name;

    var _parent$pro_layout_pa = parent.pro_layout_parentKeys,
        pro_layout_parentKeys = _parent$pro_layout_pa === void 0 ? [] : _parent$pro_layout_pa,
        children = parent.children,
        icon = parent.icon,
        flatMenu = parent.flatMenu,
        indexRoute = parent.indexRoute,
        routes = parent.routes,
        restParent = _objectWithoutProperties(parent, _excluded);

    var item_pro_layout_parentKeys = new Set([].concat(_toConsumableArray(pro_layout_parentKeys), _toConsumableArray(item.parentKeys || [])));

    if (parent.key) {
      item_pro_layout_parentKeys.add(parent.key);
    }

    var finallyItem = _objectSpread(_objectSpread(_objectSpread({}, restParent), {}, {
      menu: undefined
    }, item), {}, {
      path: path,
      locale: locale,
      key: item.key || getKeyByPath(_objectSpread(_objectSpread({}, item), {}, {
        path: path
      })),
      pro_layout_parentKeys: Array.from(item_pro_layout_parentKeys).filter(function (key) {
        return key && key !== '/';
      })
    });

    if (localeName) {
      finallyItem.name = localeName;
    } else {
      delete finallyItem.name;
    }

    if (finallyItem.menu === undefined) {
      delete finallyItem.menu;
    }

    if (notNullArray(routerChildren)) {
      var formatterChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
        data: routerChildren,
        parentName: locale || ''
      }), finallyItem);

      if (notNullArray(formatterChildren)) {
        finallyItem.children = formatterChildren;
      }
    }

    return bigfishCompatibleConversions(finallyItem, props);
  }).flat(1);
}
/**
 * \u5220\u9664 hideInMenu \u548C item.name \u4E0D\u5B58\u5728\u7684
 */


var defaultFilterMenuData = function defaultFilterMenuData() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.filter(function (item) {
    return item && (item.name || notNullArray(item.children)) && !item.hideInMenu && !item.redirect;
  }).map(function (item) {
    var newItem = _objectSpread({}, item);

    var routerChildren = newItem.children || item[childrenPropsName] || [];
    delete newItem[childrenPropsName];

    if (notNullArray(routerChildren) && !newItem.hideChildrenInMenu && routerChildren.some(function (child) {
      return child && !!child.name;
    })) {
      var newChildren = defaultFilterMenuData(routerChildren);
      if (newChildren.length) return _objectSpread(_objectSpread({}, newItem), {}, {
        children: newChildren
      });
    }

    return _objectSpread({}, item);
  }).filter(function (item) {
    return item;
  });
};
/**
 * support pathToRegexp get string
 */


var RouteListMap = /*#__PURE__*/function (_Map) {
  _inherits(RouteListMap, _Map);

  var _super = _createSuper(RouteListMap);

  function RouteListMap() {
    _classCallCheck(this, RouteListMap);

    return _super.apply(this, arguments);
  }

  _createClass(RouteListMap, [{
    key: "get",
    value: function get(pathname) {
      var routeValue;

      try {
        // eslint-disable-next-line no-restricted-syntax
        var _iterator = _createForOfIteratorHelper(this.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            var path = stripQueryStringAndHashFromPath(key);

            if (!isUrl(key) && (0,path_to_regexp/* pathToRegexp */.Bo)(path, []).test(pathname)) {
              routeValue = value;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } catch (error) {
        routeValue = undefined;
      }

      return routeValue;
    }
  }]);

  return RouteListMap;
}( /*#__PURE__*/_wrapNativeSuper(Map));
/**
 * \u83B7\u53D6\u9762\u5305\u5C51\u6620\u5C04
 * @param MenuDataItem[] menuData \u83DC\u5355\u914D\u7F6E
 */


var getBreadcrumbNameMap = function getBreadcrumbNameMap(menuData) {
  // Map is used to ensure the order of keys
  var routerMap = new RouteListMap();

  var flattenMenuData = function flattenMenuData(data, parent) {
    data.forEach(function (menuItem) {
      var routerChildren = menuItem.children || menuItem[childrenPropsName] || [];

      if (notNullArray(routerChildren)) {
        flattenMenuData(routerChildren, menuItem);
      } // Reduce memory usage


      var path = mergePath(menuItem.path, parent ? parent.path : '/');
      routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
    });
  };

  flattenMenuData(menuData);
  return routerMap;
};

var clearChildren = function clearChildren() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.map(function (item) {
    var routerChildren = item.children || item[childrenPropsName];

    if (notNullArray(routerChildren)) {
      var newChildren = clearChildren(routerChildren);
      if (newChildren.length) return _objectSpread({}, item);
    }

    var finallyItem = _objectSpread({}, item);

    delete finallyItem[childrenPropsName];
    delete finallyItem.children;
    return finallyItem;
  }).filter(function (item) {
    return item;
  });
};
/**
 * @param routeList \u8DEF\u7531\u914D\u7F6E
 * @param locale \u662F\u5426\u4F7F\u7528\u56FD\u9645\u5316
 * @param formatMessage \u56FD\u9645\u5316\u7684\u7A0B\u5E8F
 * @param ignoreFilter \u662F\u5426\u7B5B\u9009\u6389\u4E0D\u5C55\u793A\u7684 menuItem \u9879\uFF0Cplugin-layout\u9700\u8981\u6240\u6709\u9879\u76EE\u6765\u8BA1\u7B97\u5E03\u5C40\u6837\u5F0F
 * @returns { breadcrumb, menuData}
 */


var transformRoute = function transformRoute(routeList, locale, formatMessage, ignoreFilter) {
  var originalMenuData = formatter({
    data: routeList,
    formatMessage: formatMessage,
    locale: locale
  });
  var menuData = ignoreFilter ? clearChildren(originalMenuData) : defaultFilterMenuData(originalMenuData); // Map type used for internal logic

  var breadcrumb = getBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb: breadcrumb,
    menuData: menuData
  };
};

/* harmony default export */ var transformRoute_transformRoute = (transformRoute);
;// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/getFlatMenus/getFlatMenus.js
function getFlatMenus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function getFlatMenus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getFlatMenus_ownKeys(Object(source), !0).forEach(function (key) { getFlatMenus_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getFlatMenus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getFlatMenus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * \u83B7\u53D6\u6253\u5E73\u7684 menuData
 * \u4EE5 path \u4E3A key
 * @param menuData
 */

var getFlatMenus = function getFlatMenus() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var menus = {};
  menuData.forEach(function (mapItem) {
    var item = getFlatMenus_objectSpread({}, mapItem);

    if (!item || !item.key) {
      return;
    }

    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName];
      delete item[childrenPropsName];
    }

    var routerChildren = item.children || [];
    menus[stripQueryStringAndHashFromPath(item.path || item.key || '/')] = getFlatMenus_objectSpread({}, item);
    menus[item.key || item.path || '/'] = getFlatMenus_objectSpread({}, item);

    if (routerChildren) {
      menus = getFlatMenus_objectSpread(getFlatMenus_objectSpread({}, menus), getFlatMenus(routerChildren));
    }
  });
  return menus;
};
/* harmony default export */ var getFlatMenus_getFlatMenus = (getFlatMenus);
;// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/getMatchMenu/getMatchMenu.js
//@ts-ignore



var getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var exact = arguments.length > 2 ? arguments[2] : undefined;
  return flatMenuKeys.filter(function (item) {
    if (item === '/' && path === '/') {
      return true;
    }

    if (item !== '/' && item !== '/*' && item && !isUrl(item)) {
      var pathKey = stripQueryStringAndHashFromPath(item);

      try {
        // exact
        if (exact) {
          if ((0,path_to_regexp/* pathToRegexp */.Bo)("".concat(pathKey)).test(path)) {
            return true;
          }
        } // /a


        if ((0,path_to_regexp/* pathToRegexp */.Bo)("".concat(pathKey), []).test(path)) {
          return true;
        } // /a/b/b


        if ((0,path_to_regexp/* pathToRegexp */.Bo)("".concat(pathKey, "/(.*)")).test(path)) {
          return true;
        }
      } catch (error) {// console.log(error, path);
      }
    }

    return false;
  }).sort(function (a, b) {
    // \u5982\u679C\u5B8C\u5168\u5339\u914D\u653E\u5230\u6700\u540E\u9762
    if (a === path) {
      return 10;
    }

    if (b === path) {
      return -10;
    }

    return a.substr(1).split('/').length - b.substr(1).split('/').length;
  });
};
/**
 * \u83B7\u53D6\u5F53\u524D\u7684\u9009\u4E2D\u83DC\u5355\u5217\u8868
 * @param pathname
 * @param menuData
 * @returns MenuDataItem[]
 */

var getMatchMenu = function getMatchMenu(pathname, menuData,
/**
 * \u8981\u4E0D\u8981\u5C55\u793A\u5168\u90E8\u7684 key
 */
fullKeys, exact) {
  var flatMenus = getFlatMenus_getFlatMenus(menuData);
  var flatMenuKeys = Object.keys(flatMenus);
  var menuPathKeys = getMenuMatches(flatMenuKeys, pathname || '/', exact);

  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }

  if (!fullKeys) {
    menuPathKeys = [menuPathKeys[menuPathKeys.length - 1]];
  }

  return menuPathKeys.map(function (menuPathKey) {
    var menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: '',
      key: ''
    }; // \u53BB\u91CD

    var map = new Map();
    var parentItems = (menuItem.pro_layout_parentKeys || []).map(function (key) {
      if (map.has(key)) {
        return null;
      }

      map.set(key, true);
      return flatMenus[key];
    }).filter(function (item) {
      return item;
    });

    if (menuItem.key) {
      parentItems.push(menuItem);
    }

    return parentItems;
  }).flat(1);
};
/* harmony default export */ var getMatchMenu_getMatchMenu = (getMatchMenu);
;// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/index.js



// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(21532);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/context.js
var layout_context = __webpack_require__(82401);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 4 modules
var Sider = __webpack_require__(43551);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/hooks/useHasSider.js


function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === 'boolean') {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = (0,toArray/* default */.Z)(children);
  return childNodes.some(node => node.type === Sider/* default */.Z);
}
// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/index.js
var layout_style = __webpack_require__(24793);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/layout.js
"use client";


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return BasicComponent => {
    const Adapter = /*#__PURE__*/react.forwardRef((props, ref) => (/*#__PURE__*/react.createElement(BasicComponent, Object.assign({
      ref: ref,
      suffixCls: suffixCls,
      tagName: tagName
    }, props))));
    if (false) {}
    return Adapter;
  };
}
const Basic = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      suffixCls,
      className,
      tagName: TagName
    } = props,
    others = __rest(props, ["prefixCls", "suffixCls", "className", "tagName"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('layout', customizePrefixCls);
  const [wrapSSR, hashId, cssVarCls] = (0,layout_style/* default */.ZP)(prefixCls);
  const prefixWithSuffixCls = suffixCls ? \`\${prefixCls}-\${suffixCls}\` : prefixCls;
  return wrapSSR(/*#__PURE__*/react.createElement(TagName, Object.assign({
    className: classnames_default()(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
    ref: ref
  }, others)));
});
const BasicLayout = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [siders, setSiders] = react.useState([]);
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children,
      hasSider,
      tagName: Tag,
      style
    } = props,
    others = __rest(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
  const passedProps = (0,omit/* default */.Z)(others, ['suffixCls']);
  const {
    getPrefixCls,
    layout
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('layout', customizePrefixCls);
  const mergedHasSider = useHasSider(siders, children, hasSider);
  const [wrapCSSVar, hashId, cssVarCls] = (0,layout_style/* default */.ZP)(prefixCls);
  const classString = classnames_default()(prefixCls, {
    [\`\${prefixCls}-has-sider\`]: mergedHasSider,
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  }, layout === null || layout === void 0 ? void 0 : layout.className, className, rootClassName, hashId, cssVarCls);
  const contextValue = react.useMemo(() => ({
    siderHook: {
      addSider: id => {
        setSiders(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [id]));
      },
      removeSider: id => {
        setSiders(prev => prev.filter(currentId => currentId !== id));
      }
    }
  }), []);
  return wrapCSSVar(/*#__PURE__*/react.createElement(layout_context/* LayoutContext */.V.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(Tag, Object.assign({
    ref: ref,
    className: classString,
    style: Object.assign(Object.assign({}, layout === null || layout === void 0 ? void 0 : layout.style), style)
  }, passedProps), children)));
});
const Layout = generator({
  tagName: 'div',
  displayName: 'Layout'
})(BasicLayout);
const Header = generator({
  suffixCls: 'header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
const Footer = generator({
  suffixCls: 'footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
const Content = generator({
  suffixCls: 'content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ var layout = (Layout);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/index.js
"use client";



const layout_Layout = layout;
layout_Layout.Header = Header;
layout_Layout.Footer = Footer;
layout_Layout.Content = Content;
layout_Layout.Sider = Sider/* default */.Z;
layout_Layout._InternalSiderContext = Sider/* SiderContext */.D;
/* harmony default export */ var es_layout = (layout_Layout);
// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var omit_js_es = __webpack_require__(97435);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/swr/dist/index/index.mjs
var index = __webpack_require__(5068);
// EXTERNAL MODULE: ./node_modules/swr/dist/_internal/index.mjs
var _internal = __webpack_require__(10046);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/components/ErrorBoundary/index.js
var ErrorBoundary = __webpack_require__(78164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/WrapContent.js







var WrapContent = function WrapContent(props) {
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    hashId = _useContext.hashId;
  var style = props.style,
    prefixCls = props.prefixCls,
    children = props.children,
    _props$hasPageContain = props.hasPageContainer,
    hasPageContainer = _props$hasPageContain === void 0 ? 0 : _props$hasPageContain;
  var contentClassName = classnames_default()("".concat(prefixCls, "-content"), hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-has-header"), props.hasHeader), "".concat(prefixCls, "-content-has-page-container"), hasPageContainer > 0));
  var ErrorComponent = props.ErrorBoundary || ErrorBoundary/* ErrorBoundary */.S;
  return props.ErrorBoundary === false ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_layout.Content, {
    className: contentClassName,
    style: style,
    children: children
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorComponent, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_layout.Content, {
      className: contentClassName,
      style: style,
      children: children
    })
  });
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/assert/Logo.js


var Logo = function Logo() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 200 200",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "62.1023273%",
        y1: "0%",
        x2: "108.19718%",
        y2: "37.8635764%",
        id: "linearGradient-1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#4285EB",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#2EC7FF",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "69.644116%",
        y1: "0%",
        x2: "54.0428975%",
        y2: "108.456714%",
        id: "linearGradient-2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#29CDFF",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#148EFF",
          offset: "37.8600687%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#0A60FF",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "69.6908165%",
        y1: "-12.9743587%",
        x2: "16.7228981%",
        y2: "117.391248%",
        id: "linearGradient-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#FA816E",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F74A5C",
          offset: "41.472606%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F51D2C",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "68.1279872%",
        y1: "-35.6905737%",
        x2: "30.4400914%",
        y2: "114.942679%",
        id: "linearGradient-4",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#FA8E7D",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F74A5C",
          offset: "51.2635191%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F51D2C",
          offset: "100%"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        transform: "translate(-20.000000, -20.000000)",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          transform: "translate(20.000000, 20.000000)",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
              fillRule: "nonzero",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                  fill: "url(#linearGradient-1)"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                  fill: "url(#linearGradient-2)"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                d: "M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z",
                fill: "url(#linearGradient-3)"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("ellipse", {
              fill: "url(#linearGradient-4)",
              cx: "100.519339",
              cy: "100.436681",
              rx: "23.6001926",
              ry: "23.580786"
            })]
          })
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CopyrightOutlined.js
// This icon file is generated automatically.
var CopyrightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z" } }] }, "name": "copyright", "theme": "outlined" };
/* harmony default export */ var asn_CopyrightOutlined = (CopyrightOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CopyrightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CopyrightOutlined_CopyrightOutlined = function CopyrightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_CopyrightOutlined
  }));
};

/**![copyright](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnptNS42LTUzMi43YzUzIDAgODkgMzMuOCA5MyA4My40LjMgNC4yIDMuOCA3LjQgOCA3LjRoNTYuN2MyLjYgMCA0LjctMi4xIDQuNy00LjcgMC04Ni43LTY4LjQtMTQ3LjQtMTYyLjctMTQ3LjRDNDA3LjQgMjkwIDM0NCAzNjQuMiAzNDQgNDg2Ljh2NTIuM0MzNDQgNjYwLjggNDA3LjQgNzM0IDUxNy4zIDczNGM5NCAwIDE2Mi43LTU4LjggMTYyLjctMTQxLjQgMC0yLjYtMi4xLTQuNy00LjctNC43aC01Ni44Yy00LjIgMC03LjYgMy4yLTggNy4zLTQuMiA0Ni4xLTQwLjEgNzcuOC05MyA3Ny44LTY1LjMgMC0xMDIuMS00Ny45LTEwMi4xLTEzMy42di01Mi42Yy4xLTg3IDM3LTEzNS41IDEwMi4yLTEzNS41eiIgLz48L3N2Zz4=) */
var RefIcon = /*#__PURE__*/react.forwardRef(CopyrightOutlined_CopyrightOutlined);
if (false) {}
/* harmony default export */ var icons_CopyrightOutlined = (RefIcon);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-provider/es/useStyle/index.js
var useStyle = __webpack_require__(98082);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalFooter/style.js



var genFooterToolBarStyle = function genFooterToolBarStyle(token) {
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    marginBlock: 0,
    marginBlockStart: 48,
    marginBlockEnd: 24,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 16,
    textAlign: 'center',
    '&-list': {
      marginBlockEnd: 8,
      color: token.colorTextSecondary,
      '&-link': {
        color: token.colorTextSecondary,
        textDecoration: token.linkDecoration
      },
      '*:not(:last-child)': {
        marginInlineEnd: 8
      },
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-copyright': {
      fontSize: '14px',
      color: token.colorText
    }
  });
};
function style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutFooter', function (token) {
    var proCardToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genFooterToolBarStyle(proCardToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js






var GlobalFooter = function GlobalFooter(_ref) {
  var className = _ref.className,
    prefixCls = _ref.prefixCls,
    links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style;
  var context = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext);
  var baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');
  var _useStyle = style_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()(baseClassName, hashId, className),
    style: style,
    children: [links && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
      children: links.map(function (link) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "".concat(baseClassName, "-list-link ").concat(hashId).trim(),
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href,
          rel: "noreferrer",
          children: link.title
        }, link.key);
      })
    }), copyright && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(baseClassName, "-copyright ").concat(hashId).trim(),
      children: copyright
    })]
  }));
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/Footer.js







var Footer_Footer = es_layout.Footer;
var DefaultFooter = function DefaultFooter(_ref) {
  var links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style,
    className = _ref.className,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Footer_Footer, {
    className: className,
    style: (0,objectSpread2/* default */.Z)({
      padding: 0
    }, style),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalFooter, {
      links: links,
      prefixCls: prefixCls,
      copyright: copyright === false ? null : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_CopyrightOutlined, {}), " ", copyright]
      })
    })
  });
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/utils.js

var getOpenKeysFromMenuData = function getOpenKeysFromMenuData(menuData) {
  return (menuData || []).reduce(function (pre, item) {
    if (item.key) {
      pre.push(item.key);
    }
    if (item.children || item.routes) {
      var newArray = pre.concat(getOpenKeysFromMenuData(item.children || item.routes) || []);
      return newArray;
    }
    return pre;
  }, []);
};
var themeConfig = {
  techBlue: '#1677FF',
  daybreak: '#1890ff',
  dust: '#F5222D',
  volcano: '#FA541C',
  sunset: '#FAAD14',
  cyan: '#13C2C2',
  green: '#52C41A',
  geekblue: '#2F54EB',
  purple: '#722ED1'
};
/**
 * Daybreak-> #1890ff
 *
 * @param val
 */
function genStringToTheme(val) {
  return val && themeConfig[val] ? themeConfig[val] : val || '';
}
function clearMenuItem(menusData) {
  return menusData.map(function (item) {
    var children = item.children || [];
    var finalItem = (0,objectSpread2/* default */.Z)({}, item);
    if (!finalItem.children && finalItem.routes) {
      finalItem.children = finalItem.routes;
    }
    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }
    if (finalItem && finalItem !== null && finalItem !== void 0 && finalItem.children) {
      if (!finalItem.hideChildrenInMenu && children.some(function (child) {
        return child && child.name && !child.hideInMenu;
      })) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          children: clearMenuItem(children)
        });
      }
      // children \u4E3A\u7A7A\u5C31\u76F4\u63A5\u5220\u6389
      delete finalItem.children;
    }
    delete finalItem.routes;
    return finalItem;
  }).filter(function (item) {
    return item;
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuOutlined.js
// This icon file is generated automatically.
var MenuOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, "name": "menu", "theme": "outlined" };
/* harmony default export */ var asn_MenuOutlined = (MenuOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MenuOutlined_MenuOutlined = function MenuOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_MenuOutlined
  }));
};

/**![menu](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwNCAxNjBIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMCA2MjRIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMC0zMTJIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */
var MenuOutlined_RefIcon = /*#__PURE__*/react.forwardRef(MenuOutlined_MenuOutlined);
if (false) {}
/* harmony default export */ var icons_MenuOutlined = (MenuOutlined_RefIcon);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js
var popover = __webpack_require__(55241);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/AppsLogo.js

/**
 * \u9ED8\u8BA4\u7684\u5E94\u7528\u5217\u8868\u7684\u56FE\u6807
 *
 */
var AppsLogo = function AppsLogo() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z"
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/DefaultContent.js




var DefaultContent = function DefaultContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            href: itemClick ? undefined : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [defaultRenderLogo(app.icon), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: app.title
              }), app.desc ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: app.desc
              }) : null]
            })]
          })
        }, index);
      })
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/isUrl/index.js
/**
 * \u5224\u65AD\u662F\u4E0D\u662F\u4E00\u4E2A url
 * @param  {string|undefined} path
 * @returns boolean
 */
var isUrl_isUrl = function isUrl(path) {
  if (!path) return false;
  if (!path.startsWith('http')) {
    return false;
  }
  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/SimpleContent.js




/**
 * simple \u6A21\u5F0F\u6E32\u67D3logo\u7684\u65B9\u5F0F
 *
 * @param logo
 * @param title
 * @returns
 */
var renderLogo = function renderLogo(logo, title) {
  if (logo && typeof logo === 'string' && isUrl_isUrl(logo)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  if (logo && typeof logo === 'string') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      id: "avatarLogo",
      children: logo
    });
  }
  if (!logo && title && typeof title === 'string') {
    var symbol = title.substring(0, 1);
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      id: "avatarLogo",
      children: symbol
    });
  }
  return logo;
};
var SimpleContent = function SimpleContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            href: itemClick ? 'javascript:;' : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [renderLogo(app.icon, app.title), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: app.title
              })
            })]
          })
        }, index);
      })
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/default.js

var genAppsLogoComponentsDefaultListStyle = function genAppsLogoComponentsDefaultListStyle(token) {
  return {
    '&-content': {
      maxHeight: 'calc(100vh - 48px)',
      overflow: 'auto',
      '&-list': {
        boxSizing: 'content-box',
        maxWidth: 656,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: 'none',
        '&-item': {
          position: 'relative',
          display: 'inline-block',
          width: 328,
          height: 72,
          paddingInline: 16,
          paddingBlock: 16,
          verticalAlign: 'top',
          listStyleType: 'none',
          transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
          borderRadius: token.borderRadius,
          '&-group': {
            marginBottom: 16,
            '&-title': {
              margin: '16px 0 8px 12px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.88)',
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              '&:first-child': {
                marginTop: 12
              }
            }
          },
          '&:hover': {
            backgroundColor: token.colorBgTextHover
          },
          '* div': useStyle/* resetComponent */.Wf === null || useStyle/* resetComponent */.Wf === void 0 ? void 0 : (0,useStyle/* resetComponent */.Wf)(token),
          a: {
            display: 'flex',
            height: '100%',
            fontSize: 12,
            textDecoration: 'none',
            '& > img': {
              width: 40,
              height: 40
            },
            '& > div': {
              marginInlineStart: 14,
              color: token.colorTextHeading,
              fontSize: 14,
              lineHeight: '22px',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            },
            '& > div > span': {
              color: token.colorTextSecondary,
              fontSize: 12,
              lineHeight: '20px'
            }
          }
        }
      }
    }
  };
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/simple.js
var genAppsLogoComponentsSimpleListStyle = function genAppsLogoComponentsSimpleListStyle(token) {
  return {
    '&-content': {
      maxHeight: 'calc(100vh - 48px)',
      overflow: 'auto',
      '&-list': {
        boxSizing: 'border-box',
        maxWidth: 376,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: 'none',
        '&-item': {
          position: 'relative',
          display: 'inline-block',
          width: 104,
          height: 104,
          marginBlock: 8,
          marginInline: 8,
          paddingInline: 24,
          paddingBlock: 24,
          verticalAlign: 'top',
          listStyleType: 'none',
          transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
          borderRadius: token.borderRadius,
          '&-group': {
            marginBottom: 16,
            '&-title': {
              margin: '16px 0 8px 12px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.88)',
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              '&:first-child': {
                marginTop: 12
              }
            }
          },
          '&:hover': {
            backgroundColor: token.colorBgTextHover
          },
          a: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            fontSize: 12,
            textDecoration: 'none',
            '& > #avatarLogo': {
              width: 40,
              height: 40,
              margin: '0 auto',
              color: token.colorPrimary,
              fontSize: 22,
              lineHeight: '40px',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)',
              borderRadius: token.borderRadius
            },
            '& > img': {
              width: 40,
              height: 40
            },
            '& > div': {
              marginBlockStart: 5,
              marginInlineStart: 0,
              color: token.colorTextHeading,
              fontSize: 14,
              lineHeight: '22px',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            },
            '& > div > span': {
              color: token.colorTextSecondary,
              fontSize: 12,
              lineHeight: '20px'
            }
          }
        }
      }
    }
  };
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/index.js





var genAppsLogoComponentsStyle = function genAppsLogoComponentsStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    '&-icon': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingInline: 4,
      paddingBlock: 0,
      fontSize: 14,
      lineHeight: '14px',
      height: 28,
      width: 28,
      cursor: 'pointer',
      color: (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextAppListIcon,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextAppListIconHover,
        backgroundColor: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgAppListIconHover
      },
      '&-active': {
        color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextAppListIconHover,
        backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgAppListIconHover
      }
    },
    '&-item-title': {
      marginInlineStart: '16px',
      marginInlineEnd: '8px',
      marginBlockStart: 0,
      marginBlockEnd: '12px',
      fontWeight: 600,
      color: 'rgba(0, 0, 0, 0.88)',
      fontSize: 16,
      opacity: 0.85,
      lineHeight: 1.5,
      '&:first-child': {
        marginBlockStart: 12
      }
    },
    '&-popover': (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-popover-arrow"), {
      display: 'none'
    }),
    '&-simple': genAppsLogoComponentsSimpleListStyle(token),
    '&-default': genAppsLogoComponentsDefaultListStyle(token)
  });
};
function AppsLogoComponents_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('AppsLogoComponents', function (token) {
    var proCardToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genAppsLogoComponentsStyle(proCardToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js














/**
 * \u9ED8\u8BA4\u6E32\u67D3logo\u7684\u65B9\u5F0F\uFF0C\u5982\u679C\u662F\u4E2Astring\uFF0C\u7528img\u3002\u5426\u5219\u76F4\u63A5\u8FD4\u56DE
 *
 * @param logo
 * @returns
 */
var defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: "auto",
      height: 22,
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  return logo;
};

/**
 * \u76F8\u5173\u54C1\u724C\u989Dicon \u5217\u8868\u3002\u7528\u4E8E\u5C55\u793A\u76F8\u5173\u7684\u54C1\u724C
 *
 * @param props
 * @returns
 */
var AppsLogoComponents = function AppsLogoComponents(props) {
  var _props$appList;
  var appList = props.appList,
    appListRender = props.appListRender,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls,
    itemClick = props.onItemClick;
  var ref = react.useRef(null);
  var popoverRef = react.useRef(null);
  var baseClassName = "".concat(prefixCls, "-layout-apps");
  var _useStyle = AppsLogoComponents_style_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var cloneItemClick = function cloneItemClick(app) {
    itemClick === null || itemClick === void 0 || itemClick(app, popoverRef);
  };
  var defaultDomContent = (0,react.useMemo)(function () {
    var isSimple = appList === null || appList === void 0 ? void 0 : appList.some(function (app) {
      return !(app !== null && app !== void 0 && app.desc);
    });
    if (isSimple) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleContent, {
        hashId: hashId,
        appList: appList,
        itemClick: itemClick ? cloneItemClick : undefined,
        baseClassName: "".concat(baseClassName, "-simple")
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultContent, {
      hashId: hashId,
      appList: appList,
      itemClick: itemClick ? cloneItemClick : undefined,
      baseClassName: "".concat(baseClassName, "-default")
    });
  }, [appList, baseClassName, hashId]);
  if (!(props !== null && props !== void 0 && (_props$appList = props.appList) !== null && _props$appList !== void 0 && _props$appList.length)) return null;
  var popoverContent = appListRender ? appListRender(props === null || props === void 0 ? void 0 : props.appList, defaultDomContent) : defaultDomContent;
  var popoverOpenProps = (0,openVisibleCompatible/* openVisibleCompatible */.X)(undefined, function (openChange) {
    return setOpen(openChange);
  });
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      placement: "bottomRight",
      trigger: ['click'],
      zIndex: 9999,
      arrow: false
    }, popoverOpenProps), {}, {
      overlayClassName: "".concat(baseClassName, "-popover ").concat(hashId).trim(),
      content: popoverContent,
      getPopupContainer: function getPopupContainer() {
        return ref.current || document.body;
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        ref: popoverRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: classnames_default()("".concat(baseClassName, "-icon"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-icon-active"), open)),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogo, {})
      })
    }))]
  }));
};
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 4 modules
var avatar = __webpack_require__(7134);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(78957);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 10 modules
var es_menu = __webpack_require__(50136);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/Arrow.js

function ArrowSvgIcon() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z"
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/style.js



var genSiderMenuStyle = function genSiderMenuStyle(token) {
  var _token$layout, _token$layout2, _token$layout3;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    position: 'absolute',
    insetBlockStart: '18px',
    zIndex: '101',
    width: '24px',
    height: '24px',
    fontSize: ['14px', '16px'],
    textAlign: 'center',
    borderRadius: '40px',
    insetInlineEnd: '-13px',
    transition: 'transform 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextCollapsedButton,
    backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgCollapsedButton,
    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
    '&:hover': {
      color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextCollapsedButtonHover,
      boxShadow: '0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)'
    },
    '.anticon': {
      fontSize: '14px'
    },
    '& > svg': {
      transition: 'transform  0.3s',
      transform: 'rotate(90deg)'
    },
    '&-collapsed': {
      '& > svg': {
        transform: 'rotate(-90deg)'
      }
    }
  });
};
function CollapsedIcon_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('SiderMenuCollapsedIcon', function (token) {
    var siderMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genSiderMenuStyle(siderMenuToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/index.js



var CollapsedIcon_excluded = ["isMobile", "collapsed"];




var CollapsedIcon = function CollapsedIcon(props) {
  var isMobile = props.isMobile,
    collapsed = props.collapsed,
    rest = (0,objectWithoutProperties/* default */.Z)(props, CollapsedIcon_excluded);
  var _useStyle = CollapsedIcon_style_useStyle(props.className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (isMobile && collapsed) return null;
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("div", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rest), {}, {
    className: classnames_default()(props.className, hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(props.className, "-collapsed"), collapsed), "".concat(props.className, "-is-mobile"), isMobile)),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowSvgIcon, {})
  })));
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(63017);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/utils.js
var utils = __webpack_require__(41755);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js




var Icon_excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
// Seems this is used for iconFont





var Icon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Icon_excluded);
  var iconRef = react.useRef();
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(iconRef, ref);
  (0,utils/* warning */.Kp)(Boolean(Component || children), 'Should have \`component\` prop or \`children\`.');
  (0,utils/* useInsertStyles */.C3)(iconRef);
  var _React$useContext = react.useContext(Context/* default */.Z),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames_default()(rootClassName, prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-spin"), !!spin && !!Component), className);
  var svgClassString = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, utils/* svgBaseProps */.vD), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react.createElement(Component, innerSvgProps, children);
    }
    if (children) {
      (0,utils/* warning */.Kp)(Boolean(viewBox) || react.Children.count(children) === 1 && /*#__PURE__*/react.isValidElement(children) && react.Children.only(children).type === 'use', 'Make sure that you provide correct \`viewBox\`' + ' prop (default \`0 0 1024 1024\`) to the icon.');
      return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({
    role: "img"
  }, restProps, {
    ref: mergedRef,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ var components_Icon = (Icon);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconFont.js


var IconFont_excluded = ["type", "children"];


var customCache = new Set();
function isValidCustomScriptUrl(scriptUrl) {
  return Boolean(typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl));
}
function createScriptUrlElements(scriptUrls) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentScriptUrl = scriptUrls[index];
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);
    if (scriptUrls.length > index + 1) {
      script.onload = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
      script.onerror = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }
    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}
function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
    _options$extraCommonP = options.extraCommonProps,
    extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (scriptUrl && typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function') {
    if (Array.isArray(scriptUrl)) {
      // \u56E0\u4E3Aiconfont\u8D44\u6E90\u4F1A\u628Asvg\u63D2\u5165before\uFF0C\u6240\u4EE5\u524D\u52A0\u8F7D\u76F8\u540Ctype\u4F1A\u8986\u76D6\u540E\u52A0\u8F7D\uFF0C\u4E3A\u4E86\u6570\u7EC4\u8986\u76D6\u987A\u5E8F\uFF0C\u5012\u53D9\u63D2\u5165
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }
  var Iconfont = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var type = props.type,
      children = props.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, IconFont_excluded);

    // children > type
    var content = null;
    if (props.type) {
      content = /*#__PURE__*/react.createElement("use", {
        xlinkHref: "#".concat(type)
      });
    }
    if (children) {
      content = children;
    }
    return /*#__PURE__*/react.createElement(components_Icon, (0,esm_extends/* default */.Z)({}, extraCommonProps, restProps, {
      ref: ref
    }), content);
  });
  Iconfont.displayName = 'Iconfont';
  return Iconfont;
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/isImg/index.js
/** \u5224\u65AD\u662F\u5426\u662F\u56FE\u7247\u94FE\u63A5 */
function isImg(path) {
  return /\\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(48054);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/defaultSettings.js
var defaultSettings = {
  navTheme: 'light',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  iconfontUrl: '',
  colorPrimary: '#1677FF',
  splitMenus: false
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/menu.js



var genProLayoutBaseMenuStyle = function genProLayoutBaseMenuStyle(token, mode) {
  var _token$layout, _token$layout2;
  var menuToken = mode.includes('horizontal') ? (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.header : (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.sider;
  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.componentCls), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    background: 'transparent',
    color: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorTextMenu,
    border: 'none'
  }, "".concat(token.componentCls, "-menu-item"), {
    transition: 'none !important'
  }), "".concat(token.componentCls, "-submenu-has-icon"), (0,defineProperty/* default */.Z)({}, "> ".concat(token.antCls, "-menu-sub"), {
    paddingInlineStart: 10
  })), "".concat(token.antCls, "-menu-title-content"), {
    width: '100%',
    height: '100%',
    display: 'inline-flex'
  }), "".concat(token.antCls, "-menu-title-content"), {
    '&:first-child': {
      width: '100%'
    }
  }), "".concat(token.componentCls, "-item-icon"), {
    display: 'flex',
    alignItems: 'center'
  }), "&&-collapsed", (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item, \\n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-item, \\n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title, \\n        ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title"), {
    paddingInline: '0 !important',
    marginBlock: '4px !important'
  }), "".concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title, \\n        ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title"), {
    backgroundColor: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorBgMenuItemSelected,
    borderRadius: token.borderRadiusLG
  }), "".concat(token.componentCls, "-group"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    paddingInline: 0
  }))), '&-item-title', (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: token.marginXS
  }, "".concat(token.componentCls, "-item-text"), {
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    wordBreak: 'break-all',
    whiteSpace: 'nowrap'
  }), '&-collapsed', (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    minWidth: 40,
    height: 40
  }, "".concat(token.componentCls, "-item-icon"), {
    height: '16px',
    width: '16px',
    lineHeight: '16px !important',
    '.anticon': {
      lineHeight: '16px !important',
      height: '16px'
    }
  }), "".concat(token.componentCls, "-item-text-has-icon"), {
    display: 'none !important'
  })), '&-collapsed-level-0', {
    flexDirection: 'column',
    justifyContent: 'center'
  }), "&".concat(token.componentCls, "-group-item-title"), {
    gap: token.marginXS,
    height: 18,
    overflow: 'hidden'
  }), "&".concat(token.componentCls, "-item-collapsed-show-title"), (0,defineProperty/* default */.Z)({
    lineHeight: '16px',
    gap: 0
  }, "&".concat(token.componentCls, "-item-title-collapsed"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    display: 'flex'
  }, "".concat(token.componentCls, "-item-icon"), {
    height: '16px',
    width: '16px',
    lineHeight: '16px !important',
    '.anticon': {
      lineHeight: '16px!important',
      height: '16px'
    }
  }), "".concat(token.componentCls, "-item-text"), {
    opacity: '1 !important',
    display: 'inline !important',
    textAlign: 'center',
    fontSize: 12,
    height: 12,
    lineHeight: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    margin: 0,
    padding: 0,
    marginBlockStart: 4
  })))), '&-group', (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    fontSize: 12,
    color: token.colorTextLabel,
    '.anticon': {
      marginInlineEnd: 8
    }
  })), '&-group-divider', {
    color: token.colorTextSecondary,
    fontSize: 12,
    lineHeight: 20
  })), mode.includes('horizontal') ? {} : (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-submenu").concat(token.antCls, "-menu-submenu-popup"), (0,defineProperty/* default */.Z)({}, "".concat(token.componentCls, "-item-title"), {
    alignItems: 'flex-start'
  }))), {}, (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-submenu-popup"), {
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)'
  }));
};
function menu_useStyle(prefixCls, mode) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutBaseMenu' + mode, function (token) {
    var proLayoutMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutBaseMenuStyle(proLayoutMenuToken, mode || 'inline')];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js
















// todo



var MenuItemTooltip = function MenuItemTooltip(props) {
  var _useState = (0,react.useState)(props.collapsed),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  (0,react.useEffect)(function () {
    setOpen(false);
    setTimeout(function () {
      setCollapsed(props.collapsed);
    }, 400);
  }, [props.collapsed]);
  if (props.disable) {
    return props.children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
    title: props.title,
    open: collapsed && props.collapsed ? open : false,
    placement: "right",
    onOpenChange: setOpen,
    children: props.children
  });
};
var IconFont = create({
  scriptUrl: defaultSettings.iconfontUrl
});

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,
var getIcon = function getIcon(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';
  var className = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof icon === 'string' && icon !== '') {
    if (isUrl_isUrl(icon) || isImg(icon)) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        width: 16,
        src: icon,
        alt: "icon",
        className: className
      }, icon);
    }
    if (icon.startsWith(iconPrefixes)) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(IconFont, {
        type: icon
      });
    }
  }
  return icon;
};
var getMenuTitleSymbol = function getMenuTitleSymbol(title) {
  if (title && typeof title === 'string') {
    var symbol = title.substring(0, 1).toUpperCase();
    return symbol;
  }
  return null;
};
var MenuUtil = /*#__PURE__*/(0,createClass/* default */.Z)(function MenuUtil(props) {
  var _this = this;
  (0,classCallCheck/* default */.Z)(this, MenuUtil);
  (0,defineProperty/* default */.Z)(this, "props", void 0);
  (0,defineProperty/* default */.Z)(this, "getNavMenuItems", function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var level = arguments.length > 1 ? arguments[1] : undefined;
    var noGroupLevel = arguments.length > 2 ? arguments[2] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, level, noGroupLevel);
    }).filter(function (item) {
      return item;
    }).flat(1);
  });
  /** Get SubMenu or Item */
  (0,defineProperty/* default */.Z)(this, "getSubMenuOrItem", function (item, level, noGroupLevel) {
    var _this$props = _this.props,
      subMenuItemRender = _this$props.subMenuItemRender,
      baseClassName = _this$props.baseClassName,
      prefixCls = _this$props.prefixCls,
      collapsed = _this$props.collapsed,
      menu = _this$props.menu,
      iconPrefixes = _this$props.iconPrefixes,
      layout = _this$props.layout;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' && layout !== 'top';
    var designToken = _this.props.token;
    var name = _this.getIntlName(item);
    var children = (item === null || item === void 0 ? void 0 : item.children) || (item === null || item === void 0 ? void 0 : item.routes);
    var menuType = isGroup && level === 0 ? 'group' : undefined;
    if (Array.isArray(children) && children.length > 0) {
      var _this$props2, _this$props3, _this$props4, _this$props5, _designToken$layout;
      /** Menu \u7B2C\u4E00\u7EA7\u53EF\u4EE5\u6709icon\uFF0C\u6216\u8005 isGroup \u65F6\u7B2C\u4E8C\u7EA7\u522B\u4E5F\u8981\u6709 */
      var shouldHasIcon = level === 0 || isGroup && level === 1;

      //  get defaultTitle by menuItemRender
      var iconDom = getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.hashId));
      /**
       * \u5982\u679C\u6CA1\u6709icon\u5728\u6536\u8D77\u7684\u65F6\u5019\u7528\u9996\u5B57\u6BCD\u4EE3\u66FF
       */
      var defaultIcon = collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null;
      var defaultTitle = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()("".concat(baseClassName, "-item-title"), (_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-group-item-title"), menuType === 'group'), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
        children: [menuType === 'group' && collapsed ? null : shouldHasIcon && iconDom ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "".concat(baseClassName, "-item-icon ").concat((_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.hashId).trim(),
          children: iconDom
        }) : defaultIcon, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: classnames_default()("".concat(baseClassName, "-item-text"), (_this$props5 = _this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-text-has-icon"), menuType !== 'group' && shouldHasIcon && (iconDom || defaultIcon))),
          children: name
        })]
      });

      // subMenu only title render
      var title = subMenuItemRender ? subMenuItemRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        isUrl: false
      }), defaultTitle, _this.props) : defaultTitle;

      // \u5982\u679C\u6536\u8D77\u6765\uFF0C\u6CA1\u6709\u5B50\u83DC\u5355\u4E86\uFF0C\u5C31\u4E0D\u9700\u8981\u5C55\u793A group\uFF0C\u6240\u4EE5 level \u4E0D\u589E\u52A0
      if (isGroup && level === 0 && _this.props.collapsed && !menu.collapsedShowGroupTitle) {
        return _this.getNavMenuItems(children, level + 1, level);
      }
      var childrenList = _this.getNavMenuItems(children, level + 1, isGroup && level === 0 && _this.props.collapsed ? level : level + 1);
      return [{
        type: menuType,
        key: item.key || item.path,
        label: title,
        onClick: isGroup ? undefined : item.onTitleClick,
        children: childrenList,
        className: classnames_default()((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-group"), menuType === 'group'), "".concat(baseClassName, "-submenu"), menuType !== 'group'), "".concat(baseClassName, "-submenu-has-icon"), menuType !== 'group' && shouldHasIcon && iconDom))
      }, isGroup && level === 0 ? {
        type: 'divider',
        prefixCls: prefixCls,
        className: "".concat(baseClassName, "-divider"),
        key: (item.key || item.path) + '-group-divider',
        style: {
          padding: 0,
          borderBlockEnd: 0,
          margin: _this.props.collapsed ? '4px' : '6px 16px',
          marginBlockStart: _this.props.collapsed ? 4 : 8,
          borderColor: designToken === null || designToken === void 0 || (_designToken$layout = designToken.layout) === null || _designToken$layout === void 0 || (_designToken$layout = _designToken$layout.sider) === null || _designToken$layout === void 0 ? void 0 : _designToken$layout.colorMenuItemDivider
        }
      } : undefined].filter(Boolean);
    }
    return {
      className: "".concat(baseClassName, "-menu-item"),
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick,
      // eslint-disable-next-line react/no-is-mounted
      label: _this.getMenuItemPath(item, level, noGroupLevel)
    };
  });
  (0,defineProperty/* default */.Z)(this, "getIntlName", function (item) {
    var name = item.name,
      locale = item.locale;
    var _this$props6 = _this.props,
      menu = _this$props6.menu,
      formatMessage = _this$props6.formatMessage;
    var finalName = name;
    if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      finalName = formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale,
        defaultMessage: name
      });
    }
    if (_this.props.menuTextRender) {
      return _this.props.menuTextRender(item, finalName, _this.props);
    }
    return finalName;
  });
  /**
   * \u5224\u65AD\u662F\u5426\u662Fhttp\u94FE\u63A5.\u8FD4\u56DE Link \u6216 a Judge whether it is http link.return a or Link
   *
   * @memberof SiderMenu
   */
  (0,defineProperty/* default */.Z)(this, "getMenuItemPath", function (item, level, noGroupLevel) {
    var _this$props9, _this$props10, _this$props11, _this$props12;
    var itemPath = _this.conversionPath(item.path || '/');
    var _this$props7 = _this.props,
      _this$props7$location = _this$props7.location,
      location = _this$props7$location === void 0 ? {
        pathname: '/'
      } : _this$props7$location,
      isMobile = _this$props7.isMobile,
      onCollapse = _this$props7.onCollapse,
      menuItemRender = _this$props7.menuItemRender,
      iconPrefixes = _this$props7.iconPrefixes;

    // if local is true formatMessage all name\u3002
    var menuItemTitle = _this.getIntlName(item);
    var _this$props8 = _this.props,
      baseClassName = _this$props8.baseClassName,
      menu = _this$props8.menu,
      collapsed = _this$props8.collapsed;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group';
    /** Menu \u7B2C\u4E00\u7EA7\u53EF\u4EE5\u6709icon\uFF0C\u6216\u8005 isGroup \u65F6\u7B2C\u4E8C\u7EA7\u522B\u4E5F\u8981\u6709 */
    var hasIcon = level === 0 || isGroup && level === 1;
    var icon = !hasIcon ? null : getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props9 = _this.props) === null || _this$props9 === void 0 ? void 0 : _this$props9.hashId));

    // \u5982\u679C\u6CA1\u6709 icon \u5728\u6536\u8D77\u7684\u65F6\u5019\u7528\u9996\u5B57\u6BCD\u4EE3\u66FF
    var defaultIcon = collapsed && hasIcon ? getMenuTitleSymbol(menuItemTitle) : null;
    var defaultItem = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("".concat(baseClassName, "-item-title"), (_this$props10 = _this.props) === null || _this$props10 === void 0 ? void 0 : _this$props10.hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(baseClassName, "-item-icon ").concat((_this$props11 = _this.props) === null || _this$props11 === void 0 ? void 0 : _this$props11.hashId).trim(),
        style: {
          display: defaultIcon === null && !icon ? 'none' : ''
        },
        children: icon || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "anticon",
          children: defaultIcon
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: classnames_default()("".concat(baseClassName, "-item-text"), (_this$props12 = _this.props) === null || _this$props12 === void 0 ? void 0 : _this$props12.hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
        children: menuItemTitle
      })]
    }, itemPath);
    var isHttpUrl = isUrl_isUrl(itemPath);

    // Is it a http link
    if (isHttpUrl) {
      var _this$props13, _this$props14, _this$props15;
      defaultItem = /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        onClick: function onClick() {
          var _window, _window$open;
          (_window = window) === null || _window === void 0 || (_window$open = _window.open) === null || _window$open === void 0 || _window$open.call(_window, itemPath, '_blank');
        },
        className: classnames_default()("".concat(baseClassName, "-item-title"), (_this$props13 = _this.props) === null || _this$props13 === void 0 ? void 0 : _this$props13.hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-link"), true), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "".concat(baseClassName, "-item-icon ").concat((_this$props14 = _this.props) === null || _this$props14 === void 0 ? void 0 : _this$props14.hashId).trim(),
          style: {
            display: defaultIcon === null && !icon ? 'none' : ''
          },
          children: icon || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "anticon",
            children: defaultIcon
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: classnames_default()("".concat(baseClassName, "-item-text"), (_this$props15 = _this.props) === null || _this$props15 === void 0 ? void 0 : _this$props15.hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
          children: menuItemTitle
        })]
      }, itemPath);
    }
    if (menuItemRender) {
      var renderItemProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        },
        children: undefined
      });
      return level === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemTooltip, {
        collapsed: collapsed,
        title: menuItemTitle,
        disable: item.disabledTooltip,
        children: menuItemRender(renderItemProps, defaultItem, _this.props)
      }) : menuItemRender(renderItemProps, defaultItem, _this.props);
    }
    return level === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemTooltip, {
      collapsed: collapsed,
      title: menuItemTitle,
      disable: item.disabledTooltip,
      children: defaultItem
    }) : defaultItem;
  });
  (0,defineProperty/* default */.Z)(this, "conversionPath", function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return "/".concat(path || '').replace(/\\/+/g, '/');
  });
  this.props = props;
});
/**
 * \u751F\u6210openKeys \u7684\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u8BBE\u7F6E\u4E86openKeys \u5C31\u4F1A\u53D8\u6210\u53D7\u63A7\uFF0C\u6240\u4EE5\u9700\u8981\u4E00\u4E2A\u7A7A\u5BF9\u8C61
 *
 * @param BaseMenuProps
 */
var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
    collapsed = _ref.collapsed;
  var openKeysProps = {};
  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }
  return openKeysProps;
};
var BaseMenu = function BaseMenu(props) {
  var mode = props.mode,
    className = props.className,
    handleOpenChange = props.handleOpenChange,
    style = props.style,
    menuData = props.menuData,
    prefixCls = props.prefixCls,
    menu = props.menu,
    matchMenuKeys = props.matchMenuKeys,
    iconfontUrl = props.iconfontUrl,
    propsSelectedKeys = props.selectedKeys,
    onSelect = props.onSelect,
    menuRenderType = props.menuRenderType,
    propsOpenKeys = props.openKeys;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    dark = _useContext.dark,
    designToken = _useContext.token;
  var baseClassName = "".concat(prefixCls, "-base-menu-").concat(mode);
  // \u7528\u4E8E\u51CF\u5C11 defaultOpenKeys \u8BA1\u7B97\u7684\u7EC4\u4EF6
  var defaultOpenKeysRef = (0,react.useRef)([]);
  var _useMountMergeState = (0,useMergedState/* default */.Z)(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
    _useMountMergeState2 = (0,slicedToArray/* default */.Z)(_useMountMergeState, 2),
    defaultOpenAll = _useMountMergeState2[0],
    setDefaultOpenAll = _useMountMergeState2[1];
  var _useMountMergeState3 = (0,useMergedState/* default */.Z)(function () {
      if (menu !== null && menu !== void 0 && menu.defaultOpenAll) {
        return getOpenKeysFromMenuData(menuData) || [];
      }
      if (propsOpenKeys === false) {
        return false;
      }
      return [];
    }, {
      value: propsOpenKeys === false ? undefined : propsOpenKeys,
      onChange: handleOpenChange
    }),
    _useMountMergeState4 = (0,slicedToArray/* default */.Z)(_useMountMergeState3, 2),
    openKeys = _useMountMergeState4[0],
    setOpenKeys = _useMountMergeState4[1];
  var _useMountMergeState5 = (0,useMergedState/* default */.Z)([], {
      value: propsSelectedKeys,
      onChange: onSelect ? function (keys) {
        if (onSelect && keys) {
          onSelect(keys);
        }
      } : undefined
    }),
    _useMountMergeState6 = (0,slicedToArray/* default */.Z)(_useMountMergeState5, 2),
    selectedKeys = _useMountMergeState6[0],
    setSelectedKeys = _useMountMergeState6[1];
  (0,react.useEffect)(function () {
    if (menu !== null && menu !== void 0 && menu.defaultOpenAll || propsOpenKeys === false) {
      return;
    }
    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchMenuKeys.join('-')]);
  (0,react.useEffect)(function () {
    // reset IconFont
    if (iconfontUrl) {
      IconFont = create({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  (0,react.useEffect)(function () {
    // if pathname can't match, use the nearest parent's key
    if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
      setSelectedKeys(matchMenuKeys);
    }
    if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
      var newKeys = matchMenuKeys;
      // \u5982\u679C\u4E0D\u81EA\u52A8\u5173\u95ED\uFF0C\u6211\u9700\u8981\u628A openKeys \u653E\u8FDB\u53BB
      if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
        newKeys = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(matchMenuKeys), (0,toConsumableArray/* default */.Z)(openKeys || []))));
      }
      setOpenKeys(newKeys);
    } else if (menu !== null && menu !== void 0 && menu.ignoreFlatMenu && defaultOpenAll) {
      // \u5FFD\u7565\u7528\u6237\u624B\u52A8\u6298\u53E0\u8FC7\u7684\u83DC\u5355\u72B6\u6001\uFF0C\u6298\u53E0\u6309\u94AE\u5207\u6362\u4E4B\u540E\u4E5F\u53EF\u5B9E\u73B0\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u83DC\u5355
      setOpenKeys(getOpenKeysFromMenuData(menuData));
    } else {
      setDefaultOpenAll(false);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [matchMenuKeys.join('-')]);
  var openKeysProps = (0,react.useMemo)(function () {
    return getOpenKeysProps(openKeys, props);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [openKeys && openKeys.join(','), props.layout, props.collapsed]);
  var _useStyle = menu_useStyle(baseClassName, mode),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var menuUtils = (0,react.useMemo)(function () {
    return new MenuUtil((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      token: designToken,
      menuRenderType: menuRenderType,
      baseClassName: baseClassName,
      hashId: hashId
    }));
  }, [props, designToken, menuRenderType, baseClassName, hashId]);
  if (menu !== null && menu !== void 0 && menu.loading) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: mode !== null && mode !== void 0 && mode.includes('inline') ? {
        padding: 24
      } : {
        marginBlockStart: 16
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        active: true,
        title: false,
        paragraph: {
          rows: mode !== null && mode !== void 0 && mode.includes('inline') ? 6 : 1
        }
      })
    });
  }

  // \u8FD9\u6B21 openKeys === false \u7684\u65F6\u5019\u7684\u60C5\u51B5\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5E2E\u7528\u6237\u9009\u4E2D\u4E00\u6B21
  // \u7B2C\u4E8C\u6B64\u4E0D\u4F1A\u4F7F\u7528\uFF0C\u6240\u4EE5\u7528\u4E86 defaultOpenKeys
  // \u8FD9\u91CC\u8FD4\u56DE null\uFF0C\u662F\u4E3A\u4E86\u8BA9 defaultOpenKeys \u751F\u6548
  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }
  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;
  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/(0,react.createElement)(es_menu/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, openKeysProps), {}, {
    _internalDisableMenuItemTitleTooltip: true,
    key: "Menu",
    mode: mode,
    inlineIndent: 16,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: dark ? 'dark' : 'light',
    selectedKeys: selectedKeys,
    style: (0,objectSpread2/* default */.Z)({
      backgroundColor: 'transparent',
      border: 'none'
    }, style),
    className: classnames_default()(className, hashId, baseClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-horizontal"), mode === 'horizontal'), "".concat(baseClassName, "-collapsed"), props.collapsed)),
    items: menuUtils.getNavMenuItems(finallyData, 0, 0),
    onOpenChange: function onOpenChange(_openKeys) {
      if (!props.collapsed) {
        setOpenKeys(_openKeys);
      }
    }
  }, props.menuProps)));
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/stylish.js



function useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish,
    proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return (0,useStyle/* useStyle */.Xj)('ProLayoutSiderMenuStylish', function (token) {
    var siderMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    if (!stylish) return [];
    return [(0,defineProperty/* default */.Z)({}, "div".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)({}, "".concat(siderMenuToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(siderMenuToken)))];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js



var SiderMenu_excluded = ["title", "render"];












var _SafetyWarningProvider = /*#__PURE__*/react.memo(function (props) {
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: props.children
  });
});
var SiderMenu_Sider = es_layout.Sider,
  _Layout$_InternalSide = es_layout._InternalSiderContext,
  SiderContext = _Layout$_InternalSide === void 0 ? {
    Provider: _SafetyWarningProvider
  } : _Layout$_InternalSide;
/**
 * \u6E32\u67D3 title \u548C logo
 *
 * @param props
 * @param renderKey
 * @returns
 */
var renderLogoAndTitle = function renderLogoAndTitle(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
  var logo = props.logo,
    title = props.title,
    layout = props.layout;
  var renderFunction = props[renderKey];
  if (renderFunction === false) {
    return null;
  }
  var logoDom = defaultRenderLogo(logo);
  var titleDom = /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
    children: title !== null && title !== void 0 ? title : 'Ant Design Pro'
  });
  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }

  /**
   * \u6536\u8D77\u6765\u65F6\u5019\u76F4\u63A5\u4E0D\u663E\u793A
   */
  if (props.isMobile) {
    return null;
  }
  if (layout === 'mix' && renderKey === 'menuHeaderRender') return false;
  if (props.collapsed) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      children: logoDom
    }, "title");
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
    children: [logoDom, titleDom]
  }, "title");
};
var SiderMenu = function SiderMenu(props) {
  var _props$menu2;
  var collapsed = props.collapsed,
    originCollapsed = props.originCollapsed,
    fixSiderbar = props.fixSiderbar,
    menuFooterRender = props.menuFooterRender,
    _onCollapse = props.onCollapse,
    theme = props.theme,
    siderWidth = props.siderWidth,
    isMobile = props.isMobile,
    onMenuHeaderClick = props.onMenuHeaderClick,
    _props$breakpoint = props.breakpoint,
    breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint,
    style = props.style,
    layout = props.layout,
    _props$menuExtraRende = props.menuExtraRender,
    menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende,
    links = props.links,
    menuContentRender = props.menuContentRender,
    collapsedButtonRender = props.collapsedButtonRender,
    prefixCls = props.prefixCls,
    avatarProps = props.avatarProps,
    rightContentRender = props.rightContentRender,
    actionsRender = props.actionsRender,
    onOpenChange = props.onOpenChange,
    stylish = props.stylish,
    logoStyle = props.logoStyle;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    hashId = _useContext.hashId;
  var showSiderExtraDom = (0,react.useMemo)(function () {
    if (isMobile) return false;
    if (layout === 'mix') return false;
    return true;
  }, [isMobile, layout]);
  var baseClassName = "".concat(prefixCls, "-sider");

  // \u6536\u8D77\u7684\u5BBD\u5EA6
  var collapsedWidth = 64;

  // \u4E4B\u6240\u4EE5\u8FD9\u6837\u5199\u662F\u4E3A\u4E86\u63D0\u5347\u6837\u5F0F\u4F18\u5148\u7EA7\uFF0C\u4E0D\u7136\u4F1A\u88ABsider \u81EA\u5E26\u7684\u8986\u76D6\u6389
  var stylishClassName = useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    stylish: stylish,
    proLayoutCollapsedWidth: collapsedWidth
  });
  var siderClassName = classnames_default()("".concat(baseClassName), hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-fixed"), fixSiderbar), "".concat(baseClassName, "-fixed-mix"), layout === 'mix' && !isMobile && fixSiderbar), "".concat(baseClassName, "-collapsed"), props.collapsed), "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), "".concat(baseClassName, "-light"), theme !== 'dark'), "".concat(baseClassName, "-mix"), layout === 'mix' && !isMobile), "".concat(baseClassName, "-stylish"), !!stylish));
  var headerDom = renderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);
  var menuDom = (0,react.useMemo)(function () {
    return menuContentRender !== false && /*#__PURE__*/(0,react.createElement)(BaseMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      key: "base-menu",
      mode: collapsed && !isMobile ? 'vertical' : 'inline',
      handleOpenChange: onOpenChange,
      style: {
        width: '100%'
      },
      className: "".concat(baseClassName, "-menu ").concat(hashId).trim()
    }));
  }, [baseClassName, hashId, menuContentRender, onOpenChange, props]);
  var linksMenuItems = (links || []).map(function (node, index) {
    return {
      className: "".concat(baseClassName, "-link"),
      label: node,
      key: index
    };
  });
  var menuRenderDom = (0,react.useMemo)(function () {
    return menuContentRender ? menuContentRender(props, menuDom) : menuDom;
  }, [menuContentRender, menuDom, props]);
  var avatarDom = (0,react.useMemo)(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = (0,objectWithoutProperties/* default */.Z)(avatarProps, SiderMenu_excluded);
    var dom = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(baseClassName, "-actions-avatar"),
      children: [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.C, (0,objectSpread2/* default */.Z)({
        size: 28
      }, rest)) : null, avatarProps.title && !collapsed && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: title
      })]
    });
    if (render) {
      return render(avatarProps, dom, props);
    }
    return dom;
  }, [avatarProps, baseClassName, collapsed]);
  var actionsDom = (0,react.useMemo)(function () {
    if (!actionsRender) return null;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      align: "center",
      size: 4,
      direction: collapsed ? 'vertical' : 'horizontal',
      className: classnames_default()(["".concat(baseClassName, "-actions-list"), collapsed && "".concat(baseClassName, "-actions-list-collapsed"), hashId]),
      children: [actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(props)].flat(1).map(function (item, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(baseClassName, "-actions-list-item ").concat(hashId).trim(),
          children: item
        }, index);
      })
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [actionsRender, baseClassName, collapsed]);
  var appsDom = (0,react.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogoComponents, {
      onItemClick: props.itemClick,
      appListRender: props.appListRender,
      appList: props.appList,
      prefixCls: props.prefixCls
    });
  }, [props.appList, props.appListRender, props.prefixCls]);
  var collapsedDom = (0,react.useMemo)(function () {
    if (collapsedButtonRender === false) return null;
    var dom = /*#__PURE__*/(0,jsx_runtime.jsx)(CollapsedIcon, {
      isMobile: isMobile,
      collapsed: originCollapsed,
      className: "".concat(baseClassName, "-collapsed-button"),
      onClick: function onClick() {
        _onCollapse === null || _onCollapse === void 0 || _onCollapse(!originCollapsed);
      }
    });
    if (collapsedButtonRender) return collapsedButtonRender(collapsed, dom);
    return dom;
  }, [collapsedButtonRender, isMobile, originCollapsed, baseClassName, collapsed, _onCollapse]);

  /** \u64CD\u4F5C\u533A\u57DF\u7684dom */
  var actionAreaDom = (0,react.useMemo)(function () {
    if (!avatarDom && !actionsDom) return null;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("".concat(baseClassName, "-actions"), hashId, collapsed && "".concat(baseClassName, "-actions-collapsed")),
      children: [avatarDom, actionsDom]
    });
  }, [actionsDom, avatarDom, baseClassName, collapsed, hashId]);

  /* Using the useMemo hook to create a CSS class that will hide the menu when the menu is collapsed. */
  var hideMenuWhenCollapsedClassName = (0,react.useMemo)(function () {
    var _props$menu;
    // \u6536\u8D77\u65F6\u5B8C\u5168\u9690\u85CF\u83DC\u5355
    if (props !== null && props !== void 0 && (_props$menu = props.menu) !== null && _props$menu !== void 0 && _props$menu.hideMenuWhenCollapsed && collapsed) {
      return "".concat(baseClassName, "-hide-menu-collapsed");
    }
    return null;
  }, [baseClassName, collapsed, props === null || props === void 0 || (_props$menu2 = props.menu) === null || _props$menu2 === void 0 ? void 0 : _props$menu2.hideMenuWhenCollapsed]);
  var menuFooterDom = menuFooterRender && (menuFooterRender === null || menuFooterRender === void 0 ? void 0 : menuFooterRender(props));
  var menuDomItems = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [headerDom && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()([classnames_default()("".concat(baseClassName, "-logo"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-logo-collapsed"), collapsed))]),
      onClick: showSiderExtraDom ? onMenuHeaderClick : undefined,
      id: "logo",
      style: logoStyle,
      children: [headerDom, appsDom]
    }), extraDom && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()(["".concat(baseClassName, "-extra"), !headerDom && "".concat(baseClassName, "-extra-no-logo"), hashId]),
      children: extraDom
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden'
      },
      children: menuRenderDom
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(SiderContext.Provider, {
      value: {},
      children: [links ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "".concat(baseClassName, "-links ").concat(hashId).trim(),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_menu/* default */.Z, {
          inlineIndent: 16,
          className: "".concat(baseClassName, "-link-menu ").concat(hashId).trim(),
          selectedKeys: [],
          openKeys: [],
          theme: theme,
          mode: "inline",
          items: linksMenuItems
        })
      }) : null, showSiderExtraDom && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [actionAreaDom, !actionsDom && rightContentRender ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classnames_default()("".concat(baseClassName, "-actions"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-actions-collapsed"), collapsed)),
          children: rightContentRender === null || rightContentRender === void 0 ? void 0 : rightContentRender(props)
        }) : null]
      }), menuFooterDom && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classnames_default()(["".concat(baseClassName, "-footer"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-footer-collapsed"), collapsed)]),
        children: menuFooterDom
      })]
    })]
  });
  return stylishClassName.wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: (0,objectSpread2/* default */.Z)({
        width: collapsed ? collapsedWidth : siderWidth,
        overflow: 'hidden',
        flex: "0 0 ".concat(collapsed ? collapsedWidth : siderWidth, "px"),
        maxWidth: collapsed ? collapsedWidth : siderWidth,
        minWidth: collapsed ? collapsedWidth : siderWidth,
        transition: 'all 0.2s ease 0s'
      }, style)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(SiderMenu_Sider, {
      collapsible: true,
      trigger: null,
      collapsed: collapsed,
      breakpoint: breakpoint === false ? undefined : breakpoint,
      onCollapse: function onCollapse(collapse) {
        if (isMobile) return;
        _onCollapse === null || _onCollapse === void 0 || _onCollapse(collapse);
      },
      collapsedWidth: collapsedWidth,
      style: style,
      theme: theme,
      width: siderWidth,
      className: classnames_default()(siderClassName, hashId, hideMenuWhenCollapsedClassName),
      children: [hideMenuWhenCollapsedClassName ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "".concat(baseClassName, "-hide-when-collapsed ").concat(hashId).trim(),
        style: {
          height: '100%',
          width: '100%',
          opacity: hideMenuWhenCollapsedClassName ? 0 : 1
        },
        children: menuDomItems
      }) : menuDomItems, collapsedDom]
    })]
  }));
};

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/hooks/useDebounceFn/index.js
var useDebounceFn = __webpack_require__(10178);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 5 modules
var rc_resize_observer_es = __webpack_require__(9220);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/rightContentStyle.js



var genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    '&-header-actions': {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      '&-item': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: 0,
        paddingInline: 2,
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextRightActionsItem,
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: token.borderRadius,
        '> *': {
          paddingInline: 6,
          paddingBlock: 6,
          borderRadius: token.borderRadius,
          '&:hover': {
            backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgRightActionsItemHover
          }
        }
      },
      '&-avatar': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInlineStart: token.padding,
        paddingInlineEnd: token.padding,
        cursor: 'pointer',
        color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextRightActionsItem,
        '> div': {
          height: '44px',
          color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextRightActionsItem,
          paddingInline: 8,
          paddingBlock: 8,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '44px',
          borderRadius: token.borderRadius,
          '&:hover': {
            backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgRightActionsItemHover
          }
        }
      }
    }
  });
};
function rightContentStyle_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutRightContent', function (token) {
    var proToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genTopNavHeaderStyle(proToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/ActionsContent.js






var ActionsContent_excluded = ["rightContentRender", "avatarProps", "actionsRender", "headerContentRender"],
  _excluded2 = ["title", "render"];






/**
 * \u62BD\u79BB\u51FA\u6765\u662F\u4E3A\u4E86\u9632\u6B62 rightSize \u7ECF\u5E38\u6539\u53D8\u5BFC\u81F4\u83DC\u5355 render
 *
 * @param param0
 */



var ActionsContent = function ActionsContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
    avatarProps = _ref.avatarProps,
    actionsRender = _ref.actionsRender,
    headerContentRender = _ref.headerContentRender,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, ActionsContent_excluded);
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = "".concat(getPrefixCls(), "-pro-global-header");
  var _useStyle = rightContentStyle_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0,react.useState)('auto'),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    rightSize = _useState2[0],
    setRightSize = _useState2[1];
  var avatarDom = (0,react.useMemo)(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = (0,objectWithoutProperties/* default */.Z)(avatarProps, _excluded2);
    var domList = [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/(0,react.createElement)(avatar/* default */.C, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rest), {}, {
      size: 28,
      key: "avatar"
    })) : null, title ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      style: {
        marginInlineStart: 8
      },
      children: title
    }, "name") : undefined];
    if (render) {
      return render(avatarProps, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: domList
      }), props);
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: domList
    });
  }, [avatarProps]);
  var rightActionsRender = actionsRender || avatarDom ? function (restParams) {
    var doms = actionsRender && (actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(restParams));
    if (!doms && !avatarDom) return null;
    if (!Array.isArray(doms)) return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms, avatarDom && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
    return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms.filter(Boolean).map(function (dom, index) {
        var hideHover = false;
        // \u5982\u679C\u914D\u7F6E\u4E86 hideHover \u5C31\u4E0D\u5C55\u793A hover \u6548\u679C\u4E86
        if ( /*#__PURE__*/react.isValidElement(dom)) {
          var _dom$props;
          hideHover = !!(dom !== null && dom !== void 0 && (_dom$props = dom.props) !== null && _dom$props !== void 0 && _dom$props['aria-hidden']);
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classnames_default()("".concat(prefixCls, "-header-actions-item ").concat(hashId), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-header-actions-hover"), !hideHover)),
          children: dom
        }, index);
      }), avatarDom && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
  } : undefined;
  /** \u51CF\u5C11\u4E00\u4E0B\u6E32\u67D3\u7684\u6B21\u6570 */
  var setRightSizeDebounceFn = (0,useDebounceFn/* useDebounceFn */.D)( /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(width) {
      return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setRightSize(width);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 160);
  var contentRender = rightActionsRender || rightContentRender;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(prefixCls, "-right-content ").concat(hashId).trim(),
    style: {
      minWidth: rightSize,
      height: '100%'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        height: '100%'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rc_resize_observer_es/* default */.Z, {
        onResize: function onResize(_ref3) {
          var width = _ref3.width;
          setRightSizeDebounceFn.run(width);
        },
        children: contentRender ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'flex-end'
          },
          children: contentRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
            // \u6D4B\u8BD5\u4E13\u7528
            //@ts-ignore
            rightContentSize: rightSize
          }))
        }) : null
      })
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/TopNavHeader/style.js



var style_genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
  var _token$layout, _token$layout2;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    '.anticon': {
      color: 'inherit'
    },
    '&-main': {
      display: 'flex',
      height: '100%',
      paddingInlineStart: '16px',
      '&-left': (0,defineProperty/* default */.Z)({
        display: 'flex',
        alignItems: 'center'
      }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
        marginInlineEnd: 16,
        marginInlineStart: -8
      })
    },
    '&-wide': {
      maxWidth: 1152,
      margin: '0 auto'
    },
    '&-logo': {
      position: 'relative',
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      overflow: 'hidden',
      '> *:first-child': {
        display: 'flex',
        alignItems: 'center',
        minHeight: '22px',
        fontSize: '22px'
      },
      '> *:first-child > img': {
        display: 'inline-block',
        height: '32px',
        verticalAlign: 'middle'
      },
      '> *:first-child > h1': {
        display: 'inline-block',
        marginBlock: 0,
        marginInline: 0,
        lineHeight: '24px',
        marginInlineStart: 6,
        fontWeight: '600',
        fontSize: '16px',
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorHeaderTitle,
        verticalAlign: 'top'
      }
    },
    '&-menu': {
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 6,
      paddingBlock: 6,
      lineHeight: "".concat(Math.max((((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56) - 12, 40), "px")
    }
  });
};
function TopNavHeader_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutTopNavHeader', function (token) {
    var topNavHeaderToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [style_genTopNavHeaderStyle(topNavHeaderToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js














var TopNavHeader = function TopNavHeader(props) {
  var _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19;
  var ref = (0,react.useRef)(null);
  var onMenuHeaderClick = props.onMenuHeaderClick,
    contentWidth = props.contentWidth,
    rightContentRender = props.rightContentRender,
    propsClassName = props.className,
    style = props.style,
    headerContentRender = props.headerContentRender,
    layout = props.layout,
    actionsRender = props.actionsRender;
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = (0,react.useContext)(es/* ProProvider */.L_),
    dark = _useContext2.dark;
  var prefixCls = "".concat(props.prefixCls || getPrefixCls('pro'), "-top-nav-header");
  var _useStyle = TopNavHeader_style_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var renderKey = undefined;
  if (props.menuHeaderRender !== undefined) {
    renderKey = 'menuHeaderRender';
  } else if (layout === 'mix' || layout === 'top') {
    renderKey = 'headerTitleRender';
  }
  var headerDom = renderLogoAndTitle((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    collapsed: false
  }), renderKey);
  var _useContext3 = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext3.token;
  var contentDom = (0,react.useMemo)(function () {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _props$menuProps;
    var defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP // @ts-ignore
    , {
      theme: {
        hashed: (0,es/* isNeedOpenHash */.nu)(),
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent'
          },
          Menu: (0,objectSpread2/* default */.Z)({}, coverToNewToken({
            colorItemBg: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgHeader) || 'transparent',
            colorSubItemBg: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgHeader) || 'transparent',
            radiusItem: token.borderRadius,
            colorItemBgSelected: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            itemHoverBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            colorItemBgSelectedHorizontal: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            colorActiveBarWidth: 0,
            colorActiveBarHeight: 0,
            colorActiveBarBorderSize: 0,
            colorItemText: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.header) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
            colorItemTextHoverHorizontal: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.header) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive) || (token === null || token === void 0 ? void 0 : token.colorText),
            colorItemTextSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenuSelected) || (token === null || token === void 0 ? void 0 : token.colorTextBase),
            horizontalItemBorderRadius: 4,
            colorItemTextHover: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.header) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
            horizontalItemHoverBg: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.header) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
            colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
            popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
            subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
            darkSubMenuItemBg: 'transparent',
            darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
          }))
        },
        token: {
          colorBgElevated: ((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorBgHeader) || 'transparent'
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(BaseMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        theme: dark ? 'dark' : 'light'
      }, props), {}, {
        className: "".concat(prefixCls, "-base-menu ").concat(hashId).trim()
      }, props.menuProps), {}, {
        style: (0,objectSpread2/* default */.Z)({
          width: '100%'
        }, (_props$menuProps = props.menuProps) === null || _props$menuProps === void 0 ? void 0 : _props$menuProps.style),
        collapsed: false,
        menuRenderType: "header",
        mode: "horizontal"
      }))
    });
    if (headerContentRender) {
      return headerContentRender(props, defaultDom);
    }
    return defaultDom;
  }, [(_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.header) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorBgHeader, (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.header) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorBgMenuItemSelected, (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorBgMenuItemHover, (_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorTextMenu, (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorTextMenuActive, (_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, (_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorBgMenuElevated, token.borderRadius, token === null || token === void 0 ? void 0 : token.colorBgTextHover, token === null || token === void 0 ? void 0 : token.colorTextSecondary, token === null || token === void 0 ? void 0 : token.colorText, token === null || token === void 0 ? void 0 : token.colorTextBase, token.colorBgElevated, dark, props, prefixCls, hashId, headerContentRender]);
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()(prefixCls, hashId, propsClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-light"), true)),
    style: style,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: ref,
      className: classnames_default()("".concat(prefixCls, "-main"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-wide"), contentWidth === 'Fixed' && layout === 'top')),
      children: [headerDom && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()("".concat(prefixCls, "-main-left ").concat(hashId)),
        onClick: onMenuHeaderClick,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogoComponents, (0,objectSpread2/* default */.Z)({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefixCls, "-logo ").concat(hashId).trim(),
          id: "logo",
          children: headerDom
        }, "logo")]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          flex: 1
        },
        className: "".concat(prefixCls, "-menu ").concat(hashId).trim(),
        children: contentDom
      }), (rightContentRender || actionsRender || props.avatarProps) && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionsContent, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        rightContentRender: rightContentRender
      }, props), {}, {
        prefixCls: prefixCls
      }))]
    })
  }));
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/style.js



var genGlobalHeaderStyle = function genGlobalHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    position: 'relative',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    marginBlock: 0,
    marginInline: 16,
    height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
    boxSizing: 'border-box',
    '> a': {
      height: '100%'
    }
  }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
    marginInlineEnd: 16
  }), '&-collapsed-button', {
    minHeight: '22px',
    color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorHeaderTitle,
    fontSize: '18px',
    marginInlineEnd: '16px'
  }), '&-logo', {
    position: 'relative',
    marginInlineEnd: '16px',
    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      minHeight: '22px',
      fontSize: '20px'
    },
    img: {
      height: '28px'
    },
    h1: {
      height: '32px',
      marginBlock: 0,
      marginInline: 0,
      marginInlineStart: 8,
      fontWeight: '600',
      color: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorHeaderTitle) || token.colorTextHeading,
      fontSize: '18px',
      lineHeight: '32px'
    },
    '&-mix': {
      display: 'flex',
      alignItems: 'center'
    }
  }), '&-logo-mobile', {
    minWidth: '24px',
    marginInlineEnd: 0
  }));
};
function GlobalHeader_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutGlobalHeader', function (token) {
    var GlobalHeaderToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genGlobalHeaderStyle(GlobalHeaderToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js















var GlobalHeader_renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }
  return logoDom;
};
var GlobalHeader = function GlobalHeader(props) {
  var isMobile = props.isMobile,
    logo = props.logo,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    rightContentRender = props.rightContentRender,
    menuHeaderRender = props.menuHeaderRender,
    onMenuHeaderClick = props.onMenuHeaderClick,
    propClassName = props.className,
    style = props.style,
    layout = props.layout,
    children = props.children,
    splitMenus = props.splitMenus,
    menuData = props.menuData,
    prefixCls = props.prefixCls;
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var baseClassName = "".concat(prefixCls || getPrefixCls('pro'), "-global-header");
  var _useStyle = GlobalHeader_style_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = classnames_default()(propClassName, baseClassName, hashId);
  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        children: undefined,
        routes: undefined
      });
    });
    var clearMenuData = clearMenuItem(noChildrenMenuData);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TopNavHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      mode: "horizontal"
    }, props), {}, {
      splitMenus: false,
      menuData: clearMenuData
    }));
  }
  var logoClassNames = classnames_default()("".concat(baseClassName, "-logo"), hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-logo-rtl"), direction === 'rtl'), "".concat(baseClassName, "-logo-mix"), layout === 'mix'), "".concat(baseClassName, "-logo-mobile"), isMobile));
  var logoDom = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: logoClassNames,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      children: defaultRenderLogo(logo)
    })
  }, "logo");
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    style: (0,objectSpread2/* default */.Z)({}, style),
    children: [isMobile && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "".concat(baseClassName, "-collapsed-button ").concat(hashId).trim(),
      onClick: function onClick() {
        onCollapse === null || onCollapse === void 0 || onCollapse(!collapsed);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_MenuOutlined, {})
    }), isMobile && GlobalHeader_renderLogo(menuHeaderRender, logoDom), layout === 'mix' && !isMobile && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogoComponents, (0,objectSpread2/* default */.Z)({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: logoClassNames,
        onClick: onMenuHeaderClick,
        children: renderLogoAndTitle((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
          collapsed: false
        }), 'headerTitleRender')
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        flex: 1
      },
      children: children
    }), (rightContentRender || props.actionsRender || props.avatarProps) && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionsContent, (0,objectSpread2/* default */.Z)({
      rightContentRender: rightContentRender
    }, props))]
  }));
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/Header/style/header.js



var genProLayoutHeaderStyle = function genProLayoutHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4;
  return (0,defineProperty/* default */.Z)({}, "".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-layout-header").concat(token.componentCls), {
    height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
    lineHeight: "".concat(((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56, "px"),
    // hitu \u7528\u4E86\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4E0D\u80FD\u5220\u9664\u54E6 @\u5357\u53D6
    zIndex: 19,
    width: '100%',
    paddingBlock: 0,
    paddingInline: 0,
    borderBlockEnd: "1px solid ".concat(token.colorSplit),
    backgroundColor: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgHeader) || 'rgba(255, 255, 255, 0.4)',
    WebkitBackdropFilter: 'blur(8px)',
    backdropFilter: 'blur(8px)',
    transition: 'background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    '&-fixed-header': {
      position: 'fixed',
      insetBlockStart: 0,
      width: '100%',
      zIndex: 100,
      insetInlineEnd: 0
    },
    '&-fixed-header-scroll': {
      backgroundColor: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgScrollHeader) || 'rgba(255, 255, 255, 0.8)'
    },
    '&-header-actions': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16',
      cursor: 'pointer',
      '& &-item': {
        paddingBlock: 0,
        paddingInline: 8,
        '&:hover': {
          color: token.colorText
        }
      }
    },
    '&-header-realDark': {
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)'
    },
    '&-header-actions-header-action': {
      transition: 'width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
    }
  }));
};
function header_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutHeader', function (token) {
    var ProLayoutHeaderToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutHeaderStyle(ProLayoutHeaderToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/Header/style/stylish.js



function stylish_useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish,
    proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return (0,useStyle/* useStyle */.Xj)('ProLayoutHeaderStylish', function (token) {
    var stylishToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    if (!stylish) return [];
    return [(0,defineProperty/* default */.Z)({}, "div".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)({}, "".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken)))];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/Header/index.js















var Header_Header = es_layout.Header;
var DefaultHeader = function DefaultHeader(props) {
  var _token$layout2, _token$layout3, _token$layout4;
  var isMobile = props.isMobile,
    fixedHeader = props.fixedHeader,
    propsClassName = props.className,
    style = props.style,
    collapsed = props.collapsed,
    prefixCls = props.prefixCls,
    onCollapse = props.onCollapse,
    layout = props.layout,
    headerRender = props.headerRender,
    headerContentRender = props.headerContentRender;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext.token;
  var context = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext);
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    isFixedHeaderScroll = _useState2[0],
    setIsFixedHeaderScroll = _useState2[1];
  var needFixedHeader = fixedHeader || layout === 'mix';
  var renderContent = (0,react.useCallback)(function () {
    var isTop = layout === 'top';
    var clearMenuData = clearMenuItem(props.menuData || []);
    var defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      onCollapse: onCollapse
    }, props), {}, {
      menuData: clearMenuData,
      children: headerContentRender && headerContentRender(props, null)
    }));
    if (isTop && !isMobile) {
      defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(TopNavHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        mode: "horizontal",
        onCollapse: onCollapse
      }, props), {}, {
        menuData: clearMenuData
      }));
    }
    if (headerRender && typeof headerRender === 'function') {
      return headerRender(props, defaultDom);
    }
    return defaultDom;
  }, [headerContentRender, headerRender, isMobile, layout, onCollapse, props]);
  (0,react.useEffect)(function () {
    var _context$getTargetCon;
    var dom = (context === null || context === void 0 || (_context$getTargetCon = context.getTargetContainer) === null || _context$getTargetCon === void 0 ? void 0 : _context$getTargetCon.call(context)) || document.body;
    var isFixedHeaderFn = function isFixedHeaderFn() {
      var _token$layout;
      var scrollTop = dom.scrollTop;
      if (scrollTop > (((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56) && !isFixedHeaderScroll) {
        setIsFixedHeaderScroll(true);
        return true;
      }
      if (isFixedHeaderScroll) {
        setIsFixedHeaderScroll(false);
      }
      return false;
    };
    if (!needFixedHeader) return;
    if (typeof window === 'undefined') return;
    dom.addEventListener('scroll', isFixedHeaderFn, {
      passive: true
    });
    return function () {
      dom.removeEventListener('scroll', isFixedHeaderFn);
    };
  }, [(_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader, needFixedHeader, isFixedHeaderScroll]);
  var isTop = layout === 'top';
  var baseClassName = "".concat(prefixCls, "-layout-header");
  var _useStyle = header_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var stylish = stylish_useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    proLayoutCollapsedWidth: 64,
    stylish: props.stylish
  });
  var className = classnames_default()(propsClassName, hashId, baseClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-fixed-header"), needFixedHeader), "".concat(baseClassName, "-fixed-header-scroll"), isFixedHeaderScroll), "".concat(baseClassName, "-mix"), layout === 'mix'), "".concat(baseClassName, "-fixed-header-action"), !collapsed), "".concat(baseClassName, "-top-menu"), isTop), "".concat(baseClassName, "-header"), true), "".concat(baseClassName, "-stylish"), !!props.stylish));
  if (layout === 'side' && !isMobile) return null;
  return stylish.wrapSSR(wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(config_provider/* default */.ZP
    // @ts-ignore
    , {
      theme: {
        hashed: (0,es/* isNeedOpenHash */.nu)(),
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent'
          }
        }
      },
      children: [needFixedHeader && /*#__PURE__*/(0,jsx_runtime.jsx)(Header_Header, {
        style: (0,objectSpread2/* default */.Z)({
          height: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.heightLayoutHeader) || 56,
          lineHeight: "".concat(((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.heightLayoutHeader) || 56, "px"),
          backgroundColor: 'transparent',
          zIndex: 19
        }, style)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Header_Header, {
        className: className,
        style: style,
        children: renderContent()
      })]
    })
  })));
};

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js
var PageLoading = __webpack_require__(83832);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(85265);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/index.js




var proLayoutTitleHide = new cssinjs_es/* Keyframes */.E4('antBadgeLoadingCircle', {
  '0%': {
    display: 'none',
    opacity: 0,
    overflow: 'hidden'
  },
  '80%': {
    overflow: 'hidden'
  },
  '100%': {
    display: 'unset',
    opacity: 1
  }
});
var style_genSiderMenuStyle = function genSiderMenuStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
  return (0,defineProperty/* default */.Z)({}, "".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-layout-sider").concat(token.componentCls), {
    background: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground) || 'transparent'
  }), token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    position: 'relative',
    boxSizing: 'border-box',
    '&-menu': {
      position: 'relative',
      zIndex: 10,
      minHeight: '100%'
    }
  }, "& ".concat(token.antCls, "-layout-sider-children"), {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingInline: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.paddingInlineLayoutMenu,
    paddingBlock: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.paddingBlockLayoutMenu,
    borderInlineEnd: "1px solid ".concat(token.colorSplit),
    marginInlineEnd: -1
  }), "".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    fontSize: token.fontSizeSM,
    paddingBottom: 4
  }), "".concat(token.antCls, "-menu-item:not(").concat(token.antCls, "-menu-item-selected):hover"), {
    color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuItemHover
  })), '&-logo', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: 12,
    paddingBlock: 16,
    color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenu,
    cursor: 'pointer',
    borderBlockEnd: "1px solid ".concat((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorMenuItemDivider),
    '> a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 22,
      fontSize: 22,
      '> img': {
        display: 'inline-block',
        height: 22,
        verticalAlign: 'middle'
      },
      '> h1': {
        display: 'inline-block',
        height: 22,
        marginBlock: 0,
        marginInlineEnd: 0,
        marginInlineStart: 6,
        color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuTitle,
        animationName: proLayoutTitleHide,
        animationDuration: '.4s',
        animationTimingFunction: 'ease',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '22px',
        verticalAlign: 'middle'
      }
    },
    '&-collapsed': (0,defineProperty/* default */.Z)({
      flexDirection: 'column-reverse',
      margin: 0,
      padding: 12
    }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
      marginBlockEnd: 8,
      fontSize: 16,
      transition: 'font-size 0.2s ease-in-out,color 0.2s ease-in-out'
    })
  }), '&-actions', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBlock: 4,
    marginInline: 0,
    color: (_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenu,
    '&-collapsed': {
      flexDirection: 'column-reverse',
      paddingBlock: 0,
      paddingInline: 8,
      fontSize: 16,
      transition: 'font-size 0.3s ease-in-out'
    },
    '&-list': {
      color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuSecondary,
      '&-collapsed': {
        marginBlockEnd: 8,
        animationName: 'none'
      },
      '&-item': {
        paddingInline: 6,
        paddingBlock: 6,
        lineHeight: '16px',
        fontSize: 16,
        cursor: 'pointer',
        borderRadius: token.borderRadius,
        '&:hover': {
          background: token.colorBgTextHover
        }
      }
    },
    '&-avatar': {
      fontSize: 14,
      paddingInline: 8,
      paddingBlock: 8,
      display: 'flex',
      alignItems: 'center',
      gap: token.marginXS,
      borderRadius: token.borderRadius,
      '& *': {
        cursor: 'pointer'
      },
      '&:hover': {
        background: token.colorBgTextHover
      }
    }
  }), '&-hide-menu-collapsed', {
    insetInlineStart: "-".concat(token.proLayoutCollapsedWidth - 12, "px"),
    position: 'absolute'
  }), '&-extra', {
    marginBlockEnd: 16,
    marginBlock: 0,
    marginInline: 16,
    '&-no-logo': {
      marginBlockStart: 16
    }
  }), '&-links', {
    width: '100%',
    ul: {
      height: 'auto'
    }
  }), '&-link-menu', {
    border: 'none',
    boxShadow: 'none',
    background: 'transparent'
  }), '&-footer', {
    color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSecondary,
    paddingBlockEnd: 16,
    fontSize: token.fontSize,
    animationName: proLayoutTitleHide,
    animationDuration: '.4s',
    animationTimingFunction: 'ease'
  })), "".concat(token.componentCls).concat(token.componentCls, "-fixed"), {
    position: 'fixed',
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: '100',
    height: '100%',
    '&-mix': {
      height: "calc(100% - ".concat(((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.heightLayoutHeader) || 56, "px)"),
      insetBlockStart: "".concat(((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.heightLayoutHeader) || 56, "px")
    }
  }));
};
function SiderMenu_style_useStyle(prefixCls, _ref2) {
  var proLayoutCollapsedWidth = _ref2.proLayoutCollapsedWidth;
  return (0,useStyle/* useStyle */.Xj)('ProLayoutSiderMenu', function (token) {
    var siderMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    return [style_genSiderMenuStyle(siderMenuToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js










var SiderMenuWrapper = function SiderMenuWrapper(props) {
  var _token$layout;
  var isMobile = props.isMobile,
    siderWidth = props.siderWidth,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    style = props.style,
    className = props.className,
    hide = props.hide,
    prefixCls = props.prefixCls,
    getContainer = props.getContainer;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext.token;
  (0,react.useEffect)(function () {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
  var omitProps = (0,omit_js_es/* default */.Z)(props, ['className', 'style']);
  var _React$useContext = react.useContext(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    direction = _React$useContext.direction;
  var _useStyle = SiderMenu_style_useStyle("".concat(prefixCls, "-sider"), {
      proLayoutCollapsedWidth: 64
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var siderClassName = classnames_default()("".concat(prefixCls, "-sider"), className, hashId);
  if (hide) {
    return null;
  }
  var drawerOpenProps = (0,openVisibleCompatible/* openVisibleCompatible */.X)(!collapsed, function () {
    return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
  });
  return wrapSSR(isMobile ? /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    placement: direction === 'rtl' ? 'right' : 'left',
    className: classnames_default()("".concat(prefixCls, "-drawer-sider"), className)
  }, drawerOpenProps), {}, {
    style: (0,objectSpread2/* default */.Z)({
      padding: 0,
      height: '100vh'
    }, style),
    onClose: function onClose() {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    },
    maskClosable: true,
    closable: false,
    getContainer: getContainer || false,
    width: siderWidth,
    styles: {
      body: {
        height: '100vh',
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, omitProps), {}, {
      isMobile: true,
      className: siderClassName,
      collapsed: isMobile ? false : collapsed,
      splitMenus: false,
      originCollapsed: collapsed
    }))
  })) : /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    className: siderClassName,
    originCollapsed: collapsed
  }, omitProps), {}, {
    style: style
  })));
};

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/context/RouteContext.js
var RouteContext = __webpack_require__(76509);
// EXTERNAL MODULE: ./node_modules/path-to-regexp/dist/index.js
var dist = __webpack_require__(16305);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/getPageTitle.js


var matchParamsPath = function matchParamsPath(pathname, breadcrumb, breadcrumbMap) {
  // Internal logic use breadcrumbMap to ensure the order
  // \u5185\u90E8\u903B\u8F91\u4F7F\u7528 breadcrumbMap \u6765\u786E\u4FDD\u67E5\u8BE2\u987A\u5E8F
  if (breadcrumbMap) {
    var pathKey = (0,toConsumableArray/* default */.Z)(breadcrumbMap.keys()).find(function (key) {
      try {
        if (key.startsWith('http')) {
          return false;
        }
        return (0,dist.match)(key)(pathname);
      } catch (error) {
        console.log('key', key, error);
        return false;
      }
    });
    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  }

  // External uses use breadcrumb
  // \u5916\u90E8\u7528\u6237\u4F7F\u7528 breadcrumb \u53C2\u6570
  if (breadcrumb) {
    var _pathKey = Object.keys(breadcrumb).find(function (key) {
      try {
        if (key !== null && key !== void 0 && key.startsWith('http')) {
          return false;
        }
        return (0,dist.match)(key)(pathname);
      } catch (error) {
        console.log('key', key, error);
        return false;
      }
    });
    if (_pathKey) {
      return breadcrumb[_pathKey];
    }
  }
  return {
    path: ''
  };
};
/**
 * \u83B7\u53D6\u5173\u4E8E pageTitle \u7684\u6240\u6709\u4FE1\u606F\u65B9\u4FBF\u5305\u88C5
 *
 * @param props
 * @param ignoreTitle
 */
var getPageTitleInfo = function getPageTitleInfo(props, ignoreTitle) {
  var _props$pathname = props.pathname,
    pathname = _props$pathname === void 0 ? '/' : _props$pathname,
    breadcrumb = props.breadcrumb,
    breadcrumbMap = props.breadcrumbMap,
    formatMessage = props.formatMessage,
    title = props.title,
    _props$menu = props.menu,
    menu = _props$menu === void 0 ? {
      locale: false
    } : _props$menu;
  var pageTitle = ignoreTitle ? '' : title || '';
  var currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle
    };
  }
  var pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name
    });
  }
  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle
    };
  }
  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName: pageName
    };
  }
  return {
    title: "".concat(pageName, " - ").concat(title),
    id: currRouterData.locale || '',
    pageName: pageName
  };
};
var getPageTitle = function getPageTitle(props, ignoreTitle) {
  return getPageTitleInfo(props, ignoreTitle).title;
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js
/* harmony default export */ var settingDrawer = ({
  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.dark': 'Dark Menu style',
  'app.setting.pagestyle.light': 'Light Menu style',
  'app.setting.pagestyle.realdark': 'Dark style (Beta)',
  'app.setting.content-width': 'Content Width',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.techBlue': 'Tech Blue (default)',
  'app.setting.themecolor.daybreak': 'Daybreak Blue',
  'app.setting.themecolor.geekblue': 'Geek Blue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.sidermenutype': 'SideMenu Type',
  'app.setting.sidermenutype-sub': 'Classic',
  'app.setting.sidermenutype-group': 'Grouping',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.regionalsettings': 'Regional Settings',
  'app.setting.regionalsettings.header': 'Header',
  'app.setting.regionalsettings.menu': 'Menu',
  'app.setting.regionalsettings.footer': 'Footer',
  'app.setting.regionalsettings.menuHeader': 'Menu Header',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.mixmenu': 'Mix Menu Layout',
  'app.setting.splitMenus': 'Split Menus',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
  'app.setting.hideheader': 'Hidden Header when scrolling',
  'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success\uFF0Cplease replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
});
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/en-US.js


/* harmony default export */ var en_US = ((0,objectSpread2/* default */.Z)({}, settingDrawer));
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js
/* harmony default export */ var it_IT_settingDrawer = ({
  'app.setting.pagestyle': 'Impostazioni di stile',
  'app.setting.pagestyle.dark': 'Tema scuro',
  'app.setting.pagestyle.light': 'Tema chiaro',
  'app.setting.content-width': 'Largezza contenuto',
  'app.setting.content-width.fixed': 'Fissa',
  'app.setting.content-width.fluid': 'Fluida',
  'app.setting.themecolor': 'Colore del tema',
  'app.setting.themecolor.dust': 'Rosso polvere',
  'app.setting.themecolor.volcano': 'Vulcano',
  'app.setting.themecolor.sunset': 'Arancione tramonto',
  'app.setting.themecolor.cyan': 'Ciano',
  'app.setting.themecolor.green': 'Verde polare',
  'app.setting.themecolor.techBlue': 'Tech Blu (default)',
  'app.setting.themecolor.daybreak': 'Blu cielo mattutino',
  'app.setting.themecolor.geekblue': 'Blu geek',
  'app.setting.themecolor.purple': 'Viola dorato',
  'app.setting.navigationmode': 'Modalit\xE0 di navigazione',
  'app.setting.sidemenu': 'Menu laterale',
  'app.setting.topmenu': 'Menu in testata',
  'app.setting.mixmenu': 'Menu misto',
  'app.setting.splitMenus': 'Menu divisi',
  'app.setting.fixedheader': 'Testata fissa',
  'app.setting.fixedsidebar': 'Menu laterale fisso',
  'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
  'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
  'app.setting.hideheader.hint': 'Solo se abilitato Nascondi testata durante lo scorrimento',
  'app.setting.othersettings': 'Altre impostazioni',
  'app.setting.weakmode': 'Inverti colori',
  'app.setting.copy': 'Copia impostazioni',
  'app.setting.loading': 'Carico tema...',
  'app.setting.copyinfo': 'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
  'app.setting.production.hint': 'Questo pannello \xE8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente'
});
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/it-IT.js


/* harmony default export */ var it_IT = ((0,objectSpread2/* default */.Z)({}, it_IT_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/ko-KR/settingDrawer.js
/* harmony default export */ var ko_KR_settingDrawer = ({
  'app.setting.pagestyle': '\uC2A4\uD0C0\uC77C \uC124\uC815',
  'app.setting.pagestyle.dark': '\uB2E4\uD06C \uBAA8\uB4DC',
  'app.setting.pagestyle.light': '\uB77C\uC774\uD2B8 \uBAA8\uB4DC',
  'app.setting.content-width': '\uCEE8\uD150\uCE20 \uB108\uBE44',
  'app.setting.content-width.fixed': '\uACE0\uC815',
  'app.setting.content-width.fluid': '\uD750\uB984',
  'app.setting.themecolor': '\uD14C\uB9C8 \uC0C9\uC0C1',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.techBlue': 'Tech Blu (default)',
  'app.setting.themecolor.daybreak': 'Daybreak Blue',
  'app.setting.themecolor.geekblue': 'Geek Blue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': '\uB124\uBE44\uAC8C\uC774\uC158 \uBAA8\uB4DC',
  'app.setting.regionalsettings': '\uC601\uC5ED\uBCC4 \uC124\uC815',
  'app.setting.regionalsettings.header': '\uD5E4\uB354',
  'app.setting.regionalsettings.menu': '\uBA54\uB274',
  'app.setting.regionalsettings.footer': '\uBC14\uB2E5\uAE00',
  'app.setting.regionalsettings.menuHeader': '\uBA54\uB274 \uD5E4\uB354',
  'app.setting.sidemenu': '\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58',
  'app.setting.topmenu': '\uBA54\uB274 \uC0C1\uB2E8 \uBC30\uCE58',
  'app.setting.mixmenu': '\uD63C\uD569\uD615 \uBC30\uCE58',
  'app.setting.splitMenus': '\uBA54\uB274 \uBD84\uB9AC',
  'app.setting.fixedheader': '\uD5E4\uB354 \uACE0\uC815',
  'app.setting.fixedsidebar': '\uC0AC\uC774\uB4DC\uBC14 \uACE0\uC815',
  'app.setting.fixedsidebar.hint': "'\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58'\uB97C \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
  'app.setting.hideheader': '\uC2A4\uD06C\uB864 \uC911 \uD5E4\uB354 \uAC10\uCD94\uAE30',
  'app.setting.hideheader.hint': "'\uD5E4\uB354 \uAC10\uCD94\uAE30 \uC635\uC158'\uC744 \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
  'app.setting.othersettings': '\uB2E4\uB978 \uC124\uC815',
  'app.setting.weakmode': '\uACE0\uB300\uBE44 \uBAA8\uB4DC',
  'app.setting.copy': '\uC124\uC815\uAC12 \uBCF5\uC0AC',
  'app.setting.loading': '\uD14C\uB9C8 \uB85C\uB529 \uC911',
  'app.setting.copyinfo': '\uBCF5\uC0AC \uC131\uACF5. src/models/settings.js\uC5D0 \uC788\uB294 defaultSettings\uB97C \uAD50\uCCB4\uD574 \uC8FC\uC138\uC694.',
  'app.setting.production.hint': '\uC124\uC815 \uD310\uB12C\uC740 \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C\uB9CC \uBCF4\uC5EC\uC9D1\uB2C8\uB2E4. \uC9C1\uC811 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uBC14\uB78D\uB2C8\uB2E4.'
});
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/ko-KR.js


/* harmony default export */ var ko_KR = ((0,objectSpread2/* default */.Z)({}, ko_KR_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js
/* harmony default export */ var zh_CN_settingDrawer = ({
  'app.setting.pagestyle': '\u6574\u4F53\u98CE\u683C\u8BBE\u7F6E',
  'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u5355\u98CE\u683C',
  'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u5355\u98CE\u683C',
  'app.setting.pagestyle.realdark': '\u6697\u8272\u98CE\u683C(\u5B9E\u9A8C\u529F\u80FD)',
  'app.setting.content-width': '\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6',
  'app.setting.content-width.fixed': '\u5B9A\u5BBD',
  'app.setting.content-width.fluid': '\u6D41\u5F0F',
  'app.setting.themecolor': '\u4E3B\u9898\u8272',
  'app.setting.themecolor.dust': '\u8584\u66AE',
  'app.setting.themecolor.volcano': '\u706B\u5C71',
  'app.setting.themecolor.sunset': '\u65E5\u66AE',
  'app.setting.themecolor.cyan': '\u660E\u9752',
  'app.setting.themecolor.green': '\u6781\u5149\u7EFF',
  'app.setting.themecolor.techBlue': '\u79D1\u6280\u84DD\uFF08\u9ED8\u8BA4\uFF09',
  'app.setting.themecolor.daybreak': '\u62C2\u6653',
  'app.setting.themecolor.geekblue': '\u6781\u5BA2\u84DD',
  'app.setting.themecolor.purple': '\u9171\u7D2B',
  'app.setting.navigationmode': '\u5BFC\u822A\u6A21\u5F0F',
  'app.setting.sidermenutype': '\u4FA7\u8FB9\u83DC\u5355\u7C7B\u578B',
  'app.setting.sidermenutype-sub': '\u7ECF\u5178\u6A21\u5F0F',
  'app.setting.sidermenutype-group': '\u5206\u7EC4\u6A21\u5F0F',
  'app.setting.regionalsettings': '\u5185\u5BB9\u533A\u57DF',
  'app.setting.regionalsettings.header': '\u9876\u680F',
  'app.setting.regionalsettings.menu': '\u83DC\u5355',
  'app.setting.regionalsettings.footer': '\u9875\u811A',
  'app.setting.regionalsettings.menuHeader': '\u83DC\u5355\u5934',
  'app.setting.sidemenu': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40',
  'app.setting.topmenu': '\u9876\u90E8\u83DC\u5355\u5E03\u5C40',
  'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u5355\u5E03\u5C40',
  'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
  'app.setting.fixedheader': '\u56FA\u5B9A Header',
  'app.setting.fixedsidebar': '\u56FA\u5B9A\u4FA7\u8FB9\u83DC\u5355',
  'app.setting.fixedsidebar.hint': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40\u65F6\u53EF\u914D\u7F6E',
  'app.setting.hideheader': '\u4E0B\u6ED1\u65F6\u9690\u85CF Header',
  'app.setting.hideheader.hint': '\u56FA\u5B9A Header \u65F6\u53EF\u914D\u7F6E',
  'app.setting.othersettings': '\u5176\u4ED6\u8BBE\u7F6E',
  'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
  'app.setting.copy': '\u62F7\u8D1D\u8BBE\u7F6E',
  'app.setting.loading': '\u6B63\u5728\u52A0\u8F7D\u4E3B\u9898',
  'app.setting.copyinfo': '\u62F7\u8D1D\u6210\u529F\uFF0C\u8BF7\u5230 src/defaultSettings.js \u4E2D\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E',
  'app.setting.production.hint': '\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6'
});
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-CN.js


/* harmony default export */ var zh_CN = ((0,objectSpread2/* default */.Z)({}, zh_CN_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js
/* harmony default export */ var zh_TW_settingDrawer = ({
  'app.setting.pagestyle': '\u6574\u9AD4\u98A8\u683C\u8A2D\u7F6E',
  'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u55AE\u98A8\u683C',
  'app.setting.pagestyle.realdark': '\u6697\u8272\u98A8\u683C(\u5B9E\u9A8C\u529F\u80FD)',
  'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u55AE\u98A8\u683C',
  'app.setting.content-width': '\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6',
  'app.setting.content-width.fixed': '\u5B9A\u5BEC',
  'app.setting.content-width.fluid': '\u6D41\u5F0F',
  'app.setting.themecolor': '\u4E3B\u984C\u8272',
  'app.setting.themecolor.dust': '\u8584\u66AE',
  'app.setting.themecolor.volcano': '\u706B\u5C71',
  'app.setting.themecolor.sunset': '\u65E5\u66AE',
  'app.setting.themecolor.cyan': '\u660E\u9752',
  'app.setting.themecolor.green': '\u6975\u5149\u7DA0',
  'app.setting.themecolor.techBlue': '\u79D1\u6280\u84DD\uFF08\u9ED8\u8A8D\uFF09',
  'app.setting.themecolor.daybreak': '\u62C2\u66C9\u85CD',
  'app.setting.themecolor.geekblue': '\u6975\u5BA2\u85CD',
  'app.setting.themecolor.purple': '\u91AC\u7D2B',
  'app.setting.navigationmode': '\u5C0E\u822A\u6A21\u5F0F',
  'app.setting.sidemenu': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40',
  'app.setting.topmenu': '\u9802\u90E8\u83DC\u55AE\u5E03\u5C40',
  'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u55AE\u5E03\u5C40',
  'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
  'app.setting.fixedheader': '\u56FA\u5B9A Header',
  'app.setting.fixedsidebar': '\u56FA\u5B9A\u5074\u908A\u83DC\u55AE',
  'app.setting.fixedsidebar.hint': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40\u6642\u53EF\u914D\u7F6E',
  'app.setting.hideheader': '\u4E0B\u6ED1\u6642\u96B1\u85CF Header',
  'app.setting.hideheader.hint': '\u56FA\u5B9A Header \u6642\u53EF\u914D\u7F6E',
  'app.setting.othersettings': '\u5176\u4ED6\u8A2D\u7F6E',
  'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
  'app.setting.copy': '\u62F7\u8C9D\u8A2D\u7F6E',
  'app.setting.loading': '\u6B63\u5728\u52A0\u8F09\u4E3B\u984C',
  'app.setting.copyinfo': '\u62F7\u8C9D\u6210\u529F\uFF0C\u8ACB\u5230 src/defaultSettings.js \u4E2D\u66FF\u63DB\u9ED8\u8A8D\u914D\u7F6E',
  'app.setting.production.hint': '\u914D\u7F6E\u6B04\u53EA\u5728\u958B\u767C\u74B0\u5883\u7528\u65BC\u9810\u89BD\uFF0C\u751F\u7522\u74B0\u5883\u4E0D\u6703\u5C55\u73FE\uFF0C\u8ACB\u62F7\u8C9D\u5F8C\u624B\u52D5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6'
});
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-TW.js


/* harmony default export */ var zh_TW = ((0,objectSpread2/* default */.Z)({}, zh_TW_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/index.js






var locales = {
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'en-US': en_US,
  'it-IT': it_IT,
  'ko-KR': ko_KR
};
var getLanguage = function getLanguage() {
  // support ssr
  if (!(0,isBrowser/* isBrowser */.j)()) return 'zh-CN';
  var lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};
var gLocaleObject = function gLocaleObject() {
  var gLocale = getLanguage();
  return locales[gLocale] || locales['zh-CN'];
};
// EXTERNAL MODULE: ./node_modules/antd/es/version/index.js + 1 modules
var version = __webpack_require__(67159);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/style/index.js
/* provided dependency */ var process = __webpack_require__(34155);




var getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return version/* default */.Z;
  return ((_process = process) === null || process === void 0 || (process = ({"NODE_ENV":"production","PUBLIC_PATH":"./"})) === null || process === void 0 ? void 0 : process.ANTD_VERSION) || version/* default */.Z;
};

/**
 * \u4E3B\u8981\u533A\u522B\uFF1A
 * \u9700\u8981\u624B\u52A8\u5F15\u5165 import 'antd/dist/antd.css';
 * \u9700\u8981\u91CD\u7F6E menu \u7684\u6837\u5F0F
 * @param token
 * @returns
 */
var compatibleStyle = function compatibleStyle(token) {
  var _getVersion, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19, _$concat6, _token$layout20, _token$layout21, _token$layout22, _token$layout23, _token$layout24, _token$layout25, _token$layout26, _token$layout27, _token$layout28, _token$layout29, _token$layout30;
  if ((_getVersion = getVersion()) !== null && _getVersion !== void 0 && _getVersion.startsWith('5')) {
    return {};
  }
  return (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    width: '100%',
    height: '100%'
  }, "".concat(token.proComponentsCls, "-base-menu"), (_$concat6 = {
    color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextMenu
  }, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)(_$concat6, "".concat(token.antCls, "-menu-sub"), {
    backgroundColor: 'transparent!important',
    color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextMenu
  }), "& ".concat(token.antCls, "-layout"), {
    backgroundColor: 'transparent',
    width: '100%'
  }), "".concat(token.antCls, "-menu-submenu-expand-icon, ").concat(token.antCls, "-menu-submenu-arrow"), {
    color: 'inherit'
  }), "&".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu
  }, "".concat(token.antCls, "-menu-item"), {
    '*': {
      transition: 'none !important'
    }
  }), "".concat(token.antCls, "-menu-item a"), {
    color: 'inherit'
  })), "&".concat(token.antCls, "-menu-inline"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-selected::after,").concat(token.antCls, "-menu-item-selected::after"), {
    display: 'none'
  })), "".concat(token.antCls, "-menu-sub ").concat(token.antCls, "-menu-inline"), {
    backgroundColor: 'transparent!important'
  }), "".concat(token.antCls, "-menu-item:active, \\n        ").concat(token.antCls, "-menu-submenu-title:active"), {
    backgroundColor: 'transparent!important'
  }), "&".concat(token.antCls, "-menu-light"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item:hover, \\n            ").concat(token.antCls, "-menu-item-active,\\n            ").concat(token.antCls, "-menu-submenu-active, \\n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive,
    borderRadius: token.borderRadius
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuActive
  }))), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-selected"), {
    backgroundColor: (_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemSelected,
    borderRadius: token.borderRadius
  }), "".concat(token.antCls, "-menu-item:hover, \\n            ").concat(token.antCls, "-menu-item-active,\\n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive,
    borderRadius: token.borderRadius,
    backgroundColor: "".concat((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemHover, " !important")
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive
  }))), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSelected
  }), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)(_$concat6, "".concat(token.antCls, "-menu-submenu-selected"), {
    color: (_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected
  }), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-inline) ").concat(token.antCls, "-menu-submenu-open"), {
    color: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.sider) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorTextMenuSelected
  }), "&".concat(token.antCls, "-menu-vertical"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-submenu-selected"), {
    borderRadius: token.borderRadius,
    color: (_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.sider) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorTextMenuSelected
  })), "".concat(token.antCls, "-menu-submenu:hover > ").concat(token.antCls, "-menu-submenu-title > ").concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.sider) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorTextMenuActive
  }), "&".concat(token.antCls, "-menu-horizontal"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item:hover,\\n          ").concat(token.antCls, "-menu-submenu:hover,\\n          ").concat(token.antCls, "-menu-item-active,\\n          ").concat(token.antCls, "-menu-submenu-active"), {
    borderRadius: 4,
    transition: 'none',
    color: (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorTextMenuActive,
    backgroundColor: "".concat((_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorBgMenuItemHover, " !important")
  }), "".concat(token.antCls, "-menu-item-open,\\n          ").concat(token.antCls, "-menu-submenu-open,\\n          ").concat(token.antCls, "-menu-item-selected,\\n          ").concat(token.antCls, "-menu-submenu-selected"), (0,defineProperty/* default */.Z)({
    backgroundColor: (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorBgMenuItemSelected,
    borderRadius: token.borderRadius,
    transition: 'none',
    color: "".concat((_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, " !important")
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: "".concat((_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorTextMenuSelected, " !important")
  })), "> ".concat(token.antCls, "-menu-item, > ").concat(token.antCls, "-menu-submenu"), {
    paddingInline: 16,
    marginInline: 4
  }), "> ".concat(token.antCls, "-menu-item::after, > ").concat(token.antCls, "-menu-submenu::after"), {
    display: 'none'
  })))), "".concat(token.proComponentsCls, "-top-nav-header-base-menu"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "&".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)({
    color: (_token$layout20 = token.layout) === null || _token$layout20 === void 0 || (_token$layout20 = _token$layout20.header) === null || _token$layout20 === void 0 ? void 0 : _token$layout20.colorTextMenu
  }, "".concat(token.antCls, "-menu-item a"), {
    color: 'inherit'
  })), "&".concat(token.antCls, "-menu-light"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item:hover, \\n            ").concat(token.antCls, "-menu-item-active,\\n            ").concat(token.antCls, "-menu-submenu-active, \\n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout21 = token.layout) === null || _token$layout21 === void 0 || (_token$layout21 = _token$layout21.header) === null || _token$layout21 === void 0 ? void 0 : _token$layout21.colorTextMenuActive,
    borderRadius: token.borderRadius,
    transition: 'none',
    backgroundColor: (_token$layout22 = token.layout) === null || _token$layout22 === void 0 || (_token$layout22 = _token$layout22.header) === null || _token$layout22 === void 0 ? void 0 : _token$layout22.colorBgMenuItemSelected
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout23 = token.layout) === null || _token$layout23 === void 0 || (_token$layout23 = _token$layout23.header) === null || _token$layout23 === void 0 ? void 0 : _token$layout23.colorTextMenuActive
  })), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout24 = token.layout) === null || _token$layout24 === void 0 || (_token$layout24 = _token$layout24.header) === null || _token$layout24 === void 0 ? void 0 : _token$layout24.colorTextMenuSelected,
    borderRadius: token.borderRadius,
    backgroundColor: (_token$layout25 = token.layout) === null || _token$layout25 === void 0 || (_token$layout25 = _token$layout25.header) === null || _token$layout25 === void 0 ? void 0 : _token$layout25.colorBgMenuItemSelected
  })))), "".concat(token.antCls, "-menu-sub").concat(token.antCls, "-menu-inline"), {
    backgroundColor: 'transparent!important'
  }), "".concat(token.antCls, "-menu-submenu-popup"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)'
  }, "".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)({
    background: 'transparent !important',
    backgroundColor: 'transparent !important'
  }, "".concat(token.antCls, "-menu-item:active, \\n        ").concat(token.antCls, "-menu-submenu-title:active"), {
    backgroundColor: 'transparent!important'
  })), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout26 = token.layout) === null || _token$layout26 === void 0 || (_token$layout26 = _token$layout26.sider) === null || _token$layout26 === void 0 ? void 0 : _token$layout26.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu-submenu-selected"), {
    color: (_token$layout27 = token.layout) === null || _token$layout27 === void 0 || (_token$layout27 = _token$layout27.sider) === null || _token$layout27 === void 0 ? void 0 : _token$layout27.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-selected"), {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderRadius: token.borderRadius,
    color: (_token$layout28 = token.layout) === null || _token$layout28 === void 0 || (_token$layout28 = _token$layout28.sider) === null || _token$layout28 === void 0 ? void 0 : _token$layout28.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu-item:hover, \\n          ").concat(token.antCls, "-menu-item-active,\\n          ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout29 = token.layout) === null || _token$layout29 === void 0 || (_token$layout29 = _token$layout29.sider) === null || _token$layout29 === void 0 ? void 0 : _token$layout29.colorTextMenuActive,
    borderRadius: token.borderRadius
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout30 = token.layout) === null || _token$layout30 === void 0 || (_token$layout30 = _token$layout30.sider) === null || _token$layout30 === void 0 ? void 0 : _token$layout30.colorTextMenuActive
  }))));
};
var genProLayoutStyle = function genProLayoutStyle(token) {
  var _token$layout31, _token$layout32, _token$layout33, _token$layout34;
  return (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-layout"), {
    backgroundColor: 'transparent !important'
  }), token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "& ".concat(token.antCls, "-layout"), {
    display: 'flex',
    backgroundColor: 'transparent',
    width: '100%'
  }), "".concat(token.componentCls, "-content"), {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: ((_token$layout31 = token.layout) === null || _token$layout31 === void 0 || (_token$layout31 = _token$layout31.pageContainer) === null || _token$layout31 === void 0 ? void 0 : _token$layout31.colorBgPageContainer) || 'transparent',
    position: 'relative',
    paddingBlock: (_token$layout32 = token.layout) === null || _token$layout32 === void 0 || (_token$layout32 = _token$layout32.pageContainer) === null || _token$layout32 === void 0 ? void 0 : _token$layout32.paddingBlockPageContainerContent,
    paddingInline: (_token$layout33 = token.layout) === null || _token$layout33 === void 0 || (_token$layout33 = _token$layout33.pageContainer) === null || _token$layout33 === void 0 ? void 0 : _token$layout33.paddingInlinePageContainerContent,
    '&-has-page-container': {
      padding: 0
    }
  }), "".concat(token.componentCls, "-container"), {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    minHeight: 0,
    backgroundColor: 'transparent'
  }), "".concat(token.componentCls, "-bg-list"), {
    pointerEvents: 'none',
    position: 'fixed',
    overflow: 'hidden',
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: 0,
    height: '100%',
    width: '100%',
    background: (_token$layout34 = token.layout) === null || _token$layout34 === void 0 ? void 0 : _token$layout34.bgLayout
  }));
};
function es_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayout', function (token) {
    var proLayoutToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutStyle(proLayoutToken), compatibleStyle(proLayoutToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/pathTools.js
// /userInfo/2144/id => ['/userInfo','/userInfo/2144,'/userInfo/2144/id']
function urlToList(url) {
  if (!url || url === '/') {
    return ['/'];
  }
  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (urlItem, index) {
    return "/".concat(urlList.slice(0, index + 1).join('/'));
  });
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js
/* provided dependency */ var getBreadcrumbProps_process = __webpack_require__(34155);






var getBreadcrumbProps_getVersion = function getVersion() {
  var _process;
  if (typeof getBreadcrumbProps_process === 'undefined') return version/* default */.Z;
  return ((_process = getBreadcrumbProps_process) === null || getBreadcrumbProps_process === void 0 || (getBreadcrumbProps_process = ({"NODE_ENV":"production","PUBLIC_PATH":"./"})) === null || getBreadcrumbProps_process === void 0 ? void 0 : getBreadcrumbProps_process.ANTD_VERSION) || version/* default */.Z;
};
// \u6E32\u67D3 Breadcrumb \u5B50\u8282\u70B9
// Render the Breadcrumb child node
var defaultItemRender = function defaultItemRender(route, _, routes) {
  var _ref = route,
    breadcrumbName = _ref.breadcrumbName,
    title = _ref.title,
    path = _ref.path;
  var last = routes.findIndex(function (i) {
    return (
      // @ts-ignore
      i.linkPath === route.path
    );
  }) === routes.length - 1;
  return last ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    children: title || breadcrumbName
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    onClick: path ? function () {
      return location.href = path;
    } : undefined,
    children: title || breadcrumbName
  });
};
var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
    menu = props.menu;
  if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }
  return item.name;
};
var getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
  var breadcrumbItem = breadcrumbMap.get(url);
  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // \u6309\u7167 route config \u5B9A\u4E49\u7684\u987A\u5E8F\u627E\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u8DEF\u5F84
    var keys = Array.from(breadcrumbMap.keys()) || [];
    var targetPath = keys.find(function (path) {
      try {
        if (path !== null && path !== void 0 && path.startsWith('http')) return false;
        return (0,dist.match)(path.replace('?', ''))(url);
      } catch (error) {
        console.log('path', path, error);
        return false;
      }
    }
    // remove ? ,\u4E0D\u7136\u4F1A\u91CD\u590D
    );
    if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath);
  }
  return breadcrumbItem || {
    path: ''
  };
};
var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
    breadcrumbMap = props.breadcrumbMap;
  return {
    location: location,
    breadcrumbMap: breadcrumbMap
  };
};
var conversionFromLocation = function conversionFromLocation(routerLocation, breadcrumbMap, props) {
  // Convertor the url to an array
  var pathSnippets = urlToList(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname);
  // Loop data mosaic routing
  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    var currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      linkPath: url,
      breadcrumbName: name,
      title: name,
      component: currentBreadcrumb.component
    } : {
      linkPath: '',
      breadcrumbName: '',
      title: ''
    };
  }).filter(function (item) {
    return item && item.linkPath;
  });
  return extraBreadcrumbItems;
};
/** \u5C06\u53C2\u6570\u8F6C\u5316\u4E3A\u9762\u5305\u5C51 Convert parameters into breadcrumbs */
var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
    location = _getBreadcrumbFromPro.location,
    breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap;

  // \u6839\u636E location \u751F\u6210 \u9762\u5305\u5C51
  // Generate breadcrumbs based on location
  if (location && location.pathname && breadcrumbMap) {
    return conversionFromLocation(location, breadcrumbMap, props);
  }
  return [];
};

// \u58F0\u660E\u4E00\u4E2A\u5BFC\u51FA\u51FD\u6570\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1ABreadcrumbProps\u548CProLayoutProps\uFF0C\u8FD4\u56DE\u4E00\u4E2ABreadcrumbListReturn\u7C7B\u578B\u7684\u5BF9\u8C61
var getBreadcrumbProps = function getBreadcrumbProps(props, layoutPros // ProLayoutProps\u7C7B\u578B\u7684layoutPros
) {
  // \u89E3\u6784\u8D4B\u503C\u83B7\u53D6props\u4E2D\u7684breadcrumbRender\u548Cprops\u4E2D\u7684itemRender\uFF0C\u5982\u679Cprops\u4E2D\u6CA1\u6709itemRender\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684defaultItemRender\u51FD\u6570
  var breadcrumbRender = props.breadcrumbRender,
    propsItemRender = props.itemRender;
  // \u89E3\u6784\u8D4B\u503C\u83B7\u53D6layoutPros.breadcrumbProps.minLenght\u7684\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u4E3A2
  var _ref2 = layoutPros.breadcrumbProps || {},
    _ref2$minLength = _ref2.minLength,
    minLength = _ref2$minLength === void 0 ? 2 : _ref2$minLength;
  // \u751F\u6210\u9762\u5305\u5C51\u7684\u8DEF\u7531\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u4E2D\u5305\u542B\u83DC\u5355\u9879\u548C\u9762\u5305\u5C51\u9879
  var routesArray = genBreadcrumbProps(props);
  // \u5982\u679Cprops\u4E2D\u6709itemRender\uFF0C\u5219\u4F7F\u7528props\u4E2D\u7684itemRender\uFF0C\u5426\u5219\u4F7F\u7528\u9ED8\u8BA4\u51FD\u6570defaultItemRender
  var itemRender = function itemRender(item) {
    var renderFunction = propsItemRender || defaultItemRender;
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return renderFunction === null || renderFunction === void 0 ? void 0 : renderFunction.apply(void 0, [(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
      // \u5982\u679Citem.linkPath\u5B58\u5728\uFF0C\u5219\u4F7F\u7528item.linkPath\uFF0C\u5426\u5219\u4F7F\u7528item.path
      // @ts-ignore
      path: item.linkPath || item.path
    })].concat(rest));
  };
  var items = routesArray;
  // \u5982\u679C\u9762\u5305\u5C51\u6E32\u67D3\u51FD\u6570breadcrumbRender\u5B58\u5728\uFF0C\u5219\u4F7F\u7528\u5176\u6E32\u67D3\u6570\u7EC4items
  if (breadcrumbRender) {
    items = breadcrumbRender(items || []) || undefined;
  }
  // \u5982\u679Citems\uFF08\u6E32\u67D3\u540E\u7684\u6570\u7EC4\uFF09\u7684\u957F\u5EA6\u5C0F\u4E8EminLength\u6216\u8005breadcrumbRender\u4E3Afalse\uFF0C\u5219items\u4E3Aundefined
  if (items && items.length < minLength || breadcrumbRender === false) {
    items = undefined;
  }
  // \u5982\u679C\u5F53\u524D ant design \u5305\u7684\u7248\u672C\u5927\u4E8E\u7B49\u4E8E5.3.0\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61{items,itemRender},\u5426\u5219\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61{routes:item,itemRender}
  return (0,compareVersions/* compareVersions */.n)(getBreadcrumbProps_getVersion(), '5.3.0') > -1 ? {
    items: items,
    itemRender: itemRender
  } : {
    routes: items,
    itemRender: itemRender
  };
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getMenuData.js



function fromEntries(iterable) {
  return (0,toConsumableArray/* default */.Z)(iterable).reduce(function (obj, _ref) {
    var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    // eslint-disable-next-line no-param-reassign
    obj[key] = val;
    return obj;
  }, {});
}
var getMenuData = function getMenuData(routes, menu, formatMessage, menuDataRender) {
  var _transformRoute = transformRoute_transformRoute(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true),
    menuData = _transformRoute.menuData,
    breadcrumb = _transformRoute.breadcrumb;
  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData: menuData
    };
  }
  return getMenuData(menuDataRender(menuData), menu, formatMessage, undefined);
};

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/omitUndefined/index.js
var omitUndefined = __webpack_require__(51812);
;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js




var useCurrentMenuLayoutProps = function useCurrentMenuLayoutProps(currentMenu) {
  var _useState = (0,react.useState)({}),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    currentMenuLayoutProps = _useState2[0],
    setCurrentMenuLayoutProps = _useState2[1];
  (0,react.useEffect)(function () {
    setCurrentMenuLayoutProps((0,omitUndefined/* omitUndefined */.Y)({
      // \u6709\u65F6\u5019\u4F1A\u53D8\u6210\u5BF9\u8C61\uFF0C\u662F\u539F\u6765\u7684\u65B9\u5F0F
      layout: (0,esm_typeof/* default */.Z)(currentMenu.layout) !== 'object' ? currentMenu.layout : undefined,
      navTheme: currentMenu.navTheme,
      menuRender: currentMenu.menuRender,
      footerRender: currentMenu.footerRender,
      menuHeaderRender: currentMenu.menuHeaderRender,
      headerRender: currentMenu.headerRender,
      fixSiderbar: currentMenu.fixSiderbar
    }));
  }, [currentMenu.layout, currentMenu.navTheme, currentMenu.menuRender, currentMenu.footerRender, currentMenu.menuHeaderRender, currentMenu.headerRender, currentMenu.fixSiderbar]);
  return currentMenuLayoutProps;
};

;// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/ProLayout.js






var ProLayout_excluded = ["id", "defaultMessage"],
  ProLayout_excluded2 = ["fixSiderbar", "navTheme", "layout"];




























var layoutIndex = 0;
var headerRender = function headerRender(props, matchMenuKeys) {
  var _props$stylish;
  if (props.headerRender === false || props.pure) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    matchMenuKeys: matchMenuKeys
  }, props), {}, {
    stylish: (_props$stylish = props.stylish) === null || _props$stylish === void 0 ? void 0 : _props$stylish.header
  }));
};
var footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }
  if (props.footerRender) {
    return props.footerRender((0,objectSpread2/* default */.Z)({}, props), /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultFooter, {}));
  }
  return null;
};
var renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var _props$stylish3;
  var layout = props.layout,
    isMobile = props.isMobile,
    selectedKeys = props.selectedKeys,
    openKeys = props.openKeys,
    splitMenus = props.splitMenus,
    suppressSiderWhenMenuEmpty = props.suppressSiderWhenMenuEmpty,
    menuRender = props.menuRender;
  if (props.menuRender === false || props.pure) {
    return null;
  }
  var menuData = props.menuData;

  /** \u5982\u679C\u662F\u5206\u5272\u83DC\u5355\u6A21\u5F0F\uFF0C\u9700\u8981\u4E13\u95E8\u5B9E\u73B0\u4E00\u4E0B */
  if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
    var _ref = selectedKeys || matchMenuKeys,
      _ref2 = (0,slicedToArray/* default */.Z)(_ref, 1),
      key = _ref2[0];
    if (key) {
      var _props$menuData;
      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 || (_props$menuData = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData === void 0 ? void 0 : _props$menuData.children) || [];
    } else {
      menuData = [];
    }
  }
  // \u8FD9\u91CC\u8D70\u4E86\u53EF\u4EE5\u5C11\u4E00\u6B21\u5FAA\u73AF
  var clearMenuData = clearMenuItem(menuData || []);
  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && (splitMenus || suppressSiderWhenMenuEmpty)) {
    return null;
  }
  if (layout === 'top' && !isMobile) {
    var _props$stylish2;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenuWrapper, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      matchMenuKeys: matchMenuKeys
    }, props), {}, {
      hide: true,
      stylish: (_props$stylish2 = props.stylish) === null || _props$stylish2 === void 0 ? void 0 : _props$stylish2.sider
    }));
  }
  var defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenuWrapper, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    matchMenuKeys: matchMenuKeys
  }, props), {}, {
    // \u8FD9\u91CC\u8D70\u4E86\u53EF\u4EE5\u5C11\u4E00\u6B21\u5FAA\u73AF
    menuData: clearMenuData,
    stylish: (_props$stylish3 = props.stylish) === null || _props$stylish3 === void 0 ? void 0 : _props$stylish3.sider
  }));
  if (menuRender) {
    return menuRender(props, defaultDom);
  }
  return defaultDom;
};
var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);
  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }
  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);
    if (typeof title === 'string') {
      return getPageTitleInfo((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, pageTitleInfo), {}, {
        title: title
      }));
    }
    (0,warning/* default */.ZP)(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }
  return pageTitleInfo;
};
var getPaddingInlineStart = function getPaddingInlineStart(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 64 : siderWidth;
  }
  return 0;
};

/**
 * \u{1F303} Powerful and easy to use beautiful layout \u{1F3C4}\u200D Support multiple topics and layout types
 *
 * @param props
 */
var BaseProLayout = function BaseProLayout(props) {
  var _props$prefixCls, _location$pathname, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
  var _ref3 = props || {},
    children = _ref3.children,
    propsOnCollapse = _ref3.onCollapse,
    _ref3$location = _ref3.location,
    location = _ref3$location === void 0 ? {
      pathname: '/'
    } : _ref3$location,
    contentStyle = _ref3.contentStyle,
    route = _ref3.route,
    defaultCollapsed = _ref3.defaultCollapsed,
    style = _ref3.style,
    propsSiderWidth = _ref3.siderWidth,
    menu = _ref3.menu,
    siderMenuType = _ref3.siderMenuType,
    propsIsChildrenLayout = _ref3.isChildrenLayout,
    menuDataRender = _ref3.menuDataRender,
    actionRef = _ref3.actionRef,
    bgLayoutImgList = _ref3.bgLayoutImgList,
    propsFormatMessage = _ref3.formatMessage,
    loading = _ref3.loading;
  var siderWidth = (0,react.useMemo)(function () {
    if (propsSiderWidth) return propsSiderWidth;
    if (props.layout === 'mix') return 215;
    return 256;
  }, [props.layout, propsSiderWidth]);
  var context = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');
  var _useMountMergeState = (0,useMergedState/* default */.Z)(false, {
      value: menu === null || menu === void 0 ? void 0 : menu.loading,
      onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
    }),
    _useMountMergeState2 = (0,slicedToArray/* default */.Z)(_useMountMergeState, 2),
    menuLoading = _useMountMergeState2[0],
    setMenuLoading = _useMountMergeState2[1];

  // give a default key for swr
  var _useState = (0,react.useState)(function () {
      layoutIndex += 1;
      return "pro-layout-".concat(layoutIndex);
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 1),
    defaultId = _useState2[0];

  /**
   * \u5904\u7406\u56FD\u9645\u5316\u76F8\u5173 formatMessage
   * \u5982\u679C\u6709\u7528\u6237\u914D\u7F6E\u7684\u4EE5\u7528\u6237\u4E3A\u4E3B
   * \u5982\u679C\u6CA1\u6709\u7528\u81EA\u5DF1\u5B9E\u73B0\u7684
   */
  var formatMessage = (0,react.useCallback)(function (_ref4) {
    var id = _ref4.id,
      defaultMessage = _ref4.defaultMessage,
      restParams = (0,objectWithoutProperties/* default */.Z)(_ref4, ProLayout_excluded);
    if (propsFormatMessage) {
      return propsFormatMessage((0,objectSpread2/* default */.Z)({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }
    var locales = gLocaleObject();
    return locales[id] ? locales[id] : defaultMessage;
  }, [propsFormatMessage]);
  var _useSWR = (0,index/* default */.ZP)([defaultId, menu === null || menu === void 0 ? void 0 : menu.params], /*#__PURE__*/function () {
      var _ref6 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(_ref5) {
        var _menu$request;
        var _ref7, params, menuDataItems;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref7 = (0,slicedToArray/* default */.Z)(_ref5, 2), params = _ref7[1];
              setMenuLoading(true);
              _context.next = 4;
              return menu === null || menu === void 0 || (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || []);
            case 4:
              menuDataItems = _context.sent;
              setMenuLoading(false);
              return _context.abrupt("return", menuDataItems);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }(), {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false
    }),
    data = _useSWR.data,
    mutate = _useSWR.mutate,
    isLoading = _useSWR.isLoading;
  (0,react.useEffect)(function () {
    setMenuLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  var _useSWRConfig = (0,_internal/* useSWRConfig */.kY)(),
    cache = _useSWRConfig.cache;
  (0,react.useEffect)(function () {
    return function () {
      if (cache instanceof Map) cache.delete(defaultId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var menuInfoData = (0,react.useMemo)(function () {
    return getMenuData(data || (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }, [formatMessage, menu, menuDataRender, data, route === null || route === void 0 ? void 0 : route.children, route === null || route === void 0 ? void 0 : route.routes]);
  var _ref8 = menuInfoData || {},
    breadcrumb = _ref8.breadcrumb,
    breadcrumbMap = _ref8.breadcrumbMap,
    _ref8$menuData = _ref8.menuData,
    menuData = _ref8$menuData === void 0 ? [] : _ref8$menuData;
  if (actionRef && menu !== null && menu !== void 0 && menu.request) {
    actionRef.current = {
      reload: function reload() {
        mutate();
      }
    };
  }
  var matchMenus = (0,react.useMemo)(function () {
    return getMatchMenu_getMatchMenu(location.pathname || '/', menuData || [], true);
  }, [location.pathname, menuData]);
  var matchMenuKeys = (0,react.useMemo)(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]);

  // \u5F53\u524D\u9009\u4E2D\u7684menu\uFF0C\u4E00\u822C\u4E0D\u4F1A\u4E3A\u7A7A
  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu);
  var _props$currentMenuLay = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), currentMenuLayoutProps),
    fixSiderbar = _props$currentMenuLay.fixSiderbar,
    navTheme = _props$currentMenuLay.navTheme,
    propsLayout = _props$currentMenuLay.layout,
    rest = (0,objectWithoutProperties/* default */.Z)(_props$currentMenuLay, ProLayout_excluded2);
  var colSize = useBreakpoint();
  var isMobile = (0,react.useMemo)(function () {
    return (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  }, [colSize, props.disableMobile]);

  // If it is a fix menu, calculate padding
  // don't need padding in phone mode
  /* Checking if the menu is loading and if it is, it will return a skeleton loading screen. */
  var hasLeftPadding = propsLayout !== 'top' && !isMobile;
  var _useMergedState = (0,useMergedState/* default */.Z)(function () {
      if (defaultCollapsed !== undefined) return defaultCollapsed;
      if (false) {}
      if (isMobile) return true;
      if (colSize === 'md') return true;
      return false;
    }, {
      value: props.collapsed,
      onChange: propsOnCollapse
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    collapsed = _useMergedState2[0],
    onCollapse = _useMergedState2[1];

  // Splicing parameters, adding menuData and formatMessage in props
  var defaultProps = (0,omit_js_es/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    menu: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, menu), {}, {
      type: siderMenuType || (menu === null || menu === void 0 ? void 0 : menu.type),
      loading: menuLoading
    }),
    layout: propsLayout
  }), ['className', 'style', 'breadcrumbRender']);

  // gen page title
  var pageTitleInfo = defaultPageTitleRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props);

  // gen breadcrumbProps, parameter for pageHeader
  var breadcrumbProps = getBreadcrumbProps((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap: breadcrumbMap
  }), props);

  // render sider dom
  var siderMenuDom = renderSiderMenu((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    collapsed: collapsed
  }), matchMenuKeys);

  // render header dom
  var headerDom = headerRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
    children: null,
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse
  }), matchMenuKeys);

  // render footer dom
  var footerDom = footerRender((0,objectSpread2/* default */.Z)({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));
  var _useContext = (0,react.useContext)(RouteContext/* RouteContext */.X),
    contextIsChildrenLayout = _useContext.isChildrenLayout;

  // \u5982\u679C props \u4E2D\u5B9A\u4E49\uFF0C\u4EE5 props \u4E3A\u51C6
  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var proLayoutClassName = "".concat(prefixCls, "-layout");
  var _useStyle = es_style_useStyle(proLayoutClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  // gen className
  var className = classnames_default()(props.className, hashId, 'ant-design-pro', proLayoutClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "screen-".concat(colSize), colSize), "".concat(proLayoutClassName, "-top-menu"), propsLayout === 'top'), "".concat(proLayoutClassName, "-is-children"), isChildrenLayout), "".concat(proLayoutClassName, "-fix-siderbar"), fixSiderbar), "".concat(proLayoutClassName, "-").concat(propsLayout), propsLayout));

  /** \u8BA1\u7B97 slider \u7684\u5BBD\u5EA6 */
  var leftSiderWidth = getPaddingInlineStart(!!hasLeftPadding, collapsed, siderWidth);

  // siderMenuDom \u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981 padding
  var genLayoutStyle = {
    position: 'relative'
  };

  // if is some layout children, don't need min height
  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  /** \u9875\u9762\u5207\u6362\u7684\u65F6\u5019\u89E6\u53D1 */
  (0,react.useEffect)(function () {
    var _props$onPageChange;
    (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 || _props$onPageChange.call(props, props.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search]);
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    hasFooterToolbar = _useState4[0],
    setHasFooterToolbar = _useState4[1];
  /**
   * \u4F7F\u7528number\u662F\u56E0\u4E3A\u591A\u6807\u7B7E\u9875\u7684\u65F6\u5019\u6709\u591A\u4E2A PageContainer\uFF0C\u53EA\u6709\u6709\u4EFB\u610F\u4E00\u4E2A\u5C31\u5E94\u8BE5\u5C55\u793A\u8FD9\u4E2AclassName
   */
  var _useState5 = (0,react.useState)(0),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    hasPageContainer = _useState6[0],
    setHasPageContainer = _useState6[1];
  useDocumentTitle(pageTitleInfo, props.title || false);
  var _useContext2 = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext2.token;
  var bgImgStyleList = (0,react.useMemo)(function () {
    if (bgLayoutImgList && bgLayoutImgList.length > 0) {
      return bgLayoutImgList === null || bgLayoutImgList === void 0 ? void 0 : bgLayoutImgList.map(function (item, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: item.src,
          style: (0,objectSpread2/* default */.Z)({
            position: 'absolute'
          }, item)
        }, index);
      });
    }
    return null;
  }, [bgLayoutImgList]);
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)(RouteContext/* RouteContext */.X.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      hasPageContainer: hasPageContainer,
      setHasPageContainer: setHasPageContainer,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    }),
    children: props.pure ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: className,
      children: [bgImgStyleList || (_token$layout = token.layout) !== null && _token$layout !== void 0 && _token$layout.bgLayout ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classnames_default()("".concat(proLayoutClassName, "-bg-list"), hashId),
        children: bgImgStyleList
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)(es_layout, {
        style: (0,objectSpread2/* default */.Z)({
          minHeight: '100%',
          // hack style
          flexDirection: siderMenuDom ? 'row' : undefined
        }, style),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP
        // @ts-ignore
        , {
          theme: {
            hashed: (0,es/* isNeedOpenHash */.nu)(),
            token: {
              controlHeightLG: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.menuHeight) || (token === null || token === void 0 ? void 0 : token.controlHeightLG)
            },
            components: {
              Menu: coverToNewToken({
                colorItemBg: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorMenuBackground) || 'transparent',
                colorSubItemBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorMenuBackground) || 'transparent',
                radiusItem: token.borderRadius,
                colorItemBgSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorItemBgHover: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorItemBgActive: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorBgMenuItemActive) || (token === null || token === void 0 ? void 0 : token.colorBgTextActive),
                colorItemBgSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorActiveBarWidth: 0,
                colorActiveBarHeight: 0,
                colorActiveBarBorderSize: 0,
                colorItemText: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
                colorItemTextHover: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuItemHover) || 'rgba(0, 0, 0, 0.85)',
                // \u60AC\u6D6E\u6001
                colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                darkSubMenuItemBg: 'transparent',
                darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
              })
            }
          },
          children: siderMenuDom
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: genLayoutStyle,
          className: "".concat(proLayoutClassName, "-container ").concat(hashId).trim(),
          children: [headerDom, /*#__PURE__*/(0,jsx_runtime.jsx)(WrapContent, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
            hasPageContainer: hasPageContainer,
            isChildrenLayout: isChildrenLayout
          }, rest), {}, {
            hasHeader: !!headerDom,
            prefixCls: proLayoutClassName,
            style: contentStyle,
            children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(PageLoading/* PageLoading */.S, {}) : children
          })), footerDom, hasFooterToolbar && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(proLayoutClassName, "-has-footer"),
            style: {
              height: 64,
              marginBlockStart: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.pageContainer) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.paddingBlockPageContainerContent
            }
          })]
        })]
      })]
    })
  }));
};
var ProLayout = function ProLayout(props) {
  var colorPrimary = props.colorPrimary;
  var darkProps = props.navTheme !== undefined ? {
    dark: props.navTheme === 'realDark'
  } : {};
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
    theme: colorPrimary ? {
      token: {
        colorPrimary: colorPrimary
      }
    } : undefined,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* ProConfigProvider */._Y, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, darkProps), {}, {
      token: props.token,
      prefixCls: props.prefixCls,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(BaseProLayout, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        logo: /*#__PURE__*/(0,jsx_runtime.jsx)(Logo, {})
      }, defaultSettings), {}, {
        location: (0,isBrowser/* isBrowser */.j)() ? window.location : undefined
      }, props))
    }))
  });
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvdXNlTWVkaWFRdWVyeS9xdWVyeS5qcz8xOTg3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tdXRpbHMvZXMvdXNlTWVkaWFRdWVyeS9pbmRleC5qcz9mMjZkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tdXRpbHMvZXMvaG9va3MvdXNlRG9jdW1lbnRUaXRsZS9pbmRleC5qcz84YTRiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tdXRpbHMvZXMvY29tcGFyZVZlcnNpb25zL2NvdmVyVG9OZXdUb2tlbi5qcz9hNjNkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvcm91dGUtdXRpbHMvZXMvc2hhMjY1LmpzPzU3ZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1bWlqcy9yb3V0ZS11dGlscy9lcy90cmFuc2Zvcm1Sb3V0ZS90cmFuc2Zvcm1Sb3V0ZS5qcz8yZGY3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvcm91dGUtdXRpbHMvZXMvZ2V0RmxhdE1lbnVzL2dldEZsYXRNZW51cy5qcz9kNjM3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvcm91dGUtdXRpbHMvZXMvZ2V0TWF0Y2hNZW51L2dldE1hdGNoTWVudS5qcz84ZGFlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvcm91dGUtdXRpbHMvZXMvaW5kZXguanM/YzQzOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9sYXlvdXQvaG9va3MvdXNlSGFzU2lkZXIuanM/NmIxNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9sYXlvdXQvbGF5b3V0LmpzPzIyOGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbGF5b3V0L2luZGV4LmpzPzQ4YjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvV3JhcENvbnRlbnQuanM/ZWQ3YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9hc3NlcnQvTG9nby5qcz9iZmEzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvZXMvYXNuL0NvcHlyaWdodE91dGxpbmVkLmpzP2NmOTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0NvcHlyaWdodE91dGxpbmVkLmpzP2MwOTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9HbG9iYWxGb290ZXIvc3R5bGUuanM/NWNmZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL0dsb2JhbEZvb3Rlci9pbmRleC5qcz83ZjVhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvRm9vdGVyLmpzPzg0NjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvdXRpbHMvdXRpbHMuanM/M2UxMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2VzL2Fzbi9NZW51T3V0bGluZWQuanM/NDcwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvTWVudU91dGxpbmVkLmpzP2RkZTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9BcHBzTG9nb0NvbXBvbmVudHMvQXBwc0xvZ28uanM/Y2MxNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL0FwcHNMb2dvQ29tcG9uZW50cy9EZWZhdWx0Q29udGVudC5qcz9hZGNmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tdXRpbHMvZXMvaXNVcmwvaW5kZXguanM/Nzk1OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL0FwcHNMb2dvQ29tcG9uZW50cy9TaW1wbGVDb250ZW50LmpzPzU3NmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9BcHBzTG9nb0NvbXBvbmVudHMvc3R5bGUvZGVmYXVsdC5qcz84YTM4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvQXBwc0xvZ29Db21wb25lbnRzL3N0eWxlL3NpbXBsZS5qcz84MDNjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvQXBwc0xvZ29Db21wb25lbnRzL3N0eWxlL2luZGV4LmpzPzBkOGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9BcHBzTG9nb0NvbXBvbmVudHMvaW5kZXguanM/Nzk0ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL1NpZGVyTWVudS9BcnJvdy5qcz9mMGQ5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvQ29sbGFwc2VkSWNvbi9zdHlsZS5qcz9hYTY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvQ29sbGFwc2VkSWNvbi9pbmRleC5qcz82NjA2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9lcy9jb21wb25lbnRzL0ljb24uanM/NjE0ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvZXMvY29tcG9uZW50cy9JY29uRm9udC5qcz9kNTRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tdXRpbHMvZXMvaXNJbWcvaW5kZXguanM/MTI0MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9kZWZhdWx0U2V0dGluZ3MuanM/YTAzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL1NpZGVyTWVudS9zdHlsZS9tZW51LmpzPzZlMzUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9TaWRlck1lbnUvQmFzZU1lbnUuanM/OWI2YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL1NpZGVyTWVudS9zdHlsZS9zdHlsaXNoLmpzPzYwNDMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9TaWRlck1lbnUvU2lkZXJNZW51LmpzPzYyMzMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9HbG9iYWxIZWFkZXIvcmlnaHRDb250ZW50U3R5bGUuanM/ZTJhNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL0dsb2JhbEhlYWRlci9BY3Rpb25zQ29udGVudC5qcz9hYzQ5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvVG9wTmF2SGVhZGVyL3N0eWxlLmpzP2Y3MDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9Ub3BOYXZIZWFkZXIvaW5kZXguanM/Zjc3OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL0dsb2JhbEhlYWRlci9zdHlsZS5qcz9lYTI1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvR2xvYmFsSGVhZGVyL2luZGV4LmpzPzFhZDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGUvaGVhZGVyLmpzPzcwNzkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGUvc3R5bGlzaC5qcz8yNWI0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2YwNmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvY29tcG9uZW50cy9TaWRlck1lbnUvc3R5bGUvaW5kZXguanM/M2Y1MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9jb21wb25lbnRzL1NpZGVyTWVudS9pbmRleC5qcz9mOWUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2dldFBhZ2VUaXRsZS5qcz9iZDRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2xvY2FsZXMvZW4tVVMvc2V0dGluZ0RyYXdlci5qcz83NDFjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2xvY2FsZXMvZW4tVVMuanM/MWM3MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9sb2NhbGVzL2l0LUlUL3NldHRpbmdEcmF3ZXIuanM/MDczYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9sb2NhbGVzL2l0LUlULmpzP2Q4ODgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvbG9jYWxlcy9rby1LUi9zZXR0aW5nRHJhd2VyLmpzP2I0ZjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvbG9jYWxlcy9rby1LUi5qcz9kNDlkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2xvY2FsZXMvemgtQ04vc2V0dGluZ0RyYXdlci5qcz9lZjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL2xvY2FsZXMvemgtQ04uanM/YzYyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9sb2NhbGVzL3poLVRXL3NldHRpbmdEcmF3ZXIuanM/YzBiMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy9sb2NhbGVzL3poLVRXLmpzP2ZiMTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvbG9jYWxlcy9pbmRleC5qcz85ZjIzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9wcm8tbGF5b3V0L2VzL3N0eWxlL2luZGV4LmpzPzY2NmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvdXRpbHMvcGF0aFRvb2xzLmpzPzUxNzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvdXRpbHMvZ2V0QnJlYWRjcnVtYlByb3BzLmpzP2ZlZDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvdXRpbHMvZ2V0TWVudURhdGEuanM/NWRiOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vcHJvLWxheW91dC9lcy91dGlscy91c2VDdXJyZW50TWVudUxheW91dFByb3BzLmpzPzhkMTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL3Byby1sYXlvdXQvZXMvUHJvTGF5b3V0LmpzPzdmNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVkaWFRdWVyeShtZWRpYVF1ZXJ5KSB7XG4gIHZhciBpc1NzciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGlzU3NyID8gZmFsc2UgOiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KS5tYXRjaGVzO1xuICAgIH0pLFxuICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgIG1hdGNoZXMgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldE1hdGNoZXMgPSBfdXNlU3RhdGUyWzFdO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1Nzcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihlKSB7XG4gICAgICByZXR1cm4gc2V0TWF0Y2hlcyhlLm1hdGNoZXMpO1xuICAgIH07XG4gICAgbWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFttZWRpYVF1ZXJ5XSk7XG4gIHJldHVybiBtYXRjaGVzO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCIuL3F1ZXJ5XCI7XG5leHBvcnQgdmFyIE1lZGlhUXVlcnlFbnVtID0ge1xuICB4czoge1xuICAgIG1heFdpZHRoOiA1NzUsXG4gICAgbWF0Y2hNZWRpYTogJyhtYXgtd2lkdGg6IDU3NXB4KSdcbiAgfSxcbiAgc206IHtcbiAgICBtaW5XaWR0aDogNTc2LFxuICAgIG1heFdpZHRoOiA3NjcsXG4gICAgbWF0Y2hNZWRpYTogJyhtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpJ1xuICB9LFxuICBtZDoge1xuICAgIG1pbldpZHRoOiA3NjgsXG4gICAgbWF4V2lkdGg6IDk5MSxcbiAgICBtYXRjaE1lZGlhOiAnKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCknXG4gIH0sXG4gIGxnOiB7XG4gICAgbWluV2lkdGg6IDk5MixcbiAgICBtYXhXaWR0aDogMTE5OSxcbiAgICBtYXRjaE1lZGlhOiAnKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpJ1xuICB9LFxuICB4bDoge1xuICAgIG1pbldpZHRoOiAxMjAwLFxuICAgIG1heFdpZHRoOiAxNTk5LFxuICAgIG1hdGNoTWVkaWE6ICcobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpJ1xuICB9LFxuICB4eGw6IHtcbiAgICBtaW5XaWR0aDogMTYwMCxcbiAgICBtYXRjaE1lZGlhOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbiAgfVxufTtcbi8qKlxuICogbG9vcCBxdWVyeSBzY3JlZW4gY2xhc3NOYW1lXG4gKiBBcnJheS5maW5kIHdpbGwgdGhyb3cgYSBlcnJvclxuICogYFJlbmRlcmVkIG1vcmUgaG9va3MgdGhhbiBkdXJpbmcgdGhlIHByZXZpb3VzIHJlbmRlci5gXG4gKiBTbyBzaG91bGQgdXNlIEFycmF5LmZvckVhY2hcbiAqL1xuZXhwb3J0IHZhciBnZXRTY3JlZW5DbGFzc05hbWUgPSBmdW5jdGlvbiBnZXRTY3JlZW5DbGFzc05hbWUoKSB7XG4gIHZhciBxdWVyeUtleSA9IHVuZGVmaW5lZDtcbiAgLy8gc3VwcG9ydCBzc3JcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHF1ZXJ5S2V5O1xuICB9XG4gIHZhciBtZWRpYVF1ZXJ5S2V5ID0gT2JqZWN0LmtleXMoTWVkaWFRdWVyeUVudW0pLmZpbmQoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBtYXRjaE1lZGlhID0gTWVkaWFRdWVyeUVudW1ba2V5XS5tYXRjaE1lZGlhO1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShtYXRjaE1lZGlhKS5tYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcXVlcnlLZXkgPSBtZWRpYVF1ZXJ5S2V5O1xuICByZXR1cm4gcXVlcnlLZXk7XG59O1xudmFyIHVzZUJyZWFrcG9pbnQgPSBmdW5jdGlvbiB1c2VCcmVha3BvaW50KCkge1xuICB2YXIgaXNNZCA9IHVzZU1lZGlhUXVlcnkoTWVkaWFRdWVyeUVudW0ubWQubWF0Y2hNZWRpYSk7XG4gIHZhciBpc0xnID0gdXNlTWVkaWFRdWVyeShNZWRpYVF1ZXJ5RW51bS5sZy5tYXRjaE1lZGlhKTtcbiAgdmFyIGlzWHhsID0gdXNlTWVkaWFRdWVyeShNZWRpYVF1ZXJ5RW51bS54eGwubWF0Y2hNZWRpYSk7XG4gIHZhciBpc1hsID0gdXNlTWVkaWFRdWVyeShNZWRpYVF1ZXJ5RW51bS54bC5tYXRjaE1lZGlhKTtcbiAgdmFyIGlzU20gPSB1c2VNZWRpYVF1ZXJ5KE1lZGlhUXVlcnlFbnVtLnNtLm1hdGNoTWVkaWEpO1xuICB2YXIgaXNYcyA9IHVzZU1lZGlhUXVlcnkoTWVkaWFRdWVyeUVudW0ueHMubWF0Y2hNZWRpYSk7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShnZXRTY3JlZW5DbGFzc05hbWUoKSksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgY29sU3BhbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgc2V0Q29sU3BhbiA9IF91c2VTdGF0ZTJbMV07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnVEVTVCcpIHtcbiAgICAgIHNldENvbFNwYW4ocHJvY2Vzcy5lbnYuVVNFX01FRElBIHx8ICdtZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNYeGwpIHtcbiAgICAgIHNldENvbFNwYW4oJ3h4bCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNYbCkge1xuICAgICAgc2V0Q29sU3BhbigneGwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTGcpIHtcbiAgICAgIHNldENvbFNwYW4oJ2xnJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc01kKSB7XG4gICAgICBzZXRDb2xTcGFuKCdtZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNTbSkge1xuICAgICAgc2V0Q29sU3Bhbignc20nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzWHMpIHtcbiAgICAgIHNldENvbFNwYW4oJ3hzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldENvbFNwYW4oJ21kJyk7XG4gIH0sIFtpc01kLCBpc0xnLCBpc1h4bCwgaXNYbCwgaXNTbSwgaXNYc10pO1xuICByZXR1cm4gY29sU3Bhbjtcbn07XG5leHBvcnQgeyB1c2VCcmVha3BvaW50IH07IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcIi4uLy4uL2lzQnJvd3NlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURvY3VtZW50VGl0bGUodGl0bGVJbmZvLCBhcHBEZWZhdWx0VGl0bGUpIHtcbiAgdmFyIHRpdGxlVGV4dCA9IHR5cGVvZiB0aXRsZUluZm8ucGFnZU5hbWUgPT09ICdzdHJpbmcnID8gdGl0bGVJbmZvLnRpdGxlIDogYXBwRGVmYXVsdFRpdGxlO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0Jyb3dzZXIoKSAmJiB0aXRsZVRleHQpIHtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVUZXh0O1xuICAgIH1cbiAgfSwgW3RpdGxlSW5mby50aXRsZSwgdGl0bGVUZXh0XSk7XG59IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCB7IGNvbXBhcmVWZXJzaW9ucyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBnZXRWZXJzaW9uIH0gZnJvbSBcIi4vb3BlblZpc2libGVDb21wYXRpYmxlXCI7XG5leHBvcnQgZnVuY3Rpb24gY292ZXJUb05ld1Rva2VuKHRva2VuKSB7XG4gIGlmIChjb21wYXJlVmVyc2lvbnMoZ2V0VmVyc2lvbigpLCAnNS42LjAnKSA8IDApIHJldHVybiB0b2tlbjtcbiAgdmFyIGRlcHJlY2F0ZWRUb2tlbnMgPSB7XG4gICAgY29sb3JHcm91cFRpdGxlOiAnZ3JvdXBUaXRsZUNvbG9yJyxcbiAgICByYWRpdXNJdGVtOiAnaXRlbUJvcmRlclJhZGl1cycsXG4gICAgcmFkaXVzU3ViTWVudUl0ZW06ICdzdWJNZW51SXRlbUJvcmRlclJhZGl1cycsXG4gICAgY29sb3JJdGVtVGV4dDogJ2l0ZW1Db2xvcicsXG4gICAgY29sb3JJdGVtVGV4dEhvdmVyOiAnaXRlbUhvdmVyQ29sb3InLFxuICAgIGNvbG9ySXRlbVRleHRIb3Zlckhvcml6b250YWw6ICdob3Jpem9udGFsSXRlbUhvdmVyQ29sb3InLFxuICAgIGNvbG9ySXRlbVRleHRTZWxlY3RlZDogJ2l0ZW1TZWxlY3RlZENvbG9yJyxcbiAgICBjb2xvckl0ZW1UZXh0U2VsZWN0ZWRIb3Jpem9udGFsOiAnaG9yaXpvbnRhbEl0ZW1TZWxlY3RlZENvbG9yJyxcbiAgICBjb2xvckl0ZW1UZXh0RGlzYWJsZWQ6ICdpdGVtRGlzYWJsZWRDb2xvcicsXG4gICAgY29sb3JEYW5nZXJJdGVtVGV4dDogJ2Rhbmdlckl0ZW1Db2xvcicsXG4gICAgY29sb3JEYW5nZXJJdGVtVGV4dEhvdmVyOiAnZGFuZ2VySXRlbUhvdmVyQ29sb3InLFxuICAgIGNvbG9yRGFuZ2VySXRlbVRleHRTZWxlY3RlZDogJ2Rhbmdlckl0ZW1TZWxlY3RlZENvbG9yJyxcbiAgICBjb2xvckRhbmdlckl0ZW1CZ0FjdGl2ZTogJ2Rhbmdlckl0ZW1BY3RpdmVCZycsXG4gICAgY29sb3JEYW5nZXJJdGVtQmdTZWxlY3RlZDogJ2Rhbmdlckl0ZW1TZWxlY3RlZEJnJyxcbiAgICBjb2xvckl0ZW1CZzogJ2l0ZW1CZycsXG4gICAgY29sb3JJdGVtQmdIb3ZlcjogJ2l0ZW1Ib3ZlckJnJyxcbiAgICBjb2xvclN1Ykl0ZW1CZzogJ3N1Yk1lbnVJdGVtQmcnLFxuICAgIGNvbG9ySXRlbUJnQWN0aXZlOiAnaXRlbUFjdGl2ZUJnJyxcbiAgICBjb2xvckl0ZW1CZ1NlbGVjdGVkOiAnaXRlbVNlbGVjdGVkQmcnLFxuICAgIGNvbG9ySXRlbUJnU2VsZWN0ZWRIb3Jpem9udGFsOiAnaG9yaXpvbnRhbEl0ZW1TZWxlY3RlZEJnJyxcbiAgICBjb2xvckFjdGl2ZUJhcldpZHRoOiAnYWN0aXZlQmFyV2lkdGgnLFxuICAgIGNvbG9yQWN0aXZlQmFySGVpZ2h0OiAnYWN0aXZlQmFySGVpZ2h0JyxcbiAgICBjb2xvckFjdGl2ZUJhckJvcmRlclNpemU6ICdhY3RpdmVCYXJCb3JkZXJXaWR0aCdcbiAgfTtcbiAgdmFyIG5ld1Rva2VuID0gX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pO1xuICBPYmplY3Qua2V5cyhkZXByZWNhdGVkVG9rZW5zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAobmV3VG9rZW5ba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBuZXdUb2tlbltkZXByZWNhdGVkVG9rZW5zW2tleV1dID0gbmV3VG9rZW5ba2V5XTtcbiAgICAgIGRlbGV0ZSBuZXdUb2tlbltrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdUb2tlbjtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGktYXNzaWduICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LXdyYXBwZXJzICovXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGJsb2NrLXNjb3BlZC12YXIgKi9cblxuLyogZXNsaW50LWRpc2FibGUgdmFycy1vbi10b3AgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXG4vKlxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBTSEEyNTYgaGFzaCBmdW5jdGlvbi5cbiAqXG4gKiBGSUxFOlx0c2hhMjU2LmpzXG4gKiBWRVJTSU9OOlx0MC44XG4gKiBBVVRIT1I6XHRDaHJpc3RvcGggQmljaGxtZWllciA8aW5mb3JtYXRpa0B6b21iaWVhcmVuYS5kZT5cbiAqXG4gKiBOT1RFOiBUaGlzIHZlcnNpb24gaXMgbm90IHRlc3RlZCB0aG9yb3VnaGx5IVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAwMywgQ2hyaXN0b3BoIEJpY2hsbWVpZXJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAqIGFyZSBtZXQ6XG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiAqICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAzLiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBjb3B5cmlnaHQgaG9sZGVyIG5vciB0aGUgbmFtZXMgb2YgY29udHJpYnV0b3JzXG4gKiAgICBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICAgIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBBVVRIT1JTICcnQVMgSVMnJyBBTkQgQU5ZIEVYUFJFU1NcbiAqIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAqIEFSRSBESVNDTEFJTUVELiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09OVFJJQlVUT1JTIEJFXG4gKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4gKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuICogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SXG4gKiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFXG4gKiBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuICogRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKiBTSEEyNTYgbG9naWNhbCBmdW5jdGlvbnMgKi9cbmZ1bmN0aW9uIHJvdGF0ZVJpZ2h0KG4sIHgpIHtcbiAgcmV0dXJuIHggPj4+IG4gfCB4IDw8IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gY2hvaWNlKHgsIHksIHopIHtcbiAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xufVxuXG5mdW5jdGlvbiBtYWpvcml0eSh4LCB5LCB6KSB7XG4gIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG59XG5cbmZ1bmN0aW9uIHNoYTI1Nl9TaWdtYTAoeCkge1xuICByZXR1cm4gcm90YXRlUmlnaHQoMiwgeCkgXiByb3RhdGVSaWdodCgxMywgeCkgXiByb3RhdGVSaWdodCgyMiwgeCk7XG59XG5cbmZ1bmN0aW9uIHNoYTI1Nl9TaWdtYTEoeCkge1xuICByZXR1cm4gcm90YXRlUmlnaHQoNiwgeCkgXiByb3RhdGVSaWdodCgxMSwgeCkgXiByb3RhdGVSaWdodCgyNSwgeCk7XG59XG5cbmZ1bmN0aW9uIHNoYTI1Nl9zaWdtYTAoeCkge1xuICByZXR1cm4gcm90YXRlUmlnaHQoNywgeCkgXiByb3RhdGVSaWdodCgxOCwgeCkgXiB4ID4+PiAzO1xufVxuXG5mdW5jdGlvbiBzaGEyNTZfc2lnbWExKHgpIHtcbiAgcmV0dXJuIHJvdGF0ZVJpZ2h0KDE3LCB4KSBeIHJvdGF0ZVJpZ2h0KDE5LCB4KSBeIHggPj4+IDEwO1xufVxuXG5mdW5jdGlvbiBzaGEyNTZfZXhwYW5kKFcsIGopIHtcbiAgcmV0dXJuIFdbaiAmIDB4MGZdICs9IHNoYTI1Nl9zaWdtYTEoV1tqICsgMTQgJiAweDBmXSkgKyBXW2ogKyA5ICYgMHgwZl0gKyBzaGEyNTZfc2lnbWEwKFdbaiArIDEgJiAweDBmXSk7XG59XG4vKiBIYXNoIGNvbnN0YW50IHdvcmRzIEs6ICovXG5cblxudmFyIEsyNTYgPSBbMHg0MjhhMmY5OCwgMHg3MTM3NDQ5MSwgMHhiNWMwZmJjZiwgMHhlOWI1ZGJhNSwgMHgzOTU2YzI1YiwgMHg1OWYxMTFmMSwgMHg5MjNmODJhNCwgMHhhYjFjNWVkNSwgMHhkODA3YWE5OCwgMHgxMjgzNWIwMSwgMHgyNDMxODViZSwgMHg1NTBjN2RjMywgMHg3MmJlNWQ3NCwgMHg4MGRlYjFmZSwgMHg5YmRjMDZhNywgMHhjMTliZjE3NCwgMHhlNDliNjljMSwgMHhlZmJlNDc4NiwgMHgwZmMxOWRjNiwgMHgyNDBjYTFjYywgMHgyZGU5MmM2ZiwgMHg0YTc0ODRhYSwgMHg1Y2IwYTlkYywgMHg3NmY5ODhkYSwgMHg5ODNlNTE1MiwgMHhhODMxYzY2ZCwgMHhiMDAzMjdjOCwgMHhiZjU5N2ZjNywgMHhjNmUwMGJmMywgMHhkNWE3OTE0NywgMHgwNmNhNjM1MSwgMHgxNDI5Mjk2NywgMHgyN2I3MGE4NSwgMHgyZTFiMjEzOCwgMHg0ZDJjNmRmYywgMHg1MzM4MGQxMywgMHg2NTBhNzM1NCwgMHg3NjZhMGFiYiwgMHg4MWMyYzkyZSwgMHg5MjcyMmM4NSwgMHhhMmJmZThhMSwgMHhhODFhNjY0YiwgMHhjMjRiOGI3MCwgMHhjNzZjNTFhMywgMHhkMTkyZTgxOSwgMHhkNjk5MDYyNCwgMHhmNDBlMzU4NSwgMHgxMDZhYTA3MCwgMHgxOWE0YzExNiwgMHgxZTM3NmMwOCwgMHgyNzQ4Nzc0YywgMHgzNGIwYmNiNSwgMHgzOTFjMGNiMywgMHg0ZWQ4YWE0YSwgMHg1YjljY2E0ZiwgMHg2ODJlNmZmMywgMHg3NDhmODJlZSwgMHg3OGE1NjM2ZiwgMHg4NGM4NzgxNCwgMHg4Y2M3MDIwOCwgMHg5MGJlZmZmYSwgMHhhNDUwNmNlYiwgMHhiZWY5YTNmNywgMHhjNjcxNzhmMl07XG4vKiBnbG9iYWwgYXJyYXlzICovXG5cbnZhciBpaGFzaDtcbnZhciBjb3VudDtcbnZhciBidWZmZXI7XG52YXIgc2hhMjU2X2hleF9kaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG4vKiBBZGQgMzItYml0IGludGVnZXJzIHdpdGggMTYtYml0IG9wZXJhdGlvbnMgKGJ1ZyBpbiBzb21lIEpTLWludGVycHJldGVyczpcbm92ZXJmbG93KSAqL1xuXG5mdW5jdGlvbiBzYWZlX2FkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qIEluaXRpYWxpc2UgdGhlIFNIQTI1NiBjb21wdXRhdGlvbiAqL1xuXG5cbmZ1bmN0aW9uIHNoYTI1Nl9pbml0KCkge1xuICBpaGFzaCA9IG5ldyBBcnJheSg4KTtcbiAgY291bnQgPSBuZXcgQXJyYXkoMik7XG4gIGJ1ZmZlciA9IG5ldyBBcnJheSg2NCk7XG4gIGNvdW50WzBdID0gY291bnRbMV0gPSAwO1xuICBpaGFzaFswXSA9IDB4NmEwOWU2Njc7XG4gIGloYXNoWzFdID0gMHhiYjY3YWU4NTtcbiAgaWhhc2hbMl0gPSAweDNjNmVmMzcyO1xuICBpaGFzaFszXSA9IDB4YTU0ZmY1M2E7XG4gIGloYXNoWzRdID0gMHg1MTBlNTI3ZjtcbiAgaWhhc2hbNV0gPSAweDliMDU2ODhjO1xuICBpaGFzaFs2XSA9IDB4MWY4M2Q5YWI7XG4gIGloYXNoWzddID0gMHg1YmUwY2QxOTtcbn1cbi8qIFRyYW5zZm9ybSBhIDUxMi1iaXQgbWVzc2FnZSBibG9jayAqL1xuXG5cbmZ1bmN0aW9uIHNoYTI1Nl90cmFuc2Zvcm0oKSB7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgZTtcbiAgdmFyIGY7XG4gIHZhciBnO1xuICB2YXIgaDtcbiAgdmFyIFQxO1xuICB2YXIgVDI7XG4gIHZhciBXID0gbmV3IEFycmF5KDE2KTtcbiAgLyogSW5pdGlhbGl6ZSByZWdpc3RlcnMgd2l0aCB0aGUgcHJldmlvdXMgaW50ZXJtZWRpYXRlIHZhbHVlICovXG5cbiAgYSA9IGloYXNoWzBdO1xuICBiID0gaWhhc2hbMV07XG4gIGMgPSBpaGFzaFsyXTtcbiAgZCA9IGloYXNoWzNdO1xuICBlID0gaWhhc2hbNF07XG4gIGYgPSBpaGFzaFs1XTtcbiAgZyA9IGloYXNoWzZdO1xuICBoID0gaWhhc2hbN107XG4gIC8qIG1ha2UgMzItYml0IHdvcmRzICovXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgV1tpXSA9IGJ1ZmZlclsoaSA8PCAyKSArIDNdIHwgYnVmZmVyWyhpIDw8IDIpICsgMl0gPDwgOCB8IGJ1ZmZlclsoaSA8PCAyKSArIDFdIDw8IDE2IHwgYnVmZmVyW2kgPDwgMl0gPDwgMjQ7XG4gIH1cblxuICBmb3IgKHZhciBqID0gMDsgaiA8IDY0OyBqKyspIHtcbiAgICBUMSA9IGggKyBzaGEyNTZfU2lnbWExKGUpICsgY2hvaWNlKGUsIGYsIGcpICsgSzI1NltqXTtcbiAgICBpZiAoaiA8IDE2KSBUMSArPSBXW2pdO2Vsc2UgVDEgKz0gc2hhMjU2X2V4cGFuZChXLCBqKTtcbiAgICBUMiA9IHNoYTI1Nl9TaWdtYTAoYSkgKyBtYWpvcml0eShhLCBiLCBjKTtcbiAgICBoID0gZztcbiAgICBnID0gZjtcbiAgICBmID0gZTtcbiAgICBlID0gc2FmZV9hZGQoZCwgVDEpO1xuICAgIGQgPSBjO1xuICAgIGMgPSBiO1xuICAgIGIgPSBhO1xuICAgIGEgPSBzYWZlX2FkZChUMSwgVDIpO1xuICB9XG4gIC8qIENvbXB1dGUgdGhlIGN1cnJlbnQgaW50ZXJtZWRpYXRlIGhhc2ggdmFsdWUgKi9cblxuXG4gIGloYXNoWzBdICs9IGE7XG4gIGloYXNoWzFdICs9IGI7XG4gIGloYXNoWzJdICs9IGM7XG4gIGloYXNoWzNdICs9IGQ7XG4gIGloYXNoWzRdICs9IGU7XG4gIGloYXNoWzVdICs9IGY7XG4gIGloYXNoWzZdICs9IGc7XG4gIGloYXNoWzddICs9IGg7XG59XG4vKiBSZWFkIHRoZSBuZXh0IGNodW5rIG9mIGRhdGEgYW5kIHVwZGF0ZSB0aGUgU0hBMjU2IGNvbXB1dGF0aW9uICovXG5cblxuZnVuY3Rpb24gc2hhMjU2X3VwZGF0ZShkYXRhLCBpbnB1dExlbikge1xuICB2YXIgaTtcbiAgdmFyIGluZGV4O1xuICB2YXIgY3VycG9zID0gMDtcbiAgLyogQ29tcHV0ZSBudW1iZXIgb2YgYnl0ZXMgbW9kIDY0ICovXG5cbiAgaW5kZXggPSBjb3VudFswXSA+PiAzICYgMHgzZjtcbiAgdmFyIHJlbWFpbmRlciA9IGlucHV0TGVuICYgMHgzZjtcbiAgLyogVXBkYXRlIG51bWJlciBvZiBiaXRzICovXG5cbiAgaWYgKChjb3VudFswXSArPSBpbnB1dExlbiA8PCAzKSA8IGlucHV0TGVuIDw8IDMpIGNvdW50WzFdKys7XG4gIGNvdW50WzFdICs9IGlucHV0TGVuID4+IDI5O1xuICAvKiBUcmFuc2Zvcm0gYXMgbWFueSB0aW1lcyBhcyBwb3NzaWJsZSAqL1xuXG4gIGZvciAoaSA9IDA7IGkgKyA2MyA8IGlucHV0TGVuOyBpICs9IDY0KSB7XG4gICAgZm9yICh2YXIgaiA9IGluZGV4OyBqIDwgNjQ7IGorKykge1xuICAgICAgYnVmZmVyW2pdID0gZGF0YS5jaGFyQ29kZUF0KGN1cnBvcysrKTtcbiAgICB9XG5cbiAgICBzaGEyNTZfdHJhbnNmb3JtKCk7XG4gICAgaW5kZXggPSAwO1xuICB9XG4gIC8qIEJ1ZmZlciByZW1haW5pbmcgaW5wdXQgKi9cblxuXG4gIGZvciAodmFyIF9qID0gMDsgX2ogPCByZW1haW5kZXI7IF9qKyspIHtcbiAgICBidWZmZXJbX2pdID0gZGF0YS5jaGFyQ29kZUF0KGN1cnBvcysrKTtcbiAgfVxufVxuLyogRmluaXNoIHRoZSBjb21wdXRhdGlvbiBieSBvcGVyYXRpb25zIHN1Y2ggYXMgcGFkZGluZyAqL1xuXG5cbmZ1bmN0aW9uIHNoYTI1Nl9maW5hbCgpIHtcbiAgdmFyIGluZGV4ID0gY291bnRbMF0gPj4gMyAmIDB4M2Y7XG4gIGJ1ZmZlcltpbmRleCsrXSA9IDB4ODA7XG5cbiAgaWYgKGluZGV4IDw9IDU2KSB7XG4gICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgNTY7IGkrKykge1xuICAgICAgYnVmZmVyW2ldID0gMDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2kgPSBpbmRleDsgX2kgPCA2NDsgX2krKykge1xuICAgICAgYnVmZmVyW19pXSA9IDA7XG4gICAgfVxuXG4gICAgc2hhMjU2X3RyYW5zZm9ybSgpO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgNTY7IF9pMisrKSB7XG4gICAgICBidWZmZXJbX2kyXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgYnVmZmVyWzU2XSA9IGNvdW50WzFdID4+PiAyNCAmIDB4ZmY7XG4gIGJ1ZmZlcls1N10gPSBjb3VudFsxXSA+Pj4gMTYgJiAweGZmO1xuICBidWZmZXJbNThdID0gY291bnRbMV0gPj4+IDggJiAweGZmO1xuICBidWZmZXJbNTldID0gY291bnRbMV0gJiAweGZmO1xuICBidWZmZXJbNjBdID0gY291bnRbMF0gPj4+IDI0ICYgMHhmZjtcbiAgYnVmZmVyWzYxXSA9IGNvdW50WzBdID4+PiAxNiAmIDB4ZmY7XG4gIGJ1ZmZlcls2Ml0gPSBjb3VudFswXSA+Pj4gOCAmIDB4ZmY7XG4gIGJ1ZmZlcls2M10gPSBjb3VudFswXSAmIDB4ZmY7XG4gIHNoYTI1Nl90cmFuc2Zvcm0oKTtcbn1cbi8qIFNwbGl0IHRoZSBpbnRlcm5hbCBoYXNoIHZhbHVlcyBpbnRvIGFuIGFycmF5IG9mIGJ5dGVzICovXG5cblxuZnVuY3Rpb24gc2hhMjU2X2VuY29kZV9ieXRlcygpIHtcbiAgdmFyIGogPSAwO1xuICB2YXIgb3V0cHV0ID0gbmV3IEFycmF5KDMyKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIG91dHB1dFtqKytdID0gaWhhc2hbaV0gPj4+IDI0ICYgMHhmZjtcbiAgICBvdXRwdXRbaisrXSA9IGloYXNoW2ldID4+PiAxNiAmIDB4ZmY7XG4gICAgb3V0cHV0W2orK10gPSBpaGFzaFtpXSA+Pj4gOCAmIDB4ZmY7XG4gICAgb3V0cHV0W2orK10gPSBpaGFzaFtpXSAmIDB4ZmY7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyogR2V0IHRoZSBpbnRlcm5hbCBoYXNoIGFzIGEgaGV4IHN0cmluZyAqL1xuXG5cbmZ1bmN0aW9uIHNoYTI1Nl9lbmNvZGVfaGV4KCkge1xuICB2YXIgb3V0cHV0ID0gbmV3IFN0cmluZygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDI4OyBqID49IDA7IGogLT0gNCkge1xuICAgICAgb3V0cHV0ICs9IHNoYTI1Nl9oZXhfZGlnaXRzLmNoYXJBdChpaGFzaFtpXSA+Pj4gaiAmIDB4MGYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKiBNYWluIGZ1bmN0aW9uOiByZXR1cm5zIGEgaGV4IHN0cmluZyByZXByZXNlbnRpbmcgdGhlIFNIQTI1NiB2YWx1ZSBvZiB0aGVcbmdpdmVuIGRhdGEgKi9cblxuXG5mdW5jdGlvbiBkaWdlc3QoZGF0YSkge1xuICBzaGEyNTZfaW5pdCgpO1xuICBzaGEyNTZfdXBkYXRlKGRhdGEsIGRhdGEubGVuZ3RoKTtcbiAgc2hhMjU2X2ZpbmFsKCk7XG4gIHJldHVybiBzaGEyNTZfZW5jb2RlX2hleCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaWdlc3Q7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgX2V4Y2x1ZGVkID0gW1wicHJvX2xheW91dF9wYXJlbnRLZXlzXCIsIFwiY2hpbGRyZW5cIiwgXCJpY29uXCIsIFwiZmxhdE1lbnVcIiwgXCJpbmRleFJvdXRlXCIsIFwicm91dGVzXCJdO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyB0aHJvdyBfZTI7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTMpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UzOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7IGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHsgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7IF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpOyB9IGZ1bmN0aW9uIFdyYXBwZXIoKSB7IHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7IH0gV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogV3JhcHBlciwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7IH07IHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTsgfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpOyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IHsgcGF0aFRvUmVnZXhwIH0gZnJvbSAnLi4vcGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHNoYTI2NSBmcm9tICcuLi9zaGEyNjUnO1xuZXhwb3J0IHZhciBjaGlsZHJlblByb3BzTmFtZSA9ICdyb3V0ZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwUXVlcnlTdHJpbmdBbmRIYXNoRnJvbVBhdGgodXJsKSB7XG4gIHJldHVybiB1cmwuc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdO1xufVxuZXhwb3J0IHZhciBpc1VybCA9IGZ1bmN0aW9uIGlzVXJsKHBhdGgpIHtcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwocGF0aCk7XG4gICAgcmV0dXJuICEhdXJsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmV4cG9ydCB2YXIgZ2V0S2V5QnlQYXRoID0gZnVuY3Rpb24gZ2V0S2V5QnlQYXRoKGl0ZW0pIHtcbiAgdmFyIHBhdGggPSBpdGVtLnBhdGg7XG5cbiAgaWYgKCFwYXRoIHx8IHBhdGggPT09ICcvJykge1xuICAgIC8vIOWmguaenOi/mOaYr+ayoeacie+8jOeUqOWvueixoeeahGhhc2gg55Sf5oiQ5LiA5LiqXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBcIi9cIi5jb25jYXQoc2hhMjY1KEpTT04uc3RyaW5naWZ5KGl0ZW0pKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsvLyBkb20gc29tZSB0aGluZ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoID8gc3RyaXBRdWVyeVN0cmluZ0FuZEhhc2hGcm9tUGF0aChwYXRoKSA6IHBhdGg7XG59O1xuLyoqXG4gKiDojrflj5Zsb2NhbGXvvIzlop7liqDkuobkuIDkuKrlip/og73vvIzlpoLmnpwgbG9jYWxlID0gZmFsc2XvvIzlsIbkuI3kvb/nlKjlm73pmYXljJZcbiAqIEBwYXJhbSBpdGVtXG4gKiBAcGFyYW0gcGFyZW50TmFtZVxuICovXG5cbnZhciBnZXRJdGVtTG9jYWxlTmFtZSA9IGZ1bmN0aW9uIGdldEl0ZW1Mb2NhbGVOYW1lKGl0ZW0sIHBhcmVudE5hbWUpIHtcbiAgdmFyIG5hbWUgPSBpdGVtLm5hbWUsXG4gICAgICBsb2NhbGUgPSBpdGVtLmxvY2FsZTsgLy8g5aaC5p6c6YWN572u5LqGIGxvY2FsZSDlubbkuJQgbG9jYWxlIOS4uiBmYWxzZeaIliBcIlwiXG5cbiAgaWYgKCdsb2NhbGUnIGluIGl0ZW0gJiYgbG9jYWxlID09PSBmYWxzZSB8fCAhbmFtZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpdGVtLmxvY2FsZSB8fCBcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KG5hbWUpO1xufTtcbi8qKlxuICog5aaC5p6c5LiN5pivIC8g5byA5aS055qE5ZKM54i26IqC54K55YGa5LiA5LiL5ZCI5bm2XG4gKiDlpoLmnpzmmK8gLyDlvIDlpLTnmoTkuI3kvZzku7vkvZXlpITnkIZcbiAqIOWmguaenOaYryB1cmwg5Lmf55u05o6l6L+U5ZueXG4gKiBAcGFyYW0gcGF0aFxuICogQHBhcmFtIHBhcmVudFBhdGhcbiAqL1xuXG5cbnZhciBtZXJnZVBhdGggPSBmdW5jdGlvbiBtZXJnZVBhdGgoKSB7XG4gIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgdmFyIHBhcmVudFBhdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcvJztcblxuICBpZiAocGF0aC5lbmRzV2l0aCgnLyonKSkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoJy8qJywgJy8nKTtcbiAgfVxuXG4gIGlmICgocGF0aCB8fCBwYXJlbnRQYXRoKS5zdGFydHNXaXRoKCcvJykpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGlmIChpc1VybChwYXRoKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgcmV0dXJuIFwiL1wiLmNvbmNhdChwYXJlbnRQYXRoLCBcIi9cIikuY29uY2F0KHBhdGgpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xufTsgLy8gYmlnZmlzaCDnmoTlhbzlrrnlh4bor51cblxuXG52YXIgYmlnZmlzaENvbXBhdGlibGVDb252ZXJzaW9ucyA9IGZ1bmN0aW9uIGJpZ2Zpc2hDb21wYXRpYmxlQ29udmVyc2lvbnMocm91dGUsIHByb3BzKSB7XG4gIHZhciBfcm91dGUkbWVudSA9IHJvdXRlLm1lbnUsXG4gICAgICBtZW51ID0gX3JvdXRlJG1lbnUgPT09IHZvaWQgMCA/IHt9IDogX3JvdXRlJG1lbnUsXG4gICAgICBpbmRleFJvdXRlID0gcm91dGUuaW5kZXhSb3V0ZSxcbiAgICAgIF9yb3V0ZSRwYXRoID0gcm91dGUucGF0aCxcbiAgICAgIHBhdGggPSBfcm91dGUkcGF0aCA9PT0gdm9pZCAwID8gJycgOiBfcm91dGUkcGF0aDtcbiAgdmFyIHJvdXRlckNoaWxkcmVuID0gcm91dGUuY2hpbGRyZW4gfHwgW107XG4gIHZhciBfbWVudSRuYW1lID0gbWVudS5uYW1lLFxuICAgICAgbmFtZSA9IF9tZW51JG5hbWUgPT09IHZvaWQgMCA/IHJvdXRlLm5hbWUgOiBfbWVudSRuYW1lLFxuICAgICAgX21lbnUkaWNvbiA9IG1lbnUuaWNvbixcbiAgICAgIGljb24gPSBfbWVudSRpY29uID09PSB2b2lkIDAgPyByb3V0ZS5pY29uIDogX21lbnUkaWNvbixcbiAgICAgIF9tZW51JGhpZGVDaGlsZHJlbiA9IG1lbnUuaGlkZUNoaWxkcmVuLFxuICAgICAgaGlkZUNoaWxkcmVuID0gX21lbnUkaGlkZUNoaWxkcmVuID09PSB2b2lkIDAgPyByb3V0ZS5oaWRlQ2hpbGRyZW4gOiBfbWVudSRoaWRlQ2hpbGRyZW4sXG4gICAgICBfbWVudSRmbGF0TWVudSA9IG1lbnUuZmxhdE1lbnUsXG4gICAgICBmbGF0TWVudSA9IF9tZW51JGZsYXRNZW51ID09PSB2b2lkIDAgPyByb3V0ZS5mbGF0TWVudSA6IF9tZW51JGZsYXRNZW51OyAvLyDlhbzlrrnlubPpk7rlvI/lhpnms5VcbiAgLy8g5ou85o6lIGNoaWxkcmVuUm91dGVzLCDlpITnkIblrZjlnKggaW5kZXhSb3V0ZSDml7bnmoTpgLvovpFcblxuICB2YXIgY2hpbGRyZW5MaXN0ID0gaW5kZXhSb3V0ZSAmJiAvLyDlpoLmnpzlj6rmnIkgcmVkaXJlY3Qs5LiN55So5aSE55CG55qEXG4gIE9iamVjdC5rZXlzKGluZGV4Um91dGUpLmpvaW4oJywnKSAhPT0gJ3JlZGlyZWN0JyA/IFtfb2JqZWN0U3ByZWFkKHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIG1lbnU6IG1lbnVcbiAgfSwgaW5kZXhSb3V0ZSldLmNvbmNhdChyb3V0ZXJDaGlsZHJlbiB8fCBbXSkgOiByb3V0ZXJDaGlsZHJlbjsgLy8g5ou85o6l6L+U5Zue55qEIG1lbnUg5pWw5o2uXG5cbiAgdmFyIHJlc3VsdCA9IF9vYmplY3RTcHJlYWQoe30sIHJvdXRlKTtcblxuICBpZiAobmFtZSkge1xuICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGlmIChpY29uKSB7XG4gICAgcmVzdWx0Lmljb24gPSBpY29uO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuTGlzdCAmJiBjaGlsZHJlbkxpc3QubGVuZ3RoKSB7XG4gICAgLyoqIOWcqOiPnOWNleS4remakOiXj+WtkOmhuSAqL1xuICAgIGlmIChoaWRlQ2hpbGRyZW4pIHtcbiAgICAgIGRlbGV0ZSByZXN1bHQuY2hpbGRyZW47XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gLy8g6ZyA6KaB6YeN5paw6L+b6KGM5LiA5qyhXG5cblxuICAgIHZhciBmaW5hbENoaWxkcmVuID0gZm9ybWF0dGVyKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgZGF0YTogY2hpbGRyZW5MaXN0XG4gICAgfSksIHJvdXRlKTtcbiAgICAvKiog5Zyo6I+c5Y2V5Lit5Y+q6ZqQ6JeP5q2k6aG577yM5a2Q6aG55b6A5LiK5o+Q77yM5LuN5pen5bGV56S6ICovXG5cbiAgICBpZiAoZmxhdE1lbnUpIHtcbiAgICAgIHJldHVybiBmaW5hbENoaWxkcmVuO1xuICAgIH1cblxuICAgIGRlbGV0ZSByZXN1bHRbY2hpbGRyZW5Qcm9wc05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBub3ROdWxsQXJyYXkgPSBmdW5jdGlvbiBub3ROdWxsQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XG59O1xuLyoqXG4gKlxuICogQHBhcmFtIHByb3BzXG4gKiBAcGFyYW0gcGFyZW50XG4gKi9cblxuXG5mdW5jdGlvbiBmb3JtYXR0ZXIocHJvcHMpIHtcbiAgdmFyIHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgIHBhdGg6ICcvJ1xuICB9O1xuICB2YXIgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgICBmb3JtYXRNZXNzYWdlID0gcHJvcHMuZm9ybWF0TWVzc2FnZSxcbiAgICAgIHBhcmVudE5hbWUgPSBwcm9wcy5wYXJlbnROYW1lLFxuICAgICAgbWVudUxvY2FsZSA9IHByb3BzLmxvY2FsZTtcblxuICBpZiAoIWRhdGEgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAobm90TnVsbEFycmF5KGl0ZW0uY2hpbGRyZW4pKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXRlbS5wYXRoKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXRlbS5vcmlnaW5QYXRoKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXRlbS5sYXlvdXQpIHJldHVybiB0cnVlOyAvLyDph43lrprlkJFcblxuICAgIGlmIChpdGVtLnJlZGlyZWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGl0ZW0udW5hY2Nlc3NpYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgX2l0ZW0kbWVudSwgX2l0ZW0kbWVudTI7XG5cbiAgICBpZiAoKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9pdGVtJG1lbnUgPSBpdGVtLm1lbnUpID09PSBudWxsIHx8IF9pdGVtJG1lbnUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pdGVtJG1lbnUubmFtZSkgfHwgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5mbGF0TWVudSkgfHwgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9pdGVtJG1lbnUyID0gaXRlbS5tZW51KSA9PT0gbnVsbCB8fCBfaXRlbSRtZW51MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2l0ZW0kbWVudTIuZmxhdE1lbnUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIOaYvuekuuaMh+WumuWcqCBtZW51IOS4remakOiXj+ivpemhuVxuICAgIC8vIGxheW91dCDmj5Lku7bnmoTlip/og73vvIzlhbblrp7kuI3lupTor6XlrZjlnKjnmoRcblxuXG4gICAgaWYgKGl0ZW0ubWVudSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSkubWFwKGZ1bmN0aW9uIChmaW5hbGx5SXRlbSkge1xuICAgIHZhciBpdGVtID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBmaW5hbGx5SXRlbSksIHt9LCB7XG4gICAgICBwYXRoOiBmaW5hbGx5SXRlbS5wYXRoIHx8IGZpbmFsbHlJdGVtLm9yaWdpblBhdGhcbiAgICB9KTtcblxuICAgIGlmICghaXRlbS5jaGlsZHJlbiAmJiBpdGVtW2NoaWxkcmVuUHJvcHNOYW1lXSkge1xuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW1bY2hpbGRyZW5Qcm9wc05hbWVdO1xuICAgICAgZGVsZXRlIGl0ZW1bY2hpbGRyZW5Qcm9wc05hbWVdO1xuICAgIH0gLy8g5piv5ZCm5rKh5pyJ5p2D6ZmQ5p+l55yLXG4gICAgLy8g6L+Z5qC35bCx5LiN5Lya5pi+56S677yM5piv5LiA5Liq5YW85a655oCn55qE5pa55byPXG5cblxuICAgIGlmIChpdGVtLnVuYWNjZXNzaWJsZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBkZWxldGUgaXRlbS5uYW1lO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnBhdGggPT09ICcqJykge1xuICAgICAgaXRlbS5wYXRoID0gJy4nO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnBhdGggPT09ICcvKicpIHtcbiAgICAgIGl0ZW0ucGF0aCA9ICcuJztcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW0ucGF0aCAmJiBpdGVtLm9yaWdpblBhdGgpIHtcbiAgICAgIGl0ZW0ucGF0aCA9IGl0ZW0ub3JpZ2luUGF0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXRlbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge1xuICAgICAgcGF0aDogJy8nXG4gICAgfTtcbiAgICB2YXIgcm91dGVyQ2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuIHx8IGl0ZW1bY2hpbGRyZW5Qcm9wc05hbWVdIHx8IFtdO1xuICAgIHZhciBwYXRoID0gbWVyZ2VQYXRoKGl0ZW0ucGF0aCwgcGFyZW50ID8gcGFyZW50LnBhdGggOiAnLycpO1xuICAgIHZhciBuYW1lID0gaXRlbS5uYW1lO1xuICAgIHZhciBsb2NhbGUgPSBnZXRJdGVtTG9jYWxlTmFtZShpdGVtLCBwYXJlbnROYW1lIHx8ICdtZW51Jyk7IC8vIGlmIGVuYWJsZU1lbnVMb2NhbGUgdXNlIGl0ZW0ubmFtZSxcbiAgICAvLyBjbG9zZSBtZW51IGludGVybmF0aW9uYWxcblxuICAgIHZhciBsb2NhbGVOYW1lID0gbG9jYWxlICE9PSBmYWxzZSAmJiBtZW51TG9jYWxlICE9PSBmYWxzZSAmJiBmb3JtYXRNZXNzYWdlICYmIGxvY2FsZSA/IGZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgaWQ6IGxvY2FsZSxcbiAgICAgIGRlZmF1bHRNZXNzYWdlOiBuYW1lXG4gICAgfSkgOiBuYW1lO1xuXG4gICAgdmFyIF9wYXJlbnQkcHJvX2xheW91dF9wYSA9IHBhcmVudC5wcm9fbGF5b3V0X3BhcmVudEtleXMsXG4gICAgICAgIHByb19sYXlvdXRfcGFyZW50S2V5cyA9IF9wYXJlbnQkcHJvX2xheW91dF9wYSA9PT0gdm9pZCAwID8gW10gOiBfcGFyZW50JHByb19sYXlvdXRfcGEsXG4gICAgICAgIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuLFxuICAgICAgICBpY29uID0gcGFyZW50Lmljb24sXG4gICAgICAgIGZsYXRNZW51ID0gcGFyZW50LmZsYXRNZW51LFxuICAgICAgICBpbmRleFJvdXRlID0gcGFyZW50LmluZGV4Um91dGUsXG4gICAgICAgIHJvdXRlcyA9IHBhcmVudC5yb3V0ZXMsXG4gICAgICAgIHJlc3RQYXJlbnQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFyZW50LCBfZXhjbHVkZWQpO1xuXG4gICAgdmFyIGl0ZW1fcHJvX2xheW91dF9wYXJlbnRLZXlzID0gbmV3IFNldChbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByb19sYXlvdXRfcGFyZW50S2V5cyksIF90b0NvbnN1bWFibGVBcnJheShpdGVtLnBhcmVudEtleXMgfHwgW10pKSk7XG5cbiAgICBpZiAocGFyZW50LmtleSkge1xuICAgICAgaXRlbV9wcm9fbGF5b3V0X3BhcmVudEtleXMuYWRkKHBhcmVudC5rZXkpO1xuICAgIH1cblxuICAgIHZhciBmaW5hbGx5SXRlbSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0UGFyZW50KSwge30sIHtcbiAgICAgIG1lbnU6IHVuZGVmaW5lZFxuICAgIH0sIGl0ZW0pLCB7fSwge1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAga2V5OiBpdGVtLmtleSB8fCBnZXRLZXlCeVBhdGgoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtKSwge30sIHtcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSkpLFxuICAgICAgcHJvX2xheW91dF9wYXJlbnRLZXlzOiBBcnJheS5mcm9tKGl0ZW1fcHJvX2xheW91dF9wYXJlbnRLZXlzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICYmIGtleSAhPT0gJy8nO1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIGlmIChsb2NhbGVOYW1lKSB7XG4gICAgICBmaW5hbGx5SXRlbS5uYW1lID0gbG9jYWxlTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGZpbmFsbHlJdGVtLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsbHlJdGVtLm1lbnUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIGZpbmFsbHlJdGVtLm1lbnU7XG4gICAgfVxuXG4gICAgaWYgKG5vdE51bGxBcnJheShyb3V0ZXJDaGlsZHJlbikpIHtcbiAgICAgIHZhciBmb3JtYXR0ZXJDaGlsZHJlbiA9IGZvcm1hdHRlcihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgICAgZGF0YTogcm91dGVyQ2hpbGRyZW4sXG4gICAgICAgIHBhcmVudE5hbWU6IGxvY2FsZSB8fCAnJ1xuICAgICAgfSksIGZpbmFsbHlJdGVtKTtcblxuICAgICAgaWYgKG5vdE51bGxBcnJheShmb3JtYXR0ZXJDaGlsZHJlbikpIHtcbiAgICAgICAgZmluYWxseUl0ZW0uY2hpbGRyZW4gPSBmb3JtYXR0ZXJDaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmlnZmlzaENvbXBhdGlibGVDb252ZXJzaW9ucyhmaW5hbGx5SXRlbSwgcHJvcHMpO1xuICB9KS5mbGF0KDEpO1xufVxuLyoqXG4gKiDliKDpmaQgaGlkZUluTWVudSDlkowgaXRlbS5uYW1lIOS4jeWtmOWcqOeahFxuICovXG5cblxudmFyIGRlZmF1bHRGaWx0ZXJNZW51RGF0YSA9IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJNZW51RGF0YSgpIHtcbiAgdmFyIG1lbnVEYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIG1lbnVEYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIChpdGVtLm5hbWUgfHwgbm90TnVsbEFycmF5KGl0ZW0uY2hpbGRyZW4pKSAmJiAhaXRlbS5oaWRlSW5NZW51ICYmICFpdGVtLnJlZGlyZWN0O1xuICB9KS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgbmV3SXRlbSA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pO1xuXG4gICAgdmFyIHJvdXRlckNoaWxkcmVuID0gbmV3SXRlbS5jaGlsZHJlbiB8fCBpdGVtW2NoaWxkcmVuUHJvcHNOYW1lXSB8fCBbXTtcbiAgICBkZWxldGUgbmV3SXRlbVtjaGlsZHJlblByb3BzTmFtZV07XG5cbiAgICBpZiAobm90TnVsbEFycmF5KHJvdXRlckNoaWxkcmVuKSAmJiAhbmV3SXRlbS5oaWRlQ2hpbGRyZW5Jbk1lbnUgJiYgcm91dGVyQ2hpbGRyZW4uc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZCAmJiAhIWNoaWxkLm5hbWU7XG4gICAgfSkpIHtcbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IGRlZmF1bHRGaWx0ZXJNZW51RGF0YShyb3V0ZXJDaGlsZHJlbik7XG4gICAgICBpZiAobmV3Q2hpbGRyZW4ubGVuZ3RoKSByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBuZXdJdGVtKSwge30sIHtcbiAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgaXRlbSk7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcbn07XG4vKipcbiAqIHN1cHBvcnQgcGF0aFRvUmVnZXhwIGdldCBzdHJpbmdcbiAqL1xuXG5cbnZhciBSb3V0ZUxpc3RNYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXApIHtcbiAgX2luaGVyaXRzKFJvdXRlTGlzdE1hcCwgX01hcCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihSb3V0ZUxpc3RNYXApO1xuXG4gIGZ1bmN0aW9uIFJvdXRlTGlzdE1hcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVMaXN0TWFwKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZUxpc3RNYXAsIFt7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQocGF0aG5hbWUpIHtcbiAgICAgIHZhciByb3V0ZVZhbHVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuZW50cmllcygpKSxcbiAgICAgICAgICAgIF9zdGVwO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zbGljZWRUb0FycmF5KF9zdGVwLnZhbHVlLCAyKSxcbiAgICAgICAgICAgICAgICBrZXkgPSBfc3RlcCR2YWx1ZVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9zdGVwJHZhbHVlWzFdO1xuXG4gICAgICAgICAgICB2YXIgcGF0aCA9IHN0cmlwUXVlcnlTdHJpbmdBbmRIYXNoRnJvbVBhdGgoa2V5KTtcblxuICAgICAgICAgICAgaWYgKCFpc1VybChrZXkpICYmIHBhdGhUb1JlZ2V4cChwYXRoLCBbXSkudGVzdChwYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgcm91dGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcm91dGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlVmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlTGlzdE1hcDtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKE1hcCkpO1xuLyoqXG4gKiDojrflj5bpnaLljIXlsZHmmKDlsIRcbiAqIEBwYXJhbSBNZW51RGF0YUl0ZW1bXSBtZW51RGF0YSDoj5zljZXphY3nva5cbiAqL1xuXG5cbnZhciBnZXRCcmVhZGNydW1iTmFtZU1hcCA9IGZ1bmN0aW9uIGdldEJyZWFkY3J1bWJOYW1lTWFwKG1lbnVEYXRhKSB7XG4gIC8vIE1hcCBpcyB1c2VkIHRvIGVuc3VyZSB0aGUgb3JkZXIgb2Yga2V5c1xuICB2YXIgcm91dGVyTWFwID0gbmV3IFJvdXRlTGlzdE1hcCgpO1xuXG4gIHZhciBmbGF0dGVuTWVudURhdGEgPSBmdW5jdGlvbiBmbGF0dGVuTWVudURhdGEoZGF0YSwgcGFyZW50KSB7XG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuICAgICAgdmFyIHJvdXRlckNoaWxkcmVuID0gbWVudUl0ZW0uY2hpbGRyZW4gfHwgbWVudUl0ZW1bY2hpbGRyZW5Qcm9wc05hbWVdIHx8IFtdO1xuXG4gICAgICBpZiAobm90TnVsbEFycmF5KHJvdXRlckNoaWxkcmVuKSkge1xuICAgICAgICBmbGF0dGVuTWVudURhdGEocm91dGVyQ2hpbGRyZW4sIG1lbnVJdGVtKTtcbiAgICAgIH0gLy8gUmVkdWNlIG1lbW9yeSB1c2FnZVxuXG5cbiAgICAgIHZhciBwYXRoID0gbWVyZ2VQYXRoKG1lbnVJdGVtLnBhdGgsIHBhcmVudCA/IHBhcmVudC5wYXRoIDogJy8nKTtcbiAgICAgIHJvdXRlck1hcC5zZXQoc3RyaXBRdWVyeVN0cmluZ0FuZEhhc2hGcm9tUGF0aChwYXRoKSwgbWVudUl0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGZsYXR0ZW5NZW51RGF0YShtZW51RGF0YSk7XG4gIHJldHVybiByb3V0ZXJNYXA7XG59O1xuXG52YXIgY2xlYXJDaGlsZHJlbiA9IGZ1bmN0aW9uIGNsZWFyQ2hpbGRyZW4oKSB7XG4gIHZhciBtZW51RGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHJldHVybiBtZW51RGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgcm91dGVyQ2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuIHx8IGl0ZW1bY2hpbGRyZW5Qcm9wc05hbWVdO1xuXG4gICAgaWYgKG5vdE51bGxBcnJheShyb3V0ZXJDaGlsZHJlbikpIHtcbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IGNsZWFyQ2hpbGRyZW4ocm91dGVyQ2hpbGRyZW4pO1xuICAgICAgaWYgKG5ld0NoaWxkcmVuLmxlbmd0aCkgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pO1xuICAgIH1cblxuICAgIHZhciBmaW5hbGx5SXRlbSA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pO1xuXG4gICAgZGVsZXRlIGZpbmFsbHlJdGVtW2NoaWxkcmVuUHJvcHNOYW1lXTtcbiAgICBkZWxldGUgZmluYWxseUl0ZW0uY2hpbGRyZW47XG4gICAgcmV0dXJuIGZpbmFsbHlJdGVtO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG59O1xuLyoqXG4gKiBAcGFyYW0gcm91dGVMaXN0IOi3r+eUsemFjee9rlxuICogQHBhcmFtIGxvY2FsZSDmmK/lkKbkvb/nlKjlm73pmYXljJZcbiAqIEBwYXJhbSBmb3JtYXRNZXNzYWdlIOWbvemZheWMlueahOeoi+W6j1xuICogQHBhcmFtIGlnbm9yZUZpbHRlciDmmK/lkKbnrZvpgInmjonkuI3lsZXnpLrnmoQgbWVudUl0ZW0g6aG577yMcGx1Z2luLWxheW91dOmcgOimgeaJgOaciemhueebruadpeiuoeeul+W4g+WxgOagt+W8j1xuICogQHJldHVybnMgeyBicmVhZGNydW1iLCBtZW51RGF0YX1cbiAqL1xuXG5cbnZhciB0cmFuc2Zvcm1Sb3V0ZSA9IGZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlKHJvdXRlTGlzdCwgbG9jYWxlLCBmb3JtYXRNZXNzYWdlLCBpZ25vcmVGaWx0ZXIpIHtcbiAgdmFyIG9yaWdpbmFsTWVudURhdGEgPSBmb3JtYXR0ZXIoe1xuICAgIGRhdGE6IHJvdXRlTGlzdCxcbiAgICBmb3JtYXRNZXNzYWdlOiBmb3JtYXRNZXNzYWdlLFxuICAgIGxvY2FsZTogbG9jYWxlXG4gIH0pO1xuICB2YXIgbWVudURhdGEgPSBpZ25vcmVGaWx0ZXIgPyBjbGVhckNoaWxkcmVuKG9yaWdpbmFsTWVudURhdGEpIDogZGVmYXVsdEZpbHRlck1lbnVEYXRhKG9yaWdpbmFsTWVudURhdGEpOyAvLyBNYXAgdHlwZSB1c2VkIGZvciBpbnRlcm5hbCBsb2dpY1xuXG4gIHZhciBicmVhZGNydW1iID0gZ2V0QnJlYWRjcnVtYk5hbWVNYXAob3JpZ2luYWxNZW51RGF0YSk7XG4gIHJldHVybiB7XG4gICAgYnJlYWRjcnVtYjogYnJlYWRjcnVtYixcbiAgICBtZW51RGF0YTogbWVudURhdGFcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVJvdXRlOyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IHN0cmlwUXVlcnlTdHJpbmdBbmRIYXNoRnJvbVBhdGgsIGNoaWxkcmVuUHJvcHNOYW1lIH0gZnJvbSAnLi4vdHJhbnNmb3JtUm91dGUvdHJhbnNmb3JtUm91dGUnO1xuLyoqXG4gKiDojrflj5bmiZPlubPnmoQgbWVudURhdGFcbiAqIOS7pSBwYXRoIOS4uiBrZXlcbiAqIEBwYXJhbSBtZW51RGF0YVxuICovXG5cbmV4cG9ydCB2YXIgZ2V0RmxhdE1lbnVzID0gZnVuY3Rpb24gZ2V0RmxhdE1lbnVzKCkge1xuICB2YXIgbWVudURhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgbWVudXMgPSB7fTtcbiAgbWVudURhdGEuZm9yRWFjaChmdW5jdGlvbiAobWFwSXRlbSkge1xuICAgIHZhciBpdGVtID0gX29iamVjdFNwcmVhZCh7fSwgbWFwSXRlbSk7XG5cbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0ua2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtLmNoaWxkcmVuICYmIGl0ZW1bY2hpbGRyZW5Qcm9wc05hbWVdKSB7XG4gICAgICBpdGVtLmNoaWxkcmVuID0gaXRlbVtjaGlsZHJlblByb3BzTmFtZV07XG4gICAgICBkZWxldGUgaXRlbVtjaGlsZHJlblByb3BzTmFtZV07XG4gICAgfVxuXG4gICAgdmFyIHJvdXRlckNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbiB8fCBbXTtcbiAgICBtZW51c1tzdHJpcFF1ZXJ5U3RyaW5nQW5kSGFzaEZyb21QYXRoKGl0ZW0ucGF0aCB8fCBpdGVtLmtleSB8fCAnLycpXSA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pO1xuICAgIG1lbnVzW2l0ZW0ua2V5IHx8IGl0ZW0ucGF0aCB8fCAnLyddID0gX29iamVjdFNwcmVhZCh7fSwgaXRlbSk7XG5cbiAgICBpZiAocm91dGVyQ2hpbGRyZW4pIHtcbiAgICAgIG1lbnVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZW51cyksIGdldEZsYXRNZW51cyhyb3V0ZXJDaGlsZHJlbikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtZW51cztcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRGbGF0TWVudXM7IiwiLy9AdHMtaWdub3JlXG5pbXBvcnQgeyBwYXRoVG9SZWdleHAgfSBmcm9tICcuLi9wYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQgZ2V0RmxhdE1lbnUgZnJvbSAnLi4vZ2V0RmxhdE1lbnVzL2dldEZsYXRNZW51cyc7XG5pbXBvcnQgeyBpc1VybCwgc3RyaXBRdWVyeVN0cmluZ0FuZEhhc2hGcm9tUGF0aCB9IGZyb20gJy4uL3RyYW5zZm9ybVJvdXRlL3RyYW5zZm9ybVJvdXRlJztcbmV4cG9ydCB2YXIgZ2V0TWVudU1hdGNoZXMgPSBmdW5jdGlvbiBnZXRNZW51TWF0Y2hlcygpIHtcbiAgdmFyIGZsYXRNZW51S2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBleGFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICByZXR1cm4gZmxhdE1lbnVLZXlzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtID09PSAnLycgJiYgcGF0aCA9PT0gJy8nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbSAhPT0gJy8nICYmIGl0ZW0gIT09ICcvKicgJiYgaXRlbSAmJiAhaXNVcmwoaXRlbSkpIHtcbiAgICAgIHZhciBwYXRoS2V5ID0gc3RyaXBRdWVyeVN0cmluZ0FuZEhhc2hGcm9tUGF0aChpdGVtKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXhhY3RcbiAgICAgICAgaWYgKGV4YWN0KSB7XG4gICAgICAgICAgaWYgKHBhdGhUb1JlZ2V4cChcIlwiLmNvbmNhdChwYXRoS2V5KSkudGVzdChwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIC9hXG5cblxuICAgICAgICBpZiAocGF0aFRvUmVnZXhwKFwiXCIuY29uY2F0KHBhdGhLZXkpLCBbXSkudGVzdChwYXRoKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vIC9hL2IvYlxuXG5cbiAgICAgICAgaWYgKHBhdGhUb1JlZ2V4cChcIlwiLmNvbmNhdChwYXRoS2V5LCBcIi8oLiopXCIpKS50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7Ly8gY29uc29sZS5sb2coZXJyb3IsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIOWmguaenOWujOWFqOWMuemFjeaUvuWIsOacgOWQjumdolxuICAgIGlmIChhID09PSBwYXRoKSB7XG4gICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgaWYgKGIgPT09IHBhdGgpIHtcbiAgICAgIHJldHVybiAtMTA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEuc3Vic3RyKDEpLnNwbGl0KCcvJykubGVuZ3RoIC0gYi5zdWJzdHIoMSkuc3BsaXQoJy8nKS5sZW5ndGg7XG4gIH0pO1xufTtcbi8qKlxuICog6I635Y+W5b2T5YmN55qE6YCJ5Lit6I+c5Y2V5YiX6KGoXG4gKiBAcGFyYW0gcGF0aG5hbWVcbiAqIEBwYXJhbSBtZW51RGF0YVxuICogQHJldHVybnMgTWVudURhdGFJdGVtW11cbiAqL1xuXG5leHBvcnQgdmFyIGdldE1hdGNoTWVudSA9IGZ1bmN0aW9uIGdldE1hdGNoTWVudShwYXRobmFtZSwgbWVudURhdGEsXG4vKipcbiAqIOimgeS4jeimgeWxleekuuWFqOmDqOeahCBrZXlcbiAqL1xuZnVsbEtleXMsIGV4YWN0KSB7XG4gIHZhciBmbGF0TWVudXMgPSBnZXRGbGF0TWVudShtZW51RGF0YSk7XG4gIHZhciBmbGF0TWVudUtleXMgPSBPYmplY3Qua2V5cyhmbGF0TWVudXMpO1xuICB2YXIgbWVudVBhdGhLZXlzID0gZ2V0TWVudU1hdGNoZXMoZmxhdE1lbnVLZXlzLCBwYXRobmFtZSB8fCAnLycsIGV4YWN0KTtcblxuICBpZiAoIW1lbnVQYXRoS2V5cyB8fCBtZW51UGF0aEtleXMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmICghZnVsbEtleXMpIHtcbiAgICBtZW51UGF0aEtleXMgPSBbbWVudVBhdGhLZXlzW21lbnVQYXRoS2V5cy5sZW5ndGggLSAxXV07XG4gIH1cblxuICByZXR1cm4gbWVudVBhdGhLZXlzLm1hcChmdW5jdGlvbiAobWVudVBhdGhLZXkpIHtcbiAgICB2YXIgbWVudUl0ZW0gPSBmbGF0TWVudXNbbWVudVBhdGhLZXldIHx8IHtcbiAgICAgIHByb19sYXlvdXRfcGFyZW50S2V5czogJycsXG4gICAgICBrZXk6ICcnXG4gICAgfTsgLy8g5Y676YeNXG5cbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciBwYXJlbnRJdGVtcyA9IChtZW51SXRlbS5wcm9fbGF5b3V0X3BhcmVudEtleXMgfHwgW10pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBtYXAuc2V0KGtleSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmxhdE1lbnVzW2tleV07XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcblxuICAgIGlmIChtZW51SXRlbS5rZXkpIHtcbiAgICAgIHBhcmVudEl0ZW1zLnB1c2gobWVudUl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRJdGVtcztcbiAgfSkuZmxhdCgxKTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRNYXRjaE1lbnU7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmFuc2Zvcm1Sb3V0ZSB9IGZyb20gJy4vdHJhbnNmb3JtUm91dGUvdHJhbnNmb3JtUm91dGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRGbGF0TWVudXMgfSBmcm9tICcuL2dldEZsYXRNZW51cy9nZXRGbGF0TWVudXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRNYXRjaE1lbnUgfSBmcm9tICcuL2dldE1hdGNoTWVudS9nZXRNYXRjaE1lbnUnOyIsImltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCBTaWRlciBmcm9tICcuLi9TaWRlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIYXNTaWRlcihzaWRlcnMsIGNoaWxkcmVuLCBoYXNTaWRlcikge1xuICBpZiAodHlwZW9mIGhhc1NpZGVyID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaGFzU2lkZXI7XG4gIH1cbiAgaWYgKHNpZGVycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBjaGlsZE5vZGVzID0gdG9BcnJheShjaGlsZHJlbik7XG4gIHJldHVybiBjaGlsZE5vZGVzLnNvbWUobm9kZSA9PiBub2RlLnR5cGUgPT09IFNpZGVyKTtcbn0iLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBvbWl0IGZyb20gXCJyYy11dGlsL2VzL29taXRcIjtcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgdXNlSGFzU2lkZXIgZnJvbSAnLi9ob29rcy91c2VIYXNTaWRlcic7XG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5mdW5jdGlvbiBnZW5lcmF0b3IoX3JlZikge1xuICBsZXQge1xuICAgIHN1ZmZpeENscyxcbiAgICB0YWdOYW1lLFxuICAgIGRpc3BsYXlOYW1lXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gQmFzaWNDb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IEFkYXB0ZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJhc2ljQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgc3VmZml4Q2xzOiBzdWZmaXhDbHMsXG4gICAgICB0YWdOYW1lOiB0YWdOYW1lXG4gICAgfSwgcHJvcHMpKSkpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBBZGFwdGVyLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBBZGFwdGVyO1xuICB9O1xufVxuY29uc3QgQmFzaWMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgICBwcmVmaXhDbHM6IGN1c3RvbWl6ZVByZWZpeENscyxcbiAgICAgIHN1ZmZpeENscyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHRhZ05hbWU6IFRhZ05hbWVcbiAgICB9ID0gcHJvcHMsXG4gICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJzdWZmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJ0YWdOYW1lXCJdKTtcbiAgY29uc3Qge1xuICAgIGdldFByZWZpeENsc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdsYXlvdXQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCBbd3JhcFNTUiwgaGFzaElkLCBjc3NWYXJDbHNdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgcHJlZml4V2l0aFN1ZmZpeENscyA9IHN1ZmZpeENscyA/IGAke3ByZWZpeENsc30tJHtzdWZmaXhDbHN9YCA6IHByZWZpeENscztcbiAgcmV0dXJuIHdyYXBTU1IoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnTmFtZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGN1c3RvbWl6ZVByZWZpeENscyB8fCBwcmVmaXhXaXRoU3VmZml4Q2xzLCBjbGFzc05hbWUsIGhhc2hJZCwgY3NzVmFyQ2xzKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcnMpKSk7XG59KTtcbmNvbnN0IEJhc2ljTGF5b3V0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpcmVjdGlvblxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3QgW3NpZGVycywgc2V0U2lkZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3Qge1xuICAgICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICByb290Q2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBoYXNTaWRlcixcbiAgICAgIHRhZ05hbWU6IFRhZyxcbiAgICAgIHN0eWxlXG4gICAgfSA9IHByb3BzLFxuICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwicm9vdENsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiaGFzU2lkZXJcIiwgXCJ0YWdOYW1lXCIsIFwic3R5bGVcIl0pO1xuICBjb25zdCBwYXNzZWRQcm9wcyA9IG9taXQob3RoZXJzLCBbJ3N1ZmZpeENscyddKTtcbiAgY29uc3Qge1xuICAgIGdldFByZWZpeENscyxcbiAgICBsYXlvdXRcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnbGF5b3V0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgY29uc3QgbWVyZ2VkSGFzU2lkZXIgPSB1c2VIYXNTaWRlcihzaWRlcnMsIGNoaWxkcmVuLCBoYXNTaWRlcik7XG4gIGNvbnN0IFt3cmFwQ1NTVmFyLCBoYXNoSWQsIGNzc1ZhckNsc10gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCB7XG4gICAgW2Ake3ByZWZpeENsc30taGFzLXNpZGVyYF06IG1lcmdlZEhhc1NpZGVyLFxuICAgIFtgJHtwcmVmaXhDbHN9LXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnXG4gIH0sIGxheW91dCA9PT0gbnVsbCB8fCBsYXlvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheW91dC5jbGFzc05hbWUsIGNsYXNzTmFtZSwgcm9vdENsYXNzTmFtZSwgaGFzaElkLCBjc3NWYXJDbHMpO1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgc2lkZXJIb29rOiB7XG4gICAgICBhZGRTaWRlcjogaWQgPT4ge1xuICAgICAgICBzZXRTaWRlcnMocHJldiA9PiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByZXYpLCBbaWRdKSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlU2lkZXI6IGlkID0+IHtcbiAgICAgICAgc2V0U2lkZXJzKHByZXYgPT4gcHJldi5maWx0ZXIoY3VycmVudElkID0+IGN1cnJlbnRJZCAhPT0gaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBbXSk7XG4gIHJldHVybiB3cmFwQ1NTVmFyKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExheW91dENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsYXlvdXQgPT09IG51bGwgfHwgbGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXlvdXQuc3R5bGUpLCBzdHlsZSlcbiAgfSwgcGFzc2VkUHJvcHMpLCBjaGlsZHJlbikpKTtcbn0pO1xuY29uc3QgTGF5b3V0ID0gZ2VuZXJhdG9yKHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRpc3BsYXlOYW1lOiAnTGF5b3V0J1xufSkoQmFzaWNMYXlvdXQpO1xuY29uc3QgSGVhZGVyID0gZ2VuZXJhdG9yKHtcbiAgc3VmZml4Q2xzOiAnaGVhZGVyJyxcbiAgdGFnTmFtZTogJ2hlYWRlcicsXG4gIGRpc3BsYXlOYW1lOiAnSGVhZGVyJ1xufSkoQmFzaWMpO1xuY29uc3QgRm9vdGVyID0gZ2VuZXJhdG9yKHtcbiAgc3VmZml4Q2xzOiAnZm9vdGVyJyxcbiAgdGFnTmFtZTogJ2Zvb3RlcicsXG4gIGRpc3BsYXlOYW1lOiAnRm9vdGVyJ1xufSkoQmFzaWMpO1xuY29uc3QgQ29udGVudCA9IGdlbmVyYXRvcih7XG4gIHN1ZmZpeENsczogJ2NvbnRlbnQnLFxuICB0YWdOYW1lOiAnbWFpbicsXG4gIGRpc3BsYXlOYW1lOiAnQ29udGVudCdcbn0pKEJhc2ljKTtcbmV4cG9ydCB7IENvbnRlbnQsIEZvb3RlciwgSGVhZGVyIH07XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbnRlcm5hbExheW91dCwgeyBDb250ZW50LCBGb290ZXIsIEhlYWRlciB9IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBTaWRlciwgeyBTaWRlckNvbnRleHQgfSBmcm9tICcuL1NpZGVyJztcbmNvbnN0IExheW91dCA9IEludGVybmFsTGF5b3V0O1xuTGF5b3V0LkhlYWRlciA9IEhlYWRlcjtcbkxheW91dC5Gb290ZXIgPSBGb290ZXI7XG5MYXlvdXQuQ29udGVudCA9IENvbnRlbnQ7XG5MYXlvdXQuU2lkZXIgPSBTaWRlcjtcbkxheW91dC5fSW50ZXJuYWxTaWRlckNvbnRleHQgPSBTaWRlckNvbnRleHQ7XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IFByb1Byb3ZpZGVyIH0gZnJvbSAnQGFudC1kZXNpZ24vcHJvLXByb3ZpZGVyJztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBXcmFwQ29udGVudCA9IGZ1bmN0aW9uIFdyYXBDb250ZW50KHByb3BzKSB7XG4gIHZhciBfdXNlQ29udGV4dCA9IHVzZUNvbnRleHQoUHJvUHJvdmlkZXIpLFxuICAgIGhhc2hJZCA9IF91c2VDb250ZXh0Lmhhc2hJZDtcbiAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgX3Byb3BzJGhhc1BhZ2VDb250YWluID0gcHJvcHMuaGFzUGFnZUNvbnRhaW5lcixcbiAgICBoYXNQYWdlQ29udGFpbmVyID0gX3Byb3BzJGhhc1BhZ2VDb250YWluID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGhhc1BhZ2VDb250YWluO1xuICB2YXIgY29udGVudENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpLCBoYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFzLWhlYWRlclwiKSwgcHJvcHMuaGFzSGVhZGVyKSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LWhhcy1wYWdlLWNvbnRhaW5lclwiKSwgaGFzUGFnZUNvbnRhaW5lciA+IDApKTtcbiAgdmFyIEVycm9yQ29tcG9uZW50ID0gcHJvcHMuRXJyb3JCb3VuZGFyeSB8fCBFcnJvckJvdW5kYXJ5O1xuICByZXR1cm4gcHJvcHMuRXJyb3JCb3VuZGFyeSA9PT0gZmFsc2UgPyAvKiNfX1BVUkVfXyovX2pzeChMYXlvdXQuQ29udGVudCwge1xuICAgIGNsYXNzTmFtZTogY29udGVudENsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pIDogLyojX19QVVJFX18qL19qc3goRXJyb3JDb21wb25lbnQsIHtcbiAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goTGF5b3V0LkNvbnRlbnQsIHtcbiAgICAgIGNsYXNzTmFtZTogY29udGVudENsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH0pXG4gIH0pO1xufTtcbmV4cG9ydCB7IFdyYXBDb250ZW50IH07IiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCB2YXIgTG9nbyA9IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeHMoXCJzdmdcIiwge1xuICAgIHdpZHRoOiBcIjFlbVwiLFxuICAgIGhlaWdodDogXCIxZW1cIixcbiAgICB2aWV3Qm94OiBcIjAgMCAyMDAgMjAwXCIsXG4gICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeHMoXCJkZWZzXCIsIHtcbiAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3hzKFwibGluZWFyR3JhZGllbnRcIiwge1xuICAgICAgICB4MTogXCI2Mi4xMDIzMjczJVwiLFxuICAgICAgICB5MTogXCIwJVwiLFxuICAgICAgICB4MjogXCIxMDguMTk3MTglXCIsXG4gICAgICAgIHkyOiBcIjM3Ljg2MzU3NjQlXCIsXG4gICAgICAgIGlkOiBcImxpbmVhckdyYWRpZW50LTFcIixcbiAgICAgICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeChcInN0b3BcIiwge1xuICAgICAgICAgIHN0b3BDb2xvcjogXCIjNDI4NUVCXCIsXG4gICAgICAgICAgb2Zmc2V0OiBcIjAlXCJcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwic3RvcFwiLCB7XG4gICAgICAgICAgc3RvcENvbG9yOiBcIiMyRUM3RkZcIixcbiAgICAgICAgICBvZmZzZXQ6IFwiMTAwJVwiXG4gICAgICAgIH0pXVxuICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4cyhcImxpbmVhckdyYWRpZW50XCIsIHtcbiAgICAgICAgeDE6IFwiNjkuNjQ0MTE2JVwiLFxuICAgICAgICB5MTogXCIwJVwiLFxuICAgICAgICB4MjogXCI1NC4wNDI4OTc1JVwiLFxuICAgICAgICB5MjogXCIxMDguNDU2NzE0JVwiLFxuICAgICAgICBpZDogXCJsaW5lYXJHcmFkaWVudC0yXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goXCJzdG9wXCIsIHtcbiAgICAgICAgICBzdG9wQ29sb3I6IFwiIzI5Q0RGRlwiLFxuICAgICAgICAgIG9mZnNldDogXCIwJVwiXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeChcInN0b3BcIiwge1xuICAgICAgICAgIHN0b3BDb2xvcjogXCIjMTQ4RUZGXCIsXG4gICAgICAgICAgb2Zmc2V0OiBcIjM3Ljg2MDA2ODclXCJcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwic3RvcFwiLCB7XG4gICAgICAgICAgc3RvcENvbG9yOiBcIiMwQTYwRkZcIixcbiAgICAgICAgICBvZmZzZXQ6IFwiMTAwJVwiXG4gICAgICAgIH0pXVxuICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4cyhcImxpbmVhckdyYWRpZW50XCIsIHtcbiAgICAgICAgeDE6IFwiNjkuNjkwODE2NSVcIixcbiAgICAgICAgeTE6IFwiLTEyLjk3NDM1ODclXCIsXG4gICAgICAgIHgyOiBcIjE2LjcyMjg5ODElXCIsXG4gICAgICAgIHkyOiBcIjExNy4zOTEyNDglXCIsXG4gICAgICAgIGlkOiBcImxpbmVhckdyYWRpZW50LTNcIixcbiAgICAgICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeChcInN0b3BcIiwge1xuICAgICAgICAgIHN0b3BDb2xvcjogXCIjRkE4MTZFXCIsXG4gICAgICAgICAgb2Zmc2V0OiBcIjAlXCJcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwic3RvcFwiLCB7XG4gICAgICAgICAgc3RvcENvbG9yOiBcIiNGNzRBNUNcIixcbiAgICAgICAgICBvZmZzZXQ6IFwiNDEuNDcyNjA2JVwiXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeChcInN0b3BcIiwge1xuICAgICAgICAgIHN0b3BDb2xvcjogXCIjRjUxRDJDXCIsXG4gICAgICAgICAgb2Zmc2V0OiBcIjEwMCVcIlxuICAgICAgICB9KV1cbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeHMoXCJsaW5lYXJHcmFkaWVudFwiLCB7XG4gICAgICAgIHgxOiBcIjY4LjEyNzk4NzIlXCIsXG4gICAgICAgIHkxOiBcIi0zNS42OTA1NzM3JVwiLFxuICAgICAgICB4MjogXCIzMC40NDAwOTE0JVwiLFxuICAgICAgICB5MjogXCIxMTQuOTQyNjc5JVwiLFxuICAgICAgICBpZDogXCJsaW5lYXJHcmFkaWVudC00XCIsXG4gICAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goXCJzdG9wXCIsIHtcbiAgICAgICAgICBzdG9wQ29sb3I6IFwiI0ZBOEU3RFwiLFxuICAgICAgICAgIG9mZnNldDogXCIwJVwiXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeChcInN0b3BcIiwge1xuICAgICAgICAgIHN0b3BDb2xvcjogXCIjRjc0QTVDXCIsXG4gICAgICAgICAgb2Zmc2V0OiBcIjUxLjI2MzUxOTElXCJcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwic3RvcFwiLCB7XG4gICAgICAgICAgc3RvcENvbG9yOiBcIiNGNTFEMkNcIixcbiAgICAgICAgICBvZmZzZXQ6IFwiMTAwJVwiXG4gICAgICAgIH0pXVxuICAgICAgfSldXG4gICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwiZ1wiLCB7XG4gICAgICBzdHJva2U6IFwibm9uZVwiLFxuICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcImdcIiwge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC0yMC4wMDAwMDAsIC0yMC4wMDAwMDApXCIsXG4gICAgICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcImdcIiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApXCIsXG4gICAgICAgICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4cyhcImdcIiwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeHMoXCJnXCIsIHtcbiAgICAgICAgICAgICAgZmlsbFJ1bGU6IFwibm9uemVyb1wiLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4cyhcImdcIiwge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGQ6IFwiTTkxLjU4ODA4NjMsNC4xNzY1MjgyMyBMNC4xNzk5NjU0NCw5MS41MTI3NzI4IEMtMC41MTkyNDA2MDUsOTYuMjA4MTE0NiAtMC41MTkyNDA2MDUsMTAzLjc5MTg4NSA0LjE3OTk2NTQ0LDEwOC40ODcyMjcgTDkxLjU4ODA4NjMsMTk1LjgyMzQ3MiBDOTYuMjg3MjkyMywyMDAuNTE4ODE0IDEwMy44NzczMDQsMjAwLjUxODgxNCAxMDguNTc2NTEsMTk1LjgyMzQ3MiBMMTQ1LjIyNTQ4NywxNTkuMjA0NjMyIEMxNDkuNDMzOTY5LDE1NC45OTk2MTEgMTQ5LjQzMzk2OSwxNDguMTgxOTI0IDE0NS4yMjU0ODcsMTQzLjk3NjkwMyBDMTQxLjAxNzAwNSwxMzkuNzcxODgxIDEzNC4xOTM3MDcsMTM5Ljc3MTg4MSAxMjkuOTg1MjI1LDE0My45NzY5MDMgTDEwMi4yMDE5MywxNzEuNzM3MzUyIEMxMDEuMDMyMzA1LDE3Mi45MDYwMTUgOTkuMjU3MTYwOSwxNzIuOTA2MDE1IDk4LjA4NzUzNTksMTcxLjczNzM1MiBMMjguMjg1OTA4LDEwMS45OTMxMjIgQzI3LjExNjI4MzEsMTAwLjgyNDQ1OSAyNy4xMTYyODMxLDk5LjA1MDc3NSAyOC4yODU5MDgsOTcuODgyMTExOCBMOTguMDg3NTM1OSwyOC4xMzc4ODIzIEM5OS4yNTcxNjA5LDI2Ljk2OTIxOTEgMTAxLjAzMjMwNSwyNi45NjkyMTkxIDEwMi4yMDE5MywyOC4xMzc4ODIzIEwxMjkuOTg1MjI1LDU1Ljg5ODMzMTQgQzEzNC4xOTM3MDcsNjAuMTAzMzUyOCAxNDEuMDE3MDA1LDYwLjEwMzM1MjggMTQ1LjIyNTQ4Nyw1NS44OTgzMzE0IEMxNDkuNDMzOTY5LDUxLjY5MzMxIDE0OS40MzM5NjksNDQuODc1NjIzMiAxNDUuMjI1NDg3LDQwLjY3MDYwMTggTDEwOC41ODA1NSw0LjA1NTc0NTkyIEMxMDMuODYyMDQ5LC0wLjUzNzk4Njg0NiA5Ni4yNjkyNjE4LC0wLjUwMDc5NzkwNiA5MS41ODgwODYzLDQuMTc2NTI4MjMgWlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcbiAgICAgICAgICAgICAgICB9KSwgLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGQ6IFwiTTkxLjU4ODA4NjMsNC4xNzY1MjgyMyBMNC4xNzk5NjU0NCw5MS41MTI3NzI4IEMtMC41MTkyNDA2MDUsOTYuMjA4MTE0NiAtMC41MTkyNDA2MDUsMTAzLjc5MTg4NSA0LjE3OTk2NTQ0LDEwOC40ODcyMjcgTDkxLjU4ODA4NjMsMTk1LjgyMzQ3MiBDOTYuMjg3MjkyMywyMDAuNTE4ODE0IDEwMy44NzczMDQsMjAwLjUxODgxNCAxMDguNTc2NTEsMTk1LjgyMzQ3MiBMMTQ1LjIyNTQ4NywxNTkuMjA0NjMyIEMxNDkuNDMzOTY5LDE1NC45OTk2MTEgMTQ5LjQzMzk2OSwxNDguMTgxOTI0IDE0NS4yMjU0ODcsMTQzLjk3NjkwMyBDMTQxLjAxNzAwNSwxMzkuNzcxODgxIDEzNC4xOTM3MDcsMTM5Ljc3MTg4MSAxMjkuOTg1MjI1LDE0My45NzY5MDMgTDEwMi4yMDE5MywxNzEuNzM3MzUyIEMxMDEuMDMyMzA1LDE3Mi45MDYwMTUgOTkuMjU3MTYwOSwxNzIuOTA2MDE1IDk4LjA4NzUzNTksMTcxLjczNzM1MiBMMjguMjg1OTA4LDEwMS45OTMxMjIgQzI3LjExNjI4MzEsMTAwLjgyNDQ1OSAyNy4xMTYyODMxLDk5LjA1MDc3NSAyOC4yODU5MDgsOTcuODgyMTExOCBMOTguMDg3NTM1OSwyOC4xMzc4ODIzIEMxMDAuOTk5ODY0LDI1LjYyNzE4MzYgMTA1Ljc1MTY0MiwyMC41NDE4MjQgMTEyLjcyOTY1MiwxOS4zNTI0NDg3IEMxMTcuOTE1NTg1LDE4LjQ2ODUyNjEgMTIzLjU4NTIxOSwyMC40MTQwMjM5IDEyOS43Mzg1NTQsMjUuMTg4OTQyNCBDMTI1LjYyNDY2MywyMS4wNzg0MjkyIDExOC41NzE5OTUsMTQuMDM0MDMwNCAxMDguNTgwNTUsNC4wNTU3NDU5MiBDMTAzLjg2MjA0OSwtMC41Mzc5ODY4NDYgOTYuMjY5MjYxOCwtMC41MDA3OTc5MDYgOTEuNTg4MDg2Myw0LjE3NjUyODIzIFpcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwidXJsKCNsaW5lYXJHcmFkaWVudC0yKVwiXG4gICAgICAgICAgICAgICAgfSldXG4gICAgICAgICAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgIGQ6IFwiTTE1My42ODU2MzMsMTM1Ljg1NDU3OSBDMTU3Ljg5NDExNSwxNDAuMDU5NiAxNjQuNzE3NDEyLDE0MC4wNTk2IDE2OC45MjU4OTQsMTM1Ljg1NDU3OSBMMTk1Ljk1OTk3NywxMDguODQyNzI2IEMyMDAuNjU5MTgzLDEwNC4xNDczODQgMjAwLjY1OTE4Myw5Ni41NjM2MTMzIDE5NS45NjA1MjcsOTEuODY4ODE5NCBMMTY4LjY5MDc3Nyw2NC43MTgxMTU5IEMxNjQuNDcyMzMyLDYwLjUxODA4NTggMTU3LjY0Njg2OCw2MC41MjQxNDI1IDE1My40MzU4OTUsNjQuNzMxNjUyNiBDMTQ5LjIyNzQxMyw2OC45MzY2NzQgMTQ5LjIyNzQxMyw3NS43NTQzNjA3IDE1My40MzU4OTUsNzkuOTU5MzgyMSBMMTcxLjg1NDAzNSw5OC4zNjIzNzY1IEMxNzMuMDIzNjYsOTkuNTMxMDM5NiAxNzMuMDIzNjYsMTAxLjMwNDcyNCAxNzEuODU0MDM1LDEwMi40NzMzODcgTDE1My42ODU2MzMsMTIwLjYyNjg0OSBDMTQ5LjQ3NzE1LDEyNC44MzE4NyAxNDkuNDc3MTUsMTMxLjY0OTU1NyAxNTMuNjg1NjMzLDEzNS44NTQ1NzkgWlwiLFxuICAgICAgICAgICAgICAgIGZpbGw6IFwidXJsKCNsaW5lYXJHcmFkaWVudC0zKVwiXG4gICAgICAgICAgICAgIH0pXVxuICAgICAgICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwiZWxsaXBzZVwiLCB7XG4gICAgICAgICAgICAgIGZpbGw6IFwidXJsKCNsaW5lYXJHcmFkaWVudC00KVwiLFxuICAgICAgICAgICAgICBjeDogXCIxMDAuNTE5MzM5XCIsXG4gICAgICAgICAgICAgIGN5OiBcIjEwMC40MzY2ODFcIixcbiAgICAgICAgICAgICAgcng6IFwiMjMuNjAwMTkyNlwiLFxuICAgICAgICAgICAgICByeTogXCIyMy41ODA3ODZcIlxuICAgICAgICAgICAgfSldXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSldXG4gIH0pO1xufTsiLCIvLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbnZhciBDb3B5cmlnaHRPdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyem01LjYtNTMyLjdjNTMgMCA4OSAzMy44IDkzIDgzLjQuMyA0LjIgMy44IDcuNCA4IDcuNGg1Ni43YzIuNiAwIDQuNy0yLjEgNC43LTQuNyAwLTg2LjctNjguNC0xNDcuNC0xNjIuNy0xNDcuNEM0MDcuNCAyOTAgMzQ0IDM2NC4yIDM0NCA0ODYuOHY1Mi4zQzM0NCA2NjAuOCA0MDcuNCA3MzQgNTE3LjMgNzM0Yzk0IDAgMTYyLjctNTguOCAxNjIuNy0xNDEuNCAwLTIuNi0yLjEtNC43LTQuNy00LjdoLTU2LjhjLTQuMiAwLTcuNiAzLjItOCA3LjMtNC4yIDQ2LjEtNDAuMSA3Ny44LTkzIDc3LjgtNjUuMyAwLTEwMi4xLTQ3LjktMTAyLjEtMTMzLjZ2LTUyLjZjLjEtODcgMzctMTM1LjUgMTAyLjItMTM1LjV6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJjb3B5cmlnaHRcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodE91dGxpbmVkO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29weXJpZ2h0T3V0bGluZWRTdmcgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9lcy9hc24vQ29weXJpZ2h0T3V0bGluZWRcIjtcbmltcG9ydCBBbnRkSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiO1xudmFyIENvcHlyaWdodE91dGxpbmVkID0gZnVuY3Rpb24gQ29weXJpZ2h0T3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZEljb24sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IENvcHlyaWdodE91dGxpbmVkU3ZnXG4gIH0pKTtcbn07XG5cbi8qKiFbY29weXJpZ2h0XShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVEFpSUdobGFXZG9kRDBpTlRBaUlHWnBiR3c5SWlOallXTmhZMkVpSUhacFpYZENiM2c5SWpZMElEWTBJRGc1TmlBNE9UWWlJR1p2WTNWellXSnNaVDBpWm1Gc2MyVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFV4TWlBMk5FTXlOalF1TmlBMk5DQTJOQ0F5TmpRdU5pQTJOQ0ExTVRKek1qQXdMallnTkRRNElEUTBPQ0EwTkRnZ05EUTRMVEl3TUM0MklEUTBPQzAwTkRoVE56VTVMalFnTmpRZ05URXlJRFkwZW0wd0lEZ3lNR010TWpBMUxqUWdNQzB6TnpJdE1UWTJMall0TXpjeUxUTTNNbk14TmpZdU5pMHpOeklnTXpjeUxUTTNNaUF6TnpJZ01UWTJMallnTXpjeUlETTNNaTB4TmpZdU5pQXpOekl0TXpjeUlETTNNbnB0TlM0MkxUVXpNaTQzWXpVeklEQWdPRGtnTXpNdU9DQTVNeUE0TXk0MExqTWdOQzR5SURNdU9DQTNMalFnT0NBM0xqUm9OVFl1TjJNeUxqWWdNQ0EwTGpjdE1pNHhJRFF1TnkwMExqY2dNQzA0Tmk0M0xUWTRMalF0TVRRM0xqUXRNVFl5TGpjdE1UUTNMalJETkRBM0xqUWdNamt3SURNME5DQXpOalF1TWlBek5EUWdORGcyTGpoMk5USXVNME16TkRRZ05qWXdMamdnTkRBM0xqUWdOek0wSURVeE55NHpJRGN6TkdNNU5DQXdJREUyTWk0M0xUVTRMamdnTVRZeUxqY3RNVFF4TGpRZ01DMHlMall0TWk0eExUUXVOeTAwTGpjdE5DNDNhQzAxTmk0NFl5MDBMaklnTUMwM0xqWWdNeTR5TFRnZ055NHpMVFF1TWlBME5pNHhMVFF3TGpFZ056Y3VPQzA1TXlBM055NDRMVFkxTGpNZ01DMHhNREl1TVMwME55NDVMVEV3TWk0eExURXpNeTQyZGkwMU1pNDJZeTR4TFRnM0lETTNMVEV6TlM0MUlERXdNaTR5TFRFek5TNDFlaUlnTHo0OEwzTjJaejQ9KSAqL1xudmFyIFJlZkljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihDb3B5cmlnaHRPdXRsaW5lZCk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSZWZJY29uLmRpc3BsYXlOYW1lID0gJ0NvcHlyaWdodE91dGxpbmVkJztcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZkljb247IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xudmFyIGdlbkZvb3RlclRvb2xCYXJTdHlsZSA9IGZ1bmN0aW9uIGdlbkZvb3RlclRvb2xCYXJTdHlsZSh0b2tlbikge1xuICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCB0b2tlbi5jb21wb25lbnRDbHMsIHtcbiAgICBtYXJnaW5CbG9jazogMCxcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiA0OCxcbiAgICBtYXJnaW5CbG9ja0VuZDogMjQsXG4gICAgbWFyZ2luSW5saW5lOiAwLFxuICAgIHBhZGRpbmdCbG9jazogMCxcbiAgICBwYWRkaW5nSW5saW5lOiAxNixcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICcmLWxpc3QnOiB7XG4gICAgICBtYXJnaW5CbG9ja0VuZDogOCxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRTZWNvbmRhcnksXG4gICAgICAnJi1saW5rJzoge1xuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0U2Vjb25kYXJ5LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9rZW4ubGlua0RlY29yYXRpb25cbiAgICAgIH0sXG4gICAgICAnKjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBtYXJnaW5JbmxpbmVFbmQ6IDhcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeVxuICAgICAgfVxuICAgIH0sXG4gICAgJyYtY29weXJpZ2h0Jzoge1xuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHlsZShwcmVmaXhDbHMpIHtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnUHJvTGF5b3V0Rm9vdGVyJywgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgdmFyIHByb0NhcmRUb2tlbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pLCB7fSwge1xuICAgICAgY29tcG9uZW50Q2xzOiBcIi5cIi5jb25jYXQocHJlZml4Q2xzKVxuICAgIH0pO1xuICAgIHJldHVybiBbZ2VuRm9vdGVyVG9vbEJhclN0eWxlKHByb0NhcmRUb2tlbildO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG52YXIgR2xvYmFsRm9vdGVyID0gZnVuY3Rpb24gR2xvYmFsRm9vdGVyKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgIGxpbmtzID0gX3JlZi5saW5rcyxcbiAgICBjb3B5cmlnaHQgPSBfcmVmLmNvcHlyaWdodCxcbiAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KTtcbiAgdmFyIGJhc2VDbGFzc05hbWUgPSBjb250ZXh0LmdldFByZWZpeENscyhwcmVmaXhDbHMgfHwgJ3Byby1nbG9iYWwtZm9vdGVyJyk7XG4gIHZhciBfdXNlU3R5bGUgPSB1c2VTdHlsZShiYXNlQ2xhc3NOYW1lKSxcbiAgICB3cmFwU1NSID0gX3VzZVN0eWxlLndyYXBTU1IsXG4gICAgaGFzaElkID0gX3VzZVN0eWxlLmhhc2hJZDtcbiAgaWYgKChsaW5rcyA9PSBudWxsIHx8IGxpbmtzID09PSBmYWxzZSB8fCBBcnJheS5pc0FycmF5KGxpbmtzKSAmJiBsaW5rcy5sZW5ndGggPT09IDApICYmIChjb3B5cmlnaHQgPT0gbnVsbCB8fCBjb3B5cmlnaHQgPT09IGZhbHNlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovX2pzeHMoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhiYXNlQ2xhc3NOYW1lLCBoYXNoSWQsIGNsYXNzTmFtZSksXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGNoaWxkcmVuOiBbbGlua3MgJiYgLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1saXN0IFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICBjaGlsZHJlbjogbGlua3MubWFwKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImFcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItbGlzdC1saW5rIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgICAgdGl0bGU6IGxpbmsua2V5LFxuICAgICAgICAgIHRhcmdldDogbGluay5ibGFua1RhcmdldCA/ICdfYmxhbmsnIDogJ19zZWxmJyxcbiAgICAgICAgICBocmVmOiBsaW5rLmhyZWYsXG4gICAgICAgICAgcmVsOiBcIm5vcmVmZXJyZXJcIixcbiAgICAgICAgICBjaGlsZHJlbjogbGluay50aXRsZVxuICAgICAgICB9LCBsaW5rLmtleSk7XG4gICAgICB9KVxuICAgIH0pLCBjb3B5cmlnaHQgJiYgLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb3B5cmlnaHQgXCIpLmNvbmNhdChoYXNoSWQpLnRyaW0oKSxcbiAgICAgIGNoaWxkcmVuOiBjb3B5cmlnaHRcbiAgICB9KV1cbiAgfSkpO1xufTtcbmV4cG9ydCB7IEdsb2JhbEZvb3RlciB9OyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgeyBDb3B5cmlnaHRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2xvYmFsRm9vdGVyIH0gZnJvbSBcIi4vR2xvYmFsRm9vdGVyXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIEZvb3RlciA9IExheW91dC5Gb290ZXI7XG52YXIgRGVmYXVsdEZvb3RlciA9IGZ1bmN0aW9uIERlZmF1bHRGb290ZXIoX3JlZikge1xuICB2YXIgbGlua3MgPSBfcmVmLmxpbmtzLFxuICAgIGNvcHlyaWdodCA9IF9yZWYuY29weXJpZ2h0LFxuICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KEZvb3Rlciwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LCBzdHlsZSksXG4gICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KEdsb2JhbEZvb3Rlciwge1xuICAgICAgbGlua3M6IGxpbmtzLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBjb3B5cmlnaHQ6IGNvcHlyaWdodCA9PT0gZmFsc2UgPyBudWxsIDogLyojX19QVVJFX18qL19qc3hzKEZyYWdtZW50LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goQ29weXJpZ2h0T3V0bGluZWQsIHt9KSwgXCIgXCIsIGNvcHlyaWdodF1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG59O1xuZXhwb3J0IHsgRGVmYXVsdEZvb3RlciB9OyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5leHBvcnQgdmFyIGdldE9wZW5LZXlzRnJvbU1lbnVEYXRhID0gZnVuY3Rpb24gZ2V0T3BlbktleXNGcm9tTWVudURhdGEobWVudURhdGEpIHtcbiAgcmV0dXJuIChtZW51RGF0YSB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChwcmUsIGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5rZXkpIHtcbiAgICAgIHByZS5wdXNoKGl0ZW0ua2V5KTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uY2hpbGRyZW4gfHwgaXRlbS5yb3V0ZXMpIHtcbiAgICAgIHZhciBuZXdBcnJheSA9IHByZS5jb25jYXQoZ2V0T3BlbktleXNGcm9tTWVudURhdGEoaXRlbS5jaGlsZHJlbiB8fCBpdGVtLnJvdXRlcykgfHwgW10pO1xuICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH1cbiAgICByZXR1cm4gcHJlO1xuICB9LCBbXSk7XG59O1xudmFyIHRoZW1lQ29uZmlnID0ge1xuICB0ZWNoQmx1ZTogJyMxNjc3RkYnLFxuICBkYXlicmVhazogJyMxODkwZmYnLFxuICBkdXN0OiAnI0Y1MjIyRCcsXG4gIHZvbGNhbm86ICcjRkE1NDFDJyxcbiAgc3Vuc2V0OiAnI0ZBQUQxNCcsXG4gIGN5YW46ICcjMTNDMkMyJyxcbiAgZ3JlZW46ICcjNTJDNDFBJyxcbiAgZ2Vla2JsdWU6ICcjMkY1NEVCJyxcbiAgcHVycGxlOiAnIzcyMkVEMSdcbn07XG4vKipcbiAqIERheWJyZWFrLT4gIzE4OTBmZlxuICpcbiAqIEBwYXJhbSB2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlblN0cmluZ1RvVGhlbWUodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdGhlbWVDb25maWdbdmFsXSA/IHRoZW1lQ29uZmlnW3ZhbF0gOiB2YWwgfHwgJyc7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNZW51SXRlbShtZW51c0RhdGEpIHtcbiAgcmV0dXJuIG1lbnVzRGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuIHx8IFtdO1xuICAgIHZhciBmaW5hbEl0ZW0gPSBfb2JqZWN0U3ByZWFkKHt9LCBpdGVtKTtcbiAgICBpZiAoIWZpbmFsSXRlbS5jaGlsZHJlbiAmJiBmaW5hbEl0ZW0ucm91dGVzKSB7XG4gICAgICBmaW5hbEl0ZW0uY2hpbGRyZW4gPSBmaW5hbEl0ZW0ucm91dGVzO1xuICAgIH1cbiAgICBpZiAoIWZpbmFsSXRlbS5uYW1lIHx8IGZpbmFsSXRlbS5oaWRlSW5NZW51KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGZpbmFsSXRlbSAmJiBmaW5hbEl0ZW0gIT09IG51bGwgJiYgZmluYWxJdGVtICE9PSB2b2lkIDAgJiYgZmluYWxJdGVtLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoIWZpbmFsSXRlbS5oaWRlQ2hpbGRyZW5Jbk1lbnUgJiYgY2hpbGRyZW4uc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkICYmIGNoaWxkLm5hbWUgJiYgIWNoaWxkLmhpZGVJbk1lbnU7XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtKSwge30sIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2xlYXJNZW51SXRlbShjaGlsZHJlbilcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBjaGlsZHJlbiDkuLrnqbrlsLHnm7TmjqXliKDmjolcbiAgICAgIGRlbGV0ZSBmaW5hbEl0ZW0uY2hpbGRyZW47XG4gICAgfVxuICAgIGRlbGV0ZSBmaW5hbEl0ZW0ucm91dGVzO1xuICAgIHJldHVybiBmaW5hbEl0ZW07XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcbn0iLCIvLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbnZhciBNZW51T3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTkwNCAxNjBIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMCA2MjRIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMC0zMTJIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHpcIiB9IH1dIH0sIFwibmFtZVwiOiBcIm1lbnVcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydCBkZWZhdWx0IE1lbnVPdXRsaW5lZDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVPdXRsaW5lZFN2ZyBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2VzL2Fzbi9NZW51T3V0bGluZWRcIjtcbmltcG9ydCBBbnRkSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiO1xudmFyIE1lbnVPdXRsaW5lZCA9IGZ1bmN0aW9uIE1lbnVPdXRsaW5lZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbnRkSWNvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogTWVudU91dGxpbmVkU3ZnXG4gIH0pKTtcbn07XG5cbi8qKiFbbWVudV0oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRBaUlHaGxhV2RvZEQwaU5UQWlJR1pwYkd3OUlpTmpZV05oWTJFaUlIWnBaWGRDYjNnOUlqWTBJRFkwSURnNU5pQTRPVFlpSUdadlkzVnpZV0pzWlQwaVptRnNjMlVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRrd05DQXhOakJJTVRJd1l5MDBMalFnTUMwNElETXVOaTA0SURoMk5qUmpNQ0EwTGpRZ015NDJJRGdnT0NBNGFEYzROR00wTGpRZ01DQTRMVE11TmlBNExUaDJMVFkwWXpBdE5DNDBMVE11TmkwNExUZ3RPSHB0TUNBMk1qUklNVEl3WXkwMExqUWdNQzA0SURNdU5pMDRJRGgyTmpSak1DQTBMalFnTXk0MklEZ2dPQ0E0YURjNE5HTTBMalFnTUNBNExUTXVOaUE0TFRoMkxUWTBZekF0TkM0MExUTXVOaTA0TFRndE9IcHRNQzB6TVRKSU1USXdZeTAwTGpRZ01DMDRJRE11TmkwNElEaDJOalJqTUNBMExqUWdNeTQySURnZ09DQTRhRGM0TkdNMExqUWdNQ0E0TFRNdU5pQTRMVGgyTFRZMFl6QXROQzQwTFRNdU5pMDRMVGd0T0hvaUlDOCtQQzl6ZG1jKykgKi9cbnZhciBSZWZJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoTWVudU91dGxpbmVkKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlZkljb24uZGlzcGxheU5hbWUgPSAnTWVudU91dGxpbmVkJztcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZkljb247IiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qKlxuICog6buY6K6k55qE5bqU55So5YiX6KGo55qE5Zu+5qCHXG4gKlxuICovXG5leHBvcnQgdmFyIEFwcHNMb2dvID0gZnVuY3Rpb24gQXBwc0xvZ28oKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcInN2Z1wiLCB7XG4gICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgaGVpZ2h0OiBcIjFlbVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDEyIDEyXCIsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICAgICAgZDogXCJNMCAwaDN2M0gwVjB6bTQuNSAwaDN2M2gtM1Ywek05IDBoM3YzSDlWMHpNMCA0LjVoM3YzSDB2LTN6bTQuNTAzIDBoM3YzaC0zdi0zek05IDQuNWgzdjNIOXYtM3pNMCA5aDN2M0gwVjl6bTQuNTAzIDBoM3YzaC0zVjl6TTkgOWgzdjNIOVY5elwiXG4gICAgfSlcbiAgfSk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZhdWx0UmVuZGVyTG9nbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IHZhciBEZWZhdWx0Q29udGVudCA9IGZ1bmN0aW9uIERlZmF1bHRDb250ZW50KHByb3BzKSB7XG4gIHZhciBhcHBMaXN0ID0gcHJvcHMuYXBwTGlzdCxcbiAgICBiYXNlQ2xhc3NOYW1lID0gcHJvcHMuYmFzZUNsYXNzTmFtZSxcbiAgICBoYXNoSWQgPSBwcm9wcy5oYXNoSWQsXG4gICAgaXRlbUNsaWNrID0gcHJvcHMuaXRlbUNsaWNrO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItY29udGVudCBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItY29udGVudC1saXN0IFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICBjaGlsZHJlbjogYXBwTGlzdCA9PT0gbnVsbCB8fCBhcHBMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcHBMaXN0Lm1hcChmdW5jdGlvbiAoYXBwLCBpbmRleCkge1xuICAgICAgICB2YXIgX2FwcCRjaGlsZHJlbjtcbiAgICAgICAgaWYgKGFwcCAhPT0gbnVsbCAmJiBhcHAgIT09IHZvaWQgMCAmJiAoX2FwcCRjaGlsZHJlbiA9IGFwcC5jaGlsZHJlbikgIT09IG51bGwgJiYgX2FwcCRjaGlsZHJlbiAhPT0gdm9pZCAwICYmIF9hcHAkY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4cyhcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWNvbnRlbnQtbGlzdC1pdGVtLWdyb3VwIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb250ZW50LWxpc3QtaXRlbS1ncm91cC10aXRsZSBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogYXBwLnRpdGxlXG4gICAgICAgICAgICB9KSwgLyojX19QVVJFX18qL19qc3goRGVmYXVsdENvbnRlbnQsIHtcbiAgICAgICAgICAgICAgaGFzaElkOiBoYXNoSWQsXG4gICAgICAgICAgICAgIGl0ZW1DbGljazogaXRlbUNsaWNrLFxuICAgICAgICAgICAgICBhcHBMaXN0OiBhcHAgPT09IG51bGwgfHwgYXBwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcHAuY2hpbGRyZW4sXG4gICAgICAgICAgICAgIGJhc2VDbGFzc05hbWU6IGJhc2VDbGFzc05hbWVcbiAgICAgICAgICAgIH0pXVxuICAgICAgICAgIH0sIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb250ZW50LWxpc3QtaXRlbSBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGl0ZW1DbGljayA9PT0gbnVsbCB8fCBpdGVtQ2xpY2sgPT09IHZvaWQgMCB8fCBpdGVtQ2xpY2soYXBwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeHMoXCJhXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IGl0ZW1DbGljayA/IHVuZGVmaW5lZCA6IGFwcC51cmwsXG4gICAgICAgICAgICB0YXJnZXQ6IGFwcC50YXJnZXQsXG4gICAgICAgICAgICByZWw6IFwibm9yZWZlcnJlclwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtkZWZhdWx0UmVuZGVyTG9nbyhhcHAuaWNvbiksIC8qI19fUFVSRV9fKi9fanN4cyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBhcHAudGl0bGVcbiAgICAgICAgICAgICAgfSksIGFwcC5kZXNjID8gLyojX19QVVJFX18qL19qc3goXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogYXBwLmRlc2NcbiAgICAgICAgICAgICAgfSkgOiBudWxsXVxuICAgICAgICAgICAgfSldXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgaW5kZXgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9KTtcbn07IiwiLyoqXG4gKiDliKTmlq3mmK/kuI3mmK/kuIDkuKogdXJsXG4gKiBAcGFyYW0gIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXRoXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCB2YXIgaXNVcmwgPSBmdW5jdGlvbiBpc1VybChwYXRoKSB7XG4gIGlmICghcGF0aCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwocGF0aCk7XG4gICAgcmV0dXJuICEhdXJsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTsiLCJpbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby11dGlscyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qKlxuICogc2ltcGxlIOaooeW8j+a4suafk2xvZ2/nmoTmlrnlvI9cbiAqXG4gKiBAcGFyYW0gbG9nb1xuICogQHBhcmFtIHRpdGxlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgdmFyIHJlbmRlckxvZ28gPSBmdW5jdGlvbiByZW5kZXJMb2dvKGxvZ28sIHRpdGxlKSB7XG4gIGlmIChsb2dvICYmIHR5cGVvZiBsb2dvID09PSAnc3RyaW5nJyAmJiBpc1VybChsb2dvKSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImltZ1wiLCB7XG4gICAgICBzcmM6IGxvZ28sXG4gICAgICBhbHQ6IFwibG9nb1wiXG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBsb2dvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGxvZ28oKTtcbiAgfVxuICBpZiAobG9nbyAmJiB0eXBlb2YgbG9nbyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgaWQ6IFwiYXZhdGFyTG9nb1wiLFxuICAgICAgY2hpbGRyZW46IGxvZ29cbiAgICB9KTtcbiAgfVxuICBpZiAoIWxvZ28gJiYgdGl0bGUgJiYgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzeW1ib2wgPSB0aXRsZS5zdWJzdHJpbmcoMCwgMSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgIGlkOiBcImF2YXRhckxvZ29cIixcbiAgICAgIGNoaWxkcmVuOiBzeW1ib2xcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbG9nbztcbn07XG5leHBvcnQgdmFyIFNpbXBsZUNvbnRlbnQgPSBmdW5jdGlvbiBTaW1wbGVDb250ZW50KHByb3BzKSB7XG4gIHZhciBhcHBMaXN0ID0gcHJvcHMuYXBwTGlzdCxcbiAgICBiYXNlQ2xhc3NOYW1lID0gcHJvcHMuYmFzZUNsYXNzTmFtZSxcbiAgICBoYXNoSWQgPSBwcm9wcy5oYXNoSWQsXG4gICAgaXRlbUNsaWNrID0gcHJvcHMuaXRlbUNsaWNrO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItY29udGVudCBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItY29udGVudC1saXN0IFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICBjaGlsZHJlbjogYXBwTGlzdCA9PT0gbnVsbCB8fCBhcHBMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcHBMaXN0Lm1hcChmdW5jdGlvbiAoYXBwLCBpbmRleCkge1xuICAgICAgICB2YXIgX2FwcCRjaGlsZHJlbjtcbiAgICAgICAgaWYgKGFwcCAhPT0gbnVsbCAmJiBhcHAgIT09IHZvaWQgMCAmJiAoX2FwcCRjaGlsZHJlbiA9IGFwcC5jaGlsZHJlbikgIT09IG51bGwgJiYgX2FwcCRjaGlsZHJlbiAhPT0gdm9pZCAwICYmIF9hcHAkY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4cyhcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWNvbnRlbnQtbGlzdC1pdGVtLWdyb3VwIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb250ZW50LWxpc3QtaXRlbS1ncm91cC10aXRsZSBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogYXBwLnRpdGxlXG4gICAgICAgICAgICB9KSwgLyojX19QVVJFX18qL19qc3goU2ltcGxlQ29udGVudCwge1xuICAgICAgICAgICAgICBoYXNoSWQ6IGhhc2hJZCxcbiAgICAgICAgICAgICAgaXRlbUNsaWNrOiBpdGVtQ2xpY2ssXG4gICAgICAgICAgICAgIGFwcExpc3Q6IGFwcCA9PT0gbnVsbCB8fCBhcHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFwcC5jaGlsZHJlbixcbiAgICAgICAgICAgICAgYmFzZUNsYXNzTmFtZTogYmFzZUNsYXNzTmFtZVxuICAgICAgICAgICAgfSldXG4gICAgICAgICAgfSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImxpXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWNvbnRlbnQtbGlzdC1pdGVtIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaXRlbUNsaWNrID09PSBudWxsIHx8IGl0ZW1DbGljayA9PT0gdm9pZCAwIHx8IGl0ZW1DbGljayhhcHApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4cyhcImFcIiwge1xuICAgICAgICAgICAgaHJlZjogaXRlbUNsaWNrID8gJ2phdmFzY3JpcHQ6OycgOiBhcHAudXJsLFxuICAgICAgICAgICAgdGFyZ2V0OiBhcHAudGFyZ2V0LFxuICAgICAgICAgICAgcmVsOiBcIm5vcmVmZXJyZXJcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcmVuZGVyTG9nbyhhcHAuaWNvbiwgYXBwLnRpdGxlKSwgLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBhcHAudGl0bGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIGluZGV4KTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG59OyIsImltcG9ydCB7IHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnQGFudC1kZXNpZ24vcHJvLXV0aWxzJztcbnZhciBnZW5BcHBzTG9nb0NvbXBvbmVudHNEZWZhdWx0TGlzdFN0eWxlID0gZnVuY3Rpb24gZ2VuQXBwc0xvZ29Db21wb25lbnRzRGVmYXVsdExpc3RTdHlsZSh0b2tlbikge1xuICByZXR1cm4ge1xuICAgICcmLWNvbnRlbnQnOiB7XG4gICAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNDhweCknLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICcmLWxpc3QnOiB7XG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgbWF4V2lkdGg6IDY1NixcbiAgICAgICAgbWFyZ2luQmxvY2s6IDAsXG4gICAgICAgIG1hcmdpbklubGluZTogMCxcbiAgICAgICAgcGFkZGluZ0Jsb2NrOiAwLFxuICAgICAgICBwYWRkaW5nSW5saW5lOiAwLFxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgICAgJyYtaXRlbSc6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB3aWR0aDogMzI4LFxuICAgICAgICAgIGhlaWdodDogNzIsXG4gICAgICAgICAgcGFkZGluZ0lubGluZTogMTYsXG4gICAgICAgICAgcGFkZGluZ0Jsb2NrOiAxNixcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjMzMywgMCwgMCwgMSknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICcmLWdyb3VwJzoge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICAgICAgICAgICcmLXRpdGxlJzoge1xuICAgICAgICAgICAgICBtYXJnaW46ICcxNnB4IDAgOHB4IDEycHgnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg4KScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44NSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnVGV4dEhvdmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnKiBkaXYnOiByZXNldENvbXBvbmVudCA9PT0gbnVsbCB8fCByZXNldENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzZXRDb21wb25lbnQodG9rZW4pLFxuICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICcmID4gaW1nJzoge1xuICAgICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICAgIGhlaWdodDogNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiA+IGRpdic6IHtcbiAgICAgICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDE0LFxuICAgICAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0SGVhZGluZyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiA+IGRpdiA+IHNwYW4nOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRTZWNvbmRhcnksXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCB7IGdlbkFwcHNMb2dvQ29tcG9uZW50c0RlZmF1bHRMaXN0U3R5bGUgfTsiLCJ2YXIgZ2VuQXBwc0xvZ29Db21wb25lbnRzU2ltcGxlTGlzdFN0eWxlID0gZnVuY3Rpb24gZ2VuQXBwc0xvZ29Db21wb25lbnRzU2ltcGxlTGlzdFN0eWxlKHRva2VuKSB7XG4gIHJldHVybiB7XG4gICAgJyYtY29udGVudCc6IHtcbiAgICAgIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSA0OHB4KScsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgJyYtbGlzdCc6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1heFdpZHRoOiAzNzYsXG4gICAgICAgIG1hcmdpbkJsb2NrOiAwLFxuICAgICAgICBtYXJnaW5JbmxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmdCbG9jazogMCxcbiAgICAgICAgcGFkZGluZ0lubGluZTogMCxcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICAgICcmLWl0ZW0nOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgd2lkdGg6IDEwNCxcbiAgICAgICAgICBoZWlnaHQ6IDEwNCxcbiAgICAgICAgICBtYXJnaW5CbG9jazogOCxcbiAgICAgICAgICBtYXJnaW5JbmxpbmU6IDgsXG4gICAgICAgICAgcGFkZGluZ0lubGluZTogMjQsXG4gICAgICAgICAgcGFkZGluZ0Jsb2NrOiAyNCxcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjMzMywgMCwgMCwgMSknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICcmLWdyb3VwJzoge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICAgICAgICAgICcmLXRpdGxlJzoge1xuICAgICAgICAgICAgICBtYXJnaW46ICcxNnB4IDAgOHB4IDEycHgnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg4KScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44NSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnVGV4dEhvdmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgJyYgPiAjYXZhdGFyTG9nbyc6IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxuICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5LFxuICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0U4RjBGQiAwJSwgI0Y2RjhGQyAxMDAlKScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyYgPiBpbWcnOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICAgICAgICBtYXJnaW5CbG9ja1N0YXJ0OiA1LFxuICAgICAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogMCxcbiAgICAgICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEhlYWRpbmcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyYgPiBkaXYgPiBzcGFuJzoge1xuICAgICAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0U2Vjb25kYXJ5LFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgeyBnZW5BcHBzTG9nb0NvbXBvbmVudHNTaW1wbGVMaXN0U3R5bGUgfTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IHVzZVN0eWxlIGFzIHVzZUFudGRTdHlsZSB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG5pbXBvcnQgeyBnZW5BcHBzTG9nb0NvbXBvbmVudHNEZWZhdWx0TGlzdFN0eWxlIH0gZnJvbSBcIi4vZGVmYXVsdFwiO1xuaW1wb3J0IHsgZ2VuQXBwc0xvZ29Db21wb25lbnRzU2ltcGxlTGlzdFN0eWxlIH0gZnJvbSBcIi4vc2ltcGxlXCI7XG52YXIgZ2VuQXBwc0xvZ29Db21wb25lbnRzU3R5bGUgPSBmdW5jdGlvbiBnZW5BcHBzTG9nb0NvbXBvbmVudHNTdHlsZSh0b2tlbikge1xuICB2YXIgX3Rva2VuJGxheW91dCwgX3Rva2VuJGxheW91dDIsIF90b2tlbiRsYXlvdXQzLCBfdG9rZW4kbGF5b3V0NCwgX3Rva2VuJGxheW91dDU7XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHRva2VuLmNvbXBvbmVudENscywge1xuICAgICcmLWljb24nOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nSW5saW5lOiA0LFxuICAgICAgcGFkZGluZ0Jsb2NrOiAwLFxuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogJzE0cHgnLFxuICAgICAgaGVpZ2h0OiAyOCxcbiAgICAgIHdpZHRoOiAyOCxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6IChfdG9rZW4kbGF5b3V0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0LmNvbG9yVGV4dEFwcExpc3RJY29uLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyLmNvbG9yVGV4dEFwcExpc3RJY29uSG92ZXIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogKF90b2tlbiRsYXlvdXQzID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDMuY29sb3JCZ0FwcExpc3RJY29uSG92ZXJcbiAgICAgIH0sXG4gICAgICAnJi1hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDQgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0NC5jb2xvclRleHRBcHBMaXN0SWNvbkhvdmVyLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IChfdG9rZW4kbGF5b3V0NSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ1LmNvbG9yQmdBcHBMaXN0SWNvbkhvdmVyXG4gICAgICB9XG4gICAgfSxcbiAgICAnJi1pdGVtLXRpdGxlJzoge1xuICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6ICcxNnB4JyxcbiAgICAgIG1hcmdpbklubGluZUVuZDogJzhweCcsXG4gICAgICBtYXJnaW5CbG9ja1N0YXJ0OiAwLFxuICAgICAgbWFyZ2luQmxvY2tFbmQ6ICcxMnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg4KScsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBvcGFjaXR5OiAwLjg1LFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIG1hcmdpbkJsb2NrU3RhcnQ6IDEyXG4gICAgICB9XG4gICAgfSxcbiAgICAnJi1wb3BvdmVyJzogX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLXBvcG92ZXItYXJyb3dcIiksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pLFxuICAgICcmLXNpbXBsZSc6IGdlbkFwcHNMb2dvQ29tcG9uZW50c1NpbXBsZUxpc3RTdHlsZSh0b2tlbiksXG4gICAgJyYtZGVmYXVsdCc6IGdlbkFwcHNMb2dvQ29tcG9uZW50c0RlZmF1bHRMaXN0U3R5bGUodG9rZW4pXG4gIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHlsZShwcmVmaXhDbHMpIHtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnQXBwc0xvZ29Db21wb25lbnRzJywgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgdmFyIHByb0NhcmRUb2tlbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pLCB7fSwge1xuICAgICAgY29tcG9uZW50Q2xzOiBcIi5cIi5jb25jYXQocHJlZml4Q2xzKVxuICAgIH0pO1xuICAgIHJldHVybiBbZ2VuQXBwc0xvZ29Db21wb25lbnRzU3R5bGUocHJvQ2FyZFRva2VuKV07XG4gIH0pO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyBvcGVuVmlzaWJsZUNvbXBhdGlibGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzTG9nbyB9IGZyb20gXCIuL0FwcHNMb2dvXCI7XG5pbXBvcnQgeyBEZWZhdWx0Q29udGVudCB9IGZyb20gXCIuL0RlZmF1bHRDb250ZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVDb250ZW50IH0gZnJvbSBcIi4vU2ltcGxlQ29udGVudFwiO1xuaW1wb3J0IHsgdXNlU3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9pbmRleFwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyoqXG4gKiDpu5jorqTmuLLmn5Nsb2dv55qE5pa55byP77yM5aaC5p6c5piv5Liqc3RyaW5n77yM55SoaW1n44CC5ZCm5YiZ55u05o6l6L+U5ZueXG4gKlxuICogQHBhcmFtIGxvZ29cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCB2YXIgZGVmYXVsdFJlbmRlckxvZ28gPSBmdW5jdGlvbiBkZWZhdWx0UmVuZGVyTG9nbyhsb2dvKSB7XG4gIGlmICh0eXBlb2YgbG9nbyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJpbWdcIiwge1xuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgaGVpZ2h0OiAyMixcbiAgICAgIHNyYzogbG9nbyxcbiAgICAgIGFsdDogXCJsb2dvXCJcbiAgICB9KTtcbiAgfVxuICBpZiAodHlwZW9mIGxvZ28gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbG9nbygpO1xuICB9XG4gIHJldHVybiBsb2dvO1xufTtcblxuLyoqXG4gKiDnm7jlhbPlk4HniYzpop1pY29uIOWIl+ihqOOAgueUqOS6juWxleekuuebuOWFs+eahOWTgeeJjFxuICpcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IHZhciBBcHBzTG9nb0NvbXBvbmVudHMgPSBmdW5jdGlvbiBBcHBzTG9nb0NvbXBvbmVudHMocHJvcHMpIHtcbiAgdmFyIF9wcm9wcyRhcHBMaXN0O1xuICB2YXIgYXBwTGlzdCA9IHByb3BzLmFwcExpc3QsXG4gICAgYXBwTGlzdFJlbmRlciA9IHByb3BzLmFwcExpc3RSZW5kZXIsXG4gICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAnYW50LXBybycgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgIGl0ZW1DbGljayA9IHByb3BzLm9uSXRlbUNsaWNrO1xuICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgcG9wb3ZlclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGJhc2VDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxheW91dC1hcHBzXCIpO1xuICB2YXIgX3VzZVN0eWxlID0gdXNlU3R5bGUoYmFzZUNsYXNzTmFtZSksXG4gICAgd3JhcFNTUiA9IF91c2VTdHlsZS53cmFwU1NSLFxuICAgIGhhc2hJZCA9IF91c2VTdHlsZS5oYXNoSWQ7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgb3BlbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgc2V0T3BlbiA9IF91c2VTdGF0ZTJbMV07XG4gIHZhciBjbG9uZUl0ZW1DbGljayA9IGZ1bmN0aW9uIGNsb25lSXRlbUNsaWNrKGFwcCkge1xuICAgIGl0ZW1DbGljayA9PT0gbnVsbCB8fCBpdGVtQ2xpY2sgPT09IHZvaWQgMCB8fCBpdGVtQ2xpY2soYXBwLCBwb3BvdmVyUmVmKTtcbiAgfTtcbiAgdmFyIGRlZmF1bHREb21Db250ZW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzU2ltcGxlID0gYXBwTGlzdCA9PT0gbnVsbCB8fCBhcHBMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcHBMaXN0LnNvbWUoZnVuY3Rpb24gKGFwcCkge1xuICAgICAgcmV0dXJuICEoYXBwICE9PSBudWxsICYmIGFwcCAhPT0gdm9pZCAwICYmIGFwcC5kZXNjKTtcbiAgICB9KTtcbiAgICBpZiAoaXNTaW1wbGUpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChTaW1wbGVDb250ZW50LCB7XG4gICAgICAgIGhhc2hJZDogaGFzaElkLFxuICAgICAgICBhcHBMaXN0OiBhcHBMaXN0LFxuICAgICAgICBpdGVtQ2xpY2s6IGl0ZW1DbGljayA/IGNsb25lSXRlbUNsaWNrIDogdW5kZWZpbmVkLFxuICAgICAgICBiYXNlQ2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1zaW1wbGVcIilcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goRGVmYXVsdENvbnRlbnQsIHtcbiAgICAgIGhhc2hJZDogaGFzaElkLFxuICAgICAgYXBwTGlzdDogYXBwTGlzdCxcbiAgICAgIGl0ZW1DbGljazogaXRlbUNsaWNrID8gY2xvbmVJdGVtQ2xpY2sgOiB1bmRlZmluZWQsXG4gICAgICBiYXNlQ2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1kZWZhdWx0XCIpXG4gICAgfSk7XG4gIH0sIFthcHBMaXN0LCBiYXNlQ2xhc3NOYW1lLCBoYXNoSWRdKTtcbiAgaWYgKCEocHJvcHMgIT09IG51bGwgJiYgcHJvcHMgIT09IHZvaWQgMCAmJiAoX3Byb3BzJGFwcExpc3QgPSBwcm9wcy5hcHBMaXN0KSAhPT0gbnVsbCAmJiBfcHJvcHMkYXBwTGlzdCAhPT0gdm9pZCAwICYmIF9wcm9wcyRhcHBMaXN0Lmxlbmd0aCkpIHJldHVybiBudWxsO1xuICB2YXIgcG9wb3ZlckNvbnRlbnQgPSBhcHBMaXN0UmVuZGVyID8gYXBwTGlzdFJlbmRlcihwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuYXBwTGlzdCwgZGVmYXVsdERvbUNvbnRlbnQpIDogZGVmYXVsdERvbUNvbnRlbnQ7XG4gIHZhciBwb3BvdmVyT3BlblByb3BzID0gb3BlblZpc2libGVDb21wYXRpYmxlKHVuZGVmaW5lZCwgZnVuY3Rpb24gKG9wZW5DaGFuZ2UpIHtcbiAgICByZXR1cm4gc2V0T3BlbihvcGVuQ2hhbmdlKTtcbiAgfSk7XG4gIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgICByZWY6IHJlZixcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFBvcG92ZXIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tUmlnaHRcIixcbiAgICAgIHRyaWdnZXI6IFsnY2xpY2snXSxcbiAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgIGFycm93OiBmYWxzZVxuICAgIH0sIHBvcG92ZXJPcGVuUHJvcHMpLCB7fSwge1xuICAgICAgb3ZlcmxheUNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItcG9wb3ZlciBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgICAgY29udGVudDogcG9wb3ZlckNvbnRlbnQsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcjogZnVuY3Rpb24gZ2V0UG9wdXBDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgICByZWY6IHBvcG92ZXJSZWYsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1pY29uXCIpLCBoYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaWNvbi1hY3RpdmVcIiksIG9wZW4pKSxcbiAgICAgICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KEFwcHNMb2dvLCB7fSlcbiAgICAgIH0pXG4gICAgfSkpXVxuICB9KSk7XG59OyIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5mdW5jdGlvbiBBcnJvd1N2Z0ljb24oKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcInN2Z1wiLCB7XG4gICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgaGVpZ2h0OiBcIjFlbVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDEyIDEyXCIsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICAgICAgZDogXCJNNi40MzIgNy45NjdhLjQ0OC40NDggMCAwMS0uMzE4LjEzM2gtLjIyOGEuNDYuNDYgMCAwMS0uMzE4LS4xMzNMMi40ODggNC44NWEuMzA1LjMwNSAwIDAxMC0uNDNsLjQyNy0uNDNhLjI5My4yOTMgMCAwMS40MiAwTDYgNi42ODdsMi42NjUtMi42OTlhLjI5OS4yOTkgMCAwMS40MjYgMGwuNDIuNDMxYS4zMDUuMzA1IDAgMDEwIC40M0w2LjQzMiA3Ljk2N3pcIlxuICAgIH0pXG4gIH0pO1xufVxuZXhwb3J0IHsgQXJyb3dTdmdJY29uIH07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xudmFyIGdlblNpZGVyTWVudVN0eWxlID0gZnVuY3Rpb24gZ2VuU2lkZXJNZW51U3R5bGUodG9rZW4pIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQsIF90b2tlbiRsYXlvdXQyLCBfdG9rZW4kbGF5b3V0MztcbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgdG9rZW4uY29tcG9uZW50Q2xzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaW5zZXRCbG9ja1N0YXJ0OiAnMThweCcsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICB3aWR0aDogJzI0cHgnLFxuICAgIGhlaWdodDogJzI0cHgnLFxuICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTZweCddLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNDBweCcsXG4gICAgaW5zZXRJbmxpbmVFbmQ6ICctMTNweCcsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0ID0gX3Rva2VuJGxheW91dC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dC5jb2xvclRleHRDb2xsYXBzZWRCdXR0b24sXG4gICAgYmFja2dyb3VuZENvbG9yOiAoX3Rva2VuJGxheW91dDIgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyID0gX3Rva2VuJGxheW91dDIuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Mi5jb2xvckJnQ29sbGFwc2VkQnV0dG9uLFxuICAgIGJveFNoYWRvdzogJzAgMnB4IDhweCAtMnB4IHJnYmEoMCwwLDAsMC4wNSksIDAgMXB4IDRweCAtMXB4IHJnYmEoMjUsMTUsMTUsMC4wNyksIDAgMCAxcHggMCByZ2JhKDAsMCwwLDAuMDgpJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDMgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQzID0gX3Rva2VuJGxheW91dDMuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0My5jb2xvclRleHRDb2xsYXBzZWRCdXR0b25Ib3ZlcixcbiAgICAgIGJveFNoYWRvdzogJzAgNHB4IDE2cHggLTRweCByZ2JhKDAsMCwwLDAuMDUpLCAwIDJweCA4cHggLTJweCByZ2JhKDI1LDE1LDE1LDAuMDcpLCAwIDFweCAycHggMCByZ2JhKDAsMCwwLDAuMDgpJ1xuICAgIH0sXG4gICAgJy5hbnRpY29uJzoge1xuICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgIH0sXG4gICAgJyYgPiBzdmcnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtICAwLjNzJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknXG4gICAgfSxcbiAgICAnJi1jb2xsYXBzZWQnOiB7XG4gICAgICAnJiA+IHN2Zyc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gdXNlU3R5bGUocHJlZml4Q2xzKSB7XG4gIHJldHVybiB1c2VBbnRkU3R5bGUoJ1NpZGVyTWVudUNvbGxhcHNlZEljb24nLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICB2YXIgc2lkZXJNZW51VG9rZW4gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRva2VuKSwge30sIHtcbiAgICAgIGNvbXBvbmVudENsczogXCIuXCIuY29uY2F0KHByZWZpeENscylcbiAgICB9KTtcbiAgICByZXR1cm4gW2dlblNpZGVyTWVudVN0eWxlKHNpZGVyTWVudVRva2VuKV07XG4gIH0pO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJpc01vYmlsZVwiLCBcImNvbGxhcHNlZFwiXTtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQXJyb3dTdmdJY29uIH0gZnJvbSBcIi4uL1NpZGVyTWVudS9BcnJvd1wiO1xuaW1wb3J0IHsgdXNlU3R5bGUgfSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCB2YXIgQ29sbGFwc2VkSWNvbiA9IGZ1bmN0aW9uIENvbGxhcHNlZEljb24ocHJvcHMpIHtcbiAgdmFyIGlzTW9iaWxlID0gcHJvcHMuaXNNb2JpbGUsXG4gICAgY29sbGFwc2VkID0gcHJvcHMuY29sbGFwc2VkLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG4gIHZhciBfdXNlU3R5bGUgPSB1c2VTdHlsZShwcm9wcy5jbGFzc05hbWUpLFxuICAgIHdyYXBTU1IgPSBfdXNlU3R5bGUud3JhcFNTUixcbiAgICBoYXNoSWQgPSBfdXNlU3R5bGUuaGFzaElkO1xuICBpZiAoaXNNb2JpbGUgJiYgY29sbGFwc2VkKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHdyYXBTU1IoIC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdCksIHt9LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZSwgaGFzaElkLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcm9wcy5jbGFzc05hbWUsIFwiLWNvbGxhcHNlZFwiKSwgY29sbGFwc2VkKSwgXCJcIi5jb25jYXQocHJvcHMuY2xhc3NOYW1lLCBcIi1pcy1tb2JpbGVcIiksIGlzTW9iaWxlKSksXG4gICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KEFycm93U3ZnSWNvbiwge30pXG4gIH0pKSk7XG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcInZpZXdCb3hcIiwgXCJzcGluXCIsIFwicm90YXRlXCIsIFwidGFiSW5kZXhcIiwgXCJvbkNsaWNrXCIsIFwiY2hpbGRyZW5cIl07XG4vLyBTZWVtcyB0aGlzIGlzIHVzZWQgZm9yIGljb25Gb250XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZUNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcbmltcG9ydCB7IHN2Z0Jhc2VQcm9wcywgd2FybmluZywgdXNlSW5zZXJ0U3R5bGVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG52YXIgSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgQ29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgIHZpZXdCb3ggPSBwcm9wcy52aWV3Qm94LFxuICAgIHNwaW4gPSBwcm9wcy5zcGluLFxuICAgIHJvdGF0ZSA9IHByb3BzLnJvdGF0ZSxcbiAgICB0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuICB2YXIgaWNvblJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgbWVyZ2VkUmVmID0gdXNlQ29tcG9zZVJlZihpY29uUmVmLCByZWYpO1xuICB3YXJuaW5nKEJvb2xlYW4oQ29tcG9uZW50IHx8IGNoaWxkcmVuKSwgJ1Nob3VsZCBoYXZlIGBjb21wb25lbnRgIHByb3Agb3IgYGNoaWxkcmVuYC4nKTtcbiAgdXNlSW5zZXJ0U3R5bGVzKGljb25SZWYpO1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpLFxuICAgIF9SZWFjdCR1c2VDb250ZXh0JHByZSA9IF9SZWFjdCR1c2VDb250ZXh0LnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dCRwcmUgPT09IHZvaWQgMCA/ICdhbnRpY29uJyA6IF9SZWFjdCR1c2VDb250ZXh0JHByZSxcbiAgICByb290Q2xhc3NOYW1lID0gX1JlYWN0JHVzZUNvbnRleHQucm9vdENsYXNzTmFtZTtcbiAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhyb290Q2xhc3NOYW1lLCBwcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zcGluXCIpLCAhIXNwaW4gJiYgISFDb21wb25lbnQpLCBjbGFzc05hbWUpO1xuICB2YXIgc3ZnQ2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zcGluXCIpLCAhIXNwaW4pKTtcbiAgdmFyIHN2Z1N0eWxlID0gcm90YXRlID8ge1xuICAgIG1zVHJhbnNmb3JtOiBcInJvdGF0ZShcIi5jb25jYXQocm90YXRlLCBcImRlZylcIiksXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZShcIi5jb25jYXQocm90YXRlLCBcImRlZylcIilcbiAgfSA6IHVuZGVmaW5lZDtcbiAgdmFyIGlubmVyU3ZnUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN2Z0Jhc2VQcm9wcyksIHt9LCB7XG4gICAgY2xhc3NOYW1lOiBzdmdDbGFzc1N0cmluZyxcbiAgICBzdHlsZTogc3ZnU3R5bGUsXG4gICAgdmlld0JveDogdmlld0JveFxuICB9KTtcbiAgaWYgKCF2aWV3Qm94KSB7XG4gICAgZGVsZXRlIGlubmVyU3ZnUHJvcHMudmlld0JveDtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudCA+IGNoaWxkcmVuXG4gIHZhciByZW5kZXJJbm5lck5vZGUgPSBmdW5jdGlvbiByZW5kZXJJbm5lck5vZGUoKSB7XG4gICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgaW5uZXJTdmdQcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIHdhcm5pbmcoQm9vbGVhbih2aWV3Qm94KSB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEgJiYgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKS50eXBlID09PSAndXNlJywgJ01ha2Ugc3VyZSB0aGF0IHlvdSBwcm92aWRlIGNvcnJlY3QgYHZpZXdCb3hgJyArICcgcHJvcCAoZGVmYXVsdCBgMCAwIDEwMjQgMTAyNGApIHRvIHRoZSBpY29uLicpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHt9LCBpbm5lclN2Z1Byb3BzLCB7XG4gICAgICAgIHZpZXdCb3g6IHZpZXdCb3hcbiAgICAgIH0pLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICB2YXIgaWNvblRhYkluZGV4ID0gdGFiSW5kZXg7XG4gIGlmIChpY29uVGFiSW5kZXggPT09IHVuZGVmaW5lZCAmJiBvbkNsaWNrKSB7XG4gICAgaWNvblRhYkluZGV4ID0gLTE7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJpbWdcIlxuICB9LCByZXN0UHJvcHMsIHtcbiAgICByZWY6IG1lcmdlZFJlZixcbiAgICB0YWJJbmRleDogaWNvblRhYkluZGV4LFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICB9KSwgcmVuZGVySW5uZXJOb2RlKCkpO1xufSk7XG5JY29uLmRpc3BsYXlOYW1lID0gJ0FudGRJY29uJztcbmV4cG9ydCBkZWZhdWx0IEljb247IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcInR5cGVcIiwgXCJjaGlsZHJlblwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gXCIuL0ljb25cIjtcbnZhciBjdXN0b21DYWNoZSA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIGlzVmFsaWRDdXN0b21TY3JpcHRVcmwoc2NyaXB0VXJsKSB7XG4gIHJldHVybiBCb29sZWFuKHR5cGVvZiBzY3JpcHRVcmwgPT09ICdzdHJpbmcnICYmIHNjcmlwdFVybC5sZW5ndGggJiYgIWN1c3RvbUNhY2hlLmhhcyhzY3JpcHRVcmwpKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFVybEVsZW1lbnRzKHNjcmlwdFVybHMpIHtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgY3VycmVudFNjcmlwdFVybCA9IHNjcmlwdFVybHNbaW5kZXhdO1xuICBpZiAoaXNWYWxpZEN1c3RvbVNjcmlwdFVybChjdXJyZW50U2NyaXB0VXJsKSkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBjdXJyZW50U2NyaXB0VXJsKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWVzcGFjZScsIGN1cnJlbnRTY3JpcHRVcmwpO1xuICAgIGlmIChzY3JpcHRVcmxzLmxlbmd0aCA+IGluZGV4ICsgMSkge1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3JlYXRlU2NyaXB0VXJsRWxlbWVudHMoc2NyaXB0VXJscywgaW5kZXggKyAxKTtcbiAgICAgIH07XG4gICAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3JlYXRlU2NyaXB0VXJsRWxlbWVudHMoc2NyaXB0VXJscywgaW5kZXggKyAxKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGN1c3RvbUNhY2hlLmFkZChjdXJyZW50U2NyaXB0VXJsKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgc2NyaXB0VXJsID0gb3B0aW9ucy5zY3JpcHRVcmwsXG4gICAgX29wdGlvbnMkZXh0cmFDb21tb25QID0gb3B0aW9ucy5leHRyYUNvbW1vblByb3BzLFxuICAgIGV4dHJhQ29tbW9uUHJvcHMgPSBfb3B0aW9ucyRleHRyYUNvbW1vblAgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkZXh0cmFDb21tb25QO1xuXG4gIC8qKlxuICAgKiBET00gQVBJIHJlcXVpcmVkLlxuICAgKiBNYWtlIHN1cmUgaW4gYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICogVGhlIEN1c3RvbSBJY29uIHdpbGwgY3JlYXRlIGEgPHNjcmlwdC8+XG4gICAqIHRoYXQgbG9hZHMgU1ZHIHN5bWJvbHMgYW5kIGluc2VydCB0aGUgU1ZHIEVsZW1lbnQgaW50byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICovXG4gIGlmIChzY3JpcHRVcmwgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNjcmlwdFVybCkpIHtcbiAgICAgIC8vIOWboOS4umljb25mb2506LWE5rqQ5Lya5oqKc3Zn5o+S5YWlYmVmb3Jl77yM5omA5Lul5YmN5Yqg6L2955u45ZCMdHlwZeS8muimhuebluWQjuWKoOi9ve+8jOS4uuS6huaVsOe7hOimhueblumhuuW6j++8jOWAkuWPmeaPkuWFpVxuICAgICAgY3JlYXRlU2NyaXB0VXJsRWxlbWVudHMoc2NyaXB0VXJsLnJldmVyc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVNjcmlwdFVybEVsZW1lbnRzKFtzY3JpcHRVcmxdKTtcbiAgICB9XG4gIH1cbiAgdmFyIEljb25mb250ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gICAgLy8gY2hpbGRyZW4gPiB0eXBlXG4gICAgdmFyIGNvbnRlbnQgPSBudWxsO1xuICAgIGlmIChwcm9wcy50eXBlKSB7XG4gICAgICBjb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIiwge1xuICAgICAgICB4bGlua0hyZWY6IFwiI1wiLmNvbmNhdCh0eXBlKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY29udGVudCA9IGNoaWxkcmVuO1xuICAgIH1cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgX2V4dGVuZHMoe30sIGV4dHJhQ29tbW9uUHJvcHMsIHJlc3RQcm9wcywge1xuICAgICAgcmVmOiByZWZcbiAgICB9KSwgY29udGVudCk7XG4gIH0pO1xuICBJY29uZm9udC5kaXNwbGF5TmFtZSA9ICdJY29uZm9udCc7XG4gIHJldHVybiBJY29uZm9udDtcbn0iLCIvKiog5Yik5pat5piv5ZCm5piv5Zu+54mH6ZO+5o6lICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbWcocGF0aCkge1xuICByZXR1cm4gL1xcdy4ocG5nfGpwZ3xqcGVnfHN2Z3x3ZWJwfGdpZnxibXApJC9pLnRlc3QocGF0aCk7XG59IiwidmFyIGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgbmF2VGhlbWU6ICdsaWdodCcsXG4gIGxheW91dDogJ3NpZGUnLFxuICBjb250ZW50V2lkdGg6ICdGbHVpZCcsXG4gIGZpeGVkSGVhZGVyOiBmYWxzZSxcbiAgZml4U2lkZXJiYXI6IHRydWUsXG4gIGljb25mb250VXJsOiAnJyxcbiAgY29sb3JQcmltYXJ5OiAnIzE2NzdGRicsXG4gIHNwbGl0TWVudXM6IGZhbHNlXG59O1xuZXhwb3J0IHsgZGVmYXVsdFNldHRpbmdzIH07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xudmFyIGdlblByb0xheW91dEJhc2VNZW51U3R5bGUgPSBmdW5jdGlvbiBnZW5Qcm9MYXlvdXRCYXNlTWVudVN0eWxlKHRva2VuLCBtb2RlKSB7XG4gIHZhciBfdG9rZW4kbGF5b3V0LCBfdG9rZW4kbGF5b3V0MjtcbiAgdmFyIG1lbnVUb2tlbiA9IG1vZGUuaW5jbHVkZXMoJ2hvcml6b250YWwnKSA/IChfdG9rZW4kbGF5b3V0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0LmhlYWRlciA6IChfdG9rZW4kbGF5b3V0MiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyLnNpZGVyO1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uY29tcG9uZW50Q2xzKSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe1xuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IG1lbnVUb2tlbiA9PT0gbnVsbCB8fCBtZW51VG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lbnVUb2tlbi5jb2xvclRleHRNZW51LFxuICAgIGJvcmRlcjogJ25vbmUnXG4gIH0sIFwiXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItbWVudS1pdGVtXCIpLCB7XG4gICAgdHJhbnNpdGlvbjogJ25vbmUgIWltcG9ydGFudCdcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItc3VibWVudS1oYXMtaWNvblwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIj4gXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJcIiksIHtcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IDEwXG4gIH0pKSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXRpdGxlLWNvbnRlbnRcIiksIHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCdcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS10aXRsZS1jb250ZW50XCIpLCB7XG4gICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uY29tcG9uZW50Q2xzLCBcIi1pdGVtLWljb25cIiksIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSksIFwiJiYtY29sbGFwc2VkXCIsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbSwgXFxuICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLWdyb3VwID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1ncm91cC1saXN0ID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbSwgXFxuICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLWdyb3VwID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1ncm91cC1saXN0ID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudSA+IFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtdGl0bGUsIFxcbiAgICAgICAgXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudSA+IFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtdGl0bGVcIiksIHtcbiAgICBwYWRkaW5nSW5saW5lOiAnMCAhaW1wb3J0YW50JyxcbiAgICBtYXJnaW5CbG9jazogJzRweCAhaW1wb3J0YW50J1xuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tZ3JvdXAgPiBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLWdyb3VwLWxpc3QgPiBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LXNlbGVjdGVkID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS10aXRsZSwgXFxuICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LXNlbGVjdGVkID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS10aXRsZVwiKSwge1xuICAgIGJhY2tncm91bmRDb2xvcjogbWVudVRva2VuID09PSBudWxsIHx8IG1lbnVUb2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudVRva2VuLmNvbG9yQmdNZW51SXRlbVNlbGVjdGVkLFxuICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzTEdcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItZ3JvdXBcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVcIiksIHtcbiAgICBwYWRkaW5nSW5saW5lOiAwXG4gIH0pKSksICcmLWl0ZW0tdGl0bGUnLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZ2FwOiB0b2tlbi5tYXJnaW5YU1xuICB9LCBcIlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWl0ZW0tdGV4dFwiKSwge1xuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3b3JkQnJlYWs6ICdicmVhay1hbGwnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH0pLCAnJi1jb2xsYXBzZWQnLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHtcbiAgICBtaW5XaWR0aDogNDAsXG4gICAgaGVpZ2h0OiA0MFxuICB9LCBcIlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWl0ZW0taWNvblwiKSwge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHdpZHRoOiAnMTZweCcsXG4gICAgbGluZUhlaWdodDogJzE2cHggIWltcG9ydGFudCcsXG4gICAgJy5hbnRpY29uJzoge1xuICAgICAgbGluZUhlaWdodDogJzE2cHggIWltcG9ydGFudCcsXG4gICAgICBoZWlnaHQ6ICcxNnB4J1xuICAgIH1cbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItaXRlbS10ZXh0LWhhcy1pY29uXCIpLCB7XG4gICAgZGlzcGxheTogJ25vbmUgIWltcG9ydGFudCdcbiAgfSkpLCAnJi1jb2xsYXBzZWQtbGV2ZWwtMCcsIHtcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSksIFwiJlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWdyb3VwLWl0ZW0tdGl0bGVcIiksIHtcbiAgICBnYXA6IHRva2VuLm1hcmdpblhTLFxuICAgIGhlaWdodDogMTgsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0pLCBcIiZcIi5jb25jYXQodG9rZW4uY29tcG9uZW50Q2xzLCBcIi1pdGVtLWNvbGxhcHNlZC1zaG93LXRpdGxlXCIpLCBfZGVmaW5lUHJvcGVydHkoe1xuICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICBnYXA6IDBcbiAgfSwgXCImXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItaXRlbS10aXRsZS1jb2xsYXBzZWRcIiksIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LCBcIlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWl0ZW0taWNvblwiKSwge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHdpZHRoOiAnMTZweCcsXG4gICAgbGluZUhlaWdodDogJzE2cHggIWltcG9ydGFudCcsXG4gICAgJy5hbnRpY29uJzoge1xuICAgICAgbGluZUhlaWdodDogJzE2cHghaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzE2cHgnXG4gICAgfVxuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uY29tcG9uZW50Q2xzLCBcIi1pdGVtLXRleHRcIiksIHtcbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lICFpbXBvcnRhbnQnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGhlaWdodDogMTIsXG4gICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiA0XG4gIH0pKSkpLCAnJi1ncm91cCcsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVcIiksIHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExhYmVsLFxuICAgICcuYW50aWNvbic6IHtcbiAgICAgIG1hcmdpbklubGluZUVuZDogOFxuICAgIH1cbiAgfSkpLCAnJi1ncm91cC1kaXZpZGVyJywge1xuICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRTZWNvbmRhcnksXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGxpbmVIZWlnaHQ6IDIwXG4gIH0pKSwgbW9kZS5pbmNsdWRlcygnaG9yaXpvbnRhbCcpID8ge30gOiBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51XCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS1wb3B1cFwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWl0ZW0tdGl0bGVcIiksIHtcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCdcbiAgfSkpKSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtcG9wdXBcIiksIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpJyxcbiAgICAnLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXInOiAnYmx1cig4cHgpJyxcbiAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoOHB4KSdcbiAgfSkpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHlsZShwcmVmaXhDbHMsIG1vZGUpIHtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnUHJvTGF5b3V0QmFzZU1lbnUnICsgbW9kZSwgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgdmFyIHByb0xheW91dE1lbnVUb2tlbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pLCB7fSwge1xuICAgICAgY29tcG9uZW50Q2xzOiBcIi5cIi5jb25jYXQocHJlZml4Q2xzKVxuICAgIH0pO1xuICAgIHJldHVybiBbZ2VuUHJvTGF5b3V0QmFzZU1lbnVTdHlsZShwcm9MYXlvdXRNZW51VG9rZW4sIG1vZGUgfHwgJ2lubGluZScpXTtcbiAgfSk7XG59IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IGNyZWF0ZUZyb21JY29uZm9udENOIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgUHJvUHJvdmlkZXIgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xuaW1wb3J0IHsgaXNJbWcsIGlzVXJsLCB1c2VNb3VudE1lcmdlU3RhdGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xuaW1wb3J0IHsgTWVudSwgU2tlbGV0b24sIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9kZWZhdWx0U2V0dGluZ3NcIjtcbmltcG9ydCB7IGdldE9wZW5LZXlzRnJvbU1lbnVEYXRhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VTdHlsZSB9IGZyb20gXCIuL3N0eWxlL21lbnVcIjtcblxuLy8gdG9kb1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbnZhciBNZW51SXRlbVRvb2x0aXAgPSBmdW5jdGlvbiBNZW51SXRlbVRvb2x0aXAocHJvcHMpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHByb3BzLmNvbGxhcHNlZCksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgY29sbGFwc2VkID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRDb2xsYXBzZWQgPSBfdXNlU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgb3BlbiA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0T3BlbiA9IF91c2VTdGF0ZTRbMV07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRDb2xsYXBzZWQocHJvcHMuY29sbGFwc2VkKTtcbiAgICB9LCA0MDApO1xuICB9LCBbcHJvcHMuY29sbGFwc2VkXSk7XG4gIGlmIChwcm9wcy5kaXNhYmxlKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChUb29sdGlwLCB7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIG9wZW46IGNvbGxhcHNlZCAmJiBwcm9wcy5jb2xsYXBzZWQgPyBvcGVuIDogZmFsc2UsXG4gICAgcGxhY2VtZW50OiBcInJpZ2h0XCIsXG4gICAgb25PcGVuQ2hhbmdlOiBzZXRPcGVuLFxuICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlblxuICB9KTtcbn07XG52YXIgSWNvbkZvbnQgPSBjcmVhdGVGcm9tSWNvbmZvbnRDTih7XG4gIHNjcmlwdFVybDogZGVmYXVsdFNldHRpbmdzLmljb25mb250VXJsXG59KTtcblxuLy8gQWxsb3cgbWVudS5qcyBjb25maWcgaWNvbiBhcyBzdHJpbmcgb3IgUmVhY3ROb2RlXG4vLyAgIGljb246ICdzZXR0aW5nJyxcbi8vICAgaWNvbjogJ2ljb24tZ2VyZW4nICNGb3IgSWNvbmZvbnQgLFxuLy8gICBpY29uOiAnaHR0cDovL2RlbW8uY29tL2ljb24ucG5nJyxcbi8vICAgaWNvbjogJy9mYXZpY29uLnBuZycsXG4vLyAgIGljb246IDxJY29uIHR5cGU9XCJzZXR0aW5nXCIgLz4sXG52YXIgZ2V0SWNvbiA9IGZ1bmN0aW9uIGdldEljb24oaWNvbikge1xuICB2YXIgaWNvblByZWZpeGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnaWNvbi0nO1xuICB2YXIgY2xhc3NOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycgJiYgaWNvbiAhPT0gJycpIHtcbiAgICBpZiAoaXNVcmwoaWNvbikgfHwgaXNJbWcoaWNvbikpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImltZ1wiLCB7XG4gICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgc3JjOiBpY29uLFxuICAgICAgICBhbHQ6IFwiaWNvblwiLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgfSwgaWNvbik7XG4gICAgfVxuICAgIGlmIChpY29uLnN0YXJ0c1dpdGgoaWNvblByZWZpeGVzKSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KEljb25Gb250LCB7XG4gICAgICAgIHR5cGU6IGljb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWNvbjtcbn07XG52YXIgZ2V0TWVudVRpdGxlU3ltYm9sID0gZnVuY3Rpb24gZ2V0TWVudVRpdGxlU3ltYm9sKHRpdGxlKSB7XG4gIGlmICh0aXRsZSAmJiB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHN5bWJvbCA9IHRpdGxlLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xudmFyIE1lbnVVdGlsID0gLyojX19QVVJFX18qL19jcmVhdGVDbGFzcyhmdW5jdGlvbiBNZW51VXRpbChwcm9wcykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudVV0aWwpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcm9wc1wiLCB2b2lkIDApO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXROYXZNZW51SXRlbXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW51c0RhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBsZXZlbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBub0dyb3VwTGV2ZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVudXNEYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFN1Yk1lbnVPckl0ZW0oaXRlbSwgbGV2ZWwsIG5vR3JvdXBMZXZlbCk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KS5mbGF0KDEpO1xuICB9KTtcbiAgLyoqIEdldCBTdWJNZW51IG9yIEl0ZW0gKi9cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0U3ViTWVudU9ySXRlbVwiLCBmdW5jdGlvbiAoaXRlbSwgbGV2ZWwsIG5vR3JvdXBMZXZlbCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgc3ViTWVudUl0ZW1SZW5kZXIgPSBfdGhpcyRwcm9wcy5zdWJNZW51SXRlbVJlbmRlcixcbiAgICAgIGJhc2VDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5iYXNlQ2xhc3NOYW1lLFxuICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY29sbGFwc2VkID0gX3RoaXMkcHJvcHMuY29sbGFwc2VkLFxuICAgICAgbWVudSA9IF90aGlzJHByb3BzLm1lbnUsXG4gICAgICBpY29uUHJlZml4ZXMgPSBfdGhpcyRwcm9wcy5pY29uUHJlZml4ZXMsXG4gICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wcy5sYXlvdXQ7XG4gICAgdmFyIGlzR3JvdXAgPSAobWVudSA9PT0gbnVsbCB8fCBtZW51ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51LnR5cGUpID09PSAnZ3JvdXAnICYmIGxheW91dCAhPT0gJ3RvcCc7XG4gICAgdmFyIGRlc2lnblRva2VuID0gX3RoaXMucHJvcHMudG9rZW47XG4gICAgdmFyIG5hbWUgPSBfdGhpcy5nZXRJbnRsTmFtZShpdGVtKTtcbiAgICB2YXIgY2hpbGRyZW4gPSAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLmNoaWxkcmVuKSB8fCAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLnJvdXRlcyk7XG4gICAgdmFyIG1lbnVUeXBlID0gaXNHcm91cCAmJiBsZXZlbCA9PT0gMCA/ICdncm91cCcgOiB1bmRlZmluZWQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIsIF90aGlzJHByb3BzMywgX3RoaXMkcHJvcHM0LCBfdGhpcyRwcm9wczUsIF9kZXNpZ25Ub2tlbiRsYXlvdXQ7XG4gICAgICAvKiogTWVudSDnrKzkuIDnuqflj6/ku6XmnIlpY29u77yM5oiW6ICFIGlzR3JvdXAg5pe256ys5LqM57qn5Yir5Lmf6KaB5pyJICovXG4gICAgICB2YXIgc2hvdWxkSGFzSWNvbiA9IGxldmVsID09PSAwIHx8IGlzR3JvdXAgJiYgbGV2ZWwgPT09IDE7XG5cbiAgICAgIC8vICBnZXQgZGVmYXVsdFRpdGxlIGJ5IG1lbnVJdGVtUmVuZGVyXG4gICAgICB2YXIgaWNvbkRvbSA9IGdldEljb24oaXRlbS5pY29uLCBpY29uUHJlZml4ZXMsIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWljb24gXCIpLmNvbmNhdCgoX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHMyLmhhc2hJZCkpO1xuICAgICAgLyoqXG4gICAgICAgKiDlpoLmnpzmsqHmnIlpY29u5Zyo5pS26LW355qE5pe25YCZ55So6aaW5a2X5q+N5Luj5pu/XG4gICAgICAgKi9cbiAgICAgIHZhciBkZWZhdWx0SWNvbiA9IGNvbGxhcHNlZCAmJiBzaG91bGRIYXNJY29uID8gZ2V0TWVudVRpdGxlU3ltYm9sKG5hbWUpIDogbnVsbDtcbiAgICAgIHZhciBkZWZhdWx0VGl0bGUgPSAvKiNfX1BVUkVfXyovX2pzeHMoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS10aXRsZVwiKSwgKF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzMy5oYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS10aXRsZS1jb2xsYXBzZWRcIiksIGNvbGxhcHNlZCksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGl0bGUtY29sbGFwc2VkLWxldmVsLVwiKS5jb25jYXQobm9Hcm91cExldmVsKSwgY29sbGFwc2VkKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItZ3JvdXAtaXRlbS10aXRsZVwiKSwgbWVudVR5cGUgPT09ICdncm91cCcpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1pdGVtLWNvbGxhcHNlZC1zaG93LXRpdGxlXCIpLCAobWVudSA9PT0gbnVsbCB8fCBtZW51ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51LmNvbGxhcHNlZFNob3dUaXRsZSkgJiYgY29sbGFwc2VkKSksXG4gICAgICAgIGNoaWxkcmVuOiBbbWVudVR5cGUgPT09ICdncm91cCcgJiYgY29sbGFwc2VkID8gbnVsbCA6IHNob3VsZEhhc0ljb24gJiYgaWNvbkRvbSA/IC8qI19fUFVSRV9fKi9fanN4KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1pdGVtLWljb24gXCIpLmNvbmNhdCgoX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHM0Lmhhc2hJZCkudHJpbSgpLFxuICAgICAgICAgIGNoaWxkcmVuOiBpY29uRG9tXG4gICAgICAgIH0pIDogZGVmYXVsdEljb24sIC8qI19fUFVSRV9fKi9fanN4KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGV4dFwiKSwgKF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzNS5oYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS10ZXh0LWhhcy1pY29uXCIpLCBtZW51VHlwZSAhPT0gJ2dyb3VwJyAmJiBzaG91bGRIYXNJY29uICYmIChpY29uRG9tIHx8IGRlZmF1bHRJY29uKSkpLFxuICAgICAgICAgIGNoaWxkcmVuOiBuYW1lXG4gICAgICAgIH0pXVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHN1Yk1lbnUgb25seSB0aXRsZSByZW5kZXJcbiAgICAgIHZhciB0aXRsZSA9IHN1Yk1lbnVJdGVtUmVuZGVyID8gc3ViTWVudUl0ZW1SZW5kZXIoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtKSwge30sIHtcbiAgICAgICAgaXNVcmw6IGZhbHNlXG4gICAgICB9KSwgZGVmYXVsdFRpdGxlLCBfdGhpcy5wcm9wcykgOiBkZWZhdWx0VGl0bGU7XG5cbiAgICAgIC8vIOWmguaenOaUtui1t+adpe+8jOayoeacieWtkOiPnOWNleS6hu+8jOWwseS4jemcgOimgeWxleekuiBncm91cO+8jOaJgOS7pSBsZXZlbCDkuI3lop7liqBcbiAgICAgIGlmIChpc0dyb3VwICYmIGxldmVsID09PSAwICYmIF90aGlzLnByb3BzLmNvbGxhcHNlZCAmJiAhbWVudS5jb2xsYXBzZWRTaG93R3JvdXBUaXRsZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2V0TmF2TWVudUl0ZW1zKGNoaWxkcmVuLCBsZXZlbCArIDEsIGxldmVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlbkxpc3QgPSBfdGhpcy5nZXROYXZNZW51SXRlbXMoY2hpbGRyZW4sIGxldmVsICsgMSwgaXNHcm91cCAmJiBsZXZlbCA9PT0gMCAmJiBfdGhpcy5wcm9wcy5jb2xsYXBzZWQgPyBsZXZlbCA6IGxldmVsICsgMSk7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgdHlwZTogbWVudVR5cGUsXG4gICAgICAgIGtleTogaXRlbS5rZXkgfHwgaXRlbS5wYXRoLFxuICAgICAgICBsYWJlbDogdGl0bGUsXG4gICAgICAgIG9uQ2xpY2s6IGlzR3JvdXAgPyB1bmRlZmluZWQgOiBpdGVtLm9uVGl0bGVDbGljayxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuTGlzdCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1ncm91cFwiKSwgbWVudVR5cGUgPT09ICdncm91cCcpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1zdWJtZW51XCIpLCBtZW51VHlwZSAhPT0gJ2dyb3VwJyksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLXN1Ym1lbnUtaGFzLWljb25cIiksIG1lbnVUeXBlICE9PSAnZ3JvdXAnICYmIHNob3VsZEhhc0ljb24gJiYgaWNvbkRvbSkpXG4gICAgICB9LCBpc0dyb3VwICYmIGxldmVsID09PSAwID8ge1xuICAgICAgICB0eXBlOiAnZGl2aWRlcicsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWRpdmlkZXJcIiksXG4gICAgICAgIGtleTogKGl0ZW0ua2V5IHx8IGl0ZW0ucGF0aCkgKyAnLWdyb3VwLWRpdmlkZXInLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgYm9yZGVyQmxvY2tFbmQ6IDAsXG4gICAgICAgICAgbWFyZ2luOiBfdGhpcy5wcm9wcy5jb2xsYXBzZWQgPyAnNHB4JyA6ICc2cHggMTZweCcsXG4gICAgICAgICAgbWFyZ2luQmxvY2tTdGFydDogX3RoaXMucHJvcHMuY29sbGFwc2VkID8gNCA6IDgsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGRlc2lnblRva2VuID09PSBudWxsIHx8IGRlc2lnblRva2VuID09PSB2b2lkIDAgfHwgKF9kZXNpZ25Ub2tlbiRsYXlvdXQgPSBkZXNpZ25Ub2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF9kZXNpZ25Ub2tlbiRsYXlvdXQgPT09IHZvaWQgMCB8fCAoX2Rlc2lnblRva2VuJGxheW91dCA9IF9kZXNpZ25Ub2tlbiRsYXlvdXQuc2lkZXIpID09PSBudWxsIHx8IF9kZXNpZ25Ub2tlbiRsYXlvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZXNpZ25Ub2tlbiRsYXlvdXQuY29sb3JNZW51SXRlbURpdmlkZXJcbiAgICAgICAgfVxuICAgICAgfSA6IHVuZGVmaW5lZF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1tZW51LWl0ZW1cIiksXG4gICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcbiAgICAgIGtleTogaXRlbS5rZXkgfHwgaXRlbS5wYXRoLFxuICAgICAgb25DbGljazogaXRlbS5vblRpdGxlQ2xpY2ssXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8taXMtbW91bnRlZFxuICAgICAgbGFiZWw6IF90aGlzLmdldE1lbnVJdGVtUGF0aChpdGVtLCBsZXZlbCwgbm9Hcm91cExldmVsKVxuICAgIH07XG4gIH0pO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRJbnRsTmFtZVwiLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBuYW1lID0gaXRlbS5uYW1lLFxuICAgICAgbG9jYWxlID0gaXRlbS5sb2NhbGU7XG4gICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgbWVudSA9IF90aGlzJHByb3BzNi5tZW51LFxuICAgICAgZm9ybWF0TWVzc2FnZSA9IF90aGlzJHByb3BzNi5mb3JtYXRNZXNzYWdlO1xuICAgIHZhciBmaW5hbE5hbWUgPSBuYW1lO1xuICAgIGlmIChsb2NhbGUgJiYgKG1lbnUgPT09IG51bGwgfHwgbWVudSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudS5sb2NhbGUpICE9PSBmYWxzZSkge1xuICAgICAgZmluYWxOYW1lID0gZm9ybWF0TWVzc2FnZSA9PT0gbnVsbCB8fCBmb3JtYXRNZXNzYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgaWQ6IGxvY2FsZSxcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IG5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoX3RoaXMucHJvcHMubWVudVRleHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5tZW51VGV4dFJlbmRlcihpdGVtLCBmaW5hbE5hbWUsIF90aGlzLnByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsTmFtZTtcbiAgfSk7XG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKbmmK9odHRw6ZO+5o6lLui/lOWbniBMaW5rIOaIliBhIEp1ZGdlIHdoZXRoZXIgaXQgaXMgaHR0cCBsaW5rLnJldHVybiBhIG9yIExpbmtcbiAgICpcbiAgICogQG1lbWJlcm9mIFNpZGVyTWVudVxuICAgKi9cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0TWVudUl0ZW1QYXRoXCIsIGZ1bmN0aW9uIChpdGVtLCBsZXZlbCwgbm9Hcm91cExldmVsKSB7XG4gICAgdmFyIF90aGlzJHByb3BzOSwgX3RoaXMkcHJvcHMxMCwgX3RoaXMkcHJvcHMxMSwgX3RoaXMkcHJvcHMxMjtcbiAgICB2YXIgaXRlbVBhdGggPSBfdGhpcy5jb252ZXJzaW9uUGF0aChpdGVtLnBhdGggfHwgJy8nKTtcbiAgICB2YXIgX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMsXG4gICAgICBfdGhpcyRwcm9wczckbG9jYXRpb24gPSBfdGhpcyRwcm9wczcubG9jYXRpb24sXG4gICAgICBsb2NhdGlvbiA9IF90aGlzJHByb3BzNyRsb2NhdGlvbiA9PT0gdm9pZCAwID8ge1xuICAgICAgICBwYXRobmFtZTogJy8nXG4gICAgICB9IDogX3RoaXMkcHJvcHM3JGxvY2F0aW9uLFxuICAgICAgaXNNb2JpbGUgPSBfdGhpcyRwcm9wczcuaXNNb2JpbGUsXG4gICAgICBvbkNvbGxhcHNlID0gX3RoaXMkcHJvcHM3Lm9uQ29sbGFwc2UsXG4gICAgICBtZW51SXRlbVJlbmRlciA9IF90aGlzJHByb3BzNy5tZW51SXRlbVJlbmRlcixcbiAgICAgIGljb25QcmVmaXhlcyA9IF90aGlzJHByb3BzNy5pY29uUHJlZml4ZXM7XG5cbiAgICAvLyBpZiBsb2NhbCBpcyB0cnVlIGZvcm1hdE1lc3NhZ2UgYWxsIG5hbWXjgIJcbiAgICB2YXIgbWVudUl0ZW1UaXRsZSA9IF90aGlzLmdldEludGxOYW1lKGl0ZW0pO1xuICAgIHZhciBfdGhpcyRwcm9wczggPSBfdGhpcy5wcm9wcyxcbiAgICAgIGJhc2VDbGFzc05hbWUgPSBfdGhpcyRwcm9wczguYmFzZUNsYXNzTmFtZSxcbiAgICAgIG1lbnUgPSBfdGhpcyRwcm9wczgubWVudSxcbiAgICAgIGNvbGxhcHNlZCA9IF90aGlzJHByb3BzOC5jb2xsYXBzZWQ7XG4gICAgdmFyIGlzR3JvdXAgPSAobWVudSA9PT0gbnVsbCB8fCBtZW51ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51LnR5cGUpID09PSAnZ3JvdXAnO1xuICAgIC8qKiBNZW51IOesrOS4gOe6p+WPr+S7peaciWljb27vvIzmiJbogIUgaXNHcm91cCDml7bnrKzkuoznuqfliKvkuZ/opoHmnIkgKi9cbiAgICB2YXIgaGFzSWNvbiA9IGxldmVsID09PSAwIHx8IGlzR3JvdXAgJiYgbGV2ZWwgPT09IDE7XG4gICAgdmFyIGljb24gPSAhaGFzSWNvbiA/IG51bGwgOiBnZXRJY29uKGl0ZW0uaWNvbiwgaWNvblByZWZpeGVzLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1pY29uIFwiKS5jb25jYXQoKF90aGlzJHByb3BzOSA9IF90aGlzLnByb3BzKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzOS5oYXNoSWQpKTtcblxuICAgIC8vIOWmguaenOayoeaciSBpY29uIOWcqOaUtui1t+eahOaXtuWAmeeUqOmmluWtl+avjeS7o+abv1xuICAgIHZhciBkZWZhdWx0SWNvbiA9IGNvbGxhcHNlZCAmJiBoYXNJY29uID8gZ2V0TWVudVRpdGxlU3ltYm9sKG1lbnVJdGVtVGl0bGUpIDogbnVsbDtcbiAgICB2YXIgZGVmYXVsdEl0ZW0gPSAvKiNfX1BVUkVfXyovX2pzeHMoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGl0bGVcIiksIChfdGhpcyRwcm9wczEwID0gX3RoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzMTAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzMTAuaGFzaElkLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS10aXRsZS1jb2xsYXBzZWRcIiksIGNvbGxhcHNlZCksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGl0bGUtY29sbGFwc2VkLWxldmVsLVwiKS5jb25jYXQobm9Hcm91cExldmVsKSwgY29sbGFwc2VkKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS1jb2xsYXBzZWQtc2hvdy10aXRsZVwiKSwgKG1lbnUgPT09IG51bGwgfHwgbWVudSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudS5jb2xsYXBzZWRTaG93VGl0bGUpICYmIGNvbGxhcHNlZCkpLFxuICAgICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0taWNvbiBcIikuY29uY2F0KChfdGhpcyRwcm9wczExID0gX3RoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzMTEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzMTEuaGFzaElkKS50cmltKCksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZGlzcGxheTogZGVmYXVsdEljb24gPT09IG51bGwgJiYgIWljb24gPyAnbm9uZScgOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogaWNvbiB8fCAvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJhbnRpY29uXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGRlZmF1bHRJY29uXG4gICAgICAgIH0pXG4gICAgICB9KSwgLyojX19QVVJFX18qL19qc3goXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGV4dFwiKSwgKF90aGlzJHByb3BzMTIgPSBfdGhpcy5wcm9wcykgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMxMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHMxMi5oYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS10ZXh0LWhhcy1pY29uXCIpLCBoYXNJY29uICYmIChpY29uIHx8IGRlZmF1bHRJY29uKSkpLFxuICAgICAgICBjaGlsZHJlbjogbWVudUl0ZW1UaXRsZVxuICAgICAgfSldXG4gICAgfSwgaXRlbVBhdGgpO1xuICAgIHZhciBpc0h0dHBVcmwgPSBpc1VybChpdGVtUGF0aCk7XG5cbiAgICAvLyBJcyBpdCBhIGh0dHAgbGlua1xuICAgIGlmIChpc0h0dHBVcmwpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEzLCBfdGhpcyRwcm9wczE0LCBfdGhpcyRwcm9wczE1O1xuICAgICAgZGVmYXVsdEl0ZW0gPSAvKiNfX1BVUkVfXyovX2pzeHMoXCJzcGFuXCIsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICB2YXIgX3dpbmRvdywgX3dpbmRvdyRvcGVuO1xuICAgICAgICAgIChfd2luZG93ID0gd2luZG93KSA9PT0gbnVsbCB8fCBfd2luZG93ID09PSB2b2lkIDAgfHwgKF93aW5kb3ckb3BlbiA9IF93aW5kb3cub3BlbikgPT09IG51bGwgfHwgX3dpbmRvdyRvcGVuID09PSB2b2lkIDAgfHwgX3dpbmRvdyRvcGVuLmNhbGwoX3dpbmRvdywgaXRlbVBhdGgsICdfYmxhbmsnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGl0bGVcIiksIChfdGhpcyRwcm9wczEzID0gX3RoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzMTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzMTMuaGFzaElkLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tdGl0bGUtY29sbGFwc2VkXCIpLCBjb2xsYXBzZWQpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1pdGVtLXRpdGxlLWNvbGxhcHNlZC1sZXZlbC1cIikuY29uY2F0KG5vR3JvdXBMZXZlbCksIGNvbGxhcHNlZCksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tbGlua1wiKSwgdHJ1ZSksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWl0ZW0tY29sbGFwc2VkLXNob3ctdGl0bGVcIiksIChtZW51ID09PSBudWxsIHx8IG1lbnUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lbnUuY29sbGFwc2VkU2hvd1RpdGxlKSAmJiBjb2xsYXBzZWQpKSxcbiAgICAgICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS1pY29uIFwiKS5jb25jYXQoKF90aGlzJHByb3BzMTQgPSBfdGhpcy5wcm9wcykgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMxNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHMxNC5oYXNoSWQpLnRyaW0oKSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogZGVmYXVsdEljb24gPT09IG51bGwgJiYgIWljb24gPyAnbm9uZScgOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IGljb24gfHwgLyojX19QVVJFX18qL19qc3goXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhbnRpY29uXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogZGVmYXVsdEljb25cbiAgICAgICAgICB9KVxuICAgICAgICB9KSwgLyojX19QVVJFX18qL19qc3goXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaXRlbS10ZXh0XCIpLCAoX3RoaXMkcHJvcHMxNSA9IF90aGlzLnByb3BzKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczE1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wczE1Lmhhc2hJZCwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1pdGVtLXRleHQtaGFzLWljb25cIiksIGhhc0ljb24gJiYgKGljb24gfHwgZGVmYXVsdEljb24pKSksXG4gICAgICAgICAgY2hpbGRyZW46IG1lbnVJdGVtVGl0bGVcbiAgICAgICAgfSldXG4gICAgICB9LCBpdGVtUGF0aCk7XG4gICAgfVxuICAgIGlmIChtZW51SXRlbVJlbmRlcikge1xuICAgICAgdmFyIHJlbmRlckl0ZW1Qcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbSksIHt9LCB7XG4gICAgICAgIGlzVXJsOiBpc0h0dHBVcmwsXG4gICAgICAgIGl0ZW1QYXRoOiBpdGVtUGF0aCxcbiAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxuICAgICAgICByZXBsYWNlOiBpdGVtUGF0aCA9PT0gbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ29sbGFwc2UgJiYgb25Db2xsYXBzZSh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbGV2ZWwgPT09IDAgPyAvKiNfX1BVUkVfXyovX2pzeChNZW51SXRlbVRvb2x0aXAsIHtcbiAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWQsXG4gICAgICAgIHRpdGxlOiBtZW51SXRlbVRpdGxlLFxuICAgICAgICBkaXNhYmxlOiBpdGVtLmRpc2FibGVkVG9vbHRpcCxcbiAgICAgICAgY2hpbGRyZW46IG1lbnVJdGVtUmVuZGVyKHJlbmRlckl0ZW1Qcm9wcywgZGVmYXVsdEl0ZW0sIF90aGlzLnByb3BzKVxuICAgICAgfSkgOiBtZW51SXRlbVJlbmRlcihyZW5kZXJJdGVtUHJvcHMsIGRlZmF1bHRJdGVtLCBfdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbCA9PT0gMCA/IC8qI19fUFVSRV9fKi9fanN4KE1lbnVJdGVtVG9vbHRpcCwge1xuICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWQsXG4gICAgICB0aXRsZTogbWVudUl0ZW1UaXRsZSxcbiAgICAgIGRpc2FibGU6IGl0ZW0uZGlzYWJsZWRUb29sdGlwLFxuICAgICAgY2hpbGRyZW46IGRlZmF1bHRJdGVtXG4gICAgfSkgOiBkZWZhdWx0SXRlbTtcbiAgfSk7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbnZlcnNpb25QYXRoXCIsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKHBhdGggJiYgcGF0aC5pbmRleE9mKCdodHRwJykgPT09IDApIHtcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gXCIvXCIuY29uY2F0KHBhdGggfHwgJycpLnJlcGxhY2UoL1xcLysvZywgJy8nKTtcbiAgfSk7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbn0pO1xuLyoqXG4gKiDnlJ/miJBvcGVuS2V5cyDnmoTlr7nosaHvvIzlm6DkuLrorr7nva7kuoZvcGVuS2V5cyDlsLHkvJrlj5jmiJDlj5fmjqfvvIzmiYDku6XpnIDopoHkuIDkuKrnqbrlr7nosaFcbiAqXG4gKiBAcGFyYW0gQmFzZU1lbnVQcm9wc1xuICovXG52YXIgZ2V0T3BlbktleXNQcm9wcyA9IGZ1bmN0aW9uIGdldE9wZW5LZXlzUHJvcHMob3BlbktleXMsIF9yZWYpIHtcbiAgdmFyIGxheW91dCA9IF9yZWYubGF5b3V0LFxuICAgIGNvbGxhcHNlZCA9IF9yZWYuY29sbGFwc2VkO1xuICB2YXIgb3BlbktleXNQcm9wcyA9IHt9O1xuICBpZiAob3BlbktleXMgJiYgIWNvbGxhcHNlZCAmJiBbJ3NpZGUnLCAnbWl4J10uaW5jbHVkZXMobGF5b3V0IHx8ICdtaXgnKSkge1xuICAgIG9wZW5LZXlzUHJvcHMgPSB7XG4gICAgICBvcGVuS2V5czogb3BlbktleXNcbiAgICB9O1xuICB9XG4gIHJldHVybiBvcGVuS2V5c1Byb3BzO1xufTtcbnZhciBCYXNlTWVudSA9IGZ1bmN0aW9uIEJhc2VNZW51KHByb3BzKSB7XG4gIHZhciBtb2RlID0gcHJvcHMubW9kZSxcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgaGFuZGxlT3BlbkNoYW5nZSA9IHByb3BzLmhhbmRsZU9wZW5DaGFuZ2UsXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICBtZW51RGF0YSA9IHByb3BzLm1lbnVEYXRhLFxuICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBtZW51ID0gcHJvcHMubWVudSxcbiAgICBtYXRjaE1lbnVLZXlzID0gcHJvcHMubWF0Y2hNZW51S2V5cyxcbiAgICBpY29uZm9udFVybCA9IHByb3BzLmljb25mb250VXJsLFxuICAgIHByb3BzU2VsZWN0ZWRLZXlzID0gcHJvcHMuc2VsZWN0ZWRLZXlzLFxuICAgIG9uU2VsZWN0ID0gcHJvcHMub25TZWxlY3QsXG4gICAgbWVudVJlbmRlclR5cGUgPSBwcm9wcy5tZW51UmVuZGVyVHlwZSxcbiAgICBwcm9wc09wZW5LZXlzID0gcHJvcHMub3BlbktleXM7XG4gIHZhciBfdXNlQ29udGV4dCA9IHVzZUNvbnRleHQoUHJvUHJvdmlkZXIpLFxuICAgIGRhcmsgPSBfdXNlQ29udGV4dC5kYXJrLFxuICAgIGRlc2lnblRva2VuID0gX3VzZUNvbnRleHQudG9rZW47XG4gIHZhciBiYXNlQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1iYXNlLW1lbnUtXCIpLmNvbmNhdChtb2RlKTtcbiAgLy8g55So5LqO5YeP5bCRIGRlZmF1bHRPcGVuS2V5cyDorqHnrpfnmoTnu4Tku7ZcbiAgdmFyIGRlZmF1bHRPcGVuS2V5c1JlZiA9IHVzZVJlZihbXSk7XG4gIHZhciBfdXNlTW91bnRNZXJnZVN0YXRlID0gdXNlTW91bnRNZXJnZVN0YXRlKG1lbnUgPT09IG51bGwgfHwgbWVudSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudS5kZWZhdWx0T3BlbkFsbCksXG4gICAgX3VzZU1vdW50TWVyZ2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlTW91bnRNZXJnZVN0YXRlLCAyKSxcbiAgICBkZWZhdWx0T3BlbkFsbCA9IF91c2VNb3VudE1lcmdlU3RhdGUyWzBdLFxuICAgIHNldERlZmF1bHRPcGVuQWxsID0gX3VzZU1vdW50TWVyZ2VTdGF0ZTJbMV07XG4gIHZhciBfdXNlTW91bnRNZXJnZVN0YXRlMyA9IHVzZU1vdW50TWVyZ2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWVudSAhPT0gbnVsbCAmJiBtZW51ICE9PSB2b2lkIDAgJiYgbWVudS5kZWZhdWx0T3BlbkFsbCkge1xuICAgICAgICByZXR1cm4gZ2V0T3BlbktleXNGcm9tTWVudURhdGEobWVudURhdGEpIHx8IFtdO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzT3BlbktleXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogcHJvcHNPcGVuS2V5cyA9PT0gZmFsc2UgPyB1bmRlZmluZWQgOiBwcm9wc09wZW5LZXlzLFxuICAgICAgb25DaGFuZ2U6IGhhbmRsZU9wZW5DaGFuZ2VcbiAgICB9KSxcbiAgICBfdXNlTW91bnRNZXJnZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VNb3VudE1lcmdlU3RhdGUzLCAyKSxcbiAgICBvcGVuS2V5cyA9IF91c2VNb3VudE1lcmdlU3RhdGU0WzBdLFxuICAgIHNldE9wZW5LZXlzID0gX3VzZU1vdW50TWVyZ2VTdGF0ZTRbMV07XG4gIHZhciBfdXNlTW91bnRNZXJnZVN0YXRlNSA9IHVzZU1vdW50TWVyZ2VTdGF0ZShbXSwge1xuICAgICAgdmFsdWU6IHByb3BzU2VsZWN0ZWRLZXlzLFxuICAgICAgb25DaGFuZ2U6IG9uU2VsZWN0ID8gZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgaWYgKG9uU2VsZWN0ICYmIGtleXMpIHtcbiAgICAgICAgICBvblNlbGVjdChrZXlzKTtcbiAgICAgICAgfVxuICAgICAgfSA6IHVuZGVmaW5lZFxuICAgIH0pLFxuICAgIF91c2VNb3VudE1lcmdlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1vdW50TWVyZ2VTdGF0ZTUsIDIpLFxuICAgIHNlbGVjdGVkS2V5cyA9IF91c2VNb3VudE1lcmdlU3RhdGU2WzBdLFxuICAgIHNldFNlbGVjdGVkS2V5cyA9IF91c2VNb3VudE1lcmdlU3RhdGU2WzFdO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtZW51ICE9PSBudWxsICYmIG1lbnUgIT09IHZvaWQgMCAmJiBtZW51LmRlZmF1bHRPcGVuQWxsIHx8IHByb3BzT3BlbktleXMgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtYXRjaE1lbnVLZXlzKSB7XG4gICAgICBzZXRPcGVuS2V5cyhtYXRjaE1lbnVLZXlzKTtcbiAgICAgIHNldFNlbGVjdGVkS2V5cyhtYXRjaE1lbnVLZXlzKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbbWF0Y2hNZW51S2V5cy5qb2luKCctJyldKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyByZXNldCBJY29uRm9udFxuICAgIGlmIChpY29uZm9udFVybCkge1xuICAgICAgSWNvbkZvbnQgPSBjcmVhdGVGcm9tSWNvbmZvbnRDTih7XG4gICAgICAgIHNjcmlwdFVybDogaWNvbmZvbnRVcmxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2ljb25mb250VXJsXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgcGF0aG5hbWUgY2FuJ3QgbWF0Y2gsIHVzZSB0aGUgbmVhcmVzdCBwYXJlbnQncyBrZXlcbiAgICBpZiAobWF0Y2hNZW51S2V5cy5qb2luKCctJykgIT09IChzZWxlY3RlZEtleXMgfHwgW10pLmpvaW4oJy0nKSkge1xuICAgICAgc2V0U2VsZWN0ZWRLZXlzKG1hdGNoTWVudUtleXMpO1xuICAgIH1cbiAgICBpZiAoIWRlZmF1bHRPcGVuQWxsICYmIHByb3BzT3BlbktleXMgIT09IGZhbHNlICYmIG1hdGNoTWVudUtleXMuam9pbignLScpICE9PSAob3BlbktleXMgfHwgW10pLmpvaW4oJy0nKSkge1xuICAgICAgdmFyIG5ld0tleXMgPSBtYXRjaE1lbnVLZXlzO1xuICAgICAgLy8g5aaC5p6c5LiN6Ieq5Yqo5YWz6Zet77yM5oiR6ZyA6KaB5oqKIG9wZW5LZXlzIOaUvui/m+WOu1xuICAgICAgaWYgKChtZW51ID09PSBudWxsIHx8IG1lbnUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lbnUuYXV0b0Nsb3NlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbmV3S2V5cyA9IEFycmF5LmZyb20obmV3IFNldChbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG1hdGNoTWVudUtleXMpLCBfdG9Db25zdW1hYmxlQXJyYXkob3BlbktleXMgfHwgW10pKSkpO1xuICAgICAgfVxuICAgICAgc2V0T3BlbktleXMobmV3S2V5cyk7XG4gICAgfSBlbHNlIGlmIChtZW51ICE9PSBudWxsICYmIG1lbnUgIT09IHZvaWQgMCAmJiBtZW51Lmlnbm9yZUZsYXRNZW51ICYmIGRlZmF1bHRPcGVuQWxsKSB7XG4gICAgICAvLyDlv73nlaXnlKjmiLfmiYvliqjmipjlj6Dov4fnmoToj5zljZXnirbmgIHvvIzmipjlj6DmjInpkq7liIfmjaLkuYvlkI7kuZ/lj6/lrp7njrDpu5jorqTlsZXlvIDmiYDmnInoj5zljZVcbiAgICAgIHNldE9wZW5LZXlzKGdldE9wZW5LZXlzRnJvbU1lbnVEYXRhKG1lbnVEYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERlZmF1bHRPcGVuQWxsKGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW21hdGNoTWVudUtleXMuam9pbignLScpXSk7XG4gIHZhciBvcGVuS2V5c1Byb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldE9wZW5LZXlzUHJvcHMob3BlbktleXMsIHByb3BzKTtcbiAgfSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbb3BlbktleXMgJiYgb3BlbktleXMuam9pbignLCcpLCBwcm9wcy5sYXlvdXQsIHByb3BzLmNvbGxhcHNlZF0pO1xuICB2YXIgX3VzZVN0eWxlID0gdXNlU3R5bGUoYmFzZUNsYXNzTmFtZSwgbW9kZSksXG4gICAgd3JhcFNTUiA9IF91c2VTdHlsZS53cmFwU1NSLFxuICAgIGhhc2hJZCA9IF91c2VTdHlsZS5oYXNoSWQ7XG4gIHZhciBtZW51VXRpbHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IE1lbnVVdGlsKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgdG9rZW46IGRlc2lnblRva2VuLFxuICAgICAgbWVudVJlbmRlclR5cGU6IG1lbnVSZW5kZXJUeXBlLFxuICAgICAgYmFzZUNsYXNzTmFtZTogYmFzZUNsYXNzTmFtZSxcbiAgICAgIGhhc2hJZDogaGFzaElkXG4gICAgfSkpO1xuICB9LCBbcHJvcHMsIGRlc2lnblRva2VuLCBtZW51UmVuZGVyVHlwZSwgYmFzZUNsYXNzTmFtZSwgaGFzaElkXSk7XG4gIGlmIChtZW51ICE9PSBudWxsICYmIG1lbnUgIT09IHZvaWQgMCAmJiBtZW51LmxvYWRpbmcpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgc3R5bGU6IG1vZGUgIT09IG51bGwgJiYgbW9kZSAhPT0gdm9pZCAwICYmIG1vZGUuaW5jbHVkZXMoJ2lubGluZScpID8ge1xuICAgICAgICBwYWRkaW5nOiAyNFxuICAgICAgfSA6IHtcbiAgICAgICAgbWFyZ2luQmxvY2tTdGFydDogMTZcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goU2tlbGV0b24sIHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgIHBhcmFncmFwaDoge1xuICAgICAgICAgIHJvd3M6IG1vZGUgIT09IG51bGwgJiYgbW9kZSAhPT0gdm9pZCAwICYmIG1vZGUuaW5jbHVkZXMoJ2lubGluZScpID8gNiA6IDFcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOi/measoSBvcGVuS2V5cyA9PT0gZmFsc2Ug55qE5pe25YCZ55qE5oOF5Ya177yM6L+Z56eN5oOF5Ya15LiL5biu55So5oi36YCJ5Lit5LiA5qyhXG4gIC8vIOesrOS6jOatpOS4jeS8muS9v+eUqO+8jOaJgOS7peeUqOS6hiBkZWZhdWx0T3BlbktleXNcbiAgLy8g6L+Z6YeM6L+U5ZueIG51bGzvvIzmmK/kuLrkuoborqkgZGVmYXVsdE9wZW5LZXlzIOeUn+aViFxuICBpZiAocHJvcHMub3BlbktleXMgPT09IGZhbHNlICYmICFwcm9wcy5oYW5kbGVPcGVuQ2hhbmdlKSB7XG4gICAgZGVmYXVsdE9wZW5LZXlzUmVmLmN1cnJlbnQgPSBtYXRjaE1lbnVLZXlzO1xuICB9XG4gIHZhciBmaW5hbGx5RGF0YSA9IHByb3BzLnBvc3RNZW51RGF0YSA/IHByb3BzLnBvc3RNZW51RGF0YShtZW51RGF0YSkgOiBtZW51RGF0YTtcbiAgaWYgKGZpbmFsbHlEYXRhICYmIChmaW5hbGx5RGF0YSA9PT0gbnVsbCB8fCBmaW5hbGx5RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmluYWxseURhdGEubGVuZ3RoKSA8IDEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gd3JhcFNTUiggLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50KE1lbnUsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb3BlbktleXNQcm9wcyksIHt9LCB7XG4gICAgX2ludGVybmFsRGlzYWJsZU1lbnVJdGVtVGl0bGVUb29sdGlwOiB0cnVlLFxuICAgIGtleTogXCJNZW51XCIsXG4gICAgbW9kZTogbW9kZSxcbiAgICBpbmxpbmVJbmRlbnQ6IDE2LFxuICAgIGRlZmF1bHRPcGVuS2V5czogZGVmYXVsdE9wZW5LZXlzUmVmLmN1cnJlbnQsXG4gICAgdGhlbWU6IGRhcmsgPyAnZGFyaycgOiAnbGlnaHQnLFxuICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlcjogJ25vbmUnXG4gICAgfSwgc3R5bGUpLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIGhhc2hJZCwgYmFzZUNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaG9yaXpvbnRhbFwiKSwgbW9kZSA9PT0gJ2hvcml6b250YWwnKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItY29sbGFwc2VkXCIpLCBwcm9wcy5jb2xsYXBzZWQpKSxcbiAgICBpdGVtczogbWVudVV0aWxzLmdldE5hdk1lbnVJdGVtcyhmaW5hbGx5RGF0YSwgMCwgMCksXG4gICAgb25PcGVuQ2hhbmdlOiBmdW5jdGlvbiBvbk9wZW5DaGFuZ2UoX29wZW5LZXlzKSB7XG4gICAgICBpZiAoIXByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgICBzZXRPcGVuS2V5cyhfb3BlbktleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgcHJvcHMubWVudVByb3BzKSkpO1xufTtcbmV4cG9ydCB7IEJhc2VNZW51IH07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0eWxpc2gocHJlZml4Q2xzLCBfcmVmKSB7XG4gIHZhciBzdHlsaXNoID0gX3JlZi5zdHlsaXNoLFxuICAgIHByb0xheW91dENvbGxhcHNlZFdpZHRoID0gX3JlZi5wcm9MYXlvdXRDb2xsYXBzZWRXaWR0aDtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnUHJvTGF5b3V0U2lkZXJNZW51U3R5bGlzaCcsIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHZhciBzaWRlck1lbnVUb2tlbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pLCB7fSwge1xuICAgICAgY29tcG9uZW50Q2xzOiBcIi5cIi5jb25jYXQocHJlZml4Q2xzKSxcbiAgICAgIHByb0xheW91dENvbGxhcHNlZFdpZHRoOiBwcm9MYXlvdXRDb2xsYXBzZWRXaWR0aFxuICAgIH0pO1xuICAgIGlmICghc3R5bGlzaCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBbX2RlZmluZVByb3BlcnR5KHt9LCBcImRpdlwiLmNvbmNhdCh0b2tlbi5wcm9Db21wb25lbnRzQ2xzLCBcIi1sYXlvdXRcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoc2lkZXJNZW51VG9rZW4uY29tcG9uZW50Q2xzKSwgc3R5bGlzaCA9PT0gbnVsbCB8fCBzdHlsaXNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsaXNoKHNpZGVyTWVudVRva2VuKSkpXTtcbiAgfSk7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xudmFyIF9leGNsdWRlZCA9IFtcInRpdGxlXCIsIFwicmVuZGVyXCJdO1xuaW1wb3J0IHsgUHJvUHJvdmlkZXIgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xuaW1wb3J0IHsgQXZhdGFyLCBMYXlvdXQsIE1lbnUsIFNwYWNlLCB2ZXJzaW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwc0xvZ29Db21wb25lbnRzLCBkZWZhdWx0UmVuZGVyTG9nbyB9IGZyb20gXCIuLi9BcHBzTG9nb0NvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbGxhcHNlZEljb24gfSBmcm9tIFwiLi4vQ29sbGFwc2VkSWNvblwiO1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tIFwiLi9CYXNlTWVudVwiO1xuaW1wb3J0IHsgdXNlU3R5bGlzaCB9IGZyb20gXCIuL3N0eWxlL3N0eWxpc2hcIjtcbmltcG9ydCB7IEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbnZhciBfU2FmZXR5V2FybmluZ1Byb3ZpZGVyID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oZnVuY3Rpb24gKHByb3BzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuKFwiW3Byby1sYXlvdXRdIFNpZGVyTWVudSByZXF1aXJlZCBhbnRkQF40LjI0LjE1IHx8IGFudGRAXjUuMTEuMiBmb3IgYWNjZXNzIHRoZSBtZW51IGNvbnRleHQsIHBsZWFzZSB1cGdyYWRlIHlvdXIgYW50ZCB2ZXJzaW9uIChjdXJyZW50IFwiLmNvbmNhdCh2ZXJzaW9uLCBcIikuXCIpKTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuXG4gIH0pO1xufSk7XG52YXIgU2lkZXIgPSBMYXlvdXQuU2lkZXIsXG4gIF9MYXlvdXQkX0ludGVybmFsU2lkZSA9IExheW91dC5fSW50ZXJuYWxTaWRlckNvbnRleHQsXG4gIFNpZGVyQ29udGV4dCA9IF9MYXlvdXQkX0ludGVybmFsU2lkZSA9PT0gdm9pZCAwID8ge1xuICAgIFByb3ZpZGVyOiBfU2FmZXR5V2FybmluZ1Byb3ZpZGVyXG4gIH0gOiBfTGF5b3V0JF9JbnRlcm5hbFNpZGU7XG4vKipcbiAqIOa4suafkyB0aXRsZSDlkowgbG9nb1xuICpcbiAqIEBwYXJhbSBwcm9wc1xuICogQHBhcmFtIHJlbmRlcktleVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IHZhciByZW5kZXJMb2dvQW5kVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJMb2dvQW5kVGl0bGUocHJvcHMpIHtcbiAgdmFyIHJlbmRlcktleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ21lbnVIZWFkZXJSZW5kZXInO1xuICB2YXIgbG9nbyA9IHByb3BzLmxvZ28sXG4gICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICBsYXlvdXQgPSBwcm9wcy5sYXlvdXQ7XG4gIHZhciByZW5kZXJGdW5jdGlvbiA9IHByb3BzW3JlbmRlcktleV07XG4gIGlmIChyZW5kZXJGdW5jdGlvbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbG9nb0RvbSA9IGRlZmF1bHRSZW5kZXJMb2dvKGxvZ28pO1xuICB2YXIgdGl0bGVEb20gPSAvKiNfX1BVUkVfXyovX2pzeChcImgxXCIsIHtcbiAgICBjaGlsZHJlbjogdGl0bGUgIT09IG51bGwgJiYgdGl0bGUgIT09IHZvaWQgMCA/IHRpdGxlIDogJ0FudCBEZXNpZ24gUHJvJ1xuICB9KTtcbiAgaWYgKHJlbmRlckZ1bmN0aW9uKSB7XG4gICAgLy8gd2hlbiBjb2xsYXBzZWQsIG5vIHJlbmRlciB0aXRsZVxuICAgIHJldHVybiByZW5kZXJGdW5jdGlvbihsb2dvRG9tLCBwcm9wcy5jb2xsYXBzZWQgPyBudWxsIDogdGl0bGVEb20sIHByb3BzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlLbotbfmnaXml7blgJnnm7TmjqXkuI3mmL7npLpcbiAgICovXG4gIGlmIChwcm9wcy5pc01vYmlsZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChsYXlvdXQgPT09ICdtaXgnICYmIHJlbmRlcktleSA9PT0gJ21lbnVIZWFkZXJSZW5kZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmIChwcm9wcy5jb2xsYXBzZWQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJhXCIsIHtcbiAgICAgIGNoaWxkcmVuOiBsb2dvRG9tXG4gICAgfSwgXCJ0aXRsZVwiKTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL19qc3hzKFwiYVwiLCB7XG4gICAgY2hpbGRyZW46IFtsb2dvRG9tLCB0aXRsZURvbV1cbiAgfSwgXCJ0aXRsZVwiKTtcbn07XG52YXIgU2lkZXJNZW51ID0gZnVuY3Rpb24gU2lkZXJNZW51KHByb3BzKSB7XG4gIHZhciBfcHJvcHMkbWVudTI7XG4gIHZhciBjb2xsYXBzZWQgPSBwcm9wcy5jb2xsYXBzZWQsXG4gICAgb3JpZ2luQ29sbGFwc2VkID0gcHJvcHMub3JpZ2luQ29sbGFwc2VkLFxuICAgIGZpeFNpZGVyYmFyID0gcHJvcHMuZml4U2lkZXJiYXIsXG4gICAgbWVudUZvb3RlclJlbmRlciA9IHByb3BzLm1lbnVGb290ZXJSZW5kZXIsXG4gICAgX29uQ29sbGFwc2UgPSBwcm9wcy5vbkNvbGxhcHNlLFxuICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgc2lkZXJXaWR0aCA9IHByb3BzLnNpZGVyV2lkdGgsXG4gICAgaXNNb2JpbGUgPSBwcm9wcy5pc01vYmlsZSxcbiAgICBvbk1lbnVIZWFkZXJDbGljayA9IHByb3BzLm9uTWVudUhlYWRlckNsaWNrLFxuICAgIF9wcm9wcyRicmVha3BvaW50ID0gcHJvcHMuYnJlYWtwb2ludCxcbiAgICBicmVha3BvaW50ID0gX3Byb3BzJGJyZWFrcG9pbnQgPT09IHZvaWQgMCA/ICdsZycgOiBfcHJvcHMkYnJlYWtwb2ludCxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICBfcHJvcHMkbWVudUV4dHJhUmVuZGUgPSBwcm9wcy5tZW51RXh0cmFSZW5kZXIsXG4gICAgbWVudUV4dHJhUmVuZGVyID0gX3Byb3BzJG1lbnVFeHRyYVJlbmRlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtZW51RXh0cmFSZW5kZSxcbiAgICBsaW5rcyA9IHByb3BzLmxpbmtzLFxuICAgIG1lbnVDb250ZW50UmVuZGVyID0gcHJvcHMubWVudUNvbnRlbnRSZW5kZXIsXG4gICAgY29sbGFwc2VkQnV0dG9uUmVuZGVyID0gcHJvcHMuY29sbGFwc2VkQnV0dG9uUmVuZGVyLFxuICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBhdmF0YXJQcm9wcyA9IHByb3BzLmF2YXRhclByb3BzLFxuICAgIHJpZ2h0Q29udGVudFJlbmRlciA9IHByb3BzLnJpZ2h0Q29udGVudFJlbmRlcixcbiAgICBhY3Rpb25zUmVuZGVyID0gcHJvcHMuYWN0aW9uc1JlbmRlcixcbiAgICBvbk9wZW5DaGFuZ2UgPSBwcm9wcy5vbk9wZW5DaGFuZ2UsXG4gICAgc3R5bGlzaCA9IHByb3BzLnN0eWxpc2gsXG4gICAgbG9nb1N0eWxlID0gcHJvcHMubG9nb1N0eWxlO1xuICB2YXIgX3VzZUNvbnRleHQgPSB1c2VDb250ZXh0KFByb1Byb3ZpZGVyKSxcbiAgICBoYXNoSWQgPSBfdXNlQ29udGV4dC5oYXNoSWQ7XG4gIHZhciBzaG93U2lkZXJFeHRyYURvbSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc01vYmlsZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChsYXlvdXQgPT09ICdtaXgnKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sIFtpc01vYmlsZSwgbGF5b3V0XSk7XG4gIHZhciBiYXNlQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zaWRlclwiKTtcblxuICAvLyDmlLbotbfnmoTlrr3luqZcbiAgdmFyIGNvbGxhcHNlZFdpZHRoID0gNjQ7XG5cbiAgLy8g5LmL5omA5Lul6L+Z5qC35YaZ5piv5Li65LqG5o+Q5Y2H5qC35byP5LyY5YWI57qn77yM5LiN54S25Lya6KKrc2lkZXIg6Ieq5bim55qE6KaG55uW5o6JXG4gIHZhciBzdHlsaXNoQ2xhc3NOYW1lID0gdXNlU3R5bGlzaChcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi5cIikuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLXN0eWxpc2hcIiksIHtcbiAgICBzdHlsaXNoOiBzdHlsaXNoLFxuICAgIHByb0xheW91dENvbGxhcHNlZFdpZHRoOiBjb2xsYXBzZWRXaWR0aFxuICB9KTtcbiAgdmFyIHNpZGVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lKSwgaGFzaElkLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWZpeGVkXCIpLCBmaXhTaWRlcmJhciksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWZpeGVkLW1peFwiKSwgbGF5b3V0ID09PSAnbWl4JyAmJiAhaXNNb2JpbGUgJiYgZml4U2lkZXJiYXIpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb2xsYXBzZWRcIiksIHByb3BzLmNvbGxhcHNlZCksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWxheW91dC1cIikuY29uY2F0KGxheW91dCksIGxheW91dCAmJiAhaXNNb2JpbGUpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1saWdodFwiKSwgdGhlbWUgIT09ICdkYXJrJyksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLW1peFwiKSwgbGF5b3V0ID09PSAnbWl4JyAmJiAhaXNNb2JpbGUpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1zdHlsaXNoXCIpLCAhIXN0eWxpc2gpKTtcbiAgdmFyIGhlYWRlckRvbSA9IHJlbmRlckxvZ29BbmRUaXRsZShwcm9wcyk7XG4gIHZhciBleHRyYURvbSA9IG1lbnVFeHRyYVJlbmRlciAmJiBtZW51RXh0cmFSZW5kZXIocHJvcHMpO1xuICB2YXIgbWVudURvbSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZW51Q29udGVudFJlbmRlciAhPT0gZmFsc2UgJiYgLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50KEJhc2VNZW51LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIGtleTogXCJiYXNlLW1lbnVcIixcbiAgICAgIG1vZGU6IGNvbGxhcHNlZCAmJiAhaXNNb2JpbGUgPyAndmVydGljYWwnIDogJ2lubGluZScsXG4gICAgICBoYW5kbGVPcGVuQ2hhbmdlOiBvbk9wZW5DaGFuZ2UsXG4gICAgICBzdHlsZToge1xuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1tZW51IFwiKS5jb25jYXQoaGFzaElkKS50cmltKClcbiAgICB9KSk7XG4gIH0sIFtiYXNlQ2xhc3NOYW1lLCBoYXNoSWQsIG1lbnVDb250ZW50UmVuZGVyLCBvbk9wZW5DaGFuZ2UsIHByb3BzXSk7XG4gIHZhciBsaW5rc01lbnVJdGVtcyA9IChsaW5rcyB8fCBbXSkubWFwKGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWxpbmtcIiksXG4gICAgICBsYWJlbDogbm9kZSxcbiAgICAgIGtleTogaW5kZXhcbiAgICB9O1xuICB9KTtcbiAgdmFyIG1lbnVSZW5kZXJEb20gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWVudUNvbnRlbnRSZW5kZXIgPyBtZW51Q29udGVudFJlbmRlcihwcm9wcywgbWVudURvbSkgOiBtZW51RG9tO1xuICB9LCBbbWVudUNvbnRlbnRSZW5kZXIsIG1lbnVEb20sIHByb3BzXSk7XG4gIHZhciBhdmF0YXJEb20gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWF2YXRhclByb3BzKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdGl0bGUgPSBhdmF0YXJQcm9wcy50aXRsZSxcbiAgICAgIHJlbmRlciA9IGF2YXRhclByb3BzLnJlbmRlcixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYXZhdGFyUHJvcHMsIF9leGNsdWRlZCk7XG4gICAgdmFyIGRvbSA9IC8qI19fUFVSRV9fKi9fanN4cyhcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWFjdGlvbnMtYXZhdGFyXCIpLFxuICAgICAgY2hpbGRyZW46IFtyZXN0ICE9PSBudWxsICYmIHJlc3QgIT09IHZvaWQgMCAmJiByZXN0LnNyYyB8fCByZXN0ICE9PSBudWxsICYmIHJlc3QgIT09IHZvaWQgMCAmJiByZXN0LnNyY1NldCB8fCByZXN0Lmljb24gfHwgcmVzdC5jaGlsZHJlbiA/IC8qI19fUFVSRV9fKi9fanN4KEF2YXRhciwgX29iamVjdFNwcmVhZCh7XG4gICAgICAgIHNpemU6IDI4XG4gICAgICB9LCByZXN0KSkgOiBudWxsLCBhdmF0YXJQcm9wcy50aXRsZSAmJiAhY29sbGFwc2VkICYmIC8qI19fUFVSRV9fKi9fanN4KFwic3BhblwiLCB7XG4gICAgICAgIGNoaWxkcmVuOiB0aXRsZVxuICAgICAgfSldXG4gICAgfSk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlbmRlcihhdmF0YXJQcm9wcywgZG9tLCBwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sIFthdmF0YXJQcm9wcywgYmFzZUNsYXNzTmFtZSwgY29sbGFwc2VkXSk7XG4gIHZhciBhY3Rpb25zRG9tID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFhY3Rpb25zUmVuZGVyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goU3BhY2UsIHtcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIGRpcmVjdGlvbjogY29sbGFwc2VkID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhbXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItYWN0aW9ucy1saXN0XCIpLCBjb2xsYXBzZWQgJiYgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItYWN0aW9ucy1saXN0LWNvbGxhcHNlZFwiKSwgaGFzaElkXSksXG4gICAgICBjaGlsZHJlbjogW2FjdGlvbnNSZW5kZXIgPT09IG51bGwgfHwgYWN0aW9uc1JlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aW9uc1JlbmRlcihwcm9wcyldLmZsYXQoMSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItYWN0aW9ucy1saXN0LWl0ZW0gXCIpLmNvbmNhdChoYXNoSWQpLnRyaW0oKSxcbiAgICAgICAgICBjaGlsZHJlbjogaXRlbVxuICAgICAgICB9LCBpbmRleCk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFthY3Rpb25zUmVuZGVyLCBiYXNlQ2xhc3NOYW1lLCBjb2xsYXBzZWRdKTtcbiAgdmFyIGFwcHNEb20gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQXBwc0xvZ29Db21wb25lbnRzLCB7XG4gICAgICBvbkl0ZW1DbGljazogcHJvcHMuaXRlbUNsaWNrLFxuICAgICAgYXBwTGlzdFJlbmRlcjogcHJvcHMuYXBwTGlzdFJlbmRlcixcbiAgICAgIGFwcExpc3Q6IHByb3BzLmFwcExpc3QsXG4gICAgICBwcmVmaXhDbHM6IHByb3BzLnByZWZpeENsc1xuICAgIH0pO1xuICB9LCBbcHJvcHMuYXBwTGlzdCwgcHJvcHMuYXBwTGlzdFJlbmRlciwgcHJvcHMucHJlZml4Q2xzXSk7XG4gIHZhciBjb2xsYXBzZWREb20gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29sbGFwc2VkQnV0dG9uUmVuZGVyID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGRvbSA9IC8qI19fUFVSRV9fKi9fanN4KENvbGxhcHNlZEljb24sIHtcbiAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcbiAgICAgIGNvbGxhcHNlZDogb3JpZ2luQ29sbGFwc2VkLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb2xsYXBzZWQtYnV0dG9uXCIpLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgX29uQ29sbGFwc2UgPT09IG51bGwgfHwgX29uQ29sbGFwc2UgPT09IHZvaWQgMCB8fCBfb25Db2xsYXBzZSghb3JpZ2luQ29sbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY29sbGFwc2VkQnV0dG9uUmVuZGVyKSByZXR1cm4gY29sbGFwc2VkQnV0dG9uUmVuZGVyKGNvbGxhcHNlZCwgZG9tKTtcbiAgICByZXR1cm4gZG9tO1xuICB9LCBbY29sbGFwc2VkQnV0dG9uUmVuZGVyLCBpc01vYmlsZSwgb3JpZ2luQ29sbGFwc2VkLCBiYXNlQ2xhc3NOYW1lLCBjb2xsYXBzZWQsIF9vbkNvbGxhcHNlXSk7XG5cbiAgLyoqIOaTjeS9nOWMuuWfn+eahGRvbSAqL1xuICB2YXIgYWN0aW9uQXJlYURvbSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmICghYXZhdGFyRG9tICYmICFhY3Rpb25zRG9tKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3hzKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1hY3Rpb25zXCIpLCBoYXNoSWQsIGNvbGxhcHNlZCAmJiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1hY3Rpb25zLWNvbGxhcHNlZFwiKSksXG4gICAgICBjaGlsZHJlbjogW2F2YXRhckRvbSwgYWN0aW9uc0RvbV1cbiAgICB9KTtcbiAgfSwgW2FjdGlvbnNEb20sIGF2YXRhckRvbSwgYmFzZUNsYXNzTmFtZSwgY29sbGFwc2VkLCBoYXNoSWRdKTtcblxuICAvKiBVc2luZyB0aGUgdXNlTWVtbyBob29rIHRvIGNyZWF0ZSBhIENTUyBjbGFzcyB0aGF0IHdpbGwgaGlkZSB0aGUgbWVudSB3aGVuIHRoZSBtZW51IGlzIGNvbGxhcHNlZC4gKi9cbiAgdmFyIGhpZGVNZW51V2hlbkNvbGxhcHNlZENsYXNzTmFtZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMkbWVudTtcbiAgICAvLyDmlLbotbfml7blrozlhajpmpDol4/oj5zljZVcbiAgICBpZiAocHJvcHMgIT09IG51bGwgJiYgcHJvcHMgIT09IHZvaWQgMCAmJiAoX3Byb3BzJG1lbnUgPSBwcm9wcy5tZW51KSAhPT0gbnVsbCAmJiBfcHJvcHMkbWVudSAhPT0gdm9pZCAwICYmIF9wcm9wcyRtZW51LmhpZGVNZW51V2hlbkNvbGxhcHNlZCAmJiBjb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1oaWRlLW1lbnUtY29sbGFwc2VkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW2Jhc2VDbGFzc05hbWUsIGNvbGxhcHNlZCwgcHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCB8fCAoX3Byb3BzJG1lbnUyID0gcHJvcHMubWVudSkgPT09IG51bGwgfHwgX3Byb3BzJG1lbnUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvcHMkbWVudTIuaGlkZU1lbnVXaGVuQ29sbGFwc2VkXSk7XG4gIHZhciBtZW51Rm9vdGVyRG9tID0gbWVudUZvb3RlclJlbmRlciAmJiAobWVudUZvb3RlclJlbmRlciA9PT0gbnVsbCB8fCBtZW51Rm9vdGVyUmVuZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51Rm9vdGVyUmVuZGVyKHByb3BzKSk7XG4gIHZhciBtZW51RG9tSXRlbXMgPSAvKiNfX1BVUkVfXyovX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtoZWFkZXJEb20gJiYgLyojX19QVVJFX18qL19qc3hzKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhbY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1sb2dvXCIpLCBoYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItbG9nby1jb2xsYXBzZWRcIiksIGNvbGxhcHNlZCkpXSksXG4gICAgICBvbkNsaWNrOiBzaG93U2lkZXJFeHRyYURvbSA/IG9uTWVudUhlYWRlckNsaWNrIDogdW5kZWZpbmVkLFxuICAgICAgaWQ6IFwibG9nb1wiLFxuICAgICAgc3R5bGU6IGxvZ29TdHlsZSxcbiAgICAgIGNoaWxkcmVuOiBbaGVhZGVyRG9tLCBhcHBzRG9tXVxuICAgIH0pLCBleHRyYURvbSAmJiAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoW1wiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWV4dHJhXCIpLCAhaGVhZGVyRG9tICYmIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWV4dHJhLW5vLWxvZ29cIiksIGhhc2hJZF0pLFxuICAgICAgY2hpbGRyZW46IGV4dHJhRG9tXG4gICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IG1lbnVSZW5kZXJEb21cbiAgICB9KSwgLyojX19QVVJFX18qL19qc3hzKFNpZGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHt9LFxuICAgICAgY2hpbGRyZW46IFtsaW5rcyA/IC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1saW5rcyBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgICAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goTWVudSwge1xuICAgICAgICAgIGlubGluZUluZGVudDogMTYsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1saW5rLW1lbnUgXCIpLmNvbmNhdChoYXNoSWQpLnRyaW0oKSxcbiAgICAgICAgICBzZWxlY3RlZEtleXM6IFtdLFxuICAgICAgICAgIG9wZW5LZXlzOiBbXSxcbiAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgbW9kZTogXCJpbmxpbmVcIixcbiAgICAgICAgICBpdGVtczogbGlua3NNZW51SXRlbXNcbiAgICAgICAgfSlcbiAgICAgIH0pIDogbnVsbCwgc2hvd1NpZGVyRXh0cmFEb20gJiYgLyojX19QVVJFX18qL19qc3hzKF9GcmFnbWVudCwge1xuICAgICAgICBjaGlsZHJlbjogW2FjdGlvbkFyZWFEb20sICFhY3Rpb25zRG9tICYmIHJpZ2h0Q29udGVudFJlbmRlciA/IC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItYWN0aW9uc1wiKSwgaGFzaElkLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWFjdGlvbnMtY29sbGFwc2VkXCIpLCBjb2xsYXBzZWQpKSxcbiAgICAgICAgICBjaGlsZHJlbjogcmlnaHRDb250ZW50UmVuZGVyID09PSBudWxsIHx8IHJpZ2h0Q29udGVudFJlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRDb250ZW50UmVuZGVyKHByb3BzKVxuICAgICAgICB9KSA6IG51bGxdXG4gICAgICB9KSwgbWVudUZvb3RlckRvbSAmJiAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhbXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItZm9vdGVyXCIpLCBoYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItZm9vdGVyLWNvbGxhcHNlZFwiKSwgY29sbGFwc2VkKV0pLFxuICAgICAgICBjaGlsZHJlbjogbWVudUZvb3RlckRvbVxuICAgICAgfSldXG4gICAgfSldXG4gIH0pO1xuICByZXR1cm4gc3R5bGlzaENsYXNzTmFtZS53cmFwU1NSKCAvKiNfX1BVUkVfXyovX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtmaXhTaWRlcmJhciAmJiAhaXNNb2JpbGUgJiYgIWhpZGVNZW51V2hlbkNvbGxhcHNlZENsYXNzTmFtZSAmJiAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIHdpZHRoOiBjb2xsYXBzZWQgPyBjb2xsYXBzZWRXaWR0aCA6IHNpZGVyV2lkdGgsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgZmxleDogXCIwIDAgXCIuY29uY2F0KGNvbGxhcHNlZCA/IGNvbGxhcHNlZFdpZHRoIDogc2lkZXJXaWR0aCwgXCJweFwiKSxcbiAgICAgICAgbWF4V2lkdGg6IGNvbGxhcHNlZCA/IGNvbGxhcHNlZFdpZHRoIDogc2lkZXJXaWR0aCxcbiAgICAgICAgbWluV2lkdGg6IGNvbGxhcHNlZCA/IGNvbGxhcHNlZFdpZHRoIDogc2lkZXJXaWR0aCxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UgMHMnXG4gICAgICB9LCBzdHlsZSlcbiAgICB9KSwgLyojX19QVVJFX18qL19qc3hzKFNpZGVyLCB7XG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgIHRyaWdnZXI6IG51bGwsXG4gICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlZCxcbiAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnQgPT09IGZhbHNlID8gdW5kZWZpbmVkIDogYnJlYWtwb2ludCxcbiAgICAgIG9uQ29sbGFwc2U6IGZ1bmN0aW9uIG9uQ29sbGFwc2UoY29sbGFwc2UpIHtcbiAgICAgICAgaWYgKGlzTW9iaWxlKSByZXR1cm47XG4gICAgICAgIF9vbkNvbGxhcHNlID09PSBudWxsIHx8IF9vbkNvbGxhcHNlID09PSB2b2lkIDAgfHwgX29uQ29sbGFwc2UoY29sbGFwc2UpO1xuICAgICAgfSxcbiAgICAgIGNvbGxhcHNlZFdpZHRoOiBjb2xsYXBzZWRXaWR0aCxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgIHdpZHRoOiBzaWRlcldpZHRoLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHNpZGVyQ2xhc3NOYW1lLCBoYXNoSWQsIGhpZGVNZW51V2hlbkNvbGxhcHNlZENsYXNzTmFtZSksXG4gICAgICBjaGlsZHJlbjogW2hpZGVNZW51V2hlbkNvbGxhcHNlZENsYXNzTmFtZSA/IC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1oaWRlLXdoZW4tY29sbGFwc2VkIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBvcGFjaXR5OiBoaWRlTWVudVdoZW5Db2xsYXBzZWRDbGFzc05hbWUgPyAwIDogMVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogbWVudURvbUl0ZW1zXG4gICAgICB9KSA6IG1lbnVEb21JdGVtcywgY29sbGFwc2VkRG9tXVxuICAgIH0pXVxuICB9KSk7XG59O1xuZXhwb3J0IHsgU2lkZXJNZW51IH07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xudmFyIGdlblRvcE5hdkhlYWRlclN0eWxlID0gZnVuY3Rpb24gZ2VuVG9wTmF2SGVhZGVyU3R5bGUodG9rZW4pIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQsIF90b2tlbiRsYXlvdXQyLCBfdG9rZW4kbGF5b3V0MywgX3Rva2VuJGxheW91dDQsIF90b2tlbiRsYXlvdXQ1O1xuICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCB0b2tlbi5jb21wb25lbnRDbHMsIHtcbiAgICAnJi1oZWFkZXItYWN0aW9ucyc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJi1pdGVtJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nQmxvY2s6IDAsXG4gICAgICAgIHBhZGRpbmdJbmxpbmU6IDIsXG4gICAgICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0ID0gX3Rva2VuJGxheW91dC5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQuY29sb3JUZXh0UmlnaHRBY3Rpb25zSXRlbSxcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICAnPiAqJzoge1xuICAgICAgICAgIHBhZGRpbmdJbmxpbmU6IDYsXG4gICAgICAgICAgcGFkZGluZ0Jsb2NrOiA2LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAoX3Rva2VuJGxheW91dDIgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyID0gX3Rva2VuJGxheW91dDIuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDIuY29sb3JCZ1JpZ2h0QWN0aW9uc0l0ZW1Ib3ZlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLWF2YXRhcic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZ0lubGluZVN0YXJ0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nSW5saW5lRW5kOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDMgPSBfdG9rZW4kbGF5b3V0My5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0My5jb2xvclRleHRSaWdodEFjdGlvbnNJdGVtLFxuICAgICAgICAnPiBkaXYnOiB7XG4gICAgICAgICAgaGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgY29sb3I6IChfdG9rZW4kbGF5b3V0NCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDQgPSBfdG9rZW4kbGF5b3V0NC5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0NC5jb2xvclRleHRSaWdodEFjdGlvbnNJdGVtLFxuICAgICAgICAgIHBhZGRpbmdJbmxpbmU6IDgsXG4gICAgICAgICAgcGFkZGluZ0Jsb2NrOiA4LFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IChfdG9rZW4kbGF5b3V0NSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDUgPSBfdG9rZW4kbGF5b3V0NS5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0NS5jb2xvckJnUmlnaHRBY3Rpb25zSXRlbUhvdmVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gdXNlU3R5bGUocHJlZml4Q2xzKSB7XG4gIHJldHVybiB1c2VBbnRkU3R5bGUoJ1Byb0xheW91dFJpZ2h0Q29udGVudCcsIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHZhciBwcm9Ub2tlbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pLCB7fSwge1xuICAgICAgY29tcG9uZW50Q2xzOiBcIi5cIi5jb25jYXQocHJlZml4Q2xzKVxuICAgIH0pO1xuICAgIHJldHVybiBbZ2VuVG9wTmF2SGVhZGVyU3R5bGUocHJvVG9rZW4pXTtcbiAgfSk7XG59IiwiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlZ2VuZXJhdG9yUnVudGltZVwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJyaWdodENvbnRlbnRSZW5kZXJcIiwgXCJhdmF0YXJQcm9wc1wiLCBcImFjdGlvbnNSZW5kZXJcIiwgXCJoZWFkZXJDb250ZW50UmVuZGVyXCJdLFxuICBfZXhjbHVkZWQyID0gW1widGl0bGVcIiwgXCJyZW5kZXJcIl07XG5pbXBvcnQgeyB1c2VEZWJvdW5jZUZuIH0gZnJvbSAnQGFudC1kZXNpZ24vcHJvLXV0aWxzJztcbmltcG9ydCB7IEF2YXRhciwgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3JjLXJlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdHlsZSB9IGZyb20gXCIuL3JpZ2h0Q29udGVudFN0eWxlXCI7XG4vKipcbiAqIOaKveemu+WHuuadpeaYr+S4uuS6humYsuatoiByaWdodFNpemUg57uP5bi45pS55Y+Y5a+86Ie06I+c5Y2VIHJlbmRlclxuICpcbiAqIEBwYXJhbSBwYXJhbTBcbiAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCB2YXIgQWN0aW9uc0NvbnRlbnQgPSBmdW5jdGlvbiBBY3Rpb25zQ29udGVudChfcmVmKSB7XG4gIHZhciByaWdodENvbnRlbnRSZW5kZXIgPSBfcmVmLnJpZ2h0Q29udGVudFJlbmRlcixcbiAgICBhdmF0YXJQcm9wcyA9IF9yZWYuYXZhdGFyUHJvcHMsXG4gICAgYWN0aW9uc1JlbmRlciA9IF9yZWYuYWN0aW9uc1JlbmRlcixcbiAgICBoZWFkZXJDb250ZW50UmVuZGVyID0gX3JlZi5oZWFkZXJDb250ZW50UmVuZGVyLFxuICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG4gIHZhciBfdXNlQ29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgZ2V0UHJlZml4Q2xzID0gX3VzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICB2YXIgcHJlZml4Q2xzID0gXCJcIi5jb25jYXQoZ2V0UHJlZml4Q2xzKCksIFwiLXByby1nbG9iYWwtaGVhZGVyXCIpO1xuICB2YXIgX3VzZVN0eWxlID0gdXNlU3R5bGUocHJlZml4Q2xzKSxcbiAgICB3cmFwU1NSID0gX3VzZVN0eWxlLndyYXBTU1IsXG4gICAgaGFzaElkID0gX3VzZVN0eWxlLmhhc2hJZDtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCdhdXRvJyksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgcmlnaHRTaXplID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRSaWdodFNpemUgPSBfdXNlU3RhdGUyWzFdO1xuICB2YXIgYXZhdGFyRG9tID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFhdmF0YXJQcm9wcykgcmV0dXJuIG51bGw7XG4gICAgdmFyIHRpdGxlID0gYXZhdGFyUHJvcHMudGl0bGUsXG4gICAgICByZW5kZXIgPSBhdmF0YXJQcm9wcy5yZW5kZXIsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGF2YXRhclByb3BzLCBfZXhjbHVkZWQyKTtcbiAgICB2YXIgZG9tTGlzdCA9IFtyZXN0ICE9PSBudWxsICYmIHJlc3QgIT09IHZvaWQgMCAmJiByZXN0LnNyYyB8fCByZXN0ICE9PSBudWxsICYmIHJlc3QgIT09IHZvaWQgMCAmJiByZXN0LnNyY1NldCB8fCByZXN0Lmljb24gfHwgcmVzdC5jaGlsZHJlbiA/IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudChBdmF0YXIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdCksIHt9LCB7XG4gICAgICBzaXplOiAyOCxcbiAgICAgIGtleTogXCJhdmF0YXJcIlxuICAgIH0pKSA6IG51bGwsIHRpdGxlID8gLyojX19QVVJFX18qL19qc3goXCJzcGFuXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiA4XG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IHRpdGxlXG4gICAgfSwgXCJuYW1lXCIpIDogdW5kZWZpbmVkXTtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGF2YXRhclByb3BzLCAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgICAgIGNoaWxkcmVuOiBkb21MaXN0XG4gICAgICB9KSwgcHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgY2hpbGRyZW46IGRvbUxpc3RcbiAgICB9KTtcbiAgfSwgW2F2YXRhclByb3BzXSk7XG4gIHZhciByaWdodEFjdGlvbnNSZW5kZXIgPSBhY3Rpb25zUmVuZGVyIHx8IGF2YXRhckRvbSA/IGZ1bmN0aW9uIChyZXN0UGFyYW1zKSB7XG4gICAgdmFyIGRvbXMgPSBhY3Rpb25zUmVuZGVyICYmIChhY3Rpb25zUmVuZGVyID09PSBudWxsIHx8IGFjdGlvbnNSZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGlvbnNSZW5kZXIocmVzdFBhcmFtcykpO1xuICAgIGlmICghZG9tcyAmJiAhYXZhdGFyRG9tKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tcykpIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovX2pzeHMoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlci1hY3Rpb25zIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICBjaGlsZHJlbjogW2RvbXMsIGF2YXRhckRvbSAmJiAvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGVhZGVyLWFjdGlvbnMtYXZhdGFyIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgIGNoaWxkcmVuOiBhdmF0YXJEb21cbiAgICAgIH0pXVxuICAgIH0pKTtcbiAgICByZXR1cm4gd3JhcFNTUiggLyojX19QVVJFX18qL19qc3hzKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXItYWN0aW9ucyBcIikuY29uY2F0KGhhc2hJZCkudHJpbSgpLFxuICAgICAgY2hpbGRyZW46IFtkb21zLmZpbHRlcihCb29sZWFuKS5tYXAoZnVuY3Rpb24gKGRvbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGhpZGVIb3ZlciA9IGZhbHNlO1xuICAgICAgICAvLyDlpoLmnpzphY3nva7kuoYgaGlkZUhvdmVyIOWwseS4jeWxleekuiBob3ZlciDmlYjmnpzkuoZcbiAgICAgICAgaWYgKCAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZG9tKSkge1xuICAgICAgICAgIHZhciBfZG9tJHByb3BzO1xuICAgICAgICAgIGhpZGVIb3ZlciA9ICEhKGRvbSAhPT0gbnVsbCAmJiBkb20gIT09IHZvaWQgMCAmJiAoX2RvbSRwcm9wcyA9IGRvbS5wcm9wcykgIT09IG51bGwgJiYgX2RvbSRwcm9wcyAhPT0gdm9pZCAwICYmIF9kb20kcHJvcHNbJ2FyaWEtaGlkZGVuJ10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGVhZGVyLWFjdGlvbnMtaXRlbSBcIikuY29uY2F0KGhhc2hJZCksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXItYWN0aW9ucy1ob3ZlclwiKSwgIWhpZGVIb3ZlcikpLFxuICAgICAgICAgIGNoaWxkcmVuOiBkb21cbiAgICAgICAgfSwgaW5kZXgpO1xuICAgICAgfSksIGF2YXRhckRvbSAmJiAvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGVhZGVyLWFjdGlvbnMtYXZhdGFyIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgIGNoaWxkcmVuOiBhdmF0YXJEb21cbiAgICAgIH0pXVxuICAgIH0pKTtcbiAgfSA6IHVuZGVmaW5lZDtcbiAgLyoqIOWHj+WwkeS4gOS4i+a4suafk+eahOasoeaVsCAqL1xuICB2YXIgc2V0UmlnaHRTaXplRGVib3VuY2VGbiA9IHVzZURlYm91bmNlRm4oIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlKHdpZHRoKSB7XG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBzZXRSaWdodFNpemUod2lkdGgpO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfeCkge1xuICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpLCAxNjApO1xuICB2YXIgY29udGVudFJlbmRlciA9IHJpZ2h0QWN0aW9uc1JlbmRlciB8fCByaWdodENvbnRlbnRSZW5kZXI7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJpZ2h0LWNvbnRlbnQgXCIpLmNvbmNhdChoYXNoSWQpLnRyaW0oKSxcbiAgICBzdHlsZToge1xuICAgICAgbWluV2lkdGg6IHJpZ2h0U2l6ZSxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfSxcbiAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIHdpZHRoID0gX3JlZjMud2lkdGg7XG4gICAgICAgICAgc2V0UmlnaHRTaXplRGVib3VuY2VGbi5ydW4od2lkdGgpO1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogY29udGVudFJlbmRlciA/IC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogY29udGVudFJlbmRlcihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgICAgICAgIC8vIOa1i+ivleS4k+eUqFxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICByaWdodENvbnRlbnRTaXplOiByaWdodFNpemVcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSkgOiBudWxsXG4gICAgICB9KVxuICAgIH0pXG4gIH0pO1xufTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IHVzZVN0eWxlIGFzIHVzZUFudGRTdHlsZSB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG52YXIgZ2VuVG9wTmF2SGVhZGVyU3R5bGUgPSBmdW5jdGlvbiBnZW5Ub3BOYXZIZWFkZXJTdHlsZSh0b2tlbikge1xuICB2YXIgX3Rva2VuJGxheW91dCwgX3Rva2VuJGxheW91dDI7XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHRva2VuLmNvbXBvbmVudENscywge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICcuYW50aWNvbic6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgICcmLW1haW4nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdJbmxpbmVTdGFydDogJzE2cHgnLFxuICAgICAgJyYtbGVmdCc6IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgIH0sIFwiXCIuY29uY2F0KHRva2VuLnByb0NvbXBvbmVudHNDbHMsIFwiLWxheW91dC1hcHBzLWljb25cIiksIHtcbiAgICAgICAgbWFyZ2luSW5saW5lRW5kOiAxNixcbiAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IC04XG4gICAgICB9KVxuICAgIH0sXG4gICAgJyYtd2lkZSc6IHtcbiAgICAgIG1heFdpZHRoOiAxMTUyLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJ1xuICAgIH0sXG4gICAgJyYtbG9nbyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICc+ICo6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIG1pbkhlaWdodDogJzIycHgnLFxuICAgICAgICBmb250U2l6ZTogJzIycHgnXG4gICAgICB9LFxuICAgICAgJz4gKjpmaXJzdC1jaGlsZCA+IGltZyc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGhlaWdodDogJzMycHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgfSxcbiAgICAgICc+ICo6Zmlyc3QtY2hpbGQgPiBoMSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbkJsb2NrOiAwLFxuICAgICAgICBtYXJnaW5JbmxpbmU6IDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDYsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dCA9IF90b2tlbiRsYXlvdXQuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0LmNvbG9ySGVhZGVyVGl0bGUsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXG4gICAgICB9XG4gICAgfSxcbiAgICAnJi1tZW51Jzoge1xuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmdJbmxpbmU6IDYsXG4gICAgICBwYWRkaW5nQmxvY2s6IDYsXG4gICAgICBsaW5lSGVpZ2h0OiBcIlwiLmNvbmNhdChNYXRoLm1heCgoKChfdG9rZW4kbGF5b3V0MiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDIgPSBfdG9rZW4kbGF5b3V0Mi5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Mi5oZWlnaHRMYXlvdXRIZWFkZXIpIHx8IDU2KSAtIDEyLCA0MCksIFwicHhcIilcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHlsZShwcmVmaXhDbHMpIHtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnUHJvTGF5b3V0VG9wTmF2SGVhZGVyJywgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgdmFyIHRvcE5hdkhlYWRlclRva2VuID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0b2tlbiksIHt9LCB7XG4gICAgICBjb21wb25lbnRDbHM6IFwiLlwiLmNvbmNhdChwcmVmaXhDbHMpXG4gICAgfSk7XG4gICAgcmV0dXJuIFtnZW5Ub3BOYXZIZWFkZXJTdHlsZSh0b3BOYXZIZWFkZXJUb2tlbildO1xuICB9KTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCB7IGlzTmVlZE9wZW5IYXNoLCBQcm9Qcm92aWRlciB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG5pbXBvcnQgeyBjb3ZlclRvTmV3VG9rZW4gfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcHNMb2dvQ29tcG9uZW50cyB9IGZyb20gXCIuLi9BcHBzTG9nb0NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEFjdGlvbnNDb250ZW50IH0gZnJvbSBcIi4uL0dsb2JhbEhlYWRlci9BY3Rpb25zQ29udGVudFwiO1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tIFwiLi4vU2lkZXJNZW51L0Jhc2VNZW51XCI7XG5pbXBvcnQgeyByZW5kZXJMb2dvQW5kVGl0bGUgfSBmcm9tIFwiLi4vU2lkZXJNZW51L1NpZGVyTWVudVwiO1xuaW1wb3J0IHsgdXNlU3R5bGUgfSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBUb3BOYXZIZWFkZXIgPSBmdW5jdGlvbiBUb3BOYXZIZWFkZXIocHJvcHMpIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQxMywgX3Rva2VuJGxheW91dDE0LCBfdG9rZW4kbGF5b3V0MTUsIF90b2tlbiRsYXlvdXQxNiwgX3Rva2VuJGxheW91dDE3LCBfdG9rZW4kbGF5b3V0MTgsIF90b2tlbiRsYXlvdXQxOTtcbiAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIG9uTWVudUhlYWRlckNsaWNrID0gcHJvcHMub25NZW51SGVhZGVyQ2xpY2ssXG4gICAgY29udGVudFdpZHRoID0gcHJvcHMuY29udGVudFdpZHRoLFxuICAgIHJpZ2h0Q29udGVudFJlbmRlciA9IHByb3BzLnJpZ2h0Q29udGVudFJlbmRlcixcbiAgICBwcm9wc0NsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGhlYWRlckNvbnRlbnRSZW5kZXIgPSBwcm9wcy5oZWFkZXJDb250ZW50UmVuZGVyLFxuICAgIGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICBhY3Rpb25zUmVuZGVyID0gcHJvcHMuYWN0aW9uc1JlbmRlcjtcbiAgdmFyIF91c2VDb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICBnZXRQcmVmaXhDbHMgPSBfdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG4gIHZhciBfdXNlQ29udGV4dDIgPSB1c2VDb250ZXh0KFByb1Byb3ZpZGVyKSxcbiAgICBkYXJrID0gX3VzZUNvbnRleHQyLmRhcms7XG4gIHZhciBwcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMgfHwgZ2V0UHJlZml4Q2xzKCdwcm8nKSwgXCItdG9wLW5hdi1oZWFkZXJcIik7XG4gIHZhciBfdXNlU3R5bGUgPSB1c2VTdHlsZShwcmVmaXhDbHMpLFxuICAgIHdyYXBTU1IgPSBfdXNlU3R5bGUud3JhcFNTUixcbiAgICBoYXNoSWQgPSBfdXNlU3R5bGUuaGFzaElkO1xuICB2YXIgcmVuZGVyS2V5ID0gdW5kZWZpbmVkO1xuICBpZiAocHJvcHMubWVudUhlYWRlclJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmVuZGVyS2V5ID0gJ21lbnVIZWFkZXJSZW5kZXInO1xuICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ21peCcgfHwgbGF5b3V0ID09PSAndG9wJykge1xuICAgIHJlbmRlcktleSA9ICdoZWFkZXJUaXRsZVJlbmRlcic7XG4gIH1cbiAgdmFyIGhlYWRlckRvbSA9IHJlbmRlckxvZ29BbmRUaXRsZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gIH0pLCByZW5kZXJLZXkpO1xuICB2YXIgX3VzZUNvbnRleHQzID0gdXNlQ29udGV4dChQcm9Qcm92aWRlciksXG4gICAgdG9rZW4gPSBfdXNlQ29udGV4dDMudG9rZW47XG4gIHZhciBjb250ZW50RG9tID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90b2tlbiRsYXlvdXQsIF90b2tlbiRsYXlvdXQyLCBfdG9rZW4kbGF5b3V0MywgX3Rva2VuJGxheW91dDQsIF90b2tlbiRsYXlvdXQ1LCBfdG9rZW4kbGF5b3V0NiwgX3Rva2VuJGxheW91dDcsIF90b2tlbiRsYXlvdXQ4LCBfdG9rZW4kbGF5b3V0OSwgX3Rva2VuJGxheW91dDEwLCBfdG9rZW4kbGF5b3V0MTEsIF90b2tlbiRsYXlvdXQxMiwgX3Byb3BzJG1lbnVQcm9wcztcbiAgICB2YXIgZGVmYXVsdERvbSA9IC8qI19fUFVSRV9fKi9fanN4KENvbmZpZ1Byb3ZpZGVyIC8vIEB0cy1pZ25vcmVcbiAgICAsIHtcbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIGhhc2hlZDogaXNOZWVkT3Blbkhhc2goKSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIExheW91dDoge1xuICAgICAgICAgICAgaGVhZGVyQmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICBib2R5Qmc6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIE1lbnU6IF9vYmplY3RTcHJlYWQoe30sIGNvdmVyVG9OZXdUb2tlbih7XG4gICAgICAgICAgICBjb2xvckl0ZW1CZzogKChfdG9rZW4kbGF5b3V0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQgPSBfdG9rZW4kbGF5b3V0LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dC5jb2xvckJnSGVhZGVyKSB8fCAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgY29sb3JTdWJJdGVtQmc6ICgoX3Rva2VuJGxheW91dDIgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyID0gX3Rva2VuJGxheW91dDIuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDIuY29sb3JCZ0hlYWRlcikgfHwgJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIHJhZGl1c0l0ZW06IHRva2VuLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgIGNvbG9ySXRlbUJnU2VsZWN0ZWQ6ICgoX3Rva2VuJGxheW91dDMgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQzID0gX3Rva2VuJGxheW91dDMuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDMuY29sb3JCZ01lbnVJdGVtU2VsZWN0ZWQpIHx8ICh0b2tlbiA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW4uY29sb3JCZ1RleHRIb3ZlciksXG4gICAgICAgICAgICBpdGVtSG92ZXJCZzogKChfdG9rZW4kbGF5b3V0NCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDQgPSBfdG9rZW4kbGF5b3V0NC5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0NC5jb2xvckJnTWVudUl0ZW1Ib3ZlcikgfHwgKHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnVGV4dEhvdmVyKSxcbiAgICAgICAgICAgIGNvbG9ySXRlbUJnU2VsZWN0ZWRIb3Jpem9udGFsOiAoKF90b2tlbiRsYXlvdXQ1ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0NSA9IF90b2tlbiRsYXlvdXQ1LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ1LmNvbG9yQmdNZW51SXRlbVNlbGVjdGVkKSB8fCAodG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yQmdUZXh0SG92ZXIpLFxuICAgICAgICAgICAgY29sb3JBY3RpdmVCYXJXaWR0aDogMCxcbiAgICAgICAgICAgIGNvbG9yQWN0aXZlQmFySGVpZ2h0OiAwLFxuICAgICAgICAgICAgY29sb3JBY3RpdmVCYXJCb3JkZXJTaXplOiAwLFxuICAgICAgICAgICAgY29sb3JJdGVtVGV4dDogKChfdG9rZW4kbGF5b3V0NiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDYgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDYgPSBfdG9rZW4kbGF5b3V0Ni5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Ni5jb2xvclRleHRNZW51KSB8fCAodG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yVGV4dFNlY29uZGFyeSksXG4gICAgICAgICAgICBjb2xvckl0ZW1UZXh0SG92ZXJIb3Jpem9udGFsOiAoKF90b2tlbiRsYXlvdXQ3ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NyA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0NyA9IF90b2tlbiRsYXlvdXQ3LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ3LmNvbG9yVGV4dE1lbnVBY3RpdmUpIHx8ICh0b2tlbiA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW4uY29sb3JUZXh0KSxcbiAgICAgICAgICAgIGNvbG9ySXRlbVRleHRTZWxlY3RlZEhvcml6b250YWw6ICgoX3Rva2VuJGxheW91dDggPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ4ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ4ID0gX3Rva2VuJGxheW91dDguaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0OCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDguY29sb3JUZXh0TWVudVNlbGVjdGVkKSB8fCAodG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yVGV4dEJhc2UpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1Cb3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICBjb2xvckl0ZW1UZXh0SG92ZXI6ICgoX3Rva2VuJGxheW91dDkgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ5ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ5ID0gX3Rva2VuJGxheW91dDkuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0OSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDkuY29sb3JUZXh0TWVudUFjdGl2ZSkgfHwgJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1Ib3ZlckJnOiAoKF90b2tlbiRsYXlvdXQxMCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEwID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxMCA9IF90b2tlbiRsYXlvdXQxMC5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxMCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDEwLmNvbG9yQmdNZW51SXRlbUhvdmVyKSB8fCAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgICAgICAgICBjb2xvckl0ZW1UZXh0U2VsZWN0ZWQ6ICgoX3Rva2VuJGxheW91dDExID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTEgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDExID0gX3Rva2VuJGxheW91dDExLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDExID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTEuY29sb3JUZXh0TWVudVNlbGVjdGVkKSB8fCAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgICAgICAgICBwb3B1cEJnOiB0b2tlbiA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW4uY29sb3JCZ0VsZXZhdGVkLFxuICAgICAgICAgICAgc3ViTWVudUl0ZW1CZzogdG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yQmdFbGV2YXRlZCxcbiAgICAgICAgICAgIGRhcmtTdWJNZW51SXRlbUJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgZGFya1BvcHVwQmc6IHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnRWxldmF0ZWRcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgdG9rZW46IHtcbiAgICAgICAgICBjb2xvckJnRWxldmF0ZWQ6ICgoX3Rva2VuJGxheW91dDEyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDEyID0gX3Rva2VuJGxheW91dDEyLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTIuY29sb3JCZ0hlYWRlcikgfHwgJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KEJhc2VNZW51LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIHRoZW1lOiBkYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgICAgfSwgcHJvcHMpLCB7fSwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmFzZS1tZW51IFwiKS5jb25jYXQoaGFzaElkKS50cmltKClcbiAgICAgIH0sIHByb3BzLm1lbnVQcm9wcyksIHt9LCB7XG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH0sIChfcHJvcHMkbWVudVByb3BzID0gcHJvcHMubWVudVByb3BzKSA9PT0gbnVsbCB8fCBfcHJvcHMkbWVudVByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvcHMkbWVudVByb3BzLnN0eWxlKSxcbiAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgbWVudVJlbmRlclR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIG1vZGU6IFwiaG9yaXpvbnRhbFwiXG4gICAgICB9KSlcbiAgICB9KTtcbiAgICBpZiAoaGVhZGVyQ29udGVudFJlbmRlcikge1xuICAgICAgcmV0dXJuIGhlYWRlckNvbnRlbnRSZW5kZXIocHJvcHMsIGRlZmF1bHREb20pO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdERvbTtcbiAgfSwgWyhfdG9rZW4kbGF5b3V0MTMgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxMyA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MTMgPSBfdG9rZW4kbGF5b3V0MTMuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxMy5jb2xvckJnSGVhZGVyLCAoX3Rva2VuJGxheW91dDE0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDE0ID0gX3Rva2VuJGxheW91dDE0LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTQuY29sb3JCZ01lbnVJdGVtU2VsZWN0ZWQsIChfdG9rZW4kbGF5b3V0MTUgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxNSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MTUgPSBfdG9rZW4kbGF5b3V0MTUuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxNS5jb2xvckJnTWVudUl0ZW1Ib3ZlciwgKF90b2tlbiRsYXlvdXQxNiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE2ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxNiA9IF90b2tlbiRsYXlvdXQxNi5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxNiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDE2LmNvbG9yVGV4dE1lbnUsIChfdG9rZW4kbGF5b3V0MTcgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxNyA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MTcgPSBfdG9rZW4kbGF5b3V0MTcuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxNy5jb2xvclRleHRNZW51QWN0aXZlLCAoX3Rva2VuJGxheW91dDE4ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTggPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDE4ID0gX3Rva2VuJGxheW91dDE4LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTguY29sb3JUZXh0TWVudVNlbGVjdGVkLCAoX3Rva2VuJGxheW91dDE5ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTkgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDE5ID0gX3Rva2VuJGxheW91dDE5LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTkuY29sb3JCZ01lbnVFbGV2YXRlZCwgdG9rZW4uYm9yZGVyUmFkaXVzLCB0b2tlbiA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW4uY29sb3JCZ1RleHRIb3ZlciwgdG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yVGV4dFNlY29uZGFyeSwgdG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yVGV4dCwgdG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yVGV4dEJhc2UsIHRva2VuLmNvbG9yQmdFbGV2YXRlZCwgZGFyaywgcHJvcHMsIHByZWZpeENscywgaGFzaElkLCBoZWFkZXJDb250ZW50UmVuZGVyXSk7XG4gIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgaGFzaElkLCBwcm9wc0NsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpZ2h0XCIpLCB0cnVlKSksXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeHMoXCJkaXZcIiwge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tYWluXCIpLCBoYXNoSWQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13aWRlXCIpLCBjb250ZW50V2lkdGggPT09ICdGaXhlZCcgJiYgbGF5b3V0ID09PSAndG9wJykpLFxuICAgICAgY2hpbGRyZW46IFtoZWFkZXJEb20gJiYgLyojX19QVVJFX18qL19qc3hzKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWFpbi1sZWZ0IFwiKS5jb25jYXQoaGFzaElkKSksXG4gICAgICAgIG9uQ2xpY2s6IG9uTWVudUhlYWRlckNsaWNrLFxuICAgICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KEFwcHNMb2dvQ29tcG9uZW50cywgX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpKSwgLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2dvIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgICAgaWQ6IFwibG9nb1wiLFxuICAgICAgICAgIGNoaWxkcmVuOiBoZWFkZXJEb21cbiAgICAgICAgfSwgXCJsb2dvXCIpXVxuICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmbGV4OiAxXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZW51IFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICAgIGNoaWxkcmVuOiBjb250ZW50RG9tXG4gICAgICB9KSwgKHJpZ2h0Q29udGVudFJlbmRlciB8fCBhY3Rpb25zUmVuZGVyIHx8IHByb3BzLmF2YXRhclByb3BzKSAmJiAvKiNfX1BVUkVfXyovX2pzeChBY3Rpb25zQ29udGVudCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgcmlnaHRDb250ZW50UmVuZGVyOiByaWdodENvbnRlbnRSZW5kZXJcbiAgICAgIH0sIHByb3BzKSwge30sIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgICAgIH0pKV1cbiAgICB9KVxuICB9KSk7XG59O1xuZXhwb3J0IHsgVG9wTmF2SGVhZGVyIH07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xudmFyIGdlbkdsb2JhbEhlYWRlclN0eWxlID0gZnVuY3Rpb24gZ2VuR2xvYmFsSGVhZGVyU3R5bGUodG9rZW4pIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQsIF90b2tlbiRsYXlvdXQyLCBfdG9rZW4kbGF5b3V0MztcbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgdG9rZW4uY29tcG9uZW50Q2xzLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJsb2NrOiAwLFxuICAgIG1hcmdpbklubGluZTogMTYsXG4gICAgaGVpZ2h0OiAoKF90b2tlbiRsYXlvdXQgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dCA9IF90b2tlbiRsYXlvdXQuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0LmhlaWdodExheW91dEhlYWRlcikgfHwgNTYsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgJz4gYSc6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9LCBcIlwiLmNvbmNhdCh0b2tlbi5wcm9Db21wb25lbnRzQ2xzLCBcIi1sYXlvdXQtYXBwcy1pY29uXCIpLCB7XG4gICAgbWFyZ2luSW5saW5lRW5kOiAxNlxuICB9KSwgJyYtY29sbGFwc2VkLWJ1dHRvbicsIHtcbiAgICBtaW5IZWlnaHQ6ICcyMnB4JyxcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MiA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MiA9IF90b2tlbiRsYXlvdXQyLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyLmNvbG9ySGVhZGVyVGl0bGUsXG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICBtYXJnaW5JbmxpbmVFbmQ6ICcxNnB4J1xuICB9KSwgJyYtbG9nbycsIHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5JbmxpbmVFbmQ6ICcxNnB4JyxcbiAgICBhOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWluSGVpZ2h0OiAnMjJweCcsXG4gICAgICBmb250U2l6ZTogJzIwcHgnXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgIGhlaWdodDogJzI4cHgnXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgaGVpZ2h0OiAnMzJweCcsXG4gICAgICBtYXJnaW5CbG9jazogMCxcbiAgICAgIG1hcmdpbklubGluZTogMCxcbiAgICAgIG1hcmdpbklubGluZVN0YXJ0OiA4LFxuICAgICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgICBjb2xvcjogKChfdG9rZW4kbGF5b3V0MyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDMgPSBfdG9rZW4kbGF5b3V0My5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0My5jb2xvckhlYWRlclRpdGxlKSB8fCB0b2tlbi5jb2xvclRleHRIZWFkaW5nLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4J1xuICAgIH0sXG4gICAgJyYtbWl4Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9XG4gIH0pLCAnJi1sb2dvLW1vYmlsZScsIHtcbiAgICBtaW5XaWR0aDogJzI0cHgnLFxuICAgIG1hcmdpbklubGluZUVuZDogMFxuICB9KSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0eWxlKHByZWZpeENscykge1xuICByZXR1cm4gdXNlQW50ZFN0eWxlKCdQcm9MYXlvdXRHbG9iYWxIZWFkZXInLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICB2YXIgR2xvYmFsSGVhZGVyVG9rZW4gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRva2VuKSwge30sIHtcbiAgICAgIGNvbXBvbmVudENsczogXCIuXCIuY29uY2F0KHByZWZpeENscylcbiAgICB9KTtcbiAgICByZXR1cm4gW2dlbkdsb2JhbEhlYWRlclN0eWxlKEdsb2JhbEhlYWRlclRva2VuKV07XG4gIH0pO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IHsgTWVudU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGVhck1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBBcHBzTG9nb0NvbXBvbmVudHMsIGRlZmF1bHRSZW5kZXJMb2dvIH0gZnJvbSBcIi4uL0FwcHNMb2dvQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyTG9nb0FuZFRpdGxlIH0gZnJvbSBcIi4uL1NpZGVyTWVudS9TaWRlck1lbnVcIjtcbmltcG9ydCB7IFRvcE5hdkhlYWRlciB9IGZyb20gXCIuLi9Ub3BOYXZIZWFkZXJcIjtcbmltcG9ydCB7IEFjdGlvbnNDb250ZW50IH0gZnJvbSBcIi4vQWN0aW9uc0NvbnRlbnRcIjtcbmltcG9ydCB7IHVzZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciByZW5kZXJMb2dvID0gZnVuY3Rpb24gcmVuZGVyTG9nbyhtZW51SGVhZGVyUmVuZGVyLCBsb2dvRG9tKSB7XG4gIGlmIChtZW51SGVhZGVyUmVuZGVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChtZW51SGVhZGVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIG1lbnVIZWFkZXJSZW5kZXIobG9nb0RvbSwgbnVsbCk7XG4gIH1cbiAgcmV0dXJuIGxvZ29Eb207XG59O1xudmFyIEdsb2JhbEhlYWRlciA9IGZ1bmN0aW9uIEdsb2JhbEhlYWRlcihwcm9wcykge1xuICB2YXIgaXNNb2JpbGUgPSBwcm9wcy5pc01vYmlsZSxcbiAgICBsb2dvID0gcHJvcHMubG9nbyxcbiAgICBjb2xsYXBzZWQgPSBwcm9wcy5jb2xsYXBzZWQsXG4gICAgb25Db2xsYXBzZSA9IHByb3BzLm9uQ29sbGFwc2UsXG4gICAgcmlnaHRDb250ZW50UmVuZGVyID0gcHJvcHMucmlnaHRDb250ZW50UmVuZGVyLFxuICAgIG1lbnVIZWFkZXJSZW5kZXIgPSBwcm9wcy5tZW51SGVhZGVyUmVuZGVyLFxuICAgIG9uTWVudUhlYWRlckNsaWNrID0gcHJvcHMub25NZW51SGVhZGVyQ2xpY2ssXG4gICAgcHJvcENsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIHNwbGl0TWVudXMgPSBwcm9wcy5zcGxpdE1lbnVzLFxuICAgIG1lbnVEYXRhID0gcHJvcHMubWVudURhdGEsXG4gICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICB2YXIgX3VzZUNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgIGdldFByZWZpeENscyA9IF91c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICBkaXJlY3Rpb24gPSBfdXNlQ29udGV4dC5kaXJlY3Rpb247XG4gIHZhciBiYXNlQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzIHx8IGdldFByZWZpeENscygncHJvJyksIFwiLWdsb2JhbC1oZWFkZXJcIik7XG4gIHZhciBfdXNlU3R5bGUgPSB1c2VTdHlsZShiYXNlQ2xhc3NOYW1lKSxcbiAgICB3cmFwU1NSID0gX3VzZVN0eWxlLndyYXBTU1IsXG4gICAgaGFzaElkID0gX3VzZVN0eWxlLmhhc2hJZDtcbiAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcENsYXNzTmFtZSwgYmFzZUNsYXNzTmFtZSwgaGFzaElkKTtcbiAgaWYgKGxheW91dCA9PT0gJ21peCcgJiYgIWlzTW9iaWxlICYmIHNwbGl0TWVudXMpIHtcbiAgICB2YXIgbm9DaGlsZHJlbk1lbnVEYXRhID0gKG1lbnVEYXRhIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pLCB7fSwge1xuICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICAgICAgICByb3V0ZXM6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGNsZWFyTWVudURhdGEgPSBjbGVhck1lbnVJdGVtKG5vQ2hpbGRyZW5NZW51RGF0YSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KFRvcE5hdkhlYWRlciwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgIG1vZGU6IFwiaG9yaXpvbnRhbFwiXG4gICAgfSwgcHJvcHMpLCB7fSwge1xuICAgICAgc3BsaXRNZW51czogZmFsc2UsXG4gICAgICBtZW51RGF0YTogY2xlYXJNZW51RGF0YVxuICAgIH0pKTtcbiAgfVxuICB2YXIgbG9nb0NsYXNzTmFtZXMgPSBjbGFzc05hbWVzKFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWxvZ29cIiksIGhhc2hJZCwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWxvZ28tcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItbG9nby1taXhcIiksIGxheW91dCA9PT0gJ21peCcpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1sb2dvLW1vYmlsZVwiKSwgaXNNb2JpbGUpKTtcbiAgdmFyIGxvZ29Eb20gPSAvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogbG9nb0NsYXNzTmFtZXMsXG4gICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KFwiYVwiLCB7XG4gICAgICBjaGlsZHJlbjogZGVmYXVsdFJlbmRlckxvZ28obG9nbylcbiAgICB9KVxuICB9LCBcImxvZ29cIik7XG4gIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovX2pzeHMoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksXG4gICAgY2hpbGRyZW46IFtpc01vYmlsZSAmJiAvKiNfX1BVUkVfXyovX2pzeChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1jb2xsYXBzZWQtYnV0dG9uIFwiKS5jb25jYXQoaGFzaElkKS50cmltKCksXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICBvbkNvbGxhcHNlID09PSBudWxsIHx8IG9uQ29sbGFwc2UgPT09IHZvaWQgMCB8fCBvbkNvbGxhcHNlKCFjb2xsYXBzZWQpO1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChNZW51T3V0bGluZWQsIHt9KVxuICAgIH0pLCBpc01vYmlsZSAmJiByZW5kZXJMb2dvKG1lbnVIZWFkZXJSZW5kZXIsIGxvZ29Eb20pLCBsYXlvdXQgPT09ICdtaXgnICYmICFpc01vYmlsZSAmJiAvKiNfX1BVUkVfXyovX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KEFwcHNMb2dvQ29tcG9uZW50cywgX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpKSwgLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGxvZ29DbGFzc05hbWVzLFxuICAgICAgICBvbkNsaWNrOiBvbk1lbnVIZWFkZXJDbGljayxcbiAgICAgICAgY2hpbGRyZW46IHJlbmRlckxvZ29BbmRUaXRsZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gICAgICAgIH0pLCAnaGVhZGVyVGl0bGVSZW5kZXInKVxuICAgICAgfSldXG4gICAgfSksIC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZsZXg6IDFcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9KSwgKHJpZ2h0Q29udGVudFJlbmRlciB8fCBwcm9wcy5hY3Rpb25zUmVuZGVyIHx8IHByb3BzLmF2YXRhclByb3BzKSAmJiAvKiNfX1BVUkVfXyovX2pzeChBY3Rpb25zQ29udGVudCwgX29iamVjdFNwcmVhZCh7XG4gICAgICByaWdodENvbnRlbnRSZW5kZXI6IHJpZ2h0Q29udGVudFJlbmRlclxuICAgIH0sIHByb3BzKSldXG4gIH0pKTtcbn07XG5leHBvcnQgeyBHbG9iYWxIZWFkZXIgfTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IHVzZVN0eWxlIGFzIHVzZUFudGRTdHlsZSB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG52YXIgZ2VuUHJvTGF5b3V0SGVhZGVyU3R5bGUgPSBmdW5jdGlvbiBnZW5Qcm9MYXlvdXRIZWFkZXJTdHlsZSh0b2tlbikge1xuICB2YXIgX3Rva2VuJGxheW91dCwgX3Rva2VuJGxheW91dDIsIF90b2tlbiRsYXlvdXQzLCBfdG9rZW4kbGF5b3V0NDtcbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4ucHJvQ29tcG9uZW50c0NscywgXCItbGF5b3V0XCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbGF5b3V0LWhlYWRlclwiKS5jb25jYXQodG9rZW4uY29tcG9uZW50Q2xzKSwge1xuICAgIGhlaWdodDogKChfdG9rZW4kbGF5b3V0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQgPSBfdG9rZW4kbGF5b3V0LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dC5oZWlnaHRMYXlvdXRIZWFkZXIpIHx8IDU2LFxuICAgIGxpbmVIZWlnaHQ6IFwiXCIuY29uY2F0KCgoX3Rva2VuJGxheW91dDIgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyID0gX3Rva2VuJGxheW91dDIuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDIuaGVpZ2h0TGF5b3V0SGVhZGVyKSB8fCA1NiwgXCJweFwiKSxcbiAgICAvLyBoaXR1IOeUqOS6hui/meS4quWxnuaAp++8jOS4jeiDveWIoOmZpOWTpiBA5Y2X5Y+WXG4gICAgekluZGV4OiAxOSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdCbG9jazogMCxcbiAgICBwYWRkaW5nSW5saW5lOiAwLFxuICAgIGJvcmRlckJsb2NrRW5kOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodG9rZW4uY29sb3JTcGxpdCksXG4gICAgYmFja2dyb3VuZENvbG9yOiAoKF90b2tlbiRsYXlvdXQzID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MyA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MyA9IF90b2tlbiRsYXlvdXQzLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQzLmNvbG9yQmdIZWFkZXIpIHx8ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiAnYmx1cig4cHgpJyxcbiAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoOHB4KScsXG4gICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxuICAgICcmLWZpeGVkLWhlYWRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgaW5zZXRCbG9ja1N0YXJ0OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogMTAwLFxuICAgICAgaW5zZXRJbmxpbmVFbmQ6IDBcbiAgICB9LFxuICAgICcmLWZpeGVkLWhlYWRlci1zY3JvbGwnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICgoX3Rva2VuJGxheW91dDQgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ0ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ0ID0gX3Rva2VuJGxheW91dDQuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDQuY29sb3JCZ1Njcm9sbEhlYWRlcikgfHwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSdcbiAgICB9LFxuICAgICcmLWhlYWRlci1hY3Rpb25zJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogJzE2JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJyYgJi1pdGVtJzoge1xuICAgICAgICBwYWRkaW5nQmxvY2s6IDAsXG4gICAgICAgIHBhZGRpbmdJbmxpbmU6IDgsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJyYtaGVhZGVyLXJlYWxEYXJrJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCA2NSUpJ1xuICAgIH0sXG4gICAgJyYtaGVhZGVyLWFjdGlvbnMtaGVhZGVyLWFjdGlvbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSdcbiAgICB9XG4gIH0pKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gdXNlU3R5bGUocHJlZml4Q2xzKSB7XG4gIHJldHVybiB1c2VBbnRkU3R5bGUoJ1Byb0xheW91dEhlYWRlcicsIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHZhciBQcm9MYXlvdXRIZWFkZXJUb2tlbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdG9rZW4pLCB7fSwge1xuICAgICAgY29tcG9uZW50Q2xzOiBcIi5cIi5jb25jYXQocHJlZml4Q2xzKVxuICAgIH0pO1xuICAgIHJldHVybiBbZ2VuUHJvTGF5b3V0SGVhZGVyU3R5bGUoUHJvTGF5b3V0SGVhZGVyVG9rZW4pXTtcbiAgfSk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0eWxpc2gocHJlZml4Q2xzLCBfcmVmKSB7XG4gIHZhciBzdHlsaXNoID0gX3JlZi5zdHlsaXNoLFxuICAgIHByb0xheW91dENvbGxhcHNlZFdpZHRoID0gX3JlZi5wcm9MYXlvdXRDb2xsYXBzZWRXaWR0aDtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnUHJvTGF5b3V0SGVhZGVyU3R5bGlzaCcsIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHZhciBzdHlsaXNoVG9rZW4gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRva2VuKSwge30sIHtcbiAgICAgIGNvbXBvbmVudENsczogXCIuXCIuY29uY2F0KHByZWZpeENscyksXG4gICAgICBwcm9MYXlvdXRDb2xsYXBzZWRXaWR0aDogcHJvTGF5b3V0Q29sbGFwc2VkV2lkdGhcbiAgICB9KTtcbiAgICBpZiAoIXN0eWxpc2gpIHJldHVybiBbXTtcbiAgICByZXR1cm4gW19kZWZpbmVQcm9wZXJ0eSh7fSwgXCJkaXZcIi5jb25jYXQodG9rZW4ucHJvQ29tcG9uZW50c0NscywgXCItbGF5b3V0XCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHN0eWxpc2hUb2tlbi5jb21wb25lbnRDbHMpLCBzdHlsaXNoID09PSBudWxsIHx8IHN0eWxpc2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0eWxpc2goc3R5bGlzaFRva2VuKSkpXTtcbiAgfSk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IGlzTmVlZE9wZW5IYXNoLCBQcm9Qcm92aWRlciB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG5pbXBvcnQgeyBDb25maWdQcm92aWRlciwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsZWFyTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IEdsb2JhbEhlYWRlciB9IGZyb20gXCIuLi9HbG9iYWxIZWFkZXJcIjtcbmltcG9ydCB7IFRvcE5hdkhlYWRlciB9IGZyb20gXCIuLi9Ub3BOYXZIZWFkZXJcIjtcbmltcG9ydCB7IHVzZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvaGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VTdHlsaXNoIH0gZnJvbSBcIi4vc3R5bGUvc3R5bGlzaFwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIEhlYWRlciA9IExheW91dC5IZWFkZXI7XG52YXIgRGVmYXVsdEhlYWRlciA9IGZ1bmN0aW9uIERlZmF1bHRIZWFkZXIocHJvcHMpIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQyLCBfdG9rZW4kbGF5b3V0MywgX3Rva2VuJGxheW91dDQ7XG4gIHZhciBpc01vYmlsZSA9IHByb3BzLmlzTW9iaWxlLFxuICAgIGZpeGVkSGVhZGVyID0gcHJvcHMuZml4ZWRIZWFkZXIsXG4gICAgcHJvcHNDbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICBjb2xsYXBzZWQgPSBwcm9wcy5jb2xsYXBzZWQsXG4gICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIG9uQ29sbGFwc2UgPSBwcm9wcy5vbkNvbGxhcHNlLFxuICAgIGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICBoZWFkZXJSZW5kZXIgPSBwcm9wcy5oZWFkZXJSZW5kZXIsXG4gICAgaGVhZGVyQ29udGVudFJlbmRlciA9IHByb3BzLmhlYWRlckNvbnRlbnRSZW5kZXI7XG4gIHZhciBfdXNlQ29udGV4dCA9IHVzZUNvbnRleHQoUHJvUHJvdmlkZXIpLFxuICAgIHRva2VuID0gX3VzZUNvbnRleHQudG9rZW47XG4gIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KTtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBpc0ZpeGVkSGVhZGVyU2Nyb2xsID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRJc0ZpeGVkSGVhZGVyU2Nyb2xsID0gX3VzZVN0YXRlMlsxXTtcbiAgdmFyIG5lZWRGaXhlZEhlYWRlciA9IGZpeGVkSGVhZGVyIHx8IGxheW91dCA9PT0gJ21peCc7XG4gIHZhciByZW5kZXJDb250ZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc1RvcCA9IGxheW91dCA9PT0gJ3RvcCc7XG4gICAgdmFyIGNsZWFyTWVudURhdGEgPSBjbGVhck1lbnVJdGVtKHByb3BzLm1lbnVEYXRhIHx8IFtdKTtcbiAgICB2YXIgZGVmYXVsdERvbSA9IC8qI19fUFVSRV9fKi9fanN4KEdsb2JhbEhlYWRlciwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgIG9uQ29sbGFwc2U6IG9uQ29sbGFwc2VcbiAgICB9LCBwcm9wcyksIHt9LCB7XG4gICAgICBtZW51RGF0YTogY2xlYXJNZW51RGF0YSxcbiAgICAgIGNoaWxkcmVuOiBoZWFkZXJDb250ZW50UmVuZGVyICYmIGhlYWRlckNvbnRlbnRSZW5kZXIocHJvcHMsIG51bGwpXG4gICAgfSkpO1xuICAgIGlmIChpc1RvcCAmJiAhaXNNb2JpbGUpIHtcbiAgICAgIGRlZmF1bHREb20gPSAvKiNfX1BVUkVfXyovX2pzeChUb3BOYXZIZWFkZXIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIG1vZGU6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICBvbkNvbGxhcHNlOiBvbkNvbGxhcHNlXG4gICAgICB9LCBwcm9wcyksIHt9LCB7XG4gICAgICAgIG1lbnVEYXRhOiBjbGVhck1lbnVEYXRhXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChoZWFkZXJSZW5kZXIgJiYgdHlwZW9mIGhlYWRlclJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGhlYWRlclJlbmRlcihwcm9wcywgZGVmYXVsdERvbSk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RG9tO1xuICB9LCBbaGVhZGVyQ29udGVudFJlbmRlciwgaGVhZGVyUmVuZGVyLCBpc01vYmlsZSwgbGF5b3V0LCBvbkNvbGxhcHNlLCBwcm9wc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY29udGV4dCRnZXRUYXJnZXRDb247XG4gICAgdmFyIGRvbSA9IChjb250ZXh0ID09PSBudWxsIHx8IGNvbnRleHQgPT09IHZvaWQgMCB8fCAoX2NvbnRleHQkZ2V0VGFyZ2V0Q29uID0gY29udGV4dC5nZXRUYXJnZXRDb250YWluZXIpID09PSBudWxsIHx8IF9jb250ZXh0JGdldFRhcmdldENvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NvbnRleHQkZ2V0VGFyZ2V0Q29uLmNhbGwoY29udGV4dCkpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGlzRml4ZWRIZWFkZXJGbiA9IGZ1bmN0aW9uIGlzRml4ZWRIZWFkZXJGbigpIHtcbiAgICAgIHZhciBfdG9rZW4kbGF5b3V0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvbS5zY3JvbGxUb3A7XG4gICAgICBpZiAoc2Nyb2xsVG9wID4gKCgoX3Rva2VuJGxheW91dCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0ID0gX3Rva2VuJGxheW91dC5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQuaGVpZ2h0TGF5b3V0SGVhZGVyKSB8fCA1NikgJiYgIWlzRml4ZWRIZWFkZXJTY3JvbGwpIHtcbiAgICAgICAgc2V0SXNGaXhlZEhlYWRlclNjcm9sbCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNGaXhlZEhlYWRlclNjcm9sbCkge1xuICAgICAgICBzZXRJc0ZpeGVkSGVhZGVyU2Nyb2xsKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGlmICghbmVlZEZpeGVkSGVhZGVyKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGlzRml4ZWRIZWFkZXJGbiwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaXNGaXhlZEhlYWRlckZuKTtcbiAgICB9O1xuICB9LCBbKF90b2tlbiRsYXlvdXQyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MiA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MiA9IF90b2tlbiRsYXlvdXQyLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyLmhlaWdodExheW91dEhlYWRlciwgbmVlZEZpeGVkSGVhZGVyLCBpc0ZpeGVkSGVhZGVyU2Nyb2xsXSk7XG4gIHZhciBpc1RvcCA9IGxheW91dCA9PT0gJ3RvcCc7XG4gIHZhciBiYXNlQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sYXlvdXQtaGVhZGVyXCIpO1xuICB2YXIgX3VzZVN0eWxlID0gdXNlU3R5bGUoYmFzZUNsYXNzTmFtZSksXG4gICAgd3JhcFNTUiA9IF91c2VTdHlsZS53cmFwU1NSLFxuICAgIGhhc2hJZCA9IF91c2VTdHlsZS5oYXNoSWQ7XG4gIHZhciBzdHlsaXNoID0gdXNlU3R5bGlzaChcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi5cIikuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLXN0eWxpc2hcIiksIHtcbiAgICBwcm9MYXlvdXRDb2xsYXBzZWRXaWR0aDogNjQsXG4gICAgc3R5bGlzaDogcHJvcHMuc3R5bGlzaFxuICB9KTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHNDbGFzc05hbWUsIGhhc2hJZCwgYmFzZUNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1maXhlZC1oZWFkZXJcIiksIG5lZWRGaXhlZEhlYWRlciksIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWZpeGVkLWhlYWRlci1zY3JvbGxcIiksIGlzRml4ZWRIZWFkZXJTY3JvbGwpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1taXhcIiksIGxheW91dCA9PT0gJ21peCcpLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1maXhlZC1oZWFkZXItYWN0aW9uXCIpLCAhY29sbGFwc2VkKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItdG9wLW1lbnVcIiksIGlzVG9wKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItaGVhZGVyXCIpLCB0cnVlKSwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItc3R5bGlzaFwiKSwgISFwcm9wcy5zdHlsaXNoKSk7XG4gIGlmIChsYXlvdXQgPT09ICdzaWRlJyAmJiAhaXNNb2JpbGUpIHJldHVybiBudWxsO1xuICByZXR1cm4gc3R5bGlzaC53cmFwU1NSKHdyYXBTU1IoIC8qI19fUFVSRV9fKi9fanN4KF9GcmFnbWVudCwge1xuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeHMoQ29uZmlnUHJvdmlkZXJcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLCB7XG4gICAgICB0aGVtZToge1xuICAgICAgICBoYXNoZWQ6IGlzTmVlZE9wZW5IYXNoKCksXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBMYXlvdXQ6IHtcbiAgICAgICAgICAgIGhlYWRlckJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgYm9keUJnOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtuZWVkRml4ZWRIZWFkZXIgJiYgLyojX19QVVJFX18qL19qc3goSGVhZGVyLCB7XG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICBoZWlnaHQ6ICgoX3Rva2VuJGxheW91dDMgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQzID0gX3Rva2VuJGxheW91dDMuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDMuaGVpZ2h0TGF5b3V0SGVhZGVyKSB8fCA1NixcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBcIlwiLmNvbmNhdCgoKF90b2tlbiRsYXlvdXQ0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0NCA9IF90b2tlbiRsYXlvdXQ0LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ0LmhlaWdodExheW91dEhlYWRlcikgfHwgNTYsIFwicHhcIiksXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIHpJbmRleDogMTlcbiAgICAgICAgfSwgc3R5bGUpXG4gICAgICB9KSwgLyojX19QVVJFX18qL19qc3goSGVhZGVyLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNoaWxkcmVuOiByZW5kZXJDb250ZW50KClcbiAgICAgIH0pXVxuICAgIH0pXG4gIH0pKSk7XG59O1xuZXhwb3J0IHsgRGVmYXVsdEhlYWRlciB9OyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IHsgS2V5ZnJhbWVzIH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5pbXBvcnQgeyB1c2VTdHlsZSBhcyB1c2VBbnRkU3R5bGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tcHJvdmlkZXInO1xuZXhwb3J0IHZhciBwcm9MYXlvdXRUaXRsZUhpZGUgPSBuZXcgS2V5ZnJhbWVzKCdhbnRCYWRnZUxvYWRpbmdDaXJjbGUnLCB7XG4gICcwJSc6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgb3BhY2l0eTogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgJzgwJSc6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgZGlzcGxheTogJ3Vuc2V0JyxcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pO1xudmFyIGdlblNpZGVyTWVudVN0eWxlID0gZnVuY3Rpb24gZ2VuU2lkZXJNZW51U3R5bGUodG9rZW4pIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQsIF90b2tlbiRsYXlvdXQyLCBfdG9rZW4kbGF5b3V0MywgX3Rva2VuJGxheW91dDQsIF90b2tlbiRsYXlvdXQ1LCBfdG9rZW4kbGF5b3V0NiwgX3Rva2VuJGxheW91dDcsIF90b2tlbiRsYXlvdXQ4LCBfdG9rZW4kbGF5b3V0OSwgX3Rva2VuJGxheW91dDEwLCBfdG9rZW4kbGF5b3V0MTEsIF90b2tlbiRsYXlvdXQxMjtcbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4ucHJvQ29tcG9uZW50c0NscywgXCItbGF5b3V0XCIpLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1sYXlvdXQtc2lkZXJcIikuY29uY2F0KHRva2VuLmNvbXBvbmVudENscyksIHtcbiAgICBiYWNrZ3JvdW5kOiAoKF90b2tlbiRsYXlvdXQgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dCA9IF90b2tlbiRsYXlvdXQuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQuY29sb3JNZW51QmFja2dyb3VuZCkgfHwgJ3RyYW5zcGFyZW50J1xuICB9KSwgdG9rZW4uY29tcG9uZW50Q2xzLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgJyYtbWVudSc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxMCxcbiAgICAgIG1pbkhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9LCBcIiYgXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbGF5b3V0LXNpZGVyLWNoaWxkcmVuXCIpLCB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdJbmxpbmU6IChfdG9rZW4kbGF5b3V0MiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDIgPSBfdG9rZW4kbGF5b3V0Mi5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyLnBhZGRpbmdJbmxpbmVMYXlvdXRNZW51LFxuICAgIHBhZGRpbmdCbG9jazogKF90b2tlbiRsYXlvdXQzID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MyA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MyA9IF90b2tlbiRsYXlvdXQzLnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDMucGFkZGluZ0Jsb2NrTGF5b3V0TWVudSxcbiAgICBib3JkZXJJbmxpbmVFbmQ6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0b2tlbi5jb2xvclNwbGl0KSxcbiAgICBtYXJnaW5JbmxpbmVFbmQ6IC0xXG4gIH0pLCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnVcIiksIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLWdyb3VwLXRpdGxlXCIpLCB7XG4gICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplU00sXG4gICAgcGFkZGluZ0JvdHRvbTogNFxuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW06bm90KFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tc2VsZWN0ZWQpOmhvdmVyXCIpLCB7XG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0NCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDQgPSBfdG9rZW4kbGF5b3V0NC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ0LmNvbG9yVGV4dE1lbnVJdGVtSG92ZXJcbiAgfSkpLCAnJi1sb2dvJywge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIHBhZGRpbmdJbmxpbmU6IDEyLFxuICAgIHBhZGRpbmdCbG9jazogMTYsXG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0NSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDUgPSBfdG9rZW4kbGF5b3V0NS5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ1LmNvbG9yVGV4dE1lbnUsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgYm9yZGVyQmxvY2tFbmQ6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCgoX3Rva2VuJGxheW91dDYgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ2ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ2ID0gX3Rva2VuJGxheW91dDYuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Ni5jb2xvck1lbnVJdGVtRGl2aWRlciksXG4gICAgJz4gYSc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWluSGVpZ2h0OiAyMixcbiAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGhlaWdodDogMjIsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICB9LFxuICAgICAgJz4gaDEnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBoZWlnaHQ6IDIyLFxuICAgICAgICBtYXJnaW5CbG9jazogMCxcbiAgICAgICAgbWFyZ2luSW5saW5lRW5kOiAwLFxuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogNixcbiAgICAgICAgY29sb3I6IChfdG9rZW4kbGF5b3V0NyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDcgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDcgPSBfdG9rZW4kbGF5b3V0Ny5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ3LmNvbG9yVGV4dE1lbnVUaXRsZSxcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogcHJvTGF5b3V0VGl0bGVIaWRlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJy40cycsXG4gICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICB9XG4gICAgfSxcbiAgICAnJi1jb2xsYXBzZWQnOiBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDEyXG4gICAgfSwgXCJcIi5jb25jYXQodG9rZW4ucHJvQ29tcG9uZW50c0NscywgXCItbGF5b3V0LWFwcHMtaWNvblwiKSwge1xuICAgICAgbWFyZ2luQmxvY2tFbmQ6IDgsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICB0cmFuc2l0aW9uOiAnZm9udC1zaXplIDAuMnMgZWFzZS1pbi1vdXQsY29sb3IgMC4ycyBlYXNlLWluLW91dCdcbiAgICB9KVxuICB9KSwgJyYtYWN0aW9ucycsIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5CbG9jazogNCxcbiAgICBtYXJnaW5JbmxpbmU6IDAsXG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0OCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDggPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDggPSBfdG9rZW4kbGF5b3V0OC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ4LmNvbG9yVGV4dE1lbnUsXG4gICAgJyYtY29sbGFwc2VkJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgIHBhZGRpbmdCbG9jazogMCxcbiAgICAgIHBhZGRpbmdJbmxpbmU6IDgsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICB0cmFuc2l0aW9uOiAnZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQnXG4gICAgfSxcbiAgICAnJi1saXN0Jzoge1xuICAgICAgY29sb3I6IChfdG9rZW4kbGF5b3V0OSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDkgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDkgPSBfdG9rZW4kbGF5b3V0OS5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ5LmNvbG9yVGV4dE1lbnVTZWNvbmRhcnksXG4gICAgICAnJi1jb2xsYXBzZWQnOiB7XG4gICAgICAgIG1hcmdpbkJsb2NrRW5kOiA4LFxuICAgICAgICBhbmltYXRpb25OYW1lOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJi1pdGVtJzoge1xuICAgICAgICBwYWRkaW5nSW5saW5lOiA2LFxuICAgICAgICBwYWRkaW5nQmxvY2s6IDYsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRva2VuLmNvbG9yQmdUZXh0SG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJyYtYXZhdGFyJzoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgcGFkZGluZ0lubGluZTogOCxcbiAgICAgIHBhZGRpbmdCbG9jazogOCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZ2FwOiB0b2tlbi5tYXJnaW5YUyxcbiAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgJyYgKic6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdG9rZW4uY29sb3JCZ1RleHRIb3ZlclxuICAgICAgfVxuICAgIH1cbiAgfSksICcmLWhpZGUtbWVudS1jb2xsYXBzZWQnLCB7XG4gICAgaW5zZXRJbmxpbmVTdGFydDogXCItXCIuY29uY2F0KHRva2VuLnByb0xheW91dENvbGxhcHNlZFdpZHRoIC0gMTIsIFwicHhcIiksXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfSksICcmLWV4dHJhJywge1xuICAgIG1hcmdpbkJsb2NrRW5kOiAxNixcbiAgICBtYXJnaW5CbG9jazogMCxcbiAgICBtYXJnaW5JbmxpbmU6IDE2LFxuICAgICcmLW5vLWxvZ28nOiB7XG4gICAgICBtYXJnaW5CbG9ja1N0YXJ0OiAxNlxuICAgIH1cbiAgfSksICcmLWxpbmtzJywge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdWw6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9KSwgJyYtbGluay1tZW51Jywge1xuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgfSksICcmLWZvb3RlcicsIHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQxMCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEwID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxMCA9IF90b2tlbiRsYXlvdXQxMC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTAuY29sb3JUZXh0TWVudVNlY29uZGFyeSxcbiAgICBwYWRkaW5nQmxvY2tFbmQ6IDE2LFxuICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZSxcbiAgICBhbmltYXRpb25OYW1lOiBwcm9MYXlvdXRUaXRsZUhpZGUsXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcuNHMnLFxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcbiAgfSkpLCBcIlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMpLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWZpeGVkXCIpLCB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgaW5zZXRCbG9ja1N0YXJ0OiAwLFxuICAgIGluc2V0SW5saW5lU3RhcnQ6IDAsXG4gICAgekluZGV4OiAnMTAwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAnJi1taXgnOiB7XG4gICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KCgoX3Rva2VuJGxheW91dDExID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTEgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDExID0gX3Rva2VuJGxheW91dDExLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDExID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTEuaGVpZ2h0TGF5b3V0SGVhZGVyKSB8fCA1NiwgXCJweClcIiksXG4gICAgICBpbnNldEJsb2NrU3RhcnQ6IFwiXCIuY29uY2F0KCgoX3Rva2VuJGxheW91dDEyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDEyID0gX3Rva2VuJGxheW91dDEyLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTIuaGVpZ2h0TGF5b3V0SGVhZGVyKSB8fCA1NiwgXCJweFwiKVxuICAgIH1cbiAgfSkpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHlsZShwcmVmaXhDbHMsIF9yZWYyKSB7XG4gIHZhciBwcm9MYXlvdXRDb2xsYXBzZWRXaWR0aCA9IF9yZWYyLnByb0xheW91dENvbGxhcHNlZFdpZHRoO1xuICByZXR1cm4gdXNlQW50ZFN0eWxlKCdQcm9MYXlvdXRTaWRlck1lbnUnLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICB2YXIgc2lkZXJNZW51VG9rZW4gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRva2VuKSwge30sIHtcbiAgICAgIGNvbXBvbmVudENsczogXCIuXCIuY29uY2F0KHByZWZpeENscyksXG4gICAgICBwcm9MYXlvdXRDb2xsYXBzZWRXaWR0aDogcHJvTGF5b3V0Q29sbGFwc2VkV2lkdGhcbiAgICB9KTtcbiAgICByZXR1cm4gW2dlblNpZGVyTWVudVN0eWxlKHNpZGVyTWVudVRva2VuKV07XG4gIH0pO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgeyBQcm9Qcm92aWRlciB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG5pbXBvcnQgeyBvcGVuVmlzaWJsZUNvbXBhdGlibGUgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIsIERyYXdlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgT21pdCBmcm9tICdvbWl0LmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaWRlck1lbnUgfSBmcm9tIFwiLi9TaWRlck1lbnVcIjtcbmltcG9ydCB7IHVzZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvaW5kZXhcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG52YXIgU2lkZXJNZW51V3JhcHBlciA9IGZ1bmN0aW9uIFNpZGVyTWVudVdyYXBwZXIocHJvcHMpIHtcbiAgdmFyIF90b2tlbiRsYXlvdXQ7XG4gIHZhciBpc01vYmlsZSA9IHByb3BzLmlzTW9iaWxlLFxuICAgIHNpZGVyV2lkdGggPSBwcm9wcy5zaWRlcldpZHRoLFxuICAgIGNvbGxhcHNlZCA9IHByb3BzLmNvbGxhcHNlZCxcbiAgICBvbkNvbGxhcHNlID0gcHJvcHMub25Db2xsYXBzZSxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBoaWRlID0gcHJvcHMuaGlkZSxcbiAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgZ2V0Q29udGFpbmVyID0gcHJvcHMuZ2V0Q29udGFpbmVyO1xuICB2YXIgX3VzZUNvbnRleHQgPSB1c2VDb250ZXh0KFByb1Byb3ZpZGVyKSxcbiAgICB0b2tlbiA9IF91c2VDb250ZXh0LnRva2VuO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc01vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgb25Db2xsYXBzZSA9PT0gbnVsbCB8fCBvbkNvbGxhcHNlID09PSB2b2lkIDAgfHwgb25Db2xsYXBzZSh0cnVlKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbaXNNb2JpbGVdKTtcbiAgdmFyIG9taXRQcm9wcyA9IE9taXQocHJvcHMsIFsnY2xhc3NOYW1lJywgJ3N0eWxlJ10pO1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcbiAgdmFyIF91c2VTdHlsZSA9IHVzZVN0eWxlKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2lkZXJcIiksIHtcbiAgICAgIHByb0xheW91dENvbGxhcHNlZFdpZHRoOiA2NFxuICAgIH0pLFxuICAgIHdyYXBTU1IgPSBfdXNlU3R5bGUud3JhcFNTUixcbiAgICBoYXNoSWQgPSBfdXNlU3R5bGUuaGFzaElkO1xuICB2YXIgc2lkZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2lkZXJcIiksIGNsYXNzTmFtZSwgaGFzaElkKTtcbiAgaWYgKGhpZGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgZHJhd2VyT3BlblByb3BzID0gb3BlblZpc2libGVDb21wYXRpYmxlKCFjb2xsYXBzZWQsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25Db2xsYXBzZSA9PT0gbnVsbCB8fCBvbkNvbGxhcHNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNvbGxhcHNlKHRydWUpO1xuICB9KTtcbiAgcmV0dXJuIHdyYXBTU1IoaXNNb2JpbGUgPyAvKiNfX1BVUkVfXyovX2pzeChEcmF3ZXIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgcGxhY2VtZW50OiBkaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcmF3ZXItc2lkZXJcIiksIGNsYXNzTmFtZSlcbiAgfSwgZHJhd2VyT3BlblByb3BzKSwge30sIHtcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnXG4gICAgfSwgc3R5bGUpLFxuICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7XG4gICAgICBvbkNvbGxhcHNlID09PSBudWxsIHx8IG9uQ29sbGFwc2UgPT09IHZvaWQgMCB8fCBvbkNvbGxhcHNlKHRydWUpO1xuICAgIH0sXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lciB8fCBmYWxzZSxcbiAgICB3aWR0aDogc2lkZXJXaWR0aCxcbiAgICBzdHlsZXM6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IChfdG9rZW4kbGF5b3V0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQgPSBfdG9rZW4kbGF5b3V0LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0LmNvbG9yTWVudUJhY2tncm91bmRcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChTaWRlck1lbnUsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb21pdFByb3BzKSwge30sIHtcbiAgICAgIGlzTW9iaWxlOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiBzaWRlckNsYXNzTmFtZSxcbiAgICAgIGNvbGxhcHNlZDogaXNNb2JpbGUgPyBmYWxzZSA6IGNvbGxhcHNlZCxcbiAgICAgIHNwbGl0TWVudXM6IGZhbHNlLFxuICAgICAgb3JpZ2luQ29sbGFwc2VkOiBjb2xsYXBzZWRcbiAgICB9KSlcbiAgfSkpIDogLyojX19QVVJFX18qL19qc3goU2lkZXJNZW51LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgIGNsYXNzTmFtZTogc2lkZXJDbGFzc05hbWUsXG4gICAgb3JpZ2luQ29sbGFwc2VkOiBjb2xsYXBzZWRcbiAgfSwgb21pdFByb3BzKSwge30sIHtcbiAgICBzdHlsZTogc3R5bGVcbiAgfSkpKTtcbn07XG5leHBvcnQgeyBTaWRlck1lbnVXcmFwcGVyIGFzIFNpZGVyTWVudSB9OyIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbmV4cG9ydCB2YXIgbWF0Y2hQYXJhbXNQYXRoID0gZnVuY3Rpb24gbWF0Y2hQYXJhbXNQYXRoKHBhdGhuYW1lLCBicmVhZGNydW1iLCBicmVhZGNydW1iTWFwKSB7XG4gIC8vIEludGVybmFsIGxvZ2ljIHVzZSBicmVhZGNydW1iTWFwIHRvIGVuc3VyZSB0aGUgb3JkZXJcbiAgLy8g5YaF6YOo6YC76L6R5L2/55SoIGJyZWFkY3J1bWJNYXAg5p2l56Gu5L+d5p+l6K+i6aG65bqPXG4gIGlmIChicmVhZGNydW1iTWFwKSB7XG4gICAgdmFyIHBhdGhLZXkgPSBfdG9Db25zdW1hYmxlQXJyYXkoYnJlYWRjcnVtYk1hcC5rZXlzKCkpLmZpbmQoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoKGtleSkocGF0aG5hbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2tleScsIGtleSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHBhdGhLZXkpIHtcbiAgICAgIHJldHVybiBicmVhZGNydW1iTWFwLmdldChwYXRoS2V5KTtcbiAgICB9XG4gIH1cblxuICAvLyBFeHRlcm5hbCB1c2VzIHVzZSBicmVhZGNydW1iXG4gIC8vIOWklumDqOeUqOaIt+S9v+eUqCBicmVhZGNydW1iIOWPguaVsFxuICBpZiAoYnJlYWRjcnVtYikge1xuICAgIHZhciBfcGF0aEtleSA9IE9iamVjdC5rZXlzKGJyZWFkY3J1bWIpLmZpbmQoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGtleSAhPT0gbnVsbCAmJiBrZXkgIT09IHZvaWQgMCAmJiBrZXkuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaChrZXkpKHBhdGhuYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXknLCBrZXksIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChfcGF0aEtleSkge1xuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJbX3BhdGhLZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGg6ICcnXG4gIH07XG59O1xuLyoqXG4gKiDojrflj5blhbPkuo4gcGFnZVRpdGxlIOeahOaJgOacieS/oeaBr+aWueS+v+WMheijhVxuICpcbiAqIEBwYXJhbSBwcm9wc1xuICogQHBhcmFtIGlnbm9yZVRpdGxlXG4gKi9cbmV4cG9ydCB2YXIgZ2V0UGFnZVRpdGxlSW5mbyA9IGZ1bmN0aW9uIGdldFBhZ2VUaXRsZUluZm8ocHJvcHMsIGlnbm9yZVRpdGxlKSB7XG4gIHZhciBfcHJvcHMkcGF0aG5hbWUgPSBwcm9wcy5wYXRobmFtZSxcbiAgICBwYXRobmFtZSA9IF9wcm9wcyRwYXRobmFtZSA9PT0gdm9pZCAwID8gJy8nIDogX3Byb3BzJHBhdGhuYW1lLFxuICAgIGJyZWFkY3J1bWIgPSBwcm9wcy5icmVhZGNydW1iLFxuICAgIGJyZWFkY3J1bWJNYXAgPSBwcm9wcy5icmVhZGNydW1iTWFwLFxuICAgIGZvcm1hdE1lc3NhZ2UgPSBwcm9wcy5mb3JtYXRNZXNzYWdlLFxuICAgIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgX3Byb3BzJG1lbnUgPSBwcm9wcy5tZW51LFxuICAgIG1lbnUgPSBfcHJvcHMkbWVudSA9PT0gdm9pZCAwID8ge1xuICAgICAgbG9jYWxlOiBmYWxzZVxuICAgIH0gOiBfcHJvcHMkbWVudTtcbiAgdmFyIHBhZ2VUaXRsZSA9IGlnbm9yZVRpdGxlID8gJycgOiB0aXRsZSB8fCAnJztcbiAgdmFyIGN1cnJSb3V0ZXJEYXRhID0gbWF0Y2hQYXJhbXNQYXRoKHBhdGhuYW1lLCBicmVhZGNydW1iLCBicmVhZGNydW1iTWFwKTtcbiAgaWYgKCFjdXJyUm91dGVyRGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogcGFnZVRpdGxlLFxuICAgICAgaWQ6ICcnLFxuICAgICAgcGFnZU5hbWU6IHBhZ2VUaXRsZVxuICAgIH07XG4gIH1cbiAgdmFyIHBhZ2VOYW1lID0gY3VyclJvdXRlckRhdGEubmFtZTtcbiAgaWYgKG1lbnUubG9jYWxlICE9PSBmYWxzZSAmJiBjdXJyUm91dGVyRGF0YS5sb2NhbGUgJiYgZm9ybWF0TWVzc2FnZSkge1xuICAgIHBhZ2VOYW1lID0gZm9ybWF0TWVzc2FnZSh7XG4gICAgICBpZDogY3VyclJvdXRlckRhdGEubG9jYWxlIHx8ICcnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6IGN1cnJSb3V0ZXJEYXRhLm5hbWVcbiAgICB9KTtcbiAgfVxuICBpZiAoIXBhZ2VOYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBwYWdlVGl0bGUsXG4gICAgICBpZDogY3VyclJvdXRlckRhdGEubG9jYWxlIHx8ICcnLFxuICAgICAgcGFnZU5hbWU6IHBhZ2VUaXRsZVxuICAgIH07XG4gIH1cbiAgaWYgKGlnbm9yZVRpdGxlIHx8ICF0aXRsZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogcGFnZU5hbWUsXG4gICAgICBpZDogY3VyclJvdXRlckRhdGEubG9jYWxlIHx8ICcnLFxuICAgICAgcGFnZU5hbWU6IHBhZ2VOYW1lXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlwiLmNvbmNhdChwYWdlTmFtZSwgXCIgLSBcIikuY29uY2F0KHRpdGxlKSxcbiAgICBpZDogY3VyclJvdXRlckRhdGEubG9jYWxlIHx8ICcnLFxuICAgIHBhZ2VOYW1lOiBwYWdlTmFtZVxuICB9O1xufTtcbmV4cG9ydCB2YXIgZ2V0UGFnZVRpdGxlID0gZnVuY3Rpb24gZ2V0UGFnZVRpdGxlKHByb3BzLCBpZ25vcmVUaXRsZSkge1xuICByZXR1cm4gZ2V0UGFnZVRpdGxlSW5mbyhwcm9wcywgaWdub3JlVGl0bGUpLnRpdGxlO1xufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdhcHAuc2V0dGluZy5wYWdlc3R5bGUnOiAnUGFnZSBzdHlsZSBzZXR0aW5nJyxcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZS5kYXJrJzogJ0RhcmsgTWVudSBzdHlsZScsXG4gICdhcHAuc2V0dGluZy5wYWdlc3R5bGUubGlnaHQnOiAnTGlnaHQgTWVudSBzdHlsZScsXG4gICdhcHAuc2V0dGluZy5wYWdlc3R5bGUucmVhbGRhcmsnOiAnRGFyayBzdHlsZSAoQmV0YSknLFxuICAnYXBwLnNldHRpbmcuY29udGVudC13aWR0aCc6ICdDb250ZW50IFdpZHRoJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZml4ZWQnOiAnRml4ZWQnLFxuICAnYXBwLnNldHRpbmcuY29udGVudC13aWR0aC5mbHVpZCc6ICdGbHVpZCcsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yJzogJ1RoZW1lIENvbG9yJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZHVzdCc6ICdEdXN0IFJlZCcsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnZvbGNhbm8nOiAnVm9sY2FubycsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnN1bnNldCc6ICdTdW5zZXQgT3JhbmdlJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuY3lhbic6ICdDeWFuJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZ3JlZW4nOiAnUG9sYXIgR3JlZW4nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci50ZWNoQmx1ZSc6ICdUZWNoIEJsdWUgKGRlZmF1bHQpJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZGF5YnJlYWsnOiAnRGF5YnJlYWsgQmx1ZScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdlZWtibHVlJzogJ0dlZWsgQmx1ZScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnB1cnBsZSc6ICdHb2xkZW4gUHVycGxlJyxcbiAgJ2FwcC5zZXR0aW5nLnNpZGVybWVudXR5cGUnOiAnU2lkZU1lbnUgVHlwZScsXG4gICdhcHAuc2V0dGluZy5zaWRlcm1lbnV0eXBlLXN1Yic6ICdDbGFzc2ljJyxcbiAgJ2FwcC5zZXR0aW5nLnNpZGVybWVudXR5cGUtZ3JvdXAnOiAnR3JvdXBpbmcnLFxuICAnYXBwLnNldHRpbmcubmF2aWdhdGlvbm1vZGUnOiAnTmF2aWdhdGlvbiBNb2RlJyxcbiAgJ2FwcC5zZXR0aW5nLnJlZ2lvbmFsc2V0dGluZ3MnOiAnUmVnaW9uYWwgU2V0dGluZ3MnLFxuICAnYXBwLnNldHRpbmcucmVnaW9uYWxzZXR0aW5ncy5oZWFkZXInOiAnSGVhZGVyJyxcbiAgJ2FwcC5zZXR0aW5nLnJlZ2lvbmFsc2V0dGluZ3MubWVudSc6ICdNZW51JyxcbiAgJ2FwcC5zZXR0aW5nLnJlZ2lvbmFsc2V0dGluZ3MuZm9vdGVyJzogJ0Zvb3RlcicsXG4gICdhcHAuc2V0dGluZy5yZWdpb25hbHNldHRpbmdzLm1lbnVIZWFkZXInOiAnTWVudSBIZWFkZXInLFxuICAnYXBwLnNldHRpbmcuc2lkZW1lbnUnOiAnU2lkZSBNZW51IExheW91dCcsXG4gICdhcHAuc2V0dGluZy50b3BtZW51JzogJ1RvcCBNZW51IExheW91dCcsXG4gICdhcHAuc2V0dGluZy5taXhtZW51JzogJ01peCBNZW51IExheW91dCcsXG4gICdhcHAuc2V0dGluZy5zcGxpdE1lbnVzJzogJ1NwbGl0IE1lbnVzJyxcbiAgJ2FwcC5zZXR0aW5nLmZpeGVkaGVhZGVyJzogJ0ZpeGVkIEhlYWRlcicsXG4gICdhcHAuc2V0dGluZy5maXhlZHNpZGViYXInOiAnRml4ZWQgU2lkZWJhcicsXG4gICdhcHAuc2V0dGluZy5maXhlZHNpZGViYXIuaGludCc6ICdXb3JrcyBvbiBTaWRlIE1lbnUgTGF5b3V0JyxcbiAgJ2FwcC5zZXR0aW5nLmhpZGVoZWFkZXInOiAnSGlkZGVuIEhlYWRlciB3aGVuIHNjcm9sbGluZycsXG4gICdhcHAuc2V0dGluZy5oaWRlaGVhZGVyLmhpbnQnOiAnV29ya3Mgd2hlbiBIaWRkZW4gSGVhZGVyIGlzIGVuYWJsZWQnLFxuICAnYXBwLnNldHRpbmcub3RoZXJzZXR0aW5ncyc6ICdPdGhlciBTZXR0aW5ncycsXG4gICdhcHAuc2V0dGluZy53ZWFrbW9kZSc6ICdXZWFrIE1vZGUnLFxuICAnYXBwLnNldHRpbmcuY29weSc6ICdDb3B5IFNldHRpbmcnLFxuICAnYXBwLnNldHRpbmcubG9hZGluZyc6ICdMb2FkaW5nIHRoZW1lJyxcbiAgJ2FwcC5zZXR0aW5nLmNvcHlpbmZvJzogJ2NvcHkgc3VjY2Vzc++8jHBsZWFzZSByZXBsYWNlIGRlZmF1bHRTZXR0aW5ncyBpbiBzcmMvbW9kZWxzL3NldHRpbmcuanMnLFxuICAnYXBwLnNldHRpbmcucHJvZHVjdGlvbi5oaW50JzogJ1NldHRpbmcgcGFuZWwgc2hvd3MgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgb25seSwgcGxlYXNlIG1hbnVhbGx5IG1vZGlmeSdcbn07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBzZXR0aW5nRHJhd2VyIGZyb20gXCIuL2VuLVVTL3NldHRpbmdEcmF3ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoe30sIHNldHRpbmdEcmF3ZXIpOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZSc6ICdJbXBvc3RhemlvbmkgZGkgc3RpbGUnLFxuICAnYXBwLnNldHRpbmcucGFnZXN0eWxlLmRhcmsnOiAnVGVtYSBzY3VybycsXG4gICdhcHAuc2V0dGluZy5wYWdlc3R5bGUubGlnaHQnOiAnVGVtYSBjaGlhcm8nLFxuICAnYXBwLnNldHRpbmcuY29udGVudC13aWR0aCc6ICdMYXJnZXp6YSBjb250ZW51dG8nLFxuICAnYXBwLnNldHRpbmcuY29udGVudC13aWR0aC5maXhlZCc6ICdGaXNzYScsXG4gICdhcHAuc2V0dGluZy5jb250ZW50LXdpZHRoLmZsdWlkJzogJ0ZsdWlkYScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yJzogJ0NvbG9yZSBkZWwgdGVtYScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmR1c3QnOiAnUm9zc28gcG9sdmVyZScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnZvbGNhbm8nOiAnVnVsY2FubycsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnN1bnNldCc6ICdBcmFuY2lvbmUgdHJhbW9udG8nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci5jeWFuJzogJ0NpYW5vJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZ3JlZW4nOiAnVmVyZGUgcG9sYXJlJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IudGVjaEJsdWUnOiAnVGVjaCBCbHUgKGRlZmF1bHQpJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZGF5YnJlYWsnOiAnQmx1IGNpZWxvIG1hdHR1dGlubycsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdlZWtibHVlJzogJ0JsdSBnZWVrJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IucHVycGxlJzogJ1Zpb2xhIGRvcmF0bycsXG4gICdhcHAuc2V0dGluZy5uYXZpZ2F0aW9ubW9kZSc6ICdNb2RhbGl0w6AgZGkgbmF2aWdhemlvbmUnLFxuICAnYXBwLnNldHRpbmcuc2lkZW1lbnUnOiAnTWVudSBsYXRlcmFsZScsXG4gICdhcHAuc2V0dGluZy50b3BtZW51JzogJ01lbnUgaW4gdGVzdGF0YScsXG4gICdhcHAuc2V0dGluZy5taXhtZW51JzogJ01lbnUgbWlzdG8nLFxuICAnYXBwLnNldHRpbmcuc3BsaXRNZW51cyc6ICdNZW51IGRpdmlzaScsXG4gICdhcHAuc2V0dGluZy5maXhlZGhlYWRlcic6ICdUZXN0YXRhIGZpc3NhJyxcbiAgJ2FwcC5zZXR0aW5nLmZpeGVkc2lkZWJhcic6ICdNZW51IGxhdGVyYWxlIGZpc3NvJyxcbiAgJ2FwcC5zZXR0aW5nLmZpeGVkc2lkZWJhci5oaW50JzogJ1NvbG8gc2Ugc2VsZXppb25hdG8gTWVudSBsYXRlcmFsZScsXG4gICdhcHAuc2V0dGluZy5oaWRlaGVhZGVyJzogJ05hc2NvbmRpIHRlc3RhdGEgZHVyYW50ZSBsbyBzY29ycmltZW50bycsXG4gICdhcHAuc2V0dGluZy5oaWRlaGVhZGVyLmhpbnQnOiAnU29sbyBzZSBhYmlsaXRhdG8gTmFzY29uZGkgdGVzdGF0YSBkdXJhbnRlIGxvIHNjb3JyaW1lbnRvJyxcbiAgJ2FwcC5zZXR0aW5nLm90aGVyc2V0dGluZ3MnOiAnQWx0cmUgaW1wb3N0YXppb25pJyxcbiAgJ2FwcC5zZXR0aW5nLndlYWttb2RlJzogJ0ludmVydGkgY29sb3JpJyxcbiAgJ2FwcC5zZXR0aW5nLmNvcHknOiAnQ29waWEgaW1wb3N0YXppb25pJyxcbiAgJ2FwcC5zZXR0aW5nLmxvYWRpbmcnOiAnQ2FyaWNvIHRlbWEuLi4nLFxuICAnYXBwLnNldHRpbmcuY29weWluZm8nOiAnSW1wb3N0YXppb25pIGNvcGlhdGUgY29uIHN1Y2Nlc3NvISBJbmNvbGxhIGlsIGNvbnRlbnV0byBpbiBjb25maWcvZGVmYXVsdFNldHRpbmdzLmpzJyxcbiAgJ2FwcC5zZXR0aW5nLnByb2R1Y3Rpb24uaGludCc6ICdRdWVzdG8gcGFubmVsbG8gw6ggdmlzaWJpbGUgc29sbyBkdXJhbnRlIGxvIHN2aWx1cHBvLiBMZSBpbXBvc3RhemlvbmkgZGV2b25vIHBvaSBlc3NlcmUgbW9kaWZpY2F0ZSBtYW51bGFtZW50ZSdcbn07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBzZXR0aW5nRHJhd2VyIGZyb20gXCIuL2l0LUlUL3NldHRpbmdEcmF3ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoe30sIHNldHRpbmdEcmF3ZXIpOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZSc6ICfsiqTtg4Dsnbwg7ISk7KCVJyxcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZS5kYXJrJzogJ+uLpO2BrCDrqqjrk5wnLFxuICAnYXBwLnNldHRpbmcucGFnZXN0eWxlLmxpZ2h0JzogJ+udvOydtO2KuCDrqqjrk5wnLFxuICAnYXBwLnNldHRpbmcuY29udGVudC13aWR0aCc6ICfsu6jthZDsuKAg64SI67mEJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZml4ZWQnOiAn6rOg7KCVJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZmx1aWQnOiAn7Z2Q66aEJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3InOiAn7YWM66eIIOyDieyDgScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmR1c3QnOiAnRHVzdCBSZWQnLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci52b2xjYW5vJzogJ1ZvbGNhbm8nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci5zdW5zZXQnOiAnU3Vuc2V0IE9yYW5nZScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmN5YW4nOiAnQ3lhbicsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdyZWVuJzogJ1BvbGFyIEdyZWVuJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IudGVjaEJsdWUnOiAnVGVjaCBCbHUgKGRlZmF1bHQpJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZGF5YnJlYWsnOiAnRGF5YnJlYWsgQmx1ZScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdlZWtibHVlJzogJ0dlZWsgQmx1ZScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnB1cnBsZSc6ICdHb2xkZW4gUHVycGxlJyxcbiAgJ2FwcC5zZXR0aW5nLm5hdmlnYXRpb25tb2RlJzogJ+uEpOu5hOqyjOydtOyFmCDrqqjrk5wnLFxuICAnYXBwLnNldHRpbmcucmVnaW9uYWxzZXR0aW5ncyc6ICfsmIHsl63rs4Qg7ISk7KCVJyxcbiAgJ2FwcC5zZXR0aW5nLnJlZ2lvbmFsc2V0dGluZ3MuaGVhZGVyJzogJ+2XpOuNlCcsXG4gICdhcHAuc2V0dGluZy5yZWdpb25hbHNldHRpbmdzLm1lbnUnOiAn66mU64m0JyxcbiAgJ2FwcC5zZXR0aW5nLnJlZ2lvbmFsc2V0dGluZ3MuZm9vdGVyJzogJ+uwlOuLpeq4gCcsXG4gICdhcHAuc2V0dGluZy5yZWdpb25hbHNldHRpbmdzLm1lbnVIZWFkZXInOiAn66mU64m0IO2XpOuNlCcsXG4gICdhcHAuc2V0dGluZy5zaWRlbWVudSc6ICfrqZTribQg7IKs7J2065OcIOuwsOy5mCcsXG4gICdhcHAuc2V0dGluZy50b3BtZW51JzogJ+uplOuJtCDsg4Hri6gg67Cw7LmYJyxcbiAgJ2FwcC5zZXR0aW5nLm1peG1lbnUnOiAn7Zi87ZWp7ZiVIOuwsOy5mCcsXG4gICdhcHAuc2V0dGluZy5zcGxpdE1lbnVzJzogJ+uplOuJtCDrtoTrpqwnLFxuICAnYXBwLnNldHRpbmcuZml4ZWRoZWFkZXInOiAn7Zek642UIOqzoOyglScsXG4gICdhcHAuc2V0dGluZy5maXhlZHNpZGViYXInOiAn7IKs7J2065Oc67CUIOqzoOyglScsXG4gICdhcHAuc2V0dGluZy5maXhlZHNpZGViYXIuaGludCc6IFwiJ+uplOuJtCDsgqzsnbTrk5wg67Cw7LmYJ+ulvCDshKDtg53tlojsnYQg65WMIOuPmeyeke2VqFwiLFxuICAnYXBwLnNldHRpbmcuaGlkZWhlYWRlcic6ICfsiqTtgazroaQg7KSRIO2XpOuNlCDqsJDstpTquLAnLFxuICAnYXBwLnNldHRpbmcuaGlkZWhlYWRlci5oaW50JzogXCIn7Zek642UIOqwkOy2lOq4sCDsmLXshZgn7J2EIOyEoO2Dne2WiOydhCDrlYwg64+Z7J6R7ZWoXCIsXG4gICdhcHAuc2V0dGluZy5vdGhlcnNldHRpbmdzJzogJ+uLpOuluCDshKTsoJUnLFxuICAnYXBwLnNldHRpbmcud2Vha21vZGUnOiAn6rOg64yA67mEIOuqqOuTnCcsXG4gICdhcHAuc2V0dGluZy5jb3B5JzogJ+yEpOygleqwkiDrs7XsgqwnLFxuICAnYXBwLnNldHRpbmcubG9hZGluZyc6ICfthYzrp4gg66Gc65SpIOykkScsXG4gICdhcHAuc2V0dGluZy5jb3B5aW5mbyc6ICfrs7Xsgqwg7ISx6rO1LiBzcmMvbW9kZWxzL3NldHRpbmdzLmpz7JeQIOyeiOuKlCBkZWZhdWx0U2V0dGluZ3Prpbwg6rWQ7LK07ZW0IOyjvOyEuOyalC4nLFxuICAnYXBwLnNldHRpbmcucHJvZHVjdGlvbi5oaW50JzogJ+yEpOyglSDtjJDrhKzsnYAg6rCc67CcIO2ZmOqyveyXkOyEnOunjCDrs7Tsl6zsp5Hri4jri6QuIOyngeygkSDsiJjrj5nsnLzroZwg67OA6rK967CU656N64uI64ukLidcbn07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBzZXR0aW5nRHJhd2VyIGZyb20gXCIuL2tvLUtSL3NldHRpbmdEcmF3ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoe30sIHNldHRpbmdEcmF3ZXIpOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZSc6ICfmlbTkvZPpo47moLzorr7nva4nLFxuICAnYXBwLnNldHRpbmcucGFnZXN0eWxlLmRhcmsnOiAn5pqX6Imy6I+c5Y2V6aOO5qC8JyxcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZS5saWdodCc6ICfkuq7oibLoj5zljZXpo47moLwnLFxuICAnYXBwLnNldHRpbmcucGFnZXN0eWxlLnJlYWxkYXJrJzogJ+aal+iJsumjjuagvCjlrp7pqozlip/og70pJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGgnOiAn5YaF5a655Yy65Z+f5a695bqmJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZml4ZWQnOiAn5a6a5a69JyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZmx1aWQnOiAn5rWB5byPJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3InOiAn5Li76aKY6ImyJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZHVzdCc6ICfoloTmmq4nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci52b2xjYW5vJzogJ+eBq+WxsScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnN1bnNldCc6ICfml6Xmmq4nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci5jeWFuJzogJ+aYjumdkicsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdyZWVuJzogJ+aegeWFiee7vycsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnRlY2hCbHVlJzogJ+enkeaKgOiTne+8iOm7mOiupO+8iScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmRheWJyZWFrJzogJ+aLguaZkycsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdlZWtibHVlJzogJ+aegeWuouiTnScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnB1cnBsZSc6ICfphbHntKsnLFxuICAnYXBwLnNldHRpbmcubmF2aWdhdGlvbm1vZGUnOiAn5a+86Iiq5qih5byPJyxcbiAgJ2FwcC5zZXR0aW5nLnNpZGVybWVudXR5cGUnOiAn5L6n6L656I+c5Y2V57G75Z6LJyxcbiAgJ2FwcC5zZXR0aW5nLnNpZGVybWVudXR5cGUtc3ViJzogJ+e7j+WFuOaooeW8jycsXG4gICdhcHAuc2V0dGluZy5zaWRlcm1lbnV0eXBlLWdyb3VwJzogJ+WIhue7hOaooeW8jycsXG4gICdhcHAuc2V0dGluZy5yZWdpb25hbHNldHRpbmdzJzogJ+WGheWuueWMuuWfnycsXG4gICdhcHAuc2V0dGluZy5yZWdpb25hbHNldHRpbmdzLmhlYWRlcic6ICfpobbmoI8nLFxuICAnYXBwLnNldHRpbmcucmVnaW9uYWxzZXR0aW5ncy5tZW51JzogJ+iPnOWNlScsXG4gICdhcHAuc2V0dGluZy5yZWdpb25hbHNldHRpbmdzLmZvb3Rlcic6ICfpobXohJonLFxuICAnYXBwLnNldHRpbmcucmVnaW9uYWxzZXR0aW5ncy5tZW51SGVhZGVyJzogJ+iPnOWNleWktCcsXG4gICdhcHAuc2V0dGluZy5zaWRlbWVudSc6ICfkvqfovrnoj5zljZXluIPlsYAnLFxuICAnYXBwLnNldHRpbmcudG9wbWVudSc6ICfpobbpg6joj5zljZXluIPlsYAnLFxuICAnYXBwLnNldHRpbmcubWl4bWVudSc6ICfmt7flkIjoj5zljZXluIPlsYAnLFxuICAnYXBwLnNldHRpbmcuc3BsaXRNZW51cyc6ICfoh6rliqjliIblibLoj5zljZUnLFxuICAnYXBwLnNldHRpbmcuZml4ZWRoZWFkZXInOiAn5Zu65a6aIEhlYWRlcicsXG4gICdhcHAuc2V0dGluZy5maXhlZHNpZGViYXInOiAn5Zu65a6a5L6n6L656I+c5Y2VJyxcbiAgJ2FwcC5zZXR0aW5nLmZpeGVkc2lkZWJhci5oaW50JzogJ+S+p+i+ueiPnOWNleW4g+WxgOaXtuWPr+mFjee9ricsXG4gICdhcHAuc2V0dGluZy5oaWRlaGVhZGVyJzogJ+S4i+a7keaXtumakOiXjyBIZWFkZXInLFxuICAnYXBwLnNldHRpbmcuaGlkZWhlYWRlci5oaW50JzogJ+WbuuWumiBIZWFkZXIg5pe25Y+v6YWN572uJyxcbiAgJ2FwcC5zZXR0aW5nLm90aGVyc2V0dGluZ3MnOiAn5YW25LuW6K6+572uJyxcbiAgJ2FwcC5zZXR0aW5nLndlYWttb2RlJzogJ+iJsuW8seaooeW8jycsXG4gICdhcHAuc2V0dGluZy5jb3B5JzogJ+aLt+i0neiuvue9ricsXG4gICdhcHAuc2V0dGluZy5sb2FkaW5nJzogJ+ato+WcqOWKoOi9veS4u+mimCcsXG4gICdhcHAuc2V0dGluZy5jb3B5aW5mbyc6ICfmi7fotJ3miJDlip/vvIzor7fliLAgc3JjL2RlZmF1bHRTZXR0aW5ncy5qcyDkuK3mm7/mjaLpu5jorqTphY3nva4nLFxuICAnYXBwLnNldHRpbmcucHJvZHVjdGlvbi5oaW50JzogJ+mFjee9ruagj+WPquWcqOW8gOWPkeeOr+Wig+eUqOS6jumihOiniO+8jOeUn+S6p+eOr+Wig+S4jeS8muWxleeOsO+8jOivt+aLt+i0neWQjuaJi+WKqOS/ruaUuemFjee9ruaWh+S7tidcbn07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBzZXR0aW5nRHJhd2VyIGZyb20gXCIuL3poLUNOL3NldHRpbmdEcmF3ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoe30sIHNldHRpbmdEcmF3ZXIpOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZSc6ICfmlbTpq5TpoqjmoLzoqK3nva4nLFxuICAnYXBwLnNldHRpbmcucGFnZXN0eWxlLmRhcmsnOiAn5pqX6Imy6I+c5Zau6aKo5qC8JyxcbiAgJ2FwcC5zZXR0aW5nLnBhZ2VzdHlsZS5yZWFsZGFyayc6ICfmmpfoibLpoqjmoLwo5a6e6aqM5Yqf6IO9KScsXG4gICdhcHAuc2V0dGluZy5wYWdlc3R5bGUubGlnaHQnOiAn5Lqu6Imy6I+c5Zau6aKo5qC8JyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGgnOiAn5YWn5a655Y2A5Z+f5a+s5bqmJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZml4ZWQnOiAn5a6a5a+sJyxcbiAgJ2FwcC5zZXR0aW5nLmNvbnRlbnQtd2lkdGguZmx1aWQnOiAn5rWB5byPJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3InOiAn5Li76aGM6ImyJyxcbiAgJ2FwcC5zZXR0aW5nLnRoZW1lY29sb3IuZHVzdCc6ICfoloTmmq4nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci52b2xjYW5vJzogJ+eBq+WxsScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnN1bnNldCc6ICfml6Xmmq4nLFxuICAnYXBwLnNldHRpbmcudGhlbWVjb2xvci5jeWFuJzogJ+aYjumdkicsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdyZWVuJzogJ+alteWFiee2oCcsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnRlY2hCbHVlJzogJ+enkeaKgOiTne+8iOm7mOiqje+8iScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmRheWJyZWFrJzogJ+aLguabieiXjScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLmdlZWtibHVlJzogJ+alteWuouiXjScsXG4gICdhcHAuc2V0dGluZy50aGVtZWNvbG9yLnB1cnBsZSc6ICfphqzntKsnLFxuICAnYXBwLnNldHRpbmcubmF2aWdhdGlvbm1vZGUnOiAn5bCO6Iiq5qih5byPJyxcbiAgJ2FwcC5zZXR0aW5nLnNpZGVtZW51JzogJ+WBtOmCiuiPnOWWruW4g+WxgCcsXG4gICdhcHAuc2V0dGluZy50b3BtZW51JzogJ+mggumDqOiPnOWWruW4g+WxgCcsXG4gICdhcHAuc2V0dGluZy5taXhtZW51JzogJ+a3t+WQiOiPnOWWruW4g+WxgCcsXG4gICdhcHAuc2V0dGluZy5zcGxpdE1lbnVzJzogJ+iHquWKqOWIhuWJsuiPnOWNlScsXG4gICdhcHAuc2V0dGluZy5maXhlZGhlYWRlcic6ICflm7rlrpogSGVhZGVyJyxcbiAgJ2FwcC5zZXR0aW5nLmZpeGVkc2lkZWJhcic6ICflm7rlrprlgbTpgoroj5zllq4nLFxuICAnYXBwLnNldHRpbmcuZml4ZWRzaWRlYmFyLmhpbnQnOiAn5YG06YKK6I+c5Zau5biD5bGA5pmC5Y+v6YWN572uJyxcbiAgJ2FwcC5zZXR0aW5nLmhpZGVoZWFkZXInOiAn5LiL5ruR5pmC6Zqx6JePIEhlYWRlcicsXG4gICdhcHAuc2V0dGluZy5oaWRlaGVhZGVyLmhpbnQnOiAn5Zu65a6aIEhlYWRlciDmmYLlj6/phY3nva4nLFxuICAnYXBwLnNldHRpbmcub3RoZXJzZXR0aW5ncyc6ICflhbbku5boqK3nva4nLFxuICAnYXBwLnNldHRpbmcud2Vha21vZGUnOiAn6Imy5byx5qih5byPJyxcbiAgJ2FwcC5zZXR0aW5nLmNvcHknOiAn5ou36LKd6Kit572uJyxcbiAgJ2FwcC5zZXR0aW5nLmxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ5Li76aGMJyxcbiAgJ2FwcC5zZXR0aW5nLmNvcHlpbmZvJzogJ+aLt+iyneaIkOWKn++8jOiri+WIsCBzcmMvZGVmYXVsdFNldHRpbmdzLmpzIOS4reabv+aPm+m7mOiqjemFjee9ricsXG4gICdhcHAuc2V0dGluZy5wcm9kdWN0aW9uLmhpbnQnOiAn6YWN572u5qyE5Y+q5Zyo6ZaL55m855Kw5aKD55So5pa86aCQ6Ka977yM55Sf55Si55Kw5aKD5LiN5pyD5bGV54++77yM6KuL5ou36LKd5b6M5omL5YuV5L+u5pS56YWN572u5paH5Lu2J1xufTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IHNldHRpbmdEcmF3ZXIgZnJvbSBcIi4vemgtVFcvc2V0dGluZ0RyYXdlclwiO1xuZXhwb3J0IGRlZmF1bHQgX29iamVjdFNwcmVhZCh7fSwgc2V0dGluZ0RyYXdlcik7IiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnQGFudC1kZXNpZ24vcHJvLXV0aWxzJztcbmltcG9ydCBlblVTTG9jYWwgZnJvbSBcIi4vZW4tVVNcIjtcbmltcG9ydCBpdElUTG9jYWwgZnJvbSBcIi4vaXQtSVRcIjtcbmltcG9ydCBrb0tSTG9jYWwgZnJvbSBcIi4va28tS1JcIjtcbmltcG9ydCB6aExvY2FsIGZyb20gXCIuL3poLUNOXCI7XG5pbXBvcnQgemhUV0xvY2FsIGZyb20gXCIuL3poLVRXXCI7XG52YXIgbG9jYWxlcyA9IHtcbiAgJ3poLUNOJzogemhMb2NhbCxcbiAgJ3poLVRXJzogemhUV0xvY2FsLFxuICAnZW4tVVMnOiBlblVTTG9jYWwsXG4gICdpdC1JVCc6IGl0SVRMb2NhbCxcbiAgJ2tvLUtSJzoga29LUkxvY2FsXG59O1xuZXhwb3J0IHZhciBnZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIGdldExhbmd1YWdlKCkge1xuICAvLyBzdXBwb3J0IHNzclxuICBpZiAoIWlzQnJvd3NlcigpKSByZXR1cm4gJ3poLUNOJztcbiAgdmFyIGxhbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VtaV9sb2NhbGUnKTtcbiAgcmV0dXJuIGxhbmcgfHwgd2luZG93LmdfbG9jYWxlIHx8IG5hdmlnYXRvci5sYW5ndWFnZTtcbn07XG5leHBvcnQgdmFyIGdMb2NhbGVPYmplY3QgPSBmdW5jdGlvbiBnTG9jYWxlT2JqZWN0KCkge1xuICB2YXIgZ0xvY2FsZSA9IGdldExhbmd1YWdlKCk7XG4gIHJldHVybiBsb2NhbGVzW2dMb2NhbGVdIHx8IGxvY2FsZXNbJ3poLUNOJ107XG59OyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IHsgdXNlU3R5bGUgYXMgdXNlQW50ZFN0eWxlIH0gZnJvbSAnQGFudC1kZXNpZ24vcHJvLXByb3ZpZGVyJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICdhbnRkJztcbnZhciBnZXRWZXJzaW9uID0gZnVuY3Rpb24gZ2V0VmVyc2lvbigpIHtcbiAgdmFyIF9wcm9jZXNzO1xuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdmVyc2lvbjtcbiAgcmV0dXJuICgoX3Byb2Nlc3MgPSBwcm9jZXNzKSA9PT0gbnVsbCB8fCBfcHJvY2VzcyA9PT0gdm9pZCAwIHx8IChfcHJvY2VzcyA9IF9wcm9jZXNzLmVudikgPT09IG51bGwgfHwgX3Byb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm9jZXNzLkFOVERfVkVSU0lPTikgfHwgdmVyc2lvbjtcbn07XG5cbi8qKlxuICog5Li76KaB5Yy65Yir77yaXG4gKiDpnIDopoHmiYvliqjlvJXlhaUgaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuICog6ZyA6KaB6YeN572uIG1lbnUg55qE5qC35byPXG4gKiBAcGFyYW0gdG9rZW5cbiAqIEByZXR1cm5zXG4gKi9cbnZhciBjb21wYXRpYmxlU3R5bGUgPSBmdW5jdGlvbiBjb21wYXRpYmxlU3R5bGUodG9rZW4pIHtcbiAgdmFyIF9nZXRWZXJzaW9uLCBfdG9rZW4kbGF5b3V0LCBfdG9rZW4kbGF5b3V0MiwgX3Rva2VuJGxheW91dDMsIF90b2tlbiRsYXlvdXQ0LCBfdG9rZW4kbGF5b3V0NSwgX3Rva2VuJGxheW91dDYsIF90b2tlbiRsYXlvdXQ3LCBfdG9rZW4kbGF5b3V0OCwgX3Rva2VuJGxheW91dDksIF90b2tlbiRsYXlvdXQxMCwgX3Rva2VuJGxheW91dDExLCBfdG9rZW4kbGF5b3V0MTIsIF90b2tlbiRsYXlvdXQxMywgX3Rva2VuJGxheW91dDE0LCBfdG9rZW4kbGF5b3V0MTUsIF90b2tlbiRsYXlvdXQxNiwgX3Rva2VuJGxheW91dDE3LCBfdG9rZW4kbGF5b3V0MTgsIF90b2tlbiRsYXlvdXQxOSwgXyRjb25jYXQ2LCBfdG9rZW4kbGF5b3V0MjAsIF90b2tlbiRsYXlvdXQyMSwgX3Rva2VuJGxheW91dDIyLCBfdG9rZW4kbGF5b3V0MjMsIF90b2tlbiRsYXlvdXQyNCwgX3Rva2VuJGxheW91dDI1LCBfdG9rZW4kbGF5b3V0MjYsIF90b2tlbiRsYXlvdXQyNywgX3Rva2VuJGxheW91dDI4LCBfdG9rZW4kbGF5b3V0MjksIF90b2tlbiRsYXlvdXQzMDtcbiAgaWYgKChfZ2V0VmVyc2lvbiA9IGdldFZlcnNpb24oKSkgIT09IG51bGwgJiYgX2dldFZlcnNpb24gIT09IHZvaWQgMCAmJiBfZ2V0VmVyc2lvbi5zdGFydHNXaXRoKCc1JykpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCB0b2tlbi5jb21wb25lbnRDbHMsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfSwgXCJcIi5jb25jYXQodG9rZW4ucHJvQ29tcG9uZW50c0NscywgXCItYmFzZS1tZW51XCIpLCAoXyRjb25jYXQ2ID0ge1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0ID0gX3Rva2VuJGxheW91dC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dC5jb2xvclRleHRNZW51XG4gIH0sIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfJGNvbmNhdDYsIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJcIiksIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCFpbXBvcnRhbnQnLFxuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDIgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyID0gX3Rva2VuJGxheW91dDIuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Mi5jb2xvclRleHRNZW51XG4gIH0pLCBcIiYgXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbGF5b3V0XCIpLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LWV4cGFuZC1pY29uLCBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LWFycm93XCIpLCB7XG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9KSwgXCImXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudVwiKSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDMgPSBfdG9rZW4kbGF5b3V0My5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQzLmNvbG9yVGV4dE1lbnVcbiAgfSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW1cIiksIHtcbiAgICAnKic6IHtcbiAgICAgIHRyYW5zaXRpb246ICdub25lICFpbXBvcnRhbnQnXG4gICAgfVxuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0gYVwiKSwge1xuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfSkpLCBcIiZcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWlubGluZVwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc2VsZWN0ZWQ6OmFmdGVyLFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tc2VsZWN0ZWQ6OmFmdGVyXCIpLCB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH0pKSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1YiBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pbmxpbmVcIiksIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCFpbXBvcnRhbnQnXG4gIH0pLCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbTphY3RpdmUsIFxcbiAgICAgICAgXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS10aXRsZTphY3RpdmVcIiksIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCFpbXBvcnRhbnQnXG4gIH0pLCBcIiZcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWxpZ2h0XCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtOmhvdmVyLCBcXG4gICAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLWFjdGl2ZSxcXG4gICAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LWFjdGl2ZSwgXFxuICAgICAgICAgICAgXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS10aXRsZTpob3ZlclwiKSwgX2RlZmluZVByb3BlcnR5KHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQ0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0NCA9IF90b2tlbiRsYXlvdXQ0LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDQuY29sb3JUZXh0TWVudUFjdGl2ZSxcbiAgICBib3JkZXJSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1c1xuICB9LCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS1hcnJvd1wiKSwge1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDUgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ1ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ1ID0gX3Rva2VuJGxheW91dDUuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0NS5jb2xvclRleHRNZW51QWN0aXZlXG4gIH0pKSksIFwiJlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnU6bm90KFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWhvcml6b250YWwpXCIpLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1zZWxlY3RlZFwiKSwge1xuICAgIGJhY2tncm91bmRDb2xvcjogKF90b2tlbiRsYXlvdXQ2ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NiA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0NiA9IF90b2tlbiRsYXlvdXQ2LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDYuY29sb3JCZ01lbnVJdGVtU2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtOmhvdmVyLCBcXG4gICAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLWFjdGl2ZSxcXG4gICAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LXRpdGxlOmhvdmVyXCIpLCBfZGVmaW5lUHJvcGVydHkoe1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDcgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ3ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ3ID0gX3Rva2VuJGxheW91dDcuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Ny5jb2xvclRleHRNZW51QWN0aXZlLFxuICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJcIi5jb25jYXQoKF90b2tlbiRsYXlvdXQ4ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0OCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0OCA9IF90b2tlbiRsYXlvdXQ4LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ4LmNvbG9yQmdNZW51SXRlbUhvdmVyLCBcIiAhaW1wb3J0YW50XCIpXG4gIH0sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LWFycm93XCIpLCB7XG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0OSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDkgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDkgPSBfdG9rZW4kbGF5b3V0OS5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ5LmNvbG9yVGV4dE1lbnVBY3RpdmVcbiAgfSkpKSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tc2VsZWN0ZWRcIiksIHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQxMCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEwID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxMCA9IF90b2tlbiRsYXlvdXQxMC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTAuY29sb3JUZXh0TWVudVNlbGVjdGVkXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF8kY29uY2F0NiwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtc2VsZWN0ZWRcIiksIHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQxMSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDExID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxMSA9IF90b2tlbiRsYXlvdXQxMS5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDExID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTEuY29sb3JUZXh0TWVudVNlbGVjdGVkXG4gIH0pLCBcIiZcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51Om5vdChcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pbmxpbmUpIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtb3BlblwiKSwge1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDEyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDEyID0gX3Rva2VuJGxheW91dDEyLnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxMi5jb2xvclRleHRNZW51U2VsZWN0ZWRcbiAgfSksIFwiJlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtdmVydGljYWxcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtc2VsZWN0ZWRcIiksIHtcbiAgICBib3JkZXJSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1cyxcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQxMyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEzID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxMyA9IF90b2tlbiRsYXlvdXQxMy5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDEzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTMuY29sb3JUZXh0TWVudVNlbGVjdGVkXG4gIH0pKSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnU6aG92ZXIgPiBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LXRpdGxlID4gXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3VibWVudS1hcnJvd1wiKSwge1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDE0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDE0ID0gX3Rva2VuJGxheW91dDE0LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxNC5jb2xvclRleHRNZW51QWN0aXZlXG4gIH0pLCBcIiZcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWhvcml6b250YWxcIiksIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW06aG92ZXIsXFxuICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnU6aG92ZXIsXFxuICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tYWN0aXZlLFxcbiAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LWFjdGl2ZVwiKSwge1xuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICB0cmFuc2l0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MTUgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxNSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MTUgPSBfdG9rZW4kbGF5b3V0MTUuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxNS5jb2xvclRleHRNZW51QWN0aXZlLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJcIi5jb25jYXQoKF90b2tlbiRsYXlvdXQxNiA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE2ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQxNiA9IF90b2tlbiRsYXlvdXQxNi5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxNiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDE2LmNvbG9yQmdNZW51SXRlbUhvdmVyLCBcIiAhaW1wb3J0YW50XCIpXG4gIH0pLCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1vcGVuLFxcbiAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LW9wZW4sXFxuICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tc2VsZWN0ZWQsXFxuICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtc2VsZWN0ZWRcIiksIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgYmFja2dyb3VuZENvbG9yOiAoX3Rva2VuJGxheW91dDE3ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTcgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDE3ID0gX3Rva2VuJGxheW91dDE3LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTcuY29sb3JCZ01lbnVJdGVtU2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgdHJhbnNpdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiBcIlwiLmNvbmNhdCgoX3Rva2VuJGxheW91dDE4ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTggPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDE4ID0gX3Rva2VuJGxheW91dDE4LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDE4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MTguY29sb3JUZXh0TWVudVNlbGVjdGVkLCBcIiAhaW1wb3J0YW50XCIpXG4gIH0sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LWFycm93XCIpLCB7XG4gICAgY29sb3I6IFwiXCIuY29uY2F0KChfdG9rZW4kbGF5b3V0MTkgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxOSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MTkgPSBfdG9rZW4kbGF5b3V0MTkuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxOS5jb2xvclRleHRNZW51U2VsZWN0ZWQsIFwiICFpbXBvcnRhbnRcIilcbiAgfSkpLCBcIj4gXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLCA+IFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnVcIiksIHtcbiAgICBwYWRkaW5nSW5saW5lOiAxNixcbiAgICBtYXJnaW5JbmxpbmU6IDRcbiAgfSksIFwiPiBcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW06OmFmdGVyLCA+IFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnU6OmFmdGVyXCIpLCB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH0pKSkpLCBcIlwiLmNvbmNhdCh0b2tlbi5wcm9Db21wb25lbnRzQ2xzLCBcIi10b3AtbmF2LWhlYWRlci1iYXNlLW1lbnVcIiksIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiJlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnVcIiksIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MjAgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyMCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MjAgPSBfdG9rZW4kbGF5b3V0MjAuaGVhZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MjAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyMC5jb2xvclRleHRNZW51XG4gIH0sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtIGFcIiksIHtcbiAgICBjb2xvcjogJ2luaGVyaXQnXG4gIH0pKSwgXCImXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1saWdodFwiKSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW06aG92ZXIsIFxcbiAgICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW0tYWN0aXZlLFxcbiAgICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtYWN0aXZlLCBcXG4gICAgICAgICAgICBcIikuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1zdWJtZW51LXRpdGxlOmhvdmVyXCIpLCBfZGVmaW5lUHJvcGVydHkoe1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDIxID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MjEgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDIxID0gX3Rva2VuJGxheW91dDIxLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIxID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MjEuY29sb3JUZXh0TWVudUFjdGl2ZSxcbiAgICBib3JkZXJSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1cyxcbiAgICB0cmFuc2l0aW9uOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAoX3Rva2VuJGxheW91dDIyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MjIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDIyID0gX3Rva2VuJGxheW91dDIyLmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MjIuY29sb3JCZ01lbnVJdGVtU2VsZWN0ZWRcbiAgfSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtYXJyb3dcIiksIHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQyMyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDIzID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyMyA9IF90b2tlbiRsYXlvdXQyMy5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDIzLmNvbG9yVGV4dE1lbnVBY3RpdmVcbiAgfSkpLCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1zZWxlY3RlZFwiKSwge1xuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDI0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MjQgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDI0ID0gX3Rva2VuJGxheW91dDI0LmhlYWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDI0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MjQuY29sb3JUZXh0TWVudVNlbGVjdGVkLFxuICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgIGJhY2tncm91bmRDb2xvcjogKF90b2tlbiRsYXlvdXQyNSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDI1ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyNSA9IF90b2tlbiRsYXlvdXQyNS5oZWFkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyNSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDI1LmNvbG9yQmdNZW51SXRlbVNlbGVjdGVkXG4gIH0pKSkpLCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtc3ViXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaW5saW5lXCIpLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQhaW1wb3J0YW50J1xuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtcG9wdXBcIiksIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKScsXG4gICAgJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyJzogJ2JsdXIoOHB4KScsXG4gICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDhweCknXG4gIH0sIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudVwiKSwgX2RlZmluZVByb3BlcnR5KHtcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQgIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQgIWltcG9ydGFudCdcbiAgfSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWl0ZW06YWN0aXZlLCBcXG4gICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtdGl0bGU6YWN0aXZlXCIpLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQhaW1wb3J0YW50J1xuICB9KSksIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtLXNlbGVjdGVkXCIpLCB7XG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MjYgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyNiA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MjYgPSBfdG9rZW4kbGF5b3V0MjYuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyNiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDI2LmNvbG9yVGV4dE1lbnVTZWxlY3RlZFxuICB9KSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtc2VsZWN0ZWRcIiksIHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQyNyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDI3ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyNyA9IF90b2tlbiRsYXlvdXQyNy5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDI3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MjcuY29sb3JUZXh0TWVudVNlbGVjdGVkXG4gIH0pLCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnU6bm90KFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LWhvcml6b250YWwpXCIpLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1zZWxlY3RlZFwiKSwge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgIGNvbG9yOiAoX3Rva2VuJGxheW91dDI4ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MjggPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDI4ID0gX3Rva2VuJGxheW91dDI4LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MjggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQyOC5jb2xvclRleHRNZW51U2VsZWN0ZWRcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmFudENscywgXCItbWVudS1pdGVtOmhvdmVyLCBcXG4gICAgICAgICAgXCIpLmNvbmNhdCh0b2tlbi5hbnRDbHMsIFwiLW1lbnUtaXRlbS1hY3RpdmUsXFxuICAgICAgICAgIFwiKS5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtdGl0bGU6aG92ZXJcIiksIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgY29sb3I6IChfdG9rZW4kbGF5b3V0MjkgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyOSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MjkgPSBfdG9rZW4kbGF5b3V0Mjkuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyOSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDI5LmNvbG9yVGV4dE1lbnVBY3RpdmUsXG4gICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNcbiAgfSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1tZW51LXN1Ym1lbnUtYXJyb3dcIiksIHtcbiAgICBjb2xvcjogKF90b2tlbiRsYXlvdXQzMCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMwID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQzMCA9IF90b2tlbiRsYXlvdXQzMC5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MzAuY29sb3JUZXh0TWVudUFjdGl2ZVxuICB9KSkpKTtcbn07XG52YXIgZ2VuUHJvTGF5b3V0U3R5bGUgPSBmdW5jdGlvbiBnZW5Qcm9MYXlvdXRTdHlsZSh0b2tlbikge1xuICB2YXIgX3Rva2VuJGxheW91dDMxLCBfdG9rZW4kbGF5b3V0MzIsIF90b2tlbiRsYXlvdXQzMywgX3Rva2VuJGxheW91dDM0O1xuICByZXR1cm4gX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1sYXlvdXRcIiksIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCAhaW1wb3J0YW50J1xuICB9KSwgdG9rZW4uY29tcG9uZW50Q2xzLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiJiBcIi5jb25jYXQodG9rZW4uYW50Q2xzLCBcIi1sYXlvdXRcIiksIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItY29udGVudFwiKSwge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogKChfdG9rZW4kbGF5b3V0MzEgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzMSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MzEgPSBfdG9rZW4kbGF5b3V0MzEucGFnZUNvbnRhaW5lcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMxID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MzEuY29sb3JCZ1BhZ2VDb250YWluZXIpIHx8ICd0cmFuc3BhcmVudCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ0Jsb2NrOiAoX3Rva2VuJGxheW91dDMyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MzIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDMyID0gX3Rva2VuJGxheW91dDMyLnBhZ2VDb250YWluZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDMyLnBhZGRpbmdCbG9ja1BhZ2VDb250YWluZXJDb250ZW50LFxuICAgIHBhZGRpbmdJbmxpbmU6IChfdG9rZW4kbGF5b3V0MzMgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzMyA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MzMgPSBfdG9rZW4kbGF5b3V0MzMucGFnZUNvbnRhaW5lcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MzMucGFkZGluZ0lubGluZVBhZ2VDb250YWluZXJDb250ZW50LFxuICAgICcmLWhhcy1wYWdlLWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG4gIH0pLCBcIlwiLmNvbmNhdCh0b2tlbi5jb21wb25lbnRDbHMsIFwiLWNvbnRhaW5lclwiKSwge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIG1pbkhlaWdodDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfSksIFwiXCIuY29uY2F0KHRva2VuLmNvbXBvbmVudENscywgXCItYmctbGlzdFwiKSwge1xuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgaW5zZXRCbG9ja1N0YXJ0OiAwLFxuICAgIGluc2V0SW5saW5lU3RhcnQ6IDAsXG4gICAgekluZGV4OiAwLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogKF90b2tlbiRsYXlvdXQzNCA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDM0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0MzQuYmdMYXlvdXRcbiAgfSkpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHlsZShwcmVmaXhDbHMpIHtcbiAgcmV0dXJuIHVzZUFudGRTdHlsZSgnUHJvTGF5b3V0JywgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgdmFyIHByb0xheW91dFRva2VuID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0b2tlbiksIHt9LCB7XG4gICAgICBjb21wb25lbnRDbHM6IFwiLlwiLmNvbmNhdChwcmVmaXhDbHMpXG4gICAgfSk7XG4gICAgcmV0dXJuIFtnZW5Qcm9MYXlvdXRTdHlsZShwcm9MYXlvdXRUb2tlbiksIGNvbXBhdGlibGVTdHlsZShwcm9MYXlvdXRUb2tlbildO1xuICB9KTtcbn0iLCIvLyAvdXNlckluZm8vMjE0NC9pZCA9PiBbJy91c2VySW5mbycsJy91c2VySW5mby8yMTQ0LCcvdXNlckluZm8vMjE0NC9pZCddXG5leHBvcnQgZnVuY3Rpb24gdXJsVG9MaXN0KHVybCkge1xuICBpZiAoIXVybCB8fCB1cmwgPT09ICcvJykge1xuICAgIHJldHVybiBbJy8nXTtcbiAgfVxuICB2YXIgdXJsTGlzdCA9IHVybC5zcGxpdCgnLycpLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KTtcbiAgcmV0dXJuIHVybExpc3QubWFwKGZ1bmN0aW9uICh1cmxJdGVtLCBpbmRleCkge1xuICAgIHJldHVybiBcIi9cIi5jb25jYXQodXJsTGlzdC5zbGljZSgwLCBpbmRleCArIDEpLmpvaW4oJy8nKSk7XG4gIH0pO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgeyBjb21wYXJlVmVyc2lvbnMgfSBmcm9tICdAYW50LWRlc2lnbi9wcm8tdXRpbHMnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQgeyB1cmxUb0xpc3QgfSBmcm9tIFwiLi9wYXRoVG9vbHNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgdmFyIGdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICB2YXIgX3Byb2Nlc3M7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB2ZXJzaW9uO1xuICByZXR1cm4gKChfcHJvY2VzcyA9IHByb2Nlc3MpID09PSBudWxsIHx8IF9wcm9jZXNzID09PSB2b2lkIDAgfHwgKF9wcm9jZXNzID0gX3Byb2Nlc3MuZW52KSA9PT0gbnVsbCB8fCBfcHJvY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb2Nlc3MuQU5URF9WRVJTSU9OKSB8fCB2ZXJzaW9uO1xufTtcbi8vIOa4suafkyBCcmVhZGNydW1iIOWtkOiKgueCuVxuLy8gUmVuZGVyIHRoZSBCcmVhZGNydW1iIGNoaWxkIG5vZGVcbnZhciBkZWZhdWx0SXRlbVJlbmRlciA9IGZ1bmN0aW9uIGRlZmF1bHRJdGVtUmVuZGVyKHJvdXRlLCBfLCByb3V0ZXMpIHtcbiAgdmFyIF9yZWYgPSByb3V0ZSxcbiAgICBicmVhZGNydW1iTmFtZSA9IF9yZWYuYnJlYWRjcnVtYk5hbWUsXG4gICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgIHBhdGggPSBfcmVmLnBhdGg7XG4gIHZhciBsYXN0ID0gcm91dGVzLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiAoXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpLmxpbmtQYXRoID09PSByb3V0ZS5wYXRoXG4gICAgKTtcbiAgfSkgPT09IHJvdXRlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gbGFzdCA/IC8qI19fUFVSRV9fKi9fanN4KFwic3BhblwiLCB7XG4gICAgY2hpbGRyZW46IHRpdGxlIHx8IGJyZWFkY3J1bWJOYW1lXG4gIH0pIDogLyojX19QVVJFX18qL19qc3goXCJzcGFuXCIsIHtcbiAgICBvbkNsaWNrOiBwYXRoID8gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgIH0gOiB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW46IHRpdGxlIHx8IGJyZWFkY3J1bWJOYW1lXG4gIH0pO1xufTtcbnZhciByZW5kZXJJdGVtTG9jYWwgPSBmdW5jdGlvbiByZW5kZXJJdGVtTG9jYWwoaXRlbSwgcHJvcHMpIHtcbiAgdmFyIGZvcm1hdE1lc3NhZ2UgPSBwcm9wcy5mb3JtYXRNZXNzYWdlLFxuICAgIG1lbnUgPSBwcm9wcy5tZW51O1xuICBpZiAoaXRlbS5sb2NhbGUgJiYgZm9ybWF0TWVzc2FnZSAmJiAobWVudSA9PT0gbnVsbCB8fCBtZW51ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51LmxvY2FsZSkgIT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgaWQ6IGl0ZW0ubG9jYWxlLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6IGl0ZW0ubmFtZVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBpdGVtLm5hbWU7XG59O1xuZXhwb3J0IHZhciBnZXRCcmVhZGNydW1iID0gZnVuY3Rpb24gZ2V0QnJlYWRjcnVtYihicmVhZGNydW1iTWFwLCB1cmwpIHtcbiAgdmFyIGJyZWFkY3J1bWJJdGVtID0gYnJlYWRjcnVtYk1hcC5nZXQodXJsKTtcbiAgaWYgKCFicmVhZGNydW1iSXRlbSkge1xuICAgIC8vIEZpbmQgdGhlIGZpcnN0IG1hdGNoaW5nIHBhdGggaW4gdGhlIG9yZGVyIGRlZmluZWQgYnkgcm91dGUgY29uZmlnXG4gICAgLy8g5oyJ54WnIHJvdXRlIGNvbmZpZyDlrprkuYnnmoTpobrluo/mib7liLDnrKzkuIDkuKrljLnphY3nmoTot6/lvoRcbiAgICB2YXIga2V5cyA9IEFycmF5LmZyb20oYnJlYWRjcnVtYk1hcC5rZXlzKCkpIHx8IFtdO1xuICAgIHZhciB0YXJnZXRQYXRoID0ga2V5cy5maW5kKGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgJiYgcGF0aC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG1hdGNoKHBhdGgucmVwbGFjZSgnPycsICcnKSkodXJsKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXRoJywgcGF0aCwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSA/ICzkuI3nhLbkvJrph43lpI1cbiAgICApO1xuICAgIGlmICh0YXJnZXRQYXRoKSBicmVhZGNydW1iSXRlbSA9IGJyZWFkY3J1bWJNYXAuZ2V0KHRhcmdldFBhdGgpO1xuICB9XG4gIHJldHVybiBicmVhZGNydW1iSXRlbSB8fCB7XG4gICAgcGF0aDogJydcbiAgfTtcbn07XG5leHBvcnQgdmFyIGdldEJyZWFkY3J1bWJGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXRCcmVhZGNydW1iRnJvbVByb3BzKHByb3BzKSB7XG4gIHZhciBsb2NhdGlvbiA9IHByb3BzLmxvY2F0aW9uLFxuICAgIGJyZWFkY3J1bWJNYXAgPSBwcm9wcy5icmVhZGNydW1iTWFwO1xuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBicmVhZGNydW1iTWFwOiBicmVhZGNydW1iTWFwXG4gIH07XG59O1xudmFyIGNvbnZlcnNpb25Gcm9tTG9jYXRpb24gPSBmdW5jdGlvbiBjb252ZXJzaW9uRnJvbUxvY2F0aW9uKHJvdXRlckxvY2F0aW9uLCBicmVhZGNydW1iTWFwLCBwcm9wcykge1xuICAvLyBDb252ZXJ0b3IgdGhlIHVybCB0byBhbiBhcnJheVxuICB2YXIgcGF0aFNuaXBwZXRzID0gdXJsVG9MaXN0KHJvdXRlckxvY2F0aW9uID09PSBudWxsIHx8IHJvdXRlckxvY2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3V0ZXJMb2NhdGlvbi5wYXRobmFtZSk7XG4gIC8vIExvb3AgZGF0YSBtb3NhaWMgcm91dGluZ1xuICB2YXIgZXh0cmFCcmVhZGNydW1iSXRlbXMgPSBwYXRoU25pcHBldHMubWFwKGZ1bmN0aW9uICh1cmwpIHtcbiAgICB2YXIgY3VycmVudEJyZWFkY3J1bWIgPSBnZXRCcmVhZGNydW1iKGJyZWFkY3J1bWJNYXAsIHVybCk7XG4gICAgdmFyIG5hbWUgPSByZW5kZXJJdGVtTG9jYWwoY3VycmVudEJyZWFkY3J1bWIsIHByb3BzKTtcbiAgICB2YXIgaGlkZUluQnJlYWRjcnVtYiA9IGN1cnJlbnRCcmVhZGNydW1iLmhpZGVJbkJyZWFkY3J1bWI7XG4gICAgcmV0dXJuIG5hbWUgJiYgIWhpZGVJbkJyZWFkY3J1bWIgPyB7XG4gICAgICBsaW5rUGF0aDogdXJsLFxuICAgICAgYnJlYWRjcnVtYk5hbWU6IG5hbWUsXG4gICAgICB0aXRsZTogbmFtZSxcbiAgICAgIGNvbXBvbmVudDogY3VycmVudEJyZWFkY3J1bWIuY29tcG9uZW50XG4gICAgfSA6IHtcbiAgICAgIGxpbmtQYXRoOiAnJyxcbiAgICAgIGJyZWFkY3J1bWJOYW1lOiAnJyxcbiAgICAgIHRpdGxlOiAnJ1xuICAgIH07XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIGl0ZW0ubGlua1BhdGg7XG4gIH0pO1xuICByZXR1cm4gZXh0cmFCcmVhZGNydW1iSXRlbXM7XG59O1xuLyoqIOWwhuWPguaVsOi9rOWMluS4uumdouWMheWxkSBDb252ZXJ0IHBhcmFtZXRlcnMgaW50byBicmVhZGNydW1icyAqL1xuZXhwb3J0IHZhciBnZW5CcmVhZGNydW1iUHJvcHMgPSBmdW5jdGlvbiBnZW5CcmVhZGNydW1iUHJvcHMocHJvcHMpIHtcbiAgdmFyIF9nZXRCcmVhZGNydW1iRnJvbVBybyA9IGdldEJyZWFkY3J1bWJGcm9tUHJvcHMocHJvcHMpLFxuICAgIGxvY2F0aW9uID0gX2dldEJyZWFkY3J1bWJGcm9tUHJvLmxvY2F0aW9uLFxuICAgIGJyZWFkY3J1bWJNYXAgPSBfZ2V0QnJlYWRjcnVtYkZyb21Qcm8uYnJlYWRjcnVtYk1hcDtcblxuICAvLyDmoLnmja4gbG9jYXRpb24g55Sf5oiQIOmdouWMheWxkVxuICAvLyBHZW5lcmF0ZSBicmVhZGNydW1icyBiYXNlZCBvbiBsb2NhdGlvblxuICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb24ucGF0aG5hbWUgJiYgYnJlYWRjcnVtYk1hcCkge1xuICAgIHJldHVybiBjb252ZXJzaW9uRnJvbUxvY2F0aW9uKGxvY2F0aW9uLCBicmVhZGNydW1iTWFwLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcblxuLy8g5aOw5piO5LiA5Liq5a+85Ye65Ye95pWw77yM5o6l5pS25Lik5Liq5Y+C5pWw77yaQnJlYWRjcnVtYlByb3Bz5ZKMUHJvTGF5b3V0UHJvcHPvvIzov5Tlm57kuIDkuKpCcmVhZGNydW1iTGlzdFJldHVybuexu+Wei+eahOWvueixoVxuZXhwb3J0IHZhciBnZXRCcmVhZGNydW1iUHJvcHMgPSBmdW5jdGlvbiBnZXRCcmVhZGNydW1iUHJvcHMocHJvcHMsIGxheW91dFByb3MgLy8gUHJvTGF5b3V0UHJvcHPnsbvlnovnmoRsYXlvdXRQcm9zXG4pIHtcbiAgLy8g6Kej5p6E6LWL5YC86I635Y+WcHJvcHPkuK3nmoRicmVhZGNydW1iUmVuZGVy5ZKMcHJvcHPkuK3nmoRpdGVtUmVuZGVy77yM5aaC5p6ccHJvcHPkuK3msqHmnIlpdGVtUmVuZGVy5YiZ5L2/55So6buY6K6k55qEZGVmYXVsdEl0ZW1SZW5kZXLlh73mlbBcbiAgdmFyIGJyZWFkY3J1bWJSZW5kZXIgPSBwcm9wcy5icmVhZGNydW1iUmVuZGVyLFxuICAgIHByb3BzSXRlbVJlbmRlciA9IHByb3BzLml0ZW1SZW5kZXI7XG4gIC8vIOino+aehOi1i+WAvOiOt+WPlmxheW91dFByb3MuYnJlYWRjcnVtYlByb3BzLm1pbkxlbmdodOeahOWAvO+8jOWmguaenOayoeacieiuvue9ru+8jOWImem7mOiupOS4ujJcbiAgdmFyIF9yZWYyID0gbGF5b3V0UHJvcy5icmVhZGNydW1iUHJvcHMgfHwge30sXG4gICAgX3JlZjIkbWluTGVuZ3RoID0gX3JlZjIubWluTGVuZ3RoLFxuICAgIG1pbkxlbmd0aCA9IF9yZWYyJG1pbkxlbmd0aCA9PT0gdm9pZCAwID8gMiA6IF9yZWYyJG1pbkxlbmd0aDtcbiAgLy8g55Sf5oiQ6Z2i5YyF5bGR55qE6Lev55Sx5pWw57uE77yM6K+l5pWw57uE5Lit5YyF5ZCr6I+c5Y2V6aG55ZKM6Z2i5YyF5bGR6aG5XG4gIHZhciByb3V0ZXNBcnJheSA9IGdlbkJyZWFkY3J1bWJQcm9wcyhwcm9wcyk7XG4gIC8vIOWmguaenHByb3Bz5Lit5pyJaXRlbVJlbmRlcu+8jOWImeS9v+eUqHByb3Bz5Lit55qEaXRlbVJlbmRlcu+8jOWQpuWImeS9v+eUqOm7mOiupOWHveaVsGRlZmF1bHRJdGVtUmVuZGVyXG4gIHZhciBpdGVtUmVuZGVyID0gZnVuY3Rpb24gaXRlbVJlbmRlcihpdGVtKSB7XG4gICAgdmFyIHJlbmRlckZ1bmN0aW9uID0gcHJvcHNJdGVtUmVuZGVyIHx8IGRlZmF1bHRJdGVtUmVuZGVyO1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyRnVuY3Rpb24gPT09IG51bGwgfHwgcmVuZGVyRnVuY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbmRlckZ1bmN0aW9uLmFwcGx5KHZvaWQgMCwgW19vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbSksIHt9LCB7XG4gICAgICAvLyDlpoLmnpxpdGVtLmxpbmtQYXRo5a2Y5Zyo77yM5YiZ5L2/55SoaXRlbS5saW5rUGF0aO+8jOWQpuWImeS9v+eUqGl0ZW0ucGF0aFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcGF0aDogaXRlbS5saW5rUGF0aCB8fCBpdGVtLnBhdGhcbiAgICB9KV0uY29uY2F0KHJlc3QpKTtcbiAgfTtcbiAgdmFyIGl0ZW1zID0gcm91dGVzQXJyYXk7XG4gIC8vIOWmguaenOmdouWMheWxkea4suafk+WHveaVsGJyZWFkY3J1bWJSZW5kZXLlrZjlnKjvvIzliJnkvb/nlKjlhbbmuLLmn5PmlbDnu4RpdGVtc1xuICBpZiAoYnJlYWRjcnVtYlJlbmRlcikge1xuICAgIGl0ZW1zID0gYnJlYWRjcnVtYlJlbmRlcihpdGVtcyB8fCBbXSkgfHwgdW5kZWZpbmVkO1xuICB9XG4gIC8vIOWmguaenGl0ZW1z77yI5riy5p+T5ZCO55qE5pWw57uE77yJ55qE6ZW/5bqm5bCP5LqObWluTGVuZ3Ro5oiW6ICFYnJlYWRjcnVtYlJlbmRlcuS4umZhbHNl77yM5YiZaXRlbXPkuLp1bmRlZmluZWRcbiAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA8IG1pbkxlbmd0aCB8fCBicmVhZGNydW1iUmVuZGVyID09PSBmYWxzZSkge1xuICAgIGl0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIOWmguaenOW9k+WJjSBhbnQgZGVzaWduIOWMheeahOeJiOacrOWkp+S6juetieS6jjUuMy4w77yM5YiZ6L+U5Zue5LiA5Liq5a+56LGhe2l0ZW1zLGl0ZW1SZW5kZXJ9LOWQpuWImei/lOWbnuS4gOS4quWvueixoXtyb3V0ZXM6aXRlbSxpdGVtUmVuZGVyfVxuICByZXR1cm4gY29tcGFyZVZlcnNpb25zKGdldFZlcnNpb24oKSwgJzUuMy4wJykgPiAtMSA/IHtcbiAgICBpdGVtczogaXRlbXMsXG4gICAgaXRlbVJlbmRlcjogaXRlbVJlbmRlclxuICB9IDoge1xuICAgIHJvdXRlczogaXRlbXMsXG4gICAgaXRlbVJlbmRlcjogaXRlbVJlbmRlclxuICB9O1xufTsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Sb3V0ZSB9IGZyb20gJ0B1bWlqcy9yb3V0ZS11dGlscyc7XG5mdW5jdGlvbiBmcm9tRW50cmllcyhpdGVyYWJsZSkge1xuICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KGl0ZXJhYmxlKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAga2V5ID0gX3JlZjJbMF0sXG4gICAgICB2YWwgPSBfcmVmMlsxXTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59XG52YXIgZ2V0TWVudURhdGEgPSBmdW5jdGlvbiBnZXRNZW51RGF0YShyb3V0ZXMsIG1lbnUsIGZvcm1hdE1lc3NhZ2UsIG1lbnVEYXRhUmVuZGVyKSB7XG4gIHZhciBfdHJhbnNmb3JtUm91dGUgPSB0cmFuc2Zvcm1Sb3V0ZShyb3V0ZXMsIChtZW51ID09PSBudWxsIHx8IG1lbnUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lbnUubG9jYWxlKSB8fCBmYWxzZSwgZm9ybWF0TWVzc2FnZSwgdHJ1ZSksXG4gICAgbWVudURhdGEgPSBfdHJhbnNmb3JtUm91dGUubWVudURhdGEsXG4gICAgYnJlYWRjcnVtYiA9IF90cmFuc2Zvcm1Sb3V0ZS5icmVhZGNydW1iO1xuICBpZiAoIW1lbnVEYXRhUmVuZGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyZWFkY3J1bWI6IGZyb21FbnRyaWVzKGJyZWFkY3J1bWIpLFxuICAgICAgYnJlYWRjcnVtYk1hcDogYnJlYWRjcnVtYixcbiAgICAgIG1lbnVEYXRhOiBtZW51RGF0YVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGdldE1lbnVEYXRhKG1lbnVEYXRhUmVuZGVyKG1lbnVEYXRhKSwgbWVudSwgZm9ybWF0TWVzc2FnZSwgdW5kZWZpbmVkKTtcbn07XG5leHBvcnQgeyBnZXRNZW51RGF0YSB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgb21pdFVuZGVmaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby11dGlscyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUN1cnJlbnRNZW51TGF5b3V0UHJvcHMgPSBmdW5jdGlvbiB1c2VDdXJyZW50TWVudUxheW91dFByb3BzKGN1cnJlbnRNZW51KSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7fSksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgY3VycmVudE1lbnVMYXlvdXRQcm9wcyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgc2V0Q3VycmVudE1lbnVMYXlvdXRQcm9wcyA9IF91c2VTdGF0ZTJbMV07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0Q3VycmVudE1lbnVMYXlvdXRQcm9wcyhvbWl0VW5kZWZpbmVkKHtcbiAgICAgIC8vIOacieaXtuWAmeS8muWPmOaIkOWvueixoe+8jOaYr+WOn+adpeeahOaWueW8j1xuICAgICAgbGF5b3V0OiBfdHlwZW9mKGN1cnJlbnRNZW51LmxheW91dCkgIT09ICdvYmplY3QnID8gY3VycmVudE1lbnUubGF5b3V0IDogdW5kZWZpbmVkLFxuICAgICAgbmF2VGhlbWU6IGN1cnJlbnRNZW51Lm5hdlRoZW1lLFxuICAgICAgbWVudVJlbmRlcjogY3VycmVudE1lbnUubWVudVJlbmRlcixcbiAgICAgIGZvb3RlclJlbmRlcjogY3VycmVudE1lbnUuZm9vdGVyUmVuZGVyLFxuICAgICAgbWVudUhlYWRlclJlbmRlcjogY3VycmVudE1lbnUubWVudUhlYWRlclJlbmRlcixcbiAgICAgIGhlYWRlclJlbmRlcjogY3VycmVudE1lbnUuaGVhZGVyUmVuZGVyLFxuICAgICAgZml4U2lkZXJiYXI6IGN1cnJlbnRNZW51LmZpeFNpZGVyYmFyXG4gICAgfSkpO1xuICB9LCBbY3VycmVudE1lbnUubGF5b3V0LCBjdXJyZW50TWVudS5uYXZUaGVtZSwgY3VycmVudE1lbnUubWVudVJlbmRlciwgY3VycmVudE1lbnUuZm9vdGVyUmVuZGVyLCBjdXJyZW50TWVudS5tZW51SGVhZGVyUmVuZGVyLCBjdXJyZW50TWVudS5oZWFkZXJSZW5kZXIsIGN1cnJlbnRNZW51LmZpeFNpZGVyYmFyXSk7XG4gIHJldHVybiBjdXJyZW50TWVudUxheW91dFByb3BzO1xufTtcbmV4cG9ydCB7IHVzZUN1cnJlbnRNZW51TGF5b3V0UHJvcHMgfTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlZ2VuZXJhdG9yUnVudGltZVwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xudmFyIF9leGNsdWRlZCA9IFtcImlkXCIsIFwiZGVmYXVsdE1lc3NhZ2VcIl0sXG4gIF9leGNsdWRlZDIgPSBbXCJmaXhTaWRlcmJhclwiLCBcIm5hdlRoZW1lXCIsIFwibGF5b3V0XCJdO1xuaW1wb3J0IHsgUHJvQ29uZmlnUHJvdmlkZXIsIFByb1Byb3ZpZGVyLCBpc05lZWRPcGVuSGFzaCB9IGZyb20gJ0BhbnQtZGVzaWduL3Byby1wcm92aWRlcic7XG5pbXBvcnQgeyBjb3ZlclRvTmV3VG9rZW4sIGlzQnJvd3NlciwgdXNlQnJlYWtwb2ludCwgdXNlRG9jdW1lbnRUaXRsZSwgdXNlTW91bnRNZXJnZVN0YXRlIH0gZnJvbSAnQGFudC1kZXNpZ24vcHJvLXV0aWxzJztcbmltcG9ydCB7IGdldE1hdGNoTWVudSB9IGZyb20gJ0B1bWlqcy9yb3V0ZS11dGlscyc7XG5pbXBvcnQgeyBDb25maWdQcm92aWRlciwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBPbWl0IGZyb20gJ29taXQuanMnO1xuaW1wb3J0IHVzZU1lcmdlZFN0YXRlIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSLCB7IHVzZVNXUkNvbmZpZyB9IGZyb20gJ3N3cic7XG5pbXBvcnQgeyBXcmFwQ29udGVudCB9IGZyb20gXCIuL1dyYXBDb250ZW50XCI7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIi4vYXNzZXJ0L0xvZ29cIjtcbmltcG9ydCB7IERlZmF1bHRGb290ZXIgYXMgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IERlZmF1bHRIZWFkZXIgYXMgSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IFBhZ2VMb2FkaW5nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9QYWdlTG9hZGluZ1wiO1xuaW1wb3J0IHsgU2lkZXJNZW51IH0gZnJvbSBcIi4vY29tcG9uZW50cy9TaWRlck1lbnVcIjtcbmltcG9ydCB7IFJvdXRlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvUm91dGVDb250ZXh0XCI7XG5pbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi9kZWZhdWx0U2V0dGluZ3NcIjtcbmltcG9ydCB7IGdldFBhZ2VUaXRsZUluZm8gfSBmcm9tIFwiLi9nZXRQYWdlVGl0bGVcIjtcbmltcG9ydCB7IGdMb2NhbGVPYmplY3QgfSBmcm9tIFwiLi9sb2NhbGVzXCI7XG5pbXBvcnQgeyB1c2VTdHlsZSB9IGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgeyBnZXRCcmVhZGNydW1iUHJvcHMgfSBmcm9tIFwiLi91dGlscy9nZXRCcmVhZGNydW1iUHJvcHNcIjtcbmltcG9ydCB7IGdldE1lbnVEYXRhIH0gZnJvbSBcIi4vdXRpbHMvZ2V0TWVudURhdGFcIjtcbmltcG9ydCB7IHVzZUN1cnJlbnRNZW51TGF5b3V0UHJvcHMgfSBmcm9tIFwiLi91dGlscy91c2VDdXJyZW50TWVudUxheW91dFByb3BzXCI7XG5pbXBvcnQgeyBjbGVhck1lbnVJdGVtIH0gZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBsYXlvdXRJbmRleCA9IDA7XG52YXIgaGVhZGVyUmVuZGVyID0gZnVuY3Rpb24gaGVhZGVyUmVuZGVyKHByb3BzLCBtYXRjaE1lbnVLZXlzKSB7XG4gIHZhciBfcHJvcHMkc3R5bGlzaDtcbiAgaWYgKHByb3BzLmhlYWRlclJlbmRlciA9PT0gZmFsc2UgfHwgcHJvcHMucHVyZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChIZWFkZXIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgbWF0Y2hNZW51S2V5czogbWF0Y2hNZW51S2V5c1xuICB9LCBwcm9wcyksIHt9LCB7XG4gICAgc3R5bGlzaDogKF9wcm9wcyRzdHlsaXNoID0gcHJvcHMuc3R5bGlzaCkgPT09IG51bGwgfHwgX3Byb3BzJHN0eWxpc2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm9wcyRzdHlsaXNoLmhlYWRlclxuICB9KSk7XG59O1xudmFyIGZvb3RlclJlbmRlciA9IGZ1bmN0aW9uIGZvb3RlclJlbmRlcihwcm9wcykge1xuICBpZiAocHJvcHMuZm9vdGVyUmVuZGVyID09PSBmYWxzZSB8fCBwcm9wcy5wdXJlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHByb3BzLmZvb3RlclJlbmRlcikge1xuICAgIHJldHVybiBwcm9wcy5mb290ZXJSZW5kZXIoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCAvKiNfX1BVUkVfXyovX2pzeChGb290ZXIsIHt9KSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xudmFyIHJlbmRlclNpZGVyTWVudSA9IGZ1bmN0aW9uIHJlbmRlclNpZGVyTWVudShwcm9wcywgbWF0Y2hNZW51S2V5cykge1xuICB2YXIgX3Byb3BzJHN0eWxpc2gzO1xuICB2YXIgbGF5b3V0ID0gcHJvcHMubGF5b3V0LFxuICAgIGlzTW9iaWxlID0gcHJvcHMuaXNNb2JpbGUsXG4gICAgc2VsZWN0ZWRLZXlzID0gcHJvcHMuc2VsZWN0ZWRLZXlzLFxuICAgIG9wZW5LZXlzID0gcHJvcHMub3BlbktleXMsXG4gICAgc3BsaXRNZW51cyA9IHByb3BzLnNwbGl0TWVudXMsXG4gICAgc3VwcHJlc3NTaWRlcldoZW5NZW51RW1wdHkgPSBwcm9wcy5zdXBwcmVzc1NpZGVyV2hlbk1lbnVFbXB0eSxcbiAgICBtZW51UmVuZGVyID0gcHJvcHMubWVudVJlbmRlcjtcbiAgaWYgKHByb3BzLm1lbnVSZW5kZXIgPT09IGZhbHNlIHx8IHByb3BzLnB1cmUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWVudURhdGEgPSBwcm9wcy5tZW51RGF0YTtcblxuICAvKiog5aaC5p6c5piv5YiG5Ymy6I+c5Y2V5qih5byP77yM6ZyA6KaB5LiT6Zeo5a6e546w5LiA5LiLICovXG4gIGlmIChzcGxpdE1lbnVzICYmIChvcGVuS2V5cyAhPT0gZmFsc2UgfHwgbGF5b3V0ID09PSAnbWl4JykgJiYgIWlzTW9iaWxlKSB7XG4gICAgdmFyIF9yZWYgPSBzZWxlY3RlZEtleXMgfHwgbWF0Y2hNZW51S2V5cyxcbiAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMSksXG4gICAgICBrZXkgPSBfcmVmMlswXTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICB2YXIgX3Byb3BzJG1lbnVEYXRhO1xuICAgICAgbWVudURhdGEgPSAoKF9wcm9wcyRtZW51RGF0YSA9IHByb3BzLm1lbnVEYXRhKSA9PT0gbnVsbCB8fCBfcHJvcHMkbWVudURhdGEgPT09IHZvaWQgMCB8fCAoX3Byb3BzJG1lbnVEYXRhID0gX3Byb3BzJG1lbnVEYXRhLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ua2V5ID09PSBrZXk7XG4gICAgICB9KSkgPT09IG51bGwgfHwgX3Byb3BzJG1lbnVEYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvcHMkbWVudURhdGEuY2hpbGRyZW4pIHx8IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51RGF0YSA9IFtdO1xuICAgIH1cbiAgfVxuICAvLyDov5nph4zotbDkuoblj6/ku6XlsJHkuIDmrKHlvqrnjq9cbiAgdmFyIGNsZWFyTWVudURhdGEgPSBjbGVhck1lbnVJdGVtKG1lbnVEYXRhIHx8IFtdKTtcbiAgaWYgKGNsZWFyTWVudURhdGEgJiYgKGNsZWFyTWVudURhdGEgPT09IG51bGwgfHwgY2xlYXJNZW51RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xlYXJNZW51RGF0YS5sZW5ndGgpIDwgMSAmJiAoc3BsaXRNZW51cyB8fCBzdXBwcmVzc1NpZGVyV2hlbk1lbnVFbXB0eSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGF5b3V0ID09PSAndG9wJyAmJiAhaXNNb2JpbGUpIHtcbiAgICB2YXIgX3Byb3BzJHN0eWxpc2gyO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChTaWRlck1lbnUsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICBtYXRjaE1lbnVLZXlzOiBtYXRjaE1lbnVLZXlzXG4gICAgfSwgcHJvcHMpLCB7fSwge1xuICAgICAgaGlkZTogdHJ1ZSxcbiAgICAgIHN0eWxpc2g6IChfcHJvcHMkc3R5bGlzaDIgPSBwcm9wcy5zdHlsaXNoKSA9PT0gbnVsbCB8fCBfcHJvcHMkc3R5bGlzaDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm9wcyRzdHlsaXNoMi5zaWRlclxuICAgIH0pKTtcbiAgfVxuICB2YXIgZGVmYXVsdERvbSA9IC8qI19fUFVSRV9fKi9fanN4KFNpZGVyTWVudSwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICBtYXRjaE1lbnVLZXlzOiBtYXRjaE1lbnVLZXlzXG4gIH0sIHByb3BzKSwge30sIHtcbiAgICAvLyDov5nph4zotbDkuoblj6/ku6XlsJHkuIDmrKHlvqrnjq9cbiAgICBtZW51RGF0YTogY2xlYXJNZW51RGF0YSxcbiAgICBzdHlsaXNoOiAoX3Byb3BzJHN0eWxpc2gzID0gcHJvcHMuc3R5bGlzaCkgPT09IG51bGwgfHwgX3Byb3BzJHN0eWxpc2gzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvcHMkc3R5bGlzaDMuc2lkZXJcbiAgfSkpO1xuICBpZiAobWVudVJlbmRlcikge1xuICAgIHJldHVybiBtZW51UmVuZGVyKHByb3BzLCBkZWZhdWx0RG9tKTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdERvbTtcbn07XG52YXIgZGVmYXVsdFBhZ2VUaXRsZVJlbmRlciA9IGZ1bmN0aW9uIGRlZmF1bHRQYWdlVGl0bGVSZW5kZXIocGFnZVByb3BzLCBwcm9wcykge1xuICB2YXIgcGFnZVRpdGxlUmVuZGVyID0gcHJvcHMucGFnZVRpdGxlUmVuZGVyO1xuICB2YXIgcGFnZVRpdGxlSW5mbyA9IGdldFBhZ2VUaXRsZUluZm8ocGFnZVByb3BzKTtcbiAgaWYgKHBhZ2VUaXRsZVJlbmRlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlIHx8ICcnLFxuICAgICAgaWQ6ICcnLFxuICAgICAgcGFnZU5hbWU6ICcnXG4gICAgfTtcbiAgfVxuICBpZiAocGFnZVRpdGxlUmVuZGVyKSB7XG4gICAgdmFyIHRpdGxlID0gcGFnZVRpdGxlUmVuZGVyKHBhZ2VQcm9wcywgcGFnZVRpdGxlSW5mby50aXRsZSwgcGFnZVRpdGxlSW5mbyk7XG4gICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBnZXRQYWdlVGl0bGVJbmZvKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcGFnZVRpdGxlSW5mbyksIHt9LCB7XG4gICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgfSkpO1xuICAgIH1cbiAgICB3YXJuaW5nKHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycsICdwcm8tbGF5b3V0OiByZW5kZXJQYWdlVGl0bGUgcmV0dXJuIHZhbHVlIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICB9XG4gIHJldHVybiBwYWdlVGl0bGVJbmZvO1xufTtcbnZhciBnZXRQYWRkaW5nSW5saW5lU3RhcnQgPSBmdW5jdGlvbiBnZXRQYWRkaW5nSW5saW5lU3RhcnQoaGFzTGVmdFBhZGRpbmcsIGNvbGxhcHNlZCwgc2lkZXJXaWR0aCkge1xuICBpZiAoaGFzTGVmdFBhZGRpbmcpIHtcbiAgICByZXR1cm4gY29sbGFwc2VkID8gNjQgOiBzaWRlcldpZHRoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuLyoqXG4gKiDwn4yDIFBvd2VyZnVsIGFuZCBlYXN5IHRvIHVzZSBiZWF1dGlmdWwgbGF5b3V0IPCfj4TigI0gU3VwcG9ydCBtdWx0aXBsZSB0b3BpY3MgYW5kIGxheW91dCB0eXBlc1xuICpcbiAqIEBwYXJhbSBwcm9wc1xuICovXG52YXIgQmFzZVByb0xheW91dCA9IGZ1bmN0aW9uIEJhc2VQcm9MYXlvdXQocHJvcHMpIHtcbiAgdmFyIF9wcm9wcyRwcmVmaXhDbHMsIF9sb2NhdGlvbiRwYXRobmFtZSwgX3Rva2VuJGxheW91dCwgX3Rva2VuJGxheW91dDIsIF90b2tlbiRsYXlvdXQzLCBfdG9rZW4kbGF5b3V0NCwgX3Rva2VuJGxheW91dDUsIF90b2tlbiRsYXlvdXQ2LCBfdG9rZW4kbGF5b3V0NywgX3Rva2VuJGxheW91dDgsIF90b2tlbiRsYXlvdXQ5LCBfdG9rZW4kbGF5b3V0MTAsIF90b2tlbiRsYXlvdXQxMSwgX3Rva2VuJGxheW91dDEyO1xuICB2YXIgX3JlZjMgPSBwcm9wcyB8fCB7fSxcbiAgICBjaGlsZHJlbiA9IF9yZWYzLmNoaWxkcmVuLFxuICAgIHByb3BzT25Db2xsYXBzZSA9IF9yZWYzLm9uQ29sbGFwc2UsXG4gICAgX3JlZjMkbG9jYXRpb24gPSBfcmVmMy5sb2NhdGlvbixcbiAgICBsb2NhdGlvbiA9IF9yZWYzJGxvY2F0aW9uID09PSB2b2lkIDAgPyB7XG4gICAgICBwYXRobmFtZTogJy8nXG4gICAgfSA6IF9yZWYzJGxvY2F0aW9uLFxuICAgIGNvbnRlbnRTdHlsZSA9IF9yZWYzLmNvbnRlbnRTdHlsZSxcbiAgICByb3V0ZSA9IF9yZWYzLnJvdXRlLFxuICAgIGRlZmF1bHRDb2xsYXBzZWQgPSBfcmVmMy5kZWZhdWx0Q29sbGFwc2VkLFxuICAgIHN0eWxlID0gX3JlZjMuc3R5bGUsXG4gICAgcHJvcHNTaWRlcldpZHRoID0gX3JlZjMuc2lkZXJXaWR0aCxcbiAgICBtZW51ID0gX3JlZjMubWVudSxcbiAgICBzaWRlck1lbnVUeXBlID0gX3JlZjMuc2lkZXJNZW51VHlwZSxcbiAgICBwcm9wc0lzQ2hpbGRyZW5MYXlvdXQgPSBfcmVmMy5pc0NoaWxkcmVuTGF5b3V0LFxuICAgIG1lbnVEYXRhUmVuZGVyID0gX3JlZjMubWVudURhdGFSZW5kZXIsXG4gICAgYWN0aW9uUmVmID0gX3JlZjMuYWN0aW9uUmVmLFxuICAgIGJnTGF5b3V0SW1nTGlzdCA9IF9yZWYzLmJnTGF5b3V0SW1nTGlzdCxcbiAgICBwcm9wc0Zvcm1hdE1lc3NhZ2UgPSBfcmVmMy5mb3JtYXRNZXNzYWdlLFxuICAgIGxvYWRpbmcgPSBfcmVmMy5sb2FkaW5nO1xuICB2YXIgc2lkZXJXaWR0aCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wc1NpZGVyV2lkdGgpIHJldHVybiBwcm9wc1NpZGVyV2lkdGg7XG4gICAgaWYgKHByb3BzLmxheW91dCA9PT0gJ21peCcpIHJldHVybiAyMTU7XG4gICAgcmV0dXJuIDI1NjtcbiAgfSwgW3Byb3BzLmxheW91dCwgcHJvcHNTaWRlcldpZHRoXSk7XG4gIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KTtcbiAgdmFyIHByZWZpeENscyA9IChfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzKSAhPT0gbnVsbCAmJiBfcHJvcHMkcHJlZml4Q2xzICE9PSB2b2lkIDAgPyBfcHJvcHMkcHJlZml4Q2xzIDogY29udGV4dC5nZXRQcmVmaXhDbHMoJ3BybycpO1xuICB2YXIgX3VzZU1vdW50TWVyZ2VTdGF0ZSA9IHVzZU1vdW50TWVyZ2VTdGF0ZShmYWxzZSwge1xuICAgICAgdmFsdWU6IG1lbnUgPT09IG51bGwgfHwgbWVudSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudS5sb2FkaW5nLFxuICAgICAgb25DaGFuZ2U6IG1lbnUgPT09IG51bGwgfHwgbWVudSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudS5vbkxvYWRpbmdDaGFuZ2VcbiAgICB9KSxcbiAgICBfdXNlTW91bnRNZXJnZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNb3VudE1lcmdlU3RhdGUsIDIpLFxuICAgIG1lbnVMb2FkaW5nID0gX3VzZU1vdW50TWVyZ2VTdGF0ZTJbMF0sXG4gICAgc2V0TWVudUxvYWRpbmcgPSBfdXNlTW91bnRNZXJnZVN0YXRlMlsxXTtcblxuICAvLyBnaXZlIGEgZGVmYXVsdCBrZXkgZm9yIHN3clxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgbGF5b3V0SW5kZXggKz0gMTtcbiAgICAgIHJldHVybiBcInByby1sYXlvdXQtXCIuY29uY2F0KGxheW91dEluZGV4KTtcbiAgICB9KSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAxKSxcbiAgICBkZWZhdWx0SWQgPSBfdXNlU3RhdGUyWzBdO1xuXG4gIC8qKlxuICAgKiDlpITnkIblm73pmYXljJbnm7jlhbMgZm9ybWF0TWVzc2FnZVxuICAgKiDlpoLmnpzmnInnlKjmiLfphY3nva7nmoTku6XnlKjmiLfkuLrkuLtcbiAgICog5aaC5p6c5rKh5pyJ55So6Ieq5bex5a6e546w55qEXG4gICAqL1xuICB2YXIgZm9ybWF0TWVzc2FnZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgIHZhciBpZCA9IF9yZWY0LmlkLFxuICAgICAgZGVmYXVsdE1lc3NhZ2UgPSBfcmVmNC5kZWZhdWx0TWVzc2FnZSxcbiAgICAgIHJlc3RQYXJhbXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjQsIF9leGNsdWRlZCk7XG4gICAgaWYgKHByb3BzRm9ybWF0TWVzc2FnZSkge1xuICAgICAgcmV0dXJuIHByb3BzRm9ybWF0TWVzc2FnZShfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VcbiAgICAgIH0sIHJlc3RQYXJhbXMpKTtcbiAgICB9XG4gICAgdmFyIGxvY2FsZXMgPSBnTG9jYWxlT2JqZWN0KCk7XG4gICAgcmV0dXJuIGxvY2FsZXNbaWRdID8gbG9jYWxlc1tpZF0gOiBkZWZhdWx0TWVzc2FnZTtcbiAgfSwgW3Byb3BzRm9ybWF0TWVzc2FnZV0pO1xuICB2YXIgX3VzZVNXUiA9IHVzZVNXUihbZGVmYXVsdElkLCBtZW51ID09PSBudWxsIHx8IG1lbnUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lbnUucGFyYW1zXSwgLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmNiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmNSkge1xuICAgICAgICB2YXIgX21lbnUkcmVxdWVzdDtcbiAgICAgICAgdmFyIF9yZWY3LCBwYXJhbXMsIG1lbnVEYXRhSXRlbXM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9yZWY3ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLCBwYXJhbXMgPSBfcmVmN1sxXTtcbiAgICAgICAgICAgICAgc2V0TWVudUxvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICByZXR1cm4gbWVudSA9PT0gbnVsbCB8fCBtZW51ID09PSB2b2lkIDAgfHwgKF9tZW51JHJlcXVlc3QgPSBtZW51LnJlcXVlc3QpID09PSBudWxsIHx8IF9tZW51JHJlcXVlc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tZW51JHJlcXVlc3QuY2FsbChtZW51LCBwYXJhbXMgfHwge30sIChyb3V0ZSA9PT0gbnVsbCB8fCByb3V0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm91dGUuY2hpbGRyZW4pIHx8IChyb3V0ZSA9PT0gbnVsbCB8fCByb3V0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm91dGUucm91dGVzKSB8fCBbXSk7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIG1lbnVEYXRhSXRlbXMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBzZXRNZW51TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgbWVudURhdGFJdGVtcyk7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWY2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwge1xuICAgICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgc2hvdWxkUmV0cnlPbkVycm9yOiBmYWxzZSxcbiAgICAgIHJldmFsaWRhdGVPblJlY29ubmVjdDogZmFsc2VcbiAgICB9KSxcbiAgICBkYXRhID0gX3VzZVNXUi5kYXRhLFxuICAgIG11dGF0ZSA9IF91c2VTV1IubXV0YXRlLFxuICAgIGlzTG9hZGluZyA9IF91c2VTV1IuaXNMb2FkaW5nO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldE1lbnVMb2FkaW5nKGlzTG9hZGluZyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbaXNMb2FkaW5nXSk7XG4gIHZhciBfdXNlU1dSQ29uZmlnID0gdXNlU1dSQ29uZmlnKCksXG4gICAgY2FjaGUgPSBfdXNlU1dSQ29uZmlnLmNhY2hlO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBNYXApIGNhY2hlLmRlbGV0ZShkZWZhdWx0SWQpO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG4gIHZhciBtZW51SW5mb0RhdGEgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0TWVudURhdGEoZGF0YSB8fCAocm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvdXRlLmNoaWxkcmVuKSB8fCAocm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvdXRlLnJvdXRlcykgfHwgW10sIG1lbnUsIGZvcm1hdE1lc3NhZ2UsIG1lbnVEYXRhUmVuZGVyKTtcbiAgfSwgW2Zvcm1hdE1lc3NhZ2UsIG1lbnUsIG1lbnVEYXRhUmVuZGVyLCBkYXRhLCByb3V0ZSA9PT0gbnVsbCB8fCByb3V0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm91dGUuY2hpbGRyZW4sIHJvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3V0ZS5yb3V0ZXNdKTtcbiAgdmFyIF9yZWY4ID0gbWVudUluZm9EYXRhIHx8IHt9LFxuICAgIGJyZWFkY3J1bWIgPSBfcmVmOC5icmVhZGNydW1iLFxuICAgIGJyZWFkY3J1bWJNYXAgPSBfcmVmOC5icmVhZGNydW1iTWFwLFxuICAgIF9yZWY4JG1lbnVEYXRhID0gX3JlZjgubWVudURhdGEsXG4gICAgbWVudURhdGEgPSBfcmVmOCRtZW51RGF0YSA9PT0gdm9pZCAwID8gW10gOiBfcmVmOCRtZW51RGF0YTtcbiAgaWYgKGFjdGlvblJlZiAmJiBtZW51ICE9PSBudWxsICYmIG1lbnUgIT09IHZvaWQgMCAmJiBtZW51LnJlcXVlc3QpIHtcbiAgICBhY3Rpb25SZWYuY3VycmVudCA9IHtcbiAgICAgIHJlbG9hZDogZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgICBtdXRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHZhciBtYXRjaE1lbnVzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoTWVudShsb2NhdGlvbi5wYXRobmFtZSB8fCAnLycsIG1lbnVEYXRhIHx8IFtdLCB0cnVlKTtcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lLCBtZW51RGF0YV0pO1xuICB2YXIgbWF0Y2hNZW51S2V5cyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQobWF0Y2hNZW51cy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmtleSB8fCBpdGVtLnBhdGggfHwgJyc7XG4gICAgfSkpKTtcbiAgfSwgW21hdGNoTWVudXNdKTtcblxuICAvLyDlvZPliY3pgInkuK3nmoRtZW5177yM5LiA6Iis5LiN5Lya5Li656m6XG4gIHZhciBjdXJyZW50TWVudSA9IG1hdGNoTWVudXNbbWF0Y2hNZW51cy5sZW5ndGggLSAxXSB8fCB7fTtcbiAgdmFyIGN1cnJlbnRNZW51TGF5b3V0UHJvcHMgPSB1c2VDdXJyZW50TWVudUxheW91dFByb3BzKGN1cnJlbnRNZW51KTtcbiAgdmFyIF9wcm9wcyRjdXJyZW50TWVudUxheSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCBjdXJyZW50TWVudUxheW91dFByb3BzKSxcbiAgICBmaXhTaWRlcmJhciA9IF9wcm9wcyRjdXJyZW50TWVudUxheS5maXhTaWRlcmJhcixcbiAgICBuYXZUaGVtZSA9IF9wcm9wcyRjdXJyZW50TWVudUxheS5uYXZUaGVtZSxcbiAgICBwcm9wc0xheW91dCA9IF9wcm9wcyRjdXJyZW50TWVudUxheS5sYXlvdXQsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMkY3VycmVudE1lbnVMYXksIF9leGNsdWRlZDIpO1xuICB2YXIgY29sU2l6ZSA9IHVzZUJyZWFrcG9pbnQoKTtcbiAgdmFyIGlzTW9iaWxlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChjb2xTaXplID09PSAnc20nIHx8IGNvbFNpemUgPT09ICd4cycpICYmICFwcm9wcy5kaXNhYmxlTW9iaWxlO1xuICB9LCBbY29sU2l6ZSwgcHJvcHMuZGlzYWJsZU1vYmlsZV0pO1xuXG4gIC8vIElmIGl0IGlzIGEgZml4IG1lbnUsIGNhbGN1bGF0ZSBwYWRkaW5nXG4gIC8vIGRvbid0IG5lZWQgcGFkZGluZyBpbiBwaG9uZSBtb2RlXG4gIC8qIENoZWNraW5nIGlmIHRoZSBtZW51IGlzIGxvYWRpbmcgYW5kIGlmIGl0IGlzLCBpdCB3aWxsIHJldHVybiBhIHNrZWxldG9uIGxvYWRpbmcgc2NyZWVuLiAqL1xuICB2YXIgaGFzTGVmdFBhZGRpbmcgPSBwcm9wc0xheW91dCAhPT0gJ3RvcCcgJiYgIWlzTW9iaWxlO1xuICB2YXIgX3VzZU1lcmdlZFN0YXRlID0gdXNlTWVyZ2VkU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRlZmF1bHRDb2xsYXBzZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb2xsYXBzZWQ7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdURVNUJykgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGlzTW9iaWxlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChjb2xTaXplID09PSAnbWQnKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogcHJvcHMuY29sbGFwc2VkLFxuICAgICAgb25DaGFuZ2U6IHByb3BzT25Db2xsYXBzZVxuICAgIH0pLFxuICAgIF91c2VNZXJnZWRTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlTWVyZ2VkU3RhdGUsIDIpLFxuICAgIGNvbGxhcHNlZCA9IF91c2VNZXJnZWRTdGF0ZTJbMF0sXG4gICAgb25Db2xsYXBzZSA9IF91c2VNZXJnZWRTdGF0ZTJbMV07XG5cbiAgLy8gU3BsaWNpbmcgcGFyYW1ldGVycywgYWRkaW5nIG1lbnVEYXRhIGFuZCBmb3JtYXRNZXNzYWdlIGluIHByb3BzXG4gIHZhciBkZWZhdWx0UHJvcHMgPSBPbWl0KF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICB9LCBwcm9wcyksIHt9LCB7XG4gICAgc2lkZXJXaWR0aDogc2lkZXJXaWR0aFxuICB9LCBjdXJyZW50TWVudUxheW91dFByb3BzKSwge30sIHtcbiAgICBmb3JtYXRNZXNzYWdlOiBmb3JtYXRNZXNzYWdlLFxuICAgIGJyZWFkY3J1bWI6IGJyZWFkY3J1bWIsXG4gICAgbWVudTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZW51KSwge30sIHtcbiAgICAgIHR5cGU6IHNpZGVyTWVudVR5cGUgfHwgKG1lbnUgPT09IG51bGwgfHwgbWVudSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudS50eXBlKSxcbiAgICAgIGxvYWRpbmc6IG1lbnVMb2FkaW5nXG4gICAgfSksXG4gICAgbGF5b3V0OiBwcm9wc0xheW91dFxuICB9KSwgWydjbGFzc05hbWUnLCAnc3R5bGUnLCAnYnJlYWRjcnVtYlJlbmRlciddKTtcblxuICAvLyBnZW4gcGFnZSB0aXRsZVxuICB2YXIgcGFnZVRpdGxlSW5mbyA9IGRlZmF1bHRQYWdlVGl0bGVSZW5kZXIoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgfSwgZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICBicmVhZGNydW1iTWFwOiBicmVhZGNydW1iTWFwXG4gIH0pLCBwcm9wcyk7XG5cbiAgLy8gZ2VuIGJyZWFkY3J1bWJQcm9wcywgcGFyYW1ldGVyIGZvciBwYWdlSGVhZGVyXG4gIHZhciBicmVhZGNydW1iUHJvcHMgPSBnZXRCcmVhZGNydW1iUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0UHJvcHMpLCB7fSwge1xuICAgIGJyZWFkY3J1bWJSZW5kZXI6IHByb3BzLmJyZWFkY3J1bWJSZW5kZXIsXG4gICAgYnJlYWRjcnVtYk1hcDogYnJlYWRjcnVtYk1hcFxuICB9KSwgcHJvcHMpO1xuXG4gIC8vIHJlbmRlciBzaWRlciBkb21cbiAgdmFyIHNpZGVyTWVudURvbSA9IHJlbmRlclNpZGVyTWVudShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRQcm9wcyksIHt9LCB7XG4gICAgbWVudURhdGE6IG1lbnVEYXRhLFxuICAgIG9uQ29sbGFwc2U6IG9uQ29sbGFwc2UsXG4gICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxuICAgIGNvbGxhcHNlZDogY29sbGFwc2VkXG4gIH0pLCBtYXRjaE1lbnVLZXlzKTtcblxuICAvLyByZW5kZXIgaGVhZGVyIGRvbVxuICB2YXIgaGVhZGVyRG9tID0gaGVhZGVyUmVuZGVyKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBoYXNTaWRlck1lbnU6ICEhc2lkZXJNZW51RG9tLFxuICAgIG1lbnVEYXRhOiBtZW51RGF0YSxcbiAgICBpc01vYmlsZTogaXNNb2JpbGUsXG4gICAgY29sbGFwc2VkOiBjb2xsYXBzZWQsXG4gICAgb25Db2xsYXBzZTogb25Db2xsYXBzZVxuICB9KSwgbWF0Y2hNZW51S2V5cyk7XG5cbiAgLy8gcmVuZGVyIGZvb3RlciBkb21cbiAgdmFyIGZvb3RlckRvbSA9IGZvb3RlclJlbmRlcihfb2JqZWN0U3ByZWFkKHtcbiAgICBpc01vYmlsZTogaXNNb2JpbGUsXG4gICAgY29sbGFwc2VkOiBjb2xsYXBzZWRcbiAgfSwgZGVmYXVsdFByb3BzKSk7XG4gIHZhciBfdXNlQ29udGV4dCA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KSxcbiAgICBjb250ZXh0SXNDaGlsZHJlbkxheW91dCA9IF91c2VDb250ZXh0LmlzQ2hpbGRyZW5MYXlvdXQ7XG5cbiAgLy8g5aaC5p6cIHByb3BzIOS4reWumuS5ie+8jOS7pSBwcm9wcyDkuLrlh4ZcbiAgdmFyIGlzQ2hpbGRyZW5MYXlvdXQgPSBwcm9wc0lzQ2hpbGRyZW5MYXlvdXQgIT09IHVuZGVmaW5lZCA/IHByb3BzSXNDaGlsZHJlbkxheW91dCA6IGNvbnRleHRJc0NoaWxkcmVuTGF5b3V0O1xuICB2YXIgcHJvTGF5b3V0Q2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sYXlvdXRcIik7XG4gIHZhciBfdXNlU3R5bGUgPSB1c2VTdHlsZShwcm9MYXlvdXRDbGFzc05hbWUpLFxuICAgIHdyYXBTU1IgPSBfdXNlU3R5bGUud3JhcFNTUixcbiAgICBoYXNoSWQgPSBfdXNlU3R5bGUuaGFzaElkO1xuXG4gIC8vIGdlbiBjbGFzc05hbWVcbiAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHMuY2xhc3NOYW1lLCBoYXNoSWQsICdhbnQtZGVzaWduLXBybycsIHByb0xheW91dENsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJzY3JlZW4tXCIuY29uY2F0KGNvbFNpemUpLCBjb2xTaXplKSwgXCJcIi5jb25jYXQocHJvTGF5b3V0Q2xhc3NOYW1lLCBcIi10b3AtbWVudVwiKSwgcHJvcHNMYXlvdXQgPT09ICd0b3AnKSwgXCJcIi5jb25jYXQocHJvTGF5b3V0Q2xhc3NOYW1lLCBcIi1pcy1jaGlsZHJlblwiKSwgaXNDaGlsZHJlbkxheW91dCksIFwiXCIuY29uY2F0KHByb0xheW91dENsYXNzTmFtZSwgXCItZml4LXNpZGVyYmFyXCIpLCBmaXhTaWRlcmJhciksIFwiXCIuY29uY2F0KHByb0xheW91dENsYXNzTmFtZSwgXCItXCIpLmNvbmNhdChwcm9wc0xheW91dCksIHByb3BzTGF5b3V0KSk7XG5cbiAgLyoqIOiuoeeulyBzbGlkZXIg55qE5a695bqmICovXG4gIHZhciBsZWZ0U2lkZXJXaWR0aCA9IGdldFBhZGRpbmdJbmxpbmVTdGFydCghIWhhc0xlZnRQYWRkaW5nLCBjb2xsYXBzZWQsIHNpZGVyV2lkdGgpO1xuXG4gIC8vIHNpZGVyTWVudURvbSDkuLrnqbrnmoTml7blgJnvvIzkuI3pnIDopoEgcGFkZGluZ1xuICB2YXIgZ2VuTGF5b3V0U3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcblxuICAvLyBpZiBpcyBzb21lIGxheW91dCBjaGlsZHJlbiwgZG9uJ3QgbmVlZCBtaW4gaGVpZ2h0XG4gIGlmIChpc0NoaWxkcmVuTGF5b3V0IHx8IGNvbnRlbnRTdHlsZSAmJiBjb250ZW50U3R5bGUubWluSGVpZ2h0KSB7XG4gICAgZ2VuTGF5b3V0U3R5bGUubWluSGVpZ2h0ID0gMDtcbiAgfVxuXG4gIC8qKiDpobXpnaLliIfmjaLnmoTml7blgJnop6blj5EgKi9cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzJG9uUGFnZUNoYW5nZTtcbiAgICAoX3Byb3BzJG9uUGFnZUNoYW5nZSA9IHByb3BzLm9uUGFnZUNoYW5nZSkgPT09IG51bGwgfHwgX3Byb3BzJG9uUGFnZUNoYW5nZSA9PT0gdm9pZCAwIHx8IF9wcm9wcyRvblBhZ2VDaGFuZ2UuY2FsbChwcm9wcywgcHJvcHMubG9jYXRpb24pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lLCAoX2xvY2F0aW9uJHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUpID09PSBudWxsIHx8IF9sb2NhdGlvbiRwYXRobmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2xvY2F0aW9uJHBhdGhuYW1lLnNlYXJjaF0pO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgaGFzRm9vdGVyVG9vbGJhciA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0SGFzRm9vdGVyVG9vbGJhciA9IF91c2VTdGF0ZTRbMV07XG4gIC8qKlxuICAgKiDkvb/nlKhudW1iZXLmmK/lm6DkuLrlpJrmoIfnrb7pobXnmoTml7blgJnmnInlpJrkuKogUGFnZUNvbnRhaW5lcu+8jOWPquacieacieS7u+aEj+S4gOS4quWwseW6lOivpeWxleekuui/meS4qmNsYXNzTmFtZVxuICAgKi9cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZSgwKSxcbiAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgaGFzUGFnZUNvbnRhaW5lciA9IF91c2VTdGF0ZTZbMF0sXG4gICAgc2V0SGFzUGFnZUNvbnRhaW5lciA9IF91c2VTdGF0ZTZbMV07XG4gIHVzZURvY3VtZW50VGl0bGUocGFnZVRpdGxlSW5mbywgcHJvcHMudGl0bGUgfHwgZmFsc2UpO1xuICB2YXIgX3VzZUNvbnRleHQyID0gdXNlQ29udGV4dChQcm9Qcm92aWRlciksXG4gICAgdG9rZW4gPSBfdXNlQ29udGV4dDIudG9rZW47XG4gIHZhciBiZ0ltZ1N0eWxlTGlzdCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChiZ0xheW91dEltZ0xpc3QgJiYgYmdMYXlvdXRJbWdMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBiZ0xheW91dEltZ0xpc3QgPT09IG51bGwgfHwgYmdMYXlvdXRJbWdMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZ0xheW91dEltZ0xpc3QubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goXCJpbWdcIiwge1xuICAgICAgICAgIHNyYzogaXRlbS5zcmMsXG4gICAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgICB9LCBpdGVtKVxuICAgICAgICB9LCBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIFtiZ0xheW91dEltZ0xpc3RdKTtcbiAgcmV0dXJuIHdyYXBTU1IoIC8qI19fUFVSRV9fKi9fanN4KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRQcm9wcyksIHt9LCB7XG4gICAgICBicmVhZGNydW1iOiBicmVhZGNydW1iUHJvcHMsXG4gICAgICBtZW51RGF0YTogbWVudURhdGEsXG4gICAgICBpc01vYmlsZTogaXNNb2JpbGUsXG4gICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlZCxcbiAgICAgIGhhc1BhZ2VDb250YWluZXI6IGhhc1BhZ2VDb250YWluZXIsXG4gICAgICBzZXRIYXNQYWdlQ29udGFpbmVyOiBzZXRIYXNQYWdlQ29udGFpbmVyLFxuICAgICAgaXNDaGlsZHJlbkxheW91dDogdHJ1ZSxcbiAgICAgIHRpdGxlOiBwYWdlVGl0bGVJbmZvLnBhZ2VOYW1lLFxuICAgICAgaGFzU2lkZXJNZW51OiAhIXNpZGVyTWVudURvbSxcbiAgICAgIGhhc0hlYWRlcjogISFoZWFkZXJEb20sXG4gICAgICBzaWRlcldpZHRoOiBsZWZ0U2lkZXJXaWR0aCxcbiAgICAgIGhhc0Zvb3RlcjogISFmb290ZXJEb20sXG4gICAgICBoYXNGb290ZXJUb29sYmFyOiBoYXNGb290ZXJUb29sYmFyLFxuICAgICAgc2V0SGFzRm9vdGVyVG9vbGJhcjogc2V0SGFzRm9vdGVyVG9vbGJhcixcbiAgICAgIHBhZ2VUaXRsZUluZm86IHBhZ2VUaXRsZUluZm8sXG4gICAgICBtYXRjaE1lbnVzOiBtYXRjaE1lbnVzLFxuICAgICAgbWF0Y2hNZW51S2V5czogbWF0Y2hNZW51S2V5cyxcbiAgICAgIGN1cnJlbnRNZW51OiBjdXJyZW50TWVudVxuICAgIH0pLFxuICAgIGNoaWxkcmVuOiBwcm9wcy5wdXJlID8gLyojX19QVVJFX18qL19qc3goX0ZyYWdtZW50LCB7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9KSA6IC8qI19fUFVSRV9fKi9fanN4cyhcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuOiBbYmdJbWdTdHlsZUxpc3QgfHwgKF90b2tlbiRsYXlvdXQgPSB0b2tlbi5sYXlvdXQpICE9PSBudWxsICYmIF90b2tlbiRsYXlvdXQgIT09IHZvaWQgMCAmJiBfdG9rZW4kbGF5b3V0LmJnTGF5b3V0ID8gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJvTGF5b3V0Q2xhc3NOYW1lLCBcIi1iZy1saXN0XCIpLCBoYXNoSWQpLFxuICAgICAgICBjaGlsZHJlbjogYmdJbWdTdHlsZUxpc3RcbiAgICAgIH0pIDogbnVsbCwgLyojX19QVVJFX18qL19qc3hzKExheW91dCwge1xuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgLy8gaGFjayBzdHlsZVxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHNpZGVyTWVudURvbSA/ICdyb3cnIDogdW5kZWZpbmVkXG4gICAgICAgIH0sIHN0eWxlKSxcbiAgICAgICAgY2hpbGRyZW46IFsvKiNfX1BVUkVfXyovX2pzeChDb25maWdQcm92aWRlclxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICwge1xuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBoYXNoZWQ6IGlzTmVlZE9wZW5IYXNoKCksXG4gICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICBjb250cm9sSGVpZ2h0TEc6ICgoX3Rva2VuJGxheW91dDIgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQyID0gX3Rva2VuJGxheW91dDIuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Mi5tZW51SGVpZ2h0KSB8fCAodG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbnRyb2xIZWlnaHRMRylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIE1lbnU6IGNvdmVyVG9OZXdUb2tlbih7XG4gICAgICAgICAgICAgICAgY29sb3JJdGVtQmc6ICgoX3Rva2VuJGxheW91dDMgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQzID0gX3Rva2VuJGxheW91dDMuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0My5jb2xvck1lbnVCYWNrZ3JvdW5kKSB8fCAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGNvbG9yU3ViSXRlbUJnOiAoKF90b2tlbiRsYXlvdXQ0ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0NCA9IF90b2tlbiRsYXlvdXQ0LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0NCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDQuY29sb3JNZW51QmFja2dyb3VuZCkgfHwgJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICByYWRpdXNJdGVtOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgY29sb3JJdGVtQmdTZWxlY3RlZDogKChfdG9rZW4kbGF5b3V0NSA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDUgPSBfdG9rZW4kbGF5b3V0NS5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ1LmNvbG9yQmdNZW51SXRlbVNlbGVjdGVkKSB8fCAodG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuLmNvbG9yQmdUZXh0SG92ZXIpLFxuICAgICAgICAgICAgICAgIGNvbG9ySXRlbUJnSG92ZXI6ICgoX3Rva2VuJGxheW91dDYgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ2ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ2ID0gX3Rva2VuJGxheW91dDYuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0Ni5jb2xvckJnTWVudUl0ZW1Ib3ZlcikgfHwgKHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnVGV4dEhvdmVyKSxcbiAgICAgICAgICAgICAgICBjb2xvckl0ZW1CZ0FjdGl2ZTogKChfdG9rZW4kbGF5b3V0NyA9IHRva2VuLmxheW91dCkgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDcgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDcgPSBfdG9rZW4kbGF5b3V0Ny5zaWRlcikgPT09IG51bGwgfHwgX3Rva2VuJGxheW91dDcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQ3LmNvbG9yQmdNZW51SXRlbUFjdGl2ZSkgfHwgKHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnVGV4dEFjdGl2ZSksXG4gICAgICAgICAgICAgICAgY29sb3JJdGVtQmdTZWxlY3RlZEhvcml6b250YWw6ICgoX3Rva2VuJGxheW91dDggPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ4ID09PSB2b2lkIDAgfHwgKF90b2tlbiRsYXlvdXQ4ID0gX3Rva2VuJGxheW91dDguc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQ4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdG9rZW4kbGF5b3V0OC5jb2xvckJnTWVudUl0ZW1TZWxlY3RlZCkgfHwgKHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnVGV4dEhvdmVyKSxcbiAgICAgICAgICAgICAgICBjb2xvckFjdGl2ZUJhcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGNvbG9yQWN0aXZlQmFySGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIGNvbG9yQWN0aXZlQmFyQm9yZGVyU2l6ZTogMCxcbiAgICAgICAgICAgICAgICBjb2xvckl0ZW1UZXh0OiAoKF90b2tlbiRsYXlvdXQ5ID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0OSA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0OSA9IF90b2tlbiRsYXlvdXQ5LnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0OSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDkuY29sb3JUZXh0TWVudSkgfHwgKHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvclRleHRTZWNvbmRhcnkpLFxuICAgICAgICAgICAgICAgIGNvbG9ySXRlbVRleHRIb3ZlcjogKChfdG9rZW4kbGF5b3V0MTAgPSB0b2tlbi5sYXlvdXQpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxMCA9PT0gdm9pZCAwIHx8IChfdG9rZW4kbGF5b3V0MTAgPSBfdG9rZW4kbGF5b3V0MTAuc2lkZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxMCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDEwLmNvbG9yVGV4dE1lbnVJdGVtSG92ZXIpIHx8ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgICAgICAgICAgICAvLyDmgqzmta7mgIFcbiAgICAgICAgICAgICAgICBjb2xvckl0ZW1UZXh0U2VsZWN0ZWQ6ICgoX3Rva2VuJGxheW91dDExID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTEgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDExID0gX3Rva2VuJGxheW91dDExLnNpZGVyKSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90b2tlbiRsYXlvdXQxMS5jb2xvclRleHRNZW51U2VsZWN0ZWQpIHx8ICdyZ2JhKDAsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgICAgICBwb3B1cEJnOiB0b2tlbiA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW4uY29sb3JCZ0VsZXZhdGVkLFxuICAgICAgICAgICAgICAgIHN1Yk1lbnVJdGVtQmc6IHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnRWxldmF0ZWQsXG4gICAgICAgICAgICAgICAgZGFya1N1Yk1lbnVJdGVtQmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgZGFya1BvcHVwQmc6IHRva2VuID09PSBudWxsIHx8IHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbi5jb2xvckJnRWxldmF0ZWRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBzaWRlck1lbnVEb21cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4cyhcImRpdlwiLCB7XG4gICAgICAgICAgc3R5bGU6IGdlbkxheW91dFN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJvTGF5b3V0Q2xhc3NOYW1lLCBcIi1jb250YWluZXIgXCIpLmNvbmNhdChoYXNoSWQpLnRyaW0oKSxcbiAgICAgICAgICBjaGlsZHJlbjogW2hlYWRlckRvbSwgLyojX19QVVJFX18qL19qc3goV3JhcENvbnRlbnQsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICBoYXNQYWdlQ29udGFpbmVyOiBoYXNQYWdlQ29udGFpbmVyLFxuICAgICAgICAgICAgaXNDaGlsZHJlbkxheW91dDogaXNDaGlsZHJlbkxheW91dFxuICAgICAgICAgIH0sIHJlc3QpLCB7fSwge1xuICAgICAgICAgICAgaGFzSGVhZGVyOiAhIWhlYWRlckRvbSxcbiAgICAgICAgICAgIHByZWZpeENsczogcHJvTGF5b3V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IGNvbnRlbnRTdHlsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBsb2FkaW5nID8gLyojX19QVVJFX18qL19qc3goUGFnZUxvYWRpbmcsIHt9KSA6IGNoaWxkcmVuXG4gICAgICAgICAgfSkpLCBmb290ZXJEb20sIGhhc0Zvb3RlclRvb2xiYXIgJiYgLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcm9MYXlvdXRDbGFzc05hbWUsIFwiLWhhcy1mb290ZXJcIiksXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDY0LFxuICAgICAgICAgICAgICBtYXJnaW5CbG9ja1N0YXJ0OiAoX3Rva2VuJGxheW91dDEyID0gdG9rZW4ubGF5b3V0KSA9PT0gbnVsbCB8fCBfdG9rZW4kbGF5b3V0MTIgPT09IHZvaWQgMCB8fCAoX3Rva2VuJGxheW91dDEyID0gX3Rva2VuJGxheW91dDEyLnBhZ2VDb250YWluZXIpID09PSBudWxsIHx8IF90b2tlbiRsYXlvdXQxMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rva2VuJGxheW91dDEyLnBhZGRpbmdCbG9ja1BhZ2VDb250YWluZXJDb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSldXG4gICAgICAgIH0pXVxuICAgICAgfSldXG4gICAgfSlcbiAgfSkpO1xufTtcbnZhciBQcm9MYXlvdXQgPSBmdW5jdGlvbiBQcm9MYXlvdXQocHJvcHMpIHtcbiAgdmFyIGNvbG9yUHJpbWFyeSA9IHByb3BzLmNvbG9yUHJpbWFyeTtcbiAgdmFyIGRhcmtQcm9wcyA9IHByb3BzLm5hdlRoZW1lICE9PSB1bmRlZmluZWQgPyB7XG4gICAgZGFyazogcHJvcHMubmF2VGhlbWUgPT09ICdyZWFsRGFyaydcbiAgfSA6IHt9O1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29uZmlnUHJvdmlkZXIsIHtcbiAgICB0aGVtZTogY29sb3JQcmltYXJ5ID8ge1xuICAgICAgdG9rZW46IHtcbiAgICAgICAgY29sb3JQcmltYXJ5OiBjb2xvclByaW1hcnlcbiAgICAgIH1cbiAgICB9IDogdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChQcm9Db25maWdQcm92aWRlciwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkYXJrUHJvcHMpLCB7fSwge1xuICAgICAgdG9rZW46IHByb3BzLnRva2VuLFxuICAgICAgcHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL19qc3goQmFzZVByb0xheW91dCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgbG9nbzogLyojX19QVVJFX18qL19qc3goTG9nbywge30pXG4gICAgICB9LCBkZWZhdWx0U2V0dGluZ3MpLCB7fSwge1xuICAgICAgICBsb2NhdGlvbjogaXNCcm93c2VyKCkgPyB3aW5kb3cubG9jYXRpb24gOiB1bmRlZmluZWRcbiAgICAgIH0sIHByb3BzKSlcbiAgICB9KSlcbiAgfSk7XG59O1xuZXhwb3J0IHsgUHJvTGF5b3V0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///80918
`)},57764:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_LogoutOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LogoutOutlined.js
// This icon file is generated automatically.
var LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };
/* harmony default export */ var asn_LogoutOutlined = (LogoutOutlined);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/@umijs/plugins/node_modules/@ant-design/icons/es/components/Context.js

var IconContext = /*#__PURE__*/(0,react.createContext)({});
/* harmony default export */ var Context = (IconContext);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/conversion.js
var conversion = __webpack_require__(86500);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/format-input.js
var format_input = __webpack_require__(1350);
;// CONCATENATED MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js


var hueStep = 2; // \u8272\u76F8\u9636\u68AF

var saturationStep = 0.16; // \u9971\u548C\u5EA6\u9636\u68AF\uFF0C\u6D45\u8272\u90E8\u5206

var saturationStep2 = 0.05; // \u9971\u548C\u5EA6\u9636\u68AF\uFF0C\u6DF1\u8272\u90E8\u5206

var brightnessStep1 = 0.05; // \u4EAE\u5EA6\u9636\u68AF\uFF0C\u6D45\u8272\u90E8\u5206

var brightnessStep2 = 0.15; // \u4EAE\u5EA6\u9636\u68AF\uFF0C\u6DF1\u8272\u90E8\u5206

var lightColorCount = 5; // \u6D45\u8272\u6570\u91CF\uFF0C\u4E3B\u8272\u4E0A

var darkColorCount = 4; // \u6DF1\u8272\u6570\u91CF\uFF0C\u4E3B\u8272\u4E0B
// \u6697\u8272\u4E3B\u9898\u989C\u8272\u6620\u5C04\u5173\u7CFB\u8868

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of \`hsv.h * 360\`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = (0,conversion/* rgbToHsv */.py)(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix \`#\`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat((0,conversion/* rgbToHex */.vq)(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // \u6839\u636E\u8272\u76F8\u4E0D\u540C\uFF0C\u8272\u76F8\u8F6C\u5411\u4E0D\u540C

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // \u8FB9\u754C\u503C\u4FEE\u6B63


  if (saturation > 1) {
    saturation = 1;
  } // \u7B2C\u4E00\u683C\u7684 s \u9650\u5236\u5728 0.06-0.1 \u4E4B\u95F4


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = (0,format_input/* inputToRGB */.uA)(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex((0,format_input/* inputToRGB */.uA)({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex((0,format_input/* inputToRGB */.uA)({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix((0,format_input/* inputToRGB */.uA)(opts.backgroundColor || '#141414'), (0,format_input/* inputToRGB */.uA)(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;



// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(44958);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(68929);
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);
;// CONCATENATED MODULE: ./node_modules/@umijs/plugins/node_modules/@ant-design/icons/es/utils.js








function utils_warning(valid, message) {
  (0,warning/* default */.ZP)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0,esm_typeof/* default */.Z)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0,esm_typeof/* default */.Z)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase_default()(key)] = val;
    }
    return acc;
  }, {});
}
function utils_generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/react.createElement(node.tag, (0,objectSpread2/* default */.Z)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/react.createElement(node.tag, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\\n.anticon {\\n  display: inline-flex;\\n  alignItems: center;\\n  color: inherit;\\n  font-style: normal;\\n  line-height: 0;\\n  text-align: center;\\n  text-transform: none;\\n  vertical-align: -0.125em;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.anticon > * {\\n  line-height: 1;\\n}\\n\\n.anticon svg {\\n  display: inline-block;\\n}\\n\\n.anticon::before {\\n  display: none;\\n}\\n\\n.anticon .anticon-icon {\\n  display: block;\\n}\\n\\n.anticon[tabindex] {\\n  cursor: pointer;\\n}\\n\\n.anticon-spin::before,\\n.anticon-spin {\\n  display: inline-block;\\n  -webkit-animation: loadingCircle 1s infinite linear;\\n  animation: loadingCircle 1s infinite linear;\\n}\\n\\n@-webkit-keyframes loadingCircle {\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n@keyframes loadingCircle {\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
  var _useContext = (0,react.useContext)(Context),
    csp = _useContext.csp;
  (0,react.useEffect)(function () {
    (0,dynamicCSS/* updateCSS */.hq)(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};
;// CONCATENATED MODULE: ./node_modules/@umijs/plugins/node_modules/@ant-design/icons/es/components/IconBase.js


var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return (0,objectSpread2/* default */.Z)({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles();
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return utils_generate(target.icon, "svg-".concat(target.name), (0,objectSpread2/* default */.Z)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ var components_IconBase = (IconBase);
;// CONCATENATED MODULE: ./node_modules/@umijs/plugins/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
;// CONCATENATED MODULE: ./node_modules/@umijs/plugins/node_modules/@ant-design/icons/es/components/AntdIcon.js




var AntdIcon_excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];






// Initial setting
// should move it to antd main repo?
setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, AntdIcon_excluded);
  var _React$useContext = react.useContext(Context),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames_default()(rootClassName, prefixCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/react.createElement("span", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/react.createElement(components_IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var AntdIcon = (Icon);
;// CONCATENATED MODULE: ./node_modules/@umijs/plugins/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var LogoutOutlined_LogoutOutlined = function LogoutOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LogoutOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(LogoutOutlined_LogoutOutlined);
if (false) {}
/* harmony default export */ var icons_LogoutOutlined = (RefIcon);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsbUJBQW1CLENBQUMsbUJBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEMsdUJBQXVCLGVBQWU7QUFDdEMsNkNBQWUsSUFBSSxFOztBQzFEa0Q7QUFDckU7QUFDQTtBQUMrQjtBQUM2QztBQUM5QjtBQUM5QyxJQUFJLDZCQUFjO0FBQ2xCLHNCQUFzQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsZ0NBQWEsQ0FBQyxnQ0FBYSxHQUFHLFlBQVk7QUFDOUY7QUFDQSxVQUFVLGtCQUFpQjtBQUMzQixHQUFHO0FBQ0g7QUFDQSwyQkFBMkIsZ0JBQWdCLENBQUMsNkJBQWM7QUFDMUQsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QseURBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvZXMvYXNuL0xvZ291dE91dGxpbmVkLmpzP2ExMTIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1bWlqcy9wbHVnaW5zL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9lcy9jb21wb25lbnRzL0NvbnRleHQuanM/M2IxOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY29sb3JzL2Rpc3QvaW5kZXguZXNtLmpzPzgxM2MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1bWlqcy9wbHVnaW5zL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9lcy91dGlscy5qcz85MDJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvcGx1Z2lucy9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvZXMvY29tcG9uZW50cy9JY29uQmFzZS5qcz8wMWNiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvcGx1Z2lucy9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvZXMvY29tcG9uZW50cy90d29Ub25lUHJpbWFyeUNvbG9yLmpzP2VlMzciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1bWlqcy9wbHVnaW5zL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9lcy9jb21wb25lbnRzL0FudGRJY29uLmpzPzYyMTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1bWlqcy9wbHVnaW5zL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9Mb2dvdXRPdXRsaW5lZC5qcz80Njc4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxudmFyIExvZ291dE91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk04NjggNzMyaC03MC4zYy00LjggMC05LjMgMi4xLTEyLjMgNS44LTcgOC41LTE0LjUgMTYuNy0yMi40IDI0LjVhMzUzLjg0IDM1My44NCAwIDAxLTExMi43IDc1LjlBMzUyLjggMzUyLjggMCAwMTUxMi40IDg2NmMtNDcuOSAwLTk0LjMtOS40LTEzNy45LTI3LjhhMzUzLjg0IDM1My44NCAwIDAxLTExMi43LTc1LjkgMzUzLjI4IDM1My4yOCAwIDAxLTc2LTExMi41QzE2Ny4zIDYwNi4yIDE1OCA1NTkuOSAxNTggNTEyczkuNC05NC4yIDI3LjgtMTM3LjhjMTcuOC00Mi4xIDQzLjQtODAgNzYtMTEyLjVzNzAuNS01OC4xIDExMi43LTc1LjljNDMuNi0xOC40IDkwLTI3LjggMTM3LjktMjcuOCA0Ny45IDAgOTQuMyA5LjMgMTM3LjkgMjcuOCA0Mi4yIDE3LjggODAuMSA0My40IDExMi43IDc1LjkgNy45IDcuOSAxNS4zIDE2LjEgMjIuNCAyNC41IDMgMy43IDcuNiA1LjggMTIuMyA1LjhIODY4YzYuMyAwIDEwLjItNyA2LjctMTIuM0M3OTggMTYwLjUgNjYzLjggODEuNiA1MTEuMyA4MiAyNzEuNyA4Mi42IDc5LjYgMjc3LjEgODIgNTE2LjQgODQuNCA3NTEuOSAyNzYuMiA5NDIgNTEyLjQgOTQyYzE1Mi4xIDAgMjg1LjctNzguOCAzNjIuMy0xOTcuNyAzLjQtNS4zLS40LTEyLjMtNi43LTEyLjN6bTg4LjktMjI2LjNMODE1IDM5My43Yy01LjMtNC4yLTEzLS40LTEzIDYuM3Y3Nkg0ODhjLTQuNCAwLTggMy42LTggOHY1NmMwIDQuNCAzLjYgOCA4IDhoMzE0djc2YzAgNi43IDcuOCAxMC41IDEzIDYuM2wxNDEuOS0xMTJhOCA4IDAgMDAwLTEyLjZ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJsb2dvdXRcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydCBkZWZhdWx0IExvZ291dE91dGxpbmVkO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbnZhciBJY29uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBkZWZhdWx0IEljb25Db250ZXh0OyIsImltcG9ydCB7IGlucHV0VG9SR0IsIHJnYlRvSGV4LCByZ2JUb0hzdiB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG5cbnZhciBodWVTdGVwID0gMjsgLy8g6Imy55u46Zi25qKvXG5cbnZhciBzYXR1cmF0aW9uU3RlcCA9IDAuMTY7IC8vIOmlseWSjOW6pumYtuair++8jOa1heiJsumDqOWIhlxuXG52YXIgc2F0dXJhdGlvblN0ZXAyID0gMC4wNTsgLy8g6aWx5ZKM5bqm6Zi25qKv77yM5rex6Imy6YOo5YiGXG5cbnZhciBicmlnaHRuZXNzU3RlcDEgPSAwLjA1OyAvLyDkuq7luqbpmLbmoq/vvIzmtYXoibLpg6jliIZcblxudmFyIGJyaWdodG5lc3NTdGVwMiA9IDAuMTU7IC8vIOS6ruW6pumYtuair++8jOa3seiJsumDqOWIhlxuXG52YXIgbGlnaHRDb2xvckNvdW50ID0gNTsgLy8g5rWF6Imy5pWw6YeP77yM5Li76Imy5LiKXG5cbnZhciBkYXJrQ29sb3JDb3VudCA9IDQ7IC8vIOa3seiJsuaVsOmHj++8jOS4u+iJsuS4i1xuLy8g5pqX6Imy5Li76aKY6aKc6Imy5pig5bCE5YWz57O76KGoXG5cbnZhciBkYXJrQ29sb3JNYXAgPSBbe1xuICBpbmRleDogNyxcbiAgb3BhY2l0eTogMC4xNVxufSwge1xuICBpbmRleDogNixcbiAgb3BhY2l0eTogMC4yNVxufSwge1xuICBpbmRleDogNSxcbiAgb3BhY2l0eTogMC4zXG59LCB7XG4gIGluZGV4OiA1LFxuICBvcGFjaXR5OiAwLjQ1XG59LCB7XG4gIGluZGV4OiA1LFxuICBvcGFjaXR5OiAwLjY1XG59LCB7XG4gIGluZGV4OiA1LFxuICBvcGFjaXR5OiAwLjg1XG59LCB7XG4gIGluZGV4OiA0LFxuICBvcGFjaXR5OiAwLjlcbn0sIHtcbiAgaW5kZXg6IDMsXG4gIG9wYWNpdHk6IDAuOTVcbn0sIHtcbiAgaW5kZXg6IDIsXG4gIG9wYWNpdHk6IDAuOTdcbn0sIHtcbiAgaW5kZXg6IDEsXG4gIG9wYWNpdHk6IDAuOThcbn1dOyAvLyBXcmFwcGVyIGZ1bmN0aW9uIHBvcnRlZCBmcm9tIFRpbnlDb2xvci5wcm90b3R5cGUudG9Ic3Zcbi8vIEtlZXAgaXQgaGVyZSBiZWNhdXNlIG9mIGBoc3YuaCAqIDM2MGBcblxuZnVuY3Rpb24gdG9Ic3YoX3JlZikge1xuICB2YXIgciA9IF9yZWYucixcbiAgICAgIGcgPSBfcmVmLmcsXG4gICAgICBiID0gX3JlZi5iO1xuICB2YXIgaHN2ID0gcmdiVG9Ic3YociwgZywgYik7XG4gIHJldHVybiB7XG4gICAgaDogaHN2LmggKiAzNjAsXG4gICAgczogaHN2LnMsXG4gICAgdjogaHN2LnZcbiAgfTtcbn0gLy8gV3JhcHBlciBmdW5jdGlvbiBwb3J0ZWQgZnJvbSBUaW55Q29sb3IucHJvdG90eXBlLnRvSGV4U3RyaW5nXG4vLyBLZWVwIGl0IGhlcmUgYmVjYXVzZSBvZiB0aGUgcHJlZml4IGAjYFxuXG5cbmZ1bmN0aW9uIHRvSGV4KF9yZWYyKSB7XG4gIHZhciByID0gX3JlZjIucixcbiAgICAgIGcgPSBfcmVmMi5nLFxuICAgICAgYiA9IF9yZWYyLmI7XG4gIHJldHVybiBcIiNcIi5jb25jYXQocmdiVG9IZXgociwgZywgYiwgZmFsc2UpKTtcbn0gLy8gV3JhcHBlciBmdW5jdGlvbiBwb3J0ZWQgZnJvbSBUaW55Q29sb3IucHJvdG90eXBlLm1peCwgbm90IHRyZWVzaGFrYWJsZS5cbi8vIEFtb3VudCBpbiByYW5nZSBbMCwgMV1cbi8vIEFzc3VtZSBjb2xvcjEgJiBjb2xvcjIgaGFzIG5vIGFscGhhLCBzaW5jZSB0aGUgZm9sbG93aW5nIHNyYyBjb2RlIGRpZCBzby5cblxuXG5mdW5jdGlvbiBtaXgocmdiMSwgcmdiMiwgYW1vdW50KSB7XG4gIHZhciBwID0gYW1vdW50IC8gMTAwO1xuICB2YXIgcmdiID0ge1xuICAgIHI6IChyZ2IyLnIgLSByZ2IxLnIpICogcCArIHJnYjEucixcbiAgICBnOiAocmdiMi5nIC0gcmdiMS5nKSAqIHAgKyByZ2IxLmcsXG4gICAgYjogKHJnYjIuYiAtIHJnYjEuYikgKiBwICsgcmdiMS5iXG4gIH07XG4gIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGdldEh1ZShoc3YsIGksIGxpZ2h0KSB7XG4gIHZhciBodWU7IC8vIOagueaNruiJsuebuOS4jeWQjO+8jOiJsuebuOi9rOWQkeS4jeWQjFxuXG4gIGlmIChNYXRoLnJvdW5kKGhzdi5oKSA+PSA2MCAmJiBNYXRoLnJvdW5kKGhzdi5oKSA8PSAyNDApIHtcbiAgICBodWUgPSBsaWdodCA/IE1hdGgucm91bmQoaHN2LmgpIC0gaHVlU3RlcCAqIGkgOiBNYXRoLnJvdW5kKGhzdi5oKSArIGh1ZVN0ZXAgKiBpO1xuICB9IGVsc2Uge1xuICAgIGh1ZSA9IGxpZ2h0ID8gTWF0aC5yb3VuZChoc3YuaCkgKyBodWVTdGVwICogaSA6IE1hdGgucm91bmQoaHN2LmgpIC0gaHVlU3RlcCAqIGk7XG4gIH1cblxuICBpZiAoaHVlIDwgMCkge1xuICAgIGh1ZSArPSAzNjA7XG4gIH0gZWxzZSBpZiAoaHVlID49IDM2MCkge1xuICAgIGh1ZSAtPSAzNjA7XG4gIH1cblxuICByZXR1cm4gaHVlO1xufVxuXG5mdW5jdGlvbiBnZXRTYXR1cmF0aW9uKGhzdiwgaSwgbGlnaHQpIHtcbiAgLy8gZ3JleSBjb2xvciBkb24ndCBjaGFuZ2Ugc2F0dXJhdGlvblxuICBpZiAoaHN2LmggPT09IDAgJiYgaHN2LnMgPT09IDApIHtcbiAgICByZXR1cm4gaHN2LnM7XG4gIH1cblxuICB2YXIgc2F0dXJhdGlvbjtcblxuICBpZiAobGlnaHQpIHtcbiAgICBzYXR1cmF0aW9uID0gaHN2LnMgLSBzYXR1cmF0aW9uU3RlcCAqIGk7XG4gIH0gZWxzZSBpZiAoaSA9PT0gZGFya0NvbG9yQ291bnQpIHtcbiAgICBzYXR1cmF0aW9uID0gaHN2LnMgKyBzYXR1cmF0aW9uU3RlcDtcbiAgfSBlbHNlIHtcbiAgICBzYXR1cmF0aW9uID0gaHN2LnMgKyBzYXR1cmF0aW9uU3RlcDIgKiBpO1xuICB9IC8vIOi+ueeVjOWAvOS/ruato1xuXG5cbiAgaWYgKHNhdHVyYXRpb24gPiAxKSB7XG4gICAgc2F0dXJhdGlvbiA9IDE7XG4gIH0gLy8g56ys5LiA5qC855qEIHMg6ZmQ5Yi25ZyoIDAuMDYtMC4xIOS5i+mXtFxuXG5cbiAgaWYgKGxpZ2h0ICYmIGkgPT09IGxpZ2h0Q29sb3JDb3VudCAmJiBzYXR1cmF0aW9uID4gMC4xKSB7XG4gICAgc2F0dXJhdGlvbiA9IDAuMTtcbiAgfVxuXG4gIGlmIChzYXR1cmF0aW9uIDwgMC4wNikge1xuICAgIHNhdHVyYXRpb24gPSAwLjA2O1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcihzYXR1cmF0aW9uLnRvRml4ZWQoMikpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZShoc3YsIGksIGxpZ2h0KSB7XG4gIHZhciB2YWx1ZTtcblxuICBpZiAobGlnaHQpIHtcbiAgICB2YWx1ZSA9IGhzdi52ICsgYnJpZ2h0bmVzc1N0ZXAxICogaTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGhzdi52IC0gYnJpZ2h0bmVzc1N0ZXAyICogaTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA+IDEpIHtcbiAgICB2YWx1ZSA9IDE7XG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHZhbHVlLnRvRml4ZWQoMikpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZShjb2xvcikge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBwYXR0ZXJucyA9IFtdO1xuICB2YXIgcENvbG9yID0gaW5wdXRUb1JHQihjb2xvcik7XG5cbiAgZm9yICh2YXIgaSA9IGxpZ2h0Q29sb3JDb3VudDsgaSA+IDA7IGkgLT0gMSkge1xuICAgIHZhciBoc3YgPSB0b0hzdihwQ29sb3IpO1xuICAgIHZhciBjb2xvclN0cmluZyA9IHRvSGV4KGlucHV0VG9SR0Ioe1xuICAgICAgaDogZ2V0SHVlKGhzdiwgaSwgdHJ1ZSksXG4gICAgICBzOiBnZXRTYXR1cmF0aW9uKGhzdiwgaSwgdHJ1ZSksXG4gICAgICB2OiBnZXRWYWx1ZShoc3YsIGksIHRydWUpXG4gICAgfSkpO1xuICAgIHBhdHRlcm5zLnB1c2goY29sb3JTdHJpbmcpO1xuICB9XG5cbiAgcGF0dGVybnMucHVzaCh0b0hleChwQ29sb3IpKTtcblxuICBmb3IgKHZhciBfaSA9IDE7IF9pIDw9IGRhcmtDb2xvckNvdW50OyBfaSArPSAxKSB7XG4gICAgdmFyIF9oc3YgPSB0b0hzdihwQ29sb3IpO1xuXG4gICAgdmFyIF9jb2xvclN0cmluZyA9IHRvSGV4KGlucHV0VG9SR0Ioe1xuICAgICAgaDogZ2V0SHVlKF9oc3YsIF9pKSxcbiAgICAgIHM6IGdldFNhdHVyYXRpb24oX2hzdiwgX2kpLFxuICAgICAgdjogZ2V0VmFsdWUoX2hzdiwgX2kpXG4gICAgfSkpO1xuXG4gICAgcGF0dGVybnMucHVzaChfY29sb3JTdHJpbmcpO1xuICB9IC8vIGRhcmsgdGhlbWUgcGF0dGVybnNcblxuXG4gIGlmIChvcHRzLnRoZW1lID09PSAnZGFyaycpIHtcbiAgICByZXR1cm4gZGFya0NvbG9yTWFwLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBpbmRleCA9IF9yZWYzLmluZGV4LFxuICAgICAgICAgIG9wYWNpdHkgPSBfcmVmMy5vcGFjaXR5O1xuICAgICAgdmFyIGRhcmtDb2xvclN0cmluZyA9IHRvSGV4KG1peChpbnB1dFRvUkdCKG9wdHMuYmFja2dyb3VuZENvbG9yIHx8ICcjMTQxNDE0JyksIGlucHV0VG9SR0IocGF0dGVybnNbaW5kZXhdKSwgb3BhY2l0eSAqIDEwMCkpO1xuICAgICAgcmV0dXJuIGRhcmtDb2xvclN0cmluZztcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJucztcbn1cblxudmFyIHByZXNldFByaW1hcnlDb2xvcnMgPSB7XG4gIHJlZDogJyNGNTIyMkQnLFxuICB2b2xjYW5vOiAnI0ZBNTQxQycsXG4gIG9yYW5nZTogJyNGQThDMTYnLFxuICBnb2xkOiAnI0ZBQUQxNCcsXG4gIHllbGxvdzogJyNGQURCMTQnLFxuICBsaW1lOiAnI0EwRDkxMScsXG4gIGdyZWVuOiAnIzUyQzQxQScsXG4gIGN5YW46ICcjMTNDMkMyJyxcbiAgYmx1ZTogJyMxODkwRkYnLFxuICBnZWVrYmx1ZTogJyMyRjU0RUInLFxuICBwdXJwbGU6ICcjNzIyRUQxJyxcbiAgbWFnZW50YTogJyNFQjJGOTYnLFxuICBncmV5OiAnIzY2NjY2Nidcbn07XG52YXIgcHJlc2V0UGFsZXR0ZXMgPSB7fTtcbnZhciBwcmVzZXREYXJrUGFsZXR0ZXMgPSB7fTtcbk9iamVjdC5rZXlzKHByZXNldFByaW1hcnlDb2xvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBwcmVzZXRQYWxldHRlc1trZXldID0gZ2VuZXJhdGUocHJlc2V0UHJpbWFyeUNvbG9yc1trZXldKTtcbiAgcHJlc2V0UGFsZXR0ZXNba2V5XS5wcmltYXJ5ID0gcHJlc2V0UGFsZXR0ZXNba2V5XVs1XTsgLy8gZGFyayBwcmVzZXRQYWxldHRlc1xuXG4gIHByZXNldERhcmtQYWxldHRlc1trZXldID0gZ2VuZXJhdGUocHJlc2V0UHJpbWFyeUNvbG9yc1trZXldLCB7XG4gICAgdGhlbWU6ICdkYXJrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTQxNDE0J1xuICB9KTtcbiAgcHJlc2V0RGFya1BhbGV0dGVzW2tleV0ucHJpbWFyeSA9IHByZXNldERhcmtQYWxldHRlc1trZXldWzVdO1xufSk7XG52YXIgcmVkID0gcHJlc2V0UGFsZXR0ZXMucmVkO1xudmFyIHZvbGNhbm8gPSBwcmVzZXRQYWxldHRlcy52b2xjYW5vO1xudmFyIGdvbGQgPSBwcmVzZXRQYWxldHRlcy5nb2xkO1xudmFyIG9yYW5nZSA9IHByZXNldFBhbGV0dGVzLm9yYW5nZTtcbnZhciB5ZWxsb3cgPSBwcmVzZXRQYWxldHRlcy55ZWxsb3c7XG52YXIgbGltZSA9IHByZXNldFBhbGV0dGVzLmxpbWU7XG52YXIgZ3JlZW4gPSBwcmVzZXRQYWxldHRlcy5ncmVlbjtcbnZhciBjeWFuID0gcHJlc2V0UGFsZXR0ZXMuY3lhbjtcbnZhciBibHVlID0gcHJlc2V0UGFsZXR0ZXMuYmx1ZTtcbnZhciBnZWVrYmx1ZSA9IHByZXNldFBhbGV0dGVzLmdlZWtibHVlO1xudmFyIHB1cnBsZSA9IHByZXNldFBhbGV0dGVzLnB1cnBsZTtcbnZhciBtYWdlbnRhID0gcHJlc2V0UGFsZXR0ZXMubWFnZW50YTtcbnZhciBncmV5ID0gcHJlc2V0UGFsZXR0ZXMuZ3JleTtcblxuZXhwb3J0IHsgYmx1ZSwgY3lhbiwgZ2Vla2JsdWUsIGdlbmVyYXRlLCBnb2xkLCBncmVlbiwgZ3JleSwgbGltZSwgbWFnZW50YSwgb3JhbmdlLCBwcmVzZXREYXJrUGFsZXR0ZXMsIHByZXNldFBhbGV0dGVzLCBwcmVzZXRQcmltYXJ5Q29sb3JzLCBwdXJwbGUsIHJlZCwgdm9sY2FubywgeWVsbG93IH07XG4iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGUgYXMgZ2VuZXJhdGVDb2xvciB9IGZyb20gJ0BhbnQtZGVzaWduL2NvbG9ycyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdhcm4gZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IHsgdXBkYXRlQ1NTIH0gZnJvbSBcInJjLXV0aWwvZXMvRG9tL2R5bmFtaWNDU1NcIjtcbmltcG9ydCBJY29uQ29udGV4dCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9jYW1lbENhc2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcodmFsaWQsIG1lc3NhZ2UpIHtcbiAgd2Fybih2YWxpZCwgXCJbQGFudC1kZXNpZ24vaWNvbnNdIFwiLmNvbmNhdChtZXNzYWdlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJY29uRGVmaW5pdGlvbih0YXJnZXQpIHtcbiAgcmV0dXJuIF90eXBlb2YodGFyZ2V0KSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldC5uYW1lID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdGFyZ2V0LnRoZW1lID09PSAnc3RyaW5nJyAmJiAoX3R5cGVvZih0YXJnZXQuaWNvbikgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB0YXJnZXQuaWNvbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQXR0cnMoKSB7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciB2YWwgPSBhdHRyc1trZXldO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgIGFjYy5jbGFzc05hbWUgPSB2YWw7XG4gICAgICAgIGRlbGV0ZSBhY2MuY2xhc3M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGVsZXRlIGFjY1trZXldO1xuICAgICAgICBhY2NbY2FtZWxDYXNlKGtleSldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGUobm9kZSwga2V5LCByb290UHJvcHMpIHtcbiAgaWYgKCFyb290UHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcsIF9vYmplY3RTcHJlYWQoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCBub3JtYWxpemVBdHRycyhub2RlLmF0dHJzKSksIChub2RlLmNoaWxkcmVuIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlKGNoaWxkLCBcIlwiLmNvbmNhdChrZXksIFwiLVwiKS5jb25jYXQobm9kZS50YWcsIFwiLVwiKS5jb25jYXQoaW5kZXgpKTtcbiAgICB9KSk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KG5vZGUudGFnLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgIGtleToga2V5XG4gIH0sIG5vcm1hbGl6ZUF0dHJzKG5vZGUuYXR0cnMpKSwgcm9vdFByb3BzKSwgKG5vZGUuY2hpbGRyZW4gfHwgW10pLm1hcChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlKGNoaWxkLCBcIlwiLmNvbmNhdChrZXksIFwiLVwiKS5jb25jYXQobm9kZS50YWcsIFwiLVwiKS5jb25jYXQoaW5kZXgpKTtcbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZGFyeUNvbG9yKHByaW1hcnlDb2xvcikge1xuICAvLyBjaG9vc2UgdGhlIHNlY29uZCBjb2xvclxuICByZXR1cm4gZ2VuZXJhdGVDb2xvcihwcmltYXJ5Q29sb3IpWzBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVR3b1RvbmVDb2xvcnModHdvVG9uZUNvbG9yKSB7XG4gIGlmICghdHdvVG9uZUNvbG9yKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHR3b1RvbmVDb2xvcikgPyB0d29Ub25lQ29sb3IgOiBbdHdvVG9uZUNvbG9yXTtcbn1cbi8vIFRoZXNlIHByb3BzIG1ha2Ugc3VyZSB0aGF0IHRoZSBTVkcgYmVoYXZpb3VycyBsaWtlIGdlbmVyYWwgdGV4dC5cbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9ibG9nLnByb3RvdHlwci5pby9hbGlnbi1zdmctaWNvbnMtdG8tdGV4dC1hbmQtc2F5LWdvb2RieWUtdG8tZm9udC1pY29ucy1kNDRiM2Q3YjI2YjRcbmV4cG9ydCB2YXIgc3ZnQmFzZVByb3BzID0ge1xuICB3aWR0aDogJzFlbScsXG4gIGhlaWdodDogJzFlbScsXG4gIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gIGZvY3VzYWJsZTogJ2ZhbHNlJ1xufTtcbmV4cG9ydCB2YXIgaWNvblN0eWxlcyA9IFwiXFxuLmFudGljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbkl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uYW50aWNvbiA+ICoge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5hbnRpY29uIHN2ZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5hbnRpY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFudGljb24gLmFudGljb24taWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmFudGljb25bdGFiaW5kZXhdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFudGljb24tc3Bpbjo6YmVmb3JlLFxcbi5hbnRpY29uLXNwaW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiO1xuZXhwb3J0IHZhciB1c2VJbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiB1c2VJbnNlcnRTdHlsZXMoKSB7XG4gIHZhciBzdHlsZVN0ciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaWNvblN0eWxlcztcbiAgdmFyIF91c2VDb250ZXh0ID0gdXNlQ29udGV4dChJY29uQ29udGV4dCksXG4gICAgY3NwID0gX3VzZUNvbnRleHQuY3NwO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZUNTUyhzdHlsZVN0ciwgJ0BhbnQtZGVzaWduLWljb25zJywge1xuICAgICAgcHJlcGVuZDogdHJ1ZSxcbiAgICAgIGNzcDogY3NwXG4gICAgfSk7XG4gIH0sIFtdKTtcbn07IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiaWNvblwiLCBcImNsYXNzTmFtZVwiLCBcIm9uQ2xpY2tcIiwgXCJzdHlsZVwiLCBcInByaW1hcnlDb2xvclwiLCBcInNlY29uZGFyeUNvbG9yXCJdO1xuaW1wb3J0IHsgZ2VuZXJhdGUsIGdldFNlY29uZGFyeUNvbG9yLCBpc0ljb25EZWZpbml0aW9uLCB3YXJuaW5nLCB1c2VJbnNlcnRTdHlsZXMgfSBmcm9tICcuLi91dGlscyc7XG52YXIgdHdvVG9uZUNvbG9yUGFsZXR0ZSA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnIzMzMycsXG4gIHNlY29uZGFyeUNvbG9yOiAnI0U2RTZFNicsXG4gIGNhbGN1bGF0ZWQ6IGZhbHNlXG59O1xuZnVuY3Rpb24gc2V0VHdvVG9uZUNvbG9ycyhfcmVmKSB7XG4gIHZhciBwcmltYXJ5Q29sb3IgPSBfcmVmLnByaW1hcnlDb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvciA9IF9yZWYuc2Vjb25kYXJ5Q29sb3I7XG4gIHR3b1RvbmVDb2xvclBhbGV0dGUucHJpbWFyeUNvbG9yID0gcHJpbWFyeUNvbG9yO1xuICB0d29Ub25lQ29sb3JQYWxldHRlLnNlY29uZGFyeUNvbG9yID0gc2Vjb25kYXJ5Q29sb3IgfHwgZ2V0U2Vjb25kYXJ5Q29sb3IocHJpbWFyeUNvbG9yKTtcbiAgdHdvVG9uZUNvbG9yUGFsZXR0ZS5jYWxjdWxhdGVkID0gISFzZWNvbmRhcnlDb2xvcjtcbn1cbmZ1bmN0aW9uIGdldFR3b1RvbmVDb2xvcnMoKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCB0d29Ub25lQ29sb3JQYWxldHRlKTtcbn1cbnZhciBJY29uQmFzZSA9IGZ1bmN0aW9uIEljb25CYXNlKHByb3BzKSB7XG4gIHZhciBpY29uID0gcHJvcHMuaWNvbixcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICBwcmltYXJ5Q29sb3IgPSBwcm9wcy5wcmltYXJ5Q29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3IgPSBwcm9wcy5zZWNvbmRhcnlDb2xvcixcbiAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG4gIHZhciBjb2xvcnMgPSB0d29Ub25lQ29sb3JQYWxldHRlO1xuICBpZiAocHJpbWFyeUNvbG9yKSB7XG4gICAgY29sb3JzID0ge1xuICAgICAgcHJpbWFyeUNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogc2Vjb25kYXJ5Q29sb3IgfHwgZ2V0U2Vjb25kYXJ5Q29sb3IocHJpbWFyeUNvbG9yKVxuICAgIH07XG4gIH1cbiAgdXNlSW5zZXJ0U3R5bGVzKCk7XG4gIHdhcm5pbmcoaXNJY29uRGVmaW5pdGlvbihpY29uKSwgXCJpY29uIHNob3VsZCBiZSBpY29uIGRlZmluaXRvbiwgYnV0IGdvdCBcIi5jb25jYXQoaWNvbikpO1xuICBpZiAoIWlzSWNvbkRlZmluaXRpb24oaWNvbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgdGFyZ2V0ID0gaWNvbjtcbiAgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0Lmljb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0YXJnZXQgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRhcmdldCksIHt9LCB7XG4gICAgICBpY29uOiB0YXJnZXQuaWNvbihjb2xvcnMucHJpbWFyeUNvbG9yLCBjb2xvcnMuc2Vjb25kYXJ5Q29sb3IpXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGdlbmVyYXRlKHRhcmdldC5pY29uLCBcInN2Zy1cIi5jb25jYXQodGFyZ2V0Lm5hbWUpLCBfb2JqZWN0U3ByZWFkKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICAnZGF0YS1pY29uJzogdGFyZ2V0Lm5hbWUsXG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gIH0sIHJlc3RQcm9wcykpO1xufTtcbkljb25CYXNlLmRpc3BsYXlOYW1lID0gJ0ljb25SZWFjdCc7XG5JY29uQmFzZS5nZXRUd29Ub25lQ29sb3JzID0gZ2V0VHdvVG9uZUNvbG9ycztcbkljb25CYXNlLnNldFR3b1RvbmVDb2xvcnMgPSBzZXRUd29Ub25lQ29sb3JzO1xuZXhwb3J0IGRlZmF1bHQgSWNvbkJhc2U7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgUmVhY3RJY29uIGZyb20gJy4vSWNvbkJhc2UnO1xuaW1wb3J0IHsgbm9ybWFsaXplVHdvVG9uZUNvbG9ycyB9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiBzZXRUd29Ub25lQ29sb3IodHdvVG9uZUNvbG9yKSB7XG4gIHZhciBfbm9ybWFsaXplVHdvVG9uZUNvbG8gPSBub3JtYWxpemVUd29Ub25lQ29sb3JzKHR3b1RvbmVDb2xvciksXG4gICAgX25vcm1hbGl6ZVR3b1RvbmVDb2xvMiA9IF9zbGljZWRUb0FycmF5KF9ub3JtYWxpemVUd29Ub25lQ29sbywgMiksXG4gICAgcHJpbWFyeUNvbG9yID0gX25vcm1hbGl6ZVR3b1RvbmVDb2xvMlswXSxcbiAgICBzZWNvbmRhcnlDb2xvciA9IF9ub3JtYWxpemVUd29Ub25lQ29sbzJbMV07XG4gIHJldHVybiBSZWFjdEljb24uc2V0VHdvVG9uZUNvbG9ycyh7XG4gICAgcHJpbWFyeUNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IHNlY29uZGFyeUNvbG9yXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR3b1RvbmVDb2xvcigpIHtcbiAgdmFyIGNvbG9ycyA9IFJlYWN0SWNvbi5nZXRUd29Ub25lQ29sb3JzKCk7XG4gIGlmICghY29sb3JzLmNhbGN1bGF0ZWQpIHtcbiAgICByZXR1cm4gY29sb3JzLnByaW1hcnlDb2xvcjtcbiAgfVxuICByZXR1cm4gW2NvbG9ycy5wcmltYXJ5Q29sb3IsIGNvbG9ycy5zZWNvbmRhcnlDb2xvcl07XG59IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiY2xhc3NOYW1lXCIsIFwiaWNvblwiLCBcInNwaW5cIiwgXCJyb3RhdGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIiwgXCJ0d29Ub25lQ29sb3JcIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgUmVhY3RJY29uIGZyb20gJy4vSWNvbkJhc2UnO1xuaW1wb3J0IHsgZ2V0VHdvVG9uZUNvbG9yLCBzZXRUd29Ub25lQ29sb3IgfSBmcm9tICcuL3R3b1RvbmVQcmltYXJ5Q29sb3InO1xuaW1wb3J0IHsgbm9ybWFsaXplVHdvVG9uZUNvbG9ycyB9IGZyb20gJy4uL3V0aWxzJztcbi8vIEluaXRpYWwgc2V0dGluZ1xuLy8gc2hvdWxkIG1vdmUgaXQgdG8gYW50ZCBtYWluIHJlcG8/XG5zZXRUd29Ub25lQ29sb3IoJyMxODkwZmYnKTtcbnZhciBJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICBzcGluID0gcHJvcHMuc3BpbixcbiAgICByb3RhdGUgPSBwcm9wcy5yb3RhdGUsXG4gICAgdGFiSW5kZXggPSBwcm9wcy50YWJJbmRleCxcbiAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICB0d29Ub25lQ29sb3IgPSBwcm9wcy50d29Ub25lQ29sb3IsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpLFxuICAgIF9SZWFjdCR1c2VDb250ZXh0JHByZSA9IF9SZWFjdCR1c2VDb250ZXh0LnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dCRwcmUgPT09IHZvaWQgMCA/ICdhbnRpY29uJyA6IF9SZWFjdCR1c2VDb250ZXh0JHByZSxcbiAgICByb290Q2xhc3NOYW1lID0gX1JlYWN0JHVzZUNvbnRleHQucm9vdENsYXNzTmFtZTtcbiAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhyb290Q2xhc3NOYW1lLCBwcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChpY29uLm5hbWUpLCAhIWljb24ubmFtZSksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3BpblwiKSwgISFzcGluIHx8IGljb24ubmFtZSA9PT0gJ2xvYWRpbmcnKSwgY2xhc3NOYW1lKTtcbiAgdmFyIGljb25UYWJJbmRleCA9IHRhYkluZGV4O1xuICBpZiAoaWNvblRhYkluZGV4ID09PSB1bmRlZmluZWQgJiYgb25DbGljaykge1xuICAgIGljb25UYWJJbmRleCA9IC0xO1xuICB9XG4gIHZhciBzdmdTdHlsZSA9IHJvdGF0ZSA/IHtcbiAgICBtc1RyYW5zZm9ybTogXCJyb3RhdGUoXCIuY29uY2F0KHJvdGF0ZSwgXCJkZWcpXCIpLFxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoXCIuY29uY2F0KHJvdGF0ZSwgXCJkZWcpXCIpXG4gIH0gOiB1bmRlZmluZWQ7XG4gIHZhciBfbm9ybWFsaXplVHdvVG9uZUNvbG8gPSBub3JtYWxpemVUd29Ub25lQ29sb3JzKHR3b1RvbmVDb2xvciksXG4gICAgX25vcm1hbGl6ZVR3b1RvbmVDb2xvMiA9IF9zbGljZWRUb0FycmF5KF9ub3JtYWxpemVUd29Ub25lQ29sbywgMiksXG4gICAgcHJpbWFyeUNvbG9yID0gX25vcm1hbGl6ZVR3b1RvbmVDb2xvMlswXSxcbiAgICBzZWNvbmRhcnlDb2xvciA9IF9ub3JtYWxpemVUd29Ub25lQ29sbzJbMV07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICByb2xlOiBcImltZ1wiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBpY29uLm5hbWVcbiAgfSwgcmVzdFByb3BzKSwge30sIHtcbiAgICByZWY6IHJlZixcbiAgICB0YWJJbmRleDogaWNvblRhYkluZGV4LFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RJY29uLCB7XG4gICAgaWNvbjogaWNvbixcbiAgICBwcmltYXJ5Q29sb3I6IHByaW1hcnlDb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogc2Vjb25kYXJ5Q29sb3IsXG4gICAgc3R5bGU6IHN2Z1N0eWxlXG4gIH0pKTtcbn0pO1xuSWNvbi5kaXNwbGF5TmFtZSA9ICdBbnRkSWNvbic7XG5JY29uLmdldFR3b1RvbmVDb2xvciA9IGdldFR3b1RvbmVDb2xvcjtcbkljb24uc2V0VHdvVG9uZUNvbG9yID0gc2V0VHdvVG9uZUNvbG9yO1xuZXhwb3J0IGRlZmF1bHQgSWNvbjsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dvdXRPdXRsaW5lZFN2ZyBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2VzL2Fzbi9Mb2dvdXRPdXRsaW5lZFwiO1xuaW1wb3J0IEFudGRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvQW50ZEljb24nO1xudmFyIExvZ291dE91dGxpbmVkID0gZnVuY3Rpb24gTG9nb3V0T3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZEljb24sIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IExvZ291dE91dGxpbmVkU3ZnXG4gIH0pKTtcbn07XG52YXIgUmVmSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKExvZ291dE91dGxpbmVkKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlZkljb24uZGlzcGxheU5hbWUgPSAnTG9nb3V0T3V0bGluZWQnO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVmSWNvbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///57764
`)},47930:function(__unused_webpack_module,exports){eval(`var __webpack_unused_export__;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_unused_export__ = ({
  value: true
});
exports.Bo = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
/**
 * Tokenize input string.
 */

function lexer(str) {
  var tokens = [];
  var i = 0;

  while (i < str.length) {
    var char = str[i];

    if (char === '*' || char === '+' || char === '?') {
      tokens.push({
        type: 'MODIFIER',
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === '\\\\') {
      tokens.push({
        type: 'ESCAPED_CHAR',
        index: i++,
        value: str[i++]
      });
      continue;
    }

    if (char === '{') {
      tokens.push({
        type: 'OPEN',
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === '}') {
      tokens.push({
        type: 'CLOSE',
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === ':') {
      var name = '';
      var j = i + 1;

      while (j < str.length) {
        var code = str.charCodeAt(j);

        if ( // \`0-9\`
        code >= 48 && code <= 57 || // \`A-Z\`
        code >= 65 && code <= 90 || // \`a-z\`
        code >= 97 && code <= 122 || // \`_\`
        code === 95) {
          name += str[j++];
          continue;
        }

        break;
      }

      if (!name) throw new TypeError('Missing parameter name at ' + i);
      tokens.push({
        type: 'NAME',
        index: i,
        value: name
      });
      i = j;
      continue;
    }

    if (char === '(') {
      var count = 1;
      var pattern = '';
      var j = i + 1;

      if (str[j] === '?') {
        throw new TypeError('Pattern cannot start with "?" at ' + j);
      }

      while (j < str.length) {
        if (str[j] === '\\\\') {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (str[j] === ')') {
          count--;

          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === '(') {
          count++;

          if (str[j + 1] !== '?') {
            throw new TypeError('Capturing groups are not allowed at ' + j);
          }
        }

        pattern += str[j++];
      }

      if (count) throw new TypeError('Unbalanced pattern at ' + i);
      if (!pattern) throw new TypeError('Missing pattern at ' + i);
      tokens.push({
        type: 'PATTERN',
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }

    tokens.push({
      type: 'CHAR',
      index: i,
      value: str[i++]
    });
  }

  tokens.push({
    type: 'END',
    index: i,
    value: ''
  });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */


function parse(str, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var tokens = lexer(str);
  var _a = options.prefixes,
      prefixes = _a === void 0 ? './' : _a;
  var defaultPattern = '[^' + escapeString(options.delimiter || '/#?') + ']+?';
  var result = [];
  var key = 0;
  var i = 0;
  var path = '';

  var tryConsume = function tryConsume(type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };

  var mustConsume = function mustConsume(type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
        nextType = _a.type,
        index = _a.index;
    throw new TypeError('Unexpected ' + nextType + ' at ' + index + ', expected ' + type);
  };

  var consumeText = function consumeText() {
    var result = '';
    var value; // tslint:disable-next-line

    while (value = tryConsume('CHAR') || tryConsume('ESCAPED_CHAR')) {
      result += value;
    }

    return result;
  };

  while (i < tokens.length) {
    var char = tryConsume('CHAR');
    var name = tryConsume('NAME');
    var pattern = tryConsume('PATTERN');

    if (name || pattern) {
      var prefix = char || '';

      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = '';
      }

      if (path) {
        result.push(path);
        path = '';
      }

      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: '',
        pattern: pattern || defaultPattern,
        modifier: tryConsume('MODIFIER') || ''
      });
      continue;
    }

    var value = char || tryConsume('ESCAPED_CHAR');

    if (value) {
      path += value;
      continue;
    }

    if (path) {
      result.push(path);
      path = '';
    }

    var open = tryConsume('OPEN');

    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume('NAME') || '';
      var pattern_1 = tryConsume('PATTERN') || '';
      var suffix = consumeText();
      mustConsume('CLOSE');
      result.push({
        name: name_1 || (pattern_1 ? key++ : ''),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume('MODIFIER') || ''
      });
      continue;
    }

    mustConsume('END');
  }

  return result;
}

__webpack_unused_export__ = parse;
/**
 * Compile a string to a template function for the path.
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}

__webpack_unused_export__ = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */

function tokensToFunction(tokens, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var reFlags = flags(options);
  var _a = options.encode,
      encode = _a === void 0 ? function (x) {
    return x;
  } : _a,
      _b = options.validate,
      validate = _b === void 0 ? true : _b; // Compile all the tokens into regexps.

  var matches = tokens.map(function (token) {
    if (_typeof(token) === 'object') {
      return new RegExp('^(?:' + token.pattern + ')$', reFlags);
    }
  });
  return function (data) {
    var path = '';

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === '?' || token.modifier === '*';
      var repeat = token.modifier === '*' || token.modifier === '+';

      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
        }

        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
          }

          path += token.prefix + segment + token.suffix;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number') {
        var segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment + token.suffix;
        continue;
      }

      if (optional) continue;
      var typeOfMessage = repeat ? 'an array' : 'a string';
      throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
    }

    return path;
  };
}

__webpack_unused_export__ = tokensToFunction;
/**
 * Create path match function from \`path-to-regexp\` spec.
 */

function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}

__webpack_unused_export__ = match;
/**
 * Create a path match function from \`path-to-regexp\` output.
 */

function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var _a = options.decode,
      decode = _a === void 0 ? function (x) {
    return x;
  } : _a;
  return function (pathname) {
    var m = re.exec(pathname);
    if (!m) return false;
    var path = m[0],
        index = m.index;
    var params = Object.create(null);

    var _loop_1 = function _loop_1(i) {
      // tslint:disable-next-line
      if (m[i] === undefined) return 'continue';
      var key = keys[i - 1];

      if (key.modifier === '*' || key.modifier === '+') {
        params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i], key);
      }
    };

    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }

    return {
      path: path,
      index: index,
      params: params
    };
  };
}

__webpack_unused_export__ = regexpToFunction;
/**
 * Escape a regular expression string.
 */

function escapeString(str) {
  return str.replace(/([.+*?=^!:\${}()[\\]|/\\\\])/g, '\\\\$1');
}
/**
 * Get the flags for a regexp from the options.
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\\((?!\\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: '',
        suffix: '',
        modifier: '',
        pattern: ''
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 */


function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function (path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */


function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var _a = options.strict,
      strict = _a === void 0 ? false : _a,
      _b = options.start,
      start = _b === void 0 ? true : _b,
      _c = options.end,
      end = _c === void 0 ? true : _c,
      _d = options.encode,
      encode = _d === void 0 ? function (x) {
    return x;
  } : _d;
  var endsWith = '[' + escapeString(options.endsWith || '') + ']|$';
  var delimiter = '[' + escapeString(options.delimiter || '/#?') + ']';
  var route = start ? '^' : ''; // Iterate over the tokens and create our regexp string.

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    if (typeof token === 'string') {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));

      if (token.pattern) {
        if (keys) keys.push(token);

        if (prefix || suffix) {
          if (token.modifier === '+' || token.modifier === '*') {
            var mod = token.modifier === '*' ? '?' : '';
            route += '(?:' + prefix + '((?:' + token.pattern + ')(?:' + suffix + prefix + '(?:' + token.pattern + '))*)' + suffix + ')' + mod;
          } else {
            route += '(?:' + prefix + '(' + token.pattern + ')' + suffix + ')' + token.modifier;
          }
        } else {
          route += '(' + token.pattern + ')' + token.modifier;
        }
      } else {
        route += '(?:' + prefix + suffix + ')' + token.modifier;
      }
    }
  }

  if (end) {
    if (!strict) route += delimiter + '?';
    route += !options.endsWith ? '$' : '(?=' + endsWith + ')';
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === 'string' ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : // tslint:disable-next-line
    endToken === undefined;

    if (!strict) {
      route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    }

    if (!isEndDelimited) {
      route += '(?=' + delimiter + '|' + endsWith + ')';
    }
  }

  return new RegExp(route, flags(options));
}

__webpack_unused_export__ = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using \`/user/:id\`, \`keys\` will
 * contain \`[{ name: 'id', delimiter: '/', optional: false, repeat: false }]\`.
 */

function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}

exports.Bo = pathToRegexp;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQTREO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVtaWpzL3JvdXRlLXV0aWxzL2VzL3BhdGgtdG8tcmVnZXhwLmpzP2E5NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IGV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IGV4cG9ydHMubWF0Y2ggPSBleHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSBleHBvcnRzLmNvbXBpbGUgPSBleHBvcnRzLnBhcnNlID0gdm9pZCAwO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cblxuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gIHZhciB0b2tlbnMgPSBbXTtcbiAgdmFyIGkgPSAwO1xuXG4gIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgIHZhciBjaGFyID0gc3RyW2ldO1xuXG4gICAgaWYgKGNoYXIgPT09ICcqJyB8fCBjaGFyID09PSAnKycgfHwgY2hhciA9PT0gJz8nKSB7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdNT0RJRklFUicsXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICB2YWx1ZTogc3RyW2krK11cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT09ICdcXFxcJykge1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnRVNDQVBFRF9DSEFSJyxcbiAgICAgICAgaW5kZXg6IGkrKyxcbiAgICAgICAgdmFsdWU6IHN0cltpKytdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFyID09PSAneycpIHtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ09QRU4nLFxuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgdmFsdWU6IHN0cltpKytdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFyID09PSAnfScpIHtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ0NMT1NFJyxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIHZhbHVlOiBzdHJbaSsrXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PT0gJzonKSB7XG4gICAgICB2YXIgbmFtZSA9ICcnO1xuICAgICAgdmFyIGogPSBpICsgMTtcblxuICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG5cbiAgICAgICAgaWYgKCAvLyBgMC05YFxuICAgICAgICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHwgLy8gYEEtWmBcbiAgICAgICAgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8IC8vIGBhLXpgXG4gICAgICAgIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIgfHwgLy8gYF9gXG4gICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBUeXBlRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgJyArIGkpO1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnTkFNRScsXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICB2YWx1ZTogbmFtZVxuICAgICAgfSk7XG4gICAgICBpID0gajtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICB2YXIgcGF0dGVybiA9ICcnO1xuICAgICAgdmFyIGogPSBpICsgMTtcblxuICAgICAgaWYgKHN0cltqXSA9PT0gJz8nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXCI/XCIgYXQgJyArIGopO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHN0cltqXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cltqXSA9PT0gJyknKSB7XG4gICAgICAgICAgY291bnQtLTtcblxuICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0cltqXSA9PT0gJygnKSB7XG4gICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSAnPycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0ICcgKyBqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgfVxuXG4gICAgICBpZiAoY291bnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuYmFsYW5jZWQgcGF0dGVybiBhdCAnICsgaSk7XG4gICAgICBpZiAoIXBhdHRlcm4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ01pc3NpbmcgcGF0dGVybiBhdCAnICsgaSk7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdQQVRURVJOJyxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIHZhbHVlOiBwYXR0ZXJuXG4gICAgICB9KTtcbiAgICAgIGkgPSBqO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ0NIQVInLFxuICAgICAgaW5kZXg6IGksXG4gICAgICB2YWx1ZTogc3RyW2krK11cbiAgICB9KTtcbiAgfVxuXG4gIHRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnRU5EJyxcbiAgICBpbmRleDogaSxcbiAgICB2YWx1ZTogJydcbiAgfSk7XG4gIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsXG4gICAgICBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyAnLi8nIDogX2E7XG4gIHZhciBkZWZhdWx0UGF0dGVybiA9ICdbXicgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8jPycpICsgJ10rPyc7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleSA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHBhdGggPSAnJztcblxuICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uIHRyeUNvbnN1bWUodHlwZSkge1xuICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSkgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICB9O1xuXG4gIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uIG11c3RDb25zdW1lKHR5cGUpIHtcbiAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdmFsdWU7XG4gICAgdmFyIF9hID0gdG9rZW5zW2ldLFxuICAgICAgICBuZXh0VHlwZSA9IF9hLnR5cGUsXG4gICAgICAgIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5leHBlY3RlZCAnICsgbmV4dFR5cGUgKyAnIGF0ICcgKyBpbmRleCArICcsIGV4cGVjdGVkICcgKyB0eXBlKTtcbiAgfTtcblxuICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiBjb25zdW1lVGV4dCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHdoaWxlICh2YWx1ZSA9IHRyeUNvbnN1bWUoJ0NIQVInKSB8fCB0cnlDb25zdW1lKCdFU0NBUEVEX0NIQVInKSkge1xuICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKCdDSEFSJyk7XG4gICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKCdOQU1FJyk7XG4gICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKCdQQVRURVJOJyk7XG5cbiAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCAnJztcblxuICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAocGF0aCkge1xuICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgcGF0aCA9ICcnO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBzdWZmaXg6ICcnLFxuICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZSgnTU9ESUZJRVInKSB8fCAnJ1xuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoJ0VTQ0FQRURfQ0hBUicpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgcGF0aCA9ICcnO1xuICAgIH1cblxuICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZSgnT1BFTicpO1xuXG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoJ05BTUUnKSB8fCAnJztcbiAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKCdQQVRURVJOJykgfHwgJyc7XG4gICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgIG11c3RDb25zdW1lKCdDTE9TRScpO1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogJycpLFxuICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKCdNT0RJRklFUicpIHx8ICcnXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG11c3RDb25zdW1lKCdFTkQnKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLFxuICAgICAgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gOiBfYSxcbiAgICAgIF9iID0gb3B0aW9ucy52YWxpZGF0ZSxcbiAgICAgIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjsgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG5cbiAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmIChfdHlwZW9mKHRva2VuKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSQnLCByZUZsYWdzKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgcGF0aCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09ICc/JyB8fCB0b2tlbi5tb2RpZmllciA9PT0gJyonO1xuICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSAnKicgfHwgdG9rZW4ubW9kaWZpZXIgPT09ICcrJztcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbmFsKSBjb250aW51ZTtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IGdvdCBcIicgKyBzZWdtZW50ICsgJ1wiJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuXG4gICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgZ290IFwiJyArIHNlZ21lbnQgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25hbCkgY29udGludWU7XG4gICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/ICdhbiBhcnJheScgOiAnYSBzdHJpbmcnO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSAnICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG59XG5cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICB2YXIga2V5cyA9IFtdO1xuICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuXG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSxcbiAgICAgIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9IDogX2E7XG4gIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgIGlmICghbSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwYXRoID0gbVswXSxcbiAgICAgICAgaW5kZXggPSBtLmluZGV4O1xuICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiBfbG9vcF8xKGkpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuICdjb250aW51ZSc7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG5cbiAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09ICcqJyB8fCBrZXkubW9kaWZpZXIgPT09ICcrJykge1xuICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cblxuXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSc7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgaWYgKCFrZXlzKSByZXR1cm4gcGF0aDsgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cblxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6ICcnLFxuICAgICAgICBzdWZmaXg6ICcnLFxuICAgICAgICBtb2RpZmllcjogJycsXG4gICAgICAgIHBhdHRlcm46ICcnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cblxuXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlO1xuICB9KTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cblxuXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cblxuXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LFxuICAgICAgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsXG4gICAgICBfYiA9IG9wdGlvbnMuc3RhcnQsXG4gICAgICBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsXG4gICAgICBfYyA9IG9wdGlvbnMuZW5kLFxuICAgICAgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYyxcbiAgICAgIF9kID0gb3B0aW9ucy5lbmNvZGUsXG4gICAgICBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSA6IF9kO1xuICB2YXIgZW5kc1dpdGggPSAnWycgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCAnJykgKyAnXXwkJztcbiAgdmFyIGRlbGltaXRlciA9ICdbJyArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLyM/JykgKyAnXSc7XG4gIHZhciByb3V0ZSA9IHN0YXJ0ID8gJ14nIDogJyc7IC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG5cbiAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuXG4gICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICBpZiAoa2V5cykga2V5cy5wdXNoKHRva2VuKTtcblxuICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gJysnIHx8IHRva2VuLm1vZGlmaWVyID09PSAnKicpIHtcbiAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gJyonID8gJz8nIDogJyc7XG4gICAgICAgICAgICByb3V0ZSArPSAnKD86JyArIHByZWZpeCArICcoKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSg/OicgKyBzdWZmaXggKyBwcmVmaXggKyAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSkqKScgKyBzdWZmaXggKyAnKScgKyBtb2Q7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdXRlICs9ICcoPzonICsgcHJlZml4ICsgJygnICsgdG9rZW4ucGF0dGVybiArICcpJyArIHN1ZmZpeCArICcpJyArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZSArPSAnKCcgKyB0b2tlbi5wYXR0ZXJuICsgJyknICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlICs9ICcoPzonICsgcHJlZml4ICsgc3VmZml4ICsgJyknICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIGlmICghc3RyaWN0KSByb3V0ZSArPSBkZWxpbWl0ZXIgKyAnPyc7XG4gICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyAnJCcgOiAnKD89JyArIGVuZHNXaXRoICsgJyknO1xuICB9IGVsc2Uge1xuICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSAnc3RyaW5nJyA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcblxuICAgIGlmICghc3RyaWN0KSB7XG4gICAgICByb3V0ZSArPSAnKD86JyArIGRlbGltaXRlciArICcoPz0nICsgZW5kc1dpdGggKyAnKSk/JztcbiAgICB9XG5cbiAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICByb3V0ZSArPSAnKD89JyArIGRlbGltaXRlciArICd8JyArIGVuZHNXaXRoICsgJyknO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSkgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///47930
`)},69760:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useClosable; },
/* harmony export */   w: function() { return /* binding */ pickClosable; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97937);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64217);
"use client";




function pickClosable(context) {
  if (!context) {
    return undefined;
  }
  return {
    closable: context.closable,
    closeIcon: context.closeIcon
  };
}
/** Convert \`closable\` and \`closeIcon\` to config object */
function useClosableConfig(closableCollection) {
  const {
    closable,
    closeIcon
  } = closableCollection || {};
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (
    // If \`closable\`, whatever rest be should be true
    !closable && (closable === false || closeIcon === false || closeIcon === null)) {
      return false;
    }
    if (closable === undefined && closeIcon === undefined) {
      return null;
    }
    let closableConfig = {
      closeIcon: typeof closeIcon !== 'boolean' && closeIcon !== null ? closeIcon : undefined
    };
    if (closable && typeof closable === 'object') {
      closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
    }
    return closableConfig;
  }, [closable, closeIcon]);
}
/**
 * Assign object without \`undefined\` field. Will skip if is \`false\`.
 * This helps to handle both closableConfig or false
 */
function assignWithoutUndefined() {
  const target = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined) {
          target[key] = obj[key];
        }
      });
    }
  });
  return target;
}
/** Use same object to support \`useMemo\` optimization */
const EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection) {
  let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EmptyFallbackCloseCollection;
  // Align the \`props\`, \`context\` \`fallback\` to config object first
  const propCloseConfig = useClosableConfig(propCloseCollection);
  const contextCloseConfig = useClosableConfig(contextCloseCollection);
  const closeBtnIsDisabled = typeof propCloseConfig !== 'boolean' ? !!(propCloseConfig === null || propCloseConfig === void 0 ? void 0 : propCloseConfig.disabled) : false;
  const mergedFallbackCloseCollection = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.assign({
    closeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null)
  }, fallbackCloseCollection), [fallbackCloseCollection]);
  // Use fallback logic to fill the config
  const mergedClosableConfig = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // ================ Props First ================
    // Skip if prop is disabled
    if (propCloseConfig === false) {
      return false;
    }
    if (propCloseConfig) {
      return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
    }
    // =============== Context Second ==============
    // Skip if context is disabled
    if (contextCloseConfig === false) {
      return false;
    }
    if (contextCloseConfig) {
      return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig);
    }
    // ============= Fallback Default ==============
    return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
  }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
  // Calculate the final closeIcon
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (mergedClosableConfig === false) {
      return [false, null, closeBtnIsDisabled];
    }
    const {
      closeIconRender
    } = mergedFallbackCloseCollection;
    const {
      closeIcon
    } = mergedClosableConfig;
    let mergedCloseIcon = closeIcon;
    if (mergedCloseIcon !== null && mergedCloseIcon !== undefined) {
      // Wrap the closeIcon if needed
      if (closeIconRender) {
        mergedCloseIcon = closeIconRender(closeIcon);
      }
      // Wrap the closeIcon with aria props
      const ariaProps = (0,rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(mergedClosableConfig, true);
      if (Object.keys(ariaProps).length) {
        mergedCloseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(mergedCloseIcon) ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(mergedCloseIcon, ariaProps)) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon));
      }
    }
    return [true, mergedCloseIcon, closeBtnIsDisabled];
  }, [mergedClosableConfig, mergedFallbackCloseCollection]);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk3NjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUUwQjtBQUMyQztBQUN4QjtBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVMsMENBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsYUFBYTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBDQUFhO0FBQ3JELDRCQUE0QixnREFBbUIsQ0FBQyx5RkFBYTtBQUM3RCxHQUFHO0FBQ0g7QUFDQSwrQkFBK0IsMENBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBUywwQ0FBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUVBQVM7QUFDakM7QUFDQSx1Q0FBdUMsaURBQW9CLGtDQUFrQywrQ0FBa0IsOENBQThDLGdEQUFtQix5QkFBeUI7QUFDek07QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvaG9va3MvdXNlQ2xvc2FibGUuanM/NGFkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZU91dGxpbmVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9DbG9zZU91dGxpbmVkXCI7XG5pbXBvcnQgcGlja0F0dHJzIGZyb20gXCJyYy11dGlsL2VzL3BpY2tBdHRyc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBpY2tDbG9zYWJsZShjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbG9zYWJsZTogY29udGV4dC5jbG9zYWJsZSxcbiAgICBjbG9zZUljb246IGNvbnRleHQuY2xvc2VJY29uXG4gIH07XG59XG4vKiogQ29udmVydCBgY2xvc2FibGVgIGFuZCBgY2xvc2VJY29uYCB0byBjb25maWcgb2JqZWN0ICovXG5mdW5jdGlvbiB1c2VDbG9zYWJsZUNvbmZpZyhjbG9zYWJsZUNvbGxlY3Rpb24pIHtcbiAgY29uc3Qge1xuICAgIGNsb3NhYmxlLFxuICAgIGNsb3NlSWNvblxuICB9ID0gY2xvc2FibGVDb2xsZWN0aW9uIHx8IHt9O1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKFxuICAgIC8vIElmIGBjbG9zYWJsZWAsIHdoYXRldmVyIHJlc3QgYmUgc2hvdWxkIGJlIHRydWVcbiAgICAhY2xvc2FibGUgJiYgKGNsb3NhYmxlID09PSBmYWxzZSB8fCBjbG9zZUljb24gPT09IGZhbHNlIHx8IGNsb3NlSWNvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGNsb3NhYmxlID09PSB1bmRlZmluZWQgJiYgY2xvc2VJY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgY2xvc2FibGVDb25maWcgPSB7XG4gICAgICBjbG9zZUljb246IHR5cGVvZiBjbG9zZUljb24gIT09ICdib29sZWFuJyAmJiBjbG9zZUljb24gIT09IG51bGwgPyBjbG9zZUljb24gOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChjbG9zYWJsZSAmJiB0eXBlb2YgY2xvc2FibGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjbG9zYWJsZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY2xvc2FibGVDb25maWcpLCBjbG9zYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9zYWJsZUNvbmZpZztcbiAgfSwgW2Nsb3NhYmxlLCBjbG9zZUljb25dKTtcbn1cbi8qKlxuICogQXNzaWduIG9iamVjdCB3aXRob3V0IGB1bmRlZmluZWRgIGZpZWxkLiBXaWxsIHNraXAgaWYgaXMgYGZhbHNlYC5cbiAqIFRoaXMgaGVscHMgdG8gaGFuZGxlIGJvdGggY2xvc2FibGVDb25maWcgb3IgZmFsc2VcbiAqL1xuZnVuY3Rpb24gYXNzaWduV2l0aG91dFVuZGVmaW5lZCgpIHtcbiAgY29uc3QgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvYmpMaXN0ID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG9iakxpc3RbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgb2JqTGlzdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgaWYgKG9iaikge1xuICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbi8qKiBVc2Ugc2FtZSBvYmplY3QgdG8gc3VwcG9ydCBgdXNlTWVtb2Agb3B0aW1pemF0aW9uICovXG5jb25zdCBFbXB0eUZhbGxiYWNrQ2xvc2VDb2xsZWN0aW9uID0ge307XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbG9zYWJsZShwcm9wQ2xvc2VDb2xsZWN0aW9uLCBjb250ZXh0Q2xvc2VDb2xsZWN0aW9uKSB7XG4gIGxldCBmYWxsYmFja0Nsb3NlQ29sbGVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogRW1wdHlGYWxsYmFja0Nsb3NlQ29sbGVjdGlvbjtcbiAgLy8gQWxpZ24gdGhlIGBwcm9wc2AsIGBjb250ZXh0YCBgZmFsbGJhY2tgIHRvIGNvbmZpZyBvYmplY3QgZmlyc3RcbiAgY29uc3QgcHJvcENsb3NlQ29uZmlnID0gdXNlQ2xvc2FibGVDb25maWcocHJvcENsb3NlQ29sbGVjdGlvbik7XG4gIGNvbnN0IGNvbnRleHRDbG9zZUNvbmZpZyA9IHVzZUNsb3NhYmxlQ29uZmlnKGNvbnRleHRDbG9zZUNvbGxlY3Rpb24pO1xuICBjb25zdCBjbG9zZUJ0bklzRGlzYWJsZWQgPSB0eXBlb2YgcHJvcENsb3NlQ29uZmlnICE9PSAnYm9vbGVhbicgPyAhIShwcm9wQ2xvc2VDb25maWcgPT09IG51bGwgfHwgcHJvcENsb3NlQ29uZmlnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wQ2xvc2VDb25maWcuZGlzYWJsZWQpIDogZmFsc2U7XG4gIGNvbnN0IG1lcmdlZEZhbGxiYWNrQ2xvc2VDb2xsZWN0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiBPYmplY3QuYXNzaWduKHtcbiAgICBjbG9zZUljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlT3V0bGluZWQsIG51bGwpXG4gIH0sIGZhbGxiYWNrQ2xvc2VDb2xsZWN0aW9uKSwgW2ZhbGxiYWNrQ2xvc2VDb2xsZWN0aW9uXSk7XG4gIC8vIFVzZSBmYWxsYmFjayBsb2dpYyB0byBmaWxsIHRoZSBjb25maWdcbiAgY29uc3QgbWVyZ2VkQ2xvc2FibGVDb25maWcgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAvLyA9PT09PT09PT09PT09PT09IFByb3BzIEZpcnN0ID09PT09PT09PT09PT09PT1cbiAgICAvLyBTa2lwIGlmIHByb3AgaXMgZGlzYWJsZWRcbiAgICBpZiAocHJvcENsb3NlQ29uZmlnID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvcENsb3NlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gYXNzaWduV2l0aG91dFVuZGVmaW5lZChtZXJnZWRGYWxsYmFja0Nsb3NlQ29sbGVjdGlvbiwgY29udGV4dENsb3NlQ29uZmlnLCBwcm9wQ2xvc2VDb25maWcpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT0gQ29udGV4dCBTZWNvbmQgPT09PT09PT09PT09PT1cbiAgICAvLyBTa2lwIGlmIGNvbnRleHQgaXMgZGlzYWJsZWRcbiAgICBpZiAoY29udGV4dENsb3NlQ29uZmlnID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY29udGV4dENsb3NlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gYXNzaWduV2l0aG91dFVuZGVmaW5lZChtZXJnZWRGYWxsYmFja0Nsb3NlQ29sbGVjdGlvbiwgY29udGV4dENsb3NlQ29uZmlnKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PSBGYWxsYmFjayBEZWZhdWx0ID09PT09PT09PT09PT09XG4gICAgcmV0dXJuICFtZXJnZWRGYWxsYmFja0Nsb3NlQ29sbGVjdGlvbi5jbG9zYWJsZSA/IGZhbHNlIDogbWVyZ2VkRmFsbGJhY2tDbG9zZUNvbGxlY3Rpb247XG4gIH0sIFtwcm9wQ2xvc2VDb25maWcsIGNvbnRleHRDbG9zZUNvbmZpZywgbWVyZ2VkRmFsbGJhY2tDbG9zZUNvbGxlY3Rpb25dKTtcbiAgLy8gQ2FsY3VsYXRlIHRoZSBmaW5hbCBjbG9zZUljb25cbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChtZXJnZWRDbG9zYWJsZUNvbmZpZyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIGNsb3NlQnRuSXNEaXNhYmxlZF07XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGNsb3NlSWNvblJlbmRlclxuICAgIH0gPSBtZXJnZWRGYWxsYmFja0Nsb3NlQ29sbGVjdGlvbjtcbiAgICBjb25zdCB7XG4gICAgICBjbG9zZUljb25cbiAgICB9ID0gbWVyZ2VkQ2xvc2FibGVDb25maWc7XG4gICAgbGV0IG1lcmdlZENsb3NlSWNvbiA9IGNsb3NlSWNvbjtcbiAgICBpZiAobWVyZ2VkQ2xvc2VJY29uICE9PSBudWxsICYmIG1lcmdlZENsb3NlSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBXcmFwIHRoZSBjbG9zZUljb24gaWYgbmVlZGVkXG4gICAgICBpZiAoY2xvc2VJY29uUmVuZGVyKSB7XG4gICAgICAgIG1lcmdlZENsb3NlSWNvbiA9IGNsb3NlSWNvblJlbmRlcihjbG9zZUljb24pO1xuICAgICAgfVxuICAgICAgLy8gV3JhcCB0aGUgY2xvc2VJY29uIHdpdGggYXJpYSBwcm9wc1xuICAgICAgY29uc3QgYXJpYVByb3BzID0gcGlja0F0dHJzKG1lcmdlZENsb3NhYmxlQ29uZmlnLCB0cnVlKTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcmlhUHJvcHMpLmxlbmd0aCkge1xuICAgICAgICBtZXJnZWRDbG9zZUljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVyZ2VkQ2xvc2VJY29uKSA/ICgvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KG1lcmdlZENsb3NlSWNvbiwgYXJpYVByb3BzKSkgOiAoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oe30sIGFyaWFQcm9wcyksIG1lcmdlZENsb3NlSWNvbikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3RydWUsIG1lcmdlZENsb3NlSWNvbiwgY2xvc2VCdG5Jc0Rpc2FibGVkXTtcbiAgfSwgW21lcmdlZENsb3NhYmxlQ29uZmlnLCBtZXJnZWRGYWxsYmFja0Nsb3NlQ29sbGVjdGlvbl0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///69760
`)},57838:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useForceUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useForceUpdate() {
  const [, forceUpdate] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(x => x + 1, 0);
  return forceUpdate;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTc4MzguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQjtBQUNoQjtBQUNmLDBCQUEwQiw2Q0FBZ0I7QUFDMUM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL2hvb2tzL3VzZUZvcmNlVXBkYXRlLmpzPzI3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gIGNvbnN0IFssIGZvcmNlVXBkYXRlXSA9IFJlYWN0LnVzZVJlZHVjZXIoeCA9PiB4ICsgMSwgMCk7XG4gIHJldHVybiBmb3JjZVVwZGF0ZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///57838
`)},16569:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ usePanelRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var rc_util_es_hooks_useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66680);


function voidFunc() {}
const WatermarkContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = react__WEBPACK_IMPORTED_MODULE_0__.useContext(WatermarkContext);
  const panelEleRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const panelRef = (0,rc_util_es_hooks_useEvent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ele => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle);
      panelEleRef.current = innerContentEle;
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WatermarkContext)));//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY1NjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFDa0I7QUFDakQ7QUFDQSxzQ0FBc0MsZ0RBQW1CO0FBQ3pEO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUCxvQkFBb0IsNkNBQWdCO0FBQ3BDLHNCQUFzQix5Q0FBWTtBQUNsQyxtQkFBbUIsOEVBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0VBQWUsZ0VBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvd2F0ZXJtYXJrL2NvbnRleHQuanM/NTE1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnQgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlRXZlbnRcIjtcbmZ1bmN0aW9uIHZvaWRGdW5jKCkge31cbmNvbnN0IFdhdGVybWFya0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGFkZDogdm9pZEZ1bmMsXG4gIHJlbW92ZTogdm9pZEZ1bmNcbn0pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhbmVsUmVmKHBhbmVsU2VsZWN0b3IpIHtcbiAgY29uc3Qgd2F0ZXJtYXJrID0gUmVhY3QudXNlQ29udGV4dChXYXRlcm1hcmtDb250ZXh0KTtcbiAgY29uc3QgcGFuZWxFbGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBhbmVsUmVmID0gdXNlRXZlbnQoZWxlID0+IHtcbiAgICBpZiAoZWxlKSB7XG4gICAgICBjb25zdCBpbm5lckNvbnRlbnRFbGUgPSBwYW5lbFNlbGVjdG9yID8gZWxlLnF1ZXJ5U2VsZWN0b3IocGFuZWxTZWxlY3RvcikgOiBlbGU7XG4gICAgICB3YXRlcm1hcmsuYWRkKGlubmVyQ29udGVudEVsZSk7XG4gICAgICBwYW5lbEVsZVJlZi5jdXJyZW50ID0gaW5uZXJDb250ZW50RWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXRlcm1hcmsucmVtb3ZlKHBhbmVsRWxlUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYW5lbFJlZjtcbn1cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya0NvbnRleHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///16569
`)},62663:function(module){eval(`/**
 * A specialized version of \`_.reduce\` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of \`array\` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjI2NjMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVJlZHVjZS5qcz81ZTk2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///62663
`)},44286:function(module){eval(`/**
 * Converts an ASCII \`string\` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQyODYuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzP2ZmMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBhbiBBU0NJSSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXNjaWlUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVRvQXJyYXk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///44286
`)},49029:function(module){eval(`/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7f]+/g;

/**
 * Splits an ASCII \`string\` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of \`string\`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkwMjkuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVdvcmRzLmpzPzQ4NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXG52YXIgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2c7XG5cbi8qKlxuICogU3BsaXRzIGFuIEFTQ0lJIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlXb3JkcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///49029
`)},18674:function(module){eval(`/**
 * The base implementation of \`_.propertyOf\` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg2NzQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eU9mLmpzPzRkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eU9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eU9mO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///18674
`)},14259:function(module){eval(`/**
 * The base implementation of \`_.slice\` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of \`array\`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyNTkuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcz81NmFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///14259
`)},40180:function(module,__unused_webpack_exports,__webpack_require__){eval(`var baseSlice = __webpack_require__(14259);

/**
 * Casts \`array\` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAxODAuanMiLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFPLENBQUMsS0FBYzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFNsaWNlLmpzPzUxNjkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///40180
`)},98805:function(module,__unused_webpack_exports,__webpack_require__){eval(`var castSlice = __webpack_require__(40180),
    hasUnicode = __webpack_require__(62689),
    stringToArray = __webpack_require__(83140),
    toString = __webpack_require__(79833);

/**
 * Creates a function like \`_.lowerFirst\`.
 *
 * @private
 * @param {string} methodName The name of the \`String\` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTg4MDUuanMiLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFPLENBQUMsS0FBYztBQUN0QyxpQkFBaUIsbUJBQU8sQ0FBQyxLQUFlO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLEtBQWtCO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyxLQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzP2M2N2IiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///98805
`)},35393:function(module,__unused_webpack_exports,__webpack_require__){eval(`var arrayReduce = __webpack_require__(62663),
    deburr = __webpack_require__(53816),
    words = __webpack_require__(58748);

/** Used to compose unicode capture groups. */
var rsApos = "['\\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like \`_.camelCase\`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUzOTMuanMiLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLG1CQUFPLENBQUMsS0FBZ0I7QUFDMUMsYUFBYSxtQkFBTyxDQUFDLEtBQVU7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLEtBQVM7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ29tcG91bmRlci5qcz8xODIyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgZGVidXJyID0gcmVxdWlyZSgnLi9kZWJ1cnInKSxcbiAgICB3b3JkcyA9IHJlcXVpcmUoJy4vd29yZHMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiO1xuXG4vKiogVXNlZCB0byBtYXRjaCBhcG9zdHJvcGhlcy4gKi9cbnZhciByZUFwb3MgPSBSZWdFeHAocnNBcG9zLCAnZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmNhbWVsQ2FzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjb21iaW5lIGVhY2ggd29yZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbXBvdW5kZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvdW5kZXIoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHJldHVybiBhcnJheVJlZHVjZSh3b3JkcyhkZWJ1cnIoc3RyaW5nKS5yZXBsYWNlKHJlQXBvcywgJycpKSwgY2FsbGJhY2ssICcnKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb3VuZGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///35393
`)},69389:function(module,__unused_webpack_exports,__webpack_require__){eval(`var basePropertyOf = __webpack_require__(18674);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\\xc0': 'A',  '\\xc1': 'A', '\\xc2': 'A', '\\xc3': 'A', '\\xc4': 'A', '\\xc5': 'A',
  '\\xe0': 'a',  '\\xe1': 'a', '\\xe2': 'a', '\\xe3': 'a', '\\xe4': 'a', '\\xe5': 'a',
  '\\xc7': 'C',  '\\xe7': 'c',
  '\\xd0': 'D',  '\\xf0': 'd',
  '\\xc8': 'E',  '\\xc9': 'E', '\\xca': 'E', '\\xcb': 'E',
  '\\xe8': 'e',  '\\xe9': 'e', '\\xea': 'e', '\\xeb': 'e',
  '\\xcc': 'I',  '\\xcd': 'I', '\\xce': 'I', '\\xcf': 'I',
  '\\xec': 'i',  '\\xed': 'i', '\\xee': 'i', '\\xef': 'i',
  '\\xd1': 'N',  '\\xf1': 'n',
  '\\xd2': 'O',  '\\xd3': 'O', '\\xd4': 'O', '\\xd5': 'O', '\\xd6': 'O', '\\xd8': 'O',
  '\\xf2': 'o',  '\\xf3': 'o', '\\xf4': 'o', '\\xf5': 'o', '\\xf6': 'o', '\\xf8': 'o',
  '\\xd9': 'U',  '\\xda': 'U', '\\xdb': 'U', '\\xdc': 'U',
  '\\xf9': 'u',  '\\xfa': 'u', '\\xfb': 'u', '\\xfc': 'u',
  '\\xdd': 'Y',  '\\xfd': 'y', '\\xff': 'y',
  '\\xc6': 'Ae', '\\xe6': 'ae',
  '\\xde': 'Th', '\\xfe': 'th',
  '\\xdf': 'ss',
  // Latin Extended-A block.
  '\\u0100': 'A',  '\\u0102': 'A', '\\u0104': 'A',
  '\\u0101': 'a',  '\\u0103': 'a', '\\u0105': 'a',
  '\\u0106': 'C',  '\\u0108': 'C', '\\u010a': 'C', '\\u010c': 'C',
  '\\u0107': 'c',  '\\u0109': 'c', '\\u010b': 'c', '\\u010d': 'c',
  '\\u010e': 'D',  '\\u0110': 'D', '\\u010f': 'd', '\\u0111': 'd',
  '\\u0112': 'E',  '\\u0114': 'E', '\\u0116': 'E', '\\u0118': 'E', '\\u011a': 'E',
  '\\u0113': 'e',  '\\u0115': 'e', '\\u0117': 'e', '\\u0119': 'e', '\\u011b': 'e',
  '\\u011c': 'G',  '\\u011e': 'G', '\\u0120': 'G', '\\u0122': 'G',
  '\\u011d': 'g',  '\\u011f': 'g', '\\u0121': 'g', '\\u0123': 'g',
  '\\u0124': 'H',  '\\u0126': 'H', '\\u0125': 'h', '\\u0127': 'h',
  '\\u0128': 'I',  '\\u012a': 'I', '\\u012c': 'I', '\\u012e': 'I', '\\u0130': 'I',
  '\\u0129': 'i',  '\\u012b': 'i', '\\u012d': 'i', '\\u012f': 'i', '\\u0131': 'i',
  '\\u0134': 'J',  '\\u0135': 'j',
  '\\u0136': 'K',  '\\u0137': 'k', '\\u0138': 'k',
  '\\u0139': 'L',  '\\u013b': 'L', '\\u013d': 'L', '\\u013f': 'L', '\\u0141': 'L',
  '\\u013a': 'l',  '\\u013c': 'l', '\\u013e': 'l', '\\u0140': 'l', '\\u0142': 'l',
  '\\u0143': 'N',  '\\u0145': 'N', '\\u0147': 'N', '\\u014a': 'N',
  '\\u0144': 'n',  '\\u0146': 'n', '\\u0148': 'n', '\\u014b': 'n',
  '\\u014c': 'O',  '\\u014e': 'O', '\\u0150': 'O',
  '\\u014d': 'o',  '\\u014f': 'o', '\\u0151': 'o',
  '\\u0154': 'R',  '\\u0156': 'R', '\\u0158': 'R',
  '\\u0155': 'r',  '\\u0157': 'r', '\\u0159': 'r',
  '\\u015a': 'S',  '\\u015c': 'S', '\\u015e': 'S', '\\u0160': 'S',
  '\\u015b': 's',  '\\u015d': 's', '\\u015f': 's', '\\u0161': 's',
  '\\u0162': 'T',  '\\u0164': 'T', '\\u0166': 'T',
  '\\u0163': 't',  '\\u0165': 't', '\\u0167': 't',
  '\\u0168': 'U',  '\\u016a': 'U', '\\u016c': 'U', '\\u016e': 'U', '\\u0170': 'U', '\\u0172': 'U',
  '\\u0169': 'u',  '\\u016b': 'u', '\\u016d': 'u', '\\u016f': 'u', '\\u0171': 'u', '\\u0173': 'u',
  '\\u0174': 'W',  '\\u0175': 'w',
  '\\u0176': 'Y',  '\\u0177': 'y', '\\u0178': 'Y',
  '\\u0179': 'Z',  '\\u017b': 'Z', '\\u017d': 'Z',
  '\\u017a': 'z',  '\\u017c': 'z', '\\u017e': 'z',
  '\\u0132': 'IJ', '\\u0133': 'ij',
  '\\u0152': 'Oe', '\\u0153': 'oe',
  '\\u0149': "'n", '\\u017f': 's'
};

/**
 * Used by \`_.deburr\` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkzODkuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsS0FBbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVidXJyTGV0dGVyLmpzP2Q1NWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGJhc2VQcm9wZXJ0eU9mID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5T2YnKTtcblxuLyoqIFVzZWQgdG8gbWFwIExhdGluIFVuaWNvZGUgbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLiAqL1xudmFyIGRlYnVycmVkTGV0dGVycyA9IHtcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50IGJsb2NrLlxuICAnXFx4YzAnOiAnQScsICAnXFx4YzEnOiAnQScsICdcXHhjMic6ICdBJywgJ1xceGMzJzogJ0EnLCAnXFx4YzQnOiAnQScsICdcXHhjNSc6ICdBJyxcbiAgJ1xceGUwJzogJ2EnLCAgJ1xceGUxJzogJ2EnLCAnXFx4ZTInOiAnYScsICdcXHhlMyc6ICdhJywgJ1xceGU0JzogJ2EnLCAnXFx4ZTUnOiAnYScsXG4gICdcXHhjNyc6ICdDJywgICdcXHhlNyc6ICdjJyxcbiAgJ1xceGQwJzogJ0QnLCAgJ1xceGYwJzogJ2QnLFxuICAnXFx4YzgnOiAnRScsICAnXFx4YzknOiAnRScsICdcXHhjYSc6ICdFJywgJ1xceGNiJzogJ0UnLFxuICAnXFx4ZTgnOiAnZScsICAnXFx4ZTknOiAnZScsICdcXHhlYSc6ICdlJywgJ1xceGViJzogJ2UnLFxuICAnXFx4Y2MnOiAnSScsICAnXFx4Y2QnOiAnSScsICdcXHhjZSc6ICdJJywgJ1xceGNmJzogJ0knLFxuICAnXFx4ZWMnOiAnaScsICAnXFx4ZWQnOiAnaScsICdcXHhlZSc6ICdpJywgJ1xceGVmJzogJ2knLFxuICAnXFx4ZDEnOiAnTicsICAnXFx4ZjEnOiAnbicsXG4gICdcXHhkMic6ICdPJywgICdcXHhkMyc6ICdPJywgJ1xceGQ0JzogJ08nLCAnXFx4ZDUnOiAnTycsICdcXHhkNic6ICdPJywgJ1xceGQ4JzogJ08nLFxuICAnXFx4ZjInOiAnbycsICAnXFx4ZjMnOiAnbycsICdcXHhmNCc6ICdvJywgJ1xceGY1JzogJ28nLCAnXFx4ZjYnOiAnbycsICdcXHhmOCc6ICdvJyxcbiAgJ1xceGQ5JzogJ1UnLCAgJ1xceGRhJzogJ1UnLCAnXFx4ZGInOiAnVScsICdcXHhkYyc6ICdVJyxcbiAgJ1xceGY5JzogJ3UnLCAgJ1xceGZhJzogJ3UnLCAnXFx4ZmInOiAndScsICdcXHhmYyc6ICd1JyxcbiAgJ1xceGRkJzogJ1knLCAgJ1xceGZkJzogJ3knLCAnXFx4ZmYnOiAneScsXG4gICdcXHhjNic6ICdBZScsICdcXHhlNic6ICdhZScsXG4gICdcXHhkZSc6ICdUaCcsICdcXHhmZSc6ICd0aCcsXG4gICdcXHhkZic6ICdzcycsXG4gIC8vIExhdGluIEV4dGVuZGVkLUEgYmxvY2suXG4gICdcXHUwMTAwJzogJ0EnLCAgJ1xcdTAxMDInOiAnQScsICdcXHUwMTA0JzogJ0EnLFxuICAnXFx1MDEwMSc6ICdhJywgICdcXHUwMTAzJzogJ2EnLCAnXFx1MDEwNSc6ICdhJyxcbiAgJ1xcdTAxMDYnOiAnQycsICAnXFx1MDEwOCc6ICdDJywgJ1xcdTAxMGEnOiAnQycsICdcXHUwMTBjJzogJ0MnLFxuICAnXFx1MDEwNyc6ICdjJywgICdcXHUwMTA5JzogJ2MnLCAnXFx1MDEwYic6ICdjJywgJ1xcdTAxMGQnOiAnYycsXG4gICdcXHUwMTBlJzogJ0QnLCAgJ1xcdTAxMTAnOiAnRCcsICdcXHUwMTBmJzogJ2QnLCAnXFx1MDExMSc6ICdkJyxcbiAgJ1xcdTAxMTInOiAnRScsICAnXFx1MDExNCc6ICdFJywgJ1xcdTAxMTYnOiAnRScsICdcXHUwMTE4JzogJ0UnLCAnXFx1MDExYSc6ICdFJyxcbiAgJ1xcdTAxMTMnOiAnZScsICAnXFx1MDExNSc6ICdlJywgJ1xcdTAxMTcnOiAnZScsICdcXHUwMTE5JzogJ2UnLCAnXFx1MDExYic6ICdlJyxcbiAgJ1xcdTAxMWMnOiAnRycsICAnXFx1MDExZSc6ICdHJywgJ1xcdTAxMjAnOiAnRycsICdcXHUwMTIyJzogJ0cnLFxuICAnXFx1MDExZCc6ICdnJywgICdcXHUwMTFmJzogJ2cnLCAnXFx1MDEyMSc6ICdnJywgJ1xcdTAxMjMnOiAnZycsXG4gICdcXHUwMTI0JzogJ0gnLCAgJ1xcdTAxMjYnOiAnSCcsICdcXHUwMTI1JzogJ2gnLCAnXFx1MDEyNyc6ICdoJyxcbiAgJ1xcdTAxMjgnOiAnSScsICAnXFx1MDEyYSc6ICdJJywgJ1xcdTAxMmMnOiAnSScsICdcXHUwMTJlJzogJ0knLCAnXFx1MDEzMCc6ICdJJyxcbiAgJ1xcdTAxMjknOiAnaScsICAnXFx1MDEyYic6ICdpJywgJ1xcdTAxMmQnOiAnaScsICdcXHUwMTJmJzogJ2knLCAnXFx1MDEzMSc6ICdpJyxcbiAgJ1xcdTAxMzQnOiAnSicsICAnXFx1MDEzNSc6ICdqJyxcbiAgJ1xcdTAxMzYnOiAnSycsICAnXFx1MDEzNyc6ICdrJywgJ1xcdTAxMzgnOiAnaycsXG4gICdcXHUwMTM5JzogJ0wnLCAgJ1xcdTAxM2InOiAnTCcsICdcXHUwMTNkJzogJ0wnLCAnXFx1MDEzZic6ICdMJywgJ1xcdTAxNDEnOiAnTCcsXG4gICdcXHUwMTNhJzogJ2wnLCAgJ1xcdTAxM2MnOiAnbCcsICdcXHUwMTNlJzogJ2wnLCAnXFx1MDE0MCc6ICdsJywgJ1xcdTAxNDInOiAnbCcsXG4gICdcXHUwMTQzJzogJ04nLCAgJ1xcdTAxNDUnOiAnTicsICdcXHUwMTQ3JzogJ04nLCAnXFx1MDE0YSc6ICdOJyxcbiAgJ1xcdTAxNDQnOiAnbicsICAnXFx1MDE0Nic6ICduJywgJ1xcdTAxNDgnOiAnbicsICdcXHUwMTRiJzogJ24nLFxuICAnXFx1MDE0Yyc6ICdPJywgICdcXHUwMTRlJzogJ08nLCAnXFx1MDE1MCc6ICdPJyxcbiAgJ1xcdTAxNGQnOiAnbycsICAnXFx1MDE0Zic6ICdvJywgJ1xcdTAxNTEnOiAnbycsXG4gICdcXHUwMTU0JzogJ1InLCAgJ1xcdTAxNTYnOiAnUicsICdcXHUwMTU4JzogJ1InLFxuICAnXFx1MDE1NSc6ICdyJywgICdcXHUwMTU3JzogJ3InLCAnXFx1MDE1OSc6ICdyJyxcbiAgJ1xcdTAxNWEnOiAnUycsICAnXFx1MDE1Yyc6ICdTJywgJ1xcdTAxNWUnOiAnUycsICdcXHUwMTYwJzogJ1MnLFxuICAnXFx1MDE1Yic6ICdzJywgICdcXHUwMTVkJzogJ3MnLCAnXFx1MDE1Zic6ICdzJywgJ1xcdTAxNjEnOiAncycsXG4gICdcXHUwMTYyJzogJ1QnLCAgJ1xcdTAxNjQnOiAnVCcsICdcXHUwMTY2JzogJ1QnLFxuICAnXFx1MDE2Myc6ICd0JywgICdcXHUwMTY1JzogJ3QnLCAnXFx1MDE2Nyc6ICd0JyxcbiAgJ1xcdTAxNjgnOiAnVScsICAnXFx1MDE2YSc6ICdVJywgJ1xcdTAxNmMnOiAnVScsICdcXHUwMTZlJzogJ1UnLCAnXFx1MDE3MCc6ICdVJywgJ1xcdTAxNzInOiAnVScsXG4gICdcXHUwMTY5JzogJ3UnLCAgJ1xcdTAxNmInOiAndScsICdcXHUwMTZkJzogJ3UnLCAnXFx1MDE2Zic6ICd1JywgJ1xcdTAxNzEnOiAndScsICdcXHUwMTczJzogJ3UnLFxuICAnXFx1MDE3NCc6ICdXJywgICdcXHUwMTc1JzogJ3cnLFxuICAnXFx1MDE3Nic6ICdZJywgICdcXHUwMTc3JzogJ3knLCAnXFx1MDE3OCc6ICdZJyxcbiAgJ1xcdTAxNzknOiAnWicsICAnXFx1MDE3Yic6ICdaJywgJ1xcdTAxN2QnOiAnWicsXG4gICdcXHUwMTdhJzogJ3onLCAgJ1xcdTAxN2MnOiAneicsICdcXHUwMTdlJzogJ3onLFxuICAnXFx1MDEzMic6ICdJSicsICdcXHUwMTMzJzogJ2lqJyxcbiAgJ1xcdTAxNTInOiAnT2UnLCAnXFx1MDE1Myc6ICdvZScsXG4gICdcXHUwMTQ5JzogXCInblwiLCAnXFx1MDE3Zic6ICdzJ1xufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBMYXRpbi0xIFN1cHBsZW1lbnQgYW5kIExhdGluIEV4dGVuZGVkLUFcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldHRlciBUaGUgbWF0Y2hlZCBsZXR0ZXIgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgbGV0dGVyLlxuICovXG52YXIgZGVidXJyTGV0dGVyID0gYmFzZVByb3BlcnR5T2YoZGVidXJyZWRMZXR0ZXJzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1cnJMZXR0ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///69389
`)},62689:function(module){eval(`/** Used to compose unicode character classes. */
var rsAstralRange = '\\\\ud800-\\\\udfff',
    rsComboMarksRange = '\\\\u0300-\\\\u036f',
    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',
    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\\\ufe0e\\\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if \`string\` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns \`true\` if a symbol is found, else \`false\`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjI2ODkuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGUuanM/NTkwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///62689
`)},93157:function(module){eval(`/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if \`string\` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns \`true\` if a word is found, else \`false\`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTMxNTcuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx5Q0FBeUMsRUFBRTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZVdvcmQuanM/NmE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///93157
`)},83140:function(module,__unused_webpack_exports,__webpack_require__){eval(`var asciiToArray = __webpack_require__(44286),
    hasUnicode = __webpack_require__(62689),
    unicodeToArray = __webpack_require__(676);

/**
 * Converts \`string\` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMxNDAuanMiLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLG1CQUFPLENBQUMsS0FBaUI7QUFDNUMsaUJBQWlCLG1CQUFPLENBQUMsS0FBZTtBQUN4QyxxQkFBcUIsbUJBQU8sQ0FBQyxHQUFtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvQXJyYXkuanM/NmJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXNjaWlUb0FycmF5ID0gcmVxdWlyZSgnLi9fYXNjaWlUb0FycmF5JyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlVG9BcnJheSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVUb0FycmF5Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvQXJyYXk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///83140
`)},676:function(module){eval(`/** Used to compose unicode character classes. */
var rsAstralRange = '\\\\ud800-\\\\udfff',
    rsComboMarksRange = '\\\\u0300-\\\\u036f',
    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',
    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\\\ufe0e\\\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',
    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',
    rsZWJ = '\\\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode \`string\` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjc2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanM/Mjg1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlVG9BcnJheTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///676
`)},2757:function(module){eval(`/** Used to compose unicode character classes. */
var rsAstralRange = '\\\\ud800-\\\\udfff',
    rsComboMarksRange = '\\\\u0300-\\\\u036f',
    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',
    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\\\u2700-\\\\u27bf',
    rsLowerRange = 'a-z\\\\xdf-\\\\xf6\\\\xf8-\\\\xff',
    rsMathOpRange = '\\\\xac\\\\xb1\\\\xd7\\\\xf7',
    rsNonCharRange = '\\\\x00-\\\\x2f\\\\x3a-\\\\x40\\\\x5b-\\\\x60\\\\x7b-\\\\xbf',
    rsPunctuationRange = '\\\\u2000-\\\\u206f',
    rsSpaceRange = ' \\\\t\\\\x0b\\\\f\\\\xa0\\\\ufeff\\\\n\\\\r\\\\u2028\\\\u2029\\\\u1680\\\\u180e\\\\u2000\\\\u2001\\\\u2002\\\\u2003\\\\u2004\\\\u2005\\\\u2006\\\\u2007\\\\u2008\\\\u2009\\\\u200a\\\\u202f\\\\u205f\\\\u3000',
    rsUpperRange = 'A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde',
    rsVarRange = '\\\\ufe0e\\\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',
    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\\\d*(?:1st|2nd|3rd|(?![123])\\\\dth)(?=\\\\b|[A-Z_])',
    rsOrdUpper = '\\\\d*(?:1ST|2ND|3RD|(?![123])\\\\dTH)(?=\\\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode \`string\` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of \`string\`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc1Ny5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlV29yZHMuanM/ZWZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc01pc2NMb3dlciA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc01pc2NVcHBlciA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdENvbnRyTG93ZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdENvbnRyVXBwZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzT3JkTG93ZXIgPSAnXFxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxcXGR0aCkoPz1cXFxcYnxbQS1aX10pJyxcbiAgICByc09yZFVwcGVyID0gJ1xcXFxkKig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcXFxkVEgpKD89XFxcXGJ8W2Etel9dKScsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzRW1vamkgPSAnKD86JyArIFtyc0RpbmdiYXQsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzU2VxO1xuXG4vKiogVXNlZCB0byBtYXRjaCBjb21wbGV4IG9yIGNvbXBvdW5kIHdvcmRzLiAqL1xudmFyIHJlVW5pY29kZVdvcmQgPSBSZWdFeHAoW1xuICByc1VwcGVyICsgJz8nICsgcnNMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc01pc2NVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIgKyByc01pc2NMb3dlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXIgKyAnPycgKyByc01pc2NMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlcixcbiAgcnNVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlcixcbiAgcnNPcmRVcHBlcixcbiAgcnNPcmRMb3dlcixcbiAgcnNEaWdpdHMsXG4gIHJzRW1vamlcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVdvcmRzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///2757
`)},68929:function(module,__unused_webpack_exports,__webpack_require__){eval(`var capitalize = __webpack_require__(48403),
    createCompounder = __webpack_require__(35393);

/**
 * Converts \`string\` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg5MjkuanMiLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLG1CQUFPLENBQUMsS0FBYztBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyxLQUFxQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jYW1lbENhc2UuanM/NjdmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2FwaXRhbGl6ZSA9IHJlcXVpcmUoJy4vY2FwaXRhbGl6ZScpLFxuICAgIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gW2NhbWVsIGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhbWVsQ2FzZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhbWVsIGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYW1lbENhc2UoJ0ZvbyBCYXInKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIF8uY2FtZWxDYXNlKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqL1xudmFyIGNhbWVsQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gY2FwaXRhbGl6ZSh3b3JkKSA6IHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxDYXNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///68929
`)},48403:function(module,__unused_webpack_exports,__webpack_require__){eval(`var toString = __webpack_require__(79833),
    upperFirst = __webpack_require__(11700);

/**
 * Converts the first character of \`string\` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg0MDMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLEtBQVk7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMsS0FBYzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2FwaXRhbGl6ZS5qcz85ZDQxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1cHBlckZpcnN0ID0gcmVxdWlyZSgnLi91cHBlckZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlIGFuZCB0aGUgcmVtYWluaW5nXG4gKiB0byBsb3dlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnRlJFRCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiB1cHBlckZpcnN0KHRvU3RyaW5nKHN0cmluZykudG9Mb3dlckNhc2UoKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///48403
`)},53816:function(module,__unused_webpack_exports,__webpack_require__){eval(`var deburrLetter = __webpack_require__(69389),
    toString = __webpack_require__(79833);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\xff\\u0100-\\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\\\u0300-\\\\u036f',
    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',
    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs \`string\` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('d\xE9j\xE0 vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTM4MTYuanMiLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLG1CQUFPLENBQUMsS0FBaUI7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLEtBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJ1cnIuanM/YzFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///53816
`)},11700:function(module,__unused_webpack_exports,__webpack_require__){eval(`var createCaseFirst = __webpack_require__(98805);

/**
 * Converts the first character of \`string\` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE3MDAuanMiLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCLG1CQUFPLENBQUMsS0FBb0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3VwcGVyRmlyc3QuanM/YTM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY3JlYXRlQ2FzZUZpcnN0ID0gcmVxdWlyZSgnLi9fY3JlYXRlQ2FzZUZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICpcbiAqIF8udXBwZXJGaXJzdCgnRlJFRCcpO1xuICogLy8gPT4gJ0ZSRUQnXG4gKi9cbnZhciB1cHBlckZpcnN0ID0gY3JlYXRlQ2FzZUZpcnN0KCd0b1VwcGVyQ2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwcGVyRmlyc3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///11700
`)},58748:function(module,__unused_webpack_exports,__webpack_require__){eval(`var asciiWords = __webpack_require__(49029),
    hasUnicodeWord = __webpack_require__(93157),
    toString = __webpack_require__(79833),
    unicodeWords = __webpack_require__(2757);

/**
 * Splits \`string\` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like \`_.map\`.
 * @returns {Array} Returns the words of \`string\`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg3NDguanMiLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLG1CQUFPLENBQUMsS0FBZTtBQUN4QyxxQkFBcUIsbUJBQU8sQ0FBQyxLQUFtQjtBQUNoRCxlQUFlLG1CQUFPLENBQUMsS0FBWTtBQUNuQyxtQkFBbUIsbUJBQU8sQ0FBQyxJQUFpQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFlBQVksUUFBUTtBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcz9hNWE5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBhc2NpaVdvcmRzID0gcmVxdWlyZSgnLi9fYXNjaWlXb3JkcycpLFxuICAgIGhhc1VuaWNvZGVXb3JkID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZVdvcmQnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1bmljb2RlV29yZHMgPSByZXF1aXJlKCcuL191bmljb2RlV29yZHMnKTtcblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///58748
`)},16305:function(__unused_webpack_module,exports){"use strict";eval(`
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Iter_peek;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenData = void 0;
exports.parse = parse;
exports.compile = compile;
exports.match = match;
const DEFAULT_DELIMITER = "/";
const NOOP_VALUE = (value) => value;
const ID_START = /^[$_\\p{ID_Start}]$/u;
const ID_CONTINUE = /^[$\\u200c\\u200d\\p{ID_Continue}]$/u;
const DEBUG_URL = "https://git.new/pathToRegexpError";
const SIMPLE_TOKENS = {
    // Groups.
    "{": "{",
    "}": "}",
    // Reserved.
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "+": "+",
    "?": "?",
    "!": "!",
};
/**
 * Escape a regular expression string.
 */
function escape(str) {
    return str.replace(/[.+*?^\${}()[\\]|/\\\\]/g, "\\\\$&");
}
/**
 * Get the flags for a regexp from the options.
 */
function toFlags(options) {
    return options.sensitive ? "s" : "is";
}
/**
 * Tokenize input string.
 */
function* lexer(str) {
    const chars = [...str];
    let i = 0;
    function name() {
        let value = "";
        if (ID_START.test(chars[++i])) {
            value += chars[i];
            while (ID_CONTINUE.test(chars[++i])) {
                value += chars[i];
            }
        }
        else if (chars[i] === '"') {
            let pos = i;
            while (i < chars.length) {
                if (chars[++i] === '"') {
                    i++;
                    pos = 0;
                    break;
                }
                if (chars[i] === "\\\\") {
                    value += chars[++i];
                }
                else {
                    value += chars[i];
                }
            }
            if (pos) {
                throw new TypeError(\`Unterminated quote at \${pos}: \${DEBUG_URL}\`);
            }
        }
        if (!value) {
            throw new TypeError(\`Missing parameter name at \${i}: \${DEBUG_URL}\`);
        }
        return value;
    }
    while (i < chars.length) {
        const value = chars[i];
        const type = SIMPLE_TOKENS[value];
        if (type) {
            yield { type, index: i++, value };
        }
        else if (value === "\\\\") {
            yield { type: "ESCAPED", index: i++, value: chars[i++] };
        }
        else if (value === ":") {
            const value = name();
            yield { type: "PARAM", index: i, value };
        }
        else if (value === "*") {
            const value = name();
            yield { type: "WILDCARD", index: i, value };
        }
        else {
            yield { type: "CHAR", index: i, value: chars[i++] };
        }
    }
    return { type: "END", index: i, value: "" };
}
class Iter {
    constructor(tokens) {
        this.tokens = tokens;
        _Iter_peek.set(this, void 0);
    }
    peek() {
        if (!__classPrivateFieldGet(this, _Iter_peek, "f")) {
            const next = this.tokens.next();
            __classPrivateFieldSet(this, _Iter_peek, next.value, "f");
        }
        return __classPrivateFieldGet(this, _Iter_peek, "f");
    }
    tryConsume(type) {
        const token = this.peek();
        if (token.type !== type)
            return;
        __classPrivateFieldSet(this, _Iter_peek, undefined, "f"); // Reset after consumed.
        return token.value;
    }
    consume(type) {
        const value = this.tryConsume(type);
        if (value !== undefined)
            return value;
        const { type: nextType, index } = this.peek();
        throw new TypeError(\`Unexpected \${nextType} at \${index}, expected \${type}: \${DEBUG_URL}\`);
    }
    text() {
        let result = "";
        let value;
        while ((value = this.tryConsume("CHAR") || this.tryConsume("ESCAPED"))) {
            result += value;
        }
        return result;
    }
}
_Iter_peek = new WeakMap();
/**
 * Tokenized path instance.
 */
class TokenData {
    constructor(tokens) {
        this.tokens = tokens;
    }
}
exports.TokenData = TokenData;
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options = {}) {
    const { encodePath = NOOP_VALUE } = options;
    const it = new Iter(lexer(str));
    function consume(endType) {
        const tokens = [];
        while (true) {
            const path = it.text();
            if (path)
                tokens.push({ type: "text", value: encodePath(path) });
            const param = it.tryConsume("PARAM");
            if (param) {
                tokens.push({
                    type: "param",
                    name: param,
                });
                continue;
            }
            const wildcard = it.tryConsume("WILDCARD");
            if (wildcard) {
                tokens.push({
                    type: "wildcard",
                    name: wildcard,
                });
                continue;
            }
            const open = it.tryConsume("{");
            if (open) {
                tokens.push({
                    type: "group",
                    tokens: consume("}"),
                });
                continue;
            }
            it.consume(endType);
            return tokens;
        }
    }
    const tokens = consume("END");
    return new TokenData(tokens);
}
/**
 * Transform tokens into a path building function.
 */
function $compile(data, options) {
    const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const fn = tokensToFunction(data.tokens, delimiter, encode);
    return function path(data = {}) {
        const [path, ...missing] = fn(data);
        if (missing.length) {
            throw new TypeError(\`Missing parameters: \${missing.join(", ")}\`);
        }
        return path;
    };
}
/**
 * Compile a string to a template function for the path.
 */
function compile(path, options = {}) {
    return $compile(path instanceof TokenData ? path : parse(path, options), options);
}
function tokensToFunction(tokens, delimiter, encode) {
    const encoders = tokens.map((token) => tokenToFunction(token, delimiter, encode));
    return (data) => {
        const result = [""];
        for (const encoder of encoders) {
            const [value, ...extras] = encoder(data);
            result[0] += value;
            result.push(...extras);
        }
        return result;
    };
}
/**
 * Convert a single token into a path building function.
 */
function tokenToFunction(token, delimiter, encode) {
    if (token.type === "text")
        return () => [token.value];
    if (token.type === "group") {
        const fn = tokensToFunction(token.tokens, delimiter, encode);
        return (data) => {
            const [value, ...missing] = fn(data);
            if (!missing.length)
                return [value];
            return [""];
        };
    }
    const encodeValue = encode || NOOP_VALUE;
    if (token.type === "wildcard" && encode !== false) {
        return (data) => {
            const value = data[token.name];
            if (value == null)
                return ["", token.name];
            if (!Array.isArray(value) || value.length === 0) {
                throw new TypeError(\`Expected "\${token.name}" to be a non-empty array\`);
            }
            return [
                value
                    .map((value, index) => {
                    if (typeof value !== "string") {
                        throw new TypeError(\`Expected "\${token.name}/\${index}" to be a string\`);
                    }
                    return encodeValue(value);
                })
                    .join(delimiter),
            ];
        };
    }
    return (data) => {
        const value = data[token.name];
        if (value == null)
            return ["", token.name];
        if (typeof value !== "string") {
            throw new TypeError(\`Expected "\${token.name}" to be a string\`);
        }
        return [encodeValue(value)];
    };
}
/**
 * Create path match function from \`path-to-regexp\` spec.
 */
function $match(data, options = {}) {
    const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER, end = true, trailing = true, } = options;
    const flags = toFlags(options);
    const sources = [];
    const keys = [];
    for (const { tokens } of data) {
        for (const seq of flatten(tokens, 0, [])) {
            const regexp = sequenceToRegExp(seq, delimiter, keys);
            sources.push(regexp);
        }
    }
    let pattern = \`^(?:\${sources.join("|")})\`;
    if (trailing)
        pattern += \`(?:\${escape(delimiter)}$)?\`;
    pattern += end ? "$" : \`(?=\${escape(delimiter)}|$)\`;
    const re = new RegExp(pattern, flags);
    const decoders = keys.map((key) => {
        if (decode === false)
            return NOOP_VALUE;
        if (key.type === "param")
            return decode;
        return (value) => value.split(delimiter).map(decode);
    });
    return Object.assign(function match(input) {
        const m = re.exec(input);
        if (!m)
            return false;
        const { 0: path } = m;
        const params = Object.create(null);
        for (let i = 1; i < m.length; i++) {
            if (m[i] === undefined)
                continue;
            const key = keys[i - 1];
            const decoder = decoders[i - 1];
            params[key.name] = decoder(m[i]);
        }
        return { path, params };
    }, { re });
}
function match(path, options = {}) {
    const paths = Array.isArray(path) ? path : [path];
    const items = paths.map((path) => path instanceof TokenData ? path : parse(path, options));
    return $match(items, options);
}
/**
 * Generate a flat list of sequence tokens from the given tokens.
 */
function* flatten(tokens, index, init) {
    if (index === tokens.length) {
        return yield init;
    }
    const token = tokens[index];
    if (token.type === "group") {
        const fork = init.slice();
        for (const seq of flatten(token.tokens, 0, fork)) {
            yield* flatten(tokens, index + 1, seq);
        }
    }
    else {
        init.push(token);
    }
    yield* flatten(tokens, index + 1, init);
}
/**
 * Transform a flat sequence of tokens into a regular expression.
 */
function sequenceToRegExp(tokens, delimiter, keys) {
    let result = "";
    let backtrack = "";
    let isSafeSegmentParam = true;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.type === "text") {
            result += escape(token.value);
            backtrack = token.value;
            isSafeSegmentParam || (isSafeSegmentParam = token.value.includes(delimiter));
            continue;
        }
        if (token.type === "param" || token.type === "wildcard") {
            if (!isSafeSegmentParam && !backtrack) {
                throw new TypeError(\`Missing text after "\${token.name}": \${DEBUG_URL}\`);
            }
            if (token.type === "param") {
                result += \`(\${negate(delimiter, isSafeSegmentParam ? "" : backtrack)}+)\`;
            }
            else {
                result += \`(.+)\`;
            }
            keys.push(token);
            backtrack = "";
            isSafeSegmentParam = false;
            continue;
        }
    }
    return result;
}
function negate(delimiter, backtrack) {
    const values = [delimiter, backtrack].filter(Boolean);
    const isSimple = values.every((value) => value.length === 1);
    if (isSimple)
        return \`[^\${escape(values.join(""))}]\`;
    return \`(?:(?!\${values.map(escape).join("|")}).)\`;
}
//# sourceMappingURL=index.js.map//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsWUFBWSwyRkFBMkY7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLLElBQUksSUFBSTtBQUNiO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFdBQVcsS0FBSyxVQUFVO0FBQ3JGO0FBQ0E7QUFDQSw4QkFBOEIsdURBQXVEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QyxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC10by1yZWdleHAvZGlzdC9pbmRleC5qcz9hYTk5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9JdGVyX3BlZWs7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRva2VuRGF0YSA9IHZvaWQgMDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG5jb25zdCBERUZBVUxUX0RFTElNSVRFUiA9IFwiL1wiO1xuY29uc3QgTk9PUF9WQUxVRSA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCBJRF9TVEFSVCA9IC9eWyRfXFxwe0lEX1N0YXJ0fV0kL3U7XG5jb25zdCBJRF9DT05USU5VRSA9IC9eWyRcXHUyMDBjXFx1MjAwZFxccHtJRF9Db250aW51ZX1dJC91O1xuY29uc3QgREVCVUdfVVJMID0gXCJodHRwczovL2dpdC5uZXcvcGF0aFRvUmVnZXhwRXJyb3JcIjtcbmNvbnN0IFNJTVBMRV9UT0tFTlMgPSB7XG4gICAgLy8gR3JvdXBzLlxuICAgIFwie1wiOiBcIntcIixcbiAgICBcIn1cIjogXCJ9XCIsXG4gICAgLy8gUmVzZXJ2ZWQuXG4gICAgXCIoXCI6IFwiKFwiLFxuICAgIFwiKVwiOiBcIilcIixcbiAgICBcIltcIjogXCJbXCIsXG4gICAgXCJdXCI6IFwiXVwiLFxuICAgIFwiK1wiOiBcIitcIixcbiAgICBcIj9cIjogXCI/XCIsXG4gICAgXCIhXCI6IFwiIVwiLFxufTtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4rKj9eJHt9KClbXFxdfC9cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gdG9GbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJzXCIgOiBcImlzXCI7XG59XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24qIGxleGVyKHN0cikge1xuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cl07XG4gICAgbGV0IGkgPSAwO1xuICAgIGZ1bmN0aW9uIG5hbWUoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChJRF9TVEFSVC50ZXN0KGNoYXJzWysraV0pKSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBjaGFyc1tpXTtcbiAgICAgICAgICAgIHdoaWxlIChJRF9DT05USU5VRS50ZXN0KGNoYXJzWysraV0pKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gY2hhcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhcnNbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBpO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBjaGFycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcnNbKytpXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhcnNbaV0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IGNoYXJzWysraV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSBjaGFyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW50ZXJtaW5hdGVkIHF1b3RlIGF0ICR7cG9zfTogJHtERUJVR19VUkx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCAke2l9OiAke0RFQlVHX1VSTH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHdoaWxlIChpIDwgY2hhcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY2hhcnNbaV07XG4gICAgICAgIGNvbnN0IHR5cGUgPSBTSU1QTEVfVE9LRU5TW3ZhbHVlXTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHlpZWxkIHsgdHlwZSwgaW5kZXg6IGkrKywgdmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHlpZWxkIHsgdHlwZTogXCJFU0NBUEVEXCIsIGluZGV4OiBpKyssIHZhbHVlOiBjaGFyc1tpKytdIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUoKTtcbiAgICAgICAgICAgIHlpZWxkIHsgdHlwZTogXCJQQVJBTVwiLCBpbmRleDogaSwgdmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmFtZSgpO1xuICAgICAgICAgICAgeWllbGQgeyB0eXBlOiBcIldJTERDQVJEXCIsIGluZGV4OiBpLCB2YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBjaGFyc1tpKytdIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH07XG59XG5jbGFzcyBJdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnMpIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIF9JdGVyX3BlZWsuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgfVxuICAgIHBlZWsoKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfSXRlcl9wZWVrLCBcImZcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLnRva2Vucy5uZXh0KCk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9JdGVyX3BlZWssIG5leHQudmFsdWUsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfSXRlcl9wZWVrLCBcImZcIik7XG4gICAgfVxuICAgIHRyeUNvbnN1bWUodHlwZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfSXRlcl9wZWVrLCB1bmRlZmluZWQsIFwiZlwiKTsgLy8gUmVzZXQgYWZ0ZXIgY29uc3VtZWQuXG4gICAgICAgIHJldHVybiB0b2tlbi52YWx1ZTtcbiAgICB9XG4gICAgY29uc3VtZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY29uc3QgeyB0eXBlOiBuZXh0VHlwZSwgaW5kZXggfSA9IHRoaXMucGVlaygpO1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmV4cGVjdGVkICR7bmV4dFR5cGV9IGF0ICR7aW5kZXh9LCBleHBlY3RlZCAke3R5cGV9OiAke0RFQlVHX1VSTH1gKTtcbiAgICB9XG4gICAgdGV4dCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRoaXMudHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdGhpcy50cnlDb25zdW1lKFwiRVNDQVBFRFwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbl9JdGVyX3BlZWsgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUb2tlbml6ZWQgcGF0aCBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVG9rZW5EYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnMpIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgfVxufVxuZXhwb3J0cy5Ub2tlbkRhdGEgPSBUb2tlbkRhdGE7XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IGVuY29kZVBhdGggPSBOT09QX1ZBTFVFIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGl0ID0gbmV3IEl0ZXIobGV4ZXIoc3RyKSk7XG4gICAgZnVuY3Rpb24gY29uc3VtZShlbmRUeXBlKSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGl0LnRleHQoKTtcbiAgICAgICAgICAgIGlmIChwYXRoKVxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBlbmNvZGVQYXRoKHBhdGgpIH0pO1xuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBpdC50cnlDb25zdW1lKFwiUEFSQU1cIik7XG4gICAgICAgICAgICBpZiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcGFyYW0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3aWxkY2FyZCA9IGl0LnRyeUNvbnN1bWUoXCJXSUxEQ0FSRFwiKTtcbiAgICAgICAgICAgIGlmICh3aWxkY2FyZCkge1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3aWxkY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aWxkY2FyZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9wZW4gPSBpdC50cnlDb25zdW1lKFwie1wiKTtcbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuczogY29uc3VtZShcIn1cIiksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdC5jb25zdW1lKGVuZFR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2tlbnMgPSBjb25zdW1lKFwiRU5EXCIpO1xuICAgIHJldHVybiBuZXcgVG9rZW5EYXRhKHRva2Vucyk7XG59XG4vKipcbiAqIFRyYW5zZm9ybSB0b2tlbnMgaW50byBhIHBhdGggYnVpbGRpbmcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uICRjb21waWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudCwgZGVsaW1pdGVyID0gREVGQVVMVF9ERUxJTUlURVIgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZm4gPSB0b2tlbnNUb0Z1bmN0aW9uKGRhdGEudG9rZW5zLCBkZWxpbWl0ZXIsIGVuY29kZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBhdGgoZGF0YSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IFtwYXRoLCAuLi5taXNzaW5nXSA9IGZuKGRhdGEpO1xuICAgICAgICBpZiAobWlzc2luZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgcGFyYW1ldGVyczogJHttaXNzaW5nLmpvaW4oXCIsIFwiKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiAkY29tcGlsZShwYXRoIGluc3RhbmNlb2YgVG9rZW5EYXRhID8gcGF0aCA6IHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBkZWxpbWl0ZXIsIGVuY29kZSkge1xuICAgIGNvbnN0IGVuY29kZXJzID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHRva2VuVG9GdW5jdGlvbih0b2tlbiwgZGVsaW1pdGVyLCBlbmNvZGUpKTtcbiAgICByZXR1cm4gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW1wiXCJdO1xuICAgICAgICBmb3IgKGNvbnN0IGVuY29kZXIgb2YgZW5jb2RlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgLi4uZXh0cmFzXSA9IGVuY29kZXIoZGF0YSk7XG4gICAgICAgICAgICByZXN1bHRbMF0gKz0gdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi5leHRyYXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cbi8qKlxuICogQ29udmVydCBhIHNpbmdsZSB0b2tlbiBpbnRvIGEgcGF0aCBidWlsZGluZyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5Ub0Z1bmN0aW9uKHRva2VuLCBkZWxpbWl0ZXIsIGVuY29kZSkge1xuICAgIGlmICh0b2tlbi50eXBlID09PSBcInRleHRcIilcbiAgICAgICAgcmV0dXJuICgpID0+IFt0b2tlbi52YWx1ZV07XG4gICAgaWYgKHRva2VuLnR5cGUgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICBjb25zdCBmbiA9IHRva2Vuc1RvRnVuY3Rpb24odG9rZW4udG9rZW5zLCBkZWxpbWl0ZXIsIGVuY29kZSk7XG4gICAgICAgIHJldHVybiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCAuLi5taXNzaW5nXSA9IGZuKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCFtaXNzaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICAgICAgICAgIHJldHVybiBbXCJcIl07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGVuY29kZVZhbHVlID0gZW5jb2RlIHx8IE5PT1BfVkFMVUU7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09IFwid2lsZGNhcmRcIiAmJiBlbmNvZGUgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcIlwiLCB0b2tlbi5uYW1lXTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXCIke3Rva2VuLm5hbWV9XCIgdG8gYmUgYSBub24tZW1wdHkgYXJyYXlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFwiJHt0b2tlbi5uYW1lfS8ke2luZGV4fVwiIHRvIGJlIGEgc3RyaW5nYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuam9pbihkZWxpbWl0ZXIpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gW1wiXCIsIHRva2VuLm5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcIiR7dG9rZW4ubmFtZX1cIiB0byBiZSBhIHN0cmluZ2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZW5jb2RlVmFsdWUodmFsdWUpXTtcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gJG1hdGNoKGRhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50LCBkZWxpbWl0ZXIgPSBERUZBVUxUX0RFTElNSVRFUiwgZW5kID0gdHJ1ZSwgdHJhaWxpbmcgPSB0cnVlLCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBmbGFncyA9IHRvRmxhZ3Mob3B0aW9ucyk7XG4gICAgY29uc3Qgc291cmNlcyA9IFtdO1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHsgdG9rZW5zIH0gb2YgZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IHNlcSBvZiBmbGF0dGVuKHRva2VucywgMCwgW10pKSB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBzZXF1ZW5jZVRvUmVnRXhwKHNlcSwgZGVsaW1pdGVyLCBrZXlzKTtcbiAgICAgICAgICAgIHNvdXJjZXMucHVzaChyZWdleHApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBwYXR0ZXJuID0gYF4oPzoke3NvdXJjZXMuam9pbihcInxcIil9KWA7XG4gICAgaWYgKHRyYWlsaW5nKVxuICAgICAgICBwYXR0ZXJuICs9IGAoPzoke2VzY2FwZShkZWxpbWl0ZXIpfSQpP2A7XG4gICAgcGF0dGVybiArPSBlbmQgPyBcIiRcIiA6IGAoPz0ke2VzY2FwZShkZWxpbWl0ZXIpfXwkKWA7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKTtcbiAgICBjb25zdCBkZWNvZGVycyA9IGtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRlY29kZSA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gTk9PUF9WQUxVRTtcbiAgICAgICAgaWYgKGtleS50eXBlID09PSBcInBhcmFtXCIpXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlO1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB2YWx1ZS5zcGxpdChkZWxpbWl0ZXIpLm1hcChkZWNvZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGZ1bmN0aW9uIG1hdGNoKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG0gPSByZS5leGVjKGlucHV0KTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCB7IDA6IHBhdGggfSA9IG07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlciA9IGRlY29kZXJzW2kgLSAxXTtcbiAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGVyKG1baV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGgsIHBhcmFtcyB9O1xuICAgIH0sIHsgcmUgfSk7XG59XG5mdW5jdGlvbiBtYXRjaChwYXRoLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBwYXRocyA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogW3BhdGhdO1xuICAgIGNvbnN0IGl0ZW1zID0gcGF0aHMubWFwKChwYXRoKSA9PiBwYXRoIGluc3RhbmNlb2YgVG9rZW5EYXRhID8gcGF0aCA6IHBhcnNlKHBhdGgsIG9wdGlvbnMpKTtcbiAgICByZXR1cm4gJG1hdGNoKGl0ZW1zLCBvcHRpb25zKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBmbGF0IGxpc3Qgb2Ygc2VxdWVuY2UgdG9rZW5zIGZyb20gdGhlIGdpdmVuIHRva2Vucy5cbiAqL1xuZnVuY3Rpb24qIGZsYXR0ZW4odG9rZW5zLCBpbmRleCwgaW5pdCkge1xuICAgIGlmIChpbmRleCA9PT0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4geWllbGQgaW5pdDtcbiAgICB9XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuICAgIGlmICh0b2tlbi50eXBlID09PSBcImdyb3VwXCIpIHtcbiAgICAgICAgY29uc3QgZm9yayA9IGluaXQuc2xpY2UoKTtcbiAgICAgICAgZm9yIChjb25zdCBzZXEgb2YgZmxhdHRlbih0b2tlbi50b2tlbnMsIDAsIGZvcmspKSB7XG4gICAgICAgICAgICB5aWVsZCogZmxhdHRlbih0b2tlbnMsIGluZGV4ICsgMSwgc2VxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5pdC5wdXNoKHRva2VuKTtcbiAgICB9XG4gICAgeWllbGQqIGZsYXR0ZW4odG9rZW5zLCBpbmRleCArIDEsIGluaXQpO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBmbGF0IHNlcXVlbmNlIG9mIHRva2VucyBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uLlxuICovXG5mdW5jdGlvbiBzZXF1ZW5jZVRvUmVnRXhwKHRva2VucywgZGVsaW1pdGVyLCBrZXlzKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgbGV0IGJhY2t0cmFjayA9IFwiXCI7XG4gICAgbGV0IGlzU2FmZVNlZ21lbnRQYXJhbSA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIGlmICh0b2tlbi50eXBlID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVzY2FwZSh0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICBiYWNrdHJhY2sgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgIGlzU2FmZVNlZ21lbnRQYXJhbSB8fCAoaXNTYWZlU2VnbWVudFBhcmFtID0gdG9rZW4udmFsdWUuaW5jbHVkZXMoZGVsaW1pdGVyKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gXCJwYXJhbVwiIHx8IHRva2VuLnR5cGUgPT09IFwid2lsZGNhcmRcIikge1xuICAgICAgICAgICAgaWYgKCFpc1NhZmVTZWdtZW50UGFyYW0gJiYgIWJhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgdGV4dCBhZnRlciBcIiR7dG9rZW4ubmFtZX1cIjogJHtERUJVR19VUkx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gXCJwYXJhbVwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGAoJHtuZWdhdGUoZGVsaW1pdGVyLCBpc1NhZmVTZWdtZW50UGFyYW0gPyBcIlwiIDogYmFja3RyYWNrKX0rKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYCguKylgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIGJhY2t0cmFjayA9IFwiXCI7XG4gICAgICAgICAgICBpc1NhZmVTZWdtZW50UGFyYW0gPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBuZWdhdGUoZGVsaW1pdGVyLCBiYWNrdHJhY2spIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbZGVsaW1pdGVyLCBiYWNrdHJhY2tdLmZpbHRlcihCb29sZWFuKTtcbiAgICBjb25zdCBpc1NpbXBsZSA9IHZhbHVlcy5ldmVyeSgodmFsdWUpID0+IHZhbHVlLmxlbmd0aCA9PT0gMSk7XG4gICAgaWYgKGlzU2ltcGxlKVxuICAgICAgICByZXR1cm4gYFteJHtlc2NhcGUodmFsdWVzLmpvaW4oXCJcIikpfV1gO1xuICAgIHJldHVybiBgKD86KD8hJHt2YWx1ZXMubWFwKGVzY2FwZSkuam9pbihcInxcIil9KS4pYDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///16305
`)},64599:function(module,__unused_webpack_exports,__webpack_require__){eval(`var unsupportedIterableToArray = __webpack_require__(96263);
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQ1OTkuanMiLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDLG1CQUFPLENBQUMsS0FBaUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QixTQUFTLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdW1panMvYmFiZWwtcHJlc2V0LXVtaS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyLmpzP2NkNDMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkge1xuICB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKCFpdCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKGl0KSBvID0gaXQ7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHM6IEYsXG4gICAgICAgIG46IGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZTogZnVuY3Rpb24gZShfZSkge1xuICAgICAgICAgIHRocm93IF9lO1xuICAgICAgICB9LFxuICAgICAgICBmOiBGXG4gICAgICB9O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cbiAgdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLFxuICAgIGRpZEVyciA9IGZhbHNlLFxuICAgIGVycjtcbiAgcmV0dXJuIHtcbiAgICBzOiBmdW5jdGlvbiBzKCkge1xuICAgICAgaXQgPSBpdC5jYWxsKG8pO1xuICAgIH0sXG4gICAgbjogZnVuY3Rpb24gbigpIHtcbiAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTtcbiAgICAgIHJldHVybiBzdGVwO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24gZShfZTIpIHtcbiAgICAgIGRpZEVyciA9IHRydWU7XG4gICAgICBlcnIgPSBfZTI7XG4gICAgfSxcbiAgICBmOiBmdW5jdGlvbiBmKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///64599
`)}}]);
