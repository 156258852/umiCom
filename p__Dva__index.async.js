"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[164],{65802:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Dva; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 37 modules
var _umi_production_exports = __webpack_require__(71551);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(97582);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useLatest/index.js
var useLatest = __webpack_require__(3930);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/index.js
var utils = __webpack_require__(92770);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/isBrowser.js
var isBrowser = __webpack_require__(52982);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/domTarget.js


function getTargetElement(target, defaultElement) {
  if (!isBrowser/* default */.Z) {
    return undefined;
  }
  if (!target) {
    return defaultElement;
  }
  var targetElement;
  if ((0,utils/* isFunction */.mf)(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }
  return targetElement;
}
// EXTERNAL MODULE: ./node_modules/ahooks/es/useUnmount/index.js
var useUnmount = __webpack_require__(45210);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/depsAreSame.js
var depsAreSame = __webpack_require__(8224);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/createEffectWithTarget.js




var createEffectWithTarget = function (useEffectType) {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  var useEffectWithTarget = function (effect, deps, target) {
    var hasInitRef = (0,react.useRef)(false);
    var lastElementRef = (0,react.useRef)([]);
    var lastDepsRef = (0,react.useRef)([]);
    var unLoadRef = (0,react.useRef)();
    useEffectType(function () {
      var _a;
      var targets = Array.isArray(target) ? target : [target];
      var els = targets.map(function (item) {
        return getTargetElement(item);
      });
      // init run
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
        return;
      }
      if (els.length !== lastElementRef.current.length || !(0,depsAreSame/* default */.Z)(lastElementRef.current, els) || !(0,depsAreSame/* default */.Z)(lastDepsRef.current, deps)) {
        (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    (0,useUnmount/* default */.Z)(function () {
      var _a;
      (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
      // for react-refresh
      hasInitRef.current = false;
    });
  };
  return useEffectWithTarget;
};
/* harmony default export */ var utils_createEffectWithTarget = (createEffectWithTarget);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/useEffectWithTarget.js


var useEffectWithTarget = utils_createEffectWithTarget(react.useEffect);
/* harmony default export */ var utils_useEffectWithTarget = (useEffectWithTarget);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useEventListener/index.js



function useEventListener(eventName, handler, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.enable,
    enable = _a === void 0 ? true : _a;
  var handlerRef = (0,useLatest/* default */.Z)(handler);
  utils_useEffectWithTarget(function () {
    if (!enable) {
      return;
    }
    var targetElement = getTargetElement(options.target, window);
    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }
    var eventListener = function (event) {
      return handlerRef.current(event);
    };
    var eventNameArray = Array.isArray(eventName) ? eventName : [eventName];
    eventNameArray.forEach(function (event) {
      targetElement.addEventListener(event, eventListener, {
        capture: options.capture,
        once: options.once,
        passive: options.passive
      });
    });
    return function () {
      eventNameArray.forEach(function (event) {
        targetElement.removeEventListener(event, eventListener, {
          capture: options.capture
        });
      });
    };
  }, [eventName, options.capture, options.once, options.passive, enable], options.target);
}
/* harmony default export */ var es_useEventListener = (useEventListener);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useMemoizedFn/index.js
var useMemoizedFn = __webpack_require__(22638);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useUpdateEffect/index.js + 1 modules
var useUpdateEffect = __webpack_require__(77598);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/createUseStorageState/index.js






var SYNC_STORAGE_EVENT_NAME = 'AHOOKS_SYNC_STORAGE_EVENT_NAME';
function createUseStorageState(getStorage) {
  function useStorageState(key, options) {
    if (options === void 0) {
      options = {};
    }
    var storage;
    var _a = options.listenStorageChange,
      listenStorageChange = _a === void 0 ? false : _a,
      _b = options.onError,
      onError = _b === void 0 ? function (e) {
        console.error(e);
      } : _b;
    // https://github.com/alibaba/hooks/issues/800
    try {
      storage = getStorage();
    } catch (err) {
      onError(err);
    }
    var serializer = function (value) {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };
    var deserializer = function (value) {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };
    function getStoredValue() {
      try {
        var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        onError(e);
      }
      if ((0,utils/* isFunction */.mf)(options.defaultValue)) {
        return options.defaultValue();
      }
      return options.defaultValue;
    }
    var _c = (0,tslib_es6/* __read */.CR)((0,react.useState)(getStoredValue), 2),
      state = _c[0],
      setState = _c[1];
    (0,useUpdateEffect/* default */.Z)(function () {
      setState(getStoredValue());
    }, [key]);
    var updateState = function (value) {
      var currentState = (0,utils/* isFunction */.mf)(value) ? value(state) : value;
      if (!listenStorageChange) {
        setState(currentState);
      }
      try {
        var newValue = void 0;
        var oldValue = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
        if ((0,utils/* isUndef */.G7)(currentState)) {
          newValue = null;
          storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
        } else {
          newValue = serializer(currentState);
          storage === null || storage === void 0 ? void 0 : storage.setItem(key, newValue);
        }
        dispatchEvent(
        // send custom event to communicate within same page
        // importantly this should not be a StorageEvent since those cannot
        // be constructed with a non-built-in storage area
        new CustomEvent(SYNC_STORAGE_EVENT_NAME, {
          detail: {
            key: key,
            newValue: newValue,
            oldValue: oldValue,
            storageArea: storage
          }
        }));
      } catch (e) {
        onError(e);
      }
    };
    var syncState = function (event) {
      if (event.key !== key || event.storageArea !== storage) {
        return;
      }
      setState(getStoredValue());
    };
    var syncStateFromCustomEvent = function (event) {
      syncState(event.detail);
    };
    // from another document
    es_useEventListener('storage', syncState, {
      enable: listenStorageChange
    });
    // from the same document but different hooks
    es_useEventListener(SYNC_STORAGE_EVENT_NAME, syncStateFromCustomEvent, {
      enable: listenStorageChange
    });
    return [state, (0,useMemoizedFn/* default */.Z)(updateState)];
  }
  return useStorageState;
}
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useSessionStorageState/index.js


var useSessionStorageState = createUseStorageState(function () {
  return isBrowser/* default */.Z ? sessionStorage : undefined;
});
/* harmony default export */ var es_useSessionStorageState = (useSessionStorageState);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 23 modules
var es_form = __webpack_require__(23323);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 9 modules
var input = __webpack_require__(65233);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 31 modules
var es_select = __webpack_require__(74656);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(78957);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(28036);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MinusCircleOutlined.js
// This icon file is generated automatically.
var MinusCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "minus-circle", "theme": "outlined" };
/* harmony default export */ var asn_MinusCircleOutlined = (MinusCircleOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MinusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MinusCircleOutlined_MinusCircleOutlined = function MinusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_MinusCircleOutlined
  }));
};

/**![minus-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5NiA0ODBIMzI4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4aDM2OGM0LjQgMCA4LTMuNiA4LTh2LTQ4YzAtNC40LTMuNi04LTgtOHoiIC8+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/react.forwardRef(MinusCircleOutlined_MinusCircleOutlined);
if (false) {}
/* harmony default export */ var icons_MinusCircleOutlined = (RefIcon);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusCircleOutlined.js
// This icon file is generated automatically.
var PlusCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "plus-circle", "theme": "outlined" };
/* harmony default export */ var asn_PlusCircleOutlined = (PlusCircleOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PlusCircleOutlined_PlusCircleOutlined = function PlusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_PlusCircleOutlined
  }));
};

/**![plus-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5NiA0ODBINTQ0VjMyOGMwLTQuNC0zLjYtOC04LThoLTQ4Yy00LjQgMC04IDMuNi04IDh2MTUySDMyOGMtNC40IDAtOCAzLjYtOCA4djQ4YzAgNC40IDMuNiA4IDggOGgxNTJ2MTUyYzAgNC40IDMuNiA4IDggOGg0OGM0LjQgMCA4LTMuNiA4LThWNTQ0aDE1MmM0LjQgMCA4LTMuNiA4LTh2LTQ4YzAtNC40LTMuNi04LTgtOHoiIC8+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiIC8+PC9zdmc+) */
var PlusCircleOutlined_RefIcon = /*#__PURE__*/react.forwardRef(PlusCircleOutlined_PlusCircleOutlined);
if (false) {}
/* harmony default export */ var icons_PlusCircleOutlined = (PlusCircleOutlined_RefIcon);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/isDev.js
var isDev = __webpack_require__(31663);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useDynamicList/index.js



var useDynamicList = function (initialList) {
  if (initialList === void 0) {
    initialList = [];
  }
  var counterRef = (0,react.useRef)(-1);
  var keyList = (0,react.useRef)([]);
  var setKey = (0,react.useCallback)(function (index) {
    counterRef.current += 1;
    keyList.current.splice(index, 0, counterRef.current);
  }, []);
  var _a = (0,tslib_es6/* __read */.CR)((0,react.useState)(function () {
      initialList.forEach(function (_, index) {
        setKey(index);
      });
      return initialList;
    }), 2),
    list = _a[0],
    setList = _a[1];
  var resetList = (0,react.useCallback)(function (newList) {
    keyList.current = [];
    setList(function () {
      newList.forEach(function (_, index) {
        setKey(index);
      });
      return newList;
    });
  }, []);
  var insert = (0,react.useCallback)(function (index, item) {
    setList(function (l) {
      var temp = (0,tslib_es6/* __spreadArray */.ev)([], (0,tslib_es6/* __read */.CR)(l), false);
      temp.splice(index, 0, item);
      setKey(index);
      return temp;
    });
  }, []);
  var getKey = (0,react.useCallback)(function (index) {
    return keyList.current[index];
  }, []);
  var getIndex = (0,react.useCallback)(function (key) {
    return keyList.current.findIndex(function (ele) {
      return ele === key;
    });
  }, []);
  var merge = (0,react.useCallback)(function (index, items) {
    setList(function (l) {
      var temp = (0,tslib_es6/* __spreadArray */.ev)([], (0,tslib_es6/* __read */.CR)(l), false);
      items.forEach(function (_, i) {
        setKey(index + i);
      });
      temp.splice.apply(temp, (0,tslib_es6/* __spreadArray */.ev)([index, 0], (0,tslib_es6/* __read */.CR)(items), false));
      return temp;
    });
  }, []);
  var replace = (0,react.useCallback)(function (index, item) {
    setList(function (l) {
      var temp = (0,tslib_es6/* __spreadArray */.ev)([], (0,tslib_es6/* __read */.CR)(l), false);
      temp[index] = item;
      return temp;
    });
  }, []);
  var remove = (0,react.useCallback)(function (index) {
    setList(function (l) {
      var temp = (0,tslib_es6/* __spreadArray */.ev)([], (0,tslib_es6/* __read */.CR)(l), false);
      temp.splice(index, 1);
      // remove keys if necessary
      try {
        keyList.current.splice(index, 1);
      } catch (e) {
        console.error(e);
      }
      return temp;
    });
  }, []);
  var batchRemove = (0,react.useCallback)(function (indexes) {
    if (!Array.isArray(indexes)) {
      if (isDev/* default */.Z) {
        console.error("\`indexes\` parameter of \`batchRemove\` function expected to be an array, but got \\"".concat(typeof indexes, "\\"."));
      }
      return;
    }
    if (!indexes.length) {
      return;
    }
    setList(function (prevList) {
      var newKeyList = [];
      var newList = prevList.filter(function (item, index) {
        var shouldKeep = !indexes.includes(index);
        if (shouldKeep) {
          newKeyList.push(getKey(index));
        }
        return shouldKeep;
      });
      keyList.current = newKeyList;
      return newList;
    });
  }, []);
  var move = (0,react.useCallback)(function (oldIndex, newIndex) {
    if (oldIndex === newIndex) {
      return;
    }
    setList(function (l) {
      var newList = (0,tslib_es6/* __spreadArray */.ev)([], (0,tslib_es6/* __read */.CR)(l), false);
      var temp = newList.filter(function (_, index) {
        return index !== oldIndex;
      });
      temp.splice(newIndex, 0, newList[oldIndex]);
      // move keys if necessary
      try {
        var keyTemp = keyList.current.filter(function (_, index) {
          return index !== oldIndex;
        });
        keyTemp.splice(newIndex, 0, keyList.current[oldIndex]);
        keyList.current = keyTemp;
      } catch (e) {
        console.error(e);
      }
      return temp;
    });
  }, []);
  var push = (0,react.useCallback)(function (item) {
    setList(function (l) {
      setKey(l.length);
      return l.concat([item]);
    });
  }, []);
  var pop = (0,react.useCallback)(function () {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(0, keyList.current.length - 1);
    } catch (e) {
      console.error(e);
    }
    setList(function (l) {
      return l.slice(0, l.length - 1);
    });
  }, []);
  var unshift = (0,react.useCallback)(function (item) {
    setList(function (l) {
      setKey(0);
      return [item].concat(l);
    });
  }, []);
  var shift = (0,react.useCallback)(function () {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(1, keyList.current.length);
    } catch (e) {
      console.error(e);
    }
    setList(function (l) {
      return l.slice(1, l.length);
    });
  }, []);
  var sortList = (0,react.useCallback)(function (result) {
    return result.map(function (item, index) {
      return {
        key: index,
        item: item
      };
    }) // add index into obj
    .sort(function (a, b) {
      return getIndex(a.key) - getIndex(b.key);
    }) // sort based on the index of table
    .filter(function (item) {
      return !!item.item;
    }) // remove undefined(s)
    .map(function (item) {
      return item.item;
    });
  },
  // retrive the data
  []);
  return {
    list: list,
    insert: insert,
    merge: merge,
    replace: replace,
    remove: remove,
    batchRemove: batchRemove,
    getKey: getKey,
    getIndex: getIndex,
    move: move,
    push: push,
    pop: pop,
    unshift: unshift,
    shift: shift,
    sortList: sortList,
    resetList: resetList
  };
};
/* harmony default export */ var es_useDynamicList = (useDynamicList);
// EXTERNAL MODULE: ./node_modules/lodash-es/isEqual.js + 12 modules
var isEqual = __webpack_require__(35322);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Dva/FormList.tsx









var DynamicInputs = function DynamicInputs(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    onChange = _ref.onChange,
    paramsScene = _ref.paramsScene;
  var _useDynamicList = es_useDynamicList(value),
    list = _useDynamicList.list,
    remove = _useDynamicList.remove,
    getKey = _useDynamicList.getKey,
    insert = _useDynamicList.insert,
    replace = _useDynamicList.replace,
    resetList = _useDynamicList.resetList;
  var onceRef = (0,react.useRef)(true);
  console.log('list', list);
  (0,react.useEffect)(function () {
    // If value change manual, reset list
    if ((0,isEqual/* default */.Z)(value, list)) return;
    resetList(value);
  }, [value]);
  (0,react.useEffect)(function () {
    if (onceRef.current) {
      onceRef.current = false;
      return;
    }
    console.log('\u4E0D\u6267\u884C\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014');
    onChange === null || onChange === void 0 || onChange(list);
  }, [list]);
  var Row = function Row(index, item) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        marginBottom: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
        style: {
          width: 300
        },
        placeholder: "Please enter name",
        onChange: function onChange(e) {
          return replace(index, objectSpread2_default()(objectSpread2_default()({}, item), {}, {
            ipt1: e.target.value
          }));
        },
        value: item === null || item === void 0 ? void 0 : item.ipt1
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
        style: {
          width: 300
        },
        placeholder: "Please enter name",
        onChange: function onChange(e) {
          return replace(index, objectSpread2_default()(objectSpread2_default()({}, item), {}, {
            ipt2: e.target.value
          }));
        },
        value: item === null || item === void 0 ? void 0 : item.ipt2
      }), list.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(icons_MinusCircleOutlined, {
        style: {
          marginLeft: 8
        },
        onClick: function onClick() {
          remove(index);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(icons_PlusCircleOutlined, {
        style: {
          marginLeft: 8
        },
        onClick: function onClick() {
          insert(index + 1, {});
        }
      })]
    }, getKey(index));
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: list.map(function (ele, index) {
      return Row(index, ele);
    })
  });
};
/* harmony default export */ var FormList = (DynamicInputs);
;// CONCATENATED MODULE: ./src/pages/Dva/index.tsx








var App = function App(props) {
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    formNode = _Form$useForm2[0];
  console.log('App', '----------------------');
  react.useEffect(function () {
    var wxobj = {};
    window.location.href.replace(/([^?&=]+)=([^&]+)/g, function (_, k, v) {
      return wxobj[k] = v;
    });
    console.log('wxobj', wxobj);
    formNode.setFieldValue('name', wxobj.phone);
  }, []);
  var _useSessionStorageSta = es_useSessionStorageState('scene_key', {
      deserializer: function deserializer(value) {
        return JSON.parse(value);
      }
    }),
    _useSessionStorageSta2 = slicedToArray_default()(_useSessionStorageSta, 2),
    tempScene = _useSessionStorageSta2[0],
    setTempScene = _useSessionStorageSta2[1];
  (0,react.useEffect)(function () {
    formNode.setFieldValue('scene', tempScene);
    setTempScene();
  }, []);
  (0,react.useEffect)(function () {
    var handleBeforeUnload = function handleBeforeUnload(event) {
      // \u5728\u8FD9\u91CC\u53EF\u4EE5\u6267\u884C\u4E00\u4E9B\u6E05\u7406\u5DE5\u4F5C
      console.log('\u9875\u9762\u5373\u5C06\u5237\u65B0\u6216\u5173\u95ED');
      setTempScene(formNode.getFieldValue('scene'));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // \u6E05\u7406\u4E8B\u4EF6\u76D1\u542C\u5668
    return function () {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  (0,react.useEffect)(function () {
    console.log('history.location.pathname', _umi_production_exports.history.location.pathname);
  }, [_umi_production_exports.history.location.pathname]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "app-container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      form: formNode,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "name",
        label: "\\u6D4B\\u8BD5",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: "\\u8BF7\\u8F93\\u5165\\u7528\\u6237\\u59D3\\u540D",
          allowClear: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "scene",
        label: "\\u573A\\u666F",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          allowClear: true,
          onChange: function onChange(val) {
            console.log('\u{1F680} ~ val:', val);
            return {};
          },
          options: [{
            label: 'AIGC\u573A\u666F',
            value: 'aigc_key'
          }, {
            label: '\u901A\u7528\u573A\u666F',
            value: 'common_key'
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "tt",
        label: "tt",
        initialValue: [{}],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormList, {
          onChange: function onChange(v) {
            console.log('v', v);
          }
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: function onClick() {
          var data = formNode.getFieldsValue();
          console.log('data', data);
        },
        children: "\\u786E\\u5B9A"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: function onClick() {
          // formNode.resetFields()
          formNode.setFieldsValue({
            tt: [{}],
            scene: 'aigc_key'
          });
        },
        children: "\\u91CD\\u7F6E"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: function onClick() {
          _umi_production_exports.history.push('/Json');
          setTempScene(formNode.getFieldValue('scene'));
        },
        children: "\\u8DF3\\u8F6C"
      })]
    })]
  });
};
/* harmony default export */ var Dva = (App);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEVBQUVpRSxJQUFJLENBQUM7UUFDM0IsQ0FBRTtRQUFBMUQsUUFBQSxFQUNIO01BRUQsQ0FBUSxDQUFDLGVBQ1QzQixtQkFBQSxDQUFDMEMseUJBQU07UUFDTEwsT0FBTyxFQUFFLFNBQUFBLFFBQUEsRUFBTTtVQUNiO1VBQ0FnQixRQUFRLENBQUNrQyxjQUFjLENBQUM7WUFDdEJDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1JDLEtBQUssRUFBRTtVQUNULENBQUMsQ0FBQztRQUNKLENBQUU7UUFBQTlELFFBQUEsRUFDSDtNQUVELENBQVEsQ0FBQyxlQUNUM0IsbUJBQUEsQ0FBQzBDLHlCQUFNO1FBQ0xMLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQU07VUFDYkcsK0JBQU8sQ0FBQ2tELElBQUksQ0FBQyxPQUFPLENBQUM7VUFDckJyQixZQUFZLENBQUNoQixRQUFRLENBQUNtQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsQ0FBRTtRQUFBN0MsUUFBQSxFQUNIO01BRUQsQ0FBUSxDQUFDO0lBQUEsQ0FDSixDQUFDO0VBQUEsQ0FDTCxDQUFDO0FBRVYsQ0FBQztBQUVELHdDQUFlb0IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXRpbHMvZG9tVGFyZ2V0LmpzP2MxNTMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91dGlscy9jcmVhdGVFZmZlY3RXaXRoVGFyZ2V0LmpzPzhiMzgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91dGlscy91c2VFZmZlY3RXaXRoVGFyZ2V0LmpzP2M4MGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VFdmVudExpc3RlbmVyL2luZGV4LmpzP2M2YTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy9jcmVhdGVVc2VTdG9yYWdlU3RhdGUvaW5kZXguanM/OTg0MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZVNlc3Npb25TdG9yYWdlU3RhdGUvaW5kZXguanM/N2I2MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2VzL2Fzbi9NaW51c0NpcmNsZU91dGxpbmVkLmpzP2QwNTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL01pbnVzQ2lyY2xlT3V0bGluZWQuanM/YjBjNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2VzL2Fzbi9QbHVzQ2lyY2xlT3V0bGluZWQuanM/YWFjZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvUGx1c0NpcmNsZU91dGxpbmVkLmpzPzRhMDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VEeW5hbWljTGlzdC9pbmRleC5qcz8xZGVjIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9EdmEvRm9ybUxpc3QudHN4P2IzMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0R2YS9pbmRleC50c3g/ZGVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRFbGVtZW50KHRhcmdldCwgZGVmYXVsdEVsZW1lbnQpIHtcbiAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuIGRlZmF1bHRFbGVtZW50O1xuICB9XG4gIHZhciB0YXJnZXRFbGVtZW50O1xuICBpZiAoaXNGdW5jdGlvbih0YXJnZXQpKSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldCgpO1xuICB9IGVsc2UgaWYgKCdjdXJyZW50JyBpbiB0YXJnZXQpIHtcbiAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0LmN1cnJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldDtcbiAgfVxuICByZXR1cm4gdGFyZ2V0RWxlbWVudDtcbn0iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVW5tb3VudCBmcm9tICcuLi91c2VVbm1vdW50JztcbmltcG9ydCBkZXBzQXJlU2FtZSBmcm9tICcuL2RlcHNBcmVTYW1lJztcbmltcG9ydCB7IGdldFRhcmdldEVsZW1lbnQgfSBmcm9tICcuL2RvbVRhcmdldCc7XG52YXIgY3JlYXRlRWZmZWN0V2l0aFRhcmdldCA9IGZ1bmN0aW9uICh1c2VFZmZlY3RUeXBlKSB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZWZmZWN0XG4gICAqIEBwYXJhbSBkZXBzXG4gICAqIEBwYXJhbSB0YXJnZXQgdGFyZ2V0IHNob3VsZCBjb21wYXJlIHJlZi5jdXJyZW50IHZzIHJlZi5jdXJyZW50LCBkb20gdnMgZG9tLCAoKT0+ZG9tIHZzICgpPT5kb21cbiAgICovXG4gIHZhciB1c2VFZmZlY3RXaXRoVGFyZ2V0ID0gZnVuY3Rpb24gKGVmZmVjdCwgZGVwcywgdGFyZ2V0KSB7XG4gICAgdmFyIGhhc0luaXRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciBsYXN0RWxlbWVudFJlZiA9IHVzZVJlZihbXSk7XG4gICAgdmFyIGxhc3REZXBzUmVmID0gdXNlUmVmKFtdKTtcbiAgICB2YXIgdW5Mb2FkUmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0VHlwZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICB2YXIgdGFyZ2V0cyA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldCA6IFt0YXJnZXRdO1xuICAgICAgdmFyIGVscyA9IHRhcmdldHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBnZXRUYXJnZXRFbGVtZW50KGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICAvLyBpbml0IHJ1blxuICAgICAgaWYgKCFoYXNJbml0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaGFzSW5pdFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgbGFzdEVsZW1lbnRSZWYuY3VycmVudCA9IGVscztcbiAgICAgICAgbGFzdERlcHNSZWYuY3VycmVudCA9IGRlcHM7XG4gICAgICAgIHVuTG9hZFJlZi5jdXJyZW50ID0gZWZmZWN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlbHMubGVuZ3RoICE9PSBsYXN0RWxlbWVudFJlZi5jdXJyZW50Lmxlbmd0aCB8fCAhZGVwc0FyZVNhbWUobGFzdEVsZW1lbnRSZWYuY3VycmVudCwgZWxzKSB8fCAhZGVwc0FyZVNhbWUobGFzdERlcHNSZWYuY3VycmVudCwgZGVwcykpIHtcbiAgICAgICAgKF9hID0gdW5Mb2FkUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHVuTG9hZFJlZik7XG4gICAgICAgIGxhc3RFbGVtZW50UmVmLmN1cnJlbnQgPSBlbHM7XG4gICAgICAgIGxhc3REZXBzUmVmLmN1cnJlbnQgPSBkZXBzO1xuICAgICAgICB1bkxvYWRSZWYuY3VycmVudCA9IGVmZmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVzZVVubW91bnQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hO1xuICAgICAgKF9hID0gdW5Mb2FkUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHVuTG9hZFJlZik7XG4gICAgICAvLyBmb3IgcmVhY3QtcmVmcmVzaFxuICAgICAgaGFzSW5pdFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB1c2VFZmZlY3RXaXRoVGFyZ2V0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVmZmVjdFdpdGhUYXJnZXQ7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUVmZmVjdFdpdGhUYXJnZXQgZnJvbSAnLi9jcmVhdGVFZmZlY3RXaXRoVGFyZ2V0JztcbnZhciB1c2VFZmZlY3RXaXRoVGFyZ2V0ID0gY3JlYXRlRWZmZWN0V2l0aFRhcmdldCh1c2VFZmZlY3QpO1xuZXhwb3J0IGRlZmF1bHQgdXNlRWZmZWN0V2l0aFRhcmdldDsiLCJpbXBvcnQgdXNlTGF0ZXN0IGZyb20gJy4uL3VzZUxhdGVzdCc7XG5pbXBvcnQgeyBnZXRUYXJnZXRFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvZG9tVGFyZ2V0JztcbmltcG9ydCB1c2VFZmZlY3RXaXRoVGFyZ2V0IGZyb20gJy4uL3V0aWxzL3VzZUVmZmVjdFdpdGhUYXJnZXQnO1xuZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICB2YXIgX2EgPSBvcHRpb25zLmVuYWJsZSxcbiAgICBlbmFibGUgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hO1xuICB2YXIgaGFuZGxlclJlZiA9IHVzZUxhdGVzdChoYW5kbGVyKTtcbiAgdXNlRWZmZWN0V2l0aFRhcmdldChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFlbmFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXRFbGVtZW50KG9wdGlvbnMudGFyZ2V0LCB3aW5kb3cpO1xuICAgIGlmICghKHRhcmdldEVsZW1lbnQgPT09IG51bGwgfHwgdGFyZ2V0RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXJSZWYuY3VycmVudChldmVudCk7XG4gICAgfTtcbiAgICB2YXIgZXZlbnROYW1lQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50TmFtZSkgPyBldmVudE5hbWUgOiBbZXZlbnROYW1lXTtcbiAgICBldmVudE5hbWVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudExpc3RlbmVyLCB7XG4gICAgICAgIGNhcHR1cmU6IG9wdGlvbnMuY2FwdHVyZSxcbiAgICAgICAgb25jZTogb3B0aW9ucy5vbmNlLFxuICAgICAgICBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmVcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBldmVudE5hbWVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TGlzdGVuZXIsIHtcbiAgICAgICAgICBjYXB0dXJlOiBvcHRpb25zLmNhcHR1cmVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbZXZlbnROYW1lLCBvcHRpb25zLmNhcHR1cmUsIG9wdGlvbnMub25jZSwgb3B0aW9ucy5wYXNzaXZlLCBlbmFibGVdLCBvcHRpb25zLnRhcmdldCk7XG59XG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudExpc3RlbmVyOyIsImltcG9ydCB7IF9fcmVhZCB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuLi91c2VFdmVudExpc3RlbmVyJztcbmltcG9ydCB1c2VNZW1vaXplZEZuIGZyb20gJy4uL3VzZU1lbW9pemVkRm4nO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuLi91c2VVcGRhdGVFZmZlY3QnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNVbmRlZiB9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCB2YXIgU1lOQ19TVE9SQUdFX0VWRU5UX05BTUUgPSAnQUhPT0tTX1NZTkNfU1RPUkFHRV9FVkVOVF9OQU1FJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VTdG9yYWdlU3RhdGUoZ2V0U3RvcmFnZSkge1xuICBmdW5jdGlvbiB1c2VTdG9yYWdlU3RhdGUoa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB2YXIgc3RvcmFnZTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmxpc3RlblN0b3JhZ2VDaGFuZ2UsXG4gICAgICBsaXN0ZW5TdG9yYWdlQ2hhbmdlID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsXG4gICAgICBfYiA9IG9wdGlvbnMub25FcnJvcixcbiAgICAgIG9uRXJyb3IgPSBfYiA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0gOiBfYjtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS9ob29rcy9pc3N1ZXMvODAwXG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBvbkVycm9yKGVycik7XG4gICAgfVxuICAgIHZhciBzZXJpYWxpemVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAob3B0aW9ucy5zZXJpYWxpemVyKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnNlcmlhbGl6ZXIodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciBkZXNlcmlhbGl6ZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlc2VyaWFsaXplcikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5kZXNlcmlhbGl6ZXIodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkVmFsdWUoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmF3ID0gc3RvcmFnZSA9PT0gbnVsbCB8fCBzdG9yYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZXIocmF3KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5kZWZhdWx0VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICB2YXIgX2MgPSBfX3JlYWQodXNlU3RhdGUoZ2V0U3RvcmVkVmFsdWUpLCAyKSxcbiAgICAgIHN0YXRlID0gX2NbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9jWzFdO1xuICAgIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRTdGF0ZShnZXRTdG9yZWRWYWx1ZSgpKTtcbiAgICB9LCBba2V5XSk7XG4gICAgdmFyIHVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgY3VycmVudFN0YXRlID0gaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZShzdGF0ZSkgOiB2YWx1ZTtcbiAgICAgIGlmICghbGlzdGVuU3RvcmFnZUNoYW5nZSkge1xuICAgICAgICBzZXRTdGF0ZShjdXJyZW50U3RhdGUpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdm9pZCAwO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBzdG9yYWdlID09PSBudWxsIHx8IHN0b3JhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZihjdXJyZW50U3RhdGUpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBudWxsO1xuICAgICAgICAgIHN0b3JhZ2UgPT09IG51bGwgfHwgc3RvcmFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBzZXJpYWxpemVyKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgc3RvcmFnZSA9PT0gbnVsbCB8fCBzdG9yYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yYWdlLnNldEl0ZW0oa2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChcbiAgICAgICAgLy8gc2VuZCBjdXN0b20gZXZlbnQgdG8gY29tbXVuaWNhdGUgd2l0aGluIHNhbWUgcGFnZVxuICAgICAgICAvLyBpbXBvcnRhbnRseSB0aGlzIHNob3VsZCBub3QgYmUgYSBTdG9yYWdlRXZlbnQgc2luY2UgdGhvc2UgY2Fubm90XG4gICAgICAgIC8vIGJlIGNvbnN0cnVjdGVkIHdpdGggYSBub24tYnVpbHQtaW4gc3RvcmFnZSBhcmVhXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChTWU5DX1NUT1JBR0VfRVZFTlRfTkFNRSwge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBzdG9yYWdlQXJlYTogc3RvcmFnZVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHN5bmNTdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0ga2V5IHx8IGV2ZW50LnN0b3JhZ2VBcmVhICE9PSBzdG9yYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFN0YXRlKGdldFN0b3JlZFZhbHVlKCkpO1xuICAgIH07XG4gICAgdmFyIHN5bmNTdGF0ZUZyb21DdXN0b21FdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3luY1N0YXRlKGV2ZW50LmRldGFpbCk7XG4gICAgfTtcbiAgICAvLyBmcm9tIGFub3RoZXIgZG9jdW1lbnRcbiAgICB1c2VFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgc3luY1N0YXRlLCB7XG4gICAgICBlbmFibGU6IGxpc3RlblN0b3JhZ2VDaGFuZ2VcbiAgICB9KTtcbiAgICAvLyBmcm9tIHRoZSBzYW1lIGRvY3VtZW50IGJ1dCBkaWZmZXJlbnQgaG9va3NcbiAgICB1c2VFdmVudExpc3RlbmVyKFNZTkNfU1RPUkFHRV9FVkVOVF9OQU1FLCBzeW5jU3RhdGVGcm9tQ3VzdG9tRXZlbnQsIHtcbiAgICAgIGVuYWJsZTogbGlzdGVuU3RvcmFnZUNoYW5nZVxuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGUsIHVzZU1lbW9pemVkRm4odXBkYXRlU3RhdGUpXTtcbiAgfVxuICByZXR1cm4gdXNlU3RvcmFnZVN0YXRlO1xufSIsImltcG9ydCB7IGNyZWF0ZVVzZVN0b3JhZ2VTdGF0ZSB9IGZyb20gJy4uL2NyZWF0ZVVzZVN0b3JhZ2VTdGF0ZSc7XG5pbXBvcnQgaXNCcm93c2VyIGZyb20gJy4uL3V0aWxzL2lzQnJvd3Nlcic7XG52YXIgdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSA9IGNyZWF0ZVVzZVN0b3JhZ2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0Jyb3dzZXIgPyBzZXNzaW9uU3RvcmFnZSA6IHVuZGVmaW5lZDtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZTsiLCIvLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbnZhciBNaW51c0NpcmNsZU91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk02OTYgNDgwSDMyOGMtNC40IDAtOCAzLjYtOCA4djQ4YzAgNC40IDMuNiA4IDggOGgzNjhjNC40IDAgOC0zLjYgOC04di00OGMwLTQuNC0zLjYtOC04LTh6XCIgfSB9LCB7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnpcIiB9IH1dIH0sIFwibmFtZVwiOiBcIm1pbnVzLWNpcmNsZVwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0IGRlZmF1bHQgTWludXNDaXJjbGVPdXRsaW5lZDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1pbnVzQ2lyY2xlT3V0bGluZWRTdmcgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9lcy9hc24vTWludXNDaXJjbGVPdXRsaW5lZFwiO1xuaW1wb3J0IEFudGRJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCI7XG52YXIgTWludXNDaXJjbGVPdXRsaW5lZCA9IGZ1bmN0aW9uIE1pbnVzQ2lyY2xlT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZEljb24sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IE1pbnVzQ2lyY2xlT3V0bGluZWRTdmdcbiAgfSkpO1xufTtcblxuLyoqIVttaW51cy1jaXJjbGVdKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UQWlJR2hsYVdkb2REMGlOVEFpSUdacGJHdzlJaU5qWVdOaFkyRWlJSFpwWlhkQ2IzZzlJalkwSURZMElEZzVOaUE0T1RZaUlHWnZZM1Z6WVdKc1pUMGlabUZzYzJVaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUWTVOaUEwT0RCSU16STRZeTAwTGpRZ01DMDRJRE11TmkwNElEaDJORGhqTUNBMExqUWdNeTQySURnZ09DQTRhRE0yT0dNMExqUWdNQ0E0TFRNdU5pQTRMVGgyTFRRNFl6QXROQzQwTFRNdU5pMDRMVGd0T0hvaUlDOCtQSEJoZEdnZ1pEMGlUVFV4TWlBMk5FTXlOalF1TmlBMk5DQTJOQ0F5TmpRdU5pQTJOQ0ExTVRKek1qQXdMallnTkRRNElEUTBPQ0EwTkRnZ05EUTRMVEl3TUM0MklEUTBPQzAwTkRoVE56VTVMalFnTmpRZ05URXlJRFkwZW0wd0lEZ3lNR010TWpBMUxqUWdNQzB6TnpJdE1UWTJMall0TXpjeUxUTTNNbk14TmpZdU5pMHpOeklnTXpjeUxUTTNNaUF6TnpJZ01UWTJMallnTXpjeUlETTNNaTB4TmpZdU5pQXpOekl0TXpjeUlETTNNbm9pSUM4K1BDOXpkbWMrKSAqL1xudmFyIFJlZkljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihNaW51c0NpcmNsZU91dGxpbmVkKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlZkljb24uZGlzcGxheU5hbWUgPSAnTWludXNDaXJjbGVPdXRsaW5lZCc7XG59XG5leHBvcnQgZGVmYXVsdCBSZWZJY29uOyIsIi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxudmFyIFBsdXNDaXJjbGVPdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNjk2IDQ4MEg1NDRWMzI4YzAtNC40LTMuNi04LTgtOGgtNDhjLTQuNCAwLTggMy42LTggOHYxNTJIMzI4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4aDE1MnYxNTJjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY1NDRoMTUyYzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04elwiIH0gfSwgeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJwbHVzLWNpcmNsZVwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0IGRlZmF1bHQgUGx1c0NpcmNsZU91dGxpbmVkO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGx1c0NpcmNsZU91dGxpbmVkU3ZnIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvZXMvYXNuL1BsdXNDaXJjbGVPdXRsaW5lZFwiO1xuaW1wb3J0IEFudGRJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCI7XG52YXIgUGx1c0NpcmNsZU91dGxpbmVkID0gZnVuY3Rpb24gUGx1c0NpcmNsZU91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFudGRJY29uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBQbHVzQ2lyY2xlT3V0bGluZWRTdmdcbiAgfSkpO1xufTtcblxuLyoqIVtwbHVzLWNpcmNsZV0oZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRBaUlHaGxhV2RvZEQwaU5UQWlJR1pwYkd3OUlpTmpZV05oWTJFaUlIWnBaWGRDYjNnOUlqWTBJRFkwSURnNU5pQTRPVFlpSUdadlkzVnpZV0pzWlQwaVptRnNjMlVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRZNU5pQTBPREJJTlRRMFZqTXlPR013TFRRdU5DMHpMall0T0MwNExUaG9MVFE0WXkwMExqUWdNQzA0SURNdU5pMDRJRGgyTVRVeVNETXlPR010TkM0MElEQXRPQ0F6TGpZdE9DQTRkalE0WXpBZ05DNDBJRE11TmlBNElEZ2dPR2d4TlRKMk1UVXlZekFnTkM0MElETXVOaUE0SURnZ09HZzBPR00wTGpRZ01DQTRMVE11TmlBNExUaFdOVFEwYURFMU1tTTBMalFnTUNBNExUTXVOaUE0TFRoMkxUUTRZekF0TkM0MExUTXVOaTA0TFRndE9Ib2lJQzgrUEhCaGRHZ2daRDBpVFRVeE1pQTJORU15TmpRdU5pQTJOQ0EyTkNBeU5qUXVOaUEyTkNBMU1USnpNakF3TGpZZ05EUTRJRFEwT0NBME5EZ2dORFE0TFRJd01DNDJJRFEwT0MwME5EaFROelU1TGpRZ05qUWdOVEV5SURZMGVtMHdJRGd5TUdNdE1qQTFMalFnTUMwek56SXRNVFkyTGpZdE16Y3lMVE0zTW5NeE5qWXVOaTB6TnpJZ016Y3lMVE0zTWlBek56SWdNVFkyTGpZZ016Y3lJRE0zTWkweE5qWXVOaUF6TnpJdE16Y3lJRE0zTW5vaUlDOCtQQzl6ZG1jKykgKi9cbnZhciBSZWZJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoUGx1c0NpcmNsZU91dGxpbmVkKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlZkljb24uZGlzcGxheU5hbWUgPSAnUGx1c0NpcmNsZU91dGxpbmVkJztcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZkljb247IiwiaW1wb3J0IHsgX19yZWFkLCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0RldiBmcm9tICcuLi91dGlscy9pc0Rldic7XG52YXIgdXNlRHluYW1pY0xpc3QgPSBmdW5jdGlvbiAoaW5pdGlhbExpc3QpIHtcbiAgaWYgKGluaXRpYWxMaXN0ID09PSB2b2lkIDApIHtcbiAgICBpbml0aWFsTGlzdCA9IFtdO1xuICB9XG4gIHZhciBjb3VudGVyUmVmID0gdXNlUmVmKC0xKTtcbiAgdmFyIGtleUxpc3QgPSB1c2VSZWYoW10pO1xuICB2YXIgc2V0S2V5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY291bnRlclJlZi5jdXJyZW50ICs9IDE7XG4gICAga2V5TGlzdC5jdXJyZW50LnNwbGljZShpbmRleCwgMCwgY291bnRlclJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgaW5pdGlhbExpc3QuZm9yRWFjaChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgc2V0S2V5KGluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluaXRpYWxMaXN0O1xuICAgIH0pLCAyKSxcbiAgICBsaXN0ID0gX2FbMF0sXG4gICAgc2V0TGlzdCA9IF9hWzFdO1xuICB2YXIgcmVzZXRMaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0xpc3QpIHtcbiAgICBrZXlMaXN0LmN1cnJlbnQgPSBbXTtcbiAgICBzZXRMaXN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG5ld0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgc2V0S2V5KGluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld0xpc3Q7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIGluc2VydCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHZhciB0ZW1wID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGwpLCBmYWxzZSk7XG4gICAgICB0ZW1wLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICBzZXRLZXkoaW5kZXgpO1xuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIGdldEtleSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBrZXlMaXN0LmN1cnJlbnRbaW5kZXhdO1xuICB9LCBbXSk7XG4gIHZhciBnZXRJbmRleCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5TGlzdC5jdXJyZW50LmZpbmRJbmRleChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gZWxlID09PSBrZXk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIG1lcmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluZGV4LCBpdGVtcykge1xuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHZhciB0ZW1wID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGwpLCBmYWxzZSk7XG4gICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICAgIHNldEtleShpbmRleCArIGkpO1xuICAgICAgfSk7XG4gICAgICB0ZW1wLnNwbGljZS5hcHBseSh0ZW1wLCBfX3NwcmVhZEFycmF5KFtpbmRleCwgMF0sIF9fcmVhZChpdGVtcyksIGZhbHNlKSk7XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgcmVwbGFjZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHZhciB0ZW1wID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGwpLCBmYWxzZSk7XG4gICAgICB0ZW1wW2luZGV4XSA9IGl0ZW07XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgcmVtb3ZlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgc2V0TGlzdChmdW5jdGlvbiAobCkge1xuICAgICAgdmFyIHRlbXAgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobCksIGZhbHNlKTtcbiAgICAgIHRlbXAuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIC8vIHJlbW92ZSBrZXlzIGlmIG5lY2Vzc2FyeVxuICAgICAgdHJ5IHtcbiAgICAgICAga2V5TGlzdC5jdXJyZW50LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgYmF0Y2hSZW1vdmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5kZXhlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbmRleGVzKSkge1xuICAgICAgaWYgKGlzRGV2KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJgaW5kZXhlc2AgcGFyYW1ldGVyIG9mIGBiYXRjaFJlbW92ZWAgZnVuY3Rpb24gZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXksIGJ1dCBnb3QgXFxcIlwiLmNvbmNhdCh0eXBlb2YgaW5kZXhlcywgXCJcXFwiLlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaW5kZXhlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0TGlzdChmdW5jdGlvbiAocHJldkxpc3QpIHtcbiAgICAgIHZhciBuZXdLZXlMaXN0ID0gW107XG4gICAgICB2YXIgbmV3TGlzdCA9IHByZXZMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHNob3VsZEtlZXAgPSAhaW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XG4gICAgICAgIGlmIChzaG91bGRLZWVwKSB7XG4gICAgICAgICAgbmV3S2V5TGlzdC5wdXNoKGdldEtleShpbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaG91bGRLZWVwO1xuICAgICAgfSk7XG4gICAgICBrZXlMaXN0LmN1cnJlbnQgPSBuZXdLZXlMaXN0O1xuICAgICAgcmV0dXJuIG5ld0xpc3Q7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIG1vdmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAob2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgaWYgKG9sZEluZGV4ID09PSBuZXdJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRMaXN0KGZ1bmN0aW9uIChsKSB7XG4gICAgICB2YXIgbmV3TGlzdCA9IF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChsKSwgZmFsc2UpO1xuICAgICAgdmFyIHRlbXAgPSBuZXdMaXN0LmZpbHRlcihmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICE9PSBvbGRJbmRleDtcbiAgICAgIH0pO1xuICAgICAgdGVtcC5zcGxpY2UobmV3SW5kZXgsIDAsIG5ld0xpc3Rbb2xkSW5kZXhdKTtcbiAgICAgIC8vIG1vdmUga2V5cyBpZiBuZWNlc3NhcnlcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBrZXlUZW1wID0ga2V5TGlzdC5jdXJyZW50LmZpbHRlcihmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXggIT09IG9sZEluZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAga2V5VGVtcC5zcGxpY2UobmV3SW5kZXgsIDAsIGtleUxpc3QuY3VycmVudFtvbGRJbmRleF0pO1xuICAgICAgICBrZXlMaXN0LmN1cnJlbnQgPSBrZXlUZW1wO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHB1c2ggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaXRlbSkge1xuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHNldEtleShsLmxlbmd0aCk7XG4gICAgICByZXR1cm4gbC5jb25jYXQoW2l0ZW1dKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgcG9wID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIC8vIHJlbW92ZSBrZXlzIGlmIG5lY2Vzc2FyeVxuICAgIHRyeSB7XG4gICAgICBrZXlMaXN0LmN1cnJlbnQgPSBrZXlMaXN0LmN1cnJlbnQuc2xpY2UoMCwga2V5TGlzdC5jdXJyZW50Lmxlbmd0aCAtIDEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJldHVybiBsLnNsaWNlKDAsIGwubGVuZ3RoIC0gMSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHVuc2hpZnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaXRlbSkge1xuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHNldEtleSgwKTtcbiAgICAgIHJldHVybiBbaXRlbV0uY29uY2F0KGwpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBzaGlmdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyByZW1vdmUga2V5cyBpZiBuZWNlc3NhcnlcbiAgICB0cnkge1xuICAgICAga2V5TGlzdC5jdXJyZW50ID0ga2V5TGlzdC5jdXJyZW50LnNsaWNlKDEsIGtleUxpc3QuY3VycmVudC5sZW5ndGgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHNldExpc3QoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJldHVybiBsLnNsaWNlKDEsIGwubGVuZ3RoKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgc29ydExpc3QgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtXG4gICAgICB9O1xuICAgIH0pIC8vIGFkZCBpbmRleCBpbnRvIG9ialxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZ2V0SW5kZXgoYS5rZXkpIC0gZ2V0SW5kZXgoYi5rZXkpO1xuICAgIH0pIC8vIHNvcnQgYmFzZWQgb24gdGhlIGluZGV4IG9mIHRhYmxlXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICEhaXRlbS5pdGVtO1xuICAgIH0pIC8vIHJlbW92ZSB1bmRlZmluZWQocylcbiAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5pdGVtO1xuICAgIH0pO1xuICB9LFxuICAvLyByZXRyaXZlIHRoZSBkYXRhXG4gIFtdKTtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBsaXN0LFxuICAgIGluc2VydDogaW5zZXJ0LFxuICAgIG1lcmdlOiBtZXJnZSxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgIGJhdGNoUmVtb3ZlOiBiYXRjaFJlbW92ZSxcbiAgICBnZXRLZXk6IGdldEtleSxcbiAgICBnZXRJbmRleDogZ2V0SW5kZXgsXG4gICAgbW92ZTogbW92ZSxcbiAgICBwdXNoOiBwdXNoLFxuICAgIHBvcDogcG9wLFxuICAgIHVuc2hpZnQ6IHVuc2hpZnQsXG4gICAgc2hpZnQ6IHNoaWZ0LFxuICAgIHNvcnRMaXN0OiBzb3J0TGlzdCxcbiAgICByZXNldExpc3Q6IHJlc2V0TGlzdFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUR5bmFtaWNMaXN0OyIsImltcG9ydCB7IE1pbnVzQ2lyY2xlT3V0bGluZWQsIFBsdXNDaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgeyB1c2VEeW5hbWljTGlzdCB9IGZyb20gJ2Fob29rcydcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBEeW5hbWljSW5wdXRzID0gKHtcclxuICB2YWx1ZSA9IFtdLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHBhcmFtc1NjZW5lLFxyXG59OiB7XHJcbiAgdmFsdWU/OiBvYmplY3RbXVxyXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBvYmplY3RbXSkgPT4gdm9pZFxyXG4gIHBhcmFtc1NjZW5lPzogc3RyaW5nXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGxpc3QsIHJlbW92ZSwgZ2V0S2V5LCBpbnNlcnQsIHJlcGxhY2UsIHJlc2V0TGlzdCB9ID1cclxuICAgIHVzZUR5bmFtaWNMaXN0KHZhbHVlKVxyXG4gIGNvbnN0IG9uY2VSZWYgPSB1c2VSZWYodHJ1ZSlcclxuXHJcbiAgY29uc29sZS5sb2coJ2xpc3QnLCBsaXN0KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSWYgdmFsdWUgY2hhbmdlIG1hbnVhbCwgcmVzZXQgbGlzdFxyXG4gICAgaWYgKGlzRXF1YWwodmFsdWUsIGxpc3QpKSByZXR1cm5cclxuICAgIHJlc2V0TGlzdCh2YWx1ZSlcclxuICB9LCBbdmFsdWVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAob25jZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG9uY2VSZWYuY3VycmVudCA9IGZhbHNlXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ+S4jeaJp+ihjOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCcpXHJcbiAgICBvbkNoYW5nZT8uKGxpc3QpXHJcbiAgfSwgW2xpc3RdKVxyXG5cclxuICBjb25zdCBSb3cgPSAoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSA9PiAoXHJcbiAgICA8ZGl2IGtleT17Z2V0S2V5KGluZGV4KX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIG5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcmVwbGFjZShpbmRleCwgeyAuLi5pdGVtLCBpcHQxOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICB2YWx1ZT17aXRlbT8uaXB0MX1cclxuICAgICAgLz5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIG5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcmVwbGFjZShpbmRleCwgeyAuLi5pdGVtLCBpcHQyOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICB2YWx1ZT17aXRlbT8uaXB0Mn1cclxuICAgICAgLz5cclxuICAgICAge2xpc3QubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgPE1pbnVzQ2lyY2xlT3V0bGluZWRcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlKGluZGV4KVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8UGx1c0NpcmNsZU91dGxpbmVkXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGluc2VydChpbmRleCArIDEsIHt9KVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIHJldHVybiA8PntsaXN0Lm1hcCgoZWxlLCBpbmRleCkgPT4gUm93KGluZGV4LCBlbGUpKX08Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0lucHV0c1xyXG4iLCJpbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnQHVtaWpzL21heCdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSB9IGZyb20gJ2Fob29rcydcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU2VsZWN0LCBTcGFjZSB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEeW5hbWljSW5wdXRzIGZyb20gJy4vRm9ybUxpc3QnXHJcblxyXG5jb25zdCBBcHA6IEZDID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgY29uc3QgW2Zvcm1Ob2RlXSA9IEZvcm0udXNlRm9ybSgpXHJcbiAgY29uc29sZS5sb2coJ0FwcCcsICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHd4b2JqID0ge31cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgIC8oW14/Jj1dKyk9KFteJl0rKS9nLFxyXG4gICAgICAoXywgaywgdikgPT4gKHd4b2JqW2tdID0gdiksXHJcbiAgICApXHJcbiAgICBjb25zb2xlLmxvZygnd3hvYmonLCB3eG9iailcclxuICAgIGZvcm1Ob2RlLnNldEZpZWxkVmFsdWUoJ25hbWUnLCB3eG9iai5waG9uZSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgW3RlbXBTY2VuZSwgc2V0VGVtcFNjZW5lXSA9IHVzZVNlc3Npb25TdG9yYWdlU3RhdGUoJ3NjZW5lX2tleScsIHtcclxuICAgIGRlc2VyaWFsaXplcih2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm1Ob2RlLnNldEZpZWxkVmFsdWUoJ3NjZW5lJywgdGVtcFNjZW5lKVxyXG4gICAgc2V0VGVtcFNjZW5lKClcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZVVubG9hZCA9IChldmVudDogQmVmb3JlVW5sb2FkRXZlbnQpID0+IHtcclxuICAgICAgLy8g5Zyo6L+Z6YeM5Y+v5Lul5omn6KGM5LiA5Lqb5riF55CG5bel5L2cXHJcbiAgICAgIGNvbnNvbGUubG9nKCfpobXpnaLljbPlsIbliLfmlrDmiJblhbPpl60nKVxyXG5cclxuICAgICAgc2V0VGVtcFNjZW5lKGZvcm1Ob2RlLmdldEZpZWxkVmFsdWUoJ3NjZW5lJykpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGhhbmRsZUJlZm9yZVVubG9hZClcclxuXHJcbiAgICAvLyDmuIXnkIbkuovku7bnm5HlkKzlmahcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBoYW5kbGVCZWZvcmVVbmxvYWQpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZScsIGhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgfSwgW2hpc3RvcnkubG9jYXRpb24ucGF0aG5hbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm1Ob2RlfT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuYW1lXCIgbGFiZWw9XCLmtYvor5VcIj5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeeUqOaIt+Wnk+WQjVwiIGFsbG93Q2xlYXIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJzY2VuZVwiIGxhYmVsPVwi5Zy65pmvXCI+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn8J+agCB+IHZhbDonLCB2YWwpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0FJR0PlnLrmma8nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdhaWdjX2tleScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7IGxhYmVsOiAn6YCa55So5Zy65pmvJywgdmFsdWU6ICdjb21tb25fa2V5JyB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ0dFwiIGxhYmVsPVwidHRcIiBpbml0aWFsVmFsdWU9e1t7fV19PlxyXG4gICAgICAgICAgPER5bmFtaWNJbnB1dHNcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3YnLCB2KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8U3BhY2U+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZm9ybU5vZGUuZ2V0RmllbGRzVmFsdWUoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOehruWumlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy8gZm9ybU5vZGUucmVzZXRGaWVsZHMoKVxyXG4gICAgICAgICAgICBmb3JtTm9kZS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgdHQ6IFt7fV0sXHJcbiAgICAgICAgICAgICAgc2NlbmU6ICdhaWdjX2tleScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOmHjee9rlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvSnNvbicpXHJcbiAgICAgICAgICAgIHNldFRlbXBTY2VuZShmb3JtTm9kZS5nZXRGaWVsZFZhbHVlKCdzY2VuZScpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDot7PovaxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9TcGFjZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJuYW1lcyI6WyJNaW51c0NpcmNsZU91dGxpbmVkIiwiUGx1c0NpcmNsZU91dGxpbmVkIiwidXNlRHluYW1pY0xpc3QiLCJJbnB1dCIsImlzRXF1YWwiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJEeW5hbWljSW5wdXRzIiwiX3JlZiIsIl9yZWYkdmFsdWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGFyYW1zU2NlbmUiLCJfdXNlRHluYW1pY0xpc3QiLCJsaXN0IiwicmVtb3ZlIiwiZ2V0S2V5IiwiaW5zZXJ0IiwicmVwbGFjZSIsInJlc2V0TGlzdCIsIm9uY2VSZWYiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsIlJvdyIsImluZGV4IiwiaXRlbSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJ3aWR0aCIsInBsYWNlaG9sZGVyIiwiZSIsIl9vYmplY3RTcHJlYWQiLCJpcHQxIiwidGFyZ2V0IiwiaXB0MiIsImxlbmd0aCIsIm1hcmdpbkxlZnQiLCJvbkNsaWNrIiwibWFwIiwiZWxlIiwiaGlzdG9yeSIsInVzZVNlc3Npb25TdG9yYWdlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiU2VsZWN0IiwiU3BhY2UiLCJSZWFjdCIsIkFwcCIsInByb3BzIiwiX0Zvcm0kdXNlRm9ybSIsInVzZUZvcm0iLCJfRm9ybSR1c2VGb3JtMiIsIl9zbGljZWRUb0FycmF5IiwiZm9ybU5vZGUiLCJ3eG9iaiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIl8iLCJrIiwidiIsInNldEZpZWxkVmFsdWUiLCJwaG9uZSIsIl91c2VTZXNzaW9uU3RvcmFnZVN0YSIsImRlc2VyaWFsaXplciIsIkpTT04iLCJwYXJzZSIsIl91c2VTZXNzaW9uU3RvcmFnZVN0YTIiLCJ0ZW1wU2NlbmUiLCJzZXRUZW1wU2NlbmUiLCJoYW5kbGVCZWZvcmVVbmxvYWQiLCJldmVudCIsImdldEZpZWxkVmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhdGhuYW1lIiwiY2xhc3NOYW1lIiwiZm9ybSIsIkl0ZW0iLCJuYW1lIiwibGFiZWwiLCJhbGxvd0NsZWFyIiwidmFsIiwib3B0aW9ucyIsImluaXRpYWxWYWx1ZSIsImRhdGEiLCJnZXRGaWVsZHNWYWx1ZSIsInNldEZpZWxkc1ZhbHVlIiwidHQiLCJzY2VuZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///65802
`)},78957:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ space; }
});

// UNUSED EXPORTS: SpaceContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/gapSize.js
function isPresetSize(size) {
  return ['small', 'middle', 'large'].includes(size);
}
function isValidGapNumber(size) {
  if (!size) {
    // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
    return false;
  }
  return typeof size === 'number' && !Number.isNaN(size);
}
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/context.js

const SpaceContext = /*#__PURE__*/react.createContext({
  latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
;// CONCATENATED MODULE: ./node_modules/antd/es/space/Item.js
"use client";



const Item = _ref => {
  let {
    className,
    index,
    children,
    split,
    style
  } = _ref;
  const {
    latestIndex
  } = react.useContext(SpaceContext);
  if (children === null || children === undefined) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/react.createElement("span", {
    className: \`\${className}-split\`
  }, split));
};
/* harmony default export */ var space_Item = (Item);
// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(51916);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const InternalSpace = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a, _b, _c;
  const {
    getPrefixCls,
    space,
    direction: directionConfig
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      size = (_a = space === null || space === void 0 ? void 0 : space.size) !== null && _a !== void 0 ? _a : 'small',
      align,
      className,
      rootClassName,
      children,
      direction = 'horizontal',
      prefixCls: customizePrefixCls,
      split,
      style,
      wrap = false,
      classNames: customClassNames,
      styles
    } = props,
    otherProps = __rest(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = isPresetSize(verticalSize);
  const isPresetHorizontalSize = isPresetSize(horizontalSize);
  const isValidVerticalSize = isValidGapNumber(verticalSize);
  const isValidHorizontalSize = isValidGapNumber(horizontalSize);
  const childNodes = (0,toArray/* default */.Z)(children, {
    keepEmpty: true
  });
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,space_style/* default */.Z)(prefixCls);
  const cls = classnames_default()(prefixCls, space === null || space === void 0 ? void 0 : space.className, hashId, \`\${prefixCls}-\${direction}\`, {
    [\`\${prefixCls}-rtl\`]: directionConfig === 'rtl',
    [\`\${prefixCls}-align-\${mergedAlign}\`]: mergedAlign,
    [\`\${prefixCls}-gap-row-\${verticalSize}\`]: isPresetVerticalSize,
    [\`\${prefixCls}-gap-col-\${horizontalSize}\`]: isPresetHorizontalSize
  }, className, rootClassName, cssVarCls);
  const itemClassName = classnames_default()(\`\${prefixCls}-item\`, (_b = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _b !== void 0 ? _b : (_c = space === null || space === void 0 ? void 0 : space.classNames) === null || _c === void 0 ? void 0 : _c.item);
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    var _a, _b;
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = (child === null || child === void 0 ? void 0 : child.key) || \`\${itemClassName}-\${i}\`;
    return /*#__PURE__*/react.createElement(space_Item, {
      className: itemClassName,
      key: key,
      index: i,
      split: split,
      style: (_a = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.styles) === null || _b === void 0 ? void 0 : _b.item
    }, child);
  });
  const spaceContext = react.useMemo(() => ({
    latestIndex
  }), [latestIndex]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    ref: ref,
    className: cls,
    style: Object.assign(Object.assign(Object.assign({}, gapStyle), space === null || space === void 0 ? void 0 : space.style), style)
  }, otherProps), /*#__PURE__*/react.createElement(SpaceContextProvider, {
    value: spaceContext
  }, nodes)));
});
const Space = InternalSpace;
Space.Compact = Compact/* default */.ZP;
if (false) {}
/* harmony default export */ var space = (Space);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzg5NTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ1QwQjtBQUNuQixrQ0FBa0MsbUJBQW1CO0FBQzVEO0FBQ0EsQ0FBQztBQUNNLG1EOztBQ0pQOztBQUUrQjtBQUNVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CLENBQUMsY0FBYyxxQkFBcUIsbUJBQW1CO0FBQ2hHO0FBQ0E7QUFDQSxHQUFHLDBEQUEwRCxtQkFBbUI7QUFDaEYsa0JBQWtCLFVBQVU7QUFDNUIsR0FBRztBQUNIO0FBQ0EsK0NBQWUsSUFBSSxFOzs7O0FDekJuQjs7QUFFQSxhQUFhLFNBQUksSUFBSSxTQUFJO0FBQ3pCO0FBQ0E7QUFDQSw0SEFBNEgsY0FBYztBQUMxSTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUNLO0FBQ2M7QUFDZ0I7QUFDZjtBQUNuQjtBQUNpQjtBQUN2QjtBQUNLO0FBQ1U7QUFDekMsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLGdCQUFnQixDQUFDLDZCQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQyxpQ0FBaUMsWUFBWTtBQUM3Qyw4QkFBOEIsZ0JBQWdCO0FBQzlDLGdDQUFnQyxnQkFBZ0I7QUFDaEQscUJBQXFCLDBCQUFPO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwwQ0FBMEMsOEJBQVE7QUFDbEQsY0FBYyxvQkFBVSxzRkFBc0YsVUFBVSxHQUFHLFVBQVU7QUFDckksUUFBUSxVQUFVO0FBQ2xCLFFBQVEsVUFBVSxTQUFTLFlBQVk7QUFDdkMsUUFBUSxVQUFVLFdBQVcsYUFBYTtBQUMxQyxRQUFRLFVBQVUsV0FBVyxlQUFlO0FBQzVDLEdBQUc7QUFDSCx3QkFBd0Isb0JBQVUsSUFBSSxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGNBQWMsR0FBRyxFQUFFO0FBQ25HLHdCQUF3QixtQkFBbUIsQ0FBQyxVQUFJO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsR0FBRyw0QkFBNEIsbUJBQW1CLENBQUMsb0JBQW9CO0FBQ3ZFO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLGdCQUFnQix1QkFBTztBQUN2QixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCwwQ0FBZSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvZ2FwU2l6ZS5qcz8yMzBhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NwYWNlL2NvbnRleHQuanM/MDhmNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zcGFjZS9JdGVtLmpzPzVkNmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3BhY2UvaW5kZXguanM/YzYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNQcmVzZXRTaXplKHNpemUpIHtcbiAgcmV0dXJuIFsnc21hbGwnLCAnbWlkZGxlJywgJ2xhcmdlJ10uaW5jbHVkZXMoc2l6ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEdhcE51bWJlcihzaXplKSB7XG4gIGlmICghc2l6ZSkge1xuICAgIC8vIFRoZSBjYXNlIG9mIHNpemUgPSAwIGlzIGRlbGliZXJhdGVseSBleGNsdWRlZCBoZXJlLCBiZWNhdXNlIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBnYXAgYXR0cmlidXRlIGluIENTUyBpcyAwLCBzbyBpZiB0aGUgdXNlciBwYXNzZXMgMCBpbiwgd2UgY2FuIGRpcmVjdGx5IGlnbm9yZSBpdC5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKHNpemUpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgU3BhY2VDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBsYXRlc3RJbmRleDogMFxufSk7XG5leHBvcnQgY29uc3QgU3BhY2VDb250ZXh0UHJvdmlkZXIgPSBTcGFjZUNvbnRleHQuUHJvdmlkZXI7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwYWNlQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5jb25zdCBJdGVtID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGluZGV4LFxuICAgIGNoaWxkcmVuLFxuICAgIHNwbGl0LFxuICAgIHN0eWxlXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgbGF0ZXN0SW5kZXhcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoU3BhY2VDb250ZXh0KTtcbiAgaWYgKGNoaWxkcmVuID09PSBudWxsIHx8IGNoaWxkcmVuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pLCBpbmRleCA8IGxhdGVzdEluZGV4ICYmIHNwbGl0ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBgJHtjbGFzc05hbWV9LXNwbGl0YFxuICB9LCBzcGxpdCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07IiwiXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCB7IGlzUHJlc2V0U2l6ZSwgaXNWYWxpZEdhcE51bWJlciB9IGZyb20gJy4uL191dGlsL2dhcFNpemUnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgQ29tcGFjdCBmcm9tICcuL0NvbXBhY3QnO1xuaW1wb3J0IHsgU3BhY2VDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmV4cG9ydCB7IFNwYWNlQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5jb25zdCBJbnRlcm5hbFNwYWNlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIF9hLCBfYiwgX2M7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHMsXG4gICAgc3BhY2UsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25Db25maWdcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICAgIHNpemUgPSAoX2EgPSBzcGFjZSA9PT0gbnVsbCB8fCBzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3BhY2Uuc2l6ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ3NtYWxsJyxcbiAgICAgIGFsaWduLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcm9vdENsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnLFxuICAgICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgICBzcGxpdCxcbiAgICAgIHN0eWxlLFxuICAgICAgd3JhcCA9IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lczogY3VzdG9tQ2xhc3NOYW1lcyxcbiAgICAgIHN0eWxlc1xuICAgIH0gPSBwcm9wcyxcbiAgICBvdGhlclByb3BzID0gX19yZXN0KHByb3BzLCBbXCJzaXplXCIsIFwiYWxpZ25cIiwgXCJjbGFzc05hbWVcIiwgXCJyb290Q2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJkaXJlY3Rpb25cIiwgXCJwcmVmaXhDbHNcIiwgXCJzcGxpdFwiLCBcInN0eWxlXCIsIFwid3JhcFwiLCBcImNsYXNzTmFtZXNcIiwgXCJzdHlsZXNcIl0pO1xuICBjb25zdCBbaG9yaXpvbnRhbFNpemUsIHZlcnRpY2FsU2l6ZV0gPSBBcnJheS5pc0FycmF5KHNpemUpID8gc2l6ZSA6IFtzaXplLCBzaXplXTtcbiAgY29uc3QgaXNQcmVzZXRWZXJ0aWNhbFNpemUgPSBpc1ByZXNldFNpemUodmVydGljYWxTaXplKTtcbiAgY29uc3QgaXNQcmVzZXRIb3Jpem9udGFsU2l6ZSA9IGlzUHJlc2V0U2l6ZShob3Jpem9udGFsU2l6ZSk7XG4gIGNvbnN0IGlzVmFsaWRWZXJ0aWNhbFNpemUgPSBpc1ZhbGlkR2FwTnVtYmVyKHZlcnRpY2FsU2l6ZSk7XG4gIGNvbnN0IGlzVmFsaWRIb3Jpem9udGFsU2l6ZSA9IGlzVmFsaWRHYXBOdW1iZXIoaG9yaXpvbnRhbFNpemUpO1xuICBjb25zdCBjaGlsZE5vZGVzID0gdG9BcnJheShjaGlsZHJlbiwge1xuICAgIGtlZXBFbXB0eTogdHJ1ZVxuICB9KTtcbiAgY29uc3QgbWVyZ2VkQWxpZ24gPSBhbGlnbiA9PT0gdW5kZWZpbmVkICYmIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ2NlbnRlcicgOiBhbGlnbjtcbiAgY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdzcGFjZScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIGNvbnN0IFt3cmFwQ1NTVmFyLCBoYXNoSWQsIGNzc1ZhckNsc10gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBjb25zdCBjbHMgPSBjbGFzc05hbWVzKHByZWZpeENscywgc3BhY2UgPT09IG51bGwgfHwgc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNwYWNlLmNsYXNzTmFtZSwgaGFzaElkLCBgJHtwcmVmaXhDbHN9LSR7ZGlyZWN0aW9ufWAsIHtcbiAgICBbYCR7cHJlZml4Q2xzfS1ydGxgXTogZGlyZWN0aW9uQ29uZmlnID09PSAncnRsJyxcbiAgICBbYCR7cHJlZml4Q2xzfS1hbGlnbi0ke21lcmdlZEFsaWdufWBdOiBtZXJnZWRBbGlnbixcbiAgICBbYCR7cHJlZml4Q2xzfS1nYXAtcm93LSR7dmVydGljYWxTaXplfWBdOiBpc1ByZXNldFZlcnRpY2FsU2l6ZSxcbiAgICBbYCR7cHJlZml4Q2xzfS1nYXAtY29sLSR7aG9yaXpvbnRhbFNpemV9YF06IGlzUHJlc2V0SG9yaXpvbnRhbFNpemVcbiAgfSwgY2xhc3NOYW1lLCByb290Q2xhc3NOYW1lLCBjc3NWYXJDbHMpO1xuICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWl0ZW1gLCAoX2IgPSBjdXN0b21DbGFzc05hbWVzID09PSBudWxsIHx8IGN1c3RvbUNsYXNzTmFtZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1c3RvbUNsYXNzTmFtZXMuaXRlbSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKF9jID0gc3BhY2UgPT09IG51bGwgfHwgc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNwYWNlLmNsYXNzTmFtZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pdGVtKTtcbiAgLy8gQ2FsY3VsYXRlIGxhdGVzdCBvbmVcbiAgbGV0IGxhdGVzdEluZGV4ID0gMDtcbiAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGQsIGkpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChjaGlsZCAhPT0gbnVsbCAmJiBjaGlsZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYXRlc3RJbmRleCA9IGk7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGQua2V5KSB8fCBgJHtpdGVtQ2xhc3NOYW1lfS0ke2l9YDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwge1xuICAgICAgY2xhc3NOYW1lOiBpdGVtQ2xhc3NOYW1lLFxuICAgICAga2V5OiBrZXksXG4gICAgICBpbmRleDogaSxcbiAgICAgIHNwbGl0OiBzcGxpdCxcbiAgICAgIHN0eWxlOiAoX2EgPSBzdHlsZXMgPT09IG51bGwgfHwgc3R5bGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZXMuaXRlbSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKF9iID0gc3BhY2UgPT09IG51bGwgfHwgc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNwYWNlLnN0eWxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLml0ZW1cbiAgICB9LCBjaGlsZCk7XG4gIH0pO1xuICBjb25zdCBzcGFjZUNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgbGF0ZXN0SW5kZXhcbiAgfSksIFtsYXRlc3RJbmRleF0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBnYXBTdHlsZSA9IHt9O1xuICBpZiAod3JhcCkge1xuICAgIGdhcFN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xuICB9XG4gIGlmICghaXNQcmVzZXRIb3Jpem9udGFsU2l6ZSAmJiBpc1ZhbGlkSG9yaXpvbnRhbFNpemUpIHtcbiAgICBnYXBTdHlsZS5jb2x1bW5HYXAgPSBob3Jpem9udGFsU2l6ZTtcbiAgfVxuICBpZiAoIWlzUHJlc2V0VmVydGljYWxTaXplICYmIGlzVmFsaWRWZXJ0aWNhbFNpemUpIHtcbiAgICBnYXBTdHlsZS5yb3dHYXAgPSB2ZXJ0aWNhbFNpemU7XG4gIH1cbiAgcmV0dXJuIHdyYXBDU1NWYXIoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnYXBTdHlsZSksIHNwYWNlID09PSBudWxsIHx8IHNwYWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzcGFjZS5zdHlsZSksIHN0eWxlKVxuICB9LCBvdGhlclByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VDb250ZXh0UHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3BhY2VDb250ZXh0XG4gIH0sIG5vZGVzKSkpO1xufSk7XG5jb25zdCBTcGFjZSA9IEludGVybmFsU3BhY2U7XG5TcGFjZS5Db21wYWN0ID0gQ29tcGFjdDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFNwYWNlLmRpc3BsYXlOYW1lID0gJ1NwYWNlJztcbn1cbmV4cG9ydCBkZWZhdWx0IFNwYWNlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///78957
`)}}]);
