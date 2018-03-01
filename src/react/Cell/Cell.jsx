import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  render() {
    const { children, className, col, mobile, tablet, desktop } = this.props;

    return (
      <div className={`mdl-cell mdl-cell--${col}-col ${className}`}>
        {children}
      </div>
    );
  }
}

Cell.propTypes = {
  col: PropTypes.string,
  mobile: PropTypes.string,
  tablet: PropTypes.string,
  desktop: PropTypes.string,
  className: PropTypes.string
};

Cell.defaultProps = {
  className: ''
};

export default Cell;
