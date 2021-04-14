/* eslint-disable max-lines */
import React from 'react';
import { ButtonBase } from './ButtonBase';
import { ButtonProps } from './Button.types';
import { getButtonTextColor } from './Button.styles';

export const Button = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  iconName,
  iconPosition,
  onPress,
  size = 'semiX',
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
    textColor={getButtonTextColor({ disabled, type })}
    type={type}
  />
);
