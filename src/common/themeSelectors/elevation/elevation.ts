import { Theme, checkTheme } from '..';

const getElevation = (theme: Theme) => checkTheme(theme).elevation;

export const getElevation0 = (theme: Theme) => getElevation(theme)['0'];
export const getElevation1 = (theme: Theme) => getElevation(theme)['1'];
export const getElevation2 = (theme: Theme) => getElevation(theme)['2'];
export const getElevation3 = (theme: Theme) => getElevation(theme)['3'];
export const getElevation4 = (theme: Theme) => getElevation(theme)['4'];
export const getElevation6 = (theme: Theme) => getElevation(theme)['6'];
export const getElevation8 = (theme: Theme) => getElevation(theme)['8'];
export const getElevation9 = (theme: Theme) => getElevation(theme)['9'];
export const getElevation12 = (theme: Theme) => getElevation(theme)['12'];
export const getElevation16 = (theme: Theme) => getElevation(theme)['16'];
export const getElevation24 = (theme: Theme) => getElevation(theme)['24'];
