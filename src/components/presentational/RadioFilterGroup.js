import React from 'react';
import PropTypes from "prop-types";
import { ETodoVisibilityFilter } from '../../actions/todoActions';
import { RadioGroup, FormControlLabel, Radio, withStyles, Typography, Paper } from '@material-ui/core';

const styles = {
  root: {
    margin: "20px",
    padding: "20px"
  },
  radioGroup: {
  }
}

class RadioFilterGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleRadioSelect = this.handleRadioSelect.bind(this);
  }

  handleRadioSelect(event) {
    let selectedFilter = event.currentTarget.value;

    this.props.onClick(selectedFilter);
  }

  render() {
    return(
      <Paper className={this.props.classes.root}>
        <Typography variant="h6">Filters</Typography>
        <RadioGroup
          name="visibilityFilter"
          onChange={this.handleRadioSelect}
          value={this.props.selectedFilter}
          row
          className={this.props.classes.radioGroup}
        >
          <FormControlLabel value={ETodoVisibilityFilter.SHOW_ALL} control={<Radio />} label="All" />
          <FormControlLabel value={ETodoVisibilityFilter.SHOW_COMPLETED} control={<Radio />} label="Completed" />
          <FormControlLabel value={ETodoVisibilityFilter.SHOW_UNCOMPLETED} control={<Radio />} label="Uncompleted" />
        </RadioGroup>
      </Paper>
    );
  }
}

RadioFilterGroup.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

RadioFilterGroup = withStyles(styles)(RadioFilterGroup);

export default RadioFilterGroup;
