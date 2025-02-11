
type EventNameType = string | number;

interface EventOptions {
  /** 事件名 */
  name: EventNameType;
  /** 处理函数 */
  handler: (data: any) => void; // eslint-disable-line
  /** 执行次数 */
  exeCount?: number;
}

const allEvent: { [name: string]: EventOptions[] } = {};

function once(options: EventOptions): void {
  addEvent({ ...options, exeCount: 1 });
}

function on(options: EventOptions): void {
  addEvent({ ...options, exeCount: -1 });
}

function addEvent(options: EventOptions): void {
  const { name, handler, exeCount } = options;
  allEvent[name] = allEvent[name] || [];
  const events = allEvent[name];

  for (const event of events) {
    // 防止重复注册
    if (event.handler === handler) return;
  }

  events.push({ name, handler, exeCount });
}

function off<T extends EventOptions['handler']>(name: EventNameType, handler: T): void {
  const events = allEvent[name];
  for (let i: number = 0; i < events.length; i++) {
    const t = events[i];
    if (t.handler === handler) {
      events.splice(i, 1);
      break;
    }
  }
}

function dispatch(name: EventNameType, data: any = null): void {
  const events = allEvent[name] || [];

  for (const event of events) {
    const { handler } = event;
    handler && handler(data);
  }

  // 移除一次性事件
  for (let i: number = 0; i < events.length; i++) {
    const e = events[i];
    const { exeCount } = e;
    if (exeCount === 1) { // eslint-disable-line
      events.splice(i, 1);
      i--;
    }
  }
}

export {
  on,
  once,
  off,
  EventNameType,
  dispatch,
};
