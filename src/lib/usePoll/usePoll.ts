import { useRef, useEffect } from 'react';
import { IPollConfig, ServiceReturnPromise } from './types';

export default function usePoll<T extends ServiceReturnPromise>(service: T, options?: IPollConfig) {
  const timer = useRef(0);

  const { refreshInterval, refreshTimeout } = options || {};
  const delay = refreshInterval || refreshTimeout;

  const clear = () => clearTimeout(timer.current);
  const polling = () => {
    clear();
    timer.current = setTimeout(() => {
      service();
      refreshInterval && polling();
    }, delay) as unknown as number;
  };

  useEffect(() => {
    delay && polling();
    return clear;
  }, [delay]);
}
