import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  CheckBox = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.CheckBox);
  }

  componentWillReceiveProps({ checked }) {
    if (typeof checked === 'boolean') {
      const { MaterialCheckbox } = this.CheckBox;
      checked ? MaterialCheckbox.check() : MaterialCheckbox.uncheck();
    }
  }

  render() {
    const { id, label, className, ...attrs } = this.props;

    return (
      <label
        htmlFor={`checkbox-${id}`}
        ref={elt => { this.CheckBox = elt; }}
        className={`mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect ${className}`}>
        <input
          {...attrs}
          type="checkbox"
          id={`checkbox-${id}`}
          className="mdl-checkbox__input"
        />
        <span className="mdl-checkbox__label">{label}</span>
      </label>
    );
  }
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

CheckBox.defaultProps = {
  className: ''
};

export default CheckBox;
