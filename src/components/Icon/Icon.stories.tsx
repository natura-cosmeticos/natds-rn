import React from 'react';

import { View } from 'react-native';
import { Icon } from './Icon';

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'An icon',
  },
  title: 'Componentes|Icon',
};

export const all = () => (
  <View>
    <Icon color="primary" name="outlined-finance-bank" />
    <Icon color="default" name="filled-action-add" />
  </View>
);
