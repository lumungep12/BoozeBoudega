import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import Food from './Pages/Food';
import About from './Pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/food" component={Food} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
