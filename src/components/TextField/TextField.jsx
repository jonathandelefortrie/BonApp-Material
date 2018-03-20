import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  '::placeholder': {
    color: 'rgba(0, 0, 0, 0.26)'
  }
};

class TextField extends Component {
  TextField = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.TextField);
  }

  render() {
    const { id, label, error, className, ...attrs } = this.props;

    return (
      <div
        style={style}
        ref={elt => { this.TextField = elt; }}
        className={`mdl-textfield mdl-js-textfield ${className}`}>
        <input
          {...attrs}
          id={`textfield-${id}`}
          className="mdl-textfield__input"
        />
        {label && (
          <label className="mdl-textfield__label" htmlFor={`textfield-${id}`}>
            {label}
          </label>
        )}
        {error && <span className="mdl-textfield__error">{error}</span>}
      </div>
    );
  }
}

TextField.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {
  type: 'text',
  className: ''
};

export default TextField;
