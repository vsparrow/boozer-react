import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './CocktailsContainer'
import SelectedCocktail from './SelectedCocktail'
import CreateCocktail from './CreateCocktail'
class App extends Component {
  constructor(){
      super()
      this.state={cocktails: [], selectedCocktail: null, proportions: []}
  }
  //////////////////////////////////////////////////////////////////////////////CALLBACKS
  fetchCocktails = (cocktails)=>{                                               //send to CocktailsContainer for callback
    this.setState({cocktails: cocktails})
  }

  fetchCocktail = ()=>{                                                         //get details for single cocktail
    let id = this.state.selectedCocktail.id
    let url = 'http://127.0.0.1:3000/api/v1/cocktails/' + id
    fetch(url)
    .then(res=>res.json())
    .then(json => this.setState({proportions: json["proportions"]}))
  }

  selectCocktail = (event)=>{
    let cocktail = this.state.cocktails.filter((c)=>{return c.name === event.target.id})[0]//[event.target.id]
    this.setState({selectedCocktail: cocktail},()=>{ this.fetchCocktail()})
  }

  addNewCocktail = ()=>{
    console.log("callback success");
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <CocktailsContainer fetchCocktails={this.fetchCocktails} cocktails={this.state.cocktails} selectCocktail={this.selectCocktail}/>
            </div>
            <div className="col-md-5">
              {this.state.selectedCocktail ? <SelectedCocktail selectedCocktail={this.state.selectedCocktail} proportions={this.state.proportions} /> : null}
            </div>
            <div className="col-md-4">
              <CreateCocktail addNewCocktail={this.addNewCocktail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
