import React from 'react';
import { ButtonBase } from './ButtonBase';
import { ButtonProps } from './Button.types';

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
    type={type}
  />
);
