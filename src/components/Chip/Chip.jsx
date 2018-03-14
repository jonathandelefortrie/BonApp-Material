import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chip.scss';

class Chip extends Component {
  render() {
    let { deletable } = this.props;
    const { children, className } = this.props;

    deletable = deletable ? 'mdl-chip--deletable' : '';

    return (
      <span styleName="Chip" className={`mdl-chip ${deletable} ${className}`}>
        <span className="mdl-chip__text">{children}</span>
        {deletable && (
          <button type="button" className="mdl-chip__action">
            <i className="material-icons">cancel</i>
          </button>
        )}
      </span>
    );
  }
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  deletable: PropTypes.bool
};

Chip.defaultProps = {
  className: ''
};

export default Chip;
