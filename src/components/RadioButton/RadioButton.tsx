import React from 'react'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

import { TouchableRipple } from '../TouchableRipple/TouchableRipple'
import {
  Container, Circle, Center, Label, Wrapper
} from './RadioButton.styles'

/**
 * @deprecated use `primary` instead
 */
type RadioButtonDeprecatedColor = 'secondary'
export type RadioButtonColors = 'primary' | RadioButtonDeprecatedColor;

export interface RadioButtonProps {
  /**
   * RadioButton color: `primary`
   *
   * deprecated color: `secondary`
   */
  color?: RadioButtonColors;
  /**
   * Optional brand that appears to the component,
   */
  brand?: BrandTypes;
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

export const RadioButton = ({
  color = 'primary',
  onPress,
  selected,
  disabled = false,
  label,
  brand,
  value = '',
  testID = 'radio-button'
}: RadioButtonProps) => {
  const onPressWithValue = () => {
    if (onPress) {
      onPress(value)
    }
  }
  const radio = (
    <TouchableRipple
      size={20}
      color={color}
      onPress={onPressWithValue}
      disabled={disabled}
      testID={testID}
      style={{ borderRadius: 50 }}
    >
      <Wrapper>
        <Circle brand={brand} disabled={disabled} color={color} selected={selected} testID={`${testID}-circle`}>
          {
            selected
              ? (
                <Center
                  brand={brand}
                  disabled={disabled}
                  color={color}
                  selected={selected}
                  testID={`${testID}-circle-selected`}
                />
              ) : null
          }
        </Circle>
      </Wrapper>
    </TouchableRipple>
  )

  if (label) {
    return (
      <Container disabled={disabled} testID={`${testID}-label`} onPress={onPressWithValue}>
        {radio}
        <Label disabled={disabled}>{label}</Label>
      </Container>
    )
  }

  return radio
}
