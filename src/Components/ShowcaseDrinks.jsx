import React from 'react';
import Ingredients from './Ingredients';
import { Button } from 'react-bootstrap';

const ShowcaseDrinks = (props) => {
    const { drinks } = props;

    const [modalShow, setModalShow] = React.useState(false);

    if(!drinks || drinks.length === 0) return <p>Fetching Cocktails... Shortly</p>

    return(
        <div className="showcase-container">
            <h1>Popular Drinks</h1>
            {drinks.map((drink) => {
                return(
                <div className="drink-wrapper">
                    <div className="drink-details">
                        <p>{drink.strDrink}</p>
                    </div>
                    <Button variant="" onClick={() => setModalShow(true)}  className="drink-thumbnail">
                        <img src={drink.strDrinkThumb} alt=""/>
                    </Button>

                    <Ingredients
                        drinks={drinks}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                )
            })}
        </div>
    )
}

export default ShowcaseDrinks;