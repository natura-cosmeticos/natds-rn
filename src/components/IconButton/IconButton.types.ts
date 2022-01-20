/* eslint-disable max-len */
import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes/react-native'
import { ReactElement } from 'react'

export interface IconButtonBaseProps {
  IconComponent: ReactElement;
  backgroundStyle?: IconButtonBackgroundStyle;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
  size?: keyof Size;
}

/**
 * @deprecated Use 'semi'
 */
export type IconButtonSizesDeprecated = 'small';
export type IconButtonSizes = 'semi' | 'semiX' | 'medium' | IconButtonSizesDeprecated;

/**
 * @deprecated Use 'highEmphasis'
 */
export type IconButtonColorsDeprecated = 'default';
export type IconButtonColors = 'primary' | 'highEmphasis' | 'light' | IconButtonColorsDeprecated;

export type IconButtonBackgroundStyle = 'none' | 'float' | 'overlay';

export type IconContainerProps = Required<Pick<IconButtonBaseProps, 'size' | 'backgroundStyle' | 'disabled'>>;

export interface IconButtonProps {
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  accessibilityHint?: string;
  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element.
   * By default, the label is constructed by traversing all the children and accumulating
   * all the Text nodes separated by space.
   */
  accessibilityLabel?: string;
  /**
   * Icon Button variants `primary` | `highEmphasis` | `light` | `default` - variant `default` is deprecated, use `highEmphasis` instead
   * @default highEmphasis
   */
  iconColor?: IconButtonColors;
  /**
   * Icon Button variants `primary` | `highEmphasis` | `light` | `default` - deprecated use iconColor instead
   * @default highEmphasis
   */
  color?: IconButtonColors;
  /**
   * Icon background style `none` | `float` | `overlay`
   * @default `none`
   */
  backgroundStyle?: IconButtonBackgroundStyle;
  /**
   * Disable user interaction
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon name
   */
  icon?: IconName;
  /**
   * Icon Button sizes `semi` | `semiX` | `medium`;
   * @default `semi`
   * @deprecated size `small`
   */
  size?: IconButtonSizes;
  /**
   * The onPress event handler
   */
  onPress: () => void;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

export const iconButtonSizesOptions: Record<IconButtonSizes, IconButtonSizes> = {
  medium: 'medium',
  semi: 'semiX',
  semiX: 'semiX',
  small: 'small'
}

export const iconButtonColorsOptions: Record<IconButtonColors, IconButtonColors> = {
  default: 'default',
  highEmphasis: 'highEmphasis',
  light: 'light',
  primary: 'primary'
}

export const iconButtonBackgroundStylesOptions: Record<
  IconButtonBackgroundStyle,
  IconButtonBackgroundStyle
> = {
  float: 'float',
  none: 'none',
  overlay: 'overlay'
}

export const iconButtonBackgroundStyles = Object
  .keys(iconButtonBackgroundStylesOptions) as Array<IconButtonBackgroundStyle>
export const iconButtonColors = Object.keys(iconButtonColorsOptions) as Array<IconButtonColors>
export const iconButtonSizes = Object.keys(iconButtonSizesOptions) as Array<IconButtonSizes>
