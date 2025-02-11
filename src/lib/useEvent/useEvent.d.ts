import { EventNameType } from './EventCenter';
declare const useEvent: (name: EventNameType, handler: (data: any) => void, isOnce?: boolean) => void;
export default useEvent;
