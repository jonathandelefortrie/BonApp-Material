import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectField extends Component {
  TextField = null;
  Menu = null;

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      options: props.options
    };
  }

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Menu);
    global.componentHandler.upgradeElement(this.TextField);
    this.Menu.style.width = `${this.TextField.offsetWidth}px`;
  }

  componentWillReceiveProps({ options }) {
    const { MaterialMenu } = this.Menu;
    if (this.state.options !== options) {
      this.setState({ options }, () => MaterialMenu.show());
    }
  }

  onClick = item => {
    return e => {
      e.preventDefault();
      const { MaterialTextfield } = this.TextField;
      const { MaterialMenu } = this.Menu;
      MaterialTextfield.change(item);
      MaterialMenu.hide();

      this.props.onSelect(item);
    };
  };

  onBlur = () => {
    setTimeout(() => this.setState({ focused: false }), 1);
  };

  onFocus = () => {
    setTimeout(() => this.setState({ focused: true }), 1);
  };

  render() {
    const { focused, options } = this.state;
    const { id, name, label, value, className, onChange, readOnly } = this.props;

    return (
      <div
        ref={elt => { this.TextField = elt; }}
        className={`mdl-textfield mdl-js-textfield ${className}`}>
        <input
          type="text"
          name={name}
          value={value}
          autoComplete="off"
          readOnly={readOnly}
          onChange={onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          id={`textfield-${id}`}
          className="mdl-textfield__input"
        />
        {label && (
          <label className="mdl-textfield__label" htmlFor={`textfield-${id}`}>
            {label}
          </label>
        )}
        <ul
          htmlFor={`textfield-${id}`}
          ref={elt => { this.Menu = elt; }}
          style={{
            padding: '0',
            maxHeight: '240px',
            overflowY: 'scroll',
            display: focused && options.length ? '' : 'none'
          }}
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
  onSelect: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

SelectField.defaultProps = {
  className: '',
  readOnly: false
};

export default SelectField;
