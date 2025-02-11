import { __assign } from "tslib";
var allEvent = {};
function once(options) {
    addEvent(__assign(__assign({}, options), { exeCount: 1 }));
}
function on(options) {
    addEvent(__assign(__assign({}, options), { exeCount: -1 }));
}
function addEvent(options) {
    var name = options.name, handler = options.handler, exeCount = options.exeCount;
    allEvent[name] = allEvent[name] || [];
    var events = allEvent[name];
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
        var event_1 = events_1[_i];
        // 防止重复注册
        if (event_1.handler === handler)
            return;
    }
    events.push({ name: name, handler: handler, exeCount: exeCount });
}
function off(name, handler) {
    var events = allEvent[name];
    for (var i = 0; i < events.length; i++) {
        var t = events[i];
        if (t.handler === handler) {
            events.splice(i, 1);
            break;
        }
    }
}
function dispatch(name, data) {
    if (data === void 0) { data = null; }
    var events = allEvent[name] || [];
    for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
        var event_2 = events_2[_i];
        var handler = event_2.handler;
        handler && handler(data);
    }
    // 移除一次性事件
    for (var i = 0; i < events.length; i++) {
        var e = events[i];
        var exeCount = e.exeCount;
        if (exeCount === 1) { // eslint-disable-line
            events.splice(i, 1);
            i--;
        }
    }
}
export { on, once, off, dispatch, };
