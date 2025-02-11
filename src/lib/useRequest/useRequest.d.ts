import { ServiceReturnPromise, Options, PaginationInfo } from './types';
export default function useRequest<T extends ServiceReturnPromise>(service: T, options?: Options): {
    refresh: T;
    pagination: PaginationInfo | undefined;
    loading: boolean;
    error?: undefined;
    data?: undefined;
} | {
    refresh: T;
    pagination: PaginationInfo | undefined;
    loading: false;
    error: Error;
    data?: undefined;
} | {
    refresh: T;
    pagination: PaginationInfo | undefined;
    loading: true;
    error?: Error | undefined;
    data?: import("./types").PromiseType<ReturnType<T>> | undefined;
} | {
    refresh: T;
    pagination: PaginationInfo | undefined;
    loading: false;
    error?: undefined;
    data: import("./types").PromiseType<ReturnType<T>>;
};
