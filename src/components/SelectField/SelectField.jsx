import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectField.scss';

class SelectField extends Component {
  TextField = null;
  Menu = null;

  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const { options } = this.state;
    const { id, name, label, value, className, onChange } = this.props;

    return (
      <div
        styleName="SelectField"
        ref={elt => { this.TextField = elt; }}
        className={`mdl-textfield mdl-js-textfield ${className}`}>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
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
          style={{ display: !options.length ? 'none' : '' }}
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
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

SelectField.defaultProps = {
  className: ''
};

export default SelectField;
