import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, InputWrapper, TextInput, Label, AssistiveText, InputIcon, IconPress,
} from './NatTextInput.styles';
import { load as loadSvg } from '../../assets/icons/svg';
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
    if (iconData.svg) {
      const IconComponent = loadSvg(iconData.svg.name);
      const iconSize = (iconData.svg.size) ? iconData.svg.size : 24;
      return (
        <IconPress onPress={iconPress}>
          <IconComponent width={iconSize} height={iconSize} />
        </IconPress>
      );
    }
    if (iconData.content) {
      return (
        <IconPress onPress={iconPress}>
          <InputIcon type={type} state={state} source={iconData.content} theme={theme} />
        </IconPress>
      );
    }
    return (
      <IconPress onPress={iconPress}>
        <InputIcon type={type} state={state} source={iconData} theme={theme} />
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
  const defaultMargin = (propMargin) => {
    switch (propMargin) {
      case 'none': return '0px';
      case 'dense': return '8px';
      case 'normal': return '16px';
      default: return '0px';
    }
  };

  return (
    <Wrapper
      defaultMargin={defaultMargin(margin)}
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      theme={theme}
    >
      <Label type={type} state={state} theme={theme} text={label} />
      <InputWrapper type={type} state={state} defaultSize={defaultSize(size, numberOfLines)} theme={theme}>
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={type !== 'disabled'}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          type={type}
          state={state}
          style={{ height: defaultHeight(size, numberOfLines) }}
          theme={theme}
        />
        { icon && renderIcon(icon) }
      </InputWrapper>
      {assistiveText && <AssistiveText type={type} state={state} theme={theme} text={assistiveText} />}
    </Wrapper>
  );
};

NatTextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  assistiveText: PropTypes.string,
  iconPress: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  margin: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  accessibilityHint: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  icon: PropTypes.shape({
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.number,
    }),
    content: PropTypes.any,
  }),
  theme: PropTypes.shape(),
};

NatTextInput.defaultProps = {
  type: 'default',
  value: '',
  iconPress: null,
  icon: false,
  multiline: false,
  numberOfLines: 1,
  theme: ThemeNaturaLight,
};
