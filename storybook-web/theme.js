/* eslint-disable sort-keys */
import { create } from '@storybook/theming/create';
import themes from '@naturacosmeticos/natds-themes/react-native';

const buildTheme = (theme, mode) => create({
  base: mode,
  colorPrimary: theme.color.primary,
  colorSecondary: theme.color.secondary,

  // UI
  appBg: theme.color.surface,
  appContentBg: theme.color.background,

  // Text
  textColor: theme.color.highEmphasis,
  textInverseColor: theme.color.lowEmphasis,

  // Toolbar
  barBg: theme.color.surface,
  barTextColor: theme.color.highEmphasis,

  // Brand
  brandTitle: 'Natura Design System',
});

export const dark = buildTheme(themes.natura.dark, 'dark');
export const light = buildTheme(themes.natura.light, 'light');
