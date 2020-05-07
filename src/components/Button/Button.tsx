import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import {
  getTheme,
  getColorPrimary,
  getColorOnPrimary,
  getColorHighEmphasis,
  Theme,
  getButtonPropsBySize,
  getRadiusPropsBySize,
  getShadowBySize,
} from '../../common/themeSelectors';

export type ButtonTypes = 'contained' | 'outlined' | 'text'

export interface ButtonProps {
  /**
   * The button content
   */
  text: string
  type?: ButtonTypes
  theme: Theme,
  testID?: string
}

interface ButonBase {
  type: ButtonTypes
  theme: Theme
}

const getButtonStyles = (theme: Theme) => ({
  contained: {
    background: getColorPrimary(theme),
  },
  outlined: {
    borderColor: getColorPrimary(theme),
    borderWidth: 1,
  },
});

const ButtonBase = styled.TouchableOpacity<ButonBase>(({ type, theme }) => ({
  borderRadius: getRadiusPropsBySize(theme, 'medium'),
  ...getButtonStyles(theme)[type],
  ...getButtonPropsBySize(theme, 'medium'),
}));

const Text = styled.Text<ButonBase>`
color: ${
  props => (
    props.type === 'contained'
      ? getTheme(getColorOnPrimary)
      : getTheme(getColorHighEmphasis))
};
`;

const getShadowByType = (type: ButtonTypes, theme: Theme) => {
  if (type === 'contained') {
    return getShadowBySize(theme, '2');
  }

  return {};
};

const ButtonComponent = ({
  theme, text, type = 'contained', testID = 'button',
}: ButtonProps) => (
  <ButtonBase
    testID={testID}
    style={getShadowByType(type, theme)}
    type={type}
  >
    <Text type={type}>{text}</Text>
  </ButtonBase>
);

export const Button = withTheme(ButtonComponent);
