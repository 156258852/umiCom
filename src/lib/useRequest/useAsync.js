import { __assign } from "tslib";
import { useCallback, useRef, useState } from 'react';
import useMountedState from './useMountedState';
export default function useAsync(service, initialState, options) {
    var lastCallId = useRef(0);
    var isMounted = useMountedState();
    var _a = useState(initialState), state = _a[0], set = _a[1];
    var _b = options || {}, _c = _b.deps, deps = _c === void 0 ? [] : _c, _d = _b.defaultParams, defaultParams = _d === void 0 ? {} : _d;
    var paramRef = useRef({});
    var callback = useCallback(function (p) {
        if (p === void 0) { p = {}; }
        var callId = ++lastCallId.current;
        set(function (prevState) { return (__assign(__assign({}, prevState), { loading: true })); });
        paramRef.current = __assign(__assign(__assign({}, defaultParams), paramRef.current), p);
        return service(paramRef.current).then(function (data) {
            isMounted() && callId === lastCallId.current && set({ data: data, loading: false });
            return data;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return Promise.reject(error);
        });
    }, deps);
    return [state, callback];
}
