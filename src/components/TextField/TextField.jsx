import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
  TextField = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.TextField);
  }

  render() {
    const { id, label, error, className, floating, ...attrs } = this.props;

    return (
      <div
        ref={elt => { this.TextField = elt; }}
        className={`mdl-textfield mdl-js-textfield ${floating ? 'mdl-textfield--floating-label' : ''} ${className}`}>
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
  floating: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {
  type: 'text',
  className: '',
  floating: false
};

export default TextField;
