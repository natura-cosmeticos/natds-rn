import { create } from '@storybook/theming/create';
import themes from '@naturacosmeticos/natds-themes/react-native';

const buildTheme = (theme, mode) => create({
  appBg: theme.color.surface,
  appBorderRadius: theme.borderRadius.medium,
  appContentBg: theme.color.background,
  barBg: theme.color.surface,
  barSelectedColor: theme.color.primary,
  barTextColor: theme.color.primary,
  base: mode,
  brandImage: mode === 'dark' ? '/logo-natura-negative-vertical.svg' : '/logo-natura-vertical.svg',
  brandTitle: 'natds-rn',
  brandUrl: '/',
  colorPrimary: theme.color.primary,
  colorSecondary: theme.color.secondary,
  textColor: theme.color.primary,
  textInverseColor: theme.color.secondary,
});

export const dark = buildTheme(themes.natura.dark, 'dark');
export const light = buildTheme(themes.natura.light, 'light');
