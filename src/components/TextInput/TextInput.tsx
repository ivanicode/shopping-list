import React from 'react';
import TextField from '@mui/material/TextField';


export function TextInput(){
    return (
        <>
            <TextField id="standard-basic" label="Standard" variant="standard" style={{
        backgroundColor: "blue"
    }} />
        </>
    )
}


export default TextInput;