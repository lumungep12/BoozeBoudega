import React, { useState, useEffect } from 'react';
import ShowcaseDrinks from './ShowcaseDrinks';
import axios from 'axios';

export default function Showcase(){

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios.request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then((response) => {
                const allDrinks = response.data.drinks;
                setDrinks(allDrinks);
            })
            .catch((err) => console.log(err));
    })
    return(
        <ShowcaseDrinks
            drinks={drinks}
        />
    )
}


