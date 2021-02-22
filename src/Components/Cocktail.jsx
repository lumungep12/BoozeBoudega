import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cocktail(props){
    const [ cocktailData, getCocktail ] = useState([]);

    useEffect(() => {
        axios.get(' https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
            .then((res) => {
                const cocktail = res.data.drinks;
                getCocktail(cocktail);
                // console.log(cocktail)
            })
            .catch(err => console.log(err))
    });

    return(
        <div className="container">
        { cocktailData.map((singleCocktail) => {
        return(
        <div className="activeCocktail">
            <img src={singleCocktail.strDrinkThumb} alt={singleCocktail.strDrink}/>
            <div className="cocktail-text">
                <p className="cocktail-name">{singleCocktail.strDrink}</p>
            </div>
            <ul className="cocktail-ingredients">
                <li>{singleCocktail.strIngredient}</li>
            </ul>
            <div className="cocktail-procedure">
                {singleCocktail.strInstructions}
            </div>
            <button>
                <Link to="/"> View More </Link>
            </button>
        </div>
        )
    })}
        <h4>Love whole lot of love</h4>
    </div>
    );
}

export default Cocktail;

