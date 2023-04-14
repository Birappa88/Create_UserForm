import React from 'react'
import TextField from '@mui/material/TextField';

function AddText(props) {

    const { user, setUser, name, label, id } = props

    return (
        <div className='divtext'>
            <TextField
                id={id}
                label={label}
                name={name}
                value={user[name]}
                onChange={(event) =>
                    setUser({
                        ...user,
                        [name]: event.target.value
                    })
                }
            />
        </div>
    )
}

export default AddText