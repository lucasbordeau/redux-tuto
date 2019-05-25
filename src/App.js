import React from 'react';
import './App.css';

import { createStore } from 'redux'
import { todoMainReducer } from './reducers/todoReducer'
import { addTodo, setVisibilityFilter, toggleTodo, ETodoVisibilityFilter } from "./actions/todoActions";
import VisibleTodoList from './components/container/VisibleTodoList';
import AddTodo from "./components/container/AddTodo";
import Footer from "./components/presentational/Footer";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
