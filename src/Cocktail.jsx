import React from 'react';

const Cocktail = (props) => {
    const { cocktails } = props;

    if(!cocktails || cocktails.length === 0) return <p>There Are No Cocktails at the moment</p>;

    return(
        <ul>
            <h2 className="heading">Available Cocktails and Recepies</h2>
            {cocktails.map((cocktail) => {
                return(
                    <div className="cocktail-container">
                        <div className="cocktail">
                            <img src={cocktail.strDrinkThumb} alt="cocktail"/>
                            <p className="cocktail-name">{cocktail.strDrink}</p>
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}

export default Cocktail;