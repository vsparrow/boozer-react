import React, { Component } from 'react';
class CocktailsContainer extends Component {
  componentDidMount=()=>{
    const url = 'http://127.0.0.1:3000/api/v1/cocktails'
    fetch(url)
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>this.props.fetchCocktails(json))
  }

  // selectCocktail = (event)=>{
  //   console.log(event.target.id);
  // }

  render() {
    let cocktailLis = this.props.cocktails.map((c,index)=><li key={index} id={c.name}>{c.name}</li>)
    return (
      <div className="CocktailsContainer" onClick={this.props.selectCocktail}>
        {cocktailLis}
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
