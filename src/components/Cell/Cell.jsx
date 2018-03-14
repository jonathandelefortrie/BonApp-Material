import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  render() {
    let { col, phone, tablet, desktop } = this.props;
    const { children, className } = this.props;

    col = col ? `mdl-cell--${col}-col` : '';
    phone = phone ? `mdl-cell--${phone}${phone === 'hide' ? '' : '-col'}-phone` : '';
    tablet = tablet ? `mdl-cell--${tablet}${tablet === 'hide' ? '' : '-col'}-tablet` : '';
    desktop = desktop ? `mdl-cell--${desktop}${desktop === 'hide' ? '' : '-col'}-desktop` : '';

    return (
      <div
        className={`mdl-cell ${col} ${phone} ${tablet} ${desktop} ${className}`}>
        {children}
      </div>
    );
  }
}

Cell.propTypes = {
  col: PropTypes.string,
  phone: PropTypes.string,
  tablet: PropTypes.string,
  desktop: PropTypes.string,
  className: PropTypes.string
};

Cell.defaultProps = {
  className: ''
};

export default Cell;
