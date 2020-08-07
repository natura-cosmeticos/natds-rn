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
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={{ maxWidth: 600, padding: 30 }}>
      <RadioButton
        color="primary"
        selected={selected === 1}
        onPress={() => setSelected(1)}
        label="Primary"
      />
      <RadioButton
        color="secondary"
        selected={selected === 2}
        onPress={() => setSelected(2)}
        label="Secondary"
      />
      <RadioButton
        label="Disabled"
        disabled
      />
    </View>
  );
};
