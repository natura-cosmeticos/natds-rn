import React from 'react'
import { LinkProps } from './Link.types'
import { Label } from './Link.styles'

export const Link = ({
  children,
  onPress,
  testID,
  type = 'standard',
  accessibilityHint,
  accessibilityRole
}: LinkProps) => (
  <Label
    accessibilityHint={accessibilityHint}
    accessibilityRole={accessibilityRole}
    onPress={onPress}
    testID={testID}
    type={type}
  >
    {children}
  </Label>
)
