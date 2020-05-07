import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import {
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
   * The button text content
   */
  text: string
  /**
   * Button styling types 'contained' | 'outlined' | 'text'
   */
  type?: ButtonTypes
  /**
   * The button theme
   */
  theme: Theme,
  testID?: string
}

interface ButonBase {
  type: ButtonTypes
  theme: Theme
}

const isContained = (type: ButtonTypes) => type === 'contained';

const getButtonStyles = (theme: Theme, type: ButtonTypes) => {
  const styles = {
    contained: {
      background: getColorPrimary(theme),
    },
    outlined: {
      borderColor: getColorPrimary(theme),
      borderWidth: 1,
    },
  };

  return styles[type];
};

const getButtonTextStyles = (theme: Theme, type: ButtonTypes) => (
  isContained(type)
    ? getColorOnPrimary(theme)
    : getColorHighEmphasis(theme)
);

const ButtonBase = styled.TouchableOpacity<ButonBase>(({ type, theme }) => ({
  borderRadius: getRadiusPropsBySize(theme, 'medium'),
  ...getButtonStyles(theme, type),
  ...getButtonPropsBySize(theme, 'medium'),
}));

const Text = styled.Text<ButonBase>`
  color: ${({ type, theme }) => getButtonTextStyles(theme, type)};
`;

const getShadowByType = (type: ButtonTypes, theme: Theme) => (
  isContained(type)
    ? getShadowBySize(theme, '2')
    : {}
);

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
