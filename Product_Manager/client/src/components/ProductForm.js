import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
//==   S T A T E   ==||
    const { initTitle, initPrice, initDesc, onSubmitProp} = props;
    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDesc);

    // const [product, setProduct] = useState({
    //     title: initTitle,
    //     price: initPrice,
    //     description: initDesc
    // });

    const [errors, setErrors] = useState({
        title: "",
        price: "",
        description: ""
    });

//==   H A N D L E R S   ==||
    // const changeHandler = (e) => {
    //     setProduct({
    //         ...product,
    //         [e.target.name]: e.target.value
    //     });
    // };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    };

//==   R E T U R N   ==||
    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            <div>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}/>
            {
                errors.title ? <small style={{color:'red'}}>{errors.title.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="price">Price:</label>
            <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => {setPrice(e.target.value)}}/>
            {
                errors.price ? <small style={{color:'red'}}>{errors.price.message}</small>
                : ""
            }
            </div>

            <div>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}/>
            {
                errors.description ? <small style={{color:'red'}}>{errors.description.message}</small>
                : ""
            }
            </div>

            <div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
        </div>
    )
}

export default ProductForm