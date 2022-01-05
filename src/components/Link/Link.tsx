import React from 'react';
import { LinkProps } from './Link.types';
import { Label } from './Link.styles';

export const Link = ({
  children,
  onPress,
  testID,
  type = 'standard',
}: LinkProps) => (
  <Label
    testID={testID}
    onPress={onPress}
    type={type}
  >
    {children}
  </Label>
);
