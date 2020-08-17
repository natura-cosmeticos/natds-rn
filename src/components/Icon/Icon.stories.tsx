import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Icon, IconColors } from './Icon';

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'A helper component to display icons from @naturacosmeticos-natds-icons package',
  },
  title: 'Components|Icon',
};

export const all = () => (
  <ContainerRow style={{ justifyContent: 'space-around', padding: 20 }}>
    <Icon color="primary" />
    <Icon color="primary" name="filled-action-add" />
    <Icon color="default" name="filled-action-add" />
  </ContainerRow>
);

const iconColors = {
  default: 'default',
  primary: 'primary',
};

export const interactive = () => (
  <ContainerRow style={{ padding: 20 }} >
    <Icon
      color={select('Colors', iconColors, 'default') as IconColors}
      name={text('Icon name', 'outlined-default-mockup')}
    />
  </ContainerRow>
);
