import { useReducer } from 'react';

// eslint-disable-next-line no-unused-vars
type ToggleReturnType = (nextValue?: boolean) => void;

const toggleReducer = (
  state: boolean,
  nextValue?: boolean
) => (typeof nextValue === 'boolean' ? nextValue : !state);

const useToggle = (
  initialValue: boolean
): [boolean, ToggleReturnType] => useReducer(toggleReducer, initialValue);

export default useToggle;

