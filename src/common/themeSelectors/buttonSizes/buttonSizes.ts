import { Theme, checkTheme } from '..';

interface ButtonProperties {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  minHeight: number;
}

const getButtonSizes = (theme: Theme) => checkTheme(theme).buttonSizes;

export type Size = 'large' | 'medium' | 'small'

export const getButtonPropsBySize = (
  theme: Theme, size: Size,
): ButtonProperties => getButtonSizes(theme)[size];

const getRadiusSizes = (theme: Theme) => checkTheme(theme).radius;

export const getRadiusBySize = (theme: Theme, size: Size) => getRadiusSizes(theme)[size];
