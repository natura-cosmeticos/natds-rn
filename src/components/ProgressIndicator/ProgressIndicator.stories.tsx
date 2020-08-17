import React from 'react';
import { View } from 'react-native';
import { select } from '@storybook/addon-knobs';

import { ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import {
  ProgressIndicator,
  ProgressIndicatorComponent,
  ProgressIndicatorVariants,
  ProgressIndicatorTypes,
  ProgressIndicatorColors,
} from './ProgressIndicator';

export default {
  component: ProgressIndicatorComponent,
  parameters: {
    componentSubtitle: 'Progress indicators express an unspecified wait time or display the length of a process.',
  },
  title: 'Components|ProgressIndicator',
};

const variantTypes = {
  variant: 'circular',
};
const types = {
  indeterminate: 'indeterminate',
};
const colorTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

export const circular = () => (
  <View style={{ maxWidth: 600 }}>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator variant="circular" type="indeterminate" color="primary" />
      </View>
      <View style={{ margin: 15 }}>
        <ProgressIndicator variant="circular" type="indeterminate" color="secondary" />
      </View>
    </ContainerWithTheme >
  </View>
);

export const interactive = () => (
  <View style={{ maxWidth: 600 }}>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator
          variant={select('Variant', variantTypes, 'circular') as ProgressIndicatorVariants}
          type={select('Type', types, 'indeterminate') as ProgressIndicatorTypes}
          color={select('Color', colorTypes, 'primary') as ProgressIndicatorColors}
        />
      </View>
    </ContainerWithTheme >
  </View>
);
