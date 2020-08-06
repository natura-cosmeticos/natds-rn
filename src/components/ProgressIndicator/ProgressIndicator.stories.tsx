import React from 'react';
import { View } from 'react-native';

import { ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import { ProgressIndicator } from './ProgressIndicator';

export default {
  component: ProgressIndicator,
  parameters: {
    componentSubtitle: 'Progress indicators express an unspecified wait time or display the length of a process.',
  },
  title: 'Components|ProgressIndicator',
};

export const circular = () => (
  <View style={{ maxWidth: 600 }}>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator variant="circular" type="indeterminated" color="primary" />
      </View>
      <View style={{ margin: 15 }}>
        <ProgressIndicator variant="circular" type="indeterminated" color="secondary" />
      </View>
    </ContainerWithTheme >
  </View>
);