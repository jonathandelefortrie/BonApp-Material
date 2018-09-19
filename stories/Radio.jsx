import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Radio from '../src/components/Radio/Radio';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <fieldset>
      <Radio
        id="radio-1"
        name="radio"
        label={text('label', 'Radio 1')}
        checked={boolean('checked', false)}
      />
      <br />
      <Radio
        id="radio-2"
        name="radio"
        label={text('label', 'Radio 2')}
        checked={boolean('checked', false)}
      />
      <br />
      <Radio
        id="radio-3"
        name="radio"
        label={text('label', 'Radio 3')}
        checked={boolean('checked', false)}
      />
    </fieldset>
  ));
