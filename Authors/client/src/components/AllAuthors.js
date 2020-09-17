import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllAuthors = () => {
//==   S T A T E   ==||
    const [allAuthors, setAllAuthors] = useState([]);

//==   E F F E C T   ==||
    useEffect(() => {
        getData();
    }, []);

//==   H A N D L E R S   ==||
    const deleteHandler = i => {
        axios.delete(`http://localhost:8000/api/${allAuthors[i]._id}/delete`)
            .then(res => {getData()})
            .catch(err => console.log(err))
    };

//==   M E T H O D S   ==||
    const getData = () => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                setAllAuthors(res.data);
            })
            .catch(err => console.log(err));
    };

//==   R E T U R N   ==||
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allAuthors.map((auth, i) => 
                        <tr key={i}>
                            <td><Link to={`/${auth._id}`}>{auth.name}</Link></td>
                            <td><button onClick={ () => deleteHandler(i)}>Delete</button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors