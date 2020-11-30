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
  size?: 'tiny' | 'small';
  feedback?: 'error' | 'success';
  state?: TextFieldStates;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string;
  testID?: string;
  multiline?: boolean;
  numberOfLines?: number;
  type: 'text' | 'password';
  theme: Theme;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (ev: string) => void;
  onFocus?: (func: () => void) => void;
  onBlur?: (func: () => void) => void;
  onSubmitEditing: () => void;
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
    if (state) {
      return state;
    }

    return value || readOnly ? 'filled' : 'enabled';
  });

  const handleOnFocus = (func: () => void) => {
    setCurrentState('active');

    onFocus && onFocus(func);
  };

  const handleOnBlur = (func: () => void) => {
    setCurrentState(value ? 'filled' : 'enabled');

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
