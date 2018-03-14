import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';

class Slider extends Component {
  Slider = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Slider);
  }

  render() {
    const { className, ...attrs } = this.props;

    return (
      <input
        {...attrs}
        type="range"
        tabIndex="0"
        styleName="Slider"
        ref={elt => { this.Slider = elt; }}
        className={`mdl-slider mdl-js-slider ${className}`}
      />
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  className: ''
};

export default Slider;
