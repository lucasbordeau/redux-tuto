import React from 'react';
import './App.css';

import { createStore } from 'redux'
import { todoMainReducer } from './reducers/todoReducer'
import { addTodo, setVisibilityFilter, toggleTodo, ETodoVisibilityFilter } from "./actions/todoActions";
import VisibleTodoList from './components/container/VisibleTodoList';
import AddTodo from "./components/container/AddTodo";
import FilterSelector from './components/presentational/FilterSelector';

function App() {
  return (
    <div className="App">
      <h1>React + Redux + Material-UI</h1>
      <h2>Another todo app</h2>
      <hr></hr>

      <FilterSelector />
      <AddTodo />
      <hr></hr>
      <h3>Todo List</h3>
      <VisibleTodoList />
      <hr></hr>
    </div>
  );
}

export default App;
