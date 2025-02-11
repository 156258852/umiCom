declare type ToggleReturnType = (nextValue?: boolean) => void;
declare const useToggle: (initialValue: boolean) => [boolean, ToggleReturnType];
export default useToggle;
