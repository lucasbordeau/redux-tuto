import React from 'react';
import PropTypes from "prop-types";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ListGroup>
        {this.props.todoList.map((item, index) => {
          return (
            <Todo 
              key={index}
              onClick={() => { this.props.onTodoClick(index); }}
              completed={item.completed}
              text={item.text}  
            />
          );
        })}
      </ListGroup>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string
  })).isRequired,
  onTodoClick: PropTypes.func.isRequired
}