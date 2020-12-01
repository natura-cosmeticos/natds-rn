/* eslint-disable max-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import styled from 'styled-components/native';
import {
  Theme,
  getColorByName,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getColorSuccess,
  getSpacingBySize,
} from '../../common/themeSelectors';

import { TextFieldStates } from './TextField';

const disabledStyles = (theme: Theme) => {
  const style = {
    border: '1px',
    borderColor: getColorLowEmphasis(theme),
    color: getColorLowEmphasis(theme),
  };

  return style;
};

const feedbackStyles = (theme: Theme, feedback: string) => {
  const style = {
    error: {
      border: '2px',
      borderColor: getColorByName(theme, 'alert'),
      color: getColorByName(theme, 'alert'),
    },
    success: {
      border: '2px',
      borderColor: getColorSuccess(theme),
      color: getColorSuccess(theme),
    },
  };

  return style[feedback];
};

const stateStyles = (theme: Theme, state: TextFieldStates) => {
  const style = {
    active: {
      border: '2px',
      borderColor: getColorPrimary(theme),
      color: getColorMediumEmphasis(theme),
    },
    enabled: {
      border: '1px',
      borderColor: getColorLowEmphasis(theme),
      color: getColorMediumEmphasis(theme),
    },
    filled: {
      border: '1px',
      borderColor: getColorHighEmphasis(theme),
      color: getColorMediumEmphasis(theme),
    },
    focus: {
      border: '2px',
      borderColor: getColorPrimary(theme),
      color: getColorMediumEmphasis(theme),
    },
  };

  return style[state];
};

const getInputStyles = (
  state: TextFieldStates,
  feedback: string | undefined,
  disabled: boolean,
  theme: Theme,
) => {
  if (disabled) {
    const style = disabledStyles(theme);

    return style;
  }

  if (feedback) {
    const style = feedbackStyles(theme, feedback);

    return style;
  }

  const style = stateStyles(theme, state);

  return style;
};

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;

  color: ${({ state, feedback, disabled, theme }) =>
    getInputStyles(state, feedback, disabled, theme).color};
`;

export const InputWrapper = styled.View`
  border: ${({ state, feedback, disabled, theme }) =>
    getInputStyles(state, feedback, disabled, theme).border};

  border-color: ${({ state, feedback, disabled, theme }) =>
    getInputStyles(state, feedback, disabled, theme).borderColor};

  padding: 0 ${({ theme, size }) => getSpacingBySize(size, theme)}px;

  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs(({ theme, disabled }) => ({
  placeholderTextColor: disabled
    ? getColorLowEmphasis(theme)
    : getColorMediumEmphasis(theme),
}))`
  font-size: 16px;
  flex: 1;
  align-self: center;

  text-align-vertical: ${({ multiline }) => (multiline ? 'top' : 'center')};
  padding-top: ${({ theme, size }) => getSpacingBySize(size, theme)}px;
  padding-bottom: ${({ theme, size }) => getSpacingBySize(size, theme)}px;

  color: ${({ theme }) => getColorHighEmphasis(theme)};
`;

export const HelperText = styled.Text`
  margin: 5px 0;
  font-size: 12px;
  height: 20px;

  color: ${({ state, feedback, disabled, theme }) =>
    getInputStyles(state, feedback, disabled, theme).color};
`;
