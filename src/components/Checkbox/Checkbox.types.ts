/* eslint-disable max-len */

/**
 * @deprecated this prop is no longer necessary as this component should always be used with the primary color.
 */
export type CheckboxColors = 'primary' | 'secondary';

export interface CheckboxProps {
  /**
   * Define what the color will be, according to the corresponding values.
   *
   * - Available colors: `primary`, `secondary`
   *
   * #### Deprecated, this prop is no longer necessary as this component should always be used with the primary color.
   * @default `primary`
   */
  color?: CheckboxColors;
  /**
   * Called when the touch is released, but not if cancelled.
   */
  onPress?: (value: string) => void;
  /**
   * Programmatically tell if the component is selected.
   * @default false
   */
  selected?: boolean;
  /**
   * Optional property that tells if the select is disabled,
   * if so, the user cannot click on this item.
   * @default false
   */
  disabled?: boolean;
  /**
   * Indeterminate checkboxes are displayed with a dash inside
   * the box, being visually different than default checkboxes.
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Optional label that appears to the right of the component,
   * if the user clicks that label, the onPress function will be called.
   */
  label?: string;
  /**
   * This value determines the identity of the component and is returned in the onPress function.
   */
  value?: string;
  /**
   * Optional testID.
   */
  testID?: string;
}
