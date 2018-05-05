import React, { Component } from 'react';
class SelectedCocktail extends Component {

  render() {
    let proportions = this.props.proportions.map((p,index)=><li key={index}>{p.amount} {p.ingredient_name}</li>)
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
