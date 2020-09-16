import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const CreateProduct = () => {
//==   S T A T E   ==||
    const [product, setproduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        price: "",
        description: ""
    });

//==   H A N D L E R S   ==||
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/create', product)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate('/all')
                }
            })
            .catch(err => console.log(err))
    };

    const changeHandler = (e) => {
        setproduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

//==   R E T U R N   ==||
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="title">Title:</label>
            <input onChange={changeHandler} name="title" type="text" placeholder="enter title"/>
            {
                errors.title ? <small>{errors.title.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="price">Price:</label>
            <input onChange={changeHandler} name="price" type="text" placeholder="enter price"/>
            {
                errors.price ? <small>{errors.price.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="description">Description:</label>
            <input onChange={changeHandler} name="description" type="text" placeholder="enter description"/>
            {
                errors.description ? <small>{errors.description.message}</small>
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

export default CreateProduct