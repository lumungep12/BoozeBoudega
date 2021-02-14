import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import withListLoading from './withListLoading';
import Cocktail from './Cocktail';

function App() {
  const ListLoading = withListLoading(Cocktail);
  const [appState, setAppState] = useState({
    cocktails: null,
  });

  useEffect(() => {
    axios
      .get(
        ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      )
      .then(cocktails => {
        setAppState(cocktails.data);
        console.log(cocktails.data);
      })
      .catch(error => console.log(error));
  }, [setAppState]);


  return (
    <div className="App">
      <div className="container">
        <h1>Available cocktails</h1>
      </div>  
      <div className="cocktail-container">
        <ListLoading isLoading={appState.loading} cocktails={appState.drinks} />
        <Cocktail/>
      </div>
    </div>
  );
}

export default App;
