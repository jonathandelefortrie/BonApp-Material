import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Switch from '../src/components/Switch/Switch';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <Switch
      id="switch"
      name="switch"
      label={text('label', 'Switch')}
      checked={boolean('checked', false)}
    />
  ));
