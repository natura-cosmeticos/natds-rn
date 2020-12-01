import React, { useState } from 'react';
import { Text } from 'react-native';
import { withTheme } from 'styled-components';
import { Theme } from '../../common/themeSelectors';

import {
  Wrapper,
  InputWrapper,
  Input,
  Label,
  HelperText,
} from './TextField.styles';

export type TextFieldStates = 'enabled' | 'focus' | 'active' | 'filled';

export interface TextFieldProps {
  // Define the size of the input: tiny | small
  size?: 'tiny' | 'small';
  // Style the input field according to the data provided by the user to give a visual feedback about the validation of the data
  feedback?: 'error' | 'success';
  // TextField states: 'enabled' | 'focus' | 'active' | 'filled'
  state?: TextFieldStates;
  // Show a visual indication if the input is required: Label*
  required?: boolean;
  // A disabled input is unusable
  disabled?: boolean;
  // When this prop is set, the value of the input can not be changed
  readOnly?: boolean;
  // Show a helper text bellow the input field
  helperText?: string;
  // Id for testing
  testID?: string;
  // Define if the input has more than one line or not
  multiline?: boolean;
  // Number of lines the input has
  numberOfLines?: number;
  // Type of the input
  type: 'text' | 'password';
  // Descriptive text above the input field
  label: string;
  // Input placeholder
  placeholder: string;
  // Input value
  value: string;
  // onChangeText event handler
  onChangeText: (ev: string) => void;
  // Custom function to handle input focus
  onFocus?: (func: () => void) => void;
  // Custom function to handle input blur
  onBlur?: (func: () => void) => void;
  // onSubmitEditing handler
  onSubmitEditing: () => void;
  // app theme
  theme: Theme;
}

const TextFieldComponent = ({
  size = 'small',
  testID = 'textField',
  required = false,
  disabled = false,
  readOnly = false,
  helperText = '',
  multiline = false,
  numberOfLines = 1,
  type,
  feedback,
  state,
  theme,
  label,
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onFocus,
  onBlur,
}: TextFieldProps) => {
  const [currentState, setCurrentState] = useState<TextFieldStates>(() => {
    // If a state is provided, use it as the current state
    if (state) {
      return state;
    }

    // If value or readOnly is truthy, set the state as filled, else set as enabled
    return value || readOnly ? 'filled' : 'enabled';
  });

  const handleOnFocus = (func: () => void) => {
    setCurrentState('active');

    // If a custom onFocus function is provided call it
    onFocus && onFocus(func);
  };

  const handleOnBlur = (func: () => void) => {
    setCurrentState(value ? 'filled' : 'enabled');

    // If a custom onBlur function is provided call it
    onBlur && onBlur(func);
  };

  return (
    <Wrapper testID={testID}>
      {label !== '' && (
        <Label disabled={disabled} state={currentState} feedback={feedback}>
          <Text>{required ? `${label}*` : label}</Text>
        </Label>
      )}

      <InputWrapper
        disabled={disabled}
        state={currentState}
        size={size}
        testID={`${testID}-inputWrapper`}
        feedback={feedback}>
        <Input
          testID={`${testID}-input`}
          secureTextEntry={type === 'password' ? true : false}
          onChangeText={onChangeText}
          placeholder={placeholder}
          required={required}
          size={size}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          multiline={multiline}
          numberOfLines={numberOfLines}
          type={type}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onSubmitEditing={onSubmitEditing}
          editable={readOnly || disabled ? false : true}
          disabled={disabled}
        />
      </InputWrapper>

      <HelperText disabled={disabled} feedback={feedback} state={currentState}>
        {helperText !== '' && <Text>{helperText}</Text>}
      </HelperText>
    </Wrapper>
  );
};

export const TextField = withTheme(TextFieldComponent);
