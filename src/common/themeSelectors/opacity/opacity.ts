import { Theme, checkTheme } from '../theme/theme';

const getOpacity = (theme: Theme) => checkTheme(theme).opacity;

export const getOpacityMediumLow = (theme: Theme) => getOpacity(theme).mediumLow;
export const getOpacityMedium = (theme: Theme) => getOpacity(theme).medium;
export const getOpacityDisabledLow = (theme: Theme) => getOpacity(theme).disabledLow;
export const getOpacityMediumHigh = (theme: Theme) => getOpacity(theme).mediumHigh;
export const getOpacityHigh = (theme: Theme) => getOpacity(theme).high;
export const getOpacityVeryHigh = (theme: Theme) => getOpacity(theme).veryHigh;

/**
 * @Deprecated use `getOpacityMediumHigh` instead
 */
export const getOpacity56 = (theme: Theme) => getOpacityMediumHigh(theme);

/**
 * @Deprecated use `getOpacityHigh` instead
 */
export const getOpacity10 = (theme: Theme) => getOpacityHigh(theme);
