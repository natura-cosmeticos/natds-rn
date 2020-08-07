import React, { useState } from 'react';
import { View } from 'react-native';

import { RadioButton } from './RadioButton';

export default {
  component: RadioButton,
  parameters: {
    componentSubtitle: 'Selection controls allow the user to select options.',
  },
  title: 'Components|RadioButton',
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
        color="secondary"
        selected={selected === '2'}
        onPress={setSelected}
        label="Secondary"
        value='2'
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
