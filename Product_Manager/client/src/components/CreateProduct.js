import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm'

const CreateProduct = () => {
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
        setProduct({
            ...product,
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
            <label htmlFor="title">Title:</label>
            <input onChange={changeHandler} name="title" type="text" placeholder="enter title"/>
            {
                errors.title ? <small style={{color:'red'}}>{errors.title.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="price">Price:</label>
            <input onChange={changeHandler} name="price" type="text" placeholder="enter price"/>
            {
                errors.price ? <small style={{color:'red'}}>{errors.price.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="description">Description:</label>
            <input onChange={changeHandler} name="description" type="text" placeholder="enter description"/>
            {
                errors.description ? <small style={{color:'red'}}>{errors.description.message}</small>
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