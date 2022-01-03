import { StyleProp, TextStyle } from 'react-native';
import { IconName } from '@naturacosmeticos/natds-icons';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';

/**
 * @deprecated Deprecated sizes: `small` and `large`, use `semi` and `medium` instead.
 */
type ButtonSizesDeprecated = 'small' | 'large'
export type ButtonSizes = 'semi' | 'semiX' | 'medium' | ButtonSizesDeprecated

export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type IconPositions = 'left' | 'right'

export interface ButtonBaseProps extends ButtonProps {
  theme: Theme
  textLabelStyle?: StyleProp<TextStyle>
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
   * @default false
   */
  disabled?: boolean
  /**
   * Name of the icon that will be rendered on the button at the previously selected position.
   * @default undefined
   */
  iconName?: IconName,
  /**
   * Position of the icon to be rendered in relation to the label text.
   *
   * - Available positions: 'left', 'right'.
   * @default undefined
   */
  iconPosition?: IconPositions
  /**
   * Handler to be called when the user taps the button.
   */
  onPress: () => void,
  /**
  * Optional ID for testing.
  */
  testID?: string,
  /**
   * This defines the height of the button, according to corresponding theme Size token.
   *
   * - Available sizes: `semi`, `semiX`, `medium`
   *
   * #### Deprecated sizes: `small` and `large`, use `semi` and `medium` instead.
   * @default `semiX`
   */
  size?: ButtonSizes,
  /**
   * Text to display inside the button.
   * @required
   */
  text: string
  /**
   * Parameter that will determine button structure, border rendering or background color.
   *
   * - Available types: `contained`, `outlined`, `text`
   * @default `contained`
   */
  type?: ButtonTypes
}
