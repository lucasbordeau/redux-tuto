import React from 'react';
import PropTypes from "prop-types";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return(
      <li
        onClick={this.props.onClick}
        style={this.style}
      >
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}