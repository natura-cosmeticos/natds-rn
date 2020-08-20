import { Theme, checkTheme } from '..';

const getOpacity = (theme: Theme) => checkTheme(theme).opacity;

export const getOpacity00 = (theme: Theme) => getOpacity(theme)['00'];
export const getOpacity04 = (theme: Theme) => getOpacity(theme)['04'];
export const getOpacity08 = (theme: Theme) => getOpacity(theme)['08'];
export const getOpacity12 = (theme: Theme) => getOpacity(theme)['12'];
export const getOpacity16 = (theme: Theme) => getOpacity(theme)['16'];
export const getOpacity24 = (theme: Theme) => getOpacity(theme)['24'];
export const getOpacity32 = (theme: Theme) => getOpacity(theme)['32'];
export const getOpacity48 = (theme: Theme) => getOpacity(theme)['48'];
export const getOpacity56 = (theme: Theme) => getOpacity(theme)['56'];
export const getOpacity64 = (theme: Theme) => getOpacity(theme)['64'];
export const getOpacity80 = (theme: Theme) => getOpacity(theme)['80'];
