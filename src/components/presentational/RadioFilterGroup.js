import React from 'react';
import PropTypes from "prop-types";
import { ETodoVisibilityFilter } from '../../actions/todoActions';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default class RadioFilterGroup extends React.Component {
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
      <RadioGroup
        name="visibilityFilter"
        onChange={this.handleRadioSelect}
        value={this.props.selectedFilter}
      >
        <FormControlLabel value={ETodoVisibilityFilter.SHOW_ALL} control={<Radio />} label="All" />
        <FormControlLabel value={ETodoVisibilityFilter.SHOW_COMPLETED} control={<Radio />} label="Completed" />
        <FormControlLabel value={ETodoVisibilityFilter.SHOW_UNCOMPLETED} control={<Radio />} label="Uncompleted" />
      </RadioGroup>
    );
  }
}

RadioFilterGroup.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}