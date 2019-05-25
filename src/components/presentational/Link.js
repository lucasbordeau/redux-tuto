import React from 'react';
import PropTypes from "prop-types";

export default class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.active) {
      return (<span>{this.props.children}</span>);
    } else {
      return(
      <a
        href=""
        onClick={(event) => {
          event.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
      );
    }
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}