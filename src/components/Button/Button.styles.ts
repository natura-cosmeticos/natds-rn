/* eslint-disable max-lines */
import { Color } from '@naturacosmeticos/natds-themes/react-native';
import styled from 'styled-components/native';
import {
  getColorByName,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getRadiusBySize,
  getShadowBySize,
  getSizeMedium,
  getSizeSemi,
  getSizeSemiX,
  getSpacingMicro,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { ButtonBaseProps } from './Button.types';

type SurfaceProps = Required<Pick<ButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size'>>
type LabelProps = Pick<ButtonBaseProps, 'iconName' | 'iconPosition' | 'textColor' | 'theme' | 'disabled'| 'type'>

const getButtonStylesByType = ({ disabled, theme, type = 'contained' }: Omit<SurfaceProps, 'size'>) => {
  const styles = {
    contained: {
      background: disabled ? getColorLowEmphasis(theme) : getColorPrimary(theme),
    },
    outlined: {
      borderColor: disabled ? getColorMediumEmphasis(theme) : getColorPrimary(theme),
      borderWidth: 1,
    },
  };

  return styles[type];
};

export const getButtonStylesBySize = ({ size, theme }: Pick<SurfaceProps, 'size' | 'theme'>) => {
  const buttonSizes = {
    large: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: getSpacingSmall(theme),
    },
    medium: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: getSpacingSmall(theme),
    },
    semiX: {
      minHeight: getSizeSemiX(theme),
      paddingHorizontal: getSpacingTiny(theme),
    },
    // eslint-disable-next-line sort-keys
    semi: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: getSpacingMicro(theme),
    },
    small: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: getSpacingMicro(theme),
    },
  };

  return buttonSizes[size];
};

export const getButtonShadowByType = ({ disabled, theme, type }: Omit<SurfaceProps, 'size'>) => (
  type === 'contained' && !disabled
    ? getShadowBySize(theme, 'tiny')
    : {}
);

export const getButtonTextColor = ({ disabled, type }: Pick<LabelProps, 'disabled'| 'type'>) => {
  const color: {
    active: keyof Color,
    disabled: keyof Color,
  } = {
    active: type === 'contained' ? 'onPrimary' : 'highEmphasis',
    disabled: type === 'contained' ? 'highEmphasis' : 'mediumEmphasis',
  };

  return disabled ? color.disabled : color.active;
};

export const Surface = styled.View<SurfaceProps>(({
  type = 'contained', theme, disabled = false, size,
}) => ({
  ...getButtonStylesBySize({ size, theme }),
  ...getButtonStylesByType({ disabled, theme, type }),
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: getRadiusBySize(theme, 'medium'),
  justifyContent: 'center',
}));

const iconMargin = ({ theme, iconName, iconPosition }: Pick<LabelProps, 'theme' | 'iconName' | 'iconPosition'>) => {
  if (!iconName) {
    return {};
  }

  return iconPosition === 'left'
    ? { marginStart: getSpacingTiny(theme) }
    : { marginEnd: getSpacingTiny(theme) };
};

const labelOrder = ({ iconPosition }: Pick<LabelProps, 'iconPosition'>) => (
  iconPosition === 'right' ? 'row' : 'row-reverse'
);

export const Label = styled.View<Pick<LabelProps, 'iconPosition'>>(({ iconPosition }) => (
  { alignItems: 'center', flexDirection: labelOrder({ iconPosition }) }
));

export const LabelText = styled.Text<LabelProps>(({
  iconName, iconPosition, textColor, theme,
}) => ({
  ...iconMargin({ iconName, iconPosition, theme }),
  color: getColorByName(theme, textColor),
  fontWeight: theme.typography.fontWeight.medium,
  lineHeight: theme.typography.lineHeight.medium * theme.body2.fontSize,
}));
