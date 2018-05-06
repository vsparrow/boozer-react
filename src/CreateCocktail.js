import React, { Component } from 'react';
class CreateCocktail extends Component {
  constructor(){
    super()
    this.state={ingredients: ["val1"]}
  }

  addIngredientInput = ()=>{  //function to add inputs for ingredients
    let ingredients = [...this.state.ingredients]
    ingredients.push("")
    this.setState({ingredients: ingredients})
  }

  handleChange = ()=>{ console.log("hi")}
  ingredients = ()=>{
    return  this.state.ingredients.map((el,index)=>{
      return       <div key={index}><input type="text" value={el} placeholder="some ingredients" onChange={this.handleChange}/></div>
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div className="CreateCocktail container" >
        <h2>Create A Cocktail</h2>
        Name<br/>
        <input placeholder=""/><br/>
        Description
        <input className="form-control input-lg" placeholder=""/>
        Instructions
        <input className="form-control input-lg" placeholder=""/><br/>

        <h3>Proportions</h3>
        <div className="NewIngredients">
          {this.ingredients()}
          <br/>
          <button onClick={this.addIngredientInput} type="button" className="btn btn-primary btn-md">Add Ingredient</button>
        </div>
        <div className="CreateCocktailButton">
          <br/>
          <button onClick={this.props.addNewCocktail} type="button" className="btn btn-primary btn-lg">Create Cocktail</button>
        </div>

      </div>
    );
  }
}

export default CreateCocktail;

//name
//description     2 lines
//instructions    2 lines


// <div className="row">
//   <div className="col-sm-8">
//     Ingredient Name<br/>
//     <input className="form-control" placeholder=""/><br/>
//   </div>
//   <div className="col-sm-4">
//     Quanity<br/>
//     <input className="form-control" placeholder=""/><br/>
//   </div>
// </div>
