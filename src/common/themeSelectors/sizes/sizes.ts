import { Size, Theme } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme, getSpacingTiny, getSpacingSmall } from '..';

interface ButtonProperties {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  minHeight: number;
}

export type ButtonSize = 'large' | 'medium' | 'small'

const getRadiusSizes = (theme: Theme) => checkTheme(theme).borderRadius;

export const getRadiusBySize = (theme: Theme, size: keyof Size) => getRadiusSizes(theme)[size];

export const getSize = (theme: Theme, size: keyof Size) => checkTheme(theme).size[size];

export const getButtonPropsBySize = (
  theme: Theme, size: ButtonSize,
): ButtonProperties => {
  const tiny = getSpacingTiny(theme);
  const small = getSpacingSmall(theme);

  const buttonSizes = {
    large: {
      minHeight: getSize(theme, 'medium'),
      paddingBottom: small,
      paddingLeft: small,
      paddingRight: small,
      paddingTop: small,
    },
    medium: {
      minHeight: getSize(theme, 'semiX'),
      paddingBottom: 12,
      paddingLeft: small,
      paddingRight: small,
      paddingTop: 12,
    },
    small: {
      minHeight: getSize(theme, 'semi'),
      paddingBottom: tiny,
      paddingLeft: tiny,
      paddingRight: tiny,
      paddingTop: tiny,
    },
  };

  return buttonSizes[size];
};
