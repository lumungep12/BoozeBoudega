import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import Food from './Pages/Food';
import About from './Pages/About';
import './App.css';
<<<<<<< HEAD
import Cocktail from './Components/Cocktail';
// import Cocktails from './Components/Cocktails';
=======
>>>>>>> 9f0cec232e7bcb177f1a0a1f2c36881038e5e555

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/food" component={Food} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id" component={Cocktail} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
