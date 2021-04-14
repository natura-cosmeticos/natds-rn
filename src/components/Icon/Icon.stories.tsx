import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { IconName } from '@naturacosmeticos/natds-icons';
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
    <Icon />
    <Icon name="filled-action-add" />
    <Icon color="primary" />
    <Icon color="primary" name="filled-action-add" />
  </ContainerRow>
);

/* eslint-disable sort-keys */
const iconColors = {
  primary: 'primary',
  onPrimary: 'onPrimary',
  primaryLight: 'primaryLight',
  onPrimaryLight: 'onPrimaryLight',
  primaryDark: 'primaryDark',
  onPrimaryDark: 'onPrimaryDark',
  secondary: 'secondary',
  onSecondary: 'onSecondary',
  secondaryLight: 'secondaryLight',
  onSecondaryLight: 'onSecondaryLight',
  secondaryDark: 'secondaryDark',
  onSecondaryDark: 'onSecondaryDark',
  background: 'background',
  onBackground: 'onBackground',
  surface: 'surface',
  onSurface: 'onSurface',
  highlight: 'highlight',
  highEmphasis: 'highEmphasis',
  mediumEmphasis: 'mediumEmphasis',
  lowEmphasis: 'lowEmphasis',
  link: 'link',
  onLink: 'onLink',
  success: 'success',
  onSuccess: 'onSuccess',
  warning: 'warning',
  onWarning: 'onWarning',
  alert: 'alert',
  onAlert: 'onAlert',
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
      color={select('Colors', iconColors, 'highlight') as IconColors}
      name={text('Icon name', 'outlined-default-mockup') as IconName}
      size={select('Sizes', iconSizes, 'standard') as IconSizes}
    />
  </ContainerRow>
);
