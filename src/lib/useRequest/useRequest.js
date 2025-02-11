import { __assign } from "tslib";
import { useEffect } from 'react';
import usePoll from '../usePoll';
import useAsync from './useAsync';
import { getPagination } from './utils';
export default function useRequest(service, options) {
    var _a = options || {}, paginated = _a.paginated, manual = _a.manual, paginationFormater = _a.paginationFormater, refreshInterval = _a.refreshInterval, refreshTimeout = _a.refreshTimeout;
    var _b = useAsync(service, { loading: !manual }, options), state = _b[0], callback = _b[1];
    var pagination;
    // 开启分页模式，获取分页信息
    if (paginated) {
        pagination = getPagination({ data: state.data, updater: callback, paginationFormater: paginationFormater });
    }
    // 开启轮训
    usePoll(callback, { refreshInterval: refreshInterval, refreshTimeout: refreshTimeout });
    useEffect(function () {
        // 开启了手动模式，不执行
        if (manual)
            return;
        callback();
    }, [callback]);
    return __assign(__assign({}, state), { refresh: callback, pagination: pagination });
}
