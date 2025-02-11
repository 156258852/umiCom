"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[624],{74443:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: function() { return /* binding */ useResponsiveObserver; },
/* harmony export */   c4: function() { return /* binding */ responsiveArray; }
/* harmony export */ });
/* unused harmony export matchScreen */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29691);


const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: \`(max-width: \${token.screenXSMax}px)\`,
  sm: \`(min-width: \${token.screenSM}px)\`,
  md: \`(min-width: \${token.screenMD}px)\`,
  lg: \`(min-width: \${token.screenLG}px)\`,
  xl: \`(min-width: \${token.screenXL}px)\`,
  xxl: \`(min-width: \${token.screenXXL}px)\`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = \`screen\${breakpointUpper}Min\`;
    const screen = \`screen\${breakpointUpper}\`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(\`\${screenMin}<=\${screen} fails : !(\${indexableToken[screenMin]}<=\${indexableToken[screen]})\`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = \`screen\${breakpointUpper}Max\`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(\`\${screen}<=\${screenMax} fails : !(\${indexableToken[screen]}<=\${indexableToken[screenMax]})\`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = \`screen\${nextBreakpointUpperMin}Min\`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(\`\${screenMax}<=\${nextScreenMin} fails : !(\${indexableToken[screenMax]}<=\${indexableToken[nextScreenMin]})\`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add \`useMemo\` here.
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}
const matchScreen = (screens, screenSizes) => {
  if (screenSizes && typeof screenSizes === 'object') {
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint] && screenSizes[breakpoint] !== undefined) {
        return screenSizes[breakpoint];
      }
    }
  }
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ0NDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNtQjtBQUN0QztBQUNQO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QyxxQkFBcUIsZUFBZTtBQUNwQyxxQkFBcUIsZUFBZTtBQUNwQyxxQkFBcUIsZUFBZTtBQUNwQyxxQkFBcUIsZUFBZTtBQUNwQyxzQkFBc0IsZ0JBQWdCO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQSx5QkFBeUIsVUFBVSxJQUFJLFFBQVEsWUFBWSwwQkFBMEIsSUFBSSx1QkFBdUI7QUFDaEg7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQSwyQkFBMkIsT0FBTyxJQUFJLFdBQVcsWUFBWSx1QkFBdUIsSUFBSSwwQkFBMEI7QUFDbEg7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQSwyQkFBMkIsVUFBVSxJQUFJLGVBQWUsWUFBWSwwQkFBMEIsSUFBSSw4QkFBOEI7QUFDaEk7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ2U7QUFDZixvQkFBb0IscUVBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVMsMENBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCx3REFBd0Q7QUFDeEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmVyLmpzPzUzZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRva2VuIH0gZnJvbSAnLi4vdGhlbWUvaW50ZXJuYWwnO1xuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVBcnJheSA9IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5jb25zdCBnZXRSZXNwb25zaXZlTWFwID0gdG9rZW4gPT4gKHtcbiAgeHM6IGAobWF4LXdpZHRoOiAke3Rva2VuLnNjcmVlblhTTWF4fXB4KWAsXG4gIHNtOiBgKG1pbi13aWR0aDogJHt0b2tlbi5zY3JlZW5TTX1weClgLFxuICBtZDogYChtaW4td2lkdGg6ICR7dG9rZW4uc2NyZWVuTUR9cHgpYCxcbiAgbGc6IGAobWluLXdpZHRoOiAke3Rva2VuLnNjcmVlbkxHfXB4KWAsXG4gIHhsOiBgKG1pbi13aWR0aDogJHt0b2tlbi5zY3JlZW5YTH1weClgLFxuICB4eGw6IGAobWluLXdpZHRoOiAke3Rva2VuLnNjcmVlblhYTH1weClgXG59KTtcbi8qKlxuICogRW5zdXJlcyB0aGF0IHRoZSBicmVha3BvaW50cyB0b2tlbiBhcmUgdmFsaWQsIGluIGdvb2Qgb3JkZXJcbiAqIEZvciBlYWNoIGJyZWFrcG9pbnQgOiBzY3JlZW5NaW4gPD0gc2NyZWVuIDw9IHNjcmVlbk1heCBhbmQgc2NyZWVuTWF4IDw9IG5leHRTY3JlZW5NaW5cbiAqL1xuY29uc3QgdmFsaWRhdGVCcmVha3BvaW50cyA9IHRva2VuID0+IHtcbiAgY29uc3QgaW5kZXhhYmxlVG9rZW4gPSB0b2tlbjtcbiAgY29uc3QgcmV2QnJlYWtwb2ludHMgPSBbXS5jb25jYXQocmVzcG9uc2l2ZUFycmF5KS5yZXZlcnNlKCk7XG4gIHJldkJyZWFrcG9pbnRzLmZvckVhY2goKGJyZWFrcG9pbnQsIGkpID0+IHtcbiAgICBjb25zdCBicmVha3BvaW50VXBwZXIgPSBicmVha3BvaW50LnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgc2NyZWVuTWluID0gYHNjcmVlbiR7YnJlYWtwb2ludFVwcGVyfU1pbmA7XG4gICAgY29uc3Qgc2NyZWVuID0gYHNjcmVlbiR7YnJlYWtwb2ludFVwcGVyfWA7XG4gICAgaWYgKCEoaW5kZXhhYmxlVG9rZW5bc2NyZWVuTWluXSA8PSBpbmRleGFibGVUb2tlbltzY3JlZW5dKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NjcmVlbk1pbn08PSR7c2NyZWVufSBmYWlscyA6ICEoJHtpbmRleGFibGVUb2tlbltzY3JlZW5NaW5dfTw9JHtpbmRleGFibGVUb2tlbltzY3JlZW5dfSlgKTtcbiAgICB9XG4gICAgaWYgKGkgPCByZXZCcmVha3BvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBzY3JlZW5NYXggPSBgc2NyZWVuJHticmVha3BvaW50VXBwZXJ9TWF4YDtcbiAgICAgIGlmICghKGluZGV4YWJsZVRva2VuW3NjcmVlbl0gPD0gaW5kZXhhYmxlVG9rZW5bc2NyZWVuTWF4XSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NjcmVlbn08PSR7c2NyZWVuTWF4fSBmYWlscyA6ICEoJHtpbmRleGFibGVUb2tlbltzY3JlZW5dfTw9JHtpbmRleGFibGVUb2tlbltzY3JlZW5NYXhdfSlgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRCcmVha3BvaW50VXBwZXJNaW4gPSByZXZCcmVha3BvaW50c1tpICsgMV0udG9VcHBlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5leHRTY3JlZW5NaW4gPSBgc2NyZWVuJHtuZXh0QnJlYWtwb2ludFVwcGVyTWlufU1pbmA7XG4gICAgICBpZiAoIShpbmRleGFibGVUb2tlbltzY3JlZW5NYXhdIDw9IGluZGV4YWJsZVRva2VuW25leHRTY3JlZW5NaW5dKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c2NyZWVuTWF4fTw9JHtuZXh0U2NyZWVuTWlufSBmYWlscyA6ICEoJHtpbmRleGFibGVUb2tlbltzY3JlZW5NYXhdfTw9JHtpbmRleGFibGVUb2tlbltuZXh0U2NyZWVuTWluXX0pYCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRva2VuO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlc3BvbnNpdmVPYnNlcnZlcigpIHtcbiAgY29uc3QgWywgdG9rZW5dID0gdXNlVG9rZW4oKTtcbiAgY29uc3QgcmVzcG9uc2l2ZU1hcCA9IGdldFJlc3BvbnNpdmVNYXAodmFsaWRhdGVCcmVha3BvaW50cyh0b2tlbikpO1xuICAvLyBUbyBhdm9pZCByZXBlYXQgY3JlYXRlIGluc3RhbmNlLCB3ZSBhZGQgYHVzZU1lbW9gIGhlcmUuXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgc3ViVWlkID0gLTE7XG4gICAgbGV0IHNjcmVlbnMgPSB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hIYW5kbGVyczoge30sXG4gICAgICBkaXNwYXRjaChwb2ludE1hcCkge1xuICAgICAgICBzY3JlZW5zID0gcG9pbnRNYXA7XG4gICAgICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuYyA9PiBmdW5jKHNjcmVlbnMpKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXJzLnNpemUgPj0gMTtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmUoZnVuYykge1xuICAgICAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgc3ViVWlkICs9IDE7XG4gICAgICAgIHN1YnNjcmliZXJzLnNldChzdWJVaWQsIGZ1bmMpO1xuICAgICAgICBmdW5jKHNjcmVlbnMpO1xuICAgICAgICByZXR1cm4gc3ViVWlkO1xuICAgICAgfSxcbiAgICAgIHVuc3Vic2NyaWJlKHBhcmFtVG9rZW4pIHtcbiAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKHBhcmFtVG9rZW4pO1xuICAgICAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgfSxcbiAgICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLmZvckVhY2goc2NyZWVuID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWF0Y2hIYW5kbGVyc1ttYXRjaE1lZGlhUXVlcnldO1xuICAgICAgICAgIGhhbmRsZXIgPT09IG51bGwgfHwgaGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFuZGxlci5tcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlciA9PT0gbnVsbCB8fCBoYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyLmxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLmZvckVhY2goc2NyZWVuID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG4gICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBfcmVmID0+IHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICAgIH0gPSBfcmVmO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNjcmVlbnMpLCB7XG4gICAgICAgICAgICAgIFtzY3JlZW5dOiBtYXRjaGVzXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShtYXRjaE1lZGlhUXVlcnkpO1xuICAgICAgICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgdGhpcy5tYXRjaEhhbmRsZXJzW21hdGNoTWVkaWFRdWVyeV0gPSB7XG4gICAgICAgICAgICBtcWwsXG4gICAgICAgICAgICBsaXN0ZW5lclxuICAgICAgICAgIH07XG4gICAgICAgICAgbGlzdGVuZXIobXFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVzcG9uc2l2ZU1hcFxuICAgIH07XG4gIH0sIFt0b2tlbl0pO1xufVxuZXhwb3J0IGNvbnN0IG1hdGNoU2NyZWVuID0gKHNjcmVlbnMsIHNjcmVlblNpemVzKSA9PiB7XG4gIGlmIChzY3JlZW5TaXplcyAmJiB0eXBlb2Ygc2NyZWVuU2l6ZXMgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zaXZlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSByZXNwb25zaXZlQXJyYXlbaV07XG4gICAgICBpZiAoc2NyZWVuc1ticmVha3BvaW50XSAmJiBzY3JlZW5TaXplc1ticmVha3BvaW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW5TaXplc1ticmVha3BvaW50XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///74443
`)},33297:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: function() { return /* binding */ initMoveMotion; }
/* harmony export */ });
/* unused harmony exports moveDownIn, moveDownOut, moveLeftIn, moveLeftOut, moveRightIn, moveRightOut, moveUpIn, moveUpOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11568);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93590);


const moveDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = \`\${antCls}-\${motionName}\`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [\`
        \${motionCls}-enter,
        \${motionCls}-appear
      \`]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [\`\${motionCls}-leave\`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyOTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBQ1Y7QUFDL0IsdUJBQXVCLG9FQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00sd0JBQXdCLG9FQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00sdUJBQXVCLG9FQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00sd0JBQXdCLG9FQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00sd0JBQXdCLG9FQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00seUJBQXlCLG9FQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00scUJBQXFCLG9FQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ00sc0JBQXNCLG9FQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKLHVCQUF1QixPQUFPLEdBQUcsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osVUFBVSw0REFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3R5bGUvbW90aW9uL21vdmUuanM/YWJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlmcmFtZXMgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IGluaXRNb3Rpb24gfSBmcm9tICcuL21vdGlvbic7XG5leHBvcnQgY29uc3QgbW92ZURvd25JbiA9IG5ldyBLZXlmcmFtZXMoJ2FudE1vdmVEb3duSW4nLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3QgbW92ZURvd25PdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRNb3ZlRG93bk91dCcsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMTAwJSwgMCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBtb3ZlTGVmdEluID0gbmV3IEtleWZyYW1lcygnYW50TW92ZUxlZnRJbicsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3QgbW92ZUxlZnRPdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRNb3ZlTGVmdE91dCcsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSk7XG5leHBvcnQgY29uc3QgbW92ZVJpZ2h0SW4gPSBuZXcgS2V5ZnJhbWVzKCdhbnRNb3ZlUmlnaHRJbicsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDEwMCUsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBtb3ZlUmlnaHRPdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRNb3ZlUmlnaHRPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDEwMCUsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSk7XG5leHBvcnQgY29uc3QgbW92ZVVwSW4gPSBuZXcgS2V5ZnJhbWVzKCdhbnRNb3ZlVXBJbicsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3QgbW92ZVVwT3V0ID0gbmV3IEtleWZyYW1lcygnYW50TW92ZVVwT3V0Jywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbmNvbnN0IG1vdmVNb3Rpb24gPSB7XG4gICdtb3ZlLXVwJzoge1xuICAgIGluS2V5ZnJhbWVzOiBtb3ZlVXBJbixcbiAgICBvdXRLZXlmcmFtZXM6IG1vdmVVcE91dFxuICB9LFxuICAnbW92ZS1kb3duJzoge1xuICAgIGluS2V5ZnJhbWVzOiBtb3ZlRG93bkluLFxuICAgIG91dEtleWZyYW1lczogbW92ZURvd25PdXRcbiAgfSxcbiAgJ21vdmUtbGVmdCc6IHtcbiAgICBpbktleWZyYW1lczogbW92ZUxlZnRJbixcbiAgICBvdXRLZXlmcmFtZXM6IG1vdmVMZWZ0T3V0XG4gIH0sXG4gICdtb3ZlLXJpZ2h0Jzoge1xuICAgIGluS2V5ZnJhbWVzOiBtb3ZlUmlnaHRJbixcbiAgICBvdXRLZXlmcmFtZXM6IG1vdmVSaWdodE91dFxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGluaXRNb3ZlTW90aW9uID0gKHRva2VuLCBtb3Rpb25OYW1lKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbnRDbHNcbiAgfSA9IHRva2VuO1xuICBjb25zdCBtb3Rpb25DbHMgPSBgJHthbnRDbHN9LSR7bW90aW9uTmFtZX1gO1xuICBjb25zdCB7XG4gICAgaW5LZXlmcmFtZXMsXG4gICAgb3V0S2V5ZnJhbWVzXG4gIH0gPSBtb3ZlTW90aW9uW21vdGlvbk5hbWVdO1xuICByZXR1cm4gW2luaXRNb3Rpb24obW90aW9uQ2xzLCBpbktleWZyYW1lcywgb3V0S2V5ZnJhbWVzLCB0b2tlbi5tb3Rpb25EdXJhdGlvbk1pZCksIHtcbiAgICBbYFxuICAgICAgICAke21vdGlvbkNsc30tZW50ZXIsXG4gICAgICAgICR7bW90aW9uQ2xzfS1hcHBlYXJcbiAgICAgIGBdOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHRva2VuLm1vdGlvbkVhc2VPdXRDaXJjXG4gICAgfSxcbiAgICBbYCR7bW90aW9uQ2xzfS1sZWF2ZWBdOiB7XG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdG9rZW4ubW90aW9uRWFzZUluT3V0Q2lyY1xuICAgIH1cbiAgfV07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///33297
`)},67771:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qt: function() { return /* binding */ slideDownIn; },
/* harmony export */   Uw: function() { return /* binding */ slideUpOut; },
/* harmony export */   fJ: function() { return /* binding */ slideUpIn; },
/* harmony export */   ly: function() { return /* binding */ slideDownOut; },
/* harmony export */   oN: function() { return /* binding */ initSlideMotion; }
/* harmony export */ });
/* unused harmony exports slideLeftIn, slideLeftOut, slideRightIn, slideRightOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11568);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93590);


const slideUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = \`\${antCls}-\${motionName}\`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [\`
      \${motionCls}-enter,
      \${motionCls}-appear
    \`]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      '&-prepare': {
        transform: 'scale(1)'
      }
    },
    [\`\${motionCls}-leave\`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjc3NzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNWO0FBQy9CLHNCQUFzQixvRUFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHVCQUF1QixvRUFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHdCQUF3QixvRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHlCQUF5QixvRUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHdCQUF3QixvRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHlCQUF5QixvRUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHlCQUF5QixvRUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLDBCQUEwQixvRUFBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSix1QkFBdUIsT0FBTyxHQUFHLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFVBQVUsNERBQVU7QUFDcEI7QUFDQSxRQUFRLFVBQVU7QUFDbEIsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdHlsZS9tb3Rpb24vc2xpZGUuanM/YTI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlmcmFtZXMgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IGluaXRNb3Rpb24gfSBmcm9tICcuL21vdGlvbic7XG5leHBvcnQgY29uc3Qgc2xpZGVVcEluID0gbmV3IEtleWZyYW1lcygnYW50U2xpZGVVcEluJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3Qgc2xpZGVVcE91dCA9IG5ldyBLZXlmcmFtZXMoJ2FudFNsaWRlVXBPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZURvd25JbiA9IG5ldyBLZXlmcmFtZXMoJ2FudFNsaWRlRG93bkluJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZURvd25PdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRTbGlkZURvd25PdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMTAwJSAxMDAlJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pO1xuZXhwb3J0IGNvbnN0IHNsaWRlTGVmdEluID0gbmV3IEtleWZyYW1lcygnYW50U2xpZGVMZWZ0SW4nLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMC44KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZUxlZnRPdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRTbGlkZUxlZnRPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwLjgpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZVJpZ2h0SW4gPSBuZXcgS2V5ZnJhbWVzKCdhbnRTbGlkZVJpZ2h0SW4nLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMC44KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMTAwJSAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMCUnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3Qgc2xpZGVSaWdodE91dCA9IG5ldyBLZXlmcmFtZXMoJ2FudFNsaWRlUmlnaHRPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMCUnLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVYKDAuOCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMCUnLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSk7XG5jb25zdCBzbGlkZU1vdGlvbiA9IHtcbiAgJ3NsaWRlLXVwJzoge1xuICAgIGluS2V5ZnJhbWVzOiBzbGlkZVVwSW4sXG4gICAgb3V0S2V5ZnJhbWVzOiBzbGlkZVVwT3V0XG4gIH0sXG4gICdzbGlkZS1kb3duJzoge1xuICAgIGluS2V5ZnJhbWVzOiBzbGlkZURvd25JbixcbiAgICBvdXRLZXlmcmFtZXM6IHNsaWRlRG93bk91dFxuICB9LFxuICAnc2xpZGUtbGVmdCc6IHtcbiAgICBpbktleWZyYW1lczogc2xpZGVMZWZ0SW4sXG4gICAgb3V0S2V5ZnJhbWVzOiBzbGlkZUxlZnRPdXRcbiAgfSxcbiAgJ3NsaWRlLXJpZ2h0Jzoge1xuICAgIGluS2V5ZnJhbWVzOiBzbGlkZVJpZ2h0SW4sXG4gICAgb3V0S2V5ZnJhbWVzOiBzbGlkZVJpZ2h0T3V0XG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdFNsaWRlTW90aW9uID0gKHRva2VuLCBtb3Rpb25OYW1lKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbnRDbHNcbiAgfSA9IHRva2VuO1xuICBjb25zdCBtb3Rpb25DbHMgPSBgJHthbnRDbHN9LSR7bW90aW9uTmFtZX1gO1xuICBjb25zdCB7XG4gICAgaW5LZXlmcmFtZXMsXG4gICAgb3V0S2V5ZnJhbWVzXG4gIH0gPSBzbGlkZU1vdGlvblttb3Rpb25OYW1lXTtcbiAgcmV0dXJuIFtpbml0TW90aW9uKG1vdGlvbkNscywgaW5LZXlmcmFtZXMsIG91dEtleWZyYW1lcywgdG9rZW4ubW90aW9uRHVyYXRpb25NaWQpLCB7XG4gICAgW2BcbiAgICAgICR7bW90aW9uQ2xzfS1lbnRlcixcbiAgICAgICR7bW90aW9uQ2xzfS1hcHBlYXJcbiAgICBgXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0b2tlbi5tb3Rpb25FYXNlT3V0UXVpbnQsXG4gICAgICAnJi1wcmVwYXJlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHttb3Rpb25DbHN9LWxlYXZlYF06IHtcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0b2tlbi5tb3Rpb25FYXNlSW5RdWludFxuICAgIH1cbiAgfV07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///67771
`)},39983:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_overflow_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 5 modules
var es = __webpack_require__(9220);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Item.js



var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];



// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var mergedHidden = responsive && !display;
  // ================================ Effect ================================
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  react.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []);
  // ================================ Render ================================
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);
  if (responsive) {
    itemNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item = /*#__PURE__*/react.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ var es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/channelUpdate.js

function channelUpdate(callback) {
  if (typeof MessageChannel === 'undefined') {
    (0,raf/* default */.Z)(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return callback();
    };
    channel.port2.postMessage(undefined);
  }
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/useEffectState.js





/**
 * Batcher for record any \`useEffectState\` need update.
 */
function useBatcher() {
  // Updater Trigger
  var updateFuncRef = react.useRef(null);
  // Notify update
  var notifyEffectUpdate = function notifyEffectUpdate(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function () {
        (0,react_dom.unstable_batchedUpdates)(function () {
          updateFuncRef.current.forEach(function (fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
/**
 * Trigger state update by \`useLayoutEffect\` to save perf.
 */
function useEffectState(notifyEffectUpdate, defaultValue) {
  // Value
  var _React$useState = react.useState(defaultValue),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    stateValue = _React$useState2[0],
    setStateValue = _React$useState2[1];
  // Set State
  var setEffectVal = (0,useEvent/* default */.Z)(function (nextValue) {
    notifyEffectUpdate(function () {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/context.js

var OverflowContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/RawItem.js


var RawItem_excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];




var InternalRawItem = function InternalRawItem(props, ref) {
  var context = react.useContext(OverflowContext);
  // Render directly when context not provided
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = (0,objectWithoutProperties/* default */.Z)(props, RawItem_excluded);
    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, _restProps, {
      ref: ref
    }));
  }
  var contextClassName = context.className,
    restContext = (0,objectWithoutProperties/* default */.Z)(context, _excluded2);
  var className = props.className,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded3);
  // Do not pass context to sub item to avoid multiple measure
  return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/react.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ var es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Overflow.js




var Overflow_excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];









var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Overflow_excluded);
  var fullySSR = ssr === 'full';
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null),
    _useEffectState2 = (0,slicedToArray/* default */.Z)(_useEffectState, 2),
    containerWidth = _useEffectState2[0],
    setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, new Map()),
    _useEffectState4 = (0,slicedToArray/* default */.Z)(_useEffectState3, 2),
    itemWidths = _useEffectState4[0],
    setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState6 = (0,slicedToArray/* default */.Z)(_useEffectState5, 2),
    prevRestWidth = _useEffectState6[0],
    setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState8 = (0,slicedToArray/* default */.Z)(_useEffectState7, 2),
    restWidth = _useEffectState8[0],
    setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState10 = (0,slicedToArray/* default */.Z)(_useEffectState9, 2),
    suffixWidth = _useEffectState10[0],
    setSuffixWidth = _useEffectState10[1];
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = react.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");
  // Always use the max width to avoid blink
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  // ================================= Data =================================
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is \`responsive\`, we will always render rest node to get the real width of it for calculation
   */
  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,react.useMemo)(function () {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = (0,react.useMemo)(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  // ================================= Item =================================
  var getKey = (0,react.useCallback)(function (item, index) {
    var _ref;
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,react.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take \`mergedData\` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  // ================================= Size =================================
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  // ================================ Effect ================================
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;
      // When data count change to 0, reset this since not loop will reach
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);
        // Fully will always render
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        // Break since data not ready
        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        }
        // Find best match
        totalWidth += currentItemWidth;
        if (
        // Only one means \`totalWidth\` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth ||
        // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]);
  // ================================ Render ================================
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  };
  // >>>>> Choice render fun by \`renderRawItem\`
  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      key: key,
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  };
  // >>>>> Rest node
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }
  var overflowNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  if (isResponsive) {
    overflowNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }
  return overflowNode;
}
var ForwardOverflow = /*#__PURE__*/react.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
// Convert to generic type
/* harmony default export */ var es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/index.js

/* harmony default export */ var rc_overflow_es = (es_Overflow);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk5ODMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1c7QUFDcUI7QUFDMUY7QUFDK0I7QUFDSztBQUNZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUIsWUFBWSw4QkFBUTtBQUNyRSxlQUFlLG9CQUFVO0FBQ3pCLFdBQVcsZ0NBQWEsQ0FBQyxnQ0FBYSxHQUFHO0FBQ3pDLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLDRCQUE0QixtQkFBbUIsQ0FBQyxpQkFBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBLDRDQUFlLElBQUksRTs7Ozs7Ozs7QUN4RWM7QUFDbEI7QUFDZjtBQUNBLElBQUksc0JBQUc7QUFDUCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7QUNYc0U7QUFDckI7QUFDbEI7QUFDcUI7QUFDUjtBQUM1QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGFBQWE7QUFDbkIsUUFBUSxxQ0FBdUI7QUFDL0I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSx3QkFBd0IsY0FBYztBQUN0Qyx1QkFBdUIsZ0NBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUFRO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsQzs7QUM1QzBCO0FBQ25CLG1DQUFtQyxtQkFBbUIsTzs7QUNESDtBQUNnQztBQUMxRixJQUFJLGdCQUFTO0FBQ2I7QUFDQTtBQUMrQjtBQUNLO0FBQ1Y7QUFDa0I7QUFDNUM7QUFDQSxnQkFBZ0IsZ0JBQWdCLENBQUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBd0IsUUFBUSxnQkFBUztBQUM1RCx3QkFBd0IsbUJBQW1CLFlBQVksOEJBQVEsR0FBRztBQUNsRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLDBDQUF3QjtBQUMxQztBQUNBLGdCQUFnQiwwQ0FBd0I7QUFDeEM7QUFDQSxzQkFBc0IsbUJBQW1CLENBQUMsZUFBZTtBQUN6RDtBQUNBLEdBQUcsZUFBZSxtQkFBbUIsQ0FBQyxPQUFJLEVBQUUsOEJBQVE7QUFDcEQ7QUFDQSxlQUFlLG9CQUFVO0FBQ3pCLEdBQUc7QUFDSDtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQSwrQ0FBZSxPQUFPLEU7O0FDbENvQztBQUNXO0FBQ0M7QUFDb0I7QUFDMUYsSUFBSSxpQkFBUztBQUNrQjtBQUN3QjtBQUNuQjtBQUNZO0FBQ2U7QUFDckM7QUFDMEM7QUFDcEM7QUFDWTtBQUM1QztBQUNBO0FBQzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBd0IsUUFBUSxpQkFBUztBQUN6RDtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDLHdCQUF3QixjQUFjO0FBQ3RDLHVCQUF1QixnQ0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx1QkFBdUIsZ0NBQWM7QUFDckM7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHVCQUF1QixnQ0FBYztBQUNyQztBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMsdUJBQXVCLGdDQUFjO0FBQ3JDO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx3QkFBd0IsZ0NBQWM7QUFDdEM7QUFDQTtBQUNBLGtCQUFrQixrQkFBUTtBQUMxQixpQkFBaUIsZ0NBQWM7QUFDL0I7QUFDQTtBQUNBLG1CQUFtQixrQkFBUTtBQUMzQixpQkFBaUIsZ0NBQWM7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQixrQkFBUTtBQUMzQixpQkFBaUIsZ0NBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLGlCQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxxQkFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QixxQkFBVztBQUNwQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrQ0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUIsQ0FBQyxlQUFlO0FBQzNEO0FBQ0EsYUFBYSxnQ0FBYSxDQUFDLGdDQUFhLEdBQUcsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLHdCQUF3QixtQkFBbUIsQ0FBQyxPQUFJLEVBQUUsOEJBQVEsR0FBRztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQixDQUFDLE9BQUksRUFBRSw4QkFBUSxHQUFHO0FBQ2pFLElBQUk7QUFDSiw0QkFBNEIsbUJBQW1CLENBQUMsZUFBZTtBQUMvRCxhQUFhLGdDQUFhLENBQUMsZ0NBQWEsR0FBRztBQUMzQyxLQUFLO0FBQ0w7QUFDQSxrQ0FBa0MsbUJBQW1CLFlBQVksOEJBQVE7QUFDekUsZUFBZSxvQkFBVTtBQUN6QjtBQUNBO0FBQ0EsR0FBRyx5R0FBeUcsbUJBQW1CLENBQUMsT0FBSSxFQUFFLDhCQUFRLEdBQUc7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0MsbUJBQW1CLENBQUMsaUJBQWM7QUFDbEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25EO0FBQ0EsdUJBQXVCLFVBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWUsZUFBZSxFOztBQ3BTSTtBQUNsQyxtREFBZSxXQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLW92ZXJmbG93L2VzL0l0ZW0uanM/MjMxMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtb3ZlcmZsb3cvZXMvaG9va3MvY2hhbm5lbFVwZGF0ZS5qcz8yNTgwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1vdmVyZmxvdy9lcy9ob29rcy91c2VFZmZlY3RTdGF0ZS5qcz8xZThiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1vdmVyZmxvdy9lcy9jb250ZXh0LmpzP2ExN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLW92ZXJmbG93L2VzL1Jhd0l0ZW0uanM/OTM5MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtb3ZlcmZsb3cvZXMvT3ZlcmZsb3cuanM/ZTIxMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtb3ZlcmZsb3cvZXMvaW5kZXguanM/NjZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcInByZWZpeENsc1wiLCBcImludmFsaWRhdGVcIiwgXCJpdGVtXCIsIFwicmVuZGVySXRlbVwiLCBcInJlc3BvbnNpdmVcIiwgXCJyZXNwb25zaXZlRGlzYWJsZWRcIiwgXCJyZWdpc3RlclNpemVcIiwgXCJpdGVtS2V5XCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJjaGlsZHJlblwiLCBcImRpc3BsYXlcIiwgXCJvcmRlclwiLCBcImNvbXBvbmVudFwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3JjLXJlc2l6ZS1vYnNlcnZlcic7XG4vLyBVc2Ugc2hhcmVkIHZhcmlhYmxlIHRvIHNhdmUgYnVuZGxlIHNpemVcbnZhciBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5mdW5jdGlvbiBJbnRlcm5hbEl0ZW0ocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIGludmFsaWRhdGUgPSBwcm9wcy5pbnZhbGlkYXRlLFxuICAgIGl0ZW0gPSBwcm9wcy5pdGVtLFxuICAgIHJlbmRlckl0ZW0gPSBwcm9wcy5yZW5kZXJJdGVtLFxuICAgIHJlc3BvbnNpdmUgPSBwcm9wcy5yZXNwb25zaXZlLFxuICAgIHJlc3BvbnNpdmVEaXNhYmxlZCA9IHByb3BzLnJlc3BvbnNpdmVEaXNhYmxlZCxcbiAgICByZWdpc3RlclNpemUgPSBwcm9wcy5yZWdpc3RlclNpemUsXG4gICAgaXRlbUtleSA9IHByb3BzLml0ZW1LZXksXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBkaXNwbGF5ID0gcHJvcHMuZGlzcGxheSxcbiAgICBvcmRlciA9IHByb3BzLm9yZGVyLFxuICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgdmFyIG1lcmdlZEhpZGRlbiA9IHJlc3BvbnNpdmUgJiYgIWRpc3BsYXk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBpbnRlcm5hbFJlZ2lzdGVyU2l6ZSh3aWR0aCkge1xuICAgIHJlZ2lzdGVyU2l6ZShpdGVtS2V5LCB3aWR0aCk7XG4gIH1cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaW50ZXJuYWxSZWdpc3RlclNpemUobnVsbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGNoaWxkTm9kZSA9IHJlbmRlckl0ZW0gJiYgaXRlbSAhPT0gVU5ERUZJTkVEID8gcmVuZGVySXRlbShpdGVtKSA6IGNoaWxkcmVuO1xuICB2YXIgb3ZlcmZsb3dTdHlsZTtcbiAgaWYgKCFpbnZhbGlkYXRlKSB7XG4gICAgb3ZlcmZsb3dTdHlsZSA9IHtcbiAgICAgIG9wYWNpdHk6IG1lcmdlZEhpZGRlbiA/IDAgOiAxLFxuICAgICAgaGVpZ2h0OiBtZXJnZWRIaWRkZW4gPyAwIDogVU5ERUZJTkVELFxuICAgICAgb3ZlcmZsb3dZOiBtZXJnZWRIaWRkZW4gPyAnaGlkZGVuJyA6IFVOREVGSU5FRCxcbiAgICAgIG9yZGVyOiByZXNwb25zaXZlID8gb3JkZXIgOiBVTkRFRklORUQsXG4gICAgICBwb2ludGVyRXZlbnRzOiBtZXJnZWRIaWRkZW4gPyAnbm9uZScgOiBVTkRFRklORUQsXG4gICAgICBwb3NpdGlvbjogbWVyZ2VkSGlkZGVuID8gJ2Fic29sdXRlJyA6IFVOREVGSU5FRFxuICAgIH07XG4gIH1cbiAgdmFyIG92ZXJmbG93UHJvcHMgPSB7fTtcbiAgaWYgKG1lcmdlZEhpZGRlbikge1xuICAgIG92ZXJmbG93UHJvcHNbJ2FyaWEtaGlkZGVuJ10gPSB0cnVlO1xuICB9XG4gIHZhciBpdGVtTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyghaW52YWxpZGF0ZSAmJiBwcmVmaXhDbHMsIGNsYXNzTmFtZSksXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb3ZlcmZsb3dTdHlsZSksIHN0eWxlKVxuICB9LCBvdmVyZmxvd1Byb3BzLCByZXN0UHJvcHMsIHtcbiAgICByZWY6IHJlZlxuICB9KSwgY2hpbGROb2RlKTtcbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICBpdGVtTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoX3JlZikge1xuICAgICAgICB2YXIgb2Zmc2V0V2lkdGggPSBfcmVmLm9mZnNldFdpZHRoO1xuICAgICAgICBpbnRlcm5hbFJlZ2lzdGVyU2l6ZShvZmZzZXRXaWR0aCk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQ6IHJlc3BvbnNpdmVEaXNhYmxlZFxuICAgIH0sIGl0ZW1Ob2RlKTtcbiAgfVxuICByZXR1cm4gaXRlbU5vZGU7XG59XG52YXIgSXRlbSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsSXRlbSk7XG5JdGVtLmRpc3BsYXlOYW1lID0gJ0l0ZW0nO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTsiLCJpbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbm5lbFVwZGF0ZShjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgIHJhZihjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG4gICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICB9XG59IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgdXNlRXZlbnQgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlRXZlbnRcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjaGFubmVsVXBkYXRlIGZyb20gJy4vY2hhbm5lbFVwZGF0ZSc7XG4vKipcbiAqIEJhdGNoZXIgZm9yIHJlY29yZCBhbnkgYHVzZUVmZmVjdFN0YXRlYCBuZWVkIHVwZGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhdGNoZXIoKSB7XG4gIC8vIFVwZGF0ZXIgVHJpZ2dlclxuICB2YXIgdXBkYXRlRnVuY1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgLy8gTm90aWZ5IHVwZGF0ZVxuICB2YXIgbm90aWZ5RWZmZWN0VXBkYXRlID0gZnVuY3Rpb24gbm90aWZ5RWZmZWN0VXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF1cGRhdGVGdW5jUmVmLmN1cnJlbnQpIHtcbiAgICAgIHVwZGF0ZUZ1bmNSZWYuY3VycmVudCA9IFtdO1xuICAgICAgY2hhbm5lbFVwZGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1cGRhdGVGdW5jUmVmLmN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdXBkYXRlRnVuY1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlRnVuY1JlZi5jdXJyZW50LnB1c2goY2FsbGJhY2spO1xuICB9O1xuICByZXR1cm4gbm90aWZ5RWZmZWN0VXBkYXRlO1xufVxuLyoqXG4gKiBUcmlnZ2VyIHN0YXRlIHVwZGF0ZSBieSBgdXNlTGF5b3V0RWZmZWN0YCB0byBzYXZlIHBlcmYuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUVmZmVjdFN0YXRlKG5vdGlmeUVmZmVjdFVwZGF0ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIC8vIFZhbHVlXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0VmFsdWUpLFxuICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgIHN0YXRlVmFsdWUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgIHNldFN0YXRlVmFsdWUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuICAvLyBTZXQgU3RhdGVcbiAgdmFyIHNldEVmZmVjdFZhbCA9IHVzZUV2ZW50KGZ1bmN0aW9uIChuZXh0VmFsdWUpIHtcbiAgICBub3RpZnlFZmZlY3RVcGRhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0U3RhdGVWYWx1ZShuZXh0VmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIFtzdGF0ZVZhbHVlLCBzZXRFZmZlY3RWYWxdO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIE92ZXJmbG93Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJjb21wb25lbnRcIl0sXG4gIF9leGNsdWRlZDIgPSBbXCJjbGFzc05hbWVcIl0sXG4gIF9leGNsdWRlZDMgPSBbXCJjbGFzc05hbWVcIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgeyBPdmVyZmxvd0NvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xudmFyIEludGVybmFsUmF3SXRlbSA9IGZ1bmN0aW9uIEludGVybmFsUmF3SXRlbShwcm9wcywgcmVmKSB7XG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChPdmVyZmxvd0NvbnRleHQpO1xuICAvLyBSZW5kZXIgZGlyZWN0bHkgd2hlbiBjb250ZXh0IG5vdCBwcm92aWRlZFxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB2YXIgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9yZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIF9yZXN0UHJvcHMsIHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSkpO1xuICB9XG4gIHZhciBjb250ZXh0Q2xhc3NOYW1lID0gY29udGV4dC5jbGFzc05hbWUsXG4gICAgcmVzdENvbnRleHQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoY29udGV4dCwgX2V4Y2x1ZGVkMik7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQzKTtcbiAgLy8gRG8gbm90IHBhc3MgY29udGV4dCB0byBzdWIgaXRlbSB0byBhdm9pZCBtdWx0aXBsZSBtZWFzdXJlXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPdmVyZmxvd0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNvbnRleHRDbGFzc05hbWUsIGNsYXNzTmFtZSlcbiAgfSwgcmVzdENvbnRleHQsIHJlc3RQcm9wcykpKTtcbn07XG52YXIgUmF3SXRlbSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsUmF3SXRlbSk7XG5SYXdJdGVtLmRpc3BsYXlOYW1lID0gJ1Jhd0l0ZW0nO1xuZXhwb3J0IGRlZmF1bHQgUmF3SXRlbTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wicHJlZml4Q2xzXCIsIFwiZGF0YVwiLCBcInJlbmRlckl0ZW1cIiwgXCJyZW5kZXJSYXdJdGVtXCIsIFwiaXRlbUtleVwiLCBcIml0ZW1XaWR0aFwiLCBcInNzclwiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwibWF4Q291bnRcIiwgXCJyZW5kZXJSZXN0XCIsIFwicmVuZGVyUmF3UmVzdFwiLCBcInN1ZmZpeFwiLCBcImNvbXBvbmVudFwiLCBcIml0ZW1Db21wb25lbnRcIiwgXCJvblZpc2libGVDaGFuZ2VcIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyYy1yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IHVzZUxheW91dEVmZmVjdCBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VMYXlvdXRFZmZlY3RcIjtcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgdXNlRWZmZWN0U3RhdGUsIHsgdXNlQmF0Y2hlciB9IGZyb20gJy4vaG9va3MvdXNlRWZmZWN0U3RhdGUnO1xuaW1wb3J0IFJhd0l0ZW0gZnJvbSAnLi9SYXdJdGVtJztcbmltcG9ydCB7IE92ZXJmbG93Q29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG52YXIgUkVTUE9OU0lWRSA9ICdyZXNwb25zaXZlJztcbnZhciBJTlZBTElEQVRFID0gJ2ludmFsaWRhdGUnO1xuZXhwb3J0IHsgT3ZlcmZsb3dDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmZ1bmN0aW9uIGRlZmF1bHRSZW5kZXJSZXN0KG9taXR0ZWRJdGVtcykge1xuICByZXR1cm4gXCIrIFwiLmNvbmNhdChvbWl0dGVkSXRlbXMubGVuZ3RoLCBcIiAuLi5cIik7XG59XG5mdW5jdGlvbiBPdmVyZmxvdyhwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy1vdmVyZmxvdycgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgIF9wcm9wcyRkYXRhID0gcHJvcHMuZGF0YSxcbiAgICBkYXRhID0gX3Byb3BzJGRhdGEgPT09IHZvaWQgMCA/IFtdIDogX3Byb3BzJGRhdGEsXG4gICAgcmVuZGVySXRlbSA9IHByb3BzLnJlbmRlckl0ZW0sXG4gICAgcmVuZGVyUmF3SXRlbSA9IHByb3BzLnJlbmRlclJhd0l0ZW0sXG4gICAgaXRlbUtleSA9IHByb3BzLml0ZW1LZXksXG4gICAgX3Byb3BzJGl0ZW1XaWR0aCA9IHByb3BzLml0ZW1XaWR0aCxcbiAgICBpdGVtV2lkdGggPSBfcHJvcHMkaXRlbVdpZHRoID09PSB2b2lkIDAgPyAxMCA6IF9wcm9wcyRpdGVtV2lkdGgsXG4gICAgc3NyID0gcHJvcHMuc3NyLFxuICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgIG1heENvdW50ID0gcHJvcHMubWF4Q291bnQsXG4gICAgcmVuZGVyUmVzdCA9IHByb3BzLnJlbmRlclJlc3QsXG4gICAgcmVuZGVyUmF3UmVzdCA9IHByb3BzLnJlbmRlclJhd1Jlc3QsXG4gICAgc3VmZml4ID0gcHJvcHMuc3VmZml4LFxuICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgIGl0ZW1Db21wb25lbnQgPSBwcm9wcy5pdGVtQ29tcG9uZW50LFxuICAgIG9uVmlzaWJsZUNoYW5nZSA9IHByb3BzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG4gIHZhciBmdWxseVNTUiA9IHNzciA9PT0gJ2Z1bGwnO1xuICB2YXIgbm90aWZ5RWZmZWN0VXBkYXRlID0gdXNlQmF0Y2hlcigpO1xuICB2YXIgX3VzZUVmZmVjdFN0YXRlID0gdXNlRWZmZWN0U3RhdGUobm90aWZ5RWZmZWN0VXBkYXRlLCBudWxsKSxcbiAgICBfdXNlRWZmZWN0U3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUVmZmVjdFN0YXRlLCAyKSxcbiAgICBjb250YWluZXJXaWR0aCA9IF91c2VFZmZlY3RTdGF0ZTJbMF0sXG4gICAgc2V0Q29udGFpbmVyV2lkdGggPSBfdXNlRWZmZWN0U3RhdGUyWzFdO1xuICB2YXIgbWVyZ2VkQ29udGFpbmVyV2lkdGggPSBjb250YWluZXJXaWR0aCB8fCAwO1xuICB2YXIgX3VzZUVmZmVjdFN0YXRlMyA9IHVzZUVmZmVjdFN0YXRlKG5vdGlmeUVmZmVjdFVwZGF0ZSwgbmV3IE1hcCgpKSxcbiAgICBfdXNlRWZmZWN0U3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZUVmZmVjdFN0YXRlMywgMiksXG4gICAgaXRlbVdpZHRocyA9IF91c2VFZmZlY3RTdGF0ZTRbMF0sXG4gICAgc2V0SXRlbVdpZHRocyA9IF91c2VFZmZlY3RTdGF0ZTRbMV07XG4gIHZhciBfdXNlRWZmZWN0U3RhdGU1ID0gdXNlRWZmZWN0U3RhdGUobm90aWZ5RWZmZWN0VXBkYXRlLCAwKSxcbiAgICBfdXNlRWZmZWN0U3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZUVmZmVjdFN0YXRlNSwgMiksXG4gICAgcHJldlJlc3RXaWR0aCA9IF91c2VFZmZlY3RTdGF0ZTZbMF0sXG4gICAgc2V0UHJldlJlc3RXaWR0aCA9IF91c2VFZmZlY3RTdGF0ZTZbMV07XG4gIHZhciBfdXNlRWZmZWN0U3RhdGU3ID0gdXNlRWZmZWN0U3RhdGUobm90aWZ5RWZmZWN0VXBkYXRlLCAwKSxcbiAgICBfdXNlRWZmZWN0U3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZUVmZmVjdFN0YXRlNywgMiksXG4gICAgcmVzdFdpZHRoID0gX3VzZUVmZmVjdFN0YXRlOFswXSxcbiAgICBzZXRSZXN0V2lkdGggPSBfdXNlRWZmZWN0U3RhdGU4WzFdO1xuICB2YXIgX3VzZUVmZmVjdFN0YXRlOSA9IHVzZUVmZmVjdFN0YXRlKG5vdGlmeUVmZmVjdFVwZGF0ZSwgMCksXG4gICAgX3VzZUVmZmVjdFN0YXRlMTAgPSBfc2xpY2VkVG9BcnJheShfdXNlRWZmZWN0U3RhdGU5LCAyKSxcbiAgICBzdWZmaXhXaWR0aCA9IF91c2VFZmZlY3RTdGF0ZTEwWzBdLFxuICAgIHNldFN1ZmZpeFdpZHRoID0gX3VzZUVmZmVjdFN0YXRlMTBbMV07XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShudWxsKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBzdWZmaXhGaXhlZFN0YXJ0ID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRTdWZmaXhGaXhlZFN0YXJ0ID0gX3VzZVN0YXRlMlsxXTtcbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShudWxsKSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgZGlzcGxheUNvdW50ID0gX3VzZVN0YXRlNFswXSxcbiAgICBzZXREaXNwbGF5Q291bnQgPSBfdXNlU3RhdGU0WzFdO1xuICB2YXIgbWVyZ2VkRGlzcGxheUNvdW50ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpc3BsYXlDb3VudCA9PT0gbnVsbCAmJiBmdWxseVNTUikge1xuICAgICAgcmV0dXJuIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheUNvdW50IHx8IDA7XG4gIH0sIFtkaXNwbGF5Q291bnQsIGNvbnRhaW5lcldpZHRoXSk7XG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICByZXN0UmVhZHkgPSBfdXNlU3RhdGU2WzBdLFxuICAgIHNldFJlc3RSZWFkeSA9IF91c2VTdGF0ZTZbMV07XG4gIHZhciBpdGVtUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtXCIpO1xuICAvLyBBbHdheXMgdXNlIHRoZSBtYXggd2lkdGggdG8gYXZvaWQgYmxpbmtcbiAgdmFyIG1lcmdlZFJlc3RXaWR0aCA9IE1hdGgubWF4KHByZXZSZXN0V2lkdGgsIHJlc3RXaWR0aCk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBEYXRhID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgaXNSZXNwb25zaXZlID0gbWF4Q291bnQgPT09IFJFU1BPTlNJVkU7XG4gIHZhciBzaG91bGRSZXNwb25zaXZlID0gZGF0YS5sZW5ndGggJiYgaXNSZXNwb25zaXZlO1xuICB2YXIgaW52YWxpZGF0ZSA9IG1heENvdW50ID09PSBJTlZBTElEQVRFO1xuICAvKipcbiAgICogV2hlbiBpcyBgcmVzcG9uc2l2ZWAsIHdlIHdpbGwgYWx3YXlzIHJlbmRlciByZXN0IG5vZGUgdG8gZ2V0IHRoZSByZWFsIHdpZHRoIG9mIGl0IGZvciBjYWxjdWxhdGlvblxuICAgKi9cbiAgdmFyIHNob3dSZXN0ID0gc2hvdWxkUmVzcG9uc2l2ZSB8fCB0eXBlb2YgbWF4Q291bnQgPT09ICdudW1iZXInICYmIGRhdGEubGVuZ3RoID4gbWF4Q291bnQ7XG4gIHZhciBtZXJnZWREYXRhID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGl0ZW1zID0gZGF0YTtcbiAgICBpZiAoc2hvdWxkUmVzcG9uc2l2ZSkge1xuICAgICAgaWYgKGNvbnRhaW5lcldpZHRoID09PSBudWxsICYmIGZ1bGx5U1NSKSB7XG4gICAgICAgIGl0ZW1zID0gZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1zID0gZGF0YS5zbGljZSgwLCBNYXRoLm1pbihkYXRhLmxlbmd0aCwgbWVyZ2VkQ29udGFpbmVyV2lkdGggLyBpdGVtV2lkdGgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXhDb3VudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGl0ZW1zID0gZGF0YS5zbGljZSgwLCBtYXhDb3VudCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfSwgW2RhdGEsIGl0ZW1XaWR0aCwgY29udGFpbmVyV2lkdGgsIG1heENvdW50LCBzaG91bGRSZXNwb25zaXZlXSk7XG4gIHZhciBvbWl0dGVkSXRlbXMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2hvdWxkUmVzcG9uc2l2ZSkge1xuICAgICAgcmV0dXJuIGRhdGEuc2xpY2UobWVyZ2VkRGlzcGxheUNvdW50ICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnNsaWNlKG1lcmdlZERhdGEubGVuZ3RoKTtcbiAgfSwgW2RhdGEsIG1lcmdlZERhdGEsIHNob3VsZFJlc3BvbnNpdmUsIG1lcmdlZERpc3BsYXlDb3VudF0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSXRlbSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGdldEtleSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHZhciBfcmVmO1xuICAgIGlmICh0eXBlb2YgaXRlbUtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZW1LZXkoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiAoX3JlZiA9IGl0ZW1LZXkgJiYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbVtpdGVtS2V5XSkpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBpbmRleDtcbiAgfSwgW2l0ZW1LZXldKTtcbiAgdmFyIG1lcmdlZFJlbmRlckl0ZW0gPSB1c2VDYWxsYmFjayhyZW5kZXJJdGVtIHx8IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0sIFtyZW5kZXJJdGVtXSk7XG4gIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlDb3VudChjb3VudCwgc3VmZml4Rml4ZWRTdGFydFZhbCwgbm90UmVhZHkpIHtcbiAgICAvLyBSZWFjdCAxOCB3aWxsIHN5bmMgcmVuZGVyIGV2ZW4gd2hlbiB0aGUgdmFsdWUgaXMgc2FtZSBpbiBzb21lIGNhc2UuXG4gICAgLy8gV2UgdGFrZSBgbWVyZ2VkRGF0YWAgYXMgZGVwcyB3aGljaCBtYXkgY2F1c2UgZGVhZCBsb29wIGlmIGl0J3MgZHluYW1pYyBnZW5lcmF0ZS5cbiAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzM2NTU5XG4gICAgaWYgKGRpc3BsYXlDb3VudCA9PT0gY291bnQgJiYgKHN1ZmZpeEZpeGVkU3RhcnRWYWwgPT09IHVuZGVmaW5lZCB8fCBzdWZmaXhGaXhlZFN0YXJ0VmFsID09PSBzdWZmaXhGaXhlZFN0YXJ0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXREaXNwbGF5Q291bnQoY291bnQpO1xuICAgIGlmICghbm90UmVhZHkpIHtcbiAgICAgIHNldFJlc3RSZWFkeShjb3VudCA8IGRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICBvblZpc2libGVDaGFuZ2UgPT09IG51bGwgfHwgb25WaXNpYmxlQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblZpc2libGVDaGFuZ2UoY291bnQpO1xuICAgIH1cbiAgICBpZiAoc3VmZml4Rml4ZWRTdGFydFZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRTdWZmaXhGaXhlZFN0YXJ0KHN1ZmZpeEZpeGVkU3RhcnRWYWwpO1xuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2l6ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gb25PdmVyZmxvd1Jlc2l6ZShfLCBlbGVtZW50KSB7XG4gICAgc2V0Q29udGFpbmVyV2lkdGgoZWxlbWVudC5jbGllbnRXaWR0aCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVnaXN0ZXJTaXplKGtleSwgd2lkdGgpIHtcbiAgICBzZXRJdGVtV2lkdGhzKGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgICAgIHZhciBjbG9uZSA9IG5ldyBNYXAob3JpZ2luKTtcbiAgICAgIGlmICh3aWR0aCA9PT0gbnVsbCkge1xuICAgICAgICBjbG9uZS5kZWxldGUoa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLnNldChrZXksIHdpZHRoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZWdpc3Rlck92ZXJmbG93U2l6ZShfLCB3aWR0aCkge1xuICAgIHNldFJlc3RXaWR0aCh3aWR0aCk7XG4gICAgc2V0UHJldlJlc3RXaWR0aChyZXN0V2lkdGgpO1xuICB9XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyU3VmZml4U2l6ZShfLCB3aWR0aCkge1xuICAgIHNldFN1ZmZpeFdpZHRoKHdpZHRoKTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZ2V0SXRlbVdpZHRoKGluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1XaWR0aHMuZ2V0KGdldEtleShtZXJnZWREYXRhW2luZGV4XSwgaW5kZXgpKTtcbiAgfVxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtZXJnZWRDb250YWluZXJXaWR0aCAmJiB0eXBlb2YgbWVyZ2VkUmVzdFdpZHRoID09PSAnbnVtYmVyJyAmJiBtZXJnZWREYXRhKSB7XG4gICAgICB2YXIgdG90YWxXaWR0aCA9IHN1ZmZpeFdpZHRoO1xuICAgICAgdmFyIGxlbiA9IG1lcmdlZERhdGEubGVuZ3RoO1xuICAgICAgdmFyIGxhc3RJbmRleCA9IGxlbiAtIDE7XG4gICAgICAvLyBXaGVuIGRhdGEgY291bnQgY2hhbmdlIHRvIDAsIHJlc2V0IHRoaXMgc2luY2Ugbm90IGxvb3Agd2lsbCByZWFjaFxuICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgdXBkYXRlRGlzcGxheUNvdW50KDAsIG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjdXJyZW50SXRlbVdpZHRoID0gZ2V0SXRlbVdpZHRoKGkpO1xuICAgICAgICAvLyBGdWxseSB3aWxsIGFsd2F5cyByZW5kZXJcbiAgICAgICAgaWYgKGZ1bGx5U1NSKSB7XG4gICAgICAgICAgY3VycmVudEl0ZW1XaWR0aCA9IGN1cnJlbnRJdGVtV2lkdGggfHwgMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBCcmVhayBzaW5jZSBkYXRhIG5vdCByZWFkeVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1XaWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdXBkYXRlRGlzcGxheUNvdW50KGkgLSAxLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgYmVzdCBtYXRjaFxuICAgICAgICB0b3RhbFdpZHRoICs9IGN1cnJlbnRJdGVtV2lkdGg7XG4gICAgICAgIGlmIChcbiAgICAgICAgLy8gT25seSBvbmUgbWVhbnMgYHRvdGFsV2lkdGhgIGlzIHRoZSBmaW5hbCB3aWR0aFxuICAgICAgICBsYXN0SW5kZXggPT09IDAgJiYgdG90YWxXaWR0aCA8PSBtZXJnZWRDb250YWluZXJXaWR0aCB8fFxuICAgICAgICAvLyBMYXN0IHR3byB3aWR0aCB3aWxsIGJlIHRoZSBmaW5hbCB3aWR0aFxuICAgICAgICBpID09PSBsYXN0SW5kZXggLSAxICYmIHRvdGFsV2lkdGggKyBnZXRJdGVtV2lkdGgobGFzdEluZGV4KSA8PSBtZXJnZWRDb250YWluZXJXaWR0aCkge1xuICAgICAgICAgIC8vIEFkZGl0aW9uYWwgY2hlY2sgaWYgbWF0Y2ggdGhlIGVuZFxuICAgICAgICAgIHVwZGF0ZURpc3BsYXlDb3VudChsYXN0SW5kZXgsIG51bGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsV2lkdGggKyBtZXJnZWRSZXN0V2lkdGggPiBtZXJnZWRDb250YWluZXJXaWR0aCkge1xuICAgICAgICAgIC8vIENhbiBub3QgaG9sZCBhbGwgdGhlIGNvbnRlbnQgdG8gc2hvdyByZXN0XG4gICAgICAgICAgdXBkYXRlRGlzcGxheUNvdW50KGkgLSAxLCB0b3RhbFdpZHRoIC0gY3VycmVudEl0ZW1XaWR0aCAtIHN1ZmZpeFdpZHRoICsgcmVzdFdpZHRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1ZmZpeCAmJiBnZXRJdGVtV2lkdGgoMCkgKyBzdWZmaXhXaWR0aCA+IG1lcmdlZENvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIHNldFN1ZmZpeEZpeGVkU3RhcnQobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbWVyZ2VkQ29udGFpbmVyV2lkdGgsIGl0ZW1XaWR0aHMsIHJlc3RXaWR0aCwgc3VmZml4V2lkdGgsIGdldEtleSwgbWVyZ2VkRGF0YV0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGRpc3BsYXlSZXN0ID0gcmVzdFJlYWR5ICYmICEhb21pdHRlZEl0ZW1zLmxlbmd0aDtcbiAgdmFyIHN1ZmZpeFN0eWxlID0ge307XG4gIGlmIChzdWZmaXhGaXhlZFN0YXJ0ICE9PSBudWxsICYmIHNob3VsZFJlc3BvbnNpdmUpIHtcbiAgICBzdWZmaXhTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogc3VmZml4Rml4ZWRTdGFydCxcbiAgICAgIHRvcDogMFxuICAgIH07XG4gIH1cbiAgdmFyIGl0ZW1TaGFyZWRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6IGl0ZW1QcmVmaXhDbHMsXG4gICAgcmVzcG9uc2l2ZTogc2hvdWxkUmVzcG9uc2l2ZSxcbiAgICBjb21wb25lbnQ6IGl0ZW1Db21wb25lbnQsXG4gICAgaW52YWxpZGF0ZTogaW52YWxpZGF0ZVxuICB9O1xuICAvLyA+Pj4+PiBDaG9pY2UgcmVuZGVyIGZ1biBieSBgcmVuZGVyUmF3SXRlbWBcbiAgdmFyIGludGVybmFsUmVuZGVySXRlbU5vZGUgPSByZW5kZXJSYXdJdGVtID8gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGdldEtleShpdGVtLCBpbmRleCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE92ZXJmbG93Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAga2V5OiBrZXksXG4gICAgICB2YWx1ZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtU2hhcmVkUHJvcHMpLCB7fSwge1xuICAgICAgICBvcmRlcjogaW5kZXgsXG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGl0ZW1LZXk6IGtleSxcbiAgICAgICAgcmVnaXN0ZXJTaXplOiByZWdpc3RlclNpemUsXG4gICAgICAgIGRpc3BsYXk6IGluZGV4IDw9IG1lcmdlZERpc3BsYXlDb3VudFxuICAgICAgfSlcbiAgICB9LCByZW5kZXJSYXdJdGVtKGl0ZW0sIGluZGV4KSk7XG4gIH0gOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gZ2V0S2V5KGl0ZW0sIGluZGV4KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgX2V4dGVuZHMoe30sIGl0ZW1TaGFyZWRQcm9wcywge1xuICAgICAgb3JkZXI6IGluZGV4LFxuICAgICAga2V5OiBrZXksXG4gICAgICBpdGVtOiBpdGVtLFxuICAgICAgcmVuZGVySXRlbTogbWVyZ2VkUmVuZGVySXRlbSxcbiAgICAgIGl0ZW1LZXk6IGtleSxcbiAgICAgIHJlZ2lzdGVyU2l6ZTogcmVnaXN0ZXJTaXplLFxuICAgICAgZGlzcGxheTogaW5kZXggPD0gbWVyZ2VkRGlzcGxheUNvdW50XG4gICAgfSkpO1xuICB9O1xuICAvLyA+Pj4+PiBSZXN0IG5vZGVcbiAgdmFyIHJlc3ROb2RlO1xuICB2YXIgcmVzdENvbnRleHRQcm9wcyA9IHtcbiAgICBvcmRlcjogZGlzcGxheVJlc3QgPyBtZXJnZWREaXNwbGF5Q291bnQgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGl0ZW1QcmVmaXhDbHMsIFwiLXJlc3RcIiksXG4gICAgcmVnaXN0ZXJTaXplOiByZWdpc3Rlck92ZXJmbG93U2l6ZSxcbiAgICBkaXNwbGF5OiBkaXNwbGF5UmVzdFxuICB9O1xuICBpZiAoIXJlbmRlclJhd1Jlc3QpIHtcbiAgICB2YXIgbWVyZ2VkUmVuZGVyUmVzdCA9IHJlbmRlclJlc3QgfHwgZGVmYXVsdFJlbmRlclJlc3Q7XG4gICAgcmVzdE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCBfZXh0ZW5kcyh7fSwgaXRlbVNoYXJlZFByb3BzLCByZXN0Q29udGV4dFByb3BzKSwgdHlwZW9mIG1lcmdlZFJlbmRlclJlc3QgPT09ICdmdW5jdGlvbicgPyBtZXJnZWRSZW5kZXJSZXN0KG9taXR0ZWRJdGVtcykgOiBtZXJnZWRSZW5kZXJSZXN0KTtcbiAgfSBlbHNlIGlmIChyZW5kZXJSYXdSZXN0KSB7XG4gICAgcmVzdE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPdmVyZmxvd0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW1TaGFyZWRQcm9wcyksIHJlc3RDb250ZXh0UHJvcHMpXG4gICAgfSwgcmVuZGVyUmF3UmVzdChvbWl0dGVkSXRlbXMpKTtcbiAgfVxuICB2YXIgb3ZlcmZsb3dOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCFpbnZhbGlkYXRlICYmIHByZWZpeENscywgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgcmVmOiByZWZcbiAgfSwgcmVzdFByb3BzKSwgbWVyZ2VkRGF0YS5tYXAoaW50ZXJuYWxSZW5kZXJJdGVtTm9kZSksIHNob3dSZXN0ID8gcmVzdE5vZGUgOiBudWxsLCBzdWZmaXggJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgX2V4dGVuZHMoe30sIGl0ZW1TaGFyZWRQcm9wcywge1xuICAgIHJlc3BvbnNpdmU6IGlzUmVzcG9uc2l2ZSxcbiAgICByZXNwb25zaXZlRGlzYWJsZWQ6ICFzaG91bGRSZXNwb25zaXZlLFxuICAgIG9yZGVyOiBtZXJnZWREaXNwbGF5Q291bnQsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1zdWZmaXhcIiksXG4gICAgcmVnaXN0ZXJTaXplOiByZWdpc3RlclN1ZmZpeFNpemUsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICBzdHlsZTogc3VmZml4U3R5bGVcbiAgfSksIHN1ZmZpeCkpO1xuICBpZiAoaXNSZXNwb25zaXZlKSB7XG4gICAgb3ZlcmZsb3dOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgIG9uUmVzaXplOiBvbk92ZXJmbG93UmVzaXplLFxuICAgICAgZGlzYWJsZWQ6ICFzaG91bGRSZXNwb25zaXZlXG4gICAgfSwgb3ZlcmZsb3dOb2RlKTtcbiAgfVxuICByZXR1cm4gb3ZlcmZsb3dOb2RlO1xufVxudmFyIEZvcndhcmRPdmVyZmxvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKE92ZXJmbG93KTtcbkZvcndhcmRPdmVyZmxvdy5kaXNwbGF5TmFtZSA9ICdPdmVyZmxvdyc7XG5Gb3J3YXJkT3ZlcmZsb3cuSXRlbSA9IFJhd0l0ZW07XG5Gb3J3YXJkT3ZlcmZsb3cuUkVTUE9OU0lWRSA9IFJFU1BPTlNJVkU7XG5Gb3J3YXJkT3ZlcmZsb3cuSU5WQUxJREFURSA9IElOVkFMSURBVEU7XG4vLyBDb252ZXJ0IHRvIGdlbmVyaWMgdHlwZVxuZXhwb3J0IGRlZmF1bHQgRm9yd2FyZE92ZXJmbG93OyIsImltcG9ydCBPdmVyZmxvdyBmcm9tICcuL092ZXJmbG93JztcbmV4cG9ydCBkZWZhdWx0IE92ZXJmbG93OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///39983
`)}}]);
