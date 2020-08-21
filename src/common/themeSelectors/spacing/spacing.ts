import { Theme, checkTheme } from '..';

const getSpacings = (theme: Theme) => checkTheme(theme).spacing;

export const getSpacingSmall = (theme: Theme) => getSpacings(theme).spacingSmall;
export const getSpacingTiny = (theme: Theme) => getSpacings(theme).spacingTiny;
export const getSpacingStandard = (theme: Theme) => getSpacings(theme).spacingStandard;
export const getSpacingNone = (theme: Theme) => getSpacings(theme).spacingNone;
