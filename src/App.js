import React from 'react';
import './App.css';
import AddTodo from "./components/container/AddTodo";
import FilterSelector from './components/container/FilterSelector';
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import FilteredTodoList from './components/container/FilteredTodoList';

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  title: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 100,
    padding: '0 30px',
    textAlign: "center"
  },
  todoList: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <Container maxWidth="md" className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.title}>Todoify</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} sm={6} >
              <AddTodo />
            </Grid>
            <Grid item xs={12} sm={6} container className={classes.todoList}>
              <Grid item xs={12}>
                <FilterSelector />
              </Grid>
              <Grid item xs={12}>
                <FilteredTodoList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
