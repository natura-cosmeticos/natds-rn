import { IconName } from '@naturacosmeticos/natds-icons';
import { Color, Size } from '@naturacosmeticos/natds-themes/react-native';
import { Theme } from '../..';

export type IconColors = keyof Color | '#333333'
export type IconSizes = keyof Size

export interface IconProps {
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
   * Communicates the purpose of a component to the user of an assistive technology
   */
  accessibilityRole?: 'imagebutton' | 'image'
  /**
   * Icon color tokens
   */
  color?: IconColors
  /**
   * Icon name
   */
  name?: IconName
  /**
   * Icon size
   */
  size?: IconSizes
  /**
   * Optional ID for testing
   */
  testID?: string
  /**
   * The theme
   */
  theme: Theme
}
