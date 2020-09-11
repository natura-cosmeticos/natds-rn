import { Theme, checkTheme } from '..';

interface ButtonProperties {
  paddingHorizontal: number;
  minHeight: number;
}

const getButtonSizes = (theme: Theme) => ({
  large: {
    minHeight: theme.sizes.medium,
    paddingHorizontal: theme.spacing.spacingSmall,
  },
  medium: {
    minHeight: theme.sizes.semix,
    paddingHorizontal: theme.spacing.spacingTiny + 4,
  },
  small: {
    minHeight: theme.sizes.semi,
    paddingHorizontal: theme.spacing.spacingTiny,
  },
});

export type Size = 'large' | 'medium' | 'small'

export const getButtonPropsBySize = (
  theme: Theme, size: Size,
): ButtonProperties => getButtonSizes(theme)[size];

const getRadiusSizes = (theme: Theme) => checkTheme(theme).radius;

export const getRadiusBySize = (theme: Theme, size: Size) => getRadiusSizes(theme)[size];
