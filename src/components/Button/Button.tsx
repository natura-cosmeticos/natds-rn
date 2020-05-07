import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import {
  getTheme,
  getColorPrimary,
  getColorOnPrimary,
  getColorOnSecondary,
  Theme,
  getButtonPropsBySize,
  getRadiusPropsBySize,
  getShadowBySize,
} from '../../common/themeSelectors';

export type ButtonPropTypes = 'contained' | 'outlined' | 'text'

export interface ButtonProps {
  /**
   * The button content
   */
  text: string
  type?: ButtonPropTypes
  theme: Theme
}

type ButonBase = Omit<ButtonProps, 'text'>

const ButtonBase = styled.TouchableOpacity<ButonBase>(({ type, theme }) => ({
  borderRadius: getRadiusPropsBySize(theme, 'medium'),
  ...(type === 'contained' ? { background: getColorPrimary(theme) } : {}),
  ...(type === 'outlined' ? { borderColor: getColorPrimary(theme), borderWidth: 1 } : {}),
  ...getButtonPropsBySize(theme, 'medium'),
}));

const Text = styled.Text<ButonBase>`
color: ${
  props => (
    props.type === 'contained'
      ? getTheme(getColorOnPrimary)
      : getTheme(getColorOnSecondary))
};
`;

const getShadowByType = (type, theme) => {
  if (type === 'contained') {
    return getShadowBySize(theme, '2');
  }

  return {};
};

const ButtonComponent = ({ theme, text, type = 'contained' }: ButtonProps) => (
  <ButtonBase
    style={getShadowByType(type, theme)}
    type={type}
  >
    <Text type={type}>{text}</Text>
  </ButtonBase>
);

export const Button = withTheme(ButtonComponent);
