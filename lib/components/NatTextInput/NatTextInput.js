import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputWrapper, TextInput, Label, AssistiveText, InputIcon, IconPress } from './NatTextInput.styles';

export const NatTextInput = ({
  onChangeText, value, type, label, placeholder, secureTextEntry, assistiveText, icon, iconPress, onFocus, onBlur, size, margin, accessibilityLabel, accessibilityHint, autoCapitalize, autoCorrect,
}) => {

  const isFilled = () => (value ? 'filled' : 'default' );
  const [state, setState]  = useState(isFilled());

  const _onFocus = func => {
    setState('active');
    onFocus && onFocus(func);
  };

  const _onBlur = func => {
    const currentState = value ? 'filled' : 'default';
    setState(currentState);
    onBlur && onBlur(func);
  };

  const defaultSize = propSize => ((propSize === 'small') ? '40px' : '56px');
  const defaultMargin = propMargin => {
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
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      >
      <Label type={type} state={state}>{label}</Label>
      <InputWrapper type={type} state={state} defaultSize={defaultSize(size)}>
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={_onFocus}
          onBlur={_onBlur}
          value={value}
          editable={(type === 'disabled') ? false : true }
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          type={type} 
          state={state}
        />
        { icon && <IconPress onPress={iconPress}><InputIcon type={type} state={state} source={icon} /></IconPress> }
      </InputWrapper>
      {assistiveText &&  <AssistiveText type={type} state={state}>{assistiveText}</AssistiveText>}
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
};

NatTextInput.defaultProps = {
  type: 'default',
  value: '',
  iconPress: null,
};
