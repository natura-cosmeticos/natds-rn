import React, { useState } from 'react';
import { View } from 'react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import { RadioButton, RadioButtonColors } from './RadioButton';

export default {
  component: RadioButton,
  parameters: {
    componentSubtitle: 'Selection controls allow the user to select options.',
  },
  title: 'Components|RadioButton',
};

const colorTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

export const all = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={{ maxWidth: 600, padding: 30 }}>
      <RadioButton
        color="primary"
        selected={selected === '1'}
        onPress={setSelected}
        label="Primary"
        value='1'
      />
      <RadioButton
        label="Disabled"
        disabled
      />
      <RadioButton
        selected={true}
        label="Selected disabled"
        disabled
      />
    </View>
  );
};


export const interactive = () => (
  <View style={{ maxWidth: 600, padding: 30 }}>
    <RadioButton
      selected={boolean('Selected', true)}
      disabled={boolean('Disabled', false)}
      onPress={() => null}
      label={text('Label', 'My Label')}
      value={text('Value', 'my-label')}
    />
  </View>
);
