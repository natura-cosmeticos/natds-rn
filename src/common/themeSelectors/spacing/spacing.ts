import { Theme } from '..';

const getSpacings = (theme: Theme) => theme.spacing;

export const getSpacingSmall = (theme: Theme) => getSpacings(theme).spacingSmall;
export const getSpacingTiny = (theme: Theme) => getSpacings(theme).spacingTiny;
