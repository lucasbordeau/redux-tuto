import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import { TextField, Button} from '@material-ui/core';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.inputTodoTextRef = React.createRef();
  }

  // onSubmit={e => {
  //   e.preventDefault()
  //   if (!this.inputTodoTextRef.current.value.trim()) {
  //     return
  //   }
  //   this.props.dispatch(addTodo(this.inputTodoTextRef.current.value))
  //   this.inputTodoTextRef.current.value = ''
  // }}

  render() {
    return (
      <div>
        <form
          noValidate
          autoComplete="off"
        >
          <TextField
            id="new-todo-text"
            label="New todo..."
            margin="normal"
            inputRef={this.inputTodoTextRef}
          />
          <Button 
            variant="contained" 
            onClick={() => {this.props.dispatch(addTodo(this.inputTodoTextRef.current.value))}}
          >
            Add todo
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo = connect()(AddTodo)