import { useTextHook } from "./useText";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useTextHook", () => {
  it("", () => {
    const { result } = renderHook(() => useTextHook());
    expect(result.current.modified).toBe(false)
    expect(result.current.currentText).toEqual("")
    expect(result.current.textLength).toEqual(0)
    act(() => {
        result.current.setCurrentText("abcde")
    })
    expect(result.current.currentText).toEqual("abcde")
    expect(result.current.modified).toBe(true)
    expect(result.current.textLength).toEqual(5)
  });
});
