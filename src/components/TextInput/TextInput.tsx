import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTextHook } from "../../hooks/useText"
import { UseListResult } from '../../hooks/useList';

export interface TextInputProps {
    addItem: UseListResult["addItem"]
}

export function TextInput({addItem}:TextInputProps){

    const {currentText:textInputValue, setCurrentText:hadleChange} = useTextHook()

    return (
        <>
            <TextField 
                id="standard-basic"
                
                inputProps={{
                    'aria-label': "enter shop list item"
                }}
                variant="standard" 
                value={textInputValue} 
                onChange={(event) => {
                    hadleChange(event.target.value)
                }}
            />
            <Button 
                variant="text" 
                onClick={() => {
                    hadleChange("")
                    addItem(textInputValue)
                }}
                disabled={!textInputValue ? true : false}>
                Save
            </Button>
        </>
    )
}

export default TextInput;