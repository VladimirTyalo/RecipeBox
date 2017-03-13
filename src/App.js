import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from "./Container";
import Modal from "./Modal";
import { create } from './actions';


export class App extends Component {

  render() {
    return (
      <div className="App">
        <Container activeRecipe={this.props.activeRecipe} recipes={this.props.recipes} />
        <Modal activeRecipe={this.props.activeRecipe} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeRecipe: state.activeRecipe.toJS(),
  recipes: state.recipes.toJS()
});

const mapDispatchToProps = (dispatch) => ({
  setActive: (id, recipe) => dispatch(create.setActiveRecipe(id, recipe)),
  addRecipe: (recipe) => dispatch(create.addRecipe(recipe)),
});




export default connect(mapStateToProps, mapDispatchToProps)(App);

