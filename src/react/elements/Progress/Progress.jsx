import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Progress.scss';

class Progress extends Component {
  componentDidMount() {
    global.componentHandler.upgradeElement(this.refs.Progress);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        ref="Progress"
        className={`Progress mdl-progress mdl-js-progress mdl-progress__indeterminate ${className}`}
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
