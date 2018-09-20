import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import TextArea from '../src/components/TextArea/TextArea';

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <TextArea
      id="textarea"
      name="textarea"
      label={text('label', 'TextArea')}
    />
  ))
  .add('floating', () => (
    <TextArea
      floating
      id="textarea"
      name="textarea"
      label={text('label', 'TextArea')}
    />
  ));
