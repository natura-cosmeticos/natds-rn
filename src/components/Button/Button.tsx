import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import {
  getColorPrimary,
  getColorOnPrimary,
  getColorHighEmphasis,
  getButtonPropsBySize,
  getFont,
  getRadiusBySize,
  getShadowBySize,
  Theme,
  getOpacity10,
  getColorPrimaryLight,
} from '../../common/themeSelectors';

export type ButtonTypes = 'contained' | 'outlined' | 'text'

export interface ButtonProps {
  /**
   * The onPress event handler
   */
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  /**
   * The button text content
   */
  text: string
  /**
   * Button variants `contained` | `outlined` | `text`
   */
  type?: ButtonTypes
  /**
   * The button theme
   */
  theme: Theme,
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  accessibilityHint?: string
  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element.
   * By default, the label is constructed by traversing all the children and accumulating
   * all the Text nodes separated by space.
   */
  accessibilityLabel?: string
   /**
   * Optional ID for testing
   */
  testID?: string,
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

const ButtonBase = styled.TouchableHighlight<ButonBase>(({ type, theme }) => ({
  borderRadius: getRadiusBySize(theme, 'medium'),
  ...getButtonStyles(theme, type),
  ...getButtonPropsBySize(theme, 'medium'),
}));

const Text = styled.Text<ButonBase>`
  color: ${({ type, theme }) => getButtonTextStyles(theme, type)};
  font-size: 14px;
  align-self: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: ${getFont('bold')};
`;

const getShadowByType = (type: ButtonTypes, theme: Theme) => (
  isContained(type)
    ? getShadowBySize(theme, '2')
    : {}
);

const ButtonComponent = ({
  onPress, theme, text, type = 'contained', testID = 'button', accessibilityLabel, accessibilityHint,
}: ButtonProps) => (
  <ButtonBase
    testID={testID}
    type={type}
    onPress={onPress}
    style={getShadowByType(type, theme)}
    underlayColor={getColorPrimaryLight(theme)}
    activeOpacity={getOpacity10(theme)}
  >
    <Text
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      type={type}
    >{text.toUpperCase()}</Text>
  </ButtonBase>
);

export const Button = withTheme(ButtonComponent);
