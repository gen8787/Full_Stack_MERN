import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const OneProduct = (props) => {
//==   S T A T E   ==||
    const [oneProduct, setOneProduct] = useState({});
    const [loading, setLoading] = useState(true);

//==   E F F E C T   ==||
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${props.id}`)
            .then(res => {
                console.log(res)
                setOneProduct(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);

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
                </>
        }
        </div>
    )
}

export default OneProduct