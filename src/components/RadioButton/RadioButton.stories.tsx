import React from 'react';
import { View } from 'react-native';

import { RadioButton } from './RadioButton';

export default {
  component: RadioButton,
  parameters: {
    componentSubtitle: 'Selection controls allow the user to select options.',
  },
  title: 'Components|RadioButton',
};


export const all = () => (
  <View style={{ maxWidth: 600, padding: 30 }}>
    <RadioButton />
  </View>
);
