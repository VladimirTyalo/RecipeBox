import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { create } from './actions';

import IngredientInput from './InputIngredient';


class Modal extends Component {

  handleAddIngredient() {
    const ingr = { name: "", amount: 0, units: "" };
    this.props.addIngredient(ingr);
  }


  handleDelete(index) {
    this.props.delete(index);
  }


  render() {
    const {img, ingredients, workflow, title, isEditing} = this.props;
    return (
      <div className="modal-wrapper">
        <h1 className="modal-title">{title}</h1>
        <div className="modal-recipes">
          <h2 className="modal-ingredients-title">Ingredients</h2>
          {ingredients.map((ingr, index) => {
            return (
              <IngredientInput
                key={uuid.v4()}
                ingredient={ingr}
                delete={this.handleDelete.bind(this, index)}
                setName={this.props.setName.bind(this, index)} />
            );
          })}

          <button className="modal-add-ingredient" onClick={this.handleAddIngredient.bind(this)}>+</button>
        </div>
        <div className="modal-url">
          <div className="modal-url-label">Image url: </div>
          <input type="text" className="modal-url-input" defaultValue={img} />
        </div>

        <div className="modal-workflow">
          <h2 className="modal-workflow-title">Recipe description</h2>
          <textarea name="workflow"
            id="workflow" cols="30"
            rows="6"
            className="modal-workflow-input"
            defaultValue={workflow}></textarea>
        </div>

        <button className="modal-cancel">Close</button>
        <button className="modal-save">Save changes</button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ingredients: state.activeRecipe.get("recipe").get("ingredients").toJS(),
  title: state.activeRecipe.get("recipe").get("title"),
  img: state.activeRecipe.get("recipe").get("img"),
  workflow: state.activeRecipe.get("recipe").get("workflow"),
  isEditing: state.isEditing,
  focusedElement: state.focusedElement
});


const mapDispatchToProps = dispatch => ({
  delete: (id) => dispatch(create.deleteIngredient(id)),
  addIngredient: (ingredient) => dispatch(create.addIngredient(ingredient)),
  setName: (id, name) => dispatch(create.setName(id, name))
});




export default connect(mapStateToProps, mapDispatchToProps)(Modal);