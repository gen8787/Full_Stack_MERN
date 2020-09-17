import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneProduct = (props) => {
//==   S T A T E   ==||
    const [oneProduct, setOneProduct] = useState({});
    const [loading, setLoading] = useState(true);

//==   E F F E C T   ==||
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${props.id}`)
            .then(res => {
                if(res.data != null) {
                    setOneProduct(res.data)
                    setLoading(false)
                } else {
                    navigate('/all')
                }
            })
            .catch(err => console.log(err))
    }, []);

//==   H A N D L E R S   ==||
    const deleteHandler = id => {
        axios.delete(`http://localhost:8000/api/${id}/delete`)
            .then(navigate('/all'))
            .catch(err => console.log(err))
    };

    const updateHandler = id => navigate(`/${id}/update`);

//==   R E T U R N   ==||
    return (
        <div>
        {
            loading ?
                <p>loading data...</p>
            :
                <>
                <h2>{oneProduct.title}</h2>
                <p>{oneProduct.price}</p>
                <p>{oneProduct.description}</p>
                <button onClick={ () => deleteHandler(oneProduct._id)}>Delete Product</button>
                <button onClick={() => updateHandler(oneProduct._id)}>Edit</button>
                </>
        }
        </div>
    )
}

export default OneProduct