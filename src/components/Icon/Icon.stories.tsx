import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Icon, IconColors, IconSizes } from './Icon';

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'A helper component to display icons from @naturacosmeticos/natds-icons package',
  },
  title: 'Components/Icon',
};

export const all = () => (
  <ContainerRow style={{ justifyContent: 'space-around', padding: 20 }}>
    <Icon color="colorPrimary" />
    <Icon color="colorPrimary" name="filled-action-add" />
    <Icon name="filled-action-add" />
  </ContainerRow>
);

/* eslint-disable sort-keys */
const iconColors = {
  colorPrimary: 'colorPrimary',
  colorOnPrimary: 'colorOnPrimary',
  colorPrimaryLight: 'colorPrimaryLight',
  colorOnPrimaryLight: 'colorOnPrimaryLight',
  colorPrimaryDark: 'colorPrimaryDark',
  colorOnPrimaryDark: 'colorOnPrimaryDark',
  colorSecondary: 'colorSecondary',
  colorOnSecondary: 'colorOnSecondary',
  colorSecondaryLight: 'colorSecondaryLight',
  colorOnSecondaryLight: 'colorOnSecondaryLight',
  colorSecondaryDark: 'colorSecondaryDark',
  colorOnSecondaryDark: 'colorOnSecondaryDark',
  colorBackground: 'colorBackground',
  colorOnBackground: 'colorOnBackground',
  colorSurface: 'colorSurface',
  colorOnSurface: 'colorOnSurface',
  colorHighlight: 'colorHighlight',
  colorHighEmphasis: 'colorHighEmphasis',
  colorMediumEmphasis: 'colorMediumEmphasis',
  colorLowEmphasis: 'colorLowEmphasis',
  colorLink: 'colorLink',
  colorOnLink: 'colorOnLink',
  colorSuccess: 'colorSuccess',
  colorOnSuccess: 'colorOnSuccess',
  colorWarning: 'colorWarning',
  colorOnWarning: 'colorOnWarning',
  colorAlert: 'colorAlert',
  colorOnAlert: 'colorOnAlert',
};
/* eslint-enable sort-keys */

/* eslint-disable sort-keys */
const iconSizes = {
  micro: 'micro',
  tiny: 'tiny',
  small: 'small',
  standard: 'standard',
  medium: 'medium',
  large: 'large',
  largex: 'largex',
  largexx: 'largexx',
  huge: 'huge',
  hugex: 'hugex',
  hugexx: 'hugexx',
};
/* eslint-enable sort-keys */

export const interactive = () => (
  <ContainerRow style={{ padding: 20 }} >
    <Icon
      color={select('Colors', iconColors, 'default') as IconColors}
      name={text('Icon name', 'outlined-default-mockup')}
      size={select('Sizes', iconSizes, 'standard') as IconSizes}
    />
  </ContainerRow>
);
