import React, { Component } from 'react';
class CocktailsContainer extends Component {
  componentDidMount=()=>{
    // console.log("hi");
    const url = 'http://127.0.0.1:3000/api/v1/cocktails'
    fetch(url)
    .then(res=>res.json())
    .then(json=>console.log(json))
  }

  render() {

    return (
      <div className="CocktailsContainer">
        HI

      </div>
    );
  }
}

export default CocktailsContainer;

// Create a component called CocktailsContainer.
//   This component should fetch a list of cocktails from the API and render out the cocktail names.
//
// Next, each cocktail name should be a clickable link.
// Clicking on this link should render out a detail view of the cocktail including
//   the name, description, instructions, and proportions.