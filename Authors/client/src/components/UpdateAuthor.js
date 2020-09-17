import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateAuthor = (props) => {
//==   S T A T E   ==||
const [Author, setAuthor] = useState({
    name: ""
});

const [errors, setErrors] = useState({
    name: ""
});

//==   E F F E C T   ==||
useEffect(() => {
    axios.get(`http://localhost:8000/api/${props.id}`)
        .then(res => {
            setAuthor(res.data)
            // setPrice(res.data.price)
            // setDescription(res.data.description)
        })
        .catch(err => console.log(err))
}, []);

//==   H A N D L E R S   ==||
    const changeHandler = (e) => {
        setAuthor({
            ...Author,
            [e.target.name]: e.target.value
        });
    };

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${props.id}/update`, Author)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate('/all')
                }
            })
            .catch(err => console.log(err))
    };

//==   R E T U R N   ==||
    return (
        <div>
        <form onSubmit={updateHandler}>
            <div>
            <label htmlFor="name">Name:</label>
            <input onChange={changeHandler} name="name" type="text" value={Author.name}/>
            {
                errors.name ? <><br/><small style={{color:'red'}}>{errors.name.message}</small></>
                : ""
            }
            </div>

            <div>
                <input type="submit" value="Update"></input>
            </div>
        </form>
        </div>
    )
}

export default UpdateAuthor
