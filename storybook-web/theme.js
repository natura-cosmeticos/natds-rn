import { create } from '@storybook/theming/create';
import { themes } from '@naturacosmeticos/natds-styles';

const buildTheme = (theme, mode) => create({
  appBg: theme.palette.background.default,
  appBorderRadius: theme.shape.borderRadius,
  appContentBg: theme.palette.background.paper,
  barBg: theme.palette.background.default,
  barSelectedColor: theme.palette.primary.main,
  barTextColor: theme.palette.text.primary,
  base: mode,
  brandImage: mode === 'dark' ? '/logo-natura-negative-vertical.svg' : '/logo-natura-vertical.svg',
  brandTitle: 'natds-rn',
  brandUrl: '/',
  colorPrimary: theme.palette.primary.main,
  colorSecondary: theme.palette.secondary.main,
  textColor: theme.palette.text.primary,
  textInverseColor: theme.palette.text.hint,
});

export const dark = buildTheme(themes.natura.dark, 'dark');
export const light = buildTheme(themes.natura.light, 'light');
