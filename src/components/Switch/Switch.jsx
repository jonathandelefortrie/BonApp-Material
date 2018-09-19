import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
  Switch = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Switch);
  }

  componentWillReceiveProps({ checked }) {
    if (typeof checked === 'boolean') {
      const { MaterialSwitch } = this.Switch;
      checked ? MaterialSwitch.on() : MaterialSwitch.off();
    }
  }

  render() {
    const { id, label, className, ...attrs } = this.props;

    return (
      <label
        htmlFor={`switch-${id}`}
        ref={elt => { this.Switch = elt; }}
        className={`mdl-switch mdl-js-switch mdl-js-ripple-effect ${className}`}>
        <input
          {...attrs}
          type="checkbox"
          id={`switch-${id}`}
          className="mdl-switch__input"
        />
        <span className="mdl-switch__label">{label}</span>
      </label>
    );
  }
}

Switch.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Switch.defaultProps = {
  className: ''
};

export default Switch;
