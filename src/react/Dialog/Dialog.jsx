import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dialog.scss';

class Dialog extends Component {
  componentWillReceiveProps({ show }) {
    const dialog = this.refs.Dialog;
    show ? !dialog.open && dialog.showModal() : dialog.open && dialog.close();
  }

  componentDidMount() {
    const dialogPolyfillCss = require('dialog-polyfill/dialog-polyfill.css');
    const dialogPolyfillJs = require('dialog-polyfill/dialog-polyfill.js');

    const dialog = this.refs.Dialog;
    document.body.appendChild(dialog);
    dialogPolyfillJs.registerDialog(dialog);
  }

  componentWillUnmount() {
    document.body.removeChild(this.refs.Dialog);
  }

  render() {
    const { children, className, show, size, onClose } = this.props;

    return (
      <div>
        <dialog ref="Dialog" className={`mdl-dialog bp-width-${size}`}>
          {onClose && (
            <button
              onClick={onClose}
              className="mdl-button mdl-js-button mdl-button--icon bp-float-right">
              <i className="material-icons">close</i>
            </button>
          )}
          <div className={`mdl-dialog__content bp-padding-zero ${className}`}>
            {children}
          </div>
        </dialog>
      </div>
    );
  }
}

Dialog.propTypes = {
  size: PropTypes.oneOf(['third', 'half', 'quarter'])
};

Dialog.defaultProps = {
  size: 'third'
};

export default Dialog;
