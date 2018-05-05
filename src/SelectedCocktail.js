import React, { Component } from 'react';
class SelectedCocktail extends Component {
  // componentDidMount=()=>{
  //   }

  render() {
    // console.log(this.props.selectedCocktail);
    // console.log(this.props.proportions);
    let proportions = this.props.proportions.map((p,index)=><li key={index}>{p.amount} {p.ingredient_name}</li>)
    //amount id ingredient
    // console.log(this.props.proportions.length);
    return (
      <div className="SelectedCocktail" >
        <h1>{this.props.selectedCocktail.name}</h1>
        <br/>
        <strong>{this.props.selectedCocktail.description}</strong>
        <br/>
        <br/>
        <p>{this.props.selectedCocktail.instructions}</p>
        <br/>
        <h2>Ingredients</h2>
        <ul className="proportions">
          {proportions}
        </ul>
      </div>
    );
  }
}

export default SelectedCocktail;

// Next, each cocktail name should be a clickable link.
// Clicking on this link should render out a detail view of the cocktail including
//   the name, description, instructions, and proportions.
