/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, InputWrapper, TextInput, Label, AssistiveTexView, IconPress,
} from './NatTextInput.styles';
import { loadIcon } from '../../utils';
import {
  ThemeNaturaLight,
} from '../..';


export const NatTextInput = ({
  onChangeText,
  value,
  type,
  label,
  placeholder,
  secureTextEntry,
  assistiveText,
  icon,
  iconPress,
  onFocus,
  onBlur,
  size,
  margin,
  multiline,
  numberOfLines,
  accessibilityLabel,
  accessibilityHint,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  theme,
}) => {
  const isFilled = () => (value ? 'filled' : 'default');
  const [state, setState] = useState(isFilled());

  const handleOnFocus = (func) => {
    setState('active');
    onFocus && onFocus(func);
  };

  const handleOnBlur = (func) => {
    const currentState = value ? 'filled' : 'default';

    setState(currentState);
    onBlur && onBlur(func);
  };

  const renderIcon = (iconData) => {
    const iconAttributes = {
      color: ThemeNaturaLight.palette.text.primary,
      size: 24,
    };

    return (
      <IconPress onPress={iconPress}>
        { loadIcon(iconData, iconAttributes) }
      </IconPress>
    );
  };

  const defaultSize = (propSize, lines) => {
    if (lines === 1) {
      return ((propSize === 'small') ? '40px' : '56px');
    }
    if (lines > 1) return `${lines * 40}px`;

    return ((propSize === 'small') ? '40px' : '56px');
  };
  const defaultHeight = (propSize, lines) => {
    if (lines === 1) {
      return ((propSize === 'small') ? 36 : 52);
    }
    if (lines > 1) return lines * 40 - 4;

    return ((propSize === 'small') ? 36 : 52);
  };

  return (
    <Wrapper
      marginDefault={margin}
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      theme={theme}
    >
      { label !== '' && <Label type={type} state={state} theme={theme} text={label} /> }
      <InputWrapper
        type={type}
        state={state}
        defaultSize={defaultSize(size, numberOfLines)}
        theme={theme}
      >
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onSubmitEditing={onSubmitEditing}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={type !== 'disabled'}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          type={type}
          size={size}
          state={state}
          style={{ height: defaultHeight(size, numberOfLines) }}
          theme={theme}
        />
        { icon && renderIcon(icon) }
      </InputWrapper>
      {assistiveText !== '' && <AssistiveTexView type={type} state={state} theme={theme} text={assistiveText} />}
    </Wrapper>
  );
};

NatTextInput.propTypes = {
  accessibilityHint: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  assistiveText: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  icon: PropTypes.shape({
    content: PropTypes.any,
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.number,
    }),
  }),
  iconPress: PropTypes.func,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.shape({}),
  type: PropTypes.string,
  value: PropTypes.string,
};

NatTextInput.defaultProps = {
  assistiveText: '',
  icon: false,
  iconPress: null,
  margin: 'tiny',
  multiline: false,
  numberOfLines: 1,
  theme: ThemeNaturaLight,
  type: 'default',
  value: '',
};
