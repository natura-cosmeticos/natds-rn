import { Theme, checkTheme } from '..';

const getOpacity = (theme: Theme) => checkTheme(theme).opacity;

export const getOpacity56 = (theme: Theme) => getOpacity(theme)['56'];
