import { Theme, checkTheme } from '..';

const getOpacity = (theme: Theme) => checkTheme(theme).opacity;

export const getOpacityMediumHigh = (theme: Theme) => getOpacity(theme).mediumHigh;
export const getOpacityHigh = (theme: Theme) => getOpacity(theme).high;

/**
 * @Deprecated use `getOpacityMediumHigh` instead
 */
export const getOpacity56 = (theme: Theme) => getOpacityMediumHigh(theme);

/**
 * @Deprecated use `getOpacityHigh` instead
 */
export const getOpacity10 = (theme: Theme) => getOpacityHigh(theme);
