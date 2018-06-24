import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CheckBox from '../src/components/CheckBox/CheckBox';

storiesOf('CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <CheckBox
      label="CheckBox"
      id="checkbox"
      name="checkbox"
      checked={boolean('checked', false)}
      onChange={action('checkbox-toggle')}
    />
  ));
