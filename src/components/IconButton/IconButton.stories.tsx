import React from 'react';

import { View } from 'react-native';
import { IconButton } from './IconButton';

export default {
  component: IconButton,
  parameters: {
    componentSubtitle: 'A button with an icon as the text',
  },
  title: 'Componentes|IconButton',
};

export const all = () => (
  <View>
    <IconButton
      onPress={() => {}}
      size="small"
      color="primary"
      icon="outlined-finance-bank"
    />
    <IconButton
      onPress={() => {}}
      size="medium"
      color="default"
      icon="outlined-finance-bank"
    />
  </View>
);
