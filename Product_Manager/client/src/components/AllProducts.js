import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Product } from './AllProducts';

const AllProducts = () => {
//==   S T A T E   ==||
    const [allProducts, setAllProducts] = useState([]);

//==   E F F E C T   ==||
    useEffect(() => {
        getData();
    }, []);

//==   H A N D L E R S   ==||
    const deleteHandler1 = i => {
        axios.delete(`http://localhost:8000/api/${allProducts[i]._id}/delete`)
            .then(res => {
                const [...curData] = allProducts
                curData.splice(i,1)
                setAllProducts(curData)
            })
            .catch(err => console.log(err))
    };

    const deleteHandler2 = i => {
        axios.delete(`http://localhost:8000/api/${allProducts[i]._id}/delete`)
            .then(res => {getData()})
            .catch(err => console.log(err))
    };

//==   M E T H O D S   ==||
    const getData = () => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                setAllProducts(res.data);
            })
            .catch(err => console.log(err));
    };

//==   R E T U R N   ==||
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allProducts.map((prod, i) => 
                        <tr key={i}>
                            <td><Link to={`/${prod._id}`}>{prod.title}</Link></td>
                            <td>{prod.price}</td>
                            <td><button onClick={ () => deleteHandler2(i)}>Delete</button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts