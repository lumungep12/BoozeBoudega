import React, {useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Cocktails from '../Components/Cocktails';
import axios from 'axios';
import Form from '../Components/Form';


function Drinks(){
    const [ cocktails, getCocktails ] = useState([]);
    const [ search, setSearch ] = useState('');

    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
            .then((res) => {
                const allCocktails = res.data.drinks;
                getCocktails(allCocktails);
            })
            .catch(err => console.log(err))
    });

    useEffect((e) => {
        const drinkName = e.target.elements.cocktailName.value;
        axios.get(` https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinkName}`)
            .then((res) => {
                const drink = res.data.drink;
                setSearch(drink);
            })
            .catch(err => console.log(err))
    });

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div className="drinks-container">
            <Navbar/>
            <div className="drinks-search">
                <Form
                    onChange={handleChange}
                    // setSearch={searchCocktail}
                />
                {/* <form>
                    <input 
                        type="text"
                        onChange={handleChange}
                        placeholder="Search Drink..."
                    />
                </form> */}
            </div>
            <div className="cocktails">
                <Cocktails
                    cocktails={cocktails}
                />
            </div>
        </div>
    )
}

export default Drinks;