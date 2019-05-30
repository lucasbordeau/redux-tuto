import React from 'react';
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }

    return(
      <ListItem
        style={style}
        role={undefined}  
        button 
      >
        <ListItemText primary={this.props.todo.text} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            checked={this.props.todo.completed}
            onClick={() => { this.props.onTodoClick()}}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}