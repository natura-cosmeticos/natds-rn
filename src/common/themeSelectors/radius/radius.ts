import { Theme, checkTheme } from '..';

export type Radius = 'none'| 'circle'| 'small' | 'medium' | 'large'

const getRadiusSizes = (theme: Theme) => checkTheme(theme).radius;

export const getRadiusBySize = (theme: Theme, radius: Radius) => getRadiusSizes(theme)[radius];
