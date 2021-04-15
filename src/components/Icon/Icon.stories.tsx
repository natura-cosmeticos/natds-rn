import React from 'react';
import { select } from '@storybook/addon-knobs';
import { iconNames, IconName } from '@naturacosmeticos/natds-icons';
import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Icon } from './Icon';
import { IconColors, IconSizes } from './Icon.types';

const description = () => `
---

**NOTE**: This component is available with the following attribute status:

- ✅ **Color:** all supported Color tokens from \`natds-themes\`
- ✅  **Size:** all supported Size tokens from \`natds-themes\`
- ✅  **Name:** all supported Icon names from [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)

---
`;

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'A helper component to display icons from @naturacosmeticos/natds-icons package',
    docs: {
      extractComponentDescription: description,
    },
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
  largeX: 'largeX',
  largeXX: 'largeXX',
  huge: 'huge',
  hugeX: 'hugeX',
  hugeXX: 'hugeXX',
};
/* eslint-enable sort-keys */

export const interactive = () => (
  <ContainerRow style={{ padding: 20 }} >
    <Icon
      color={select('Colors', iconColors, 'highlight') as IconColors}
      name={select('Icon name', iconNames as Array<IconName>, 'outlined-default-mockup' as IconName)}
      size={select('Sizes', iconSizes, 'standard') as IconSizes}
    />
  </ContainerRow>
);
