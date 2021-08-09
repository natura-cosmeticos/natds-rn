import { Size } from '@naturacosmeticos/natds-themes/react-native';

export type CounterSizes = keyof Pick<Size, 'medium' | 'semiX'>;

export interface CounterProps {
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  decrementButtonAccessibilityHint?: string,
  /**
   * An accessibility label overrides the text that's read by the screen reader when the user
   * interacts with the element. By default, the label is constructed by traversing all the
   * children and accumulating all the Text nodes separated by space.
   */
  decrementButtonAccessibilityLabel?: string,
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  incrementButtonAccessibilityHint?: string,
  /**
  * An accessibility label overrides the text that's read by the screen reader when the user
  * interacts with the element. By default, the label is constructed by traversing all the
  * children and accumulating all the Text nodes separated by space.
 */
  incrementButtonAccessibilityLabel?: string,
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  inputAccessibilityHint?: string,
  /**
  * An accessibility label overrides the text that's read by the screen reader when the user
  * interacts with the element. By default, the label is constructed by traversing all the
  * children and accumulating all the Text nodes separated by space.
 */
  inputAccessibilityLabel?: string,
  /**
   * When `true` the value of the counter is not editable.
   * @default false
   */
  disabled?: boolean,
  /**
   * When provided this shows above the counter.
   */
  label?: string,
  /**
   * Callback that is called when the text input's text changes.
   */
  onChangeText: (text: string) => void;
  /**
   * Callback that is called when the decrement button is pressed.
  */
  onDecrement: () => void,
  /**
   * Callback that is called when the increment button is pressed.
  */
  onIncrement: () => void,
  /**
   * This defines the height of the component, according to
   * corresponding theme Size token.
   * @default 'medium'
   */
  size?: CounterSizes,
  /**
   * Optional ID for testing.
   */
  testID?: string,
  /**
   * Current value of the counter.
   */
  value?: number,
}
