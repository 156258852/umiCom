"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[525],{57838:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useForceUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useForceUpdate() {
  const [, forceUpdate] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(x => x + 1, 0);
  return forceUpdate;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTc4MzguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQjtBQUNoQjtBQUNmLDBCQUEwQiw2Q0FBZ0I7QUFDMUM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL2hvb2tzL3VzZUZvcmNlVXBkYXRlLmpzPzI3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gIGNvbnN0IFssIGZvcmNlVXBkYXRlXSA9IFJlYWN0LnVzZVJlZHVjZXIoeCA9PiB4ICsgMSwgMCk7XG4gIHJldHVybiBmb3JjZVVwZGF0ZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///57838
`)},38703:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_progress; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(89739);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(63606);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/common.js

var defaultProps = {
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  trailColor: '#D9D9D9',
  trailWidth: 1,
  gapPosition: 'bottom'
};
var useTransitionDuration = function useTransitionDuration() {
  var pathsRef = (0,react.useRef)([]);
  var prevTimeStamp = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var now = Date.now();
    var updated = false;
    pathsRef.current.forEach(function (path) {
      if (!path) {
        return;
      }
      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });
    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return pathsRef.current;
};
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Line.js



var _excluded = ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"];



var Line = function Line(props) {
  var _defaultProps$props = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), props),
    className = _defaultProps$props.className,
    percent = _defaultProps$props.percent,
    prefixCls = _defaultProps$props.prefixCls,
    strokeColor = _defaultProps$props.strokeColor,
    strokeLinecap = _defaultProps$props.strokeLinecap,
    strokeWidth = _defaultProps$props.strokeWidth,
    style = _defaultProps$props.style,
    trailColor = _defaultProps$props.trailColor,
    trailWidth = _defaultProps$props.trailWidth,
    transition = _defaultProps$props.transition,
    restProps = (0,objectWithoutProperties/* default */.Z)(_defaultProps$props, _excluded);

  // eslint-disable-next-line no-param-reassign
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
  var paths = useTransitionDuration();
  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
  var viewBoxString = "0 0 100 ".concat(strokeWidth);
  var stackPtg = 0;
  return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-line"), className),
    viewBox: viewBoxString,
    preserveAspectRatio: "none",
    style: style
  }, restProps), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-line-trail"),
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0"
  }), percentList.map(function (ptg, index) {
    var dashPercent = 1;
    switch (strokeLinecap) {
      case 'round':
        dashPercent = 1 - strokeWidth / 100;
        break;
      case 'square':
        dashPercent = 1 - strokeWidth / 2 / 100;
        break;
      default:
        dashPercent = 1;
        break;
    }
    var pathStyle = {
      strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
      strokeDashoffset: "-".concat(stackPtg, "px"),
      transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
    };
    var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
    stackPtg += ptg;
    return /*#__PURE__*/react.createElement("path", {
      key: index,
      className: "".concat(prefixCls, "-line-path"),
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: color,
      strokeWidth: strokeWidth,
      fillOpacity: "0",
      ref: function ref(elem) {
        // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
        // React will call the ref callback with the DOM element when the component mounts,
        // and call it with \`null\` when it unmounts.
        // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.

        paths[index] = elem;
      },
      style: pathStyle
    });
  }));
};
if (false) {}
/* harmony default export */ var es_Line = (Line);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/hooks/useId.js



var uuid = 0;

/** Is client side and not jsdom */
var isBrowserClient =  true && (0,canUseDom/* default */.Z)();

/** Get unique id for accessibility usage */
function getUUID() {
  var retId;

  // Test never reach
  /* istanbul ignore if */
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
/* harmony default export */ var useId = (function (id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  react.useEffect(function () {
    setInnerId("rc_progress_".concat(getUUID()));
  }, []);
  return id || innerId;
});
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Circle/PtgCircle.js


var Block = function Block(_ref) {
  var bg = _ref.bg,
    children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: bg
    }
  }, children);
};
function getPtgColors(color, scale) {
  return Object.keys(color).map(function (key) {
    var parsedKey = parseFloat(key);
    var ptgKey = "".concat(Math.floor(parsedKey * scale), "%");
    return "".concat(color[key], " ").concat(ptgKey);
  });
}
var PtgCircle = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    color = props.color,
    gradientId = props.gradientId,
    radius = props.radius,
    circleStyleForStack = props.style,
    ptg = props.ptg,
    strokeLinecap = props.strokeLinecap,
    strokeWidth = props.strokeWidth,
    size = props.size,
    gapDegree = props.gapDegree;
  var isGradient = color && (0,esm_typeof/* default */.Z)(color) === 'object';
  var stroke = isGradient ? "#FFF" : undefined;

  // ========================== Circle ==========================
  var halfSize = size / 2;
  var circleNode = /*#__PURE__*/react.createElement("circle", {
    className: "".concat(prefixCls, "-circle-path"),
    r: radius,
    cx: halfSize,
    cy: halfSize,
    stroke: stroke,
    strokeLinecap: strokeLinecap,
    strokeWidth: strokeWidth,
    opacity: ptg === 0 ? 0 : 1,
    style: circleStyleForStack,
    ref: ref
  });

  // ========================== Render ==========================
  if (!isGradient) {
    return circleNode;
  }
  var maskId = "".concat(gradientId, "-conic");
  var fromDeg = gapDegree ? "".concat(180 + gapDegree / 2, "deg") : '0deg';
  var conicColors = getPtgColors(color, (360 - gapDegree) / 360);
  var linearColors = getPtgColors(color, 1);
  var conicColorBg = "conic-gradient(from ".concat(fromDeg, ", ").concat(conicColors.join(', '), ")");
  var linearColorBg = "linear-gradient(to ".concat(gapDegree ? 'bottom' : 'top', ", ").concat(linearColors.join(', '), ")");
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("mask", {
    id: maskId
  }, circleNode), /*#__PURE__*/react.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: size,
    height: size,
    mask: "url(#".concat(maskId, ")")
  }, /*#__PURE__*/react.createElement(Block, {
    bg: linearColorBg
  }, /*#__PURE__*/react.createElement(Block, {
    bg: conicColorBg
  }))));
});
if (false) {}
/* harmony default export */ var Circle_PtgCircle = (PtgCircle);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Circle/util.js
var VIEW_BOX_SIZE = 100;
var getCircleStyle = function getCircleStyle(perimeter, perimeterWithoutGap, offset, percent, rotateDeg, gapDegree, gapPosition, strokeColor, strokeLinecap, strokeWidth) {
  var stepSpace = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
  var offsetDeg = offset / 100 * 360 * ((360 - gapDegree) / 360);
  var positionDeg = gapDegree === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[gapPosition];
  var strokeDashoffset = (100 - percent) / 100 * perimeterWithoutGap;
  // Fix percent accuracy when strokeLinecap is round
  // https://github.com/ant-design/ant-design/issues/35009
  if (strokeLinecap === 'round' && percent !== 100) {
    strokeDashoffset += strokeWidth / 2;
    // when percent is small enough (<= 1%), keep smallest value to avoid it's disappearance
    if (strokeDashoffset >= perimeterWithoutGap) {
      strokeDashoffset = perimeterWithoutGap - 0.01;
    }
  }
  var halfSize = VIEW_BOX_SIZE / 2;
  return {
    stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
    strokeDasharray: "".concat(perimeterWithoutGap, "px ").concat(perimeter),
    strokeDashoffset: strokeDashoffset + stepSpace,
    transform: "rotate(".concat(rotateDeg + offsetDeg + positionDeg, "deg)"),
    transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
    fillOpacity: 0
  };
};
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Circle/index.js




var Circle_excluded = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];






function toArray(value) {
  var mergedValue = value !== null && value !== void 0 ? value : [];
  return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
}
var Circle = function Circle(props) {
  var _defaultProps$props = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), props),
    id = _defaultProps$props.id,
    prefixCls = _defaultProps$props.prefixCls,
    steps = _defaultProps$props.steps,
    strokeWidth = _defaultProps$props.strokeWidth,
    trailWidth = _defaultProps$props.trailWidth,
    _defaultProps$props$g = _defaultProps$props.gapDegree,
    gapDegree = _defaultProps$props$g === void 0 ? 0 : _defaultProps$props$g,
    gapPosition = _defaultProps$props.gapPosition,
    trailColor = _defaultProps$props.trailColor,
    strokeLinecap = _defaultProps$props.strokeLinecap,
    style = _defaultProps$props.style,
    className = _defaultProps$props.className,
    strokeColor = _defaultProps$props.strokeColor,
    percent = _defaultProps$props.percent,
    restProps = (0,objectWithoutProperties/* default */.Z)(_defaultProps$props, Circle_excluded);
  var halfSize = VIEW_BOX_SIZE / 2;
  var mergedId = useId(id);
  var gradientId = "".concat(mergedId, "-gradient");
  var radius = halfSize - strokeWidth / 2;
  var perimeter = Math.PI * 2 * radius;
  var rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
  var perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
  var _ref = (0,esm_typeof/* default */.Z)(steps) === 'object' ? steps : {
      count: steps,
      gap: 2
    },
    stepCount = _ref.count,
    stepGap = _ref.gap;
  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function (color) {
    return color && (0,esm_typeof/* default */.Z)(color) === 'object';
  });
  var isConicGradient = gradient && (0,esm_typeof/* default */.Z)(gradient) === 'object';
  var mergedStrokeLinecap = isConicGradient ? 'butt' : strokeLinecap;
  var circleStyle = getCircleStyle(perimeter, perimeterWithoutGap, 0, 100, rotateDeg, gapDegree, gapPosition, trailColor, mergedStrokeLinecap, strokeWidth);
  var paths = useTransitionDuration();
  var getStokeList = function getStokeList() {
    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, ptg, rotateDeg, gapDegree, gapPosition, color, mergedStrokeLinecap, strokeWidth);
      stackPtg += ptg;
      return /*#__PURE__*/react.createElement(Circle_PtgCircle, {
        key: index,
        color: color,
        ptg: ptg,
        radius: radius,
        prefixCls: prefixCls,
        gradientId: gradientId,
        style: circleStyleForStack,
        strokeLinecap: mergedStrokeLinecap,
        strokeWidth: strokeWidth,
        gapDegree: gapDegree,
        ref: function ref(elem) {
          // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
          // React will call the ref callback with the DOM element when the component mounts,
          // and call it with \`null\` when it unmounts.
          // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.

          paths[index] = elem;
        },
        size: VIEW_BOX_SIZE
      });
    }).reverse();
  };
  var getStepStokeList = function getStepStokeList() {
    // only show the first percent when pass steps
    var current = Math.round(stepCount * (percentList[0] / 100));
    var stepPtg = 100 / stepCount;
    var stackPtg = 0;
    return new Array(stepCount).fill(null).map(function (_, index) {
      var color = index <= current - 1 ? strokeColorList[0] : trailColor;
      var stroke = color && (0,esm_typeof/* default */.Z)(color) === 'object' ? "url(#".concat(gradientId, ")") : undefined;
      var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, stepPtg, rotateDeg, gapDegree, gapPosition, color, 'butt', strokeWidth, stepGap);
      stackPtg += (perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepGap) * 100 / perimeterWithoutGap;
      return /*#__PURE__*/react.createElement("circle", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        r: radius,
        cx: halfSize,
        cy: halfSize,
        stroke: stroke,
        strokeWidth: strokeWidth,
        opacity: 1,
        style: circleStyleForStack,
        ref: function ref(elem) {
          paths[index] = elem;
        }
      });
    });
  };
  return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-circle"), className),
    viewBox: "0 0 ".concat(VIEW_BOX_SIZE, " ").concat(VIEW_BOX_SIZE),
    style: style,
    id: id,
    role: "presentation"
  }, restProps), !stepCount && /*#__PURE__*/react.createElement("circle", {
    className: "".concat(prefixCls, "-circle-trail"),
    r: radius,
    cx: halfSize,
    cy: halfSize,
    stroke: trailColor,
    strokeLinecap: mergedStrokeLinecap,
    strokeWidth: trailWidth || strokeWidth,
    style: circleStyle
  }), stepCount ? getStepStokeList() : getStokeList());
};
if (false) {}
/* harmony default export */ var es_Circle = (Circle);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/index.js



/* harmony default export */ var es = ({
  Line: es_Line,
  Circle: es_Circle
});
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/colors/es/index.js + 2 modules
var colors_es = __webpack_require__(65409);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/utils.js

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent(_ref) {
  let {
    success,
    successPercent
  } = _ref;
  let percent = successPercent;
  /** @deprecated Use \`percent\` instead */
  if (success && 'progress' in success) {
    percent = success.progress;
  }
  if (success && 'percent' in success) {
    percent = success.percent;
  }
  return percent;
}
const getPercentage = _ref2 => {
  let {
    percent,
    success,
    successPercent
  } = _ref2;
  const realSuccessPercent = validProgress(getSuccessPercent({
    success,
    successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
};
const getStrokeColor = _ref3 => {
  let {
    success = {},
    strokeColor
  } = _ref3;
  const {
    strokeColor: successColor
  } = success;
  return [successColor || colors_es/* presetPrimaryColors */.ez.green, strokeColor || null];
};
const getSize = (size, type, extra) => {
  var _a, _b, _c, _d;
  let width = -1;
  let height = -1;
  if (type === 'step') {
    const steps = extra.steps;
    const strokeWidth = extra.strokeWidth;
    if (typeof size === 'string' || typeof size === 'undefined') {
      width = size === 'small' ? 2 : 14;
      height = strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 8;
    } else if (typeof size === 'number') {
      [width, height] = [size, size];
    } else {
      [width = 14, height = 8] = Array.isArray(size) ? size : [size.width, size.height];
    }
    width *= steps;
  } else if (type === 'line') {
    const strokeWidth = extra === null || extra === void 0 ? void 0 : extra.strokeWidth;
    if (typeof size === 'string' || typeof size === 'undefined') {
      height = strokeWidth || (size === 'small' ? 6 : 8);
    } else if (typeof size === 'number') {
      [width, height] = [size, size];
    } else {
      [width = -1, height = 8] = Array.isArray(size) ? size : [size.width, size.height];
    }
  } else if (type === 'circle' || type === 'dashboard') {
    if (typeof size === 'string' || typeof size === 'undefined') {
      [width, height] = size === 'small' ? [60, 60] : [120, 120];
    } else if (typeof size === 'number') {
      [width, height] = [size, size];
    } else if (Array.isArray(size)) {
      width = (_b = (_a = size[0]) !== null && _a !== void 0 ? _a : size[1]) !== null && _b !== void 0 ? _b : 120;
      height = (_d = (_c = size[0]) !== null && _c !== void 0 ? _c : size[1]) !== null && _d !== void 0 ? _d : 120;
    }
  }
  return [width, height];
};
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Circle.js
"use client";






const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = width => CIRCLE_MIN_STROKE_WIDTH / width * 100;
const Circle_Circle = props => {
  const {
    prefixCls,
    trailColor = null,
    strokeLinecap = 'round',
    gapPosition,
    gapDegree,
    width: originWidth = 120,
    type,
    children,
    success,
    size = originWidth,
    steps
  } = props;
  const [width, height] = getSize(size, 'circle');
  let {
    strokeWidth
  } = props;
  if (strokeWidth === undefined) {
    strokeWidth = Math.max(getMinPercent(width), 6);
  }
  const circleStyle = {
    width,
    height,
    fontSize: width * 0.15 + 6
  };
  const realGapDegree = react.useMemo(() => {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  }, [gapDegree, type]);
  const percentArray = getPercentage(props);
  const gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
  // using className to style stroke color
  const isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  const strokeColor = getStrokeColor({
    success,
    strokeColor: props.strokeColor
  });
  const wrapperClassName = classnames_default()(\`\${prefixCls}-inner\`, {
    [\`\${prefixCls}-circle-gradient\`]: isGradient
  });
  const circleContent = /*#__PURE__*/react.createElement(es_Circle, {
    steps: steps,
    percent: steps ? percentArray[1] : percentArray,
    strokeWidth: strokeWidth,
    trailWidth: strokeWidth,
    strokeColor: steps ? strokeColor[1] : strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: realGapDegree,
    gapPosition: gapPos
  });
  const smallCircle = width <= 20;
  const node = /*#__PURE__*/react.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, circleContent, !smallCircle && children);
  if (smallCircle) {
    return /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      title: children
    }, node);
  }
  return node;
};
/* harmony default export */ var progress_Circle = (Circle_Circle);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/style/index.js



const LineStrokeColorVar = '--progress-line-stroke-color';
const Percent = '--progress-percent';
const genAntProgressActive = isRtl => {
  const direction = isRtl ? '100%' : '-100%';
  return new cssinjs_es/* Keyframes */.E4(\`antProgress\${isRtl ? 'RTL' : 'LTR'}Active\`, {
    '0%': {
      transform: \`translateX(\${direction}) scaleX(0)\`,
      opacity: 0.1
    },
    '20%': {
      transform: \`translateX(\${direction}) scaleX(0)\`,
      opacity: 0.5
    },
    to: {
      transform: 'translateX(0) scaleX(1)',
      opacity: 0
    }
  });
};
const genBaseStyle = token => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'inline-block',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-line': {
        position: 'relative',
        width: '100%',
        fontSize: token.fontSize
      },
      [\`\${progressCls}-outer\`]: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%'
      },
      [\`\${progressCls}-inner\`]: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        flex: 1,
        overflow: 'hidden',
        verticalAlign: 'middle',
        backgroundColor: token.remainingColor,
        borderRadius: token.lineBorderRadius
      },
      [\`\${progressCls}-inner:not(\${progressCls}-circle-gradient)\`]: {
        [\`\${progressCls}-circle-path\`]: {
          stroke: token.defaultColor
        }
      },
      [\`\${progressCls}-success-bg, \${progressCls}-bg\`]: {
        position: 'relative',
        background: token.defaultColor,
        borderRadius: token.lineBorderRadius,
        transition: \`all \${token.motionDurationSlow} \${token.motionEaseInOutCirc}\`
      },
      [\`\${progressCls}-layout-bottom\`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [\`\${progressCls}-text\`]: {
          width: 'max-content',
          marginInlineStart: 0,
          marginTop: token.marginXXS
        }
      },
      [\`\${progressCls}-bg\`]: {
        overflow: 'hidden',
        '&::after': {
          content: '""',
          background: {
            _multi_value_: true,
            value: ['inherit', \`var(\${LineStrokeColorVar})\`]
          },
          height: '100%',
          width: \`calc(1 / var(\${Percent}) * 100%)\`,
          display: 'block'
        },
        [\`&\${progressCls}-bg-inner\`]: {
          minWidth: 'max-content',
          '&::after': {
            content: 'none'
          },
          [\`\${progressCls}-text-inner\`]: {
            color: token.colorWhite,
            [\`&\${progressCls}-text-bright\`]: {
              color: 'rgba(0, 0, 0, 0.45)'
            }
          }
        }
      },
      [\`\${progressCls}-success-bg\`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: token.colorSuccess
      },
      [\`\${progressCls}-text\`]: {
        display: 'inline-block',
        marginInlineStart: token.marginXS,
        color: token.colorText,
        lineHeight: 1,
        width: '2em',
        whiteSpace: 'nowrap',
        textAlign: 'start',
        verticalAlign: 'middle',
        wordBreak: 'normal',
        [iconPrefixCls]: {
          fontSize: token.fontSize
        },
        [\`&\${progressCls}-text-outer\`]: {
          width: 'max-content'
        },
        [\`&\${progressCls}-text-outer\${progressCls}-text-start\`]: {
          width: 'max-content',
          marginInlineStart: 0,
          marginInlineEnd: token.marginXS
        }
      },
      [\`\${progressCls}-text-inner\`]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginInlineStart: 0,
        padding: \`0 \${(0,cssinjs_es/* unit */.bf)(token.paddingXXS)}\`,
        [\`&\${progressCls}-text-start\`]: {
          justifyContent: 'start'
        },
        [\`&\${progressCls}-text-end\`]: {
          justifyContent: 'end'
        }
      },
      [\`&\${progressCls}-status-active\`]: {
        [\`\${progressCls}-bg::before\`]: {
          position: 'absolute',
          inset: 0,
          backgroundColor: token.colorBgContainer,
          borderRadius: token.lineBorderRadius,
          opacity: 0,
          animationName: genAntProgressActive(),
          animationDuration: token.progressActiveMotionDuration,
          animationTimingFunction: token.motionEaseOutQuint,
          animationIterationCount: 'infinite',
          content: '""'
        }
      },
      [\`&\${progressCls}-rtl\${progressCls}-status-active\`]: {
        [\`\${progressCls}-bg::before\`]: {
          animationName: genAntProgressActive(true)
        }
      },
      [\`&\${progressCls}-status-exception\`]: {
        [\`\${progressCls}-bg\`]: {
          backgroundColor: token.colorError
        },
        [\`\${progressCls}-text\`]: {
          color: token.colorError
        }
      },
      [\`&\${progressCls}-status-exception \${progressCls}-inner:not(\${progressCls}-circle-gradient)\`]: {
        [\`\${progressCls}-circle-path\`]: {
          stroke: token.colorError
        }
      },
      [\`&\${progressCls}-status-success\`]: {
        [\`\${progressCls}-bg\`]: {
          backgroundColor: token.colorSuccess
        },
        [\`\${progressCls}-text\`]: {
          color: token.colorSuccess
        }
      },
      [\`&\${progressCls}-status-success \${progressCls}-inner:not(\${progressCls}-circle-gradient)\`]: {
        [\`\${progressCls}-circle-path\`]: {
          stroke: token.colorSuccess
        }
      }
    })
  };
};
const genCircleStyle = token => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: {
      [\`\${progressCls}-circle-trail\`]: {
        stroke: token.remainingColor
      },
      [\`&\${progressCls}-circle \${progressCls}-inner\`]: {
        position: 'relative',
        lineHeight: 1,
        backgroundColor: 'transparent'
      },
      [\`&\${progressCls}-circle \${progressCls}-text\`]: {
        position: 'absolute',
        insetBlockStart: '50%',
        insetInlineStart: 0,
        width: '100%',
        margin: 0,
        padding: 0,
        color: token.circleTextColor,
        fontSize: token.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: 'normal',
        textAlign: 'center',
        transform: 'translateY(-50%)',
        [iconPrefixCls]: {
          fontSize: token.circleIconFontSize
        }
      },
      [\`\${progressCls}-circle&-status-exception\`]: {
        [\`\${progressCls}-text\`]: {
          color: token.colorError
        }
      },
      [\`\${progressCls}-circle&-status-success\`]: {
        [\`\${progressCls}-text\`]: {
          color: token.colorSuccess
        }
      }
    },
    [\`\${progressCls}-inline-circle\`]: {
      lineHeight: 1,
      [\`\${progressCls}-inner\`]: {
        verticalAlign: 'bottom'
      }
    }
  };
};
const genStepStyle = token => {
  const {
    componentCls: progressCls
  } = token;
  return {
    [progressCls]: {
      [\`\${progressCls}-steps\`]: {
        display: 'inline-block',
        '&-outer': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        },
        '&-item': {
          flexShrink: 0,
          minWidth: token.progressStepMinWidth,
          marginInlineEnd: token.progressStepMarginInlineEnd,
          backgroundColor: token.remainingColor,
          transition: \`all \${token.motionDurationSlow}\`,
          '&-active': {
            backgroundColor: token.defaultColor
          }
        }
      }
    }
  };
};
const genSmallLine = token => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: {
      [\`\${progressCls}-small&-line, \${progressCls}-small&-line \${progressCls}-text \${iconPrefixCls}\`]: {
        fontSize: token.fontSizeSM
      }
    }
  };
};
const prepareComponentToken = token => ({
  circleTextColor: token.colorText,
  defaultColor: token.colorInfo,
  remainingColor: token.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: '1em',
  circleIconFontSize: \`\${token.fontSize / token.fontSizeSM}em\`
});
/* harmony default export */ var progress_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Progress', token => {
  const progressStepMarginInlineEnd = token.calc(token.marginXXS).div(2).equal();
  const progressToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    progressStepMarginInlineEnd,
    progressStepMinWidth: progressStepMarginInlineEnd,
    progressActiveMotionDuration: '2.4s'
  });
  return [genBaseStyle(progressToken), genCircleStyle(progressToken), genStepStyle(progressToken), genSmallLine(progressToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Line.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */
const sortGradient = gradients => {
  let tempArr = [];
  Object.keys(gradients).forEach(key => {
    const formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!Number.isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(_ref => {
    let {
      key,
      value
    } = _ref;
    return \`\${value} \${key}%\`;
  }).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
const handleGradient = (strokeColor, directionConfig) => {
  const {
      from = colors_es/* presetPrimaryColors */.ez.blue,
      to = colors_es/* presetPrimaryColors */.ez.blue,
      direction = directionConfig === 'rtl' ? 'to left' : 'to right'
    } = strokeColor,
    rest = __rest(strokeColor, ["from", "to", "direction"]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest);
    const background = \`linear-gradient(\${direction}, \${sortedGradients})\`;
    return {
      background,
      [LineStrokeColorVar]: background
    };
  }
  const background = \`linear-gradient(\${direction}, \${from}, \${to})\`;
  return {
    background,
    [LineStrokeColorVar]: background
  };
};
const Line_Line = props => {
  const {
    prefixCls,
    direction: directionConfig,
    percent,
    size,
    strokeWidth,
    strokeColor,
    strokeLinecap = 'round',
    children,
    trailColor = null,
    percentPosition,
    success
  } = props;
  const {
    align: infoAlign,
    type: infoPosition
  } = percentPosition;
  const backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    [LineStrokeColorVar]: strokeColor,
    background: strokeColor
  };
  const borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
  const mergedSize = size !== null && size !== void 0 ? size : [-1, strokeWidth || (size === 'small' ? 6 : 8)];
  const [width, height] = getSize(mergedSize, 'line', {
    strokeWidth
  });
  if (false) {}
  const trailStyle = {
    backgroundColor: trailColor || undefined,
    borderRadius
  };
  const percentStyle = Object.assign(Object.assign({
    width: \`\${validProgress(percent)}%\`,
    height,
    borderRadius
  }, backgroundProps), {
    [Percent]: validProgress(percent) / 100
  });
  const successPercent = getSuccessPercent(props);
  const successPercentStyle = {
    width: \`\${validProgress(successPercent)}%\`,
    height,
    borderRadius,
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  const outerStyle = {
    width: width < 0 ? '100%' : width
  };
  const lineInner = /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-inner\`,
    style: trailStyle
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(\`\${prefixCls}-bg\`, \`\${prefixCls}-bg-\${infoPosition}\`),
    style: percentStyle
  }, infoPosition === 'inner' && children), successPercent !== undefined && (/*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-success-bg\`,
    style: successPercentStyle
  })));
  const isOuterStart = infoPosition === 'outer' && infoAlign === 'start';
  const isOuterEnd = infoPosition === 'outer' && infoAlign === 'end';
  return infoPosition === 'outer' && infoAlign === 'center' ? (/*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-layout-bottom\`
  }, lineInner, children)) : (/*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-outer\`,
    style: outerStyle
  }, isOuterStart && children, lineInner, isOuterEnd && children));
};
/* harmony default export */ var progress_Line = (Line_Line);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Steps.js
"use client";




const Steps = props => {
  const {
    size,
    steps,
    percent = 0,
    strokeWidth = 8,
    strokeColor,
    trailColor = null,
    prefixCls,
    children
  } = props;
  const current = Math.round(steps * (percent / 100));
  const stepWidth = size === 'small' ? 2 : 14;
  const mergedSize = size !== null && size !== void 0 ? size : [stepWidth, strokeWidth];
  const [width, height] = getSize(mergedSize, 'step', {
    steps,
    strokeWidth
  });
  const unitWidth = width / steps;
  const styledSteps = new Array(steps);
  for (let i = 0; i < steps; i++) {
    const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = /*#__PURE__*/react.createElement("div", {
      key: i,
      className: classnames_default()(\`\${prefixCls}-steps-item\`, {
        [\`\${prefixCls}-steps-item-active\`]: i <= current - 1
      }),
      style: {
        backgroundColor: i <= current - 1 ? color : trailColor,
        width: unitWidth,
        height
      }
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-steps-outer\`
  }, styledSteps, children);
};
/* harmony default export */ var progress_Steps = (Steps);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/progress.js
"use client";

var progress_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















const ProgressTypes = (/* unused pure expression or super */ null && (['line', 'circle', 'dashboard']));
const ProgressStatuses = ['normal', 'exception', 'active', 'success'];
const Progress = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      steps,
      strokeColor,
      percent = 0,
      size = 'default',
      showInfo = true,
      type = 'line',
      status,
      format,
      style,
      percentPosition = {}
    } = props,
    restProps = progress_rest(props, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style", "percentPosition"]);
  const {
    align: infoAlign = 'end',
    type: infoPosition = 'outer'
  } = percentPosition;
  const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  const strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
  const strokeColorIsBright = react.useMemo(() => {
    if (strokeColorNotArray) {
      const color = typeof strokeColorNotArray === 'string' ? strokeColorNotArray : Object.values(strokeColorNotArray)[0];
      return new dist_module/* TinyColor */.C(color).isLight();
    }
    return false;
  }, [strokeColor]);
  const percentNumber = react.useMemo(() => {
    var _a, _b;
    const successPercent = getSuccessPercent(props);
    return parseInt(successPercent !== undefined ? (_a = successPercent !== null && successPercent !== void 0 ? successPercent : 0) === null || _a === void 0 ? void 0 : _a.toString() : (_b = percent !== null && percent !== void 0 ? percent : 0) === null || _b === void 0 ? void 0 : _b.toString(), 10);
  }, [percent, props.success, props.successPercent]);
  const progressStatus = react.useMemo(() => {
    if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
      return 'success';
    }
    return status || 'normal';
  }, [status, percentNumber]);
  const {
    getPrefixCls,
    direction,
    progress: progressStyle
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('progress', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = progress_style(prefixCls);
  const isLineType = type === 'line';
  const isPureLineType = isLineType && !steps;
  const progressInfo = react.useMemo(() => {
    if (!showInfo) {
      return null;
    }
    const successPercent = getSuccessPercent(props);
    let text;
    const textFormatter = format || (number => \`\${number}%\`);
    const isBrightInnerColor = isLineType && strokeColorIsBright && infoPosition === 'inner';
    if (infoPosition === 'inner' || format || progressStatus !== 'exception' && progressStatus !== 'success') {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === 'exception') {
      text = isLineType ? /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
    } else if (progressStatus === 'success') {
      text = isLineType ? /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null) : /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null);
    }
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(\`\${prefixCls}-text\`, {
        [\`\${prefixCls}-text-bright\`]: isBrightInnerColor,
        [\`\${prefixCls}-text-\${infoAlign}\`]: isPureLineType,
        [\`\${prefixCls}-text-\${infoPosition}\`]: isPureLineType
      }),
      title: typeof text === 'string' ? text : undefined
    }, text);
  }, [showInfo, percent, percentNumber, progressStatus, type, prefixCls, format]);
  if (false) {}
  let progress;
  // Render progress shape
  if (type === 'line') {
    progress = steps ? (/*#__PURE__*/react.createElement(progress_Steps, Object.assign({}, props, {
      strokeColor: strokeColorNotGradient,
      prefixCls: prefixCls,
      steps: typeof steps === 'object' ? steps.count : steps
    }), progressInfo)) : (/*#__PURE__*/react.createElement(progress_Line, Object.assign({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      direction: direction,
      percentPosition: {
        align: infoAlign,
        type: infoPosition
      }
    }), progressInfo));
  } else if (type === 'circle' || type === 'dashboard') {
    progress = /*#__PURE__*/react.createElement(progress_Circle, Object.assign({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      progressStatus: progressStatus
    }), progressInfo);
  }
  const classString = classnames_default()(prefixCls, \`\${prefixCls}-status-\${progressStatus}\`, {
    [\`\${prefixCls}-\${type === 'dashboard' && 'circle' || type}\`]: type !== 'line',
    [\`\${prefixCls}-inline-circle\`]: type === 'circle' && getSize(size, 'circle')[0] <= 20,
    [\`\${prefixCls}-line\`]: isPureLineType,
    [\`\${prefixCls}-line-align-\${infoAlign}\`]: isPureLineType,
    [\`\${prefixCls}-line-position-\${infoPosition}\`]: isPureLineType,
    [\`\${prefixCls}-steps\`]: steps,
    [\`\${prefixCls}-show-info\`]: showInfo,
    [\`\${prefixCls}-\${size}\`]: typeof size === 'string',
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  }, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.className, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    ref: ref,
    style: Object.assign(Object.assign({}, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.style), style),
    className: classString,
    role: "progressbar",
    "aria-valuenow": percentNumber,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, (0,omit/* default */.Z)(restProps, ['trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent'])), progress));
});
if (false) {}
/* harmony default export */ var progress = (Progress);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/index.js
"use client";


/* harmony default export */ var es_progress = (progress);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxVQUFVO0FBQ2xCLEdBQUc7QUFDSCxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUUsdUJBQUk7QUFDVCxDQUFDO0FBQ0QsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsNkNBQWUsUUFBUSxFOztBQ25LdkI7O0FBRWtDO0FBQ2xDLGdEQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvY29tbW9uLmpzPzA1NWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXByb2dyZXNzL2VzL0xpbmUuanM/YmM3ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvaG9va3MvdXNlSWQuanM/YzEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvQ2lyY2xlL1B0Z0NpcmNsZS5qcz84NDI2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9DaXJjbGUvdXRpbC5qcz80ZmJjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9DaXJjbGUvaW5kZXguanM/ZmE2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvaW5kZXguanM/MWRkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wcm9ncmVzcy91dGlscy5qcz9hZjgzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL0NpcmNsZS5qcz80MTM0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL3N0eWxlL2luZGV4LmpzP2E1MmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcHJvZ3Jlc3MvTGluZS5qcz8wYmYwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL1N0ZXBzLmpzP2Y0ZDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuanM/YmRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wcm9ncmVzcy9pbmRleC5qcz9mZjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHBlcmNlbnQ6IDAsXG4gIHByZWZpeENsczogJ3JjLXByb2dyZXNzJyxcbiAgc3Ryb2tlQ29sb3I6ICcjMmRiN2Y1JyxcbiAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgc3Ryb2tlV2lkdGg6IDEsXG4gIHRyYWlsQ29sb3I6ICcjRDlEOUQ5JyxcbiAgdHJhaWxXaWR0aDogMSxcbiAgZ2FwUG9zaXRpb246ICdib3R0b20nXG59O1xuZXhwb3J0IHZhciB1c2VUcmFuc2l0aW9uRHVyYXRpb24gPSBmdW5jdGlvbiB1c2VUcmFuc2l0aW9uRHVyYXRpb24oKSB7XG4gIHZhciBwYXRoc1JlZiA9IHVzZVJlZihbXSk7XG4gIHZhciBwcmV2VGltZVN0YW1wID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XG4gICAgcGF0aHNSZWYuY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICB2YXIgcGF0aFN0eWxlID0gcGF0aC5zdHlsZTtcbiAgICAgIHBhdGhTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnLjNzLCAuM3MsIC4zcywgLjA2cyc7XG4gICAgICBpZiAocHJldlRpbWVTdGFtcC5jdXJyZW50ICYmIG5vdyAtIHByZXZUaW1lU3RhbXAuY3VycmVudCA8IDEwMCkge1xuICAgICAgICBwYXRoU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzLCAwcyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgIHByZXZUaW1lU3RhbXAuY3VycmVudCA9IERhdGUubm93KCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBhdGhzUmVmLmN1cnJlbnQ7XG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiY2xhc3NOYW1lXCIsIFwicGVyY2VudFwiLCBcInByZWZpeENsc1wiLCBcInN0cm9rZUNvbG9yXCIsIFwic3Ryb2tlTGluZWNhcFwiLCBcInN0cm9rZVdpZHRoXCIsIFwic3R5bGVcIiwgXCJ0cmFpbENvbG9yXCIsIFwidHJhaWxXaWR0aFwiLCBcInRyYW5zaXRpb25cIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZVRyYW5zaXRpb25EdXJhdGlvbiwgZGVmYXVsdFByb3BzIH0gZnJvbSBcIi4vY29tbW9uXCI7XG52YXIgTGluZSA9IGZ1bmN0aW9uIExpbmUocHJvcHMpIHtcbiAgdmFyIF9kZWZhdWx0UHJvcHMkcHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRQcm9wcyksIHByb3BzKSxcbiAgICBjbGFzc05hbWUgPSBfZGVmYXVsdFByb3BzJHByb3BzLmNsYXNzTmFtZSxcbiAgICBwZXJjZW50ID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5wZXJjZW50LFxuICAgIHByZWZpeENscyA9IF9kZWZhdWx0UHJvcHMkcHJvcHMucHJlZml4Q2xzLFxuICAgIHN0cm9rZUNvbG9yID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5zdHJva2VDb2xvcixcbiAgICBzdHJva2VMaW5lY2FwID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5zdHJva2VMaW5lY2FwLFxuICAgIHN0cm9rZVdpZHRoID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5zdHJva2VXaWR0aCxcbiAgICBzdHlsZSA9IF9kZWZhdWx0UHJvcHMkcHJvcHMuc3R5bGUsXG4gICAgdHJhaWxDb2xvciA9IF9kZWZhdWx0UHJvcHMkcHJvcHMudHJhaWxDb2xvcixcbiAgICB0cmFpbFdpZHRoID0gX2RlZmF1bHRQcm9wcyRwcm9wcy50cmFpbFdpZHRoLFxuICAgIHRyYW5zaXRpb24gPSBfZGVmYXVsdFByb3BzJHByb3BzLnRyYW5zaXRpb24sXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9kZWZhdWx0UHJvcHMkcHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGRlbGV0ZSByZXN0UHJvcHMuZ2FwUG9zaXRpb247XG4gIHZhciBwZXJjZW50TGlzdCA9IEFycmF5LmlzQXJyYXkocGVyY2VudCkgPyBwZXJjZW50IDogW3BlcmNlbnRdO1xuICB2YXIgc3Ryb2tlQ29sb3JMaXN0ID0gQXJyYXkuaXNBcnJheShzdHJva2VDb2xvcikgPyBzdHJva2VDb2xvciA6IFtzdHJva2VDb2xvcl07XG4gIHZhciBwYXRocyA9IHVzZVRyYW5zaXRpb25EdXJhdGlvbigpO1xuICB2YXIgY2VudGVyID0gc3Ryb2tlV2lkdGggLyAyO1xuICB2YXIgcmlnaHQgPSAxMDAgLSBzdHJva2VXaWR0aCAvIDI7XG4gIHZhciBwYXRoU3RyaW5nID0gXCJNIFwiLmNvbmNhdChzdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gY2VudGVyIDogMCwgXCIsXCIpLmNvbmNhdChjZW50ZXIsIFwiXFxuICAgICAgICAgTCBcIikuY29uY2F0KHN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyByaWdodCA6IDEwMCwgXCIsXCIpLmNvbmNhdChjZW50ZXIpO1xuICB2YXIgdmlld0JveFN0cmluZyA9IFwiMCAwIDEwMCBcIi5jb25jYXQoc3Ryb2tlV2lkdGgpO1xuICB2YXIgc3RhY2tQdGcgPSAwO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpbmVcIiksIGNsYXNzTmFtZSksXG4gICAgdmlld0JveDogdmlld0JveFN0cmluZyxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcIm5vbmVcIixcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgcmVzdFByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGluZS10cmFpbFwiKSxcbiAgICBkOiBwYXRoU3RyaW5nLFxuICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgc3Ryb2tlOiB0cmFpbENvbG9yLFxuICAgIHN0cm9rZVdpZHRoOiB0cmFpbFdpZHRoIHx8IHN0cm9rZVdpZHRoLFxuICAgIGZpbGxPcGFjaXR5OiBcIjBcIlxuICB9KSwgcGVyY2VudExpc3QubWFwKGZ1bmN0aW9uIChwdGcsIGluZGV4KSB7XG4gICAgdmFyIGRhc2hQZXJjZW50ID0gMTtcbiAgICBzd2l0Y2ggKHN0cm9rZUxpbmVjYXApIHtcbiAgICAgIGNhc2UgJ3JvdW5kJzpcbiAgICAgICAgZGFzaFBlcmNlbnQgPSAxIC0gc3Ryb2tlV2lkdGggLyAxMDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgZGFzaFBlcmNlbnQgPSAxIC0gc3Ryb2tlV2lkdGggLyAyIC8gMTAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRhc2hQZXJjZW50ID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBwYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IFwiXCIuY29uY2F0KHB0ZyAqIGRhc2hQZXJjZW50LCBcInB4LCAxMDBweFwiKSxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IFwiLVwiLmNvbmNhdChzdGFja1B0ZywgXCJweFwiKSxcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24gfHwgJ3N0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIDAuM3MgbGluZWFyJ1xuICAgIH07XG4gICAgdmFyIGNvbG9yID0gc3Ryb2tlQ29sb3JMaXN0W2luZGV4XSB8fCBzdHJva2VDb2xvckxpc3Rbc3Ryb2tlQ29sb3JMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIHN0YWNrUHRnICs9IHB0ZztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGluZS1wYXRoXCIpLFxuICAgICAgZDogcGF0aFN0cmluZyxcbiAgICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgICAgZmlsbE9wYWNpdHk6IFwiMFwiLFxuICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbSkge1xuICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI2NhbGxiYWNrLXJlZnNcbiAgICAgICAgLy8gUmVhY3Qgd2lsbCBjYWxsIHRoZSByZWYgY2FsbGJhY2sgd2l0aCB0aGUgRE9NIGVsZW1lbnQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyxcbiAgICAgICAgLy8gYW5kIGNhbGwgaXQgd2l0aCBgbnVsbGAgd2hlbiBpdCB1bm1vdW50cy5cbiAgICAgICAgLy8gUmVmcyBhcmUgZ3VhcmFudGVlZCB0byBiZSB1cC10by1kYXRlIGJlZm9yZSBjb21wb25lbnREaWRNb3VudCBvciBjb21wb25lbnREaWRVcGRhdGUgZmlyZXMuXG5cbiAgICAgICAgcGF0aHNbaW5kZXhdID0gZWxlbTtcbiAgICAgIH0sXG4gICAgICBzdHlsZTogcGF0aFN0eWxlXG4gICAgfSk7XG4gIH0pKTtcbn07XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBMaW5lLmRpc3BsYXlOYW1lID0gJ0xpbmUnO1xufVxuZXhwb3J0IGRlZmF1bHQgTGluZTsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NhblVzZURvbVwiO1xudmFyIHV1aWQgPSAwO1xuXG4vKiogSXMgY2xpZW50IHNpZGUgYW5kIG5vdCBqc2RvbSAqL1xuZXhwb3J0IHZhciBpc0Jyb3dzZXJDbGllbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIGNhblVzZURvbSgpO1xuXG4vKiogR2V0IHVuaXF1ZSBpZCBmb3IgYWNjZXNzaWJpbGl0eSB1c2FnZSAqL1xuZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgdmFyIHJldElkO1xuXG4gIC8vIFRlc3QgbmV2ZXIgcmVhY2hcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0Jyb3dzZXJDbGllbnQpIHtcbiAgICByZXRJZCA9IHV1aWQ7XG4gICAgdXVpZCArPSAxO1xuICB9IGVsc2Uge1xuICAgIHJldElkID0gJ1RFU1RfT1JfU1NSJztcbiAgfVxuICByZXR1cm4gcmV0SWQ7XG59XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGlkKSB7XG4gIC8vIElubmVyIGlkIGZvciBhY2Nlc3NpYmlsaXR5IHVzYWdlLiBPbmx5IHdvcmsgaW4gY2xpZW50IHNpZGVcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKCksXG4gICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgaW5uZXJJZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgc2V0SW5uZXJJZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW5uZXJJZChcInJjX3Byb2dyZXNzX1wiLmNvbmNhdChnZXRVVUlEKCkpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gaWQgfHwgaW5uZXJJZDtcbn0pOyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBCbG9jayA9IGZ1bmN0aW9uIEJsb2NrKF9yZWYpIHtcbiAgdmFyIGJnID0gX3JlZi5iZyxcbiAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6IGJnXG4gICAgfVxuICB9LCBjaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gZ2V0UHRnQ29sb3JzKGNvbG9yLCBzY2FsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29sb3IpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHBhcnNlZEtleSA9IHBhcnNlRmxvYXQoa2V5KTtcbiAgICB2YXIgcHRnS2V5ID0gXCJcIi5jb25jYXQoTWF0aC5mbG9vcihwYXJzZWRLZXkgKiBzY2FsZSksIFwiJVwiKTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoY29sb3Jba2V5XSwgXCIgXCIpLmNvbmNhdChwdGdLZXkpO1xuICB9KTtcbn1cbnZhciBQdGdDaXJjbGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgZ3JhZGllbnRJZCA9IHByb3BzLmdyYWRpZW50SWQsXG4gICAgcmFkaXVzID0gcHJvcHMucmFkaXVzLFxuICAgIGNpcmNsZVN0eWxlRm9yU3RhY2sgPSBwcm9wcy5zdHlsZSxcbiAgICBwdGcgPSBwcm9wcy5wdGcsXG4gICAgc3Ryb2tlTGluZWNhcCA9IHByb3BzLnN0cm9rZUxpbmVjYXAsXG4gICAgc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICBnYXBEZWdyZWUgPSBwcm9wcy5nYXBEZWdyZWU7XG4gIHZhciBpc0dyYWRpZW50ID0gY29sb3IgJiYgX3R5cGVvZihjb2xvcikgPT09ICdvYmplY3QnO1xuICB2YXIgc3Ryb2tlID0gaXNHcmFkaWVudCA/IFwiI0ZGRlwiIDogdW5kZWZpbmVkO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENpcmNsZSA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgaGFsZlNpemUgPSBzaXplIC8gMjtcbiAgdmFyIGNpcmNsZU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZS1wYXRoXCIpLFxuICAgIHI6IHJhZGl1cyxcbiAgICBjeDogaGFsZlNpemUsXG4gICAgY3k6IGhhbGZTaXplLFxuICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIG9wYWNpdHk6IHB0ZyA9PT0gMCA/IDAgOiAxLFxuICAgIHN0eWxlOiBjaXJjbGVTdHlsZUZvclN0YWNrLFxuICAgIHJlZjogcmVmXG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpZiAoIWlzR3JhZGllbnQpIHtcbiAgICByZXR1cm4gY2lyY2xlTm9kZTtcbiAgfVxuICB2YXIgbWFza0lkID0gXCJcIi5jb25jYXQoZ3JhZGllbnRJZCwgXCItY29uaWNcIik7XG4gIHZhciBmcm9tRGVnID0gZ2FwRGVncmVlID8gXCJcIi5jb25jYXQoMTgwICsgZ2FwRGVncmVlIC8gMiwgXCJkZWdcIikgOiAnMGRlZyc7XG4gIHZhciBjb25pY0NvbG9ycyA9IGdldFB0Z0NvbG9ycyhjb2xvciwgKDM2MCAtIGdhcERlZ3JlZSkgLyAzNjApO1xuICB2YXIgbGluZWFyQ29sb3JzID0gZ2V0UHRnQ29sb3JzKGNvbG9yLCAxKTtcbiAgdmFyIGNvbmljQ29sb3JCZyA9IFwiY29uaWMtZ3JhZGllbnQoZnJvbSBcIi5jb25jYXQoZnJvbURlZywgXCIsIFwiKS5jb25jYXQoY29uaWNDb2xvcnMuam9pbignLCAnKSwgXCIpXCIpO1xuICB2YXIgbGluZWFyQ29sb3JCZyA9IFwibGluZWFyLWdyYWRpZW50KHRvIFwiLmNvbmNhdChnYXBEZWdyZWUgPyAnYm90dG9tJyA6ICd0b3AnLCBcIiwgXCIpLmNvbmNhdChsaW5lYXJDb2xvcnMuam9pbignLCAnKSwgXCIpXCIpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWFza1wiLCB7XG4gICAgaWQ6IG1hc2tJZFxuICB9LCBjaXJjbGVOb2RlKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JlaWduT2JqZWN0XCIsIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtcbiAgICBiZzogbGluZWFyQ29sb3JCZ1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywge1xuICAgIGJnOiBjb25pY0NvbG9yQmdcbiAgfSkpKSk7XG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFB0Z0NpcmNsZS5kaXNwbGF5TmFtZSA9ICdQdGdDaXJjbGUnO1xufVxuZXhwb3J0IGRlZmF1bHQgUHRnQ2lyY2xlOyIsImV4cG9ydCB2YXIgVklFV19CT1hfU0laRSA9IDEwMDtcbmV4cG9ydCB2YXIgZ2V0Q2lyY2xlU3R5bGUgPSBmdW5jdGlvbiBnZXRDaXJjbGVTdHlsZShwZXJpbWV0ZXIsIHBlcmltZXRlcldpdGhvdXRHYXAsIG9mZnNldCwgcGVyY2VudCwgcm90YXRlRGVnLCBnYXBEZWdyZWUsIGdhcFBvc2l0aW9uLCBzdHJva2VDb2xvciwgc3Ryb2tlTGluZWNhcCwgc3Ryb2tlV2lkdGgpIHtcbiAgdmFyIHN0ZXBTcGFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxMCAmJiBhcmd1bWVudHNbMTBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMTBdIDogMDtcbiAgdmFyIG9mZnNldERlZyA9IG9mZnNldCAvIDEwMCAqIDM2MCAqICgoMzYwIC0gZ2FwRGVncmVlKSAvIDM2MCk7XG4gIHZhciBwb3NpdGlvbkRlZyA9IGdhcERlZ3JlZSA9PT0gMCA/IDAgOiB7XG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogMTgwLFxuICAgIGxlZnQ6IDkwLFxuICAgIHJpZ2h0OiAtOTBcbiAgfVtnYXBQb3NpdGlvbl07XG4gIHZhciBzdHJva2VEYXNob2Zmc2V0ID0gKDEwMCAtIHBlcmNlbnQpIC8gMTAwICogcGVyaW1ldGVyV2l0aG91dEdhcDtcbiAgLy8gRml4IHBlcmNlbnQgYWNjdXJhY3kgd2hlbiBzdHJva2VMaW5lY2FwIGlzIHJvdW5kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzM1MDA5XG4gIGlmIChzdHJva2VMaW5lY2FwID09PSAncm91bmQnICYmIHBlcmNlbnQgIT09IDEwMCkge1xuICAgIHN0cm9rZURhc2hvZmZzZXQgKz0gc3Ryb2tlV2lkdGggLyAyO1xuICAgIC8vIHdoZW4gcGVyY2VudCBpcyBzbWFsbCBlbm91Z2ggKDw9IDElKSwga2VlcCBzbWFsbGVzdCB2YWx1ZSB0byBhdm9pZCBpdCdzIGRpc2FwcGVhcmFuY2VcbiAgICBpZiAoc3Ryb2tlRGFzaG9mZnNldCA+PSBwZXJpbWV0ZXJXaXRob3V0R2FwKSB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0ID0gcGVyaW1ldGVyV2l0aG91dEdhcCAtIDAuMDE7XG4gICAgfVxuICB9XG4gIHZhciBoYWxmU2l6ZSA9IFZJRVdfQk9YX1NJWkUgLyAyO1xuICByZXR1cm4ge1xuICAgIHN0cm9rZTogdHlwZW9mIHN0cm9rZUNvbG9yID09PSAnc3RyaW5nJyA/IHN0cm9rZUNvbG9yIDogdW5kZWZpbmVkLFxuICAgIHN0cm9rZURhc2hhcnJheTogXCJcIi5jb25jYXQocGVyaW1ldGVyV2l0aG91dEdhcCwgXCJweCBcIikuY29uY2F0KHBlcmltZXRlciksXG4gICAgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlRGFzaG9mZnNldCArIHN0ZXBTcGFjZSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGVEZWcgKyBvZmZzZXREZWcgKyBwb3NpdGlvbkRlZywgXCJkZWcpXCIpLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJcIi5jb25jYXQoaGFsZlNpemUsIFwicHggXCIpLmNvbmNhdChoYWxmU2l6ZSwgXCJweFwiKSxcbiAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzLCBvcGFjaXR5IC4zcyBlYXNlIDBzJyxcbiAgICBmaWxsT3BhY2l0eTogMFxuICB9O1xufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcImlkXCIsIFwicHJlZml4Q2xzXCIsIFwic3RlcHNcIiwgXCJzdHJva2VXaWR0aFwiLCBcInRyYWlsV2lkdGhcIiwgXCJnYXBEZWdyZWVcIiwgXCJnYXBQb3NpdGlvblwiLCBcInRyYWlsQ29sb3JcIiwgXCJzdHJva2VMaW5lY2FwXCIsIFwic3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHJva2VDb2xvclwiLCBcInBlcmNlbnRcIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGRlZmF1bHRQcm9wcywgdXNlVHJhbnNpdGlvbkR1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xuaW1wb3J0IHVzZUlkIGZyb20gXCIuLi9ob29rcy91c2VJZFwiO1xuaW1wb3J0IFB0Z0NpcmNsZSBmcm9tIFwiLi9QdGdDaXJjbGVcIjtcbmltcG9ydCB7IFZJRVdfQk9YX1NJWkUsIGdldENpcmNsZVN0eWxlIH0gZnJvbSBcIi4vdXRpbFwiO1xuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICB2YXIgbWVyZ2VkVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiBbXTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWVyZ2VkVmFsdWUpID8gbWVyZ2VkVmFsdWUgOiBbbWVyZ2VkVmFsdWVdO1xufVxudmFyIENpcmNsZSA9IGZ1bmN0aW9uIENpcmNsZShwcm9wcykge1xuICB2YXIgX2RlZmF1bHRQcm9wcyRwcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFByb3BzKSwgcHJvcHMpLFxuICAgIGlkID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5pZCxcbiAgICBwcmVmaXhDbHMgPSBfZGVmYXVsdFByb3BzJHByb3BzLnByZWZpeENscyxcbiAgICBzdGVwcyA9IF9kZWZhdWx0UHJvcHMkcHJvcHMuc3RlcHMsXG4gICAgc3Ryb2tlV2lkdGggPSBfZGVmYXVsdFByb3BzJHByb3BzLnN0cm9rZVdpZHRoLFxuICAgIHRyYWlsV2lkdGggPSBfZGVmYXVsdFByb3BzJHByb3BzLnRyYWlsV2lkdGgsXG4gICAgX2RlZmF1bHRQcm9wcyRwcm9wcyRnID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5nYXBEZWdyZWUsXG4gICAgZ2FwRGVncmVlID0gX2RlZmF1bHRQcm9wcyRwcm9wcyRnID09PSB2b2lkIDAgPyAwIDogX2RlZmF1bHRQcm9wcyRwcm9wcyRnLFxuICAgIGdhcFBvc2l0aW9uID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5nYXBQb3NpdGlvbixcbiAgICB0cmFpbENvbG9yID0gX2RlZmF1bHRQcm9wcyRwcm9wcy50cmFpbENvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXAgPSBfZGVmYXVsdFByb3BzJHByb3BzLnN0cm9rZUxpbmVjYXAsXG4gICAgc3R5bGUgPSBfZGVmYXVsdFByb3BzJHByb3BzLnN0eWxlLFxuICAgIGNsYXNzTmFtZSA9IF9kZWZhdWx0UHJvcHMkcHJvcHMuY2xhc3NOYW1lLFxuICAgIHN0cm9rZUNvbG9yID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5zdHJva2VDb2xvcixcbiAgICBwZXJjZW50ID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5wZXJjZW50LFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfZGVmYXVsdFByb3BzJHByb3BzLCBfZXhjbHVkZWQpO1xuICB2YXIgaGFsZlNpemUgPSBWSUVXX0JPWF9TSVpFIC8gMjtcbiAgdmFyIG1lcmdlZElkID0gdXNlSWQoaWQpO1xuICB2YXIgZ3JhZGllbnRJZCA9IFwiXCIuY29uY2F0KG1lcmdlZElkLCBcIi1ncmFkaWVudFwiKTtcbiAgdmFyIHJhZGl1cyA9IGhhbGZTaXplIC0gc3Ryb2tlV2lkdGggLyAyO1xuICB2YXIgcGVyaW1ldGVyID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gIHZhciByb3RhdGVEZWcgPSBnYXBEZWdyZWUgPiAwID8gOTAgKyBnYXBEZWdyZWUgLyAyIDogLTkwO1xuICB2YXIgcGVyaW1ldGVyV2l0aG91dEdhcCA9IHBlcmltZXRlciAqICgoMzYwIC0gZ2FwRGVncmVlKSAvIDM2MCk7XG4gIHZhciBfcmVmID0gX3R5cGVvZihzdGVwcykgPT09ICdvYmplY3QnID8gc3RlcHMgOiB7XG4gICAgICBjb3VudDogc3RlcHMsXG4gICAgICBnYXA6IDJcbiAgICB9LFxuICAgIHN0ZXBDb3VudCA9IF9yZWYuY291bnQsXG4gICAgc3RlcEdhcCA9IF9yZWYuZ2FwO1xuICB2YXIgcGVyY2VudExpc3QgPSB0b0FycmF5KHBlcmNlbnQpO1xuICB2YXIgc3Ryb2tlQ29sb3JMaXN0ID0gdG9BcnJheShzdHJva2VDb2xvcik7XG4gIHZhciBncmFkaWVudCA9IHN0cm9rZUNvbG9yTGlzdC5maW5kKGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiBjb2xvciAmJiBfdHlwZW9mKGNvbG9yKSA9PT0gJ29iamVjdCc7XG4gIH0pO1xuICB2YXIgaXNDb25pY0dyYWRpZW50ID0gZ3JhZGllbnQgJiYgX3R5cGVvZihncmFkaWVudCkgPT09ICdvYmplY3QnO1xuICB2YXIgbWVyZ2VkU3Ryb2tlTGluZWNhcCA9IGlzQ29uaWNHcmFkaWVudCA/ICdidXR0JyA6IHN0cm9rZUxpbmVjYXA7XG4gIHZhciBjaXJjbGVTdHlsZSA9IGdldENpcmNsZVN0eWxlKHBlcmltZXRlciwgcGVyaW1ldGVyV2l0aG91dEdhcCwgMCwgMTAwLCByb3RhdGVEZWcsIGdhcERlZ3JlZSwgZ2FwUG9zaXRpb24sIHRyYWlsQ29sb3IsIG1lcmdlZFN0cm9rZUxpbmVjYXAsIHN0cm9rZVdpZHRoKTtcbiAgdmFyIHBhdGhzID0gdXNlVHJhbnNpdGlvbkR1cmF0aW9uKCk7XG4gIHZhciBnZXRTdG9rZUxpc3QgPSBmdW5jdGlvbiBnZXRTdG9rZUxpc3QoKSB7XG4gICAgdmFyIHN0YWNrUHRnID0gMDtcbiAgICByZXR1cm4gcGVyY2VudExpc3QubWFwKGZ1bmN0aW9uIChwdGcsIGluZGV4KSB7XG4gICAgICB2YXIgY29sb3IgPSBzdHJva2VDb2xvckxpc3RbaW5kZXhdIHx8IHN0cm9rZUNvbG9yTGlzdFtzdHJva2VDb2xvckxpc3QubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgY2lyY2xlU3R5bGVGb3JTdGFjayA9IGdldENpcmNsZVN0eWxlKHBlcmltZXRlciwgcGVyaW1ldGVyV2l0aG91dEdhcCwgc3RhY2tQdGcsIHB0Zywgcm90YXRlRGVnLCBnYXBEZWdyZWUsIGdhcFBvc2l0aW9uLCBjb2xvciwgbWVyZ2VkU3Ryb2tlTGluZWNhcCwgc3Ryb2tlV2lkdGgpO1xuICAgICAgc3RhY2tQdGcgKz0gcHRnO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFB0Z0NpcmNsZSwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHB0ZzogcHRnLFxuICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGdyYWRpZW50SWQ6IGdyYWRpZW50SWQsXG4gICAgICAgIHN0eWxlOiBjaXJjbGVTdHlsZUZvclN0YWNrLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiBtZXJnZWRTdHJva2VMaW5lY2FwLFxuICAgICAgICBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsXG4gICAgICAgIGdhcERlZ3JlZTogZ2FwRGVncmVlLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbGVtKSB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjYWxsYmFjay1yZWZzXG4gICAgICAgICAgLy8gUmVhY3Qgd2lsbCBjYWxsIHRoZSByZWYgY2FsbGJhY2sgd2l0aCB0aGUgRE9NIGVsZW1lbnQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyxcbiAgICAgICAgICAvLyBhbmQgY2FsbCBpdCB3aXRoIGBudWxsYCB3aGVuIGl0IHVubW91bnRzLlxuICAgICAgICAgIC8vIFJlZnMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgdXAtdG8tZGF0ZSBiZWZvcmUgY29tcG9uZW50RGlkTW91bnQgb3IgY29tcG9uZW50RGlkVXBkYXRlIGZpcmVzLlxuXG4gICAgICAgICAgcGF0aHNbaW5kZXhdID0gZWxlbTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogVklFV19CT1hfU0laRVxuICAgICAgfSk7XG4gICAgfSkucmV2ZXJzZSgpO1xuICB9O1xuICB2YXIgZ2V0U3RlcFN0b2tlTGlzdCA9IGZ1bmN0aW9uIGdldFN0ZXBTdG9rZUxpc3QoKSB7XG4gICAgLy8gb25seSBzaG93IHRoZSBmaXJzdCBwZXJjZW50IHdoZW4gcGFzcyBzdGVwc1xuICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChzdGVwQ291bnQgKiAocGVyY2VudExpc3RbMF0gLyAxMDApKTtcbiAgICB2YXIgc3RlcFB0ZyA9IDEwMCAvIHN0ZXBDb3VudDtcbiAgICB2YXIgc3RhY2tQdGcgPSAwO1xuICAgIHJldHVybiBuZXcgQXJyYXkoc3RlcENvdW50KS5maWxsKG51bGwpLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHZhciBjb2xvciA9IGluZGV4IDw9IGN1cnJlbnQgLSAxID8gc3Ryb2tlQ29sb3JMaXN0WzBdIDogdHJhaWxDb2xvcjtcbiAgICAgIHZhciBzdHJva2UgPSBjb2xvciAmJiBfdHlwZW9mKGNvbG9yKSA9PT0gJ29iamVjdCcgPyBcInVybCgjXCIuY29uY2F0KGdyYWRpZW50SWQsIFwiKVwiKSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBjaXJjbGVTdHlsZUZvclN0YWNrID0gZ2V0Q2lyY2xlU3R5bGUocGVyaW1ldGVyLCBwZXJpbWV0ZXJXaXRob3V0R2FwLCBzdGFja1B0Zywgc3RlcFB0Zywgcm90YXRlRGVnLCBnYXBEZWdyZWUsIGdhcFBvc2l0aW9uLCBjb2xvciwgJ2J1dHQnLCBzdHJva2VXaWR0aCwgc3RlcEdhcCk7XG4gICAgICBzdGFja1B0ZyArPSAocGVyaW1ldGVyV2l0aG91dEdhcCAtIGNpcmNsZVN0eWxlRm9yU3RhY2suc3Ryb2tlRGFzaG9mZnNldCArIHN0ZXBHYXApICogMTAwIC8gcGVyaW1ldGVyV2l0aG91dEdhcDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaXJjbGUtcGF0aFwiKSxcbiAgICAgICAgcjogcmFkaXVzLFxuICAgICAgICBjeDogaGFsZlNpemUsXG4gICAgICAgIGN5OiBoYWxmU2l6ZSxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc3R5bGU6IGNpcmNsZVN0eWxlRm9yU3RhY2ssXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW0pIHtcbiAgICAgICAgICBwYXRoc1tpbmRleF0gPSBlbGVtO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaXJjbGVcIiksIGNsYXNzTmFtZSksXG4gICAgdmlld0JveDogXCIwIDAgXCIuY29uY2F0KFZJRVdfQk9YX1NJWkUsIFwiIFwiKS5jb25jYXQoVklFV19CT1hfU0laRSksXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGlkOiBpZCxcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiXG4gIH0sIHJlc3RQcm9wcyksICFzdGVwQ291bnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaXJjbGUtdHJhaWxcIiksXG4gICAgcjogcmFkaXVzLFxuICAgIGN4OiBoYWxmU2l6ZSxcbiAgICBjeTogaGFsZlNpemUsXG4gICAgc3Ryb2tlOiB0cmFpbENvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IG1lcmdlZFN0cm9rZUxpbmVjYXAsXG4gICAgc3Ryb2tlV2lkdGg6IHRyYWlsV2lkdGggfHwgc3Ryb2tlV2lkdGgsXG4gICAgc3R5bGU6IGNpcmNsZVN0eWxlXG4gIH0pLCBzdGVwQ291bnQgPyBnZXRTdGVwU3Rva2VMaXN0KCkgOiBnZXRTdG9rZUxpc3QoKSk7XG59O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQ2lyY2xlLmRpc3BsYXlOYW1lID0gJ0NpcmNsZSc7XG59XG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7IiwiaW1wb3J0IExpbmUgZnJvbSBcIi4vTGluZVwiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcbmV4cG9ydCB7IExpbmUsIENpcmNsZSB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICBMaW5lOiBMaW5lLFxuICBDaXJjbGU6IENpcmNsZVxufTsiLCJpbXBvcnQgeyBwcmVzZXRQcmltYXJ5Q29sb3JzIH0gZnJvbSAnQGFudC1kZXNpZ24vY29sb3JzJztcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZFByb2dyZXNzKHByb2dyZXNzKSB7XG4gIGlmICghcHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPCAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKHByb2dyZXNzID4gMTAwKSB7XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxuICByZXR1cm4gcHJvZ3Jlc3M7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VjY2Vzc1BlcmNlbnQoX3JlZikge1xuICBsZXQge1xuICAgIHN1Y2Nlc3MsXG4gICAgc3VjY2Vzc1BlcmNlbnRcbiAgfSA9IF9yZWY7XG4gIGxldCBwZXJjZW50ID0gc3VjY2Vzc1BlcmNlbnQ7XG4gIC8qKiBAZGVwcmVjYXRlZCBVc2UgYHBlcmNlbnRgIGluc3RlYWQgKi9cbiAgaWYgKHN1Y2Nlc3MgJiYgJ3Byb2dyZXNzJyBpbiBzdWNjZXNzKSB7XG4gICAgcGVyY2VudCA9IHN1Y2Nlc3MucHJvZ3Jlc3M7XG4gIH1cbiAgaWYgKHN1Y2Nlc3MgJiYgJ3BlcmNlbnQnIGluIHN1Y2Nlc3MpIHtcbiAgICBwZXJjZW50ID0gc3VjY2Vzcy5wZXJjZW50O1xuICB9XG4gIHJldHVybiBwZXJjZW50O1xufVxuZXhwb3J0IGNvbnN0IGdldFBlcmNlbnRhZ2UgPSBfcmVmMiA9PiB7XG4gIGxldCB7XG4gICAgcGVyY2VudCxcbiAgICBzdWNjZXNzLFxuICAgIHN1Y2Nlc3NQZXJjZW50XG4gIH0gPSBfcmVmMjtcbiAgY29uc3QgcmVhbFN1Y2Nlc3NQZXJjZW50ID0gdmFsaWRQcm9ncmVzcyhnZXRTdWNjZXNzUGVyY2VudCh7XG4gICAgc3VjY2VzcyxcbiAgICBzdWNjZXNzUGVyY2VudFxuICB9KSk7XG4gIHJldHVybiBbcmVhbFN1Y2Nlc3NQZXJjZW50LCB2YWxpZFByb2dyZXNzKHZhbGlkUHJvZ3Jlc3MocGVyY2VudCkgLSByZWFsU3VjY2Vzc1BlcmNlbnQpXTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3Ryb2tlQ29sb3IgPSBfcmVmMyA9PiB7XG4gIGxldCB7XG4gICAgc3VjY2VzcyA9IHt9LFxuICAgIHN0cm9rZUNvbG9yXG4gIH0gPSBfcmVmMztcbiAgY29uc3Qge1xuICAgIHN0cm9rZUNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgfSA9IHN1Y2Nlc3M7XG4gIHJldHVybiBbc3VjY2Vzc0NvbG9yIHx8IHByZXNldFByaW1hcnlDb2xvcnMuZ3JlZW4sIHN0cm9rZUNvbG9yIHx8IG51bGxdO1xufTtcbmV4cG9ydCBjb25zdCBnZXRTaXplID0gKHNpemUsIHR5cGUsIGV4dHJhKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgbGV0IHdpZHRoID0gLTE7XG4gIGxldCBoZWlnaHQgPSAtMTtcbiAgaWYgKHR5cGUgPT09ICdzdGVwJykge1xuICAgIGNvbnN0IHN0ZXBzID0gZXh0cmEuc3RlcHM7XG4gICAgY29uc3Qgc3Ryb2tlV2lkdGggPSBleHRyYS5zdHJva2VXaWR0aDtcbiAgICBpZiAodHlwZW9mIHNpemUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzaXplID09PSAndW5kZWZpbmVkJykge1xuICAgICAgd2lkdGggPSBzaXplID09PSAnc21hbGwnID8gMiA6IDE0O1xuICAgICAgaGVpZ2h0ID0gc3Ryb2tlV2lkdGggIT09IG51bGwgJiYgc3Ryb2tlV2lkdGggIT09IHZvaWQgMCA/IHN0cm9rZVdpZHRoIDogODtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgW3dpZHRoLCBoZWlnaHRdID0gW3NpemUsIHNpemVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbd2lkdGggPSAxNCwgaGVpZ2h0ID0gOF0gPSBBcnJheS5pc0FycmF5KHNpemUpID8gc2l6ZSA6IFtzaXplLndpZHRoLCBzaXplLmhlaWdodF07XG4gICAgfVxuICAgIHdpZHRoICo9IHN0ZXBzO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgIGNvbnN0IHN0cm9rZVdpZHRoID0gZXh0cmEgPT09IG51bGwgfHwgZXh0cmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV4dHJhLnN0cm9rZVdpZHRoO1xuICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoZWlnaHQgPSBzdHJva2VXaWR0aCB8fCAoc2l6ZSA9PT0gJ3NtYWxsJyA/IDYgOiA4KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgW3dpZHRoLCBoZWlnaHRdID0gW3NpemUsIHNpemVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbd2lkdGggPSAtMSwgaGVpZ2h0ID0gOF0gPSBBcnJheS5pc0FycmF5KHNpemUpID8gc2l6ZSA6IFtzaXplLndpZHRoLCBzaXplLmhlaWdodF07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaXJjbGUnIHx8IHR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgaWYgKHR5cGVvZiBzaXplID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIFt3aWR0aCwgaGVpZ2h0XSA9IHNpemUgPT09ICdzbWFsbCcgPyBbNjAsIDYwXSA6IFsxMjAsIDEyMF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIFt3aWR0aCwgaGVpZ2h0XSA9IFtzaXplLCBzaXplXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2l6ZSkpIHtcbiAgICAgIHdpZHRoID0gKF9iID0gKF9hID0gc2l6ZVswXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogc2l6ZVsxXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMTIwO1xuICAgICAgaGVpZ2h0ID0gKF9kID0gKF9jID0gc2l6ZVswXSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogc2l6ZVsxXSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMTIwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xufTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDaXJjbGUgYXMgUkNDaXJjbGUgfSBmcm9tICdyYy1wcm9ncmVzcyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi90b29sdGlwJztcbmltcG9ydCB7IGdldFBlcmNlbnRhZ2UsIGdldFNpemUsIGdldFN0cm9rZUNvbG9yIH0gZnJvbSAnLi91dGlscyc7XG5jb25zdCBDSVJDTEVfTUlOX1NUUk9LRV9XSURUSCA9IDM7XG5jb25zdCBnZXRNaW5QZXJjZW50ID0gd2lkdGggPT4gQ0lSQ0xFX01JTl9TVFJPS0VfV0lEVEggLyB3aWR0aCAqIDEwMDtcbmNvbnN0IENpcmNsZSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHByZWZpeENscyxcbiAgICB0cmFpbENvbG9yID0gbnVsbCxcbiAgICBzdHJva2VMaW5lY2FwID0gJ3JvdW5kJyxcbiAgICBnYXBQb3NpdGlvbixcbiAgICBnYXBEZWdyZWUsXG4gICAgd2lkdGg6IG9yaWdpbldpZHRoID0gMTIwLFxuICAgIHR5cGUsXG4gICAgY2hpbGRyZW4sXG4gICAgc3VjY2VzcyxcbiAgICBzaXplID0gb3JpZ2luV2lkdGgsXG4gICAgc3RlcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBnZXRTaXplKHNpemUsICdjaXJjbGUnKTtcbiAgbGV0IHtcbiAgICBzdHJva2VXaWR0aFxuICB9ID0gcHJvcHM7XG4gIGlmIChzdHJva2VXaWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3Ryb2tlV2lkdGggPSBNYXRoLm1heChnZXRNaW5QZXJjZW50KHdpZHRoKSwgNik7XG4gIH1cbiAgY29uc3QgY2lyY2xlU3R5bGUgPSB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGZvbnRTaXplOiB3aWR0aCAqIDAuMTUgKyA2XG4gIH07XG4gIGNvbnN0IHJlYWxHYXBEZWdyZWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAvLyBTdXBwb3J0IGdhcERlZyA9IDAgd2hlbiB0eXBlID0gJ2Rhc2hib2FyZCdcbiAgICBpZiAoZ2FwRGVncmVlIHx8IGdhcERlZ3JlZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGdhcERlZ3JlZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgICByZXR1cm4gNzU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtnYXBEZWdyZWUsIHR5cGVdKTtcbiAgY29uc3QgcGVyY2VudEFycmF5ID0gZ2V0UGVyY2VudGFnZShwcm9wcyk7XG4gIGNvbnN0IGdhcFBvcyA9IGdhcFBvc2l0aW9uIHx8IHR5cGUgPT09ICdkYXNoYm9hcmQnICYmICdib3R0b20nIHx8IHVuZGVmaW5lZDtcbiAgLy8gdXNpbmcgY2xhc3NOYW1lIHRvIHN0eWxlIHN0cm9rZSBjb2xvclxuICBjb25zdCBpc0dyYWRpZW50ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb3BzLnN0cm9rZUNvbG9yKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIGNvbnN0IHN0cm9rZUNvbG9yID0gZ2V0U3Ryb2tlQ29sb3Ioe1xuICAgIHN1Y2Nlc3MsXG4gICAgc3Ryb2tlQ29sb3I6IHByb3BzLnN0cm9rZUNvbG9yXG4gIH0pO1xuICBjb25zdCB3cmFwcGVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWlubmVyYCwge1xuICAgIFtgJHtwcmVmaXhDbHN9LWNpcmNsZS1ncmFkaWVudGBdOiBpc0dyYWRpZW50XG4gIH0pO1xuICBjb25zdCBjaXJjbGVDb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUkNDaXJjbGUsIHtcbiAgICBzdGVwczogc3RlcHMsXG4gICAgcGVyY2VudDogc3RlcHMgPyBwZXJjZW50QXJyYXlbMV0gOiBwZXJjZW50QXJyYXksXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIHRyYWlsV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIHN0cm9rZUNvbG9yOiBzdGVwcyA/IHN0cm9rZUNvbG9yWzFdIDogc3Ryb2tlQ29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogc3Ryb2tlTGluZWNhcCxcbiAgICB0cmFpbENvbG9yOiB0cmFpbENvbG9yLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGdhcERlZ3JlZTogcmVhbEdhcERlZ3JlZSxcbiAgICBnYXBQb3NpdGlvbjogZ2FwUG9zXG4gIH0pO1xuICBjb25zdCBzbWFsbENpcmNsZSA9IHdpZHRoIDw9IDIwO1xuICBjb25zdCBub2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICBzdHlsZTogY2lyY2xlU3R5bGVcbiAgfSwgY2lyY2xlQ29udGVudCwgIXNtYWxsQ2lyY2xlICYmIGNoaWxkcmVuKTtcbiAgaWYgKHNtYWxsQ2lyY2xlKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHtcbiAgICAgIHRpdGxlOiBjaGlsZHJlblxuICAgIH0sIG5vZGUpO1xuICB9XG4gIHJldHVybiBub2RlO1xufTtcbmV4cG9ydCBkZWZhdWx0IENpcmNsZTsiLCJpbXBvcnQgeyBLZXlmcmFtZXMsIHVuaXQgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3R5bGUnO1xuaW1wb3J0IHsgZ2VuU3R5bGVIb29rcywgbWVyZ2VUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lL2ludGVybmFsJztcbmV4cG9ydCBjb25zdCBMaW5lU3Ryb2tlQ29sb3JWYXIgPSAnLS1wcm9ncmVzcy1saW5lLXN0cm9rZS1jb2xvcic7XG5leHBvcnQgY29uc3QgUGVyY2VudCA9ICctLXByb2dyZXNzLXBlcmNlbnQnO1xuY29uc3QgZ2VuQW50UHJvZ3Jlc3NBY3RpdmUgPSBpc1J0bCA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGlzUnRsID8gJzEwMCUnIDogJy0xMDAlJztcbiAgcmV0dXJuIG5ldyBLZXlmcmFtZXMoYGFudFByb2dyZXNzJHtpc1J0bCA/ICdSVEwnIDogJ0xUUid9QWN0aXZlYCwge1xuICAgICcwJSc6IHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtkaXJlY3Rpb259KSBzY2FsZVgoMClgLFxuICAgICAgb3BhY2l0eTogMC4xXG4gICAgfSxcbiAgICAnMjAlJzoge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2RpcmVjdGlvbn0pIHNjYWxlWCgwKWAsXG4gICAgICBvcGFjaXR5OiAwLjVcbiAgICB9LFxuICAgIHRvOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApIHNjYWxlWCgxKScsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfVxuICB9KTtcbn07XG5jb25zdCBnZW5CYXNlU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHM6IHByb2dyZXNzQ2xzLFxuICAgIGljb25DbHM6IGljb25QcmVmaXhDbHNcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtwcm9ncmVzc0Nsc106IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAnJi1ydGwnOiB7XG4gICAgICAgIGRpcmVjdGlvbjogJ3J0bCdcbiAgICAgIH0sXG4gICAgICAnJi1saW5lJzoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplXG4gICAgICB9LFxuICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1vdXRlcmBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9LFxuICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1pbm5lcmBdOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5yZW1haW5pbmdDb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5saW5lQm9yZGVyUmFkaXVzXG4gICAgICB9LFxuICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1pbm5lcjpub3QoJHtwcm9ncmVzc0Nsc30tY2lyY2xlLWdyYWRpZW50KWBdOiB7XG4gICAgICAgIFtgJHtwcm9ncmVzc0Nsc30tY2lyY2xlLXBhdGhgXToge1xuICAgICAgICAgIHN0cm9rZTogdG9rZW4uZGVmYXVsdENvbG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7cHJvZ3Jlc3NDbHN9LXN1Y2Nlc3MtYmcsICR7cHJvZ3Jlc3NDbHN9LWJnYF06IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmQ6IHRva2VuLmRlZmF1bHRDb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5saW5lQm9yZGVyUmFkaXVzLFxuICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fSAke3Rva2VuLm1vdGlvbkVhc2VJbk91dENpcmN9YFxuICAgICAgfSxcbiAgICAgIFtgJHtwcm9ncmVzc0Nsc30tbGF5b3V0LWJvdHRvbWBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIFtgJHtwcm9ncmVzc0Nsc30tdGV4dGBdOiB7XG4gICAgICAgICAgd2lkdGg6ICdtYXgtY29udGVudCcsXG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YWFNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJHtwcm9ncmVzc0Nsc30tYmdgXToge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgX211bHRpX3ZhbHVlXzogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBbJ2luaGVyaXQnLCBgdmFyKCR7TGluZVN0cm9rZUNvbG9yVmFyfSlgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgd2lkdGg6IGBjYWxjKDEgLyB2YXIoJHtQZXJjZW50fSkgKiAxMDAlKWAsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9LFxuICAgICAgICBbYCYke3Byb2dyZXNzQ2xzfS1iZy1pbm5lcmBdOiB7XG4gICAgICAgICAgbWluV2lkdGg6ICdtYXgtY29udGVudCcsXG4gICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudDogJ25vbmUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCR7cHJvZ3Jlc3NDbHN9LXRleHQtaW5uZXJgXToge1xuICAgICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yV2hpdGUsXG4gICAgICAgICAgICBbYCYke3Byb2dyZXNzQ2xzfS10ZXh0LWJyaWdodGBdOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjQ1KSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7cHJvZ3Jlc3NDbHN9LXN1Y2Nlc3MtYmdgXToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaW5zZXRCbG9ja1N0YXJ0OiAwLFxuICAgICAgICBpbnNldElubGluZVN0YXJ0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yU3VjY2Vzc1xuICAgICAgfSxcbiAgICAgIFtgJHtwcm9ncmVzc0Nsc30tdGV4dGBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4ubWFyZ2luWFMsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHQsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAnMmVtJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIHRleHRBbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIHdvcmRCcmVhazogJ25vcm1hbCcsXG4gICAgICAgIFtpY29uUHJlZml4Q2xzXToge1xuICAgICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVxuICAgICAgICB9LFxuICAgICAgICBbYCYke3Byb2dyZXNzQ2xzfS10ZXh0LW91dGVyYF06IHtcbiAgICAgICAgICB3aWR0aDogJ21heC1jb250ZW50J1xuICAgICAgICB9LFxuICAgICAgICBbYCYke3Byb2dyZXNzQ2xzfS10ZXh0LW91dGVyJHtwcm9ncmVzc0Nsc30tdGV4dC1zdGFydGBdOiB7XG4gICAgICAgICAgd2lkdGg6ICdtYXgtY29udGVudCcsXG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgICAgbWFyZ2luSW5saW5lRW5kOiB0b2tlbi5tYXJnaW5YU1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2Ake3Byb2dyZXNzQ2xzfS10ZXh0LWlubmVyYF06IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgIHBhZGRpbmc6IGAwICR7dW5pdCh0b2tlbi5wYWRkaW5nWFhTKX1gLFxuICAgICAgICBbYCYke3Byb2dyZXNzQ2xzfS10ZXh0LXN0YXJ0YF06IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0J1xuICAgICAgICB9LFxuICAgICAgICBbYCYke3Byb2dyZXNzQ2xzfS10ZXh0LWVuZGBdOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdlbmQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke3Byb2dyZXNzQ2xzfS1zdGF0dXMtYWN0aXZlYF06IHtcbiAgICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1iZzo6YmVmb3JlYF06IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBpbnNldDogMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5saW5lQm9yZGVyUmFkaXVzLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgYW5pbWF0aW9uTmFtZTogZ2VuQW50UHJvZ3Jlc3NBY3RpdmUoKSxcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogdG9rZW4ucHJvZ3Jlc3NBY3RpdmVNb3Rpb25EdXJhdGlvbixcbiAgICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdG9rZW4ubW90aW9uRWFzZU91dFF1aW50LFxuICAgICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtwcm9ncmVzc0Nsc30tcnRsJHtwcm9ncmVzc0Nsc30tc3RhdHVzLWFjdGl2ZWBdOiB7XG4gICAgICAgIFtgJHtwcm9ncmVzc0Nsc30tYmc6OmJlZm9yZWBdOiB7XG4gICAgICAgICAgYW5pbWF0aW9uTmFtZTogZ2VuQW50UHJvZ3Jlc3NBY3RpdmUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJiR7cHJvZ3Jlc3NDbHN9LXN0YXR1cy1leGNlcHRpb25gXToge1xuICAgICAgICBbYCR7cHJvZ3Jlc3NDbHN9LWJnYF06IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake3Byb2dyZXNzQ2xzfS10ZXh0YF06IHtcbiAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JFcnJvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtwcm9ncmVzc0Nsc30tc3RhdHVzLWV4Y2VwdGlvbiAke3Byb2dyZXNzQ2xzfS1pbm5lcjpub3QoJHtwcm9ncmVzc0Nsc30tY2lyY2xlLWdyYWRpZW50KWBdOiB7XG4gICAgICAgIFtgJHtwcm9ncmVzc0Nsc30tY2lyY2xlLXBhdGhgXToge1xuICAgICAgICAgIHN0cm9rZTogdG9rZW4uY29sb3JFcnJvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtwcm9ncmVzc0Nsc30tc3RhdHVzLXN1Y2Nlc3NgXToge1xuICAgICAgICBbYCR7cHJvZ3Jlc3NDbHN9LWJnYF06IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yU3VjY2Vzc1xuICAgICAgICB9LFxuICAgICAgICBbYCR7cHJvZ3Jlc3NDbHN9LXRleHRgXToge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJiR7cHJvZ3Jlc3NDbHN9LXN0YXR1cy1zdWNjZXNzICR7cHJvZ3Jlc3NDbHN9LWlubmVyOm5vdCgke3Byb2dyZXNzQ2xzfS1jaXJjbGUtZ3JhZGllbnQpYF06IHtcbiAgICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1jaXJjbGUtcGF0aGBdOiB7XG4gICAgICAgICAgc3Ryb2tlOiB0b2tlbi5jb2xvclN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59O1xuY29uc3QgZ2VuQ2lyY2xlU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHM6IHByb2dyZXNzQ2xzLFxuICAgIGljb25DbHM6IGljb25QcmVmaXhDbHNcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtwcm9ncmVzc0Nsc106IHtcbiAgICAgIFtgJHtwcm9ncmVzc0Nsc30tY2lyY2xlLXRyYWlsYF06IHtcbiAgICAgICAgc3Ryb2tlOiB0b2tlbi5yZW1haW5pbmdDb2xvclxuICAgICAgfSxcbiAgICAgIFtgJiR7cHJvZ3Jlc3NDbHN9LWNpcmNsZSAke3Byb2dyZXNzQ2xzfS1pbm5lcmBdOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0sXG4gICAgICBbYCYke3Byb2dyZXNzQ2xzfS1jaXJjbGUgJHtwcm9ncmVzc0Nsc30tdGV4dGBdOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBpbnNldEJsb2NrU3RhcnQ6ICc1MCUnLFxuICAgICAgICBpbnNldElubGluZVN0YXJ0OiAwLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jaXJjbGVUZXh0Q29sb3IsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5jaXJjbGVUZXh0Rm9udFNpemUsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3JtYWwnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgW2ljb25QcmVmaXhDbHNdOiB7XG4gICAgICAgICAgZm9udFNpemU6IHRva2VuLmNpcmNsZUljb25Gb250U2l6ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1jaXJjbGUmLXN0YXR1cy1leGNlcHRpb25gXToge1xuICAgICAgICBbYCR7cHJvZ3Jlc3NDbHN9LXRleHRgXToge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvckVycm9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7cHJvZ3Jlc3NDbHN9LWNpcmNsZSYtc3RhdHVzLXN1Y2Nlc3NgXToge1xuICAgICAgICBbYCR7cHJvZ3Jlc3NDbHN9LXRleHRgXToge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2Ake3Byb2dyZXNzQ2xzfS1pbmxpbmUtY2lyY2xlYF06IHtcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBbYCR7cHJvZ3Jlc3NDbHN9LWlubmVyYF06IHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuY29uc3QgZ2VuU3RlcFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzOiBwcm9ncmVzc0Nsc1xuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW3Byb2dyZXNzQ2xzXToge1xuICAgICAgW2Ake3Byb2dyZXNzQ2xzfS1zdGVwc2BdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAnJi1vdXRlcic6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgICAgfSxcbiAgICAgICAgJyYtaXRlbSc6IHtcbiAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgIG1pbldpZHRoOiB0b2tlbi5wcm9ncmVzc1N0ZXBNaW5XaWR0aCxcbiAgICAgICAgICBtYXJnaW5JbmxpbmVFbmQ6IHRva2VuLnByb2dyZXNzU3RlcE1hcmdpbklubGluZUVuZCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLnJlbWFpbmluZ0NvbG9yLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9YCxcbiAgICAgICAgICAnJi1hY3RpdmUnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmRlZmF1bHRDb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5jb25zdCBnZW5TbWFsbExpbmUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHM6IHByb2dyZXNzQ2xzLFxuICAgIGljb25DbHM6IGljb25QcmVmaXhDbHNcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtwcm9ncmVzc0Nsc106IHtcbiAgICAgIFtgJHtwcm9ncmVzc0Nsc30tc21hbGwmLWxpbmUsICR7cHJvZ3Jlc3NDbHN9LXNtYWxsJi1saW5lICR7cHJvZ3Jlc3NDbHN9LXRleHQgJHtpY29uUHJlZml4Q2xzfWBdOiB7XG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBwcmVwYXJlQ29tcG9uZW50VG9rZW4gPSB0b2tlbiA9PiAoe1xuICBjaXJjbGVUZXh0Q29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgZGVmYXVsdENvbG9yOiB0b2tlbi5jb2xvckluZm8sXG4gIHJlbWFpbmluZ0NvbG9yOiB0b2tlbi5jb2xvckZpbGxTZWNvbmRhcnksXG4gIGxpbmVCb3JkZXJSYWRpdXM6IDEwMCxcbiAgLy8gbWFnaWMgZm9yIGNhcHN1bGUgc2hhcGUsIHNob3VsZCBiZSBhIHZlcnkgbGFyZ2UgbnVtYmVyXG4gIGNpcmNsZVRleHRGb250U2l6ZTogJzFlbScsXG4gIGNpcmNsZUljb25Gb250U2l6ZTogYCR7dG9rZW4uZm9udFNpemUgLyB0b2tlbi5mb250U2l6ZVNNfWVtYFxufSk7XG5leHBvcnQgZGVmYXVsdCBnZW5TdHlsZUhvb2tzKCdQcm9ncmVzcycsIHRva2VuID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwTWFyZ2luSW5saW5lRW5kID0gdG9rZW4uY2FsYyh0b2tlbi5tYXJnaW5YWFMpLmRpdigyKS5lcXVhbCgpO1xuICBjb25zdCBwcm9ncmVzc1Rva2VuID0gbWVyZ2VUb2tlbih0b2tlbiwge1xuICAgIHByb2dyZXNzU3RlcE1hcmdpbklubGluZUVuZCxcbiAgICBwcm9ncmVzc1N0ZXBNaW5XaWR0aDogcHJvZ3Jlc3NTdGVwTWFyZ2luSW5saW5lRW5kLFxuICAgIHByb2dyZXNzQWN0aXZlTW90aW9uRHVyYXRpb246ICcyLjRzJ1xuICB9KTtcbiAgcmV0dXJuIFtnZW5CYXNlU3R5bGUocHJvZ3Jlc3NUb2tlbiksIGdlbkNpcmNsZVN0eWxlKHByb2dyZXNzVG9rZW4pLCBnZW5TdGVwU3R5bGUocHJvZ3Jlc3NUb2tlbiksIGdlblNtYWxsTGluZShwcm9ncmVzc1Rva2VuKV07XG59LCBwcmVwYXJlQ29tcG9uZW50VG9rZW4pOyIsIlwidXNlIGNsaWVudFwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcHJlc2V0UHJpbWFyeUNvbG9ycyB9IGZyb20gJ0BhbnQtZGVzaWduL2NvbG9ycyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGRldlVzZVdhcm5pbmcgfSBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCB7IExpbmVTdHJva2VDb2xvclZhciwgUGVyY2VudCB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgZ2V0U2l6ZSwgZ2V0U3VjY2Vzc1BlcmNlbnQsIHZhbGlkUHJvZ3Jlc3MgfSBmcm9tICcuL3V0aWxzJztcbi8qKlxuICogQGV4YW1wbGVcbiAqICAge1xuICogICAgIFwiMCVcIjogXCIjYWZjMTYzXCIsXG4gKiAgICAgXCI3NSVcIjogXCIjMDA5OTAwXCIsXG4gKiAgICAgXCI1MCVcIjogXCJncmVlblwiLCAvLyA9PT09PiAnI2FmYzE2MyAwJSwgIzY2RkYwMCAyNSUsICMwMENDMDAgNTAlLCAjMDA5OTAwIDc1JSwgI2ZmZmZmZiAxMDAlJ1xuICogICAgIFwiMjUlXCI6IFwiIzY2RkYwMFwiLFxuICogICAgIFwiMTAwJVwiOiBcIiNmZmZmZmZcIlxuICogICB9XG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0R3JhZGllbnQgPSBncmFkaWVudHMgPT4ge1xuICBsZXQgdGVtcEFyciA9IFtdO1xuICBPYmplY3Qua2V5cyhncmFkaWVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWRLZXkgPSBwYXJzZUZsb2F0KGtleS5yZXBsYWNlKC8lL2csICcnKSk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4oZm9ybWF0dGVkS2V5KSkge1xuICAgICAgdGVtcEFyci5wdXNoKHtcbiAgICAgICAga2V5OiBmb3JtYXR0ZWRLZXksXG4gICAgICAgIHZhbHVlOiBncmFkaWVudHNba2V5XVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdGVtcEFyciA9IHRlbXBBcnIuc29ydCgoYSwgYikgPT4gYS5rZXkgLSBiLmtleSk7XG4gIHJldHVybiB0ZW1wQXJyLm1hcChfcmVmID0+IHtcbiAgICBsZXQge1xuICAgICAga2V5LFxuICAgICAgdmFsdWVcbiAgICB9ID0gX3JlZjtcbiAgICByZXR1cm4gYCR7dmFsdWV9ICR7a2V5fSVgO1xuICB9KS5qb2luKCcsICcpO1xufTtcbi8qKlxuICogVGhlbiB0aGlzIG1hbiBjYW1lIHRvIHJlYWxpemUgdGhlIHRydXRoOiBCZXNpZGVzIHNpeCBwZW5jZSwgdGhlcmUgaXMgdGhlIG1vb24uIEJlc2lkZXMgYnJlYWQgYW5kXG4gKiBidXR0ZXIsIHRoZXJlIGlzIHRoZSBidWcuIEFuZC4uLiBCZXNpZGVzIHdvbWVuLCB0aGVyZSBpcyB0aGUgY29kZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICB7XG4gKiAgICAgXCIwJVwiOiBcIiNhZmMxNjNcIixcbiAqICAgICBcIjI1JVwiOiBcIiM2NkZGMDBcIixcbiAqICAgICBcIjUwJVwiOiBcIiMwMENDMDBcIiwgLy8gPT09PT4gIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2FmYzE2MyAwJSwgIzY2RkYwMCAyNSUsXG4gKiAgICAgXCI3NSVcIjogXCIjMDA5OTAwXCIsIC8vICAgICAgICAjMDBDQzAwIDUwJSwgIzAwOTkwMCA3NSUsICNmZmZmZmYgMTAwJSlcbiAqICAgICBcIjEwMCVcIjogXCIjZmZmZmZmXCJcbiAqICAgfVxuICovXG5leHBvcnQgY29uc3QgaGFuZGxlR3JhZGllbnQgPSAoc3Ryb2tlQ29sb3IsIGRpcmVjdGlvbkNvbmZpZykgPT4ge1xuICBjb25zdCB7XG4gICAgICBmcm9tID0gcHJlc2V0UHJpbWFyeUNvbG9ycy5ibHVlLFxuICAgICAgdG8gPSBwcmVzZXRQcmltYXJ5Q29sb3JzLmJsdWUsXG4gICAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb25Db25maWcgPT09ICdydGwnID8gJ3RvIGxlZnQnIDogJ3RvIHJpZ2h0J1xuICAgIH0gPSBzdHJva2VDb2xvcixcbiAgICByZXN0ID0gX19yZXN0KHN0cm9rZUNvbG9yLCBbXCJmcm9tXCIsIFwidG9cIiwgXCJkaXJlY3Rpb25cIl0pO1xuICBpZiAoT2JqZWN0LmtleXMocmVzdCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc29ydGVkR3JhZGllbnRzID0gc29ydEdyYWRpZW50KHJlc3QpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtzb3J0ZWRHcmFkaWVudHN9KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQsXG4gICAgICBbTGluZVN0cm9rZUNvbG9yVmFyXTogYmFja2dyb3VuZFxuICAgIH07XG4gIH1cbiAgY29uc3QgYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke2Zyb219LCAke3RvfSlgO1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmQsXG4gICAgW0xpbmVTdHJva2VDb2xvclZhcl06IGJhY2tncm91bmRcbiAgfTtcbn07XG5jb25zdCBMaW5lID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uQ29uZmlnLFxuICAgIHBlcmNlbnQsXG4gICAgc2l6ZSxcbiAgICBzdHJva2VXaWR0aCxcbiAgICBzdHJva2VDb2xvcixcbiAgICBzdHJva2VMaW5lY2FwID0gJ3JvdW5kJyxcbiAgICBjaGlsZHJlbixcbiAgICB0cmFpbENvbG9yID0gbnVsbCxcbiAgICBwZXJjZW50UG9zaXRpb24sXG4gICAgc3VjY2Vzc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBhbGlnbjogaW5mb0FsaWduLFxuICAgIHR5cGU6IGluZm9Qb3NpdGlvblxuICB9ID0gcGVyY2VudFBvc2l0aW9uO1xuICBjb25zdCBiYWNrZ3JvdW5kUHJvcHMgPSBzdHJva2VDb2xvciAmJiB0eXBlb2Ygc3Ryb2tlQ29sb3IgIT09ICdzdHJpbmcnID8gaGFuZGxlR3JhZGllbnQoc3Ryb2tlQ29sb3IsIGRpcmVjdGlvbkNvbmZpZykgOiB7XG4gICAgW0xpbmVTdHJva2VDb2xvclZhcl06IHN0cm9rZUNvbG9yLFxuICAgIGJhY2tncm91bmQ6IHN0cm9rZUNvbG9yXG4gIH07XG4gIGNvbnN0IGJvcmRlclJhZGl1cyA9IHN0cm9rZUxpbmVjYXAgPT09ICdzcXVhcmUnIHx8IHN0cm9rZUxpbmVjYXAgPT09ICdidXR0JyA/IDAgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lcmdlZFNpemUgPSBzaXplICE9PSBudWxsICYmIHNpemUgIT09IHZvaWQgMCA/IHNpemUgOiBbLTEsIHN0cm9rZVdpZHRoIHx8IChzaXplID09PSAnc21hbGwnID8gNiA6IDgpXTtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gZ2V0U2l6ZShtZXJnZWRTaXplLCAnbGluZScsIHtcbiAgICBzdHJva2VXaWR0aFxuICB9KTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCB3YXJuaW5nID0gZGV2VXNlV2FybmluZygnUHJvZ3Jlc3MnKTtcbiAgICB3YXJuaW5nLmRlcHJlY2F0ZWQoISgnc3Ryb2tlV2lkdGgnIGluIHByb3BzKSwgJ3N0cm9rZVdpZHRoJywgJ3NpemUnKTtcbiAgfVxuICBjb25zdCB0cmFpbFN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogdHJhaWxDb2xvciB8fCB1bmRlZmluZWQsXG4gICAgYm9yZGVyUmFkaXVzXG4gIH07XG4gIGNvbnN0IHBlcmNlbnRTdHlsZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgd2lkdGg6IGAke3ZhbGlkUHJvZ3Jlc3MocGVyY2VudCl9JWAsXG4gICAgaGVpZ2h0LFxuICAgIGJvcmRlclJhZGl1c1xuICB9LCBiYWNrZ3JvdW5kUHJvcHMpLCB7XG4gICAgW1BlcmNlbnRdOiB2YWxpZFByb2dyZXNzKHBlcmNlbnQpIC8gMTAwXG4gIH0pO1xuICBjb25zdCBzdWNjZXNzUGVyY2VudCA9IGdldFN1Y2Nlc3NQZXJjZW50KHByb3BzKTtcbiAgY29uc3Qgc3VjY2Vzc1BlcmNlbnRTdHlsZSA9IHtcbiAgICB3aWR0aDogYCR7dmFsaWRQcm9ncmVzcyhzdWNjZXNzUGVyY2VudCl9JWAsXG4gICAgaGVpZ2h0LFxuICAgIGJvcmRlclJhZGl1cyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3MgPT09IG51bGwgfHwgc3VjY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VjY2Vzcy5zdHJva2VDb2xvclxuICB9O1xuICBjb25zdCBvdXRlclN0eWxlID0ge1xuICAgIHdpZHRoOiB3aWR0aCA8IDAgPyAnMTAwJScgOiB3aWR0aFxuICB9O1xuICBjb25zdCBsaW5lSW5uZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWlubmVyYCxcbiAgICBzdHlsZTogdHJhaWxTdHlsZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGAke3ByZWZpeENsc30tYmdgLCBgJHtwcmVmaXhDbHN9LWJnLSR7aW5mb1Bvc2l0aW9ufWApLFxuICAgIHN0eWxlOiBwZXJjZW50U3R5bGVcbiAgfSwgaW5mb1Bvc2l0aW9uID09PSAnaW5uZXInICYmIGNoaWxkcmVuKSwgc3VjY2Vzc1BlcmNlbnQgIT09IHVuZGVmaW5lZCAmJiAoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogYCR7cHJlZml4Q2xzfS1zdWNjZXNzLWJnYCxcbiAgICBzdHlsZTogc3VjY2Vzc1BlcmNlbnRTdHlsZVxuICB9KSkpO1xuICBjb25zdCBpc091dGVyU3RhcnQgPSBpbmZvUG9zaXRpb24gPT09ICdvdXRlcicgJiYgaW5mb0FsaWduID09PSAnc3RhcnQnO1xuICBjb25zdCBpc091dGVyRW5kID0gaW5mb1Bvc2l0aW9uID09PSAnb3V0ZXInICYmIGluZm9BbGlnbiA9PT0gJ2VuZCc7XG4gIHJldHVybiBpbmZvUG9zaXRpb24gPT09ICdvdXRlcicgJiYgaW5mb0FsaWduID09PSAnY2VudGVyJyA/ICgvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWxheW91dC1ib3R0b21gXG4gIH0sIGxpbmVJbm5lciwgY2hpbGRyZW4pKSA6ICgvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LW91dGVyYCxcbiAgICBzdHlsZTogb3V0ZXJTdHlsZVxuICB9LCBpc091dGVyU3RhcnQgJiYgY2hpbGRyZW4sIGxpbmVJbm5lciwgaXNPdXRlckVuZCAmJiBjaGlsZHJlbikpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExpbmU7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0U2l6ZSB9IGZyb20gJy4vdXRpbHMnO1xuY29uc3QgU3RlcHMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBzaXplLFxuICAgIHN0ZXBzLFxuICAgIHBlcmNlbnQgPSAwLFxuICAgIHN0cm9rZVdpZHRoID0gOCxcbiAgICBzdHJva2VDb2xvcixcbiAgICB0cmFpbENvbG9yID0gbnVsbCxcbiAgICBwcmVmaXhDbHMsXG4gICAgY2hpbGRyZW5cbiAgfSA9IHByb3BzO1xuICBjb25zdCBjdXJyZW50ID0gTWF0aC5yb3VuZChzdGVwcyAqIChwZXJjZW50IC8gMTAwKSk7XG4gIGNvbnN0IHN0ZXBXaWR0aCA9IHNpemUgPT09ICdzbWFsbCcgPyAyIDogMTQ7XG4gIGNvbnN0IG1lcmdlZFNpemUgPSBzaXplICE9PSBudWxsICYmIHNpemUgIT09IHZvaWQgMCA/IHNpemUgOiBbc3RlcFdpZHRoLCBzdHJva2VXaWR0aF07XG4gIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGdldFNpemUobWVyZ2VkU2l6ZSwgJ3N0ZXAnLCB7XG4gICAgc3RlcHMsXG4gICAgc3Ryb2tlV2lkdGhcbiAgfSk7XG4gIGNvbnN0IHVuaXRXaWR0aCA9IHdpZHRoIC8gc3RlcHM7XG4gIGNvbnN0IHN0eWxlZFN0ZXBzID0gbmV3IEFycmF5KHN0ZXBzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY29sb3IgPSBBcnJheS5pc0FycmF5KHN0cm9rZUNvbG9yKSA/IHN0cm9rZUNvbG9yW2ldIDogc3Ryb2tlQ29sb3I7XG4gICAgc3R5bGVkU3RlcHNbaV0gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBrZXk6IGksXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1zdGVwcy1pdGVtYCwge1xuICAgICAgICBbYCR7cHJlZml4Q2xzfS1zdGVwcy1pdGVtLWFjdGl2ZWBdOiBpIDw9IGN1cnJlbnQgLSAxXG4gICAgICB9KSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaSA8PSBjdXJyZW50IC0gMSA/IGNvbG9yIDogdHJhaWxDb2xvcixcbiAgICAgICAgd2lkdGg6IHVuaXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGAke3ByZWZpeENsc30tc3RlcHMtb3V0ZXJgXG4gIH0sIHN0eWxlZFN0ZXBzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3RlcHM7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hlY2tDaXJjbGVGaWxsZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkXCI7XG5pbXBvcnQgQ2hlY2tPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2hlY2tPdXRsaW5lZFwiO1xuaW1wb3J0IENsb3NlQ2lyY2xlRmlsbGVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiO1xuaW1wb3J0IENsb3NlT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Nsb3NlT3V0bGluZWRcIjtcbmltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBvbWl0IGZyb20gXCJyYy11dGlsL2VzL29taXRcIjtcbmltcG9ydCB7IGRldlVzZVdhcm5pbmcgfSBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IFN0ZXBzIGZyb20gJy4vU3RlcHMnO1xuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgZ2V0U2l6ZSwgZ2V0U3VjY2Vzc1BlcmNlbnQsIHZhbGlkUHJvZ3Jlc3MgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBjb25zdCBQcm9ncmVzc1R5cGVzID0gWydsaW5lJywgJ2NpcmNsZScsICdkYXNoYm9hcmQnXTtcbmNvbnN0IFByb2dyZXNzU3RhdHVzZXMgPSBbJ25vcm1hbCcsICdleGNlcHRpb24nLCAnYWN0aXZlJywgJ3N1Y2Nlc3MnXTtcbmNvbnN0IFByb2dyZXNzID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICByb290Q2xhc3NOYW1lLFxuICAgICAgc3RlcHMsXG4gICAgICBzdHJva2VDb2xvcixcbiAgICAgIHBlcmNlbnQgPSAwLFxuICAgICAgc2l6ZSA9ICdkZWZhdWx0JyxcbiAgICAgIHNob3dJbmZvID0gdHJ1ZSxcbiAgICAgIHR5cGUgPSAnbGluZScsXG4gICAgICBzdGF0dXMsXG4gICAgICBmb3JtYXQsXG4gICAgICBzdHlsZSxcbiAgICAgIHBlcmNlbnRQb3NpdGlvbiA9IHt9XG4gICAgfSA9IHByb3BzLFxuICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwicm9vdENsYXNzTmFtZVwiLCBcInN0ZXBzXCIsIFwic3Ryb2tlQ29sb3JcIiwgXCJwZXJjZW50XCIsIFwic2l6ZVwiLCBcInNob3dJbmZvXCIsIFwidHlwZVwiLCBcInN0YXR1c1wiLCBcImZvcm1hdFwiLCBcInN0eWxlXCIsIFwicGVyY2VudFBvc2l0aW9uXCJdKTtcbiAgY29uc3Qge1xuICAgIGFsaWduOiBpbmZvQWxpZ24gPSAnZW5kJyxcbiAgICB0eXBlOiBpbmZvUG9zaXRpb24gPSAnb3V0ZXInXG4gIH0gPSBwZXJjZW50UG9zaXRpb247XG4gIGNvbnN0IHN0cm9rZUNvbG9yTm90QXJyYXkgPSBBcnJheS5pc0FycmF5KHN0cm9rZUNvbG9yKSA/IHN0cm9rZUNvbG9yWzBdIDogc3Ryb2tlQ29sb3I7XG4gIGNvbnN0IHN0cm9rZUNvbG9yTm90R3JhZGllbnQgPSB0eXBlb2Ygc3Ryb2tlQ29sb3IgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoc3Ryb2tlQ29sb3IpID8gc3Ryb2tlQ29sb3IgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHN0cm9rZUNvbG9ySXNCcmlnaHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoc3Ryb2tlQ29sb3JOb3RBcnJheSkge1xuICAgICAgY29uc3QgY29sb3IgPSB0eXBlb2Ygc3Ryb2tlQ29sb3JOb3RBcnJheSA9PT0gJ3N0cmluZycgPyBzdHJva2VDb2xvck5vdEFycmF5IDogT2JqZWN0LnZhbHVlcyhzdHJva2VDb2xvck5vdEFycmF5KVswXTtcbiAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGNvbG9yKS5pc0xpZ2h0KCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgW3N0cm9rZUNvbG9yXSk7XG4gIGNvbnN0IHBlcmNlbnROdW1iZXIgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHN1Y2Nlc3NQZXJjZW50ID0gZ2V0U3VjY2Vzc1BlcmNlbnQocHJvcHMpO1xuICAgIHJldHVybiBwYXJzZUludChzdWNjZXNzUGVyY2VudCAhPT0gdW5kZWZpbmVkID8gKF9hID0gc3VjY2Vzc1BlcmNlbnQgIT09IG51bGwgJiYgc3VjY2Vzc1BlcmNlbnQgIT09IHZvaWQgMCA/IHN1Y2Nlc3NQZXJjZW50IDogMCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkgOiAoX2IgPSBwZXJjZW50ICE9PSBudWxsICYmIHBlcmNlbnQgIT09IHZvaWQgMCA/IHBlcmNlbnQgOiAwKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSwgMTApO1xuICB9LCBbcGVyY2VudCwgcHJvcHMuc3VjY2VzcywgcHJvcHMuc3VjY2Vzc1BlcmNlbnRdKTtcbiAgY29uc3QgcHJvZ3Jlc3NTdGF0dXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIVByb2dyZXNzU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSAmJiBwZXJjZW50TnVtYmVyID49IDEwMCkge1xuICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cyB8fCAnbm9ybWFsJztcbiAgfSwgW3N0YXR1cywgcGVyY2VudE51bWJlcl0pO1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvbixcbiAgICBwcm9ncmVzczogcHJvZ3Jlc3NTdHlsZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwcm9ncmVzcycsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIGNvbnN0IFt3cmFwQ1NTVmFyLCBoYXNoSWQsIGNzc1ZhckNsc10gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBjb25zdCBpc0xpbmVUeXBlID0gdHlwZSA9PT0gJ2xpbmUnO1xuICBjb25zdCBpc1B1cmVMaW5lVHlwZSA9IGlzTGluZVR5cGUgJiYgIXN0ZXBzO1xuICBjb25zdCBwcm9ncmVzc0luZm8gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXNob3dJbmZvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc3VjY2Vzc1BlcmNlbnQgPSBnZXRTdWNjZXNzUGVyY2VudChwcm9wcyk7XG4gICAgbGV0IHRleHQ7XG4gICAgY29uc3QgdGV4dEZvcm1hdHRlciA9IGZvcm1hdCB8fCAobnVtYmVyID0+IGAke251bWJlcn0lYCk7XG4gICAgY29uc3QgaXNCcmlnaHRJbm5lckNvbG9yID0gaXNMaW5lVHlwZSAmJiBzdHJva2VDb2xvcklzQnJpZ2h0ICYmIGluZm9Qb3NpdGlvbiA9PT0gJ2lubmVyJztcbiAgICBpZiAoaW5mb1Bvc2l0aW9uID09PSAnaW5uZXInIHx8IGZvcm1hdCB8fCBwcm9ncmVzc1N0YXR1cyAhPT0gJ2V4Y2VwdGlvbicgJiYgcHJvZ3Jlc3NTdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgICAgdGV4dCA9IHRleHRGb3JtYXR0ZXIodmFsaWRQcm9ncmVzcyhwZXJjZW50KSwgdmFsaWRQcm9ncmVzcyhzdWNjZXNzUGVyY2VudCkpO1xuICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3NTdGF0dXMgPT09ICdleGNlcHRpb24nKSB7XG4gICAgICB0ZXh0ID0gaXNMaW5lVHlwZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlQ2lyY2xlRmlsbGVkLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlT3V0bGluZWQsIG51bGwpO1xuICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3NTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgdGV4dCA9IGlzTGluZVR5cGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja0NpcmNsZUZpbGxlZCwgbnVsbCkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja091dGxpbmVkLCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS10ZXh0YCwge1xuICAgICAgICBbYCR7cHJlZml4Q2xzfS10ZXh0LWJyaWdodGBdOiBpc0JyaWdodElubmVyQ29sb3IsXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LXRleHQtJHtpbmZvQWxpZ259YF06IGlzUHVyZUxpbmVUeXBlLFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS10ZXh0LSR7aW5mb1Bvc2l0aW9ufWBdOiBpc1B1cmVMaW5lVHlwZVxuICAgICAgfSksXG4gICAgICB0aXRsZTogdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8gdGV4dCA6IHVuZGVmaW5lZFxuICAgIH0sIHRleHQpO1xuICB9LCBbc2hvd0luZm8sIHBlcmNlbnQsIHBlcmNlbnROdW1iZXIsIHByb2dyZXNzU3RhdHVzLCB0eXBlLCBwcmVmaXhDbHMsIGZvcm1hdF0pO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHdhcm5pbmcgPSBkZXZVc2VXYXJuaW5nKCdQcm9ncmVzcycpO1xuICAgIHdhcm5pbmcuZGVwcmVjYXRlZCghKCdzdWNjZXNzUGVyY2VudCcgaW4gcHJvcHMpLCAnc3VjY2Vzc1BlcmNlbnQnLCAnc3VjY2Vzcy5wZXJjZW50Jyk7XG4gICAgd2FybmluZy5kZXByZWNhdGVkKCEoJ3dpZHRoJyBpbiBwcm9wcyksICd3aWR0aCcsICdzaXplJyk7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnIHx8IHR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzaXplKSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAndXNhZ2UnLCAnVHlwZSBcImNpcmNsZVwiIGFuZCBcImRhc2hib2FyZFwiIGRvIG5vdCBhY2NlcHQgYXJyYXkgYXMgYHNpemVgLCBwbGVhc2UgdXNlIG51bWJlciBvciBwcmVzZXQgc2l6ZSBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ3VzYWdlJywgJ1R5cGUgXCJjaXJjbGVcIiBhbmQgXCJkYXNoYm9hcmRcIiBkbyBub3QgYWNjZXB0IG9iamVjdCBhcyBgc2l6ZWAsIHBsZWFzZSB1c2UgbnVtYmVyIG9yIHByZXNldCBzaXplIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcy5zdWNjZXNzICYmICdwcm9ncmVzcycgaW4gcHJvcHMuc3VjY2Vzcykge1xuICAgICAgd2FybmluZy5kZXByZWNhdGVkKGZhbHNlLCAnc3VjY2Vzcy5wcm9ncmVzcycsICdzdWNjZXNzLnBlcmNlbnQnKTtcbiAgICB9XG4gIH1cbiAgbGV0IHByb2dyZXNzO1xuICAvLyBSZW5kZXIgcHJvZ3Jlc3Mgc2hhcGVcbiAgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgIHByb2dyZXNzID0gc3RlcHMgPyAoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3RlcHMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICBzdHJva2VDb2xvcjogc3Ryb2tlQ29sb3JOb3RHcmFkaWVudCxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgc3RlcHM6IHR5cGVvZiBzdGVwcyA9PT0gJ29iamVjdCcgPyBzdGVwcy5jb3VudCA6IHN0ZXBzXG4gICAgfSksIHByb2dyZXNzSW5mbykpIDogKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpbmUsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICBzdHJva2VDb2xvcjogc3Ryb2tlQ29sb3JOb3RBcnJheSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBwZXJjZW50UG9zaXRpb246IHtcbiAgICAgICAgYWxpZ246IGluZm9BbGlnbixcbiAgICAgICAgdHlwZTogaW5mb1Bvc2l0aW9uXG4gICAgICB9XG4gICAgfSksIHByb2dyZXNzSW5mbykpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaXJjbGUnIHx8IHR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgcHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaXJjbGUsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICBzdHJva2VDb2xvcjogc3Ryb2tlQ29sb3JOb3RBcnJheSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgcHJvZ3Jlc3NTdGF0dXM6IHByb2dyZXNzU3RhdHVzXG4gICAgfSksIHByb2dyZXNzSW5mbyk7XG4gIH1cbiAgY29uc3QgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscywgYCR7cHJlZml4Q2xzfS1zdGF0dXMtJHtwcm9ncmVzc1N0YXR1c31gLCB7XG4gICAgW2Ake3ByZWZpeENsc30tJHt0eXBlID09PSAnZGFzaGJvYXJkJyAmJiAnY2lyY2xlJyB8fCB0eXBlfWBdOiB0eXBlICE9PSAnbGluZScsXG4gICAgW2Ake3ByZWZpeENsc30taW5saW5lLWNpcmNsZWBdOiB0eXBlID09PSAnY2lyY2xlJyAmJiBnZXRTaXplKHNpemUsICdjaXJjbGUnKVswXSA8PSAyMCxcbiAgICBbYCR7cHJlZml4Q2xzfS1saW5lYF06IGlzUHVyZUxpbmVUeXBlLFxuICAgIFtgJHtwcmVmaXhDbHN9LWxpbmUtYWxpZ24tJHtpbmZvQWxpZ259YF06IGlzUHVyZUxpbmVUeXBlLFxuICAgIFtgJHtwcmVmaXhDbHN9LWxpbmUtcG9zaXRpb24tJHtpbmZvUG9zaXRpb259YF06IGlzUHVyZUxpbmVUeXBlLFxuICAgIFtgJHtwcmVmaXhDbHN9LXN0ZXBzYF06IHN0ZXBzLFxuICAgIFtgJHtwcmVmaXhDbHN9LXNob3ctaW5mb2BdOiBzaG93SW5mbyxcbiAgICBbYCR7cHJlZml4Q2xzfS0ke3NpemV9YF06IHR5cGVvZiBzaXplID09PSAnc3RyaW5nJyxcbiAgICBbYCR7cHJlZml4Q2xzfS1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJ1xuICB9LCBwcm9ncmVzc1N0eWxlID09PSBudWxsIHx8IHByb2dyZXNzU3R5bGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2dyZXNzU3R5bGUuY2xhc3NOYW1lLCBjbGFzc05hbWUsIHJvb3RDbGFzc05hbWUsIGhhc2hJZCwgY3NzVmFyQ2xzKTtcbiAgcmV0dXJuIHdyYXBDU1NWYXIoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvZ3Jlc3NTdHlsZSA9PT0gbnVsbCB8fCBwcm9ncmVzc1N0eWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9ncmVzc1N0eWxlLnN0eWxlKSwgc3R5bGUpLFxuICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgIFwiYXJpYS12YWx1ZW5vd1wiOiBwZXJjZW50TnVtYmVyLFxuICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgIFwiYXJpYS12YWx1ZW1heFwiOiAxMDBcbiAgfSwgb21pdChyZXN0UHJvcHMsIFsndHJhaWxDb2xvcicsICdzdHJva2VXaWR0aCcsICd3aWR0aCcsICdnYXBEZWdyZWUnLCAnZ2FwUG9zaXRpb24nLCAnc3Ryb2tlTGluZWNhcCcsICdzdWNjZXNzJywgJ3N1Y2Nlc3NQZXJjZW50J10pKSwgcHJvZ3Jlc3MpKTtcbn0pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUHJvZ3Jlc3MuZGlzcGxheU5hbWUgPSAnUHJvZ3Jlc3MnO1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3M7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzJztcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///38703
`)}}]);
