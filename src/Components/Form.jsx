import React from 'react';

const Form = props => (
    <form className="cocktail-search" onSubmit={props.searchCocktail}>
        <input type="text" name="cocktailName" />
        <button className="form-button">Search </button>
    </form>
);

export default Form;