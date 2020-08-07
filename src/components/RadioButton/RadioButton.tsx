import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { TouchableRipple } from '../TouchableRipple';
import { Circle, Center } from './RadioButton.styles';

export type RadioButtonColors = 'primary' | 'secondary';

export interface RadioButtonProps {
  /**
   * RadioButton color: `primary` | `secondary`
   */
  color?: RadioButtonColors;
  /**
   * Called when the touch is released, but not if cancelled
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Programmatically tell if the component is selected
   */
  isSelected?: boolean;
  /**
   * Optional property that tells if the select is disabled,
   * if so, the user cannot click on this item.
   */
  disabled?: boolean;
  /**
   * Optional testID
   */
  testID?: string;
}

export const RadioButton = ({
  color = 'primary',
  onPress,
  isSelected,
  disabled = false,
  testID = 'radio-button',
}: RadioButtonProps) => (
    <TouchableRipple
      size={20}
      color={color}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
    >
      <Circle disabled={disabled} color={color}>
        {
          isSelected
            ? <Center color={color} />
            : null
        }
      </Circle>
    </TouchableRipple>
);
