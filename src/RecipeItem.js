import React, { PropTypes, Component } from 'react';
import uuid from 'uuid';



class Info extends Component {
  componentDidMount() {
    if (this.props.isActive) {
      this.refs.info.classList.add("recipe-info--active");
    } else {
      this.refs.info.classList.add("recipe-info--closed");
    }
  }

  render() {
    const {props} = this;
    return (
      <div className={"recipe-info"} ref="info">
        <ul className="ingredients">
          {props.ingredients.map(ingr => (
            <li className="ingredient" key={uuid.v4()}>
              <div className="name">{ingr.name}</div>
              <div className="quantity">
                <span className="amount">{ingr.amount}</span>
                <span className="units">{ingr.units}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="description">{props.description}</div>
        <div className="recipe-controls">
          <button className="btn btn-success recipe-btn" type="button">Edit</button>
          <button className="btn btn-danger recipe-btn" onClick={props.delete}>Delete</button>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    units: PropTypes.string.isRequired
  }))
};

class RecipeItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    if (this.props.isActive) {
      this.props.disableActive();
    } else {
      this.props.setActive();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.isActive) return false;
    if (this.props.recipe === nextProps.recipe) return false;

    return true;
  }

  render() {
    return (
      <li className="panel panel-default recipe-item">
        <h3 className="panel panel-heading recipe-title"
          onClick={this.handleClick}>
          {this.props.title}
        </h3>
        <Info {...this.props} delete={this.props.delete.bind(this)} />
      </li>
    );
  }
};

RecipeItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired
  }))
};

export default RecipeItem;