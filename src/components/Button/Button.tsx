import React from 'react'
import { ButtonBase } from './ButtonBase'
import { ButtonProps } from './Button.types'

export const Button = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityActions,
  onAccessibilityAction,
  disabled = false,
  iconName,
  iconPosition,
  onPress,
  size = 'semiX',
  testID = 'button',
  text,
  type = 'contained',
  brand
}: ButtonProps) => (
  <ButtonBase
    onAccessibilityAction={onAccessibilityAction}
    accessibilityActions={accessibilityActions}
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    disabled={disabled}
    iconName={iconName}
    iconPosition={iconPosition}
    onPress={onPress}
    size={size}
    brand={brand}
    testID={testID}
    text={text}
    type={type}
  />
)
