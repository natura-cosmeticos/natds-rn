import { Theme } from '..';

interface ButtonProperties {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  minHeight: number;
}

const getButtonSizes = (theme: Theme) => theme.buttonSizes;

export type Size = 'large' | 'medium' | 'small'

export const getButtonPropsBySize = (
  theme: Theme, size: Size,
): ButtonProperties => getButtonSizes(theme)[size];

const getRadiusSizes = (theme: Theme) => theme.radius;

export const getRadiusBySize = (theme: Theme, size: Size) => getRadiusSizes(theme)[size];
