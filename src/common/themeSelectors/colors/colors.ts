import { Theme, checkTheme } from '..';

const getColors = (theme: Theme) => checkTheme(theme).colorTokens;

export const getColorPrimary = (theme: Theme) => getColors(theme).colorPrimary;
export const getColorOnPrimary = (theme: Theme) => getColors(theme).colorOnPrimary;
export const getColorPrimaryLight = (theme: Theme) => getColors(theme).colorPrimaryLight;

export const getColorOnSecondary = (theme: Theme) => getColors(theme).colorOnSecondary;

export const getColorBackground = (theme: Theme) => getColors(theme).colorBackground;
export const getColorOnBackground = (theme: Theme) => getColors(theme).colorOnBackground;

export const getColorSuccess = (theme: Theme) => getColors(theme).colorSuccess;
export const getColorOnSuccess = (theme: Theme) => getColors(theme).colorOnSuccess;

export const getColorLowEmphasis = (theme: Theme) => getColors(theme).colorLowEmphasis;
export const getColorHighEmphasis = (theme: Theme) => getColors(theme).colorHighEmphasis;

export const getColorSurface = (theme: Theme) => getColors(theme).colorSurface;

export const getColorHighlight = (theme: Theme) => getColors(theme).colorHighlight;
