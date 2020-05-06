import { Theme } from '..';

const getColors = (theme: Theme) => theme.colorTokens;

export const getColorPrimary = (theme: Theme) => getColors(theme).colorPrimary;
export const getColorOnPrimary = (theme: Theme) => getColors(theme).colorOnPrimary;

export const getColorBackground = (theme: Theme) => getColors(theme).colorBackground;
export const getColorOnBackground = (theme: Theme) => getColors(theme).colorOnBackground;

export const getColorSuccess = (theme: Theme) => getColors(theme).colorSuccess;
export const getColorOnSuccess = (theme: Theme) => getColors(theme).colorOnSuccess;

export const getColorLowEmphasis = (theme: Theme) => getColors(theme).colorLowEmphasis;
