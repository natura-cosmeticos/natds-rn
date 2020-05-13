import { Theme } from '..';

const getElevation = (theme: Theme) => theme.elevation;

export const getShadowBySize = (theme: Theme, size: string) => getElevation(theme)[size];

const getOpacity = (theme: Theme) => theme.opacity;

export const getOpacity80 = (theme: Theme) => getOpacity(theme)[80];
