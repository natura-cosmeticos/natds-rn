/* eslint-disable max-lines, complexity */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { NatText } from '../NatText';
import { sizes } from '../../tokens/sizes';

const getInputStyles = (type, state, theme) => {
  const configStyle = {};

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

const getPaddingSize = (multiline, size) => {
  let finalSize = ((multiline > 1) ? '16px' : '16px');

  if (size === 'small') {
    finalSize = ((multiline > 1) ? '8px' : '8px');
  }

  return finalSize;
};

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: ${({ marginDefault }) => sizes[marginDefault]}px;
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
  background-color: ${({ type, state, theme }) => getInputStyles(type, state, theme).backgroundColor || 'transparent'};
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  flex: 7;
  align-self: center;
  padding-top: ${({ numberOfLines, size }) => getPaddingSize(numberOfLines, size)};
  padding-bottom: ${({ numberOfLines, size }) => getPaddingSize(numberOfLines, size)};
  text-align-vertical: top;
  height: ${({ defaultSize }) => defaultSize || '56px'};
  color: ${({ type, state, theme }) => getInputStyles(type, state, theme).fontColor || theme.palette.text.secondary};
  letter-spacing: ${({ secureTextEntry }) => (secureTextEntry ? '0px' : '0px')};
`;

export const Label = ({
  type,
  state,
  theme,
  text,
}) => {
  const { color } = getInputStyles(type, state, theme);

  return <NatText value={text} type="body2" color={color} margin={theme.spacing.spacingNone} />;
};

export const AssistiveTexView = ({
  type,
  state,
  theme,
  text,
}) => {
  const { color } = getInputStyles(type, state, theme);

  return <NatText value={text} type="caption" color={color} margin={theme.spacing.spacingNone} />;
};

export const IconPress = styled.TouchableOpacity`
  align-self: center;
  flex: 1;
  margin-right: 5px;
`;

AssistiveTexView.propTypes = {
  state: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

Label.propTypes = {
  state: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};
