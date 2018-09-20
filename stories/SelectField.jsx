import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import SelectField from '../src/components/SelectField/SelectField';

const options = ['Pomme', 'Poire', 'Fraise', 'Banane'];

storiesOf('SelectField', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <SelectField
      id="selectfield"
      name="selectfield"
      options={options}
      onSelect={action('on-select')}
      label={text('label', 'SelectField')}
    />
  ))
  .add('floating', () => (
    <SelectField
      floating
      id="selectfield"
      name="selectfield"
      options={options}
      onSelect={action('on-select')}
      label={text('label', 'SelectField')}
    />
  ));
