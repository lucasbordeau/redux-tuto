/**
 * Action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/**
 * Enums
 */

export const ETodoVisibilityFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_UNCOMPLETED: "SHOW_UNCOMPLETED"
}

export const ETodoActionType = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
}

/**
 * Action creators
 */

export function addTodo(text) {
  return {
    type: ETodoActionType.ADD_TODO,
    payload: {
      todoText: text
    }
  }
}

export function toggleTodo(_id) {
  return {
    type: ETodoActionType.TOGGLE_TODO,
    payload: {
      todoId: id
    }
  }
}

export function setVisibilityFilter(_filter) {
  let foundFilter = Object.values(VisibilityFilters).find(_filter);
  if(!foundFilter) {
    throw new Error(`Visibility filter does not exists : ${_filter}`);
  }

  return {
    type: ETodoActionType.SET_VISIBILITY_FILTER,
    payload: {
      visibilityFilter: _filter
    }
  }
}