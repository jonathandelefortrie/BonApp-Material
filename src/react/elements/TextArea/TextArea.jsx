import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

class TextArea extends Component {
  componentDidMount() {
    global.componentHandler.upgradeElement(this.refs.TextArea);
  }

  render() {
    const { id, label, error, className, ...attrs } = this.props;

    return (
      <div
        ref="TextArea"
        className={`TextArea mdl-textfield mdl-textfield--expandable mdl-js-textfield ${className}`}>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

TextArea.defaultProps = {
  value: '',
  className: ''
};

export default TextArea;
