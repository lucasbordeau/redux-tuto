import { ETodoVisibilityFilter, ETodoActionType } from "../actions/todoActions";

const initialState = {
  visibilityFilter: ETodoVisibilityFilter.SHOW_ALL,
  todoList: []
};

// Using state = initialState.todoList, we know it's an empty array but it is more verbose for the tutorial
function todoReducer(state = initialState.todoList, action) {
  switch(action.type) {
    case ETodoActionType.ADD_TODO : {
      let newTodo = {
        id: state.length + 1,
        text: action.payload.todoText,
        completed: false
      };

      return [...state, newTodo];
    }
    case ETodoActionType.TOGGLE_TODO : {
      let newTodoList = [];
      for(let todo of state) {
        let newTodo = {
          id: todo.id,
          text: todo.text,
          completed: todo.completed
        }

        if(todo.id === action.payload.todoId) {
          newTodo.completed = !todo.completed;
        }

        newTodoList.push(newTodo);
      }
      
      return newTodoList;
    }
    default: {
      return state;
    }
  }
}

function visibilityFilterReducer(state = ETodoVisibilityFilter.SHOW_ALL, action) {
  switch(action.type) {
    case ETodoActionType.SET_VISIBILITY_FILTER : {
      return action.payload.visibilityFilter
    }
    default: {
      return state;
    }
  }
}

export function todoMainReducer(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    todoList: todoReducer(state.todoList, action)
  }
}