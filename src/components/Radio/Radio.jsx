import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
  Radio = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Radio);
  }

  componentWillReceiveProps({ checked }) {
    if (typeof checked === 'boolean') {
      const { MaterialRadio } = this.Radio;
      checked ? MaterialRadio.check() : MaterialRadio.uncheck();
    }
  }

  render() {
    const { id, label, className, ...attrs } = this.props;

    return (
      <label
        htmlFor={`radio-${id}`}
        ref={elt => { this.Radio = elt; }}
        className={`mdl-radio mdl-js-radio mdl-js-ripple-effect ${className}`}>
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
