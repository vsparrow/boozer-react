import React, { Component } from 'react';
class CreateCocktail extends Component {
  constructor(){
    super()
    // this.state={ingredients: [["iname","qty"]]}
    this.state={ingredients: [], name: "", description: "", instructions: ""}
  }

  addIngredientInput = ()=>{  //function to add inputs for ingredients
    let ingredients = [...this.state.ingredients]
    ingredients.push([[""],[""]])
    this.setState({ingredients: ingredients})
  }



  // handleChange = ()=>{ console.log("hi")}
  ingredients = ()=>{
    return  this.state.ingredients.map((el,index)=>{
      return      <div key={index}>
                    <input type="text" index={index} subindex="0" value={el[0]} placeholder="Ingredient name" onChange={this.ingredientsOnChange}/>
                    <input type="text" index={index} subindex="1" value={el[1]} placeholder="Quantity" onChange={this.ingredientsOnChange}/>
                  </div>
    })
  }//ingredients
  ingredientsOnChange = (event)=>{  //updates this.state.ingredients with text written in new inputs for Ingredient/Quanity
    // console.log(event.target.getAttribute("index"));
    // console.log(event.target.getAttribute("subindex"));
    let value = event.target.value
    let index = event.target.getAttribute("index")
    let subindex = event.target.getAttribute("subindex")
    let ingredients = [...this.state.ingredients]
    ingredients[index][subindex] = value
    this.setState({ingredients: ingredients})
  }//ingredientsOnChange
  inputOnChange=(event)=>{ //standard inputs : name,description, instructions
    // console.log(event.target.getAttribute("data-statetype"));
    let statetype = event.target.getAttribute("data-statetype")
    let value = event.target.value
    this.setState({[statetype]: value})
  }//inputOnChange

  sendbackCocktail = ()=>{                                                      //only local cocktail updated not the api no routes in api
    console.log("sendbackCocktail");
    // this.props.addNewCocktail
    let cocktail = {
      name: this.state.name,
      description: this.state.description,
      instructions: this.state.instructions,
      proportions: this.state.ingredients
    }
    this.props.addNewCocktail(cocktail)
  }

  render() {
    // console.log(this.props);
    // console.log(this.state.ingredients);
    console.log(this.state);
    return (
      <div className="CreateCocktail container" >
        <h2>Create A Cocktail</h2>
        Name<br/>
        <input placeholder="" onChange={this.inputOnChange} data-statetype="name"/><br/>
        Description
        <input className="form-control input-lg" placeholder="" onChange={this.inputOnChange} data-statetype="description"/>
        Instructions
        <input className="form-control input-lg" placeholder="" onChange={this.inputOnChange} data-statetype="instructions"/><br/>

        <h3>Proportions</h3>
        <div className="NewIngredients">
          {this.ingredients()}
          <br/>
          <button onClick={this.addIngredientInput} type="button" className="btn btn-primary btn-md">Add Ingredient</button>
        </div>
        <div className="CreateCocktailButton">
          <br/>
          <button onClick={this.sendbackCocktail} type="button" className="btn btn-primary btn-lg">Create Cocktail</button>
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
