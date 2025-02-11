import { useEffect } from 'react';
import { on, once, off, EventNameType } from './EventCenter';

const useEvent = (
  name: EventNameType,
  // eslint-disable-next-line no-unused-vars
  handler: (data: any) => void,
  isOnce: boolean = false,
) => {
  useEffect(() => {
    if (!handler) {
      return;
    }

    isOnce ? once({ name, handler }) : on({ name, handler });

    return () => {
      off(name, handler);
    };
  }, [name, handler]);
};

export default useEvent;
