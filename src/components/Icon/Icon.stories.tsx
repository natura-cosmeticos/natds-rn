import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Icon, IconColors, IconSizes } from './Icon';

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'A helper component to display icons from @naturacosmeticos-natds-icons package',
  },
  title: 'Components|Icon',
};

export const all = () => (
  <ContainerRow style={{ justifyContent: 'space-around', padding: 20 }}>
    <Icon color="primary" size="small" />
    <Icon color="primary" size="small" name="filled-action-add" />
    <Icon color="default" size="medium" name="filled-action-add" />
  </ContainerRow>
);

const iconColors = {
  default: 'default',
  primary: 'primary',
};

const iconSizes = {
  medium: 'medium',
  small: 'small',
};

export const interactive = () => (
  <ContainerRow style={{ padding: 20 }} >
    <Icon
      size={select('Sizes', iconSizes, 'small') as IconSizes}
      color={select('Colors', iconColors, 'default') as IconColors}
      name={text('Icon name', 'outlined-default-mockup')}
    />
  </ContainerRow>
);
