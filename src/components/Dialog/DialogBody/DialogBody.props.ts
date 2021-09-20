import { ReactNode } from 'react';

export interface DialogBodyProps {
  /**
   * The body content
   */
  children: ReactNode
  /**
   * The optional content divider
   */
  divider?: boolean
  /**
   * Optional ID for testing
   */
  testID?: string,
}
