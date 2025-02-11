import { ServiceReturnPromise, PromiseType, Options } from './types';
declare type AsyncState<T> = {
    loading: boolean;
    error?: undefined;
    data?: undefined;
} | {
    loading: true;
    error?: Error | undefined;
    data?: T;
} | {
    loading: false;
    error: Error;
    data?: undefined;
} | {
    loading: false;
    error?: undefined;
    data: T;
};
declare type StateFromServiceReturningPromise<T extends ServiceReturnPromise> = AsyncState<PromiseType<ReturnType<T>>>;
declare type AsyncFnReturn<T extends ServiceReturnPromise = ServiceReturnPromise> = [StateFromServiceReturningPromise<T>, T];
export default function useAsync<T extends ServiceReturnPromise>(service: T, initialState: StateFromServiceReturningPromise<T>, options?: Options): AsyncFnReturn<T>;
export {};
