import { Size, Theme } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';
import { getSpacingMicro, getSpacingSmall, getSpacingTiny } from '../spacing/spacing';

interface ButtonProperties {
  minHeight: number;
  paddingHorizontal: number;
}

export type ButtonSize = 'large' | 'medium' | 'small'

const getRadiusSizes = (theme: Theme) => checkTheme(theme).borderRadius;

export const getRadiusBySize = (theme: Theme, size: keyof Size) => getRadiusSizes(theme)[size];

export const getSize = (theme: Theme, size: keyof Size) => checkTheme(theme).size[size];

export const getButtonPropsBySize = (
  theme: Theme, size: ButtonSize,
): ButtonProperties => {
  const buttonSizes = {
    large: {
      minHeight: getSize(theme, 'medium'),
      paddingHorizontal: getSpacingSmall(theme),
    },
    medium: {
      minHeight: getSize(theme, 'semiX'),
      paddingHorizontal: getSpacingSmall(theme) - getSpacingMicro(theme),
    },
    small: {
      minHeight: getSize(theme, 'semi'),
      paddingHorizontal: getSpacingTiny(theme),
    },
  };

  return buttonSizes[size];
};
