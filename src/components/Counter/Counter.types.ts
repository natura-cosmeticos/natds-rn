import { Size } from '@naturacosmeticos/natds-themes/react-native';

export type CounterSizes = keyof Pick<Size, 'medium' | 'semiX'>;

export interface CounterProps {
  /**
   * When `true` the value of the counter is not editable.
   * @default false
   */
  disabled?: boolean;
  /**
   * When provided this shows above the counter.
   */
  label?: string,
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
