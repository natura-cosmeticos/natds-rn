import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Container, Input, Label } from './Counter.styles';
import { CounterProps } from './Counter.types';

const validateNumber = (textValue: string, minValue: number, maxValue: number) => {
  const value = parseFloat(textValue);
  const max = maxValue;
  const min = minValue;

  if (value > max) return max.toString();
  if (value < min) return min.toString();

  return value.toString();
};

export const Counter = ({
  decrementButtonAccessibilityHint,
  decrementButtonAccessibilityLabel,
  incrementButtonAccessibilityHint,
  incrementButtonAccessibilityLabel,
  inputAccessibilityHint,
  inputAccessibilityLabel,
  disableDecrementButton,
  disableIncrementButton,
  disabled,
  label,
  minValue = 0,
  maxValue = 99,
  onDecrement,
  onIncrement,
  size = 'medium',
  testID = 'counter',
  value = 0,
}: CounterProps) => (
    <View>
      { label
        && <Label testID="counter-label">
        { label }
        </Label>
      }
      <Container size={size} testID={testID} accessibilityLiveRegion="assertive">
        <Button
          accessibilityHint={decrementButtonAccessibilityHint}
          accessibilityLabel={decrementButtonAccessibilityLabel}
          size={size}
          type="text"
          text="−"
          onPress={onDecrement}
          disabled={disabled || disableDecrementButton}
        />
        <Input
          accessibilityHint={inputAccessibilityHint}
          accessibilityLabel={inputAccessibilityLabel}
          editable={false}
          value={validateNumber(value.toString(), minValue, maxValue)}
          testID="counter-input"
        />
        <Button
          accessibilityHint={incrementButtonAccessibilityHint}
          accessibilityLabel={incrementButtonAccessibilityLabel}
          size={size}
          type="text"
          text="+"
          onPress={onIncrement}
          disabled={disabled || disableIncrementButton}
        />
      </Container>
    </View>
);
