import React, {useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Cocktail from '../Components/Cocktail';
import axios from 'axios';


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

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div className="drinks-container">
            <Navbar/>
            <div className="drinks-search">
                <form>
                    <input 
                        type="text"
                        onChange={handleChange}
                        placeholder="Search Drink..."
                    />
                </form>
            </div>
            <div className="cocktails">
                <Cocktail
                    cocktails={cocktails}
                />
            </div>
        </div>
    )
}

export default Drinks;