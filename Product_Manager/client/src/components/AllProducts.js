import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Product } from './AllProducts';

const AllProducts = () => {
//==   S T A T E   ==||
    const [allProducts, setAllProducts] = useState([]);

//==   E F F E C T   ==||
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                setAllProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

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
                            <td></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts
