import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

function AddSelect(props) {

    const { user, setUser, name, label, id } = props

    const Gender = ["Male", "Female", "Other"];

    const Positions = [
        "Software Engineer",
        "Frontend Engineer",
        "Backend Engineer",
        "Data Analyst",
        "Quality Assurance"
    ];

    const Array = name === "gender" ? Gender : Positions

    return (
        <div className='divselect'>
            <TextField
                id={id}
                select
                label={label}
                helperText={`Please  ${label}`}
                variant="filled"
                name={name}
                onChange={(event) =>
                    setUser({
                        ...user,
                        [name]: event.target.value
                    })
                }
            >
                {Array.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default AddSelect