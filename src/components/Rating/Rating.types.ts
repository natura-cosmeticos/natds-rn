import { Size } from '@naturacosmeticos/natds-themes/react-native';

export type RatingCounterSize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>
export type RatingInputSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>
export type RatingReadOnlySize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>
export type RatingValueProps = 0 | 1 | 2 | 3 | 4 | 5

export interface RatingBaseProps {
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
   * Optional ID for testing
   */
  testID?: string
}

export type RatingCounterProps = RatingBaseProps & {
  /** This attribute will bring the component arranged differently for each type.
   */
  variant: 'counter'
  /** Attribute for displaying a text.
   */
  label: string
  /** Determines the size of the icon. Sizes available: `small`, `standard`, `semi`, `semiX`
   * @default `semi`
   */
  size?: RatingCounterSize
  /** Controls the direction the text will be rendered, `left` or `right`.
   * @default `left`
   */
  align?: 'left' | 'right'
}

export type RatingInputProps = RatingBaseProps & {
  /** This attribute will bring the component arranged differently for each type.
   */
  variant: 'input'
  /** Attribute for displaying a text.
   */
  label?: string
  /** Determines the size of the icon. Sizes available: `semi`, `semiX`, `medium`.
   * @default `semi`
   */
  size?: RatingInputSize
  /** Disable to no longer clickable.
   * @default false
   */
  disabled?: boolean
  onPress: (e: any) => void
  /** Sets the amount of filled stars, range: 0 to 5
   */
  rate?: RatingValueProps
}

export type RatingReadOnlyProps = RatingBaseProps & {
  /** This attribute will bring the component arranged differently for each type.
   */
  variant: 'read-only'
  /** Determines the size of the icon. Sizes available: `small`, `standard`, `semi`, `semiX`.
   * @default `semi`
   */
  size?: RatingReadOnlySize
  /** Sets the amount of filled stars, range: 0 to 5
   */
  rate?: RatingValueProps
}

export type RatingProps = RatingCounterProps | RatingInputProps | RatingReadOnlyProps
