import { Checkbox } from '@mui/material';
import { UseListResult } from '../../hooks/useList';

export interface ItemsProps {
    list: UseListResult["list"]
    deleteItem: UseListResult["deleteItem"]
}

export function Items({list, deleteItem}:ItemsProps){

    return (
        <>
            <ul>
                {list.map((listItem, index) => (
                    <li key={listItem.textValue+index}>
                        <label>
                            <Checkbox id={listItem.textValue} 
                                onChange={(event) => {
                                    deleteItem(event.target.checked, index)
                                }} 
                            />
                            {listItem.textValue}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default Items;