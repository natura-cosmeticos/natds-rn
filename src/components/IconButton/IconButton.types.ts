import { IconName } from '@naturacosmeticos/natds-icons';
import { Theme } from '../../common/themeSelectors';

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

export type IconContainerProps = Required<Pick<IconButtonProps, 'size' | 'backgroundStyle' | 'theme' | 'disabled'>>;

export interface IconButtonProps {
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
   * Icon Button variants `primary` | `highEmphasis` | `light`
   * @deprecated - Use iconColor instead
   */
  color?: IconButtonColors,
  /**
   * Icon Button variants `primary` | `highEmphasis` | `light`
   * @default `highEmphasis`
   * @deprecated - variant `default` is deprecated, use `highEmphasis` instead
   */
  iconColor?: IconButtonColors,
  /**
   * Icon background style `none` | `float` | `overlay`
   * @default `none`
   */
  backgroundStyle?: IconButtonBackgroundStyle,
  /**
   * Disable user interaction
   * @default false
   */
  disabled?: boolean,
  /**
   * The icon name
   */
  icon?: IconName,
  /**
   * Icon Button sizes `semi` | `semiX` | `medium`;
   * @default `semi`
   * @deprecated size `small`
   */
  size?: IconButtonSizes,
  /**
   * The onPress event handler
   */
  onPress: () => void,
  /**
   * Optional ID for testing
   */
  testID?: string,
  /**
   * The button theme
   */
  theme: Theme,
}
