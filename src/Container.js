import React, { Component } from 'react';
import {connect} from 'react-redux';

import PreviewSection from './PreviewSection.js';
import Accordion from './Accordion';

export  class Container extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="page-header">
          <h1 className="text-center">Recipe box</h1>
        </header>

        <div className="row">
          <PreviewSection activeRecipe={this.props.activeRecipe} />
          <Accordion />
        </div>
      </div>
    );
  }
}

export default connect()(Container);