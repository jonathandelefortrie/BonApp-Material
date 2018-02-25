import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SnackBar.scss';

class SnackBar extends Component {
  componentDidMount() {
    const { SnackBar } = this.refs;
    global.componentHandler.upgradeElement(SnackBar);
    this.showSnackbar = SnackBar.MaterialSnackbar.showSnackbar.bind(SnackBar.MaterialSnackbar);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        ref="SnackBar"
        className={`SnackBar mdl-js-snackbar mdl-snackbar ${className}`}>
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
