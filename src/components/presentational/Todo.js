import React from 'react';
import PropTypes from "prop-types";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
      "text-decoration": this.props.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return(
      <ListGroup.Item
        action
        onClick={this.props.onClick}
        style={this.style}
      >
        {this.props.text}
      </ListGroup.Item>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}