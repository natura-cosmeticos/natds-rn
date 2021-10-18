import { ReactNode } from 'react';
import { StyleProp, TextProps } from 'react-native';

export type TypographyVariants =
  'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'

export interface TypographyProps {
  /**
   * Optional ID for testing
   */
  testID?: string
  /**
   * The component content
   */
  children: ReactNode
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: StyleProp<TextProps>
  /**
   * Applies the theme typography styles.
   * @default 'heading1'
   */
  variant?: TypographyVariants
}
