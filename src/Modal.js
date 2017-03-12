import React, { Component } from 'react';

import IngredientInput from './InputIngredient';

class Modal extends Component {
  render() {
    return (
      <div className="modal-wrapper">
        <h1 className="modal-title">Change Recipe</h1>
        <div className="modal-recipes">
          <h2 className="modal-ingredients-title">Ingredients</h2>
          <IngredientInput name={"milk"} amount={10} units={"ml"}/>
          <IngredientInput name={"bread"} amount={1} units={"kg"}/>
          <IngredientInput name={"meat"} amount={2} units={"g"}/>
          <button className="modal-add-ingredient">+</button>
        </div>
        <div className="modal-url">
          <div className="modal-url-label">Image url: </div>
          <input type="text" className="modal-url-input" defaultValue={"http://placehold.it/200x300"}/>
        </div>

        <div className="modal-workflow">
          <h2 className="modal-workflow-title">
            Recipe description
          </h2>
          <textarea name="workflow" id="workflow" cols="30" rows="6" className="modal-workflow-input"></textarea>
        </div>

        <button className="modal-cancel">Close</button>
        <button className="modal-save">Save changes</button>

      </div>
    );
  }
}

export default Modal;