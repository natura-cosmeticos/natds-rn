import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { IconButton, IconButtonColors, IconButtonSizes } from './IconButton';

export default {
  component: IconButton,
  parameters: {
    componentSubtitle: 'A button component with an icon from @naturacosmeticos-natds-icons package"',
  },
  title: 'Components|IconButton',
};

export const all = () => (
  <ContainerRow style={{ justifyContent: 'flex-start' }}>
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
  </ContainerRow>
);

const iconButtonSizes = {
  medium: 'medium',
  small: 'small',
};

const iconButtonColors = {
  default: 'default',
  primary: 'primary',
};

export const interactive = () => (
  <ContainerRow style={{ padding: 20 }} >
    <IconButton
      onPress={() => {}}
      size={select('Sizes', iconButtonSizes, 'small') as IconButtonSizes}
      color={select('Colors', iconButtonColors, 'default') as IconButtonColors}
      icon={text('Icon name', 'outlined-finance-bank')}
    />
  </ContainerRow>
);
