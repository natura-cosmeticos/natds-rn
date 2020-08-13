import React from 'react';
import { View } from 'react-native';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Icon } from './Icon';

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'An icon',
  },
  title: 'Componentes|Icon',
};

export const all = () => (
  <View style={{ padding: 20 }}>
    <ContainerRow style={{ marginBottom: 10 }}>
      <Icon color="primary" size="small" name="outlined-finance-bank" />
      <Icon color="primary" size="small" name="filled-action-add" />
      <Icon color="default" size="medium" name="filled-action-add" />
    </ContainerRow>
  </View>
);
