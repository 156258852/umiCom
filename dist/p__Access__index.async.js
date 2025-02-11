(self.webpackChunk=self.webpackChunk||[]).push([[755],{14890:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Access; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(64599);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
;// CONCATENATED MODULE: ./src/lib/useEvent/EventCenter.ts


var allEvent = {};
function EventCenter_once(options) {
  addEvent(_objectSpread(_objectSpread({}, options), {}, {
    exeCount: 1
  }));
}
function EventCenter_on(options) {
  addEvent(_objectSpread(_objectSpread({}, options), {}, {
    exeCount: -1
  }));
}
function addEvent(options) {
  var name = options.name,
    handler = options.handler,
    exeCount = options.exeCount;
  allEvent[name] = allEvent[name] || [];
  var events = allEvent[name];
  var _iterator = _createForOfIteratorHelper(events),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var event = _step.value;
      // \u9632\u6B62\u91CD\u590D\u6CE8\u518C
      if (event.handler === handler) return;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  events.push({
    name: name,
    handler: handler,
    exeCount: exeCount
  });
}
function EventCenter_off(name, handler) {
  var events = allEvent[name];
  for (var i = 0; i < events.length; i++) {
    var t = events[i];
    if (t.handler === handler) {
      events.splice(i, 1);
      break;
    }
  }
}
function dispatch(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var events = allEvent[name] || [];
  var _iterator2 = _createForOfIteratorHelper(events),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var event = _step2.value;
      var handler = event.handler;
      handler && handler(data);
    }

    // \u79FB\u9664\u4E00\u6B21\u6027\u4E8B\u4EF6
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  for (var i = 0; i < events.length; i++) {
    var e = events[i];
    var exeCount = e.exeCount;
    if (exeCount === 1) {
      // eslint-disable-line
      events.splice(i, 1);
      i--;
    }
  }
}

;// CONCATENATED MODULE: ./src/lib/useEvent/useEvent.ts


var useEvent = function useEvent(name, handler) {
  var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  useEffect(function () {
    if (!handler) {
      return;
    }
    isOnce ? once({
      name: name,
      handler: handler
    }) : on({
      name: name,
      handler: handler
    });
    return function () {
      off(name, handler);
    };
  }, [name, handler]);
};
/* harmony default export */ var useEvent_useEvent = ((/* unused pure expression or super */ null && (useEvent)));
;// CONCATENATED MODULE: ./src/lib/useEvent/index.ts



;// CONCATENATED MODULE: ./src/lib/usePoll/usePoll.ts

function usePoll(service, options) {
  var timer = (0,react.useRef)(0);
  var _ref = options || {},
    refreshInterval = _ref.refreshInterval,
    refreshTimeout = _ref.refreshTimeout;
  var delay = refreshInterval || refreshTimeout;
  var clear = function clear() {
    return clearTimeout(timer.current);
  };
  var polling = function polling() {
    clear();
    timer.current = setTimeout(function () {
      service();
      refreshInterval && polling();
    }, delay);
  };
  (0,react.useEffect)(function () {
    delay && polling();
    return clear;
  }, [delay]);
}
;// CONCATENATED MODULE: ./src/lib/usePoll/index.ts

/* harmony default export */ var lib_usePoll = (usePoll);
;// CONCATENATED MODULE: ./src/lib/useRequest/useMountedState.ts

function useMountedState() {
  var mountedRef = (0,react.useRef)(false);
  var get = (0,react.useCallback)(function () {
    return mountedRef.current;
  }, []);
  (0,react.useEffect)(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  });
  return get;
}
;// CONCATENATED MODULE: ./src/lib/useRequest/useAsync.ts




function useAsync(service, initialState, options) {
  var lastCallId = (0,react.useRef)(0);
  var isMounted = useMountedState();
  var _useState = (0,react.useState)(initialState),
    _useState2 = slicedToArray_default()(_useState, 2),
    state = _useState2[0],
    set = _useState2[1];
  var _ref = options || {},
    _ref$deps = _ref.deps,
    deps = _ref$deps === void 0 ? [] : _ref$deps,
    _ref$defaultParams = _ref.defaultParams,
    defaultParams = _ref$defaultParams === void 0 ? {} : _ref$defaultParams;
  var paramRef = (0,react.useRef)({});
  var callback = (0,react.useCallback)(function () {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callId = ++lastCallId.current;
    set(function (prevState) {
      return objectSpread2_default()(objectSpread2_default()({}, prevState), {}, {
        loading: true
      });
    });
    paramRef.current = objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, defaultParams), paramRef.current), p);
    return service(paramRef.current).then(function (data) {
      isMounted() && callId === lastCallId.current && set({
        data: data,
        loading: false
      });
      return data;
    }, function (error) {
      isMounted() && callId === lastCallId.current && set({
        error: error,
        loading: false
      });
      return Promise.reject(error);
    });
  }, deps);
  return [state, callback];
}
;// CONCATENATED MODULE: ./src/lib/useRequest/utils.ts
/**\r
 * \u83B7\u53D6\u5206\u9875\u4FE1\u606F\r
 * @param param\r
 */
function getPagination(_ref) {
  var _data$PageInfo, _data$PageInfo2, _data$PageInfo3, _data$PageInfo4, _data$PageInfo5;
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? {} : _ref$data,
    updater = _ref.updater,
    paginationFormater = _ref.paginationFormater;
  if (paginationFormater && typeof paginationFormater === 'function') {
    return paginationFormater({
      data: data,
      updater: updater
    });
  }
  return {
    total: ((_data$PageInfo = data.PageInfo) === null || _data$PageInfo === void 0 ? void 0 : _data$PageInfo.TotalCount) || ((_data$PageInfo2 = data.PageInfo) === null || _data$PageInfo2 === void 0 ? void 0 : _data$PageInfo2.Total) || data.TotalCount || data.Total || 0,
    current: ((_data$PageInfo3 = data.PageInfo) === null || _data$PageInfo3 === void 0 ? void 0 : _data$PageInfo3.PageNumber) || ((_data$PageInfo4 = data.PageInfo) === null || _data$PageInfo4 === void 0 ? void 0 : _data$PageInfo4.CurrentPage) || data.PageNumber || data.CurrentPage || 0,
    pageSize: ((_data$PageInfo5 = data.PageInfo) === null || _data$PageInfo5 === void 0 ? void 0 : _data$PageInfo5.PageSize) || data.PageSize || 10,
    // PageSize\u5982\u679C\u6709\u53D8\u5316 \u5E94\u8BE5\u4F7F\u7528\u53D8\u5316\u540E\u7684\u503C
    onChange: function onChange(page) {
      updater({
        CurrentPage: page,
        PageSize: this.pageSize
      });
    },
    onPageSizeChange: function onPageSizeChange(size) {
      updater({
        PageSize: size,
        CurrentPage: 1
      });
    }
  };
}
;// CONCATENATED MODULE: ./src/lib/useRequest/useRequest.ts






function useRequest_useRequest(service, options) {
  var _ref = options || {},
    paginated = _ref.paginated,
    manual = _ref.manual,
    paginationFormater = _ref.paginationFormater,
    refreshInterval = _ref.refreshInterval,
    refreshTimeout = _ref.refreshTimeout;
  var _useAsync = useAsync(service, {
      loading: !manual
    }, options),
    _useAsync2 = slicedToArray_default()(_useAsync, 2),
    state = _useAsync2[0],
    callback = _useAsync2[1];
  var pagination;
  // \u5F00\u542F\u5206\u9875\u6A21\u5F0F\uFF0C\u83B7\u53D6\u5206\u9875\u4FE1\u606F
  if (paginated) {
    pagination = getPagination({
      data: state.data,
      updater: callback,
      paginationFormater: paginationFormater
    });
  }

  // \u5F00\u542F\u8F6E\u8BAD
  lib_usePoll(callback, {
    refreshInterval: refreshInterval,
    refreshTimeout: refreshTimeout
  });
  (0,react.useEffect)(function () {
    // \u5F00\u542F\u4E86\u624B\u52A8\u6A21\u5F0F\uFF0C\u4E0D\u6267\u884C
    if (manual) return;
    callback();
  }, [callback]);
  return objectSpread2_default()(objectSpread2_default()({}, state), {}, {
    refresh: callback,
    pagination: pagination
  });
}
;// CONCATENATED MODULE: ./src/lib/useRequest/index.ts

/* harmony default export */ var lib_useRequest = (useRequest_useRequest);
;// CONCATENATED MODULE: ./src/lib/useToggle/useToggle.ts


// eslint-disable-next-line no-unused-vars

var toggleReducer = function toggleReducer(state, nextValue) {
  return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle_useToggle = function useToggle(initialValue) {
  return useReducer(toggleReducer, initialValue);
};
/* harmony default export */ var lib_useToggle_useToggle = ((/* unused pure expression or super */ null && (useToggle_useToggle)));
;// CONCATENATED MODULE: ./src/lib/useToggle/index.ts

/* harmony default export */ var lib_useToggle = ((/* unused pure expression or super */ null && (useToggle)));
;// CONCATENATED MODULE: ./src/lib/index.ts





// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(28036);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Access/index.tsx







// \u5B9A\u4E49 Service \u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u7C7B\u578B

var data = Array(120).fill('').map(function (_, index) {
  return {
    id: index,
    name: "name".concat(index)
  };
});
var Service = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params) {
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            setTimeout(function () {
              console.log('params.current', params.current);
              resolve({
                data: data.slice((params.current - 1) * params.pageSize, params.current * params.pageSize),
                currentPage: params.current,
                pageSize: params.pageSize,
                success: true
              });
            }, 1000);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Service(_x) {
    return _ref.apply(this, arguments);
  };
}();
var useGetList = function useGetList() {
  var _useRequest = useRequest(Service, {
      defaultParams: {
        pageSize: 10,
        current: 1
      },
      paginated: true
    }),
    data = _useRequest.data,
    pagination = _useRequest.pagination,
    refresh = _useRequest.refresh;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  useEffect(function () {
    setList(data);
  }, [data]);
  var clearList = function clearList() {
    setList([]);
  };
  return {
    list: list,
    pagination: pagination,
    refresh: refresh,
    clearList: clearList
  };
};
var AccessPage = function AccessPage() {
  var count = (0,react.useRef)(1);

  // \u4F7F\u7528\u6CDB\u578B\u6307\u5B9A Service \u51FD\u6570\u7684\u8FD4\u56DE\u7C7B\u578B
  var _useRequest2 = lib_useRequest(Service, {
      defaultParams: {
        pageSize: 10,
        current: 1
      },
      paginated: true
    }),
    data = _useRequest2.data,
    pagination = _useRequest2.pagination,
    refresh = _useRequest2.refresh;

  // console.log('pagination', pagination)
  console.log('data', data);
  (0,react.useEffect)(function () {
    var intervalId = setInterval(function () {
      refresh();
    }, 4000);
    return function () {
      return clearInterval(intervalId);
    }; // \u6E05\u9664\u5B9A\u65F6\u5668\u4EE5\u907F\u514D\u5185\u5B58\u6CC4\u6F0F
  }, [refresh]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      onClick: function onClick() {
        count.current++;
        refresh({
          current: count.current
        });
      },
      children: "\\u6D4B\\u8BD5"
    })
  });
};
/* harmony default export */ var Access = (AccessPage);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFNO0lBQ2QsSUFBTXFILFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDbkMvQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDUixPQUFPO01BQUEsT0FBTWdELGFBQWEsQ0FBQ0YsVUFBVSxDQUFDO0lBQUEsR0FBQztFQUN6QyxDQUFDLEVBQUUsQ0FBQzlDLE9BQU8sQ0FBQyxDQUFDO0VBRWIsb0JBQ0VTLG1CQUFBO0lBQUF3QyxRQUFBLGVBQ0V4QyxtQkFBQSxDQUFDRix5QkFBTTtNQUNMMkMsT0FBTyxFQUFFLFNBQUFBLFFBQUEsRUFBTTtRQUNiTixLQUFLLENBQUN0RyxPQUFPLEVBQUU7UUFDZjBELE9BQU8sQ0FBQztVQUNOMUQsT0FBTyxFQUFFc0csS0FBSyxDQUFDdEc7UUFDakIsQ0FBQyxDQUFDO01BQ0osQ0FBRTtNQUFBMkcsUUFBQSxFQUNIO0lBRUQsQ0FBUTtFQUFDLENBQ04sQ0FBQztBQUVWLENBQUM7QUFFRCwyQ0FBZU4sVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvdXNlRXZlbnQvRXZlbnRDZW50ZXIudHM/NjUyMCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3VzZUV2ZW50L3VzZUV2ZW50LnRzPzcyZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91c2VFdmVudC9pbmRleC50cz85Yjg5Iiwid2VicGFjazovLy8uL3NyYy9saWIvdXNlUG9sbC91c2VQb2xsLnRzPzhmM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91c2VQb2xsL2luZGV4LnRzP2RhMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91c2VSZXF1ZXN0L3VzZU1vdW50ZWRTdGF0ZS50cz85MDA4Iiwid2VicGFjazovLy8uL3NyYy9saWIvdXNlUmVxdWVzdC91c2VBc3luYy50cz9lNWEyIiwid2VicGFjazovLy8uL3NyYy9saWIvdXNlUmVxdWVzdC91dGlscy50cz8zOWI1Iiwid2VicGFjazovLy8uL3NyYy9saWIvdXNlUmVxdWVzdC91c2VSZXF1ZXN0LnRzPzFmNzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91c2VSZXF1ZXN0L2luZGV4LnRzP2UzYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91c2VUb2dnbGUvdXNlVG9nZ2xlLnRzPzZiZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91c2VUb2dnbGUvaW5kZXgudHM/YTVlOCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzPzNkZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FjY2Vzcy9pbmRleC50c3g/YzlkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudHlwZSBFdmVudE5hbWVUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuaW50ZXJmYWNlIEV2ZW50T3B0aW9ucyB7XHJcbiAgLyoqIOS6i+S7tuWQjSAqL1xyXG4gIG5hbWU6IEV2ZW50TmFtZVR5cGU7XHJcbiAgLyoqIOWkhOeQhuWHveaVsCAqL1xyXG4gIGhhbmRsZXI6IChkYXRhOiBhbnkpID0+IHZvaWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAvKiog5omn6KGM5qyh5pWwICovXHJcbiAgZXhlQ291bnQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGFsbEV2ZW50OiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudE9wdGlvbnNbXSB9ID0ge307XHJcblxyXG5mdW5jdGlvbiBvbmNlKG9wdGlvbnM6IEV2ZW50T3B0aW9ucyk6IHZvaWQge1xyXG4gIGFkZEV2ZW50KHsgLi4ub3B0aW9ucywgZXhlQ291bnQ6IDEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uKG9wdGlvbnM6IEV2ZW50T3B0aW9ucyk6IHZvaWQge1xyXG4gIGFkZEV2ZW50KHsgLi4ub3B0aW9ucywgZXhlQ291bnQ6IC0xIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChvcHRpb25zOiBFdmVudE9wdGlvbnMpOiB2b2lkIHtcclxuICBjb25zdCB7IG5hbWUsIGhhbmRsZXIsIGV4ZUNvdW50IH0gPSBvcHRpb25zO1xyXG4gIGFsbEV2ZW50W25hbWVdID0gYWxsRXZlbnRbbmFtZV0gfHwgW107XHJcbiAgY29uc3QgZXZlbnRzID0gYWxsRXZlbnRbbmFtZV07XHJcblxyXG4gIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XHJcbiAgICAvLyDpmLLmraLph43lpI3ms6jlhoxcclxuICAgIGlmIChldmVudC5oYW5kbGVyID09PSBoYW5kbGVyKSByZXR1cm47XHJcbiAgfVxyXG5cclxuICBldmVudHMucHVzaCh7IG5hbWUsIGhhbmRsZXIsIGV4ZUNvdW50IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZmY8VCBleHRlbmRzIEV2ZW50T3B0aW9uc1snaGFuZGxlciddPihuYW1lOiBFdmVudE5hbWVUeXBlLCBoYW5kbGVyOiBUKTogdm9pZCB7XHJcbiAgY29uc3QgZXZlbnRzID0gYWxsRXZlbnRbbmFtZV07XHJcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdCA9IGV2ZW50c1tpXTtcclxuICAgIGlmICh0LmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcclxuICAgICAgZXZlbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwYXRjaChuYW1lOiBFdmVudE5hbWVUeXBlLCBkYXRhOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgY29uc3QgZXZlbnRzID0gYWxsRXZlbnRbbmFtZV0gfHwgW107XHJcblxyXG4gIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XHJcbiAgICBjb25zdCB7IGhhbmRsZXIgfSA9IGV2ZW50O1xyXG4gICAgaGFuZGxlciAmJiBoYW5kbGVyKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy8g56e76Zmk5LiA5qyh5oCn5LqL5Lu2XHJcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZSA9IGV2ZW50c1tpXTtcclxuICAgIGNvbnN0IHsgZXhlQ291bnQgfSA9IGU7XHJcbiAgICBpZiAoZXhlQ291bnQgPT09IDEpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICBldmVudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIG9uLFxyXG4gIG9uY2UsXHJcbiAgb2ZmLFxyXG4gIEV2ZW50TmFtZVR5cGUsXHJcbiAgZGlzcGF0Y2gsXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgb24sIG9uY2UsIG9mZiwgRXZlbnROYW1lVHlwZSB9IGZyb20gJy4vRXZlbnRDZW50ZXInO1xyXG5cclxuY29uc3QgdXNlRXZlbnQgPSAoXHJcbiAgbmFtZTogRXZlbnROYW1lVHlwZSxcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBoYW5kbGVyOiAoZGF0YTogYW55KSA9PiB2b2lkLFxyXG4gIGlzT25jZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFoYW5kbGVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpc09uY2UgPyBvbmNlKHsgbmFtZSwgaGFuZGxlciB9KSA6IG9uKHsgbmFtZSwgaGFuZGxlciB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvZmYobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFtuYW1lLCBoYW5kbGVyXSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudDtcclxuIiwiaW1wb3J0IHVzZUV2ZW50IGZyb20gJy4vdXNlRXZlbnQnO1xyXG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4vRXZlbnRDZW50ZXInO1xyXG5cclxuZXhwb3J0IHtcclxuICB1c2VFdmVudCxcclxuICBkaXNwYXRjaCxcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQb2xsQ29uZmlnLCBTZXJ2aWNlUmV0dXJuUHJvbWlzZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUG9sbDxUIGV4dGVuZHMgU2VydmljZVJldHVyblByb21pc2U+KHNlcnZpY2U6IFQsIG9wdGlvbnM/OiBJUG9sbENvbmZpZykge1xyXG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKDApO1xyXG5cclxuICBjb25zdCB7IHJlZnJlc2hJbnRlcnZhbCwgcmVmcmVzaFRpbWVvdXQgfSA9IG9wdGlvbnMgfHwge307XHJcbiAgY29uc3QgZGVsYXkgPSByZWZyZXNoSW50ZXJ2YWwgfHwgcmVmcmVzaFRpbWVvdXQ7XHJcblxyXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpO1xyXG4gIGNvbnN0IHBvbGxpbmcgPSAoKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXJ2aWNlKCk7XHJcbiAgICAgIHJlZnJlc2hJbnRlcnZhbCAmJiBwb2xsaW5nKCk7XHJcbiAgICB9LCBkZWxheSkgYXMgdW5rbm93biBhcyBudW1iZXI7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRlbGF5ICYmIHBvbGxpbmcoKTtcclxuICAgIHJldHVybiBjbGVhcjtcclxuICB9LCBbZGVsYXldKTtcclxufVxyXG4iLCJpbXBvcnQgdXNlUG9sbCBmcm9tICcuL3VzZVBvbGwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUG9sbDtcclxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnRlZFN0YXRlKCkge1xyXG4gIGNvbnN0IG1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IGdldCA9IHVzZUNhbGxiYWNrKCgpID0+IG1vdW50ZWRSZWYuY3VycmVudCwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBnZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlcnZpY2VSZXR1cm5Qcm9taXNlLCBQcm9taXNlVHlwZSwgU2VydmljZVBhcmFtcywgT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgdXNlTW91bnRlZFN0YXRlIGZyb20gJy4vdXNlTW91bnRlZFN0YXRlJztcclxuXHJcbnR5cGUgQXN5bmNTdGF0ZTxUPiA9XHJcbiAge1xyXG4gICAgICBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgICBlcnJvcj86IHVuZGVmaW5lZDtcclxuICAgICAgZGF0YT86IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB8IHtcclxuICAgICAgbG9hZGluZzogdHJ1ZTtcclxuICAgICAgZXJyb3I/OiBFcnJvciB8IHVuZGVmaW5lZDtcclxuICAgICAgZGF0YT86IFQ7XHJcbiAgICB9XHJcbiAgfCB7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlO1xyXG4gICAgICBlcnJvcjogRXJyb3I7XHJcbiAgICAgIGRhdGE/OiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfCB7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlO1xyXG4gICAgICBlcnJvcj86IHVuZGVmaW5lZDtcclxuICAgICAgZGF0YTogVDtcclxuICAgIH07XHJcblxyXG50eXBlIFN0YXRlRnJvbVNlcnZpY2VSZXR1cm5pbmdQcm9taXNlPFQgZXh0ZW5kcyBTZXJ2aWNlUmV0dXJuUHJvbWlzZT4gPSBBc3luY1N0YXRlPFByb21pc2VUeXBlPFJldHVyblR5cGU8VD4+PjtcclxudHlwZSBBc3luY0ZuUmV0dXJuPFQgZXh0ZW5kcyBTZXJ2aWNlUmV0dXJuUHJvbWlzZSA9IFNlcnZpY2VSZXR1cm5Qcm9taXNlPiA9IFtTdGF0ZUZyb21TZXJ2aWNlUmV0dXJuaW5nUHJvbWlzZTxUPiwgVF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBc3luYzxUIGV4dGVuZHMgU2VydmljZVJldHVyblByb21pc2U+KFxyXG4gIHNlcnZpY2U6IFQsXHJcbiAgaW5pdGlhbFN0YXRlOiBTdGF0ZUZyb21TZXJ2aWNlUmV0dXJuaW5nUHJvbWlzZTxUPixcclxuICBvcHRpb25zPzogT3B0aW9ucyxcclxuKTogQXN5bmNGblJldHVybjxUPiB7XHJcbiAgY29uc3QgbGFzdENhbGxJZCA9IHVzZVJlZigwKTtcclxuICBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkU3RhdGUoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCB7IGRlcHMgPSBbXSwgZGVmYXVsdFBhcmFtcyA9IHt9IH0gPSBvcHRpb25zIHx8IHt9O1xyXG4gIGNvbnN0IHBhcmFtUmVmID0gdXNlUmVmKHt9KTtcclxuXHJcbiAgY29uc3QgY2FsbGJhY2sgPSB1c2VDYWxsYmFjaygocDogU2VydmljZVBhcmFtcyA9IHt9KTogUmV0dXJuVHlwZTxUPiA9PiB7XHJcbiAgICBjb25zdCBjYWxsSWQgPSArK2xhc3RDYWxsSWQuY3VycmVudDtcclxuICAgIHNldChwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCBsb2FkaW5nOiB0cnVlIH0pKTtcclxuXHJcbiAgICBwYXJhbVJlZi5jdXJyZW50ID0geyAuLi5kZWZhdWx0UGFyYW1zLCAuLi5wYXJhbVJlZi5jdXJyZW50LCAuLi5wIH07XHJcblxyXG4gICAgcmV0dXJuIHNlcnZpY2UocGFyYW1SZWYuY3VycmVudCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBpc01vdW50ZWQoKSAmJiBjYWxsSWQgPT09IGxhc3RDYWxsSWQuY3VycmVudCAmJiBzZXQoeyBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlzTW91bnRlZCgpICYmIGNhbGxJZCA9PT0gbGFzdENhbGxJZC5jdXJyZW50ICYmIHNldCh7IGVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgfSxcclxuICAgICkgYXMgUmV0dXJuVHlwZTxUPjtcclxuICB9LCBkZXBzKTtcclxuXHJcbiAgcmV0dXJuIFtzdGF0ZSwgKGNhbGxiYWNrIGFzIHVua25vd24pIGFzIFRdO1xyXG59XHJcbiIsImltcG9ydCB7IFBhZ2luYXRpb25JbmZvLCBTZXJ2aWNlUmV0dXJuUHJvbWlzZSwgUGFnaW5hdGlvbkZvcm1hdGVyIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG50eXBlIFBhZ2luYXRpb25QYXJhbXMgPSB7XHJcbiAgZGF0YTogYW55LFxyXG4gIHVwZGF0ZXI6IFNlcnZpY2VSZXR1cm5Qcm9taXNlLFxyXG4gIHBhZ2luYXRpb25Gb3JtYXRlcjogUGFnaW5hdGlvbkZvcm1hdGVyIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bliIbpobXkv6Hmga9cclxuICogQHBhcmFtIHBhcmFtXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbih7IGRhdGEgPSB7fSwgdXBkYXRlciwgcGFnaW5hdGlvbkZvcm1hdGVyIH06IFBhZ2luYXRpb25QYXJhbXMpOiBQYWdpbmF0aW9uSW5mbyB7XHJcbiAgaWYgKHBhZ2luYXRpb25Gb3JtYXRlciAmJiB0eXBlb2YgcGFnaW5hdGlvbkZvcm1hdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gcGFnaW5hdGlvbkZvcm1hdGVyKHsgZGF0YSwgdXBkYXRlciB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogZGF0YS5QYWdlSW5mbz8uVG90YWxDb3VudCB8fCBkYXRhLlBhZ2VJbmZvPy5Ub3RhbCB8fCBkYXRhLlRvdGFsQ291bnQgfHwgZGF0YS5Ub3RhbCB8fCAwLFxyXG4gICAgY3VycmVudDogZGF0YS5QYWdlSW5mbz8uUGFnZU51bWJlciB8fCBkYXRhLlBhZ2VJbmZvPy5DdXJyZW50UGFnZSB8fCBkYXRhLlBhZ2VOdW1iZXIgfHwgZGF0YS5DdXJyZW50UGFnZSB8fCAwLFxyXG4gICAgcGFnZVNpemU6IGRhdGEuUGFnZUluZm8/LlBhZ2VTaXplIHx8IGRhdGEuUGFnZVNpemUgfHwgMTAsXHJcbiAgICAvLyBQYWdlU2l6ZeWmguaenOacieWPmOWMliDlupTor6Xkvb/nlKjlj5jljJblkI7nmoTlgLxcclxuICAgIG9uQ2hhbmdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgICB1cGRhdGVyKHsgQ3VycmVudFBhZ2U6IHBhZ2UsIFBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplIH0pO1xyXG4gICAgfSxcclxuICAgIG9uUGFnZVNpemVDaGFuZ2U6IChzaXplOiBudW1iZXIpID0+IHtcclxuICAgICAgdXBkYXRlcih7IFBhZ2VTaXplOiBzaXplLCBDdXJyZW50UGFnZTogMSB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VQb2xsIGZyb20gJy4uL3VzZVBvbGwnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlUmV0dXJuUHJvbWlzZSwgT3B0aW9ucywgUGFnaW5hdGlvbkluZm8gfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHVzZUFzeW5jIGZyb20gJy4vdXNlQXN5bmMnO1xyXG5pbXBvcnQgeyBnZXRQYWdpbmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VSZXF1ZXN0PFQgZXh0ZW5kcyBTZXJ2aWNlUmV0dXJuUHJvbWlzZT4oXHJcbiAgc2VydmljZTogVCxcclxuICBvcHRpb25zPzogT3B0aW9ucyxcclxuKSB7XHJcbiAgY29uc3QgeyBwYWdpbmF0ZWQsIG1hbnVhbCwgcGFnaW5hdGlvbkZvcm1hdGVyLCByZWZyZXNoSW50ZXJ2YWwsIHJlZnJlc2hUaW1lb3V0IH0gPSBvcHRpb25zIHx8IHt9O1xyXG4gIGNvbnN0IFtzdGF0ZSwgY2FsbGJhY2tdID0gdXNlQXN5bmMoc2VydmljZSwgeyBsb2FkaW5nOiAhbWFudWFsIH0sIG9wdGlvbnMpO1xyXG5cclxuICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbkluZm8gfCB1bmRlZmluZWQ7XHJcbiAgLy8g5byA5ZCv5YiG6aG15qih5byP77yM6I635Y+W5YiG6aG15L+h5oGvXHJcbiAgaWYgKHBhZ2luYXRlZCkge1xyXG4gICAgcGFnaW5hdGlvbiA9IGdldFBhZ2luYXRpb24oeyBkYXRhOiBzdGF0ZS5kYXRhLCB1cGRhdGVyOiBjYWxsYmFjaywgcGFnaW5hdGlvbkZvcm1hdGVyIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g5byA5ZCv6L2u6K6tXHJcbiAgdXNlUG9sbChjYWxsYmFjaywgeyByZWZyZXNoSW50ZXJ2YWwsIHJlZnJlc2hUaW1lb3V0IH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8g5byA5ZCv5LqG5omL5Yqo5qih5byP77yM5LiN5omn6KGMXHJcbiAgICBpZiAobWFudWFsKSByZXR1cm47XHJcbiAgICBjYWxsYmFjaygpO1xyXG4gIH0sIFtjYWxsYmFja10pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICByZWZyZXNoOiBjYWxsYmFjayxcclxuICAgIHBhZ2luYXRpb24sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuL3VzZVJlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG50eXBlIFRvZ2dsZVJldHVyblR5cGUgPSAobmV4dFZhbHVlPzogYm9vbGVhbikgPT4gdm9pZDtcclxuXHJcbmNvbnN0IHRvZ2dsZVJlZHVjZXIgPSAoXHJcbiAgc3RhdGU6IGJvb2xlYW4sXHJcbiAgbmV4dFZhbHVlPzogYm9vbGVhblxyXG4pID0+ICh0eXBlb2YgbmV4dFZhbHVlID09PSAnYm9vbGVhbicgPyBuZXh0VmFsdWUgOiAhc3RhdGUpO1xyXG5cclxuY29uc3QgdXNlVG9nZ2xlID0gKFxyXG4gIGluaXRpYWxWYWx1ZTogYm9vbGVhblxyXG4pOiBbYm9vbGVhbiwgVG9nZ2xlUmV0dXJuVHlwZV0gPT4gdXNlUmVkdWNlcih0b2dnbGVSZWR1Y2VyLCBpbml0aWFsVmFsdWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlO1xyXG5cclxuIiwiaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICcuL3VzZVRvZ2dsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGU7XHJcbiIsImltcG9ydCB7IHVzZUV2ZW50LCBkaXNwYXRjaCB9IGZyb20gJy4vdXNlRXZlbnQnO1xyXG5cclxuZXhwb3J0IHtcclxuICB1c2VFdmVudCxcclxuICBkaXNwYXRjaCxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUmVxdWVzdCB9IGZyb20gJy4vdXNlUmVxdWVzdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVG9nZ2xlIH0gZnJvbSAnLi91c2VUb2dnbGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVBvbGwgfSBmcm9tICcuL3VzZVBvbGwnO1xyXG4iLCJpbXBvcnQgeyB1c2VSZXF1ZXN0IH0gZnJvbSAnQC9saWInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuLy8g5a6a5LmJIFNlcnZpY2Ug5Ye95pWw55qE5Y+C5pWw5ZKM6L+U5Zue57G75Z6LXG5pbnRlcmZhY2UgU2VydmljZURhdGEge1xuICBkYXRhOiB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9W11cbiAgc3VjY2VzczogYm9vbGVhblxuICBjdXJyZW50UGFnZTogbnVtYmVyXG4gIHBhZ2VTaXplOiBudW1iZXJcbn1cblxuY29uc3QgZGF0YSA9IEFycmF5KDEyMClcbiAgLmZpbGwoJycpXG4gIC5tYXAoKF8sIGluZGV4KSA9PiAoe1xuICAgIGlkOiBpbmRleCxcbiAgICBuYW1lOiBgbmFtZSR7aW5kZXh9YCxcbiAgfSkpXG5cbmNvbnN0IFNlcnZpY2UgPSBhc3luYyAocGFyYW1zOiB7XG4gIHBhZ2VTaXplOiBudW1iZXJcbiAgY3VycmVudDogbnVtYmVyXG59KTogUHJvbWlzZTxTZXJ2aWNlRGF0YT4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMuY3VycmVudCcsIHBhcmFtcy5jdXJyZW50KVxuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIGRhdGE6IGRhdGEuc2xpY2UoXG4gICAgICAgICAgKHBhcmFtcy5jdXJyZW50IC0gMSkgKiBwYXJhbXMucGFnZVNpemUsXG4gICAgICAgICAgcGFyYW1zLmN1cnJlbnQgKiBwYXJhbXMucGFnZVNpemUsXG4gICAgICAgICksXG4gICAgICAgIGN1cnJlbnRQYWdlOiBwYXJhbXMuY3VycmVudCxcbiAgICAgICAgcGFnZVNpemU6IHBhcmFtcy5wYWdlU2l6ZSxcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSwgMTAwMClcbiAgfSlcbn1cblxuY29uc3QgdXNlR2V0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBwYWdpbmF0aW9uLCByZWZyZXNoIH0gPSB1c2VSZXF1ZXN0KFNlcnZpY2UsIHtcbiAgICBkZWZhdWx0UGFyYW1zOiB7XG4gICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICBjdXJyZW50OiAxLFxuICAgIH0sXG4gICAgcGFnaW5hdGVkOiB0cnVlLFxuICB9KVxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMaXN0KGRhdGEpXG4gIH0sIFtkYXRhXSlcbiAgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHNldExpc3QoW10pXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaXN0LFxuICAgIHBhZ2luYXRpb24sXG4gICAgcmVmcmVzaCxcbiAgICBjbGVhckxpc3QsXG4gIH1cbn1cblxuY29uc3QgQWNjZXNzUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gdXNlUmVmKDEpXG5cbiAgLy8g5L2/55So5rOb5Z6L5oyH5a6aIFNlcnZpY2Ug5Ye95pWw55qE6L+U5Zue57G75Z6LXG4gIGNvbnN0IHsgZGF0YSwgcGFnaW5hdGlvbiwgcmVmcmVzaCB9ID0gdXNlUmVxdWVzdChTZXJ2aWNlLCB7XG4gICAgZGVmYXVsdFBhcmFtczoge1xuICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgY3VycmVudDogMSxcbiAgICB9LFxuICAgIHBhZ2luYXRlZDogdHJ1ZSxcbiAgfSlcblxuICAvLyBjb25zb2xlLmxvZygncGFnaW5hdGlvbicsIHBhZ2luYXRpb24pXG4gIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICByZWZyZXNoKClcbiAgICB9LCA0MDAwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpIC8vIOa4hemZpOWumuaXtuWZqOS7pemBv+WFjeWGheWtmOazhOa8j1xuICB9LCBbcmVmcmVzaF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY291bnQuY3VycmVudCsrXG4gICAgICAgICAgcmVmcmVzaCh7XG4gICAgICAgICAgICBjdXJyZW50OiBjb3VudC5jdXJyZW50LFxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIOa1i+ivlVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzUGFnZVxuIl0sIm5hbWVzIjpbImFsbEV2ZW50Iiwib25jZSIsIm9wdGlvbnMiLCJhZGRFdmVudCIsIl9vYmplY3RTcHJlYWQiLCJleGVDb3VudCIsIm9uIiwibmFtZSIsImhhbmRsZXIiLCJldmVudHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZXZlbnQiLCJ2YWx1ZSIsImVyciIsImUiLCJmIiwicHVzaCIsIm9mZiIsImkiLCJsZW5ndGgiLCJ0Iiwic3BsaWNlIiwiZGlzcGF0Y2giLCJkYXRhIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInVzZUVmZmVjdCIsInVzZUV2ZW50IiwiaXNPbmNlIiwidXNlUmVmIiwidXNlUG9sbCIsInNlcnZpY2UiLCJ0aW1lciIsIl9yZWYiLCJyZWZyZXNoSW50ZXJ2YWwiLCJyZWZyZXNoVGltZW91dCIsImRlbGF5IiwiY2xlYXIiLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50IiwicG9sbGluZyIsInNldFRpbWVvdXQiLCJ1c2VDYWxsYmFjayIsInVzZU1vdW50ZWRTdGF0ZSIsIm1vdW50ZWRSZWYiLCJnZXQiLCJ1c2VTdGF0ZSIsInVzZUFzeW5jIiwiaW5pdGlhbFN0YXRlIiwibGFzdENhbGxJZCIsImlzTW91bnRlZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXRlIiwic2V0IiwiX3JlZiRkZXBzIiwiZGVwcyIsIl9yZWYkZGVmYXVsdFBhcmFtcyIsImRlZmF1bHRQYXJhbXMiLCJwYXJhbVJlZiIsImNhbGxiYWNrIiwicCIsImNhbGxJZCIsInByZXZTdGF0ZSIsImxvYWRpbmciLCJ0aGVuIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiZ2V0UGFnaW5hdGlvbiIsIl9kYXRhJFBhZ2VJbmZvIiwiX2RhdGEkUGFnZUluZm8yIiwiX2RhdGEkUGFnZUluZm8zIiwiX2RhdGEkUGFnZUluZm80IiwiX2RhdGEkUGFnZUluZm81IiwiX3JlZiRkYXRhIiwidXBkYXRlciIsInBhZ2luYXRpb25Gb3JtYXRlciIsInRvdGFsIiwiUGFnZUluZm8iLCJUb3RhbENvdW50IiwiVG90YWwiLCJQYWdlTnVtYmVyIiwiQ3VycmVudFBhZ2UiLCJwYWdlU2l6ZSIsIlBhZ2VTaXplIiwib25DaGFuZ2UiLCJwYWdlIiwib25QYWdlU2l6ZUNoYW5nZSIsInNpemUiLCJ1c2VSZXF1ZXN0IiwicGFnaW5hdGVkIiwibWFudWFsIiwiX3VzZUFzeW5jIiwiX3VzZUFzeW5jMiIsInBhZ2luYXRpb24iLCJyZWZyZXNoIiwidXNlUmVkdWNlciIsInRvZ2dsZVJlZHVjZXIiLCJuZXh0VmFsdWUiLCJ1c2VUb2dnbGUiLCJpbml0aWFsVmFsdWUiLCJkZWZhdWx0IiwiQnV0dG9uIiwianN4IiwiX2pzeCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsImlkIiwiY29uY2F0IiwiU2VydmljZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicGFyYW1zIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImFicnVwdCIsInJlc29sdmUiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJjdXJyZW50UGFnZSIsInN1Y2Nlc3MiLCJzdG9wIiwiX3giLCJhcHBseSIsInVzZUdldExpc3QiLCJfdXNlUmVxdWVzdCIsImxpc3QiLCJzZXRMaXN0IiwiY2xlYXJMaXN0IiwiQWNjZXNzUGFnZSIsImNvdW50IiwiX3VzZVJlcXVlc3QyIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNoaWxkcmVuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///14890
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
