import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SnackBar extends Component {
  SnackBar = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.SnackBar);
    this.showSnackbar = this.SnackBar.MaterialSnackbar.showSnackbar.bind(this.SnackBar.MaterialSnackbar);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        ref={elt => { this.SnackBar = elt; }}
        className={`mdl-js-snackbar mdl-snackbar ${className}`}>
        <div className="mdl-snackbar__text" />
        <button className="mdl-snackbar__action" type="button" />
      </div>
    );
  }
}

SnackBar.propTypes = {
  className: PropTypes.string
};

SnackBar.defaultProps = {
  className: ''
};

export default SnackBar;
