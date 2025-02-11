"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[199],{49199:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ tabs; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(89705);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(31131);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabContext.js

/* harmony default export */ var TabContext = (/*#__PURE__*/(0,react.createContext)(null));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 5 modules
var es = __webpack_require__(9220);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useIndicator.js



var useIndicator = function useIndicator(options) {
  var activeTabOffset = options.activeTabOffset,
    horizontal = options.horizontal,
    rtl = options.rtl,
    _options$indicator = options.indicator,
    indicator = _options$indicator === void 0 ? {} : _options$indicator;
  var size = indicator.size,
    _indicator$align = indicator.align,
    align = _indicator$align === void 0 ? 'center' : _indicator$align;
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    inkStyle = _useState2[0],
    setInkStyle = _useState2[1];
  var inkBarRafRef = (0,react.useRef)();
  var getLength = react.useCallback(function (origin) {
    if (typeof size === 'function') {
      return size(origin);
    }
    if (typeof size === 'number') {
      return size;
    }
    return origin;
  }, [size]);

  // Delay set ink style to avoid remove tab blink
  function cleanInkBarRaf() {
    raf/* default */.Z.cancel(inkBarRafRef.current);
  }
  (0,react.useEffect)(function () {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (horizontal) {
        newInkStyle.width = getLength(activeTabOffset.width);
        var key = rtl ? 'right' : 'left';
        if (align === 'start') {
          newInkStyle[key] = activeTabOffset[key];
        }
        if (align === 'center') {
          newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width / 2;
          newInkStyle.transform = rtl ? 'translateX(50%)' : 'translateX(-50%)';
        }
        if (align === 'end') {
          newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width;
          newInkStyle.transform = 'translateX(-100%)';
        }
      } else {
        newInkStyle.height = getLength(activeTabOffset.height);
        if (align === 'start') {
          newInkStyle.top = activeTabOffset.top;
        }
        if (align === 'center') {
          newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
          newInkStyle.transform = 'translateY(-50%)';
        }
        if (align === 'end') {
          newInkStyle.top = activeTabOffset.top + activeTabOffset.height;
          newInkStyle.transform = 'translateY(-100%)';
        }
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = (0,raf/* default */.Z)(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, horizontal, rtl, align, getLength]);
  return {
    style: inkStyle
  };
};
/* harmony default export */ var hooks_useIndicator = (useIndicator);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useOffsets.js


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return (0,react.useMemo)(function () {
    var _tabs$;
    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key);

      // Reuse last one when not exist yet
      if (!data) {
        var _tabs;
        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }
      var entity = map.get(key) || (0,objectSpread2/* default */.Z)({}, data);

      // Right
      entity.right = rightOffset - entity.left - entity.width;

      // Update entity
      map.set(key, entity);
    }
    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useSyncState.js


function useSyncState(defaultState, onChange) {
  var stateRef = react.useRef(defaultState);
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useTouchMove.js



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);

// ================================= Hook =================================
function useTouchMove(ref, onOffset) {
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    touchPosition = _useState2[0],
    setTouchPosition = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    lastTimestamp = _useState4[0],
    setLastTimestamp = _useState4[1];
  var _useState5 = (0,react.useState)(0),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    lastTimeDiff = _useState6[0],
    setLastTimeDiff = _useState6[1];
  var _useState7 = (0,react.useState)(),
    _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
    lastOffset = _useState8[0],
    setLastOffset = _useState8[1];
  var motionRef = (0,react.useRef)();

  // ========================= Events =========================
  // >>> Touch events
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
      screenX = _e$touches$.screenX,
      screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e) {
    if (!touchPosition) return;

    // e.preventDefault();
    var _e$touches$2 = e.touches[0],
      screenX = _e$touches$2.screenX,
      screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null);

    // Swipe if needed
    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);

      // Skip swipe if low distance
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }

  // >>> Wheel event
  var lastWheelDirectionRef = (0,react.useRef)();
  function onWheel(e) {
    var deltaX = e.deltaX,
      deltaY = e.deltaY;

    // Convert both to x & y since wheel only happened on PC
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }

  // ========================= Effect =========================
  var touchEventsRef = (0,react.useRef)(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react.useEffect(function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }
    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }
    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }
    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }
    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: true
    });

    // No need to clean up since element removed
    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: true
    });
    ref.current.addEventListener('wheel', onProxyWheel, {
      passive: false
    });
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useUpdate.js




/**
 * Help to merge callback with \`useLayoutEffect\`.
 * One time will only trigger once.
 */
function useUpdate(callback) {
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var effectRef = (0,react.useRef)(0);
  var callbackRef = (0,react.useRef)();
  callbackRef.current = callback;

  // Trigger on \`useLayoutEffect\`
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    var _callbackRef$current;
    (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 || _callbackRef$current.call(callbackRef);
  }, [count]);

  // Trigger to update count
  return function () {
    if (effectRef.current !== count) {
      return;
    }
    effectRef.current += 1;
    setCount(effectRef.current);
  };
}
function useUpdateState(defaultState) {
  var batchRef = (0,react.useRef)([]);
  var _useState3 = (0,react.useState)({}),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    forceUpdate = _useState4[1];
  var state = (0,react.useRef)(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useUpdate(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useVisibleRange.js

var useVisibleRange_DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
  var tabs = _ref.tabs,
    tabPosition = _ref.tabPosition,
    rtl = _ref.rtl;
  var charUnit;
  var position;
  var transformSize;
  if (['top', 'bottom'].includes(tabPosition)) {
    charUnit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(transform);
  } else {
    charUnit = 'height';
    position = 'top';
    transformSize = -transform;
  }
  return (0,react.useMemo)(function () {
    if (!tabs.length) {
      return [0, 0];
    }
    var len = tabs.length;
    var endIndex = len;
    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || useVisibleRange_DEFAULT_SIZE;
      if (Math.floor(offset[position] + offset[charUnit]) > Math.floor(transformSize + visibleTabContentValue)) {
        endIndex = i - 1;
        break;
      }
    }
    var startIndex = 0;
    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || useVisibleRange_DEFAULT_SIZE;
      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }
    return startIndex >= endIndex ? [0, 0] : [startIndex, endIndex];
  }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/util.js
/**
 * We trade Map as deps which may change with same value but different ref object.
 * We should make it as hash for deps
 * */
function stringify(obj) {
  var tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach(function (v, k) {
      tgt[k] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';
function genDataNodeKey(key) {
  return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
function getRemovable(closable, closeIcon, editable, disabled) {
  if (
  // Only editable tabs can be removed
  !editable ||
  // Tabs cannot be removed when disabled
  disabled ||
  // closable is false
  closable === false ||
  // If closable is undefined, the remove button should be hidden when closeIcon is null or false
  closable === undefined && (closeIcon === false || closeIcon === null)) {
    return false;
  }
  return true;
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/AddButton.js

var AddButton = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    editable = props.editable,
    locale = props.locale,
    style = props.style;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return /*#__PURE__*/react.createElement("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
});
/* harmony default export */ var TabNavList_AddButton = (AddButton);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/ExtraContent.js


var ExtraContent = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var position = props.position,
    prefixCls = props.prefixCls,
    extra = props.extra;
  if (!extra) {
    return null;
  }
  var content;

  // Parse extra
  var assertExtra = {};
  if ((0,esm_typeof/* default */.Z)(extra) === 'object' && ! /*#__PURE__*/react.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === 'right') {
    content = assertExtra.right;
  }
  if (position === 'left') {
    content = assertExtra.left;
  }
  return content ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-extra-content"),
    ref: ref
  }, content) : null;
});
if (false) {}
/* harmony default export */ var TabNavList_ExtraContent = (ExtraContent);
// EXTERNAL MODULE: ./node_modules/@rc-component/trigger/es/index.js + 11 modules
var trigger_es = __webpack_require__(40228);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/node_modules/rc-dropdown/es/hooks/useAccessibility.js



var ESC = KeyCode/* default */.Z.ESC,
  TAB = KeyCode/* default */.Z.TAB;
function useAccessibility(_ref) {
  var visible = _ref.visible,
    triggerRef = _ref.triggerRef,
    onVisibleChange = _ref.onVisibleChange,
    autoFocus = _ref.autoFocus,
    overlayRef = _ref.overlayRef;
  var focusMenuRef = react.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible) {
      var _triggerRef$current, _triggerRef$current$f;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 || _triggerRef$current$f.call(_triggerRef$current);
      onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(false);
    }
  };
  var focusMenu = function focusMenu() {
    var _overlayRef$current;
    if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {
      overlayRef.current.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB:
        {
          var focusResult = false;
          if (!focusMenuRef.current) {
            focusResult = focusMenu();
          }
          if (focusResult) {
            event.preventDefault();
          } else {
            handleCloseMenuAndReturnFocus();
          }
          break;
        }
    }
  };
  react.useEffect(function () {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      if (autoFocus) {
        // FIXME: hack with raf
        (0,raf/* default */.Z)(focusMenu, 3);
      }
      return function () {
        window.removeEventListener("keydown", handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return function () {
      focusMenuRef.current = false;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/node_modules/rc-dropdown/es/Overlay.js


var Overlay = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var overlay = props.overlay,
    arrow = props.arrow,
    prefixCls = props.prefixCls;
  var overlayNode = (0,react.useMemo)(function () {
    var overlayElement;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  }, [overlay]);
  var composedRef = (0,es_ref/* composeRef */.sQ)(ref, (0,es_ref/* getNodeRef */.C4)(overlayNode));
  return /*#__PURE__*/react.createElement(react.Fragment, null, arrow && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-arrow")
  }), /*#__PURE__*/react.cloneElement(overlayNode, {
    ref: (0,es_ref/* supportRef */.Yr)(overlayNode) ? composedRef : undefined
  }));
});
/* harmony default export */ var es_Overlay = (Overlay);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = (placements);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/node_modules/rc-dropdown/es/Dropdown.js




var _excluded = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];







function Dropdown(props, ref) {
  var _children$props;
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
    transitionName = props.transitionName,
    animation = props.animation,
    align = props.align,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
    _props$placements = props.placements,
    placements = _props$placements === void 0 ? es_placements : _props$placements,
    getPopupContainer = props.getPopupContainer,
    showAction = props.showAction,
    hideAction = props.hideAction,
    overlayClassName = props.overlayClassName,
    overlayStyle = props.overlayStyle,
    visible = props.visible,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    autoFocus = props.autoFocus,
    overlay = props.overlay,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    otherProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    triggerVisible = _React$useState2[0],
    setTriggerVisible = _React$useState2[1];
  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react.useRef(null);
  var overlayRef = react.useRef(null);
  var childRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });
  var handleVisibleChange = function handleVisibleChange(newVisible) {
    setTriggerVisible(newVisible);
    onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(newVisible);
  };
  useAccessibility({
    visible: mergedVisible,
    triggerRef: childRef,
    onVisibleChange: handleVisibleChange,
    autoFocus: autoFocus,
    overlayRef: overlayRef
  });
  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  var getMenuElement = function getMenuElement() {
    return /*#__PURE__*/react.createElement(es_Overlay, {
      ref: overlayRef,
      overlay: overlay,
      prefixCls: prefixCls,
      arrow: arrow
    });
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    if (typeof overlay === 'function') {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
      alignPoint = props.alignPoint;
    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;
    if (openClassName !== undefined) {
      return openClassName;
    }
    return "".concat(prefixCls, "-open");
  };
  var childrenNode = /*#__PURE__*/react.cloneElement(children, {
    className: classnames_default()((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),
    ref: (0,es_ref/* supportRef */.Yr)(children) ? (0,es_ref/* composeRef */.sQ)(childRef, (0,es_ref/* getNodeRef */.C4)(children)) : undefined
  });
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }
  return /*#__PURE__*/react.createElement(trigger_es/* default */.Z, (0,esm_extends/* default */.Z)({
    builtinPlacements: placements
  }, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction,
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: handleVisibleChange,
    onPopupClick: onClick,
    getPopupContainer: getPopupContainer
  }), childrenNode);
}
/* harmony default export */ var es_Dropdown = (/*#__PURE__*/react.forwardRef(Dropdown));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/node_modules/rc-dropdown/es/index.js

/* harmony default export */ var rc_dropdown_es = (es_Dropdown);
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 26 modules
var rc_menu_es = __webpack_require__(72512);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/OperationNode.js











var OperationNode = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    id = props.id,
    tabs = props.tabs,
    locale = props.locale,
    mobile = props.mobile,
    _props$more = props.more,
    moreProps = _props$more === void 0 ? {} : _props$more,
    style = props.style,
    className = props.className,
    editable = props.editable,
    tabBarGutter = props.tabBarGutter,
    rtl = props.rtl,
    removeAriaLabel = props.removeAriaLabel,
    onTabClick = props.onTabClick,
    getPopupContainer = props.getPopupContainer,
    popupClassName = props.popupClassName;
  // ======================== Dropdown ========================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var _moreProps$icon = moreProps.icon,
    moreIcon = _moreProps$icon === void 0 ? 'More' : _moreProps$icon;
  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var menu = /*#__PURE__*/react.createElement(rc_menu_es/* default */.ZP, {
    onClick: function onClick(_ref) {
      var key = _ref.key,
        domEvent = _ref.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    prefixCls: "".concat(dropdownPrefix, "-menu"),
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    var closable = tab.closable,
      disabled = tab.disabled,
      closeIcon = tab.closeIcon,
      key = tab.key,
      label = tab.label;
    var removable = getRemovable(closable, closeIcon, editable, disabled);
    return /*#__PURE__*/react.createElement(rc_menu_es/* MenuItem */.sN, {
      key: key,
      id: "".concat(popupId, "-").concat(key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(key),
      disabled: disabled
    }, /*#__PURE__*/react.createElement("span", null, label), removable && /*#__PURE__*/react.createElement("button", {
      type: "button",
      "aria-label": removeAriaLabel || 'remove',
      tabIndex: 0,
      className: "".concat(dropdownPrefix, "-menu-item-remove"),
      onClick: function onClick(e) {
        e.stopPropagation();
        onRemoveTab(e, key);
      }
    }, closeIcon || editable.removeIcon || '\xD7'));
  }));
  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;
    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e) {
    var which = e.which;
    if (!open) {
      if ([KeyCode/* default */.Z.DOWN, KeyCode/* default */.Z.SPACE, KeyCode/* default */.Z.ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (which) {
      case KeyCode/* default */.Z.UP:
        selectOffset(-1);
        e.preventDefault();
        break;
      case KeyCode/* default */.Z.DOWN:
        selectOffset(1);
        e.preventDefault();
        break;
      case KeyCode/* default */.Z.ESC:
        setOpen(false);
        break;
      case KeyCode/* default */.Z.SPACE:
      case KeyCode/* default */.Z.ENTER:
        if (selectedKey !== null) {
          onTabClick(selectedKey, e);
        }
        break;
    }
  }

  // ========================= Effect =========================
  (0,react.useEffect)(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);
    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  (0,react.useEffect)(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);

  // ========================= Render =========================
  var moreStyle = (0,defineProperty/* default */.Z)({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }
  var overlayClassName = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react.createElement(rc_dropdown_es, (0,esm_extends/* default */.Z)({
    prefixCls: dropdownPrefix,
    overlay: menu,
    visible: tabs.length ? open : false,
    onVisibleChange: setOpen,
    overlayClassName: classnames_default()(overlayClassName, popupClassName),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: getPopupContainer
  }, moreProps), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
});
/* harmony default export */ var TabNavList_OperationNode = (/*#__PURE__*/react.memo(OperationNode, function (_, next) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in \`rc-menu\` since this has perf issue
    next.tabMoving
  );
}));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/TabNode.js





var TabNode = function TabNode(props) {
  var prefixCls = props.prefixCls,
    id = props.id,
    active = props.active,
    _props$tab = props.tab,
    key = _props$tab.key,
    label = _props$tab.label,
    disabled = _props$tab.disabled,
    closeIcon = _props$tab.closeIcon,
    icon = _props$tab.icon,
    closable = props.closable,
    renderWrapper = props.renderWrapper,
    removeAriaLabel = props.removeAriaLabel,
    editable = props.editable,
    onClick = props.onClick,
    onFocus = props.onFocus,
    style = props.style;
  var tabPrefix = "".concat(prefixCls, "-tab");
  var removable = getRemovable(closable, closeIcon, editable, disabled);
  function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick(e);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var labelNode = react.useMemo(function () {
    return icon && typeof label === 'string' ? /*#__PURE__*/react.createElement("span", null, label) : label;
  }, [label, icon]);
  var node = /*#__PURE__*/react.createElement("div", {
    key: key
    // ref={ref}
    ,
    "data-node-key": genDataNodeKey(key),
    className: classnames_default()(tabPrefix, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(tabPrefix, "-with-remove"), removable), "".concat(tabPrefix, "-active"), active), "".concat(tabPrefix, "-disabled"), disabled)),
    style: style,
    onClick: onInternalClick
  }, /*#__PURE__*/react.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode/* default */.Z.SPACE, KeyCode/* default */.Z.ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, icon && /*#__PURE__*/react.createElement("span", {
    className: "".concat(tabPrefix, "-icon")
  }, icon), label && labelNode), removable && /*#__PURE__*/react.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '\xD7'));
  return renderWrapper ? renderWrapper(node) : node;
};
/* harmony default export */ var TabNavList_TabNode = (TabNode);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/index.js





/* eslint-disable react-hooks/exhaustive-deps */


















var getTabSize = function getTabSize(tab, containerRect) {
  // tabListRef
  var offsetWidth = tab.offsetWidth,
    offsetHeight = tab.offsetHeight,
    offsetTop = tab.offsetTop,
    offsetLeft = tab.offsetLeft;
  var _tab$getBoundingClien = tab.getBoundingClientRect(),
    width = _tab$getBoundingClien.width,
    height = _tab$getBoundingClien.height,
    left = _tab$getBoundingClien.left,
    top = _tab$getBoundingClien.top;

  // Use getBoundingClientRect to avoid decimal inaccuracy
  if (Math.abs(width - offsetWidth) < 1) {
    return [width, height, left - containerRect.left, top - containerRect.top];
  }
  return [offsetWidth, offsetHeight, offsetLeft, offsetTop];
};
var getSize = function getSize(refObj) {
  var _ref = refObj.current || {},
    _ref$offsetWidth = _ref.offsetWidth,
    offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth,
    _ref$offsetHeight = _ref.offsetHeight,
    offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;

  // Use getBoundingClientRect to avoid decimal inaccuracy
  if (refObj.current) {
    var _refObj$current$getBo = refObj.current.getBoundingClientRect(),
      width = _refObj$current$getBo.width,
      height = _refObj$current$getBo.height;
    if (Math.abs(width - offsetWidth) < 1) {
      return [width, height];
    }
  }
  return [offsetWidth, offsetHeight];
};

/**
 * Convert \`SizeInfo\` to unit value. Such as [123, 456] with \`top\` position get \`123\`
 */
var getUnitValue = function getUnitValue(size, tabPositionTopOrBottom) {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
var TabNavList = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
    style = props.style,
    id = props.id,
    animated = props.animated,
    activeKey = props.activeKey,
    rtl = props.rtl,
    extra = props.extra,
    editable = props.editable,
    locale = props.locale,
    tabPosition = props.tabPosition,
    tabBarGutter = props.tabBarGutter,
    children = props.children,
    onTabClick = props.onTabClick,
    onTabScroll = props.onTabScroll,
    indicator = props.indicator;
  var _React$useContext = react.useContext(TabContext),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var containerRef = (0,react.useRef)(null);
  var extraLeftRef = (0,react.useRef)(null);
  var extraRightRef = (0,react.useRef)(null);
  var tabsWrapperRef = (0,react.useRef)(null);
  var tabListRef = (0,react.useRef)(null);
  var operationsRef = (0,react.useRef)(null);
  var innerAddButtonRef = (0,react.useRef)(null);
  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
  var _useSyncState = useSyncState(0, function (next, prev) {
      if (tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'left' : 'right'
        });
      }
    }),
    _useSyncState2 = (0,slicedToArray/* default */.Z)(_useSyncState, 2),
    transformLeft = _useSyncState2[0],
    setTransformLeft = _useSyncState2[1];
  var _useSyncState3 = useSyncState(0, function (next, prev) {
      if (!tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'top' : 'bottom'
        });
      }
    }),
    _useSyncState4 = (0,slicedToArray/* default */.Z)(_useSyncState3, 2),
    transformTop = _useSyncState4[0],
    setTransformTop = _useSyncState4[1];
  var _useState = (0,react.useState)([0, 0]),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    containerExcludeExtraSize = _useState2[0],
    setContainerExcludeExtraSize = _useState2[1];
  var _useState3 = (0,react.useState)([0, 0]),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    tabContentSize = _useState4[0],
    setTabContentSize = _useState4[1];
  var _useState5 = (0,react.useState)([0, 0]),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    addSize = _useState6[0],
    setAddSize = _useState6[1];
  var _useState7 = (0,react.useState)([0, 0]),
    _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
    operationSize = _useState8[0],
    setOperationSize = _useState8[1];
  var _useUpdateState = useUpdateState(new Map()),
    _useUpdateState2 = (0,slicedToArray/* default */.Z)(_useUpdateState, 2),
    tabSizes = _useUpdateState2[0],
    setTabSizes = _useUpdateState2[1];
  var tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);

  // ========================== Unit =========================
  var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  var needScroll = Math.floor(containerExcludeExtraSizeValue) < Math.floor(tabContentSizeValue + addSizeValue);
  var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;

  // ========================== Util =========================
  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }

  // ========================= Mobile ========================
  var touchMovingRef = (0,react.useRef)(null);
  var _useState9 = (0,react.useState)(),
    _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
    lockAnimation = _useState10[0],
    setLockAnimation = _useState10[1];
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    if (touchMovingRef.current) {
      clearTimeout(touchMovingRef.current);
    }
  }
  useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    // Skip scroll if place is enough
    if (!needScroll) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  (0,react.useEffect)(function () {
    clearTouchMoving();
    if (lockAnimation) {
      touchMovingRef.current = setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }
    return clearTouchMoving;
  }, [lockAnimation]);

  // ===================== Visible Range =====================
  // Render tab node & collect tab offset
  var _useVisibleRange = useVisibleRange(tabOffsets,
    // Container
    visibleTabContentValue,
    // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop,
    // Tabs
    tabContentSizeValue,
    // Add
    addSizeValue,
    // Operation
    operationSizeValue, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      tabs: tabs
    })),
    _useVisibleRange2 = (0,slicedToArray/* default */.Z)(_useVisibleRange, 2),
    visibleStart = _useVisibleRange2[0],
    visibleEnd = _useVisibleRange2[1];

  // ========================= Scroll ========================
  var scrollToTab = (0,useEvent/* default */.Z)(function () {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft;

      // RTL
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      }
      // LTR
      else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  });

  // ========================== Tab ==========================
  var tabNodeStyle = {};
  if (tabPosition === 'top' || tabPosition === 'bottom') {
    tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  var tabNodes = tabs.map(function (tab, i) {
    var key = tab.key;
    return /*#__PURE__*/react.createElement(TabNavList_TabNode, {
      id: id,
      prefixCls: prefixCls,
      key: key,
      tab: tab
      /* first node should not have margin left */,
      style: i === 0 ? undefined : tabNodeStyle,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        // Focus element will make scrollLeft change which we should reset back
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });

  // Update buttons records
  var updateTabSizes = function updateTabSizes() {
    return setTabSizes(function () {
      var _tabListRef$current;
      var newSizes = new Map();
      var listRect = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.getBoundingClientRect();
      tabs.forEach(function (_ref2) {
        var _tabListRef$current2;
        var key = _ref2.key;
        var btnNode = (_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.querySelector("[data-node-key=\\"".concat(genDataNodeKey(key), "\\"]"));
        if (btnNode) {
          var _getTabSize = getTabSize(btnNode, listRect),
            _getTabSize2 = (0,slicedToArray/* default */.Z)(_getTabSize, 4),
            width = _getTabSize2[0],
            height = _getTabSize2[1],
            left = _getTabSize2[2],
            top = _getTabSize2[3];
          newSizes.set(key, {
            width: width,
            height: height,
            left: left,
            top: top
          });
        }
      });
      return newSizes;
    });
  };
  (0,react.useEffect)(function () {
    updateTabSizes();
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_')]);
  var onListHolderResize = useUpdate(function () {
    // Update wrapper records
    var containerSize = getSize(containerRef);
    var extraLeftSize = getSize(extraLeftRef);
    var extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
    var newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    var newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);

    // Which includes add button size
    var tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);

    // Update buttons records
    updateTabSizes();
  });

  // ======================== Dropdown =======================
  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat((0,toConsumableArray/* default */.Z)(startHiddenTabs), (0,toConsumableArray/* default */.Z)(endHiddenTabs));

  // =================== Link & Operations ===================
  var activeTabOffset = tabOffsets.get(activeKey);
  var _useIndicator = hooks_useIndicator({
      activeTabOffset: activeTabOffset,
      horizontal: tabPositionTopOrBottom,
      indicator: indicator,
      rtl: rtl
    }),
    indicatorStyle = _useIndicator.style;

  // ========================= Effect ========================
  (0,react.useEffect)(function () {
    scrollToTab();
  }, [activeKey, transformMin, transformMax, stringify(activeTabOffset), stringify(tabOffsets), tabPositionTopOrBottom]);

  // Should recalculate when rtl changed
  (0,react.useEffect)(function () {
    onListHolderResize();
    // eslint-disable-next-line
  }, [rtl]);

  // ========================= Render ========================
  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft !== transformMax;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = transformLeft !== transformMin;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = transformTop !== transformMin;
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: (0,es_ref/* useComposeRef */.x1)(ref, containerRef),
    role: "tablist",
    className: classnames_default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react.createElement(TabNavList_ExtraContent, {
    ref: extraLeftRef,
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(wrapPrefix, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(wrapPrefix, "-ping-left"), pingLeft), "".concat(wrapPrefix, "-ping-right"), pingRight), "".concat(wrapPrefix, "-ping-top"), pingTop), "".concat(wrapPrefix, "-ping-bottom"), pingBottom)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
      visibility: hasDropdown ? 'hidden' : null
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-ink-bar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: indicatorStyle
  }))))), /*#__PURE__*/react.createElement(TabNavList_OperationNode, (0,esm_extends/* default */.Z)({}, props, {
    removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName,
    tabMoving: !!lockAnimation
  })), /*#__PURE__*/react.createElement(TabNavList_ExtraContent, {
    ref: extraRightRef,
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  })));
  /* eslint-enable */
});
/* harmony default export */ var es_TabNavList = (TabNavList);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/TabPane.js


var TabPane = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    id = props.id,
    active = props.active,
    tabKey = props.tabKey,
    children = props.children;
  return /*#__PURE__*/react.createElement("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: style,
    className: classnames_default()(prefixCls, active && "".concat(prefixCls, "-active"), className),
    ref: ref
  }, children);
});
if (false) {}
/* harmony default export */ var TabPanelList_TabPane = (TabPane);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/Wrapper.js



var Wrapper_excluded = ["renderTabBar"],
  _excluded2 = ["label", "key"];
// zombieJ: To compatible with \`renderTabBar\` usage.





// We have to create a TabNavList components.
var TabNavListWrapper = function TabNavListWrapper(_ref) {
  var renderTabBar = _ref.renderTabBar,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Wrapper_excluded);
  var _React$useContext = react.useContext(TabContext),
    tabs = _React$useContext.tabs;
  if (renderTabBar) {
    var tabNavBarProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, restProps), {}, {
      // Legacy support. We do not use this actually
      panes: tabs.map(function (_ref2) {
        var label = _ref2.label,
          key = _ref2.key,
          restTabProps = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
        return /*#__PURE__*/react.createElement(TabPanelList_TabPane, (0,esm_extends/* default */.Z)({
          tab: label,
          key: key,
          tabKey: key
        }, restTabProps));
      })
    });
    return renderTabBar(tabNavBarProps, es_TabNavList);
  }
  return /*#__PURE__*/react.createElement(es_TabNavList, restProps);
};
if (false) {}
/* harmony default export */ var Wrapper = (TabNavListWrapper);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(29372);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/index.js




var TabPanelList_excluded = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"];





var TabPanelList = function TabPanelList(props) {
  var id = props.id,
    activeKey = props.activeKey,
    animated = props.animated,
    tabPosition = props.tabPosition,
    destroyInactiveTabPane = props.destroyInactiveTabPane;
  var _React$useContext = react.useContext(TabContext),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var tabPaneAnimated = animated.tabPane;
  var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
  }, tabs.map(function (item) {
    var key = item.key,
      forceRender = item.forceRender,
      paneStyle = item.style,
      paneClassName = item.className,
      itemDestroyInactiveTabPane = item.destroyInactiveTabPane,
      restTabProps = (0,objectWithoutProperties/* default */.Z)(item, TabPanelList_excluded);
    var active = key === activeKey;
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
      key: key,
      visible: active,
      forceRender: forceRender,
      removeOnLeave: !!(destroyInactiveTabPane || itemDestroyInactiveTabPane),
      leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
    }, animated.tabPaneMotion), function (_ref, ref) {
      var motionStyle = _ref.style,
        motionClassName = _ref.className;
      return /*#__PURE__*/react.createElement(TabPanelList_TabPane, (0,esm_extends/* default */.Z)({}, restTabProps, {
        prefixCls: tabPanePrefixCls,
        id: id,
        tabKey: key,
        animated: tabPaneAnimated,
        active: active,
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, paneStyle), motionStyle),
        className: classnames_default()(paneClassName, motionClassName),
        ref: ref
      }));
    });
  })));
};
/* harmony default export */ var es_TabPanelList = (TabPanelList);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useAnimateConfig.js



function useAnimateConfig() {
  var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = (0,objectSpread2/* default */.Z)({
      inkBar: true
    }, (0,esm_typeof/* default */.Z)(animated) === 'object' ? animated : {});
  }

  // Enable tabPane animation if provide motion
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    if (false) {}
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/Tabs.js






var Tabs_excluded = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"];
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role









/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */

// Used for accessibility
var uuid = 0;
var Tabs = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var id = props.id,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tabs' : _props$prefixCls,
    className = props.className,
    items = props.items,
    direction = props.direction,
    activeKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey,
    editable = props.editable,
    animated = props.animated,
    _props$tabPosition = props.tabPosition,
    tabPosition = _props$tabPosition === void 0 ? 'top' : _props$tabPosition,
    tabBarGutter = props.tabBarGutter,
    tabBarStyle = props.tabBarStyle,
    tabBarExtraContent = props.tabBarExtraContent,
    locale = props.locale,
    more = props.more,
    destroyInactiveTabPane = props.destroyInactiveTabPane,
    renderTabBar = props.renderTabBar,
    onChange = props.onChange,
    onTabClick = props.onTabClick,
    onTabScroll = props.onTabScroll,
    getPopupContainer = props.getPopupContainer,
    popupClassName = props.popupClassName,
    indicator = props.indicator,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Tabs_excluded);
  var tabs = react.useMemo(function () {
    return (items || []).filter(function (item) {
      return item && (0,esm_typeof/* default */.Z)(item) === 'object' && 'key' in item;
    });
  }, [items]);
  var rtl = direction === 'rtl';
  var mergedAnimated = useAnimateConfig(animated);

  // ======================== Mobile ========================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    mobile = _useState2[0],
    setMobile = _useState2[1];
  (0,react.useEffect)(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.Z)());
  }, []);

  // ====================== Active Key ======================
  var _useMergedState = (0,useMergedState/* default */.Z)(function () {
      var _tabs$;
      return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
    }, {
      value: activeKey,
      defaultValue: defaultActiveKey
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedActiveKey = _useMergedState2[0],
    setMergedActiveKey = _useMergedState2[1];
  var _useState3 = (0,react.useState)(function () {
      return tabs.findIndex(function (tab) {
        return tab.key === mergedActiveKey;
      });
    }),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];

  // Reset active key if not exist anymore
  (0,react.useEffect)(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]);

  // ===================== Accessibility ====================
  var _useMergedState3 = (0,useMergedState/* default */.Z)(null, {
      value: id
    }),
    _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
    mergedId = _useMergedState4[0],
    setMergedId = _useMergedState4[1];

  // Async generate id to avoid ssr mapping failed
  (0,react.useEffect)(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? 0 : uuid));
      uuid += 1;
    }
  }, []);

  // ======================== Events ========================
  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 || onTabClick(key, e);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange === null || onChange === void 0 || onChange(key);
    }
  }

  // ======================== Render ========================
  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: tabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBarProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    more: more,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: null,
    getPopupContainer: getPopupContainer,
    popupClassName: popupClassName,
    indicator: indicator
  });
  return /*#__PURE__*/react.createElement(TabContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: ref,
    id: id,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-mobile"), mobile), "".concat(prefixCls, "-editable"), editable), "".concat(prefixCls, "-rtl"), rtl), className)
  }, restProps), /*#__PURE__*/react.createElement(Wrapper, (0,esm_extends/* default */.Z)({}, tabNavBarProps, {
    renderTabBar: renderTabBar
  })), /*#__PURE__*/react.createElement(es_TabPanelList, (0,esm_extends/* default */.Z)({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
});
if (false) {}
/* harmony default export */ var es_Tabs = (Tabs);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/index.js

/* harmony default export */ var rc_tabs_es = (es_Tabs);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(35792);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(98675);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/hooks/useAnimateConfig.js

const useAnimateConfig_motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig_useAnimateConfig(prefixCls) {
  let animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    inkBar: true,
    tabPane: false
  };
  let mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = Object.assign({
      inkBar: true
    }, typeof animated === 'object' ? animated : {});
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = Object.assign(Object.assign({}, useAnimateConfig_motion), {
      motionName: (0,motion/* getTransitionName */.m)(prefixCls, 'switch')
    });
  }
  return mergedAnimated;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/hooks/useLegacyItems.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



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
        key,
        props
      } = node;
      const _a = props || {},
        {
          tab
        } = _a,
        restProps = __rest(_a, ["tab"]);
      const item = Object.assign(Object.assign({
        key: String(key)
      }, restProps), {
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(67771);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/style/motion.js

const genMotionStyle = token => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return [{
    [componentCls]: {
      [\`\${componentCls}-switch\`]: {
        '&-appear, &-enter': {
          transition: 'none',
          '&-start': {
            opacity: 0
          },
          '&-active': {
            opacity: 1,
            transition: \`opacity \${motionDurationSlow}\`
          }
        },
        '&-leave': {
          position: 'absolute',
          transition: 'none',
          inset: 0,
          '&-start': {
            opacity: 1
          },
          '&-active': {
            opacity: 0,
            transition: \`opacity \${motionDurationSlow}\`
          }
        }
      }
    }
  },
  // Follow code may reuse in other components
  [(0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down')]];
};
/* harmony default export */ var style_motion = (genMotionStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/style/index.js




const genCardStyle = token => {
  const {
    componentCls,
    tabsCardPadding,
    cardBg,
    cardGutter,
    colorBorderSecondary,
    itemSelectedColor
  } = token;
  return {
    [\`\${componentCls}-card\`]: {
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        [\`\${componentCls}-tab\`]: {
          margin: 0,
          padding: tabsCardPadding,
          background: cardBg,
          border: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${colorBorderSecondary}\`,
          transition: \`all \${token.motionDurationSlow} \${token.motionEaseInOut}\`
        },
        [\`\${componentCls}-tab-active\`]: {
          color: itemSelectedColor,
          background: token.colorBgContainer
        },
        [\`\${componentCls}-ink-bar\`]: {
          visibility: 'hidden'
        }
      },
      // ========================== Top & Bottom ==========================
      [\`&\${componentCls}-top, &\${componentCls}-bottom\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab + \${componentCls}-tab\`]: {
            marginLeft: {
              _skip_check_: true,
              value: (0,cssinjs_es/* unit */.bf)(cardGutter)
            }
          }
        }
      },
      [\`&\${componentCls}-top\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            borderRadius: \`\${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} 0 0\`
          },
          [\`\${componentCls}-tab-active\`]: {
            borderBottomColor: token.colorBgContainer
          }
        }
      },
      [\`&\${componentCls}-bottom\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            borderRadius: \`0 0 \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)}\`
          },
          [\`\${componentCls}-tab-active\`]: {
            borderTopColor: token.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [\`&\${componentCls}-left, &\${componentCls}-right\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab + \${componentCls}-tab\`]: {
            marginTop: (0,cssinjs_es/* unit */.bf)(cardGutter)
          }
        }
      },
      [\`&\${componentCls}-left\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            borderRadius: {
              _skip_check_: true,
              value: \`\${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} 0 0 \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)}\`
            }
          },
          [\`\${componentCls}-tab-active\`]: {
            borderRightColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      },
      [\`&\${componentCls}-right\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            borderRadius: {
              _skip_check_: true,
              value: \`0 \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} 0\`
            }
          },
          [\`\${componentCls}-tab-active\`]: {
            borderLeftColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      }
    }
  };
};
const genDropdownStyle = token => {
  const {
    componentCls,
    itemHoverColor,
    dropdownEdgeChildVerticalPadding
  } = token;
  return {
    [\`\${componentCls}-dropdown\`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token.zIndexPopup,
      display: 'block',
      '&-hidden': {
        display: 'none'
      },
      [\`\${componentCls}-dropdown-menu\`]: {
        maxHeight: token.tabsDropdownHeight,
        margin: 0,
        padding: \`\${(0,cssinjs_es/* unit */.bf)(dropdownEdgeChildVerticalPadding)} 0\`,
        overflowX: 'hidden',
        overflowY: 'auto',
        textAlign: {
          _skip_check_: true,
          value: 'left'
        },
        listStyleType: 'none',
        backgroundColor: token.colorBgContainer,
        backgroundClip: 'padding-box',
        borderRadius: token.borderRadiusLG,
        outline: 'none',
        boxShadow: token.boxShadowSecondary,
        '&-item': Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
          display: 'flex',
          alignItems: 'center',
          minWidth: token.tabsDropdownWidth,
          margin: 0,
          padding: \`\${(0,cssinjs_es/* unit */.bf)(token.paddingXXS)} \${(0,cssinjs_es/* unit */.bf)(token.paddingSM)}\`,
          color: token.colorText,
          fontWeight: 'normal',
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: \`all \${token.motionDurationSlow}\`,
          '> span': {
            flex: 1,
            whiteSpace: 'nowrap'
          },
          '&-remove': {
            flex: 'none',
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM
            },
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            '&:hover': {
              color: itemHoverColor
            }
          },
          '&:hover': {
            background: token.controlItemBgHover
          },
          '&-disabled': {
            '&, &:hover': {
              color: token.colorTextDisabled,
              background: 'transparent',
              cursor: 'not-allowed'
            }
          }
        })
      }
    })
  };
};
const genPositionStyle = token => {
  const {
    componentCls,
    margin,
    colorBorderSecondary,
    horizontalMargin,
    verticalItemPadding,
    verticalItemMargin,
    calc
  } = token;
  return {
    // ========================== Top & Bottom ==========================
    [\`\${componentCls}-top, \${componentCls}-bottom\`]: {
      flexDirection: 'column',
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        margin: horizontalMargin,
        '&::before': {
          position: 'absolute',
          right: {
            _skip_check_: true,
            value: 0
          },
          left: {
            _skip_check_: true,
            value: 0
          },
          borderBottom: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${colorBorderSecondary}\`,
          content: "''"
        },
        [\`\${componentCls}-ink-bar\`]: {
          height: token.lineWidthBold,
          '&-animated': {
            transition: \`width \${token.motionDurationSlow}, left \${token.motionDurationSlow},
            right \${token.motionDurationSlow}\`
          }
        },
        [\`\${componentCls}-nav-wrap\`]: {
          '&::before, &::after': {
            top: 0,
            bottom: 0,
            width: token.controlHeight
          },
          '&::before': {
            left: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowLeft
          },
          '&::after': {
            right: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowRight
          },
          [\`&\${componentCls}-nav-wrap-ping-left::before\`]: {
            opacity: 1
          },
          [\`&\${componentCls}-nav-wrap-ping-right::after\`]: {
            opacity: 1
          }
        }
      }
    },
    [\`\${componentCls}-top\`]: {
      [\`> \${componentCls}-nav,
        > div > \${componentCls}-nav\`]: {
        '&::before': {
          bottom: 0
        },
        [\`\${componentCls}-ink-bar\`]: {
          bottom: 0
        }
      }
    },
    [\`\${componentCls}-bottom\`]: {
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        order: 1,
        marginTop: margin,
        marginBottom: 0,
        '&::before': {
          top: 0
        },
        [\`\${componentCls}-ink-bar\`]: {
          top: 0
        }
      },
      [\`> \${componentCls}-content-holder, > div > \${componentCls}-content-holder\`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [\`\${componentCls}-left, \${componentCls}-right\`]: {
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        flexDirection: 'column',
        minWidth: calc(token.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [\`\${componentCls}-tab\`]: {
          padding: verticalItemPadding,
          textAlign: 'center'
        },
        [\`\${componentCls}-tab + \${componentCls}-tab\`]: {
          margin: verticalItemMargin
        },
        // >>>>>>>>>>> Nav
        [\`\${componentCls}-nav-wrap\`]: {
          flexDirection: 'column',
          '&::before, &::after': {
            right: {
              _skip_check_: true,
              value: 0
            },
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeight
          },
          '&::before': {
            top: 0,
            boxShadow: token.boxShadowTabsOverflowTop
          },
          '&::after': {
            bottom: 0,
            boxShadow: token.boxShadowTabsOverflowBottom
          },
          [\`&\${componentCls}-nav-wrap-ping-top::before\`]: {
            opacity: 1
          },
          [\`&\${componentCls}-nav-wrap-ping-bottom::after\`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [\`\${componentCls}-ink-bar\`]: {
          width: token.lineWidthBold,
          '&-animated': {
            transition: \`height \${token.motionDurationSlow}, top \${token.motionDurationSlow}\`
          }
        },
        [\`\${componentCls}-nav-list, \${componentCls}-nav-operations\`]: {
          flex: '1 0 auto',
          // fix safari scroll problem
          flexDirection: 'column'
        }
      }
    },
    [\`\${componentCls}-left\`]: {
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        [\`\${componentCls}-ink-bar\`]: {
          right: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [\`> \${componentCls}-content-holder, > div > \${componentCls}-content-holder\`]: {
        marginLeft: {
          _skip_check_: true,
          value: (0,cssinjs_es/* unit */.bf)(calc(token.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: true,
          value: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${token.colorBorder}\`
        },
        [\`> \${componentCls}-content > \${componentCls}-tabpane\`]: {
          paddingLeft: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    },
    [\`\${componentCls}-right\`]: {
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        order: 1,
        [\`\${componentCls}-ink-bar\`]: {
          left: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [\`> \${componentCls}-content-holder, > div > \${componentCls}-content-holder\`]: {
        order: 0,
        marginRight: {
          _skip_check_: true,
          value: calc(token.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: true,
          value: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${token.colorBorder}\`
        },
        [\`> \${componentCls}-content > \${componentCls}-tabpane\`]: {
          paddingRight: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    }
  };
};
const genSizeStyle = token => {
  const {
    componentCls,
    cardPaddingSM,
    cardPaddingLG,
    horizontalItemPaddingSM,
    horizontalItemPaddingLG
  } = token;
  return {
    [componentCls]: {
      '&-small': {
        [\`> \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            padding: horizontalItemPaddingSM,
            fontSize: token.titleFontSizeSM
          }
        }
      },
      '&-large': {
        [\`> \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            padding: horizontalItemPaddingLG,
            fontSize: token.titleFontSizeLG
          }
        }
      }
    },
    [\`\${componentCls}-card\`]: {
      [\`&\${componentCls}-small\`]: {
        [\`> \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            padding: cardPaddingSM
          }
        },
        [\`&\${componentCls}-bottom\`]: {
          [\`> \${componentCls}-nav \${componentCls}-tab\`]: {
            borderRadius: \`0 0 \${(0,cssinjs_es/* unit */.bf)(token.borderRadius)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadius)}\`
          }
        },
        [\`&\${componentCls}-top\`]: {
          [\`> \${componentCls}-nav \${componentCls}-tab\`]: {
            borderRadius: \`\${(0,cssinjs_es/* unit */.bf)(token.borderRadius)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadius)} 0 0\`
          }
        },
        [\`&\${componentCls}-right\`]: {
          [\`> \${componentCls}-nav \${componentCls}-tab\`]: {
            borderRadius: {
              _skip_check_: true,
              value: \`0 \${(0,cssinjs_es/* unit */.bf)(token.borderRadius)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadius)} 0\`
            }
          }
        },
        [\`&\${componentCls}-left\`]: {
          [\`> \${componentCls}-nav \${componentCls}-tab\`]: {
            borderRadius: {
              _skip_check_: true,
              value: \`\${(0,cssinjs_es/* unit */.bf)(token.borderRadius)} 0 0 \${(0,cssinjs_es/* unit */.bf)(token.borderRadius)}\`
            }
          }
        }
      },
      [\`&\${componentCls}-large\`]: {
        [\`> \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab\`]: {
            padding: cardPaddingLG
          }
        }
      }
    }
  };
};
const genTabStyle = token => {
  const {
    componentCls,
    itemActiveColor,
    itemHoverColor,
    iconCls,
    tabsHorizontalItemMargin,
    horizontalItemPadding,
    itemSelectedColor,
    itemColor
  } = token;
  const tabCls = \`\${componentCls}-tab\`;
  return {
    [tabCls]: {
      position: 'relative',
      WebkitTouchCallout: 'none',
      WebkitTapHighlightColor: 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      padding: horizontalItemPadding,
      fontSize: token.titleFontSize,
      background: 'transparent',
      border: 0,
      outline: 'none',
      cursor: 'pointer',
      color: itemColor,
      '&-btn, &-remove': Object.assign({
        '&:focus:not(:focus-visible), &:active': {
          color: itemActiveColor
        }
      }, (0,style/* genFocusStyle */.Qy)(token)),
      '&-btn': {
        outline: 'none',
        transition: \`all \${token.motionDurationSlow}\`,
        [\`\${tabCls}-icon:not(:last-child)\`]: {
          marginInlineEnd: token.marginSM
        }
      },
      '&-remove': {
        flex: 'none',
        marginRight: {
          _skip_check_: true,
          value: token.calc(token.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS
        },
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: \`all \${token.motionDurationSlow}\`,
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      '&:hover': {
        color: itemHoverColor
      },
      [\`&\${tabCls}-active \${tabCls}-btn\`]: {
        color: itemSelectedColor,
        textShadow: token.tabsActiveTextShadow
      },
      [\`&\${tabCls}-disabled\`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed'
      },
      [\`&\${tabCls}-disabled \${tabCls}-btn, &\${tabCls}-disabled \${componentCls}-remove\`]: {
        '&:focus, &:active': {
          color: token.colorTextDisabled
        }
      },
      [\`& \${tabCls}-remove \${iconCls}\`]: {
        margin: 0
      },
      [\`\${iconCls}:not(:last-child)\`]: {
        marginRight: {
          _skip_check_: true,
          value: token.marginSM
        }
      }
    },
    [\`\${tabCls} + \${tabCls}\`]: {
      margin: {
        _skip_check_: true,
        value: tabsHorizontalItemMargin
      }
    }
  };
};
const genRtlStyle = token => {
  const {
    componentCls,
    tabsHorizontalItemMarginRTL,
    iconCls,
    cardGutter,
    calc
  } = token;
  const rtlCls = \`\${componentCls}-rtl\`;
  return {
    [rtlCls]: {
      direction: 'rtl',
      [\`\${componentCls}-nav\`]: {
        [\`\${componentCls}-tab\`]: {
          margin: {
            _skip_check_: true,
            value: tabsHorizontalItemMarginRTL
          },
          [\`\${componentCls}-tab:last-of-type\`]: {
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          },
          [iconCls]: {
            marginRight: {
              _skip_check_: true,
              value: 0
            },
            marginLeft: {
              _skip_check_: true,
              value: (0,cssinjs_es/* unit */.bf)(token.marginSM)
            }
          },
          [\`\${componentCls}-tab-remove\`]: {
            marginRight: {
              _skip_check_: true,
              value: (0,cssinjs_es/* unit */.bf)(token.marginXS)
            },
            marginLeft: {
              _skip_check_: true,
              value: (0,cssinjs_es/* unit */.bf)(calc(token.marginXXS).mul(-1).equal())
            },
            [iconCls]: {
              margin: 0
            }
          }
        }
      },
      [\`&\${componentCls}-left\`]: {
        [\`> \${componentCls}-nav\`]: {
          order: 1
        },
        [\`> \${componentCls}-content-holder\`]: {
          order: 0
        }
      },
      [\`&\${componentCls}-right\`]: {
        [\`> \${componentCls}-nav\`]: {
          order: 0
        },
        [\`> \${componentCls}-content-holder\`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [\`&\${componentCls}-card\${componentCls}-top, &\${componentCls}-card\${componentCls}-bottom\`]: {
        [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
          [\`\${componentCls}-tab + \${componentCls}-tab\`]: {
            marginRight: {
              _skip_check_: true,
              value: cardGutter
            },
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          }
        }
      }
    },
    [\`\${componentCls}-dropdown-rtl\`]: {
      direction: 'rtl'
    },
    [\`\${componentCls}-menu-item\`]: {
      [\`\${componentCls}-dropdown-rtl\`]: {
        textAlign: {
          _skip_check_: true,
          value: 'right'
        }
      }
    }
  };
};
const genTabsStyle = token => {
  const {
    componentCls,
    tabsCardPadding,
    cardHeight,
    cardGutter,
    itemHoverColor,
    itemActiveColor,
    colorBorderSecondary
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'flex',
      // ========================== Navigation ==========================
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        [\`\${componentCls}-nav-wrap\`]: {
          position: 'relative',
          display: 'flex',
          flex: 'auto',
          alignSelf: 'stretch',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          transform: 'translate(0)',
          // Fix chrome render bug
          // >>>>> Ping shadow
          '&::before, &::after': {
            position: 'absolute',
            zIndex: 1,
            opacity: 0,
            transition: \`opacity \${token.motionDurationSlow}\`,
            content: "''",
            pointerEvents: 'none'
          }
        },
        [\`\${componentCls}-nav-list\`]: {
          position: 'relative',
          display: 'flex',
          transition: \`opacity \${token.motionDurationSlow}\`
        },
        // >>>>>>>> Operations
        [\`\${componentCls}-nav-operations\`]: {
          display: 'flex',
          alignSelf: 'stretch'
        },
        [\`\${componentCls}-nav-operations-hidden\`]: {
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none'
        },
        [\`\${componentCls}-nav-more\`]: {
          position: 'relative',
          padding: tabsCardPadding,
          background: 'transparent',
          border: 0,
          color: token.colorText,
          '&::after': {
            position: 'absolute',
            right: {
              _skip_check_: true,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.calc(token.controlHeightLG).div(8).equal(),
            transform: 'translateY(100%)',
            content: "''"
          }
        },
        [\`\${componentCls}-nav-add\`]: Object.assign({
          minWidth: cardHeight,
          marginLeft: {
            _skip_check_: true,
            value: cardGutter
          },
          padding: (0,cssinjs_es/* unit */.bf)(token.paddingXS),
          background: 'transparent',
          border: \`\${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} \${token.lineType} \${colorBorderSecondary}\`,
          borderRadius: \`\${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} \${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} 0 0\`,
          outline: 'none',
          cursor: 'pointer',
          color: token.colorText,
          transition: \`all \${token.motionDurationSlow} \${token.motionEaseInOut}\`,
          '&:hover': {
            color: itemHoverColor
          },
          '&:active, &:focus:not(:focus-visible)': {
            color: itemActiveColor
          }
        }, (0,style/* genFocusStyle */.Qy)(token))
      },
      [\`\${componentCls}-extra-content\`]: {
        flex: 'none'
      },
      // ============================ InkBar ============================
      [\`\${componentCls}-ink-bar\`]: {
        position: 'absolute',
        background: token.inkBarColor,
        pointerEvents: 'none'
      }
    }), genTabStyle(token)), {
      // =========================== TabPanes ===========================
      [\`\${componentCls}-content\`]: {
        position: 'relative',
        width: '100%'
      },
      [\`\${componentCls}-content-holder\`]: {
        flex: 'auto',
        minWidth: 0,
        minHeight: 0
      },
      [\`\${componentCls}-tabpane\`]: {
        outline: 'none',
        '&-hidden': {
          display: 'none'
        }
      }
    }),
    [\`\${componentCls}-centered\`]: {
      [\`> \${componentCls}-nav, > div > \${componentCls}-nav\`]: {
        [\`\${componentCls}-nav-wrap\`]: {
          [\`&:not([class*='\${componentCls}-nav-wrap-ping']) > \${componentCls}-nav-list\`]: {
            margin: 'auto'
          }
        }
      }
    }
  };
};
const prepareComponentToken = token => {
  const cardHeight = token.controlHeightLG;
  return {
    zIndexPopup: token.zIndexPopupBase + 50,
    cardBg: token.colorFillAlter,
    cardHeight,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: \`\${(cardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth}px \${token.padding}px\`,
    cardPaddingSM: \`\${token.paddingXXS * 1.5}px \${token.padding}px\`,
    cardPaddingLG: \`\${token.paddingXS}px \${token.padding}px \${token.paddingXXS * 1.5}px\`,
    titleFontSize: token.fontSize,
    titleFontSizeLG: token.fontSizeLG,
    titleFontSizeSM: token.fontSize,
    inkBarColor: token.colorPrimary,
    horizontalMargin: \`0 0 \${token.margin}px 0\`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: \`\`,
    horizontalItemMarginRTL: \`\`,
    horizontalItemPadding: \`\${token.paddingSM}px 0\`,
    horizontalItemPaddingSM: \`\${token.paddingXS}px 0\`,
    horizontalItemPaddingLG: \`\${token.padding}px 0\`,
    verticalItemPadding: \`\${token.paddingXS}px \${token.paddingLG}px\`,
    verticalItemMargin: \`\${token.margin}px 0 0 0\`,
    itemColor: token.colorText,
    itemSelectedColor: token.colorPrimary,
    itemHoverColor: token.colorPrimaryHover,
    itemActiveColor: token.colorPrimaryActive,
    cardGutter: token.marginXXS / 2
  };
};
// ============================== Export ==============================
/* harmony default export */ var tabs_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Tabs', token => {
  const tabsToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    // \`cardPadding\` is empty by default, so we could calculate with dynamic \`cardHeight\`
    tabsCardPadding: token.cardPadding,
    dropdownEdgeChildVerticalPadding: token.paddingXXS,
    tabsActiveTextShadow: '0 0 0.25px currentcolor',
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: \`0 0 0 \${(0,cssinjs_es/* unit */.bf)(token.horizontalItemGutter)}\`,
    tabsHorizontalItemMarginRTL: \`0 0 0 \${(0,cssinjs_es/* unit */.bf)(token.horizontalItemGutter)}\`
  });
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), style_motion(tabsToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/TabPane.js
const TabPane_TabPane = () => null;
if (false) {}
/* harmony default export */ var tabs_TabPane = (TabPane_TabPane);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/index.js
"use client";

var tabs_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














const tabs_Tabs = props => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
  const {
      type,
      className,
      rootClassName,
      size: customSize,
      onEdit,
      hideAdd,
      centered,
      addIcon,
      removeIcon,
      moreIcon,
      more,
      popupClassName,
      children,
      items,
      animated,
      style,
      indicatorSize,
      indicator
    } = props,
    otherProps = tabs_rest(props, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator"]);
  const {
    prefixCls: customizePrefixCls
  } = otherProps;
  const {
    direction,
    tabs,
    getPrefixCls,
    getPopupContainer
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = tabs_style(prefixCls, rootCls);
  let editable;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, _ref) => {
        let {
          key,
          event
        } = _ref;
        onEdit === null || onEdit === void 0 ? void 0 : onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: (_a = removeIcon !== null && removeIcon !== void 0 ? removeIcon : tabs === null || tabs === void 0 ? void 0 : tabs.removeIcon) !== null && _a !== void 0 ? _a : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null),
      addIcon: (addIcon !== null && addIcon !== void 0 ? addIcon : tabs === null || tabs === void 0 ? void 0 : tabs.addIcon) || /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, null),
      showAdd: hideAdd !== true
    };
  }
  const rootPrefixCls = getPrefixCls();
  if (false) {}
  const size = (0,useSize/* default */.Z)(customSize);
  const mergedItems = useLegacyItems(items, children);
  const mergedAnimated = useAnimateConfig_useAnimateConfig(prefixCls, animated);
  const mergedStyle = Object.assign(Object.assign({}, tabs === null || tabs === void 0 ? void 0 : tabs.style), style);
  const mergedIndicator = {
    align: (_b = indicator === null || indicator === void 0 ? void 0 : indicator.align) !== null && _b !== void 0 ? _b : (_c = tabs === null || tabs === void 0 ? void 0 : tabs.indicator) === null || _c === void 0 ? void 0 : _c.align,
    size: (_g = (_e = (_d = indicator === null || indicator === void 0 ? void 0 : indicator.size) !== null && _d !== void 0 ? _d : indicatorSize) !== null && _e !== void 0 ? _e : (_f = tabs === null || tabs === void 0 ? void 0 : tabs.indicator) === null || _f === void 0 ? void 0 : _f.size) !== null && _g !== void 0 ? _g : tabs === null || tabs === void 0 ? void 0 : tabs.indicatorSize
  };
  return wrapCSSVar(/*#__PURE__*/react.createElement(rc_tabs_es, Object.assign({
    direction: direction,
    getPopupContainer: getPopupContainer
  }, otherProps, {
    items: mergedItems,
    className: classnames_default()({
      [\`\${prefixCls}-\${size}\`]: size,
      [\`\${prefixCls}-card\`]: ['card', 'editable-card'].includes(type),
      [\`\${prefixCls}-editable-card\`]: type === 'editable-card',
      [\`\${prefixCls}-centered\`]: centered
    }, tabs === null || tabs === void 0 ? void 0 : tabs.className, className, rootClassName, hashId, cssVarCls, rootCls),
    popupClassName: classnames_default()(popupClassName, hashId, cssVarCls, rootCls),
    style: mergedStyle,
    editable: editable,
    more: Object.assign({
      icon: (_l = (_k = (_j = (_h = tabs === null || tabs === void 0 ? void 0 : tabs.more) === null || _h === void 0 ? void 0 : _h.icon) !== null && _j !== void 0 ? _j : tabs === null || tabs === void 0 ? void 0 : tabs.moreIcon) !== null && _k !== void 0 ? _k : moreIcon) !== null && _l !== void 0 ? _l : /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
      transitionName: \`\${rootPrefixCls}-slide-up\`
    }, more),
    prefixCls: prefixCls,
    animated: mergedAnimated,
    indicator: mergedIndicator
  })));
};
tabs_Tabs.TabPane = tabs_TabPane;
if (false) {}
/* harmony default export */ var tabs = (tabs_Tabs);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkxOTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN0Qyw0REFBNEIsdUJBQWEsTUFBTSxFOzs7Ozs7Ozs7Ozs7QUNEdUI7QUFDckM7QUFDMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQVE7QUFDMUIsaUJBQWlCLGdDQUFjO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQU07QUFDM0Isa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksa0JBQUc7QUFDUDtBQUNBLEVBQUUsbUJBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQUc7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBZSxZQUFZLEU7O0FDekUwQztBQUNyQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLFNBQVMsaUJBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQ0FBYSxHQUFHOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILEM7O0FDbkNzRTtBQUN2QztBQUNoQjtBQUNmLGlCQUFpQixZQUFZO0FBQzdCLHdCQUF3QixjQUFjLEdBQUc7QUFDekMsdUJBQXVCLGdDQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxDOztBQ2hCc0U7QUFDdkM7QUFDVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlO0FBQ2Ysa0JBQWtCLGtCQUFRO0FBQzFCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFNOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGdCQUFNO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnQkFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7O0FDMUpzRTtBQUNHO0FBQ2hDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Ysa0JBQWtCLGtCQUFRO0FBQzFCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFNO0FBQ3hCLG9CQUFvQixnQkFBTTtBQUMxQjs7QUFFQTtBQUNBLEVBQUUsZ0RBQXFCO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUJBQWlCLGdCQUFNO0FBQ3ZCLG1CQUFtQixrQkFBUSxHQUFHO0FBQzlCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBLGNBQWMsZ0JBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7O0FDcERnQztBQUNoQyxJQUFJLDRCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlCQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixrREFBa0QsNEJBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEMsb0RBQW9ELDRCQUFZO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7QUNqQytCO0FBQy9CLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELHlEQUFlLFNBQVMsRTs7QUN0QmdDO0FBQ3pCO0FBQy9CLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sNkJBQU8sdUNBQXVDLG9CQUFvQjtBQUN4RTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCw0REFBZSxZQUFZLEU7Ozs7OztBQ2hDYztBQUNSO0FBQ0Y7QUFDL0IsVUFBVSxzQkFBTztBQUNqQixRQUFRLHNCQUFPO0FBQ0E7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNCQUFHO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxjQUFjO0FBQ2pCLEM7O0FDaEVvRTtBQUNqQjtBQUNuRCwyQkFBMkIsb0JBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLDZCQUFVLE1BQU0sNkJBQVU7QUFDOUMsc0JBQXNCLG1CQUFtQixDQUFDLGNBQWMsOEJBQThCLG1CQUFtQjtBQUN6RztBQUNBLEdBQUcsZ0JBQWdCLGtCQUFrQjtBQUNyQyxTQUFTLDZCQUFVO0FBQ25CLEdBQUc7QUFDSCxDQUFDO0FBQ0QsK0NBQWUsT0FBTyxFOztBQ3RCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWUsVUFBVSxFOztBQzNDaUM7QUFDYztBQUNGO0FBQ29CO0FBQzFGO0FBQzRDO0FBQ1I7QUFDZ0M7QUFDMUM7QUFDOEI7QUFDeEI7QUFDTTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMENBQXdCO0FBQ3pDLHdCQUF3QixjQUFjO0FBQ3RDLHVCQUF1QixnQ0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQixtQkFBbUIsWUFBWTtBQUMvQixpQkFBaUIsWUFBWTtBQUM3QixFQUFFLHlCQUF5QjtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUIsQ0FBQyxVQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRCxlQUFlLG9CQUFVO0FBQ3pCLFNBQVMsNkJBQVUsYUFBYSw2QkFBVSxXQUFXLDZCQUFVO0FBQy9ELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUIsQ0FBQyx5QkFBTyxFQUFFLDhCQUFRO0FBQzNEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQVUsbUJBQW1CLGlDQUFlLEdBQUc7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZEQUE0QixnQkFBZ0IsVUFBVSxFOztBQzlIcEI7QUFDbEMsbURBQWUsV0FBUSxFOzs7O0FDRG1DO0FBQ2M7QUFDRjtBQUNsQztBQUNEO0FBQ007QUFDQTtBQUNWO0FBQ2E7QUFDTDtBQUNIO0FBQ3BDLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFRO0FBQzFCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLG1CQUFtQixDQUFDLDBCQUFJO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLHdCQUF3QixtQkFBbUIsQ0FBQywyQkFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlLG1CQUFtQixpREFBaUQsbUJBQW1CO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQU8sT0FBTyxzQkFBTyxRQUFRLHNCQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFPO0FBQ2xCO0FBQ0E7QUFDQSxXQUFXLHNCQUFPO0FBQ2xCLFdBQVcsc0JBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtQkFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxtQkFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0IsaUNBQWUsR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQkFBVSxDQUFDLGlDQUFlLEdBQUc7QUFDdEQsOENBQThDLG1CQUFtQixDQUFDLGNBQVEsRUFBRSw4QkFBUTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHLDJCQUEyQixtQkFBbUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLG1CQUFtQjtBQUN6QyxlQUFlLG9CQUFVO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHLHlCQUF5QixtQkFBbUIsQ0FBQyxvQkFBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELDBFQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsRTs7QUNsTXNFO0FBQ3BDO0FBQ0s7QUFDVjtBQUN3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQiw0REFBNEQsbUJBQW1CO0FBQy9FLEdBQUc7QUFDSCwwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0EsWUFBWTtBQUNaO0FBQ0EscUJBQXFCLGNBQWM7QUFDbkMsZUFBZSxvQkFBVSxZQUFZLGlDQUFlLENBQUMsaUNBQWUsQ0FBQyxpQ0FBZSxHQUFHO0FBQ3ZGO0FBQ0E7QUFDQSxHQUFHLGVBQWUsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxzQkFBTyxRQUFRLHNCQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUcsdUJBQXVCLG1CQUFtQjtBQUM3QztBQUNBLEdBQUcsd0RBQXdELG1CQUFtQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx1REFBZSxPQUFPLEU7O0FDbEZvQztBQUNjO0FBQ007QUFDVDtBQUNDO0FBQ3RFO0FBQ29DO0FBQ1k7QUFDQztBQUNGO0FBQ2hCO0FBQ3FCO0FBQ2I7QUFDVTtBQUNKO0FBQ0k7QUFDQTtBQUNjO0FBQ1I7QUFDSDtBQUNoQjtBQUNNO0FBQ0U7QUFDWjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLENBQUMsVUFBVTtBQUNyRDtBQUNBO0FBQ0EscUJBQXFCLGdCQUFNO0FBQzNCLHFCQUFxQixnQkFBTTtBQUMzQixzQkFBc0IsZ0JBQU07QUFDNUIsdUJBQXVCLGdCQUFNO0FBQzdCLG1CQUFtQixnQkFBTTtBQUN6QixzQkFBc0IsZ0JBQU07QUFDNUIsMEJBQTBCLGdCQUFNO0FBQ2hDO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixnQ0FBYztBQUNuQztBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixnQ0FBYztBQUNuQztBQUNBO0FBQ0Esa0JBQWtCLGtCQUFRO0FBQzFCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMsdUJBQXVCLGdDQUFjO0FBQ3JDO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsZ0JBQU07QUFDN0IsbUJBQW1CLGtCQUFRO0FBQzNCLGtCQUFrQixnQ0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsbUJBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFhLENBQUMsZ0NBQWEsR0FBRyxZQUFZO0FBQ2xFO0FBQ0EsS0FBSztBQUNMLHdCQUF3QixnQ0FBYztBQUN0QztBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDJCQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQixDQUFDLGtCQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVMQUF1TCxjQUFjO0FBQ3JNO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRSxtQkFBUztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9DQUFrQixtQkFBbUIsb0NBQWtCOztBQUVwRjtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsRUFBRSxtQkFBUztBQUNYO0FBQ0EsR0FBRywwQ0FBMEMsU0FBUyxtQkFBbUIsU0FBUzs7QUFFbEY7QUFDQSxFQUFFLG1CQUFTO0FBQ1g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQixDQUFDLGlCQUFjO0FBQ3hEO0FBQ0EsR0FBRyxlQUFlLG1CQUFtQjtBQUNyQyxTQUFTLGdDQUFhO0FBQ3RCO0FBQ0EsZUFBZSxvQkFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxlQUFlLG1CQUFtQixDQUFDLHVCQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQkFBZ0IsbUJBQW1CLENBQUMsaUJBQWM7QUFDckQ7QUFDQSxHQUFHLGVBQWUsbUJBQW1CO0FBQ3JDLGVBQWUsb0JBQVUsYUFBYSxpQ0FBZSxDQUFDLGlDQUFlLENBQUMsaUNBQWUsQ0FBQyxpQ0FBZSxHQUFHO0FBQ3hHO0FBQ0EsR0FBRyxlQUFlLG1CQUFtQixDQUFDLGlCQUFjO0FBQ3BEO0FBQ0EsR0FBRyxlQUFlLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlCQUF5QixtQkFBbUIsQ0FBQyxvQkFBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWEsQ0FBQyxnQ0FBYSxHQUFHLHVEQUF1RDtBQUNoRztBQUNBLEtBQUs7QUFDTCxHQUFHLGdCQUFnQixtQkFBbUI7QUFDdEMsZUFBZSxvQkFBVSxtQ0FBbUMsaUNBQWUsR0FBRztBQUM5RTtBQUNBLEdBQUcsb0JBQW9CLG1CQUFtQixDQUFDLHdCQUFhLEVBQUUsOEJBQVEsR0FBRztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGlCQUFpQixtQkFBbUIsQ0FBQyx1QkFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRCxrREFBZSxVQUFVLEU7O0FDbmRXO0FBQ0w7QUFDL0IsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQkFBVTtBQUN6QjtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QseURBQWUsT0FBTyxFOztBQ3hCb0M7QUFDVztBQUNxQjtBQUMxRixJQUFJLGdCQUFTO0FBQ2I7QUFDQTs7QUFFK0I7QUFDSjtBQUNZO0FBQ087QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUF3QixPQUFPLGdCQUFTO0FBQ3hELDBCQUEwQixnQkFBZ0IsQ0FBQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWEsQ0FBQyxnQ0FBYSxHQUFHLGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQ0FBd0I7QUFDakQsNEJBQTRCLG1CQUFtQixDQUFDLG9CQUFPLEVBQUUsOEJBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsd0NBQXdDLGFBQVU7QUFDbEQ7QUFDQSxzQkFBc0IsbUJBQW1CLENBQUMsYUFBVTtBQUNwRDtBQUNBLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELDRDQUFlLGlCQUFpQixFOzs7O0FDdEMwQjtBQUNXO0FBQ3FCO0FBQ2xCO0FBQ3hFLElBQUkscUJBQVM7QUFDdUI7QUFDRjtBQUNIO0FBQ1E7QUFDUDtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLENBQUMsVUFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekMsZUFBZSxvQkFBVTtBQUN6QixHQUFHLGVBQWUsbUJBQW1CO0FBQ3JDLGVBQWUsb0JBQVUsMEZBQTBGLGlDQUFlLEdBQUc7QUFDckksR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQXdCLE9BQU8scUJBQVM7QUFDN0Q7QUFDQSx3QkFBd0IsbUJBQW1CLENBQUMsNEJBQVMsRUFBRSw4QkFBUTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CLENBQUMsb0JBQU8sRUFBRSw4QkFBUSxHQUFHO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFhLENBQUMsZ0NBQWEsR0FBRztBQUM3QyxtQkFBbUIsb0JBQVU7QUFDN0I7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLG9EQUFlLFlBQVksRTs7OztBQ3ZENkI7QUFDYTtBQUM1QjtBQUMxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHFCQUFxQixnQ0FBYTtBQUNsQztBQUNBLEtBQUssRUFBRSw2QkFBTyx1Q0FBdUM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUMsRUFBRSxFQUUxQztBQUNMO0FBQ0E7QUFDQTtBQUNBLEM7O0FDcEMwRDtBQUNjO0FBQ0g7QUFDQztBQUNkO0FBQ2tDO0FBQzFGLElBQUksYUFBUztBQUNiO0FBQ29DO0FBQ3lCO0FBQ2xCO0FBQ1o7QUFDYTtBQUNOO0FBQ2U7QUFDWDtBQUNjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBd0IsUUFBUSxhQUFTO0FBQ3pELGFBQWEsYUFBYTtBQUMxQjtBQUNBLHFCQUFxQiw2QkFBTztBQUM1QixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsdUJBQXVCLGdCQUFnQjs7QUFFdkM7QUFDQSxrQkFBa0Isa0JBQVE7QUFDMUIsaUJBQWlCLGdDQUFjO0FBQy9CO0FBQ0E7QUFDQSxFQUFFLG1CQUFTO0FBQ1g7QUFDQSxjQUFjLDJCQUFRO0FBQ3RCLEdBQUc7O0FBRUg7QUFDQSx3QkFBd0IsaUNBQWM7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLHVCQUF1QixnQ0FBYztBQUNyQztBQUNBO0FBQ0EsbUJBQW1CLGtCQUFRO0FBQzNCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLGlCQUFpQixnQ0FBYztBQUMvQjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtQkFBUztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHlCQUF5QixpQ0FBYztBQUN2QztBQUNBLEtBQUs7QUFDTCx1QkFBdUIsZ0NBQWM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLEVBQUUsbUJBQVM7QUFDWDtBQUNBLG9DQUFvQyxNQUErQixHQUFHLENBQU07QUFDNUU7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBYSxDQUFDLGdDQUFhLEdBQUcsa0JBQWtCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsbUJBQW1CLENBQUMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZSxtQkFBbUIsUUFBUSw4QkFBUTtBQUNyRDtBQUNBO0FBQ0EsZUFBZSxvQkFBVSwyREFBMkQsaUNBQWUsQ0FBQyxpQ0FBZSxDQUFDLGlDQUFlLEdBQUc7QUFDdEksR0FBRywyQkFBMkIsbUJBQW1CLENBQUMsT0FBaUIsRUFBRSw4QkFBUSxHQUFHO0FBQ2hGO0FBQ0EsR0FBRyxpQkFBaUIsbUJBQW1CLENBQUMsZUFBWSxFQUFFLDhCQUFRO0FBQzlEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCw0Q0FBZSxJQUFJLEU7O0FDbExPO0FBQzFCLCtDQUFlLE9BQUksRTs7Ozs7Ozs7OztBQ0RvQztBQUN2RCxNQUFNLHVCQUFNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTLGlDQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSyw4Q0FBOEM7QUFDbkQ7QUFDQTtBQUNBLGlFQUFpRSxFQUFFLHVCQUFNO0FBQ3pFLGtCQUFrQixtQ0FBaUI7QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQSxDOzs7O0FDakNBLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7QUFDQTtBQUNBLDRIQUE0SCxjQUFjO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQ21CO0FBQ0U7QUFDcEQ7QUFDQTtBQUNBO0FBQ2U7QUFDZixNQUFNLEtBQXFDLEVBQUUsRUFHMUM7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQU87QUFDL0IscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzNDcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLG1DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHLGlDQUFlLHFCQUFxQixpQ0FBZTtBQUN0RDtBQUNBLGlEQUFlLGNBQWMsRTs7QUNyQ2M7QUFDK0I7QUFDVDtBQUMzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsUUFBUSxhQUFhO0FBQ3JCLFlBQVksYUFBYSxnQkFBZ0IsYUFBYTtBQUN0RCxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUFJLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQjtBQUNyRiw2QkFBNkIsMEJBQTBCLEVBQUUsc0JBQXNCO0FBQy9FLFNBQVM7QUFDVCxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLFNBQVM7QUFDVCxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsYUFBYSxTQUFTLGFBQWE7QUFDOUMsY0FBYyxhQUFhLGdCQUFnQixhQUFhO0FBQ3hELGNBQWMsYUFBYSxTQUFTLGFBQWE7QUFDakQ7QUFDQTtBQUNBLHFCQUFxQiwyQkFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVyxhQUFhO0FBQ3hCLGNBQWMsYUFBYSxnQkFBZ0IsYUFBYTtBQUN4RCxjQUFjLGFBQWE7QUFDM0IsNkJBQTZCLDJCQUFJLHdCQUF3QixFQUFFLDJCQUFJLHdCQUF3QjtBQUN2RixXQUFXO0FBQ1gsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxXQUFXLGFBQWE7QUFDeEIsY0FBYyxhQUFhLGdCQUFnQixhQUFhO0FBQ3hELGNBQWMsYUFBYTtBQUMzQixpQ0FBaUMsMkJBQUksd0JBQXdCLEVBQUUsMkJBQUksdUJBQXVCO0FBQzFGLFdBQVc7QUFDWCxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxhQUFhLFVBQVUsYUFBYTtBQUMvQyxjQUFjLGFBQWEsZ0JBQWdCLGFBQWE7QUFDeEQsY0FBYyxhQUFhLFNBQVMsYUFBYTtBQUNqRCx1QkFBdUIsMkJBQUk7QUFDM0I7QUFDQTtBQUNBLE9BQU87QUFDUCxXQUFXLGFBQWE7QUFDeEIsY0FBYyxhQUFhLGdCQUFnQixhQUFhO0FBQ3hELGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0Esd0JBQXdCLDJCQUFJLHdCQUF3QixNQUFNLDJCQUFJLHVCQUF1QjtBQUNyRjtBQUNBLFdBQVc7QUFDWCxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFdBQVcsYUFBYTtBQUN4QixjQUFjLGFBQWEsZ0JBQWdCLGFBQWE7QUFDeEQsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQSwwQkFBMEIsMkJBQUksd0JBQXdCLEVBQUUsMkJBQUksd0JBQXdCO0FBQ3BGO0FBQ0EsV0FBVztBQUNYLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxRQUFRLGFBQWEsMkNBQTJDLEVBQUUsZ0NBQWM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBLG9CQUFvQiwyQkFBSSxvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRSwwQkFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBSSxvQkFBb0IsRUFBRSwyQkFBSSxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFFBQVEsYUFBYSxRQUFRLGFBQWE7QUFDMUM7QUFDQSxZQUFZLGFBQWEsZ0JBQWdCLGFBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCwyQkFBMkIsMkJBQUksbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCO0FBQzNGO0FBQ0EsU0FBUztBQUNULFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsaUNBQWlDLHlCQUF5QixTQUFTLHlCQUF5QjtBQUM1RixvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0EsU0FBUztBQUNULFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWCxlQUFlLGFBQWE7QUFDNUI7QUFDQSxXQUFXO0FBQ1gsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsYUFBYTtBQUNyQixZQUFZLGFBQWE7QUFDekIsa0JBQWtCLGFBQWE7QUFDL0I7QUFDQTtBQUNBLFNBQVM7QUFDVCxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsYUFBYTtBQUNyQixZQUFZLGFBQWEsZ0JBQWdCLGFBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLE9BQU87QUFDUCxZQUFZLGFBQWEsMkJBQTJCLGFBQWE7QUFDakU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsYUFBYSxTQUFTLGFBQWE7QUFDM0MsWUFBWSxhQUFhLGdCQUFnQixhQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsU0FBUztBQUNULFlBQVksYUFBYSxTQUFTLGFBQWE7QUFDL0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlLGFBQWE7QUFDNUI7QUFDQSxXQUFXO0FBQ1gsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLGtDQUFrQyx5QkFBeUIsUUFBUSx5QkFBeUI7QUFDNUY7QUFDQSxTQUFTO0FBQ1QsWUFBWSxhQUFhLGFBQWEsYUFBYTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsYUFBYTtBQUNyQixZQUFZLGFBQWEsZ0JBQWdCLGFBQWE7QUFDdEQsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsWUFBWSxhQUFhLDJCQUEyQixhQUFhO0FBQ2pFO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQUk7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQUksbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCO0FBQ2pGLFNBQVM7QUFDVCxjQUFjLGFBQWEsYUFBYSxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLGFBQWE7QUFDckIsWUFBWSxhQUFhLGdCQUFnQixhQUFhO0FBQ3REO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsWUFBWSxhQUFhLDJCQUEyQixhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQUksbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCO0FBQ2pGLFNBQVM7QUFDVCxjQUFjLGFBQWEsYUFBYSxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxjQUFjLGFBQWE7QUFDM0IsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSxhQUFhO0FBQ3JCLFdBQVcsYUFBYTtBQUN4QixjQUFjLGFBQWE7QUFDM0IsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYSxhQUFhO0FBQzFCLGdCQUFnQixhQUFhLE9BQU8sYUFBYTtBQUNqRCxpQ0FBaUMsMkJBQUksc0JBQXNCLEVBQUUsMkJBQUkscUJBQXFCO0FBQ3RGO0FBQ0EsU0FBUztBQUNULGFBQWEsYUFBYTtBQUMxQixnQkFBZ0IsYUFBYSxPQUFPLGFBQWE7QUFDakQsNkJBQTZCLDJCQUFJLHNCQUFzQixFQUFFLDJCQUFJLHNCQUFzQjtBQUNuRjtBQUNBLFNBQVM7QUFDVCxhQUFhLGFBQWE7QUFDMUIsZ0JBQWdCLGFBQWEsT0FBTyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQSwwQkFBMEIsMkJBQUksc0JBQXNCLEVBQUUsMkJBQUksc0JBQXNCO0FBQ2hGO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYSxhQUFhO0FBQzFCLGdCQUFnQixhQUFhLE9BQU8sYUFBYTtBQUNqRDtBQUNBO0FBQ0Esd0JBQXdCLDJCQUFJLHNCQUFzQixNQUFNLDJCQUFJLHFCQUFxQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVyxhQUFhO0FBQ3hCLGNBQWMsYUFBYTtBQUMzQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUUsK0JBQWE7QUFDdEI7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxXQUFXLE9BQU8sVUFBVSxPQUFPO0FBQ25DO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVyxPQUFPLFlBQVksT0FBTyxTQUFTLE9BQU8sWUFBWSxhQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxZQUFZLE9BQU8sVUFBVSxRQUFRO0FBQ3JDO0FBQ0EsT0FBTztBQUNQLFVBQVUsUUFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsUUFBUSxJQUFJLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQiwyQkFBSTtBQUN6QjtBQUNBLFdBQVc7QUFDWCxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBLHFCQUFxQiwyQkFBSTtBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQiwyQkFBSTtBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxXQUFXLGFBQWE7QUFDeEIsY0FBYyxhQUFhO0FBQzNCO0FBQ0EsU0FBUztBQUNULGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0EsT0FBTztBQUNQLFdBQVcsYUFBYTtBQUN4QixjQUFjLGFBQWE7QUFDM0I7QUFDQSxTQUFTO0FBQ1QsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGFBQWEsT0FBTyxhQUFhLFNBQVMsYUFBYSxPQUFPLGFBQWE7QUFDdEYsY0FBYyxhQUFhLGdCQUFnQixhQUFhO0FBQ3hELGNBQWMsYUFBYSxTQUFTLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsYUFBYTtBQUNyQjtBQUNBLEtBQUs7QUFDTCxRQUFRLGFBQWE7QUFDckIsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw4RUFBOEUsRUFBRSxnQ0FBYztBQUM5RjtBQUNBO0FBQ0EsWUFBWSxhQUFhLGdCQUFnQixhQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlCQUF5QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFELFNBQVM7QUFDVDtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsU0FBUztBQUNULFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxtQkFBbUIsMkJBQUk7QUFDdkI7QUFDQSxxQkFBcUIsMkJBQUksbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCO0FBQ3JGLDJCQUEyQiwyQkFBSSx3QkFBd0IsRUFBRSwyQkFBSSx3QkFBd0I7QUFDckY7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBCQUEwQixFQUFFLHNCQUFzQjtBQUMvRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSwrQkFBYTtBQUN4QixPQUFPO0FBQ1AsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLGFBQWE7QUFDckIsWUFBWSxhQUFhLGdCQUFnQixhQUFhO0FBQ3RELFlBQVksYUFBYTtBQUN6Qiw2QkFBNkIsYUFBYSxzQkFBc0IsYUFBYTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1GQUFtRixLQUFLLGNBQWM7QUFDMUgsc0JBQXNCLHVCQUF1QixLQUFLLGNBQWM7QUFDaEUsc0JBQXNCLGdCQUFnQixLQUFLLGNBQWMsS0FBSyx1QkFBdUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QyxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELGdDQUFnQyxjQUFjO0FBQzlDLDRCQUE0QixnQkFBZ0IsS0FBSyxnQkFBZ0I7QUFDakUsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFlLHVDQUFhO0FBQzVCLG9CQUFvQix1Q0FBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMkJBQUksNkJBQTZCO0FBQ3hFLDBDQUEwQywyQkFBSSw2QkFBNkI7QUFDM0UsR0FBRztBQUNILHVLQUF1SyxZQUFjO0FBQ3JMLENBQUMsd0JBQXdCLEU7O0FDNXpCekIsTUFBTSxlQUFPO0FBQ2IsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsaURBQWUsZUFBTyxFOztBQ0p0Qjs7QUFFQSxJQUFJLFNBQU0sR0FBRyxTQUFJLElBQUksU0FBSTtBQUN6QjtBQUNBO0FBQ0EsNEhBQTRILGNBQWM7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDK0I7QUFDc0M7QUFDTTtBQUNSO0FBQy9CO0FBQ1A7QUFDb0I7QUFDRTtBQUNjO0FBQ1Y7QUFDQztBQUNKO0FBQ3JCO0FBQ0M7QUFDaEMsTUFBTSxTQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixpQkFBaUIsU0FBTTtBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsNkJBQWE7QUFDcEM7QUFDQSxrQkFBa0IsK0JBQVk7QUFDOUIsMENBQTBDLFVBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxPQUFPO0FBQ1AsK0xBQStMLG1CQUFtQixDQUFDLDRCQUFhO0FBQ2hPLDZJQUE2SSxtQkFBbUIsQ0FBQywyQkFBWTtBQUM3SztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUMsRUFBRSxFQUkxQztBQUNILGVBQWUsMEJBQU87QUFDdEIsc0JBQXNCLGNBQWM7QUFDcEMseUJBQXlCLGlDQUFnQjtBQUN6QyxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CLENBQUMsVUFBTTtBQUMzRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxvQkFBVTtBQUN6QixVQUFVLFVBQVUsR0FBRyxLQUFLO0FBQzVCLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLEtBQUs7QUFDTCxvQkFBb0Isb0JBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsOFRBQThULG1CQUFtQixDQUFDLCtCQUFnQjtBQUNsVyx5QkFBeUIsY0FBYztBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBSSxXQUFXLFlBQU87QUFDdEIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QseUNBQWUsU0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYkNvbnRleHQuanM/Zjg1NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9ob29rcy91c2VJbmRpY2F0b3IuanM/ZDUxMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9ob29rcy91c2VPZmZzZXRzLmpzP2Q5ZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlU3luY1N0YXRlLmpzP2NjOTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlVG91Y2hNb3ZlLmpzPzJmNTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlVXBkYXRlLmpzPzI0OTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlVmlzaWJsZVJhbmdlLmpzPzRmNDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvdXRpbC5qcz9jMDhiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYk5hdkxpc3QvQWRkQnV0dG9uLmpzP2FhNzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiTmF2TGlzdC9FeHRyYUNvbnRlbnQuanM/YjVkNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vZXMvaG9va3MvdXNlQWNjZXNzaWJpbGl0eS5qcz80M2QwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL25vZGVfbW9kdWxlcy9yYy1kcm9wZG93bi9lcy9PdmVybGF5LmpzPzRhNGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2VzL3BsYWNlbWVudHMuanM/OGYzNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vZXMvRHJvcGRvd24uanM/ZGViMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vZXMvaW5kZXguanM/YTdhZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L09wZXJhdGlvbk5vZGUuanM/OTEzMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L1RhYk5vZGUuanM/ZTg1NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L2luZGV4LmpzPzkzNGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiUGFuZWxMaXN0L1RhYlBhbmUuanM/MmI2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L1dyYXBwZXIuanM/MTZlNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJQYW5lbExpc3QvaW5kZXguanM/YzFlOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9ob29rcy91c2VBbmltYXRlQ29uZmlnLmpzPzI4MjYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFicy5qcz84ZWYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL2luZGV4LmpzP2NjZTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9ob29rcy91c2VBbmltYXRlQ29uZmlnLmpzPzc2OTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9ob29rcy91c2VMZWdhY3lJdGVtcy5qcz81M2NjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvc3R5bGUvbW90aW9uLmpzP2FkNDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9zdHlsZS9pbmRleC5qcz9mMTFmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvVGFiUGFuZS5qcz9lMmIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvaW5kZXguanM/YTdkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VJbmRpY2F0b3IgPSBmdW5jdGlvbiB1c2VJbmRpY2F0b3Iob3B0aW9ucykge1xuICB2YXIgYWN0aXZlVGFiT2Zmc2V0ID0gb3B0aW9ucy5hY3RpdmVUYWJPZmZzZXQsXG4gICAgaG9yaXpvbnRhbCA9IG9wdGlvbnMuaG9yaXpvbnRhbCxcbiAgICBydGwgPSBvcHRpb25zLnJ0bCxcbiAgICBfb3B0aW9ucyRpbmRpY2F0b3IgPSBvcHRpb25zLmluZGljYXRvcixcbiAgICBpbmRpY2F0b3IgPSBfb3B0aW9ucyRpbmRpY2F0b3IgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkaW5kaWNhdG9yO1xuICB2YXIgc2l6ZSA9IGluZGljYXRvci5zaXplLFxuICAgIF9pbmRpY2F0b3IkYWxpZ24gPSBpbmRpY2F0b3IuYWxpZ24sXG4gICAgYWxpZ24gPSBfaW5kaWNhdG9yJGFsaWduID09PSB2b2lkIDAgPyAnY2VudGVyJyA6IF9pbmRpY2F0b3IkYWxpZ247XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgIGlua1N0eWxlID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRJbmtTdHlsZSA9IF91c2VTdGF0ZTJbMV07XG4gIHZhciBpbmtCYXJSYWZSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGdldExlbmd0aCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgICBpZiAodHlwZW9mIHNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzaXplKG9yaWdpbik7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZ2luO1xuICB9LCBbc2l6ZV0pO1xuXG4gIC8vIERlbGF5IHNldCBpbmsgc3R5bGUgdG8gYXZvaWQgcmVtb3ZlIHRhYiBibGlua1xuICBmdW5jdGlvbiBjbGVhbklua0JhclJhZigpIHtcbiAgICByYWYuY2FuY2VsKGlua0JhclJhZlJlZi5jdXJyZW50KTtcbiAgfVxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdJbmtTdHlsZSA9IHt9O1xuICAgIGlmIChhY3RpdmVUYWJPZmZzZXQpIHtcbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIG5ld0lua1N0eWxlLndpZHRoID0gZ2V0TGVuZ3RoKGFjdGl2ZVRhYk9mZnNldC53aWR0aCk7XG4gICAgICAgIHZhciBrZXkgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBpZiAoYWxpZ24gPT09ICdzdGFydCcpIHtcbiAgICAgICAgICBuZXdJbmtTdHlsZVtrZXldID0gYWN0aXZlVGFiT2Zmc2V0W2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgICAgIG5ld0lua1N0eWxlW2tleV0gPSBhY3RpdmVUYWJPZmZzZXRba2V5XSArIGFjdGl2ZVRhYk9mZnNldC53aWR0aCAvIDI7XG4gICAgICAgICAgbmV3SW5rU3R5bGUudHJhbnNmb3JtID0gcnRsID8gJ3RyYW5zbGF0ZVgoNTAlKScgOiAndHJhbnNsYXRlWCgtNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsaWduID09PSAnZW5kJykge1xuICAgICAgICAgIG5ld0lua1N0eWxlW2tleV0gPSBhY3RpdmVUYWJPZmZzZXRba2V5XSArIGFjdGl2ZVRhYk9mZnNldC53aWR0aDtcbiAgICAgICAgICBuZXdJbmtTdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJbmtTdHlsZS5oZWlnaHQgPSBnZXRMZW5ndGgoYWN0aXZlVGFiT2Zmc2V0LmhlaWdodCk7XG4gICAgICAgIGlmIChhbGlnbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgIG5ld0lua1N0eWxlLnRvcCA9IGFjdGl2ZVRhYk9mZnNldC50b3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgICAgIG5ld0lua1N0eWxlLnRvcCA9IGFjdGl2ZVRhYk9mZnNldC50b3AgKyBhY3RpdmVUYWJPZmZzZXQuaGVpZ2h0IC8gMjtcbiAgICAgICAgICBuZXdJbmtTdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsaWduID09PSAnZW5kJykge1xuICAgICAgICAgIG5ld0lua1N0eWxlLnRvcCA9IGFjdGl2ZVRhYk9mZnNldC50b3AgKyBhY3RpdmVUYWJPZmZzZXQuaGVpZ2h0O1xuICAgICAgICAgIG5ld0lua1N0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xMDAlKSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5JbmtCYXJSYWYoKTtcbiAgICBpbmtCYXJSYWZSZWYuY3VycmVudCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJbmtTdHlsZShuZXdJbmtTdHlsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsZWFuSW5rQmFyUmFmO1xuICB9LCBbYWN0aXZlVGFiT2Zmc2V0LCBob3Jpem9udGFsLCBydGwsIGFsaWduLCBnZXRMZW5ndGhdKTtcbiAgcmV0dXJuIHtcbiAgICBzdHlsZTogaW5rU3R5bGVcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VJbmRpY2F0b3I7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgREVGQVVMVF9TSVpFID0ge1xuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB0b3A6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPZmZzZXRzKHRhYnMsIHRhYlNpemVzLCBob2xkZXJTY3JvbGxXaWR0aCkge1xuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90YWJzJDtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciBsYXN0T2Zmc2V0ID0gdGFiU2l6ZXMuZ2V0KChfdGFicyQgPSB0YWJzWzBdKSA9PT0gbnVsbCB8fCBfdGFicyQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90YWJzJC5rZXkpIHx8IERFRkFVTFRfU0laRTtcbiAgICB2YXIgcmlnaHRPZmZzZXQgPSBsYXN0T2Zmc2V0LmxlZnQgKyBsYXN0T2Zmc2V0LndpZHRoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGtleSA9IHRhYnNbaV0ua2V5O1xuICAgICAgdmFyIGRhdGEgPSB0YWJTaXplcy5nZXQoa2V5KTtcblxuICAgICAgLy8gUmV1c2UgbGFzdCBvbmUgd2hlbiBub3QgZXhpc3QgeWV0XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdmFyIF90YWJzO1xuICAgICAgICBkYXRhID0gdGFiU2l6ZXMuZ2V0KChfdGFicyA9IHRhYnNbaSAtIDFdKSA9PT0gbnVsbCB8fCBfdGFicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYnMua2V5KSB8fCBERUZBVUxUX1NJWkU7XG4gICAgICB9XG4gICAgICB2YXIgZW50aXR5ID0gbWFwLmdldChrZXkpIHx8IF9vYmplY3RTcHJlYWQoe30sIGRhdGEpO1xuXG4gICAgICAvLyBSaWdodFxuICAgICAgZW50aXR5LnJpZ2h0ID0gcmlnaHRPZmZzZXQgLSBlbnRpdHkubGVmdCAtIGVudGl0eS53aWR0aDtcblxuICAgICAgLy8gVXBkYXRlIGVudGl0eVxuICAgICAgbWFwLnNldChrZXksIGVudGl0eSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH0sIFt0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXk7XG4gIH0pLmpvaW4oJ18nKSwgdGFiU2l6ZXMsIGhvbGRlclNjcm9sbFdpZHRoXSk7XG59IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTeW5jU3RhdGUoZGVmYXVsdFN0YXRlLCBvbkNoYW5nZSkge1xuICB2YXIgc3RhdGVSZWYgPSBSZWFjdC51c2VSZWYoZGVmYXVsdFN0YXRlKTtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHt9KSxcbiAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG4gIGZ1bmN0aW9uIHNldFN0YXRlKHVwZGF0ZXIpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIoc3RhdGVSZWYuY3VycmVudCkgOiB1cGRhdGVyO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gc3RhdGVSZWYuY3VycmVudCkge1xuICAgICAgb25DaGFuZ2UobmV3VmFsdWUsIHN0YXRlUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgICBzdGF0ZVJlZi5jdXJyZW50ID0gbmV3VmFsdWU7XG4gICAgZm9yY2VVcGRhdGUoe30pO1xuICB9XG4gIHJldHVybiBbc3RhdGVSZWYuY3VycmVudCwgc2V0U3RhdGVdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnZhciBNSU5fU1dJUEVfRElTVEFOQ0UgPSAwLjE7XG52YXIgU1RPUF9TV0lQRV9ESVNUQU5DRSA9IDAuMDE7XG52YXIgUkVGUkVTSF9JTlRFUlZBTCA9IDIwO1xudmFyIFNQRUVEX09GRl9NVUxUSVBMRSA9IE1hdGgucG93KDAuOTk1LCBSRUZSRVNIX0lOVEVSVkFMKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhvb2sgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUb3VjaE1vdmUocmVmLCBvbk9mZnNldCkge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICB0b3VjaFBvc2l0aW9uID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRUb3VjaFBvc2l0aW9uID0gX3VzZVN0YXRlMlsxXTtcbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSgwKSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgbGFzdFRpbWVzdGFtcCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0TGFzdFRpbWVzdGFtcCA9IF91c2VTdGF0ZTRbMV07XG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoMCksXG4gICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgIGxhc3RUaW1lRGlmZiA9IF91c2VTdGF0ZTZbMF0sXG4gICAgc2V0TGFzdFRpbWVEaWZmID0gX3VzZVN0YXRlNlsxXTtcbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZSgpLFxuICAgIF91c2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU3LCAyKSxcbiAgICBsYXN0T2Zmc2V0ID0gX3VzZVN0YXRlOFswXSxcbiAgICBzZXRMYXN0T2Zmc2V0ID0gX3VzZVN0YXRlOFsxXTtcbiAgdmFyIG1vdGlvblJlZiA9IHVzZVJlZigpO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRXZlbnRzID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPj4+IFRvdWNoIGV2ZW50c1xuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIHZhciBfZSR0b3VjaGVzJCA9IGUudG91Y2hlc1swXSxcbiAgICAgIHNjcmVlblggPSBfZSR0b3VjaGVzJC5zY3JlZW5YLFxuICAgICAgc2NyZWVuWSA9IF9lJHRvdWNoZXMkLnNjcmVlblk7XG4gICAgc2V0VG91Y2hQb3NpdGlvbih7XG4gICAgICB4OiBzY3JlZW5YLFxuICAgICAgeTogc2NyZWVuWVxuICAgIH0pO1xuICAgIHdpbmRvdy5jbGVhckludGVydmFsKG1vdGlvblJlZi5jdXJyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgaWYgKCF0b3VjaFBvc2l0aW9uKSByZXR1cm47XG5cbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIF9lJHRvdWNoZXMkMiA9IGUudG91Y2hlc1swXSxcbiAgICAgIHNjcmVlblggPSBfZSR0b3VjaGVzJDIuc2NyZWVuWCxcbiAgICAgIHNjcmVlblkgPSBfZSR0b3VjaGVzJDIuc2NyZWVuWTtcbiAgICBzZXRUb3VjaFBvc2l0aW9uKHtcbiAgICAgIHg6IHNjcmVlblgsXG4gICAgICB5OiBzY3JlZW5ZXG4gICAgfSk7XG4gICAgdmFyIG9mZnNldFggPSBzY3JlZW5YIC0gdG91Y2hQb3NpdGlvbi54O1xuICAgIHZhciBvZmZzZXRZID0gc2NyZWVuWSAtIHRvdWNoUG9zaXRpb24ueTtcbiAgICBvbk9mZnNldChvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBzZXRMYXN0VGltZXN0YW1wKG5vdyk7XG4gICAgc2V0TGFzdFRpbWVEaWZmKG5vdyAtIGxhc3RUaW1lc3RhbXApO1xuICAgIHNldExhc3RPZmZzZXQoe1xuICAgICAgeDogb2Zmc2V0WCxcbiAgICAgIHk6IG9mZnNldFlcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIGlmICghdG91Y2hQb3NpdGlvbikgcmV0dXJuO1xuICAgIHNldFRvdWNoUG9zaXRpb24obnVsbCk7XG4gICAgc2V0TGFzdE9mZnNldChudWxsKTtcblxuICAgIC8vIFN3aXBlIGlmIG5lZWRlZFxuICAgIGlmIChsYXN0T2Zmc2V0KSB7XG4gICAgICB2YXIgZGlzdGFuY2VYID0gbGFzdE9mZnNldC54IC8gbGFzdFRpbWVEaWZmO1xuICAgICAgdmFyIGRpc3RhbmNlWSA9IGxhc3RPZmZzZXQueSAvIGxhc3RUaW1lRGlmZjtcbiAgICAgIHZhciBhYnNYID0gTWF0aC5hYnMoZGlzdGFuY2VYKTtcbiAgICAgIHZhciBhYnNZID0gTWF0aC5hYnMoZGlzdGFuY2VZKTtcblxuICAgICAgLy8gU2tpcCBzd2lwZSBpZiBsb3cgZGlzdGFuY2VcbiAgICAgIGlmIChNYXRoLm1heChhYnNYLCBhYnNZKSA8IE1JTl9TV0lQRV9ESVNUQU5DRSkgcmV0dXJuO1xuICAgICAgdmFyIGN1cnJlbnRYID0gZGlzdGFuY2VYO1xuICAgICAgdmFyIGN1cnJlbnRZID0gZGlzdGFuY2VZO1xuICAgICAgbW90aW9uUmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudFgpIDwgU1RPUF9TV0lQRV9ESVNUQU5DRSAmJiBNYXRoLmFicyhjdXJyZW50WSkgPCBTVE9QX1NXSVBFX0RJU1RBTkNFKSB7XG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobW90aW9uUmVmLmN1cnJlbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50WCAqPSBTUEVFRF9PRkZfTVVMVElQTEU7XG4gICAgICAgIGN1cnJlbnRZICo9IFNQRUVEX09GRl9NVUxUSVBMRTtcbiAgICAgICAgb25PZmZzZXQoY3VycmVudFggKiBSRUZSRVNIX0lOVEVSVkFMLCBjdXJyZW50WSAqIFJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgfSwgUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgfVxuICB9XG5cbiAgLy8gPj4+IFdoZWVsIGV2ZW50XG4gIHZhciBsYXN0V2hlZWxEaXJlY3Rpb25SZWYgPSB1c2VSZWYoKTtcbiAgZnVuY3Rpb24gb25XaGVlbChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYLFxuICAgICAgZGVsdGFZID0gZS5kZWx0YVk7XG5cbiAgICAvLyBDb252ZXJ0IGJvdGggdG8geCAmIHkgc2luY2Ugd2hlZWwgb25seSBoYXBwZW5lZCBvbiBQQ1xuICAgIHZhciBtaXhlZCA9IDA7XG4gICAgdmFyIGFic1ggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgIHZhciBhYnNZID0gTWF0aC5hYnMoZGVsdGFZKTtcbiAgICBpZiAoYWJzWCA9PT0gYWJzWSkge1xuICAgICAgbWl4ZWQgPSBsYXN0V2hlZWxEaXJlY3Rpb25SZWYuY3VycmVudCA9PT0gJ3gnID8gZGVsdGFYIDogZGVsdGFZO1xuICAgIH0gZWxzZSBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIG1peGVkID0gZGVsdGFYO1xuICAgICAgbGFzdFdoZWVsRGlyZWN0aW9uUmVmLmN1cnJlbnQgPSAneCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0gZGVsdGFZO1xuICAgICAgbGFzdFdoZWVsRGlyZWN0aW9uUmVmLmN1cnJlbnQgPSAneSc7XG4gICAgfVxuICAgIGlmIChvbk9mZnNldCgtbWl4ZWQsIC1taXhlZCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciB0b3VjaEV2ZW50c1JlZiA9IHVzZVJlZihudWxsKTtcbiAgdG91Y2hFdmVudHNSZWYuY3VycmVudCA9IHtcbiAgICBvblRvdWNoU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICBvblRvdWNoTW92ZTogb25Ub3VjaE1vdmUsXG4gICAgb25Ub3VjaEVuZDogb25Ub3VjaEVuZCxcbiAgICBvbldoZWVsOiBvbldoZWVsXG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gb25Qcm94eVRvdWNoU3RhcnQoZSkge1xuICAgICAgdG91Y2hFdmVudHNSZWYuY3VycmVudC5vblRvdWNoU3RhcnQoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUHJveHlUb3VjaE1vdmUoZSkge1xuICAgICAgdG91Y2hFdmVudHNSZWYuY3VycmVudC5vblRvdWNoTW92ZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Qcm94eVRvdWNoRW5kKGUpIHtcbiAgICAgIHRvdWNoRXZlbnRzUmVmLmN1cnJlbnQub25Ub3VjaEVuZChlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Qcm94eVdoZWVsKGUpIHtcbiAgICAgIHRvdWNoRXZlbnRzUmVmLmN1cnJlbnQub25XaGVlbChlKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Qcm94eVRvdWNoTW92ZSwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJveHlUb3VjaEVuZCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gTm8gbmVlZCB0byBjbGVhbiB1cCBzaW5jZSBlbGVtZW50IHJlbW92ZWRcbiAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qcm94eVRvdWNoU3RhcnQsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uUHJveHlXaGVlbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Qcm94eVRvdWNoTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJveHlUb3VjaEVuZCk7XG4gICAgfTtcbiAgfSwgW10pO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlTGF5b3V0VXBkYXRlRWZmZWN0IH0gZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTGF5b3V0RWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEhlbHAgdG8gbWVyZ2UgY2FsbGJhY2sgd2l0aCBgdXNlTGF5b3V0RWZmZWN0YC5cbiAqIE9uZSB0aW1lIHdpbGwgb25seSB0cmlnZ2VyIG9uY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVwZGF0ZShjYWxsYmFjaykge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoMCksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgY291bnQgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldENvdW50ID0gX3VzZVN0YXRlMlsxXTtcbiAgdmFyIGVmZmVjdFJlZiA9IHVzZVJlZigwKTtcbiAgdmFyIGNhbGxiYWNrUmVmID0gdXNlUmVmKCk7XG4gIGNhbGxiYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjaztcblxuICAvLyBUcmlnZ2VyIG9uIGB1c2VMYXlvdXRFZmZlY3RgXG4gIHVzZUxheW91dFVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9jYWxsYmFja1JlZiRjdXJyZW50O1xuICAgIChfY2FsbGJhY2tSZWYkY3VycmVudCA9IGNhbGxiYWNrUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9jYWxsYmFja1JlZiRjdXJyZW50ID09PSB2b2lkIDAgfHwgX2NhbGxiYWNrUmVmJGN1cnJlbnQuY2FsbChjYWxsYmFja1JlZik7XG4gIH0sIFtjb3VudF0pO1xuXG4gIC8vIFRyaWdnZXIgdG8gdXBkYXRlIGNvdW50XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVmZmVjdFJlZi5jdXJyZW50ICE9PSBjb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlZmZlY3RSZWYuY3VycmVudCArPSAxO1xuICAgIHNldENvdW50KGVmZmVjdFJlZi5jdXJyZW50KTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVTdGF0ZShkZWZhdWx0U3RhdGUpIHtcbiAgdmFyIGJhdGNoUmVmID0gdXNlUmVmKFtdKTtcbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSh7fSksXG4gICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgIGZvcmNlVXBkYXRlID0gX3VzZVN0YXRlNFsxXTtcbiAgdmFyIHN0YXRlID0gdXNlUmVmKHR5cGVvZiBkZWZhdWx0U3RhdGUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0U3RhdGUoKSA6IGRlZmF1bHRTdGF0ZSk7XG4gIHZhciBmbHVzaFVwZGF0ZSA9IHVzZVVwZGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzdGF0ZS5jdXJyZW50O1xuICAgIGJhdGNoUmVmLmN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIGN1cnJlbnQgPSBjYWxsYmFjayhjdXJyZW50KTtcbiAgICB9KTtcbiAgICBiYXRjaFJlZi5jdXJyZW50ID0gW107XG4gICAgc3RhdGUuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgZm9yY2VVcGRhdGUoe30pO1xuICB9KTtcbiAgZnVuY3Rpb24gdXBkYXRlcihjYWxsYmFjaykge1xuICAgIGJhdGNoUmVmLmN1cnJlbnQucHVzaChjYWxsYmFjayk7XG4gICAgZmx1c2hVcGRhdGUoKTtcbiAgfVxuICByZXR1cm4gW3N0YXRlLmN1cnJlbnQsIHVwZGF0ZXJdO1xufSIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgREVGQVVMVF9TSVpFID0ge1xuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVmlzaWJsZVJhbmdlKHRhYk9mZnNldHMsIHZpc2libGVUYWJDb250ZW50VmFsdWUsIHRyYW5zZm9ybSwgdGFiQ29udGVudFNpemVWYWx1ZSwgYWRkTm9kZVNpemVWYWx1ZSwgb3BlcmF0aW9uTm9kZVNpemVWYWx1ZSwgX3JlZikge1xuICB2YXIgdGFicyA9IF9yZWYudGFicyxcbiAgICB0YWJQb3NpdGlvbiA9IF9yZWYudGFiUG9zaXRpb24sXG4gICAgcnRsID0gX3JlZi5ydGw7XG4gIHZhciBjaGFyVW5pdDtcbiAgdmFyIHBvc2l0aW9uO1xuICB2YXIgdHJhbnNmb3JtU2l6ZTtcbiAgaWYgKFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKHRhYlBvc2l0aW9uKSkge1xuICAgIGNoYXJVbml0ID0gJ3dpZHRoJztcbiAgICBwb3NpdGlvbiA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgdHJhbnNmb3JtU2l6ZSA9IE1hdGguYWJzKHRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgY2hhclVuaXQgPSAnaGVpZ2h0JztcbiAgICBwb3NpdGlvbiA9ICd0b3AnO1xuICAgIHRyYW5zZm9ybVNpemUgPSAtdHJhbnNmb3JtO1xuICB9XG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRhYnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gWzAsIDBdO1xuICAgIH1cbiAgICB2YXIgbGVuID0gdGFicy5sZW5ndGg7XG4gICAgdmFyIGVuZEluZGV4ID0gbGVuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBvZmZzZXQgPSB0YWJPZmZzZXRzLmdldCh0YWJzW2ldLmtleSkgfHwgREVGQVVMVF9TSVpFO1xuICAgICAgaWYgKE1hdGguZmxvb3Iob2Zmc2V0W3Bvc2l0aW9uXSArIG9mZnNldFtjaGFyVW5pdF0pID4gTWF0aC5mbG9vcih0cmFuc2Zvcm1TaXplICsgdmlzaWJsZVRhYkNvbnRlbnRWYWx1ZSkpIHtcbiAgICAgICAgZW5kSW5kZXggPSBpIC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzdGFydEluZGV4ID0gMDtcbiAgICBmb3IgKHZhciBfaSA9IGxlbiAtIDE7IF9pID49IDA7IF9pIC09IDEpIHtcbiAgICAgIHZhciBfb2Zmc2V0ID0gdGFiT2Zmc2V0cy5nZXQodGFic1tfaV0ua2V5KSB8fCBERUZBVUxUX1NJWkU7XG4gICAgICBpZiAoX29mZnNldFtwb3NpdGlvbl0gPCB0cmFuc2Zvcm1TaXplKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBfaSArIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhcnRJbmRleCA+PSBlbmRJbmRleCA/IFswLCAwXSA6IFtzdGFydEluZGV4LCBlbmRJbmRleF07XG4gIH0sIFt0YWJPZmZzZXRzLCB2aXNpYmxlVGFiQ29udGVudFZhbHVlLCB0YWJDb250ZW50U2l6ZVZhbHVlLCBhZGROb2RlU2l6ZVZhbHVlLCBvcGVyYXRpb25Ob2RlU2l6ZVZhbHVlLCB0cmFuc2Zvcm1TaXplLCB0YWJQb3NpdGlvbiwgdGFicy5tYXAoZnVuY3Rpb24gKHRhYikge1xuICAgIHJldHVybiB0YWIua2V5O1xuICB9KS5qb2luKCdfJyksIHJ0bF0pO1xufSIsIi8qKlxuICogV2UgdHJhZGUgTWFwIGFzIGRlcHMgd2hpY2ggbWF5IGNoYW5nZSB3aXRoIHNhbWUgdmFsdWUgYnV0IGRpZmZlcmVudCByZWYgb2JqZWN0LlxuICogV2Ugc2hvdWxkIG1ha2UgaXQgYXMgaGFzaCBmb3IgZGVwc1xuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkob2JqKSB7XG4gIHZhciB0Z3Q7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBNYXApIHtcbiAgICB0Z3QgPSB7fTtcbiAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAodiwgaykge1xuICAgICAgdGd0W2tdID0gdjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0Z3QgPSBvYmo7XG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRndCk7XG59XG52YXIgUkNfVEFCU19ET1VCTEVfUVVPVEUgPSAnVEFCU19EUSc7XG5leHBvcnQgZnVuY3Rpb24gZ2VuRGF0YU5vZGVLZXkoa2V5KSB7XG4gIHJldHVybiBTdHJpbmcoa2V5KS5yZXBsYWNlKC9cIi9nLCBSQ19UQUJTX0RPVUJMRV9RVU9URSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVtb3ZhYmxlKGNsb3NhYmxlLCBjbG9zZUljb24sIGVkaXRhYmxlLCBkaXNhYmxlZCkge1xuICBpZiAoXG4gIC8vIE9ubHkgZWRpdGFibGUgdGFicyBjYW4gYmUgcmVtb3ZlZFxuICAhZWRpdGFibGUgfHxcbiAgLy8gVGFicyBjYW5ub3QgYmUgcmVtb3ZlZCB3aGVuIGRpc2FibGVkXG4gIGRpc2FibGVkIHx8XG4gIC8vIGNsb3NhYmxlIGlzIGZhbHNlXG4gIGNsb3NhYmxlID09PSBmYWxzZSB8fFxuICAvLyBJZiBjbG9zYWJsZSBpcyB1bmRlZmluZWQsIHRoZSByZW1vdmUgYnV0dG9uIHNob3VsZCBiZSBoaWRkZW4gd2hlbiBjbG9zZUljb24gaXMgbnVsbCBvciBmYWxzZVxuICBjbG9zYWJsZSA9PT0gdW5kZWZpbmVkICYmIChjbG9zZUljb24gPT09IGZhbHNlIHx8IGNsb3NlSWNvbiA9PT0gbnVsbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIEFkZEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgZWRpdGFibGUgPSBwcm9wcy5lZGl0YWJsZSxcbiAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgaWYgKCFlZGl0YWJsZSB8fCBlZGl0YWJsZS5zaG93QWRkID09PSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LWFkZFwiKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgXCJhcmlhLWxhYmVsXCI6IChsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2NhbGUuYWRkQXJpYUxhYmVsKSB8fCAnQWRkIHRhYicsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgZWRpdGFibGUub25FZGl0KCdhZGQnLCB7XG4gICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBlZGl0YWJsZS5hZGRJY29uIHx8ICcrJyk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IEFkZEJ1dHRvbjsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgRXh0cmFDb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGV4dHJhID0gcHJvcHMuZXh0cmE7XG4gIGlmICghZXh0cmEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgY29udGVudDtcblxuICAvLyBQYXJzZSBleHRyYVxuICB2YXIgYXNzZXJ0RXh0cmEgPSB7fTtcbiAgaWYgKF90eXBlb2YoZXh0cmEpID09PSAnb2JqZWN0JyAmJiAhIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChleHRyYSkpIHtcbiAgICBhc3NlcnRFeHRyYSA9IGV4dHJhO1xuICB9IGVsc2Uge1xuICAgIGFzc2VydEV4dHJhLnJpZ2h0ID0gZXh0cmE7XG4gIH1cbiAgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgY29udGVudCA9IGFzc2VydEV4dHJhLnJpZ2h0O1xuICB9XG4gIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgY29udGVudCA9IGFzc2VydEV4dHJhLmxlZnQ7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWV4dHJhLWNvbnRlbnRcIiksXG4gICAgcmVmOiByZWZcbiAgfSwgY29udGVudCkgOiBudWxsO1xufSk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFeHRyYUNvbnRlbnQuZGlzcGxheU5hbWUgPSAnRXh0cmFDb250ZW50Jztcbn1cbmV4cG9ydCBkZWZhdWx0IEV4dHJhQ29udGVudDsiLCJpbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgRVNDID0gS2V5Q29kZS5FU0MsXG4gIFRBQiA9IEtleUNvZGUuVEFCO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQWNjZXNzaWJpbGl0eShfcmVmKSB7XG4gIHZhciB2aXNpYmxlID0gX3JlZi52aXNpYmxlLFxuICAgIHRyaWdnZXJSZWYgPSBfcmVmLnRyaWdnZXJSZWYsXG4gICAgb25WaXNpYmxlQ2hhbmdlID0gX3JlZi5vblZpc2libGVDaGFuZ2UsXG4gICAgYXV0b0ZvY3VzID0gX3JlZi5hdXRvRm9jdXMsXG4gICAgb3ZlcmxheVJlZiA9IF9yZWYub3ZlcmxheVJlZjtcbiAgdmFyIGZvY3VzTWVudVJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBoYW5kbGVDbG9zZU1lbnVBbmRSZXR1cm5Gb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUNsb3NlTWVudUFuZFJldHVybkZvY3VzKCkge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB2YXIgX3RyaWdnZXJSZWYkY3VycmVudCwgX3RyaWdnZXJSZWYkY3VycmVudCRmO1xuICAgICAgKF90cmlnZ2VyUmVmJGN1cnJlbnQgPSB0cmlnZ2VyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90cmlnZ2VyUmVmJGN1cnJlbnQgPT09IHZvaWQgMCB8fCAoX3RyaWdnZXJSZWYkY3VycmVudCRmID0gX3RyaWdnZXJSZWYkY3VycmVudC5mb2N1cykgPT09IG51bGwgfHwgX3RyaWdnZXJSZWYkY3VycmVudCRmID09PSB2b2lkIDAgfHwgX3RyaWdnZXJSZWYkY3VycmVudCRmLmNhbGwoX3RyaWdnZXJSZWYkY3VycmVudCk7XG4gICAgICBvblZpc2libGVDaGFuZ2UgPT09IG51bGwgfHwgb25WaXNpYmxlQ2hhbmdlID09PSB2b2lkIDAgfHwgb25WaXNpYmxlQ2hhbmdlKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIHZhciBmb2N1c01lbnUgPSBmdW5jdGlvbiBmb2N1c01lbnUoKSB7XG4gICAgdmFyIF9vdmVybGF5UmVmJGN1cnJlbnQ7XG4gICAgaWYgKChfb3ZlcmxheVJlZiRjdXJyZW50ID0gb3ZlcmxheVJlZi5jdXJyZW50KSAhPT0gbnVsbCAmJiBfb3ZlcmxheVJlZiRjdXJyZW50ICE9PSB2b2lkIDAgJiYgX292ZXJsYXlSZWYkY3VycmVudC5mb2N1cykge1xuICAgICAgb3ZlcmxheVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICBmb2N1c01lbnVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDOlxuICAgICAgICBoYW5kbGVDbG9zZU1lbnVBbmRSZXR1cm5Gb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGZvY3VzUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCFmb2N1c01lbnVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgZm9jdXNSZXN1bHQgPSBmb2N1c01lbnUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvY3VzUmVzdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZU1lbnVBbmRSZXR1cm5Gb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAvLyBGSVhNRTogaGFjayB3aXRoIHJhZlxuICAgICAgICByYWYoZm9jdXNNZW51LCAzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgZm9jdXNNZW51UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb2N1c01lbnVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFt2aXNpYmxlXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG59IiwiaW1wb3J0IHsgY29tcG9zZVJlZiwgZ2V0Tm9kZVJlZiwgc3VwcG9ydFJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgT3ZlcmxheSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICBhcnJvdyA9IHByb3BzLmFycm93LFxuICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgdmFyIG92ZXJsYXlOb2RlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG92ZXJsYXlFbGVtZW50O1xuICAgIGlmICh0eXBlb2Ygb3ZlcmxheSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3ZlcmxheUVsZW1lbnQgPSBvdmVybGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG92ZXJsYXlFbGVtZW50ID0gb3ZlcmxheTtcbiAgICB9XG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xuICB9LCBbb3ZlcmxheV0pO1xuICB2YXIgY29tcG9zZWRSZWYgPSBjb21wb3NlUmVmKHJlZiwgZ2V0Tm9kZVJlZihvdmVybGF5Tm9kZSkpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGFycm93ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIilcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQob3ZlcmxheU5vZGUsIHtcbiAgICByZWY6IHN1cHBvcnRSZWYob3ZlcmxheU5vZGUpID8gY29tcG9zZWRSZWYgOiB1bmRlZmluZWRcbiAgfSkpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBPdmVybGF5OyIsInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xudmFyIHBsYWNlbWVudHMgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJhcnJvd1wiLCBcInByZWZpeENsc1wiLCBcInRyYW5zaXRpb25OYW1lXCIsIFwiYW5pbWF0aW9uXCIsIFwiYWxpZ25cIiwgXCJwbGFjZW1lbnRcIiwgXCJwbGFjZW1lbnRzXCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJzaG93QWN0aW9uXCIsIFwiaGlkZUFjdGlvblwiLCBcIm92ZXJsYXlDbGFzc05hbWVcIiwgXCJvdmVybGF5U3R5bGVcIiwgXCJ2aXNpYmxlXCIsIFwidHJpZ2dlclwiLCBcImF1dG9Gb2N1c1wiLCBcIm92ZXJsYXlcIiwgXCJjaGlsZHJlblwiLCBcIm9uVmlzaWJsZUNoYW5nZVwiXTtcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ0ByYy1jb21wb25lbnQvdHJpZ2dlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNvbXBvc2VSZWYsIGdldE5vZGVSZWYsIHN1cHBvcnRSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQWNjZXNzaWJpbGl0eSBmcm9tIFwiLi9ob29rcy91c2VBY2Nlc3NpYmlsaXR5XCI7XG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XG5pbXBvcnQgUGxhY2VtZW50cyBmcm9tIFwiLi9wbGFjZW1lbnRzXCI7XG5mdW5jdGlvbiBEcm9wZG93bihwcm9wcywgcmVmKSB7XG4gIHZhciBfY2hpbGRyZW4kcHJvcHM7XG4gIHZhciBfcHJvcHMkYXJyb3cgPSBwcm9wcy5hcnJvdyxcbiAgICBhcnJvdyA9IF9wcm9wcyRhcnJvdyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXJyb3csXG4gICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtZHJvcGRvd24nIDogX3Byb3BzJHByZWZpeENscyxcbiAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICBhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgIF9wcm9wcyRwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgcGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ2JvdHRvbUxlZnQnIDogX3Byb3BzJHBsYWNlbWVudCxcbiAgICBfcHJvcHMkcGxhY2VtZW50cyA9IHByb3BzLnBsYWNlbWVudHMsXG4gICAgcGxhY2VtZW50cyA9IF9wcm9wcyRwbGFjZW1lbnRzID09PSB2b2lkIDAgPyBQbGFjZW1lbnRzIDogX3Byb3BzJHBsYWNlbWVudHMsXG4gICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICBzaG93QWN0aW9uID0gcHJvcHMuc2hvd0FjdGlvbixcbiAgICBoaWRlQWN0aW9uID0gcHJvcHMuaGlkZUFjdGlvbixcbiAgICBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICBvdmVybGF5U3R5bGUgPSBwcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgX3Byb3BzJHRyaWdnZXIgPSBwcm9wcy50cmlnZ2VyLFxuICAgIHRyaWdnZXIgPSBfcHJvcHMkdHJpZ2dlciA9PT0gdm9pZCAwID8gWydob3ZlciddIDogX3Byb3BzJHRyaWdnZXIsXG4gICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgb25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25WaXNpYmxlQ2hhbmdlLFxuICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgpLFxuICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgIHRyaWdnZXJWaXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICBzZXRUcmlnZ2VyVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG4gIHZhciBtZXJnZWRWaXNpYmxlID0gJ3Zpc2libGUnIGluIHByb3BzID8gdmlzaWJsZSA6IHRyaWdnZXJWaXNpYmxlO1xuICB2YXIgdHJpZ2dlclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG92ZXJsYXlSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBjaGlsZFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJpZ2dlclJlZi5jdXJyZW50O1xuICB9KTtcbiAgdmFyIGhhbmRsZVZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVWaXNpYmxlQ2hhbmdlKG5ld1Zpc2libGUpIHtcbiAgICBzZXRUcmlnZ2VyVmlzaWJsZShuZXdWaXNpYmxlKTtcbiAgICBvblZpc2libGVDaGFuZ2UgPT09IG51bGwgfHwgb25WaXNpYmxlQ2hhbmdlID09PSB2b2lkIDAgfHwgb25WaXNpYmxlQ2hhbmdlKG5ld1Zpc2libGUpO1xuICB9O1xuICB1c2VBY2Nlc3NpYmlsaXR5KHtcbiAgICB2aXNpYmxlOiBtZXJnZWRWaXNpYmxlLFxuICAgIHRyaWdnZXJSZWY6IGNoaWxkUmVmLFxuICAgIG9uVmlzaWJsZUNoYW5nZTogaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBvdmVybGF5UmVmOiBvdmVybGF5UmVmXG4gIH0pO1xuICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIHZhciBvbk92ZXJsYXlDbGljayA9IHByb3BzLm9uT3ZlcmxheUNsaWNrO1xuICAgIHNldFRyaWdnZXJWaXNpYmxlKGZhbHNlKTtcbiAgICBpZiAob25PdmVybGF5Q2xpY2spIHtcbiAgICAgIG9uT3ZlcmxheUNsaWNrKGUpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldE1lbnVFbGVtZW50ID0gZnVuY3Rpb24gZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE92ZXJsYXksIHtcbiAgICAgIHJlZjogb3ZlcmxheVJlZixcbiAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGFycm93OiBhcnJvd1xuICAgIH0pO1xuICB9O1xuICB2YXIgZ2V0TWVudUVsZW1lbnRPckxhbWJkYSA9IGZ1bmN0aW9uIGdldE1lbnVFbGVtZW50T3JMYW1iZGEoKSB7XG4gICAgaWYgKHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZ2V0TWVudUVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBnZXRNZW51RWxlbWVudCgpO1xuICB9O1xuICB2YXIgZ2V0TWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyID0gZnVuY3Rpb24gZ2V0TWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyKCkge1xuICAgIHZhciBtaW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXIgPSBwcm9wcy5taW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXIsXG4gICAgICBhbGlnblBvaW50ID0gcHJvcHMuYWxpZ25Qb2ludDtcbiAgICBpZiAoJ21pbk92ZXJsYXlXaWR0aE1hdGNoVHJpZ2dlcicgaW4gcHJvcHMpIHtcbiAgICAgIHJldHVybiBtaW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXI7XG4gICAgfVxuICAgIHJldHVybiAhYWxpZ25Qb2ludDtcbiAgfTtcbiAgdmFyIGdldE9wZW5DbGFzc05hbWUgPSBmdW5jdGlvbiBnZXRPcGVuQ2xhc3NOYW1lKCkge1xuICAgIHZhciBvcGVuQ2xhc3NOYW1lID0gcHJvcHMub3BlbkNsYXNzTmFtZTtcbiAgICBpZiAob3BlbkNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb3BlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKTtcbiAgfTtcbiAgdmFyIGNoaWxkcmVuTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoKF9jaGlsZHJlbiRwcm9wcyA9IGNoaWxkcmVuLnByb3BzKSA9PT0gbnVsbCB8fCBfY2hpbGRyZW4kcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jaGlsZHJlbiRwcm9wcy5jbGFzc05hbWUsIG1lcmdlZFZpc2libGUgJiYgZ2V0T3BlbkNsYXNzTmFtZSgpKSxcbiAgICByZWY6IHN1cHBvcnRSZWYoY2hpbGRyZW4pID8gY29tcG9zZVJlZihjaGlsZFJlZiwgZ2V0Tm9kZVJlZihjaGlsZHJlbikpIDogdW5kZWZpbmVkXG4gIH0pO1xuICB2YXIgdHJpZ2dlckhpZGVBY3Rpb24gPSBoaWRlQWN0aW9uO1xuICBpZiAoIXRyaWdnZXJIaWRlQWN0aW9uICYmIHRyaWdnZXIuaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTEpIHtcbiAgICB0cmlnZ2VySGlkZUFjdGlvbiA9IFsnY2xpY2snXTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlciwgX2V4dGVuZHMoe1xuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzXG4gIH0sIG90aGVyUHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICByZWY6IHRyaWdnZXJSZWYsXG4gICAgcG9wdXBDbGFzc05hbWU6IGNsYXNzTmFtZXMob3ZlcmxheUNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctYXJyb3dcIiksIGFycm93KSksXG4gICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgIGFjdGlvbjogdHJpZ2dlcixcbiAgICBzaG93QWN0aW9uOiBzaG93QWN0aW9uLFxuICAgIGhpZGVBY3Rpb246IHRyaWdnZXJIaWRlQWN0aW9uLFxuICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcG9wdXBBbGlnbjogYWxpZ24sXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXBBbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBwb3B1cFZpc2libGU6IG1lcmdlZFZpc2libGUsXG4gICAgc3RyZXRjaDogZ2V0TWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyKCkgPyAnbWluV2lkdGgnIDogJycsXG4gICAgcG9wdXA6IGdldE1lbnVFbGVtZW50T3JMYW1iZGEoKSxcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICBvblBvcHVwQ2xpY2s6IG9uQ2xpY2ssXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gIH0pLCBjaGlsZHJlbk5vZGUpO1xufVxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRHJvcGRvd24pOyIsImltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBEcm9wZG93biBmcm9tICdyYy1kcm9wZG93bic7XG5pbXBvcnQgTWVudSwgeyBNZW51SXRlbSB9IGZyb20gJ3JjLW1lbnUnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFJlbW92YWJsZSB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuL0FkZEJ1dHRvblwiO1xudmFyIE9wZXJhdGlvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGlkID0gcHJvcHMuaWQsXG4gICAgdGFicyA9IHByb3BzLnRhYnMsXG4gICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgIG1vYmlsZSA9IHByb3BzLm1vYmlsZSxcbiAgICBfcHJvcHMkbW9yZSA9IHByb3BzLm1vcmUsXG4gICAgbW9yZVByb3BzID0gX3Byb3BzJG1vcmUgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJG1vcmUsXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgZWRpdGFibGUgPSBwcm9wcy5lZGl0YWJsZSxcbiAgICB0YWJCYXJHdXR0ZXIgPSBwcm9wcy50YWJCYXJHdXR0ZXIsXG4gICAgcnRsID0gcHJvcHMucnRsLFxuICAgIHJlbW92ZUFyaWFMYWJlbCA9IHByb3BzLnJlbW92ZUFyaWFMYWJlbCxcbiAgICBvblRhYkNsaWNrID0gcHJvcHMub25UYWJDbGljayxcbiAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgIHBvcHVwQ2xhc3NOYW1lID0gcHJvcHMucG9wdXBDbGFzc05hbWU7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PSBEcm9wZG93biA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBvcGVuID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRPcGVuID0gX3VzZVN0YXRlMlsxXTtcbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShudWxsKSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgc2VsZWN0ZWRLZXkgPSBfdXNlU3RhdGU0WzBdLFxuICAgIHNldFNlbGVjdGVkS2V5ID0gX3VzZVN0YXRlNFsxXTtcbiAgdmFyIF9tb3JlUHJvcHMkaWNvbiA9IG1vcmVQcm9wcy5pY29uLFxuICAgIG1vcmVJY29uID0gX21vcmVQcm9wcyRpY29uID09PSB2b2lkIDAgPyAnTW9yZScgOiBfbW9yZVByb3BzJGljb247XG4gIHZhciBwb3B1cElkID0gXCJcIi5jb25jYXQoaWQsIFwiLW1vcmUtcG9wdXBcIik7XG4gIHZhciBkcm9wZG93blByZWZpeCA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJvcGRvd25cIik7XG4gIHZhciBzZWxlY3RlZEl0ZW1JZCA9IHNlbGVjdGVkS2V5ICE9PSBudWxsID8gXCJcIi5jb25jYXQocG9wdXBJZCwgXCItXCIpLmNvbmNhdChzZWxlY3RlZEtleSkgOiBudWxsO1xuICB2YXIgZHJvcGRvd25BcmlhTGFiZWwgPSBsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2NhbGUuZHJvcGRvd25BcmlhTGFiZWw7XG4gIGZ1bmN0aW9uIG9uUmVtb3ZlVGFiKGV2ZW50LCBrZXkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGVkaXRhYmxlLm9uRWRpdCgncmVtb3ZlJywge1xuICAgICAga2V5OiBrZXksXG4gICAgICBldmVudDogZXZlbnRcbiAgICB9KTtcbiAgfVxuICB2YXIgbWVudSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKF9yZWYpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgZG9tRXZlbnQgPSBfcmVmLmRvbUV2ZW50O1xuICAgICAgb25UYWJDbGljayhrZXksIGRvbUV2ZW50KTtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH0sXG4gICAgcHJlZml4Q2xzOiBcIlwiLmNvbmNhdChkcm9wZG93blByZWZpeCwgXCItbWVudVwiKSxcbiAgICBpZDogcG9wdXBJZCxcbiAgICB0YWJJbmRleDogLTEsXG4gICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogc2VsZWN0ZWRJdGVtSWQsXG4gICAgc2VsZWN0ZWRLZXlzOiBbc2VsZWN0ZWRLZXldLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBkcm9wZG93bkFyaWFMYWJlbCAhPT0gdW5kZWZpbmVkID8gZHJvcGRvd25BcmlhTGFiZWwgOiAnZXhwYW5kZWQgZHJvcGRvd24nXG4gIH0sIHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICB2YXIgY2xvc2FibGUgPSB0YWIuY2xvc2FibGUsXG4gICAgICBkaXNhYmxlZCA9IHRhYi5kaXNhYmxlZCxcbiAgICAgIGNsb3NlSWNvbiA9IHRhYi5jbG9zZUljb24sXG4gICAgICBrZXkgPSB0YWIua2V5LFxuICAgICAgbGFiZWwgPSB0YWIubGFiZWw7XG4gICAgdmFyIHJlbW92YWJsZSA9IGdldFJlbW92YWJsZShjbG9zYWJsZSwgY2xvc2VJY29uLCBlZGl0YWJsZSwgZGlzYWJsZWQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAga2V5OiBrZXksXG4gICAgICBpZDogXCJcIi5jb25jYXQocG9wdXBJZCwgXCItXCIpLmNvbmNhdChrZXkpLFxuICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItcGFuZWwtXCIpLmNvbmNhdChrZXkpLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGxhYmVsKSwgcmVtb3ZhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogcmVtb3ZlQXJpYUxhYmVsIHx8ICdyZW1vdmUnLFxuICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4LCBcIi1tZW51LWl0ZW0tcmVtb3ZlXCIpLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uUmVtb3ZlVGFiKGUsIGtleSk7XG4gICAgICB9XG4gICAgfSwgY2xvc2VJY29uIHx8IGVkaXRhYmxlLnJlbW92ZUljb24gfHwgJ8OXJykpO1xuICB9KSk7XG4gIGZ1bmN0aW9uIHNlbGVjdE9mZnNldChvZmZzZXQpIHtcbiAgICB2YXIgZW5hYmxlZFRhYnMgPSB0YWJzLmZpbHRlcihmdW5jdGlvbiAodGFiKSB7XG4gICAgICByZXR1cm4gIXRhYi5kaXNhYmxlZDtcbiAgICB9KTtcbiAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGVuYWJsZWRUYWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgICByZXR1cm4gdGFiLmtleSA9PT0gc2VsZWN0ZWRLZXk7XG4gICAgfSkgfHwgMDtcbiAgICB2YXIgbGVuID0gZW5hYmxlZFRhYnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHNlbGVjdGVkSW5kZXggPSAoc2VsZWN0ZWRJbmRleCArIG9mZnNldCArIGxlbikgJSBsZW47XG4gICAgICB2YXIgdGFiID0gZW5hYmxlZFRhYnNbc2VsZWN0ZWRJbmRleF07XG4gICAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xuICAgICAgICBzZXRTZWxlY3RlZEtleSh0YWIua2V5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgIHZhciB3aGljaCA9IGUud2hpY2g7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICBpZiAoW0tleUNvZGUuRE9XTiwgS2V5Q29kZS5TUEFDRSwgS2V5Q29kZS5FTlRFUl0uaW5jbHVkZXMod2hpY2gpKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoICh3aGljaCkge1xuICAgICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgICAgICBzZWxlY3RPZmZzZXQoLTEpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgICAgIHNlbGVjdE9mZnNldCgxKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5FTlRFUjpcbiAgICAgICAgaWYgKHNlbGVjdGVkS2V5ICE9PSBudWxsKSB7XG4gICAgICAgICAgb25UYWJDbGljayhzZWxlY3RlZEtleSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIHVzZSBxdWVyeSBlbGVtZW50IGhlcmUgdG8gYXZvaWQgUmVhY3Qgc3RyaWN0IHdhcm5pbmdcbiAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0ZWRJdGVtSWQpO1xuICAgIGlmIChlbGUgJiYgZWxlLnNjcm9sbEludG9WaWV3KSB7XG4gICAgICBlbGUuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkS2V5XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICBzZXRTZWxlY3RlZEtleShudWxsKTtcbiAgICB9XG4gIH0sIFtvcGVuXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgbW9yZVN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBydGwgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnLCB0YWJCYXJHdXR0ZXIpO1xuICBpZiAoIXRhYnMubGVuZ3RoKSB7XG4gICAgbW9yZVN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBtb3JlU3R5bGUub3JkZXIgPSAxO1xuICB9XG4gIHZhciBvdmVybGF5Q2xhc3NOYW1lID0gY2xhc3NOYW1lcyhfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4LCBcIi1ydGxcIiksIHJ0bCkpO1xuICB2YXIgbW9yZU5vZGUgPSBtb2JpbGUgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24sIF9leHRlbmRzKHtcbiAgICBwcmVmaXhDbHM6IGRyb3Bkb3duUHJlZml4LFxuICAgIG92ZXJsYXk6IG1lbnUsXG4gICAgdmlzaWJsZTogdGFicy5sZW5ndGggPyBvcGVuIDogZmFsc2UsXG4gICAgb25WaXNpYmxlQ2hhbmdlOiBzZXRPcGVuLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IGNsYXNzTmFtZXMob3ZlcmxheUNsYXNzTmFtZSwgcG9wdXBDbGFzc05hbWUpLFxuICAgIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICB9LCBtb3JlUHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LW1vcmVcIiksXG4gICAgc3R5bGU6IG1vcmVTdHlsZSxcbiAgICB0YWJJbmRleDogLTEsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCIsXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6IHBvcHVwSWQsXG4gICAgaWQ6IFwiXCIuY29uY2F0KGlkLCBcIi1tb3JlXCIpLFxuICAgIFwiYXJpYS1leHBhbmRlZFwiOiBvcGVuLFxuICAgIG9uS2V5RG93bjogb25LZXlEb3duXG4gIH0sIG1vcmVJY29uKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LW9wZXJhdGlvbnNcIiksIGNsYXNzTmFtZSksXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHJlZjogcmVmXG4gIH0sIG1vcmVOb2RlLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBZGRCdXR0b24sIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBlZGl0YWJsZTogZWRpdGFibGVcbiAgfSkpO1xufSk7XG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovUmVhY3QubWVtbyhPcGVyYXRpb25Ob2RlLCBmdW5jdGlvbiAoXywgbmV4dCkge1xuICByZXR1cm4gKFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzMyNTQ0XG4gICAgLy8gV2UnZCBiZXR0ZXIgcmVtb3ZlIHN5bnRhY3RpYyBzdWdhciBpbiBgcmMtbWVudWAgc2luY2UgdGhpcyBoYXMgcGVyZiBpc3N1ZVxuICAgIG5leHQudGFiTW92aW5nXG4gICk7XG59KTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZW5EYXRhTm9kZUtleSwgZ2V0UmVtb3ZhYmxlIH0gZnJvbSBcIi4uL3V0aWxcIjtcbnZhciBUYWJOb2RlID0gZnVuY3Rpb24gVGFiTm9kZShwcm9wcykge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGlkID0gcHJvcHMuaWQsXG4gICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgIF9wcm9wcyR0YWIgPSBwcm9wcy50YWIsXG4gICAga2V5ID0gX3Byb3BzJHRhYi5rZXksXG4gICAgbGFiZWwgPSBfcHJvcHMkdGFiLmxhYmVsLFxuICAgIGRpc2FibGVkID0gX3Byb3BzJHRhYi5kaXNhYmxlZCxcbiAgICBjbG9zZUljb24gPSBfcHJvcHMkdGFiLmNsb3NlSWNvbixcbiAgICBpY29uID0gX3Byb3BzJHRhYi5pY29uLFxuICAgIGNsb3NhYmxlID0gcHJvcHMuY2xvc2FibGUsXG4gICAgcmVuZGVyV3JhcHBlciA9IHByb3BzLnJlbmRlcldyYXBwZXIsXG4gICAgcmVtb3ZlQXJpYUxhYmVsID0gcHJvcHMucmVtb3ZlQXJpYUxhYmVsLFxuICAgIGVkaXRhYmxlID0gcHJvcHMuZWRpdGFibGUsXG4gICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIHRhYlByZWZpeCA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGFiXCIpO1xuICB2YXIgcmVtb3ZhYmxlID0gZ2V0UmVtb3ZhYmxlKGNsb3NhYmxlLCBjbG9zZUljb24sIGVkaXRhYmxlLCBkaXNhYmxlZCk7XG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxDbGljayhlKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uQ2xpY2soZSk7XG4gIH1cbiAgZnVuY3Rpb24gb25SZW1vdmVUYWIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGVkaXRhYmxlLm9uRWRpdCgncmVtb3ZlJywge1xuICAgICAga2V5OiBrZXksXG4gICAgICBldmVudDogZXZlbnRcbiAgICB9KTtcbiAgfVxuICB2YXIgbGFiZWxOb2RlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGljb24gJiYgdHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBsYWJlbCkgOiBsYWJlbDtcbiAgfSwgW2xhYmVsLCBpY29uXSk7XG4gIHZhciBub2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGtleToga2V5XG4gICAgLy8gcmVmPXtyZWZ9XG4gICAgLFxuICAgIFwiZGF0YS1ub2RlLWtleVwiOiBnZW5EYXRhTm9kZUtleShrZXkpLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyh0YWJQcmVmaXgsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLXdpdGgtcmVtb3ZlXCIpLCByZW1vdmFibGUpLCBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLWFjdGl2ZVwiKSwgYWN0aXZlKSwgXCJcIi5jb25jYXQodGFiUHJlZml4LCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgb25DbGljazogb25JbnRlcm5hbENsaWNrXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByb2xlOiBcInRhYlwiLFxuICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBhY3RpdmUsXG4gICAgaWQ6IGlkICYmIFwiXCIuY29uY2F0KGlkLCBcIi10YWItXCIpLmNvbmNhdChrZXkpLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQodGFiUHJlZml4LCBcIi1idG5cIiksXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6IGlkICYmIFwiXCIuY29uY2F0KGlkLCBcIi1wYW5lbC1cIikuY29uY2F0KGtleSksXG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkLFxuICAgIHRhYkluZGV4OiBkaXNhYmxlZCA/IG51bGwgOiAwLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uSW50ZXJuYWxDbGljayhlKTtcbiAgICB9LFxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgIGlmIChbS2V5Q29kZS5TUEFDRSwgS2V5Q29kZS5FTlRFUl0uaW5jbHVkZXMoZS53aGljaCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkludGVybmFsQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkZvY3VzOiBvbkZvY3VzXG4gIH0sIGljb24gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHRhYlByZWZpeCwgXCItaWNvblwiKVxuICB9LCBpY29uKSwgbGFiZWwgJiYgbGFiZWxOb2RlKSwgcmVtb3ZhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiByZW1vdmVBcmlhTGFiZWwgfHwgJ3JlbW92ZScsXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLXJlbW92ZVwiKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblJlbW92ZVRhYihlKTtcbiAgICB9XG4gIH0sIGNsb3NlSWNvbiB8fCBlZGl0YWJsZS5yZW1vdmVJY29uIHx8ICfDlycpKTtcbiAgcmV0dXJuIHJlbmRlcldyYXBwZXIgPyByZW5kZXJXcmFwcGVyKG5vZGUpIDogbm9kZTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJOb2RlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3JjLXJlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQgdXNlRXZlbnQgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlRXZlbnRcIjtcbmltcG9ydCB7IHVzZUNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gXCIuLi9UYWJDb250ZXh0XCI7XG5pbXBvcnQgdXNlSW5kaWNhdG9yIGZyb20gXCIuLi9ob29rcy91c2VJbmRpY2F0b3JcIjtcbmltcG9ydCB1c2VPZmZzZXRzIGZyb20gXCIuLi9ob29rcy91c2VPZmZzZXRzXCI7XG5pbXBvcnQgdXNlU3luY1N0YXRlIGZyb20gXCIuLi9ob29rcy91c2VTeW5jU3RhdGVcIjtcbmltcG9ydCB1c2VUb3VjaE1vdmUgZnJvbSBcIi4uL2hvb2tzL3VzZVRvdWNoTW92ZVwiO1xuaW1wb3J0IHVzZVVwZGF0ZSwgeyB1c2VVcGRhdGVTdGF0ZSB9IGZyb20gXCIuLi9ob29rcy91c2VVcGRhdGVcIjtcbmltcG9ydCB1c2VWaXNpYmxlUmFuZ2UgZnJvbSBcIi4uL2hvb2tzL3VzZVZpc2libGVSYW5nZVwiO1xuaW1wb3J0IHsgZ2VuRGF0YU5vZGVLZXksIHN0cmluZ2lmeSB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuL0FkZEJ1dHRvblwiO1xuaW1wb3J0IEV4dHJhQ29udGVudCBmcm9tIFwiLi9FeHRyYUNvbnRlbnRcIjtcbmltcG9ydCBPcGVyYXRpb25Ob2RlIGZyb20gXCIuL09wZXJhdGlvbk5vZGVcIjtcbmltcG9ydCBUYWJOb2RlIGZyb20gXCIuL1RhYk5vZGVcIjtcbnZhciBnZXRUYWJTaXplID0gZnVuY3Rpb24gZ2V0VGFiU2l6ZSh0YWIsIGNvbnRhaW5lclJlY3QpIHtcbiAgLy8gdGFiTGlzdFJlZlxuICB2YXIgb2Zmc2V0V2lkdGggPSB0YWIub2Zmc2V0V2lkdGgsXG4gICAgb2Zmc2V0SGVpZ2h0ID0gdGFiLm9mZnNldEhlaWdodCxcbiAgICBvZmZzZXRUb3AgPSB0YWIub2Zmc2V0VG9wLFxuICAgIG9mZnNldExlZnQgPSB0YWIub2Zmc2V0TGVmdDtcbiAgdmFyIF90YWIkZ2V0Qm91bmRpbmdDbGllbiA9IHRhYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICB3aWR0aCA9IF90YWIkZ2V0Qm91bmRpbmdDbGllbi53aWR0aCxcbiAgICBoZWlnaHQgPSBfdGFiJGdldEJvdW5kaW5nQ2xpZW4uaGVpZ2h0LFxuICAgIGxlZnQgPSBfdGFiJGdldEJvdW5kaW5nQ2xpZW4ubGVmdCxcbiAgICB0b3AgPSBfdGFiJGdldEJvdW5kaW5nQ2xpZW4udG9wO1xuXG4gIC8vIFVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgdG8gYXZvaWQgZGVjaW1hbCBpbmFjY3VyYWN5XG4gIGlmIChNYXRoLmFicyh3aWR0aCAtIG9mZnNldFdpZHRoKSA8IDEpIHtcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHQsIGxlZnQgLSBjb250YWluZXJSZWN0LmxlZnQsIHRvcCAtIGNvbnRhaW5lclJlY3QudG9wXTtcbiAgfVxuICByZXR1cm4gW29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQsIG9mZnNldExlZnQsIG9mZnNldFRvcF07XG59O1xudmFyIGdldFNpemUgPSBmdW5jdGlvbiBnZXRTaXplKHJlZk9iaikge1xuICB2YXIgX3JlZiA9IHJlZk9iai5jdXJyZW50IHx8IHt9LFxuICAgIF9yZWYkb2Zmc2V0V2lkdGggPSBfcmVmLm9mZnNldFdpZHRoLFxuICAgIG9mZnNldFdpZHRoID0gX3JlZiRvZmZzZXRXaWR0aCA9PT0gdm9pZCAwID8gMCA6IF9yZWYkb2Zmc2V0V2lkdGgsXG4gICAgX3JlZiRvZmZzZXRIZWlnaHQgPSBfcmVmLm9mZnNldEhlaWdodCxcbiAgICBvZmZzZXRIZWlnaHQgPSBfcmVmJG9mZnNldEhlaWdodCA9PT0gdm9pZCAwID8gMCA6IF9yZWYkb2Zmc2V0SGVpZ2h0O1xuXG4gIC8vIFVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgdG8gYXZvaWQgZGVjaW1hbCBpbmFjY3VyYWN5XG4gIGlmIChyZWZPYmouY3VycmVudCkge1xuICAgIHZhciBfcmVmT2JqJGN1cnJlbnQkZ2V0Qm8gPSByZWZPYmouY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpZHRoID0gX3JlZk9iaiRjdXJyZW50JGdldEJvLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZk9iaiRjdXJyZW50JGdldEJvLmhlaWdodDtcbiAgICBpZiAoTWF0aC5hYnMod2lkdGggLSBvZmZzZXRXaWR0aCkgPCAxKSB7XG4gICAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHRdO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGBTaXplSW5mb2AgdG8gdW5pdCB2YWx1ZS4gU3VjaCBhcyBbMTIzLCA0NTZdIHdpdGggYHRvcGAgcG9zaXRpb24gZ2V0IGAxMjNgXG4gKi9cbnZhciBnZXRVbml0VmFsdWUgPSBmdW5jdGlvbiBnZXRVbml0VmFsdWUoc2l6ZSwgdGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICByZXR1cm4gc2l6ZVt0YWJQb3NpdGlvblRvcE9yQm90dG9tID8gMCA6IDFdO1xufTtcbnZhciBUYWJOYXZMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGlkID0gcHJvcHMuaWQsXG4gICAgYW5pbWF0ZWQgPSBwcm9wcy5hbmltYXRlZCxcbiAgICBhY3RpdmVLZXkgPSBwcm9wcy5hY3RpdmVLZXksXG4gICAgcnRsID0gcHJvcHMucnRsLFxuICAgIGV4dHJhID0gcHJvcHMuZXh0cmEsXG4gICAgZWRpdGFibGUgPSBwcm9wcy5lZGl0YWJsZSxcbiAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgdGFiUG9zaXRpb24gPSBwcm9wcy50YWJQb3NpdGlvbixcbiAgICB0YWJCYXJHdXR0ZXIgPSBwcm9wcy50YWJCYXJHdXR0ZXIsXG4gICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBvblRhYkNsaWNrID0gcHJvcHMub25UYWJDbGljayxcbiAgICBvblRhYlNjcm9sbCA9IHByb3BzLm9uVGFiU2Nyb2xsLFxuICAgIGluZGljYXRvciA9IHByb3BzLmluZGljYXRvcjtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJDb250ZXh0KSxcbiAgICBwcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5wcmVmaXhDbHMsXG4gICAgdGFicyA9IF9SZWFjdCR1c2VDb250ZXh0LnRhYnM7XG4gIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBleHRyYUxlZnRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBleHRyYVJpZ2h0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgdGFic1dyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciB0YWJMaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgb3BlcmF0aW9uc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGlubmVyQWRkQnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgdGFiUG9zaXRpb25Ub3BPckJvdHRvbSA9IHRhYlBvc2l0aW9uID09PSAndG9wJyB8fCB0YWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSc7XG4gIHZhciBfdXNlU3luY1N0YXRlID0gdXNlU3luY1N0YXRlKDAsIGZ1bmN0aW9uIChuZXh0LCBwcmV2KSB7XG4gICAgICBpZiAodGFiUG9zaXRpb25Ub3BPckJvdHRvbSAmJiBvblRhYlNjcm9sbCkge1xuICAgICAgICBvblRhYlNjcm9sbCh7XG4gICAgICAgICAgZGlyZWN0aW9uOiBuZXh0ID4gcHJldiA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksXG4gICAgX3VzZVN5bmNTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3luY1N0YXRlLCAyKSxcbiAgICB0cmFuc2Zvcm1MZWZ0ID0gX3VzZVN5bmNTdGF0ZTJbMF0sXG4gICAgc2V0VHJhbnNmb3JtTGVmdCA9IF91c2VTeW5jU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN5bmNTdGF0ZTMgPSB1c2VTeW5jU3RhdGUoMCwgZnVuY3Rpb24gKG5leHQsIHByZXYpIHtcbiAgICAgIGlmICghdGFiUG9zaXRpb25Ub3BPckJvdHRvbSAmJiBvblRhYlNjcm9sbCkge1xuICAgICAgICBvblRhYlNjcm9sbCh7XG4gICAgICAgICAgZGlyZWN0aW9uOiBuZXh0ID4gcHJldiA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksXG4gICAgX3VzZVN5bmNTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3luY1N0YXRlMywgMiksXG4gICAgdHJhbnNmb3JtVG9wID0gX3VzZVN5bmNTdGF0ZTRbMF0sXG4gICAgc2V0VHJhbnNmb3JtVG9wID0gX3VzZVN5bmNTdGF0ZTRbMV07XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShbMCwgMF0pLFxuICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgIGNvbnRhaW5lckV4Y2x1ZGVFeHRyYVNpemUgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldENvbnRhaW5lckV4Y2x1ZGVFeHRyYVNpemUgPSBfdXNlU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKFswLCAwXSksXG4gICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgIHRhYkNvbnRlbnRTaXplID0gX3VzZVN0YXRlNFswXSxcbiAgICBzZXRUYWJDb250ZW50U2l6ZSA9IF91c2VTdGF0ZTRbMV07XG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoWzAsIDBdKSxcbiAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgYWRkU2l6ZSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgc2V0QWRkU2l6ZSA9IF91c2VTdGF0ZTZbMV07XG4gIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUoWzAsIDBdKSxcbiAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgb3BlcmF0aW9uU2l6ZSA9IF91c2VTdGF0ZThbMF0sXG4gICAgc2V0T3BlcmF0aW9uU2l6ZSA9IF91c2VTdGF0ZThbMV07XG4gIHZhciBfdXNlVXBkYXRlU3RhdGUgPSB1c2VVcGRhdGVTdGF0ZShuZXcgTWFwKCkpLFxuICAgIF91c2VVcGRhdGVTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlVXBkYXRlU3RhdGUsIDIpLFxuICAgIHRhYlNpemVzID0gX3VzZVVwZGF0ZVN0YXRlMlswXSxcbiAgICBzZXRUYWJTaXplcyA9IF91c2VVcGRhdGVTdGF0ZTJbMV07XG4gIHZhciB0YWJPZmZzZXRzID0gdXNlT2Zmc2V0cyh0YWJzLCB0YWJTaXplcywgdGFiQ29udGVudFNpemVbMF0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFVuaXQgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgY29udGFpbmVyRXhjbHVkZUV4dHJhU2l6ZVZhbHVlID0gZ2V0VW5pdFZhbHVlKGNvbnRhaW5lckV4Y2x1ZGVFeHRyYVNpemUsIHRhYlBvc2l0aW9uVG9wT3JCb3R0b20pO1xuICB2YXIgdGFiQ29udGVudFNpemVWYWx1ZSA9IGdldFVuaXRWYWx1ZSh0YWJDb250ZW50U2l6ZSwgdGFiUG9zaXRpb25Ub3BPckJvdHRvbSk7XG4gIHZhciBhZGRTaXplVmFsdWUgPSBnZXRVbml0VmFsdWUoYWRkU2l6ZSwgdGFiUG9zaXRpb25Ub3BPckJvdHRvbSk7XG4gIHZhciBvcGVyYXRpb25TaXplVmFsdWUgPSBnZXRVbml0VmFsdWUob3BlcmF0aW9uU2l6ZSwgdGFiUG9zaXRpb25Ub3BPckJvdHRvbSk7XG4gIHZhciBuZWVkU2Nyb2xsID0gTWF0aC5mbG9vcihjb250YWluZXJFeGNsdWRlRXh0cmFTaXplVmFsdWUpIDwgTWF0aC5mbG9vcih0YWJDb250ZW50U2l6ZVZhbHVlICsgYWRkU2l6ZVZhbHVlKTtcbiAgdmFyIHZpc2libGVUYWJDb250ZW50VmFsdWUgPSBuZWVkU2Nyb2xsID8gY29udGFpbmVyRXhjbHVkZUV4dHJhU2l6ZVZhbHVlIC0gb3BlcmF0aW9uU2l6ZVZhbHVlIDogY29udGFpbmVyRXhjbHVkZUV4dHJhU2l6ZVZhbHVlIC0gYWRkU2l6ZVZhbHVlO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFV0aWwgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgb3BlcmF0aW9uc0hpZGRlbkNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LW9wZXJhdGlvbnMtaGlkZGVuXCIpO1xuICB2YXIgdHJhbnNmb3JtTWluID0gMDtcbiAgdmFyIHRyYW5zZm9ybU1heCA9IDA7XG4gIGlmICghdGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICAgIHRyYW5zZm9ybU1pbiA9IE1hdGgubWluKDAsIHZpc2libGVUYWJDb250ZW50VmFsdWUgLSB0YWJDb250ZW50U2l6ZVZhbHVlKTtcbiAgICB0cmFuc2Zvcm1NYXggPSAwO1xuICB9IGVsc2UgaWYgKHJ0bCkge1xuICAgIHRyYW5zZm9ybU1pbiA9IDA7XG4gICAgdHJhbnNmb3JtTWF4ID0gTWF0aC5tYXgoMCwgdGFiQ29udGVudFNpemVWYWx1ZSAtIHZpc2libGVUYWJDb250ZW50VmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zZm9ybU1pbiA9IE1hdGgubWluKDAsIHZpc2libGVUYWJDb250ZW50VmFsdWUgLSB0YWJDb250ZW50U2l6ZVZhbHVlKTtcbiAgICB0cmFuc2Zvcm1NYXggPSAwO1xuICB9XG4gIGZ1bmN0aW9uIGFsaWduSW5SYW5nZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8IHRyYW5zZm9ybU1pbikge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybU1pbjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gdHJhbnNmb3JtTWF4KSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtTWF4O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IE1vYmlsZSA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIHRvdWNoTW92aW5nUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgX3VzZVN0YXRlOSA9IHVzZVN0YXRlKCksXG4gICAgX3VzZVN0YXRlMTAgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU5LCAyKSxcbiAgICBsb2NrQW5pbWF0aW9uID0gX3VzZVN0YXRlMTBbMF0sXG4gICAgc2V0TG9ja0FuaW1hdGlvbiA9IF91c2VTdGF0ZTEwWzFdO1xuICBmdW5jdGlvbiBkb0xvY2tBbmltYXRpb24oKSB7XG4gICAgc2V0TG9ja0FuaW1hdGlvbihEYXRlLm5vdygpKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclRvdWNoTW92aW5nKCkge1xuICAgIGlmICh0b3VjaE1vdmluZ1JlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQodG91Y2hNb3ZpbmdSZWYuY3VycmVudCk7XG4gICAgfVxuICB9XG4gIHVzZVRvdWNoTW92ZSh0YWJzV3JhcHBlclJlZiwgZnVuY3Rpb24gKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICBmdW5jdGlvbiBkb01vdmUoc2V0U3RhdGUsIG9mZnNldCkge1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGFsaWduSW5SYW5nZSh2YWx1ZSArIG9mZnNldCk7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNraXAgc2Nyb2xsIGlmIHBsYWNlIGlzIGVub3VnaFxuICAgIGlmICghbmVlZFNjcm9sbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICAgICAgZG9Nb3ZlKHNldFRyYW5zZm9ybUxlZnQsIG9mZnNldFgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb01vdmUoc2V0VHJhbnNmb3JtVG9wLCBvZmZzZXRZKTtcbiAgICB9XG4gICAgY2xlYXJUb3VjaE1vdmluZygpO1xuICAgIGRvTG9ja0FuaW1hdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRvdWNoTW92aW5nKCk7XG4gICAgaWYgKGxvY2tBbmltYXRpb24pIHtcbiAgICAgIHRvdWNoTW92aW5nUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9ja0FuaW1hdGlvbigwKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIHJldHVybiBjbGVhclRvdWNoTW92aW5nO1xuICB9LCBbbG9ja0FuaW1hdGlvbl0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PSBWaXNpYmxlIFJhbmdlID09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSZW5kZXIgdGFiIG5vZGUgJiBjb2xsZWN0IHRhYiBvZmZzZXRcbiAgdmFyIF91c2VWaXNpYmxlUmFuZ2UgPSB1c2VWaXNpYmxlUmFuZ2UodGFiT2Zmc2V0cyxcbiAgICAvLyBDb250YWluZXJcbiAgICB2aXNpYmxlVGFiQ29udGVudFZhbHVlLFxuICAgIC8vIFRyYW5zZm9ybVxuICAgIHRhYlBvc2l0aW9uVG9wT3JCb3R0b20gPyB0cmFuc2Zvcm1MZWZ0IDogdHJhbnNmb3JtVG9wLFxuICAgIC8vIFRhYnNcbiAgICB0YWJDb250ZW50U2l6ZVZhbHVlLFxuICAgIC8vIEFkZFxuICAgIGFkZFNpemVWYWx1ZSxcbiAgICAvLyBPcGVyYXRpb25cbiAgICBvcGVyYXRpb25TaXplVmFsdWUsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgdGFiczogdGFic1xuICAgIH0pKSxcbiAgICBfdXNlVmlzaWJsZVJhbmdlMiA9IF9zbGljZWRUb0FycmF5KF91c2VWaXNpYmxlUmFuZ2UsIDIpLFxuICAgIHZpc2libGVTdGFydCA9IF91c2VWaXNpYmxlUmFuZ2UyWzBdLFxuICAgIHZpc2libGVFbmQgPSBfdXNlVmlzaWJsZVJhbmdlMlsxXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFNjcm9sbCA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIHNjcm9sbFRvVGFiID0gdXNlRXZlbnQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGFjdGl2ZUtleTtcbiAgICB2YXIgdGFiT2Zmc2V0ID0gdGFiT2Zmc2V0cy5nZXQoa2V5KSB8fCB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMFxuICAgIH07XG4gICAgaWYgKHRhYlBvc2l0aW9uVG9wT3JCb3R0b20pIHtcbiAgICAgIC8vID09PT09PT09PT09PSBBbGlnbiB3aXRoIHRvcCAmIGJvdHRvbSA9PT09PT09PT09PT1cbiAgICAgIHZhciBuZXdUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1MZWZ0O1xuXG4gICAgICAvLyBSVExcbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgaWYgKHRhYk9mZnNldC5yaWdodCA8IHRyYW5zZm9ybUxlZnQpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSB0YWJPZmZzZXQucmlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiT2Zmc2V0LnJpZ2h0ICsgdGFiT2Zmc2V0LndpZHRoID4gdHJhbnNmb3JtTGVmdCArIHZpc2libGVUYWJDb250ZW50VmFsdWUpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSB0YWJPZmZzZXQucmlnaHQgKyB0YWJPZmZzZXQud2lkdGggLSB2aXNpYmxlVGFiQ29udGVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBMVFJcbiAgICAgIGVsc2UgaWYgKHRhYk9mZnNldC5sZWZ0IDwgLXRyYW5zZm9ybUxlZnQpIHtcbiAgICAgICAgbmV3VHJhbnNmb3JtID0gLXRhYk9mZnNldC5sZWZ0O1xuICAgICAgfSBlbHNlIGlmICh0YWJPZmZzZXQubGVmdCArIHRhYk9mZnNldC53aWR0aCA+IC10cmFuc2Zvcm1MZWZ0ICsgdmlzaWJsZVRhYkNvbnRlbnRWYWx1ZSkge1xuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtKHRhYk9mZnNldC5sZWZ0ICsgdGFiT2Zmc2V0LndpZHRoIC0gdmlzaWJsZVRhYkNvbnRlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgICBzZXRUcmFuc2Zvcm1Ub3AoMCk7XG4gICAgICBzZXRUcmFuc2Zvcm1MZWZ0KGFsaWduSW5SYW5nZShuZXdUcmFuc2Zvcm0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gPT09PT09PT09PT09IEFsaWduIHdpdGggbGVmdCAmIHJpZ2h0ID09PT09PT09PT09PVxuICAgICAgdmFyIF9uZXdUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1Ub3A7XG4gICAgICBpZiAodGFiT2Zmc2V0LnRvcCA8IC10cmFuc2Zvcm1Ub3ApIHtcbiAgICAgICAgX25ld1RyYW5zZm9ybSA9IC10YWJPZmZzZXQudG9wO1xuICAgICAgfSBlbHNlIGlmICh0YWJPZmZzZXQudG9wICsgdGFiT2Zmc2V0LmhlaWdodCA+IC10cmFuc2Zvcm1Ub3AgKyB2aXNpYmxlVGFiQ29udGVudFZhbHVlKSB7XG4gICAgICAgIF9uZXdUcmFuc2Zvcm0gPSAtKHRhYk9mZnNldC50b3AgKyB0YWJPZmZzZXQuaGVpZ2h0IC0gdmlzaWJsZVRhYkNvbnRlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgICBzZXRUcmFuc2Zvcm1MZWZ0KDApO1xuICAgICAgc2V0VHJhbnNmb3JtVG9wKGFsaWduSW5SYW5nZShfbmV3VHJhbnNmb3JtKSk7XG4gICAgfVxuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBUYWIgPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIHRhYk5vZGVTdHlsZSA9IHt9O1xuICBpZiAodGFiUG9zaXRpb24gPT09ICd0b3AnIHx8IHRhYlBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgIHRhYk5vZGVTdHlsZVtydGwgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnXSA9IHRhYkJhckd1dHRlcjtcbiAgfSBlbHNlIHtcbiAgICB0YWJOb2RlU3R5bGUubWFyZ2luVG9wID0gdGFiQmFyR3V0dGVyO1xuICB9XG4gIHZhciB0YWJOb2RlcyA9IHRhYnMubWFwKGZ1bmN0aW9uICh0YWIsIGkpIHtcbiAgICB2YXIga2V5ID0gdGFiLmtleTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiTm9kZSwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBrZXk6IGtleSxcbiAgICAgIHRhYjogdGFiXG4gICAgICAvKiBmaXJzdCBub2RlIHNob3VsZCBub3QgaGF2ZSBtYXJnaW4gbGVmdCAqLyxcbiAgICAgIHN0eWxlOiBpID09PSAwID8gdW5kZWZpbmVkIDogdGFiTm9kZVN0eWxlLFxuICAgICAgY2xvc2FibGU6IHRhYi5jbG9zYWJsZSxcbiAgICAgIGVkaXRhYmxlOiBlZGl0YWJsZSxcbiAgICAgIGFjdGl2ZToga2V5ID09PSBhY3RpdmVLZXksXG4gICAgICByZW5kZXJXcmFwcGVyOiBjaGlsZHJlbixcbiAgICAgIHJlbW92ZUFyaWFMYWJlbDogbG9jYWxlID09PSBudWxsIHx8IGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9jYWxlLnJlbW92ZUFyaWFMYWJlbCxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBvblRhYkNsaWNrKGtleSwgZSk7XG4gICAgICB9LFxuICAgICAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICAgICAgc2Nyb2xsVG9UYWIoa2V5KTtcbiAgICAgICAgZG9Mb2NrQW5pbWF0aW9uKCk7XG4gICAgICAgIGlmICghdGFic1dyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb2N1cyBlbGVtZW50IHdpbGwgbWFrZSBzY3JvbGxMZWZ0IGNoYW5nZSB3aGljaCB3ZSBzaG91bGQgcmVzZXQgYmFja1xuICAgICAgICBpZiAoIXJ0bCkge1xuICAgICAgICAgIHRhYnNXcmFwcGVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGFic1dyYXBwZXJSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBVcGRhdGUgYnV0dG9ucyByZWNvcmRzXG4gIHZhciB1cGRhdGVUYWJTaXplcyA9IGZ1bmN0aW9uIHVwZGF0ZVRhYlNpemVzKCkge1xuICAgIHJldHVybiBzZXRUYWJTaXplcyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RhYkxpc3RSZWYkY3VycmVudDtcbiAgICAgIHZhciBuZXdTaXplcyA9IG5ldyBNYXAoKTtcbiAgICAgIHZhciBsaXN0UmVjdCA9IChfdGFiTGlzdFJlZiRjdXJyZW50ID0gdGFiTGlzdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGFiTGlzdFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFiTGlzdFJlZiRjdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGFicy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgX3RhYkxpc3RSZWYkY3VycmVudDI7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXk7XG4gICAgICAgIHZhciBidG5Ob2RlID0gKF90YWJMaXN0UmVmJGN1cnJlbnQyID0gdGFiTGlzdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGFiTGlzdFJlZiRjdXJyZW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYkxpc3RSZWYkY3VycmVudDIucXVlcnlTZWxlY3RvcihcIltkYXRhLW5vZGUta2V5PVxcXCJcIi5jb25jYXQoZ2VuRGF0YU5vZGVLZXkoa2V5KSwgXCJcXFwiXVwiKSk7XG4gICAgICAgIGlmIChidG5Ob2RlKSB7XG4gICAgICAgICAgdmFyIF9nZXRUYWJTaXplID0gZ2V0VGFiU2l6ZShidG5Ob2RlLCBsaXN0UmVjdCksXG4gICAgICAgICAgICBfZ2V0VGFiU2l6ZTIgPSBfc2xpY2VkVG9BcnJheShfZ2V0VGFiU2l6ZSwgNCksXG4gICAgICAgICAgICB3aWR0aCA9IF9nZXRUYWJTaXplMlswXSxcbiAgICAgICAgICAgIGhlaWdodCA9IF9nZXRUYWJTaXplMlsxXSxcbiAgICAgICAgICAgIGxlZnQgPSBfZ2V0VGFiU2l6ZTJbMl0sXG4gICAgICAgICAgICB0b3AgPSBfZ2V0VGFiU2l6ZTJbM107XG4gICAgICAgICAgbmV3U2l6ZXMuc2V0KGtleSwge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgdG9wOiB0b3BcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3U2l6ZXM7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdXBkYXRlVGFiU2l6ZXMoKTtcbiAgfSwgW3RhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gdGFiLmtleTtcbiAgfSkuam9pbignXycpXSk7XG4gIHZhciBvbkxpc3RIb2xkZXJSZXNpemUgPSB1c2VVcGRhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFVwZGF0ZSB3cmFwcGVyIHJlY29yZHNcbiAgICB2YXIgY29udGFpbmVyU2l6ZSA9IGdldFNpemUoY29udGFpbmVyUmVmKTtcbiAgICB2YXIgZXh0cmFMZWZ0U2l6ZSA9IGdldFNpemUoZXh0cmFMZWZ0UmVmKTtcbiAgICB2YXIgZXh0cmFSaWdodFNpemUgPSBnZXRTaXplKGV4dHJhUmlnaHRSZWYpO1xuICAgIHNldENvbnRhaW5lckV4Y2x1ZGVFeHRyYVNpemUoW2NvbnRhaW5lclNpemVbMF0gLSBleHRyYUxlZnRTaXplWzBdIC0gZXh0cmFSaWdodFNpemVbMF0sIGNvbnRhaW5lclNpemVbMV0gLSBleHRyYUxlZnRTaXplWzFdIC0gZXh0cmFSaWdodFNpemVbMV1dKTtcbiAgICB2YXIgbmV3QWRkU2l6ZSA9IGdldFNpemUoaW5uZXJBZGRCdXR0b25SZWYpO1xuICAgIHNldEFkZFNpemUobmV3QWRkU2l6ZSk7XG4gICAgdmFyIG5ld09wZXJhdGlvblNpemUgPSBnZXRTaXplKG9wZXJhdGlvbnNSZWYpO1xuICAgIHNldE9wZXJhdGlvblNpemUobmV3T3BlcmF0aW9uU2l6ZSk7XG5cbiAgICAvLyBXaGljaCBpbmNsdWRlcyBhZGQgYnV0dG9uIHNpemVcbiAgICB2YXIgdGFiQ29udGVudEZ1bGxTaXplID0gZ2V0U2l6ZSh0YWJMaXN0UmVmKTtcbiAgICBzZXRUYWJDb250ZW50U2l6ZShbdGFiQ29udGVudEZ1bGxTaXplWzBdIC0gbmV3QWRkU2l6ZVswXSwgdGFiQ29udGVudEZ1bGxTaXplWzFdIC0gbmV3QWRkU2l6ZVsxXV0pO1xuXG4gICAgLy8gVXBkYXRlIGJ1dHRvbnMgcmVjb3Jkc1xuICAgIHVwZGF0ZVRhYlNpemVzKCk7XG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PSBEcm9wZG93biA9PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgc3RhcnRIaWRkZW5UYWJzID0gdGFicy5zbGljZSgwLCB2aXNpYmxlU3RhcnQpO1xuICB2YXIgZW5kSGlkZGVuVGFicyA9IHRhYnMuc2xpY2UodmlzaWJsZUVuZCArIDEpO1xuICB2YXIgaGlkZGVuVGFicyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhcnRIaWRkZW5UYWJzKSwgX3RvQ29uc3VtYWJsZUFycmF5KGVuZEhpZGRlblRhYnMpKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09IExpbmsgJiBPcGVyYXRpb25zID09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGFjdGl2ZVRhYk9mZnNldCA9IHRhYk9mZnNldHMuZ2V0KGFjdGl2ZUtleSk7XG4gIHZhciBfdXNlSW5kaWNhdG9yID0gdXNlSW5kaWNhdG9yKHtcbiAgICAgIGFjdGl2ZVRhYk9mZnNldDogYWN0aXZlVGFiT2Zmc2V0LFxuICAgICAgaG9yaXpvbnRhbDogdGFiUG9zaXRpb25Ub3BPckJvdHRvbSxcbiAgICAgIGluZGljYXRvcjogaW5kaWNhdG9yLFxuICAgICAgcnRsOiBydGxcbiAgICB9KSxcbiAgICBpbmRpY2F0b3JTdHlsZSA9IF91c2VJbmRpY2F0b3Iuc3R5bGU7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2Nyb2xsVG9UYWIoKTtcbiAgfSwgW2FjdGl2ZUtleSwgdHJhbnNmb3JtTWluLCB0cmFuc2Zvcm1NYXgsIHN0cmluZ2lmeShhY3RpdmVUYWJPZmZzZXQpLCBzdHJpbmdpZnkodGFiT2Zmc2V0cyksIHRhYlBvc2l0aW9uVG9wT3JCb3R0b21dKTtcblxuICAvLyBTaG91bGQgcmVjYWxjdWxhdGUgd2hlbiBydGwgY2hhbmdlZFxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG9uTGlzdEhvbGRlclJlc2l6ZSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICB9LCBbcnRsXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBoYXNEcm9wZG93biA9ICEhaGlkZGVuVGFicy5sZW5ndGg7XG4gIHZhciB3cmFwUHJlZml4ID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtd3JhcFwiKTtcbiAgdmFyIHBpbmdMZWZ0O1xuICB2YXIgcGluZ1JpZ2h0O1xuICB2YXIgcGluZ1RvcDtcbiAgdmFyIHBpbmdCb3R0b207XG4gIGlmICh0YWJQb3NpdGlvblRvcE9yQm90dG9tKSB7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgcGluZ1JpZ2h0ID0gdHJhbnNmb3JtTGVmdCA+IDA7XG4gICAgICBwaW5nTGVmdCA9IHRyYW5zZm9ybUxlZnQgIT09IHRyYW5zZm9ybU1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGluZ0xlZnQgPSB0cmFuc2Zvcm1MZWZ0IDwgMDtcbiAgICAgIHBpbmdSaWdodCA9IHRyYW5zZm9ybUxlZnQgIT09IHRyYW5zZm9ybU1pbjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGluZ1RvcCA9IHRyYW5zZm9ybVRvcCA8IDA7XG4gICAgcGluZ0JvdHRvbSA9IHRyYW5zZm9ybVRvcCAhPT0gdHJhbnNmb3JtTWluO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgIG9uUmVzaXplOiBvbkxpc3RIb2xkZXJSZXNpemVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogdXNlQ29tcG9zZVJlZihyZWYsIGNvbnRhaW5lclJlZiksXG4gICAgcm9sZTogXCJ0YWJsaXN0XCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2XCIpLCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bigpIHtcbiAgICAgIC8vIE5vIG5lZWQgYW5pbWF0aW9uIHdoZW4gdXNlIGtleWJvYXJkXG4gICAgICBkb0xvY2tBbmltYXRpb24oKTtcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV4dHJhQ29udGVudCwge1xuICAgIHJlZjogZXh0cmFMZWZ0UmVmLFxuICAgIHBvc2l0aW9uOiBcImxlZnRcIixcbiAgICBleHRyYTogZXh0cmEsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25SZXNpemU6IG9uTGlzdEhvbGRlclJlc2l6ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHdyYXBQcmVmaXgsIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQod3JhcFByZWZpeCwgXCItcGluZy1sZWZ0XCIpLCBwaW5nTGVmdCksIFwiXCIuY29uY2F0KHdyYXBQcmVmaXgsIFwiLXBpbmctcmlnaHRcIiksIHBpbmdSaWdodCksIFwiXCIuY29uY2F0KHdyYXBQcmVmaXgsIFwiLXBpbmctdG9wXCIpLCBwaW5nVG9wKSwgXCJcIi5jb25jYXQod3JhcFByZWZpeCwgXCItcGluZy1ib3R0b21cIiksIHBpbmdCb3R0b20pKSxcbiAgICByZWY6IHRhYnNXcmFwcGVyUmVmXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25SZXNpemU6IG9uTGlzdEhvbGRlclJlc2l6ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiB0YWJMaXN0UmVmLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtbGlzdFwiKSxcbiAgICBzdHlsZToge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtTGVmdCwgXCJweCwgXCIpLmNvbmNhdCh0cmFuc2Zvcm1Ub3AsIFwicHgpXCIpLFxuICAgICAgdHJhbnNpdGlvbjogbG9ja0FuaW1hdGlvbiA/ICdub25lJyA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSwgdGFiTm9kZXMsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFkZEJ1dHRvbiwge1xuICAgIHJlZjogaW5uZXJBZGRCdXR0b25SZWYsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgZWRpdGFibGU6IGVkaXRhYmxlLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRhYk5vZGVzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHRhYk5vZGVTdHlsZSksIHt9LCB7XG4gICAgICB2aXNpYmlsaXR5OiBoYXNEcm9wZG93biA/ICdoaWRkZW4nIDogbnVsbFxuICAgIH0pXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5rLWJhclwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWluay1iYXItYW5pbWF0ZWRcIiksIGFuaW1hdGVkLmlua0JhcikpLFxuICAgIHN0eWxlOiBpbmRpY2F0b3JTdHlsZVxuICB9KSkpKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE9wZXJhdGlvbk5vZGUsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlbW92ZUFyaWFMYWJlbDogbG9jYWxlID09PSBudWxsIHx8IGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9jYWxlLnJlbW92ZUFyaWFMYWJlbCxcbiAgICByZWY6IG9wZXJhdGlvbnNSZWYsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgdGFiczogaGlkZGVuVGFicyxcbiAgICBjbGFzc05hbWU6ICFoYXNEcm9wZG93biAmJiBvcGVyYXRpb25zSGlkZGVuQ2xhc3NOYW1lLFxuICAgIHRhYk1vdmluZzogISFsb2NrQW5pbWF0aW9uXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRXh0cmFDb250ZW50LCB7XG4gICAgcmVmOiBleHRyYVJpZ2h0UmVmLFxuICAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gIH0pKSk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cbn0pO1xuZXhwb3J0IGRlZmF1bHQgVGFiTmF2TGlzdDsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBUYWJQYW5lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICBpZCA9IHByb3BzLmlkLFxuICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICB0YWJLZXkgPSBwcm9wcy50YWJLZXksXG4gICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogaWQgJiYgXCJcIi5jb25jYXQoaWQsIFwiLXBhbmVsLVwiKS5jb25jYXQodGFiS2V5KSxcbiAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgdGFiSW5kZXg6IGFjdGl2ZSA/IDAgOiAtMSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItdGFiLVwiKS5jb25jYXQodGFiS2V5KSxcbiAgICBcImFyaWEtaGlkZGVuXCI6ICFhY3RpdmUsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGFjdGl2ZSAmJiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFjdGl2ZVwiKSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBjaGlsZHJlbik7XG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRhYlBhbmUuZGlzcGxheU5hbWUgPSAnVGFiUGFuZSc7XG59XG5leHBvcnQgZGVmYXVsdCBUYWJQYW5lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wicmVuZGVyVGFiQmFyXCJdLFxuICBfZXhjbHVkZWQyID0gW1wibGFiZWxcIiwgXCJrZXlcIl07XG4vLyB6b21iaWVKOiBUbyBjb21wYXRpYmxlIHdpdGggYHJlbmRlclRhYkJhcmAgdXNhZ2UuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJOYXZMaXN0IGZyb20gJy4nO1xuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSBcIi4uL1RhYkNvbnRleHRcIjtcbmltcG9ydCBUYWJQYW5lIGZyb20gXCIuLi9UYWJQYW5lbExpc3QvVGFiUGFuZVwiO1xuLy8gV2UgaGF2ZSB0byBjcmVhdGUgYSBUYWJOYXZMaXN0IGNvbXBvbmVudHMuXG52YXIgVGFiTmF2TGlzdFdyYXBwZXIgPSBmdW5jdGlvbiBUYWJOYXZMaXN0V3JhcHBlcihfcmVmKSB7XG4gIHZhciByZW5kZXJUYWJCYXIgPSBfcmVmLnJlbmRlclRhYkJhcixcbiAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJDb250ZXh0KSxcbiAgICB0YWJzID0gX1JlYWN0JHVzZUNvbnRleHQudGFicztcbiAgaWYgKHJlbmRlclRhYkJhcikge1xuICAgIHZhciB0YWJOYXZCYXJQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKSwge30sIHtcbiAgICAgIC8vIExlZ2FjeSBzdXBwb3J0LiBXZSBkbyBub3QgdXNlIHRoaXMgYWN0dWFsbHlcbiAgICAgIHBhbmVzOiB0YWJzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gX3JlZjIubGFiZWwsXG4gICAgICAgICAga2V5ID0gX3JlZjIua2V5LFxuICAgICAgICAgIHJlc3RUYWJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgX2V4Y2x1ZGVkMik7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgdGFiOiBsYWJlbCxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB0YWJLZXk6IGtleVxuICAgICAgICB9LCByZXN0VGFiUHJvcHMpKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbmRlclRhYkJhcih0YWJOYXZCYXJQcm9wcywgVGFiTmF2TGlzdCk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhYk5hdkxpc3QsIHJlc3RQcm9wcyk7XG59O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGFiTmF2TGlzdFdyYXBwZXIuZGlzcGxheU5hbWUgPSAnVGFiTmF2TGlzdFdyYXBwZXInO1xufVxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2TGlzdFdyYXBwZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wia2V5XCIsIFwiZm9yY2VSZW5kZXJcIiwgXCJzdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcImRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmVcIl07XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSAncmMtbW90aW9uJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gXCIuLi9UYWJDb250ZXh0XCI7XG5pbXBvcnQgVGFiUGFuZSBmcm9tIFwiLi9UYWJQYW5lXCI7XG52YXIgVGFiUGFuZWxMaXN0ID0gZnVuY3Rpb24gVGFiUGFuZWxMaXN0KHByb3BzKSB7XG4gIHZhciBpZCA9IHByb3BzLmlkLFxuICAgIGFjdGl2ZUtleSA9IHByb3BzLmFjdGl2ZUtleSxcbiAgICBhbmltYXRlZCA9IHByb3BzLmFuaW1hdGVkLFxuICAgIHRhYlBvc2l0aW9uID0gcHJvcHMudGFiUG9zaXRpb24sXG4gICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IHByb3BzLmRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVGFiQ29udGV4dCksXG4gICAgcHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQucHJlZml4Q2xzLFxuICAgIHRhYnMgPSBfUmVhY3QkdXNlQ29udGV4dC50YWJzO1xuICB2YXIgdGFiUGFuZUFuaW1hdGVkID0gYW5pbWF0ZWQudGFiUGFuZTtcbiAgdmFyIHRhYlBhbmVQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRhYnBhbmVcIik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudC1ob2xkZXJcIikpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnQtXCIpLmNvbmNhdCh0YWJQb3NpdGlvbiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LWFuaW1hdGVkXCIpLCB0YWJQYW5lQW5pbWF0ZWQpKVxuICB9LCB0YWJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBrZXkgPSBpdGVtLmtleSxcbiAgICAgIGZvcmNlUmVuZGVyID0gaXRlbS5mb3JjZVJlbmRlcixcbiAgICAgIHBhbmVTdHlsZSA9IGl0ZW0uc3R5bGUsXG4gICAgICBwYW5lQ2xhc3NOYW1lID0gaXRlbS5jbGFzc05hbWUsXG4gICAgICBpdGVtRGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IGl0ZW0uZGVzdHJveUluYWN0aXZlVGFiUGFuZSxcbiAgICAgIHJlc3RUYWJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhpdGVtLCBfZXhjbHVkZWQpO1xuICAgIHZhciBhY3RpdmUgPSBrZXkgPT09IGFjdGl2ZUtleTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZpc2libGU6IGFjdGl2ZSxcbiAgICAgIGZvcmNlUmVuZGVyOiBmb3JjZVJlbmRlcixcbiAgICAgIHJlbW92ZU9uTGVhdmU6ICEhKGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUgfHwgaXRlbURlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUpLFxuICAgICAgbGVhdmVkQ2xhc3NOYW1lOiBcIlwiLmNvbmNhdCh0YWJQYW5lUHJlZml4Q2xzLCBcIi1oaWRkZW5cIilcbiAgICB9LCBhbmltYXRlZC50YWJQYW5lTW90aW9uKSwgZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICAgICAgdmFyIG1vdGlvblN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgICAgbW90aW9uQ2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiUGFuZSwgX2V4dGVuZHMoe30sIHJlc3RUYWJQcm9wcywge1xuICAgICAgICBwcmVmaXhDbHM6IHRhYlBhbmVQcmVmaXhDbHMsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdGFiS2V5OiBrZXksXG4gICAgICAgIGFuaW1hdGVkOiB0YWJQYW5lQW5pbWF0ZWQsXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwYW5lU3R5bGUpLCBtb3Rpb25TdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwYW5lQ2xhc3NOYW1lLCBtb3Rpb25DbGFzc05hbWUpLFxuICAgICAgICByZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYlBhbmVsTGlzdDsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQW5pbWF0ZUNvbmZpZygpIHtcbiAgdmFyIGFuaW1hdGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7XG4gICAgaW5rQmFyOiB0cnVlLFxuICAgIHRhYlBhbmU6IGZhbHNlXG4gIH07XG4gIHZhciBtZXJnZWRBbmltYXRlZDtcbiAgaWYgKGFuaW1hdGVkID09PSBmYWxzZSkge1xuICAgIG1lcmdlZEFuaW1hdGVkID0ge1xuICAgICAgaW5rQmFyOiBmYWxzZSxcbiAgICAgIHRhYlBhbmU6IGZhbHNlXG4gICAgfTtcbiAgfSBlbHNlIGlmIChhbmltYXRlZCA9PT0gdHJ1ZSkge1xuICAgIG1lcmdlZEFuaW1hdGVkID0ge1xuICAgICAgaW5rQmFyOiB0cnVlLFxuICAgICAgdGFiUGFuZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZEFuaW1hdGVkID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBpbmtCYXI6IHRydWVcbiAgICB9LCBfdHlwZW9mKGFuaW1hdGVkKSA9PT0gJ29iamVjdCcgPyBhbmltYXRlZCA6IHt9KTtcbiAgfVxuXG4gIC8vIEVuYWJsZSB0YWJQYW5lIGFuaW1hdGlvbiBpZiBwcm92aWRlIG1vdGlvblxuICBpZiAobWVyZ2VkQW5pbWF0ZWQudGFiUGFuZU1vdGlvbiAmJiBtZXJnZWRBbmltYXRlZC50YWJQYW5lID09PSB1bmRlZmluZWQpIHtcbiAgICBtZXJnZWRBbmltYXRlZC50YWJQYW5lID0gdHJ1ZTtcbiAgfVxuICBpZiAoIW1lcmdlZEFuaW1hdGVkLnRhYlBhbmVNb3Rpb24gJiYgbWVyZ2VkQW5pbWF0ZWQudGFiUGFuZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnYGFuaW1hdGVkLnRhYlBhbmVgIGlzIHRydWUgYnV0IGBhbmltYXRlZC50YWJQYW5lTW90aW9uYCBpcyBub3QgcHJvdmlkZWQuIE1vdGlvbiB3aWxsIG5vdCB3b3JrLicpO1xuICAgIH1cbiAgICBtZXJnZWRBbmltYXRlZC50YWJQYW5lID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG1lcmdlZEFuaW1hdGVkO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiaWRcIiwgXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJpdGVtc1wiLCBcImRpcmVjdGlvblwiLCBcImFjdGl2ZUtleVwiLCBcImRlZmF1bHRBY3RpdmVLZXlcIiwgXCJlZGl0YWJsZVwiLCBcImFuaW1hdGVkXCIsIFwidGFiUG9zaXRpb25cIiwgXCJ0YWJCYXJHdXR0ZXJcIiwgXCJ0YWJCYXJTdHlsZVwiLCBcInRhYkJhckV4dHJhQ29udGVudFwiLCBcImxvY2FsZVwiLCBcIm1vcmVcIiwgXCJkZXN0cm95SW5hY3RpdmVUYWJQYW5lXCIsIFwicmVuZGVyVGFiQmFyXCIsIFwib25DaGFuZ2VcIiwgXCJvblRhYkNsaWNrXCIsIFwib25UYWJTY3JvbGxcIiwgXCJnZXRQb3B1cENvbnRhaW5lclwiLCBcInBvcHVwQ2xhc3NOYW1lXCIsIFwiaW5kaWNhdG9yXCJdO1xuLy8gQWNjZXNzaWJpbGl0eSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvUm9sZXMvVGFiX1JvbGVcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZU1lcmdlZFN0YXRlIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCI7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSBcInJjLXV0aWwvZXMvaXNNb2JpbGVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tIFwiLi9UYWJDb250ZXh0XCI7XG5pbXBvcnQgVGFiTmF2TGlzdFdyYXBwZXIgZnJvbSBcIi4vVGFiTmF2TGlzdC9XcmFwcGVyXCI7XG5pbXBvcnQgVGFiUGFuZWxMaXN0IGZyb20gXCIuL1RhYlBhbmVsTGlzdFwiO1xuaW1wb3J0IHVzZUFuaW1hdGVDb25maWcgZnJvbSBcIi4vaG9va3MvdXNlQW5pbWF0ZUNvbmZpZ1wiO1xuLyoqXG4gKiBTaG91bGQgYWRkZWQgYW50ZDpcbiAqIC0gdHlwZVxuICpcbiAqIFJlbW92ZWQ6XG4gKiAtIG9uTmV4dENsaWNrXG4gKiAtIG9uUHJldkNsaWNrXG4gKiAtIGtleWJvYXJkXG4gKi9cblxuLy8gVXNlZCBmb3IgYWNjZXNzaWJpbGl0eVxudmFyIHV1aWQgPSAwO1xudmFyIFRhYnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgaWQgPSBwcm9wcy5pZCxcbiAgICBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy10YWJzJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgIGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgIGFjdGl2ZUtleSA9IHByb3BzLmFjdGl2ZUtleSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5ID0gcHJvcHMuZGVmYXVsdEFjdGl2ZUtleSxcbiAgICBlZGl0YWJsZSA9IHByb3BzLmVkaXRhYmxlLFxuICAgIGFuaW1hdGVkID0gcHJvcHMuYW5pbWF0ZWQsXG4gICAgX3Byb3BzJHRhYlBvc2l0aW9uID0gcHJvcHMudGFiUG9zaXRpb24sXG4gICAgdGFiUG9zaXRpb24gPSBfcHJvcHMkdGFiUG9zaXRpb24gPT09IHZvaWQgMCA/ICd0b3AnIDogX3Byb3BzJHRhYlBvc2l0aW9uLFxuICAgIHRhYkJhckd1dHRlciA9IHByb3BzLnRhYkJhckd1dHRlcixcbiAgICB0YWJCYXJTdHlsZSA9IHByb3BzLnRhYkJhclN0eWxlLFxuICAgIHRhYkJhckV4dHJhQ29udGVudCA9IHByb3BzLnRhYkJhckV4dHJhQ29udGVudCxcbiAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgbW9yZSA9IHByb3BzLm1vcmUsXG4gICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IHByb3BzLmRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUsXG4gICAgcmVuZGVyVGFiQmFyID0gcHJvcHMucmVuZGVyVGFiQmFyLFxuICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgb25UYWJDbGljayA9IHByb3BzLm9uVGFiQ2xpY2ssXG4gICAgb25UYWJTY3JvbGwgPSBwcm9wcy5vblRhYlNjcm9sbCxcbiAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgIHBvcHVwQ2xhc3NOYW1lID0gcHJvcHMucG9wdXBDbGFzc05hbWUsXG4gICAgaW5kaWNhdG9yID0gcHJvcHMuaW5kaWNhdG9yLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgdmFyIHRhYnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKGl0ZW1zIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtICYmIF90eXBlb2YoaXRlbSkgPT09ICdvYmplY3QnICYmICdrZXknIGluIGl0ZW07XG4gICAgfSk7XG4gIH0sIFtpdGVtc10pO1xuICB2YXIgcnRsID0gZGlyZWN0aW9uID09PSAncnRsJztcbiAgdmFyIG1lcmdlZEFuaW1hdGVkID0gdXNlQW5pbWF0ZUNvbmZpZyhhbmltYXRlZCk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IE1vYmlsZSA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBtb2JpbGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldE1vYmlsZSA9IF91c2VTdGF0ZTJbMV07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gT25seSB1cGRhdGUgb24gdGhlIGNsaWVudCBzaWRlXG4gICAgc2V0TW9iaWxlKGlzTW9iaWxlKCkpO1xuICB9LCBbXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PSBBY3RpdmUgS2V5ID09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZSA9IHVzZU1lcmdlZFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGFicyQ7XG4gICAgICByZXR1cm4gKF90YWJzJCA9IHRhYnNbMF0pID09PSBudWxsIHx8IF90YWJzJCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYnMkLmtleTtcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogYWN0aXZlS2V5LFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0QWN0aXZlS2V5XG4gICAgfSksXG4gICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgbWVyZ2VkQWN0aXZlS2V5ID0gX3VzZU1lcmdlZFN0YXRlMlswXSxcbiAgICBzZXRNZXJnZWRBY3RpdmVLZXkgPSBfdXNlTWVyZ2VkU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0YWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgIHJldHVybiB0YWIua2V5ID09PSBtZXJnZWRBY3RpdmVLZXk7XG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgYWN0aXZlSW5kZXggPSBfdXNlU3RhdGU0WzBdLFxuICAgIHNldEFjdGl2ZUluZGV4ID0gX3VzZVN0YXRlNFsxXTtcblxuICAvLyBSZXNldCBhY3RpdmUga2V5IGlmIG5vdCBleGlzdCBhbnltb3JlXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gdGFicy5maW5kSW5kZXgoZnVuY3Rpb24gKHRhYikge1xuICAgICAgcmV0dXJuIHRhYi5rZXkgPT09IG1lcmdlZEFjdGl2ZUtleTtcbiAgICB9KTtcbiAgICBpZiAobmV3QWN0aXZlSW5kZXggPT09IC0xKSB7XG4gICAgICB2YXIgX3RhYnMkbmV3QWN0aXZlSW5kZXg7XG4gICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGFjdGl2ZUluZGV4LCB0YWJzLmxlbmd0aCAtIDEpKTtcbiAgICAgIHNldE1lcmdlZEFjdGl2ZUtleSgoX3RhYnMkbmV3QWN0aXZlSW5kZXggPSB0YWJzW25ld0FjdGl2ZUluZGV4XSkgPT09IG51bGwgfHwgX3RhYnMkbmV3QWN0aXZlSW5kZXggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90YWJzJG5ld0FjdGl2ZUluZGV4LmtleSk7XG4gICAgfVxuICAgIHNldEFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KTtcbiAgfSwgW3RhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gdGFiLmtleTtcbiAgfSkuam9pbignXycpLCBtZXJnZWRBY3RpdmVLZXksIGFjdGl2ZUluZGV4XSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IEFjY2Vzc2liaWxpdHkgPT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZTMgPSB1c2VNZXJnZWRTdGF0ZShudWxsLCB7XG4gICAgICB2YWx1ZTogaWRcbiAgICB9KSxcbiAgICBfdXNlTWVyZ2VkU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlMywgMiksXG4gICAgbWVyZ2VkSWQgPSBfdXNlTWVyZ2VkU3RhdGU0WzBdLFxuICAgIHNldE1lcmdlZElkID0gX3VzZU1lcmdlZFN0YXRlNFsxXTtcblxuICAvLyBBc3luYyBnZW5lcmF0ZSBpZCB0byBhdm9pZCBzc3IgbWFwcGluZyBmYWlsZWRcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICBzZXRNZXJnZWRJZChcInJjLXRhYnMtXCIuY29uY2F0KHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgPyAndGVzdCcgOiB1dWlkKSk7XG4gICAgICB1dWlkICs9IDE7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IEV2ZW50cyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gb25JbnRlcm5hbFRhYkNsaWNrKGtleSwgZSkge1xuICAgIG9uVGFiQ2xpY2sgPT09IG51bGwgfHwgb25UYWJDbGljayA9PT0gdm9pZCAwIHx8IG9uVGFiQ2xpY2soa2V5LCBlKTtcbiAgICB2YXIgaXNBY3RpdmVDaGFuZ2VkID0ga2V5ICE9PSBtZXJnZWRBY3RpdmVLZXk7XG4gICAgc2V0TWVyZ2VkQWN0aXZlS2V5KGtleSk7XG4gICAgaWYgKGlzQWN0aXZlQ2hhbmdlZCkge1xuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCB8fCBvbkNoYW5nZShrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBzaGFyZWRQcm9wcyA9IHtcbiAgICBpZDogbWVyZ2VkSWQsXG4gICAgYWN0aXZlS2V5OiBtZXJnZWRBY3RpdmVLZXksXG4gICAgYW5pbWF0ZWQ6IG1lcmdlZEFuaW1hdGVkLFxuICAgIHRhYlBvc2l0aW9uOiB0YWJQb3NpdGlvbixcbiAgICBydGw6IHJ0bCxcbiAgICBtb2JpbGU6IG1vYmlsZVxuICB9O1xuICB2YXIgdGFiTmF2QmFyUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNoYXJlZFByb3BzKSwge30sIHtcbiAgICBlZGl0YWJsZTogZWRpdGFibGUsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgbW9yZTogbW9yZSxcbiAgICB0YWJCYXJHdXR0ZXI6IHRhYkJhckd1dHRlcixcbiAgICBvblRhYkNsaWNrOiBvbkludGVybmFsVGFiQ2xpY2ssXG4gICAgb25UYWJTY3JvbGw6IG9uVGFiU2Nyb2xsLFxuICAgIGV4dHJhOiB0YWJCYXJFeHRyYUNvbnRlbnQsXG4gICAgc3R5bGU6IHRhYkJhclN0eWxlLFxuICAgIHBhbmVzOiBudWxsLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lcixcbiAgICBwb3B1cENsYXNzTmFtZTogcG9wdXBDbGFzc05hbWUsXG4gICAgaW5kaWNhdG9yOiBpbmRpY2F0b3JcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGlkOiBpZCxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodGFiUG9zaXRpb24pLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tb2JpbGVcIiksIG1vYmlsZSksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWRpdGFibGVcIiksIGVkaXRhYmxlKSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCksIGNsYXNzTmFtZSlcbiAgfSwgcmVzdFByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiTmF2TGlzdFdyYXBwZXIsIF9leHRlbmRzKHt9LCB0YWJOYXZCYXJQcm9wcywge1xuICAgIHJlbmRlclRhYkJhcjogcmVuZGVyVGFiQmFyXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiUGFuZWxMaXN0LCBfZXh0ZW5kcyh7XG4gICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZTogZGVzdHJveUluYWN0aXZlVGFiUGFuZVxuICB9LCBzaGFyZWRQcm9wcywge1xuICAgIGFuaW1hdGVkOiBtZXJnZWRBbmltYXRlZFxuICB9KSkpKTtcbn0pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGFicy5kaXNwbGF5TmFtZSA9ICdUYWJzJztcbn1cbmV4cG9ydCBkZWZhdWx0IFRhYnM7IiwiaW1wb3J0IFRhYnMgZnJvbSBcIi4vVGFic1wiO1xuZXhwb3J0IGRlZmF1bHQgVGFiczsiLCJpbXBvcnQgeyBnZXRUcmFuc2l0aW9uTmFtZSB9IGZyb20gJy4uLy4uL191dGlsL21vdGlvbic7XG5jb25zdCBtb3Rpb24gPSB7XG4gIG1vdGlvbkFwcGVhcjogZmFsc2UsXG4gIG1vdGlvbkVudGVyOiB0cnVlLFxuICBtb3Rpb25MZWF2ZTogdHJ1ZVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUFuaW1hdGVDb25maWcocHJlZml4Q2xzKSB7XG4gIGxldCBhbmltYXRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgIGlua0JhcjogdHJ1ZSxcbiAgICB0YWJQYW5lOiBmYWxzZVxuICB9O1xuICBsZXQgbWVyZ2VkQW5pbWF0ZWQ7XG4gIGlmIChhbmltYXRlZCA9PT0gZmFsc2UpIHtcbiAgICBtZXJnZWRBbmltYXRlZCA9IHtcbiAgICAgIGlua0JhcjogZmFsc2UsXG4gICAgICB0YWJQYW5lOiBmYWxzZVxuICAgIH07XG4gIH0gZWxzZSBpZiAoYW5pbWF0ZWQgPT09IHRydWUpIHtcbiAgICBtZXJnZWRBbmltYXRlZCA9IHtcbiAgICAgIGlua0JhcjogdHJ1ZSxcbiAgICAgIHRhYlBhbmU6IHRydWVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZEFuaW1hdGVkID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBpbmtCYXI6IHRydWVcbiAgICB9LCB0eXBlb2YgYW5pbWF0ZWQgPT09ICdvYmplY3QnID8gYW5pbWF0ZWQgOiB7fSk7XG4gIH1cbiAgaWYgKG1lcmdlZEFuaW1hdGVkLnRhYlBhbmUpIHtcbiAgICBtZXJnZWRBbmltYXRlZC50YWJQYW5lTW90aW9uID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtb3Rpb24pLCB7XG4gICAgICBtb3Rpb25OYW1lOiBnZXRUcmFuc2l0aW9uTmFtZShwcmVmaXhDbHMsICdzd2l0Y2gnKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBtZXJnZWRBbmltYXRlZDtcbn0iLCJ2YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvZXMvQ2hpbGRyZW4vdG9BcnJheVwiO1xuaW1wb3J0IHsgZGV2VXNlV2FybmluZyB9IGZyb20gJy4uLy4uL191dGlsL3dhcm5pbmcnO1xuZnVuY3Rpb24gZmlsdGVyKGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUxlZ2FjeUl0ZW1zKGl0ZW1zLCBjaGlsZHJlbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHdhcm5pbmcgPSBkZXZVc2VXYXJuaW5nKCdUYWJzJyk7XG4gICAgd2FybmluZy5kZXByZWNhdGVkKCFjaGlsZHJlbiwgJ1RhYnMuVGFiUGFuZScsICdpdGVtcycpO1xuICB9XG4gIGlmIChpdGVtcykge1xuICAgIHJldHVybiBpdGVtcztcbiAgfVxuICBjb25zdCBjaGlsZHJlbkl0ZW1zID0gdG9BcnJheShjaGlsZHJlbikubWFwKG5vZGUgPT4ge1xuICAgIGlmICgvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICBwcm9wc1xuICAgICAgfSA9IG5vZGU7XG4gICAgICBjb25zdCBfYSA9IHByb3BzIHx8IHt9LFxuICAgICAgICB7XG4gICAgICAgICAgdGFiXG4gICAgICAgIH0gPSBfYSxcbiAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJ0YWJcIl0pO1xuICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGtleTogU3RyaW5nKGtleSlcbiAgICAgIH0sIHJlc3RQcm9wcyksIHtcbiAgICAgICAgbGFiZWw6IHRhYlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyKGNoaWxkcmVuSXRlbXMpO1xufSIsImltcG9ydCB7IGluaXRTbGlkZU1vdGlvbiB9IGZyb20gJy4uLy4uL3N0eWxlL21vdGlvbic7XG5jb25zdCBnZW5Nb3Rpb25TdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBtb3Rpb25EdXJhdGlvblNsb3dcbiAgfSA9IHRva2VuO1xuICByZXR1cm4gW3tcbiAgICBbY29tcG9uZW50Q2xzXToge1xuICAgICAgW2Ake2NvbXBvbmVudENsc30tc3dpdGNoYF06IHtcbiAgICAgICAgJyYtYXBwZWFyLCAmLWVudGVyJzoge1xuICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJyxcbiAgICAgICAgICAnJi1zdGFydCc6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmLWFjdGl2ZSc6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke21vdGlvbkR1cmF0aW9uU2xvd31gXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJi1sZWF2ZSc6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZScsXG4gICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgJyYtc3RhcnQnOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJi1hY3RpdmUnOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHttb3Rpb25EdXJhdGlvblNsb3d9YFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gRm9sbG93IGNvZGUgbWF5IHJldXNlIGluIG90aGVyIGNvbXBvbmVudHNcbiAgW2luaXRTbGlkZU1vdGlvbih0b2tlbiwgJ3NsaWRlLXVwJyksIGluaXRTbGlkZU1vdGlvbih0b2tlbiwgJ3NsaWRlLWRvd24nKV1dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlbk1vdGlvblN0eWxlOyIsImltcG9ydCB7IHVuaXQgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IGdlbkZvY3VzU3R5bGUsIHJlc2V0Q29tcG9uZW50LCB0ZXh0RWxsaXBzaXMgfSBmcm9tICcuLi8uLi9zdHlsZSc7XG5pbXBvcnQgeyBnZW5TdHlsZUhvb2tzLCBtZXJnZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWUvaW50ZXJuYWwnO1xuaW1wb3J0IGdlbk1vdGlvblN0eWxlIGZyb20gJy4vbW90aW9uJztcbmNvbnN0IGdlbkNhcmRTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICB0YWJzQ2FyZFBhZGRpbmcsXG4gICAgY2FyZEJnLFxuICAgIGNhcmRHdXR0ZXIsXG4gICAgY29sb3JCb3JkZXJTZWNvbmRhcnksXG4gICAgaXRlbVNlbGVjdGVkQ29sb3JcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJHtjb21wb25lbnRDbHN9LWNhcmRgXToge1xuICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IHRhYnNDYXJkUGFkZGluZyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjYXJkQmcsXG4gICAgICAgICAgYm9yZGVyOiBgJHt1bml0KHRva2VuLmxpbmVXaWR0aCl9ICR7dG9rZW4ubGluZVR5cGV9ICR7Y29sb3JCb3JkZXJTZWNvbmRhcnl9YCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fSAke3Rva2VuLm1vdGlvbkVhc2VJbk91dH1gXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYi1hY3RpdmVgXToge1xuICAgICAgICAgIGNvbG9yOiBpdGVtU2VsZWN0ZWRDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0b2tlbi5jb2xvckJnQ29udGFpbmVyXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWluay1iYXJgXToge1xuICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBUb3AgJiBCb3R0b20gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS10b3AsICYke2NvbXBvbmVudENsc30tYm90dG9tYF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiICsgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiB7XG4gICAgICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHVuaXQoY2FyZEd1dHRlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tdG9wYF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dW5pdCh0b2tlbi5ib3JkZXJSYWRpdXNMRyl9ICR7dW5pdCh0b2tlbi5ib3JkZXJSYWRpdXNMRyl9IDAgMGBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYi1hY3RpdmVgXToge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tYm90dG9tYF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYDAgMCAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfSAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfWBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYi1hY3RpdmVgXToge1xuICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBMZWZ0ICYgUmlnaHQgPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1sZWZ0LCAmJHtjb21wb25lbnRDbHN9LXJpZ2h0YF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiICsgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHVuaXQoY2FyZEd1dHRlcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tbGVmdGBdOiB7XG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2LCA+IGRpdiA+ICR7Y29tcG9uZW50Q2xzfS1uYXZgXToge1xuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogYCR7dW5pdCh0b2tlbi5ib3JkZXJSYWRpdXNMRyl9IDAgMCAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYi1hY3RpdmVgXToge1xuICAgICAgICAgICAgYm9yZGVyUmlnaHRDb2xvcjoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB0b2tlbi5jb2xvckJnQ29udGFpbmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXJpZ2h0YF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBgMCAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfSAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfSAwYFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiLWFjdGl2ZWBdOiB7XG4gICAgICAgICAgICBib3JkZXJMZWZ0Q29sb3I6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdG9rZW4uY29sb3JCZ0NvbnRhaW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5jb25zdCBnZW5Ecm9wZG93blN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGl0ZW1Ib3ZlckNvbG9yLFxuICAgIGRyb3Bkb3duRWRnZUNoaWxkVmVydGljYWxQYWRkaW5nXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1kcm9wZG93bmBdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc2V0Q29tcG9uZW50KHRva2VuKSksIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAtOTk5OSxcbiAgICAgIGxlZnQ6IHtcbiAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICB2YWx1ZTogLTk5OTlcbiAgICAgIH0sXG4gICAgICB6SW5kZXg6IHRva2VuLnpJbmRleFBvcHVwLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICcmLWhpZGRlbic6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tZHJvcGRvd24tbWVudWBdOiB7XG4gICAgICAgIG1heEhlaWdodDogdG9rZW4udGFic0Ryb3Bkb3duSGVpZ2h0LFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IGAke3VuaXQoZHJvcGRvd25FZGdlQ2hpbGRWZXJ0aWNhbFBhZGRpbmcpfSAwYCxcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIHRleHRBbGlnbjoge1xuICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogJ2xlZnQnXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnQ29udGFpbmVyLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNMRyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBib3hTaGFkb3c6IHRva2VuLmJveFNoYWRvd1NlY29uZGFyeSxcbiAgICAgICAgJyYtaXRlbSc6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGV4dEVsbGlwc2lzKSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBtaW5XaWR0aDogdG9rZW4udGFic0Ryb3Bkb3duV2lkdGgsXG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IGAke3VuaXQodG9rZW4ucGFkZGluZ1hYUyl9ICR7dW5pdCh0b2tlbi5wYWRkaW5nU00pfWAsXG4gICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemUsXG4gICAgICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodCxcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fWAsXG4gICAgICAgICAgJz4gc3Bhbic6IHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYtcmVtb3ZlJzoge1xuICAgICAgICAgICAgZmxleDogJ25vbmUnLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB0b2tlbi5tYXJnaW5TTVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBpdGVtSG92ZXJDb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0b2tlbi5jb250cm9sSXRlbUJnSG92ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmLWRpc2FibGVkJzoge1xuICAgICAgICAgICAgJyYsICY6aG92ZXInOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREaXNhYmxlZCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59O1xuY29uc3QgZ2VuUG9zaXRpb25TdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBtYXJnaW4sXG4gICAgY29sb3JCb3JkZXJTZWNvbmRhcnksXG4gICAgaG9yaXpvbnRhbE1hcmdpbixcbiAgICB2ZXJ0aWNhbEl0ZW1QYWRkaW5nLFxuICAgIHZlcnRpY2FsSXRlbU1hcmdpbixcbiAgICBjYWxjXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBUb3AgJiBCb3R0b20gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBbYCR7Y29tcG9uZW50Q2xzfS10b3AsICR7Y29tcG9uZW50Q2xzfS1ib3R0b21gXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdiwgPiBkaXYgPiAke2NvbXBvbmVudENsc30tbmF2YF06IHtcbiAgICAgICAgbWFyZ2luOiBob3Jpem9udGFsTWFyZ2luLFxuICAgICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvcmRlckJvdHRvbTogYCR7dW5pdCh0b2tlbi5saW5lV2lkdGgpfSAke3Rva2VuLmxpbmVUeXBlfSAke2NvbG9yQm9yZGVyU2Vjb25kYXJ5fWAsXG4gICAgICAgICAgY29udGVudDogXCInJ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWluay1iYXJgXToge1xuICAgICAgICAgIGhlaWdodDogdG9rZW4ubGluZVdpZHRoQm9sZCxcbiAgICAgICAgICAnJi1hbmltYXRlZCc6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGB3aWR0aCAke3Rva2VuLm1vdGlvbkR1cmF0aW9uU2xvd30sIGxlZnQgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9LFxuICAgICAgICAgICAgcmlnaHQgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tbmF2LXdyYXBgXToge1xuICAgICAgICAgICcmOjpiZWZvcmUsICY6OmFmdGVyJzoge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgd2lkdGg6IHRva2VuLmNvbnRyb2xIZWlnaHRcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRva2VuLmJveFNoYWRvd1RhYnNPdmVyZmxvd0xlZnRcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRva2VuLmJveFNoYWRvd1RhYnNPdmVyZmxvd1JpZ2h0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYke2NvbXBvbmVudENsc30tbmF2LXdyYXAtcGluZy1sZWZ0OjpiZWZvcmVgXToge1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmJHtjb21wb25lbnRDbHN9LW5hdi13cmFwLXBpbmctcmlnaHQ6OmFmdGVyYF06IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHtjb21wb25lbnRDbHN9LXRvcGBdOiB7XG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdixcbiAgICAgICAgPiBkaXYgPiAke2NvbXBvbmVudENsc30tbmF2YF06IHtcbiAgICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30taW5rLWJhcmBdOiB7XG4gICAgICAgICAgYm90dG9tOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHtjb21wb25lbnRDbHN9LWJvdHRvbWBdOiB7XG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdiwgPiBkaXYgPiAke2NvbXBvbmVudENsc30tbmF2YF06IHtcbiAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIG1hcmdpblRvcDogbWFyZ2luLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgICAgdG9wOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWluay1iYXJgXToge1xuICAgICAgICAgIHRvcDogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1jb250ZW50LWhvbGRlciwgPiBkaXYgPiAke2NvbXBvbmVudENsc30tY29udGVudC1ob2xkZXJgXToge1xuICAgICAgICBvcmRlcjogMFxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gTGVmdCAmIFJpZ2h0ID09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgW2Ake2NvbXBvbmVudENsc30tbGVmdCwgJHtjb21wb25lbnRDbHN9LXJpZ2h0YF06IHtcbiAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2LCA+IGRpdiA+ICR7Y29tcG9uZW50Q2xzfS1uYXZgXToge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWluV2lkdGg6IGNhbGModG9rZW4uY29udHJvbEhlaWdodCkubXVsKDEuMjUpLmVxdWFsKCksXG4gICAgICAgIC8vID4+Pj4+Pj4+Pj4+IFRhYlxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS10YWJgXToge1xuICAgICAgICAgIHBhZGRpbmc6IHZlcnRpY2FsSXRlbVBhZGRpbmcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS10YWIgKyAke2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICBtYXJnaW46IHZlcnRpY2FsSXRlbU1hcmdpblxuICAgICAgICB9LFxuICAgICAgICAvLyA+Pj4+Pj4+Pj4+PiBOYXZcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tbmF2LXdyYXBgXToge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICcmOjpiZWZvcmUsICY6OmFmdGVyJzoge1xuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDogdG9rZW4uY29udHJvbEhlaWdodFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogdG9rZW4uYm94U2hhZG93VGFic092ZXJmbG93VG9wXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRva2VuLmJveFNoYWRvd1RhYnNPdmVyZmxvd0JvdHRvbVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmJHtjb21wb25lbnRDbHN9LW5hdi13cmFwLXBpbmctdG9wOjpiZWZvcmVgXToge1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmJHtjb21wb25lbnRDbHN9LW5hdi13cmFwLXBpbmctYm90dG9tOjphZnRlcmBdOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyA+Pj4+Pj4+Pj4+PiBJbmsgQmFyXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWluay1iYXJgXToge1xuICAgICAgICAgIHdpZHRoOiB0b2tlbi5saW5lV2lkdGhCb2xkLFxuICAgICAgICAgICcmLWFuaW1hdGVkJzoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYGhlaWdodCAke3Rva2VuLm1vdGlvbkR1cmF0aW9uU2xvd30sIHRvcCAke3Rva2VuLm1vdGlvbkR1cmF0aW9uU2xvd31gXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1uYXYtbGlzdCwgJHtjb21wb25lbnRDbHN9LW5hdi1vcGVyYXRpb25zYF06IHtcbiAgICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgICAgIC8vIGZpeCBzYWZhcmkgc2Nyb2xsIHByb2JsZW1cbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1sZWZ0YF06IHtcbiAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2LCA+IGRpdiA+ICR7Y29tcG9uZW50Q2xzfS1uYXZgXToge1xuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pbmstYmFyYF06IHtcbiAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWNvbnRlbnQtaG9sZGVyLCA+IGRpdiA+ICR7Y29tcG9uZW50Q2xzfS1jb250ZW50LWhvbGRlcmBdOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHtcbiAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHVuaXQoY2FsYyh0b2tlbi5saW5lV2lkdGgpLm11bCgtMSkuZXF1YWwoKSlcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyTGVmdDoge1xuICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogYCR7dW5pdCh0b2tlbi5saW5lV2lkdGgpfSAke3Rva2VuLmxpbmVUeXBlfSAke3Rva2VuLmNvbG9yQm9yZGVyfWBcbiAgICAgICAgfSxcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1jb250ZW50ID4gJHtjb21wb25lbnRDbHN9LXRhYnBhbmVgXToge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiB7XG4gICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogdG9rZW4ucGFkZGluZ0xHXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1yaWdodGBdOiB7XG4gICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdiwgPiBkaXYgPiAke2NvbXBvbmVudENsc30tbmF2YF06IHtcbiAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LWluay1iYXJgXToge1xuICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1jb250ZW50LWhvbGRlciwgPiBkaXYgPiAke2NvbXBvbmVudENsc30tY29udGVudC1ob2xkZXJgXToge1xuICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHtcbiAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgdmFsdWU6IGNhbGModG9rZW4ubGluZVdpZHRoKS5tdWwoLTEpLmVxdWFsKClcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IHtcbiAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgdmFsdWU6IGAke3VuaXQodG9rZW4ubGluZVdpZHRoKX0gJHt0b2tlbi5saW5lVHlwZX0gJHt0b2tlbi5jb2xvckJvcmRlcn1gXG4gICAgICAgIH0sXG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tY29udGVudCA+ICR7Y29tcG9uZW50Q2xzfS10YWJwYW5lYF06IHtcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHtcbiAgICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB0b2tlbi5wYWRkaW5nTEdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuY29uc3QgZ2VuU2l6ZVN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGNhcmRQYWRkaW5nU00sXG4gICAgY2FyZFBhZGRpbmdMRyxcbiAgICBob3Jpem9udGFsSXRlbVBhZGRpbmdTTSxcbiAgICBob3Jpem9udGFsSXRlbVBhZGRpbmdMR1xuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW2NvbXBvbmVudENsc106IHtcbiAgICAgICcmLXNtYWxsJzoge1xuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGhvcml6b250YWxJdGVtUGFkZGluZ1NNLFxuICAgICAgICAgICAgZm9udFNpemU6IHRva2VuLnRpdGxlRm9udFNpemVTTVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLWxhcmdlJzoge1xuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGhvcml6b250YWxJdGVtUGFkZGluZ0xHLFxuICAgICAgICAgICAgZm9udFNpemU6IHRva2VuLnRpdGxlRm9udFNpemVMR1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2Ake2NvbXBvbmVudENsc30tY2FyZGBdOiB7XG4gICAgICBbYCYke2NvbXBvbmVudENsc30tc21hbGxgXToge1xuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhcmRQYWRkaW5nU01cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1ib3R0b21gXToge1xuICAgICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2ICR7Y29tcG9uZW50Q2xzfS10YWJgXToge1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dW5pdCh0b2tlbi5ib3JkZXJSYWRpdXMpfSAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzKX1gXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYCYke2NvbXBvbmVudENsc30tdG9wYF06IHtcbiAgICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdiAke2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dW5pdCh0b2tlbi5ib3JkZXJSYWRpdXMpfSAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzKX0gMCAwYFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXJpZ2h0YF06IHtcbiAgICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LW5hdiAke2NvbXBvbmVudENsc30tdGFiYF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBgMCAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzKX0gJHt1bml0KHRva2VuLmJvcmRlclJhZGl1cyl9IDBgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYCYke2NvbXBvbmVudENsc30tbGVmdGBdOiB7XG4gICAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogYCR7dW5pdCh0b2tlbi5ib3JkZXJSYWRpdXMpfSAwIDAgJHt1bml0KHRva2VuLmJvcmRlclJhZGl1cyl9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1sYXJnZWBdOiB7XG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2YF06IHtcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS10YWJgXToge1xuICAgICAgICAgICAgcGFkZGluZzogY2FyZFBhZGRpbmdMR1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5jb25zdCBnZW5UYWJTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBpdGVtQWN0aXZlQ29sb3IsXG4gICAgaXRlbUhvdmVyQ29sb3IsXG4gICAgaWNvbkNscyxcbiAgICB0YWJzSG9yaXpvbnRhbEl0ZW1NYXJnaW4sXG4gICAgaG9yaXpvbnRhbEl0ZW1QYWRkaW5nLFxuICAgIGl0ZW1TZWxlY3RlZENvbG9yLFxuICAgIGl0ZW1Db2xvclxuICB9ID0gdG9rZW47XG4gIGNvbnN0IHRhYkNscyA9IGAke2NvbXBvbmVudENsc30tdGFiYDtcbiAgcmV0dXJuIHtcbiAgICBbdGFiQ2xzXToge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogaG9yaXpvbnRhbEl0ZW1QYWRkaW5nLFxuICAgICAgZm9udFNpemU6IHRva2VuLnRpdGxlRm9udFNpemUsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogaXRlbUNvbG9yLFxuICAgICAgJyYtYnRuLCAmLXJlbW92ZSc6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAnJjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpLCAmOmFjdGl2ZSc6IHtcbiAgICAgICAgICBjb2xvcjogaXRlbUFjdGl2ZUNvbG9yXG4gICAgICAgIH1cbiAgICAgIH0sIGdlbkZvY3VzU3R5bGUodG9rZW4pKSxcbiAgICAgICcmLWJ0bic6IHtcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fWAsXG4gICAgICAgIFtgJHt0YWJDbHN9LWljb246bm90KDpsYXN0LWNoaWxkKWBdOiB7XG4gICAgICAgICAgbWFyZ2luSW5saW5lRW5kOiB0b2tlbi5tYXJnaW5TTVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYtcmVtb3ZlJzoge1xuICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgIG1hcmdpblJpZ2h0OiB7XG4gICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi5jYWxjKHRva2VuLm1hcmdpblhYUykubXVsKC0xKS5lcXVhbCgpXG4gICAgICAgIH0sXG4gICAgICAgIG1hcmdpbkxlZnQ6IHtcbiAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRva2VuLm1hcmdpblhTXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplU00sXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fWAsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRIZWFkaW5nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGl0ZW1Ib3ZlckNvbG9yXG4gICAgICB9LFxuICAgICAgW2AmJHt0YWJDbHN9LWFjdGl2ZSAke3RhYkNsc30tYnRuYF06IHtcbiAgICAgICAgY29sb3I6IGl0ZW1TZWxlY3RlZENvbG9yLFxuICAgICAgICB0ZXh0U2hhZG93OiB0b2tlbi50YWJzQWN0aXZlVGV4dFNoYWRvd1xuICAgICAgfSxcbiAgICAgIFtgJiR7dGFiQ2xzfS1kaXNhYmxlZGBdOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREaXNhYmxlZCxcbiAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG4gICAgICB9LFxuICAgICAgW2AmJHt0YWJDbHN9LWRpc2FibGVkICR7dGFiQ2xzfS1idG4sICYke3RhYkNsc30tZGlzYWJsZWQgJHtjb21wb25lbnRDbHN9LXJlbW92ZWBdOiB7XG4gICAgICAgICcmOmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGlzYWJsZWRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJiAke3RhYkNsc30tcmVtb3ZlICR7aWNvbkNsc31gXToge1xuICAgICAgICBtYXJnaW46IDBcbiAgICAgIH0sXG4gICAgICBbYCR7aWNvbkNsc306bm90KDpsYXN0LWNoaWxkKWBdOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiB7XG4gICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi5tYXJnaW5TTVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7dGFiQ2xzfSArICR7dGFiQ2xzfWBdOiB7XG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdGFic0hvcml6b250YWxJdGVtTWFyZ2luXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGdlblJ0bFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIHRhYnNIb3Jpem9udGFsSXRlbU1hcmdpblJUTCxcbiAgICBpY29uQ2xzLFxuICAgIGNhcmRHdXR0ZXIsXG4gICAgY2FsY1xuICB9ID0gdG9rZW47XG4gIGNvbnN0IHJ0bENscyA9IGAke2NvbXBvbmVudENsc30tcnRsYDtcbiAgcmV0dXJuIHtcbiAgICBbcnRsQ2xzXToge1xuICAgICAgZGlyZWN0aW9uOiAncnRsJyxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogdGFic0hvcml6b250YWxJdGVtTWFyZ2luUlRMXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS10YWI6bGFzdC1vZi10eXBlYF06IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ljb25DbHNdOiB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFyZ2luTGVmdDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB1bml0KHRva2VuLm1hcmdpblNNKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiLXJlbW92ZWBdOiB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB1bml0KHRva2VuLm1hcmdpblhTKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHtcbiAgICAgICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdW5pdChjYWxjKHRva2VuLm1hcmdpblhYUykubXVsKC0xKS5lcXVhbCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtpY29uQ2xzXToge1xuICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYke2NvbXBvbmVudENsc30tbGVmdGBdOiB7XG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2YF06IHtcbiAgICAgICAgICBvcmRlcjogMVxuICAgICAgICB9LFxuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWNvbnRlbnQtaG9sZGVyYF06IHtcbiAgICAgICAgICBvcmRlcjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXJpZ2h0YF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXZgXToge1xuICAgICAgICAgIG9yZGVyOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tY29udGVudC1ob2xkZXJgXToge1xuICAgICAgICAgIG9yZGVyOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09IENhcmQgPT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LWNhcmQke2NvbXBvbmVudENsc30tdG9wLCAmJHtjb21wb25lbnRDbHN9LWNhcmQke2NvbXBvbmVudENsc30tYm90dG9tYF06IHtcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1uYXYsID4gZGl2ID4gJHtjb21wb25lbnRDbHN9LW5hdmBdOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tdGFiICsgJHtjb21wb25lbnRDbHN9LXRhYmBdOiB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBjYXJkR3V0dGVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFyZ2luTGVmdDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1kcm9wZG93bi1ydGxgXToge1xuICAgICAgZGlyZWN0aW9uOiAncnRsJ1xuICAgIH0sXG4gICAgW2Ake2NvbXBvbmVudENsc30tbWVudS1pdGVtYF06IHtcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWRyb3Bkb3duLXJ0bGBdOiB7XG4gICAgICAgIHRleHRBbGlnbjoge1xuICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogJ3JpZ2h0J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGdlblRhYnNTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICB0YWJzQ2FyZFBhZGRpbmcsXG4gICAgY2FyZEhlaWdodCxcbiAgICBjYXJkR3V0dGVyLFxuICAgIGl0ZW1Ib3ZlckNvbG9yLFxuICAgIGl0ZW1BY3RpdmVDb2xvcixcbiAgICBjb2xvckJvcmRlclNlY29uZGFyeVxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW2NvbXBvbmVudENsc106IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc2V0Q29tcG9uZW50KHRva2VuKSksIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IE5hdmlnYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2LCA+IGRpdiA+ICR7Y29tcG9uZW50Q2xzfS1uYXZgXToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1uYXYtd3JhcGBdOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXg6ICdhdXRvJyxcbiAgICAgICAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDApJyxcbiAgICAgICAgICAvLyBGaXggY2hyb21lIHJlbmRlciBidWdcbiAgICAgICAgICAvLyA+Pj4+PiBQaW5nIHNoYWRvd1xuICAgICAgICAgICcmOjpiZWZvcmUsICY6OmFmdGVyJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9YCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tbmF2LWxpc3RgXToge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3Rva2VuLm1vdGlvbkR1cmF0aW9uU2xvd31gXG4gICAgICAgIH0sXG4gICAgICAgIC8vID4+Pj4+Pj4+IE9wZXJhdGlvbnNcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tbmF2LW9wZXJhdGlvbnNgXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnblNlbGY6ICdzdHJldGNoJ1xuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1uYXYtb3BlcmF0aW9ucy1oaWRkZW5gXToge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1uYXYtbW9yZWBdOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgcGFkZGluZzogdGFic0NhcmRQYWRkaW5nLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHQsXG4gICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiB0b2tlbi5jYWxjKHRva2VuLmNvbnRyb2xIZWlnaHRMRykuZGl2KDgpLmVxdWFsKCksXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiJydcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tbmF2LWFkZGBdOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBtaW5XaWR0aDogY2FyZEhlaWdodCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiB7XG4gICAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogY2FyZEd1dHRlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFkZGluZzogdW5pdCh0b2tlbi5wYWRkaW5nWFMpLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgYm9yZGVyOiBgJHt1bml0KHRva2VuLmxpbmVXaWR0aCl9ICR7dG9rZW4ubGluZVR5cGV9ICR7Y29sb3JCb3JkZXJTZWNvbmRhcnl9YCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfSAke3VuaXQodG9rZW4uYm9yZGVyUmFkaXVzTEcpfSAwIDBgLFxuICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0LFxuICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9ICR7dG9rZW4ubW90aW9uRWFzZUluT3V0fWAsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogaXRlbUhvdmVyQ29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmFjdGl2ZSwgJjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpJzoge1xuICAgICAgICAgICAgY29sb3I6IGl0ZW1BY3RpdmVDb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZ2VuRm9jdXNTdHlsZSh0b2tlbikpXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tZXh0cmEtY29udGVudGBdOiB7XG4gICAgICAgIGZsZXg6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSW5rQmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWluay1iYXJgXToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYmFja2dyb3VuZDogdG9rZW4uaW5rQmFyQ29sb3IsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgfVxuICAgIH0pLCBnZW5UYWJTdHlsZSh0b2tlbikpLCB7XG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gVGFiUGFuZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1jb250ZW50YF06IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1jb250ZW50LWhvbGRlcmBdOiB7XG4gICAgICAgIGZsZXg6ICdhdXRvJyxcbiAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgIG1pbkhlaWdodDogMFxuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LXRhYnBhbmVgXToge1xuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICcmLWhpZGRlbic6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIFtgJHtjb21wb25lbnRDbHN9LWNlbnRlcmVkYF06IHtcbiAgICAgIFtgPiAke2NvbXBvbmVudENsc30tbmF2LCA+IGRpdiA+ICR7Y29tcG9uZW50Q2xzfS1uYXZgXToge1xuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1uYXYtd3JhcGBdOiB7XG4gICAgICAgICAgW2AmOm5vdChbY2xhc3MqPScke2NvbXBvbmVudENsc30tbmF2LXdyYXAtcGluZyddKSA+ICR7Y29tcG9uZW50Q2xzfS1uYXYtbGlzdGBdOiB7XG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgY29uc3QgcHJlcGFyZUNvbXBvbmVudFRva2VuID0gdG9rZW4gPT4ge1xuICBjb25zdCBjYXJkSGVpZ2h0ID0gdG9rZW4uY29udHJvbEhlaWdodExHO1xuICByZXR1cm4ge1xuICAgIHpJbmRleFBvcHVwOiB0b2tlbi56SW5kZXhQb3B1cEJhc2UgKyA1MCxcbiAgICBjYXJkQmc6IHRva2VuLmNvbG9yRmlsbEFsdGVyLFxuICAgIGNhcmRIZWlnaHQsXG4gICAgLy8gSW5pdGlhbGl6ZSB3aXRoIGVtcHR5IHN0cmluZywgYmVjYXVzZSBjYXJkUGFkZGluZyB3aWxsIGJlIGNhbGN1bGF0ZWQgd2l0aCBjYXJkSGVpZ2h0IGJ5IGRlZmF1bHQuXG4gICAgY2FyZFBhZGRpbmc6IGAkeyhjYXJkSGVpZ2h0IC0gTWF0aC5yb3VuZCh0b2tlbi5mb250U2l6ZSAqIHRva2VuLmxpbmVIZWlnaHQpKSAvIDIgLSB0b2tlbi5saW5lV2lkdGh9cHggJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICBjYXJkUGFkZGluZ1NNOiBgJHt0b2tlbi5wYWRkaW5nWFhTICogMS41fXB4ICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgY2FyZFBhZGRpbmdMRzogYCR7dG9rZW4ucGFkZGluZ1hTfXB4ICR7dG9rZW4ucGFkZGluZ31weCAke3Rva2VuLnBhZGRpbmdYWFMgKiAxLjV9cHhgLFxuICAgIHRpdGxlRm9udFNpemU6IHRva2VuLmZvbnRTaXplLFxuICAgIHRpdGxlRm9udFNpemVMRzogdG9rZW4uZm9udFNpemVMRyxcbiAgICB0aXRsZUZvbnRTaXplU006IHRva2VuLmZvbnRTaXplLFxuICAgIGlua0JhckNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnksXG4gICAgaG9yaXpvbnRhbE1hcmdpbjogYDAgMCAke3Rva2VuLm1hcmdpbn1weCAwYCxcbiAgICBob3Jpem9udGFsSXRlbUd1dHRlcjogMzIsXG4gICAgLy8gRml4ZWQgVmFsdWVcbiAgICAvLyBJbml0aWFsaXplIHdpdGggZW1wdHkgc3RyaW5nLCBiZWNhdXNlIGhvcml6b250YWxJdGVtTWFyZ2luIHdpbGwgYmUgY2FsY3VsYXRlZCB3aXRoIGhvcml6b250YWxJdGVtR3V0dGVyIGJ5IGRlZmF1bHQuXG4gICAgaG9yaXpvbnRhbEl0ZW1NYXJnaW46IGBgLFxuICAgIGhvcml6b250YWxJdGVtTWFyZ2luUlRMOiBgYCxcbiAgICBob3Jpem9udGFsSXRlbVBhZGRpbmc6IGAke3Rva2VuLnBhZGRpbmdTTX1weCAwYCxcbiAgICBob3Jpem9udGFsSXRlbVBhZGRpbmdTTTogYCR7dG9rZW4ucGFkZGluZ1hTfXB4IDBgLFxuICAgIGhvcml6b250YWxJdGVtUGFkZGluZ0xHOiBgJHt0b2tlbi5wYWRkaW5nfXB4IDBgLFxuICAgIHZlcnRpY2FsSXRlbVBhZGRpbmc6IGAke3Rva2VuLnBhZGRpbmdYU31weCAke3Rva2VuLnBhZGRpbmdMR31weGAsXG4gICAgdmVydGljYWxJdGVtTWFyZ2luOiBgJHt0b2tlbi5tYXJnaW59cHggMCAwIDBgLFxuICAgIGl0ZW1Db2xvcjogdG9rZW4uY29sb3JUZXh0LFxuICAgIGl0ZW1TZWxlY3RlZENvbG9yOiB0b2tlbi5jb2xvclByaW1hcnksXG4gICAgaXRlbUhvdmVyQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUhvdmVyLFxuICAgIGl0ZW1BY3RpdmVDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5QWN0aXZlLFxuICAgIGNhcmRHdXR0ZXI6IHRva2VuLm1hcmdpblhYUyAvIDJcbiAgfTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRXhwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgZ2VuU3R5bGVIb29rcygnVGFicycsIHRva2VuID0+IHtcbiAgY29uc3QgdGFic1Rva2VuID0gbWVyZ2VUb2tlbih0b2tlbiwge1xuICAgIC8vIGBjYXJkUGFkZGluZ2AgaXMgZW1wdHkgYnkgZGVmYXVsdCwgc28gd2UgY291bGQgY2FsY3VsYXRlIHdpdGggZHluYW1pYyBgY2FyZEhlaWdodGBcbiAgICB0YWJzQ2FyZFBhZGRpbmc6IHRva2VuLmNhcmRQYWRkaW5nLFxuICAgIGRyb3Bkb3duRWRnZUNoaWxkVmVydGljYWxQYWRkaW5nOiB0b2tlbi5wYWRkaW5nWFhTLFxuICAgIHRhYnNBY3RpdmVUZXh0U2hhZG93OiAnMCAwIDAuMjVweCBjdXJyZW50Y29sb3InLFxuICAgIHRhYnNEcm9wZG93bkhlaWdodDogMjAwLFxuICAgIHRhYnNEcm9wZG93bldpZHRoOiAxMjAsXG4gICAgdGFic0hvcml6b250YWxJdGVtTWFyZ2luOiBgMCAwIDAgJHt1bml0KHRva2VuLmhvcml6b250YWxJdGVtR3V0dGVyKX1gLFxuICAgIHRhYnNIb3Jpem9udGFsSXRlbU1hcmdpblJUTDogYDAgMCAwICR7dW5pdCh0b2tlbi5ob3Jpem9udGFsSXRlbUd1dHRlcil9YFxuICB9KTtcbiAgcmV0dXJuIFtnZW5TaXplU3R5bGUodGFic1Rva2VuKSwgZ2VuUnRsU3R5bGUodGFic1Rva2VuKSwgZ2VuUG9zaXRpb25TdHlsZSh0YWJzVG9rZW4pLCBnZW5Ecm9wZG93blN0eWxlKHRhYnNUb2tlbiksIGdlbkNhcmRTdHlsZSh0YWJzVG9rZW4pLCBnZW5UYWJzU3R5bGUodGFic1Rva2VuKSwgZ2VuTW90aW9uU3R5bGUodGFic1Rva2VuKV07XG59LCBwcmVwYXJlQ29tcG9uZW50VG9rZW4pOyIsImNvbnN0IFRhYlBhbmUgPSAoKSA9PiBudWxsO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGFiUGFuZS5kaXNwbGF5TmFtZSA9ICdEZXByZWNhdGVkVGFiUGFuZSc7XG59XG5leHBvcnQgZGVmYXVsdCBUYWJQYW5lOyIsIlwidXNlIGNsaWVudFwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Nsb3NlT3V0bGluZWRcIjtcbmltcG9ydCBFbGxpcHNpc091dGxpbmVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9FbGxpcHNpc091dGxpbmVkXCI7XG5pbXBvcnQgUGx1c091dGxpbmVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9QbHVzT3V0bGluZWRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJjVGFicyBmcm9tICdyYy10YWJzJztcbmltcG9ydCB7IGRldlVzZVdhcm5pbmcgfSBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IHVzZUNTU1ZhckNscyBmcm9tICcuLi9jb25maWctcHJvdmlkZXIvaG9va3MvdXNlQ1NTVmFyQ2xzJztcbmltcG9ydCB1c2VTaXplIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlci9ob29rcy91c2VTaXplJztcbmltcG9ydCB1c2VBbmltYXRlQ29uZmlnIGZyb20gJy4vaG9va3MvdXNlQW5pbWF0ZUNvbmZpZyc7XG5pbXBvcnQgdXNlTGVnYWN5SXRlbXMgZnJvbSAnLi9ob29rcy91c2VMZWdhY3lJdGVtcyc7XG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuL1RhYlBhbmUnO1xuY29uc3QgVGFicyA9IHByb3BzID0+IHtcbiAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbDtcbiAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJvb3RDbGFzc05hbWUsXG4gICAgICBzaXplOiBjdXN0b21TaXplLFxuICAgICAgb25FZGl0LFxuICAgICAgaGlkZUFkZCxcbiAgICAgIGNlbnRlcmVkLFxuICAgICAgYWRkSWNvbixcbiAgICAgIHJlbW92ZUljb24sXG4gICAgICBtb3JlSWNvbixcbiAgICAgIG1vcmUsXG4gICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXRlbXMsXG4gICAgICBhbmltYXRlZCxcbiAgICAgIHN0eWxlLFxuICAgICAgaW5kaWNhdG9yU2l6ZSxcbiAgICAgIGluZGljYXRvclxuICAgIH0gPSBwcm9wcyxcbiAgICBvdGhlclByb3BzID0gX19yZXN0KHByb3BzLCBbXCJ0eXBlXCIsIFwiY2xhc3NOYW1lXCIsIFwicm9vdENsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJvbkVkaXRcIiwgXCJoaWRlQWRkXCIsIFwiY2VudGVyZWRcIiwgXCJhZGRJY29uXCIsIFwicmVtb3ZlSWNvblwiLCBcIm1vcmVJY29uXCIsIFwibW9yZVwiLCBcInBvcHVwQ2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpdGVtc1wiLCBcImFuaW1hdGVkXCIsIFwic3R5bGVcIiwgXCJpbmRpY2F0b3JTaXplXCIsIFwiaW5kaWNhdG9yXCJdKTtcbiAgY29uc3Qge1xuICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzXG4gIH0gPSBvdGhlclByb3BzO1xuICBjb25zdCB7XG4gICAgZGlyZWN0aW9uLFxuICAgIHRhYnMsXG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIGdldFBvcHVwQ29udGFpbmVyXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3RhYnMnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCByb290Q2xzID0gdXNlQ1NTVmFyQ2xzKHByZWZpeENscyk7XG4gIGNvbnN0IFt3cmFwQ1NTVmFyLCBoYXNoSWQsIGNzc1ZhckNsc10gPSB1c2VTdHlsZShwcmVmaXhDbHMsIHJvb3RDbHMpO1xuICBsZXQgZWRpdGFibGU7XG4gIGlmICh0eXBlID09PSAnZWRpdGFibGUtY2FyZCcpIHtcbiAgICBlZGl0YWJsZSA9IHtcbiAgICAgIG9uRWRpdDogKGVkaXRUeXBlLCBfcmVmKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGV2ZW50XG4gICAgICAgIH0gPSBfcmVmO1xuICAgICAgICBvbkVkaXQgPT09IG51bGwgfHwgb25FZGl0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkVkaXQoZWRpdFR5cGUgPT09ICdhZGQnID8gZXZlbnQgOiBrZXksIGVkaXRUeXBlKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVJY29uOiAoX2EgPSByZW1vdmVJY29uICE9PSBudWxsICYmIHJlbW92ZUljb24gIT09IHZvaWQgMCA/IHJlbW92ZUljb24gOiB0YWJzID09PSBudWxsIHx8IHRhYnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnMucmVtb3ZlSWNvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xvc2VPdXRsaW5lZCwgbnVsbCksXG4gICAgICBhZGRJY29uOiAoYWRkSWNvbiAhPT0gbnVsbCAmJiBhZGRJY29uICE9PSB2b2lkIDAgPyBhZGRJY29uIDogdGFicyA9PT0gbnVsbCB8fCB0YWJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWJzLmFkZEljb24pIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBsdXNPdXRsaW5lZCwgbnVsbCksXG4gICAgICBzaG93QWRkOiBoaWRlQWRkICE9PSB0cnVlXG4gICAgfTtcbiAgfVxuICBjb25zdCByb290UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3Qgd2FybmluZyA9IGRldlVzZVdhcm5pbmcoJ1RhYnMnKTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEoJ29uUHJldkNsaWNrJyBpbiBwcm9wcykgJiYgISgnb25OZXh0Q2xpY2snIGluIHByb3BzKSwgJ2JyZWFraW5nJywgJ2BvblByZXZDbGlja2AgYW5kIGBvbk5leHRDbGlja2AgaGFzIGJlZW4gcmVtb3ZlZC4gUGxlYXNlIHVzZSBgb25UYWJTY3JvbGxgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKGluZGljYXRvclNpemUgfHwgKHRhYnMgPT09IG51bGwgfHwgdGFicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFicy5pbmRpY2F0b3JTaXplKSksICdkZXByZWNhdGVkJywgJ2BpbmRpY2F0b3JTaXplYCBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBpbmRpY2F0b3I9e3sgc2l6ZTogLi4uIH19YCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG4gIGNvbnN0IHNpemUgPSB1c2VTaXplKGN1c3RvbVNpemUpO1xuICBjb25zdCBtZXJnZWRJdGVtcyA9IHVzZUxlZ2FjeUl0ZW1zKGl0ZW1zLCBjaGlsZHJlbik7XG4gIGNvbnN0IG1lcmdlZEFuaW1hdGVkID0gdXNlQW5pbWF0ZUNvbmZpZyhwcmVmaXhDbHMsIGFuaW1hdGVkKTtcbiAgY29uc3QgbWVyZ2VkU3R5bGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRhYnMgPT09IG51bGwgfHwgdGFicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFicy5zdHlsZSksIHN0eWxlKTtcbiAgY29uc3QgbWVyZ2VkSW5kaWNhdG9yID0ge1xuICAgIGFsaWduOiAoX2IgPSBpbmRpY2F0b3IgPT09IG51bGwgfHwgaW5kaWNhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbmRpY2F0b3IuYWxpZ24pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChfYyA9IHRhYnMgPT09IG51bGwgfHwgdGFicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFicy5pbmRpY2F0b3IpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hbGlnbixcbiAgICBzaXplOiAoX2cgPSAoX2UgPSAoX2QgPSBpbmRpY2F0b3IgPT09IG51bGwgfHwgaW5kaWNhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbmRpY2F0b3Iuc2l6ZSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogaW5kaWNhdG9yU2l6ZSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogKF9mID0gdGFicyA9PT0gbnVsbCB8fCB0YWJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWJzLmluZGljYXRvcikgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnNpemUpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6IHRhYnMgPT09IG51bGwgfHwgdGFicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFicy5pbmRpY2F0b3JTaXplXG4gIH07XG4gIHJldHVybiB3cmFwQ1NTVmFyKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJjVGFicywgT2JqZWN0LmFzc2lnbih7XG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gIH0sIG90aGVyUHJvcHMsIHtcbiAgICBpdGVtczogbWVyZ2VkSXRlbXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHtcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7c2l6ZX1gXTogc2l6ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWNhcmRgXTogWydjYXJkJywgJ2VkaXRhYmxlLWNhcmQnXS5pbmNsdWRlcyh0eXBlKSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWVkaXRhYmxlLWNhcmRgXTogdHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnLFxuICAgICAgW2Ake3ByZWZpeENsc30tY2VudGVyZWRgXTogY2VudGVyZWRcbiAgICB9LCB0YWJzID09PSBudWxsIHx8IHRhYnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnMuY2xhc3NOYW1lLCBjbGFzc05hbWUsIHJvb3RDbGFzc05hbWUsIGhhc2hJZCwgY3NzVmFyQ2xzLCByb290Q2xzKSxcbiAgICBwb3B1cENsYXNzTmFtZTogY2xhc3NOYW1lcyhwb3B1cENsYXNzTmFtZSwgaGFzaElkLCBjc3NWYXJDbHMsIHJvb3RDbHMpLFxuICAgIHN0eWxlOiBtZXJnZWRTdHlsZSxcbiAgICBlZGl0YWJsZTogZWRpdGFibGUsXG4gICAgbW9yZTogT2JqZWN0LmFzc2lnbih7XG4gICAgICBpY29uOiAoX2wgPSAoX2sgPSAoX2ogPSAoX2ggPSB0YWJzID09PSBudWxsIHx8IHRhYnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnMubW9yZSkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmljb24pICE9PSBudWxsICYmIF9qICE9PSB2b2lkIDAgPyBfaiA6IHRhYnMgPT09IG51bGwgfHwgdGFicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFicy5tb3JlSWNvbikgIT09IG51bGwgJiYgX2sgIT09IHZvaWQgMCA/IF9rIDogbW9yZUljb24pICE9PSBudWxsICYmIF9sICE9PSB2b2lkIDAgPyBfbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsbGlwc2lzT3V0bGluZWQsIG51bGwpLFxuICAgICAgdHJhbnNpdGlvbk5hbWU6IGAke3Jvb3RQcmVmaXhDbHN9LXNsaWRlLXVwYFxuICAgIH0sIG1vcmUpLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGFuaW1hdGVkOiBtZXJnZWRBbmltYXRlZCxcbiAgICBpbmRpY2F0b3I6IG1lcmdlZEluZGljYXRvclxuICB9KSkpO1xufTtcblRhYnMuVGFiUGFuZSA9IFRhYlBhbmU7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBUYWJzLmRpc3BsYXlOYW1lID0gJ1RhYnMnO1xufVxuZXhwb3J0IGRlZmF1bHQgVGFiczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///49199
`)}}]);
