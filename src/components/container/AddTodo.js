import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import { TextField, Button, withStyles, Grid } from '@material-ui/core';
import { Add } from "@material-ui/icons";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    marginTop: "20px",
    flewGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%"
  },
  textInput: {
    minWidth: "100%"
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.inputTodoTextRef = React.createRef();
    this.handleOnAddClick = this.handleOnAddClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  componentDidMount() {
    this.inputTodoTextRef.current.focus();
  }

  handleOnAddClick() {
    let newTodoText = this.inputTodoTextRef.current.value;

    if(newTodoText) {
      this.props.dispatch(addTodo(newTodoText));
      this.inputTodoTextRef.current.value = "";
      this.inputTodoTextRef.current.focus();
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  handleOnKeyDown(event) {
    if(event.keyCode === 13) {
      this.handleOnAddClick();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
          onKeyDown={this.handleOnKeyDown}
        >
          <Grid 
            container 
            className={classes.root}
          >
            <Grid item xs={12}>
              <TextField
                id="new-todo-text"
                label="New todo..."
                margin="normal"
                className={classes.textInput}
                inputRef={this.inputTodoTextRef}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary"
                onClick={this.handleOnAddClick}
              >
                <Add />
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

AddTodo = withStyles(styles)(AddTodo);

export default AddTodo = connect()(AddTodo)