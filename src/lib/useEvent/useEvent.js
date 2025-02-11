import { useEffect } from 'react';
import { on, once, off } from './EventCenter';
var useEvent = function (name, 
// eslint-disable-next-line no-unused-vars
handler, isOnce) {
    if (isOnce === void 0) { isOnce = false; }
    useEffect(function () {
        if (!handler) {
            return;
        }
        isOnce ? once({ name: name, handler: handler }) : on({ name: name, handler: handler });
        return function () {
            off(name, handler);
        };
    }, [name, handler]);
};
export default useEvent;
