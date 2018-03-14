import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  render() {
    const { children } = this.props;
    return <div className="mdl-grid">{children}</div>;
  }
}

export default Grid;
