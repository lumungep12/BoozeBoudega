import React, { useState, useEffect } from 'react';
import ShowcaseDrinks from './ShowcaseDrinks';
import Category from './Category';
import Ingredients from './Ingredients';
import axios from 'axios';

export default function Showcase(){

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios.request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            .then((response) => {
                const allDrinks = response.data.drinks;
                setDrinks(allDrinks);
            })
            .catch((err) => console.log(err));
    })
    return(
        <>
        <section className="category">
            <Category />
        </section>
            <ShowcaseDrinks
                drinks={drinks}
            />
            <Ingredients drinks={drinks} />
        </>
    )
}


