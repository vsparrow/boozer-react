import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './CocktailsContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <CocktailsContainer />
      </div>
    );
  }
}

export default App;

// An Ingredient is a record that indicates,
//   for example, "Mint Leaves" or "Bitters" is something that many cocktails may have.
// A Proportion is a join table where each record indicates, a specific cocktail,
//   is made with a specific ingredient, with a certain amount. For example, a Mojito is made with 4-5 mint leaves.

// Create a component called CocktailsContainer. This component should fetch a list of cocktails from the API
//   and render out the cocktail names.
