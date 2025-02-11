(self.webpackChunk=self.webpackChunk||[]).push([[44],{24435:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ input_number; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/UpOutlined.js
// This icon file is generated automatically.
var UpOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, "name": "up", "theme": "outlined" };
/* harmony default export */ var asn_UpOutlined = (UpOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var UpOutlined_UpOutlined = function UpOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_UpOutlined
  }));
};

/**![up](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg5MC41IDc1NS4zTDUzNy45IDI2OS4yYy0xMi44LTE3LjYtMzktMTcuNi01MS43IDBMMTMzLjUgNzU1LjNBOCA4IDAgMDAxNDAgNzY4aDc1YzUuMSAwIDkuOS0yLjUgMTIuOS02LjZMNTEyIDM2OS44bDI4NC4xIDM5MS42YzMgNC4xIDcuOCA2LjYgMTIuOSA2LjZoNzVjNi41IDAgMTAuMy03LjQgNi41LTEyLjd6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/react.forwardRef(UpOutlined_UpOutlined);
if (false) {}
/* harmony default export */ var icons_UpOutlined = (RefIcon);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/supportUtil.js
function supportBigInt() {
  return typeof BigInt === 'function';
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/numberUtil.js

function isEmpty(value) {
  return !value && value !== 0 && !Number.isNaN(value) || !String(value).trim();
}

/**
 * Format string number to readable number
 */
function trimNumber(numStr) {
  var str = numStr.trim();
  var negative = str.startsWith('-');
  if (negative) {
    str = str.slice(1);
  }
  str = str
  // Remove decimal 0. \`1.000\` => \`1.\`, \`1.100\` => \`1.1\`
  .replace(/(\\.\\d*[^0])0*$/, '$1')
  // Remove useless decimal. \`1.\` => \`1\`
  .replace(/\\.0*$/, '')
  // Remove integer 0. \`0001\` => \`1\`, 000.1' => \`.1\`
  .replace(/^0+/, '');
  if (str.startsWith('.')) {
    str = "0".concat(str);
  }
  var trimStr = str || '0';
  var splitNumber = trimStr.split('.');
  var integerStr = splitNumber[0] || '0';
  var decimalStr = splitNumber[1] || '0';
  if (integerStr === '0' && decimalStr === '0') {
    negative = false;
  }
  var negativeStr = negative ? '-' : '';
  return {
    negative: negative,
    negativeStr: negativeStr,
    trimStr: trimStr,
    integerStr: integerStr,
    decimalStr: decimalStr,
    fullStr: "".concat(negativeStr).concat(trimStr)
  };
}
function isE(number) {
  var str = String(number);
  return !Number.isNaN(Number(str)) && str.includes('e');
}

/**
 * [Legacy] Convert 1e-9 to 0.000000001.
 * This may lose some precision if user really want 1e-9.
 */
function getNumberPrecision(number) {
  var numStr = String(number);
  if (isE(number)) {
    var precision = Number(numStr.slice(numStr.indexOf('e-') + 2));
    var decimalMatch = numStr.match(/\\.(\\d+)/);
    if (decimalMatch !== null && decimalMatch !== void 0 && decimalMatch[1]) {
      precision += decimalMatch[1].length;
    }
    return precision;
  }
  return numStr.includes('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0;
}

/**
 * Convert number (includes scientific notation) to -xxx.yyy format
 */
function num2str(number) {
  var numStr = String(number);
  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
    }
    if (number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
    }
    numStr = number.toFixed(getNumberPrecision(numStr));
  }
  return trimNumber(numStr).fullStr;
}
function validateNumber(num) {
  if (typeof num === 'number') {
    return !Number.isNaN(num);
  }

  // Empty
  if (!num) {
    return false;
  }
  return (
    // Normal type: 11.28
    /^\\s*-?\\d+(\\.\\d+)?\\s*$/.test(num) ||
    // Pre-number: 1.
    /^\\s*-?\\d+\\.\\s*$/.test(num) ||
    // Post-number: .1
    /^\\s*-?\\.\\d+\\s*$/.test(num)
  );
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/BigIntDecimal.js




var BigIntDecimal = /*#__PURE__*/function () {
  /** BigInt will convert \`0009\` to \`9\`. We need record the len of decimal */

  function BigIntDecimal(value) {
    (0,classCallCheck/* default */.Z)(this, BigIntDecimal);
    (0,defineProperty/* default */.Z)(this, "origin", '');
    (0,defineProperty/* default */.Z)(this, "negative", void 0);
    (0,defineProperty/* default */.Z)(this, "integer", void 0);
    (0,defineProperty/* default */.Z)(this, "decimal", void 0);
    (0,defineProperty/* default */.Z)(this, "decimalLen", void 0);
    (0,defineProperty/* default */.Z)(this, "empty", void 0);
    (0,defineProperty/* default */.Z)(this, "nan", void 0);
    if (isEmpty(value)) {
      this.empty = true;
      return;
    }
    this.origin = String(value);

    // Act like Number convert
    if (value === '-' || Number.isNaN(value)) {
      this.nan = true;
      return;
    }
    var mergedValue = value;

    // We need convert back to Number since it require \`toFixed\` to handle this
    if (isE(mergedValue)) {
      mergedValue = Number(mergedValue);
    }
    mergedValue = typeof mergedValue === 'string' ? mergedValue : num2str(mergedValue);
    if (validateNumber(mergedValue)) {
      var trimRet = trimNumber(mergedValue);
      this.negative = trimRet.negative;
      var numbers = trimRet.trimStr.split('.');
      this.integer = BigInt(numbers[0]);
      var decimalStr = numbers[1] || '0';
      this.decimal = BigInt(decimalStr);
      this.decimalLen = decimalStr.length;
    } else {
      this.nan = true;
    }
  }
  (0,createClass/* default */.Z)(BigIntDecimal, [{
    key: "getMark",
    value: function getMark() {
      return this.negative ? '-' : '';
    }
  }, {
    key: "getIntegerStr",
    value: function getIntegerStr() {
      return this.integer.toString();
    }

    /**
     * @private get decimal string
     */
  }, {
    key: "getDecimalStr",
    value: function getDecimalStr() {
      return this.decimal.toString().padStart(this.decimalLen, '0');
    }

    /**
     * @private Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */
  }, {
    key: "alignDecimal",
    value: function alignDecimal(decimalLength) {
      var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, '0'));
      return BigInt(str);
    }
  }, {
    key: "negate",
    value: function negate() {
      var clone = new BigIntDecimal(this.toString());
      clone.negative = !clone.negative;
      return clone;
    }
  }, {
    key: "cal",
    value: function cal(offset, calculator, calDecimalLen) {
      var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
      var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
      var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
      var valueStr = calculator(myAlignedDecimal, offsetAlignedDecimal).toString();
      var nextDecimalLength = calDecimalLen(maxDecimalLength);

      // We need fill string length back to \`maxDecimalLength\` to avoid parser failed
      var _trimNumber = trimNumber(valueStr),
        negativeStr = _trimNumber.negativeStr,
        trimStr = _trimNumber.trimStr;
      var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(nextDecimalLength + 1, '0'));
      return new BigIntDecimal("".concat(hydrateValueStr.slice(0, -nextDecimalLength), ".").concat(hydrateValueStr.slice(-nextDecimalLength)));
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new BigIntDecimal(value);
      }
      var offset = new BigIntDecimal(value);
      if (offset.isInvalidate()) {
        return this;
      }
      return this.cal(offset, function (num1, num2) {
        return num1 + num2;
      }, function (len) {
        return len;
      });
    }
  }, {
    key: "multi",
    value: function multi(value) {
      var target = new BigIntDecimal(value);
      if (this.isInvalidate() || target.isInvalidate()) {
        return new BigIntDecimal(NaN);
      }
      return this.cal(target, function (num1, num2) {
        return num1 * num2;
      }, function (len) {
        return len * 2;
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      if (this.isNaN()) {
        return NaN;
      }
      return Number(this.toString());
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!safe) {
        return this.origin;
      }
      if (this.isInvalidate()) {
        return '';
      }
      return trimNumber("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
    }
  }]);
  return BigIntDecimal;
}();

;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/NumberDecimal.js





/**
 * We can remove this when IE not support anymore
 */
var NumberDecimal = /*#__PURE__*/function () {
  function NumberDecimal(value) {
    (0,classCallCheck/* default */.Z)(this, NumberDecimal);
    (0,defineProperty/* default */.Z)(this, "origin", '');
    (0,defineProperty/* default */.Z)(this, "number", void 0);
    (0,defineProperty/* default */.Z)(this, "empty", void 0);
    if (isEmpty(value)) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    this.number = Number(value);
  }
  (0,createClass/* default */.Z)(NumberDecimal, [{
    key: "negate",
    value: function negate() {
      return new NumberDecimal(-this.toNumber());
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new NumberDecimal(value);
      }
      var target = Number(value);
      if (Number.isNaN(target)) {
        return this;
      }
      var number = this.number + target;

      // [Legacy] Back to safe integer
      if (number > Number.MAX_SAFE_INTEGER) {
        return new NumberDecimal(Number.MAX_SAFE_INTEGER);
      }
      if (number < Number.MIN_SAFE_INTEGER) {
        return new NumberDecimal(Number.MIN_SAFE_INTEGER);
      }
      var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
      return new NumberDecimal(number.toFixed(maxPrecision));
    }
  }, {
    key: "multi",
    value: function multi(value) {
      var target = Number(value);
      if (this.isInvalidate() || Number.isNaN(target)) {
        return new NumberDecimal(NaN);
      }
      var number = this.number * target;

      // [Legacy] Back to safe integer
      if (number > Number.MAX_SAFE_INTEGER) {
        return new NumberDecimal(Number.MAX_SAFE_INTEGER);
      }
      if (number < Number.MIN_SAFE_INTEGER) {
        return new NumberDecimal(Number.MIN_SAFE_INTEGER);
      }
      var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
      return new NumberDecimal(number.toFixed(maxPrecision));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!safe) {
        return this.origin;
      }
      if (this.isInvalidate()) {
        return '';
      }
      return num2str(this.number);
    }
  }]);
  return NumberDecimal;
}();

;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/MiniDecimal.js
/* eslint-disable max-classes-per-file */






// Still support origin export

function getMiniDecimal(value) {
  // We use BigInt here.
  // Will fallback to Number if not support.
  if (supportBigInt()) {
    return new BigIntDecimal(value);
  }
  return new NumberDecimal(value);
}

/**
 * Align the logic of toFixed to around like 1.5 => 2.
 * If set \`cutOnly\`, will just remove the over decimal part.
 */
function toFixed(numStr, separatorStr, precision) {
  var cutOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (numStr === '') {
    return '';
  }
  var _trimNumber = trimNumber(numStr),
    negativeStr = _trimNumber.negativeStr,
    integerStr = _trimNumber.integerStr,
    decimalStr = _trimNumber.decimalStr;
  var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
  var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);
  if (precision >= 0) {
    // We will get last + 1 number to check if need advanced number
    var advancedNum = Number(decimalStr[precision]);
    if (advancedNum >= 5 && !cutOnly) {
      var advancedDecimal = getMiniDecimal(numStr).add("".concat(negativeStr, "0.").concat('0'.repeat(precision)).concat(10 - advancedNum));
      return toFixed(advancedDecimal.toString(), separatorStr, precision, cutOnly);
    }
    if (precision === 0) {
      return numberWithoutDecimal;
    }
    return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, '0').slice(0, precision));
  }
  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal;
  }
  return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/index.js




/* harmony default export */ var es = (getMiniDecimal);
// EXTERNAL MODULE: ./node_modules/rc-input/es/index.js + 2 modules
var rc_input_es = __webpack_require__(67656);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/proxyObject.js
/**
 * Proxy object if environment supported
 */
function proxyObject(obj, extendProps) {
  if (typeof Proxy !== 'undefined' && obj) {
    return new Proxy(obj, {
      get: function get(target, prop) {
        if (extendProps[prop]) {
          return extendProps[prop];
        }

        // Proxy origin property
        var originProp = target[prop];
        return typeof originProp === 'function' ? originProp.bind(target) : originProp;
      }
    });
  }
  return obj;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/hooks/useCursor.js


/**
 * Keep input cursor in the correct position if possible.
 * Is this necessary since we have \`formatter\` which may mass the content?
 */
function useCursor(input, focused) {
  var selectionRef = (0,react.useRef)(null);
  function recordCursor() {
    // Record position
    try {
      var start = input.selectionStart,
        end = input.selectionEnd,
        value = input.value;
      var beforeTxt = value.substring(0, start);
      var afterTxt = value.substring(end);
      selectionRef.current = {
        start: start,
        end: end,
        value: value,
        beforeTxt: beforeTxt,
        afterTxt: afterTxt
      };
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }

  /**
   * Restore logic:
   *  1. back string same
   *  2. start string same
   */
  function restoreCursor() {
    if (input && selectionRef.current && focused) {
      try {
        var value = input.value;
        var _selectionRef$current = selectionRef.current,
          beforeTxt = _selectionRef$current.beforeTxt,
          afterTxt = _selectionRef$current.afterTxt,
          start = _selectionRef$current.start;
        var startPos = value.length;
        if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else if (value.endsWith(afterTxt)) {
          startPos = value.length - selectionRef.current.afterTxt.length;
        } else {
          var beforeLastChar = beforeTxt[start - 1];
          var newIndex = value.indexOf(beforeLastChar, start - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        input.setSelectionRange(startPos, startPos);
      } catch (e) {
        (0,warning/* default */.ZP)(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
      }
    }
  }
  return [recordCursor, restoreCursor];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(31131);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMobile.js





/**
 * Hook to detect if the user is on a mobile device
 * Notice that this hook will only detect the device type in effect, so it will always be false in server side
 */
var useMobile = function useMobile() {
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    mobile = _useState2[0],
    setMobile = _useState2[1];
  (0,useLayoutEffect/* default */.Z)(function () {
    setMobile((0,isMobile/* default */.Z)());
  }, []);
  return mobile;
};
/* harmony default export */ var hooks_useMobile = (useMobile);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/StepHandler.js


/* eslint-disable react/no-unknown-property */





/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var STEP_INTERVAL = 200;

/**
 * When click and hold on a button - the delay before auto changing the value.
 */
var STEP_DELAY = 600;
function StepHandler(_ref) {
  var prefixCls = _ref.prefixCls,
    upNode = _ref.upNode,
    downNode = _ref.downNode,
    upDisabled = _ref.upDisabled,
    downDisabled = _ref.downDisabled,
    onStep = _ref.onStep;
  // ======================== Step ========================
  var stepTimeoutRef = react.useRef();
  var frameIds = react.useRef([]);
  var onStepRef = react.useRef();
  onStepRef.current = onStep;
  var onStopStep = function onStopStep() {
    clearTimeout(stepTimeoutRef.current);
  };

  // We will interval update step when hold mouse down
  var onStepMouseDown = function onStepMouseDown(e, up) {
    e.preventDefault();
    onStopStep();
    onStepRef.current(up);

    // Loop step for interval
    function loopStep() {
      onStepRef.current(up);
      stepTimeoutRef.current = setTimeout(loopStep, STEP_INTERVAL);
    }

    // First time press will wait some time to trigger loop step update
    stepTimeoutRef.current = setTimeout(loopStep, STEP_DELAY);
  };
  react.useEffect(function () {
    return function () {
      onStopStep();
      frameIds.current.forEach(function (id) {
        return raf/* default */.Z.cancel(id);
      });
    };
  }, []);

  // ======================= Render =======================
  var isMobile = hooks_useMobile();
  if (isMobile) {
    return null;
  }
  var handlerClassName = "".concat(prefixCls, "-handler");
  var upClassName = classnames_default()(handlerClassName, "".concat(handlerClassName, "-up"), (0,defineProperty/* default */.Z)({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
  var downClassName = classnames_default()(handlerClassName, "".concat(handlerClassName, "-down"), (0,defineProperty/* default */.Z)({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));

  // fix: https://github.com/ant-design/ant-design/issues/43088
  // In Safari, When we fire onmousedown and onmouseup events in quick succession, 
  // there may be a problem that the onmouseup events are executed first, 
  // resulting in a disordered program execution.
  // So, we need to use requestAnimationFrame to ensure that the onmouseup event is executed after the onmousedown event.
  var safeOnStopStep = function safeOnStopStep() {
    return frameIds.current.push((0,raf/* default */.Z)(onStopStep));
  };
  var sharedHandlerProps = {
    unselectable: 'on',
    role: 'button',
    onMouseUp: safeOnStopStep,
    onMouseLeave: safeOnStopStep
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(handlerClassName, "-wrap")
  }, /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, sharedHandlerProps, {
    onMouseDown: function onMouseDown(e) {
      onStepMouseDown(e, true);
    },
    "aria-label": "Increase Value",
    "aria-disabled": upDisabled,
    className: upClassName
  }), upNode || /*#__PURE__*/react.createElement("span", {
    unselectable: "on",
    className: "".concat(prefixCls, "-handler-up-inner")
  })), /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, sharedHandlerProps, {
    onMouseDown: function onMouseDown(e) {
      onStepMouseDown(e, false);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": downDisabled,
    className: downClassName
  }), downNode || /*#__PURE__*/react.createElement("span", {
    unselectable: "on",
    className: "".concat(prefixCls, "-handler-down-inner")
  })));
}
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/utils/numberUtil.js

function getDecupleSteps(step) {
  var stepStr = typeof step === 'number' ? num2str(step) : trimNumber(step).fullStr;
  var hasPoint = stepStr.includes('.');
  if (!hasPoint) {
    return step + '0';
  }
  return trimNumber(stepStr.replace(/(\\d)\\.(\\d)/g, '$1$2.')).fullStr;
}
// EXTERNAL MODULE: ./node_modules/rc-input/es/utils/commonUtils.js
var commonUtils = __webpack_require__(87887);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/hooks/useFrame.js



/**
 * Always trigger latest once when call multiple time
 */
/* harmony default export */ var useFrame = (function () {
  var idRef = (0,react.useRef)(0);
  var cleanUp = function cleanUp() {
    raf/* default */.Z.cancel(idRef.current);
  };
  (0,react.useEffect)(function () {
    return cleanUp;
  }, []);
  return function (callback) {
    cleanUp();
    idRef.current = (0,raf/* default */.Z)(function () {
      callback();
    });
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/InputNumber.js





var _excluded = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "changeOnWheel", "controls", "classNames", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "changeOnBlur", "domRef"],
  _excluded2 = ["disabled", "style", "prefixCls", "value", "prefix", "suffix", "addonBefore", "addonAfter", "className", "classNames"];












/**
 * We support \`stringMode\` which need handle correct type when user call in onChange
 * format max or min value
 * 1. if isInvalid return null
 * 2. if precision is undefined, return decimal
 * 3. format with precision
 *    I. if max > 0, round down with precision. Example: max= 3.5, precision=0  afterFormat: 3
 *    II. if max < 0, round up with precision. Example: max= -3.5, precision=0  afterFormat: -4
 *    III. if min > 0, round up with precision. Example: min= 3.5, precision=0  afterFormat: 4
 *    IV. if min < 0, round down with precision. Example: max= -3.5, precision=0  afterFormat: -3
 */
var getDecimalValue = function getDecimalValue(stringMode, decimalValue) {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }
  return decimalValue.toNumber();
};
var getDecimalIfValidate = function getDecimalIfValidate(value) {
  var decimal = es(value);
  return decimal.isInvalidate() ? null : decimal;
};
var InternalInputNumber = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    min = props.min,
    max = props.max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    defaultValue = props.defaultValue,
    value = props.value,
    disabled = props.disabled,
    readOnly = props.readOnly,
    upHandler = props.upHandler,
    downHandler = props.downHandler,
    keyboard = props.keyboard,
    _props$changeOnWheel = props.changeOnWheel,
    changeOnWheel = _props$changeOnWheel === void 0 ? false : _props$changeOnWheel,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? true : _props$controls,
    classNames = props.classNames,
    stringMode = props.stringMode,
    parser = props.parser,
    formatter = props.formatter,
    precision = props.precision,
    decimalSeparator = props.decimalSeparator,
    onChange = props.onChange,
    onInput = props.onInput,
    onPressEnter = props.onPressEnter,
    onStep = props.onStep,
    _props$changeOnBlur = props.changeOnBlur,
    changeOnBlur = _props$changeOnBlur === void 0 ? true : _props$changeOnBlur,
    domRef = props.domRef,
    inputProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var inputClassName = "".concat(prefixCls, "-input");
  var inputRef = react.useRef(null);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    focus = _React$useState2[0],
    setFocus = _React$useState2[1];
  var userTypingRef = react.useRef(false);
  var compositionRef = react.useRef(false);
  var shiftKeyRef = react.useRef(false);

  // ============================ Value =============================
  // Real value control
  var _React$useState3 = react.useState(function () {
      return es(value !== null && value !== void 0 ? value : defaultValue);
    }),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    decimalValue = _React$useState4[0],
    setDecimalValue = _React$useState4[1];
  function setUncontrolledDecimalValue(newDecimal) {
    if (value === undefined) {
      setDecimalValue(newDecimal);
    }
  }

  // ====================== Parser & Formatter ======================
  /**
   * \`precision\` is used for formatter & onChange.
   * It will auto generate by \`value\` & \`step\`.
   * But it will not block user typing.
   *
   * Note: Auto generate \`precision\` is used for legacy logic.
   * We should remove this since we already support high precision with BigInt.
   *
   * @param number  Provide which number should calculate precision
   * @param userTyping  Change by user typing
   */
  var getPrecision = react.useCallback(function (numStr, userTyping) {
    if (userTyping) {
      return undefined;
    }
    if (precision >= 0) {
      return precision;
    }
    return Math.max(getNumberPrecision(numStr), getNumberPrecision(step));
  }, [precision, step]);

  // >>> Parser
  var mergedParser = react.useCallback(function (num) {
    var numStr = String(num);
    if (parser) {
      return parser(numStr);
    }
    var parsedStr = numStr;
    if (decimalSeparator) {
      parsedStr = parsedStr.replace(decimalSeparator, '.');
    }

    // [Legacy] We still support auto convert \`$ 123,456\` to \`123456\`
    return parsedStr.replace(/[^\\w.-]+/g, '');
  }, [parser, decimalSeparator]);

  // >>> Formatter
  var inputValueRef = react.useRef('');
  var mergedFormatter = react.useCallback(function (number, userTyping) {
    if (formatter) {
      return formatter(number, {
        userTyping: userTyping,
        input: String(inputValueRef.current)
      });
    }
    var str = typeof number === 'number' ? num2str(number) : number;

    // User typing will not auto format with precision directly
    if (!userTyping) {
      var mergedPrecision = getPrecision(str, userTyping);
      if (validateNumber(str) && (decimalSeparator || mergedPrecision >= 0)) {
        // Separator
        var separatorStr = decimalSeparator || '.';
        str = toFixed(str, separatorStr, mergedPrecision);
      }
    }
    return str;
  }, [formatter, getPrecision, decimalSeparator]);

  // ========================== InputValue ==========================
  /**
   * Input text value control
   *
   * User can not update input content directly. It updates with follow rules by priority:
   *  1. controlled \`value\` changed
   *    * [SPECIAL] Typing like \`1.\` should not immediately convert to \`1\`
   *  2. User typing with format (not precision)
   *  3. Blur or Enter trigger revalidate
   */
  var _React$useState5 = react.useState(function () {
      var initValue = defaultValue !== null && defaultValue !== void 0 ? defaultValue : value;
      if (decimalValue.isInvalidate() && ['string', 'number'].includes((0,esm_typeof/* default */.Z)(initValue))) {
        return Number.isNaN(initValue) ? '' : initValue;
      }
      return mergedFormatter(decimalValue.toString(), false);
    }),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    inputValue = _React$useState6[0],
    setInternalInputValue = _React$useState6[1];
  inputValueRef.current = inputValue;

  // Should always be string
  function setInputValue(newValue, userTyping) {
    setInternalInputValue(mergedFormatter(
    // Invalidate number is sometime passed by external control, we should let it go
    // Otherwise is controlled by internal interactive logic which check by userTyping
    // You can ref 'show limited value when input is not focused' test for more info.
    newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping));
  }

  // >>> Max & Min limit
  var maxDecimal = react.useMemo(function () {
    return getDecimalIfValidate(max);
  }, [max, precision]);
  var minDecimal = react.useMemo(function () {
    return getDecimalIfValidate(min);
  }, [min, precision]);
  var upDisabled = react.useMemo(function () {
    if (!maxDecimal || !decimalValue || decimalValue.isInvalidate()) {
      return false;
    }
    return maxDecimal.lessEquals(decimalValue);
  }, [maxDecimal, decimalValue]);
  var downDisabled = react.useMemo(function () {
    if (!minDecimal || !decimalValue || decimalValue.isInvalidate()) {
      return false;
    }
    return decimalValue.lessEquals(minDecimal);
  }, [minDecimal, decimalValue]);

  // Cursor controller
  var _useCursor = useCursor(inputRef.current, focus),
    _useCursor2 = (0,slicedToArray/* default */.Z)(_useCursor, 2),
    recordCursor = _useCursor2[0],
    restoreCursor = _useCursor2[1];

  // ============================= Data =============================
  /**
   * Find target value closet within range.
   * e.g. [11, 28]:
   *    3  => 11
   *    23 => 23
   *    99 => 28
   */
  var getRangeValue = function getRangeValue(target) {
    // target > max
    if (maxDecimal && !target.lessEquals(maxDecimal)) {
      return maxDecimal;
    }

    // target < min
    if (minDecimal && !minDecimal.lessEquals(target)) {
      return minDecimal;
    }
    return null;
  };

  /**
   * Check value is in [min, max] range
   */
  var isInRange = function isInRange(target) {
    return !getRangeValue(target);
  };

  /**
   * Trigger \`onChange\` if value validated and not equals of origin.
   * Return the value that re-align in range.
   */
  var triggerValueUpdate = function triggerValueUpdate(newValue, userTyping) {
    var updateValue = newValue;
    var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();

    // Skip align value when trigger value is empty.
    // We just trigger onChange(null)
    // This should not block user typing
    if (!updateValue.isEmpty() && !userTyping) {
      // Revert value in range if needed
      updateValue = getRangeValue(updateValue) || updateValue;
      isRangeValidate = true;
    }
    if (!readOnly && !disabled && isRangeValidate) {
      var numStr = updateValue.toString();
      var mergedPrecision = getPrecision(numStr, userTyping);
      if (mergedPrecision >= 0) {
        updateValue = es(toFixed(numStr, '.', mergedPrecision));

        // When to fixed. The value may out of min & max range.
        // 4 in [0, 3.8] => 3.8 => 4 (toFixed)
        if (!isInRange(updateValue)) {
          updateValue = es(toFixed(numStr, '.', mergedPrecision, true));
        }
      }

      // Trigger event
      if (!updateValue.equals(decimalValue)) {
        setUncontrolledDecimalValue(updateValue);
        onChange === null || onChange === void 0 || onChange(updateValue.isEmpty() ? null : getDecimalValue(stringMode, updateValue));

        // Reformat input if value is not controlled
        if (value === undefined) {
          setInputValue(updateValue, userTyping);
        }
      }
      return updateValue;
    }
    return decimalValue;
  };

  // ========================== User Input ==========================
  var onNextPromise = useFrame();

  // >>> Collect input value
  var collectInputValue = function collectInputValue(inputStr) {
    recordCursor();

    // Update inputValue in case input can not parse as number
    // Refresh ref value immediately since it may used by formatter
    inputValueRef.current = inputStr;
    setInternalInputValue(inputStr);

    // Parse number
    if (!compositionRef.current) {
      var finalValue = mergedParser(inputStr);
      var finalDecimal = es(finalValue);
      if (!finalDecimal.isNaN()) {
        triggerValueUpdate(finalDecimal, true);
      }
    }

    // Trigger onInput later to let user customize value if they want to handle something after onChange
    onInput === null || onInput === void 0 || onInput(inputStr);

    // optimize for chinese input experience
    // https://github.com/ant-design/ant-design/issues/8196
    onNextPromise(function () {
      var nextInputStr = inputStr;
      if (!parser) {
        nextInputStr = inputStr.replace(/\u3002/g, '.');
      }
      if (nextInputStr !== inputStr) {
        collectInputValue(nextInputStr);
      }
    });
  };

  // >>> Composition
  var onCompositionStart = function onCompositionStart() {
    compositionRef.current = true;
  };
  var onCompositionEnd = function onCompositionEnd() {
    compositionRef.current = false;
    collectInputValue(inputRef.current.value);
  };

  // >>> Input
  var onInternalInput = function onInternalInput(e) {
    collectInputValue(e.target.value);
  };

  // ============================= Step =============================
  var onInternalStep = function onInternalStep(up) {
    var _inputRef$current;
    // Ignore step since out of range
    if (up && upDisabled || !up && downDisabled) {
      return;
    }

    // Clear typing status since it may be caused by up & down key.
    // We should sync with input value.
    userTypingRef.current = false;
    var stepDecimal = es(shiftKeyRef.current ? getDecupleSteps(step) : step);
    if (!up) {
      stepDecimal = stepDecimal.negate();
    }
    var target = (decimalValue || es(0)).add(stepDecimal.toString());
    var updatedValue = triggerValueUpdate(target, false);
    onStep === null || onStep === void 0 || onStep(getDecimalValue(stringMode, updatedValue), {
      offset: shiftKeyRef.current ? getDecupleSteps(step) : step,
      type: up ? 'up' : 'down'
    });
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
  };

  // ============================ Flush =============================
  /**
   * Flush current input content to trigger value change & re-formatter input if needed.
   * This will always flush input value for update.
   * If it's invalidate, will fallback to last validate value.
   */
  var flushInputValue = function flushInputValue(userTyping) {
    var parsedValue = es(mergedParser(inputValue));
    var formatValue;
    if (!parsedValue.isNaN()) {
      // Only validate value or empty value can be re-fill to inputValue
      // Reassign the formatValue within ranged of trigger control
      formatValue = triggerValueUpdate(parsedValue, userTyping);
    } else {
      formatValue = triggerValueUpdate(decimalValue, userTyping);
    }
    if (value !== undefined) {
      // Reset back with controlled value first
      setInputValue(decimalValue, false);
    } else if (!formatValue.isNaN()) {
      // Reset input back since no validate value
      setInputValue(formatValue, false);
    }
  };

  // Solve the issue of the event triggering sequence when entering numbers in chinese input (Safari)
  var onBeforeInput = function onBeforeInput() {
    userTypingRef.current = true;
  };
  var onKeyDown = function onKeyDown(event) {
    var key = event.key,
      shiftKey = event.shiftKey;
    userTypingRef.current = true;
    shiftKeyRef.current = shiftKey;
    if (key === 'Enter') {
      if (!compositionRef.current) {
        userTypingRef.current = false;
      }
      flushInputValue(false);
      onPressEnter === null || onPressEnter === void 0 || onPressEnter(event);
    }
    if (keyboard === false) {
      return;
    }

    // Do step
    if (!compositionRef.current && ['Up', 'ArrowUp', 'Down', 'ArrowDown'].includes(key)) {
      onInternalStep(key === 'Up' || key === 'ArrowUp');
      event.preventDefault();
    }
  };
  var onKeyUp = function onKeyUp() {
    userTypingRef.current = false;
    shiftKeyRef.current = false;
  };
  react.useEffect(function () {
    if (changeOnWheel && focus) {
      var onWheel = function onWheel(event) {
        // moving mouse wheel rises wheel event with deltaY < 0
        // scroll value grows from top to bottom, as screen Y coordinate
        onInternalStep(event.deltaY < 0);
        event.preventDefault();
      };
      var input = inputRef.current;
      if (input) {
        // React onWheel is passive and we can't preventDefault() in it.
        // That's why we should subscribe with DOM listener
        // https://stackoverflow.com/questions/63663025/react-onwheel-handler-cant-preventdefault-because-its-a-passive-event-listenev
        input.addEventListener('wheel', onWheel, {
          passive: false
        });
        return function () {
          return input.removeEventListener('wheel', onWheel);
        };
      }
    }
  });

  // >>> Focus & Blur
  var onBlur = function onBlur() {
    if (changeOnBlur) {
      flushInputValue(false);
    }
    setFocus(false);
    userTypingRef.current = false;
  };

  // ========================== Controlled ==========================
  // Input by precision & formatter
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    if (!decimalValue.isInvalidate()) {
      setInputValue(decimalValue, false);
    }
  }, [precision, formatter]);

  // Input by value
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    var newValue = es(value);
    setDecimalValue(newValue);
    var currentParsedValue = es(mergedParser(inputValue));

    // When user typing from \`1.2\` to \`1.\`, we should not convert to \`1\` immediately.
    // But let it go if user set \`formatter\`
    if (!newValue.equals(currentParsedValue) || !userTypingRef.current || formatter) {
      // Update value as effect
      setInputValue(newValue, userTypingRef.current);
    }
  }, [value]);

  // ============================ Cursor ============================
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    if (formatter) {
      restoreCursor();
    }
  }, [inputValue]);

  // ============================ Render ============================
  return /*#__PURE__*/react.createElement("div", {
    ref: domRef,
    className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-focused"), focus), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-readonly"), readOnly), "".concat(prefixCls, "-not-a-number"), decimalValue.isNaN()), "".concat(prefixCls, "-out-of-range"), !decimalValue.isInvalidate() && !isInRange(decimalValue))),
    style: style,
    onFocus: function onFocus() {
      setFocus(true);
    },
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onCompositionStart: onCompositionStart,
    onCompositionEnd: onCompositionEnd,
    onBeforeInput: onBeforeInput
  }, controls && /*#__PURE__*/react.createElement(StepHandler, {
    prefixCls: prefixCls,
    upNode: upHandler,
    downNode: downHandler,
    upDisabled: upDisabled,
    downDisabled: downDisabled,
    onStep: onInternalStep
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(inputClassName, "-wrap")
  }, /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": decimalValue.isInvalidate() ? null : decimalValue.toString(),
    step: step
  }, inputProps, {
    ref: (0,es_ref/* composeRef */.sQ)(inputRef, ref),
    className: inputClassName,
    value: inputValue,
    onChange: onInternalInput,
    disabled: disabled,
    readOnly: readOnly
  }))));
});
var InputNumber = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var disabled = props.disabled,
    style = props.style,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input-number' : _props$prefixCls,
    value = props.value,
    prefix = props.prefix,
    suffix = props.suffix,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    className = props.className,
    classNames = props.classNames,
    rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded2);
  var holderRef = react.useRef(null);
  var inputNumberDomRef = react.useRef(null);
  var inputFocusRef = react.useRef(null);
  var focus = function focus(option) {
    if (inputFocusRef.current) {
      (0,commonUtils/* triggerFocus */.nH)(inputFocusRef.current, option);
    }
  };
  react.useImperativeHandle(ref, function () {
    return proxyObject(inputFocusRef.current, {
      focus: focus,
      nativeElement: holderRef.current.nativeElement || inputNumberDomRef.current
    });
  });
  return /*#__PURE__*/react.createElement(rc_input_es/* BaseInput */.Q, {
    className: className,
    triggerFocus: focus,
    prefixCls: prefixCls,
    value: value,
    disabled: disabled,
    style: style,
    prefix: prefix,
    suffix: suffix,
    addonAfter: addonAfter,
    addonBefore: addonBefore,
    classNames: classNames,
    components: {
      affixWrapper: 'div',
      groupWrapper: 'div',
      wrapper: 'div',
      groupAddon: 'div'
    },
    ref: holderRef
  }, /*#__PURE__*/react.createElement(InternalInputNumber, (0,esm_extends/* default */.Z)({
    prefixCls: prefixCls,
    disabled: disabled,
    ref: inputFocusRef,
    domRef: inputNumberDomRef,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.input
  }, rest)));
});
if (false) {}
/* harmony default export */ var es_InputNumber = (InputNumber);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/index.js

/* harmony default export */ var rc_input_number_es = (es_InputNumber);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(89942);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(9708);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(21532);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(35792);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(98675);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/antd/es/form/hooks/useVariants.js
var useVariants = __webpack_require__(27833);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var style = __webpack_require__(47673);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/token.js
var style_token = __webpack_require__(20353);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/variants.js
var variants = __webpack_require__(93900);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var es_style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(80110);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
;// CONCATENATED MODULE: ./node_modules/antd/es/input-number/style/token.js


const prepareComponentToken = token => {
  var _a;
  const handleVisible = (_a = token.handleVisible) !== null && _a !== void 0 ? _a : 'auto';
  const handleWidth = token.controlHeightSM - token.lineWidth * 2;
  return Object.assign(Object.assign({}, (0,style_token/* initComponentToken */.T)(token)), {
    controlWidth: 90,
    handleWidth,
    handleFontSize: token.fontSize / 2,
    handleVisible,
    handleActiveBg: token.colorFillAlter,
    handleBg: token.colorBgContainer,
    filledHandleBg: new dist_module/* TinyColor */.C(token.colorFillSecondary).onBackground(token.colorBgContainer).toHexString(),
    handleHoverColor: token.colorPrimary,
    handleBorderColor: token.colorBorder,
    handleOpacity: handleVisible === true ? 1 : 0,
    handleVisibleWidth: handleVisible === true ? handleWidth : 0
  });
};
;// CONCATENATED MODULE: ./node_modules/antd/es/input-number/style/index.js







const genRadiusStyle = (_ref, size) => {
  let {
    componentCls,
    borderRadiusSM,
    borderRadiusLG
  } = _ref;
  const borderRadius = size === 'lg' ? borderRadiusLG : borderRadiusSM;
  return {
    [\`&-\${size}\`]: {
      [\`\${componentCls}-handler-wrap\`]: {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      [\`\${componentCls}-handler-up\`]: {
        borderStartEndRadius: borderRadius
      },
      [\`\${componentCls}-handler-down\`]: {
        borderEndEndRadius: borderRadius
      }
    }
  };
};
const genInputNumberStyles = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    borderRadius,
    inputFontSizeSM,
    inputFontSizeLG,
    controlHeightLG,
    controlHeightSM,
    colorError,
    paddingInlineSM,
    paddingBlockSM,
    paddingBlockLG,
    paddingInlineLG,
    colorTextDescription,
    motionDurationMid,
    handleHoverColor,
    handleOpacity,
    paddingInline,
    paddingBlock,
    handleBg,
    handleActiveBg,
    colorTextDisabled,
    borderRadiusSM,
    borderRadiusLG,
    controlWidth,
    handleBorderColor,
    filledHandleBg,
    lineHeightLG,
    calc
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), (0,style/* genBasicInputStyle */.ik)(token)), {
      display: 'inline-block',
      width: controlWidth,
      margin: 0,
      padding: 0,
      borderRadius
    }), (0,variants/* genOutlinedStyle */.qG)(token, {
      [\`\${componentCls}-handler-wrap\`]: {
        background: handleBg,
        [\`\${componentCls}-handler-down\`]: {
          borderBlockStart: \`\${(0,cssinjs_es/* unit */.bf)(lineWidth)} \${lineType} \${handleBorderColor}\`
        }
      }
    })), (0,variants/* genFilledStyle */.H8)(token, {
      [\`\${componentCls}-handler-wrap\`]: {
        background: filledHandleBg,
        [\`\${componentCls}-handler-down\`]: {
          borderBlockStart: \`\${(0,cssinjs_es/* unit */.bf)(lineWidth)} \${lineType} \${handleBorderColor}\`
        }
      },
      '&:focus-within': {
        [\`\${componentCls}-handler-wrap\`]: {
          background: handleBg
        }
      }
    })), (0,variants/* genBorderlessStyle */.Mu)(token)), {
      '&-rtl': {
        direction: 'rtl',
        [\`\${componentCls}-input\`]: {
          direction: 'rtl'
        }
      },
      '&-lg': {
        padding: 0,
        fontSize: inputFontSizeLG,
        lineHeight: lineHeightLG,
        borderRadius: borderRadiusLG,
        [\`input\${componentCls}-input\`]: {
          height: calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal(),
          padding: \`\${(0,cssinjs_es/* unit */.bf)(paddingBlockLG)} \${(0,cssinjs_es/* unit */.bf)(paddingInlineLG)}\`
        }
      },
      '&-sm': {
        padding: 0,
        fontSize: inputFontSizeSM,
        borderRadius: borderRadiusSM,
        [\`input\${componentCls}-input\`]: {
          height: calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal(),
          padding: \`\${(0,cssinjs_es/* unit */.bf)(paddingBlockSM)} \${(0,cssinjs_es/* unit */.bf)(paddingInlineSM)}\`
        }
      },
      // ===================== Out Of Range =====================
      '&-out-of-range': {
        [\`\${componentCls}-input-wrap\`]: {
          input: {
            color: colorError
          }
        }
      },
      // Style for input-group: input with label, with button or dropdown...
      '&-group': Object.assign(Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), (0,style/* genInputGroupStyle */.s7)(token)), {
        '&-wrapper': Object.assign(Object.assign(Object.assign({
          display: 'inline-block',
          textAlign: 'start',
          verticalAlign: 'top',
          [\`\${componentCls}-affix-wrapper\`]: {
            width: '100%'
          },
          // Size
          '&-lg': {
            [\`\${componentCls}-group-addon\`]: {
              borderRadius: borderRadiusLG,
              fontSize: token.fontSizeLG
            }
          },
          '&-sm': {
            [\`\${componentCls}-group-addon\`]: {
              borderRadius: borderRadiusSM
            }
          }
        }, (0,variants/* genOutlinedGroupStyle */.ir)(token)), (0,variants/* genFilledGroupStyle */.S5)(token)), {
          // Fix the issue of using icons in Space Compact mode
          // https://github.com/ant-design/ant-design/issues/45764
          [\`&:not(\${componentCls}-compact-first-item):not(\${componentCls}-compact-last-item)\${componentCls}-compact-item\`]: {
            [\`\${componentCls}, \${componentCls}-group-addon\`]: {
              borderRadius: 0
            }
          },
          [\`&:not(\${componentCls}-compact-last-item)\${componentCls}-compact-first-item\`]: {
            [\`\${componentCls}, \${componentCls}-group-addon\`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          [\`&:not(\${componentCls}-compact-first-item)\${componentCls}-compact-last-item\`]: {
            [\`\${componentCls}, \${componentCls}-group-addon\`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        })
      }),
      [\`&-disabled \${componentCls}-input\`]: {
        cursor: 'not-allowed'
      },
      [componentCls]: {
        '&-input': Object.assign(Object.assign(Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), {
          width: '100%',
          padding: \`\${(0,cssinjs_es/* unit */.bf)(paddingBlock)} \${(0,cssinjs_es/* unit */.bf)(paddingInline)}\`,
          textAlign: 'start',
          backgroundColor: 'transparent',
          border: 0,
          borderRadius,
          outline: 0,
          transition: \`all \${motionDurationMid} linear\`,
          appearance: 'textfield',
          fontSize: 'inherit'
        }), (0,style/* genPlaceholderStyle */.nz)(token.colorTextPlaceholder)), {
          '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
            margin: 0,
            webkitAppearance: 'none',
            appearance: 'none'
          }
        })
      },
      [\`&:hover \${componentCls}-handler-wrap, &-focused \${componentCls}-handler-wrap\`]: {
        width: token.handleWidth,
        opacity: 1
      }
    })
  },
  // Handler
  {
    [componentCls]: Object.assign(Object.assign(Object.assign({
      [\`\${componentCls}-handler-wrap\`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineEnd: 0,
        width: token.handleVisibleWidth,
        opacity: handleOpacity,
        height: '100%',
        borderStartStartRadius: 0,
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius,
        borderEndStartRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        transition: \`all \${motionDurationMid}\`,
        overflow: 'hidden',
        // Fix input number inside Menu makes icon too large
        // We arise the selector priority by nest selector here
        // https://github.com/ant-design/ant-design/issues/14367
        [\`\${componentCls}-handler\`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'auto',
          height: '40%',
          [\`
              \${componentCls}-handler-up-inner,
              \${componentCls}-handler-down-inner
            \`]: {
            marginInlineEnd: 0,
            fontSize: token.handleFontSize
          }
        }
      },
      [\`\${componentCls}-handler\`]: {
        height: '50%',
        overflow: 'hidden',
        color: colorTextDescription,
        fontWeight: 'bold',
        lineHeight: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderInlineStart: \`\${(0,cssinjs_es/* unit */.bf)(lineWidth)} \${lineType} \${handleBorderColor}\`,
        transition: \`all \${motionDurationMid} linear\`,
        '&:active': {
          background: handleActiveBg
        },
        // Hover
        '&:hover': {
          height: \`60%\`,
          [\`
              \${componentCls}-handler-up-inner,
              \${componentCls}-handler-down-inner
            \`]: {
            color: handleHoverColor
          }
        },
        '&-up-inner, &-down-inner': Object.assign(Object.assign({}, (0,es_style/* resetIcon */.Ro)()), {
          color: colorTextDescription,
          transition: \`all \${motionDurationMid} linear\`,
          userSelect: 'none'
        })
      },
      [\`\${componentCls}-handler-up\`]: {
        borderStartEndRadius: borderRadius
      },
      [\`\${componentCls}-handler-down\`]: {
        borderEndEndRadius: borderRadius
      }
    }, genRadiusStyle(token, 'lg')), genRadiusStyle(token, 'sm')), {
      // Disabled
      '&-disabled, &-readonly': {
        [\`\${componentCls}-handler-wrap\`]: {
          display: 'none'
        },
        [\`\${componentCls}-input\`]: {
          color: 'inherit'
        }
      },
      [\`
          \${componentCls}-handler-up-disabled,
          \${componentCls}-handler-down-disabled
        \`]: {
        cursor: 'not-allowed'
      },
      [\`
          \${componentCls}-handler-up-disabled:hover &-handler-up-inner,
          \${componentCls}-handler-down-disabled:hover &-handler-down-inner
        \`]: {
        color: colorTextDisabled
      }
    })
  }];
};
const genAffixWrapperStyles = token => {
  const {
    componentCls,
    paddingBlock,
    paddingInline,
    inputAffixPadding,
    controlWidth,
    borderRadiusLG,
    borderRadiusSM,
    paddingInlineLG,
    paddingInlineSM,
    paddingBlockLG,
    paddingBlockSM,
    motionDurationMid
  } = token;
  return {
    [\`\${componentCls}-affix-wrapper\`]: Object.assign(Object.assign({
      [\`input\${componentCls}-input\`]: {
        padding: \`\${(0,cssinjs_es/* unit */.bf)(paddingBlock)} 0\`
      }
    }, (0,style/* genBasicInputStyle */.ik)(token)), {
      // or number handler will cover form status
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: controlWidth,
      padding: 0,
      paddingInlineStart: paddingInline,
      '&-lg': {
        borderRadius: borderRadiusLG,
        paddingInlineStart: paddingInlineLG,
        [\`input\${componentCls}-input\`]: {
          padding: \`\${(0,cssinjs_es/* unit */.bf)(paddingBlockLG)} 0\`
        }
      },
      '&-sm': {
        borderRadius: borderRadiusSM,
        paddingInlineStart: paddingInlineSM,
        [\`input\${componentCls}-input\`]: {
          padding: \`\${(0,cssinjs_es/* unit */.bf)(paddingBlockSM)} 0\`
        }
      },
      [\`&:not(\${componentCls}-disabled):hover\`]: {
        zIndex: 1
      },
      '&-focused, &:focus': {
        zIndex: 1
      },
      [\`&-disabled > \${componentCls}-disabled\`]: {
        background: 'transparent'
      },
      [\`> div\${componentCls}\`]: {
        width: '100%',
        border: 'none',
        outline: 'none',
        [\`&\${componentCls}-focused\`]: {
          boxShadow: 'none !important'
        }
      },
      '&::before': {
        display: 'inline-block',
        width: 0,
        visibility: 'hidden',
        content: '"\\\\a0"'
      },
      [\`\${componentCls}-handler-wrap\`]: {
        zIndex: 2
      },
      [componentCls]: {
        position: 'static',
        color: 'inherit',
        '&-prefix, &-suffix': {
          display: 'flex',
          flex: 'none',
          alignItems: 'center',
          pointerEvents: 'none'
        },
        '&-prefix': {
          marginInlineEnd: inputAffixPadding
        },
        '&-suffix': {
          insetBlockStart: 0,
          insetInlineEnd: 0,
          height: '100%',
          marginInlineEnd: paddingInline,
          marginInlineStart: inputAffixPadding,
          transition: \`margin \${motionDurationMid}\`
        }
      },
      [\`&:hover \${componentCls}-handler-wrap, &-focused \${componentCls}-handler-wrap\`]: {
        width: token.handleWidth,
        opacity: 1
      },
      [\`&:not(\${componentCls}-affix-wrapper-without-controls):hover \${componentCls}-suffix\`]: {
        marginInlineEnd: token.calc(token.handleWidth).add(paddingInline).equal()
      }
    })
  };
};
/* harmony default export */ var input_number_style = ((0,genStyleUtils/* genStyleHooks */.I$)('InputNumber', token => {
  const inputNumberToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, (0,style_token/* initInputToken */.e)(token));
  return [genInputNumberStyles(inputNumberToken), genAffixWrapperStyles(inputNumberToken),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,compact_item/* genCompactItemStyle */.c)(inputNumberToken)];
}, prepareComponentToken, {
  unitless: {
    handleOpacity: true
  }
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/input-number/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















const input_number_InputNumber = /*#__PURE__*/react.forwardRef((props, ref) => {
  if (false) {}
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const inputRef = react.useRef(null);
  react.useImperativeHandle(ref, () => inputRef.current);
  const {
      className,
      rootClassName,
      size: customizeSize,
      disabled: customDisabled,
      prefixCls: customizePrefixCls,
      addonBefore,
      addonAfter,
      prefix,
      suffix,
      bordered,
      readOnly,
      status: customStatus,
      controls,
      variant: customVariant
    } = props,
    others = __rest(props, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "suffix", "bordered", "readOnly", "status", "controls", "variant"]);
  const prefixCls = getPrefixCls('input-number', customizePrefixCls);
  // Style
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = input_number_style(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  let upIcon = /*#__PURE__*/react.createElement(icons_UpOutlined, {
    className: \`\${prefixCls}-handler-up-inner\`
  });
  let downIcon = /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
    className: \`\${prefixCls}-handler-down-inner\`
  });
  const controlsTemp = typeof controls === 'boolean' ? controls : undefined;
  if (typeof controls === 'object') {
    upIcon = typeof controls.upIcon === 'undefined' ? upIcon : (/*#__PURE__*/react.createElement("span", {
      className: \`\${prefixCls}-handler-up-inner\`
    }, controls.upIcon));
    downIcon = typeof controls.downIcon === 'undefined' ? downIcon : (/*#__PURE__*/react.createElement("span", {
      className: \`\${prefixCls}-handler-down-inner\`
    }, controls.downIcon));
  }
  const {
    hasFeedback,
    status: contextStatus,
    isFormItemInput,
    feedbackIcon
  } = react.useContext(form_context/* FormItemInputContext */.aM);
  const mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  const mergedSize = (0,useSize/* default */.Z)(ctx => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const [variant, enableVariantCls] = (0,useVariants/* default */.Z)('inputNumber', customVariant, bordered);
  const suffixNode = hasFeedback && /*#__PURE__*/react.createElement(react.Fragment, null, feedbackIcon);
  const inputNumberClass = classnames_default()({
    [\`\${prefixCls}-lg\`]: mergedSize === 'large',
    [\`\${prefixCls}-sm\`]: mergedSize === 'small',
    [\`\${prefixCls}-rtl\`]: direction === 'rtl',
    [\`\${prefixCls}-in-form-item\`]: isFormItemInput
  }, hashId);
  const wrapperClassName = \`\${prefixCls}-group\`;
  const element = /*#__PURE__*/react.createElement(rc_input_number_es, Object.assign({
    ref: inputRef,
    disabled: mergedDisabled,
    className: classnames_default()(cssVarCls, rootCls, className, rootClassName, compactItemClassnames),
    upHandler: upIcon,
    downHandler: downIcon,
    prefixCls: prefixCls,
    readOnly: readOnly,
    controls: controlsTemp,
    prefix: prefix,
    suffix: suffixNode || suffix,
    addonBefore: addonBefore && (/*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
      form: true,
      space: true
    }, addonBefore)),
    addonAfter: addonAfter && (/*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
      form: true,
      space: true
    }, addonAfter)),
    classNames: {
      input: inputNumberClass,
      variant: classnames_default()({
        [\`\${prefixCls}-\${variant}\`]: enableVariantCls
      }, (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus, hasFeedback)),
      affixWrapper: classnames_default()({
        [\`\${prefixCls}-affix-wrapper-sm\`]: mergedSize === 'small',
        [\`\${prefixCls}-affix-wrapper-lg\`]: mergedSize === 'large',
        [\`\${prefixCls}-affix-wrapper-rtl\`]: direction === 'rtl',
        [\`\${prefixCls}-affix-wrapper-without-controls\`]: controls === false
      }, hashId),
      wrapper: classnames_default()({
        [\`\${wrapperClassName}-rtl\`]: direction === 'rtl'
      }, hashId),
      groupWrapper: classnames_default()({
        [\`\${prefixCls}-group-wrapper-sm\`]: mergedSize === 'small',
        [\`\${prefixCls}-group-wrapper-lg\`]: mergedSize === 'large',
        [\`\${prefixCls}-group-wrapper-rtl\`]: direction === 'rtl',
        [\`\${prefixCls}-group-wrapper-\${variant}\`]: enableVariantCls
      }, (0,statusUtils/* getStatusClassNames */.Z)(\`\${prefixCls}-group-wrapper\`, mergedStatus, hasFeedback), hashId)
    }
  }, others));
  return wrapCSSVar(element);
});
const TypedInputNumber = input_number_InputNumber;
/** @private Internal Component. Do not use in your production. */
const PureInputNumber = props => (/*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
  theme: {
    components: {
      InputNumber: {
        handleVisible: true
      }
    }
  }
}, /*#__PURE__*/react.createElement(input_number_InputNumber, Object.assign({}, props))));
if (false) {}
TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;
/* harmony default export */ var input_number = (TypedInputNumber);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCLFFBQVEsVUFBVTtBQUNsQixRQUFRLFVBQVU7QUFDbEIsUUFBUSxVQUFVO0FBQ2xCLEdBQUc7QUFDSCw4QkFBOEIsVUFBVTtBQUN4QywrQkFBK0IsbUJBQW1CLENBQUMsa0JBQWE7QUFDaEU7QUFDQTtBQUNBLGVBQWUsb0JBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsbUJBQW1CLENBQUMsOEJBQWU7QUFDakY7QUFDQTtBQUNBLEtBQUs7QUFDTCw0Q0FBNEMsbUJBQW1CLENBQUMsOEJBQWU7QUFDL0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZSxvQkFBVTtBQUN6QixZQUFZLFVBQVUsR0FBRyxRQUFRO0FBQ2pDLE9BQU8sRUFBRSwwQ0FBbUI7QUFDNUIsb0JBQW9CLG9CQUFVO0FBQzlCLFlBQVksVUFBVTtBQUN0QixZQUFZLFVBQVU7QUFDdEIsWUFBWSxVQUFVO0FBQ3RCLFlBQVksVUFBVTtBQUN0QixPQUFPO0FBQ1AsZUFBZSxvQkFBVTtBQUN6QixZQUFZLGlCQUFpQjtBQUM3QixPQUFPO0FBQ1Asb0JBQW9CLG9CQUFVO0FBQzlCLFlBQVksVUFBVTtBQUN0QixZQUFZLFVBQVU7QUFDdEIsWUFBWSxVQUFVO0FBQ3RCLFlBQVksVUFBVSxpQkFBaUIsUUFBUTtBQUMvQyxPQUFPLEVBQUUsMENBQW1CLElBQUksVUFBVTtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRCx5QkFBeUIsd0JBQVc7QUFDcEM7QUFDQSwrQ0FBK0MsbUJBQW1CLENBQUMsK0JBQWM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGVBQWUsbUJBQW1CLENBQUMsd0JBQVcsa0JBQWtCO0FBQ2pFLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNEO0FBQ0EsaURBQWUsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9lcy9hc24vVXBPdXRsaW5lZC5qcz85NWFlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9VcE91dGxpbmVkLmpzP2FjYWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByYy1jb21wb25lbnQvbWluaS1kZWNpbWFsL2VzL3N1cHBvcnRVdGlsLmpzP2Y2MzciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByYy1jb21wb25lbnQvbWluaS1kZWNpbWFsL2VzL251bWJlclV0aWwuanM/ZDEwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJjLWNvbXBvbmVudC9taW5pLWRlY2ltYWwvZXMvQmlnSW50RGVjaW1hbC5qcz80NDBkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmMtY29tcG9uZW50L21pbmktZGVjaW1hbC9lcy9OdW1iZXJEZWNpbWFsLmpzPzY4NmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByYy1jb21wb25lbnQvbWluaS1kZWNpbWFsL2VzL01pbmlEZWNpbWFsLmpzPzBlNmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByYy1jb21wb25lbnQvbWluaS1kZWNpbWFsL2VzL2luZGV4LmpzPzg1ZWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvcHJveHlPYmplY3QuanM/Y2Y0YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtaW5wdXQtbnVtYmVyL2VzL2hvb2tzL3VzZUN1cnNvci5qcz8xY2FmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2hvb2tzL3VzZU1vYmlsZS5qcz9kMzEwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1pbnB1dC1udW1iZXIvZXMvU3RlcEhhbmRsZXIuanM/MmRlMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtaW5wdXQtbnVtYmVyL2VzL3V0aWxzL251bWJlclV0aWwuanM/MWFkYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtaW5wdXQtbnVtYmVyL2VzL2hvb2tzL3VzZUZyYW1lLmpzPzEzYTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWlucHV0LW51bWJlci9lcy9JbnB1dE51bWJlci5qcz8yMTk4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1pbnB1dC1udW1iZXIvZXMvaW5kZXguanM/YjJkNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC1udW1iZXIvc3R5bGUvdG9rZW4uanM/OWQ4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC1udW1iZXIvc3R5bGUvaW5kZXguanM/NTkyMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC1udW1iZXIvaW5kZXguanM/OTRkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbnZhciBVcE91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk04OTAuNSA3NTUuM0w1MzcuOSAyNjkuMmMtMTIuOC0xNy42LTM5LTE3LjYtNTEuNyAwTDEzMy41IDc1NS4zQTggOCAwIDAwMTQwIDc2OGg3NWM1LjEgMCA5LjktMi41IDEyLjktNi42TDUxMiAzNjkuOGwyODQuMSAzOTEuNmMzIDQuMSA3LjggNi42IDEyLjkgNi42aDc1YzYuNSAwIDEwLjMtNy40IDYuNS0xMi43elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwidXBcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydCBkZWZhdWx0IFVwT3V0bGluZWQ7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVcE91dGxpbmVkU3ZnIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvZXMvYXNuL1VwT3V0bGluZWRcIjtcbmltcG9ydCBBbnRkSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiO1xudmFyIFVwT3V0bGluZWQgPSBmdW5jdGlvbiBVcE91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFudGRJY29uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBVcE91dGxpbmVkU3ZnXG4gIH0pKTtcbn07XG5cbi8qKiFbdXBdKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UQWlJR2hsYVdkb2REMGlOVEFpSUdacGJHdzlJaU5qWVdOaFkyRWlJSFpwWlhkQ2IzZzlJalkwSURZMElEZzVOaUE0T1RZaUlHWnZZM1Z6WVdKc1pUMGlabUZzYzJVaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUZzVNQzQxSURjMU5TNHpURFV6Tnk0NUlESTJPUzR5WXkweE1pNDRMVEUzTGpZdE16a3RNVGN1TmkwMU1TNDNJREJNTVRNekxqVWdOelUxTGpOQk9DQTRJREFnTURBeE5EQWdOelk0YURjMVl6VXVNU0F3SURrdU9TMHlMalVnTVRJdU9TMDJMalpNTlRFeUlETTJPUzQ0YkRJNE5DNHhJRE01TVM0Mll6TWdOQzR4SURjdU9DQTJMallnTVRJdU9TQTJMalpvTnpWak5pNDFJREFnTVRBdU15MDNMalFnTmk0MUxURXlMamQ2SWlBdlBqd3ZjM1puUGc9PSkgKi9cbnZhciBSZWZJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoVXBPdXRsaW5lZCk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSZWZJY29uLmRpc3BsYXlOYW1lID0gJ1VwT3V0bGluZWQnO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVmSWNvbjsiLCJleHBvcnQgZnVuY3Rpb24gc3VwcG9ydEJpZ0ludCgpIHtcbiAgcmV0dXJuIHR5cGVvZiBCaWdJbnQgPT09ICdmdW5jdGlvbic7XG59IiwiaW1wb3J0IHsgc3VwcG9ydEJpZ0ludCB9IGZyb20gXCIuL3N1cHBvcnRVdGlsXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlICYmIHZhbHVlICE9PSAwICYmICFOdW1iZXIuaXNOYU4odmFsdWUpIHx8ICFTdHJpbmcodmFsdWUpLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBGb3JtYXQgc3RyaW5nIG51bWJlciB0byByZWFkYWJsZSBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW1OdW1iZXIobnVtU3RyKSB7XG4gIHZhciBzdHIgPSBudW1TdHIudHJpbSgpO1xuICB2YXIgbmVnYXRpdmUgPSBzdHIuc3RhcnRzV2l0aCgnLScpO1xuICBpZiAobmVnYXRpdmUpIHtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSk7XG4gIH1cbiAgc3RyID0gc3RyXG4gIC8vIFJlbW92ZSBkZWNpbWFsIDAuIGAxLjAwMGAgPT4gYDEuYCwgYDEuMTAwYCA9PiBgMS4xYFxuICAucmVwbGFjZSgvKFxcLlxcZCpbXjBdKTAqJC8sICckMScpXG4gIC8vIFJlbW92ZSB1c2VsZXNzIGRlY2ltYWwuIGAxLmAgPT4gYDFgXG4gIC5yZXBsYWNlKC9cXC4wKiQvLCAnJylcbiAgLy8gUmVtb3ZlIGludGVnZXIgMC4gYDAwMDFgID0+IGAxYCwgMDAwLjEnID0+IGAuMWBcbiAgLnJlcGxhY2UoL14wKy8sICcnKTtcbiAgaWYgKHN0ci5zdGFydHNXaXRoKCcuJykpIHtcbiAgICBzdHIgPSBcIjBcIi5jb25jYXQoc3RyKTtcbiAgfVxuICB2YXIgdHJpbVN0ciA9IHN0ciB8fCAnMCc7XG4gIHZhciBzcGxpdE51bWJlciA9IHRyaW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGludGVnZXJTdHIgPSBzcGxpdE51bWJlclswXSB8fCAnMCc7XG4gIHZhciBkZWNpbWFsU3RyID0gc3BsaXROdW1iZXJbMV0gfHwgJzAnO1xuICBpZiAoaW50ZWdlclN0ciA9PT0gJzAnICYmIGRlY2ltYWxTdHIgPT09ICcwJykge1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cbiAgdmFyIG5lZ2F0aXZlU3RyID0gbmVnYXRpdmUgPyAnLScgOiAnJztcbiAgcmV0dXJuIHtcbiAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgbmVnYXRpdmVTdHI6IG5lZ2F0aXZlU3RyLFxuICAgIHRyaW1TdHI6IHRyaW1TdHIsXG4gICAgaW50ZWdlclN0cjogaW50ZWdlclN0cixcbiAgICBkZWNpbWFsU3RyOiBkZWNpbWFsU3RyLFxuICAgIGZ1bGxTdHI6IFwiXCIuY29uY2F0KG5lZ2F0aXZlU3RyKS5jb25jYXQodHJpbVN0cilcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0UobnVtYmVyKSB7XG4gIHZhciBzdHIgPSBTdHJpbmcobnVtYmVyKTtcbiAgcmV0dXJuICFOdW1iZXIuaXNOYU4oTnVtYmVyKHN0cikpICYmIHN0ci5pbmNsdWRlcygnZScpO1xufVxuXG4vKipcbiAqIFtMZWdhY3ldIENvbnZlcnQgMWUtOSB0byAwLjAwMDAwMDAwMS5cbiAqIFRoaXMgbWF5IGxvc2Ugc29tZSBwcmVjaXNpb24gaWYgdXNlciByZWFsbHkgd2FudCAxZS05LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyUHJlY2lzaW9uKG51bWJlcikge1xuICB2YXIgbnVtU3RyID0gU3RyaW5nKG51bWJlcik7XG4gIGlmIChpc0UobnVtYmVyKSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBOdW1iZXIobnVtU3RyLnNsaWNlKG51bVN0ci5pbmRleE9mKCdlLScpICsgMikpO1xuICAgIHZhciBkZWNpbWFsTWF0Y2ggPSBudW1TdHIubWF0Y2goL1xcLihcXGQrKS8pO1xuICAgIGlmIChkZWNpbWFsTWF0Y2ggIT09IG51bGwgJiYgZGVjaW1hbE1hdGNoICE9PSB2b2lkIDAgJiYgZGVjaW1hbE1hdGNoWzFdKSB7XG4gICAgICBwcmVjaXNpb24gKz0gZGVjaW1hbE1hdGNoWzFdLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHByZWNpc2lvbjtcbiAgfVxuICByZXR1cm4gbnVtU3RyLmluY2x1ZGVzKCcuJykgJiYgdmFsaWRhdGVOdW1iZXIobnVtU3RyKSA/IG51bVN0ci5sZW5ndGggLSBudW1TdHIuaW5kZXhPZignLicpIC0gMSA6IDA7XG59XG5cbi8qKlxuICogQ29udmVydCBudW1iZXIgKGluY2x1ZGVzIHNjaWVudGlmaWMgbm90YXRpb24pIHRvIC14eHgueXl5IGZvcm1hdFxuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtMnN0cihudW1iZXIpIHtcbiAgdmFyIG51bVN0ciA9IFN0cmluZyhudW1iZXIpO1xuICBpZiAoaXNFKG51bWJlcikpIHtcbiAgICBpZiAobnVtYmVyID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoc3VwcG9ydEJpZ0ludCgpID8gQmlnSW50KG51bWJlcikudG9TdHJpbmcoKSA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcbiAgICB9XG4gICAgaWYgKG51bWJlciA8IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHN1cHBvcnRCaWdJbnQoKSA/IEJpZ0ludChudW1iZXIpLnRvU3RyaW5nKCkgOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XG4gICAgfVxuICAgIG51bVN0ciA9IG51bWJlci50b0ZpeGVkKGdldE51bWJlclByZWNpc2lvbihudW1TdHIpKTtcbiAgfVxuICByZXR1cm4gdHJpbU51bWJlcihudW1TdHIpLmZ1bGxTdHI7XG59XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIobnVtKSB7XG4gIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAhTnVtYmVyLmlzTmFOKG51bSk7XG4gIH1cblxuICAvLyBFbXB0eVxuICBpZiAoIW51bSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIE5vcm1hbCB0eXBlOiAxMS4yOFxuICAgIC9eXFxzKi0/XFxkKyhcXC5cXGQrKT9cXHMqJC8udGVzdChudW0pIHx8XG4gICAgLy8gUHJlLW51bWJlcjogMS5cbiAgICAvXlxccyotP1xcZCtcXC5cXHMqJC8udGVzdChudW0pIHx8XG4gICAgLy8gUG9zdC1udW1iZXI6IC4xXG4gICAgL15cXHMqLT9cXC5cXGQrXFxzKiQvLnRlc3QobnVtKVxuICApO1xufSIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IGlzRSwgaXNFbXB0eSwgbnVtMnN0ciwgdHJpbU51bWJlciwgdmFsaWRhdGVOdW1iZXIgfSBmcm9tIFwiLi9udW1iZXJVdGlsXCI7XG52YXIgQmlnSW50RGVjaW1hbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiBCaWdJbnQgd2lsbCBjb252ZXJ0IGAwMDA5YCB0byBgOWAuIFdlIG5lZWQgcmVjb3JkIHRoZSBsZW4gb2YgZGVjaW1hbCAqL1xuXG4gIGZ1bmN0aW9uIEJpZ0ludERlY2ltYWwodmFsdWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmlnSW50RGVjaW1hbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3JpZ2luXCIsICcnKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuZWdhdGl2ZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVnZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkZWNpbWFsXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVjaW1hbExlblwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVtcHR5XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFuXCIsIHZvaWQgMCk7XG4gICAgaWYgKGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcmlnaW4gPSBTdHJpbmcodmFsdWUpO1xuXG4gICAgLy8gQWN0IGxpa2UgTnVtYmVyIGNvbnZlcnRcbiAgICBpZiAodmFsdWUgPT09ICctJyB8fCBOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICB0aGlzLm5hbiA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtZXJnZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgLy8gV2UgbmVlZCBjb252ZXJ0IGJhY2sgdG8gTnVtYmVyIHNpbmNlIGl0IHJlcXVpcmUgYHRvRml4ZWRgIHRvIGhhbmRsZSB0aGlzXG4gICAgaWYgKGlzRShtZXJnZWRWYWx1ZSkpIHtcbiAgICAgIG1lcmdlZFZhbHVlID0gTnVtYmVyKG1lcmdlZFZhbHVlKTtcbiAgICB9XG4gICAgbWVyZ2VkVmFsdWUgPSB0eXBlb2YgbWVyZ2VkVmFsdWUgPT09ICdzdHJpbmcnID8gbWVyZ2VkVmFsdWUgOiBudW0yc3RyKG1lcmdlZFZhbHVlKTtcbiAgICBpZiAodmFsaWRhdGVOdW1iZXIobWVyZ2VkVmFsdWUpKSB7XG4gICAgICB2YXIgdHJpbVJldCA9IHRyaW1OdW1iZXIobWVyZ2VkVmFsdWUpO1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IHRyaW1SZXQubmVnYXRpdmU7XG4gICAgICB2YXIgbnVtYmVycyA9IHRyaW1SZXQudHJpbVN0ci5zcGxpdCgnLicpO1xuICAgICAgdGhpcy5pbnRlZ2VyID0gQmlnSW50KG51bWJlcnNbMF0pO1xuICAgICAgdmFyIGRlY2ltYWxTdHIgPSBudW1iZXJzWzFdIHx8ICcwJztcbiAgICAgIHRoaXMuZGVjaW1hbCA9IEJpZ0ludChkZWNpbWFsU3RyKTtcbiAgICAgIHRoaXMuZGVjaW1hbExlbiA9IGRlY2ltYWxTdHIubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hbiA9IHRydWU7XG4gICAgfVxuICB9XG4gIF9jcmVhdGVDbGFzcyhCaWdJbnREZWNpbWFsLCBbe1xuICAgIGtleTogXCJnZXRNYXJrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1hcmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZWdhdGl2ZSA/ICctJyA6ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRJbnRlZ2VyU3RyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEludGVnZXJTdHIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlZ2VyLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgZ2V0IGRlY2ltYWwgc3RyaW5nXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RGVjaW1hbFN0clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWNpbWFsU3RyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjaW1hbC50b1N0cmluZygpLnBhZFN0YXJ0KHRoaXMuZGVjaW1hbExlbiwgJzAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSBBbGlnbiBCaWdJbnREZWNpbWFsIHdpdGggc2FtZSBkZWNpbWFsIGxlbmd0aC4gZS5nLiAxMi4zICsgNSA9IDEyMzAwMDBcbiAgICAgKiBUaGlzIGlzIHVzZWQgZm9yIGFkZCBmdW5jdGlvbiBvbmx5LlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImFsaWduRGVjaW1hbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkRlY2ltYWwoZGVjaW1hbExlbmd0aCkge1xuICAgICAgdmFyIHN0ciA9IFwiXCIuY29uY2F0KHRoaXMuZ2V0TWFyaygpKS5jb25jYXQodGhpcy5nZXRJbnRlZ2VyU3RyKCkpLmNvbmNhdCh0aGlzLmdldERlY2ltYWxTdHIoKS5wYWRFbmQoZGVjaW1hbExlbmd0aCwgJzAnKSk7XG4gICAgICByZXR1cm4gQmlnSW50KHN0cik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWdhdGUoKSB7XG4gICAgICB2YXIgY2xvbmUgPSBuZXcgQmlnSW50RGVjaW1hbCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgY2xvbmUubmVnYXRpdmUgPSAhY2xvbmUubmVnYXRpdmU7XG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWwob2Zmc2V0LCBjYWxjdWxhdG9yLCBjYWxEZWNpbWFsTGVuKSB7XG4gICAgICB2YXIgbWF4RGVjaW1hbExlbmd0aCA9IE1hdGgubWF4KHRoaXMuZ2V0RGVjaW1hbFN0cigpLmxlbmd0aCwgb2Zmc2V0LmdldERlY2ltYWxTdHIoKS5sZW5ndGgpO1xuICAgICAgdmFyIG15QWxpZ25lZERlY2ltYWwgPSB0aGlzLmFsaWduRGVjaW1hbChtYXhEZWNpbWFsTGVuZ3RoKTtcbiAgICAgIHZhciBvZmZzZXRBbGlnbmVkRGVjaW1hbCA9IG9mZnNldC5hbGlnbkRlY2ltYWwobWF4RGVjaW1hbExlbmd0aCk7XG4gICAgICB2YXIgdmFsdWVTdHIgPSBjYWxjdWxhdG9yKG15QWxpZ25lZERlY2ltYWwsIG9mZnNldEFsaWduZWREZWNpbWFsKS50b1N0cmluZygpO1xuICAgICAgdmFyIG5leHREZWNpbWFsTGVuZ3RoID0gY2FsRGVjaW1hbExlbihtYXhEZWNpbWFsTGVuZ3RoKTtcblxuICAgICAgLy8gV2UgbmVlZCBmaWxsIHN0cmluZyBsZW5ndGggYmFjayB0byBgbWF4RGVjaW1hbExlbmd0aGAgdG8gYXZvaWQgcGFyc2VyIGZhaWxlZFxuICAgICAgdmFyIF90cmltTnVtYmVyID0gdHJpbU51bWJlcih2YWx1ZVN0ciksXG4gICAgICAgIG5lZ2F0aXZlU3RyID0gX3RyaW1OdW1iZXIubmVnYXRpdmVTdHIsXG4gICAgICAgIHRyaW1TdHIgPSBfdHJpbU51bWJlci50cmltU3RyO1xuICAgICAgdmFyIGh5ZHJhdGVWYWx1ZVN0ciA9IFwiXCIuY29uY2F0KG5lZ2F0aXZlU3RyKS5jb25jYXQodHJpbVN0ci5wYWRTdGFydChuZXh0RGVjaW1hbExlbmd0aCArIDEsICcwJykpO1xuICAgICAgcmV0dXJuIG5ldyBCaWdJbnREZWNpbWFsKFwiXCIuY29uY2F0KGh5ZHJhdGVWYWx1ZVN0ci5zbGljZSgwLCAtbmV4dERlY2ltYWxMZW5ndGgpLCBcIi5cIikuY29uY2F0KGh5ZHJhdGVWYWx1ZVN0ci5zbGljZSgtbmV4dERlY2ltYWxMZW5ndGgpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzSW52YWxpZGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50RGVjaW1hbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgb2Zmc2V0ID0gbmV3IEJpZ0ludERlY2ltYWwodmFsdWUpO1xuICAgICAgaWYgKG9mZnNldC5pc0ludmFsaWRhdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhbChvZmZzZXQsIGZ1bmN0aW9uIChudW0xLCBudW0yKSB7XG4gICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgIH0sIGZ1bmN0aW9uIChsZW4pIHtcbiAgICAgICAgcmV0dXJuIGxlbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtdWx0aVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdWx0aSh2YWx1ZSkge1xuICAgICAgdmFyIHRhcmdldCA9IG5ldyBCaWdJbnREZWNpbWFsKHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLmlzSW52YWxpZGF0ZSgpIHx8IHRhcmdldC5pc0ludmFsaWRhdGUoKSkge1xuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludERlY2ltYWwoTmFOKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhbCh0YXJnZXQsIGZ1bmN0aW9uIChudW0xLCBudW0yKSB7XG4gICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgIH0sIGZ1bmN0aW9uIChsZW4pIHtcbiAgICAgICAgcmV0dXJuIGxlbiAqIDI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNFbXB0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1wdHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzTmFOXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTmFOKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0ludmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbnZhbGlkYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuaXNOYU4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyh0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgPT09ICh0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxlc3NFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVzc0VxdWFscyh0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh0YXJnZXQubmVnYXRlKCkudG9TdHJpbmcoKSkudG9OdW1iZXIoKSA8PSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b051bWJlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b051bWJlcigpIHtcbiAgICAgIGlmICh0aGlzLmlzTmFOKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy50b1N0cmluZygpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgc2FmZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcbiAgICAgIGlmICghc2FmZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0ludmFsaWRhdGUoKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJpbU51bWJlcihcIlwiLmNvbmNhdCh0aGlzLmdldE1hcmsoKSkuY29uY2F0KHRoaXMuZ2V0SW50ZWdlclN0cigpLCBcIi5cIikuY29uY2F0KHRoaXMuZ2V0RGVjaW1hbFN0cigpKSkuZnVsbFN0cjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJpZ0ludERlY2ltYWw7XG59KCk7XG5leHBvcnQgeyBCaWdJbnREZWNpbWFsIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBnZXROdW1iZXJQcmVjaXNpb24sIGlzRW1wdHksIG51bTJzdHIgfSBmcm9tIFwiLi9udW1iZXJVdGlsXCI7XG5cbi8qKlxuICogV2UgY2FuIHJlbW92ZSB0aGlzIHdoZW4gSUUgbm90IHN1cHBvcnQgYW55bW9yZVxuICovXG52YXIgTnVtYmVyRGVjaW1hbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE51bWJlckRlY2ltYWwodmFsdWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyRGVjaW1hbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3JpZ2luXCIsICcnKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJudW1iZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbXB0eVwiLCB2b2lkIDApO1xuICAgIGlmIChpc0VtcHR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3JpZ2luID0gU3RyaW5nKHZhbHVlKTtcbiAgICB0aGlzLm51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKE51bWJlckRlY2ltYWwsIFt7XG4gICAga2V5OiBcIm5lZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWdhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IE51bWJlckRlY2ltYWwoLXRoaXMudG9OdW1iZXIoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzSW52YWxpZGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyRGVjaW1hbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4odGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlciArIHRhcmdldDtcblxuICAgICAgLy8gW0xlZ2FjeV0gQmFjayB0byBzYWZlIGludGVnZXJcbiAgICAgIGlmIChudW1iZXIgPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICByZXR1cm4gbmV3IE51bWJlckRlY2ltYWwoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA8IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKSB7XG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyRGVjaW1hbChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XG4gICAgICB9XG4gICAgICB2YXIgbWF4UHJlY2lzaW9uID0gTWF0aC5tYXgoZ2V0TnVtYmVyUHJlY2lzaW9uKHRoaXMubnVtYmVyKSwgZ2V0TnVtYmVyUHJlY2lzaW9uKHRhcmdldCkpO1xuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJEZWNpbWFsKG51bWJlci50b0ZpeGVkKG1heFByZWNpc2lvbikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtdWx0aVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdWx0aSh2YWx1ZSkge1xuICAgICAgdmFyIHRhcmdldCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5pc0ludmFsaWRhdGUoKSB8fCBOdW1iZXIuaXNOYU4odGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbmV3IE51bWJlckRlY2ltYWwoTmFOKTtcbiAgICAgIH1cbiAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlciAqIHRhcmdldDtcblxuICAgICAgLy8gW0xlZ2FjeV0gQmFjayB0byBzYWZlIGludGVnZXJcbiAgICAgIGlmIChudW1iZXIgPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICByZXR1cm4gbmV3IE51bWJlckRlY2ltYWwoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA8IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKSB7XG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyRGVjaW1hbChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XG4gICAgICB9XG4gICAgICB2YXIgbWF4UHJlY2lzaW9uID0gTWF0aC5tYXgoZ2V0TnVtYmVyUHJlY2lzaW9uKHRoaXMubnVtYmVyKSwgZ2V0TnVtYmVyUHJlY2lzaW9uKHRhcmdldCkpO1xuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJEZWNpbWFsKG51bWJlci50b0ZpeGVkKG1heFByZWNpc2lvbikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0VtcHR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbXB0eTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOYU5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOYU4oKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHRoaXMubnVtYmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbnZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW52YWxpZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRW1wdHkoKSB8fCB0aGlzLmlzTmFOKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHModGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy50b051bWJlcigpID09PSAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LnRvTnVtYmVyKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsZXNzRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlc3NFcXVhbHModGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQodGFyZ2V0Lm5lZ2F0ZSgpLnRvU3RyaW5nKCkpLnRvTnVtYmVyKCkgPD0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9OdW1iZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9OdW1iZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIHNhZmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG4gICAgICBpZiAoIXNhZmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTJzdHIodGhpcy5udW1iZXIpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyRGVjaW1hbDtcbn0oKTtcbmV4cG9ydCB7IE51bWJlckRlY2ltYWwgYXMgZGVmYXVsdCB9OyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5cbmltcG9ydCBCaWdJbnREZWNpbWFsIGZyb20gXCIuL0JpZ0ludERlY2ltYWxcIjtcbmltcG9ydCBOdW1iZXJEZWNpbWFsIGZyb20gXCIuL051bWJlckRlY2ltYWxcIjtcbmltcG9ydCB7IHRyaW1OdW1iZXIgfSBmcm9tIFwiLi9udW1iZXJVdGlsXCI7XG5pbXBvcnQgeyBzdXBwb3J0QmlnSW50IH0gZnJvbSBcIi4vc3VwcG9ydFV0aWxcIjtcblxuLy8gU3RpbGwgc3VwcG9ydCBvcmlnaW4gZXhwb3J0XG5leHBvcnQgeyBOdW1iZXJEZWNpbWFsLCBCaWdJbnREZWNpbWFsIH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNaW5pRGVjaW1hbCh2YWx1ZSkge1xuICAvLyBXZSB1c2UgQmlnSW50IGhlcmUuXG4gIC8vIFdpbGwgZmFsbGJhY2sgdG8gTnVtYmVyIGlmIG5vdCBzdXBwb3J0LlxuICBpZiAoc3VwcG9ydEJpZ0ludCgpKSB7XG4gICAgcmV0dXJuIG5ldyBCaWdJbnREZWNpbWFsKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gbmV3IE51bWJlckRlY2ltYWwodmFsdWUpO1xufVxuXG4vKipcbiAqIEFsaWduIHRoZSBsb2dpYyBvZiB0b0ZpeGVkIHRvIGFyb3VuZCBsaWtlIDEuNSA9PiAyLlxuICogSWYgc2V0IGBjdXRPbmx5YCwgd2lsbCBqdXN0IHJlbW92ZSB0aGUgb3ZlciBkZWNpbWFsIHBhcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkKG51bVN0ciwgc2VwYXJhdG9yU3RyLCBwcmVjaXNpb24pIHtcbiAgdmFyIGN1dE9ubHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICBpZiAobnVtU3RyID09PSAnJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICB2YXIgX3RyaW1OdW1iZXIgPSB0cmltTnVtYmVyKG51bVN0ciksXG4gICAgbmVnYXRpdmVTdHIgPSBfdHJpbU51bWJlci5uZWdhdGl2ZVN0cixcbiAgICBpbnRlZ2VyU3RyID0gX3RyaW1OdW1iZXIuaW50ZWdlclN0cixcbiAgICBkZWNpbWFsU3RyID0gX3RyaW1OdW1iZXIuZGVjaW1hbFN0cjtcbiAgdmFyIHByZWNpc2lvbkRlY2ltYWxTdHIgPSBcIlwiLmNvbmNhdChzZXBhcmF0b3JTdHIpLmNvbmNhdChkZWNpbWFsU3RyKTtcbiAgdmFyIG51bWJlcldpdGhvdXREZWNpbWFsID0gXCJcIi5jb25jYXQobmVnYXRpdmVTdHIpLmNvbmNhdChpbnRlZ2VyU3RyKTtcbiAgaWYgKHByZWNpc2lvbiA+PSAwKSB7XG4gICAgLy8gV2Ugd2lsbCBnZXQgbGFzdCArIDEgbnVtYmVyIHRvIGNoZWNrIGlmIG5lZWQgYWR2YW5jZWQgbnVtYmVyXG4gICAgdmFyIGFkdmFuY2VkTnVtID0gTnVtYmVyKGRlY2ltYWxTdHJbcHJlY2lzaW9uXSk7XG4gICAgaWYgKGFkdmFuY2VkTnVtID49IDUgJiYgIWN1dE9ubHkpIHtcbiAgICAgIHZhciBhZHZhbmNlZERlY2ltYWwgPSBnZXRNaW5pRGVjaW1hbChudW1TdHIpLmFkZChcIlwiLmNvbmNhdChuZWdhdGl2ZVN0ciwgXCIwLlwiKS5jb25jYXQoJzAnLnJlcGVhdChwcmVjaXNpb24pKS5jb25jYXQoMTAgLSBhZHZhbmNlZE51bSkpO1xuICAgICAgcmV0dXJuIHRvRml4ZWQoYWR2YW5jZWREZWNpbWFsLnRvU3RyaW5nKCksIHNlcGFyYXRvclN0ciwgcHJlY2lzaW9uLCBjdXRPbmx5KTtcbiAgICB9XG4gICAgaWYgKHByZWNpc2lvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bWJlcldpdGhvdXREZWNpbWFsO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIi5jb25jYXQobnVtYmVyV2l0aG91dERlY2ltYWwpLmNvbmNhdChzZXBhcmF0b3JTdHIpLmNvbmNhdChkZWNpbWFsU3RyLnBhZEVuZChwcmVjaXNpb24sICcwJykuc2xpY2UoMCwgcHJlY2lzaW9uKSk7XG4gIH1cbiAgaWYgKHByZWNpc2lvbkRlY2ltYWxTdHIgPT09ICcuMCcpIHtcbiAgICByZXR1cm4gbnVtYmVyV2l0aG91dERlY2ltYWw7XG4gIH1cbiAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlcldpdGhvdXREZWNpbWFsKS5jb25jYXQocHJlY2lzaW9uRGVjaW1hbFN0cik7XG59IiwiaW1wb3J0IGdldE1pbmlEZWNpbWFsIGZyb20gXCIuL01pbmlEZWNpbWFsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9NaW5pRGVjaW1hbFwiO1xuaW1wb3J0IHsgdHJpbU51bWJlciwgZ2V0TnVtYmVyUHJlY2lzaW9uLCBudW0yc3RyLCB2YWxpZGF0ZU51bWJlciB9IGZyb20gXCIuL251bWJlclV0aWxcIjtcbmV4cG9ydCB7IHRyaW1OdW1iZXIsIGdldE51bWJlclByZWNpc2lvbiwgbnVtMnN0ciwgdmFsaWRhdGVOdW1iZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGdldE1pbmlEZWNpbWFsOyIsIi8qKlxuICogUHJveHkgb2JqZWN0IGlmIGVudmlyb25tZW50IHN1cHBvcnRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm94eU9iamVjdChvYmosIGV4dGVuZFByb3BzKSB7XG4gIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIG9iaikge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKGV4dGVuZFByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgcmV0dXJuIGV4dGVuZFByb3BzW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJveHkgb3JpZ2luIHByb3BlcnR5XG4gICAgICAgIHZhciBvcmlnaW5Qcm9wID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9yaWdpblByb3AgPT09ICdmdW5jdGlvbicgPyBvcmlnaW5Qcm9wLmJpbmQodGFyZ2V0KSA6IG9yaWdpblByb3A7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG4vKipcbiAqIEtlZXAgaW5wdXQgY3Vyc29yIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGlmIHBvc3NpYmxlLlxuICogSXMgdGhpcyBuZWNlc3Nhcnkgc2luY2Ugd2UgaGF2ZSBgZm9ybWF0dGVyYCB3aGljaCBtYXkgbWFzcyB0aGUgY29udGVudD9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3Vyc29yKGlucHV0LCBmb2N1c2VkKSB7XG4gIHZhciBzZWxlY3Rpb25SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGZ1bmN0aW9uIHJlY29yZEN1cnNvcigpIHtcbiAgICAvLyBSZWNvcmQgcG9zaXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZCxcbiAgICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIHZhciBiZWZvcmVUeHQgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpO1xuICAgICAgdmFyIGFmdGVyVHh0ID0gdmFsdWUuc3Vic3RyaW5nKGVuZCk7XG4gICAgICBzZWxlY3Rpb25SZWYuY3VycmVudCA9IHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBiZWZvcmVUeHQ6IGJlZm9yZVR4dCxcbiAgICAgICAgYWZ0ZXJUeHQ6IGFmdGVyVHh0XG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEZpeCBlcnJvciBpbiBDaHJvbWU6XG4gICAgICAvLyBGYWlsZWQgdG8gcmVhZCB0aGUgJ3NlbGVjdGlvblN0YXJ0JyBwcm9wZXJ0eSBmcm9tICdIVE1MSW5wdXRFbGVtZW50J1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjExNzc0ODkvMzA0MDYwNVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlIGxvZ2ljOlxuICAgKiAgMS4gYmFjayBzdHJpbmcgc2FtZVxuICAgKiAgMi4gc3RhcnQgc3RyaW5nIHNhbWVcbiAgICovXG4gIGZ1bmN0aW9uIHJlc3RvcmVDdXJzb3IoKSB7XG4gICAgaWYgKGlucHV0ICYmIHNlbGVjdGlvblJlZi5jdXJyZW50ICYmIGZvY3VzZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB2YXIgX3NlbGVjdGlvblJlZiRjdXJyZW50ID0gc2VsZWN0aW9uUmVmLmN1cnJlbnQsXG4gICAgICAgICAgYmVmb3JlVHh0ID0gX3NlbGVjdGlvblJlZiRjdXJyZW50LmJlZm9yZVR4dCxcbiAgICAgICAgICBhZnRlclR4dCA9IF9zZWxlY3Rpb25SZWYkY3VycmVudC5hZnRlclR4dCxcbiAgICAgICAgICBzdGFydCA9IF9zZWxlY3Rpb25SZWYkY3VycmVudC5zdGFydDtcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aChiZWZvcmVUeHQpKSB7XG4gICAgICAgICAgc3RhcnRQb3MgPSBiZWZvcmVUeHQubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmVuZHNXaXRoKGFmdGVyVHh0KSkge1xuICAgICAgICAgIHN0YXJ0UG9zID0gdmFsdWUubGVuZ3RoIC0gc2VsZWN0aW9uUmVmLmN1cnJlbnQuYWZ0ZXJUeHQubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBiZWZvcmVMYXN0Q2hhciA9IGJlZm9yZVR4dFtzdGFydCAtIDFdO1xuICAgICAgICAgIHZhciBuZXdJbmRleCA9IHZhbHVlLmluZGV4T2YoYmVmb3JlTGFzdENoYXIsIHN0YXJ0IC0gMSk7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3RhcnRQb3MgPSBuZXdJbmRleCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0UG9zLCBzdGFydFBvcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdhcm5pbmcoZmFsc2UsIFwiU29tZXRoaW5nIHdhcm5pbmcgb2YgY3Vyc29yIHJlc3RvcmUuIFBsZWFzZSBmaXJlIGlzc3VlIGFib3V0IHRoaXM6IFwiLmNvbmNhdChlLm1lc3NhZ2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtyZWNvcmRDdXJzb3IsIHJlc3RvcmVDdXJzb3JdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSBcIi4uL2lzTW9iaWxlXCI7XG5pbXBvcnQgdXNlTGF5b3V0RWZmZWN0IGZyb20gXCIuL3VzZUxheW91dEVmZmVjdFwiO1xuXG4vKipcbiAqIEhvb2sgdG8gZGV0ZWN0IGlmIHRoZSB1c2VyIGlzIG9uIGEgbW9iaWxlIGRldmljZVxuICogTm90aWNlIHRoYXQgdGhpcyBob29rIHdpbGwgb25seSBkZXRlY3QgdGhlIGRldmljZSB0eXBlIGluIGVmZmVjdCwgc28gaXQgd2lsbCBhbHdheXMgYmUgZmFsc2UgaW4gc2VydmVyIHNpZGVcbiAqL1xudmFyIHVzZU1vYmlsZSA9IGZ1bmN0aW9uIHVzZU1vYmlsZSgpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBtb2JpbGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldE1vYmlsZSA9IF91c2VTdGF0ZTJbMV07XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0TW9iaWxlKGlzTW9iaWxlKCkpO1xuICB9LCBbXSk7XG4gIHJldHVybiBtb2JpbGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTW9iaWxlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVua25vd24tcHJvcGVydHkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZU1vYmlsZSBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNb2JpbGVcIjtcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5cbi8qKlxuICogV2hlbiBjbGljayBhbmQgaG9sZCBvbiBhIGJ1dHRvbiAtIHRoZSBzcGVlZCBvZiBhdXRvIGNoYW5naW5nIHRoZSB2YWx1ZS5cbiAqL1xudmFyIFNURVBfSU5URVJWQUwgPSAyMDA7XG5cbi8qKlxuICogV2hlbiBjbGljayBhbmQgaG9sZCBvbiBhIGJ1dHRvbiAtIHRoZSBkZWxheSBiZWZvcmUgYXV0byBjaGFuZ2luZyB0aGUgdmFsdWUuXG4gKi9cbnZhciBTVEVQX0RFTEFZID0gNjAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RlcEhhbmRsZXIoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgdXBOb2RlID0gX3JlZi51cE5vZGUsXG4gICAgZG93bk5vZGUgPSBfcmVmLmRvd25Ob2RlLFxuICAgIHVwRGlzYWJsZWQgPSBfcmVmLnVwRGlzYWJsZWQsXG4gICAgZG93bkRpc2FibGVkID0gX3JlZi5kb3duRGlzYWJsZWQsXG4gICAgb25TdGVwID0gX3JlZi5vblN0ZXA7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PSBTdGVwID09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgc3RlcFRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGZyYW1lSWRzID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgdmFyIG9uU3RlcFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBvblN0ZXBSZWYuY3VycmVudCA9IG9uU3RlcDtcbiAgdmFyIG9uU3RvcFN0ZXAgPSBmdW5jdGlvbiBvblN0b3BTdGVwKCkge1xuICAgIGNsZWFyVGltZW91dChzdGVwVGltZW91dFJlZi5jdXJyZW50KTtcbiAgfTtcblxuICAvLyBXZSB3aWxsIGludGVydmFsIHVwZGF0ZSBzdGVwIHdoZW4gaG9sZCBtb3VzZSBkb3duXG4gIHZhciBvblN0ZXBNb3VzZURvd24gPSBmdW5jdGlvbiBvblN0ZXBNb3VzZURvd24oZSwgdXApIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25TdG9wU3RlcCgpO1xuICAgIG9uU3RlcFJlZi5jdXJyZW50KHVwKTtcblxuICAgIC8vIExvb3Agc3RlcCBmb3IgaW50ZXJ2YWxcbiAgICBmdW5jdGlvbiBsb29wU3RlcCgpIHtcbiAgICAgIG9uU3RlcFJlZi5jdXJyZW50KHVwKTtcbiAgICAgIHN0ZXBUaW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGxvb3BTdGVwLCBTVEVQX0lOVEVSVkFMKTtcbiAgICB9XG5cbiAgICAvLyBGaXJzdCB0aW1lIHByZXNzIHdpbGwgd2FpdCBzb21lIHRpbWUgdG8gdHJpZ2dlciBsb29wIHN0ZXAgdXBkYXRlXG4gICAgc3RlcFRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQobG9vcFN0ZXAsIFNURVBfREVMQVkpO1xuICB9O1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBvblN0b3BTdGVwKCk7XG4gICAgICBmcmFtZUlkcy5jdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiByYWYuY2FuY2VsKGlkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGlzTW9iaWxlID0gdXNlTW9iaWxlKCk7XG4gIGlmIChpc01vYmlsZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBoYW5kbGVyQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYW5kbGVyXCIpO1xuICB2YXIgdXBDbGFzc05hbWUgPSBjbGFzc05hbWVzKGhhbmRsZXJDbGFzc05hbWUsIFwiXCIuY29uY2F0KGhhbmRsZXJDbGFzc05hbWUsIFwiLXVwXCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGhhbmRsZXJDbGFzc05hbWUsIFwiLXVwLWRpc2FibGVkXCIpLCB1cERpc2FibGVkKSk7XG4gIHZhciBkb3duQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhoYW5kbGVyQ2xhc3NOYW1lLCBcIlwiLmNvbmNhdChoYW5kbGVyQ2xhc3NOYW1lLCBcIi1kb3duXCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGhhbmRsZXJDbGFzc05hbWUsIFwiLWRvd24tZGlzYWJsZWRcIiksIGRvd25EaXNhYmxlZCkpO1xuXG4gIC8vIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNDMwODhcbiAgLy8gSW4gU2FmYXJpLCBXaGVuIHdlIGZpcmUgb25tb3VzZWRvd24gYW5kIG9ubW91c2V1cCBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbiwgXG4gIC8vIHRoZXJlIG1heSBiZSBhIHByb2JsZW0gdGhhdCB0aGUgb25tb3VzZXVwIGV2ZW50cyBhcmUgZXhlY3V0ZWQgZmlyc3QsIFxuICAvLyByZXN1bHRpbmcgaW4gYSBkaXNvcmRlcmVkIHByb2dyYW0gZXhlY3V0aW9uLlxuICAvLyBTbywgd2UgbmVlZCB0byB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIGVuc3VyZSB0aGF0IHRoZSBvbm1vdXNldXAgZXZlbnQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIG9ubW91c2Vkb3duIGV2ZW50LlxuICB2YXIgc2FmZU9uU3RvcFN0ZXAgPSBmdW5jdGlvbiBzYWZlT25TdG9wU3RlcCgpIHtcbiAgICByZXR1cm4gZnJhbWVJZHMuY3VycmVudC5wdXNoKHJhZihvblN0b3BTdGVwKSk7XG4gIH07XG4gIHZhciBzaGFyZWRIYW5kbGVyUHJvcHMgPSB7XG4gICAgdW5zZWxlY3RhYmxlOiAnb24nLFxuICAgIHJvbGU6ICdidXR0b24nLFxuICAgIG9uTW91c2VVcDogc2FmZU9uU3RvcFN0ZXAsXG4gICAgb25Nb3VzZUxlYXZlOiBzYWZlT25TdG9wU3RlcFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoaGFuZGxlckNsYXNzTmFtZSwgXCItd3JhcFwiKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe30sIHNoYXJlZEhhbmRsZXJQcm9wcywge1xuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBvblN0ZXBNb3VzZURvd24oZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBcImFyaWEtbGFiZWxcIjogXCJJbmNyZWFzZSBWYWx1ZVwiLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiB1cERpc2FibGVkLFxuICAgIGNsYXNzTmFtZTogdXBDbGFzc05hbWVcbiAgfSksIHVwTm9kZSB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIHVuc2VsZWN0YWJsZTogXCJvblwiLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYW5kbGVyLXVwLWlubmVyXCIpXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBzaGFyZWRIYW5kbGVyUHJvcHMsIHtcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgb25TdGVwTW91c2VEb3duKGUsIGZhbHNlKTtcbiAgICB9LFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkRlY3JlYXNlIFZhbHVlXCIsXG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGRvd25EaXNhYmxlZCxcbiAgICBjbGFzc05hbWU6IGRvd25DbGFzc05hbWVcbiAgfSksIGRvd25Ob2RlIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgdW5zZWxlY3RhYmxlOiBcIm9uXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhhbmRsZXItZG93bi1pbm5lclwiKVxuICB9KSkpO1xufSIsImltcG9ydCB7IHRyaW1OdW1iZXIsIG51bTJzdHIgfSBmcm9tICdAcmMtY29tcG9uZW50L21pbmktZGVjaW1hbCc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVjdXBsZVN0ZXBzKHN0ZXApIHtcbiAgdmFyIHN0ZXBTdHIgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBudW0yc3RyKHN0ZXApIDogdHJpbU51bWJlcihzdGVwKS5mdWxsU3RyO1xuICB2YXIgaGFzUG9pbnQgPSBzdGVwU3RyLmluY2x1ZGVzKCcuJyk7XG4gIGlmICghaGFzUG9pbnQpIHtcbiAgICByZXR1cm4gc3RlcCArICcwJztcbiAgfVxuICByZXR1cm4gdHJpbU51bWJlcihzdGVwU3RyLnJlcGxhY2UoLyhcXGQpXFwuKFxcZCkvZywgJyQxJDIuJykpLmZ1bGxTdHI7XG59IiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xuXG4vKipcbiAqIEFsd2F5cyB0cmlnZ2VyIGxhdGVzdCBvbmNlIHdoZW4gY2FsbCBtdWx0aXBsZSB0aW1lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBpZFJlZiA9IHVzZVJlZigwKTtcbiAgdmFyIGNsZWFuVXAgPSBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgIHJhZi5jYW5jZWwoaWRSZWYuY3VycmVudCk7XG4gIH07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFuVXA7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNsZWFuVXAoKTtcbiAgICBpZFJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH07XG59KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJzdGVwXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwidmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcInJlYWRPbmx5XCIsIFwidXBIYW5kbGVyXCIsIFwiZG93bkhhbmRsZXJcIiwgXCJrZXlib2FyZFwiLCBcImNoYW5nZU9uV2hlZWxcIiwgXCJjb250cm9sc1wiLCBcImNsYXNzTmFtZXNcIiwgXCJzdHJpbmdNb2RlXCIsIFwicGFyc2VyXCIsIFwiZm9ybWF0dGVyXCIsIFwicHJlY2lzaW9uXCIsIFwiZGVjaW1hbFNlcGFyYXRvclwiLCBcIm9uQ2hhbmdlXCIsIFwib25JbnB1dFwiLCBcIm9uUHJlc3NFbnRlclwiLCBcIm9uU3RlcFwiLCBcImNoYW5nZU9uQmx1clwiLCBcImRvbVJlZlwiXSxcbiAgX2V4Y2x1ZGVkMiA9IFtcImRpc2FibGVkXCIsIFwic3R5bGVcIiwgXCJwcmVmaXhDbHNcIiwgXCJ2YWx1ZVwiLCBcInByZWZpeFwiLCBcInN1ZmZpeFwiLCBcImFkZG9uQmVmb3JlXCIsIFwiYWRkb25BZnRlclwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzTmFtZXNcIl07XG5pbXBvcnQgZ2V0TWluaURlY2ltYWwsIHsgZ2V0TnVtYmVyUHJlY2lzaW9uLCBudW0yc3RyLCB0b0ZpeGVkLCB2YWxpZGF0ZU51bWJlciB9IGZyb20gJ0ByYy1jb21wb25lbnQvbWluaS1kZWNpbWFsJztcbmltcG9ydCBjbHN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQmFzZUlucHV0IH0gZnJvbSAncmMtaW5wdXQnO1xuaW1wb3J0IHsgdXNlTGF5b3V0VXBkYXRlRWZmZWN0IH0gZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTGF5b3V0RWZmZWN0XCI7XG5pbXBvcnQgcHJveHlPYmplY3QgZnJvbSBcInJjLXV0aWwvZXMvcHJveHlPYmplY3RcIjtcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDdXJzb3IgZnJvbSBcIi4vaG9va3MvdXNlQ3Vyc29yXCI7XG5pbXBvcnQgU3RlcEhhbmRsZXIgZnJvbSBcIi4vU3RlcEhhbmRsZXJcIjtcbmltcG9ydCB7IGdldERlY3VwbGVTdGVwcyB9IGZyb20gXCIuL3V0aWxzL251bWJlclV0aWxcIjtcbmltcG9ydCB7IHRyaWdnZXJGb2N1cyB9IGZyb20gXCJyYy1pbnB1dC9lcy91dGlscy9jb21tb25VdGlsc1wiO1xuaW1wb3J0IHVzZUZyYW1lIGZyb20gXCIuL2hvb2tzL3VzZUZyYW1lXCI7XG4vKipcbiAqIFdlIHN1cHBvcnQgYHN0cmluZ01vZGVgIHdoaWNoIG5lZWQgaGFuZGxlIGNvcnJlY3QgdHlwZSB3aGVuIHVzZXIgY2FsbCBpbiBvbkNoYW5nZVxuICogZm9ybWF0IG1heCBvciBtaW4gdmFsdWVcbiAqIDEuIGlmIGlzSW52YWxpZCByZXR1cm4gbnVsbFxuICogMi4gaWYgcHJlY2lzaW9uIGlzIHVuZGVmaW5lZCwgcmV0dXJuIGRlY2ltYWxcbiAqIDMuIGZvcm1hdCB3aXRoIHByZWNpc2lvblxuICogICAgSS4gaWYgbWF4ID4gMCwgcm91bmQgZG93biB3aXRoIHByZWNpc2lvbi4gRXhhbXBsZTogbWF4PSAzLjUsIHByZWNpc2lvbj0wICBhZnRlckZvcm1hdDogM1xuICogICAgSUkuIGlmIG1heCA8IDAsIHJvdW5kIHVwIHdpdGggcHJlY2lzaW9uLiBFeGFtcGxlOiBtYXg9IC0zLjUsIHByZWNpc2lvbj0wICBhZnRlckZvcm1hdDogLTRcbiAqICAgIElJSS4gaWYgbWluID4gMCwgcm91bmQgdXAgd2l0aCBwcmVjaXNpb24uIEV4YW1wbGU6IG1pbj0gMy41LCBwcmVjaXNpb249MCAgYWZ0ZXJGb3JtYXQ6IDRcbiAqICAgIElWLiBpZiBtaW4gPCAwLCByb3VuZCBkb3duIHdpdGggcHJlY2lzaW9uLiBFeGFtcGxlOiBtYXg9IC0zLjUsIHByZWNpc2lvbj0wICBhZnRlckZvcm1hdDogLTNcbiAqL1xudmFyIGdldERlY2ltYWxWYWx1ZSA9IGZ1bmN0aW9uIGdldERlY2ltYWxWYWx1ZShzdHJpbmdNb2RlLCBkZWNpbWFsVmFsdWUpIHtcbiAgaWYgKHN0cmluZ01vZGUgfHwgZGVjaW1hbFZhbHVlLmlzRW1wdHkoKSkge1xuICAgIHJldHVybiBkZWNpbWFsVmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gZGVjaW1hbFZhbHVlLnRvTnVtYmVyKCk7XG59O1xudmFyIGdldERlY2ltYWxJZlZhbGlkYXRlID0gZnVuY3Rpb24gZ2V0RGVjaW1hbElmVmFsaWRhdGUodmFsdWUpIHtcbiAgdmFyIGRlY2ltYWwgPSBnZXRNaW5pRGVjaW1hbCh2YWx1ZSk7XG4gIHJldHVybiBkZWNpbWFsLmlzSW52YWxpZGF0ZSgpID8gbnVsbCA6IGRlY2ltYWw7XG59O1xudmFyIEludGVybmFsSW5wdXROdW1iZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIG1pbiA9IHByb3BzLm1pbixcbiAgICBtYXggPSBwcm9wcy5tYXgsXG4gICAgX3Byb3BzJHN0ZXAgPSBwcm9wcy5zdGVwLFxuICAgIHN0ZXAgPSBfcHJvcHMkc3RlcCA9PT0gdm9pZCAwID8gMSA6IF9wcm9wcyRzdGVwLFxuICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seSxcbiAgICB1cEhhbmRsZXIgPSBwcm9wcy51cEhhbmRsZXIsXG4gICAgZG93bkhhbmRsZXIgPSBwcm9wcy5kb3duSGFuZGxlcixcbiAgICBrZXlib2FyZCA9IHByb3BzLmtleWJvYXJkLFxuICAgIF9wcm9wcyRjaGFuZ2VPbldoZWVsID0gcHJvcHMuY2hhbmdlT25XaGVlbCxcbiAgICBjaGFuZ2VPbldoZWVsID0gX3Byb3BzJGNoYW5nZU9uV2hlZWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNoYW5nZU9uV2hlZWwsXG4gICAgX3Byb3BzJGNvbnRyb2xzID0gcHJvcHMuY29udHJvbHMsXG4gICAgY29udHJvbHMgPSBfcHJvcHMkY29udHJvbHMgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkY29udHJvbHMsXG4gICAgY2xhc3NOYW1lcyA9IHByb3BzLmNsYXNzTmFtZXMsXG4gICAgc3RyaW5nTW9kZSA9IHByb3BzLnN0cmluZ01vZGUsXG4gICAgcGFyc2VyID0gcHJvcHMucGFyc2VyLFxuICAgIGZvcm1hdHRlciA9IHByb3BzLmZvcm1hdHRlcixcbiAgICBwcmVjaXNpb24gPSBwcm9wcy5wcmVjaXNpb24sXG4gICAgZGVjaW1hbFNlcGFyYXRvciA9IHByb3BzLmRlY2ltYWxTZXBhcmF0b3IsXG4gICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICBvbklucHV0ID0gcHJvcHMub25JbnB1dCxcbiAgICBvblByZXNzRW50ZXIgPSBwcm9wcy5vblByZXNzRW50ZXIsXG4gICAgb25TdGVwID0gcHJvcHMub25TdGVwLFxuICAgIF9wcm9wcyRjaGFuZ2VPbkJsdXIgPSBwcm9wcy5jaGFuZ2VPbkJsdXIsXG4gICAgY2hhbmdlT25CbHVyID0gX3Byb3BzJGNoYW5nZU9uQmx1ciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyRjaGFuZ2VPbkJsdXIsXG4gICAgZG9tUmVmID0gcHJvcHMuZG9tUmVmLFxuICAgIGlucHV0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG4gIHZhciBpbnB1dENsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5wdXRcIik7XG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICBmb2N1cyA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgc2V0Rm9jdXMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuICB2YXIgdXNlclR5cGluZ1JlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBjb21wb3NpdGlvblJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBzaGlmdEtleVJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBWYWx1ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSZWFsIHZhbHVlIGNvbnRyb2xcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0TWluaURlY2ltYWwodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlKTtcbiAgICB9KSxcbiAgICBfUmVhY3QkdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlMywgMiksXG4gICAgZGVjaW1hbFZhbHVlID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICBzZXREZWNpbWFsVmFsdWUgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuICBmdW5jdGlvbiBzZXRVbmNvbnRyb2xsZWREZWNpbWFsVmFsdWUobmV3RGVjaW1hbCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXREZWNpbWFsVmFsdWUobmV3RGVjaW1hbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PSBQYXJzZXIgJiBGb3JtYXR0ZXIgPT09PT09PT09PT09PT09PT09PT09PVxuICAvKipcbiAgICogYHByZWNpc2lvbmAgaXMgdXNlZCBmb3IgZm9ybWF0dGVyICYgb25DaGFuZ2UuXG4gICAqIEl0IHdpbGwgYXV0byBnZW5lcmF0ZSBieSBgdmFsdWVgICYgYHN0ZXBgLlxuICAgKiBCdXQgaXQgd2lsbCBub3QgYmxvY2sgdXNlciB0eXBpbmcuXG4gICAqXG4gICAqIE5vdGU6IEF1dG8gZ2VuZXJhdGUgYHByZWNpc2lvbmAgaXMgdXNlZCBmb3IgbGVnYWN5IGxvZ2ljLlxuICAgKiBXZSBzaG91bGQgcmVtb3ZlIHRoaXMgc2luY2Ugd2UgYWxyZWFkeSBzdXBwb3J0IGhpZ2ggcHJlY2lzaW9uIHdpdGggQmlnSW50LlxuICAgKlxuICAgKiBAcGFyYW0gbnVtYmVyICBQcm92aWRlIHdoaWNoIG51bWJlciBzaG91bGQgY2FsY3VsYXRlIHByZWNpc2lvblxuICAgKiBAcGFyYW0gdXNlclR5cGluZyAgQ2hhbmdlIGJ5IHVzZXIgdHlwaW5nXG4gICAqL1xuICB2YXIgZ2V0UHJlY2lzaW9uID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG51bVN0ciwgdXNlclR5cGluZykge1xuICAgIGlmICh1c2VyVHlwaW5nKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocHJlY2lzaW9uID49IDApIHtcbiAgICAgIHJldHVybiBwcmVjaXNpb247XG4gICAgfVxuICAgIHJldHVybiBNYXRoLm1heChnZXROdW1iZXJQcmVjaXNpb24obnVtU3RyKSwgZ2V0TnVtYmVyUHJlY2lzaW9uKHN0ZXApKTtcbiAgfSwgW3ByZWNpc2lvbiwgc3RlcF0pO1xuXG4gIC8vID4+PiBQYXJzZXJcbiAgdmFyIG1lcmdlZFBhcnNlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgbnVtU3RyID0gU3RyaW5nKG51bSk7XG4gICAgaWYgKHBhcnNlcikge1xuICAgICAgcmV0dXJuIHBhcnNlcihudW1TdHIpO1xuICAgIH1cbiAgICB2YXIgcGFyc2VkU3RyID0gbnVtU3RyO1xuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgICBwYXJzZWRTdHIgPSBwYXJzZWRTdHIucmVwbGFjZShkZWNpbWFsU2VwYXJhdG9yLCAnLicpO1xuICAgIH1cblxuICAgIC8vIFtMZWdhY3ldIFdlIHN0aWxsIHN1cHBvcnQgYXV0byBjb252ZXJ0IGAkIDEyMyw0NTZgIHRvIGAxMjM0NTZgXG4gICAgcmV0dXJuIHBhcnNlZFN0ci5yZXBsYWNlKC9bXlxcdy4tXSsvZywgJycpO1xuICB9LCBbcGFyc2VyLCBkZWNpbWFsU2VwYXJhdG9yXSk7XG5cbiAgLy8gPj4+IEZvcm1hdHRlclxuICB2YXIgaW5wdXRWYWx1ZVJlZiA9IFJlYWN0LnVzZVJlZignJyk7XG4gIHZhciBtZXJnZWRGb3JtYXR0ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobnVtYmVyLCB1c2VyVHlwaW5nKSB7XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIGZvcm1hdHRlcihudW1iZXIsIHtcbiAgICAgICAgdXNlclR5cGluZzogdXNlclR5cGluZyxcbiAgICAgICAgaW5wdXQ6IFN0cmluZyhpbnB1dFZhbHVlUmVmLmN1cnJlbnQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHN0ciA9IHR5cGVvZiBudW1iZXIgPT09ICdudW1iZXInID8gbnVtMnN0cihudW1iZXIpIDogbnVtYmVyO1xuXG4gICAgLy8gVXNlciB0eXBpbmcgd2lsbCBub3QgYXV0byBmb3JtYXQgd2l0aCBwcmVjaXNpb24gZGlyZWN0bHlcbiAgICBpZiAoIXVzZXJUeXBpbmcpIHtcbiAgICAgIHZhciBtZXJnZWRQcmVjaXNpb24gPSBnZXRQcmVjaXNpb24oc3RyLCB1c2VyVHlwaW5nKTtcbiAgICAgIGlmICh2YWxpZGF0ZU51bWJlcihzdHIpICYmIChkZWNpbWFsU2VwYXJhdG9yIHx8IG1lcmdlZFByZWNpc2lvbiA+PSAwKSkge1xuICAgICAgICAvLyBTZXBhcmF0b3JcbiAgICAgICAgdmFyIHNlcGFyYXRvclN0ciA9IGRlY2ltYWxTZXBhcmF0b3IgfHwgJy4nO1xuICAgICAgICBzdHIgPSB0b0ZpeGVkKHN0ciwgc2VwYXJhdG9yU3RyLCBtZXJnZWRQcmVjaXNpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9LCBbZm9ybWF0dGVyLCBnZXRQcmVjaXNpb24sIGRlY2ltYWxTZXBhcmF0b3JdKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBJbnB1dFZhbHVlID09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8qKlxuICAgKiBJbnB1dCB0ZXh0IHZhbHVlIGNvbnRyb2xcbiAgICpcbiAgICogVXNlciBjYW4gbm90IHVwZGF0ZSBpbnB1dCBjb250ZW50IGRpcmVjdGx5LiBJdCB1cGRhdGVzIHdpdGggZm9sbG93IHJ1bGVzIGJ5IHByaW9yaXR5OlxuICAgKiAgMS4gY29udHJvbGxlZCBgdmFsdWVgIGNoYW5nZWRcbiAgICogICAgKiBbU1BFQ0lBTF0gVHlwaW5nIGxpa2UgYDEuYCBzaG91bGQgbm90IGltbWVkaWF0ZWx5IGNvbnZlcnQgdG8gYDFgXG4gICAqICAyLiBVc2VyIHR5cGluZyB3aXRoIGZvcm1hdCAobm90IHByZWNpc2lvbilcbiAgICogIDMuIEJsdXIgb3IgRW50ZXIgdHJpZ2dlciByZXZhbGlkYXRlXG4gICAqL1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlNSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbml0VmFsdWUgPSBkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9PSB2b2lkIDAgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbiAgICAgIGlmIChkZWNpbWFsVmFsdWUuaXNJbnZhbGlkYXRlKCkgJiYgWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5jbHVkZXMoX3R5cGVvZihpbml0VmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGluaXRWYWx1ZSkgPyAnJyA6IGluaXRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZWRGb3JtYXR0ZXIoZGVjaW1hbFZhbHVlLnRvU3RyaW5nKCksIGZhbHNlKTtcbiAgICB9KSxcbiAgICBfUmVhY3QkdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlNSwgMiksXG4gICAgaW5wdXRWYWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZTZbMF0sXG4gICAgc2V0SW50ZXJuYWxJbnB1dFZhbHVlID0gX1JlYWN0JHVzZVN0YXRlNlsxXTtcbiAgaW5wdXRWYWx1ZVJlZi5jdXJyZW50ID0gaW5wdXRWYWx1ZTtcblxuICAvLyBTaG91bGQgYWx3YXlzIGJlIHN0cmluZ1xuICBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlKG5ld1ZhbHVlLCB1c2VyVHlwaW5nKSB7XG4gICAgc2V0SW50ZXJuYWxJbnB1dFZhbHVlKG1lcmdlZEZvcm1hdHRlcihcbiAgICAvLyBJbnZhbGlkYXRlIG51bWJlciBpcyBzb21ldGltZSBwYXNzZWQgYnkgZXh0ZXJuYWwgY29udHJvbCwgd2Ugc2hvdWxkIGxldCBpdCBnb1xuICAgIC8vIE90aGVyd2lzZSBpcyBjb250cm9sbGVkIGJ5IGludGVybmFsIGludGVyYWN0aXZlIGxvZ2ljIHdoaWNoIGNoZWNrIGJ5IHVzZXJUeXBpbmdcbiAgICAvLyBZb3UgY2FuIHJlZiAnc2hvdyBsaW1pdGVkIHZhbHVlIHdoZW4gaW5wdXQgaXMgbm90IGZvY3VzZWQnIHRlc3QgZm9yIG1vcmUgaW5mby5cbiAgICBuZXdWYWx1ZS5pc0ludmFsaWRhdGUoKSA/IG5ld1ZhbHVlLnRvU3RyaW5nKGZhbHNlKSA6IG5ld1ZhbHVlLnRvU3RyaW5nKCF1c2VyVHlwaW5nKSwgdXNlclR5cGluZykpO1xuICB9XG5cbiAgLy8gPj4+IE1heCAmIE1pbiBsaW1pdFxuICB2YXIgbWF4RGVjaW1hbCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXREZWNpbWFsSWZWYWxpZGF0ZShtYXgpO1xuICB9LCBbbWF4LCBwcmVjaXNpb25dKTtcbiAgdmFyIG1pbkRlY2ltYWwgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0RGVjaW1hbElmVmFsaWRhdGUobWluKTtcbiAgfSwgW21pbiwgcHJlY2lzaW9uXSk7XG4gIHZhciB1cERpc2FibGVkID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtYXhEZWNpbWFsIHx8ICFkZWNpbWFsVmFsdWUgfHwgZGVjaW1hbFZhbHVlLmlzSW52YWxpZGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBtYXhEZWNpbWFsLmxlc3NFcXVhbHMoZGVjaW1hbFZhbHVlKTtcbiAgfSwgW21heERlY2ltYWwsIGRlY2ltYWxWYWx1ZV0pO1xuICB2YXIgZG93bkRpc2FibGVkID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtaW5EZWNpbWFsIHx8ICFkZWNpbWFsVmFsdWUgfHwgZGVjaW1hbFZhbHVlLmlzSW52YWxpZGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsVmFsdWUubGVzc0VxdWFscyhtaW5EZWNpbWFsKTtcbiAgfSwgW21pbkRlY2ltYWwsIGRlY2ltYWxWYWx1ZV0pO1xuXG4gIC8vIEN1cnNvciBjb250cm9sbGVyXG4gIHZhciBfdXNlQ3Vyc29yID0gdXNlQ3Vyc29yKGlucHV0UmVmLmN1cnJlbnQsIGZvY3VzKSxcbiAgICBfdXNlQ3Vyc29yMiA9IF9zbGljZWRUb0FycmF5KF91c2VDdXJzb3IsIDIpLFxuICAgIHJlY29yZEN1cnNvciA9IF91c2VDdXJzb3IyWzBdLFxuICAgIHJlc3RvcmVDdXJzb3IgPSBfdXNlQ3Vyc29yMlsxXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBEYXRhID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8qKlxuICAgKiBGaW5kIHRhcmdldCB2YWx1ZSBjbG9zZXQgd2l0aGluIHJhbmdlLlxuICAgKiBlLmcuIFsxMSwgMjhdOlxuICAgKiAgICAzICA9PiAxMVxuICAgKiAgICAyMyA9PiAyM1xuICAgKiAgICA5OSA9PiAyOFxuICAgKi9cbiAgdmFyIGdldFJhbmdlVmFsdWUgPSBmdW5jdGlvbiBnZXRSYW5nZVZhbHVlKHRhcmdldCkge1xuICAgIC8vIHRhcmdldCA+IG1heFxuICAgIGlmIChtYXhEZWNpbWFsICYmICF0YXJnZXQubGVzc0VxdWFscyhtYXhEZWNpbWFsKSkge1xuICAgICAgcmV0dXJuIG1heERlY2ltYWw7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IDwgbWluXG4gICAgaWYgKG1pbkRlY2ltYWwgJiYgIW1pbkRlY2ltYWwubGVzc0VxdWFscyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gbWluRGVjaW1hbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHZhbHVlIGlzIGluIFttaW4sIG1heF0gcmFuZ2VcbiAgICovXG4gIHZhciBpc0luUmFuZ2UgPSBmdW5jdGlvbiBpc0luUmFuZ2UodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFnZXRSYW5nZVZhbHVlKHRhcmdldCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYG9uQ2hhbmdlYCBpZiB2YWx1ZSB2YWxpZGF0ZWQgYW5kIG5vdCBlcXVhbHMgb2Ygb3JpZ2luLlxuICAgKiBSZXR1cm4gdGhlIHZhbHVlIHRoYXQgcmUtYWxpZ24gaW4gcmFuZ2UuXG4gICAqL1xuICB2YXIgdHJpZ2dlclZhbHVlVXBkYXRlID0gZnVuY3Rpb24gdHJpZ2dlclZhbHVlVXBkYXRlKG5ld1ZhbHVlLCB1c2VyVHlwaW5nKSB7XG4gICAgdmFyIHVwZGF0ZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgdmFyIGlzUmFuZ2VWYWxpZGF0ZSA9IGlzSW5SYW5nZSh1cGRhdGVWYWx1ZSkgfHwgdXBkYXRlVmFsdWUuaXNFbXB0eSgpO1xuXG4gICAgLy8gU2tpcCBhbGlnbiB2YWx1ZSB3aGVuIHRyaWdnZXIgdmFsdWUgaXMgZW1wdHkuXG4gICAgLy8gV2UganVzdCB0cmlnZ2VyIG9uQ2hhbmdlKG51bGwpXG4gICAgLy8gVGhpcyBzaG91bGQgbm90IGJsb2NrIHVzZXIgdHlwaW5nXG4gICAgaWYgKCF1cGRhdGVWYWx1ZS5pc0VtcHR5KCkgJiYgIXVzZXJUeXBpbmcpIHtcbiAgICAgIC8vIFJldmVydCB2YWx1ZSBpbiByYW5nZSBpZiBuZWVkZWRcbiAgICAgIHVwZGF0ZVZhbHVlID0gZ2V0UmFuZ2VWYWx1ZSh1cGRhdGVWYWx1ZSkgfHwgdXBkYXRlVmFsdWU7XG4gICAgICBpc1JhbmdlVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXJlYWRPbmx5ICYmICFkaXNhYmxlZCAmJiBpc1JhbmdlVmFsaWRhdGUpIHtcbiAgICAgIHZhciBudW1TdHIgPSB1cGRhdGVWYWx1ZS50b1N0cmluZygpO1xuICAgICAgdmFyIG1lcmdlZFByZWNpc2lvbiA9IGdldFByZWNpc2lvbihudW1TdHIsIHVzZXJUeXBpbmcpO1xuICAgICAgaWYgKG1lcmdlZFByZWNpc2lvbiA+PSAwKSB7XG4gICAgICAgIHVwZGF0ZVZhbHVlID0gZ2V0TWluaURlY2ltYWwodG9GaXhlZChudW1TdHIsICcuJywgbWVyZ2VkUHJlY2lzaW9uKSk7XG5cbiAgICAgICAgLy8gV2hlbiB0byBmaXhlZC4gVGhlIHZhbHVlIG1heSBvdXQgb2YgbWluICYgbWF4IHJhbmdlLlxuICAgICAgICAvLyA0IGluIFswLCAzLjhdID0+IDMuOCA9PiA0ICh0b0ZpeGVkKVxuICAgICAgICBpZiAoIWlzSW5SYW5nZSh1cGRhdGVWYWx1ZSkpIHtcbiAgICAgICAgICB1cGRhdGVWYWx1ZSA9IGdldE1pbmlEZWNpbWFsKHRvRml4ZWQobnVtU3RyLCAnLicsIG1lcmdlZFByZWNpc2lvbiwgdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgIGlmICghdXBkYXRlVmFsdWUuZXF1YWxzKGRlY2ltYWxWYWx1ZSkpIHtcbiAgICAgICAgc2V0VW5jb250cm9sbGVkRGVjaW1hbFZhbHVlKHVwZGF0ZVZhbHVlKTtcbiAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCB8fCBvbkNoYW5nZSh1cGRhdGVWYWx1ZS5pc0VtcHR5KCkgPyBudWxsIDogZ2V0RGVjaW1hbFZhbHVlKHN0cmluZ01vZGUsIHVwZGF0ZVZhbHVlKSk7XG5cbiAgICAgICAgLy8gUmVmb3JtYXQgaW5wdXQgaWYgdmFsdWUgaXMgbm90IGNvbnRyb2xsZWRcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKHVwZGF0ZVZhbHVlLCB1c2VyVHlwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVwZGF0ZVZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbFZhbHVlO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFVzZXIgSW5wdXQgPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIG9uTmV4dFByb21pc2UgPSB1c2VGcmFtZSgpO1xuXG4gIC8vID4+PiBDb2xsZWN0IGlucHV0IHZhbHVlXG4gIHZhciBjb2xsZWN0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGNvbGxlY3RJbnB1dFZhbHVlKGlucHV0U3RyKSB7XG4gICAgcmVjb3JkQ3Vyc29yKCk7XG5cbiAgICAvLyBVcGRhdGUgaW5wdXRWYWx1ZSBpbiBjYXNlIGlucHV0IGNhbiBub3QgcGFyc2UgYXMgbnVtYmVyXG4gICAgLy8gUmVmcmVzaCByZWYgdmFsdWUgaW1tZWRpYXRlbHkgc2luY2UgaXQgbWF5IHVzZWQgYnkgZm9ybWF0dGVyXG4gICAgaW5wdXRWYWx1ZVJlZi5jdXJyZW50ID0gaW5wdXRTdHI7XG4gICAgc2V0SW50ZXJuYWxJbnB1dFZhbHVlKGlucHV0U3RyKTtcblxuICAgIC8vIFBhcnNlIG51bWJlclxuICAgIGlmICghY29tcG9zaXRpb25SZWYuY3VycmVudCkge1xuICAgICAgdmFyIGZpbmFsVmFsdWUgPSBtZXJnZWRQYXJzZXIoaW5wdXRTdHIpO1xuICAgICAgdmFyIGZpbmFsRGVjaW1hbCA9IGdldE1pbmlEZWNpbWFsKGZpbmFsVmFsdWUpO1xuICAgICAgaWYgKCFmaW5hbERlY2ltYWwuaXNOYU4oKSkge1xuICAgICAgICB0cmlnZ2VyVmFsdWVVcGRhdGUoZmluYWxEZWNpbWFsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIG9uSW5wdXQgbGF0ZXIgdG8gbGV0IHVzZXIgY3VzdG9taXplIHZhbHVlIGlmIHRoZXkgd2FudCB0byBoYW5kbGUgc29tZXRoaW5nIGFmdGVyIG9uQ2hhbmdlXG4gICAgb25JbnB1dCA9PT0gbnVsbCB8fCBvbklucHV0ID09PSB2b2lkIDAgfHwgb25JbnB1dChpbnB1dFN0cik7XG5cbiAgICAvLyBvcHRpbWl6ZSBmb3IgY2hpbmVzZSBpbnB1dCBleHBlcmllbmNlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODE5NlxuICAgIG9uTmV4dFByb21pc2UoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5leHRJbnB1dFN0ciA9IGlucHV0U3RyO1xuICAgICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgICAgbmV4dElucHV0U3RyID0gaW5wdXRTdHIucmVwbGFjZSgv44CCL2csICcuJyk7XG4gICAgICB9XG4gICAgICBpZiAobmV4dElucHV0U3RyICE9PSBpbnB1dFN0cikge1xuICAgICAgICBjb2xsZWN0SW5wdXRWYWx1ZShuZXh0SW5wdXRTdHIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vID4+PiBDb21wb3NpdGlvblxuICB2YXIgb25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gb25Db21wb3NpdGlvblN0YXJ0KCkge1xuICAgIGNvbXBvc2l0aW9uUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9O1xuICB2YXIgb25Db21wb3NpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uQ29tcG9zaXRpb25FbmQoKSB7XG4gICAgY29tcG9zaXRpb25SZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIGNvbGxlY3RJbnB1dFZhbHVlKGlucHV0UmVmLmN1cnJlbnQudmFsdWUpO1xuICB9O1xuXG4gIC8vID4+PiBJbnB1dFxuICB2YXIgb25JbnRlcm5hbElucHV0ID0gZnVuY3Rpb24gb25JbnRlcm5hbElucHV0KGUpIHtcbiAgICBjb2xsZWN0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU3RlcCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgb25JbnRlcm5hbFN0ZXAgPSBmdW5jdGlvbiBvbkludGVybmFsU3RlcCh1cCkge1xuICAgIHZhciBfaW5wdXRSZWYkY3VycmVudDtcbiAgICAvLyBJZ25vcmUgc3RlcCBzaW5jZSBvdXQgb2YgcmFuZ2VcbiAgICBpZiAodXAgJiYgdXBEaXNhYmxlZCB8fCAhdXAgJiYgZG93bkRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdHlwaW5nIHN0YXR1cyBzaW5jZSBpdCBtYXkgYmUgY2F1c2VkIGJ5IHVwICYgZG93biBrZXkuXG4gICAgLy8gV2Ugc2hvdWxkIHN5bmMgd2l0aCBpbnB1dCB2YWx1ZS5cbiAgICB1c2VyVHlwaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB2YXIgc3RlcERlY2ltYWwgPSBnZXRNaW5pRGVjaW1hbChzaGlmdEtleVJlZi5jdXJyZW50ID8gZ2V0RGVjdXBsZVN0ZXBzKHN0ZXApIDogc3RlcCk7XG4gICAgaWYgKCF1cCkge1xuICAgICAgc3RlcERlY2ltYWwgPSBzdGVwRGVjaW1hbC5uZWdhdGUoKTtcbiAgICB9XG4gICAgdmFyIHRhcmdldCA9IChkZWNpbWFsVmFsdWUgfHwgZ2V0TWluaURlY2ltYWwoMCkpLmFkZChzdGVwRGVjaW1hbC50b1N0cmluZygpKTtcbiAgICB2YXIgdXBkYXRlZFZhbHVlID0gdHJpZ2dlclZhbHVlVXBkYXRlKHRhcmdldCwgZmFsc2UpO1xuICAgIG9uU3RlcCA9PT0gbnVsbCB8fCBvblN0ZXAgPT09IHZvaWQgMCB8fCBvblN0ZXAoZ2V0RGVjaW1hbFZhbHVlKHN0cmluZ01vZGUsIHVwZGF0ZWRWYWx1ZSksIHtcbiAgICAgIG9mZnNldDogc2hpZnRLZXlSZWYuY3VycmVudCA/IGdldERlY3VwbGVTdGVwcyhzdGVwKSA6IHN0ZXAsXG4gICAgICB0eXBlOiB1cCA/ICd1cCcgOiAnZG93bidcbiAgICB9KTtcbiAgICAoX2lucHV0UmVmJGN1cnJlbnQgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudCA9PT0gdm9pZCAwIHx8IF9pbnB1dFJlZiRjdXJyZW50LmZvY3VzKCk7XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGbHVzaCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvKipcbiAgICogRmx1c2ggY3VycmVudCBpbnB1dCBjb250ZW50IHRvIHRyaWdnZXIgdmFsdWUgY2hhbmdlICYgcmUtZm9ybWF0dGVyIGlucHV0IGlmIG5lZWRlZC5cbiAgICogVGhpcyB3aWxsIGFsd2F5cyBmbHVzaCBpbnB1dCB2YWx1ZSBmb3IgdXBkYXRlLlxuICAgKiBJZiBpdCdzIGludmFsaWRhdGUsIHdpbGwgZmFsbGJhY2sgdG8gbGFzdCB2YWxpZGF0ZSB2YWx1ZS5cbiAgICovXG4gIHZhciBmbHVzaElucHV0VmFsdWUgPSBmdW5jdGlvbiBmbHVzaElucHV0VmFsdWUodXNlclR5cGluZykge1xuICAgIHZhciBwYXJzZWRWYWx1ZSA9IGdldE1pbmlEZWNpbWFsKG1lcmdlZFBhcnNlcihpbnB1dFZhbHVlKSk7XG4gICAgdmFyIGZvcm1hdFZhbHVlO1xuICAgIGlmICghcGFyc2VkVmFsdWUuaXNOYU4oKSkge1xuICAgICAgLy8gT25seSB2YWxpZGF0ZSB2YWx1ZSBvciBlbXB0eSB2YWx1ZSBjYW4gYmUgcmUtZmlsbCB0byBpbnB1dFZhbHVlXG4gICAgICAvLyBSZWFzc2lnbiB0aGUgZm9ybWF0VmFsdWUgd2l0aGluIHJhbmdlZCBvZiB0cmlnZ2VyIGNvbnRyb2xcbiAgICAgIGZvcm1hdFZhbHVlID0gdHJpZ2dlclZhbHVlVXBkYXRlKHBhcnNlZFZhbHVlLCB1c2VyVHlwaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0VmFsdWUgPSB0cmlnZ2VyVmFsdWVVcGRhdGUoZGVjaW1hbFZhbHVlLCB1c2VyVHlwaW5nKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFJlc2V0IGJhY2sgd2l0aCBjb250cm9sbGVkIHZhbHVlIGZpcnN0XG4gICAgICBzZXRJbnB1dFZhbHVlKGRlY2ltYWxWYWx1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIWZvcm1hdFZhbHVlLmlzTmFOKCkpIHtcbiAgICAgIC8vIFJlc2V0IGlucHV0IGJhY2sgc2luY2Ugbm8gdmFsaWRhdGUgdmFsdWVcbiAgICAgIHNldElucHV0VmFsdWUoZm9ybWF0VmFsdWUsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU29sdmUgdGhlIGlzc3VlIG9mIHRoZSBldmVudCB0cmlnZ2VyaW5nIHNlcXVlbmNlIHdoZW4gZW50ZXJpbmcgbnVtYmVycyBpbiBjaGluZXNlIGlucHV0IChTYWZhcmkpXG4gIHZhciBvbkJlZm9yZUlucHV0ID0gZnVuY3Rpb24gb25CZWZvcmVJbnB1dCgpIHtcbiAgICB1c2VyVHlwaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9O1xuICB2YXIgb25LZXlEb3duID0gZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIGtleSA9IGV2ZW50LmtleSxcbiAgICAgIHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgdXNlclR5cGluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBzaGlmdEtleVJlZi5jdXJyZW50ID0gc2hpZnRLZXk7XG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKCFjb21wb3NpdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgIHVzZXJUeXBpbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZmx1c2hJbnB1dFZhbHVlKGZhbHNlKTtcbiAgICAgIG9uUHJlc3NFbnRlciA9PT0gbnVsbCB8fCBvblByZXNzRW50ZXIgPT09IHZvaWQgMCB8fCBvblByZXNzRW50ZXIoZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoa2V5Ym9hcmQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc3RlcFxuICAgIGlmICghY29tcG9zaXRpb25SZWYuY3VycmVudCAmJiBbJ1VwJywgJ0Fycm93VXAnLCAnRG93bicsICdBcnJvd0Rvd24nXS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBvbkludGVybmFsU3RlcChrZXkgPT09ICdVcCcgfHwga2V5ID09PSAnQXJyb3dVcCcpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG4gIHZhciBvbktleVVwID0gZnVuY3Rpb24gb25LZXlVcCgpIHtcbiAgICB1c2VyVHlwaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBzaGlmdEtleVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNoYW5nZU9uV2hlZWwgJiYgZm9jdXMpIHtcbiAgICAgIHZhciBvbldoZWVsID0gZnVuY3Rpb24gb25XaGVlbChldmVudCkge1xuICAgICAgICAvLyBtb3ZpbmcgbW91c2Ugd2hlZWwgcmlzZXMgd2hlZWwgZXZlbnQgd2l0aCBkZWx0YVkgPCAwXG4gICAgICAgIC8vIHNjcm9sbCB2YWx1ZSBncm93cyBmcm9tIHRvcCB0byBib3R0b20sIGFzIHNjcmVlbiBZIGNvb3JkaW5hdGVcbiAgICAgICAgb25JbnRlcm5hbFN0ZXAoZXZlbnQuZGVsdGFZIDwgMCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9O1xuICAgICAgdmFyIGlucHV0ID0gaW5wdXRSZWYuY3VycmVudDtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAvLyBSZWFjdCBvbldoZWVsIGlzIHBhc3NpdmUgYW5kIHdlIGNhbid0IHByZXZlbnREZWZhdWx0KCkgaW4gaXQuXG4gICAgICAgIC8vIFRoYXQncyB3aHkgd2Ugc2hvdWxkIHN1YnNjcmliZSB3aXRoIERPTSBsaXN0ZW5lclxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzY2MzAyNS9yZWFjdC1vbndoZWVsLWhhbmRsZXItY2FudC1wcmV2ZW50ZGVmYXVsdC1iZWNhdXNlLWl0cy1hLXBhc3NpdmUtZXZlbnQtbGlzdGVuZXZcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25XaGVlbCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyA+Pj4gRm9jdXMgJiBCbHVyXG4gIHZhciBvbkJsdXIgPSBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgaWYgKGNoYW5nZU9uQmx1cikge1xuICAgICAgZmx1c2hJbnB1dFZhbHVlKGZhbHNlKTtcbiAgICB9XG4gICAgc2V0Rm9jdXMoZmFsc2UpO1xuICAgIHVzZXJUeXBpbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnRyb2xsZWQgPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5wdXQgYnkgcHJlY2lzaW9uICYgZm9ybWF0dGVyXG4gIHVzZUxheW91dFVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFkZWNpbWFsVmFsdWUuaXNJbnZhbGlkYXRlKCkpIHtcbiAgICAgIHNldElucHV0VmFsdWUoZGVjaW1hbFZhbHVlLCBmYWxzZSk7XG4gICAgfVxuICB9LCBbcHJlY2lzaW9uLCBmb3JtYXR0ZXJdKTtcblxuICAvLyBJbnB1dCBieSB2YWx1ZVxuICB1c2VMYXlvdXRVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGdldE1pbmlEZWNpbWFsKHZhbHVlKTtcbiAgICBzZXREZWNpbWFsVmFsdWUobmV3VmFsdWUpO1xuICAgIHZhciBjdXJyZW50UGFyc2VkVmFsdWUgPSBnZXRNaW5pRGVjaW1hbChtZXJnZWRQYXJzZXIoaW5wdXRWYWx1ZSkpO1xuXG4gICAgLy8gV2hlbiB1c2VyIHR5cGluZyBmcm9tIGAxLjJgIHRvIGAxLmAsIHdlIHNob3VsZCBub3QgY29udmVydCB0byBgMWAgaW1tZWRpYXRlbHkuXG4gICAgLy8gQnV0IGxldCBpdCBnbyBpZiB1c2VyIHNldCBgZm9ybWF0dGVyYFxuICAgIGlmICghbmV3VmFsdWUuZXF1YWxzKGN1cnJlbnRQYXJzZWRWYWx1ZSkgfHwgIXVzZXJUeXBpbmdSZWYuY3VycmVudCB8fCBmb3JtYXR0ZXIpIHtcbiAgICAgIC8vIFVwZGF0ZSB2YWx1ZSBhcyBlZmZlY3RcbiAgICAgIHNldElucHV0VmFsdWUobmV3VmFsdWUsIHVzZXJUeXBpbmdSZWYuY3VycmVudCk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEN1cnNvciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHVzZUxheW91dFVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgcmVzdG9yZUN1cnNvcigpO1xuICAgIH1cbiAgfSwgW2lucHV0VmFsdWVdKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBkb21SZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KHByZWZpeENscywgY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvY3VzZWRcIiksIGZvY3VzKSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJlYWRvbmx5XCIpLCByZWFkT25seSksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm90LWEtbnVtYmVyXCIpLCBkZWNpbWFsVmFsdWUuaXNOYU4oKSksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3V0LW9mLXJhbmdlXCIpLCAhZGVjaW1hbFZhbHVlLmlzSW52YWxpZGF0ZSgpICYmICFpc0luUmFuZ2UoZGVjaW1hbFZhbHVlKSkpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgc2V0Rm9jdXModHJ1ZSk7XG4gICAgfSxcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICBvbktleVVwOiBvbktleVVwLFxuICAgIG9uQ29tcG9zaXRpb25TdGFydDogb25Db21wb3NpdGlvblN0YXJ0LFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IG9uQ29tcG9zaXRpb25FbmQsXG4gICAgb25CZWZvcmVJbnB1dDogb25CZWZvcmVJbnB1dFxuICB9LCBjb250cm9scyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdGVwSGFuZGxlciwge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHVwTm9kZTogdXBIYW5kbGVyLFxuICAgIGRvd25Ob2RlOiBkb3duSGFuZGxlcixcbiAgICB1cERpc2FibGVkOiB1cERpc2FibGVkLFxuICAgIGRvd25EaXNhYmxlZDogZG93bkRpc2FibGVkLFxuICAgIG9uU3RlcDogb25JbnRlcm5hbFN0ZXBcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGlucHV0Q2xhc3NOYW1lLCBcIi13cmFwXCIpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICByb2xlOiBcInNwaW5idXR0b25cIixcbiAgICBcImFyaWEtdmFsdWVtaW5cIjogbWluLFxuICAgIFwiYXJpYS12YWx1ZW1heFwiOiBtYXgsXG4gICAgXCJhcmlhLXZhbHVlbm93XCI6IGRlY2ltYWxWYWx1ZS5pc0ludmFsaWRhdGUoKSA/IG51bGwgOiBkZWNpbWFsVmFsdWUudG9TdHJpbmcoKSxcbiAgICBzdGVwOiBzdGVwXG4gIH0sIGlucHV0UHJvcHMsIHtcbiAgICByZWY6IGNvbXBvc2VSZWYoaW5wdXRSZWYsIHJlZiksXG4gICAgY2xhc3NOYW1lOiBpbnB1dENsYXNzTmFtZSxcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBvbkNoYW5nZTogb25JbnRlcm5hbElucHV0LFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICByZWFkT25seTogcmVhZE9ubHlcbiAgfSkpKSk7XG59KTtcbnZhciBJbnB1dE51bWJlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtaW5wdXQtbnVtYmVyJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICBwcmVmaXggPSBwcm9wcy5wcmVmaXgsXG4gICAgc3VmZml4ID0gcHJvcHMuc3VmZml4LFxuICAgIGFkZG9uQmVmb3JlID0gcHJvcHMuYWRkb25CZWZvcmUsXG4gICAgYWRkb25BZnRlciA9IHByb3BzLmFkZG9uQWZ0ZXIsXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgIGNsYXNzTmFtZXMgPSBwcm9wcy5jbGFzc05hbWVzLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZDIpO1xuICB2YXIgaG9sZGVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgaW5wdXROdW1iZXJEb21SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBpbnB1dEZvY3VzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgZm9jdXMgPSBmdW5jdGlvbiBmb2N1cyhvcHRpb24pIHtcbiAgICBpZiAoaW5wdXRGb2N1c1JlZi5jdXJyZW50KSB7XG4gICAgICB0cmlnZ2VyRm9jdXMoaW5wdXRGb2N1c1JlZi5jdXJyZW50LCBvcHRpb24pO1xuICAgIH1cbiAgfTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJveHlPYmplY3QoaW5wdXRGb2N1c1JlZi5jdXJyZW50LCB7XG4gICAgICBmb2N1czogZm9jdXMsXG4gICAgICBuYXRpdmVFbGVtZW50OiBob2xkZXJSZWYuY3VycmVudC5uYXRpdmVFbGVtZW50IHx8IGlucHV0TnVtYmVyRG9tUmVmLmN1cnJlbnRcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYXNlSW5wdXQsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB0cmlnZ2VyRm9jdXM6IGZvY3VzLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIHN1ZmZpeDogc3VmZml4LFxuICAgIGFkZG9uQWZ0ZXI6IGFkZG9uQWZ0ZXIsXG4gICAgYWRkb25CZWZvcmU6IGFkZG9uQmVmb3JlLFxuICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXMsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgYWZmaXhXcmFwcGVyOiAnZGl2JyxcbiAgICAgIGdyb3VwV3JhcHBlcjogJ2RpdicsXG4gICAgICB3cmFwcGVyOiAnZGl2JyxcbiAgICAgIGdyb3VwQWRkb246ICdkaXYnXG4gICAgfSxcbiAgICByZWY6IGhvbGRlclJlZlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcm5hbElucHV0TnVtYmVyLCBfZXh0ZW5kcyh7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIHJlZjogaW5wdXRGb2N1c1JlZixcbiAgICBkb21SZWY6IGlucHV0TnVtYmVyRG9tUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyA9PT0gbnVsbCB8fCBjbGFzc05hbWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGFzc05hbWVzLmlucHV0XG4gIH0sIHJlc3QpKSk7XG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIElucHV0TnVtYmVyLmRpc3BsYXlOYW1lID0gJ0lucHV0TnVtYmVyJztcbn1cbmV4cG9ydCBkZWZhdWx0IElucHV0TnVtYmVyOyIsImltcG9ydCBJbnB1dE51bWJlciBmcm9tIFwiLi9JbnB1dE51bWJlclwiO1xuZXhwb3J0IGRlZmF1bHQgSW5wdXROdW1iZXI7IiwiaW1wb3J0IHsgVGlueUNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcbmltcG9ydCB7IGluaXRDb21wb25lbnRUb2tlbiB9IGZyb20gJy4uLy4uL2lucHV0L3N0eWxlL3Rva2VuJztcbmV4cG9ydCBjb25zdCBwcmVwYXJlQ29tcG9uZW50VG9rZW4gPSB0b2tlbiA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgaGFuZGxlVmlzaWJsZSA9IChfYSA9IHRva2VuLmhhbmRsZVZpc2libGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdhdXRvJztcbiAgY29uc3QgaGFuZGxlV2lkdGggPSB0b2tlbi5jb250cm9sSGVpZ2h0U00gLSB0b2tlbi5saW5lV2lkdGggKiAyO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbml0Q29tcG9uZW50VG9rZW4odG9rZW4pKSwge1xuICAgIGNvbnRyb2xXaWR0aDogOTAsXG4gICAgaGFuZGxlV2lkdGgsXG4gICAgaGFuZGxlRm9udFNpemU6IHRva2VuLmZvbnRTaXplIC8gMixcbiAgICBoYW5kbGVWaXNpYmxlLFxuICAgIGhhbmRsZUFjdGl2ZUJnOiB0b2tlbi5jb2xvckZpbGxBbHRlcixcbiAgICBoYW5kbGVCZzogdG9rZW4uY29sb3JCZ0NvbnRhaW5lcixcbiAgICBmaWxsZWRIYW5kbGVCZzogbmV3IFRpbnlDb2xvcih0b2tlbi5jb2xvckZpbGxTZWNvbmRhcnkpLm9uQmFja2dyb3VuZCh0b2tlbi5jb2xvckJnQ29udGFpbmVyKS50b0hleFN0cmluZygpLFxuICAgIGhhbmRsZUhvdmVyQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICBoYW5kbGVCb3JkZXJDb2xvcjogdG9rZW4uY29sb3JCb3JkZXIsXG4gICAgaGFuZGxlT3BhY2l0eTogaGFuZGxlVmlzaWJsZSA9PT0gdHJ1ZSA/IDEgOiAwLFxuICAgIGhhbmRsZVZpc2libGVXaWR0aDogaGFuZGxlVmlzaWJsZSA9PT0gdHJ1ZSA/IGhhbmRsZVdpZHRoIDogMFxuICB9KTtcbn07IiwiaW1wb3J0IHsgdW5pdCB9IGZyb20gJ0BhbnQtZGVzaWduL2Nzc2luanMnO1xuaW1wb3J0IHsgZ2VuQmFzaWNJbnB1dFN0eWxlLCBnZW5JbnB1dEdyb3VwU3R5bGUsIGdlblBsYWNlaG9sZGVyU3R5bGUsIGluaXRJbnB1dFRva2VuIH0gZnJvbSAnLi4vLi4vaW5wdXQvc3R5bGUnO1xuaW1wb3J0IHsgZ2VuQm9yZGVybGVzc1N0eWxlLCBnZW5GaWxsZWRHcm91cFN0eWxlLCBnZW5GaWxsZWRTdHlsZSwgZ2VuT3V0bGluZWRHcm91cFN0eWxlLCBnZW5PdXRsaW5lZFN0eWxlIH0gZnJvbSAnLi4vLi4vaW5wdXQvc3R5bGUvdmFyaWFudHMnO1xuaW1wb3J0IHsgcmVzZXRDb21wb25lbnQsIHJlc2V0SWNvbiB9IGZyb20gJy4uLy4uL3N0eWxlJztcbmltcG9ydCB7IGdlbkNvbXBhY3RJdGVtU3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZS9jb21wYWN0LWl0ZW0nO1xuaW1wb3J0IHsgZ2VuU3R5bGVIb29rcywgbWVyZ2VUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lL2ludGVybmFsJztcbmltcG9ydCB7IHByZXBhcmVDb21wb25lbnRUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xuZXhwb3J0IGNvbnN0IGdlblJhZGl1c1N0eWxlID0gKF9yZWYsIHNpemUpID0+IHtcbiAgbGV0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgYm9yZGVyUmFkaXVzU00sXG4gICAgYm9yZGVyUmFkaXVzTEdcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGJvcmRlclJhZGl1cyA9IHNpemUgPT09ICdsZycgPyBib3JkZXJSYWRpdXNMRyA6IGJvcmRlclJhZGl1c1NNO1xuICByZXR1cm4ge1xuICAgIFtgJi0ke3NpemV9YF06IHtcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWhhbmRsZXItd3JhcGBdOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckVuZEVuZFJhZGl1czogYm9yZGVyUmFkaXVzXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci11cGBdOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLWRvd25gXToge1xuICAgICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IGJvcmRlclJhZGl1c1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5jb25zdCBnZW5JbnB1dE51bWJlclN0eWxlcyA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBsaW5lV2lkdGgsXG4gICAgbGluZVR5cGUsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIGlucHV0Rm9udFNpemVTTSxcbiAgICBpbnB1dEZvbnRTaXplTEcsXG4gICAgY29udHJvbEhlaWdodExHLFxuICAgIGNvbnRyb2xIZWlnaHRTTSxcbiAgICBjb2xvckVycm9yLFxuICAgIHBhZGRpbmdJbmxpbmVTTSxcbiAgICBwYWRkaW5nQmxvY2tTTSxcbiAgICBwYWRkaW5nQmxvY2tMRyxcbiAgICBwYWRkaW5nSW5saW5lTEcsXG4gICAgY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgbW90aW9uRHVyYXRpb25NaWQsXG4gICAgaGFuZGxlSG92ZXJDb2xvcixcbiAgICBoYW5kbGVPcGFjaXR5LFxuICAgIHBhZGRpbmdJbmxpbmUsXG4gICAgcGFkZGluZ0Jsb2NrLFxuICAgIGhhbmRsZUJnLFxuICAgIGhhbmRsZUFjdGl2ZUJnLFxuICAgIGNvbG9yVGV4dERpc2FibGVkLFxuICAgIGJvcmRlclJhZGl1c1NNLFxuICAgIGJvcmRlclJhZGl1c0xHLFxuICAgIGNvbnRyb2xXaWR0aCxcbiAgICBoYW5kbGVCb3JkZXJDb2xvcixcbiAgICBmaWxsZWRIYW5kbGVCZyxcbiAgICBsaW5lSGVpZ2h0TEcsXG4gICAgY2FsY1xuICB9ID0gdG9rZW47XG4gIHJldHVybiBbe1xuICAgIFtjb21wb25lbnRDbHNdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXNldENvbXBvbmVudCh0b2tlbikpLCBnZW5CYXNpY0lucHV0U3R5bGUodG9rZW4pKSwge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB3aWR0aDogY29udHJvbFdpZHRoLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1c1xuICAgIH0pLCBnZW5PdXRsaW5lZFN0eWxlKHRva2VuLCB7XG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLXdyYXBgXToge1xuICAgICAgICBiYWNrZ3JvdW5kOiBoYW5kbGVCZyxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci1kb3duYF06IHtcbiAgICAgICAgICBib3JkZXJCbG9ja1N0YXJ0OiBgJHt1bml0KGxpbmVXaWR0aCl9ICR7bGluZVR5cGV9ICR7aGFuZGxlQm9yZGVyQ29sb3J9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpLCBnZW5GaWxsZWRTdHlsZSh0b2tlbiwge1xuICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci13cmFwYF06IHtcbiAgICAgICAgYmFja2dyb3VuZDogZmlsbGVkSGFuZGxlQmcsXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWhhbmRsZXItZG93bmBdOiB7XG4gICAgICAgICAgYm9yZGVyQmxvY2tTdGFydDogYCR7dW5pdChsaW5lV2lkdGgpfSAke2xpbmVUeXBlfSAke2hhbmRsZUJvcmRlckNvbG9yfWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzLXdpdGhpbic6IHtcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci13cmFwYF06IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBoYW5kbGVCZ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpLCBnZW5Cb3JkZXJsZXNzU3R5bGUodG9rZW4pKSwge1xuICAgICAgJyYtcnRsJzoge1xuICAgICAgICBkaXJlY3Rpb246ICdydGwnLFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pbnB1dGBdOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAncnRsJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYtbGcnOiB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGZvbnRTaXplOiBpbnB1dEZvbnRTaXplTEcsXG4gICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHRMRyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNMRyxcbiAgICAgICAgW2BpbnB1dCR7Y29tcG9uZW50Q2xzfS1pbnB1dGBdOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKGNvbnRyb2xIZWlnaHRMRykuc3ViKGNhbGMobGluZVdpZHRoKS5tdWwoMikpLmVxdWFsKCksXG4gICAgICAgICAgcGFkZGluZzogYCR7dW5pdChwYWRkaW5nQmxvY2tMRyl9ICR7dW5pdChwYWRkaW5nSW5saW5lTEcpfWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLXNtJzoge1xuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBmb250U2l6ZTogaW5wdXRGb250U2l6ZVNNLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c1NNLFxuICAgICAgICBbYGlucHV0JHtjb21wb25lbnRDbHN9LWlucHV0YF06IHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoY29udHJvbEhlaWdodFNNKS5zdWIoY2FsYyhsaW5lV2lkdGgpLm11bCgyKSkuZXF1YWwoKSxcbiAgICAgICAgICBwYWRkaW5nOiBgJHt1bml0KHBhZGRpbmdCbG9ja1NNKX0gJHt1bml0KHBhZGRpbmdJbmxpbmVTTSl9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IE91dCBPZiBSYW5nZSA9PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICcmLW91dC1vZi1yYW5nZSc6IHtcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taW5wdXQtd3JhcGBdOiB7XG4gICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvckVycm9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gU3R5bGUgZm9yIGlucHV0LWdyb3VwOiBpbnB1dCB3aXRoIGxhYmVsLCB3aXRoIGJ1dHRvbiBvciBkcm9wZG93bi4uLlxuICAgICAgJyYtZ3JvdXAnOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwgZ2VuSW5wdXRHcm91cFN0eWxlKHRva2VuKSksIHtcbiAgICAgICAgJyYtd3JhcHBlcic6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlcmBdOiB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBTaXplXG4gICAgICAgICAgJyYtbGcnOiB7XG4gICAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cC1hZGRvbmBdOiB7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzTEcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJi1zbSc6IHtcbiAgICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWdyb3VwLWFkZG9uYF06IHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNTTVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZ2VuT3V0bGluZWRHcm91cFN0eWxlKHRva2VuKSksIGdlbkZpbGxlZEdyb3VwU3R5bGUodG9rZW4pKSwge1xuICAgICAgICAgIC8vIEZpeCB0aGUgaXNzdWUgb2YgdXNpbmcgaWNvbnMgaW4gU3BhY2UgQ29tcGFjdCBtb2RlXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNDU3NjRcbiAgICAgICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1jb21wYWN0LWZpcnN0LWl0ZW0pOm5vdCgke2NvbXBvbmVudENsc30tY29tcGFjdC1sYXN0LWl0ZW0pJHtjb21wb25lbnRDbHN9LWNvbXBhY3QtaXRlbWBdOiB7XG4gICAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfSwgJHtjb21wb25lbnRDbHN9LWdyb3VwLWFkZG9uYF06IHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1jb21wYWN0LWxhc3QtaXRlbSkke2NvbXBvbmVudENsc30tY29tcGFjdC1maXJzdC1pdGVtYF06IHtcbiAgICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LCAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb25gXToge1xuICAgICAgICAgICAgICBib3JkZXJTdGFydEVuZFJhZGl1czogMCxcbiAgICAgICAgICAgICAgYm9yZGVyRW5kRW5kUmFkaXVzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1jb21wYWN0LWZpcnN0LWl0ZW0pJHtjb21wb25lbnRDbHN9LWNvbXBhY3QtbGFzdC1pdGVtYF06IHtcbiAgICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LCAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb25gXToge1xuICAgICAgICAgICAgICBib3JkZXJTdGFydFN0YXJ0UmFkaXVzOiAwLFxuICAgICAgICAgICAgICBib3JkZXJFbmRTdGFydFJhZGl1czogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgW2AmLWRpc2FibGVkICR7Y29tcG9uZW50Q2xzfS1pbnB1dGBdOiB7XG4gICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJ1xuICAgICAgfSxcbiAgICAgIFtjb21wb25lbnRDbHNdOiB7XG4gICAgICAgICcmLWlucHV0JzogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwge1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcGFkZGluZzogYCR7dW5pdChwYWRkaW5nQmxvY2spfSAke3VuaXQocGFkZGluZ0lubGluZSl9YCxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7bW90aW9uRHVyYXRpb25NaWR9IGxpbmVhcmAsXG4gICAgICAgICAgYXBwZWFyYW5jZTogJ3RleHRmaWVsZCcsXG4gICAgICAgICAgZm9udFNpemU6ICdpbmhlcml0J1xuICAgICAgICB9KSwgZ2VuUGxhY2Vob2xkZXJTdHlsZSh0b2tlbi5jb2xvclRleHRQbGFjZWhvbGRlcikpLCB7XG4gICAgICAgICAgJyZbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJlt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgd2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFtgJjpob3ZlciAke2NvbXBvbmVudENsc30taGFuZGxlci13cmFwLCAmLWZvY3VzZWQgJHtjb21wb25lbnRDbHN9LWhhbmRsZXItd3JhcGBdOiB7XG4gICAgICAgIHdpZHRoOiB0b2tlbi5oYW5kbGVXaWR0aCxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIEhhbmRsZXJcbiAge1xuICAgIFtjb21wb25lbnRDbHNdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLXdyYXBgXToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaW5zZXRCbG9ja1N0YXJ0OiAwLFxuICAgICAgICBpbnNldElubGluZUVuZDogMCxcbiAgICAgICAgd2lkdGg6IHRva2VuLmhhbmRsZVZpc2libGVXaWR0aCxcbiAgICAgICAgb3BhY2l0eTogaGFuZGxlT3BhY2l0eSxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJvcmRlclN0YXJ0U3RhcnRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckVuZEVuZFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJFbmRTdGFydFJhZGl1czogMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7bW90aW9uRHVyYXRpb25NaWR9YCxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAvLyBGaXggaW5wdXQgbnVtYmVyIGluc2lkZSBNZW51IG1ha2VzIGljb24gdG9vIGxhcmdlXG4gICAgICAgIC8vIFdlIGFyaXNlIHRoZSBzZWxlY3RvciBwcmlvcml0eSBieSBuZXN0IHNlbGVjdG9yIGhlcmVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQzNjdcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlcmBdOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBmbGV4OiAnYXV0bycsXG4gICAgICAgICAgaGVpZ2h0OiAnNDAlJyxcbiAgICAgICAgICBbYFxuICAgICAgICAgICAgICAke2NvbXBvbmVudENsc30taGFuZGxlci11cC1pbm5lcixcbiAgICAgICAgICAgICAgJHtjb21wb25lbnRDbHN9LWhhbmRsZXItZG93bi1pbm5lclxuICAgICAgICAgICAgYF06IHtcbiAgICAgICAgICAgIG1hcmdpbklubGluZUVuZDogMCxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0b2tlbi5oYW5kbGVGb250U2l6ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWhhbmRsZXJgXToge1xuICAgICAgICBoZWlnaHQ6ICc1MCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGNvbG9yOiBjb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAwLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgYm9yZGVySW5saW5lU3RhcnQ6IGAke3VuaXQobGluZVdpZHRoKX0gJHtsaW5lVHlwZX0gJHtoYW5kbGVCb3JkZXJDb2xvcn1gLFxuICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7bW90aW9uRHVyYXRpb25NaWR9IGxpbmVhcmAsXG4gICAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBoYW5kbGVBY3RpdmVCZ1xuICAgICAgICB9LFxuICAgICAgICAvLyBIb3ZlclxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBoZWlnaHQ6IGA2MCVgLFxuICAgICAgICAgIFtgXG4gICAgICAgICAgICAgICR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLXVwLWlubmVyLFxuICAgICAgICAgICAgICAke2NvbXBvbmVudENsc30taGFuZGxlci1kb3duLWlubmVyXG4gICAgICAgICAgICBgXToge1xuICAgICAgICAgICAgY29sb3I6IGhhbmRsZUhvdmVyQ29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmLXVwLWlubmVyLCAmLWRvd24taW5uZXInOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc2V0SWNvbigpKSwge1xuICAgICAgICAgIGNvbG9yOiBjb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7bW90aW9uRHVyYXRpb25NaWR9IGxpbmVhcmAsXG4gICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci11cGBdOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLWRvd25gXToge1xuICAgICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IGJvcmRlclJhZGl1c1xuICAgICAgfVxuICAgIH0sIGdlblJhZGl1c1N0eWxlKHRva2VuLCAnbGcnKSksIGdlblJhZGl1c1N0eWxlKHRva2VuLCAnc20nKSksIHtcbiAgICAgIC8vIERpc2FibGVkXG4gICAgICAnJi1kaXNhYmxlZCwgJi1yZWFkb25seSc6IHtcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci13cmFwYF06IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taW5wdXRgXToge1xuICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgXG4gICAgICAgICAgJHtjb21wb25lbnRDbHN9LWhhbmRsZXItdXAtZGlzYWJsZWQsXG4gICAgICAgICAgJHtjb21wb25lbnRDbHN9LWhhbmRsZXItZG93bi1kaXNhYmxlZFxuICAgICAgICBgXToge1xuICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCdcbiAgICAgIH0sXG4gICAgICBbYFxuICAgICAgICAgICR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLXVwLWRpc2FibGVkOmhvdmVyICYtaGFuZGxlci11cC1pbm5lcixcbiAgICAgICAgICAke2NvbXBvbmVudENsc30taGFuZGxlci1kb3duLWRpc2FibGVkOmhvdmVyICYtaGFuZGxlci1kb3duLWlubmVyXG4gICAgICAgIGBdOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvclRleHREaXNhYmxlZFxuICAgICAgfVxuICAgIH0pXG4gIH1dO1xufTtcbmNvbnN0IGdlbkFmZml4V3JhcHBlclN0eWxlcyA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBwYWRkaW5nQmxvY2ssXG4gICAgcGFkZGluZ0lubGluZSxcbiAgICBpbnB1dEFmZml4UGFkZGluZyxcbiAgICBjb250cm9sV2lkdGgsXG4gICAgYm9yZGVyUmFkaXVzTEcsXG4gICAgYm9yZGVyUmFkaXVzU00sXG4gICAgcGFkZGluZ0lubGluZUxHLFxuICAgIHBhZGRpbmdJbmxpbmVTTSxcbiAgICBwYWRkaW5nQmxvY2tMRyxcbiAgICBwYWRkaW5nQmxvY2tTTSxcbiAgICBtb3Rpb25EdXJhdGlvbk1pZFxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW2Ake2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlcmBdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgW2BpbnB1dCR7Y29tcG9uZW50Q2xzfS1pbnB1dGBdOiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3VuaXQocGFkZGluZ0Jsb2NrKX0gMGBcbiAgICAgIH1cbiAgICB9LCBnZW5CYXNpY0lucHV0U3R5bGUodG9rZW4pKSwge1xuICAgICAgLy8gb3IgbnVtYmVyIGhhbmRsZXIgd2lsbCBjb3ZlciBmb3JtIHN0YXR1c1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogY29udHJvbFdpZHRoLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHBhZGRpbmdJbmxpbmVTdGFydDogcGFkZGluZ0lubGluZSxcbiAgICAgICcmLWxnJzoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c0xHLFxuICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IHBhZGRpbmdJbmxpbmVMRyxcbiAgICAgICAgW2BpbnB1dCR7Y29tcG9uZW50Q2xzfS1pbnB1dGBdOiB7XG4gICAgICAgICAgcGFkZGluZzogYCR7dW5pdChwYWRkaW5nQmxvY2tMRyl9IDBgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJi1zbSc6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNTTSxcbiAgICAgICAgcGFkZGluZ0lubGluZVN0YXJ0OiBwYWRkaW5nSW5saW5lU00sXG4gICAgICAgIFtgaW5wdXQke2NvbXBvbmVudENsc30taW5wdXRgXToge1xuICAgICAgICAgIHBhZGRpbmc6IGAke3VuaXQocGFkZGluZ0Jsb2NrU00pfSAwYFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmOm5vdCgke2NvbXBvbmVudENsc30tZGlzYWJsZWQpOmhvdmVyYF06IHtcbiAgICAgICAgekluZGV4OiAxXG4gICAgICB9LFxuICAgICAgJyYtZm9jdXNlZCwgJjpmb2N1cyc6IHtcbiAgICAgICAgekluZGV4OiAxXG4gICAgICB9LFxuICAgICAgW2AmLWRpc2FibGVkID4gJHtjb21wb25lbnRDbHN9LWRpc2FibGVkYF06IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgIFtgPiBkaXYke2NvbXBvbmVudENsc31gXToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBbYCYke2NvbXBvbmVudENsc30tZm9jdXNlZGBdOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZSAhaW1wb3J0YW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgY29udGVudDogJ1wiXFxcXGEwXCInXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taGFuZGxlci13cmFwYF06IHtcbiAgICAgICAgekluZGV4OiAyXG4gICAgICB9LFxuICAgICAgW2NvbXBvbmVudENsc106IHtcbiAgICAgICAgcG9zaXRpb246ICdzdGF0aWMnLFxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICAnJi1wcmVmaXgsICYtc3VmZml4Jzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgICcmLXByZWZpeCc6IHtcbiAgICAgICAgICBtYXJnaW5JbmxpbmVFbmQ6IGlucHV0QWZmaXhQYWRkaW5nXG4gICAgICAgIH0sXG4gICAgICAgICcmLXN1ZmZpeCc6IHtcbiAgICAgICAgICBpbnNldEJsb2NrU3RhcnQ6IDAsXG4gICAgICAgICAgaW5zZXRJbmxpbmVFbmQ6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgbWFyZ2luSW5saW5lRW5kOiBwYWRkaW5nSW5saW5lLFxuICAgICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiBpbnB1dEFmZml4UGFkZGluZyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgbWFyZ2luICR7bW90aW9uRHVyYXRpb25NaWR9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmOmhvdmVyICR7Y29tcG9uZW50Q2xzfS1oYW5kbGVyLXdyYXAsICYtZm9jdXNlZCAke2NvbXBvbmVudENsc30taGFuZGxlci13cmFwYF06IHtcbiAgICAgICAgd2lkdGg6IHRva2VuLmhhbmRsZVdpZHRoLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgW2AmOm5vdCgke2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlci13aXRob3V0LWNvbnRyb2xzKTpob3ZlciAke2NvbXBvbmVudENsc30tc3VmZml4YF06IHtcbiAgICAgICAgbWFyZ2luSW5saW5lRW5kOiB0b2tlbi5jYWxjKHRva2VuLmhhbmRsZVdpZHRoKS5hZGQocGFkZGluZ0lubGluZSkuZXF1YWwoKVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3R5bGVIb29rcygnSW5wdXROdW1iZXInLCB0b2tlbiA9PiB7XG4gIGNvbnN0IGlucHV0TnVtYmVyVG9rZW4gPSBtZXJnZVRva2VuKHRva2VuLCBpbml0SW5wdXRUb2tlbih0b2tlbikpO1xuICByZXR1cm4gW2dlbklucHV0TnVtYmVyU3R5bGVzKGlucHV0TnVtYmVyVG9rZW4pLCBnZW5BZmZpeFdyYXBwZXJTdHlsZXMoaW5wdXROdW1iZXJUb2tlbiksXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID09ICAgICAgICAgICAgIFNwYWNlIENvbXBhY3QgICAgICAgICAgICAgICAgICAgICAgID09XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGdlbkNvbXBhY3RJdGVtU3R5bGUoaW5wdXROdW1iZXJUb2tlbildO1xufSwgcHJlcGFyZUNvbXBvbmVudFRva2VuLCB7XG4gIHVuaXRsZXNzOiB7XG4gICAgaGFuZGxlT3BhY2l0eTogdHJ1ZVxuICB9XG59KTsiLCJcInVzZSBjbGllbnRcIjtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb3duT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Rvd25PdXRsaW5lZFwiO1xuaW1wb3J0IFVwT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL1VwT3V0bGluZWRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJjSW5wdXROdW1iZXIgZnJvbSAncmMtaW5wdXQtbnVtYmVyJztcbmltcG9ydCBDb250ZXh0SXNvbGF0b3IgZnJvbSAnLi4vX3V0aWwvQ29udGV4dElzb2xhdG9yJztcbmltcG9ydCB7IGdldE1lcmdlZFN0YXR1cywgZ2V0U3RhdHVzQ2xhc3NOYW1lcyB9IGZyb20gJy4uL191dGlsL3N0YXR1c1V0aWxzJztcbmltcG9ydCB7IGRldlVzZVdhcm5pbmcgfSBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCBDb25maWdQcm92aWRlciwgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBEaXNhYmxlZENvbnRleHQgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyL0Rpc2FibGVkQ29udGV4dCc7XG5pbXBvcnQgdXNlQ1NTVmFyQ2xzIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlci9ob29rcy91c2VDU1NWYXJDbHMnO1xuaW1wb3J0IHVzZVNpemUgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyL2hvb2tzL3VzZVNpemUnO1xuaW1wb3J0IHsgRm9ybUl0ZW1JbnB1dENvbnRleHQgfSBmcm9tICcuLi9mb3JtL2NvbnRleHQnO1xuaW1wb3J0IHVzZVZhcmlhbnQgZnJvbSAnLi4vZm9ybS9ob29rcy91c2VWYXJpYW50cyc7XG5pbXBvcnQgeyB1c2VDb21wYWN0SXRlbUNvbnRleHQgfSBmcm9tICcuLi9zcGFjZS9Db21wYWN0JztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IElucHV0TnVtYmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCB0eXBlV2FybmluZyA9IGRldlVzZVdhcm5pbmcoJ0lucHV0TnVtYmVyJyk7XG4gICAgdHlwZVdhcm5pbmcuZGVwcmVjYXRlZCghKCdib3JkZXJlZCcgaW4gcHJvcHMpLCAnYm9yZGVyZWQnLCAndmFyaWFudCcpO1xuICAgIHR5cGVXYXJuaW5nKCEocHJvcHMudHlwZSA9PT0gJ251bWJlcicgJiYgcHJvcHMuY2hhbmdlT25XaGVlbCksICd1c2FnZScsICdXaGVuIGB0eXBlPW51bWJlcmAgaXMgdXNlZCB0b2dldGhlciB3aXRoIGBjaGFuZ2VPbldoZWVsYCwgY2hhbmdlT25XaGVlbCBtYXkgbm90IHdvcmsgcHJvcGVybHkuIFBsZWFzZSBkZWxldGUgYHR5cGU9bnVtYmVyYCBpZiBpdCBpcyBub3QgbmVjZXNzYXJ5LicpO1xuICB9XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHMsXG4gICAgZGlyZWN0aW9uXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IGlucHV0UmVmLmN1cnJlbnQpO1xuICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByb290Q2xhc3NOYW1lLFxuICAgICAgc2l6ZTogY3VzdG9taXplU2l6ZSxcbiAgICAgIGRpc2FibGVkOiBjdXN0b21EaXNhYmxlZCxcbiAgICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgICAgYWRkb25CZWZvcmUsXG4gICAgICBhZGRvbkFmdGVyLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgYm9yZGVyZWQsXG4gICAgICByZWFkT25seSxcbiAgICAgIHN0YXR1czogY3VzdG9tU3RhdHVzLFxuICAgICAgY29udHJvbHMsXG4gICAgICB2YXJpYW50OiBjdXN0b21WYXJpYW50XG4gICAgfSA9IHByb3BzLFxuICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwicm9vdENsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJkaXNhYmxlZFwiLCBcInByZWZpeENsc1wiLCBcImFkZG9uQmVmb3JlXCIsIFwiYWRkb25BZnRlclwiLCBcInByZWZpeFwiLCBcInN1ZmZpeFwiLCBcImJvcmRlcmVkXCIsIFwicmVhZE9ubHlcIiwgXCJzdGF0dXNcIiwgXCJjb250cm9sc1wiLCBcInZhcmlhbnRcIl0pO1xuICBjb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0LW51bWJlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIC8vIFN0eWxlXG4gIGNvbnN0IHJvb3RDbHMgPSB1c2VDU1NWYXJDbHMocHJlZml4Q2xzKTtcbiAgY29uc3QgW3dyYXBDU1NWYXIsIGhhc2hJZCwgY3NzVmFyQ2xzXSA9IHVzZVN0eWxlKHByZWZpeENscywgcm9vdENscyk7XG4gIGNvbnN0IHtcbiAgICBjb21wYWN0U2l6ZSxcbiAgICBjb21wYWN0SXRlbUNsYXNzbmFtZXNcbiAgfSA9IHVzZUNvbXBhY3RJdGVtQ29udGV4dChwcmVmaXhDbHMsIGRpcmVjdGlvbik7XG4gIGxldCB1cEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChVcE91dGxpbmVkLCB7XG4gICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWhhbmRsZXItdXAtaW5uZXJgXG4gIH0pO1xuICBsZXQgZG93bkljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEb3duT3V0bGluZWQsIHtcbiAgICBjbGFzc05hbWU6IGAke3ByZWZpeENsc30taGFuZGxlci1kb3duLWlubmVyYFxuICB9KTtcbiAgY29uc3QgY29udHJvbHNUZW1wID0gdHlwZW9mIGNvbnRyb2xzID09PSAnYm9vbGVhbicgPyBjb250cm9scyA6IHVuZGVmaW5lZDtcbiAgaWYgKHR5cGVvZiBjb250cm9scyA9PT0gJ29iamVjdCcpIHtcbiAgICB1cEljb24gPSB0eXBlb2YgY29udHJvbHMudXBJY29uID09PSAndW5kZWZpbmVkJyA/IHVwSWNvbiA6ICgvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWhhbmRsZXItdXAtaW5uZXJgXG4gICAgfSwgY29udHJvbHMudXBJY29uKSk7XG4gICAgZG93bkljb24gPSB0eXBlb2YgY29udHJvbHMuZG93bkljb24gPT09ICd1bmRlZmluZWQnID8gZG93bkljb24gOiAoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4Q2xzfS1oYW5kbGVyLWRvd24taW5uZXJgXG4gICAgfSwgY29udHJvbHMuZG93bkljb24pKTtcbiAgfVxuICBjb25zdCB7XG4gICAgaGFzRmVlZGJhY2ssXG4gICAgc3RhdHVzOiBjb250ZXh0U3RhdHVzLFxuICAgIGlzRm9ybUl0ZW1JbnB1dCxcbiAgICBmZWVkYmFja0ljb25cbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUl0ZW1JbnB1dENvbnRleHQpO1xuICBjb25zdCBtZXJnZWRTdGF0dXMgPSBnZXRNZXJnZWRTdGF0dXMoY29udGV4dFN0YXR1cywgY3VzdG9tU3RhdHVzKTtcbiAgY29uc3QgbWVyZ2VkU2l6ZSA9IHVzZVNpemUoY3R4ID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IGN1c3RvbWl6ZVNpemUgIT09IG51bGwgJiYgY3VzdG9taXplU2l6ZSAhPT0gdm9pZCAwID8gY3VzdG9taXplU2l6ZSA6IGNvbXBhY3RTaXplKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjdHg7XG4gIH0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gRGlzYWJsZWQgPT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGRpc2FibGVkID0gUmVhY3QudXNlQ29udGV4dChEaXNhYmxlZENvbnRleHQpO1xuICBjb25zdCBtZXJnZWREaXNhYmxlZCA9IGN1c3RvbURpc2FibGVkICE9PSBudWxsICYmIGN1c3RvbURpc2FibGVkICE9PSB2b2lkIDAgPyBjdXN0b21EaXNhYmxlZCA6IGRpc2FibGVkO1xuICBjb25zdCBbdmFyaWFudCwgZW5hYmxlVmFyaWFudENsc10gPSB1c2VWYXJpYW50KCdpbnB1dE51bWJlcicsIGN1c3RvbVZhcmlhbnQsIGJvcmRlcmVkKTtcbiAgY29uc3Qgc3VmZml4Tm9kZSA9IGhhc0ZlZWRiYWNrICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBmZWVkYmFja0ljb24pO1xuICBjb25zdCBpbnB1dE51bWJlckNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgW2Ake3ByZWZpeENsc30tbGdgXTogbWVyZ2VkU2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICBbYCR7cHJlZml4Q2xzfS1zbWBdOiBtZXJnZWRTaXplID09PSAnc21hbGwnLFxuICAgIFtgJHtwcmVmaXhDbHN9LXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnLFxuICAgIFtgJHtwcmVmaXhDbHN9LWluLWZvcm0taXRlbWBdOiBpc0Zvcm1JdGVtSW5wdXRcbiAgfSwgaGFzaElkKTtcbiAgY29uc3Qgd3JhcHBlckNsYXNzTmFtZSA9IGAke3ByZWZpeENsc30tZ3JvdXBgO1xuICBjb25zdCBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmNJbnB1dE51bWJlciwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICBkaXNhYmxlZDogbWVyZ2VkRGlzYWJsZWQsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNzc1ZhckNscywgcm9vdENscywgY2xhc3NOYW1lLCByb290Q2xhc3NOYW1lLCBjb21wYWN0SXRlbUNsYXNzbmFtZXMpLFxuICAgIHVwSGFuZGxlcjogdXBJY29uLFxuICAgIGRvd25IYW5kbGVyOiBkb3duSWNvbixcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgY29udHJvbHM6IGNvbnRyb2xzVGVtcCxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBzdWZmaXg6IHN1ZmZpeE5vZGUgfHwgc3VmZml4LFxuICAgIGFkZG9uQmVmb3JlOiBhZGRvbkJlZm9yZSAmJiAoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dElzb2xhdG9yLCB7XG4gICAgICBmb3JtOiB0cnVlLFxuICAgICAgc3BhY2U6IHRydWVcbiAgICB9LCBhZGRvbkJlZm9yZSkpLFxuICAgIGFkZG9uQWZ0ZXI6IGFkZG9uQWZ0ZXIgJiYgKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRJc29sYXRvciwge1xuICAgICAgZm9ybTogdHJ1ZSxcbiAgICAgIHNwYWNlOiB0cnVlXG4gICAgfSwgYWRkb25BZnRlcikpLFxuICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgIGlucHV0OiBpbnB1dE51bWJlckNsYXNzLFxuICAgICAgdmFyaWFudDogY2xhc3NOYW1lcyh7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dmFyaWFudH1gXTogZW5hYmxlVmFyaWFudENsc1xuICAgICAgfSwgZ2V0U3RhdHVzQ2xhc3NOYW1lcyhwcmVmaXhDbHMsIG1lcmdlZFN0YXR1cywgaGFzRmVlZGJhY2spKSxcbiAgICAgIGFmZml4V3JhcHBlcjogY2xhc3NOYW1lcyh7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWFmZml4LXdyYXBwZXItc21gXTogbWVyZ2VkU2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgICAgW2Ake3ByZWZpeENsc30tYWZmaXgtd3JhcHBlci1sZ2BdOiBtZXJnZWRTaXplID09PSAnbGFyZ2UnLFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyLXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnLFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyLXdpdGhvdXQtY29udHJvbHNgXTogY29udHJvbHMgPT09IGZhbHNlXG4gICAgICB9LCBoYXNoSWQpLFxuICAgICAgd3JhcHBlcjogY2xhc3NOYW1lcyh7XG4gICAgICAgIFtgJHt3cmFwcGVyQ2xhc3NOYW1lfS1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSwgaGFzaElkKSxcbiAgICAgIGdyb3VwV3JhcHBlcjogY2xhc3NOYW1lcyh7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWdyb3VwLXdyYXBwZXItc21gXTogbWVyZ2VkU2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgICAgW2Ake3ByZWZpeENsc30tZ3JvdXAtd3JhcHBlci1sZ2BdOiBtZXJnZWRTaXplID09PSAnbGFyZ2UnLFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS1ncm91cC13cmFwcGVyLXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnLFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS1ncm91cC13cmFwcGVyLSR7dmFyaWFudH1gXTogZW5hYmxlVmFyaWFudENsc1xuICAgICAgfSwgZ2V0U3RhdHVzQ2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWdyb3VwLXdyYXBwZXJgLCBtZXJnZWRTdGF0dXMsIGhhc0ZlZWRiYWNrKSwgaGFzaElkKVxuICAgIH1cbiAgfSwgb3RoZXJzKSk7XG4gIHJldHVybiB3cmFwQ1NTVmFyKGVsZW1lbnQpO1xufSk7XG5jb25zdCBUeXBlZElucHV0TnVtYmVyID0gSW5wdXROdW1iZXI7XG4vKiogQHByaXZhdGUgSW50ZXJuYWwgQ29tcG9uZW50LiBEbyBub3QgdXNlIGluIHlvdXIgcHJvZHVjdGlvbi4gKi9cbmNvbnN0IFB1cmVJbnB1dE51bWJlciA9IHByb3BzID0+ICgvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdQcm92aWRlciwge1xuICB0aGVtZToge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIElucHV0TnVtYmVyOiB7XG4gICAgICAgIGhhbmRsZVZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0TnVtYmVyLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBUeXBlZElucHV0TnVtYmVyLmRpc3BsYXlOYW1lID0gJ0lucHV0TnVtYmVyJztcbn1cblR5cGVkSW5wdXROdW1iZXIuX0ludGVybmFsUGFuZWxEb05vdFVzZU9yWW91V2lsbEJlRmlyZWQgPSBQdXJlSW5wdXROdW1iZXI7XG5leHBvcnQgZGVmYXVsdCBUeXBlZElucHV0TnVtYmVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///24435
`)},42119:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ steps; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(63606);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/rc-steps/es/Step.js




var _excluded = ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick", "render"];
/* eslint react/prop-types: 0 */



function isString(str) {
  return typeof str === 'string';
}
function Step(props) {
  var _classNames2;
  var className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    active = props.active,
    status = props.status,
    iconPrefix = props.iconPrefix,
    icon = props.icon,
    wrapperStyle = props.wrapperStyle,
    stepNumber = props.stepNumber,
    disabled = props.disabled,
    description = props.description,
    title = props.title,
    subTitle = props.subTitle,
    progressDot = props.progressDot,
    stepIcon = props.stepIcon,
    tailContent = props.tailContent,
    icons = props.icons,
    stepIndex = props.stepIndex,
    onStepClick = props.onStepClick,
    onClick = props.onClick,
    render = props.render,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  // ========================= Click ==========================
  var clickable = !!onStepClick && !disabled;
  var accessibilityProps = {};
  if (clickable) {
    accessibilityProps.role = 'button';
    accessibilityProps.tabIndex = 0;
    accessibilityProps.onClick = function (e) {
      onClick === null || onClick === void 0 ? void 0 : onClick(e);
      onStepClick(stepIndex);
    };
    accessibilityProps.onKeyDown = function (e) {
      var which = e.which;
      if (which === KeyCode/* default */.Z.ENTER || which === KeyCode/* default */.Z.SPACE) {
        onStepClick(stepIndex);
      }
    };
  }

  // ========================= Render =========================
  var renderIconNode = function renderIconNode() {
    var _classNames;
    var iconNode;
    var iconClassName = classnames_default()("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && (icons && !icons.finish || !icons)), (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "icon-cross"), !icon && status === 'error' && (icons && !icons.error || !icons)), _classNames));
    var iconDot = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-icon-dot")
    });
    // \`progressDot\` enjoy the highest priority
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, progressDot(iconDot, {
          index: stepNumber - 1,
          status: status,
          title: title,
          description: description
        }));
      } else {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, iconDot);
      }
    } else if (icon && !isString(icon)) {
      iconNode = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon);
    } else if (icons && icons.finish && status === 'finish') {
      iconNode = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icons.finish);
    } else if (icons && icons.error && status === 'error') {
      iconNode = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icons.error);
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = /*#__PURE__*/react.createElement("span", {
        className: iconClassName
      });
    } else {
      iconNode = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, stepNumber);
    }
    if (stepIcon) {
      iconNode = stepIcon({
        index: stepNumber - 1,
        status: status,
        title: title,
        description: description,
        node: iconNode
      });
    }
    return iconNode;
  };
  var mergedStatus = status || 'wait';
  var classString = classnames_default()("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(mergedStatus), className, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-custom"), icon), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-active"), active), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));
  var stepItemStyle = (0,objectSpread2/* default */.Z)({}, style);
  var stepNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, restProps, {
    className: classString,
    style: stepItemStyle
  }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    onClick: onClick
  }, accessibilityProps, {
    className: "".concat(prefixCls, "-item-container")
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-tail")
  }, tailContent), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-icon")
  }, renderIconNode()), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-content")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-title")
  }, title, subTitle && /*#__PURE__*/react.createElement("div", {
    title: typeof subTitle === 'string' ? subTitle : undefined,
    className: "".concat(prefixCls, "-item-subtitle")
  }, subTitle)), description && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-description")
  }, description))));
  if (render) {
    stepNode = render(stepNode) || null;
  }
  return stepNode;
}
/* harmony default export */ var es_Step = (Step);
;// CONCATENATED MODULE: ./node_modules/rc-steps/es/Steps.js




var Steps_excluded = ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange", "itemRender", "items"];
/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */



function Steps(props) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-steps' : _props$prefixCls,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    className = props.className,
    children = props.children,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$labelPlacement = props.labelPlacement,
    labelPlacement = _props$labelPlacement === void 0 ? 'horizontal' : _props$labelPlacement,
    _props$iconPrefix = props.iconPrefix,
    iconPrefix = _props$iconPrefix === void 0 ? 'rc' : _props$iconPrefix,
    _props$status = props.status,
    status = _props$status === void 0 ? 'process' : _props$status,
    size = props.size,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    _props$progressDot = props.progressDot,
    progressDot = _props$progressDot === void 0 ? false : _props$progressDot,
    stepIcon = props.stepIcon,
    _props$initial = props.initial,
    initial = _props$initial === void 0 ? 0 : _props$initial,
    icons = props.icons,
    onChange = props.onChange,
    itemRender = props.itemRender,
    _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Steps_excluded);
  var isNav = type === 'navigation';
  var isInline = type === 'inline';

  // inline type requires fixed progressDot direction size.
  var mergedProgressDot = isInline || progressDot;
  var mergedDirection = isInline ? 'horizontal' : direction;
  var mergedSize = isInline ? undefined : size;
  var adjustedLabelPlacement = mergedProgressDot ? 'vertical' : labelPlacement;
  var classString = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(mergedDirection), className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), mergedDirection === 'horizontal'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dot"), !!mergedProgressDot), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-navigation"), isNav), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-inline"), isInline), _classNames));
  var onStepClick = function onStepClick(next) {
    if (onChange && current !== next) {
      onChange(next);
    }
  };
  var renderStep = function renderStep(item, index) {
    var mergedItem = (0,objectSpread2/* default */.Z)({}, item);
    var stepNumber = initial + index;
    // fix tail color
    if (status === 'error' && index === current - 1) {
      mergedItem.className = "".concat(prefixCls, "-next-error");
    }
    if (!mergedItem.status) {
      if (stepNumber === current) {
        mergedItem.status = status;
      } else if (stepNumber < current) {
        mergedItem.status = 'finish';
      } else {
        mergedItem.status = 'wait';
      }
    }
    if (isInline) {
      mergedItem.icon = undefined;
      mergedItem.subTitle = undefined;
    }
    if (!mergedItem.render && itemRender) {
      mergedItem.render = function (stepItem) {
        return itemRender(mergedItem, stepItem);
      };
    }
    return /*#__PURE__*/react.createElement(es_Step, (0,esm_extends/* default */.Z)({}, mergedItem, {
      active: stepNumber === current,
      stepNumber: stepNumber + 1,
      stepIndex: stepNumber,
      key: stepNumber,
      prefixCls: prefixCls,
      iconPrefix: iconPrefix,
      wrapperStyle: style,
      progressDot: mergedProgressDot,
      stepIcon: stepIcon,
      icons: icons,
      onStepClick: onChange && onStepClick
    }));
  };
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classString,
    style: style
  }, restProps), items.filter(function (item) {
    return item;
  }).map(renderStep));
}
Steps.Step = es_Step;
/* harmony default export */ var es_Steps = (Steps);
;// CONCATENATED MODULE: ./node_modules/rc-steps/es/index.js



/* harmony default export */ var es = (es_Steps);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(98675);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(25378);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 13 modules
var progress = __webpack_require__(38703);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/custom-icon.js

const genStepsCustomIconStyle = token => {
  const {
    componentCls,
    customIconTop,
    customIconSize,
    customIconFontSize
  } = token;
  return {
    [\`\${componentCls}-item-custom\`]: {
      [\`> \${componentCls}-item-container > \${componentCls}-item-icon\`]: {
        height: 'auto',
        background: 'none',
        border: 0,
        [\`> \${componentCls}-icon\`]: {
          top: customIconTop,
          width: customIconSize,
          height: customIconSize,
          fontSize: customIconFontSize,
          lineHeight: (0,cssinjs_es/* unit */.bf)(customIconSize)
        }
      }
    },
    // Only adjust horizontal customize icon width
    [\`&:not(\${componentCls}-vertical)\`]: {
      [\`\${componentCls}-item-custom\`]: {
        [\`\${componentCls}-item-icon\`]: {
          width: 'auto',
          background: 'none'
        }
      }
    }
  };
};
/* harmony default export */ var custom_icon = (genStepsCustomIconStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/horizontal.js
const genHorizontalStyle = token => {
  const {
    componentCls
  } = token;
  const stepsItemCls = \`\${componentCls}-item\`; // .ant-steps-item
  return {
    [\`\${componentCls}-horizontal\`]: {
      [\`\${stepsItemCls}-tail\`]: {
        transform: 'translateY(-50%)'
      }
    }
  };
};
/* harmony default export */ var horizontal = (genHorizontalStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/inline.js

const genStepsInlineStyle = token => {
  const {
    componentCls,
    inlineDotSize,
    inlineTitleColor,
    inlineTailColor
  } = token;
  const containerPaddingTop = token.calc(token.paddingXS).add(token.lineWidth).equal();
  const titleStyle = {
    [\`\${componentCls}-item-container \${componentCls}-item-content \${componentCls}-item-title\`]: {
      color: inlineTitleColor
    }
  };
  return {
    [\`&\${componentCls}-inline\`]: {
      width: 'auto',
      display: 'inline-flex',
      [\`\${componentCls}-item\`]: {
        flex: 'none',
        '&-container': {
          padding: \`\${(0,cssinjs_es/* unit */.bf)(containerPaddingTop)} \${(0,cssinjs_es/* unit */.bf)(token.paddingXXS)} 0\`,
          margin: \`0 \${(0,cssinjs_es/* unit */.bf)(token.calc(token.marginXXS).div(2).equal())}\`,
          borderRadius: token.borderRadiusSM,
          cursor: 'pointer',
          transition: \`background-color \${token.motionDurationMid}\`,
          '&:hover': {
            background: token.controlItemBgHover
          },
          "&[role='button']:hover": {
            opacity: 1
          }
        },
        '&-icon': {
          width: inlineDotSize,
          height: inlineDotSize,
          marginInlineStart: \`calc(50% - \${(0,cssinjs_es/* unit */.bf)(token.calc(inlineDotSize).div(2).equal())})\`,
          [\`> \${componentCls}-icon\`]: {
            top: 0
          },
          [\`\${componentCls}-icon-dot\`]: {
            borderRadius: token.calc(token.fontSizeSM).div(4).equal(),
            '&::after': {
              display: 'none'
            }
          }
        },
        '&-content': {
          width: 'auto',
          marginTop: token.calc(token.marginXS).sub(token.lineWidth).equal()
        },
        '&-title': {
          color: inlineTitleColor,
          fontSize: token.fontSizeSM,
          lineHeight: token.lineHeightSM,
          fontWeight: 'normal',
          marginBottom: token.calc(token.marginXXS).div(2).equal()
        },
        '&-description': {
          display: 'none'
        },
        '&-tail': {
          marginInlineStart: 0,
          top: token.calc(inlineDotSize).div(2).add(containerPaddingTop).equal(),
          transform: \`translateY(-50%)\`,
          '&:after': {
            width: '100%',
            height: token.lineWidth,
            borderRadius: 0,
            marginInlineStart: 0,
            background: inlineTailColor
          }
        },
        [\`&:first-child \${componentCls}-item-tail\`]: {
          width: '50%',
          marginInlineStart: '50%'
        },
        [\`&:last-child \${componentCls}-item-tail\`]: {
          display: 'block',
          width: '50%'
        },
        '&-wait': Object.assign({
          [\`\${componentCls}-item-icon \${componentCls}-icon \${componentCls}-icon-dot\`]: {
            backgroundColor: token.colorBorderBg,
            border: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${inlineTailColor}\`
          }
        }, titleStyle),
        '&-finish': Object.assign({
          [\`\${componentCls}-item-tail::after\`]: {
            backgroundColor: inlineTailColor
          },
          [\`\${componentCls}-item-icon \${componentCls}-icon \${componentCls}-icon-dot\`]: {
            backgroundColor: inlineTailColor,
            border: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${inlineTailColor}\`
          }
        }, titleStyle),
        '&-error': titleStyle,
        '&-active, &-process': Object.assign({
          [\`\${componentCls}-item-icon\`]: {
            width: inlineDotSize,
            height: inlineDotSize,
            marginInlineStart: \`calc(50% - \${(0,cssinjs_es/* unit */.bf)(token.calc(inlineDotSize).div(2).equal())})\`,
            top: 0
          }
        }, titleStyle),
        [\`&:not(\${componentCls}-item-active) > \${componentCls}-item-container[role='button']:hover\`]: {
          [\`\${componentCls}-item-title\`]: {
            color: inlineTitleColor
          }
        }
      }
    }
  };
};
/* harmony default export */ var inline = (genStepsInlineStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/label-placement.js

const genStepsLabelPlacementStyle = token => {
  const {
    componentCls,
    iconSize,
    lineHeight,
    iconSizeSM
  } = token;
  return {
    [\`&\${componentCls}-label-vertical\`]: {
      [\`\${componentCls}-item\`]: {
        overflow: 'visible',
        '&-tail': {
          marginInlineStart: token.calc(iconSize).div(2).add(token.controlHeightLG).equal(),
          padding: \`0 \${(0,cssinjs_es/* unit */.bf)(token.paddingLG)}\`
        },
        '&-content': {
          display: 'block',
          width: token.calc(iconSize).div(2).add(token.controlHeightLG).mul(2).equal(),
          marginTop: token.marginSM,
          textAlign: 'center'
        },
        '&-icon': {
          display: 'inline-block',
          marginInlineStart: token.controlHeightLG
        },
        '&-title': {
          paddingInlineEnd: 0,
          paddingInlineStart: 0,
          '&::after': {
            display: 'none'
          }
        },
        '&-subtitle': {
          display: 'block',
          marginBottom: token.marginXXS,
          marginInlineStart: 0,
          lineHeight
        }
      },
      [\`&\${componentCls}-small:not(\${componentCls}-dot)\`]: {
        [\`\${componentCls}-item\`]: {
          '&-icon': {
            marginInlineStart: token.calc(iconSize).sub(iconSizeSM).div(2).add(token.controlHeightLG).equal()
          }
        }
      }
    }
  };
};
/* harmony default export */ var label_placement = (genStepsLabelPlacementStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/nav.js


const genStepsNavStyle = token => {
  const {
    componentCls,
    navContentMaxWidth,
    navArrowColor,
    stepsNavActiveColor,
    motionDurationSlow
  } = token;
  return {
    [\`&\${componentCls}-navigation\`]: {
      paddingTop: token.paddingSM,
      [\`&\${componentCls}-small\`]: {
        [\`\${componentCls}-item\`]: {
          '&-container': {
            marginInlineStart: token.calc(token.marginSM).mul(-1).equal()
          }
        }
      },
      [\`\${componentCls}-item\`]: {
        overflow: 'visible',
        textAlign: 'center',
        '&-container': {
          display: 'inline-block',
          height: '100%',
          marginInlineStart: token.calc(token.margin).mul(-1).equal(),
          paddingBottom: token.paddingSM,
          textAlign: 'start',
          transition: \`opacity \${motionDurationSlow}\`,
          [\`\${componentCls}-item-content\`]: {
            maxWidth: navContentMaxWidth
          },
          [\`\${componentCls}-item-title\`]: Object.assign(Object.assign({
            maxWidth: '100%',
            paddingInlineEnd: 0
          }, style/* textEllipsis */.vS), {
            '&::after': {
              display: 'none'
            }
          })
        },
        [\`&:not(\${componentCls}-item-active)\`]: {
          [\`\${componentCls}-item-container[role='button']\`]: {
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.85
            }
          }
        },
        '&:last-child': {
          flex: 1,
          '&::after': {
            display: 'none'
          }
        },
        '&::after': {
          position: 'absolute',
          top: \`calc(50% - \${(0,cssinjs_es/* unit */.bf)(token.calc(token.paddingSM).div(2).equal())})\`,
          insetInlineStart: '100%',
          display: 'inline-block',
          width: token.fontSizeIcon,
          height: token.fontSizeIcon,
          borderTop: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${navArrowColor}\`,
          borderBottom: 'none',
          borderInlineStart: 'none',
          borderInlineEnd: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${navArrowColor}\`,
          transform: 'translateY(-50%) translateX(-50%) rotate(45deg)',
          content: '""'
        },
        '&::before': {
          position: 'absolute',
          bottom: 0,
          insetInlineStart: '50%',
          display: 'inline-block',
          width: 0,
          height: token.lineWidthBold,
          backgroundColor: stepsNavActiveColor,
          transition: \`width \${motionDurationSlow}, inset-inline-start \${motionDurationSlow}\`,
          transitionTimingFunction: 'ease-out',
          content: '""'
        }
      },
      [\`\${componentCls}-item\${componentCls}-item-active::before\`]: {
        insetInlineStart: 0,
        width: '100%'
      }
    },
    [\`&\${componentCls}-navigation\${componentCls}-vertical\`]: {
      [\`> \${componentCls}-item\`]: {
        marginInlineEnd: 0,
        '&::before': {
          display: 'none'
        },
        [\`&\${componentCls}-item-active::before\`]: {
          top: 0,
          insetInlineEnd: 0,
          insetInlineStart: 'unset',
          display: 'block',
          width: token.calc(token.lineWidth).mul(3).equal(),
          height: \`calc(100% - \${(0,cssinjs_es/* unit */.bf)(token.marginLG)})\`
        },
        '&::after': {
          position: 'relative',
          insetInlineStart: '50%',
          display: 'block',
          width: token.calc(token.controlHeight).mul(0.25).equal(),
          height: token.calc(token.controlHeight).mul(0.25).equal(),
          marginBottom: token.marginXS,
          textAlign: 'center',
          transform: 'translateY(-50%) translateX(-50%) rotate(135deg)'
        },
        '&:last-child': {
          '&::after': {
            display: 'none'
          }
        },
        [\`> \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
          visibility: 'hidden'
        }
      }
    },
    [\`&\${componentCls}-navigation\${componentCls}-horizontal\`]: {
      [\`> \${componentCls}-item > \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
        visibility: 'hidden'
      }
    }
  };
};
/* harmony default export */ var nav = (genStepsNavStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/progress.js

const genStepsProgressStyle = token => {
  const {
    antCls,
    componentCls,
    iconSize,
    iconSizeSM,
    processIconColor,
    marginXXS,
    lineWidthBold,
    lineWidth,
    paddingXXS
  } = token;
  const progressSize = token.calc(iconSize).add(token.calc(lineWidthBold).mul(4).equal()).equal();
  const progressSizeSM = token.calc(iconSizeSM).add(token.calc(token.lineWidth).mul(4).equal()).equal();
  return {
    [\`&\${componentCls}-with-progress\`]: {
      [\`\${componentCls}-item\`]: {
        paddingTop: paddingXXS,
        [\`&-process \${componentCls}-item-container \${componentCls}-item-icon \${componentCls}-icon\`]: {
          color: processIconColor
        }
      },
      [\`&\${componentCls}-vertical > \${componentCls}-item \`]: {
        paddingInlineStart: paddingXXS,
        [\`> \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
          top: marginXXS,
          insetInlineStart: token.calc(iconSize).div(2).sub(lineWidth).add(paddingXXS).equal()
        }
      },
      [\`&, &\${componentCls}-small\`]: {
        [\`&\${componentCls}-horizontal \${componentCls}-item:first-child\`]: {
          paddingBottom: paddingXXS,
          paddingInlineStart: paddingXXS
        }
      },
      [\`&\${componentCls}-small\${componentCls}-vertical > \${componentCls}-item > \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
        insetInlineStart: token.calc(iconSizeSM).div(2).sub(lineWidth).add(paddingXXS).equal()
      },
      [\`&\${componentCls}-label-vertical \${componentCls}-item \${componentCls}-item-tail\`]: {
        top: token.calc(iconSize).div(2).add(paddingXXS).equal()
      },
      [\`\${componentCls}-item-icon\`]: {
        position: 'relative',
        [\`\${antCls}-progress\`]: {
          position: 'absolute',
          insetInlineStart: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          '&-inner': {
            width: \`\${(0,cssinjs_es/* unit */.bf)(progressSize)} !important\`,
            height: \`\${(0,cssinjs_es/* unit */.bf)(progressSize)} !important\`
          }
        }
      },
      // ============================== Small size ==============================
      [\`&\${componentCls}-small\`]: {
        [\`&\${componentCls}-label-vertical \${componentCls}-item \${componentCls}-item-tail\`]: {
          top: token.calc(iconSizeSM).div(2).add(paddingXXS).equal()
        },
        [\`\${componentCls}-item-icon \${antCls}-progress-inner\`]: {
          width: \`\${(0,cssinjs_es/* unit */.bf)(progressSizeSM)} !important\`,
          height: \`\${(0,cssinjs_es/* unit */.bf)(progressSizeSM)} !important\`
        }
      }
    }
  };
};
/* harmony default export */ var style_progress = (genStepsProgressStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/progress-dot.js

const genStepsProgressDotStyle = token => {
  const {
    componentCls,
    descriptionMaxWidth,
    lineHeight,
    dotCurrentSize,
    dotSize,
    motionDurationSlow
  } = token;
  return {
    [\`&\${componentCls}-dot, &\${componentCls}-dot\${componentCls}-small\`]: {
      [\`\${componentCls}-item\`]: {
        '&-title': {
          lineHeight
        },
        '&-tail': {
          // Math.floor((token.size - token.lineWidth * 3) / 2)
          top: token.calc(token.dotSize).sub(token.calc(token.lineWidth).mul(3).equal()).div(2).equal(),
          width: '100%',
          marginTop: 0,
          marginBottom: 0,
          marginInline: \`\${(0,cssinjs_es/* unit */.bf)(token.calc(descriptionMaxWidth).div(2).equal())} 0\`,
          padding: 0,
          '&::after': {
            width: \`calc(100% - \${(0,cssinjs_es/* unit */.bf)(token.calc(token.marginSM).mul(2).equal())})\`,
            height: token.calc(token.lineWidth).mul(3).equal(),
            marginInlineStart: token.marginSM
          }
        },
        '&-icon': {
          width: dotSize,
          height: dotSize,
          marginInlineStart: token.calc(token.descriptionMaxWidth).sub(dotSize).div(2).equal(),
          paddingInlineEnd: 0,
          lineHeight: (0,cssinjs_es/* unit */.bf)(dotSize),
          background: 'transparent',
          border: 0,
          [\`\${componentCls}-icon-dot\`]: {
            position: 'relative',
            float: 'left',
            width: '100%',
            height: '100%',
            borderRadius: 100,
            // very large number
            transition: \`all \${motionDurationSlow}\`,
            /* expand hover area */
            '&::after': {
              position: 'absolute',
              top: token.calc(token.marginSM).mul(-1).equal(),
              insetInlineStart: token.calc(dotSize).sub(token.calc(token.controlHeightLG).mul(1.5).equal()).div(2).equal(),
              width: token.calc(token.controlHeightLG).mul(1.5).equal(),
              height: token.controlHeight,
              background: 'transparent',
              content: '""'
            }
          }
        },
        '&-content': {
          width: descriptionMaxWidth
        },
        [\`&-process \${componentCls}-item-icon\`]: {
          position: 'relative',
          top: token.calc(dotSize).sub(dotCurrentSize).div(2).equal(),
          width: dotCurrentSize,
          height: dotCurrentSize,
          lineHeight: (0,cssinjs_es/* unit */.bf)(dotCurrentSize),
          background: 'none',
          marginInlineStart: token.calc(token.descriptionMaxWidth).sub(dotCurrentSize).div(2).equal()
        },
        [\`&-process \${componentCls}-icon\`]: {
          [\`&:first-child \${componentCls}-icon-dot\`]: {
            insetInlineStart: 0
          }
        }
      }
    },
    [\`&\${componentCls}-vertical\${componentCls}-dot\`]: {
      [\`\${componentCls}-item-icon\`]: {
        marginTop: token.calc(token.controlHeight).sub(dotSize).div(2).equal(),
        marginInlineStart: 0,
        background: 'none'
      },
      [\`\${componentCls}-item-process \${componentCls}-item-icon\`]: {
        marginTop: token.calc(token.controlHeight).sub(dotCurrentSize).div(2).equal(),
        top: 0,
        insetInlineStart: token.calc(dotSize).sub(dotCurrentSize).div(2).equal(),
        marginInlineStart: 0
      },
      // https://github.com/ant-design/ant-design/issues/18354
      [\`\${componentCls}-item > \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
        top: token.calc(token.controlHeight).sub(dotSize).div(2).equal(),
        insetInlineStart: 0,
        margin: 0,
        padding: \`\${(0,cssinjs_es/* unit */.bf)(token.calc(dotSize).add(token.paddingXS).equal())} 0 \${(0,cssinjs_es/* unit */.bf)(token.paddingXS)}\`,
        '&::after': {
          marginInlineStart: token.calc(dotSize).sub(token.lineWidth).div(2).equal()
        }
      },
      [\`&\${componentCls}-small\`]: {
        [\`\${componentCls}-item-icon\`]: {
          marginTop: token.calc(token.controlHeightSM).sub(dotSize).div(2).equal()
        },
        [\`\${componentCls}-item-process \${componentCls}-item-icon\`]: {
          marginTop: token.calc(token.controlHeightSM).sub(dotCurrentSize).div(2).equal()
        },
        [\`\${componentCls}-item > \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
          top: token.calc(token.controlHeightSM).sub(dotSize).div(2).equal()
        }
      },
      [\`\${componentCls}-item:first-child \${componentCls}-icon-dot\`]: {
        insetInlineStart: 0
      },
      [\`\${componentCls}-item-content\`]: {
        width: 'inherit'
      }
    }
  };
};
/* harmony default export */ var progress_dot = (genStepsProgressDotStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/rtl.js
const genStepsRTLStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [\`&\${componentCls}-rtl\`]: {
      direction: 'rtl',
      [\`\${componentCls}-item\`]: {
        '&-subtitle': {
          float: 'left'
        }
      },
      // nav
      [\`&\${componentCls}-navigation\`]: {
        [\`\${componentCls}-item::after\`]: {
          transform: 'rotate(-45deg)'
        }
      },
      // vertical
      [\`&\${componentCls}-vertical\`]: {
        [\`> \${componentCls}-item\`]: {
          '&::after': {
            transform: 'rotate(225deg)'
          },
          [\`\${componentCls}-item-icon\`]: {
            float: 'right'
          }
        }
      },
      // progress-dot
      [\`&\${componentCls}-dot\`]: {
        [\`\${componentCls}-item-icon \${componentCls}-icon-dot, &\${componentCls}-small \${componentCls}-item-icon \${componentCls}-icon-dot\`]: {
          float: 'right'
        }
      }
    }
  };
};
/* harmony default export */ var rtl = (genStepsRTLStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/small.js

const genStepsSmallStyle = token => {
  const {
    componentCls,
    iconSizeSM,
    // stepsSmallIconMargin,
    fontSizeSM,
    fontSize,
    colorTextDescription
  } = token;
  return {
    [\`&\${componentCls}-small\`]: {
      [\`&\${componentCls}-horizontal:not(\${componentCls}-label-vertical) \${componentCls}-item\`]: {
        paddingInlineStart: token.paddingSM,
        '&:first-child': {
          paddingInlineStart: 0
        }
      },
      [\`\${componentCls}-item-icon\`]: {
        width: iconSizeSM,
        height: iconSizeSM,
        // margin: stepsSmallIconMargin,
        marginTop: 0,
        marginBottom: 0,
        marginInline: \`0 \${(0,cssinjs_es/* unit */.bf)(token.marginXS)}\`,
        fontSize: fontSizeSM,
        lineHeight: (0,cssinjs_es/* unit */.bf)(iconSizeSM),
        textAlign: 'center',
        borderRadius: iconSizeSM
      },
      [\`\${componentCls}-item-title\`]: {
        paddingInlineEnd: token.paddingSM,
        fontSize,
        lineHeight: (0,cssinjs_es/* unit */.bf)(iconSizeSM),
        '&::after': {
          top: token.calc(iconSizeSM).div(2).equal()
        }
      },
      [\`\${componentCls}-item-description\`]: {
        color: colorTextDescription,
        fontSize
      },
      [\`\${componentCls}-item-tail\`]: {
        top: token.calc(iconSizeSM).div(2).sub(token.paddingXXS).equal()
      },
      [\`\${componentCls}-item-custom \${componentCls}-item-icon\`]: {
        width: 'inherit',
        height: 'inherit',
        lineHeight: 'inherit',
        background: 'none',
        border: 0,
        borderRadius: 0,
        [\`> \${componentCls}-icon\`]: {
          fontSize: iconSizeSM,
          lineHeight: (0,cssinjs_es/* unit */.bf)(iconSizeSM),
          transform: 'none'
        }
      }
    }
  };
};
/* harmony default export */ var small = (genStepsSmallStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/vertical.js

const genStepsVerticalStyle = token => {
  const {
    componentCls,
    iconSizeSM,
    iconSize
  } = token;
  return {
    [\`&\${componentCls}-vertical\`]: {
      display: 'flex',
      flexDirection: 'column',
      [\`> \${componentCls}-item\`]: {
        display: 'block',
        flex: '1 0 auto',
        paddingInlineStart: 0,
        overflow: 'visible',
        [\`\${componentCls}-item-icon\`]: {
          float: 'left',
          marginInlineEnd: token.margin
        },
        [\`\${componentCls}-item-content\`]: {
          display: 'block',
          minHeight: token.calc(token.controlHeight).mul(1.5).equal(),
          overflow: 'hidden'
        },
        [\`\${componentCls}-item-title\`]: {
          lineHeight: (0,cssinjs_es/* unit */.bf)(iconSize)
        },
        [\`\${componentCls}-item-description\`]: {
          paddingBottom: token.paddingSM
        }
      },
      [\`> \${componentCls}-item > \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
        position: 'absolute',
        top: 0,
        insetInlineStart: token.calc(iconSize).div(2).sub(token.lineWidth).equal(),
        width: token.lineWidth,
        height: '100%',
        padding: \`\${(0,cssinjs_es/* unit */.bf)(token.calc(token.marginXXS).mul(1.5).add(iconSize).equal())} 0 \${(0,cssinjs_es/* unit */.bf)(token.calc(token.marginXXS).mul(1.5).equal())}\`,
        '&::after': {
          width: token.lineWidth,
          height: '100%'
        }
      },
      [\`> \${componentCls}-item:not(:last-child) > \${componentCls}-item-container > \${componentCls}-item-tail\`]: {
        display: 'block'
      },
      [\` > \${componentCls}-item > \${componentCls}-item-container > \${componentCls}-item-content > \${componentCls}-item-title\`]: {
        '&::after': {
          display: 'none'
        }
      },
      [\`&\${componentCls}-small \${componentCls}-item-container\`]: {
        [\`\${componentCls}-item-tail\`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: token.calc(iconSizeSM).div(2).sub(token.lineWidth).equal(),
          padding: \`\${(0,cssinjs_es/* unit */.bf)(token.calc(token.marginXXS).mul(1.5).add(iconSizeSM).equal())} 0 \${(0,cssinjs_es/* unit */.bf)(token.calc(token.marginXXS).mul(1.5).equal())}\`
        },
        [\`\${componentCls}-item-title\`]: {
          lineHeight: (0,cssinjs_es/* unit */.bf)(iconSizeSM)
        }
      }
    }
  };
};
/* harmony default export */ var vertical = (genStepsVerticalStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/index.js













const STEP_ITEM_STATUS_WAIT = 'wait';
const STEP_ITEM_STATUS_PROCESS = 'process';
const STEP_ITEM_STATUS_FINISH = 'finish';
const STEP_ITEM_STATUS_ERROR = 'error';
const genStepsItemStatusStyle = (status, token) => {
  const prefix = \`\${token.componentCls}-item\`;
  const iconColorKey = \`\${status}IconColor\`;
  const titleColorKey = \`\${status}TitleColor\`;
  const descriptionColorKey = \`\${status}DescriptionColor\`;
  const tailColorKey = \`\${status}TailColor\`;
  const iconBgColorKey = \`\${status}IconBgColor\`;
  const iconBorderColorKey = \`\${status}IconBorderColor\`;
  const dotColorKey = \`\${status}DotColor\`;
  return {
    [\`\${prefix}-\${status} \${prefix}-icon\`]: {
      backgroundColor: token[iconBgColorKey],
      borderColor: token[iconBorderColorKey],
      [\`> \${token.componentCls}-icon\`]: {
        color: token[iconColorKey],
        [\`\${token.componentCls}-icon-dot\`]: {
          background: token[dotColorKey]
        }
      }
    },
    [\`\${prefix}-\${status}\${prefix}-custom \${prefix}-icon\`]: {
      [\`> \${token.componentCls}-icon\`]: {
        color: token[dotColorKey]
      }
    },
    [\`\${prefix}-\${status} > \${prefix}-container > \${prefix}-content > \${prefix}-title\`]: {
      color: token[titleColorKey],
      '&::after': {
        backgroundColor: token[tailColorKey]
      }
    },
    [\`\${prefix}-\${status} > \${prefix}-container > \${prefix}-content > \${prefix}-description\`]: {
      color: token[descriptionColorKey]
    },
    [\`\${prefix}-\${status} > \${prefix}-container > \${prefix}-tail::after\`]: {
      backgroundColor: token[tailColorKey]
    }
  };
};
const genStepsItemStyle = token => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  const stepsItemCls = \`\${componentCls}-item\`; // .ant-steps-item
  const stepItemIconCls = \`\${stepsItemCls}-icon\`;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [stepsItemCls]: {
      position: 'relative',
      display: 'inline-block',
      flex: 1,
      overflow: 'hidden',
      verticalAlign: 'top',
      '&:last-child': {
        flex: 'none',
        [\`> \${stepsItemCls}-container > \${stepsItemCls}-tail, > \${stepsItemCls}-container >  \${stepsItemCls}-content > \${stepsItemCls}-title::after\`]: {
          display: 'none'
        }
      }
    },
    [\`\${stepsItemCls}-container\`]: {
      outline: 'none',
      '&:focus-visible': {
        [stepItemIconCls]: Object.assign({}, (0,style/* genFocusOutline */.oN)(token))
      }
    },
    [\`\${stepItemIconCls}, \${stepsItemCls}-content\`]: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    [stepItemIconCls]: {
      width: token.iconSize,
      height: token.iconSize,
      marginTop: 0,
      marginBottom: 0,
      marginInlineStart: 0,
      marginInlineEnd: token.marginXS,
      fontSize: token.iconFontSize,
      fontFamily: token.fontFamily,
      lineHeight: (0,cssinjs_es/* unit */.bf)(token.iconSize),
      textAlign: 'center',
      borderRadius: token.iconSize,
      border: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} transparent\`,
      transition: \`background-color \${motionDurationSlow}, border-color \${motionDurationSlow}\`,
      [\`\${componentCls}-icon\`]: {
        position: 'relative',
        top: token.iconTop,
        color: token.colorPrimary,
        lineHeight: 1
      }
    },
    [\`\${stepsItemCls}-tail\`]: {
      position: 'absolute',
      top: token.calc(token.iconSize).div(2).equal(),
      insetInlineStart: 0,
      width: '100%',
      '&::after': {
        display: 'inline-block',
        width: '100%',
        height: token.lineWidth,
        background: token.colorSplit,
        borderRadius: token.lineWidth,
        transition: \`background \${motionDurationSlow}\`,
        content: '""'
      }
    },
    [\`\${stepsItemCls}-title\`]: {
      position: 'relative',
      display: 'inline-block',
      paddingInlineEnd: token.padding,
      color: token.colorText,
      fontSize: token.fontSizeLG,
      lineHeight: (0,cssinjs_es/* unit */.bf)(token.titleLineHeight),
      '&::after': {
        position: 'absolute',
        top: token.calc(token.titleLineHeight).div(2).equal(),
        insetInlineStart: '100%',
        display: 'block',
        width: 9999,
        height: token.lineWidth,
        background: token.processTailColor,
        content: '""'
      }
    },
    [\`\${stepsItemCls}-subtitle\`]: {
      display: 'inline',
      marginInlineStart: token.marginXS,
      color: token.colorTextDescription,
      fontWeight: 'normal',
      fontSize: token.fontSize
    },
    [\`\${stepsItemCls}-description\`]: {
      color: token.colorTextDescription,
      fontSize: token.fontSize
    }
  }, genStepsItemStatusStyle(STEP_ITEM_STATUS_WAIT, token)), genStepsItemStatusStyle(STEP_ITEM_STATUS_PROCESS, token)), {
    [\`\${stepsItemCls}-process > \${stepsItemCls}-container > \${stepsItemCls}-title\`]: {
      fontWeight: token.fontWeightStrong
    }
  }), genStepsItemStatusStyle(STEP_ITEM_STATUS_FINISH, token)), genStepsItemStatusStyle(STEP_ITEM_STATUS_ERROR, token)), {
    [\`\${stepsItemCls}\${componentCls}-next-error > \${componentCls}-item-title::after\`]: {
      background: token.colorError
    },
    [\`\${stepsItemCls}-disabled\`]: {
      cursor: 'not-allowed'
    }
  });
};
// ============================= Clickable ===========================
const genStepsClickableStyle = token => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return {
    [\`& \${componentCls}-item\`]: {
      [\`&:not(\${componentCls}-item-active)\`]: {
        [\`& > \${componentCls}-item-container[role='button']\`]: {
          cursor: 'pointer',
          [\`\${componentCls}-item\`]: {
            [\`&-title, &-subtitle, &-description, &-icon \${componentCls}-icon\`]: {
              transition: \`color \${motionDurationSlow}\`
            }
          },
          '&:hover': {
            [\`\${componentCls}-item\`]: {
              '&-title, &-subtitle, &-description': {
                color: token.colorPrimary
              }
            }
          }
        },
        [\`&:not(\${componentCls}-item-process)\`]: {
          [\`& > \${componentCls}-item-container[role='button']:hover\`]: {
            [\`\${componentCls}-item\`]: {
              '&-icon': {
                borderColor: token.colorPrimary,
                [\`\${componentCls}-icon\`]: {
                  color: token.colorPrimary
                }
              }
            }
          }
        }
      }
    },
    [\`&\${componentCls}-horizontal:not(\${componentCls}-label-vertical)\`]: {
      [\`\${componentCls}-item\`]: {
        paddingInlineStart: token.padding,
        whiteSpace: 'nowrap',
        '&:first-child': {
          paddingInlineStart: 0
        },
        [\`&:last-child \${componentCls}-item-title\`]: {
          paddingInlineEnd: 0
        },
        '&-tail': {
          display: 'none'
        },
        '&-description': {
          maxWidth: token.descriptionMaxWidth,
          whiteSpace: 'normal'
        }
      }
    }
  };
};
const genStepsStyle = token => {
  const {
    componentCls
  } = token; // .ant-steps
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'flex',
      width: '100%',
      fontSize: 0,
      textAlign: 'initial'
    }), genStepsItemStyle(token)), genStepsClickableStyle(token)), custom_icon(token)), small(token)), vertical(token)), horizontal(token)), label_placement(token)), progress_dot(token)), nav(token)), rtl(token)), style_progress(token)), inline(token))
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => ({
  titleLineHeight: token.controlHeight,
  customIconSize: token.controlHeight,
  customIconTop: 0,
  customIconFontSize: token.controlHeightSM,
  iconSize: token.controlHeight,
  iconTop: -0.5,
  // magic for ui experience
  iconFontSize: token.fontSize,
  iconSizeSM: token.fontSizeHeading3,
  dotSize: token.controlHeight / 4,
  dotCurrentSize: token.controlHeightLG / 4,
  navArrowColor: token.colorTextDisabled,
  navContentMaxWidth: 'auto',
  descriptionMaxWidth: 140,
  waitIconColor: token.wireframe ? token.colorTextDisabled : token.colorTextLabel,
  waitIconBgColor: token.wireframe ? token.colorBgContainer : token.colorFillContent,
  waitIconBorderColor: token.wireframe ? token.colorTextDisabled : 'transparent',
  finishIconBgColor: token.wireframe ? token.colorBgContainer : token.controlItemBgActive,
  finishIconBorderColor: token.wireframe ? token.colorPrimary : token.controlItemBgActive
});
/* harmony default export */ var steps_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Steps', token => {
  const {
    colorTextDisabled,
    controlHeightLG,
    colorTextLightSolid,
    colorText,
    colorPrimary,
    colorTextDescription,
    colorTextQuaternary,
    colorError,
    colorBorderSecondary,
    colorSplit
  } = token;
  const stepsToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    // Steps component less variable
    processIconColor: colorTextLightSolid,
    processTitleColor: colorText,
    processDescriptionColor: colorText,
    processIconBgColor: colorPrimary,
    processIconBorderColor: colorPrimary,
    processDotColor: colorPrimary,
    processTailColor: colorSplit,
    waitTitleColor: colorTextDescription,
    waitDescriptionColor: colorTextDescription,
    waitTailColor: colorSplit,
    waitDotColor: colorTextDisabled,
    finishIconColor: colorPrimary,
    finishTitleColor: colorText,
    finishDescriptionColor: colorTextDescription,
    finishTailColor: colorPrimary,
    finishDotColor: colorPrimary,
    errorIconColor: colorTextLightSolid,
    errorTitleColor: colorError,
    errorDescriptionColor: colorError,
    errorTailColor: colorSplit,
    errorIconBgColor: colorError,
    errorIconBorderColor: colorError,
    errorDotColor: colorError,
    stepsNavActiveColor: colorPrimary,
    stepsProgressSize: controlHeightLG,
    // Steps inline variable
    inlineDotSize: 6,
    inlineTitleColor: colorTextQuaternary,
    inlineTailColor: colorBorderSecondary
  });
  return [genStepsStyle(stepsToken)];
}, prepareComponentToken));
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/useLegacyItems.js



function filter(items) {
  return items.filter(item => item);
}
function useLegacyItems(items, children) {
  if (false) {}
  if (items) {
    return items;
  }
  const childrenItems = (0,toArray/* default */.Z)(children).map(node => {
    if (/*#__PURE__*/react.isValidElement(node)) {
      const {
        props
      } = node;
      const item = Object.assign({}, props);
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












const steps_Steps = props => {
  const {
      percent,
      size: customizeSize,
      className,
      rootClassName,
      direction,
      items,
      responsive = true,
      current = 0,
      children,
      style
    } = props,
    restProps = __rest(props, ["percent", "size", "className", "rootClassName", "direction", "items", "responsive", "current", "children", "style"]);
  const {
    xs
  } = (0,useBreakpoint/* default */.Z)(responsive);
  const {
    getPrefixCls,
    direction: rtlDirection,
    steps
  } = react.useContext(context/* ConfigContext */.E_);
  const realDirectionValue = react.useMemo(() => responsive && xs ? 'vertical' : direction, [xs, direction]);
  const size = (0,useSize/* default */.Z)(customizeSize);
  const prefixCls = getPrefixCls('steps', props.prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = steps_style(prefixCls);
  const isInline = props.type === 'inline';
  const iconPrefix = getPrefixCls('', props.iconPrefix);
  const mergedItems = useLegacyItems(items, children);
  const mergedPercent = isInline ? undefined : percent;
  const mergedStyle = Object.assign(Object.assign({}, steps === null || steps === void 0 ? void 0 : steps.style), style);
  const stepsClassName = classnames_default()(steps === null || steps === void 0 ? void 0 : steps.className, {
    [\`\${prefixCls}-rtl\`]: rtlDirection === 'rtl',
    [\`\${prefixCls}-with-progress\`]: mergedPercent !== undefined
  }, className, rootClassName, hashId, cssVarCls);
  const icons = {
    finish: /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, {
      className: \`\${prefixCls}-finish-icon\`
    }),
    error: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
      className: \`\${prefixCls}-error-icon\`
    })
  };
  const stepIconRender = _ref => {
    let {
      node,
      status
    } = _ref;
    if (status === 'process' && mergedPercent !== undefined) {
      // currently it's hard-coded, since we can't easily read the actually width of icon
      const progressWidth = size === 'small' ? 32 : 40;
      // iconWithProgress
      return /*#__PURE__*/react.createElement("div", {
        className: \`\${prefixCls}-progress-icon\`
      }, /*#__PURE__*/react.createElement(progress/* default */.Z, {
        type: "circle",
        percent: mergedPercent,
        size: progressWidth,
        strokeWidth: 4,
        format: () => null
      }), node);
    }
    return node;
  };
  const itemRender = (item, stepItem) => item.description ? /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
    title: item.description
  }, stepItem) : stepItem;
  return wrapCSSVar(/*#__PURE__*/react.createElement(es, Object.assign({
    icons: icons
  }, restProps, {
    style: mergedStyle,
    current: current,
    size: size,
    items: mergedItems,
    itemRender: isInline ? itemRender : undefined,
    stepIcon: stepIconRender,
    direction: realDirectionValue,
    prefixCls: prefixCls,
    iconPrefix: iconPrefix,
    className: stepsClassName
  })));
};
steps_Steps.Step = es.Step;
if (false) {}
/* harmony default export */ var steps = (steps_Steps);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUNBQWlDLG1CQUFtQixDQUFDLEVBQU87QUFDNUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxXQUFLLFFBQVEsT0FBWTtBQUN6QixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCwwQ0FBZSxXQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXN0ZXBzL2VzL1N0ZXAuanM/YjU1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc3RlcHMvZXMvU3RlcHMuanM/YjM1NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc3RlcHMvZXMvaW5kZXguanM/ODE2MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdGVwcy9zdHlsZS9jdXN0b20taWNvbi5qcz9jNTVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3N0eWxlL2hvcml6b250YWwuanM/NzkxMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdGVwcy9zdHlsZS9pbmxpbmUuanM/Y2YxNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdGVwcy9zdHlsZS9sYWJlbC1wbGFjZW1lbnQuanM/YjQ3YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdGVwcy9zdHlsZS9uYXYuanM/NzVjZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdGVwcy9zdHlsZS9wcm9ncmVzcy5qcz9hZWMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3N0eWxlL3Byb2dyZXNzLWRvdC5qcz9lN2RmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3N0eWxlL3J0bC5qcz9jNmI2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3N0eWxlL3NtYWxsLmpzP2EzNmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3RlcHMvc3R5bGUvdmVydGljYWwuanM/YmYwNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdGVwcy9zdHlsZS9pbmRleC5qcz81OTRiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3VzZUxlZ2FjeUl0ZW1zLmpzPzAyOGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3RlcHMvaW5kZXguanM/Mjc1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJwcmVmaXhDbHNcIiwgXCJzdHlsZVwiLCBcImFjdGl2ZVwiLCBcInN0YXR1c1wiLCBcImljb25QcmVmaXhcIiwgXCJpY29uXCIsIFwid3JhcHBlclN0eWxlXCIsIFwic3RlcE51bWJlclwiLCBcImRpc2FibGVkXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJ0aXRsZVwiLCBcInN1YlRpdGxlXCIsIFwicHJvZ3Jlc3NEb3RcIiwgXCJzdGVwSWNvblwiLCBcInRhaWxDb250ZW50XCIsIFwiaWNvbnNcIiwgXCJzdGVwSW5kZXhcIiwgXCJvblN0ZXBDbGlja1wiLCBcIm9uQ2xpY2tcIiwgXCJyZW5kZXJcIl07XG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gU3RlcChwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXMyO1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICBzdGF0dXMgPSBwcm9wcy5zdGF0dXMsXG4gICAgaWNvblByZWZpeCA9IHByb3BzLmljb25QcmVmaXgsXG4gICAgaWNvbiA9IHByb3BzLmljb24sXG4gICAgd3JhcHBlclN0eWxlID0gcHJvcHMud3JhcHBlclN0eWxlLFxuICAgIHN0ZXBOdW1iZXIgPSBwcm9wcy5zdGVwTnVtYmVyLFxuICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgIHN1YlRpdGxlID0gcHJvcHMuc3ViVGl0bGUsXG4gICAgcHJvZ3Jlc3NEb3QgPSBwcm9wcy5wcm9ncmVzc0RvdCxcbiAgICBzdGVwSWNvbiA9IHByb3BzLnN0ZXBJY29uLFxuICAgIHRhaWxDb250ZW50ID0gcHJvcHMudGFpbENvbnRlbnQsXG4gICAgaWNvbnMgPSBwcm9wcy5pY29ucyxcbiAgICBzdGVwSW5kZXggPSBwcm9wcy5zdGVwSW5kZXgsXG4gICAgb25TdGVwQ2xpY2sgPSBwcm9wcy5vblN0ZXBDbGljayxcbiAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICByZW5kZXIgPSBwcm9wcy5yZW5kZXIsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gQ2xpY2sgPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGNsaWNrYWJsZSA9ICEhb25TdGVwQ2xpY2sgJiYgIWRpc2FibGVkO1xuICB2YXIgYWNjZXNzaWJpbGl0eVByb3BzID0ge307XG4gIGlmIChjbGlja2FibGUpIHtcbiAgICBhY2Nlc3NpYmlsaXR5UHJvcHMucm9sZSA9ICdidXR0b24nO1xuICAgIGFjY2Vzc2liaWxpdHlQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgYWNjZXNzaWJpbGl0eVByb3BzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgb25DbGljayA9PT0gbnVsbCB8fCBvbkNsaWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNsaWNrKGUpO1xuICAgICAgb25TdGVwQ2xpY2soc3RlcEluZGV4KTtcbiAgICB9O1xuICAgIGFjY2Vzc2liaWxpdHlQcm9wcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHdoaWNoID0gZS53aGljaDtcbiAgICAgIGlmICh3aGljaCA9PT0gS2V5Q29kZS5FTlRFUiB8fCB3aGljaCA9PT0gS2V5Q29kZS5TUEFDRSkge1xuICAgICAgICBvblN0ZXBDbGljayhzdGVwSW5kZXgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciByZW5kZXJJY29uTm9kZSA9IGZ1bmN0aW9uIHJlbmRlckljb25Ob2RlKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcbiAgICB2YXIgaWNvbk5vZGU7XG4gICAgdmFyIGljb25DbGFzc05hbWUgPSBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKSwgXCJcIi5jb25jYXQoaWNvblByZWZpeCwgXCJpY29uXCIpLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChpY29uUHJlZml4LCBcImljb24tXCIpLmNvbmNhdChpY29uKSwgaWNvbiAmJiBpc1N0cmluZyhpY29uKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoaWNvblByZWZpeCwgXCJpY29uLWNoZWNrXCIpLCAhaWNvbiAmJiBzdGF0dXMgPT09ICdmaW5pc2gnICYmIChpY29ucyAmJiAhaWNvbnMuZmluaXNoIHx8ICFpY29ucykpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGljb25QcmVmaXgsIFwiaWNvbi1jcm9zc1wiKSwgIWljb24gJiYgc3RhdHVzID09PSAnZXJyb3InICYmIChpY29ucyAmJiAhaWNvbnMuZXJyb3IgfHwgIWljb25zKSksIF9jbGFzc05hbWVzKSk7XG4gICAgdmFyIGljb25Eb3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tZG90XCIpXG4gICAgfSk7XG4gICAgLy8gYHByb2dyZXNzRG90YCBlbmpveSB0aGUgaGlnaGVzdCBwcmlvcml0eVxuICAgIGlmIChwcm9ncmVzc0RvdCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9ncmVzc0RvdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICAgICAgfSwgcHJvZ3Jlc3NEb3QoaWNvbkRvdCwge1xuICAgICAgICAgIGluZGV4OiBzdGVwTnVtYmVyIC0gMSxcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgICAgICB9LCBpY29uRG90KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGljb24gJiYgIWlzU3RyaW5nKGljb24pKSB7XG4gICAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgICB9LCBpY29uKTtcbiAgICB9IGVsc2UgaWYgKGljb25zICYmIGljb25zLmZpbmlzaCAmJiBzdGF0dXMgPT09ICdmaW5pc2gnKSB7XG4gICAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgICB9LCBpY29ucy5maW5pc2gpO1xuICAgIH0gZWxzZSBpZiAoaWNvbnMgJiYgaWNvbnMuZXJyb3IgJiYgc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgICB9LCBpY29ucy5lcnJvcik7XG4gICAgfSBlbHNlIGlmIChpY29uIHx8IHN0YXR1cyA9PT0gJ2ZpbmlzaCcgfHwgc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICAgIH0sIHN0ZXBOdW1iZXIpO1xuICAgIH1cbiAgICBpZiAoc3RlcEljb24pIHtcbiAgICAgIGljb25Ob2RlID0gc3RlcEljb24oe1xuICAgICAgICBpbmRleDogc3RlcE51bWJlciAtIDEsXG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgbm9kZTogaWNvbk5vZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbk5vZGU7XG4gIH07XG4gIHZhciBtZXJnZWRTdGF0dXMgPSBzdGF0dXMgfHwgJ3dhaXQnO1xuICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbVwiKSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLVwiKS5jb25jYXQobWVyZ2VkU3RhdHVzKSwgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jdXN0b21cIiksIGljb24pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tYWN0aXZlXCIpLCBhY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tZGlzYWJsZWRcIiksIGRpc2FibGVkID09PSB0cnVlKSwgX2NsYXNzTmFtZXMyKSk7XG4gIHZhciBzdGVwSXRlbVN0eWxlID0gX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpO1xuICB2YXIgc3RlcE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICBzdHlsZTogc3RlcEl0ZW1TdHlsZVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgfSwgYWNjZXNzaWJpbGl0eVByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udGFpbmVyXCIpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tdGFpbFwiKVxuICB9LCB0YWlsQ29udGVudCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1pY29uXCIpXG4gIH0sIHJlbmRlckljb25Ob2RlKCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udGVudFwiKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tdGl0bGVcIilcbiAgfSwgdGl0bGUsIHN1YlRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICB0aXRsZTogdHlwZW9mIHN1YlRpdGxlID09PSAnc3RyaW5nJyA/IHN1YlRpdGxlIDogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLXN1YnRpdGxlXCIpXG4gIH0sIHN1YlRpdGxlKSksIGRlc2NyaXB0aW9uICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1kZXNjcmlwdGlvblwiKVxuICB9LCBkZXNjcmlwdGlvbikpKSk7XG4gIGlmIChyZW5kZXIpIHtcbiAgICBzdGVwTm9kZSA9IHJlbmRlcihzdGVwTm9kZSkgfHwgbnVsbDtcbiAgfVxuICByZXR1cm4gc3RlcE5vZGU7XG59XG5leHBvcnQgZGVmYXVsdCBTdGVwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcInByZWZpeENsc1wiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJkaXJlY3Rpb25cIiwgXCJ0eXBlXCIsIFwibGFiZWxQbGFjZW1lbnRcIiwgXCJpY29uUHJlZml4XCIsIFwic3RhdHVzXCIsIFwic2l6ZVwiLCBcImN1cnJlbnRcIiwgXCJwcm9ncmVzc0RvdFwiLCBcInN0ZXBJY29uXCIsIFwiaW5pdGlhbFwiLCBcImljb25zXCIsIFwib25DaGFuZ2VcIiwgXCJpdGVtUmVuZGVyXCIsIFwiaXRlbXNcIl07XG4vKiBlc2xpbnQgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZTogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vU3RlcFwiO1xuZnVuY3Rpb24gU3RlcHMocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtc3RlcHMnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICBfcHJvcHMkc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICBzdHlsZSA9IF9wcm9wcyRzdHlsZSA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkc3R5bGUsXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgX3Byb3BzJGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICBkaXJlY3Rpb24gPSBfcHJvcHMkZGlyZWN0aW9uID09PSB2b2lkIDAgPyAnaG9yaXpvbnRhbCcgOiBfcHJvcHMkZGlyZWN0aW9uLFxuICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyR0eXBlLFxuICAgIF9wcm9wcyRsYWJlbFBsYWNlbWVudCA9IHByb3BzLmxhYmVsUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50ID0gX3Byb3BzJGxhYmVsUGxhY2VtZW50ID09PSB2b2lkIDAgPyAnaG9yaXpvbnRhbCcgOiBfcHJvcHMkbGFiZWxQbGFjZW1lbnQsXG4gICAgX3Byb3BzJGljb25QcmVmaXggPSBwcm9wcy5pY29uUHJlZml4LFxuICAgIGljb25QcmVmaXggPSBfcHJvcHMkaWNvblByZWZpeCA9PT0gdm9pZCAwID8gJ3JjJyA6IF9wcm9wcyRpY29uUHJlZml4LFxuICAgIF9wcm9wcyRzdGF0dXMgPSBwcm9wcy5zdGF0dXMsXG4gICAgc3RhdHVzID0gX3Byb3BzJHN0YXR1cyA9PT0gdm9pZCAwID8gJ3Byb2Nlc3MnIDogX3Byb3BzJHN0YXR1cyxcbiAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICBfcHJvcHMkY3VycmVudCA9IHByb3BzLmN1cnJlbnQsXG4gICAgY3VycmVudCA9IF9wcm9wcyRjdXJyZW50ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGN1cnJlbnQsXG4gICAgX3Byb3BzJHByb2dyZXNzRG90ID0gcHJvcHMucHJvZ3Jlc3NEb3QsXG4gICAgcHJvZ3Jlc3NEb3QgPSBfcHJvcHMkcHJvZ3Jlc3NEb3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHByb2dyZXNzRG90LFxuICAgIHN0ZXBJY29uID0gcHJvcHMuc3RlcEljb24sXG4gICAgX3Byb3BzJGluaXRpYWwgPSBwcm9wcy5pbml0aWFsLFxuICAgIGluaXRpYWwgPSBfcHJvcHMkaW5pdGlhbCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRpbml0aWFsLFxuICAgIGljb25zID0gcHJvcHMuaWNvbnMsXG4gICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICBpdGVtUmVuZGVyID0gcHJvcHMuaXRlbVJlbmRlcixcbiAgICBfcHJvcHMkaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICBpdGVtcyA9IF9wcm9wcyRpdGVtcyA9PT0gdm9pZCAwID8gW10gOiBfcHJvcHMkaXRlbXMsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuICB2YXIgaXNOYXYgPSB0eXBlID09PSAnbmF2aWdhdGlvbic7XG4gIHZhciBpc0lubGluZSA9IHR5cGUgPT09ICdpbmxpbmUnO1xuXG4gIC8vIGlubGluZSB0eXBlIHJlcXVpcmVzIGZpeGVkIHByb2dyZXNzRG90IGRpcmVjdGlvbiBzaXplLlxuICB2YXIgbWVyZ2VkUHJvZ3Jlc3NEb3QgPSBpc0lubGluZSB8fCBwcm9ncmVzc0RvdDtcbiAgdmFyIG1lcmdlZERpcmVjdGlvbiA9IGlzSW5saW5lID8gJ2hvcml6b250YWwnIDogZGlyZWN0aW9uO1xuICB2YXIgbWVyZ2VkU2l6ZSA9IGlzSW5saW5lID8gdW5kZWZpbmVkIDogc2l6ZTtcbiAgdmFyIGFkanVzdGVkTGFiZWxQbGFjZW1lbnQgPSBtZXJnZWRQcm9ncmVzc0RvdCA/ICd2ZXJ0aWNhbCcgOiBsYWJlbFBsYWNlbWVudDtcbiAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChtZXJnZWREaXJlY3Rpb24pLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChtZXJnZWRTaXplKSwgbWVyZ2VkU2l6ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sYWJlbC1cIikuY29uY2F0KGFkanVzdGVkTGFiZWxQbGFjZW1lbnQpLCBtZXJnZWREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3RcIiksICEhbWVyZ2VkUHJvZ3Jlc3NEb3QpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2aWdhdGlvblwiKSwgaXNOYXYpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5saW5lXCIpLCBpc0lubGluZSksIF9jbGFzc05hbWVzKSk7XG4gIHZhciBvblN0ZXBDbGljayA9IGZ1bmN0aW9uIG9uU3RlcENsaWNrKG5leHQpIHtcbiAgICBpZiAob25DaGFuZ2UgJiYgY3VycmVudCAhPT0gbmV4dCkge1xuICAgICAgb25DaGFuZ2UobmV4dCk7XG4gICAgfVxuICB9O1xuICB2YXIgcmVuZGVyU3RlcCA9IGZ1bmN0aW9uIHJlbmRlclN0ZXAoaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgbWVyZ2VkSXRlbSA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pO1xuICAgIHZhciBzdGVwTnVtYmVyID0gaW5pdGlhbCArIGluZGV4O1xuICAgIC8vIGZpeCB0YWlsIGNvbG9yXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBpbmRleCA9PT0gY3VycmVudCAtIDEpIHtcbiAgICAgIG1lcmdlZEl0ZW0uY2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uZXh0LWVycm9yXCIpO1xuICAgIH1cbiAgICBpZiAoIW1lcmdlZEl0ZW0uc3RhdHVzKSB7XG4gICAgICBpZiAoc3RlcE51bWJlciA9PT0gY3VycmVudCkge1xuICAgICAgICBtZXJnZWRJdGVtLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgIH0gZWxzZSBpZiAoc3RlcE51bWJlciA8IGN1cnJlbnQpIHtcbiAgICAgICAgbWVyZ2VkSXRlbS5zdGF0dXMgPSAnZmluaXNoJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEl0ZW0uc3RhdHVzID0gJ3dhaXQnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNJbmxpbmUpIHtcbiAgICAgIG1lcmdlZEl0ZW0uaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIG1lcmdlZEl0ZW0uc3ViVGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghbWVyZ2VkSXRlbS5yZW5kZXIgJiYgaXRlbVJlbmRlcikge1xuICAgICAgbWVyZ2VkSXRlbS5yZW5kZXIgPSBmdW5jdGlvbiAoc3RlcEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1SZW5kZXIobWVyZ2VkSXRlbSwgc3RlcEl0ZW0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0ZXAsIF9leHRlbmRzKHt9LCBtZXJnZWRJdGVtLCB7XG4gICAgICBhY3RpdmU6IHN0ZXBOdW1iZXIgPT09IGN1cnJlbnQsXG4gICAgICBzdGVwTnVtYmVyOiBzdGVwTnVtYmVyICsgMSxcbiAgICAgIHN0ZXBJbmRleDogc3RlcE51bWJlcixcbiAgICAgIGtleTogc3RlcE51bWJlcixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaWNvblByZWZpeDogaWNvblByZWZpeCxcbiAgICAgIHdyYXBwZXJTdHlsZTogc3R5bGUsXG4gICAgICBwcm9ncmVzc0RvdDogbWVyZ2VkUHJvZ3Jlc3NEb3QsXG4gICAgICBzdGVwSWNvbjogc3RlcEljb24sXG4gICAgICBpY29uczogaWNvbnMsXG4gICAgICBvblN0ZXBDbGljazogb25DaGFuZ2UgJiYgb25TdGVwQ2xpY2tcbiAgICB9KSk7XG4gIH07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgcmVzdFByb3BzKSwgaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pLm1hcChyZW5kZXJTdGVwKSk7XG59XG5TdGVwcy5TdGVwID0gU3RlcDtcbmV4cG9ydCBkZWZhdWx0IFN0ZXBzOyIsImltcG9ydCBTdGVwcyBmcm9tIFwiLi9TdGVwc1wiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vU3RlcFwiO1xuZXhwb3J0IHsgU3RlcCB9O1xuZXhwb3J0IGRlZmF1bHQgU3RlcHM7IiwiaW1wb3J0IHsgdW5pdCB9IGZyb20gJ0BhbnQtZGVzaWduL2Nzc2luanMnO1xuY29uc3QgZ2VuU3RlcHNDdXN0b21JY29uU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgY3VzdG9tSWNvblRvcCxcbiAgICBjdXN0b21JY29uU2l6ZSxcbiAgICBjdXN0b21JY29uRm9udFNpemVcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tY3VzdG9tYF06IHtcbiAgICAgIFtgPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXIgPiAke2NvbXBvbmVudENsc30taXRlbS1pY29uYF06IHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWljb25gXToge1xuICAgICAgICAgIHRvcDogY3VzdG9tSWNvblRvcCxcbiAgICAgICAgICB3aWR0aDogY3VzdG9tSWNvblNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBjdXN0b21JY29uU2l6ZSxcbiAgICAgICAgICBmb250U2l6ZTogY3VzdG9tSWNvbkZvbnRTaXplLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IHVuaXQoY3VzdG9tSWNvblNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIE9ubHkgYWRqdXN0IGhvcml6b250YWwgY3VzdG9taXplIGljb24gd2lkdGhcbiAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS12ZXJ0aWNhbClgXToge1xuICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1jdXN0b21gXToge1xuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWljb25gXToge1xuICAgICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3RlcHNDdXN0b21JY29uU3R5bGU7IiwiY29uc3QgZ2VuSG9yaXpvbnRhbFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjtcbiAgY29uc3Qgc3RlcHNJdGVtQ2xzID0gYCR7Y29tcG9uZW50Q2xzfS1pdGVtYDsgLy8gLmFudC1zdGVwcy1pdGVtXG4gIHJldHVybiB7XG4gICAgW2Ake2NvbXBvbmVudENsc30taG9yaXpvbnRhbGBdOiB7XG4gICAgICBbYCR7c3RlcHNJdGVtQ2xzfS10YWlsYF06IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuSG9yaXpvbnRhbFN0eWxlOyIsImltcG9ydCB7IHVuaXQgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmNvbnN0IGdlblN0ZXBzSW5saW5lU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgaW5saW5lRG90U2l6ZSxcbiAgICBpbmxpbmVUaXRsZUNvbG9yLFxuICAgIGlubGluZVRhaWxDb2xvclxuICB9ID0gdG9rZW47XG4gIGNvbnN0IGNvbnRhaW5lclBhZGRpbmdUb3AgPSB0b2tlbi5jYWxjKHRva2VuLnBhZGRpbmdYUykuYWRkKHRva2VuLmxpbmVXaWR0aCkuZXF1YWwoKTtcbiAgY29uc3QgdGl0bGVTdHlsZSA9IHtcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWNvbnRhaW5lciAke2NvbXBvbmVudENsc30taXRlbS1jb250ZW50ICR7Y29tcG9uZW50Q2xzfS1pdGVtLXRpdGxlYF06IHtcbiAgICAgIGNvbG9yOiBpbmxpbmVUaXRsZUNvbG9yXG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1pbmxpbmVgXToge1xuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgZmxleDogJ25vbmUnLFxuICAgICAgICAnJi1jb250YWluZXInOiB7XG4gICAgICAgICAgcGFkZGluZzogYCR7dW5pdChjb250YWluZXJQYWRkaW5nVG9wKX0gJHt1bml0KHRva2VuLnBhZGRpbmdYWFMpfSAwYCxcbiAgICAgICAgICBtYXJnaW46IGAwICR7dW5pdCh0b2tlbi5jYWxjKHRva2VuLm1hcmdpblhYUykuZGl2KDIpLmVxdWFsKCkpfWAsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNTTSxcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgYmFja2dyb3VuZC1jb2xvciAke3Rva2VuLm1vdGlvbkR1cmF0aW9uTWlkfWAsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0b2tlbi5jb250cm9sSXRlbUJnSG92ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiJltyb2xlPSdidXR0b24nXTpob3ZlclwiOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJi1pY29uJzoge1xuICAgICAgICAgIHdpZHRoOiBpbmxpbmVEb3RTaXplLFxuICAgICAgICAgIGhlaWdodDogaW5saW5lRG90U2l6ZSxcbiAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogYGNhbGMoNTAlIC0gJHt1bml0KHRva2VuLmNhbGMoaW5saW5lRG90U2l6ZSkuZGl2KDIpLmVxdWFsKCkpfSlgLFxuICAgICAgICAgIFtgPiAke2NvbXBvbmVudENsc30taWNvbmBdOiB7XG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWljb24tZG90YF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uY2FsYyh0b2tlbi5mb250U2l6ZVNNKS5kaXYoNCkuZXF1YWwoKSxcbiAgICAgICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJi1jb250ZW50Jzoge1xuICAgICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5jYWxjKHRva2VuLm1hcmdpblhTKS5zdWIodG9rZW4ubGluZVdpZHRoKS5lcXVhbCgpXG4gICAgICAgIH0sXG4gICAgICAgICcmLXRpdGxlJzoge1xuICAgICAgICAgIGNvbG9yOiBpbmxpbmVUaXRsZUNvbG9yLFxuICAgICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRTTSxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLmNhbGModG9rZW4ubWFyZ2luWFhTKS5kaXYoMikuZXF1YWwoKVxuICAgICAgICB9LFxuICAgICAgICAnJi1kZXNjcmlwdGlvbic6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYtdGFpbCc6IHtcbiAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogMCxcbiAgICAgICAgICB0b3A6IHRva2VuLmNhbGMoaW5saW5lRG90U2l6ZSkuZGl2KDIpLmFkZChjb250YWluZXJQYWRkaW5nVG9wKS5lcXVhbCgpLFxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSlgLFxuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmxpbmVUYWlsQ29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtgJjpmaXJzdC1jaGlsZCAke2NvbXBvbmVudENsc30taXRlbS10YWlsYF06IHtcbiAgICAgICAgICB3aWR0aDogJzUwJScsXG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6ICc1MCUnXG4gICAgICAgIH0sXG4gICAgICAgIFtgJjpsYXN0LWNoaWxkICR7Y29tcG9uZW50Q2xzfS1pdGVtLXRhaWxgXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgd2lkdGg6ICc1MCUnXG4gICAgICAgIH0sXG4gICAgICAgICcmLXdhaXQnOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWljb24gJHtjb21wb25lbnRDbHN9LWljb24gJHtjb21wb25lbnRDbHN9LWljb24tZG90YF06IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCb3JkZXJCZyxcbiAgICAgICAgICAgIGJvcmRlcjogYCR7dW5pdCh0b2tlbi5saW5lV2lkdGgpfSAke3Rva2VuLmxpbmVUeXBlfSAke2lubGluZVRhaWxDb2xvcn1gXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aXRsZVN0eWxlKSxcbiAgICAgICAgJyYtZmluaXNoJzogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS10YWlsOjphZnRlcmBdOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlubGluZVRhaWxDb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1pY29uICR7Y29tcG9uZW50Q2xzfS1pY29uICR7Y29tcG9uZW50Q2xzfS1pY29uLWRvdGBdOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlubGluZVRhaWxDb2xvcixcbiAgICAgICAgICAgIGJvcmRlcjogYCR7dW5pdCh0b2tlbi5saW5lV2lkdGgpfSAke3Rva2VuLmxpbmVUeXBlfSAke2lubGluZVRhaWxDb2xvcn1gXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aXRsZVN0eWxlKSxcbiAgICAgICAgJyYtZXJyb3InOiB0aXRsZVN0eWxlLFxuICAgICAgICAnJi1hY3RpdmUsICYtcHJvY2Vzcyc6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0taWNvbmBdOiB7XG4gICAgICAgICAgICB3aWR0aDogaW5saW5lRG90U2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogaW5saW5lRG90U2l6ZSxcbiAgICAgICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiBgY2FsYyg1MCUgLSAke3VuaXQodG9rZW4uY2FsYyhpbmxpbmVEb3RTaXplKS5kaXYoMikuZXF1YWwoKSl9KWAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRpdGxlU3R5bGUpLFxuICAgICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1pdGVtLWFjdGl2ZSkgPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXJbcm9sZT0nYnV0dG9uJ106aG92ZXJgXToge1xuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tdGl0bGVgXToge1xuICAgICAgICAgICAgY29sb3I6IGlubGluZVRpdGxlQ29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3RlcHNJbmxpbmVTdHlsZTsiLCJpbXBvcnQgeyB1bml0IH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5jb25zdCBnZW5TdGVwc0xhYmVsUGxhY2VtZW50U3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgaWNvblNpemUsXG4gICAgbGluZUhlaWdodCxcbiAgICBpY29uU2l6ZVNNXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCYke2NvbXBvbmVudENsc30tbGFiZWwtdmVydGljYWxgXToge1xuICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbWBdOiB7XG4gICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICAgICcmLXRhaWwnOiB7XG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IHRva2VuLmNhbGMoaWNvblNpemUpLmRpdigyKS5hZGQodG9rZW4uY29udHJvbEhlaWdodExHKS5lcXVhbCgpLFxuICAgICAgICAgIHBhZGRpbmc6IGAwICR7dW5pdCh0b2tlbi5wYWRkaW5nTEcpfWBcbiAgICAgICAgfSxcbiAgICAgICAgJyYtY29udGVudCc6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHdpZHRoOiB0b2tlbi5jYWxjKGljb25TaXplKS5kaXYoMikuYWRkKHRva2VuLmNvbnRyb2xIZWlnaHRMRykubXVsKDIpLmVxdWFsKCksXG4gICAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5TTSxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgICcmLWljb24nOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IHRva2VuLmNvbnRyb2xIZWlnaHRMR1xuICAgICAgICB9LFxuICAgICAgICAnJi10aXRsZSc6IHtcbiAgICAgICAgICBwYWRkaW5nSW5saW5lRW5kOiAwLFxuICAgICAgICAgIHBhZGRpbmdJbmxpbmVTdGFydDogMCxcbiAgICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmLXN1YnRpdGxlJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5YWFMsXG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgICAgbGluZUhlaWdodFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXNtYWxsOm5vdCgke2NvbXBvbmVudENsc30tZG90KWBdOiB7XG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW1gXToge1xuICAgICAgICAgICcmLWljb24nOiB7XG4gICAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4uY2FsYyhpY29uU2l6ZSkuc3ViKGljb25TaXplU00pLmRpdigyKS5hZGQodG9rZW4uY29udHJvbEhlaWdodExHKS5lcXVhbCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlblN0ZXBzTGFiZWxQbGFjZW1lbnRTdHlsZTsiLCJpbXBvcnQgeyB1bml0IH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5pbXBvcnQgeyB0ZXh0RWxsaXBzaXMgfSBmcm9tICcuLi8uLi9zdHlsZSc7XG5jb25zdCBnZW5TdGVwc05hdlN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIG5hdkNvbnRlbnRNYXhXaWR0aCxcbiAgICBuYXZBcnJvd0NvbG9yLFxuICAgIHN0ZXBzTmF2QWN0aXZlQ29sb3IsXG4gICAgbW90aW9uRHVyYXRpb25TbG93XG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCYke2NvbXBvbmVudENsc30tbmF2aWdhdGlvbmBdOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tc21hbGxgXToge1xuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgICAnJi1jb250YWluZXInOiB7XG4gICAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5TTSkubXVsKC0xKS5lcXVhbCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbWBdOiB7XG4gICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICcmLWNvbnRhaW5lcic6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4uY2FsYyh0b2tlbi5tYXJnaW4pLm11bCgtMSkuZXF1YWwoKSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgICAgICAgdGV4dEFsaWduOiAnc3RhcnQnLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7bW90aW9uRHVyYXRpb25TbG93fWAsXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1jb250ZW50YF06IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiBuYXZDb250ZW50TWF4V2lkdGhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tdGl0bGVgXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBwYWRkaW5nSW5saW5lRW5kOiAwXG4gICAgICAgICAgfSwgdGV4dEVsbGlwc2lzKSwge1xuICAgICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1pdGVtLWFjdGl2ZSlgXToge1xuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tY29udGFpbmVyW3JvbGU9J2J1dHRvbiddYF06IHtcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6IGBjYWxjKDUwJSAtICR7dW5pdCh0b2tlbi5jYWxjKHRva2VuLnBhZGRpbmdTTSkuZGl2KDIpLmVxdWFsKCkpfSlgLFxuICAgICAgICAgIGluc2V0SW5saW5lU3RhcnQ6ICcxMDAlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB3aWR0aDogdG9rZW4uZm9udFNpemVJY29uLFxuICAgICAgICAgIGhlaWdodDogdG9rZW4uZm9udFNpemVJY29uLFxuICAgICAgICAgIGJvcmRlclRvcDogYCR7dW5pdCh0b2tlbi5saW5lV2lkdGgpfSAke3Rva2VuLmxpbmVUeXBlfSAke25hdkFycm93Q29sb3J9YCxcbiAgICAgICAgICBib3JkZXJCb3R0b206ICdub25lJyxcbiAgICAgICAgICBib3JkZXJJbmxpbmVTdGFydDogJ25vbmUnLFxuICAgICAgICAgIGJvcmRlcklubGluZUVuZDogYCR7dW5pdCh0b2tlbi5saW5lV2lkdGgpfSAke3Rva2VuLmxpbmVUeXBlfSAke25hdkFycm93Q29sb3J9YCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKScsXG4gICAgICAgICAgY29udGVudDogJ1wiXCInXG4gICAgICAgIH0sXG4gICAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGluc2V0SW5saW5lU3RhcnQ6ICc1MCUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGhlaWdodDogdG9rZW4ubGluZVdpZHRoQm9sZCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0ZXBzTmF2QWN0aXZlQ29sb3IsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYHdpZHRoICR7bW90aW9uRHVyYXRpb25TbG93fSwgaW5zZXQtaW5saW5lLXN0YXJ0ICR7bW90aW9uRHVyYXRpb25TbG93fWAsXG4gICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1vdXQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbSR7Y29tcG9uZW50Q2xzfS1pdGVtLWFjdGl2ZTo6YmVmb3JlYF06IHtcbiAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgW2AmJHtjb21wb25lbnRDbHN9LW5hdmlnYXRpb24ke2NvbXBvbmVudENsc30tdmVydGljYWxgXToge1xuICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgbWFyZ2luSW5saW5lRW5kOiAwLFxuICAgICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBbYCYke2NvbXBvbmVudENsc30taXRlbS1hY3RpdmU6OmJlZm9yZWBdOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGluc2V0SW5saW5lRW5kOiAwLFxuICAgICAgICAgIGluc2V0SW5saW5lU3RhcnQ6ICd1bnNldCcsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB3aWR0aDogdG9rZW4uY2FsYyh0b2tlbi5saW5lV2lkdGgpLm11bCgzKS5lcXVhbCgpLFxuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7dW5pdCh0b2tlbi5tYXJnaW5MRyl9KWBcbiAgICAgICAgfSxcbiAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGluc2V0SW5saW5lU3RhcnQ6ICc1MCUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgd2lkdGg6IHRva2VuLmNhbGModG9rZW4uY29udHJvbEhlaWdodCkubXVsKDAuMjUpLmVxdWFsKCksXG4gICAgICAgICAgaGVpZ2h0OiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHQpLm11bCgwLjI1KS5lcXVhbCgpLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFMsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDEzNWRlZyknXG4gICAgICAgIH0sXG4gICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWl0ZW0tY29udGFpbmVyID4gJHtjb21wb25lbnRDbHN9LWl0ZW0tdGFpbGBdOiB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2AmJHtjb21wb25lbnRDbHN9LW5hdmlnYXRpb24ke2NvbXBvbmVudENsc30taG9yaXpvbnRhbGBdOiB7XG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWl0ZW0gPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXIgPiAke2NvbXBvbmVudENsc30taXRlbS10YWlsYF06IHtcbiAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3RlcHNOYXZTdHlsZTsiLCJpbXBvcnQgeyB1bml0IH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5jb25zdCBnZW5TdGVwc1Byb2dyZXNzU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbnRDbHMsXG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGljb25TaXplLFxuICAgIGljb25TaXplU00sXG4gICAgcHJvY2Vzc0ljb25Db2xvcixcbiAgICBtYXJnaW5YWFMsXG4gICAgbGluZVdpZHRoQm9sZCxcbiAgICBsaW5lV2lkdGgsXG4gICAgcGFkZGluZ1hYU1xuICB9ID0gdG9rZW47XG4gIGNvbnN0IHByb2dyZXNzU2l6ZSA9IHRva2VuLmNhbGMoaWNvblNpemUpLmFkZCh0b2tlbi5jYWxjKGxpbmVXaWR0aEJvbGQpLm11bCg0KS5lcXVhbCgpKS5lcXVhbCgpO1xuICBjb25zdCBwcm9ncmVzc1NpemVTTSA9IHRva2VuLmNhbGMoaWNvblNpemVTTSkuYWRkKHRva2VuLmNhbGModG9rZW4ubGluZVdpZHRoKS5tdWwoNCkuZXF1YWwoKSkuZXF1YWwoKTtcbiAgcmV0dXJuIHtcbiAgICBbYCYke2NvbXBvbmVudENsc30td2l0aC1wcm9ncmVzc2BdOiB7XG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1hYUyxcbiAgICAgICAgW2AmLXByb2Nlc3MgJHtjb21wb25lbnRDbHN9LWl0ZW0tY29udGFpbmVyICR7Y29tcG9uZW50Q2xzfS1pdGVtLWljb24gJHtjb21wb25lbnRDbHN9LWljb25gXToge1xuICAgICAgICAgIGNvbG9yOiBwcm9jZXNzSWNvbkNvbG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tdmVydGljYWwgPiAke2NvbXBvbmVudENsc30taXRlbSBgXToge1xuICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IHBhZGRpbmdYWFMsXG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXIgPiAke2NvbXBvbmVudENsc30taXRlbS10YWlsYF06IHtcbiAgICAgICAgICB0b3A6IG1hcmdpblhYUyxcbiAgICAgICAgICBpbnNldElubGluZVN0YXJ0OiB0b2tlbi5jYWxjKGljb25TaXplKS5kaXYoMikuc3ViKGxpbmVXaWR0aCkuYWRkKHBhZGRpbmdYWFMpLmVxdWFsKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJiwgJiR7Y29tcG9uZW50Q2xzfS1zbWFsbGBdOiB7XG4gICAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1ob3Jpem9udGFsICR7Y29tcG9uZW50Q2xzfS1pdGVtOmZpcnN0LWNoaWxkYF06IHtcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nWFhTLFxuICAgICAgICAgIHBhZGRpbmdJbmxpbmVTdGFydDogcGFkZGluZ1hYU1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXNtYWxsJHtjb21wb25lbnRDbHN9LXZlcnRpY2FsID4gJHtjb21wb25lbnRDbHN9LWl0ZW0gPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXIgPiAke2NvbXBvbmVudENsc30taXRlbS10YWlsYF06IHtcbiAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogdG9rZW4uY2FsYyhpY29uU2l6ZVNNKS5kaXYoMikuc3ViKGxpbmVXaWR0aCkuYWRkKHBhZGRpbmdYWFMpLmVxdWFsKClcbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tbGFiZWwtdmVydGljYWwgJHtjb21wb25lbnRDbHN9LWl0ZW0gJHtjb21wb25lbnRDbHN9LWl0ZW0tdGFpbGBdOiB7XG4gICAgICAgIHRvcDogdG9rZW4uY2FsYyhpY29uU2l6ZSkuZGl2KDIpLmFkZChwYWRkaW5nWFhTKS5lcXVhbCgpXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1pY29uYF06IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIFtgJHthbnRDbHN9LXByb2dyZXNzYF06IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBpbnNldElubGluZVN0YXJ0OiAnNTAlJyxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgJyYtaW5uZXInOiB7XG4gICAgICAgICAgICB3aWR0aDogYCR7dW5pdChwcm9ncmVzc1NpemUpfSAhaW1wb3J0YW50YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7dW5pdChwcm9ncmVzc1NpemUpfSAhaW1wb3J0YW50YFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTbWFsbCBzaXplID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXNtYWxsYF06IHtcbiAgICAgICAgW2AmJHtjb21wb25lbnRDbHN9LWxhYmVsLXZlcnRpY2FsICR7Y29tcG9uZW50Q2xzfS1pdGVtICR7Y29tcG9uZW50Q2xzfS1pdGVtLXRhaWxgXToge1xuICAgICAgICAgIHRvcDogdG9rZW4uY2FsYyhpY29uU2l6ZVNNKS5kaXYoMikuYWRkKHBhZGRpbmdYWFMpLmVxdWFsKClcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1pY29uICR7YW50Q2xzfS1wcm9ncmVzcy1pbm5lcmBdOiB7XG4gICAgICAgICAgd2lkdGg6IGAke3VuaXQocHJvZ3Jlc3NTaXplU00pfSAhaW1wb3J0YW50YCxcbiAgICAgICAgICBoZWlnaHQ6IGAke3VuaXQocHJvZ3Jlc3NTaXplU00pfSAhaW1wb3J0YW50YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlblN0ZXBzUHJvZ3Jlc3NTdHlsZTsiLCJpbXBvcnQgeyB1bml0IH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5jb25zdCBnZW5TdGVwc1Byb2dyZXNzRG90U3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgZGVzY3JpcHRpb25NYXhXaWR0aCxcbiAgICBsaW5lSGVpZ2h0LFxuICAgIGRvdEN1cnJlbnRTaXplLFxuICAgIGRvdFNpemUsXG4gICAgbW90aW9uRHVyYXRpb25TbG93XG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCYke2NvbXBvbmVudENsc30tZG90LCAmJHtjb21wb25lbnRDbHN9LWRvdCR7Y29tcG9uZW50Q2xzfS1zbWFsbGBdOiB7XG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgJyYtdGl0bGUnOiB7XG4gICAgICAgICAgbGluZUhlaWdodFxuICAgICAgICB9LFxuICAgICAgICAnJi10YWlsJzoge1xuICAgICAgICAgIC8vIE1hdGguZmxvb3IoKHRva2VuLnNpemUgLSB0b2tlbi5saW5lV2lkdGggKiAzKSAvIDIpXG4gICAgICAgICAgdG9wOiB0b2tlbi5jYWxjKHRva2VuLmRvdFNpemUpLnN1Yih0b2tlbi5jYWxjKHRva2VuLmxpbmVXaWR0aCkubXVsKDMpLmVxdWFsKCkpLmRpdigyKS5lcXVhbCgpLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICBtYXJnaW5JbmxpbmU6IGAke3VuaXQodG9rZW4uY2FsYyhkZXNjcmlwdGlvbk1heFdpZHRoKS5kaXYoMikuZXF1YWwoKSl9IDBgLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke3VuaXQodG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5TTSkubXVsKDIpLmVxdWFsKCkpfSlgLFxuICAgICAgICAgICAgaGVpZ2h0OiB0b2tlbi5jYWxjKHRva2VuLmxpbmVXaWR0aCkubXVsKDMpLmVxdWFsKCksXG4gICAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4ubWFyZ2luU01cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmLWljb24nOiB7XG4gICAgICAgICAgd2lkdGg6IGRvdFNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBkb3RTaXplLFxuICAgICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiB0b2tlbi5jYWxjKHRva2VuLmRlc2NyaXB0aW9uTWF4V2lkdGgpLnN1Yihkb3RTaXplKS5kaXYoMikuZXF1YWwoKSxcbiAgICAgICAgICBwYWRkaW5nSW5saW5lRW5kOiAwLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IHVuaXQoZG90U2l6ZSksXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30taWNvbi1kb3RgXToge1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMDAsXG4gICAgICAgICAgICAvLyB2ZXJ5IGxhcmdlIG51bWJlclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYGFsbCAke21vdGlvbkR1cmF0aW9uU2xvd31gLFxuICAgICAgICAgICAgLyogZXhwYW5kIGhvdmVyIGFyZWEgKi9cbiAgICAgICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRvcDogdG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5TTSkubXVsKC0xKS5lcXVhbCgpLFxuICAgICAgICAgICAgICBpbnNldElubGluZVN0YXJ0OiB0b2tlbi5jYWxjKGRvdFNpemUpLnN1Yih0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHRMRykubXVsKDEuNSkuZXF1YWwoKSkuZGl2KDIpLmVxdWFsKCksXG4gICAgICAgICAgICAgIHdpZHRoOiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHRMRykubXVsKDEuNSkuZXF1YWwoKSxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0b2tlbi5jb250cm9sSGVpZ2h0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmLWNvbnRlbnQnOiB7XG4gICAgICAgICAgd2lkdGg6IGRlc2NyaXB0aW9uTWF4V2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgW2AmLXByb2Nlc3MgJHtjb21wb25lbnRDbHN9LWl0ZW0taWNvbmBdOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgdG9wOiB0b2tlbi5jYWxjKGRvdFNpemUpLnN1Yihkb3RDdXJyZW50U2l6ZSkuZGl2KDIpLmVxdWFsKCksXG4gICAgICAgICAgd2lkdGg6IGRvdEN1cnJlbnRTaXplLFxuICAgICAgICAgIGhlaWdodDogZG90Q3VycmVudFNpemUsXG4gICAgICAgICAgbGluZUhlaWdodDogdW5pdChkb3RDdXJyZW50U2l6ZSksXG4gICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiB0b2tlbi5jYWxjKHRva2VuLmRlc2NyaXB0aW9uTWF4V2lkdGgpLnN1Yihkb3RDdXJyZW50U2l6ZSkuZGl2KDIpLmVxdWFsKClcbiAgICAgICAgfSxcbiAgICAgICAgW2AmLXByb2Nlc3MgJHtjb21wb25lbnRDbHN9LWljb25gXToge1xuICAgICAgICAgIFtgJjpmaXJzdC1jaGlsZCAke2NvbXBvbmVudENsc30taWNvbi1kb3RgXToge1xuICAgICAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2AmJHtjb21wb25lbnRDbHN9LXZlcnRpY2FsJHtjb21wb25lbnRDbHN9LWRvdGBdOiB7XG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWljb25gXToge1xuICAgICAgICBtYXJnaW5Ub3A6IHRva2VuLmNhbGModG9rZW4uY29udHJvbEhlaWdodCkuc3ViKGRvdFNpemUpLmRpdigyKS5lcXVhbCgpLFxuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1wcm9jZXNzICR7Y29tcG9uZW50Q2xzfS1pdGVtLWljb25gXToge1xuICAgICAgICBtYXJnaW5Ub3A6IHRva2VuLmNhbGModG9rZW4uY29udHJvbEhlaWdodCkuc3ViKGRvdEN1cnJlbnRTaXplKS5kaXYoMikuZXF1YWwoKSxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBpbnNldElubGluZVN0YXJ0OiB0b2tlbi5jYWxjKGRvdFNpemUpLnN1Yihkb3RDdXJyZW50U2l6ZSkuZGl2KDIpLmVxdWFsKCksXG4gICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiAwXG4gICAgICB9LFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTgzNTRcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0gPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXIgPiAke2NvbXBvbmVudENsc30taXRlbS10YWlsYF06IHtcbiAgICAgICAgdG9wOiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHQpLnN1Yihkb3RTaXplKS5kaXYoMikuZXF1YWwoKSxcbiAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogMCxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiBgJHt1bml0KHRva2VuLmNhbGMoZG90U2l6ZSkuYWRkKHRva2VuLnBhZGRpbmdYUykuZXF1YWwoKSl9IDAgJHt1bml0KHRva2VuLnBhZGRpbmdYUyl9YCxcbiAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiB0b2tlbi5jYWxjKGRvdFNpemUpLnN1Yih0b2tlbi5saW5lV2lkdGgpLmRpdigyKS5lcXVhbCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tc21hbGxgXToge1xuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWljb25gXToge1xuICAgICAgICAgIG1hcmdpblRvcDogdG9rZW4uY2FsYyh0b2tlbi5jb250cm9sSGVpZ2h0U00pLnN1Yihkb3RTaXplKS5kaXYoMikuZXF1YWwoKVxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLXByb2Nlc3MgJHtjb21wb25lbnRDbHN9LWl0ZW0taWNvbmBdOiB7XG4gICAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHRTTSkuc3ViKGRvdEN1cnJlbnRTaXplKS5kaXYoMikuZXF1YWwoKVxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtID4gJHtjb21wb25lbnRDbHN9LWl0ZW0tY29udGFpbmVyID4gJHtjb21wb25lbnRDbHN9LWl0ZW0tdGFpbGBdOiB7XG4gICAgICAgICAgdG9wOiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHRTTSkuc3ViKGRvdFNpemUpLmRpdigyKS5lcXVhbCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtOmZpcnN0LWNoaWxkICR7Y29tcG9uZW50Q2xzfS1pY29uLWRvdGBdOiB7XG4gICAgICAgIGluc2V0SW5saW5lU3RhcnQ6IDBcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWNvbnRlbnRgXToge1xuICAgICAgICB3aWR0aDogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlblN0ZXBzUHJvZ3Jlc3NEb3RTdHlsZTsiLCJjb25zdCBnZW5TdGVwc1JUTFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCYke2NvbXBvbmVudENsc30tcnRsYF06IHtcbiAgICAgIGRpcmVjdGlvbjogJ3J0bCcsXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgJyYtc3VidGl0bGUnOiB7XG4gICAgICAgICAgZmxvYXQ6ICdsZWZ0J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gbmF2XG4gICAgICBbYCYke2NvbXBvbmVudENsc30tbmF2aWdhdGlvbmBdOiB7XG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW06OmFmdGVyYF06IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHZlcnRpY2FsXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tdmVydGljYWxgXToge1xuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWl0ZW1gXToge1xuICAgICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyMjVkZWcpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1pY29uYF06IHtcbiAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcHJvZ3Jlc3MtZG90XG4gICAgICBbYCYke2NvbXBvbmVudENsc30tZG90YF06IHtcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS1pY29uICR7Y29tcG9uZW50Q2xzfS1pY29uLWRvdCwgJiR7Y29tcG9uZW50Q2xzfS1zbWFsbCAke2NvbXBvbmVudENsc30taXRlbS1pY29uICR7Y29tcG9uZW50Q2xzfS1pY29uLWRvdGBdOiB7XG4gICAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZW5TdGVwc1JUTFN0eWxlOyIsImltcG9ydCB7IHVuaXQgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmNvbnN0IGdlblN0ZXBzU21hbGxTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBpY29uU2l6ZVNNLFxuICAgIC8vIHN0ZXBzU21hbGxJY29uTWFyZ2luLFxuICAgIGZvbnRTaXplU00sXG4gICAgZm9udFNpemUsXG4gICAgY29sb3JUZXh0RGVzY3JpcHRpb25cbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1zbWFsbGBdOiB7XG4gICAgICBbYCYke2NvbXBvbmVudENsc30taG9yaXpvbnRhbDpub3QoJHtjb21wb25lbnRDbHN9LWxhYmVsLXZlcnRpY2FsKSAke2NvbXBvbmVudENsc30taXRlbWBdOiB7XG4gICAgICAgIHBhZGRpbmdJbmxpbmVTdGFydDogdG9rZW4ucGFkZGluZ1NNLFxuICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0taWNvbmBdOiB7XG4gICAgICAgIHdpZHRoOiBpY29uU2l6ZVNNLFxuICAgICAgICBoZWlnaHQ6IGljb25TaXplU00sXG4gICAgICAgIC8vIG1hcmdpbjogc3RlcHNTbWFsbEljb25NYXJnaW4sXG4gICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICBtYXJnaW5JbmxpbmU6IGAwICR7dW5pdCh0b2tlbi5tYXJnaW5YUyl9YCxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplU00sXG4gICAgICAgIGxpbmVIZWlnaHQ6IHVuaXQoaWNvblNpemVTTSksXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogaWNvblNpemVTTVxuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tdGl0bGVgXToge1xuICAgICAgICBwYWRkaW5nSW5saW5lRW5kOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgICAgIGZvbnRTaXplLFxuICAgICAgICBsaW5lSGVpZ2h0OiB1bml0KGljb25TaXplU00pLFxuICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgdG9wOiB0b2tlbi5jYWxjKGljb25TaXplU00pLmRpdigyKS5lcXVhbCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWRlc2NyaXB0aW9uYF06IHtcbiAgICAgICAgY29sb3I6IGNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgICBmb250U2l6ZVxuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tdGFpbGBdOiB7XG4gICAgICAgIHRvcDogdG9rZW4uY2FsYyhpY29uU2l6ZVNNKS5kaXYoMikuc3ViKHRva2VuLnBhZGRpbmdYWFMpLmVxdWFsKClcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWN1c3RvbSAke2NvbXBvbmVudENsc30taXRlbS1pY29uYF06IHtcbiAgICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1pY29uYF06IHtcbiAgICAgICAgICBmb250U2l6ZTogaWNvblNpemVTTSxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiB1bml0KGljb25TaXplU00pLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ25vbmUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3RlcHNTbWFsbFN0eWxlOyIsImltcG9ydCB7IHVuaXQgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmNvbnN0IGdlblN0ZXBzVmVydGljYWxTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBpY29uU2l6ZVNNLFxuICAgIGljb25TaXplXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCYke2NvbXBvbmVudENsc30tdmVydGljYWxgXToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWl0ZW1gXToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0taWNvbmBdOiB7XG4gICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICBtYXJnaW5JbmxpbmVFbmQ6IHRva2VuLm1hcmdpblxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLWNvbnRlbnRgXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgbWluSGVpZ2h0OiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHQpLm11bCgxLjUpLmVxdWFsKCksXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tdGl0bGVgXToge1xuICAgICAgICAgIGxpbmVIZWlnaHQ6IHVuaXQoaWNvblNpemUpXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW0tZGVzY3JpcHRpb25gXToge1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRva2VuLnBhZGRpbmdTTVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1pdGVtID4gJHtjb21wb25lbnRDbHN9LWl0ZW0tY29udGFpbmVyID4gJHtjb21wb25lbnRDbHN9LWl0ZW0tdGFpbGBdOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGluc2V0SW5saW5lU3RhcnQ6IHRva2VuLmNhbGMoaWNvblNpemUpLmRpdigyKS5zdWIodG9rZW4ubGluZVdpZHRoKS5lcXVhbCgpLFxuICAgICAgICB3aWR0aDogdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogYCR7dW5pdCh0b2tlbi5jYWxjKHRva2VuLm1hcmdpblhYUykubXVsKDEuNSkuYWRkKGljb25TaXplKS5lcXVhbCgpKX0gMCAke3VuaXQodG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5YWFMpLm11bCgxLjUpLmVxdWFsKCkpfWAsXG4gICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICB3aWR0aDogdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWl0ZW06bm90KDpsYXN0LWNoaWxkKSA+ICR7Y29tcG9uZW50Q2xzfS1pdGVtLWNvbnRhaW5lciA+ICR7Y29tcG9uZW50Q2xzfS1pdGVtLXRhaWxgXToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICB9LFxuICAgICAgW2AgPiAke2NvbXBvbmVudENsc30taXRlbSA+ICR7Y29tcG9uZW50Q2xzfS1pdGVtLWNvbnRhaW5lciA+ICR7Y29tcG9uZW50Q2xzfS1pdGVtLWNvbnRlbnQgPiAke2NvbXBvbmVudENsc30taXRlbS10aXRsZWBdOiB7XG4gICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1zbWFsbCAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXJgXToge1xuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtLXRhaWxgXToge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBpbnNldElubGluZVN0YXJ0OiB0b2tlbi5jYWxjKGljb25TaXplU00pLmRpdigyKS5zdWIodG9rZW4ubGluZVdpZHRoKS5lcXVhbCgpLFxuICAgICAgICAgIHBhZGRpbmc6IGAke3VuaXQodG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5YWFMpLm11bCgxLjUpLmFkZChpY29uU2l6ZVNNKS5lcXVhbCgpKX0gMCAke3VuaXQodG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5YWFMpLm11bCgxLjUpLmVxdWFsKCkpfWBcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbS10aXRsZWBdOiB7XG4gICAgICAgICAgbGluZUhlaWdodDogdW5pdChpY29uU2l6ZVNNKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlblN0ZXBzVmVydGljYWxTdHlsZTsiLCJpbXBvcnQgeyB1bml0IH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5pbXBvcnQgeyBnZW5Gb2N1c091dGxpbmUsIHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3R5bGUnO1xuaW1wb3J0IHsgZ2VuU3R5bGVIb29rcywgbWVyZ2VUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lL2ludGVybmFsJztcbmltcG9ydCBnZW5TdGVwc0N1c3RvbUljb25TdHlsZSBmcm9tICcuL2N1c3RvbS1pY29uJztcbmltcG9ydCBnZW5TdGVwc0hvcml6b250YWxTdHlsZSBmcm9tICcuL2hvcml6b250YWwnO1xuaW1wb3J0IGdlblN0ZXBzSW5saW5lU3R5bGUgZnJvbSAnLi9pbmxpbmUnO1xuaW1wb3J0IGdlblN0ZXBzTGFiZWxQbGFjZW1lbnRTdHlsZSBmcm9tICcuL2xhYmVsLXBsYWNlbWVudCc7XG5pbXBvcnQgZ2VuU3RlcHNOYXZTdHlsZSBmcm9tICcuL25hdic7XG5pbXBvcnQgZ2VuU3RlcHNQcm9ncmVzc1N0eWxlIGZyb20gJy4vcHJvZ3Jlc3MnO1xuaW1wb3J0IGdlblN0ZXBzUHJvZ3Jlc3NEb3RTdHlsZSBmcm9tICcuL3Byb2dyZXNzLWRvdCc7XG5pbXBvcnQgZ2VuU3RlcHNSVExTdHlsZSBmcm9tICcuL3J0bCc7XG5pbXBvcnQgZ2VuU3RlcHNTbWFsbFN0eWxlIGZyb20gJy4vc21hbGwnO1xuaW1wb3J0IGdlblN0ZXBzVmVydGljYWxTdHlsZSBmcm9tICcuL3ZlcnRpY2FsJztcbmNvbnN0IFNURVBfSVRFTV9TVEFUVVNfV0FJVCA9ICd3YWl0JztcbmNvbnN0IFNURVBfSVRFTV9TVEFUVVNfUFJPQ0VTUyA9ICdwcm9jZXNzJztcbmNvbnN0IFNURVBfSVRFTV9TVEFUVVNfRklOSVNIID0gJ2ZpbmlzaCc7XG5jb25zdCBTVEVQX0lURU1fU1RBVFVTX0VSUk9SID0gJ2Vycm9yJztcbmNvbnN0IGdlblN0ZXBzSXRlbVN0YXR1c1N0eWxlID0gKHN0YXR1cywgdG9rZW4pID0+IHtcbiAgY29uc3QgcHJlZml4ID0gYCR7dG9rZW4uY29tcG9uZW50Q2xzfS1pdGVtYDtcbiAgY29uc3QgaWNvbkNvbG9yS2V5ID0gYCR7c3RhdHVzfUljb25Db2xvcmA7XG4gIGNvbnN0IHRpdGxlQ29sb3JLZXkgPSBgJHtzdGF0dXN9VGl0bGVDb2xvcmA7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29sb3JLZXkgPSBgJHtzdGF0dXN9RGVzY3JpcHRpb25Db2xvcmA7XG4gIGNvbnN0IHRhaWxDb2xvcktleSA9IGAke3N0YXR1c31UYWlsQ29sb3JgO1xuICBjb25zdCBpY29uQmdDb2xvcktleSA9IGAke3N0YXR1c31JY29uQmdDb2xvcmA7XG4gIGNvbnN0IGljb25Cb3JkZXJDb2xvcktleSA9IGAke3N0YXR1c31JY29uQm9yZGVyQ29sb3JgO1xuICBjb25zdCBkb3RDb2xvcktleSA9IGAke3N0YXR1c31Eb3RDb2xvcmA7XG4gIHJldHVybiB7XG4gICAgW2Ake3ByZWZpeH0tJHtzdGF0dXN9ICR7cHJlZml4fS1pY29uYF06IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW5baWNvbkJnQ29sb3JLZXldLFxuICAgICAgYm9yZGVyQ29sb3I6IHRva2VuW2ljb25Cb3JkZXJDb2xvcktleV0sXG4gICAgICBbYD4gJHt0b2tlbi5jb21wb25lbnRDbHN9LWljb25gXToge1xuICAgICAgICBjb2xvcjogdG9rZW5baWNvbkNvbG9yS2V5XSxcbiAgICAgICAgW2Ake3Rva2VuLmNvbXBvbmVudENsc30taWNvbi1kb3RgXToge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRva2VuW2RvdENvbG9yS2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7cHJlZml4fS0ke3N0YXR1c30ke3ByZWZpeH0tY3VzdG9tICR7cHJlZml4fS1pY29uYF06IHtcbiAgICAgIFtgPiAke3Rva2VuLmNvbXBvbmVudENsc30taWNvbmBdOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbltkb3RDb2xvcktleV1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHtwcmVmaXh9LSR7c3RhdHVzfSA+ICR7cHJlZml4fS1jb250YWluZXIgPiAke3ByZWZpeH0tY29udGVudCA+ICR7cHJlZml4fS10aXRsZWBdOiB7XG4gICAgICBjb2xvcjogdG9rZW5bdGl0bGVDb2xvcktleV0sXG4gICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW5bdGFpbENvbG9yS2V5XVxuICAgICAgfVxuICAgIH0sXG4gICAgW2Ake3ByZWZpeH0tJHtzdGF0dXN9ID4gJHtwcmVmaXh9LWNvbnRhaW5lciA+ICR7cHJlZml4fS1jb250ZW50ID4gJHtwcmVmaXh9LWRlc2NyaXB0aW9uYF06IHtcbiAgICAgIGNvbG9yOiB0b2tlbltkZXNjcmlwdGlvbkNvbG9yS2V5XVxuICAgIH0sXG4gICAgW2Ake3ByZWZpeH0tJHtzdGF0dXN9ID4gJHtwcmVmaXh9LWNvbnRhaW5lciA+ICR7cHJlZml4fS10YWlsOjphZnRlcmBdOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuW3RhaWxDb2xvcktleV1cbiAgICB9XG4gIH07XG59O1xuY29uc3QgZ2VuU3RlcHNJdGVtU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgbW90aW9uRHVyYXRpb25TbG93XG4gIH0gPSB0b2tlbjtcbiAgY29uc3Qgc3RlcHNJdGVtQ2xzID0gYCR7Y29tcG9uZW50Q2xzfS1pdGVtYDsgLy8gLmFudC1zdGVwcy1pdGVtXG4gIGNvbnN0IHN0ZXBJdGVtSWNvbkNscyA9IGAke3N0ZXBzSXRlbUNsc30taWNvbmA7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgW3N0ZXBzSXRlbUNsc106IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmbGV4OiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgIFtgPiAke3N0ZXBzSXRlbUNsc30tY29udGFpbmVyID4gJHtzdGVwc0l0ZW1DbHN9LXRhaWwsID4gJHtzdGVwc0l0ZW1DbHN9LWNvbnRhaW5lciA+ICAke3N0ZXBzSXRlbUNsc30tY29udGVudCA+ICR7c3RlcHNJdGVtQ2xzfS10aXRsZTo6YWZ0ZXJgXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7c3RlcHNJdGVtQ2xzfS1jb250YWluZXJgXToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgJyY6Zm9jdXMtdmlzaWJsZSc6IHtcbiAgICAgICAgW3N0ZXBJdGVtSWNvbkNsc106IE9iamVjdC5hc3NpZ24oe30sIGdlbkZvY3VzT3V0bGluZSh0b2tlbikpXG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7c3RlcEl0ZW1JY29uQ2xzfSwgJHtzdGVwc0l0ZW1DbHN9LWNvbnRlbnRgXToge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG4gICAgW3N0ZXBJdGVtSWNvbkNsc106IHtcbiAgICAgIHdpZHRoOiB0b2tlbi5pY29uU2l6ZSxcbiAgICAgIGhlaWdodDogdG9rZW4uaWNvblNpemUsXG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICBtYXJnaW5JbmxpbmVTdGFydDogMCxcbiAgICAgIG1hcmdpbklubGluZUVuZDogdG9rZW4ubWFyZ2luWFMsXG4gICAgICBmb250U2l6ZTogdG9rZW4uaWNvbkZvbnRTaXplLFxuICAgICAgZm9udEZhbWlseTogdG9rZW4uZm9udEZhbWlseSxcbiAgICAgIGxpbmVIZWlnaHQ6IHVuaXQodG9rZW4uaWNvblNpemUpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uaWNvblNpemUsXG4gICAgICBib3JkZXI6IGAke3VuaXQodG9rZW4ubGluZVdpZHRoKX0gJHt0b2tlbi5saW5lVHlwZX0gdHJhbnNwYXJlbnRgLFxuICAgICAgdHJhbnNpdGlvbjogYGJhY2tncm91bmQtY29sb3IgJHttb3Rpb25EdXJhdGlvblNsb3d9LCBib3JkZXItY29sb3IgJHttb3Rpb25EdXJhdGlvblNsb3d9YCxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWljb25gXToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdG9wOiB0b2tlbi5pY29uVG9wLFxuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxXG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7c3RlcHNJdGVtQ2xzfS10YWlsYF06IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0b2tlbi5jYWxjKHRva2VuLmljb25TaXplKS5kaXYoMikuZXF1YWwoKSxcbiAgICAgIGluc2V0SW5saW5lU3RhcnQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiB0b2tlbi5saW5lV2lkdGgsXG4gICAgICAgIGJhY2tncm91bmQ6IHRva2VuLmNvbG9yU3BsaXQsXG4gICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICB0cmFuc2l0aW9uOiBgYmFja2dyb3VuZCAke21vdGlvbkR1cmF0aW9uU2xvd31gLFxuICAgICAgICBjb250ZW50OiAnXCJcIidcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHtzdGVwc0l0ZW1DbHN9LXRpdGxlYF06IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwYWRkaW5nSW5saW5lRW5kOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHLFxuICAgICAgbGluZUhlaWdodDogdW5pdCh0b2tlbi50aXRsZUxpbmVIZWlnaHQpLFxuICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiB0b2tlbi5jYWxjKHRva2VuLnRpdGxlTGluZUhlaWdodCkuZGl2KDIpLmVxdWFsKCksXG4gICAgICAgIGluc2V0SW5saW5lU3RhcnQ6ICcxMDAlJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDk5OTksXG4gICAgICAgIGhlaWdodDogdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b2tlbi5wcm9jZXNzVGFpbENvbG9yLFxuICAgICAgICBjb250ZW50OiAnXCJcIidcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHtzdGVwc0l0ZW1DbHN9LXN1YnRpdGxlYF06IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IHRva2VuLm1hcmdpblhTLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVcbiAgICB9LFxuICAgIFtgJHtzdGVwc0l0ZW1DbHN9LWRlc2NyaXB0aW9uYF06IHtcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVxuICAgIH1cbiAgfSwgZ2VuU3RlcHNJdGVtU3RhdHVzU3R5bGUoU1RFUF9JVEVNX1NUQVRVU19XQUlULCB0b2tlbikpLCBnZW5TdGVwc0l0ZW1TdGF0dXNTdHlsZShTVEVQX0lURU1fU1RBVFVTX1BST0NFU1MsIHRva2VuKSksIHtcbiAgICBbYCR7c3RlcHNJdGVtQ2xzfS1wcm9jZXNzID4gJHtzdGVwc0l0ZW1DbHN9LWNvbnRhaW5lciA+ICR7c3RlcHNJdGVtQ2xzfS10aXRsZWBdOiB7XG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5mb250V2VpZ2h0U3Ryb25nXG4gICAgfVxuICB9KSwgZ2VuU3RlcHNJdGVtU3RhdHVzU3R5bGUoU1RFUF9JVEVNX1NUQVRVU19GSU5JU0gsIHRva2VuKSksIGdlblN0ZXBzSXRlbVN0YXR1c1N0eWxlKFNURVBfSVRFTV9TVEFUVVNfRVJST1IsIHRva2VuKSksIHtcbiAgICBbYCR7c3RlcHNJdGVtQ2xzfSR7Y29tcG9uZW50Q2xzfS1uZXh0LWVycm9yID4gJHtjb21wb25lbnRDbHN9LWl0ZW0tdGl0bGU6OmFmdGVyYF06IHtcbiAgICAgIGJhY2tncm91bmQ6IHRva2VuLmNvbG9yRXJyb3JcbiAgICB9LFxuICAgIFtgJHtzdGVwc0l0ZW1DbHN9LWRpc2FibGVkYF06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJ1xuICAgIH1cbiAgfSk7XG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2xpY2thYmxlID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgZ2VuU3RlcHNDbGlja2FibGVTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBtb3Rpb25EdXJhdGlvblNsb3dcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJiAke2NvbXBvbmVudENsc30taXRlbWBdOiB7XG4gICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1pdGVtLWFjdGl2ZSlgXToge1xuICAgICAgICBbYCYgPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXJbcm9sZT0nYnV0dG9uJ11gXToge1xuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW1gXToge1xuICAgICAgICAgICAgW2AmLXRpdGxlLCAmLXN1YnRpdGxlLCAmLWRlc2NyaXB0aW9uLCAmLWljb24gJHtjb21wb25lbnRDbHN9LWljb25gXToge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgY29sb3IgJHttb3Rpb25EdXJhdGlvblNsb3d9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pdGVtYF06IHtcbiAgICAgICAgICAgICAgJyYtdGl0bGUsICYtc3VidGl0bGUsICYtZGVzY3JpcHRpb24nOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1pdGVtLXByb2Nlc3MpYF06IHtcbiAgICAgICAgICBbYCYgPiAke2NvbXBvbmVudENsc30taXRlbS1jb250YWluZXJbcm9sZT0nYnV0dG9uJ106aG92ZXJgXToge1xuICAgICAgICAgICAgW2Ake2NvbXBvbmVudENsc30taXRlbWBdOiB7XG4gICAgICAgICAgICAgICcmLWljb24nOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAgICAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pY29uYF06IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1ob3Jpem9udGFsOm5vdCgke2NvbXBvbmVudENsc30tbGFiZWwtdmVydGljYWwpYF06IHtcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWl0ZW1gXToge1xuICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgW2AmOmxhc3QtY2hpbGQgJHtjb21wb25lbnRDbHN9LWl0ZW0tdGl0bGVgXToge1xuICAgICAgICAgIHBhZGRpbmdJbmxpbmVFbmQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgJyYtdGFpbCc6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYtZGVzY3JpcHRpb24nOiB7XG4gICAgICAgICAgbWF4V2lkdGg6IHRva2VuLmRlc2NyaXB0aW9uTWF4V2lkdGgsXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vcm1hbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5jb25zdCBnZW5TdGVwc1N0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjsgLy8gLmFudC1zdGVwc1xuICByZXR1cm4ge1xuICAgIFtjb21wb25lbnRDbHNdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc2V0Q29tcG9uZW50KHRva2VuKSksIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmb250U2l6ZTogMCxcbiAgICAgIHRleHRBbGlnbjogJ2luaXRpYWwnXG4gICAgfSksIGdlblN0ZXBzSXRlbVN0eWxlKHRva2VuKSksIGdlblN0ZXBzQ2xpY2thYmxlU3R5bGUodG9rZW4pKSwgZ2VuU3RlcHNDdXN0b21JY29uU3R5bGUodG9rZW4pKSwgZ2VuU3RlcHNTbWFsbFN0eWxlKHRva2VuKSksIGdlblN0ZXBzVmVydGljYWxTdHlsZSh0b2tlbikpLCBnZW5TdGVwc0hvcml6b250YWxTdHlsZSh0b2tlbikpLCBnZW5TdGVwc0xhYmVsUGxhY2VtZW50U3R5bGUodG9rZW4pKSwgZ2VuU3RlcHNQcm9ncmVzc0RvdFN0eWxlKHRva2VuKSksIGdlblN0ZXBzTmF2U3R5bGUodG9rZW4pKSwgZ2VuU3RlcHNSVExTdHlsZSh0b2tlbikpLCBnZW5TdGVwc1Byb2dyZXNzU3R5bGUodG9rZW4pKSwgZ2VuU3RlcHNJbmxpbmVTdHlsZSh0b2tlbikpXG4gIH07XG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEV4cG9ydCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBwcmVwYXJlQ29tcG9uZW50VG9rZW4gPSB0b2tlbiA9PiAoe1xuICB0aXRsZUxpbmVIZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHQsXG4gIGN1c3RvbUljb25TaXplOiB0b2tlbi5jb250cm9sSGVpZ2h0LFxuICBjdXN0b21JY29uVG9wOiAwLFxuICBjdXN0b21JY29uRm9udFNpemU6IHRva2VuLmNvbnRyb2xIZWlnaHRTTSxcbiAgaWNvblNpemU6IHRva2VuLmNvbnRyb2xIZWlnaHQsXG4gIGljb25Ub3A6IC0wLjUsXG4gIC8vIG1hZ2ljIGZvciB1aSBleHBlcmllbmNlXG4gIGljb25Gb250U2l6ZTogdG9rZW4uZm9udFNpemUsXG4gIGljb25TaXplU006IHRva2VuLmZvbnRTaXplSGVhZGluZzMsXG4gIGRvdFNpemU6IHRva2VuLmNvbnRyb2xIZWlnaHQgLyA0LFxuICBkb3RDdXJyZW50U2l6ZTogdG9rZW4uY29udHJvbEhlaWdodExHIC8gNCxcbiAgbmF2QXJyb3dDb2xvcjogdG9rZW4uY29sb3JUZXh0RGlzYWJsZWQsXG4gIG5hdkNvbnRlbnRNYXhXaWR0aDogJ2F1dG8nLFxuICBkZXNjcmlwdGlvbk1heFdpZHRoOiAxNDAsXG4gIHdhaXRJY29uQ29sb3I6IHRva2VuLndpcmVmcmFtZSA/IHRva2VuLmNvbG9yVGV4dERpc2FibGVkIDogdG9rZW4uY29sb3JUZXh0TGFiZWwsXG4gIHdhaXRJY29uQmdDb2xvcjogdG9rZW4ud2lyZWZyYW1lID8gdG9rZW4uY29sb3JCZ0NvbnRhaW5lciA6IHRva2VuLmNvbG9yRmlsbENvbnRlbnQsXG4gIHdhaXRJY29uQm9yZGVyQ29sb3I6IHRva2VuLndpcmVmcmFtZSA/IHRva2VuLmNvbG9yVGV4dERpc2FibGVkIDogJ3RyYW5zcGFyZW50JyxcbiAgZmluaXNoSWNvbkJnQ29sb3I6IHRva2VuLndpcmVmcmFtZSA/IHRva2VuLmNvbG9yQmdDb250YWluZXIgOiB0b2tlbi5jb250cm9sSXRlbUJnQWN0aXZlLFxuICBmaW5pc2hJY29uQm9yZGVyQ29sb3I6IHRva2VuLndpcmVmcmFtZSA/IHRva2VuLmNvbG9yUHJpbWFyeSA6IHRva2VuLmNvbnRyb2xJdGVtQmdBY3RpdmVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3R5bGVIb29rcygnU3RlcHMnLCB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xvclRleHREaXNhYmxlZCxcbiAgICBjb250cm9sSGVpZ2h0TEcsXG4gICAgY29sb3JUZXh0TGlnaHRTb2xpZCxcbiAgICBjb2xvclRleHQsXG4gICAgY29sb3JQcmltYXJ5LFxuICAgIGNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgIGNvbG9yVGV4dFF1YXRlcm5hcnksXG4gICAgY29sb3JFcnJvcixcbiAgICBjb2xvckJvcmRlclNlY29uZGFyeSxcbiAgICBjb2xvclNwbGl0XG4gIH0gPSB0b2tlbjtcbiAgY29uc3Qgc3RlcHNUb2tlbiA9IG1lcmdlVG9rZW4odG9rZW4sIHtcbiAgICAvLyBTdGVwcyBjb21wb25lbnQgbGVzcyB2YXJpYWJsZVxuICAgIHByb2Nlc3NJY29uQ29sb3I6IGNvbG9yVGV4dExpZ2h0U29saWQsXG4gICAgcHJvY2Vzc1RpdGxlQ29sb3I6IGNvbG9yVGV4dCxcbiAgICBwcm9jZXNzRGVzY3JpcHRpb25Db2xvcjogY29sb3JUZXh0LFxuICAgIHByb2Nlc3NJY29uQmdDb2xvcjogY29sb3JQcmltYXJ5LFxuICAgIHByb2Nlc3NJY29uQm9yZGVyQ29sb3I6IGNvbG9yUHJpbWFyeSxcbiAgICBwcm9jZXNzRG90Q29sb3I6IGNvbG9yUHJpbWFyeSxcbiAgICBwcm9jZXNzVGFpbENvbG9yOiBjb2xvclNwbGl0LFxuICAgIHdhaXRUaXRsZUNvbG9yOiBjb2xvclRleHREZXNjcmlwdGlvbixcbiAgICB3YWl0RGVzY3JpcHRpb25Db2xvcjogY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgd2FpdFRhaWxDb2xvcjogY29sb3JTcGxpdCxcbiAgICB3YWl0RG90Q29sb3I6IGNvbG9yVGV4dERpc2FibGVkLFxuICAgIGZpbmlzaEljb25Db2xvcjogY29sb3JQcmltYXJ5LFxuICAgIGZpbmlzaFRpdGxlQ29sb3I6IGNvbG9yVGV4dCxcbiAgICBmaW5pc2hEZXNjcmlwdGlvbkNvbG9yOiBjb2xvclRleHREZXNjcmlwdGlvbixcbiAgICBmaW5pc2hUYWlsQ29sb3I6IGNvbG9yUHJpbWFyeSxcbiAgICBmaW5pc2hEb3RDb2xvcjogY29sb3JQcmltYXJ5LFxuICAgIGVycm9ySWNvbkNvbG9yOiBjb2xvclRleHRMaWdodFNvbGlkLFxuICAgIGVycm9yVGl0bGVDb2xvcjogY29sb3JFcnJvcixcbiAgICBlcnJvckRlc2NyaXB0aW9uQ29sb3I6IGNvbG9yRXJyb3IsXG4gICAgZXJyb3JUYWlsQ29sb3I6IGNvbG9yU3BsaXQsXG4gICAgZXJyb3JJY29uQmdDb2xvcjogY29sb3JFcnJvcixcbiAgICBlcnJvckljb25Cb3JkZXJDb2xvcjogY29sb3JFcnJvcixcbiAgICBlcnJvckRvdENvbG9yOiBjb2xvckVycm9yLFxuICAgIHN0ZXBzTmF2QWN0aXZlQ29sb3I6IGNvbG9yUHJpbWFyeSxcbiAgICBzdGVwc1Byb2dyZXNzU2l6ZTogY29udHJvbEhlaWdodExHLFxuICAgIC8vIFN0ZXBzIGlubGluZSB2YXJpYWJsZVxuICAgIGlubGluZURvdFNpemU6IDYsXG4gICAgaW5saW5lVGl0bGVDb2xvcjogY29sb3JUZXh0UXVhdGVybmFyeSxcbiAgICBpbmxpbmVUYWlsQ29sb3I6IGNvbG9yQm9yZGVyU2Vjb25kYXJ5XG4gIH0pO1xuICByZXR1cm4gW2dlblN0ZXBzU3R5bGUoc3RlcHNUb2tlbildO1xufSwgcHJlcGFyZUNvbXBvbmVudFRva2VuKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5pbXBvcnQgeyBkZXZVc2VXYXJuaW5nIH0gZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5mdW5jdGlvbiBmaWx0ZXIoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTGVnYWN5SXRlbXMoaXRlbXMsIGNoaWxkcmVuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgY29uc3Qgd2FybmluZyA9IGRldlVzZVdhcm5pbmcoJ01lbnUnKTtcbiAgICB3YXJuaW5nLmRlcHJlY2F0ZWQoIWNoaWxkcmVuLCAnU3RlcCcsICdpdGVtcycpO1xuICB9XG4gIGlmIChpdGVtcykge1xuICAgIHJldHVybiBpdGVtcztcbiAgfVxuICBjb25zdCBjaGlsZHJlbkl0ZW1zID0gdG9BcnJheShjaGlsZHJlbikubWFwKG5vZGUgPT4ge1xuICAgIGlmICgvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcHNcbiAgICAgIH0gPSBub2RlO1xuICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSk7XG4gIHJldHVybiBmaWx0ZXIoY2hpbGRyZW5JdGVtcyk7XG59IiwiXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hlY2tPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2hlY2tPdXRsaW5lZFwiO1xuaW1wb3J0IENsb3NlT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Nsb3NlT3V0bGluZWRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJjU3RlcHMgZnJvbSAncmMtc3RlcHMnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgdXNlU2l6ZSBmcm9tICcuLi9jb25maWctcHJvdmlkZXIvaG9va3MvdXNlU2l6ZSc7XG5pbXBvcnQgdXNlQnJlYWtwb2ludCBmcm9tICcuLi9ncmlkL2hvb2tzL3VzZUJyZWFrcG9pbnQnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL3Byb2dyZXNzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL3Rvb2x0aXAnO1xuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHVzZUxlZ2FjeUl0ZW1zIGZyb20gJy4vdXNlTGVnYWN5SXRlbXMnO1xuY29uc3QgU3RlcHMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICAgIHBlcmNlbnQsXG4gICAgICBzaXplOiBjdXN0b21pemVTaXplLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcm9vdENsYXNzTmFtZSxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGl0ZW1zLFxuICAgICAgcmVzcG9uc2l2ZSA9IHRydWUsXG4gICAgICBjdXJyZW50ID0gMCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgc3R5bGVcbiAgICB9ID0gcHJvcHMsXG4gICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwZXJjZW50XCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiLCBcInJvb3RDbGFzc05hbWVcIiwgXCJkaXJlY3Rpb25cIiwgXCJpdGVtc1wiLCBcInJlc3BvbnNpdmVcIiwgXCJjdXJyZW50XCIsIFwiY2hpbGRyZW5cIiwgXCJzdHlsZVwiXSk7XG4gIGNvbnN0IHtcbiAgICB4c1xuICB9ID0gdXNlQnJlYWtwb2ludChyZXNwb25zaXZlKTtcbiAgY29uc3Qge1xuICAgIGdldFByZWZpeENscyxcbiAgICBkaXJlY3Rpb246IHJ0bERpcmVjdGlvbixcbiAgICBzdGVwc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3QgcmVhbERpcmVjdGlvblZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiByZXNwb25zaXZlICYmIHhzID8gJ3ZlcnRpY2FsJyA6IGRpcmVjdGlvbiwgW3hzLCBkaXJlY3Rpb25dKTtcbiAgY29uc3Qgc2l6ZSA9IHVzZVNpemUoY3VzdG9taXplU2l6ZSk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnc3RlcHMnLCBwcm9wcy5wcmVmaXhDbHMpO1xuICBjb25zdCBbd3JhcENTU1ZhciwgaGFzaElkLCBjc3NWYXJDbHNdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgaXNJbmxpbmUgPSBwcm9wcy50eXBlID09PSAnaW5saW5lJztcbiAgY29uc3QgaWNvblByZWZpeCA9IGdldFByZWZpeENscygnJywgcHJvcHMuaWNvblByZWZpeCk7XG4gIGNvbnN0IG1lcmdlZEl0ZW1zID0gdXNlTGVnYWN5SXRlbXMoaXRlbXMsIGNoaWxkcmVuKTtcbiAgY29uc3QgbWVyZ2VkUGVyY2VudCA9IGlzSW5saW5lID8gdW5kZWZpbmVkIDogcGVyY2VudDtcbiAgY29uc3QgbWVyZ2VkU3R5bGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0ZXBzID09PSBudWxsIHx8IHN0ZXBzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGVwcy5zdHlsZSksIHN0eWxlKTtcbiAgY29uc3Qgc3RlcHNDbGFzc05hbWUgPSBjbGFzc05hbWVzKHN0ZXBzID09PSBudWxsIHx8IHN0ZXBzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGVwcy5jbGFzc05hbWUsIHtcbiAgICBbYCR7cHJlZml4Q2xzfS1ydGxgXTogcnRsRGlyZWN0aW9uID09PSAncnRsJyxcbiAgICBbYCR7cHJlZml4Q2xzfS13aXRoLXByb2dyZXNzYF06IG1lcmdlZFBlcmNlbnQgIT09IHVuZGVmaW5lZFxuICB9LCBjbGFzc05hbWUsIHJvb3RDbGFzc05hbWUsIGhhc2hJZCwgY3NzVmFyQ2xzKTtcbiAgY29uc3QgaWNvbnMgPSB7XG4gICAgZmluaXNoOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja091dGxpbmVkLCB7XG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeENsc30tZmluaXNoLWljb25gXG4gICAgfSksXG4gICAgZXJyb3I6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlT3V0bGluZWQsIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4Q2xzfS1lcnJvci1pY29uYFxuICAgIH0pXG4gIH07XG4gIGNvbnN0IHN0ZXBJY29uUmVuZGVyID0gX3JlZiA9PiB7XG4gICAgbGV0IHtcbiAgICAgIG5vZGUsXG4gICAgICBzdGF0dXNcbiAgICB9ID0gX3JlZjtcbiAgICBpZiAoc3RhdHVzID09PSAncHJvY2VzcycgJiYgbWVyZ2VkUGVyY2VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjdXJyZW50bHkgaXQncyBoYXJkLWNvZGVkLCBzaW5jZSB3ZSBjYW4ndCBlYXNpbHkgcmVhZCB0aGUgYWN0dWFsbHkgd2lkdGggb2YgaWNvblxuICAgICAgY29uc3QgcHJvZ3Jlc3NXaWR0aCA9IHNpemUgPT09ICdzbWFsbCcgPyAzMiA6IDQwO1xuICAgICAgLy8gaWNvbldpdGhQcm9ncmVzc1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LXByb2dyZXNzLWljb25gXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQcm9ncmVzcywge1xuICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICBwZXJjZW50OiBtZXJnZWRQZXJjZW50LFxuICAgICAgICBzaXplOiBwcm9ncmVzc1dpZHRoLFxuICAgICAgICBzdHJva2VXaWR0aDogNCxcbiAgICAgICAgZm9ybWF0OiAoKSA9PiBudWxsXG4gICAgICB9KSwgbm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBjb25zdCBpdGVtUmVuZGVyID0gKGl0ZW0sIHN0ZXBJdGVtKSA9PiBpdGVtLmRlc2NyaXB0aW9uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwge1xuICAgIHRpdGxlOiBpdGVtLmRlc2NyaXB0aW9uXG4gIH0sIHN0ZXBJdGVtKSA6IHN0ZXBJdGVtO1xuICByZXR1cm4gd3JhcENTU1ZhcigvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSY1N0ZXBzLCBPYmplY3QuYXNzaWduKHtcbiAgICBpY29uczogaWNvbnNcbiAgfSwgcmVzdFByb3BzLCB7XG4gICAgc3R5bGU6IG1lcmdlZFN0eWxlLFxuICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgc2l6ZTogc2l6ZSxcbiAgICBpdGVtczogbWVyZ2VkSXRlbXMsXG4gICAgaXRlbVJlbmRlcjogaXNJbmxpbmUgPyBpdGVtUmVuZGVyIDogdW5kZWZpbmVkLFxuICAgIHN0ZXBJY29uOiBzdGVwSWNvblJlbmRlcixcbiAgICBkaXJlY3Rpb246IHJlYWxEaXJlY3Rpb25WYWx1ZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBpY29uUHJlZml4OiBpY29uUHJlZml4LFxuICAgIGNsYXNzTmFtZTogc3RlcHNDbGFzc05hbWVcbiAgfSkpKTtcbn07XG5TdGVwcy5TdGVwID0gUmNTdGVwcy5TdGVwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgU3RlcHMuZGlzcGxheU5hbWUgPSAnU3RlcHMnO1xufVxuZXhwb3J0IGRlZmF1bHQgU3RlcHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///42119
`)},27561:function(module,__unused_webpack_exports,__webpack_require__){eval(`var trimmedEndIndex = __webpack_require__(67990);

/** Used to match leading whitespace. */
var reTrimStart = /^\\s+/;

/**
 * The base implementation of \`_.trim\`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc1NjEuanMiLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCLG1CQUFPLENBQUMsS0FBb0I7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzPzk0NWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///27561
`)},67990:function(module){eval(`/** Used to match a single whitespace character. */
var reWhitespace = /\\s/;

/**
 * Used by \`_.trim\` and \`_.trimEnd\` to get the index of the last non-whitespace
 * character of \`string\`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjc5OTAuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdHJpbW1lZEVuZEluZGV4LmpzP2MzYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///67990
`)},23279:function(module,__unused_webpack_exports,__webpack_require__){eval(`var isObject = __webpack_require__(13218),
    now = __webpack_require__(7771),
    toNumber = __webpack_require__(14841);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other \`lodash\` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking \`func\` until after \`wait\`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a \`cancel\` method to cancel
 * delayed \`func\` invocations and a \`flush\` method to immediately invoke them.
 * Provide \`options\` to indicate whether \`func\` should be invoked on the
 * leading and/or trailing edge of the \`wait\` timeout. The \`func\` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last \`func\`
 * invocation.
 *
 * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the \`wait\` timeout.
 *
 * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred
 * until to the next tick, similar to \`setTimeout\` with a timeout of \`0\`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between \`_.debounce\` and \`_.throttle\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time \`func\` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke \`sendMail\` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure \`batchLog\` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any \`maxWait\` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the \`maxWait\` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have \`lastArgs\` which means \`func\` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMyNzkuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLEtBQVk7QUFDbkMsVUFBVSxtQkFBTyxDQUFDLElBQU87QUFDekIsZUFBZSxtQkFBTyxDQUFDLEtBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsV0FBVztBQUM5QixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzP2VhZTQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///23279
`)},13218:function(module){eval(`/**
 * Checks if \`value\` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of \`Object\`. (e.g. arrays, functions, objects, regexes, \`new Number(0)\`, and \`new String('')\`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is an object, else \`false\`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMyMTguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcz8xNjQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///13218
`)},7771:function(module,__unused_webpack_exports,__webpack_require__){eval(`var root = __webpack_require__(55639);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzc3MS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxXQUFXLG1CQUFPLENBQUMsS0FBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanM/MTM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///7771
`)},23493:function(module,__unused_webpack_exports,__webpack_require__){eval(`var debounce = __webpack_require__(23279),
    isObject = __webpack_require__(13218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes \`func\` at most once per
 * every \`wait\` milliseconds. The throttled function comes with a \`cancel\`
 * method to cancel delayed \`func\` invocations and a \`flush\` method to
 * immediately invoke them. Provide \`options\` to indicate whether \`func\`
 * should be invoked on the leading and/or trailing edge of the \`wait\`
 * timeout. The \`func\` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last \`func\` invocation.
 *
 * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the \`wait\` timeout.
 *
 * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred
 * until to the next tick, similar to \`setTimeout\` with a timeout of \`0\`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between \`_.throttle\` and \`_.debounce\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke \`renewToken\` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0OTMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLEtBQVk7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLEtBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsV0FBVztBQUM5QixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG1CQUFtQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzPzE0MGEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///23493
`)},14841:function(module,__unused_webpack_exports,__webpack_require__){eval(`var baseTrim = __webpack_require__(27561),
    isObject = __webpack_require__(13218),
    isSymbol = __webpack_require__(33448);

/** Used as references for various \`Number\` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on \`root\`. */
var freeParseInt = parseInt;

/**
 * Converts \`value\` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ4NDEuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLEtBQWE7QUFDcEMsZUFBZSxtQkFBTyxDQUFDLEtBQVk7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLEtBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanM/NWQ4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///14841
`)}}]);
