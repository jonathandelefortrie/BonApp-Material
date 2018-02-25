import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
  componentDidMount() {
    global.componentHandler.upgradeElement(this.refs.Button);
  }

  render() {
    let { fab, icon, raised, colored, primary, miniFab, accent, ...props } = this.props;
    const { children, className, ...attrs } = props;

    fab = fab ? 'mdl-button--fab ' : '';
    icon = icon ? 'mdl-button--icon ' : '';
    raised = raised ? 'mdl-button--raised ' : '';
    colored = colored ? 'mdl-button--colored ' : '';
    primary = primary ? 'mdl-button--primary ' : '';
    miniFab = miniFab ? 'mdl-button--mini-fab ' : '';
    accent = accent ? 'mdl-button--accent ' : '';

    return (
      <button
        {...attrs}
        ref="Button"
        className={`Button mdl-button mdl-js-button mdl-js-ripple-effect
          ${fab + icon + colored + raised + primary + miniFab + accent}
          ${className}`}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  fab: PropTypes.bool,
  icon: PropTypes.bool,
  raised: PropTypes.bool,
  colored: PropTypes.bool,
  primary: PropTypes.bool,
  miniFab: PropTypes.bool,
  accent: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  fab: false,
  icon: false,
  raised: false,
  colored: false,
  primary: false,
  miniFab: false,
  accent: false,
  className: ''
};

export default Button;
