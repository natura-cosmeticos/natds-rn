/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Text } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import {
  IColors,
  Theme,
  getButtonPropsBySize,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorOnPrimary,
  getColorPrimary,
  getRadiusBySize,
  getShadowBySize,
  getColorByName,
} from '../../common/themeSelectors';
import { TouchableRipple, getRippleSizeForHorizontalComponents } from '../TouchableRipple/TouchableRipple';

export type ButtonSizes = 'large' | 'medium' | 'small'
export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type TextColors = keyof IColors | 'default'

export interface ButtonProps {
  accessibilityHint?: string
  accessibilityLabel?: string
  disabled?: boolean
  textColor: TextColors
  onPress: () => void
  size: ButtonSizes
  testID?: string
  text: string
  theme: Theme
  type?: ButtonTypes
}

const isContained = (type: ButtonTypes) => type === 'contained';

const getButtonColors = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
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
    ? getShadowBySize(theme, 'tiny')
    : {}
);

const Base = styled.View<{
  disabled: boolean
  size: ButtonSizes
  theme: Theme
  type: ButtonTypes
}>(({
  type, theme, disabled = false, size,
}) => ({
  ...getButtonPropsBySize(theme, size),
  ...getButtonColors(theme, type, disabled),
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: getRadiusBySize(theme, 'medium'),
  flexDirection: (iconPosition === 'right' ? 'row' : 'row-reverse'),
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

interface LabelProps {
  disabled: boolean,
  iconName: string | undefined,
  text: string,
  textColor: TextColors,
  theme: Theme,
  type: ButtonTypes
}
const Label: React.FC<LabelProps> = ({
  disabled,
  iconName,
  text,
  textColor,
  theme,
  type,
}) => (iconName ? (
  <>
    <LabelText
      disabled={disabled}
      textColor={textColor}
      type={type}
    >
      {text.toUpperCase()}
    </LabelText>
    <Text> </Text>
    <Icon
      color={getButtonTextColor(theme, type, disabled) as unknown as IconColors}
      name={iconName}
      size="small" />
  </>
) : (
  <LabelText
    disabled={disabled}
    textColor={textColor}
    testID="label-text"
    type={type}
  >
    {text.toUpperCase()}
  </LabelText>
));

const ButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  textColor,
  onPress,
  size = 'medium',
  testID = 'button-base',
  text,
  theme,
  type = 'contained',
}: ButtonProps) => {
  const [rippleSize, setRippleSize] = useState(0);

  return (
    <TouchableRipple
        color="highlight"
        disabled={disabled}
        hideOverflow={true}
        onPress={disabled ? () => {} : onPress}
        size={rippleSize}
        >
      <Base
        disabled={disabled}
        onLayout={event => getRippleSizeForHorizontalComponents(event, setRippleSize)}
        size={size}
        style={getShadowByType(type, disabled, theme)}
        testID={testID}
        type={type}
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
      </TouchableRipple>
  );
};


export const ButtonBase = withTheme(ButtonComponent);
