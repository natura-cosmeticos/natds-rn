import { ReactNode } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export type LinkTypes = 'standard' | 'underline';

export interface LinkProps {
  /**
   * The content of the link.
   * @required
   */
  children: ReactNode;
  /**
   * Handler to be called when the user taps the link.
   * @required
   */
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  /**
   * Optional ID for testing
   */
  testID?: string;
  /**
   * Controls when the link should have an underline.
   *
   * - Available types: `standard`, `underline`
   * @default 'standard'
   */
  type?: LinkTypes;
}
