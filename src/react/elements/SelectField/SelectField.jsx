import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectField.scss';

class SelectField extends Component {
  componentDidMount() {
    global.componentHandler.upgradeElement(this.refs.TextField);
    this.refs.Menu.style.width = `${this.refs.TextField.offsetWidth}px`;
  }

  onClick = item => {
    return e => {
      e.preventDefault();
      const { MaterialTextfield } = this.refs.TextField;
      MaterialTextfield.change(item);
      MaterialTextfield.onBlur_();
      this.props.onChange({
        target: {
          name: this.props.name,
          value: item
        }
      });
    };
  };

  render() {
    const { id, label, className, options, ...attrs } = this.props;

    return (
      <div
        ref="TextField"
        className={`SelectField mdl-textfield mdl-js-textfield ${className}`}>
        <input
          readOnly
          {...attrs}
          type="text"
          tabIndex="-1"
          id={`textfield-${id}`}
          className="mdl-textfield__input"
        />
        {label && (
          <label className="mdl-textfield__label" htmlFor={`textfield-${id}`}>
            {label}
          </label>
        )}
        <ul
          ref="Menu"
          htmlFor={`textfield-${id}`}
          className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
          {options.map((item, index) => (
            <li
              key={index}
              className="mdl-menu__item"
              onClick={this.onClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

SelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

SelectField.defaultProps = {
  className: ''
};

export default SelectField;
