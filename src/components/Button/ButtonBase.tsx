/* eslint-disable max-lines */
import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
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

export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type TextColors = keyof IColors | 'default'

export interface ButtonProps {
  accessibilityHint?: string
  accessibilityLabel?: string
  disabled?: boolean
  textColor: TextColors
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
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
  type: ButtonTypes
  disabled: boolean
  theme: Theme
}>(({
  type, theme, disabled = false,
}) => ({
  ...getButtonPropsBySize(theme, 'medium'),
  ...getButtonStyles(theme, type, disabled),
  borderRadius: getRadiusBySize(theme, 'medium'),
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

const ButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  textColor,
  onPress,
  testID = 'button',
  text,
  theme,
  type = 'contained',
}: ButtonProps) => (
  <Base
    activeOpacity={getOpacity10(theme)}
    disabled={disabled}
    onPress={disabled ? () => {} : onPress}
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
    >{text.toUpperCase()}</Label>
  </Base>
);

export const ButtonBase = withTheme(ButtonComponent);
