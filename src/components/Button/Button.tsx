/* eslint-disable max-lines */
import React from 'react';
import { Color } from '@naturacosmeticos/natds-themes/react-native';
import { ButtonBase } from './ButtonBase';
import { ButtonProps, ButtonTypes } from './Button.types';

const getButtonTextColor = (type: ButtonTypes, disabled: boolean) => {
  const color: {
    active: keyof Color,
    disabled: keyof Color,
  } = {
    active: type === 'contained' ? 'onPrimary' : 'highEmphasis',
    disabled: type === 'contained' ? 'highEmphasis' : 'mediumEmphasis',
  };

  return disabled ? color.disabled : color.active;
};

export const Button = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  onPress,
  size = 'medium',
  testID = 'button',
  text,
  type = 'contained',
}: ButtonProps) => (
  <ButtonBase
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    disabled={disabled}
    iconName={iconName}
    iconPosition={iconPosition}
    onPress={onPress}
    size={size}
    testID={testID}
    text={text}
    textColor={getButtonTextColor(type, disabled)}
    type={type}
  />
);
