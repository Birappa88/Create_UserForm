import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

function AddCheckbox(props) {

    const { user, setUser, name, label, id } = props

    const Skills = ["JavaScript", "ReactJs", "NodeJs", "Python", "Java"]

    const handleToggle = (value) => () => {
        const currentIndex = user.skills.indexOf(value);
        const newChecked = [...user.skills];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setUser({
            ...user,
            [name]: newChecked
        });
    };

    return (
        <div className='divcheck'>
            <label>{label} :- </label>
            {Skills.map((value) => {
                const labelId = `transfer-list-item-${value}-label`;
                return (
                    <ListItem
                        key={value}
                        role="listitem"
                        onClick={handleToggle(value)}
                        sx={{width:"100px", mr:"25px"}}
                    >
                            <Checkbox
                                checked={user.skills.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{
                                    'aria-labelledby': labelId,
                                }}
                            />
                        <ListItemText label={label} id={labelId} primary={value} />
                    </ListItem>
                );
            })}
        </div>
    )
}

export default AddCheckbox