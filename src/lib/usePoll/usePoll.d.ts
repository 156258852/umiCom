import { IPollConfig, ServiceReturnPromise } from './types';
export default function usePoll<T extends ServiceReturnPromise>(service: T, options?: IPollConfig): void;
