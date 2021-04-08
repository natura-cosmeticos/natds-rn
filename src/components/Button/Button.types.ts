import { IconName } from '@naturacosmeticos/natds-icons';
import { Color, Theme } from '@naturacosmeticos/natds-themes/react-native';

export type ButtonSizes = 'large' | 'medium' | 'small'
export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type IconPositions = 'left' | 'right'

export interface ButtonBaseProps extends ButtonProps {
  textColor: keyof Color
  theme: Theme
}

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
   * The icon name
   */
  iconName?: IconName,
  /**
   * Icon position relative to text label `left` | `right`
   */
  iconPosition?: IconPositions
  /**
   * The onPress event handler
   */
  onPress: () => void,
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
