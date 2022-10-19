import { useRef, useState } from "react";

export interface UseTextHookResult {
  currentText: string;
  setCurrentText: (arg: string) => void;
  textLength: number;
  modified: boolean;
}

export function useTextHook(): UseTextHookResult {
  const [currentText, setter] = useState<string>("");
  const modifiedState = useRef<boolean>(false);
  function setCurrentText(newValue: string) {
    setter(newValue);
    modifiedState.current = true;
  }
  return {
    currentText,
    setCurrentText,
    textLength: currentText.length,
    modified: modifiedState.current
  };
}
