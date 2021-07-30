import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import { View } from 'react-native';
import {
  getBorderRadiusMedium,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getSize,
  getSizeMediumX,
  getSpacingMicro,
  getSpacingSmall,
  getTypographyStyles,
} from '../../common/themeSelectors';
import { Button } from '../Button';
import { CounterProps, CounterSizes } from './Counter.types';

export const Label = styled.Text<{ theme: Theme }>(({ theme }): CSSObject => {
  const { subtitle2 } = getTypographyStyles(theme);

  return ({
    color: getColorMediumEmphasis(theme),
    fontSize: subtitle2.fontSize,
    fontWeight: subtitle2.fontWeight,
    letterSpacing: subtitle2.letterSpacing,
    marginBottom: getSpacingMicro(theme),
  });
});

const Container = styled.View<{
  size: CounterSizes, theme: Theme
}>(({ size, theme }): CSSObject => ({
  alignItems: 'center',
  backgroundColor: getColorSurface(theme),
  borderColor: getColorLowEmphasis(theme),
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth: 1,
  flexDirection: 'row',
  height: getSize(theme, size),
}));

const Input = styled.TextInput<{ theme: Theme }>(({ theme }): CSSObject => {
  const { body1 } = getTypographyStyles(theme);

  return ({
    borderColor: getColorLowEmphasis(theme),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    color: getColorHighEmphasis(theme),
    fontSize: body1.fontSize,
    fontWeight: body1.fontWeight,
    height: '100%',
    letterSpacing: body1.letterSpacing,
    minWidth: getSizeMediumX(theme),
    paddingHorizontal: getSpacingSmall(theme),
    textAlign: 'center',
  });
});

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
