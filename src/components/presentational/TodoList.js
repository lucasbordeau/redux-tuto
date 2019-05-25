import React from 'react';
import PropTypes from "prop-types";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
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
      </ul>
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