import React from 'react';
import './App.css';
import AddTodo from "./components/container/AddTodo";
import FilterSelector from './components/container/FilterSelector';
import { Container, Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import FilteredTodoList from './components/container/FilteredTodoList';
import CustomAppBar from './components/presentational/CustomAppBar';

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
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
  todoMenu: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexGrow: 1,
    alignContent: "center"
  },
  mainPaper: {
    margin: "20px",
    padding: "20px"
  }
}));

function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <CustomAppBar />
      <Container maxWidth="md" >
        <Paper className={classes.mainPaper}>
          <Grid container >
            <Grid item xs={12} >
              <Typography variant="h4">Todo list</Typography>
            </Grid>
            <Grid item xs={12} >
              <AddTodo />
            </Grid>
            
            <Grid item xs={12} >
              <FilterSelector />
            </Grid>
            <Grid item xs={12} >
              <FilteredTodoList />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
