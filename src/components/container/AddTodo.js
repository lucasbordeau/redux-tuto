import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.inputTodoTextRef = React.createRef();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!this.inputTodoTextRef.current.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(this.inputTodoTextRef.current.value))
            this.inputTodoTextRef.current.value = ''
          }}
        >
          <input
            ref={this.inputTodoTextRef}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo = connect()(AddTodo)