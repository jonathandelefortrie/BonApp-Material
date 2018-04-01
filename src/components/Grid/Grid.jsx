import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  render() {
    const { children, className } = this.props;
    return <div className={`mdl-grid ${className}`}>{children}</div>;
  }
}

Grid.propTypes = {
  className: PropTypes.string
};

Grid.defaultProps = {
  className: ''
};

export default Grid;
