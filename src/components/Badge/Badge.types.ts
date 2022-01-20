/* eslint-disable max-len */
import { Color } from '@naturacosmeticos/natds-themes/react-native'
import { AccessibilityRole, AccessibilityValue, Animated } from 'react-native'

export type AnimationProps = {
  currentValue: Animated.Value;
  duration: number;
  toValue: number;
}

export type BadgeColors = keyof Pick<Color, 'primary' | 'secondary' | 'success' | 'alert'>

export interface BadgeBaseProps {
  /**
   * Indicates that the view is an accessibility element.
   */
  accessible?: boolean;
  /**
   * When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view.
   */
  accessibilityLabel?: string;
  /**
   * Communicates the purpose of a component to the user of an assistive technology.
   */
  accessibilityRole?: AccessibilityRole;
  /**
   * Represents the current value of a component. It can be a textual description of a component's value, or for
   * range-based components, it contains range information (minimum, current, and maximum).
   */
  accessibilityValue?: AccessibilityValue;
  /**
   * Specify the color of the Badge, from a list of available colors.
   * If no color is specified, the 'alert' color will be applied as default.
   * @default 'alert'
   */
  color?: BadgeColors;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

export type BadgePulseProps = BadgeBaseProps & {
  /**
   * Specify the variant of Badge you want to create.
   */
  variant: 'pulse';
}

export type BadgeDotProps = BadgeBaseProps & {
  /**
   * Specify the variant of Badge you want to create.
   */
  variant: 'dot';
}

export type BadgeStandardProps = BadgeBaseProps & {
  /**
   * Specify the limit of notification and when is equal or less than value,
   * will display a `+` sign next to the value. Only available for `standard` variant
   */
  limit?: number;
  /**
   * Specify the number that will be display inside the Badge.
   * Only available for `standard` variant
   */
  value: number;
  /**
   * Specify the variant of Badge you want to create.
   */
  variant: 'standard';
}

export type BadgeProps = BadgePulseProps | BadgeDotProps | BadgeStandardProps
