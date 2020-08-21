import { Theme, checkTheme } from '..';

const getSpacings = (theme: Theme) => checkTheme(theme).spacing;

export const getSpacingNone = (theme: Theme) => getSpacings(theme).spacingNone;
export const getSpacingTiny = (theme: Theme) => getSpacings(theme).spacingTiny;
export const getSpacingSmall = (theme: Theme) => getSpacings(theme).spacingSmall;
export const getSpacingStandard = (theme: Theme) => getSpacings(theme).spacingStandard;
export const getSpacingLarge = (theme: Theme) => getSpacings(theme).spacingLarge;
export const getSpacingHuge = (theme: Theme) => getSpacings(theme).spacingHuge;

export const getSpacingBySize = (size: string, theme: Theme) => {
  const sizes = {
    huge: getSpacings(theme).spacingHuge,
    large: getSpacings(theme).spacingLarge,
    small: getSpacings(theme).spacingSmall,
    standard: getSpacings(theme).spacingStandard,
    tiny: getSpacings(theme).spacingTiny,
  };

  return sizes[size];
};
