import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import ButtonStructure from '../../common/ButtonStructure';
import {
  getColorMediumEmphasis,
  getShadowBySize,
  getColorLowEmphasis,
  getColorPrimary,
  getRadiusBySize,
  getColorOnPrimary,
  getColorHighEmphasis,
  Theme,
} from '../../common/themeSelectors';

export type ButtonTypes = 'contained' | 'outlined' | 'text'

export interface ButtonProps {
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
   * A disabled button is unusable and un-clickable.
   * The disabled attribute can be set to keep a user from clicking on the button until some
   * other condition has been met (like selecting a checkbox, etc.).
   */
  disabled?: boolean
  /**
   * The onPress event handler
   */
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  /**
  * Optional ID for testing
  */
  testID?: string,
  /**
   * The button text content
   */
  text: string
  /**
   * The button theme
   */
  theme: Theme,
  /**
   * Button variants `contained` | `outlined` | `text`
   */
  type?: ButtonTypes
}

const isContained = (type: ButtonTypes) => type === 'contained';

const getButtonTextColor = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
  const color = {
    active: isContained(type) ? getColorOnPrimary(theme) : getColorHighEmphasis(theme),
    disabled: isContained(type) ? getColorHighEmphasis(theme) : getColorMediumEmphasis(theme),
  };

  return disabled ? color.disabled : color.active;
};

interface LabelProps {
  type: ButtonTypes
  disabled: boolean
}

const Label = styled.Text<LabelProps>`
  color: ${({ theme, type, disabled }) => getButtonTextColor(theme, type, disabled)};
  font-size: 14px;
  align-self: center;
  letter-spacing: 1px;
`;

const getShadowByType = (type: ButtonTypes, disabled: boolean, theme: Theme) => (
  isContained(type) && !disabled
    ? getShadowBySize(theme, '2')
    : {}
);

const getButtonStyles = (
  type: ButtonTypes,
  disabled: boolean,
  theme: Theme,
) => {
  const styles = {
    contained: {
      backgroundColor: disabled ? getColorLowEmphasis(theme) : getColorPrimary(theme),
    },
    outlined: {
      borderColor: disabled ? getColorMediumEmphasis(theme) : getColorPrimary(theme),
      borderWidth: 1,
    },
  };

  return styles[type];
};

const ButtonComponent = ({
  onPress,
  theme,
  text,
  type = 'contained',
  disabled = false,
  testID = 'button',
  accessibilityLabel,
  accessibilityHint,
}: ButtonProps) => (
  <ButtonStructure
    testID={testID}
    theme={theme}
    onPress={disabled ? () => {} : onPress}
    disabled={disabled}
    style={{
      ...getShadowByType(type, disabled, theme),
      ...getButtonStyles(type, disabled, theme),
      borderRadius: getRadiusBySize(theme, 'medium'),
    }}
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
  >
    <Label
      style={{ fontWeight: 'bold' }}
      type={type}
      disabled={disabled}
    >
      {text.toUpperCase()}
    </Label>
  </ButtonStructure>
);


export const Button = withTheme(ButtonComponent);
