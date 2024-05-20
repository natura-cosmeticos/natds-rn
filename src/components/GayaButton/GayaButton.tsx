import React from 'react'
import { GayaButtonBase } from './GayaButtonBase'
import { GayaButtonProps } from './GayaButton.types'

export const GayaButton = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityActions,
  onAccessibilityAction,
  textTransform,
  disabled = false,
  iconName,
  color = 'primary',
  iconPosition,
  onPress,
  size = 'semiX',
  testID = 'button',
  text,
  type = 'contained',
  brand,
  mode
}: GayaButtonProps) => (
  <GayaButtonBase
    onAccessibilityAction={onAccessibilityAction}
    accessibilityActions={accessibilityActions}
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    disabled={disabled}
    textTransform={textTransform}
    iconName={iconName}
    color={color}
    iconPosition={iconPosition}
    onPress={onPress}
    size={size}
    brand={brand}
    mode={mode}
    testID={testID}
    text={text}
    type={type}
  />
)
