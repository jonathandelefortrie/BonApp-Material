import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Spinner.scss';

class Spinner extends Component {
  Spinner = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Spinner);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        styleName="Spinner"
        ref={elt => { this.Spinner = elt; }}
        className={`mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active ${className}`}
      />
    );
  }
}

Spinner.propTypes = {
  className: PropTypes.string
};

Spinner.defaultProps = {
  className: ''
};

export default Spinner;
