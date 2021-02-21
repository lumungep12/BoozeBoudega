import React from 'react';
import { Link } from 'react-router-dom';

const Cocktails = props => (
    <div className="container">
        <div className="row">
            { props.cocktails.map((cocktail) => {
                return(
                    <div className="cocktail-card">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                        <div className="cocktail-text">
                         <p className="cocktail-name">{cocktail.strDrink}</p>
                        </div>
                        <button className="btn btn-warning">
                            <Link to={{
                                pathname: `/cocktail/${cocktail.idDrink}`,
                                state: { cocktail: cocktail.idDrink}
                            }}> Make One </Link>
                        </button>
                    </div>
                )
            })}
        </div>
    </div>
)

export default Cocktails;

