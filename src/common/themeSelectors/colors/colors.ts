import { Theme, checkTheme } from '..';

const getColors = (theme: Theme) => checkTheme(theme).colorTokens;

export const getColorPrimary = (theme: Theme) => getColors(theme).colorPrimary;
export const getColorOnPrimary = (theme: Theme) => getColors(theme).colorOnPrimary;

export const getColorPrimaryLight = (theme: Theme) => getColors(theme).colorPrimaryLight;
export const getColorOnPrimaryLight = (theme: Theme) => getColors(theme).colorOnPrimaryLight;

export const getColorPrimaryDark = (theme: Theme) => getColors(theme).colorPrimaryDark;
export const getColorOnPrimaryDark = (theme: Theme) => getColors(theme).colorOnPrimaryDark;

export const getColorSecondary = (theme: Theme) => getColors(theme).colorSecondary;
export const getColorOnSecondary = (theme: Theme) => getColors(theme).colorOnSecondary;

export const getColorSecondaryLight = (theme: Theme) => getColors(theme).colorSecondaryLight;
export const getColorOnSecondaryLight = (theme: Theme) => getColors(theme).colorOnSecondaryLight;

export const getColorSecondaryDark = (theme: Theme) => getColors(theme).colorSecondaryDark;
export const getColorOnSecondaryDark = (theme: Theme) => getColors(theme).colorOnSecondaryDark;

export const getColorBackground = (theme: Theme) => getColors(theme).colorBackground;
export const getColorOnBackground = (theme: Theme) => getColors(theme).colorOnBackground;

export const getColorSurface = (theme: Theme) => getColors(theme).colorSurface;
export const getColorOnSurface = (theme: Theme) => getColors(theme).colorOnSurface;

export const getColorHighlight = (theme: Theme) => getColors(theme).colorHighlight;

export const getColorHighEmphasis = (theme: Theme) => getColors(theme).colorHighEmphasis;
export const getColorMediumEmphasis = (theme: Theme) => getColors(theme).colorMediumEmphasis;
export const getColorLowEmphasis = (theme: Theme) => getColors(theme).colorLowEmphasis;

export const getColorLink = (theme: Theme) => getColors(theme).colorLink;
export const getColorOnLink = (theme: Theme) => getColors(theme).colorOnLink;

export const getColorSuccess = (theme: Theme) => getColors(theme).colorSuccess;
export const getColorOnSuccess = (theme: Theme) => getColors(theme).colorOnSuccess;

export const getColorWarning = (theme: Theme) => getColors(theme).colorWarning;
export const getColorOnWarning = (theme: Theme) => getColors(theme).colorOnWarning;

export const getColorAlert = (theme: Theme) => getColors(theme).colorAlert;
export const getColorOnAlert = (theme: Theme) => getColors(theme).colorOnAlert;
