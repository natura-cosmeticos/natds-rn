/* eslint-disable max-len */
/* eslint-disable max-lines */
import { Color } from '@naturacosmeticos/natds-themes/react-native';
import styled from 'styled-components/native';
import {
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
type LabelProps = Pick<ButtonBaseProps, 'iconName' | 'iconPosition' | 'theme' | 'disabled'| 'type'>

const getButtonStylesByType = ({ disabled, theme, type = 'contained' }: Omit<SurfaceProps, 'size'>) => ({
  background: disabled ? theme.button[type].color.disable.background : theme.button[type].color.enable.background,
  borderColor: disabled ? theme.button[type].color.disable.border : theme.button[type].color.enable.border,
  borderWidth: type === 'outlined' ? 1 : 0,
});

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
  borderRadius: theme.button.borderRadius,
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
  iconName, iconPosition, type = 'contained', theme, disabled = false,
}) => ({
  ...iconMargin({ iconName, iconPosition, theme }),
  color: disabled ? theme.button[type].color.disable.label : theme.button[type].color.enable.label,
  fontFamily: theme.button.label.primary.fontFamily,
  fontSize: theme.button.label.fontSize,
  fontWeight: theme.button.label.primary.fontWeight,
  letterSpacing: theme.button.label.letterSpacing,
  lineHeight: 19,
}));
