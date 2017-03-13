import React, { Component, PropTypes } from 'react';

export class InputIngredient extends Component {

  handleClick(ev) {
    ev.preventDefault();
    this.props.delete();
  }

  componentDidMount() {
    const el = document.getElementById(this.props.currentFocus);
    el && el.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    const el = document.getElementById(this.props.currentFocus);
    el && el.focus();
  }

  handleName(ev) {
    const el = this.refs["input-name"];
    this.props.setName(el.value);
    this.props.setFocus(el.id);
  }

  handleAmount() {
    const el = this.refs["input-amount"];
    this.props.setAmount(Number(el.value));
    this.props.setFocus(el.id);
  }

  handleUnits() {
    const el = this.refs["input-units"];
    this.props.setUnits(el.value);
    this.props.setFocus(el.id);
  }

  render() {
    const {ingredient, dataKey} = this.props;
    const {name, amount, units} = ingredient;
    
    return (
      <div className="ingredient-input">
        <input id={dataKey + "name"} ref="input-name" className="ingredient-input-name" type="text" placeholder="ingredient"
          onChange={this.handleName.bind(this)}
          value={name}
        />
        <input id={dataKey + "amount"} ref="input-amount"
          className="ingredient-input-amount"
          type="number"
          onChange={this.handleAmount.bind(this)}
          value={amount}
        />
        <input id={dataKey + "units"} ref="input-units" className="ingredient-input-units"
          type="text"
          onChange={this.handleUnits.bind(this)}
          value={units}
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