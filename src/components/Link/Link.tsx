import React from 'react';
import { LinkProps } from './Link.types';
import { Label } from './Link.styles';

export const Link = ({
  children,
  onPress,
  testID,
  type = 'standard',
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole,
}: LinkProps) => (
  <Label
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    accessibilityRole={accessibilityRole}
    onPress={onPress}
    testID={testID}
    type={type}
  >
    {children}
  </Label>
);
