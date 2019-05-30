import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import { TextField, Button, withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "20px"
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.inputTodoTextRef = React.createRef();
    this.handleOnAddClick = this.handleOnAddClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnAddClick() {
    let newTodoText = this.inputTodoTextRef.current.value;

    if(newTodoText) {
      this.props.dispatch(addTodo(newTodoText));
      this.inputTodoTextRef.current.value = "";
      this.inputTodoTextRef.current.focus();
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  handleOnKeyDown(event) {
    if(event.keyCode === 13) {
      this.handleOnAddClick();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          noValidate
          autoComplete="off"
          className={classes.root}
          onSubmit={this.handleFormSubmit}
          onKeyDown={this.handleOnKeyDown}
        >
          <TextField
            id="new-todo-text"
            label="New todo..."
            margin="normal"
            inputRef={this.inputTodoTextRef}
          />
          <Button 
            variant="contained" 
            onClick={this.handleOnAddClick}
          >
            Add
          </Button>
        </form>
      </div>
    );
  }
}

AddTodo = withStyles(styles)(AddTodo);

export default AddTodo = connect()(AddTodo)