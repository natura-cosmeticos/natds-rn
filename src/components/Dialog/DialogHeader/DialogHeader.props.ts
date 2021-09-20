import { ReactNode } from 'react';

export interface DialogHeaderProps {
  /**
   * The header text
   */
  title: string
  /**
   * The optional header content
   */
  children?: ReactNode
  /**
   * Optional ID for testing
   */
  testID?: string,
}
