declare type EventNameType = string | number;
interface EventOptions {
    /** 事件名 */
    name: EventNameType;
    /** 处理函数 */
    handler: (data: any) => void;
    /** 执行次数 */
    exeCount?: number;
}
declare function once(options: EventOptions): void;
declare function on(options: EventOptions): void;
declare function off<T extends EventOptions['handler']>(name: EventNameType, handler: T): void;
declare function dispatch(name: EventNameType, data?: any): void;
export { on, once, off, EventNameType, dispatch, };
