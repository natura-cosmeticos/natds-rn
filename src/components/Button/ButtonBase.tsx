/* eslint-disable max-lines */
import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import {
  NativeSyntheticEvent, NativeTouchEvent, Text,
} from 'react-native';
import {
  IColors,
  Theme,
  getButtonPropsBySize,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorOnPrimary,
  getColorPrimary,
  getColorPrimaryLight,
  getOpacity10,
  getRadiusBySize,
  getShadowBySize,
  getColorByName,
} from '../../common/themeSelectors';
import { Icon } from '../Icon';

export type ButtonSizes = 'large' | 'medium' | 'small'
export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type DisplayTypes = 'inline' | 'block'
export type IconPositions = 'left' | 'right'
export type TextColors = keyof IColors | 'default'

export interface ButtonProps {
  accessibilityHint?: string
  accessibilityLabel?: string
  disabled?: boolean
  display?: DisplayTypes
  iconName?: string | undefined,
  iconPosition?: IconPositions
  textColor: TextColors
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  size: ButtonSizes
  testID?: string
  text: string
  theme: Theme
  type?: ButtonTypes
}

const isContained = (type: ButtonTypes) => type === 'contained';

const getButtonStyles = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
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

const getButtonTextColor = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
  const color = {
    active: isContained(type) ? getColorOnPrimary(theme) : getColorHighEmphasis(theme),
    disabled: isContained(type) ? getColorHighEmphasis(theme) : getColorMediumEmphasis(theme),
  };

  return disabled ? color.disabled : color.active;
};

const getShadowByType = (type: ButtonTypes, disabled: boolean, theme: Theme) => (
  isContained(type) && !disabled
    ? getShadowBySize(theme, '2')
    : {}
);

const Base = styled.TouchableHighlight<{
  disabled: boolean
  display: DisplayTypes
  size: ButtonSizes
  theme: Theme
  type: ButtonTypes
}>(({
  type, theme, disabled, display, size,
}) => ({
  ...getButtonPropsBySize(theme, size),
  ...getButtonStyles(theme, type, disabled),
  borderRadius: getRadiusBySize(theme, 'medium'),
  flexGrow: display === 'block' ? 1 : 0,
  justifyContent: 'center',
}));

const Label = styled.Text<{
  type: ButtonTypes
  disabled: boolean
  textColor: TextColors
  theme: Theme
}>(({
  type, theme, disabled, textColor,
}) => ({
  alignSelf: 'center',
  color: textColor === 'default' ? getButtonTextColor(theme, type, disabled) : getColorByName(theme, textColor),
  fontSize: 14,
  fontWeight: 'bold',
  letterSpacing: 1,
}));

const labelContent = (text: string, iconName: string | undefined, iconPosition: IconPositions) => {
  if (iconName) {
    return iconPosition === 'left'
      ? <Text><Icon name={iconName} size="small" />  {text.toUpperCase()}</Text>
      : <Text>{text.toUpperCase()}  <Icon name={iconName} size="small" /></Text>;
  }

  return text.toUpperCase();
};

const ButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  display = 'inline',
  iconName,
  iconPosition = 'right',
  onPress,
  size = 'medium',
  testID = 'button',
  text,
  textColor,
  theme,
  type = 'contained',
}: ButtonProps) => (
  <Base
    activeOpacity={getOpacity10(theme)}
    disabled={disabled}
    display={display}
    onPress={disabled ? () => {} : onPress}
    size={size}
    style={getShadowByType(type, disabled, theme)}
    testID={testID}
    type={type}
    underlayColor={getColorPrimaryLight(theme)}
  >
    <Label
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      disabled={disabled}
      textColor={textColor}
      type={type}
    >
      { labelContent(text, iconName, iconPosition) }
    </Label>
  </Base>
);

export const ButtonBase = withTheme(ButtonComponent);
