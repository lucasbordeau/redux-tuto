import React from 'react';
import PropTypes from "prop-types";
import { ETodoVisibilityFilter } from '../../actions/todoActions';
import { RadioGroup, FormControlLabel, Radio, withStyles, Typography, Paper, Grid } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';

const styles = {
  radioGroupTitle: {
    marginRight: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalGrid: {
    borderTop: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey",
    marginTop: "15px",
    paddingTop: "15px",
    marginBottom: "15px",
    paddingBottom: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  radioGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    padding: "5px"
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
    const { classes } = this.props;

    return(
      <Grid container className={classes.horizontalGrid}>
        <div className={classes.radioGroupTitle}>
          <FilterList className={classes.filterIcon}></FilterList>
          <Typography>Filter list : </Typography>
        </div>
        <RadioGroup
          name="visibilityFilter"
          onChange={this.handleRadioSelect}
          value={this.props.selectedFilter}
          row
          className={classes.radioGroup}
        >
          <FormControlLabel value={ETodoVisibilityFilter.SHOW_ALL} control={<Radio />} label="All" />
          <FormControlLabel value={ETodoVisibilityFilter.SHOW_COMPLETED} control={<Radio />} label="Completed" />
          <FormControlLabel value={ETodoVisibilityFilter.SHOW_UNCOMPLETED} control={<Radio />} label="Uncompleted" />
        </RadioGroup>
      </Grid>
    );
  }
}

RadioFilterGroup.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

RadioFilterGroup = withStyles(styles)(RadioFilterGroup);

export default RadioFilterGroup;
