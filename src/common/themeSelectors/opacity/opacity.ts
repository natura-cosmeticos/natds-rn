import { Theme, checkTheme } from '..';

const getOpacity = (theme: Theme) => checkTheme(theme).opacity;

export const getOpacityMediumHigh = (theme: Theme) => getOpacity(theme)['56'];
