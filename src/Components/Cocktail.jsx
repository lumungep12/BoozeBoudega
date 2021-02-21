import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Cocktails from './Cocktails';


// export default class Cocktail extends React.Component {
// state = {
//     selectedCocktail: []
// }

// componentDidMount = async () => {
//     // const idDrink = this.props.location.state.idDrink;
//     axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
//             .then((res) => {
//                 const cocktail = res.data.drinks;
//                 console.log(cocktail)
//             })
//             .catch(err => console.log(err))
// }

// render() {
//     const cocktail = this.state.selectedCocktail;

//     return (
//     <div className="container">
//         { this.state.selectedCocktail.length !== 0 &&
//         <div className="activeCocktail">
//             <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
//             <div className="cocktail-text">
//                 <p className="cocktail-name">{cocktail.strDrink}</p>
//             </div>
//             <ul className="cocktail-ingredients">
//                 <li>{cocktail.strIngredient}</li>
//             </ul>
//             <div className="cocktail-procedure">
//                 {cocktail.strInstructions}
//             </div>
//             <button>
//                 <Link to="/"> View More </Link>
//             </button>
//         </div>
//         }
//         <h4>Love whole lot of love</h4>
//     </div>
//     );
// }
// };


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

