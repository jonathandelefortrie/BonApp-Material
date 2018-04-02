import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dialog extends Component {
  Dialog = null;

  componentWillReceiveProps({ show }) {
    const dialog = this.Dialog;
    show ? !dialog.open && dialog.showModal() : dialog.open && dialog.close();
  }

  componentDidMount() {
    const dialogPolyfillCss = require('dialog-polyfill/dialog-polyfill.css');
    const dialogPolyfillJs = require('dialog-polyfill/dialog-polyfill.js');

    const dialog = this.Dialog;
    document.body.appendChild(dialog);
    dialogPolyfillJs.registerDialog(dialog);
  }

  componentWillUnmount() {
    document.body.removeChild(this.Dialog);
  }

  render() {
    const { children, className, show, size, onClose } = this.props;

    return (
      <div>
        <dialog
          style={{ padding: '0', width: 'fit-content' }}
          ref={elt => { this.Dialog = elt; }}
          className={`mdl-dialog`}>
          {onClose && (
            <button
              onClick={onClose}
              style={{ padding: '8px', float: 'right' }}
              className="mdl-button mdl-js-button mdl-button--icon">
              <i className="material-icons">close</i>
            </button>
          )}
          <div
            style={{ padding: '16px' }}
            className={`mdl-dialog__content ${className}`}>
            {children}
          </div>
        </dialog>
      </div>
    );
  }
}

Dialog.propTypes = {
  className: PropTypes.string
};

Dialog.defaultProps = {
  className: ''
};

export default Dialog;
