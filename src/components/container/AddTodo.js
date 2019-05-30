import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import { TextField, Button, withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row"
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.inputTodoTextRef = React.createRef();
    this.handleOnAddClick = this.handleOnAddClick.bind(this);
  }

  handleOnAddClick() {
    let newTodoText = this.inputTodoTextRef.current.value;

    if(newTodoText) {
      this.props.dispatch(addTodo(newTodoText));
      this.inputTodoTextRef.current.value = "";
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