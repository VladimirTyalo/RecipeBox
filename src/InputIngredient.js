import React, { Component, PropTypes } from 'react';

class InputIngredient extends Component {
  render() {
    const {name, amount, units} = this.props;
    return (
      <div className="ingredient-input">
        <input className="ingredient-input-name" type="text" defaultValue={name} placeholder="ingredient" />
        <input className="ingredient-input-amount" type="number" defaultValue={amount} />
        <input className="ingredient-input-units" type="text" defaultValue={units} />
        <div className="ingredient-input-remove">x</div>
      </div>
    );
  }
}

InputIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired
};

export default InputIngredient;