import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Container, Input, Label } from './Counter.styles';
import { CounterProps } from './Counter.types';

const transformTextToNumber = (value: string) => parseFloat(value.replace(/\D/g, ''));
const validateNumber = (value: number, minValue: number, maxValue: number) => {
  if (value > maxValue) return maxValue;
  if (value < minValue) return minValue;

  return value;
};

export const Counter = ({
  decrementButtonAccessibilityHint,
  decrementButtonAccessibilityLabel,
  incrementButtonAccessibilityHint,
  incrementButtonAccessibilityLabel,
  disabled,
  label,
  size = 'medium',
  testID = 'counter',
  value = 0,
}: CounterProps) => {
  const minValue = 0;
  const maxValue = 99;
  const [currentValue, setCurrentValue] = useState(value);

  const addItem = () => currentValue < maxValue && setCurrentValue(currentValue + 1);
  const subtractItem = () => currentValue > minValue && setCurrentValue(currentValue - 1);

  const handleUserInput = (userInput: string) => {
    const userInputValue = transformTextToNumber(userInput);
    const validatedValue = validateNumber(userInputValue, minValue, maxValue);

    setCurrentValue(validatedValue);
  };

  const disableButton = (buttonAction: 'add' | 'subtract') => {
    const isDisabled = {
      add: disabled || currentValue === maxValue,
      subtract: disabled || currentValue === minValue,
    };

    return isDisabled[buttonAction];
  };

  return (
    <View>
      { label
        && <Label testID="counter-label">
        { label }
        </Label>
      }
      <Container size={size} testID={testID}>
        <Button
          accessibilityHint={decrementButtonAccessibilityHint}
          accessibilityLabel={decrementButtonAccessibilityLabel}
          size={size}
          type="text"
          text="−"
          onPress={subtractItem}
          disabled={disableButton('subtract')}
        />
        <Input
          accessibilityLiveRegion="assertive"
          accessibilityValue={{ max: maxValue, min: minValue, now: currentValue }}
          editable={!disabled}
          keyboardType="numeric"
          onChangeText={text => handleUserInput(text)}
          value={currentValue.toString()}
          testID="counter-input"
        />
        <Button
          accessibilityHint={incrementButtonAccessibilityHint}
          accessibilityLabel={incrementButtonAccessibilityLabel}
          size={size}
          type="text"
          text="+"
          onPress={addItem}
          disabled={disableButton('add')}
        />
      </Container>
    </View>
  );
};
