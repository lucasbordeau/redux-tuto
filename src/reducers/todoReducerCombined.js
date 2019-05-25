/**
 * This file use the variant with combineReducer MAGIC 
 * You actually have to name your reducers with the name of your state properties in order for the magic to operate
 * Who does this in 2019 ?
 * Facebook.
 * I'm actually doing it because a lot of people use it and I must understand all the React/Redux codebase
 * this is so sad that such a bad idea gets adopted as a default way to code
 * Function naming shouldn't be enforced by anything else except readability,
 * This is a great example of poor framework design
 */

import { ETodoVisibilityFilter, ETodoActionType } from "../actions/todoActions";
import { combineReducers } from "redux";

const initialState = {
  visibilityFilter: ETodoVisibilityFilter.SHOW_ALL,
  todoList: []
};

// Using state = initialState.todoList, we know it's an empty array but it is more verbose for the tutorial
function todoList(state = initialState.todoList, action) {
  switch(action.type) {
    case ETodoActionType.ADD_TODO : {
      let newTodo = {
        id: state.todoList.length + 1,
        text: action.payload.text,
        completed: false
      };

      return [...state, newTodo];
    }
    case ETodoActionType.TOGGLE_TODO : {
      let newTodoList = [];
      for(let todo of state) {
        if(todo.id === action.payload.todoId) {
          todo.completed = !todo.completed;
        }

        newTodoList.push(todo);
      }

      return newTodoList;
    }
    default: {
      return state;
    }
  }
}

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch(action.type) {
    case ETodoActionType.SET_VISIBILITY_FILTER : {
      return action.payload.visibilityFilter
    }
    default: {
      return state;
    }
  }
}

export const todoMainReducerCombined = combineReducers({
  visibilityFilter,
  todoList
});