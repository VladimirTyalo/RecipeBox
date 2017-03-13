import React, { Component, PropTypes } from 'react';

export class InputIngredient extends Component {

  handleClick(ev) {
    ev.preventDefault();
    this.props.delete();
  }

  handleName(ev) {
    const el = this.refs["input-name"];
    this.props.setName(el.value);
  }

  render() {
    const {ingredient} = this.props;
    const {name, amount, units} = ingredient;

    return (
      <div className="ingredient-input">
        <input ref="input-name" className="ingredient-input-name" type="text" defaultValue={name} placeholder="ingredient" 
        onChange={this.handleName.bind(this)}
        value={this.props.name}/>
        <input ref="input-amount"
         className="ingredient-input-amount"
          type="number" defaultValue={amount} />
        <input ref="input-units" className="ingredient-input-units"
         type="text" 
         defaultValue={units}
         />
        <div className="ingredient-input-remove" onClick={this.handleClick.bind(this)}>x</div>
      </div>
    );
  }
}

InputIngredient.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    units: PropTypes.string.isRequired
  })

};


export default InputIngredient;