import styled from 'styled-components/native';
import {
  Theme,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getColorByName,
  getColorSuccess,
  getSpacingBySize,
} from '../../common/themeSelectors';

import { TextFieldStates } from './TextField';

const disabledStyles = (theme: Theme) => {
  const style = {
    color: getColorLowEmphasis(theme),
    borderColor: getColorLowEmphasis(theme),
    border: '1px',
  };

  return style;
};

const feedbackStyles = (theme: Theme, feedback: string) => {
  const style = {
    success: {
      color: getColorSuccess(theme),
      borderColor: getColorSuccess(theme),
      border: '2px',
    },
    error: {
      color: getColorByName(theme, 'alert'),
      borderColor: getColorByName(theme, 'alert'),
      border: '2px',
    },
  };

  return style[feedback];
};

const stateStyles = (theme: Theme, state: TextFieldStates) => {
  const style = {
    enabled: {
      color: getColorMediumEmphasis(theme),
      borderColor: getColorLowEmphasis(theme),
      border: '1px',
    },
    focus: {
      color: getColorMediumEmphasis(theme),
      borderColor: getColorPrimary(theme),
      border: '2px',
    },
    active: {
      color: getColorMediumEmphasis(theme),
      borderColor: getColorPrimary(theme),
      border: '2px',
    },
    filled: {
      color: getColorMediumEmphasis(theme),
      borderColor: getColorHighEmphasis(theme),
      border: '1px',
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
