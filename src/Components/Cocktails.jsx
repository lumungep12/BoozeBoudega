import React from 'react';
import { Link } from 'react-router-dom';

const Cocktails = props => (
    <div className="container">
        <div className="row">
            { props.cocktails.map((cocktail) => {
                return(
                    <div className="col-md cocktail-card">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                        <div className="cocktail-details">
                        <div className="cocktail-text">
                         <p className="cocktail-name">{cocktail.strDrink}</p>
                        </div>
                        <div className="cocktail-btn">
                        <button className="btn">
                            <Link to={{
                                pathname: `/cocktail/${cocktail.idDrink}`,
                                state: { cocktail: cocktail.idDrink}
                            }}> Make One </Link>
                        </button>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)

export default Cocktails;

