import React from 'react';
import './App.css';
import AddTodo from "./components/container/AddTodo";
import FilterSelector from './components/container/FilterSelector';
import { Container, Typography, Grid } from "@material-ui/core";
import FilteredTodoList from './components/container/FilteredTodoList';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item>
            <Typography variant="h1">React + Redux + Material-UI</Typography>
            <Typography variant="h2">Another todo app</Typography>
          </Grid>
          <Grid container item>
            <Grid item>
              <FilterSelector />
            </Grid>
            <Grid item>
              <AddTodo />
            </Grid>
            <Grid item>
              <FilteredTodoList />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
