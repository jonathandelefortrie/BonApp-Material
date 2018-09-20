import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  TextArea = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.TextArea);
  }

  render() {
    const { id, label, error, className, floating, ...attrs } = this.props;

    return (
      <div
        ref={elt => { this.TextArea = elt; }}
        className={`mdl-textfield mdl-textfield--expandable mdl-js-textfield ${floating ? 'mdl-textfield--floating-label' : ''} ${className}`}>
        <textarea
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

TextArea.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  floating: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

TextArea.defaultProps = {
  className: '',
  floating: false
};

export default TextArea;
