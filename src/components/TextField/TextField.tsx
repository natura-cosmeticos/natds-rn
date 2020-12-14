/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable no-unneeded-ternary */
import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Text, TextInputProps } from 'react-native';
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

export interface TextFieldProps extends TextInputProps {
  /**
   * A disabled input is unusable
   */
  disabled?: boolean;
  /**
   * Style the input field according to the data  provided by the user to give a visual feedback
   * about the validation of the data
   */
  feedback?: 'error' | 'success';
  /**
   * Show a helper text below the input field
   */
  helperText?: string;
  /**
   * Descriptive text above the input field
   */
  label: string;
  /**
   * Define if the input has more than one line or not
   */
  multiline?: boolean;
  /**
   * Number of lines the input has
   */
  numberOfLines?: number;
  /**
   * onBlur event handler
   */
  onBlur?: (func) => void;
  /**
   * onChangeText event handler
   */
  onChangeText: (ev: string) => void;
  /**
   * onFocus event handler
   */
  onFocus?: (func) => void;
  /**
   * onSubmitEditing handler
   */
  onSubmitEditing?: () => void;
  /**
   * Input placeholder
   */
  placeholder: string;
  /**
   * When this prop is set, the value of the input can not be changed
   */
  readOnly?: boolean;
  /**
   * Show a visual indication if the input is required: Label*
   */
  required?: boolean;
  /**
   * Define the size of the input: tiny | small
   */
  size?: 'small' | 'regular';
  /**
   * TextField states: 'enabled' | 'focus' | 'active' | 'filled'
   */
  state?: TextFieldStates;
  /**
   * Id for testing
   */
  testID?: string;
  /**
   * app theme
   */
  theme: Theme;
  /**
   * Type of the input
   */
  type: 'text' | 'password';
  /**
   * Input value
   */
  value: string;
}

export interface InputRef {
  focus(): void;
}

const TextFieldComponent: React.RefForwardingComponent<
  InputRef,
  TextFieldProps
> = (
  {
    size = 'regular',
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
    onBlur,
    onChangeText,
    onFocus,
    onSubmitEditing,
    ...props
  },
  ref,
) => {
  const [currentState, setCurrentState] = useState<TextFieldStates>(() => {
    // If a state is provided, use it as the current state
    if (state) {
      return state;
    }

    // If value or readOnly is truthy, set the state as filled, else set as enabled
    return value || readOnly ? 'filled' : 'enabled';
  });

  const handleOnFocus = (func) => {
    setCurrentState('active');

    if (onFocus) {
      onFocus(func);
    }
  };

  const handleOnBlur = (func) => {
    setCurrentState(value ? 'filled' : 'enabled');

    if (onBlur) {
      onBlur(func);
    }
  };

  const inputElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

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
        numberOfLines={numberOfLines}
        testID={`${testID}-inputWrapper`}
        feedback={feedback}>
        <Input
          ref={inputElementRef}
          testID={`${testID}-input`}
          secureTextEntry={type === 'password'}
          onChangeText={onChangeText}
          placeholder={placeholder}
          size={size}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onSubmitEditing={onSubmitEditing}
          editable={disabled || readOnly ? false : true}
          disabled={disabled}
          feedback={feedback}
          type={type}
          label={label}
          {...props}
        />
      </InputWrapper>

      <HelperText disabled={disabled} feedback={feedback} state={currentState}>
        {helperText !== '' && <Text>{helperText}</Text>}
      </HelperText>
    </Wrapper>
  );
};

export const TextField = withTheme(forwardRef(TextFieldComponent));
