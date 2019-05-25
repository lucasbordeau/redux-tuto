import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/todoActions'
import TodoList from '../presentational/TodoList'

const getVisibleTodos = (todoList, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todoList
    case 'SHOW_COMPLETED':
      return todoList.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todoList.filter(todo => !todo.completed)
  }
}

const mapStateToProps = state => {
  return {
    todoList: getVisibleTodos(state.todoList, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList