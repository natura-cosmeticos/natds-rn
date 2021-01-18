import React from 'react';
import { TouchableRipple } from '../TouchableRipple';
import {
  Container, Box, Check, Label,
} from './Checkbox.styles';

export type CheckboxColors = 'primary' | 'secondary';

export interface CheckboxProps {
  /**
   * Checkbox color: `primary` | `secondary`
   */
  color?: CheckboxColors;
  /**
   * Called when the touch is released, but not if cancelled
   */
  onPress?: (value: string) => void;
  /**
   * Programmatically tell if the component is selected
   */
  selected?: boolean;
  /**
   * Optional property that tells if the select is disabled,
   * if so, the user cannot click on this item.
   */
  disabled?: boolean;
  /**
   * Optional label that appears to the right of the component,
   * if the user clicks that label, the onPress function will be called
   */
  label?: string;
  /**
   * The value of the component.
   */
  value?: string;
  /**
   * Optional testID
   */
  testID?: string;
}

export const Checkbox = ({
  color = 'primary',
  onPress,
  selected,
  disabled = false,
  label,
  value = '',
  testID = 'checkbox',
}: CheckboxProps) => {
  const onPressWithValue = () => {
    if (onPress) {
      onPress(value);
    }
  };
  const checkbox = (
    <TouchableRipple
      size={20}
      color={color}
      onPress={onPressWithValue}
      disabled={disabled}
      testID={testID}
    >
      <Box disabled={disabled} color={color} selected={selected} testID={`${testID}-circle`}>
        {
          selected
            ? <Check />
            : null
        }
      </Box>
    </TouchableRipple>
  );

  if (label) {
    return (
      <Container disabled={disabled} testID={`${testID}-label`} onPress={onPressWithValue}>
        {checkbox}
        <Label disabled={disabled}>{label}</Label>
      </Container>
    );
  }

  return checkbox;
};
