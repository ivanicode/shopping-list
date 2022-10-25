import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useListHook } from "./useList";

describe('useListHook', () => {
    it('should return proper data', () => {
        const { result } = renderHook(() => useListHook());

        expect(result.current.list).toEqual([])
        expect(typeof result.current.addItem).toBe('function')
        expect(typeof result.current.deleteItem).toBe('function')
    })
    it('should allow to add or remove item', () => {
        const { result } = renderHook(() => useListHook());

        expect(result.current.list).toEqual([])

        act(() => {
            result.current.addItem("tomato")
        })

        expect(result.current.list).toStrictEqual([{textValue: "tomato"}])

        act(() => {
            result.current.deleteItem(true, 0)
        })
        
        expect(result.current.list).toEqual([])
    })
})