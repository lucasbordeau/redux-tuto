import { connect } from 'react-redux'
import { toggleTodo, ETodoVisibilityFilter } from '../../actions/todoActions'
import TodoList from '../presentational/TodoList'

const getFilteredTodoList = (todoList, filter) => {
  switch (filter) {
    case ETodoVisibilityFilter.SHOW_ALL:
      return todoList
    case ETodoVisibilityFilter.SHOW_COMPLETED:
      return todoList.filter(todo => todo.completed)
    case ETodoVisibilityFilter.SHOW_UNCOMPLETED:
      return todoList.filter(todo => !todo.completed)
  }
}

const mapStateToProps = state => {
  return {
    todoList: getFilteredTodoList(state.todoList, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default FilteredTodoList