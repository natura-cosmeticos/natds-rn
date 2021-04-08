import { Color } from '@naturacosmeticos/natds-themes/react-native';
import styled from 'styled-components/native';
import {
  getButtonPropsBySize,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getRadiusBySize,
  getShadowBySize,
  getColorByName,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { ButtonBaseProps, ButtonTypes } from './Button.types';

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

export const getButtonShadowByType = ({ disabled, theme, type }: Omit<SurfaceProps, 'size'>) => (
  type === 'contained' && !disabled
    ? getShadowBySize(theme, 'tiny')
    : {}
);

export const getButtonTextColor = (type: ButtonTypes, disabled: boolean) => {
  const color: {
    active: keyof Color,
    disabled: keyof Color,
  } = {
    active: type === 'contained' ? 'onPrimary' : 'highEmphasis',
    disabled: type === 'contained' ? 'highEmphasis' : 'mediumEmphasis',
  };

  return disabled ? color.disabled : color.active;
};

type SurfaceProps = Required<Pick<ButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size'>>

export const Surface = styled.View<SurfaceProps>(({
  type = 'contained', theme, disabled = false, size,
}) => ({
  ...getButtonPropsBySize(theme, size),
  ...getButtonStylesByType({ disabled, theme, type }),
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: getRadiusBySize(theme, 'medium'),
  justifyContent: 'center',
}));

const iconMargin = ({ theme, iconName, iconPosition }: Omit<LabelProps, 'textColor'>) => {
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

type LabelProps = Pick<ButtonBaseProps, 'iconName' | 'iconPosition' | 'textColor' | 'theme'>

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
