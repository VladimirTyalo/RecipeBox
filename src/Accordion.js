import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { create } from './actions';

import RecipeItem from './RecipeItem';

export class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.delete(id, this.props.recipes);
  }

  render() {
    return (
      <section className="col-xs-12 col-sm-6">
        {toArray(this.props.recipes).map(entry => {

          const recipe = entry[1];
          const id = entry[0];
          return (
            <RecipeItem key={uuid.v4()}
              title={recipe.title}
              isActive={id === this.props.activeRecipe.id}
              description={recipe.workflow}
              img={recipe.img}
              ingredients={recipe.ingredients}
              setActive={() => this.props.setActive(id, recipe)}
              disableActive={() => this.props.disableActive(id)}
              delete={() => this.handleDelete(id)}
            />
          );
        }
        )}

      </section>
    );
  }
};

function toArray(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

const mapStateToProps = state => ({
  recipes: state.recipes.toJS(),
  activeRecipe: state.activeRecipe.toJS()
});

const mapDispatchToProps = dispatch => ({
  setActive: (id, recipe) => dispatch(create.setActiveRecipe(id, recipe)),
  disableActive: (id) => dispatch(create.disableActive(id)),
  delete: (id, recipes) => {

    dispatch(create.deleteRecipe(id));
    const firstKey = Object.keys(recipes)[0];
    const activeRecipe = recipes[firstKey];

    dispatch(create.setActiveRecipe(firstKey, activeRecipe));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);