export interface ServiceParams {
    /**
     * 开启分页模式后，service需要接受收的参数
     */
    CurrentPage?: number;
    /**
     * 开启分页模式后，service需要接受收的参数
     */
    PageSize?: number;
    /**
     * 自定义传参 一般用于手动模式
     *
     * refresh({customerArgs})
     */
    [key: string]: any;
}
export declare type ServiceReturnPromise = (params?: ServiceParams) => Promise<any>;
export declare type DependencyList = readonly any[];
export declare type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never;
export declare type PaginationFormater = (params: {
    data: any;
    updater: ServiceReturnPromise;
}) => PaginationInfo;
export interface Options {
    /**
     * 当依赖发生变化，才会重新执行请求
     *
     * useEffect的语法糖，快速实现以下功能
     * @example
     * ```
     * const {data, refresh} = useRequest(service, options);
     * useEffect(()=>{
     *    refresh(params)
     * }, [deps]);
     * ```
     */
    deps?: DependencyList;
    /**
     * 默认参数 类型为Object
     */
    defaultParams?: {
        [key: string]: any;
    };
    /**
     * 定时执行，重复执行，单位 ms
     */
    refreshInterval?: number;
    /**
     * 定时执行，执行一次，单位 ms
     */
    refreshTimeout?: number;
    /**
     * 是否手动执行，默认为false
     */
    manual?: boolean;
    /**
     * 是否开启分页模式，默认为false
     */
    paginated?: boolean;
    /**
     * 配置自定义分页转换器，如果内置分页转换器不满足现有数据结构，可以自行转换
     */
    paginationFormater?: PaginationFormater;
}
export interface PaginationInfo {
    total: number;
    current: number;
    pageSize: number;
    onChange: (current: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}
