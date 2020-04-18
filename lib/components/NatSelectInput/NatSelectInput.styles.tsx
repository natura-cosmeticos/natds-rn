/* eslint-disable complexity, max-lines */
import React from 'react';
import styled from 'styled-components/native';
import { NatText } from '../NatText';
import { getInputStyles } from '../NatTextInput/NatTextInput.styles';

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
