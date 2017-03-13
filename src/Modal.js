import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { create } from './actions';
import { fromJS } from 'immutable';
import IngredientInput from './InputIngredient';


class Modal extends Component {

  handleAddIngredient() {
    const ingr = { name: "", amount: 0, units: "" };
    this.props.addIngredient(ingr);
  }

  handleDelete(index) {
    this.props.delete(index);
  }

  handleImg() {
    this.props.setImg(this.refs.url.value);
  }

  handleWorkflow() {
    this.props.setWorkflow(this.refs.workflow.value);
  }

  handleTitle() {
    this.props.setTitle(this.refs.title.value);
  }

  handleSave() {
    const {activeRecipe, activeId} = this.props;
    this.props.saveRecipe("" + this.props.activeId, this.props.activeRecipe);
  }

  handleClose() {
    const {close, setActiveRecipe, activeId, recipes} = this.props;
    this.props.close(activeId);
  }

  render() {
    const {img, ingredients, workflow, title, isEditing} = this.props;
    return (
      <div className={isEditing ? "modal-wrapper" : "modal-wrapper modal-wrapper--hidden"}>
        <label htmlFor="modal-title">Recipe Name</label>
        <input type="text"
          className="modal-title"
          onChange={this.handleTitle.bind(this)}
          ref="title"
          id="modal-title"
          value={this.props.title}
        />

        <div className="modal-recipes">
          <h2 className="modal-ingredients-title">Ingredients</h2>
          {ingredients.map((ingr, index) => {
            return (
              <IngredientInput
                key={uuid.v4()}
                dataKey={`ingredient ${index} `}
                ingredient={ingr}
                delete={this.handleDelete.bind(this, index)}
                setName={this.props.setName.bind(this, index)}
                setUnits={this.props.setUnits.bind(this, index)}
                setAmount={this.props.setAmount.bind(this, index)}
                setFocus={(id) => this.props.focus(id)}
                currentFocus={this.props.focusId} />
            );
          })}

          <button className="modal-add-ingredient" onClick={this.handleAddIngredient.bind(this)}>+</button>
        </div>
        <div className="modal-url">
          <div className="modal-url-label">Image url: </div>
          <input type="text"
            className="modal-url-input"
            onChange={this.handleImg.bind(this)}
            ref="url"
            value={this.props.img}
          />
        </div>

        <div className="modal-workflow">
          <h2 className="modal-workflow-title">Recipe description</h2>
          <textarea name="workflow"
            id="workflow" cols="30"
            rows="6"
            className="modal-workflow-input"
            ref="workflow"
            onChange={this.handleWorkflow.bind(this)}
            value={this.props.workflow}
          ></textarea>
        </div>

        <button className="modal-cancel" onClick={this.handleClose.bind(this)}>Close</button>
        <button className="modal-save" onClick={this.handleSave.bind(this)}>Save changes</button>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ingredients: state.activeRecipe.get("recipe").get("ingredients").toJS(),
    title: state.activeRecipe.get("recipe").get("title"),
    img: state.activeRecipe.get("recipe").get("img"),
    workflow: state.activeRecipe.get("recipe").get("workflow"),
    isEditing: state.isEditing,
    focusId: state.focusId,
    activeId: state.activeRecipe.get("id"),
    activeRecipe: state.activeRecipe,
    recipes: state.recipes.toJS()
  };
};


const mapDispatchToProps = dispatch => ({
  delete: (id) => dispatch(create.deleteIngredient(id)),
  addIngredient: (ingredient) => dispatch(create.addIngredient(ingredient)),
  setName: (id, name) => dispatch(create.setName(id, name)),
  setUnits: (id, units) => dispatch(create.setUnits(id, units)),
  setAmount: (id, amount) => dispatch(create.setAmount(id, amount)),
  focus: (id) => dispatch(create.setFocusId(id)),
  setTitle: (title) => dispatch(create.setTitle(title)),
  setImg: (img) => dispatch(create.setImg(img)),
  setWorkflow: (workflow) => dispatch(create.setWorkflow(workflow)),
  saveRecipe: (id, recipe) => {
    dispatch(create.editRecipe(id, recipe));
    dispatch(create.closeModal());
  },
  close: (id) => {
    dispatch(create.closeModal());
    dispatch(create.copyActiveRecipe(id));
  },
  setActiveRecipe: (id, recipe) => dispatch(create.setActiveRecipe(id, recipe)),
  addRecipe: (recipe, id) => {
    dispatch(create.addRecipe(recipe));
    dispatch(create.setActiveRecipe(id, recipe));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);