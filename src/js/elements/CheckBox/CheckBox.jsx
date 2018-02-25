import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';

class CheckBox extends Component {
  componentDidMount() {
    global.componentHandler.upgradeElement(this.refs.CheckBox);
  }

  render() {
    const { id, label, className, ...attrs } = this.props;

    return (
      <label
        ref="CheckBox"
        htmlFor={`checkbox-${id}`}
        className={`CheckBox mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect ${className}`}>
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
