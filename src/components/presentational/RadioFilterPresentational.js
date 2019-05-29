import React from 'react';
import PropTypes from "prop-types";
import { ETodoVisibilityFilter } from '../../actions/todoActions';

export default class RadioFilterPresentational extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   //this.checkboxRef.current.checked = true;
  // }

  render() {
    return(
      <div></div>
    );


    if(this.props.active) {
      return (<span>{this.props.children}</span>);
    } else {
      return(
      <a
        href=""
        
      >
        {this.props.children}
      </a>
      );
    }
  }
}

RadioFilterPresentational.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}