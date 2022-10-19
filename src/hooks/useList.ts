import { useState } from "react";

export interface ListItem {
    done: boolean;
    textValue: string;
}

export interface UseListResult {
    list: ListItem[];
    addItem: (arg: string) => void;
    modifyItem: (checked: boolean, index: number) => void;
}

export function useListHook():UseListResult{

    const [list, setList] = useState<ListItem[]>([])

    function addItem(textValue: string){
        const newItem = {done: false, textValue}
        const newList = [...list]
        newList.push(newItem)
        setList(newList)
    }

    function modifyItem(checked: boolean, index: number){
        console.log(checked, index)
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
        console.log(list)
    }
    return {list, addItem, modifyItem }
}
