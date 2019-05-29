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
        <Form
          onSubmit={e => {
            e.preventDefault()
            if (!this.inputTodoTextRef.current.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(this.inputTodoTextRef.current.value))
            this.inputTodoTextRef.current.value = ''
          }}
        >
          <Form.Group controlId="formAddTodo">
            <Form.Label>Add a new Todo</Form.Label>
            <Form.Control type="text" placeholder="Enter description" ref={this.inputTodoTextRef} />
            <Form.Text className="text-muted">
              Think about something really important to do ...
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Add Todo  
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddTodo = connect()(AddTodo)