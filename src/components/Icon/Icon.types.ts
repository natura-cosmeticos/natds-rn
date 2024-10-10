// version lib icons 1.27.5
import { IconName } from '@naturacosmeticos/natds-icons'
import { Color, Size } from '@naturacosmeticos/natds-themes/react-native'
import { StyleProp, TextStyle } from 'react-native'
import { Theme } from '../..'

/**
 * @deprecated Use only natds-themes color tokens
 */
type IconsColorsDeprecated = 'default' | '#333333'
export type IconColors = keyof Color | IconsColorsDeprecated
export type IconSizes = keyof Size

export interface IconProps {
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
   * Communicates the purpose of a component to the user of an assistive technology
   */
  accessibilityRole?: 'imagebutton' | 'image';
  /**
   * Icon color tokens
   * #### deprecated colors: `default` and `#333333`:
   * Use natds-themes color tokens instead
   */
  color?: IconColors;
  /**
   * Icon name
   */
  name?: IconName;
  /**
   * Icon size
   */
  size?: IconSizes;
  /**
   * Optional ID for testing
   */
  testID?: string;
  /**
   * The theme
   */
  theme?: Theme;
  /**
   *
   */
  style?: StyleProp<TextStyle>;
}
