import { Theme } from '..';

const getButtonSizes = (theme: Theme) => theme.buttonSizes;

export type Size = 'large' | 'medium' | 'small'

export const getButtonPropsBySize = (theme: Theme, size: Size) => getButtonSizes(theme)[size];

const getRadiusSizes = (theme: Theme) => theme.radius;

export const getRadiusPropsBySize = (theme: Theme, size: Size) => getRadiusSizes(theme)[size];
