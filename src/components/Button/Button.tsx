/* eslint-disable max-lines */
import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { ButtonBase, ButtonSizes, ButtonTypes } from './ButtonBase';

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
   * Button sizes `large` | `medium` | `small`
   */
  size?: ButtonSizes,
  /**
   * The button text content
   */
  text: string
  /**
   * Button variants `contained` | `outlined` | `text`
   */
  type?: ButtonTypes
}

export const Button = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  onPress,
  size = 'medium',
  testID = 'button',
  text,
  type = 'contained',
}: ButtonProps) => (
  <ButtonBase
    accessibilityHint={ accessibilityHint }
    accessibilityLabel={ accessibilityLabel }
    disabled={ disabled }
    textColor='default'
    onPress={ onPress }
    testID={ testID }
    size={ size }
    text={ text }
    type={ type }
  />
);
