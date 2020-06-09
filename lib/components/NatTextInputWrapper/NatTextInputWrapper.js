/* eslint-disable no-unused-expressions, max-lines */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, InputWrapper, View, Label, AssistiveTexView, IconPress,
} from './NatTextInputWrapper.styles';
import { loadIcon } from '../../utils';
import {
  ThemeNaturaLight,
} from '../../themes/ThemeNaturaLight';
import { NatText } from '../NatText';

export const NatTextInputWrapper = ({
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

  const currentState = () => (value ? 'filled' : 'default');

  const handleOnBlur = (func) => {
    setState(currentState());
    onBlur && onBlur(func);
  };

  useEffect(() => {
    setState(currentState());
  }, [value]);

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
        <View
          type={type}
          size={size}
          state={state}
          style={{ height: defaultHeight(size, numberOfLines) }}
          theme={theme}
        >
          <NatText
            value={value}
            textAlign="left"
            type="body1"
            margin={0}
          />
        </View>
        { icon && renderIcon(icon) }
      </InputWrapper>
      {assistiveText !== '' && <AssistiveTexView type={type} state={state} theme={theme} text={assistiveText} />}
    </Wrapper>
  );
};

NatTextInputWrapper.propTypes = {
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

NatTextInputWrapper.defaultProps = {
  assistiveText: '',
  icon: null,
  iconPress: null,
  margin: 'tiny',
  multiline: false,
  numberOfLines: 1,
  theme: ThemeNaturaLight,
  type: 'default',
  value: '',
};
