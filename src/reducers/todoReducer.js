import { ETodoVisibilityFilter, ETodoActionType } from "../actions/todoActions";

const initialState = {
  visibilityFilter: ETodoVisibilityFilter.SHOW_ALL,
  todoList: []
};

// Using state = initialState.todoList, we know it's an empty array but it is more verbose for the tutorial
function todoReducer(state = initialState.todoList, action) {

}

function visibilityFilterReducer(state = ETodoVisibilityFilter.SHOW_ALL, action) {
  
}

function todoApp(state = initialState, action) {
  if(!action.payload) throw new Error(`Action doesn't have payload property : ${action}`);

  switch(action.type) {
    case ETodoActionType.SET_VISIBILITY_FILTER : {
      return Object.assign({}, state, {
        visibilityFilter: action.payload.visibilityFilter
      });
    }
    case ETodoActionType.ADD_TODO : {
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + 1,
            text: action.payload.text,
            completed: false
          }
        ]
      })
    }
    case ETodoActionType.TOGGLE_TODO : {
      return Object.assign({}, state, {
        todoList: state.todoList.map(todo => {
          if(todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }

          return todo;
        })
      })
    }
    default: {
      return state;
    }
  }
}