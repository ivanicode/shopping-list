import { Checkbox } from '@mui/material';
import React from 'react';
import { UseListResult } from '../../hooks/useList';
import { useListHook } from '../../hooks/useList';

export interface ItemsProps {
    list: UseListResult["list"]
    modifyItem: UseListResult["modifyItem"]
}

export function Items({list, modifyItem}:ItemsProps){
    console.log(list)
    return (
        <>
            <ul>
                {list.map((listItem, index) => (
                    <li key={listItem.textValue+index}>{listItem.textValue} <Checkbox id={listItem.textValue} 
                    onChange={(event) => {modifyItem(event.target.checked, index)}} /></li>
                ))}
            </ul>
        </>
    )
}


export default Items;