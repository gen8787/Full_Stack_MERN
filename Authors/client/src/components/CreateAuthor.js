import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const CreateAuthor = () => {
//==   S T A T E   ==||
const [author, setAuthor] = useState({
    name: ""
});

const [errors, setErrors] = useState({
    name: ""
});

//==   H A N D L E R S   ==||
const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/create', author)
        .then(res => {
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
};

const changeHandler = (e) => {
    setAuthor({
        ...author,
        [e.target.name]: e.target.value
    });
};

//==   M E T H O D S   ==||
// For reusable form:
//     const createProduct = product => {
//         axios.post('http://localhost:8000/api/create', product)
//         .then(res => {
//             if (res.data.errors) {
//                 setErrors(res.data.errors)
//             } else {
//                 navigate('/all')
//             }
//         })
//         .catch(err => console.log(err))
// };

//==   R E T U R N   ==||
return (
    <div>
        {/* <ProductForm onSubmitProp={createProduct} initTitle="" initPrice="" initDesc=""/> */}
    <form onSubmit={submitHandler}>
        <div>
        <label htmlFor="name">Name:</label>
        <input onChange={changeHandler} name="name" type="text" placeholder="enter name"/>
        {
            errors.name ? <><br/><small style={{color:'red'}}>{errors.name.message}</small></>
            : ""
        }
        </div>

        <div>
            <input type="submit" value="Create"></input>
        </div>
    </form>
    </div>
)
}

export default CreateAuthor