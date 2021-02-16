import React from 'react';

const ShowcaseDrinks = (props) => {
    const { drinks } = props;

    if(!drinks || drinks.length === 0) return <p>Fetching Cocktails... Shortly</p>

    return(
        <div className="showcase-container">
            <h1>Popular Drinks</h1>
            {drinks.map((drink) => {
                return(
                <div className="drink-wrapper">
                    <div className="drink-details">
                        <p>{drink.strDrink}</p>
                        <p className="ingredient">{drink.strIngredient1}</p>
                    </div>
                    <div className="drink-thumbnail">
                        <img src={drink.strDrinkThumb} alt=""/>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ShowcaseDrinks;