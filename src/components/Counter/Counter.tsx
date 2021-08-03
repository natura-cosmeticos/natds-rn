import React, { Dispatch, SetStateAction, useState } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Container, Input, Label } from './Counter.styles';
import { CounterProps } from './Counter.types';

const transformTextToNumber = (value: string) => parseFloat(value.replace(/\D/g, ''));
const validateNumber = (value: number) => {
  if (value > 99) return 99;
  if (value < 0) return 0;

  return value;
};
const validateUserInput = (userInput: string) => validateNumber(transformTextToNumber(userInput));
const handleValidInput = (
  handlerFunction: Dispatch<SetStateAction<number>>,
) => (userInput: string) => handlerFunction(validateUserInput(userInput));

export const Counter = ({
  disabled, label, size = 'medium', testID = 'counter', value = 0,
}: CounterProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const addItem = () => currentValue < 99 && setCurrentValue(currentValue + 1);
  const subtractItem = () => currentValue > 0 && setCurrentValue(currentValue - 1);
  const handleUserInput = handleValidInput(setCurrentValue);
  const disableButton = (buttonAction: 'add' | 'subtract') => {
    const isDisabled = {
      add: disabled || currentValue === 99,
      subtract: disabled || currentValue === 0,
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
        <Button size={size} type="text" text="-" onPress={subtractItem} disabled={disableButton('subtract')} testID="button-subtract" />
        <Input testID="counter-input"
          editable={!disabled}
          keyboardType="numeric"
          onChangeText={text => handleUserInput(text)}
          value={currentValue.toString()}
        />
        <Button size={size} type="text" text="+" onPress={addItem} disabled={disableButton('add')} />
      </Container>
    </View>
  );
};
