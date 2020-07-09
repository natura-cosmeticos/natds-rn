import { Theme, checkTheme } from '..';

const getElevation = (theme: Theme) => checkTheme(theme).elevation;

export const getShadowBySize = (theme: Theme, size: string) => getElevation(theme)[size];

const getOpacity = (theme: Theme) => theme.opacity;

export const getOpacity10 = (theme: Theme) => getOpacity(theme)[80];
