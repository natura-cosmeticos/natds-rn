import React from 'react'
import { View } from 'react-native'
import { Button } from '../Button'
import { Container, Input, Label } from './Counter.styles'
import { CounterProps } from './Counter.types'

export const Counter = ({
  decrementButtonAccessibilityHint,
  decrementButtonAccessibilityLabel,
  incrementButtonAccessibilityHint,
  incrementButtonAccessibilityLabel,
  inputAccessibilityHint,
  inputAccessibilityLabel,
  disabled,
  label,
  minValue = 0,
  maxValue = 99,
  onDecrement,
  onIncrement,
  size = 'medium',
  testID = 'counter',
  value = 0
}: CounterProps) => (
  <View>
    { label
        && (
        <Label testID="counter-label">
          { label }
        </Label>
        )}
    <Container size={size} testID={testID} accessibilityLiveRegion="assertive">
      <Button
        accessibilityHint={decrementButtonAccessibilityHint}
        accessibilityLabel={decrementButtonAccessibilityLabel}
        size={size}
        type="text"
        text="−"
        onPress={onDecrement}
        disabled={disabled || value <= minValue}
      />
      <Input
        accessibilityHint={inputAccessibilityHint}
        accessibilityLabel={inputAccessibilityLabel}
        editable={false}
        value={value.toString()}
        testID="counter-input"
      />
      <Button
        accessibilityHint={incrementButtonAccessibilityHint}
        accessibilityLabel={incrementButtonAccessibilityLabel}
        size={size}
        type="text"
        text="+"
        onPress={onIncrement}
        disabled={disabled || value >= maxValue}
      />
    </Container>
  </View>
)
