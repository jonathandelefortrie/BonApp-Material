import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Progress extends Component {
  Progress = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Progress);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        ref={elt => { this.Progress = elt; }}
        className={`mdl-progress mdl-js-progress mdl-progress__indeterminate ${className}`}
      />
    );
  }
}

Progress.propTypes = {
  className: PropTypes.string
};

Progress.defaultProps = {
  className: ''
};

export default Progress;
