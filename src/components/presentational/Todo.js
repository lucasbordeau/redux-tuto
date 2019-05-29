import React from 'react';
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, Checkbox, ListItemText, Paper } from '@material-ui/core';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }

    return(
      <Paper>
        <ListItem
          style={style}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={this.props.todo.completed}
              onClick={() => { this.props.onTodoClick()}}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={this.props.todo.text} />
        </ListItem>
      </Paper>
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