import { Theme } from '..';

const getElevation = (theme: Theme) => theme.elevation;

export const getShadowBySize = (theme: Theme, size: string) => getElevation(theme)[size];
