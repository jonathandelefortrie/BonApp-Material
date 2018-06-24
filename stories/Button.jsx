import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Button from '../src/components/Button/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <Button raised={boolean('raised', false)}>Button</Button>
  ))
  .add('primary', () => (
    <Button primary raised={boolean('raised', false)}>
      Button
    </Button>
  ))
  .add('accent', () => (
    <Button accent raised={boolean('raised', false)}>
      Button
    </Button>
  ))
  .add('fab', () => (
    <Button fab>
      <i className="material-icons">search</i>
    </Button>
  ))
  .add('miniFab', () => (
    <Button fab miniFab>
      <i className="material-icons">search</i>
    </Button>
  ));
