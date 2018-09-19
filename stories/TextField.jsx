import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import TextField from '../src/components/TextField/TextField';

storiesOf('TextField', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <TextField
      id="textfield"
      name="textfield"
      label={text('label', 'TextField')}
    />
  ))
  .add('floating', () => (
    <TextField
      floating
      id="textfield"
      name="textfield"
      label={text('label', 'TextField')}
    />
  ));
