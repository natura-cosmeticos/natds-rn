/* eslint-disable max-lines */
import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import {
  getColorPrimary,
  getColorOnPrimary,
  getColorHighEmphasis,
  getColorMediumEmphasis,
  getColorLowEmphasis,
  getButtonPropsBySize,
  getRadiusBySize,
  getShadowBySize,
  Theme,
  getOpacity10,
  getColorPrimaryLight,
} from '../../common/themeSelectors';

export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type ButtonSizes = 'large' | 'medium' | 'small'

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
   * A disabled button is unusable and un-clickable.
   * The disabled attribute can be set to keep a user from clicking on the button until some
   * other condition has been met (like selecting a checkbox, etc.).
   */
  disabled?: boolean
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
  /**
   * Button sizes `large` | `medium` | `small`
   */
  size?: ButtonSizes,
}

const isContained = (type: ButtonTypes) => type === 'contained';

const getButtonStyles = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
  const styles = {
    contained: {
      background: disabled ? getColorLowEmphasis(theme) : getColorPrimary(theme),
    },
    outlined: {
      borderColor: disabled ? getColorMediumEmphasis(theme) : getColorPrimary(theme),
      borderWidth: 1,
    },
  };

  return styles[type];
};

const getButtonTextColor = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
  const color = {
    active: isContained(type) ? getColorOnPrimary(theme) : getColorHighEmphasis(theme),
    disabled: isContained(type) ? getColorHighEmphasis(theme) : getColorMediumEmphasis(theme),
  };

  return disabled ? color.disabled : color.active;
};

const getShadowByType = (type: ButtonTypes, disabled: boolean, theme: Theme) => (
  isContained(type) && !disabled
    ? getShadowBySize(theme, '2')
    : {}
);

const ButtonBase = styled.TouchableHighlight<{
  type: ButtonTypes
  disabled: boolean
  theme: Theme
  size: ButtonSizes
}>(({
  type, theme, disabled = false, size,
}) => ({
  ...getButtonPropsBySize(theme, size),
  ...getButtonStyles(theme, type, disabled),
  borderRadius: getRadiusBySize(theme, 'medium'),
}));

const Text = styled.Text<{
  type: ButtonTypes
  disabled: boolean
  theme: Theme
}>(({ type, theme, disabled = false }) => ({
  color: getButtonTextColor(theme, type, disabled),
  fontSize: 14,
  letterSpacing: 1,
}));

const ButtonComponent = ({
  onPress, theme, text, type = 'contained', disabled = false, testID = 'button', accessibilityLabel, accessibilityHint, size = 'medium',
}: ButtonProps) => (
  <ButtonBase
    activeOpacity={getOpacity10(theme)}
    disabled={disabled}
    onPress={disabled ? () => {} : onPress}
    size={size}
    style={getShadowByType(type, disabled, theme)}
    testID={testID}
    type={type}
    underlayColor={getColorPrimaryLight(theme)}
  >
    <Text
      style={{ fontWeight: 'bold' }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      type={type}
      disabled={disabled}
    >{text.toUpperCase()}</Text>
  </ButtonBase>
);

export const Button = withTheme(ButtonComponent);
