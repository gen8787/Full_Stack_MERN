import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateProduct = (props) => {
//==   S T A T E   ==||
const [product, setProduct] = useState({
    title: "",
    price: "",
    description: ""
});

const [errors, setErrors] = useState({
    title: "",
    price: "",
    description: ""
});

//==   E F F E C T   ==||
useEffect(() => {
    axios.get(`http://localhost:8000/api/${props.id}`)
        .then(res => {
            setProduct(res.data)
            // setPrice(res.data.price)
            // setDescription(res.data.description)
        })
        .catch(err => console.log(err))
}, []);

//==   H A N D L E R S   ==||
    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${props.id}/update`, product)
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
            <label htmlFor="title">Title:</label>
            <input onChange={changeHandler} name="title" type="text" value={product.title}/>
            {
                errors.title ? <small style={{color:'red'}}>{errors.title.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="price">Price:</label>
            <input onChange={changeHandler} name="price" type="text" value={product.price}/>
            {
                errors.price ? <small style={{color:'red'}}>{errors.price.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="description">Description:</label>
            <input onChange={changeHandler} name="description" type="text" value={product.description}/>
            {
                errors.description ? <small style={{color:'red'}}>{errors.description.message}</small>
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

export default UpdateProduct