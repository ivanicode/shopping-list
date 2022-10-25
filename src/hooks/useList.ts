import { useState } from "react";

export interface ListItem {
    textValue: string;
}

export interface UseListResult {
    list: ListItem[];
    addItem: (arg: string) => void;
    deleteItem: (checked: boolean, index: number) => void;
}

export function useListHook():UseListResult{

    const [list, setList] = useState<ListItem[]>([])

    function addItem(textValue: string){
        const newItem = {textValue}
        const newList = [...list]
        newList.push(newItem)
        setList(newList)
    }

    function deleteItem(checked: boolean, index: number){
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    return {list, addItem, deleteItem }
}
