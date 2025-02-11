import { useRef, useEffect } from 'react';
export default function usePoll(service, options) {
    var timer = useRef(0);
    var _a = options || {}, refreshInterval = _a.refreshInterval, refreshTimeout = _a.refreshTimeout;
    var delay = refreshInterval || refreshTimeout;
    var clear = function () { return clearTimeout(timer.current); };
    var polling = function () {
        clear();
        timer.current = setTimeout(function () {
            service();
            refreshInterval && polling();
        }, delay);
    };
    useEffect(function () {
        delay && polling();
        return clear;
    }, [delay]);
}
