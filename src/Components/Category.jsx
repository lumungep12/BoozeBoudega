import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Category(){

    const [ categories, setCategory ] = useState([]);

    useEffect(() => {
        axios.request('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then((response) => {
                const allCategories = response.data.drinks;
                setCategory(allCategories);
            })
            .catch((err) => console.log(err));
    });

    


    return(
        <h1>Alcohol Categories</h1>
    )
}