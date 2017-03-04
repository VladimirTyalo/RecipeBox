import React, { Component } from 'react';
import { connect } from 'react-redux';

const style = {
  icon: {
    verticalAlign: "bottom",
    float: "right"
  },
  img: {
    display: "block",
    marginTop: "20px"
  }
};


export class PreviewSection extends Component {
 
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.img === undefined) return false;
    return this.props.img !== nextProps.img;
  }

  render() {
    return (
      <section className="jumbotron col-xs-12 col-sm-6">
        <button className="btn btn-primary">Add Recipe</button>
        <i className="fa fa-free-code-camp fa-3x" style={style.icon}></i>
        <img ref='img' style={style.img} src={this.props.img} alt="cake" />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  img: state.activeRecipe.get("recipe").get("img")
});


export default connect(mapStateToProps)(PreviewSection);