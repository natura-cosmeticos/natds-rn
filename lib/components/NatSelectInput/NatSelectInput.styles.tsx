/* eslint-disable complexity, max-lines */
import React from 'react';
import styled from 'styled-components/native';
import { NatText } from '../NatText';

interface ConfigStyle {
  color?: string,
  borderColor?: string,
  border?: string,
}

const getInputStyles = (type, state, theme) => {
  const configStyle: ConfigStyle = {};

  switch (type) {
    case 'error':
      configStyle.color = theme.palette.error.main;
      configStyle.borderColor = theme.palette.error.main;
      configStyle.border = '2px';
      break;
    case 'disabled':
      configStyle.color = theme.palette.text.disabled;
      configStyle.borderColor = theme.palette.text.disabled;
      // configStyle.backgroundColor = theme.palette.text.disabled;
      break;
    case 'none':
      configStyle.color = theme.palette.text.disabled;
      configStyle.borderColor = theme.palette.text.disabled;
      configStyle.border = '0px';
      // configStyle.backgroundColor = theme.palette.text.disabled;
      break;
    default:
      configStyle.color = theme.palette.text.secondary;
      configStyle.borderColor = theme.palette.text.disabled;
      if (state === 'active') {
        configStyle.border = '2px';
        configStyle.borderColor = theme.palette.primary.main;
      }
      if (state === 'filled') {
        // configStyle.border = '2px';
        configStyle.borderColor = theme.palette.background.defaultContrastText;
      }
      break;
  }

  return configStyle;
};

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: ${({ defaultMargin }) => defaultMargin || '0px'};
`;
export const InputWrapper = styled.View`
  border: ${({ type, state, theme }) => getInputStyles(type, state, theme).border || '1px'};
  border-color: ${({ type, state, theme }) => getInputStyles(type, state, theme).borderColor};
  border-radius: 4px;
  height: ${({ defaultSize }) => defaultSize || '56px'};
  padding-left: 16px;
  padding-bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
`;
export const TextInput = styled.TextInput`
  font-size: 16px;
  flex: 7;
  align-self: center;
  padding-top: ${({ numberOfLines }) => (numberOfLines > 1 ? '16px' : '0px')};
  padding-bottom: ${({ numberOfLines }) => (numberOfLines > 1 ? '16px' : '0px')};
  text-align-vertical: top;
  height: ${({ defaultSize }) => defaultSize || '56px'};
  color: ${({ theme }) => theme.palette.text.secondary};
  letter-spacing: ${({ secureTextEntry }) => (secureTextEntry ? '0px' : '0px')};
`;
type LabelProps = {
  state: string,
  text: string,
  theme: any,
  type: string
};
export const Label: React.SFC<LabelProps> = ({
  type, state, theme, text,
}) => {
  const { color } = getInputStyles(type, state, theme);

  return (
    <NatText
      value={text}
      type="body2"
      color={color}
      margin={theme.spacing.spacingNone}
    />
  );
};
type AssistiveTextProps = {
  state: string,
  text: string,
  theme: any,
  type: string
};
export const AssistiveText: React.SFC<AssistiveTextProps> = ({
  type,
  state,
  theme,
  text,
}) => {
  const { color } = getInputStyles(type, state, theme);

  return (
    <NatText
      value={text}
      type="caption"
      color={color}
      margin={theme.spacing.spacingNone}
    />
  );
};
export const InputIcon = styled.Image`
  height: 24;
  width: 24;
  tint-color: ${({ type, state, theme }) => getInputStyles(type, state, theme).color};
`;
export const IconPress = styled.TouchableOpacity`
  align-self: center;
  flex: 1;
`;
