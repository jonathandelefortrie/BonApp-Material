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

export default Cell;
