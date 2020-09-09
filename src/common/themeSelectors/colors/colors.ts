import { Theme, checkTheme } from '..';

export interface IColors {
  primary: string;
  onPrimary: string;
  primaryLight: string;
  onPrimaryLight: string;
  primaryDark: string;
  onPrimaryDark: string;
  secondary: string;
  onSecondary: string;
  secondaryLight: string;
  onSecondaryLight: string;
  secondaryDark: string;
  onSecondaryDark: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  highlight: string;
  highEmphasis: string;
  mediumEmphasis: string;
  lowEmphasis: string;
  link: string;
  onLink: string;
  success: string;
  onSuccess: string;
  warning: string;
  onWarning: string;
  alert: string;
  onAlert: string;
}

const getColors = (theme: Theme) => checkTheme(theme).colorTokens;

export const getColorPrimary = (theme: Theme) => getColors(theme).colorPrimary;
export const getColorOnPrimary = (theme: Theme) => getColors(theme).colorOnPrimary;
export const getColorPrimaryLight = (theme: Theme) => getColors(theme).colorPrimaryLight;

export const getColorSecondary = (theme: Theme) => getColors(theme).colorSecondary;
export const getColorOnSecondary = (theme: Theme) => getColors(theme).colorOnSecondary;

export const getColorBackground = (theme: Theme) => getColors(theme).colorBackground;
export const getColorOnBackground = (theme: Theme) => getColors(theme).colorOnBackground;

export const getColorSuccess = (theme: Theme) => getColors(theme).colorSuccess;
export const getColorOnSuccess = (theme: Theme) => getColors(theme).colorOnSuccess;

export const getColorLowEmphasis = (theme: Theme) => getColors(theme).colorLowEmphasis;
export const getColorMediumEmphasis = (theme: Theme) => getColors(theme).colorMediumEmphasis;
export const getColorHighEmphasis = (theme: Theme) => getColors(theme).colorHighEmphasis;

export const getColorSurface = (theme: Theme) => getColors(theme).colorSurface;

export const getColorHighlight = (theme: Theme) => getColors(theme).colorHighlight;

export const getColorByName = (theme: Theme, colorName: string) => getColors(theme)[`color${colorName.charAt(0).toUpperCase()}${colorName.slice(1)}`];
