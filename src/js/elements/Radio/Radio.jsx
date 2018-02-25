import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Radio.scss';

class Radio extends Component {
  componentDidMount() {
    global.componentHandler.upgradeElement(this.refs.Radio);
  }

  render() {
    const { id, label, className, ...attrs } = this.props;

    return (
      <label
        ref="Radio"
        htmlFor={`radio-${id}`}
        className={`Radio mdl-radio mdl-js-radio mdl-js-ripple-effect ${className}`}>
        <input
          {...attrs}
          type="radio"
          id={`radio-${id}`}
          className="mdl-radio__button"
        />
        <span className="mdl-radio__label">{label}</span>
      </label>
    );
  }
}

Radio.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Radio.defaultProps = {
  className: ''
};

export default Radio;
