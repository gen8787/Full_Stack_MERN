import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneAuthor = (props) => {
//==   S T A T E   ==||
    const [oneAuthor, setOneAuthor] = useState({});
    const [loading, setLoading] = useState(true);

//==   E F F E C T   ==||
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${props.id}`)
            .then(res => {
                if(res.data != null) {
                    setOneAuthor(res.data)
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
                <h2>{oneAuthor.name}</h2>
                <button onClick={ () => deleteHandler(oneAuthor._id)}>Delete Author</button>
                <button onClick={() => updateHandler(oneAuthor._id)}>Edit</button>
                </>
        }
        </div>
    )
}

export default OneAuthor
